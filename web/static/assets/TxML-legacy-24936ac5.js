System.register(["./loader-legacy-3c24c91b.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-1fdbf4fd.js","./common-legacy-0d7df615.js","./tx_report_service-legacy-f6a127f0.js","./toasts-legacy-3ebefc85.js","./index-legacy-5e2e9988.js","./exports-legacy-357034ad.js","./index-legacy-23ffa7c9.js","./his_date-legacy-68b7a348.js","./vue-datepicker-legacy-f21b02bd.js","./DrilldownTable-legacy-8b04591a.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-44262c03.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,r,l,n,o,s,i,u,c,d,g;return{setters:[e=>{a=e.l},e=>{r=e.t,l=e._},e=>{n=e.t},e=>{o=e.b,s=e.a},e=>{i=e.t},e=>{u=e.d,c=e.r,d=e.o,g=e.j},null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxML",setup(e){const t=c("-"),u=c([]),p=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:n},...r(o)];async function y({dateRange:e},r=!1){try{await a.show();const l=new s;l.setStartDate(e.startDate),l.setEndDate(e.endDate),t.value=l.getDateIntervalPeriod(),u.value=await l.getTxMlReport(r)}catch(l){i("ERROR! Unable to load report data"),console.error(l)}await a.hide()}function h(e){return`${e.column.label} | ${e.row.ageGroup} | ${n(e.row.gender)}s`}return(e,a)=>(d(),g(l,{title:"PEPFAR TX ML Report",subtitle:"Clients that were Alive and on treatment before the reporting period and \n    their “next appointment date / drug runout” date falls within the reporting period. \n    30 or more days have gone between their appointment date and the end of the \n    reporting period without any clinical dispensation visit","report-type":"PEPFAR",columns:p,rows:u.value,period:t.value,"drill-title":h,useDateRangeFilter:"",showIndices:"",onGenerate:y},null,8,["rows","period"]))}}))}}}));
