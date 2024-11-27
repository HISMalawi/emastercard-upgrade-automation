import{l as a}from"./loader-bd20757d.js";import{_ as n}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{t as c,c as m}from"./toasts-a55a3f6b.js";import{b as u,T as d}from"./tpt_report_service-c3a4b013.js";import{d as _,r as i,o as f,h as T}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./his_date-933250a6.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";import"./age_groups-8203d13f.js";const G=_({__name:"TptOutcomes",setup(w){const r=i("-"),o=i([]),p=[{path:"age_group",label:"Age Group"},{path:"tpt_type",label:"TPT Type"},...Object.entries(u).map(([t,e])=>({path:t,label:e,drillable:!0,sortable:!1}))];async function s({dateRange:t}){try{await a.show();const e=new d;e.setStartDate(t.startDate),e.setEndDate(t.endDate),r.value=e.getDateIntervalPeriod(),o.value=await e.getTtpOutcomes()}catch(e){c("ERROR! Unable to load report data"),console.error(e)}await a.hide()}function l(t){return"".concat(t.column.label," | ").concat(t.row.age_group," | ").concat(m(t.row.tpt_type))}return(t,e)=>(f(),T(n,{title:"TPT Outcomes Clinic Report","report-type":"Clinic",columns:p,rows:o.value,period:r.value,"drill-title":l,"use-date-range-filter":"","show-indices":"",onGenerate:s},null,8,["rows","period"]))}});export{G as default};
