import{l as s}from"./loader-bd20757d.js";import{t as h,_ as u}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{g as l,c,t as f}from"./toasts-a55a3f6b.js";import{R as _}from"./report_service-a175abc5.js";import{A as R}from"./age_groups-8203d13f.js";import{d as w,r as m,o as D,h as g}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./his_date-933250a6.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./url-ffe761c9.js";const I={initiated_1:"Initiated one month",completed_1:"Completed one month",initiated_3:"Initiated Three months",completed_3:"Completed Three months",initiated_6:"Initiated Six months",completed_6:"Completed Six months"};class $ extends _{constructor(){super()}async generate(){const o=await this.getReport("programs/".concat(this.programId,"/reports/retention")),e=[],r=[];return R.forEach(a=>{e.push(this.buildRowData(o,"M",a)),r.push(this.buildRowData(o,"F",a))}),[...r,...e]}getIndicatorData(o,e,r){return o.filter(({gender:a,age_group:i})=>a===e&&i===r).map(({patient_id:a})=>a)}buildRowData(o,e,r){const a=[1,3,6],i={ageGroup:r,gender:e};for(const t of a){const n=l(o,"".concat(t,".all"),[]),d=l(o,"".concat(t,".all"),[]);i["initiated_".concat(t)]=this.getIndicatorData(n,e,r),i["completed_".concat(t)]=this.getIndicatorData(d,e,r)}return i}}const k=w({__name:"RetentionReport",setup(p){const o=m("-"),e=m([]),r=[{path:"ageGroup",label:"Age Group"},{path:"gender",label:"Gender",formatter:c},...h(I)];async function a({dateRange:t}){try{await s.show();const n=new $;n.setStartDate(t.startDate),n.setEndDate(t.endDate),o.value=n.getDateIntervalPeriod(),e.value=await n.generate()}catch(n){f("ERROR! Unable to load report data"),console.error(n)}await s.hide()}function i(t){return"".concat(t.column.label," | ").concat(t.row.ageGroup," | ").concat(c(t.row.gender),"s")}return(t,n)=>(D(),g(u,{title:"Clinic Retention Report","report-type":"Clinic",columns:r,rows:e.value,period:o.value,"drill-title":i,"use-date-range-filter":"","show-indices":"",onGenerate:a},null,8,["rows","period"]))}});export{k as default};
