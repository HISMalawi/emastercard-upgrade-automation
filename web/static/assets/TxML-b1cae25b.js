import{l as n}from"./loader-bd20757d.js";import{t as m,_ as c}from"./ReportTable.vue_vue_type_style_index_0_lang-3063f8d8.js";import{c as i,t as u}from"./toasts-a55a3f6b.js";import{b as h,a as f}from"./tx_report_service-99c70c76.js";import{d as w,r as p,o as g,h as _}from"./index-d405c632.js";import"./exports-e53ebfe1.js";import"./index-68b5c08e.js";import"./his_date-933250a6.js";import"./vue-datepicker-37b96ef6.js";import"./DrilldownTable-05f630dd.js";import"./arrays-083a09e6.js";import"./report_service-a175abc5.js";import"./url-ffe761c9.js";import"./age_groups-8203d13f.js";const $=w({__name:"TxML",setup(v){const r=p("-"),o=p([]),s=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:i},...m(h)];async function l({dateRange:e},a=!1){try{await n.show();const t=new f;t.setStartDate(e.startDate),t.setEndDate(e.endDate),r.value=t.getDateIntervalPeriod(),o.value=await t.getTxMlReport(a)}catch(t){u("ERROR! Unable to load report data"),console.error(t)}await n.hide()}function d(e){return"".concat(e.column.label," | ").concat(e.row.ageGroup," | ").concat(i(e.row.gender),"s")}return(e,a)=>(g(),_(c,{title:"PEPFAR TX ML Report",subtitle:"Clients that were Alive and on treatment before the reporting period and \n    their “next appointment date / drug runout” date falls within the reporting period. \n    30 or more days have gone between their appointment date and the end of the \n    reporting period without any clinical dispensation visit","report-type":"PEPFAR",columns:s,rows:o.value,period:r.value,"drill-title":d,useDateRangeFilter:"",showIndices:"",onGenerate:l},null,8,["rows","period"]))}});export{$ as default};