'use strict';
const {loadCompiledModule,retired}=require('./lib/ts-compat.cjs');
if(require.main===module) retired();
module.exports=loadCompiledModule('site/compat/locality.mjs');
