System.register(["./loader-legacy-f347fc88.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-d8593fa2.js","./common-legacy-0d7df615.js","./toasts-legacy-afa94957.js","./his_date-legacy-7de90fb0.js","./regimen_report_service-legacy-59e781ea.js","./index-legacy-cff29faf.js","./exports-legacy-73355800.js","./index-legacy-312feaf7.js","./vue-datepicker-legacy-92de4125.js","./DrilldownTable-legacy-94937be9.js","./arrays-legacy-4be31994.js","./regimens-legacy-68ba62aa.js","./report_service-legacy-00ed2364.js","./url-legacy-2d97b2db.js"],(function(e,a){"use strict";var t,l,r,s,n,o,i,c,u,p;return{setters:[e=>{t=e.l},e=>{l=e._},e=>{r=e.t},e=>{s=e.t},e=>{n=e.t},e=>{o=e.R},e=>{i=e.d,c=e.r,u=e.o,p=e.j},null,null,null,null,null,null,null,null],execute:function(){e("default",i({__name:"RegimenReport",setup(e){const a=c("-"),i=c([]),g=[{path:"identifier",label:"ARV#"},{path:"gender",label:"Gender",formatter:r},{path:"dob",label:"DOB",formatter:n},{path:"drugName",label:"Drug Name"},{path:"dispensationDate",label:"Date",formatter:n},{path:"packSize",label:"Pack size"},{path:"packSizes",label:"Total pack"},{path:"quantity",label:"Total pills"},{path:"vlResult",label:"Latest VL result"},{path:"vlResultDate",label:"Latest VL date",formatter:n}];async function d({dateRange:e},l=!1){try{await t.show();const r=new o;r.setStartDate(e.startDate),r.setEndDate(e.endDate),a.value=r.getDateIntervalPeriod(),i.value=await r.getRegimenDispensationReport(l)}catch(r){s("ERROR! Unable to load report data"),console.error(r)}await t.hide()}return(e,t)=>(u(),p(l,{title:"Moh Regimen Report","report-type":"MoH",useDateRangeFilter:"",showIndices:"",columns:g,rows:i.value,period:a.value,onGenerate:d},null,8,["rows","period"]))}}))}}}));
