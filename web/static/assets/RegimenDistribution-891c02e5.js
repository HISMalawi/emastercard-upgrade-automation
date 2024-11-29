import{l as r}from"./loader-bd20757d.js";import{_ as l}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{c as m,t as c}from"./toasts-a55a3f6b.js";import{R as d}from"./regimen_report_service-199fadfa.js";import{a as h}from"./regimens-494dea9f.js";import{d as f,r as i,o as u,h as _}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./his_date-933250a6.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";const M=f({__name:"RegimenDistribution",setup(g){const o=i("-"),a=i([]),n=[{path:"weight",label:"Weight Band"},{path:"gender",label:"Gender",formatter:m},...h.map(t=>({path:t,label:t})),{path:"N/A",label:"Unknown"},{path:"total",label:"Total"}];async function s({dateRange:t},p=!1){try{await r.show();const e=new d;e.setStartDate(t.startDate),e.setEndDate(t.endDate),o.value=e.getDateIntervalPeriod(),a.value=await e.getRegimensByWeight()}catch(e){c("ERROR! Unable to load report data"),console.error(e)}await r.hide()}return(t,p)=>(u(),_(l,{title:"MoH Regimen Distribution By Weight Report","report-type":"MoH",useDateRangeFilter:"",showIndices:"",columns:n,rows:a.value,period:o.value,onGenerate:s},null,8,["rows","period"]))}});export{M as default};