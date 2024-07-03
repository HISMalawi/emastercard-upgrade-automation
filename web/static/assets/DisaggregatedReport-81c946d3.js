import{l as s}from"./loader-c899e325.js";import{_ as u}from"./ReportTable.vue_vue_type_script_setup_true_lang-4229d0ff.js";import{D as d}from"./disagregated_report_service-641a0bd7.js";import{R as c}from"./regimens-494dea9f.js";import{t as g}from"./common-abc2f84d.js";import{t as f}from"./toasts-8d20c315.js";import{d as D,r as n,a2 as _,ay as b,o as h,h as w}from"./index-4d483828.js";import"./exports-a595bb5d.js";import"./index-f32674be.js";import"./his_date-cffe3798.js";import"./vue-datepicker-f279bdcc.js";import"./DrilldownTable-b0734ef3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./age_groups-8203d13f.js";import"./program_report_service-791d9c91.js";import"./report_service-7e51be12.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const O=D({__name:"DisaggregatedReport",setup(R){const r=new d,a=n("-"),l=n([]),p=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:g},{path:"tx_curr",label:"TX curr (receiving ART)",drillable:!0},...c.map(e=>({path:e,label:e,drillable:!0})),{path:"unknown",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],i=async({dateRange:e},o=!0,t="Custom")=>{try{await s.show(),r.setStartDate(e.startDate),r.setEndDate(e.endDate),r.setRebuildOutcome(o),r.setQuarter(t),a.value=r.getDateIntervalPeriod(),l.value=await r.getDisaggReport(o)}catch(m){console.error(m),f("Error! Unable to generate report")}s.hide()};return _(()=>{const{start_date:e,end_date:o,quarter:t}=b().query;e&&o&&t&&i({dateRange:{startDate:e,endDate:o}},!1,t)}),(e,o)=>(h(),w(u,{title:"MoH Disaggregated Report","report-type":"MoH",columns:p,rows:l.value,period:a.value,"drill-title":t=>"".concat(t.row.ageGroup," ").concat(t.column.label," | ").concat(t.row.gender,"s"),useDateRangeFilter:"",showIndices:"",onGenerate:i},null,8,["rows","period","drill-title"]))}});export{O as default};