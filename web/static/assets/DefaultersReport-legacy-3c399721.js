System.register(["./loader-legacy-3c24c91b.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-1fdbf4fd.js","./common-legacy-0d7df615.js","./his_date-legacy-68b7a348.js","./defaulter_report_service-legacy-5cbfa236.js","./toasts-legacy-3ebefc85.js","./index-legacy-5e2e9988.js","./exports-legacy-357034ad.js","./index-legacy-23ffa7c9.js","./vue-datepicker-legacy-f21b02bd.js","./DrilldownTable-legacy-8b04591a.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-44262c03.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,s,n,o,u,i,c,p,g,d;return{setters:[e=>{a=e.l},e=>{l=e.g,r=e._},e=>{s=e.p,n=e.t},e=>{o=e.t},e=>{u=e.D},e=>{i=e.t},e=>{c=e.d,p=e.r,g=e.o,d=e.j},null,null,null,null,null,null,null],execute:function(){e("default",c({__name:"DefaultersReport",setup(e){const t=p("-"),c=p([]),y=p("Clinic Defaulters List Report"),b=[l()],f=[{path:"arv_number",label:"ARV Number",preSort:s,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:n},{path:"birthdate",label:"Date of Birth",formatter:o},{path:"age",label:"Age (At reporting)"},{path:"defaulter_date",label:"Defaulted Date",formatter:o}];async function _({dateRange:e}){await a.show();const l=new u;l.setIsPepfar(!1),l.setStartDate(e.startDate),l.setEndDate(e.endDate),t.value=l.getDateIntervalPeriod();try{c.value=await l.getDefaulters(),y.value=`PEPFAR Defaulters List Report <b>(${c.value.length} Defaulters)</b>`}catch(r){i("Unable to load report data"),console.error(r)}await a.hide()}return(e,a)=>(g(),d(r,{title:y.value,"report-type":"Clinic",columns:f,"row-action-buttons":b,rows:c.value,period:t.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:_},null,8,["title","rows","period"]))}}))}}}));
