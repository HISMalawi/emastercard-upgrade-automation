import{l as s}from"./loader-1c88a23f.js";import{_ as c}from"./ReportTable.vue_vue_type_script_setup_true_lang-8fdfbbf3.js";import{p as d,t as _}from"./common-abc2f84d.js";import{e as f,t as r}from"./his_date-1bddad28.js";import{t as u}from"./toasts-d882244a.js";import{R as h}from"./report_service-ee0f5881.js";import{g as b}from"./datatable-96228f13.js";import{d as g,r as n,o as w,h as D}from"./index-a3fc2e12.js";import"./exports-d964c26f.js";import"./index-b8a0d675.js";import"./vue-datepicker-7c4021ca.js";import"./DrilldownTable-df83cd6e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const O=g({__name:"ClientsDueForVL",setup(v){const o=n(""),l=n([]),p=[b()],i=[{path:"arv_number",label:"ARV #",preSort:d,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:_},{path:"birthdate",label:"Age",formatter:t=>t?f(t):""},{path:"appointment_date",label:"App.",formatter:r},{path:"start_date",label:"Art started",formatter:r},{path:"months_on_art",label:"Months on ART"},{path:"mile_stone",label:"Milestone",formatter:r},{path:"last_result_order_date",label:"Ordered",formatter:r},{path:"last_result",label:"Result"},{path:"last_result_date",label:"Released",formatter:r}];async function m({dateRange:t}){var a;try{await s.show();const e=new h;e.setStartDate(t.startDate),e.setEndDate(t.endDate),o.value=e.getDateIntervalPeriod(),l.value=(a=await e.getReport("clients_due_vl"))!=null?a:[]}catch(e){u("Unable to load report data"),console.error(e)}await s.hide()}return(t,a)=>(w(),D(c,{title:"Clients Due For Viral Load Clinic Report","report-type":"Clinic",columns:i,"row-action-buttons":p,rows:l.value,period:o.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:m},null,8,["rows","period"]))}});export{O as default};