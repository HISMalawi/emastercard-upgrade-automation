import{l as i}from"./loader-cc83f0a0.js";import{_ as l}from"./ReportTable.vue_vue_type_style_index_0_lang-1b35ccd4.js";import{p as m,c,t as u}from"./toasts-eb3581bc.js";import{t as e}from"./his_date-094b7106.js";import{R as d}from"./regimen_report_service-2f8c64e7.js";import{d as f,r as s,o as h,h as _}from"./index-44c2209e.js";import"./exports-aa8b872d.js";import"./index-a3bb5f33.js";import"./vue-datepicker-c8009a9f.js";import"./DrilldownTable-368b4134.js";import"./arrays-89ea4d05.js";import"./regimens-494dea9f.js";import"./report_service-81bd62bb.js";import"./url-ffe761c9.js";const E=f({__name:"RegimenDispensation",setup(R){const a=s("-"),o=s([]),n=[{path:"arv_number",label:"ARV Number",preSort:m,initialSort:!0},{path:"gender",label:"Gender",formatter:c},{path:"birthdate",label:"DOB",formatter:e},{path:"art_start_date",label:"ART Start Date",formatter:e},{path:"current_weight",label:"Weight (Kg)"},{path:"current_regimen",label:"Curr. Reg"},{path:"medications",label:"ARVs"},{path:"dispensation_date",label:"Curr. reg Dispensed",formatter:e},{path:"vl_result",label:"VL Result"},{path:"vl_result_date",label:"Date of VL Result",formatter:e}];async function p({dateRange:r}){try{await i.show();const t=new d;t.setStartDate(r.startDate),t.setEndDate(r.endDate),t.setReportType("moh"),a.value=t.getDateIntervalPeriod(),o.value=await t.getRegimenReport()}catch(t){u("ERROR! Unable to load report data"),console.error(t)}await i.hide()}return(r,t)=>(h(),_(l,{title:"Clinic Regimen Dispensation Report","report-type":"Clinic",columns:n,rows:o.value,period:a.value,"use-date-range-filter":"",onGenerate:p},null,8,["rows","period"]))}});export{E as default};
