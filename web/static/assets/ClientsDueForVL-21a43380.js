import{l as s}from"./loader-09fe7d6a.js";import{g as c,_ as d}from"./ReportTable.vue_vue_type_style_index_0_lang-516be738.js";import{p as _,t as f}from"./common-abc2f84d.js";import{f as u,t as a}from"./his_date-1be895e6.js";import{t as h}from"./toasts-efd70885.js";import{R as b}from"./report_service-229b7265.js";import{d as g,r as n,o as w,j as D}from"./index-0dab41e9.js";import"./exports-e1928467.js";import"./index-5faacd6b.js";import"./vue-datepicker-b770edc0.js";import"./DrilldownTable-f8933899.js";import"./arrays-31d2d38b.js";import"./url-ffe761c9.js";const j=g({__name:"ClientsDueForVL",setup(v){const o=n(""),l=n([]),p=[c()],i=[{path:"arv_number",label:"ARV #",preSort:_,initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:f},{path:"birthdate",label:"Age",formatter:t=>t?u(t):""},{path:"appointment_date",label:"App.",formatter:a},{path:"start_date",label:"Art started",formatter:a},{path:"months_on_art",label:"Months on ART"},{path:"mile_stone",label:"Milestone",formatter:a},{path:"last_result_order_date",label:"Ordered",formatter:a},{path:"last_result",label:"Result"},{path:"last_result_date",label:"Released",formatter:a}];async function m({dateRange:t}){var r;try{await s.show();const e=new b;e.setStartDate(t.startDate),e.setEndDate(t.endDate),o.value=e.getDateIntervalPeriod(),l.value=(r=await e.getReport("clients_due_vl"))!=null?r:[]}catch(e){h("Unable to load report data"),console.error(e)}await s.hide()}return(t,r)=>(w(),D(d,{title:"Clients Due For Viral Load Clinic Report","report-type":"Clinic",columns:i,"row-action-buttons":p,rows:l.value,period:o.value,"use-date-range-filter":"","use-secure-export":"",onGenerate:m},null,8,["rows","period"]))}});export{j as default};
