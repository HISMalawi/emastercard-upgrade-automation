import{l as m}from"./loader-4f58724a.js";import{d as f,r as c,ae as b,H as u,af as g,L as D,h,o as w}from"./index-51662e8b.js";import{_}from"./ReportTable.vue_vue_type_script_setup_true_lang-ebe70104.js";import{C as v,D as C}from"./data_cleaning_report_service-30a9078d.js";import{D as A}from"./Date-59b82c99.js";import{d as R}from"./his_date-4e03837c.js";import{t as S}from"./Strs-7ee8a435.js";import{p as B}from"./common-abc2f84d.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./exports-05ba483e.js";import"./index-2445b355.js";import"./vue-datepicker-b3128b5a.js";import"./toasts-505fc814.js";import"./DrilldownTable-69c180b8.js";import"./arrays-31d2d38b.js";import"./report_service-ff364fc0.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";const T=f({name:"DataCleaning",components:{BaseReportTable:_},setup(){const t=c([]),a=b({}),s=u(()=>"Data Cleaning Tools ".concat((a==null?void 0:a.value)||"")),r=c("-"),i=[{path:"arv_number",label:"ARV Number",preSort:B,initialSort:!0},{path:"given_name",label:"First Name"},{path:"family_name",label:"Last Name"},{path:"gender",label:"Gender",formatter:S},{path:"birthdate",label:"Date of Birth",formatter:e=>R(e).format(A)}],l=async e=>{var p;await m.show();const o=new C;o.setStartDate(e.dateRange.startDate),o.setEndDate(e.dateRange.endDate),Object.assign(a,e.tool),r.value=o.getDateIntervalPeriod(),t.value=(p=(await o.getCleaningToolReport(a.value)).data)!=null?p:[],await m.hide()},n=[{label:"Show",default:!0,action:e=>{g.push("/patient/".concat(e.patient_id))}}],d=u(()=>[{id:"tool",label:"Select Cleaning Tool",type:"select",value:a,gridSize:5,options:Object.values(v).map(e=>({label:e.toLowerCase(),value:e}))}]);return{period:r,title:s,rows:t,columns:i,rowActionBtns:n,filters:d,fetchData:l}}});function j(t,a,s,r,i,l){const n=D("base-report-table");return w(),h(n,{title:t.title,"report-icon":"clean.jpg",period:t.period,columns:t.columns,rows:t.rows,rowActionButtons:t.rowActionBtns,"custom-filters":t.filters,useDateRangeFilter:"",onGenerate:t.fetchData},null,8,["title","period","columns","rows","rowActionButtons","custom-filters","onGenerate"])}const Q=$(T,[["render",j]]);export{Q as default};