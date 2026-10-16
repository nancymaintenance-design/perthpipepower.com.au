const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm');
test('Chinese form validation is localized without calling the mail endpoint',async()=>{
 const listeners={},status={id:'status'},fields=Object.fromEntries(['name','phone','email','address','message'].map(n=>[n,{validity:{valid:false},setAttribute(){},focus(){this.focused=true}}]));
 const button={};
 const form={querySelector:s=>s==='.form-status'?status:button,elements:{namedItem:n=>fields[n]},addEventListener:(n,f)=>listeners[n]=f};
 let calls=0;
 vm.runInNewContext(fs.readFileSync('contact-form.js','utf8'),{document:{documentElement:{lang:'zh-Hans'},querySelector:()=>form},FormData:class{*[Symbol.iterator](){for(const n of Object.keys(fields))yield [n,'']}},fetch:()=>{calls++;throw new Error('Network forbidden')}});
 await listeners.submit({preventDefault(){}});
 assert.match(status.textContent,/请.*必填.*邮箱/);assert.equal(calls,0);assert.equal(fields.name.focused,true);
});
