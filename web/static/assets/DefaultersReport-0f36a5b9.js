import{l as s}from"./loader-13c76502.js";import{g as u,_ as f}from"./ReportTable.vue_vue_type_style_index_0_lang-2ed957b1.js";import{p as c,t as d}from"./common-abc2f84d.js";import{t as i}from"./his_date-1f6a8082.js";import{D}from"./defaulter_report_service-4bc9b6d5.js";import{t as b}from"./toasts-2ce27f65.js";import{d as h,r,o as _,h as g}from"./index-67d679d3.js";import"./exports-3ab858a9.js";import"./index-2380d2dc.js";import"./vue-datepicker-2b343ada.js";import"./DrilldownTable-e46dc448.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./report_service-06dc39e3.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const I=h({__name:"DefaultersReport",setup(v){const o=r("-"),e=r([]),l=r("PEPFAR Defaulters List Report"),p=[u()],n=[{path:"arv_number",label:"ARV Number",preSort:c,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:d},{path:"birthdate",label:"Date of Birth",formatter:i},{path:"age",label:"Age (At reporting)"},{path:"defaulter_date",label:"Defaulted Date",formatter:i}];async function m({dateRange:a}){await s.show();const t=new D;t.setStartDate(a.startDate),t.setEndDate(a.endDate),o.value=t.getDateIntervalPeriod();try{e.value=await t.getDefaulters(),l.value="PEPFAR Defaulters List Report <b>(".concat(e.value.length," Defaulters)</b>")}catch(w){b("Unable to load report data")}await s.hide()}return(a,t)=>(_(),g(f,{title:l.value,"report-type":"PEPFAR",columns:n,"row-action-buttons":p,rows:e.value,period:o.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:m},null,8,["title","rows","period"]))}});export{I as default};
