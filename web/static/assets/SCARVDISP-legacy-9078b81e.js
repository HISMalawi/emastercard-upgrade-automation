System.register(["./loader-legacy-bf01395f.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-72c40596.js","./common-legacy-0d7df615.js","./toasts-legacy-f5a15cc4.js","./regimen_report_service-legacy-70511bdc.js","./his_date-legacy-f64a549a.js","./index-legacy-b3d9e99f.js","./exports-legacy-81ed5c34.js","./index-legacy-7a398477.js","./vue-datepicker-legacy-5928f51a.js","./DrilldownTable-legacy-640a9080.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./regimens-legacy-68ba62aa.js","./report_service-legacy-deb5b683.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,n,s,o,u,i,c,p;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.p},e=>{n=e.t},e=>{s=e.R},e=>{o=e.t},e=>{u=e.d,i=e.r,c=e.o,p=e.h},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"SCARVDISP",setup(e){const t=i("-"),u=i([]),g=[{path:"name",label:"ARV drug category"},{path:"dispensations",label:"# of bottles (units) dispensed",drillable:!0}],d=[{path:"arvNumber",label:"ARV Number",preSort:r,initialSort:!0},{path:"name",label:"Drug"},{path:"quantity",label:"Quantity"},{path:"date",label:"Date",formatter:o}];async function y({dateRange:e}){try{await a.show();const l=new s;l.setStartDate(e.startDate),l.setEndDate(e.endDate),t.value=l.getDateIntervalPeriod(),u.value=await l.getSCReport()}catch(l){n("ERROR! Unable to load report data"),console.error(l)}await a.hide()}function j(e){return`${e.row.name}`}function m(e){return e.row.dispensations.map((([e,t,a,l])=>({name:e,quantity:t,date:a,arvNumber:l})))}return(e,a)=>(c(),p(l,{title:"PEPFAR SC ARV Dispensation Report","report-type":"PEPFAR",columns:g,rows:u.value,period:t.value,customDrillColumns:d,"drill-title":j,"drill-row-parser":m,useDateRangeFilter:"",showIndices:"",onGenerate:y},null,8,["rows","period"]))}}))}}}));