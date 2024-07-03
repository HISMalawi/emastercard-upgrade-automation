import{l as n}from"./loader-c899e325.js";import{_}from"./ReportTable.vue_vue_type_script_setup_true_lang-4229d0ff.js";import{t as h}from"./toasts-8d20c315.js";import{p as v,t as b}from"./common-abc2f84d.js";import{t as m}from"./his_date-cffe3798.js";import{g}from"./datatable-6c42f8c8.js";import{P as D}from"./program_report_service-791d9c91.js";import{t as w}from"./form-129546df.js";import{d as O,r as a,H as p,o as R,h as y}from"./index-4d483828.js";import"./exports-a595bb5d.js";import"./index-f32674be.js";import"./vue-datepicker-f279bdcc.js";import"./DrilldownTable-b0734ef3.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./report_service-7e51be12.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";import"./Strs-7ee8a435.js";const q=O({__name:"OtherOutcomesReport",setup(S){const i=a("-"),o=a(""),s=a([]),l=p(()=>"".concat(o.value||"Other Outcomes"," Clinic Report")),c=[g("patient_id")],u=p(()=>{const t=[{path:"identifier",label:"ARV Number",preSort:v,initialSort:!0},{path:"given_name",label:"First Name"},{path:"family_name",label:"Last Name"},{path:"birthdate",label:"Date of Birth",formatter:m},{path:"gender",label:"Gender",formatter:b},{path:"outcome_date",label:"Outcome Date",formatter:m}];return/transfer/i.test(o.value)&&t.push({path:"transferred_out_to",label:"TO Location"}),t}),d=[{id:"outcome",label:"Select Outcome",type:"select",options:w(["Transfer Out","Died","Stopped"])}];async function f(t){var r;await n.show();try{const e=new D;o.value=t.outcome.value,e.setStartDate(t.dateRange.startDate),e.setEndDate(t.dateRange.endDate),i.value=e.getDateIntervalPeriod(),s.value=(r=await e.getReport("patient_outcome_list",{outcome:o.value}))!=null?r:[]}catch(e){h("Unable to load report data"),console.error(e)}await n.hide()}return(t,r)=>(R(),y(_,{"report-type":"Clinic",title:l.value,columns:u.value,rows:s.value,period:i.value,"row-action-buttons":c,"custom-filters":d,"use-date-range-filter":"","use-secure-export":"",onGenerate:f},null,8,["title","columns","rows","period"]))}});export{q as default};
