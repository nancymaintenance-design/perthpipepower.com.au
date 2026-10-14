const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const script=fs.readFileSync(path.resolve(__dirname,'../navigation.js'),'utf8');
function classesFor(hostname){const classes=[];vm.runInNewContext(script,{location:{hostname},document:{documentElement:{classList:{add:name=>classes.push(name)},style:{setProperty(){}}},getElementById:()=>null,querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},window:{addEventListener(){}}});return classes;}
test('shared navigation initializes without hiding maps on local or public hosts',()=>{
 for(const host of ['127.0.0.1','localhost','perthpipepower.com.au','preview.example','127.0.0.1.example']){
  const classes=classesFor(host);assert(classes.includes('nav-enhanced'),host);assert(!classes.includes('local-map-preview'),host);
 }
});
