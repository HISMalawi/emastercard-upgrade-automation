System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./toasts-legacy-ec8222ac.js","./his_date-legacy-87db423b.js","./defaulter_report_service-legacy-ed6f8c21.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./report_service-legacy-a06c1924.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,s,n,u,o,i,c,p,g,d;return{setters:[e=>{a=e.l},e=>{l=e.g,r=e._},e=>{s=e.p,n=e.c,u=e.t},e=>{o=e.t},e=>{i=e.D},e=>{c=e.d,p=e.r,g=e.o,d=e.h},null,null,null,null,null,null,null],execute:function(){e("default",c({__name:"DefaultersReport",setup(e){const t=p("-"),c=p([]),y=p("PEPFAR Defaulters List Report"),b=[l()],f=[{path:"arv_number",label:"ARV Number",preSort:s,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:n},{path:"birthdate",label:"Date of Birth",formatter:o},{path:"age",label:"Age (At reporting)"},{path:"defaulter_date",label:"Defaulted Date",formatter:o}];async function _({dateRange:e}){await a.show();const l=new i;l.setStartDate(e.startDate),l.setEndDate(e.endDate),t.value=l.getDateIntervalPeriod();try{c.value=await l.getDefaulters(),y.value=`PEPFAR Defaulters List Report <b>(${c.value.length} Defaulters)</b>`}catch(r){u("Unable to load report data")}await a.hide()}return(e,a)=>(g(),d(r,{title:y.value,"report-type":"PEPFAR",columns:f,"row-action-buttons":b,rows:c.value,period:t.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:_},null,8,["title","rows","period"]))}}))}}}));
