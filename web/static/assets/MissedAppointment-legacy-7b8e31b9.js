System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./toasts-legacy-ec8222ac.js","./his_date-legacy-87db423b.js","./report_service-legacy-a06c1924.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,n,s,i,o,c,p,u,d,g;return{setters:[e=>{a=e.l},e=>{l=e.g,r=e._},e=>{n=e.p,s=e.c,i=e.t},e=>{o=e.t},e=>{c=e.R},e=>{p=e.d,u=e.r,d=e.o,g=e.h},null,null,null,null,null,null],execute:function(){e("default",p({__name:"MissedAppointment",setup(e){const t=u(""),p=u([]),m=[l()],y=[{path:"arv_number",label:"ARV Number",preSort:n,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:s},{path:"birthdate",label:"DOB",formatter:o},{path:"appointment_date",label:"Appointment",formatter:o},{path:"days_missed",label:"Days Missed"},{path:"current_outcome",label:"Current Outcome"},{path:"address",label:"Contact Details",exportable:!1}];async function b({dateRange:e}){try{var l;await a.show();const r=new c;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod();const n=null!==(l=await r.getReport("missed_appointments"))&&void 0!==l?l:[];p.value=n.map((e=>({...e,address:`CELL: ${e.cell_number}\n                District: ${e.district}\n                Village: ${e.village}\n                TA: ${e.ta}`})))}catch(r){i("Unable to load report data"),console.error(r)}await a.hide()}return(e,a)=>(d(),g(r,{title:"Clinic Missed Appointments Report","report-type":"Clinic",columns:y,"row-action-buttons":m,rows:p.value,period:t.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:b},null,8,["rows","period"]))}}))}}}));