import{l}from"./loader-0a050b3f.js";import{_ as f}from"./ReportTable.vue_vue_type_style_index_0_lang-a4057d92.js";import{t as b}from"./toasts-4c6a636f.js";import{c as h}from"./his_date-d43cc0fa.js";import{R as _}from"./report_service-d8ac4aa7.js";import{d as w,r as n,j as v,o as g}from"./index-2ad1f2cc.js";import"./exports-8cb6c2e0.js";import"./index-c01dbcbd.js";import"./vue-datepicker-d131b19a.js";import"./common-abc2f84d.js";import"./DrilldownTable-ee026539.js";import"./arrays-1b521787.js";import"./url-ffe761c9.js";const E=w({__name:"SystemAuditsReport",setup(y){const a=n(""),o=n([]),s=[{path:"auditable_type",label:"Encounter"},{path:"action",label:"Action"},{path:"user",label:"User",formatter:p},{path:"created_at",label:"Timestamp",formatter:h},{path:"changes",label:"Changes",drillable:!0}],i=[{path:"attribute",label:"Attribute"},{path:"previous",label:"Previous Value"},{path:"current",label:"Current Value"}];async function u({dateRange:t}){var r;try{l.show();const e=new _;e.setStartDate(t.startDate),e.setEndDate(t.endDate),a.value=e.getDateIntervalPeriod(),o.value=(r=await e.getReport("audits"))!=null?r:[]}catch(e){b("Failed to load report data"),console.error(e)}l.hide()}function p(t){return t?"".concat(t.username," (").concat(t.name,")"):"Unknown User"}function m({row:t}){return"Changes made by ".concat(t.user.name," on ").concat(t.auditable_type)}function c(t){return t.row.changes.map(r=>{const[e,d]=Object.entries(r)[0]||[];return e?/password/i.test(e)?{attribute:e,previous:"*******",current:"*******"}:{attribute:e,...d}:null}).filter(r=>r!==null)}return(t,r)=>(g(),v(f,{title:"System Audits",columns:s,rows:o.value,period:a.value,"show-drill-select-button":!1,"custom-drill-columns":i,"drill-row-parser":c,"drill-title":m,onGenerate:u,"use-date-range-filter":""},null,8,["rows","period"]))}});export{E as default};
