import{l as o}from"./loader-cc83f0a0.js";import{_ as m}from"./ReportTable.vue_vue_type_style_index_0_lang-1b35ccd4.js";import{c,t as f}from"./toasts-eb3581bc.js";import{t as s}from"./his_date-094b7106.js";import{R as d}from"./report_service-81bd62bb.js";import{d as u,r as i,o as h,h as _}from"./index-44c2209e.js";import"./exports-aa8b872d.js";import"./index-a3bb5f33.js";import"./vue-datepicker-c8009a9f.js";import"./DrilldownTable-368b4134.js";import"./arrays-89ea4d05.js";import"./url-ffe761c9.js";class b extends d{constructor(){super()}async generate(){const t=await this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"});return Object.values(t!=null?t:{})}}const E=u({__name:"IncompleteVisits",setup(n){const t=i("-"),r=i([]),l=[{path:"arv_number",label:"ARV Number"},{path:"national_id",label:"NHID"},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:c},{path:"birthdate",label:"Date of Birth",formatter:s},{path:"dates",label:"Date(s)",formatter:a=>a.map(s).join(", ")}];async function p({dateRange:a}){await o.show();try{const e=new b;e.setStartDate(a.startDate),e.setEndDate(a.endDate),t.value=e.getDateIntervalPeriod(),r.value=await e.generate()}catch(e){f("Unable to load report data"),console.error(e)}await o.hide()}return(a,e)=>(h(),_(m,{title:"Incomplete Visits Clinic Report","report-type":"Clinic",columns:l,rows:r.value,period:t.value,"use-date-range-filter":"","use-secure-export":"","show-indices":"",onGenerate:p},null,8,["rows","period"]))}});export{E as default};