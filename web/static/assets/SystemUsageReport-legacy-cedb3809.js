System.register(["./loader-legacy-3c24c91b.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-1fdbf4fd.js","./toasts-legacy-3ebefc85.js","./his_date-legacy-68b7a348.js","./report_service-legacy-44262c03.js","./index-legacy-5e2e9988.js","./exports-legacy-357034ad.js","./index-legacy-23ffa7c9.js","./vue-datepicker-legacy-f21b02bd.js","./common-legacy-0d7df615.js","./DrilldownTable-legacy-8b04591a.js","./arrays-legacy-e3b1d86b.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,s,n,o,c,u,i;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.t},e=>{s=e.t},e=>{n=e.R},e=>{o=e.d,c=e.r,u=e.j,i=e.o},null,null,null,null,null,null,null],execute:function(){e("default",o({__name:"SystemUsageReport",setup(e){const t=c(""),o=c([]),g=[{path:"given_name",label:"First name"},{path:"family_name",label:"Last name"},{path:"role",label:"Role"},{path:"registered_on",label:"Registered on",formatter:s},{path:"encounters",label:"Encounters Created"}];async function d({dateRange:e}){try{var l;a.show();const r=new n;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),o.value=null!==(l=await r.getReport("user_system_usage"))&&void 0!==l?l:[]}catch(s){r("Failed to load report data"),console.error(s)}a.hide()}return(e,a)=>(i(),u(l,{title:"User System Usage Report","report-icon":"reports/line-chart.png",columns:g,rows:o.value,period:t.value,"use-date-range-filter":"",onGenerate:d},null,8,["rows","period"]))}}))}}}));
