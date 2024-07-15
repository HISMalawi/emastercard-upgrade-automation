var G=Object.defineProperty;var R=(t,a,e)=>a in t?G(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e;var m=(t,a,e)=>(R(t,typeof a!="symbol"?a+"":a,e),e);import{l as f}from"./loader-4d6883e8.js";import{_ as y}from"./ReportTable.vue_vue_type_script_setup_true_lang-bc4b89df.js";import{t as S}from"./toasts-c6607b61.js";import{i as w,g as p}from"./common-abc2f84d.js";import{R as _}from"./report_service-e2e0778b.js";import{d as q,r as h,H as A,o as O,h as $}from"./index-2cf16bdb.js";import"./exports-0505b5ca.js";import"./index-3ac00770.js";import"./his_date-ed090df2.js";import"./vue-datepicker-b5cf8b92.js";import"./DrilldownTable-d77041f8.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./arrays-31d2d38b.js";import"./index-95d3a767.js";import"./url-ffe761c9.js";var g=(t=>(t.GENERAL="General",t.CHILDREN="Children",t.WOMEN="Women",t))(g||{});class C extends _{constructor(){super();m(this,"ageGroup");m(this,"quarter");m(this,"regenerate");this.quarter="",this.regenerate=!1,this.ageGroup="General"}setRegenerate(e){this.regenerate=e}getAgeGroup(){return this.ageGroup}setQuarter(e){this.quarter=e}setAgeGroup(e){this.ageGroup=e}async generateReport(){return this.reportBuilder(await this.getReport("cohort_survival_analysis",{quarter:this.quarter,regenerate:this.regenerate,age_group:this.ageGroup}))}getOutcomeInterval(e){const l=Object.values(e)[0];if(!l)return null;const i=Object.keys(l)[0];return parseInt(i,10)}reportBuilder(e){return Object.entries(e!=null?e:{}).reduce((l,[i,o])=>{if(!w(o)){const s=this.getOutcomeInterval(o),c=p(o,"On antiretrovirals.".concat(s),0),r=p(o,"Patient died.".concat(s),0),u=p(o,"Defaulted.".concat(s),0),v=p(o,"Treatment stopped.".concat(s),0),n=p(o,"Patient transferred out.".concat(s),0),d=p(o,"N/A.".concat(s),0),b=c+r+u+v+n+d;l.push({totalConfirmed:"",subGroup:this.ageGroup,quarter:i,interval:s,alive:c,died:r,defaulted:u,stopped:v,transferred:n,unknown:d,total:b})}return l},[])}}const J=q({__name:"SurvivalAnalysis",setup(t){const a=h(),e=h(),l=h([]),i=h("MoH Survival Analysis Report"),o=[{path:"quarter",label:"Reg Cohort",initialSort:!0,initialSortOrder:"asc",preSort:r=>parseInt(r.split(" ")[1])},{path:"interval",label:"Interval (Months)"},{path:"subGroup",label:"Sub group"},{path:"total",label:"Total Reg (database)"},{path:"totalConfirmed",label:"Total Reg (Confirmed)"},{path:"alive",label:"Alive"},{path:"died",label:"Died"},{path:"defaulted",label:"Defaulted"},{path:"stopped",label:"Stopped"},{path:"transferred",label:"Transferred out"},{path:"unknown",label:"Unknown"}],s=A(()=>[{id:"ageGroup",type:"select",label:"Sub Group:",value:e.value,options:Object.values(g).map(r=>({label:r.match(/Women/i)?"Option B+":r,value:r}))}]);async function c({quarter:r,ageGroup:u},v=!1){await f.show();try{const n=new C;n.setRegenerate(v),n.setQuarter(r.value),n.setAgeGroup(u.value),l.value=await n.generateReport(),i.value="MoH Survival Analysis (".concat(u.value,") Report")}catch(n){S("Unable to load report data"),console.error(n)}await f.hide()}return(r,u)=>(O(),$(y,{title:"MoH Survival Analysis Report","report-type":"MoH",columns:o,rows:l.value,quarter:a.value,useQuarterFilter:"","use-secure-export":"","custom-filters":s.value,filename:i.value,onGenerate:c},null,8,["rows","quarter","custom-filters","filename"]))}});export{J as default};
