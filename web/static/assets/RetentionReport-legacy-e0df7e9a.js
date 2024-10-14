System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./toasts-legacy-ec8222ac.js","./report_service-legacy-a06c1924.js","./age_groups-legacy-5143fd58.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,r,n,o,l,i,s,c,d,u,g,p;return{setters:[e=>{a=e.l},e=>{r=e.t,n=e._},e=>{o=e.g,l=e.c,i=e.t},e=>{s=e.R},e=>{c=e.A},e=>{d=e.d,u=e.r,g=e.o,p=e.h},null,null,null,null,null,null,null],execute:function(){const t={initiated_1:"Initiated one month",completed_1:"Completed one month",initiated_3:"Initiated Three months",completed_3:"Completed Three months",initiated_6:"Initiated Six months",completed_6:"Completed Six months"};class h extends s{constructor(){super()}async generate(){const e=await this.getReport(`programs/${this.programId}/reports/retention`),t=[],a=[];return c.forEach((r=>{t.push(this.buildRowData(e,"M",r)),a.push(this.buildRowData(e,"F",r))})),[...a,...t]}getIndicatorData(e,t,a){return e.filter((({gender:e,age_group:r})=>e===t&&r===a)).map((({patient_id:e})=>e))}buildRowData(e,t,a){const r=[1,3,6],n={ageGroup:a,gender:t};for(const l of r){const r=o(e,`${l}.all`,[]),i=o(e,`${l}.all`,[]);n[`initiated_${l}`]=this.getIndicatorData(r,t,a),n[`completed_${l}`]=this.getIndicatorData(i,t,a)}return n}}e("default",d({__name:"RetentionReport",setup(e){const o=u("-"),s=u([]),c=[{path:"ageGroup",label:"Age Group"},{path:"gender",label:"Gender",formatter:l},...r(t)];async function d({dateRange:e}){try{await a.show();const t=new h;t.setStartDate(e.startDate),t.setEndDate(e.endDate),o.value=t.getDateIntervalPeriod(),s.value=await t.generate()}catch(t){i("ERROR! Unable to load report data"),console.error(t)}await a.hide()}function _(e){return`${e.column.label} | ${e.row.ageGroup} | ${l(e.row.gender)}s`}return(e,t)=>(g(),p(n,{title:"Clinic Retention Report","report-type":"Clinic",columns:c,rows:s.value,period:o.value,"drill-title":_,"use-date-range-filter":"","show-indices":"",onGenerate:d},null,8,["rows","period"]))}}))}}}));