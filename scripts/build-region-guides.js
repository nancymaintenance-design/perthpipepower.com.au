'use strict';
const {loadCompiledModule,retired}=require('./lib/ts-compat.cjs');
if(require.main===module) retired();
const {applyGuide,regionGuides}=loadCompiledModule('site/compat.mjs');
module.exports={applyGuide,regionGuides};
