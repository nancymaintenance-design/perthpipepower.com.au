const path=require('node:path');
const {defineConfig}=require('@playwright/test');
const report=path.resolve(__dirname,'../reports/content-navigation-repair-2026-10-14');
module.exports=defineConfig({testDir:'./tests/browser',testMatch:'content-navigation-repair.spec.cjs',timeout:60000,workers:1,retries:0,outputDir:path.join(report,'browser-results'),reporter:[['list'],['json',{outputFile:path.join(report,'browser-results.json')}]],use:{baseURL:'http://127.0.0.1:4189',channel:'msedge',headless:true,viewport:{width:1440,height:900},trace:'retain-on-failure'}});
