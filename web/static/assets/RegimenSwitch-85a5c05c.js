import{l as i}from"./loader-09fe7d6a.js";import{_ as l}from"./ReportTable.vue_vue_type_style_index_0_lang-516be738.js";import{p as c,t as u}from"./common-abc2f84d.js";import{t as d}from"./toasts-efd70885.js";import{t as r,f}from"./his_date-1be895e6.js";import{R as h}from"./regimen_report_service-c0775bc1.js";import{d as g,r as n,o as _,j as b}from"./index-0dab41e9.js";import"./exports-e1928467.js";import"./index-5faacd6b.js";import"./vue-datepicker-b770edc0.js";import"./DrilldownTable-f8933899.js";import"./arrays-31d2d38b.js";import"./regimens-494dea9f.js";import"./report_service-229b7265.js";import"./url-ffe761c9.js";const N=g({__name:"RegimenSwitch",setup(R){const a=n("-"),o=n([]),p=[{path:"arv_number",label:"ARV Number",preSort:c,initialSort:!0},{path:"gender",label:"Gender",formatter:u},{path:"birthdate",label:"DOB (Age in Years)",formatter:s},{path:"art_start_date",label:"Start Date",formatter:r},{path:"current_weight",label:"Weight (Kg)"},{path:"previous_regimen",label:"Prev Regimen"},{path:"current_regimen",label:"Curr Regimen"},{path:"medications",label:"ARVs"},{path:"dispensation_date",label:"Dispensation Date",formatter:r}];function s(e){return"".concat(r(e)," (").concat(f(e),")")}async function m({dateRange:e}){try{await i.show();const t=new h;t.setStartDate(e.startDate),t.setEndDate(e.endDate),a.value=t.getDateIntervalPeriod(),o.value=await t.getRegimenSwitchReport()}catch(t){d("ERROR! Unable to load report data"),console.error(t)}await i.hide()}return(e,t)=>(_(),b(l,{title:"Clinic Regimen Switch Report","report-type":"Clinic",columns:p,rows:o.value,period:a.value,"use-date-range-filter":"",onGenerate:m},null,8,["rows","period"]))}});export{N as default};
