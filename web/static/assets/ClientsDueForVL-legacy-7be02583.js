System.register(["./loader-legacy-3c24c91b.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-1fdbf4fd.js","./common-legacy-0d7df615.js","./his_date-legacy-68b7a348.js","./toasts-legacy-3ebefc85.js","./report_service-legacy-44262c03.js","./index-legacy-5e2e9988.js","./exports-legacy-357034ad.js","./index-legacy-23ffa7c9.js","./vue-datepicker-legacy-f21b02bd.js","./DrilldownTable-legacy-8b04591a.js","./arrays-legacy-e3b1d86b.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,n,s,o,i,u,c,d,p,_,g;return{setters:[e=>{a=e.l},e=>{l=e.g,r=e._},e=>{n=e.p,s=e.t},e=>{o=e.f,i=e.t},e=>{u=e.t},e=>{c=e.R},e=>{d=e.d,p=e.r,_=e.o,g=e.j},null,null,null,null,null,null],execute:function(){e("default",d({__name:"ClientsDueForVL",setup(e){const t=p(""),d=p([]),m=[l()],b=[{path:"arv_number",label:"ARV #",preSort:n,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:s},{path:"birthdate",label:"Age",formatter:e=>e?o(e):""},{path:"appointment_date",label:"App.",formatter:i},{path:"start_date",label:"Art started",formatter:i},{path:"months_on_art",label:"Months on ART"},{path:"mile_stone",label:"Milestone",formatter:i},{path:"last_result_order_date",label:"Ordered",formatter:i},{path:"last_result",label:"Result"},{path:"last_result_date",label:"Released",formatter:i}];async function y({dateRange:e}){try{var l;await a.show();const r=new c;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),d.value=null!==(l=await r.getReport("clients_due_vl"))&&void 0!==l?l:[]}catch(r){u("Unable to load report data"),console.error(r)}await a.hide()}return(e,a)=>(_(),g(r,{title:"Clients Due For Viral Load Clinic Report","report-type":"Clinic",columns:b,"row-action-buttons":m,rows:d.value,period:t.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:y},null,8,["rows","period"]))}}))}}}));
