import{l as g}from"./loader-bd20757d.js";import{_ as P}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{g as h,c,p as v,t as w}from"./toasts-a55a3f6b.js";import{A as R}from"./age_groups-8203d13f.js";import{R as A}from"./report_service-a175abc5.js";import{a as H}from"./arrays-083a09e6.js";import{t as m}from"./his_date-933250a6.js";import{d as y,r as b,o as T,h as D}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./url-ffe761c9.js";const d=["started_new_on_art","started_previously_on_art","completed_new_on_art","completed_previously_on_art"];class F extends A{constructor(){super()}getTBPrevReport(){return this.getReport("/programs/".concat(this.programId,"/reports/tb_prev2"))}buildReportData(a){const r=[];return["F","M"].forEach(l=>{R.forEach(p=>{const s={gender:l,ageGroup:p};d.forEach(i=>{s["3hp_".concat(i)]=h(a[p][l],"3HP.".concat(i),[]),s["6h_".concat(i)]=h(a[p][l],"6H.".concat(i),[])}),r.push(s)})}),r}aggregate(a,r,o,l){return Object.values(a).reduce((p,s)=>[...s[r][o][l],...p],[])}getAggregatedMaleData(a){const r={gender:"Male",ageGroup:"All"};for(const o of d)r["3hp_".concat(o)]=this.aggregate(a,"M","3HP",o),r["6h_".concat(o)]=this.aggregate(a,"M","6H",o);return r}async getAggregatedMaternalStatus(a){const r=d.reduce((e,t)=>[...e,{group:"3HP",indicator:t,data:this.aggregate(a,"F","3HP",t)},{group:"6H",indicator:t,data:this.aggregate(a,"F","6H",t)}],[]),o=H(r.reduce((e,t)=>[...e,...t.data],[]).map(e=>e.patient_id)),l=await this.getMaternalStatus(o),p=l.FBf.concat(l.FP),s=[],i=(e,t,n)=>r.reduce((u,_)=>_.indicator===e&&t===_.group?[...u,..._.data]:u,[]).filter(u=>n==="FNP"?!p.includes(u.patient_id):l[n].includes(u.patient_id));for(const e of["FP","FNP","FBf"]){const t={gender:e,ageGroup:"All"};for(const n of d)t["3hp_".concat(n)]=i(n,"3HP",e),t["6h_".concat(n)]=i(n,"6H",e);s.push(t)}return s}}const V=y({__name:"TbPrev",setup(f){const a=b("-"),r=b([]),o=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:c},{path:"3hp_started_new_on_art",label:"3HP Started New on ART",drillable:!0},{path:"6h_started_new_on_art",label:"6H Started New on ART",drillable:!0},{path:"3hp_started_previously_on_art",label:"3HP Started Previously on ART",drillable:!0},{path:"6h_started_previously_on_art",label:"6H Started Previously on ART",drillable:!0},{path:"3hp_completed_new_on_art",label:"3HP Completed New on ART",drillable:!0},{path:"6h_completed_new_on_art",label:"6H Completed New on ART",drillable:!0},{path:"3hp_completed_previously_on_art",label:"3HP Completed Previously on ART",drillable:!0},{path:"6h_completed_previously_on_art",label:"6H Completed Previously on ART",drillable:!0}],l=[{path:"arv_number",label:"ARV Number",preSort:v,initialSort:!0},{path:"gender",label:"Gender",formatter:c},{path:"birthdate",label:"Date of Birth",formatter:m},{path:"art_start_date",label:"ART Start Date",formatter:m},{path:"tpt_initiation_date",label:"TPT Initiation Date",formatter:m},{path:"outcome",label:"Outcome"}];async function p({dateRange:e}){try{await g.show();const t=new F;t.setStartDate(e.startDate),t.setEndDate(e.endDate),a.value=t.getDateIntervalPeriod();const n=await t.getTBPrevReport();r.value=t.buildReportData(n),r.value.push(t.getAggregatedMaleData(n)),r.value.push(...await t.getAggregatedMaternalStatus(n))}catch(t){w("ERROR! Unable to load report data"),console.error(t)}await g.hide()}function s(e){return"".concat(e.column.label," | ").concat(e.row.ageGroup," | ").concat(c(e.row.gender),"s")}function i(e){return e.row[e.column.path].map(t=>({...t,person_id:t.patient_id}))}return(e,t)=>(T(),D(P,{title:"PEPFAR TB Prev Report","report-type":"PEPFAR",columns:o,rows:r.value,period:a.value,"custom-drill-columns":l,"drill-title":s,"drill-row-parser":i,useDateRangeFilter:"",showIndices:"",onGenerate:p},null,8,["rows","period"]))}});export{V as default};
