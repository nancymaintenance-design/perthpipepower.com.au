const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),vm=require('vm');
test('one breadcrumb event uses sanitized language paths, is not a lead, and survives repeated script loading',()=>{
 const events=[],handlers=[];
 const trail={getAttribute:k=>k==='data-owner-id'?'water-leak-detection-perth.html':null};
 const link={getAttribute:k=>k==='href'?'https://perthpipepower.com.au/zh/plumbing.html':k==='data-breadcrumb-position'?'2':null,closest:()=>trail};
 const context={URL,window:{gtag:(...args)=>events.push(args)},location:{origin:'https://perthpipepower.com.au',pathname:'/zh/water-leak-detection-perth.html',search:'?email=private@example.test'},document:{baseURI:'https://perthpipepower.com.au/zh/water-leak-detection-perth.html?email=private@example.test',documentElement:{lang:'zh-Hans'},addEventListener:(_event,fn)=>handlers.push(fn)}};
 vm.createContext(context);const source=fs.readFileSync('conversion-events.js','utf8');vm.runInContext(source,context);vm.runInContext(source,context);
 assert.equal(handlers.length,1);
 handlers[0]({target:{closest:()=>link}});
 assert.equal(events.length,1);assert.equal(events[0][1],'breadcrumb_click');
 assert.deepEqual(JSON.parse(JSON.stringify(events[0][2])),{source_path:'/zh/water-leak-detection-perth.html',target_path:'/zh/plumbing.html',locale:'zh-Hans',position:2,owner_id:'water-leak-detection-perth.html'});
 assert(!JSON.stringify(events).includes('private'));
});
