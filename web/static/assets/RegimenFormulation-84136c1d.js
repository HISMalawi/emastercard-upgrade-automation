import{l as a}from"./loader-613ec4b9.js";import{g as c,_ as u}from"./ReportTable.vue_vue_type_style_index_0_lang-ef80aa84.js";import{t as d}from"./toasts-af37d895.js";import{p as f,t as g}from"./common-abc2f84d.js";import{t as R}from"./his_date-945fca6a.js";import{R as b}from"./regimen_report_service-224df90d.js";import{R as _,b as h}from"./regimens-494dea9f.js";import{a as i}from"./arrays-1b521787.js";import{d as v,r as n,h as w,o as D,j as F}from"./index-9908b3ca.js";import"./exports-9c152613.js";import"./index-e4e5084a.js";import"./vue-datepicker-f6b7d248.js";import"./DrilldownTable-ced13b4c.js";import"./report_service-35946e5f.js";import"./url-ffe761c9.js";const U=v({__name:"RegimenFormulation",setup(S){const o=n("-"),r=n([]),m=[c("patient_id")],s=[{path:"arv_number",label:"ARV Number",preSort:f,initialSort:!0},{path:"gender",label:"Gender",formatter:g},{path:"birthdate",label:"Date of Birth",formatter:R},{path:"regimen",label:"Reg. name"},{path:"drugs",label:"Formulation"}],l=w(()=>[{id:"regimen",label:"Select Regimen",type:"select",options:i(_)},{id:"formulation",label:"Formulation",type:"select",options:i(h)}]);async function p(e){await a.show();try{const t=new b;t.setStartDate(e.dateRange.startDate),t.setEndDate(e.dateRange.endDate),o.value=t.getDateIntervalPeriod(),r.value=await t.getRegimenFormulationReport(e.regimen.value,e.formulation.value)}catch(t){d("Unable to load report data"),console.error(t)}await a.hide()}return(e,t)=>(D(),F(u,{title:"Regimen Formulation: Patient Level Clinic Report","report-type":"Clinic",columns:s,rows:r.value,period:o.value,"row-action-buttons":m,"custom-filters":l.value,"use-date-range-filter":"",onGenerate:p},null,8,["rows","period","custom-filters"]))}});export{U as default};
