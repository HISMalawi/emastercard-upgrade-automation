System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./tx_report_service-legacy-c9618147.js","./toasts-legacy-ec8222ac.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./report_service-legacy-a06c1924.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,r,l,n,s,o,i,u,d,c,p;return{setters:[e=>{a=e.l},e=>{r=e.t,l=e._},e=>{n=e.a,s=e.T},e=>{o=e.c,i=e.t},e=>{u=e.d,d=e.r,c=e.o,p=e.h},null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxCurrMMD",setup(e){const t=d("-"),u=d([]),g=new n,y=[{path:"ageGroup",label:"Age group",thStyles:{minWidth:"150px !important"}},{path:"gender",label:"Gender",formatter:o,thStyles:{minWidth:"110px !important"}},...r(s,{thStyles:{minWidth:"350px !important"}})];async function h({dateRange:e},r){try{await a.show(),g.setReportType("moh"),g.setStartDate(e.startDate),g.setEndDate(e.endDate),t.value=g.getDateIntervalPeriod(),u.value=await g.getTxCurrMMDReport(r)}catch(l){i("ERROR! Unable to load report data"),console.error(l)}await a.hide()}function m(e){return`${e.row.ageGroup} | ${e.column.label} | ${e.row.gender}s`}return(e,a)=>(c(),p(l,{title:"MoH TX CURR MMD Report",subtitle:"Clients that are alive and on treatment in the reporting period and the difference in days between their clinical dispensation visit and \n      next appointment / drug-runout date is: 3 months (1 - 89 days), 3-5 months (90-179 days), 6+ months (180 or more days)","report-type":"MoH",columns:y,rows:u.value,period:t.value,"drill-title":m,useDateRangeFilter:"",showIndices:"",onGenerate:h},null,8,["rows","period"]))}}))}}}));
