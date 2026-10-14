'use strict';
const {loadCompiledModule,retired}=require('./lib/ts-compat.cjs');
if(require.main===module) retired();
const {buildExpandedServices}=loadCompiledModule('site/compat.mjs');
module.exports={buildExpandedServices};
