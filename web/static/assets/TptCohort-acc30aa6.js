import{l}from"./loader-09fe7d6a.js";import{_ as d}from"./ReportTable.vue_vue_type_style_index_0_lang-516be738.js";import{t as s}from"./toasts-efd70885.js";import{t as m}from"./common-abc2f84d.js";import{T as u}from"./tpt_report_service-5ad102b0.js";import{d as c,r as o,o as b,j as f}from"./index-0dab41e9.js";import"./exports-e1928467.js";import"./index-5faacd6b.js";import"./his_date-1be895e6.js";import"./vue-datepicker-b770edc0.js";import"./DrilldownTable-f8933899.js";import"./arrays-31d2d38b.js";import"./report_service-229b7265.js";import"./url-ffe761c9.js";import"./age_groups-8203d13f.js";const S=c({__name:"TptCohort",setup(h){const r=o("-"),a=o([]),i=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:m},{label:"Initiated ART",path:"initiated_art",drillable:!0},{label:"Initiated TPT",path:"started_tpt",drillable:!0},{label:"Completed TPT",path:"completed_tpt",drillable:!0},{label:"Not Completed TPT",path:"not_completed_tpt",drillable:!0},{label:"Died",path:"died",drillable:!0},{label:"Defaulted",path:"defaulted",drillable:!0},{label:"Stopped ART",path:"stopped",drillable:!0},{label:"TO",path:"transfer_out",drillable:!0},{label:"Confirmed TB",path:"confirmed_tb",drillable:!0},{label:"Pregnant",path:"pregnant",drillable:!0}];async function p({dateRange:e}){await l.show();try{const t=new u;t.setStartDate(e.startDate),t.setEndDate(e.endDate),r.value=t.getDateIntervalPeriod(),a.value=await t.getCohort()}catch(t){s("Unable to load report data"),console.error(t)}await l.hide()}function n(e){return"".concat(e.row.age_group," ").concat(e.column.label," ").concat(e.row.gender,"s")}return(e,t)=>(b(),f(d,{title:"MoH TPT Cohort Report","report-type":"MoH",columns:i,rows:a.value,period:r.value,"show-indices":"","use-date-range-filter":"","drill-title":n,onGenerate:p},null,8,["rows","period"]))}});export{S as default};
