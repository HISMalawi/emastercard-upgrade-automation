System.register(["./loader-legacy-1aa2e549.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-c2b3872a.js","./common-legacy-0d7df615.js","./toasts-legacy-7157433d.js","./his_date-legacy-45d6bc67.js","./regimen_report_service-legacy-2b3da5cf.js","./index-legacy-6a8cc98f.js","./exports-legacy-75c152be.js","./index-legacy-ce3864a4.js","./vue-datepicker-legacy-4a383a53.js","./DrilldownTable-legacy-5e4c56c4.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./regimens-legacy-68ba62aa.js","./report_service-legacy-89aecc95.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,r,l,n,i,s,o,c,u,g,p,d;return{setters:[e=>{a=e.l},e=>{r=e._},e=>{l=e.p,n=e.t},e=>{i=e.t},e=>{s=e.t,o=e.f},e=>{c=e.R},e=>{u=e.d,g=e.r,p=e.o,d=e.h},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"RegimenSwitch",setup(e){const t=g("-"),u=g([]),y=[{path:"arv_number",label:"ARV Number",preSort:l,initialSort:!0},{path:"gender",label:"Gender",formatter:n},{path:"birthdate",label:"DOB (Age in Years)",formatter:function(e){return`${s(e)} (${o(e)})`}},{path:"art_start_date",label:"Start Date",formatter:s},{path:"current_weight",label:"Weight (Kg)"},{path:"previous_regimen",label:"Prev Regimen"},{path:"current_regimen",label:"Curr Regimen"},{path:"medications",label:"ARVs"},{path:"dispensation_date",label:"Dispensation Date",formatter:s}];async function _({dateRange:e}){try{await a.show();const r=new c;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),u.value=await r.getRegimenSwitchReport()}catch(r){i("ERROR! Unable to load report data"),console.error(r)}await a.hide()}return(e,a)=>(p(),d(r,{title:"Clinic Regimen Switch Report","report-type":"Clinic",columns:y,rows:u.value,period:t.value,"use-date-range-filter":"",onGenerate:_},null,8,["rows","period"]))}}))}}}));