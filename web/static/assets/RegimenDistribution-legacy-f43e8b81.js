System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./toasts-legacy-ec8222ac.js","./regimen_report_service-legacy-d81b45c9.js","./regimens-legacy-68ba62aa.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./report_service-legacy-a06c1924.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,n,r,s,i,o,c,g,u;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{n=e.c,r=e.t},e=>{s=e.R},e=>{i=e.a},e=>{o=e.d,c=e.r,g=e.o,u=e.h},null,null,null,null,null,null,null,null],execute:function(){e("default",o({__name:"RegimenDistribution",setup(e){const t=c("-"),o=c([]),y=[{path:"weight",label:"Weight Band"},{path:"gender",label:"Gender",formatter:n},...i.map((e=>({path:e,label:e}))),{path:"N/A",label:"Unknown"},{path:"total",label:"Total"}];async function d({dateRange:e},l=!1){try{await a.show();const l=new s;l.setStartDate(e.startDate),l.setEndDate(e.endDate),t.value=l.getDateIntervalPeriod(),o.value=await l.getRegimensByWeight()}catch(n){r("ERROR! Unable to load report data"),console.error(n)}await a.hide()}return(e,a)=>(g(),u(l,{title:"MoH Regimen Distribution By Weight Report","report-type":"MoH",useDateRangeFilter:"",showIndices:"",columns:y,rows:o.value,period:t.value,onGenerate:d},null,8,["rows","period"]))}}))}}}));