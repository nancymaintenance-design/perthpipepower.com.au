const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const script=fs.readFileSync(path.resolve(__dirname,'../navigation.js'),'utf8');
function classesFor(hostname){const classes=[];vm.runInNewContext(script,{location:{hostname},document:{documentElement:{classList:{add:name=>classes.push(name)},style:{setProperty(){}}},getElementById:()=>null,querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}},window:{addEventListener(){}}});return classes;}
test('map fallback is marked only on loopback previews and does not alter production embeds',()=>{
 for(const host of ['127.0.0.1','localhost'])assert(classesFor(host).includes('local-map-preview'),host);
 for(const host of ['perthpipepower.com.au','preview.example','127.0.0.1.example'])assert(!classesFor(host).includes('local-map-preview'),host);
});
