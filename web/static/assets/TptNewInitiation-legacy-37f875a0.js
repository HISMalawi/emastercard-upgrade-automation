System.register(["./loader-legacy-1aa2e549.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-c2b3872a.js","./common-legacy-0d7df615.js","./toasts-legacy-7157433d.js","./tpt_report_service-legacy-b6b1b83e.js","./his_date-legacy-45d6bc67.js","./datatable-legacy-43f0f29a.js","./index-legacy-6a8cc98f.js","./exports-legacy-75c152be.js","./index-legacy-ce3864a4.js","./vue-datepicker-legacy-4a383a53.js","./DrilldownTable-legacy-5e4c56c4.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-89aecc95.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,r,l,n,o,s,i,u,g,p,c,d,y;return{setters:[e=>{a=e.l},e=>{r=e._},e=>{l=e.t,n=e.p},e=>{o=e.t},e=>{s=e.T,i=e.a},e=>{u=e.t},e=>{g=e.t},e=>{p=e.d,c=e.r,d=e.o,y=e.h},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",p({__name:"TptNewInitiation",setup(e){const t=c("-"),p=c([]),_=new s,w=[{path:"location",label:"District"},{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:l},...g(i)],h=[{path:"arv_number",label:"ARV Number",preSort:n,initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:u},{path:"gender",label:"Gender",formatter:l},{path:"dispensation_date",label:"Dispensation Date",formatter:u},{path:"art_start_date",label:"Art Start Date",formatter:u},{path:"tpt_start_date",label:"TPT Start Date",formatter:u}];async function j({dateRange:e}){try{await a.show(),_.setStartDate(e.startDate),_.setEndDate(e.endDate),t.value=_.getDateIntervalPeriod();const r=await _.getTptNewInitiations();p.value=[...r.F.rows,...r.M.rows,{ageGroup:"All",gender:"Male",...r.M.aggregate},...await _.buildMaternityAgreggateRows(r.F.aggregate)]}catch(r){o("ERROR! Unable to load report data"),console.error(r)}await a.hide()}function b(e){return`${e.column.label} | ${e.row.ageGroup} | ${l(e.row.gender)}s`}function m(e){return e.row[e.column.path].map((e=>({...e,person_id:e.patient_id})))}return(e,a)=>(d(),y(r,{title:"TPT New Initiation Report","report-type":"MoH",columns:w,rows:p.value,period:t.value,"drill-title":b,"custom-drill-columns":h,"drill-row-parser":m,useDateRangeFilter:"",showIndices:"",onGenerate:j},null,8,["rows","period"]))}}))}}}));