import{l as o}from"./loader-bd20757d.js";import{_ as m}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{c,t as f}from"./toasts-a55a3f6b.js";import{t as s}from"./his_date-933250a6.js";import{R as d}from"./report_service-a175abc5.js";import{d as u,r as i,o as h,h as _}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./url-ffe761c9.js";class b extends d{constructor(){super()}async generate(){const t=await this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"});return Object.values(t!=null?t:{})}}const E=u({__name:"IncompleteVisits",setup(n){const t=i("-"),r=i([]),l=[{path:"arv_number",label:"ARV Number"},{path:"national_id",label:"NHID"},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:c},{path:"birthdate",label:"Date of Birth",formatter:s},{path:"dates",label:"Date(s)",formatter:a=>a.map(s).join(", ")}];async function p({dateRange:a}){await o.show();try{const e=new b;e.setStartDate(a.startDate),e.setEndDate(a.endDate),t.value=e.getDateIntervalPeriod(),r.value=await e.generate()}catch(e){f("Unable to load report data"),console.error(e)}await o.hide()}return(a,e)=>(h(),_(m,{title:"Incomplete Visits Clinic Report","report-type":"Clinic",columns:l,rows:r.value,period:t.value,"use-date-range-filter":"","use-secure-export":"","show-indices":"",onGenerate:p},null,8,["rows","period"]))}});export{E as default};
