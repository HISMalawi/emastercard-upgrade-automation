System.register(["./loader-legacy-3c24c91b.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-1fdbf4fd.js","./common-legacy-0d7df615.js","./toasts-legacy-3ebefc85.js","./viral_load_report_service-legacy-7f187fe4.js","./index-legacy-5e2e9988.js","./exports-legacy-357034ad.js","./index-legacy-23ffa7c9.js","./his_date-legacy-68b7a348.js","./vue-datepicker-legacy-f21b02bd.js","./DrilldownTable-legacy-8b04591a.js","./arrays-legacy-e3b1d86b.js","./age_groups-legacy-5143fd58.js","./regimens-legacy-68ba62aa.js","./report_service-legacy-44262c03.js","./url-legacy-2d97b2db.js"],(function(e,l){"use strict";var a,t,r,n,s,o,u,c,g,i,d;return{setters:[e=>{a=e.l},e=>{t=e.t,r=e._},e=>{n=e.t},e=>{s=e.t},e=>{o=e.V,u=e.T},e=>{c=e.d,g=e.r,i=e.o,d=e.j},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",c({__name:"TxPVLS",setup(e){const l=g("-"),c=g([]),y=new o,p=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:n},...t(u)];async function j({dateRange:e}){try{await a.show(),y.setStartDate(e.startDate),y.setEndDate(e.endDate),l.value=y.getDateIntervalPeriod(),c.value=await y.getTxPVLS()}catch(t){s("ERROR! Unable to load report data"),console.error(t)}await a.hide()}function _(e){return`${e.column.label} | ${e.row.ageGroup} | ${n(e.row.gender)}s`}return(e,a)=>(i(),d(r,{title:"PEPFAR TX PVLS Report","report-type":"PEPFAR",columns:p,rows:c.value,period:l.value,"drill-title":_,useDateRangeFilter:"",showIndices:"",onGenerate:j},null,8,["rows","period"]))}}))}}}));
