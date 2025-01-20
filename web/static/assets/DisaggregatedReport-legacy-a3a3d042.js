System.register(["./loader-legacy-f347fc88.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-d8593fa2.js","./disagregated_report_service-legacy-aec835eb.js","./regimens-legacy-68ba62aa.js","./common-legacy-0d7df615.js","./toasts-legacy-afa94957.js","./index-legacy-cff29faf.js","./exports-legacy-73355800.js","./index-legacy-312feaf7.js","./his_date-legacy-7de90fb0.js","./vue-datepicker-legacy-92de4125.js","./DrilldownTable-legacy-94937be9.js","./arrays-legacy-4be31994.js","./age_groups-legacy-5143fd58.js","./program_report_service-legacy-0325af93.js","./report_service-legacy-00ed2364.js","./url-legacy-2d97b2db.js"],(function(e,a){"use strict";var l,t,r,n,s,o,g,c,u,i,d,p;return{setters:[e=>{l=e.l},e=>{t=e._},e=>{r=e.D},e=>{n=e.R},e=>{s=e.t},e=>{o=e.t},e=>{g=e.d,c=e.r,u=e.i,i=e.aM,d=e.o,p=e.j},null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",g({__name:"DisaggregatedReport",setup(e){const a=new r,g=c("-"),y=c([]),_=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:s},{path:"tx_curr",label:"TX curr (receiving ART)",drillable:!0},...n.map((e=>({path:e,label:e,drillable:!0}))),{path:"unknown",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],j=async({dateRange:e},t)=>{try{await l.show(),a.setStartDate(e.startDate),a.setEndDate(e.endDate),g.value=a.getDateIntervalPeriod(),y.value=await a.getDisaggReport(t)}catch(r){console.error(r),o("Error! Unable to generate report")}l.hide()};function D(e){return`${e.row.age_group} | ${e.column.label} | ${s(e.row.gender)}s`}return u((()=>{const{startDate:e,endDate:a}=i().query;e&&a&&j({dateRange:{startDate:e,endDate:a}},!1)})),(e,a)=>(d(),p(t,{title:"MoH Disaggregated Report","report-type":"MoH",columns:_,rows:y.value,period:g.value,"drill-title":D,useDateRangeFilter:"",showIndices:"",onGenerate:j},null,8,["rows","period"]))}}))}}}));
