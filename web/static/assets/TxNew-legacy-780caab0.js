System.register(["./loader-legacy-805839f7.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-4bb553ac.js","./common-legacy-0d7df615.js","./toasts-legacy-14f1e720.js","./tx_report_service-legacy-e26bb715.js","./index-legacy-a3ed4133.js","./exports-legacy-260ef973.js","./index-legacy-d4a0fad1.js","./his_date-legacy-0bc670a8.js","./vue-datepicker-legacy-fdf7a164.js","./DrilldownTable-legacy-640fced2.js","./arrays-legacy-4be31994.js","./report_service-legacy-1e7510ae.js","./url-legacy-2d97b2db.js","./age_groups-legacy-5143fd58.js"],(function(e,l){"use strict";var a,t,r,n,s,o,u,c,i;return{setters:[e=>{a=e.l},e=>{t=e._},e=>{r=e.t},e=>{n=e.t},e=>{s=e.a},e=>{o=e.d,u=e.r,c=e.o,i=e.j},null,null,null,null,null,null,null,null,null],execute:function(){e("default",o({__name:"TxNew",setup(e){const l=u("-"),o=u([]),d=new s,g=[{path:"age_group",label:"Age group"},{path:"gender",label:"Gender",formatter:r},{path:"cd4_less_than_200",label:"Tx new CD4 < 200",drillable:!0},{path:"cd4_greater_than_equal_to_200",label:"Tx new CD4 >= 200",drillable:!0},{path:"cd4_unknown_or_not_done",label:"Tx new CD4 Unknown",drillable:!0},{path:"transfer_in",label:"Transfer-ins",drillable:!0}];async function _({dateRange:e},t){try{await a.show(),d.setStartDate(e.startDate),d.setEndDate(e.endDate),l.value=d.getDateIntervalPeriod(),o.value=await d.getTxNewReport(t)}catch(r){n("ERROR! Unable to load report data"),console.error(r)}await a.hide()}function p(e){return`${e.column.label} | ${e.row.ageGroup} | ${r(e.row.gender)}s`}return(e,a)=>(c(),i(t,{title:"PEPFAR TX New Report","report-type":"PEPFAR",columns:g,rows:o.value,period:l.value,"drill-title":p,useDateRangeFilter:"",showIndices:"",onGenerate:_},null,8,["rows","period"]))}}))}}}));
