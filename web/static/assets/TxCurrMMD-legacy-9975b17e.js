System.register(["./loader-legacy-1ef95e57.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-68c74ebf.js","./tx_report_service-legacy-93f6cbcb.js","./toasts-legacy-35f2c029.js","./common-legacy-0d7df615.js","./index-legacy-084a8278.js","./exports-legacy-ab860f03.js","./index-legacy-a5979f3c.js","./his_date-legacy-31ba5787.js","./vue-datepicker-legacy-828e9dbd.js","./DrilldownTable-legacy-e4e75503.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-e5f1ad0c.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,l,r,n,s,o,i,u,d,c,g;return{setters:[e=>{a=e.l},e=>{l=e.t,r=e._},e=>{n=e.a,s=e.T},e=>{o=e.t},e=>{i=e.t},e=>{u=e.d,d=e.r,c=e.o,g=e.g},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxCurrMMD",setup(e){const t=d("-"),u=d([]),p=new n,y=[{path:"ageGroup",label:"Age group",thStyles:{minWidth:"150px !important"}},{path:"gender",label:"Gender",formatter:i,thStyles:{minWidth:"110px !important"}},...l(s,{thStyles:{minWidth:"350px !important"}})];async function h({dateRange:e},l){try{await a.show(),p.setReportType("moh"),p.setStartDate(e.startDate),p.setEndDate(e.endDate),t.value=p.getDateIntervalPeriod(),u.value=await p.getTxCurrMMDReport(l)}catch(r){o("ERROR! Unable to load report data"),console.error(r)}await a.hide()}function m(e){return`${e.row.ageGroup} | ${e.column.label} | ${e.row.gender}s`}return(e,a)=>(c(),g(r,{title:"MoH TX CURR MMD Report",subtitle:"Clients that are alive and on treatment in the reporting period and the difference in days between their clinical dispensation visit and \n      next appointment / drug-runout date is: 3 months (1 - 89 days), 3-5 months (90-179 days), 6+ months (180 or more days)","report-type":"MoH",columns:y,rows:u.value,period:t.value,"drill-title":m,useDateRangeFilter:"",showIndices:"",onGenerate:h},null,8,["rows","period"]))}}))}}}));
