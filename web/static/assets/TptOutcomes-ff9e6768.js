import{l as a}from"./loader-4f58724a.js";import{_ as n}from"./ReportTable.vue_vue_type_script_setup_true_lang-ebe70104.js";import{t as m}from"./common-abc2f84d.js";import{t as c}from"./toasts-505fc814.js";import{b as u,T as d}from"./tpt_report_service-838e3483.js";import{d as _,r as i,o as f,h as T}from"./index-51662e8b.js";import"./exports-05ba483e.js";import"./index-2445b355.js";import"./his_date-4e03837c.js";import"./vue-datepicker-b3128b5a.js";import"./DrilldownTable-69c180b8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./report_service-ff364fc0.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";import"./age_groups-8203d13f.js";const x=_({__name:"TptOutcomes",setup(w){const r=i("-"),o=i([]),p=[{path:"age_group",label:"Age Group"},{path:"tpt_type",label:"TPT Type"},...Object.entries(u).map(([t,e])=>({path:t,label:e,drillable:!0,sortable:!1}))];async function s({dateRange:t}){try{await a.show();const e=new d;e.setStartDate(t.startDate),e.setEndDate(t.endDate),r.value=e.getDateIntervalPeriod(),o.value=await e.getTtpOutcomes()}catch(e){c("ERROR! Unable to load report data"),console.error(e)}await a.hide()}function l(t){return"".concat(t.column.label," | ").concat(t.row.age_group," | ").concat(m(t.row.tpt_type))}return(t,e)=>(f(),T(n,{title:"TPT Outcomes Clinic Report","report-type":"Clinic",columns:p,rows:o.value,period:r.value,"drill-title":l,"use-date-range-filter":"","show-indices":"",onGenerate:s},null,8,["rows","period"]))}});export{x as default};