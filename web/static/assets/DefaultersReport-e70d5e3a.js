import{l as s}from"./loader-bd20757d.js";import{g as u,_ as f}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{p as c,c as d,t as D}from"./toasts-a55a3f6b.js";import{t as n}from"./his_date-933250a6.js";import{D as b}from"./defaulter_report_service-0a023994.js";import{d as h,r,o as _,h as g}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";const V=h({__name:"DefaultersReport",setup(v){const o=r("-"),e=r([]),l=r("PEPFAR Defaulters List Report"),i=[u()],p=[{path:"arv_number",label:"ARV Number",preSort:c,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:d},{path:"birthdate",label:"Date of Birth",formatter:n},{path:"age",label:"Age (At reporting)"},{path:"defaulter_date",label:"Defaulted Date",formatter:n}];async function m({dateRange:a}){await s.show();const t=new b;t.setStartDate(a.startDate),t.setEndDate(a.endDate),o.value=t.getDateIntervalPeriod();try{e.value=await t.getDefaulters(),l.value="PEPFAR Defaulters List Report <b>(".concat(e.value.length," Defaulters)</b>")}catch(w){D("Unable to load report data")}await s.hide()}return(a,t)=>(_(),g(f,{title:l.value,"report-type":"PEPFAR",columns:p,"row-action-buttons":i,rows:e.value,period:o.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:m},null,8,["title","rows","period"]))}});export{V as default};
