import{l as n}from"./loader-cc83f0a0.js";import{t as d,_ as c}from"./ReportTable.vue_vue_type_style_index_0_lang-1b35ccd4.js";import{T as u,a as h}from"./tx_report_service-b5065625.js";import{c as i,t as f}from"./toasts-eb3581bc.js";import{d as D,r as s,o as w,h as _}from"./index-44c2209e.js";import"./exports-aa8b872d.js";import"./index-a3bb5f33.js";import"./his_date-094b7106.js";import"./vue-datepicker-c8009a9f.js";import"./DrilldownTable-368b4134.js";import"./arrays-89ea4d05.js";import"./report_service-81bd62bb.js";import"./url-ffe761c9.js";import"./age_groups-8203d13f.js";const F=D({__name:"TxCurrMMD",setup(g){const r=s("-"),o=s([]),p=[{path:"ageGroup",label:"Age group",thStyles:{minWidth:"150px !important"}},{path:"gender",label:"Gender",formatter:i,thStyles:{minWidth:"110px !important"}},...d(u,{thStyles:{minWidth:"350px !important"}})];async function l({dateRange:t},a){try{await n.show();const e=new h;e.setStartDate(t.startDate),e.setEndDate(t.endDate),r.value=e.getDateIntervalPeriod(),o.value=await e.getTxCurrMMDReport(a)}catch(e){f("ERROR! Unable to load report data"),console.error(e)}await n.hide()}function m(t){return"".concat(t.row.ageGroup," | ").concat(t.column.label," | ").concat(i(t.row.gender),"s")}return(t,a)=>(w(),_(c,{title:"PEPFAR TX CURR MMD Report",subtitle:"Clients that are alive and on treatment in the reporting period and the difference in days between their clinical dispensation visit and \n      next appointment / drug-runout date is: 3 months (1 - 89 days), 3 - 5 months (90 - 179 days), 6+ months (180 or more days)","report-type":"PEPFAR",columns:p,rows:o.value,period:r.value,"drill-title":m,useDateRangeFilter:"",showIndices:"",onGenerate:l},null,8,["rows","period"]))}});export{F as default};
