import{l as o}from"./loader-161c88b9.js";import{_ as m}from"./ReportTable.vue_vue_type_script_setup_true_lang-4a26db6e.js";import{t as c}from"./toasts-a30647ed.js";import{t as f}from"./common-8a0477e8.js";import{t as s}from"./his_date-68cf9d33.js";import{R as d}from"./report_service-595e8b35.js";import{d as u,r as i,o as h,h as _}from"./index-9d5e84a5.js";import"./exports-ecad058b.js";import"./index-fca9b4d0.js";import"./vue-datepicker-7955ae14.js";import"./DrilldownTable-696672fe.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-d6bc15b2.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";class b extends d{constructor(){super()}async generate(){const t=await this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"});return Object.values(t!=null?t:{})}}const N=u({__name:"IncompleteVisits",setup(n){const t=i("-"),a=i([]),p=[{path:"arv_number",label:"ARV Number"},{path:"national_id",label:"NHID"},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:f},{path:"birthdate",label:"Date of Birth",formatter:s},{path:"dates",label:"Date(s)",formatter:r=>r.map(s).join(", ")}];async function l({dateRange:r}){await o.show();try{const e=new b;e.setStartDate(r.startDate),e.setEndDate(r.endDate),t.value=e.getDateIntervalPeriod(),a.value=await e.generate()}catch(e){c("Unable to load report data"),console.error(e)}await o.hide()}return(r,e)=>(h(),_(m,{title:"Incomplete Visits Clinic Report","report-type":"Clinic",columns:p,rows:a.value,period:t.value,"use-date-range-filter":"","use-secure-export":"","show-indices":"",onGenerate:l},null,8,["rows","period"]))}});export{N as default};
