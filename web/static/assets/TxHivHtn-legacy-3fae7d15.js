System.register(["./loader-legacy-36bb8381.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e8763834.js","./common-legacy-0d7df615.js","./tx_report_service-legacy-0e7b56c6.js","./toasts-legacy-7aec6fbc.js","./index-legacy-e369fbcb.js","./exports-legacy-452f90b0.js","./index-legacy-2a958dcc.js","./his_date-legacy-a9d1dd77.js","./vue-datepicker-legacy-fe17f076.js","./DrilldownTable-legacy-07adab3f.js","./arrays-legacy-4be31994.js","./report_service-legacy-72897734.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,l,r,n,s,o,u,c,g,i,d;return{setters:[e=>{a=e.l},e=>{l=e.t,r=e._},e=>{n=e.t},e=>{s=e.d,o=e.a},e=>{u=e.t},e=>{c=e.d,g=e.r,i=e.o,d=e.j},null,null,null,null,null,null,null,null,null],execute:function(){e("default",c({__name:"TxHivHtn",setup(e){const t=g("-"),c=g([]),y=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:n},...l(s)];async function p({dateRange:e},l=!1){try{await a.show();const r=new o;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),c.value=await r.getTxHivHtnReport(l)}catch(r){u("ERROR! Unable to load report data"),console.error(r)}await a.hide()}function j(e){return`${e.column.label} | ${e.row.ageGroup} | ${n(e.row.gender)}s`}return(e,a)=>(i(),d(r,{title:"PEPFAR TX HIV HTN Report","report-type":"PEPFAR",columns:y,rows:c.value,period:t.value,"drill-title":j,useDateRangeFilter:"",showIndices:"",onGenerate:p},null,8,["rows","period"]))}}))}}}));
