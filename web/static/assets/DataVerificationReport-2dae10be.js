import{l as e}from"./loader-bd20757d.js";import{_ as s}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{t as n}from"./toasts-a55a3f6b.js";import{D as m}from"./data_cleaning_report_service-26678039.js";import{t as o}from"./his_date-933250a6.js";import{d as l,r as p,a2 as c,h as f,o as _}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";const F=l({__name:"DataVerificationReport",setup(d){const a=p([]),r=[{path:"all_supervisors",label:"Supervisors",formatter:t=>t.join(", ")},{path:"data_cleaning_datetime",label:"Data Cleaning Date",formatter:o},{path:"created_by.name",label:"Creator"},{path:"date_created",label:"Created On",formatter:o},{path:"comments",label:"Comments"}];async function i(){try{e.show();const t=new m;t.useDefaultParams=!1,a.value=await t.getSupervisionHistory()}catch(t){n("Failed to load report data"),console.error(t)}finally{e.hide()}}return c(()=>i()),(t,u)=>(_(),f(s,{title:"Data Verification Report",columns:r,rows:a.value},null,8,["rows"]))}});export{F as default};