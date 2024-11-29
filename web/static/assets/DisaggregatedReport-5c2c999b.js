import{l as n}from"./loader-bd20757d.js";import{_ as u}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{D as g}from"./disagregated_report_service-704e3e63.js";import{R as d}from"./regimens-494dea9f.js";import{c as i,t as D}from"./toasts-a55a3f6b.js";import{d as f,r as s,a2 as _,aD as h,o as b,h as w}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./his_date-933250a6.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./age_groups-8203d13f.js";import"./program_report_service-d9713f1b.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";const q=f({__name:"DisaggregatedReport",setup(R){const r=new g,o=s("-"),a=s([]),p=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:i},{path:"tx_curr",label:"TX curr (receiving ART)",drillable:!0},...d.map(e=>({path:e,label:e,drillable:!0})),{path:"unknown",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],l=async({dateRange:e},t)=>{try{await n.show(),r.setStartDate(e.startDate),r.setEndDate(e.endDate),o.value=r.getDateIntervalPeriod(),a.value=await r.getDisaggReport(t)}catch(c){console.error(c),D("Error! Unable to generate report")}n.hide()};function m(e){return"".concat(e.row.age_group," | ").concat(e.column.label," | ").concat(i(e.row.gender),"s")}return _(()=>{const{startDate:e,endDate:t}=h().query;e&&t&&l({dateRange:{startDate:e,endDate:t}},!1)}),(e,t)=>(b(),w(u,{title:"MoH Disaggregated Report","report-type":"MoH",columns:p,rows:a.value,period:o.value,"drill-title":m,useDateRangeFilter:"",showIndices:"",onGenerate:l},null,8,["rows","period"]))}});export{q as default};