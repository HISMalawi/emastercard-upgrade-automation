System.register(["./loader-legacy-1ef95e57.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-68c74ebf.js","./toasts-legacy-35f2c029.js","./common-legacy-0d7df615.js","./his_date-legacy-31ba5787.js","./regimen_report_service-legacy-71024772.js","./regimens-legacy-68ba62aa.js","./form-legacy-5a5cbfdd.js","./index-legacy-084a8278.js","./exports-legacy-ab860f03.js","./index-legacy-a5979f3c.js","./vue-datepicker-legacy-828e9dbd.js","./DrilldownTable-legacy-e4e75503.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-e5f1ad0c.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./Strs-legacy-09248991.js"],(function(e,t){"use strict";var l,a,r,n,o,i,s,u,c,g,d,m,p,y,j,_;return{setters:[e=>{l=e.l},e=>{a=e.g,r=e._},e=>{n=e.t},e=>{o=e.p,i=e.t},e=>{s=e.t},e=>{u=e.R},e=>{c=e.R,g=e.b},e=>{d=e.t},e=>{m=e.d,p=e.r,y=e.F,j=e.o,_=e.g},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",m({__name:"RegimenFormulation",setup(e){const t=p("-"),m=p([]),v=[a("patient_id")],b=[{path:"arv_number",label:"ARV Number",preSort:o,initialSort:!0},{path:"gender",label:"Gender",formatter:i},{path:"birthdate",label:"Date of Birth",formatter:s},{path:"regimen",label:"Reg. name"},{path:"drugs",label:"Formulation"}],f=y((()=>[{id:"regimen",label:"Select Regimen",type:"select",options:d(c)},{id:"formulation",label:"Formulation",type:"select",options:d(g)}]));async function R(e){await l.show();try{const l=new u;l.setStartDate(e.dateRange.startDate),l.setEndDate(e.dateRange.endDate),t.value=l.getDateIntervalPeriod(),m.value=await l.getRegimenFormulationReport(e.regimen.value,e.formulation.value)}catch(a){n("Unable to load report data"),console.error(a)}await l.hide()}return(e,l)=>(j(),_(r,{title:"Regimen Formulation: Patient Level Clinic Report","report-type":"Clinic",columns:b,rows:m.value,period:t.value,"row-action-buttons":v,"custom-filters":f.value,"use-date-range-filter":"",onGenerate:R},null,8,["rows","period","custom-filters"]))}}))}}}));
