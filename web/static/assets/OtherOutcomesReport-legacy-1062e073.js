System.register(["./loader-legacy-5e05219c.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-dcfa1363.js","./toasts-legacy-ac0a9e63.js","./common-legacy-2d845b1c.js","./his_date-legacy-df0799d6.js","./datatable-legacy-471fc9a1.js","./program_report_service-legacy-93ab302a.js","./form-legacy-8b805202.js","./index-legacy-5705a9b7.js","./exports-legacy-d3f6086b.js","./index-legacy-668a84bd.js","./vue-datepicker-legacy-008eb8d3.js","./DrilldownTable-legacy-4f1ea4f5.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-ea080c1a.js","./report_service-legacy-01542a7b.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./Strs-legacy-09248991.js","./Date-legacy-61e414e0.js"],(function(e,t){"use strict";var a,l,r,o,s,n,u,c,i,p,d,g,y,m;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.t},e=>{o=e.p,s=e.t},e=>{n=e.t},e=>{u=e.g},e=>{c=e.P},e=>{i=e.t},e=>{p=e.d,d=e.r,g=e.H,y=e.o,m=e.h},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",p({__name:"OtherOutcomesReport",setup(e){const t=d("-"),p=d(""),_=d([]),v=g((()=>`${p.value||"Other Outcomes"} Clinic Report`)),j=[u("patient_id")],h=g((()=>{const e=[{path:"identifier",label:"ARV Number",preSort:o,initialSort:!0},{path:"given_name",label:"First Name"},{path:"family_name",label:"Last Name"},{path:"birthdate",label:"Date of Birth",formatter:n},{path:"gender",label:"Gender",formatter:s},{path:"outcome_date",label:"Outcome Date",formatter:n}];return/transfer/i.test(p.value)&&e.push({path:"transferred_out_to",label:"TO Location"}),e})),f=[{id:"outcome",label:"Select Outcome",type:"select",options:i(["Transfer Out","Died","Stopped"])}];async function b(e){await a.show();try{var l;const a=new c;p.value=e.outcome.value,a.setStartDate(e.dateRange.startDate),a.setEndDate(e.dateRange.endDate),t.value=a.getDateIntervalPeriod(),_.value=null!==(l=await a.getReport("patient_outcome_list",{outcome:p.value}))&&void 0!==l?l:[]}catch(o){r("Unable to load report data"),console.error(o)}await a.hide()}return(e,a)=>(y(),m(l,{"report-type":"Clinic",title:v.value,columns:h.value,rows:_.value,period:t.value,"row-action-buttons":j,"custom-filters":f,"use-date-range-filter":"","use-secure-export":"",onGenerate:b},null,8,["title","columns","rows","period"]))}}))}}}));
