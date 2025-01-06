import{l as u}from"./loader-09fe7d6a.js";import{d as C,r as d,ah as _,h as s,ai as R,_ as B,L as S,j as $,o as A}from"./index-0dab41e9.js";import{_ as T}from"./ReportTable.vue_vue_type_style_index_0_lang-516be738.js";import{C as f,D as y}from"./data_cleaning_report_service-31930cdb.js";import{t as j}from"./Strs-7ee8a435.js";import{p as F}from"./common-abc2f84d.js";import{t as l}from"./his_date-1be895e6.js";import"./exports-e1928467.js";import"./index-5faacd6b.js";import"./vue-datepicker-b770edc0.js";import"./toasts-efd70885.js";import"./DrilldownTable-f8933899.js";import"./arrays-31d2d38b.js";import"./report_service-229b7265.js";import"./url-ffe761c9.js";const G=C({name:"DataCleaning",components:{BaseReportTable:T},setup(){const e=d([]),a=_({}),i=s(()=>"Data Cleaning Tools ".concat((a==null?void 0:a.value)||"")),n=d("-"),p={path:"visit_date",label:"Visit Date",formatter:t=>{const o=t.split(",");return o.length>1?"".concat(o.length," visits dates"):l(t)},drillable:t=>/visits/i.test(t)},m=t=>t.column.path,r=[{path:"arv_number",label:"ARV Number",preSort:F,initialSort:!0},{path:"given_name",label:"First Name"},{path:"family_name",label:"Last Name"}],w=s(()=>[...r,{path:"gender",label:"Gender",formatter:j},{path:"birthdate",label:"Date of Birth",formatter:l},...a.value===f.MalesWithFemaleObs?[p]:[]]),b=[...r,{path:"visit_date",label:"Visit Date",formatter:l}],h=async t=>t.row.visit_date.split(",").map(o=>({...t.row,person_id:t.row.patient_id,visit_date:o})),D=async t=>{var c;await u.show();const o=new y;o.setStartDate(t.dateRange.startDate),o.setEndDate(t.dateRange.endDate),Object.assign(a,t.tool),n.value=o.getDateIntervalPeriod(),e.value=(c=await o.getCleaningToolReport(a.value))!=null?c:[],await u.hide()},g=[{label:"Show",action:t=>{R.push("/patient/".concat(t.patient_id))}}],v=s(()=>[{id:"tool",label:"Select Cleaning Tool",type:"select",value:a,gridSize:5,options:Object.values(f).map(t=>({label:t.toLowerCase(),value:t}))}]);return{period:n,title:i,rows:e,columns:w,rowActionBtns:g,filters:v,drillColumns:b,fetchData:D,getDrilldownTitle:m,onDrillRowParser:h}}});function N(e,a,i,n,p,m){const r=S("base-report-table");return A(),$(r,{title:e.title,"report-icon":"clean.jpg",period:e.period,columns:e.columns,rows:e.rows,rowActionButtons:e.rowActionBtns,"custom-filters":e.filters,useDateRangeFilter:"","drill-title":e.getDrilldownTitle,"drill-row-parser":e.onDrillRowParser,"custom-drill-columns":e.drillColumns,onGenerate:e.fetchData},null,8,["title","period","columns","rows","rowActionButtons","custom-filters","drill-title","drill-row-parser","custom-drill-columns","onGenerate"])}const U=B(G,[["render",N]]);export{U as default};
