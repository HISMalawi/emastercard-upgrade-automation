import{l as n}from"./loader-d835876b.js";import{t as d,_ as c}from"./ReportTable.vue_vue_type_style_index_0_lang-f72de398.js";import{t as i}from"./common-abc2f84d.js";import{b as u,a as f}from"./tx_report_service-8bf3fbee.js";import{t as h}from"./toasts-5a6b8805.js";import{d as w,r as p,o as g,g as _}from"./index-b34da4cb.js";import"./exports-079fa91a.js";import"./index-07ada3e1.js";import"./his_date-3774cb27.js";import"./vue-datepicker-bce64927.js";import"./DrilldownTable-7a34763e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./report_service-c1a7a175.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";import"./age_groups-8203d13f.js";const S=w({__name:"TxML",setup(v){const r=p("-"),o=p([]),s=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:i},...d(u)];async function l({dateRange:t},a=!1){try{await n.show();const e=new f;e.setStartDate(t.startDate),e.setEndDate(t.endDate),r.value=e.getDateIntervalPeriod(),o.value=await e.getTxMlReport(a)}catch(e){h("ERROR! Unable to load report data"),console.error(e)}await n.hide()}function m(t){return"".concat(t.column.label," | ").concat(t.row.ageGroup," | ").concat(i(t.row.gender),"s")}return(t,a)=>(g(),_(c,{title:"PEPFAR TX ML Report",subtitle:"Clients that were Alive and on treatment before the reporting period and \n    their “next appointment date / drug runout” date falls within the reporting period. \n    30 or more days have gone between their appointment date and the end of the \n    reporting period without any clinical dispensation visit","report-type":"PEPFAR",columns:s,rows:o.value,period:r.value,"drill-title":m,useDateRangeFilter:"",showIndices:"",onGenerate:l},null,8,["rows","period"]))}});export{S as default};
