System.register(["./loader-legacy-1ef95e57.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-68c74ebf.js","./toasts-legacy-35f2c029.js","./common-legacy-0d7df615.js","./his_date-legacy-31ba5787.js","./report_service-legacy-e5f1ad0c.js","./index-legacy-084a8278.js","./exports-legacy-ab860f03.js","./index-legacy-a5979f3c.js","./vue-datepicker-legacy-828e9dbd.js","./DrilldownTable-legacy-e4e75503.js","./_plugin-vue_export-helper-legacy-762b7923.js","./arrays-legacy-e3b1d86b.js","./index-legacy-aa705205.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,l,r,n,s,o,i,c,u,p;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{r=e.t},e=>{n=e.t},e=>{s=e.t},e=>{o=e.R},e=>{i=e.d,c=e.r,u=e.o,p=e.g},null,null,null,null,null,null,null,null],execute:function(){class t extends o{constructor(){super()}async generate(){const e=await this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"});return Object.values(null!=e?e:{})}}e("default",i({__name:"IncompleteVisits",setup(e){const o=c("-"),i=c([]),g=[{path:"arv_number",label:"ARV Number"},{path:"national_id",label:"NHID"},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:n},{path:"birthdate",label:"Date of Birth",formatter:s},{path:"dates",label:"Date(s)",formatter:e=>e.map(s).join(", ")}];async function d({dateRange:e}){await a.show();try{const a=new t;a.setStartDate(e.startDate),a.setEndDate(e.endDate),o.value=a.getDateIntervalPeriod(),i.value=await a.generate()}catch(l){r("Unable to load report data"),console.error(l)}await a.hide()}return(e,t)=>(u(),p(l,{title:"Incomplete Visits Clinic Report","report-type":"Clinic",columns:g,rows:i.value,period:o.value,"use-date-range-filter":"","use-secure-export":"","show-indices":"",onGenerate:d},null,8,["rows","period"]))}}))}}}));
