System.register(["./exports-legacy-75c152be.js","./common-legacy-0d7df615.js","./index-legacy-6a8cc98f.js","./his_date-legacy-45d6bc67.js","./vue-datepicker-legacy-4a383a53.js","./index-legacy-ce3864a4.js","./toasts-legacy-7157433d.js","./DrilldownTable-legacy-5e4c56c4.js","./arrays-legacy-e3b1d86b.js"],(function(e,t){"use strict";var a,l,r,n,o,i,u,s,d,p,c,y,f,v,m,g,h,b,w,R,D,B,S,x,F,j,T,A,C,k,_,q,M,I,P,V,$,E,H,L,N;return{setters:[e=>{a=e.g,l=e.a},e=>{r=e.s,n=e.p,o=e.t,i=e.i,u=e.g},e=>{s=e.d,d=e.r,p=e.H,c=e.F,y=e.d8,f=e.h,v=e.w,m=e.u,g=e.o,h=e.a,b=e.l,w=e.m,R=e.y,D=e.b,B=e.f,S=e.t,x=e.aw,F=e.bz,j=e.N,T=e.av,A=e.a4,C=e.a5,k=e.d9,_=e.af,q=e.aD},e=>{M=e.h,I=e.t,P=e.c},e=>{V=e.K},e=>{$=e.D},e=>{E=e.t},e=>{H=e.m,L=e.D},e=>{N=e.c}],execute:function(){e("_",s({__name:"ReportTable",props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Array},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""},drillTitle:{type:Function,default:()=>"Drill-down table"},customDrillColumns:{type:Array},drillRowParser:{type:Function}},emits:["generate"],setup(e,{emit:t}){const s=t,Q=e,U=d([]),z=d(""),O=d({}),G=p((()=>r(`\n  ${Q.reportType} \n  ${c().facility.name} \n  ${(Q.filename||Q.title).replace(Q.reportType,"")} \n  ${Q.period?Q.period:Q.date}\n`))),K={maxWidth:"68px !important"},W=p((()=>Q.columns.map((e=>({...e,thStyles:{...K,...e.thStyles},tdStyles:{...K,...e.tdStyles}}))))),Z=p((()=>{const e=[...Q.customFilters];return Q.useDateRangeFilter?e.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:4,value:{start:Q.period.split("-")[0],end:Q.period.split("-")[1]}}):Q.useQuarterFilter?e.push({id:"quarter",label:"Quarter:",type:"select",value:Q.quarter,options:M(10).map((e=>({label:e.name,value:e.name,other:e})))}):Q.useDateFilter&&e.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:Q.date}),e})),J=p((()=>{var e,t;const r=[...Q.actionButtons];return Q.canExportCsv&&r.push(a(G.value,null===(e=Q.quarter)||void 0===e?void 0:e.label,Q.period)),Q.canExportPDF&&r.push(l(G.value,Q.useSecureExport,null===(t=Q.quarter)||void 0===t?void 0:t.label,Q.period)),Q.showRefreshButton&&r.push({label:"Refresh/Rebuild",icon:y,color:"primary",action:()=>{if(i(O.value))return E("Invalid filters");s("generate",O.value,!0)}}),r})),X=p((()=>{var e;return null!==(e=Q.customDrillColumns)&&void 0!==e?e:[{path:"identifier",label:"ARV Number",preSort:n,initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:I},{path:"gender",label:"Gender",formatter:o}]}));function Y(e){if("dateRange"in e){if(i(U.value)||U.value.length<2)return E("Invalid date range");e.dateRange={startDate:U.value[0],endDate:U.value[1]}}if("date"in e){if(i(z.value))return E("Invalid date");e.date=z.value}if(function(e){return Z.value.every((t=>!1===t.required||!i(e[t.id])&&("object"!=typeof e[t.id]||Object.values(e[t.id]).every(Boolean))))}(e))return O.value=e,s("generate",e,!1);E("Invalid filters")}function ee(e){return e.preventDefault(),te({row:{clients:Q.totalClients},column:{path:"clients",label:"Total Clients"}})}async function te(e){var t,r;const n=Q.drillTitle(e),o=d([]);return async function(e,t){if("function"==typeof Q.drillRowParser)t.push(...await Q.drillRowParser(e));else{const r=u(e.row,e.column.path,[]);for(const e of N(r,100)){var a,l;const r=await q.getAll(e);if(!r.ok)return E(null!==(a=r.errorMessage)&&void 0!==a?a:"Unable to load patient data");t.push(...null!==(l=r.data)&&void 0!==l?l:[])}}}(e,o.value),H.show(L,{title:n,columns:X.value,rows:o.value,rowActionButtons:[{icon:k,action:({person_id:e})=>_.push(`/patient/${e}`)}],actionButtons:[a(n,null===(t=Q.quarter)||void 0===t?void 0:t.label,Q.period),l(n,!1,null===(r=Q.quarter)||void 0===r?void 0:r.label,Q.period)]})}return(t,a)=>(g(),f(m(C),{style:{padding:"0 !important"}},{default:v((()=>[h(m(x),{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:v((()=>{var t;return[h(m(b),{innerHTML:e.title},null,8,["innerHTML"]),e.subtitle?(g(),f(m(w),{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,["innerHTML"])):R("",!0),null!==(t=e.totalClients)&&void 0!==t&&t.length?(g(),f(m(w),{key:1},{default:v((()=>[D(" Total Clients: "),B("a",{href:"#",onClick:ee},S(e.totalClients.length),1)])),_:1})):R("",!0)]})),_:1}),h(m(A),{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:v((()=>[h(m($),{rows:e.rows,"async-rows":e.asyncRows,columns:W.value,"actions-buttons":J.value,"row-actions-buttons":e.rowActionButtons,"custom-filters":Z.value,config:{showIndices:e.showIndices},onCustomFilter:Y,onDrilldown:te,color:"light"},F({dateRange:v((()=>[h(m(V),{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),placeholder:"Select date range","partial-range":!1,"enable-time-picker":!1,format:m(P),"multi-calendars":"","auto-apply":"","text-input":"",range:""},null,8,["modelValue","format"])])),datePicker:v((()=>[h(m(V),{modelValue:z.value,"onUpdate:modelValue":a[1]||(a[1]=e=>z.value=e),"enable-time-picker":!1,"model-type":"dd/MMM/yyyy",placeholder:"select date","auto-apply":"","text-input":""},null,8,["modelValue"])])),_:2},[j(t.$slots,((e,a)=>({name:a,fn:v((({filter:e})=>[T(t.$slots,a,{filter:{filter:e}})]))})))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config"])])),_:3})])),_:3}))}}))}}}));