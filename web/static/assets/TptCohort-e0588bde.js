import{l}from"./loader-bd20757d.js";import{_ as d}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{c as s,t as m}from"./toasts-a55a3f6b.js";import{T as u}from"./tpt_report_service-c3a4b013.js";import{d as c,r as o,o as b,h}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./his_date-933250a6.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";import"./age_groups-8203d13f.js";const R=c({__name:"TptCohort",setup(f){const r=o("-"),a=o([]),i=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:s},{label:"Initiated ART",path:"initiated_art",drillable:!0},{label:"Initiated TPT",path:"started_tpt",drillable:!0},{label:"Completed TPT",path:"completed_tpt",drillable:!0},{label:"Not Completed TPT",path:"not_completed_tpt",drillable:!0},{label:"Died",path:"died",drillable:!0},{label:"Defaulted",path:"defaulted",drillable:!0},{label:"Stopped ART",path:"stopped",drillable:!0},{label:"TO",path:"transfer_out",drillable:!0},{label:"Confirmed TB",path:"confirmed_tb",drillable:!0},{label:"Pregnant",path:"pregnant",drillable:!0}];async function p({dateRange:e}){await l.show();try{const t=new u;t.setStartDate(e.startDate),t.setEndDate(e.endDate),r.value=t.getDateIntervalPeriod(),a.value=await t.getCohort()}catch(t){m("Unable to load report data"),console.error(t)}await l.hide()}function n(e){return"".concat(e.row.age_group," ").concat(e.column.label," ").concat(e.row.gender,"s")}return(e,t)=>(b(),h(d,{title:"MoH TPT Cohort Report","report-type":"MoH",columns:i,rows:a.value,period:r.value,"show-indices":"","use-date-range-filter":"","drill-title":n,onGenerate:p},null,8,["rows","period"]))}});export{R as default};