const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('fs'),path=require('path'),crypto=require('crypto');
const baseline=require('./fixtures/service-reading-release-20261020.json');
test('style release and subsequent exact link cleanup preserve all other public artifacts',()=>{
 assert.equal(baseline.servicePages.length,52);
 const cleanup=require('./fixtures/external-links-cleanup-20261020.json');
 const navigation=require('./fixtures/navigation-release-20261021.json');
 for(const [file,before]of Object.entries(baseline.files))if(file!=='field-design.css')assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join('dist',file))).digest('hex'),require('./fixtures/leak-phone-links-release-20261024.json').afterFiles[file]||require('./fixtures/ui-layout-release-20261021.json').afterFiles[file]||require('./fixtures/customer-copy-20261021.json').afterFiles[file]||navigation.afterFiles[file]||cleanup.afterFiles[file]||before,file);
});
