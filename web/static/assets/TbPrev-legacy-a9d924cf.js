System.register(["./loader-legacy-3d9f610c.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-7bf0af7c.js","./toasts-legacy-4bd31a3d.js","./age_groups-legacy-5143fd58.js","./report_service-legacy-47f517b9.js","./arrays-legacy-681d874a.js","./his_date-legacy-f6da7b16.js","./index-legacy-65d6eaec.js","./exports-legacy-26e6922d.js","./index-legacy-a4410d47.js","./vue-datepicker-legacy-f849676a.js","./DrilldownTable-legacy-7c31441b.js","./url-legacy-2d97b2db.js"],(function(e,t){"use strict";var a,r,l,o,n,s,i,d,p,u,g,_,c,h;return{setters:[e=>{a=e.l},e=>{r=e._},e=>{l=e.g,o=e.c,n=e.p,s=e.t},e=>{i=e.A},e=>{d=e.R},e=>{p=e.a},e=>{u=e.t},e=>{g=e.d,_=e.r,c=e.o,h=e.h},null,null,null,null,null],execute:function(){const t=["started_new_on_art","started_previously_on_art","completed_new_on_art","completed_previously_on_art"];class b extends d{constructor(){super()}getTBPrevReport(){return this.getReport(`/programs/${this.programId}/reports/tb_prev2`)}buildReportData(e){const a=[];return["F","M"].forEach((r=>{i.forEach((o=>{const n={gender:r,ageGroup:o};t.forEach((t=>{n[`3hp_${t}`]=l(e[o][r],`3HP.${t}`,[]),n[`6h_${t}`]=l(e[o][r],`6H.${t}`,[])})),a.push(n)}))})),a}aggregate(e,t,a,r){return Object.values(e).reduce(((e,l)=>[...l[t][a][r],...e]),[])}getAggregatedMaleData(e){const a={gender:"Male",ageGroup:"All"};for(const r of t)a[`3hp_${r}`]=this.aggregate(e,"M","3HP",r),a[`6h_${r}`]=this.aggregate(e,"M","6H",r);return a}async getAggregatedMaternalStatus(e){const a=t.reduce(((t,a)=>[...t,{group:"3HP",indicator:a,data:this.aggregate(e,"F","3HP",a)},{group:"6H",indicator:a,data:this.aggregate(e,"F","6H",a)}]),[]),r=p(a.reduce(((e,t)=>[...e,...t.data]),[]).map((e=>e.patient_id))),l=await this.getMaternalStatus(r),o=l.FBf.concat(l.FP),n=[],s=(e,t,r)=>a.reduce(((a,r)=>r.indicator===e&&t===r.group?[...a,...r.data]:a),[]).filter((e=>"FNP"===r?!o.includes(e.patient_id):l[r].includes(e.patient_id)));for(const i of["FP","FNP","FBf"]){const e={gender:i,ageGroup:"All"};for(const a of t)e[`3hp_${a}`]=s(a,"3HP",i),e[`6h_${a}`]=s(a,"6H",i);n.push(e)}return n}}e("default",g({__name:"TbPrev",setup(e){const t=_("-"),l=_([]),i=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:o},{path:"3hp_started_new_on_art",label:"3HP Started New on ART",drillable:!0},{path:"6h_started_new_on_art",label:"6H Started New on ART",drillable:!0},{path:"3hp_started_previously_on_art",label:"3HP Started Previously on ART",drillable:!0},{path:"6h_started_previously_on_art",label:"6H Started Previously on ART",drillable:!0},{path:"3hp_completed_new_on_art",label:"3HP Completed New on ART",drillable:!0},{path:"6h_completed_new_on_art",label:"6H Completed New on ART",drillable:!0},{path:"3hp_completed_previously_on_art",label:"3HP Completed Previously on ART",drillable:!0},{path:"6h_completed_previously_on_art",label:"6H Completed Previously on ART",drillable:!0}],d=[{path:"arv_number",label:"ARV Number",preSort:n,initialSort:!0},{path:"gender",label:"Gender",formatter:o},{path:"birthdate",label:"Date of Birth",formatter:u},{path:"art_start_date",label:"ART Start Date",formatter:u},{path:"tpt_initiation_date",label:"TPT Initiation Date",formatter:u},{path:"outcome",label:"Outcome"}];async function p({dateRange:e}){try{await a.show();const r=new b;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod();const o=await r.getTBPrevReport();l.value=r.buildReportData(o),l.value.push(r.getAggregatedMaleData(o)),l.value.push(...await r.getAggregatedMaternalStatus(o))}catch(r){s("ERROR! Unable to load report data"),console.error(r)}await a.hide()}function g(e){return`${e.column.label} | ${e.row.ageGroup} | ${o(e.row.gender)}s`}function y(e){return e.row[e.column.path].map((e=>({...e,person_id:e.patient_id})))}return(e,a)=>(c(),h(r,{title:"PEPFAR TB Prev Report","report-type":"PEPFAR",columns:i,rows:l.value,period:t.value,"custom-drill-columns":d,"drill-title":g,"drill-row-parser":y,useDateRangeFilter:"",showIndices:"",onGenerate:p},null,8,["rows","period"]))}}))}}}));
