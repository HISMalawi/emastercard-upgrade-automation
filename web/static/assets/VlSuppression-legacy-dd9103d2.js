System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./program_report_service-legacy-4f1bce72.js","./toasts-legacy-ec8222ac.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./report_service-legacy-a06c1924.js","./url-legacy-2d97b2db.js"],(function(e,l){"use strict";var a,t,r,n,s,i,o,u;return{setters:[e=>{a=e.l},e=>{t=e._},e=>{r=e.P},e=>{n=e.t},e=>{s=e.d,i=e.r,o=e.o,u=e.h},null,null,null,null,null,null,null,null],execute:function(){e("default",s({__name:"VlSuppression",setup(e){const l=i("-"),s=i([]),c=[{path:"regimen",label:"Regimen"},{path:"due_for_vl",label:"Due for VL",drillable:!0},{path:"drawn",label:"Sample drawn",drillable:!0},{path:"high_vl",label:"High vl (>=1000 copies)",drillable:!0},{path:"low_vl",label:"Low vl (<1000 cpies)",drillable:!0}];async function p({dateRange:e}){try{await a.show();const t=new r;t.setStartDate(e.startDate),t.setEndDate(e.endDate),l.value=t.getDateIntervalPeriod(),s.value=await t.generate("vl_supression",{system_type:"emastercard"})}catch(t){n("ERROR! Unable to load report data"),console.error(t)}await a.hide()}function d(e){return`${e.column.label} on ${e.row.regimen} regimen`}return(e,a)=>(o(),u(t,{title:"Clinic VL Suppression Report","report-type":"Clinic",columns:c,rows:s.value,period:l.value,"drill-title":d,useDateRangeFilter:"",onGenerate:p},null,8,["rows","period"]))}}))}}}));