System.register(["./loader-legacy-3c24c91b.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-1fdbf4fd.js","./disagregated_report_service-legacy-86437233.js","./regimens-legacy-68ba62aa.js","./common-legacy-0d7df615.js","./toasts-legacy-3ebefc85.js","./index-legacy-5e2e9988.js","./exports-legacy-357034ad.js","./index-legacy-23ffa7c9.js","./his_date-legacy-68b7a348.js","./vue-datepicker-legacy-f21b02bd.js","./DrilldownTable-legacy-8b04591a.js","./arrays-legacy-e3b1d86b.js","./age_groups-legacy-5143fd58.js","./program_report_service-legacy-6ab0ae0b.js","./report_service-legacy-44262c03.js","./url-legacy-2d97b2db.js"],(function(e,l){"use strict";var a,r,t,n,s,o,g,c,u,i;return{setters:[e=>{a=e.l},e=>{r=e._},e=>{t=e.D},e=>{n=e.R},e=>{s=e.t},e=>{o=e.t},e=>{g=e.d,c=e.r,u=e.o,i=e.j},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",g({__name:"DisagreggatedReport",setup(e){const l=c("-"),g=c([]),p=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:s},{path:"tx_curr",label:"TX curr (receiving ART)",drillable:!0},...n.map((e=>({path:e,label:e,drillable:!0}))),{path:"unknown",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],d=async({dateRange:e})=>{try{await a.show();const r=new t;r.setStartDate(e.startDate),r.setEndDate(e.endDate),l.value=r.getDateIntervalPeriod(),g.value=await r.getDisaggReport(!0,"pepfar")}catch(r){console.error(r),o("Error! Unable to generate report")}a.hide()};function y(e){return`${e.row.age_group} | ${e.column.label} | ${s(e.row.gender)}s`}return(e,a)=>(u(),i(r,{title:"PEPFAR Disaggregated Report","report-type":"PEPFAR",columns:p,rows:g.value,period:l.value,"drill-title":y,useDateRangeFilter:"",showIndices:"",onGenerate:d},null,8,["rows","period"]))}}))}}}));
