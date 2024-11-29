import{l as a}from"./loader-bd20757d.js";import{_ as m}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{D as c}from"./disagregated_report_service-704e3e63.js";import{R as u}from"./regimens-494dea9f.js";import{c as l,t as g}from"./toasts-a55a3f6b.js";import{d,r as i,o as f,h as D}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./his_date-933250a6.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./age_groups-8203d13f.js";import"./program_report_service-d9713f1b.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";const S=d({__name:"DisagreggatedReport",setup(_){const t=i("-"),o=i([]),p=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:l},{path:"tx_curr",label:"TX curr (receiving ART)",drillable:!0},...u.map(e=>({path:e,label:e,drillable:!0})),{path:"unknown",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],n=async({dateRange:e})=>{try{await a.show();const r=new c;r.setStartDate(e.startDate),r.setEndDate(e.endDate),t.value=r.getDateIntervalPeriod(),o.value=await r.getDisaggReport(!0,"pepfar")}catch(r){console.error(r),g("Error! Unable to generate report")}a.hide()};function s(e){return"".concat(e.row.age_group," | ").concat(e.column.label," | ").concat(l(e.row.gender),"s")}return(e,r)=>(f(),D(m,{title:"PEPFAR Disaggregated Report","report-type":"PEPFAR",columns:p,rows:o.value,period:t.value,"drill-title":s,useDateRangeFilter:"",showIndices:"",onGenerate:n},null,8,["rows","period"]))}});export{S as default};