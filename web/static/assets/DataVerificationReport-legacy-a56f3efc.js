System.register(["./loader-legacy-98dfb669.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-3c31bd3e.js","./toasts-legacy-f5cd9c9b.js","./data_cleaning_report_service-legacy-ede57c22.js","./his_date-legacy-fa5a22a7.js","./index-legacy-f8d71896.js","./exports-legacy-939b994a.js","./index-legacy-0575033e.js","./vue-datepicker-legacy-e7e3eacf.js","./common-legacy-0d7df615.js","./DrilldownTable-legacy-e5bb2e5a.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-c2dd3c7c.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,a){"use strict";var l,t,r,s,n,o,c,i,u,y;return{setters:[e=>{l=e.l},e=>{t=e._},e=>{r=e.t},e=>{s=e.D},e=>{n=e.t},e=>{o=e.d,c=e.r,i=e.a2,u=e.h,y=e.o},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",o({__name:"DataVerificationReport",setup(e){const a=c([]),o=[{path:"all_supervisors",label:"Supervisors",formatter:e=>e.join(", ")},{path:"data_cleaning_datetime",label:"Data Cleaning Date",formatter:n},{path:"created_by.name",label:"Creator"},{path:"date_created",label:"Created On",formatter:n},{path:"comments",label:"Comments"}];return i((()=>async function(){try{l.show();const e=new s;e.useDefaultParams=!1,a.value=await e.getSupervisionHistory()}catch(e){r("Failed to load report data"),console.error(e)}finally{l.hide()}}())),(e,l)=>(y(),u(t,{title:"Data Verification Report",columns:o,rows:a.value},null,8,["rows"]))}}))}}}));
