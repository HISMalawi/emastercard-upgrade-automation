import{l as i}from"./loader-4f58724a.js";import{_ as c}from"./ReportTable.vue_vue_type_script_setup_true_lang-ebe70104.js";import{D as g}from"./disagregated_report_service-cf48d53a.js";import{R as d}from"./regimens-494dea9f.js";import{t as n}from"./common-abc2f84d.js";import{t as f}from"./toasts-505fc814.js";import{d as D,r as p,a2 as _,au as h,o as b,h as w}from"./index-51662e8b.js";import"./exports-05ba483e.js";import"./index-2445b355.js";import"./his_date-4e03837c.js";import"./vue-datepicker-b3128b5a.js";import"./DrilldownTable-69c180b8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./age_groups-8203d13f.js";import"./program_report_service-8b580a96.js";import"./report_service-ff364fc0.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const P=D({__name:"DisaggregatedReport",setup(R){const r=new g,o=p("-"),a=p([]),s=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:n},{path:"tx_curr",label:"TX curr (receiving ART)",drillable:!0},...d.map(e=>({path:e,label:e,drillable:!0})),{path:"unknown",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],l=async({dateRange:e},t)=>{try{await i.show(),r.setStartDate(e.startDate),r.setEndDate(e.endDate),o.value=r.getDateIntervalPeriod(),a.value=await r.getDisaggReport(t)}catch(u){console.error(u),f("Error! Unable to generate report")}i.hide()};function m(e){return"".concat(e.row.age_group," | ").concat(e.column.label," | ").concat(n(e.row.gender),"s")}return _(()=>{const{startDate:e,endDate:t}=h().query;e&&t&&l({dateRange:{startDate:e,endDate:t}},!1)}),(e,t)=>(b(),w(c,{title:"MoH Disaggregated Report","report-type":"MoH",columns:s,rows:a.value,period:o.value,"drill-title":m,useDateRangeFilter:"",showIndices:"",onGenerate:l},null,8,["rows","period"]))}});export{P as default};