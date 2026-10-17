/** Local file workflow only: no online translation, Git, deploy or email. */
import {readFile} from 'node:fs/promises';
import {join} from 'node:path';
import {exportChanges,saveEnglishProposal} from './workflow.mjs';
const [command,pageId,file]=process.argv.slice(2),root=join(process.cwd(),'.local-editor','drafts');
if(command==='export'&&pageId&&!file)console.log(JSON.stringify(await exportChanges(root,pageId),null,2));
else if(command==='proposal'&&pageId&&file){const input=JSON.parse(await readFile(file,'utf8'));if(input.pageId!==pageId)throw Error('提案页面不匹配');await saveEnglishProposal(root,input);console.log('英文提案已保存在本机，请查看后台中英文对照。未部署。');}
else throw Error('Usage: cli.mjs export <page.html> | proposal <page.html> <proposal.json>');
