System.register(["./loader-legacy-1ef95e57.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-68c74ebf.js","./common-legacy-0d7df615.js","./toasts-legacy-35f2c029.js","./tpt_report_service-legacy-d1b8c634.js","./his_date-legacy-31ba5787.js","./index-legacy-084a8278.js","./exports-legacy-ab860f03.js","./index-legacy-a5979f3c.js","./vue-datepicker-legacy-828e9dbd.js","./DrilldownTable-legacy-e4e75503.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-e5f1ad0c.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,t){"use strict";var a,r,l,n,o,s,i,u,g,p,c,d,y;return{setters:[e=>{a=e.l},e=>{r=e.t,l=e._},e=>{n=e.t,o=e.p},e=>{s=e.t},e=>{i=e.T,u=e.a},e=>{g=e.t},e=>{p=e.d,c=e.r,d=e.o,y=e.g},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",p({__name:"TptNewInitiation",setup(e){const t=c("-"),p=c([]),_=new i,w=[{path:"location",label:"District"},{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:n},...r(u)],h=[{path:"arv_number",label:"ARV Number",preSort:o,initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:g},{path:"gender",label:"Gender",formatter:n},{path:"dispensation_date",label:"Dispensation Date",formatter:g},{path:"art_start_date",label:"Art Start Date",formatter:g},{path:"tpt_start_date",label:"TPT Start Date",formatter:g}];async function j({dateRange:e}){try{await a.show(),_.setStartDate(e.startDate),_.setEndDate(e.endDate),t.value=_.getDateIntervalPeriod();const r=await _.getTptNewInitiations();p.value=[...r.F.rows,...r.M.rows,{ageGroup:"All",gender:"Male",...r.M.aggregate},...await _.buildMaternityAgreggateRows(r.F.aggregate)]}catch(r){s("ERROR! Unable to load report data"),console.error(r)}await a.hide()}function m(e){return`${e.column.label} | ${e.row.ageGroup} | ${n(e.row.gender)}s`}function b(e){return e.row[e.column.path].map((e=>({...e,person_id:e.patient_id})))}return(e,a)=>(d(),y(l,{title:"TPT New Initiation Report","report-type":"MoH",columns:w,rows:p.value,period:t.value,"drill-title":m,"custom-drill-columns":h,"drill-row-parser":b,useDateRangeFilter:"",showIndices:"",onGenerate:j},null,8,["rows","period"]))}}))}}}));
