System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./tx_report_service-legacy-c9618147.js","./toasts-legacy-ec8222ac.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./report_service-legacy-a06c1924.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,r,n,l,s,o,i,u,d,c,g;return{setters:[e=>{a=e.l},e=>{r=e.t,n=e._},e=>{l=e.T,s=e.a},e=>{o=e.c,i=e.t},e=>{u=e.d,d=e.r,c=e.o,g=e.h},null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxCurrMMD",setup(e){const t=d("-"),u=d([]),p=[{path:"ageGroup",label:"Age group",thStyles:{minWidth:"150px !important"}},{path:"gender",label:"Gender",formatter:o,thStyles:{minWidth:"110px !important"}},...r(l,{thStyles:{minWidth:"350px !important"}})];async function y({dateRange:e},r){try{await a.show();const n=new s;n.setStartDate(e.startDate),n.setEndDate(e.endDate),t.value=n.getDateIntervalPeriod(),u.value=await n.getTxCurrMMDReport(r)}catch(n){i("ERROR! Unable to load report data"),console.error(n)}await a.hide()}function h(e){return`${e.row.ageGroup} | ${e.column.label} | ${o(e.row.gender)}s`}return(e,a)=>(c(),g(n,{title:"PEPFAR TX CURR MMD Report",subtitle:"Clients that are alive and on treatment in the reporting period and the difference in days between their clinical dispensation visit and \n      next appointment / drug-runout date is: 3 months (1 - 89 days), 3 - 5 months (90 - 179 days), 6+ months (180 or more days)","report-type":"PEPFAR",columns:p,rows:u.value,period:t.value,"drill-title":h,useDateRangeFilter:"",showIndices:"",onGenerate:y},null,8,["rows","period"]))}}))}}}));