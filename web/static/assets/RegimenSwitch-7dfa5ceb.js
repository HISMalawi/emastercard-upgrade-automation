import{l as i}from"./loader-cc83f0a0.js";import{_ as l}from"./ReportTable.vue_vue_type_style_index_0_lang-1b35ccd4.js";import{p as c,c as u,t as d}from"./toasts-eb3581bc.js";import{t as r,e as h}from"./his_date-094b7106.js";import{R as f}from"./regimen_report_service-2f8c64e7.js";import{d as g,r as n,o as _,h as b}from"./index-44c2209e.js";import"./exports-aa8b872d.js";import"./index-a3bb5f33.js";import"./vue-datepicker-c8009a9f.js";import"./DrilldownTable-368b4134.js";import"./arrays-89ea4d05.js";import"./regimens-494dea9f.js";import"./report_service-81bd62bb.js";import"./url-ffe761c9.js";const F=g({__name:"RegimenSwitch",setup(R){const a=n("-"),o=n([]),p=[{path:"arv_number",label:"ARV Number",preSort:c,initialSort:!0},{path:"gender",label:"Gender",formatter:u},{path:"birthdate",label:"DOB (Age in Years)",formatter:s},{path:"art_start_date",label:"Start Date",formatter:r},{path:"current_weight",label:"Weight (Kg)"},{path:"previous_regimen",label:"Prev Regimen"},{path:"current_regimen",label:"Curr Regimen"},{path:"medications",label:"ARVs"},{path:"dispensation_date",label:"Dispensation Date",formatter:r}];function s(t){return"".concat(r(t)," (").concat(h(t),")")}async function m({dateRange:t}){try{await i.show();const e=new f;e.setStartDate(t.startDate),e.setEndDate(t.endDate),a.value=e.getDateIntervalPeriod(),o.value=await e.getRegimenSwitchReport()}catch(e){d("ERROR! Unable to load report data"),console.error(e)}await i.hide()}return(t,e)=>(_(),b(l,{title:"Clinic Regimen Switch Report","report-type":"Clinic",columns:p,rows:o.value,period:a.value,"use-date-range-filter":"",onGenerate:m},null,8,["rows","period"]))}});export{F as default};
