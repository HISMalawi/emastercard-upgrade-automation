System.register(["./loader-legacy-bf01395f.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-72c40596.js","./toasts-legacy-f5a15cc4.js","./common-legacy-0d7df615.js","./his_date-legacy-f64a549a.js","./regimen_report_service-legacy-70511bdc.js","./regimens-legacy-68ba62aa.js","./form-legacy-ee7d8d81.js","./datatable-legacy-ed9e519a.js","./index-legacy-b3d9e99f.js","./exports-legacy-81ed5c34.js","./index-legacy-7a398477.js","./vue-datepicker-legacy-5928f51a.js","./DrilldownTable-legacy-640a9080.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-deb5b683.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./Strs-legacy-09248991.js"],(function(e,t){"use strict";var l,a,r,n,o,s,i,u,c,g,p,d,m,y,j,_;return{setters:[e=>{l=e.l},e=>{a=e._},e=>{r=e.t},e=>{n=e.p,o=e.t},e=>{s=e.t},e=>{i=e.R},e=>{u=e.R,c=e.b},e=>{g=e.t},e=>{p=e.g},e=>{d=e.d,m=e.r,y=e.H,j=e.o,_=e.h},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",d({__name:"RegimenFormulation",setup(e){const t=m("-"),d=m([]),b=[p("patient_id")],v=[{path:"arv_number",label:"ARV Number",preSort:n,initialSort:!0},{path:"gender",label:"Gender",formatter:o},{path:"birthdate",label:"Date of Birth",formatter:s},{path:"regimen",label:"Reg. name"},{path:"drugs",label:"Formulation"}],f=y((()=>[{id:"regimen",label:"Select Regimen",type:"select",options:g(u)},{id:"formulation",label:"Formulation",type:"select",options:g(c)}]));async function h(e){await l.show();try{const l=new i;l.setStartDate(e.dateRange.startDate),l.setEndDate(e.dateRange.endDate),t.value=l.getDateIntervalPeriod(),d.value=await l.getRegimenFormulationReport(e.regimen.value,e.formulation.value)}catch(a){r("Unable to load report data"),console.error(a)}await l.hide()}return(e,l)=>(j(),_(a,{title:"Regimen Formulation: Patient Level Clinic Report","report-type":"Clinic",columns:v,rows:d.value,period:t.value,"row-action-buttons":b,"custom-filters":f.value,"use-date-range-filter":"",onGenerate:h},null,8,["rows","period","custom-filters"]))}}))}}}));