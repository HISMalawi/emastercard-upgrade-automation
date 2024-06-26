import{g as F,a as T}from"./exports-ecad058b.js";import{s as L,p as Q,t as j,i as m,g as U}from"./common-8a0477e8.js";import{d as z,r as y,H as p,F as G,d8 as K,h as w,w as s,u as o,o as v,a as d,l as O,m as x,y as V,b as W,f as J,t as X,au as Y,by as Z,N as _,at as ee,a4 as te,a5 as ae,d9 as le,af as re,aD as oe}from"./index-9d5e84a5.js";import{h as ne,t as se,c as ie}from"./his_date-68cf9d33.js";import{K as A}from"./vue-datepicker-7955ae14.js";import{D as ue}from"./index-fca9b4d0.js";import{t as c}from"./toasts-a30647ed.js";import{m as de,D as pe}from"./DrilldownTable-696672fe.js";import{c as ce}from"./arrays-d6bc15b2.js";const Re=z({__name:"ReportTable",props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Array},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""},drillTitle:{type:Function,default:()=>"Drill-down table"},customDrillColumns:{type:Array},drillRowParser:{type:Function}},emits:["generate"],setup(r,{emit:I}){const D=I,t=r,i=y([]),f=y(""),g=y({}),R=p(()=>L("\n  ".concat(t.reportType," \n  ").concat(G().facility.name," \n  ").concat((t.filename||t.title).replace(t.reportType,"")," \n  ").concat(t.period?t.period:t.date,"\n"))),B={maxWidth:"68px !important"},k=p(()=>t.columns.map(e=>({...e,thStyles:{...B,...e.thStyles},tdStyles:{...B,...e.tdStyles}}))),C=p(()=>{const e=[...t.customFilters];return t.useDateRangeFilter?e.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:4,value:{start:t.period.split("-")[0],end:t.period.split("-")[1]}}):t.useQuarterFilter?e.push({id:"quarter",label:"Quarter:",type:"select",value:t.quarter,options:ne(10).map(a=>({label:a.name,value:a.name,other:a}))}):t.useDateFilter&&e.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:t.date}),e}),E=p(()=>{var a,l;const e=[...t.actionButtons];return t.canExportCsv&&e.push(F(R.value,(a=t.quarter)==null?void 0:a.label,t.period)),t.canExportPDF&&e.push(T(R.value,t.useSecureExport,(l=t.quarter)==null?void 0:l.label,t.period)),t.showRefreshButton&&e.push(M()),e}),N=p(()=>{var e;return(e=t.customDrillColumns)!=null?e:[{path:"identifier",label:"ARV Number",preSort:Q,initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:se},{path:"gender",label:"Gender",formatter:j}]});function M(){return{label:"Refresh/Rebuild",icon:K,color:"primary",action:()=>{if(m(g.value))return c("Invalid filters");D("generate",g.value,!0)}}}function P(e){return C.value.every(a=>a.required===!1?!0:m(e[a.id])?!1:typeof e[a.id]=="object"?Object.values(e[a.id]).every(Boolean):!0)}function $(e){if("dateRange"in e){if(m(i.value)||i.value.length<2)return c("Invalid date range");e.dateRange={startDate:i.value[0],endDate:i.value[1]}}if("date"in e){if(m(f.value))return c("Invalid date");e.date=f.value}if(P(e))return g.value=e,D("generate",e,!1);c("Invalid filters")}function q(e){return e.preventDefault(),S({row:{clients:t.totalClients},column:{path:"clients",label:"Total Clients"}})}async function H(e,a){var l,n;if(typeof t.drillRowParser=="function")a=await t.drillRowParser(e);else{const u=U(e.row,e.column.path,[]);for(const h of ce(u,100)){const b=await oe.getAll(h);if(!b.ok)return c((l=b.errorMessage)!=null?l:"Unable to load patient data");a.push(...(n=b.data)!=null?n:[])}}}async function S(e){var n,u;const a=t.drillTitle(e),l=y([]);return H(e,l.value),de.show(pe,{title:a,columns:N.value,rows:l.value,rowActionButtons:[{icon:le,action:({person_id:h})=>re.push("/patient/".concat(h))}],actionButtons:[F(a,(n=t.quarter)==null?void 0:n.label,t.period),T(a,!1,(u=t.quarter)==null?void 0:u.label,t.period)]})}return(e,a)=>(v(),w(o(ae),{style:{padding:"0 !important"}},{default:s(()=>[d(o(Y),{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:s(()=>{var l;return[d(o(O),{innerHTML:r.title},null,8,["innerHTML"]),r.subtitle?(v(),w(o(x),{key:0,innerHTML:r.subtitle,style:{color:"#818181"}},null,8,["innerHTML"])):V("",!0),(l=r.totalClients)!=null&&l.length?(v(),w(o(x),{key:1},{default:s(()=>[W(" Total Clients: "),J("a",{href:"#",onClick:q},X(r.totalClients.length),1)]),_:1})):V("",!0)]}),_:1}),d(o(te),{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:s(()=>[d(o(ue),{rows:r.rows,"async-rows":r.asyncRows,columns:k.value,"actions-buttons":E.value,"row-actions-buttons":r.rowActionButtons,"custom-filters":C.value,config:{showIndices:r.showIndices},onCustomFilter:$,onDrilldown:S,color:"light"},Z({dateRange:s(()=>[d(o(A),{modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=l=>i.value=l),placeholder:"Select date range","partial-range":!1,"enable-time-picker":!1,format:o(ie),"multi-calendars":"","auto-apply":"","text-input":"",range:""},null,8,["modelValue","format"])]),datePicker:s(()=>[d(o(A),{modelValue:f.value,"onUpdate:modelValue":a[1]||(a[1]=l=>f.value=l),"enable-time-picker":!1,"model-type":"dd/MMM/yyyy",placeholder:"select date","auto-apply":"","text-input":""},null,8,["modelValue"])]),_:2},[_(e.$slots,(l,n)=>({name:n,fn:s(({filter:u})=>[ee(e.$slots,n,{filter:{filter:u}})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config"])]),_:3})]),_:3}))}});export{Re as _};
