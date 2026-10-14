'use strict';
const {loadCompiledModule,retired}=require('./lib/ts-compat.cjs');
if(require.main===module) retired();
const {applySiteContent,applySiteContentFixture}=loadCompiledModule('site/compat.mjs');
module.exports={applySiteContent,applySiteContentFixture};
