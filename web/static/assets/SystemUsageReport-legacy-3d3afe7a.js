System.register(["./loader-legacy-1ef95e57.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-68c74ebf.js","./toasts-legacy-35f2c029.js","./his_date-legacy-31ba5787.js","./report_service-legacy-e5f1ad0c.js","./index-legacy-084a8278.js","./exports-legacy-ab860f03.js","./index-legacy-a5979f3c.js","./vue-datepicker-legacy-828e9dbd.js","./common-legacy-0d7df615.js","./DrilldownTable-legacy-e4e75503.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,s,n,o,u,c,g;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.t},e=>{s=e.t},e=>{n=e.R},e=>{o=e.d,u=e.r,c=e.g,g=e.o},null,null,null,null,null,null,null,null,null],execute:function(){e("default",o({__name:"SystemUsageReport",setup(e){const t=u(""),o=u([]),i=[{path:"given_name",label:"First name"},{path:"family_name",label:"Last name"},{path:"role",label:"Role"},{path:"registered_on",label:"Registered on",formatter:s},{path:"encounters",label:"Encounters Created"}];async function d({dateRange:e}){try{var l;a.show();const r=new n;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),o.value=null!==(l=await r.getReport("user_system_usage"))&&void 0!==l?l:[]}catch(s){r("Failed to load report data"),console.error(s)}a.hide()}return(e,a)=>(g(),c(l,{title:"User System Usage Report","report-icon":"reports/line-chart.png",columns:i,rows:o.value,period:t.value,"use-date-range-filter":"",onGenerate:d},null,8,["rows","period"]))}}))}}}));
