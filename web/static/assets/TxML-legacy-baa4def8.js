System.register(["./loader-legacy-61800ad3.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-a2bdce8d.js","./common-legacy-0d7df615.js","./tx_report_service-legacy-8853a36d.js","./toasts-legacy-ce48abc6.js","./index-legacy-2d6958b4.js","./exports-legacy-afecb6b7.js","./index-legacy-728fa8e9.js","./his_date-legacy-70b43096.js","./vue-datepicker-legacy-64b30e6f.js","./DrilldownTable-legacy-e1e21b40.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-a3c5dfb2.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,r,l,n,o,s,i,u,c,d,g;return{setters:[e=>{a=e.l},e=>{r=e.t,l=e._},e=>{n=e.t},e=>{o=e.b,s=e.a},e=>{i=e.t},e=>{u=e.d,c=e.r,d=e.o,g=e.j},null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxML",setup(e){const t=c("-"),u=c([]),p=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:n},...r(o)];async function y({dateRange:e},r=!1){try{await a.show();const l=new s;l.setStartDate(e.startDate),l.setEndDate(e.endDate),t.value=l.getDateIntervalPeriod(),u.value=await l.getTxMlReport(r)}catch(l){i("ERROR! Unable to load report data"),console.error(l)}await a.hide()}function h(e){return`${e.column.label} | ${e.row.ageGroup} | ${n(e.row.gender)}s`}return(e,a)=>(d(),g(l,{title:"PEPFAR TX ML Report",subtitle:"Clients that were Alive and on treatment before the reporting period and \n    their “next appointment date / drug runout” date falls within the reporting period. \n    30 or more days have gone between their appointment date and the end of the \n    reporting period without any clinical dispensation visit","report-type":"PEPFAR",columns:p,rows:u.value,period:t.value,"drill-title":h,useDateRangeFilter:"",showIndices:"",onGenerate:y},null,8,["rows","period"]))}}))}}}));
