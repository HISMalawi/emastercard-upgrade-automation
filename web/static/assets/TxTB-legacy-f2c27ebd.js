System.register(["./loader-legacy-bf01395f.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-72c40596.js","./common-legacy-0d7df615.js","./tx_report_service-legacy-0d9815c1.js","./toasts-legacy-f5a15cc4.js","./datatable-legacy-ed9e519a.js","./index-legacy-b3d9e99f.js","./exports-legacy-81ed5c34.js","./index-legacy-7a398477.js","./his_date-legacy-f64a549a.js","./vue-datepicker-legacy-5928f51a.js","./DrilldownTable-legacy-640a9080.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-deb5b683.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,a){"use strict";var t,r,l,n,s,g,o,u,c,i,d;return{setters:[e=>{t=e.l},e=>{r=e._},e=>{l=e.t},e=>{n=e.a,s=e.c},e=>{g=e.t},e=>{o=e.t},e=>{u=e.d,c=e.r,i=e.o,d=e.h},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxTB",setup(e){const a=c("-"),u=c([]),p=new n,y=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:l},...o(s)];async function j({dateRange:e},r){try{await t.show(),p.setStartDate(e.startDate),p.setEndDate(e.endDate),a.value=p.getDateIntervalPeriod();const l=function(e){const a={M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}};return Object.entries(e).forEach((([e,t])=>{"Unknown"!==e&&Object.entries(t).forEach((([t,r])=>{const l=t;a[l].rows.push({ageGroup:e,gender:l,...r}),Object.entries(r).forEach((([e,t])=>{var r;a[l].aggregate[e]=[...null!==(r=a[l].aggregate[e])&&void 0!==r?r:[],...t]}))}))})),a}(await p.getTxTbReport(r));u.value=[...l.F.rows,...l.M.rows,{ageGroup:"All",gender:"Male",...l.M.aggregate},...await p.buildMaternityAgreggateRows(l.F.aggregate)]}catch(l){g("ERROR! Unable to load report data"),console.error(l)}await t.hide()}function w(e){return`${e.column.label} | ${e.row.ageGroup} | ${l(e.row.gender)}s`}return(e,t)=>(i(),d(r,{title:"PEPFAR TX TB Report","report-type":"PEPFAR",columns:y,rows:u.value,period:a.value,"drill-title":w,useDateRangeFilter:"",showIndices:"",onGenerate:j},null,8,["rows","period"]))}}))}}}));