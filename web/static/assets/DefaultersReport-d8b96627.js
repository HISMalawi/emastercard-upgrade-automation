import{l as s}from"./loader-c899e325.js";import{_ as u}from"./ReportTable.vue_vue_type_script_setup_true_lang-4229d0ff.js";import{p as c,t as d}from"./common-abc2f84d.js";import{t as i}from"./his_date-cffe3798.js";import{D}from"./defaulter_report_service-3bcebc28.js";import{t as b}from"./toasts-8d20c315.js";import{g as h}from"./datatable-6c42f8c8.js";import{d as _,r as a,o as g,h as v}from"./index-4d483828.js";import"./exports-a595bb5d.js";import"./index-f32674be.js";import"./vue-datepicker-f279bdcc.js";import"./DrilldownTable-b0734ef3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./report_service-7e51be12.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const U=_({__name:"DefaultersReport",setup(w){const o=a("-"),e=a([]),l=a("Clinic Defaulters List Report"),n=[h()],p=[{path:"arv_number",label:"ARV Number",preSort:c,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:d},{path:"birthdate",label:"Date of Birth",formatter:i},{path:"current_age",label:"Age (At reporting)"},{path:"defaulter_date",label:"Defaulted Date",formatter:i}];async function m({dateRange:r}){await s.show();const t=new D;t.setIsPepfar(!1),t.setStartDate(r.startDate),t.setEndDate(r.endDate),o.value=t.getDateIntervalPeriod();try{e.value=await t.getDefaulters(),l.value="PEPFAR Defaulters List Report <b>(".concat(e.value.length," Defaulters)</b>")}catch(f){b("Unable to load report data"),console.error(f)}await s.hide()}return(r,t)=>(g(),v(u,{title:l.value,"report-type":"Clinic",columns:p,"row-action-buttons":n,rows:e.value,period:o.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:m},null,8,["title","rows","period"]))}});export{U as default};