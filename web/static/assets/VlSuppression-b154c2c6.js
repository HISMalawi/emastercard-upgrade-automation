import{l as a}from"./loader-1c88a23f.js";import{_ as s}from"./ReportTable.vue_vue_type_script_setup_true_lang-8fdfbbf3.js";import{P as m}from"./program_report_service-e5731f10.js";import{t as c}from"./toasts-d882244a.js";import{d as u,r as l,o as d,h as _}from"./index-a3fc2e12.js";import"./exports-d964c26f.js";import"./index-b8a0d675.js";import"./his_date-1bddad28.js";import"./vue-datepicker-7c4021ca.js";import"./common-abc2f84d.js";import"./DrilldownTable-df83cd6e.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./report_service-ee0f5881.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const x=u({__name:"VlSuppression",setup(f){const t=l("-"),o=l([]),i=[{path:"regimen",label:"Regimen"},{path:"due_for_vl",label:"Due for VL",drillable:!0},{path:"drawn",label:"Sample drawn",drillable:!0},{path:"high_vl",label:"High vl (>=1000 copies)",drillable:!0},{path:"low_vl",label:"Low vl (<1000 cpies)",drillable:!0}];async function n({dateRange:r}){try{await a.show();const e=new m;e.setStartDate(r.startDate),e.setEndDate(r.endDate),t.value=e.getDateIntervalPeriod(),o.value=await e.generate("vl_supression",{system_type:"emastercard"})}catch(e){c("ERROR! Unable to load report data"),console.error(e)}await a.hide()}function p(r){return"".concat(r.column.label," on ").concat(r.row.regimen," regimen")}return(r,e)=>(d(),_(s,{title:"Clinic VL Suppression Report","report-type":"Clinic",columns:i,rows:o.value,period:t.value,"drill-title":p,useDateRangeFilter:"",onGenerate:n},null,8,["rows","period"]))}});export{x as default};