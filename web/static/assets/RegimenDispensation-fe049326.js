import{l as i}from"./loader-1c88a23f.js";import{_ as l}from"./ReportTable.vue_vue_type_script_setup_true_lang-8fdfbbf3.js";import{p as m,t as c}from"./common-abc2f84d.js";import{t as u}from"./toasts-d882244a.js";import{t as e}from"./his_date-1bddad28.js";import{R as d}from"./regimen_report_service-b91d38c4.js";import{d as f,r as p,o as h,h as _}from"./index-a3fc2e12.js";import"./exports-d964c26f.js";import"./index-b8a0d675.js";import"./vue-datepicker-7c4021ca.js";import"./DrilldownTable-df83cd6e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./regimens-494dea9f.js";import"./report_service-ee0f5881.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const N=f({__name:"RegimenDispensation",setup(R){const a=p("-"),o=p([]),s=[{path:"arv_number",label:"ARV Number",preSort:m,initialSort:!0},{path:"gender",label:"Gender",formatter:c},{path:"birthdate",label:"DOB",formatter:e},{path:"art_start_date",label:"ART Start Date",formatter:e},{path:"current_weight",label:"Weight (Kg)"},{path:"current_regimen",label:"Curr. Reg"},{path:"medications",label:"ARVs"},{path:"dispensation_date",label:"Curr. reg Dispensed",formatter:e},{path:"vl_result",label:"VL Result"},{path:"vl_result_date",label:"Date of VL Result",formatter:e}];async function n({dateRange:r}){try{await i.show();const t=new d;t.setStartDate(r.startDate),t.setEndDate(r.endDate),t.setReportType("moh"),a.value=t.getDateIntervalPeriod(),o.value=await t.getRegimenReport()}catch(t){u("ERROR! Unable to load report data"),console.error(t)}await i.hide()}return(r,t)=>(h(),_(l,{title:"Clinic Regimen Dispensation Report","report-type":"Clinic",columns:s,rows:o.value,period:a.value,"use-date-range-filter":"",onGenerate:n},null,8,["rows","period"]))}});export{N as default};