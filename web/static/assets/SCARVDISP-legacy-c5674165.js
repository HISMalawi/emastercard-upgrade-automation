System.register(["./loader-legacy-98dfb669.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-3c31bd3e.js","./common-legacy-0d7df615.js","./toasts-legacy-f5cd9c9b.js","./regimen_report_service-legacy-de22d577.js","./his_date-legacy-fa5a22a7.js","./index-legacy-f8d71896.js","./exports-legacy-939b994a.js","./index-legacy-0575033e.js","./vue-datepicker-legacy-e7e3eacf.js","./DrilldownTable-legacy-e5bb2e5a.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./regimens-legacy-68ba62aa.js","./report_service-legacy-c2dd3c7c.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,n,s,o,i,u,c,p;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.p},e=>{n=e.t},e=>{s=e.R},e=>{o=e.t},e=>{i=e.d,u=e.r,c=e.o,p=e.h},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",i({__name:"SCARVDISP",setup(e){const t=u("-"),i=u([]),d=[{path:"name",label:"ARV drug category"},{path:"dispensations",label:"# of bottles (units) dispensed",drillable:!0}],g=[{path:"arvNumber",label:"ARV Number",preSort:r,initialSort:!0},{path:"name",label:"Drug"},{path:"quantity",label:"Quantity"},{path:"date",label:"Date",formatter:o}];async function y({dateRange:e}){try{await a.show();const l=new s;l.setStartDate(e.startDate),l.setEndDate(e.endDate),t.value=l.getDateIntervalPeriod(),i.value=await l.getSCReport()}catch(l){n("ERROR! Unable to load report data"),console.error(l)}await a.hide()}function j(e){return`${e.row.name}`}function m(e){return e.row.dispensations.map((([e,t,a,l])=>({name:e,quantity:t,date:a,arvNumber:l})))}return(e,a)=>(c(),p(l,{title:"PEPFAR SC ARV Dispensation Report","report-type":"PEPFAR",columns:d,rows:i.value,period:t.value,customDrillColumns:g,"drill-title":j,"drill-row-parser":m,useDateRangeFilter:"",showIndices:"",onGenerate:y},null,8,["rows","period"]))}}))}}}));
