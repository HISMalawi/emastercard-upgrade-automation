System.register(["./loader-legacy-1ef95e57.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-68c74ebf.js","./common-legacy-0d7df615.js","./his_date-legacy-31ba5787.js","./toasts-legacy-35f2c029.js","./report_service-legacy-e5f1ad0c.js","./index-legacy-084a8278.js","./exports-legacy-ab860f03.js","./index-legacy-a5979f3c.js","./vue-datepicker-legacy-828e9dbd.js","./DrilldownTable-legacy-e4e75503.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,n,s,o,i,u,p,c,d,_,g;return{setters:[e=>{a=e.l},e=>{l=e.g,r=e._},e=>{n=e.p,s=e.t},e=>{o=e.e,i=e.t},e=>{u=e.t},e=>{p=e.R},e=>{c=e.d,d=e.r,_=e.o,g=e.g},null,null,null,null,null,null,null,null],execute:function(){e("default",c({__name:"ClientsDueForVL",setup(e){const t=d(""),c=d([]),y=[l()],m=[{path:"arv_number",label:"ARV #",preSort:n,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:s},{path:"birthdate",label:"Age",formatter:e=>e?o(e):""},{path:"appointment_date",label:"App.",formatter:i},{path:"start_date",label:"Art started",formatter:i},{path:"months_on_art",label:"Months on ART"},{path:"mile_stone",label:"Milestone",formatter:i},{path:"last_result_order_date",label:"Ordered",formatter:i},{path:"last_result",label:"Result"},{path:"last_result_date",label:"Released",formatter:i}];async function b({dateRange:e}){try{var l;await a.show();const r=new p;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),c.value=null!==(l=await r.getReport("clients_due_vl"))&&void 0!==l?l:[]}catch(r){u("Unable to load report data"),console.error(r)}await a.hide()}return(e,a)=>(_(),g(r,{title:"Clients Due For Viral Load Clinic Report","report-type":"Clinic",columns:m,"row-action-buttons":y,rows:c.value,period:t.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:b},null,8,["rows","period"]))}}))}}}));
