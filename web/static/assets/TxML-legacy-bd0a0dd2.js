System.register(["./loader-legacy-bf01395f.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-72c40596.js","./common-legacy-0d7df615.js","./tx_report_service-legacy-0d9815c1.js","./toasts-legacy-f5a15cc4.js","./datatable-legacy-ed9e519a.js","./index-legacy-b3d9e99f.js","./exports-legacy-81ed5c34.js","./index-legacy-7a398477.js","./his_date-legacy-f64a549a.js","./vue-datepicker-legacy-5928f51a.js","./DrilldownTable-legacy-640a9080.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-deb5b683.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,l,r,n,o,s,i,u,c,g,d;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.t},e=>{n=e.b,o=e.a},e=>{s=e.t},e=>{i=e.t},e=>{u=e.d,c=e.r,g=e.o,d=e.h},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxML",setup(e){const t=c("-"),u=c([]),p=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:r},...i(n)];async function y({dateRange:e},l=!1){try{await a.show();const r=new o;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),u.value=await r.getTxMlReport(l)}catch(r){s("ERROR! Unable to load report data"),console.error(r)}await a.hide()}function h(e){return`${e.column.label} | ${e.row.ageGroup} | ${r(e.row.gender)}s`}return(e,a)=>(g(),d(l,{title:"PEPFAR TX ML Report",subtitle:"Clients that were Alive and on treatment before the reporting period and \n    their “next appointment date / drug runout” date falls within the reporting period. \n    30 or more days have gone between their appointment date and the end of the \n    reporting period without any clinical dispensation visit","report-type":"PEPFAR",columns:p,rows:u.value,period:t.value,"drill-title":h,useDateRangeFilter:"",showIndices:"",onGenerate:y},null,8,["rows","period"]))}}))}}}));