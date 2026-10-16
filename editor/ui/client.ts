export {};
interface Field{id:string;value:string;kind:string;locked:boolean;sourcePath:string}
interface Draft{revision:number;changes:Record<string,string>;updatedAt:string;baseHash:string}
interface PageResult{pageId:string;baseHash:string;fields:Field[];draft:Draft|null}
const element=<T extends HTMLElement>(id:string)=>document.getElementById(id) as T;
const pages=element<HTMLSelectElement>('page'),fieldSelect=element<HTMLSelectElement>('field'),text=element<HTMLTextAreaElement>('translation'),frame=element<HTMLIFrameElement>('preview'),save=element<HTMLButtonElement>('save'),reload=element<HTMLButtonElement>('reload'),status=element<HTMLParagraphElement>('status'),dialog=element<HTMLDialogElement>('unsaved');
let token='',page:PageResult|null=null,changes:Record<string,string>={},dirty=false,busy=false,selected='',generation=0,composing=false;
function message(value:string,error=false){status.textContent=value;status.dataset.error=String(error);}
function controls(){save.disabled=!dirty||busy||composing;save.textContent=busy?'正在保存…':'保存中文草稿';save.setAttribute('aria-busy',String(busy));pages.disabled=busy;reload.disabled=busy;text.disabled=busy||!selected;fieldSelect.disabled=busy;}
async function api<T>(path:string,init:RequestInit={}):Promise<T>{const response=await fetch('/__editor/api/'+path,{...init,headers:{'x-editor-token':token,...init.headers}});const result=await response.json();if(!response.ok)throw new Error(result.error??'本地服务不可用，请重试');return result as T;}
function choose(id:string){if(!page)return;const field=page.fields.find(f=>f.id===id&&!f.locked);if(!field)return;selected=id;fieldSelect.value=id;element('original').textContent=field.value;text.value=changes[id]??'';text.placeholder='尚未翻译，请输入中文草稿';controls();}
async function refreshPreview(current:number){if(!page)return;const result=await fetch('/__editor/api/preview/'+encodeURIComponent(page.pageId),{headers:{'x-editor-token':token}});if(!result.ok)throw new Error('预览读取失败，可重新载入；草稿未丢失');const html=await result.text();if(current===generation)frame.srcdoc=html;}
async function load(pageId:string){const current=++generation;busy=true;controls();message('正在读取草稿…');try{
 const result=await api<PageResult>('draft/'+encodeURIComponent(pageId));if(current!==generation)return;page=result;changes={...result.draft?.changes};dirty=false;selected='';
 fieldSelect.replaceChildren();for(const field of result.fields.filter(f=>!f.locked)){const option=document.createElement('option');option.value=field.id;option.textContent=(field.kind==='seoTitle'?'SEO 标题：':field.kind==='seoDescription'?'SEO 描述：':'')+field.value.slice(0,75);fieldSelect.append(option);}
 choose(fieldSelect.options[0]?.value??'');await refreshPreview(current);document.title='编辑：'+pages.selectedOptions[0].textContent+' — 本地中文草稿';revision();message(result.draft?'已载入本地草稿。编辑后请保存；英文尚未同步。':'本页尚无中文草稿。未翻译文字保留英文供参照。');
 }catch(error){message((error as Error).message,true);}finally{if(current===generation){busy=false;controls();}}}
function revision(){if(!page)return;const count=Object.keys(changes).length,total=page.fields.filter(f=>!f.locked).length;element('revision').textContent=`中文草稿 ${count}/${total} 个开放字段 · 修订 ${page.draft?.revision??0} · 待英文同步与审核`;}
function permit():Promise<boolean>{if(!dirty)return Promise.resolve(true);dialog.showModal();element('keep').focus();return new Promise(resolve=>{
 const finish=(value:boolean)=>{dialog.close();element('keep').removeEventListener('click',keep);element('discard').removeEventListener('click',discard);dialog.removeEventListener('cancel',cancel);resolve(value);};
 const keep=()=>finish(false),discard=()=>finish(true),cancel=(event:Event)=>{event.preventDefault();finish(false);};element('keep').addEventListener('click',keep);element('discard').addEventListener('click',discard);dialog.addEventListener('cancel',cancel);
 });}
pages.addEventListener('change',async()=>{const next=pages.value,previous=page?.pageId;if(await permit())await load(next);else if(previous)pages.value=previous;});
reload.addEventListener('click',async()=>{if(await permit())await load(page?.pageId??pages.value);});
fieldSelect.addEventListener('change',()=>choose(fieldSelect.value));
text.addEventListener('compositionstart',()=>{composing=true;controls();});text.addEventListener('compositionend',()=>{composing=false;controls();});
text.addEventListener('input',()=>{if(!selected)return;if(text.value==='')delete changes[selected];else changes[selected]=text.value;dirty=true;revision();controls();message('有未保存的中文编辑。');});
window.addEventListener('message',event=>{if(event.source!==frame.contentWindow||event.origin!==location.origin||event.data?.type!=='editor-field')return;choose(event.data.id);text.focus();});
window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue='';}});
element<HTMLFormElement>('edit-form').addEventListener('submit',async event=>{event.preventDefault();if(!page||busy||!dirty||composing)return;busy=true;controls();message('正在保存到本地…');try{
 const draft=await api<Draft>('draft/'+encodeURIComponent(page.pageId),{method:'PUT',headers:{'content-type':'application/json'},body:JSON.stringify({expectedRevision:page.draft?.revision??0,baseHash:page.baseHash,changes})});page.draft=draft;dirty=false;revision();await refreshPreview(generation);message(`已保存中文草稿 · 修订 ${draft.revision}。未修改英文、未发布。`);
 }catch(error){message((error as Error).message+'；当前文字已保留。',true);}finally{busy=false;controls();}});
async function init(){try{token=(await api<{token:string}>('session')).token;const list=await api<{pageId:string;title:string}[]>('pages');pages.replaceChildren();for(const item of list){const option=document.createElement('option');option.value=item.pageId;option.textContent=item.pageId+' · '+item.title;pages.append(option);}pages.value='index.html';await load(pages.value);}catch(error){message((error as Error).message+'，请刷新重试。',true);reload.disabled=false;}}
void init();
