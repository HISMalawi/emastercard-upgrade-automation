System.register(["./loader-legacy-1ef95e57.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-68c74ebf.js","./toasts-legacy-35f2c029.js","./common-legacy-0d7df615.js","./tpt_report_service-legacy-d1b8c634.js","./index-legacy-084a8278.js","./exports-legacy-ab860f03.js","./index-legacy-a5979f3c.js","./his_date-legacy-31ba5787.js","./vue-datepicker-legacy-828e9dbd.js","./DrilldownTable-legacy-e4e75503.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./report_service-legacy-e5f1ad0c.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,l){"use strict";var t,a,r,n,o,d,i,s,p;return{setters:[e=>{t=e.l},e=>{a=e._},e=>{r=e.t},e=>{n=e.t},e=>{o=e.T},e=>{d=e.d,i=e.r,s=e.o,p=e.g},null,null,null,null,null,null,null,null,null,null,null],execute:function(){e("default",d({__name:"TptCohort",setup(e){const l=i("-"),d=i([]),u=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:n},{label:"Initiated ART",path:"initiated_art",drillable:!0},{label:"Initiated TPT",path:"started_tpt",drillable:!0},{label:"Completed TPT",path:"completed_tpt",drillable:!0},{label:"Not Completed TPT",path:"not_completed_tpt",drillable:!0},{label:"Died",path:"died",drillable:!0},{label:"Defaulted",path:"defaulted",drillable:!0},{label:"Stopped ART",path:"stopped",drillable:!0},{label:"TO",path:"transfer_out",drillable:!0},{label:"Confirmed TB",path:"confirmed_tb",drillable:!0},{label:"Pregnant",path:"pregnant",drillable:!0}];async function c({dateRange:e}){await t.show();try{const t=new o;t.setStartDate(e.startDate),t.setEndDate(e.endDate),l.value=t.getDateIntervalPeriod(),d.value=await t.getCohort()}catch(a){r("Unable to load report data"),console.error(a)}await t.hide()}function g(e){return`${e.row.age_group} ${e.column.label} ${e.row.gender}s`}return(e,t)=>(s(),p(a,{title:"MoH TPT Cohort Report","report-type":"MoH",columns:u,rows:d.value,period:l.value,"show-indices":"","use-date-range-filter":"","drill-title":g,onGenerate:c},null,8,["rows","period"]))}}))}}}));
