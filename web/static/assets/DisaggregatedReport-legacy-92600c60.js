System.register(["./loader-legacy-df0a23f0.js","./ReportTable.vue_vue_type_script_setup_true_lang-legacy-731c7c1a.js","./disagregated_report_service-legacy-9b38c847.js","./regimens-legacy-68ba62aa.js","./common-legacy-0d7df615.js","./toasts-legacy-37a8c781.js","./index-legacy-5acd8703.js","./exports-legacy-5cfd1e37.js","./index-legacy-6cda3731.js","./his_date-legacy-108bb24c.js","./vue-datepicker-legacy-2c0ccca0.js","./DrilldownTable-legacy-e24eb05d.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./age_groups-legacy-5143fd58.js","./program_report_service-legacy-6468e550.js","./report_service-legacy-ac6083ec.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,a){"use strict";var l,t,r,n,s,o,g,u,c,i,d,p;return{setters:[e=>{l=e.l},e=>{t=e._},e=>{r=e.D},e=>{n=e.R},e=>{s=e.t},e=>{o=e.t},e=>{g=e.d,u=e.r,c=e.a2,i=e.at,d=e.o,p=e.h},null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",g({__name:"DisaggregatedReport",setup(e){const a=new r,g=u("-"),y=u([]),_=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:s},{path:"tx_curr",label:"TX curr (receiving ART)",drillable:!0},...n.map((e=>({path:e,label:e,drillable:!0}))),{path:"unknown",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],j=async({dateRange:e},t)=>{try{await l.show(),a.setStartDate(e.startDate),a.setEndDate(e.endDate),g.value=a.getDateIntervalPeriod(),y.value=await a.getDisaggReport(t)}catch(r){console.error(r),o("Error! Unable to generate report")}l.hide()};function D(e){return`${e.row.age_group} | ${e.column.label} | ${s(e.row.gender)}s`}return c((()=>{const{startDate:e,endDate:a}=i().query;e&&a&&j({dateRange:{startDate:e,endDate:a}},!1)})),(e,a)=>(d(),p(t,{title:"MoH Disaggregated Report","report-type":"MoH",columns:_,rows:y.value,period:g.value,"drill-title":D,useDateRangeFilter:"",showIndices:"",onGenerate:j},null,8,["rows","period"]))}}))}}}));
