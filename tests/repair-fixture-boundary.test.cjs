const {test}=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const source=path.resolve(__dirname,'..'),root=path.resolve(source,'../reports/content-navigation-repair-2026-10-14'),historical=path.resolve(source,'../reports/typescript-migration-2026-10-13');
test('named current report fixture is accepted while parent and neighbouring report scopes are rejected',t=>{
 const parent=path.join(root,'test-temp');fs.mkdirSync(parent,{recursive:true});const fixture=fs.mkdtempSync(path.join(parent,'guard-'));t.after(()=>fs.rmSync(fixture,{recursive:true,force:true}));
 const {fixtureRoot}=require('../.build/site/compat.mjs'),{checkRoots}=require('../.build/site/build/copy-assets.mjs');
 assert.equal(fixtureRoot(fixture),fixture);
 assert.equal(checkRoots(fixture,path.join(fixture,'output')).sourceRoot,fixture);
 for(const denied of [root,parent,path.dirname(root),source,path.join(source,'dist'),path.resolve(root,'../unapproved-report/test-temp/case'),path.resolve(source,'../../Perth Roof Care/reports/content-navigation-repair-2026-10-14/test-temp/case')])assert.throws(()=>fixtureRoot(denied),/isolated report fixture/);
 const oldParent=path.join(historical,'test-temp');fs.mkdirSync(oldParent,{recursive:true});const old=fs.mkdtempSync(path.join(oldParent,'guard-'));t.after(()=>fs.rmSync(old,{recursive:true,force:true}));assert.equal(fixtureRoot(old),old,'historical contract remains accepted');
});
test('named report fixture refuses physical junctions, shared files and type conflicts',t=>{
 const parent=path.join(root,'test-temp');fs.mkdirSync(parent,{recursive:true});const dir=fs.mkdtempSync(path.join(parent,'physical-'));t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
 const {fixtureRoot,buildExpandedServices}=require('../.build/site/compat.mjs');
 const actual=path.join(dir,'actual');fs.mkdirSync(actual);const junction=path.join(dir,'junction');fs.symlinkSync(actual,junction,'junction');assert.throws(()=>fixtureRoot(junction),/junction|symbolic/i);
 const file=path.join(dir,'file');fs.writeFileSync(file,'fixture');assert.throws(()=>fixtureRoot(file),/directory/);
 const linked=path.join(actual,'power-points-perth.html');fs.linkSync(file,linked);assert.throws(()=>buildExpandedServices(actual),/hard.link/i);assert.equal(fs.readFileSync(file,'utf8'),'fixture');
});
