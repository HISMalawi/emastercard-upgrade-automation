System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./toasts-legacy-ec8222ac.js","./his_date-legacy-87db423b.js","./report_service-legacy-a06c1924.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,n,s,o,i,c,u,p;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.c,n=e.t},e=>{s=e.t},e=>{o=e.R},e=>{i=e.d,c=e.r,u=e.o,p=e.h},null,null,null,null,null,null],execute:function(){class t extends o{constructor(){super()}async generate(){const e=await this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"});return Object.values(null!=e?e:{})}}e("default",i({__name:"IncompleteVisits",setup(e){const o=c("-"),i=c([]),d=[{path:"arv_number",label:"ARV Number"},{path:"national_id",label:"NHID"},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:r},{path:"birthdate",label:"Date of Birth",formatter:s},{path:"dates",label:"Date(s)",formatter:e=>e.map(s).join(", ")}];async function g({dateRange:e}){await a.show();try{const a=new t;a.setStartDate(e.startDate),a.setEndDate(e.endDate),o.value=a.getDateIntervalPeriod(),i.value=await a.generate()}catch(l){n("Unable to load report data"),console.error(l)}await a.hide()}return(e,t)=>(u(),p(l,{title:"Incomplete Visits Clinic Report","report-type":"Clinic",columns:d,rows:i.value,period:o.value,"use-date-range-filter":"","use-secure-export":"","show-indices":"",onGenerate:g},null,8,["rows","period"]))}}))}}}));
