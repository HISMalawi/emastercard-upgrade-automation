System.register(["./exports-legacy-26e6922d.js","./toasts-legacy-4bd31a3d.js","./index-legacy-65d6eaec.js","./his_date-legacy-f6da7b16.js","./vue-datepicker-legacy-f849676a.js","./index-legacy-a4410d47.js","./DrilldownTable-legacy-7c31441b.js","./arrays-legacy-681d874a.js"],(function(e,t){"use strict";var a,l,r,n,o,i,u,s,d,c,p,y,f,v,h,m,b,g,w,D,B,x,A,R,C,F,S,M,T,j,k,_,E,P,q,I,$,V,H,L,N,O;return{setters:[e=>{a=e.g,l=e.a},e=>{r=e.s,n=e.p,o=e.c,i=e.i,u=e.t,s=e.g},e=>{d=e.dv,c=e.f,p=e.d,y=e.r,f=e.G,v=e.E,h=e.dw,m=e.h,b=e.w,g=e.u,w=e.o,D=e.e,B=e.l,x=e.m,A=e.x,R=e.b,C=e.a,F=e.t,S=e.aA,M=e.bM,T=e.M,j=e.az,k=e.a4,_=e.a5,E=e.ak,P=e.af,q=e.aI},e=>{I=e.h,$=e.t,V=e.i},e=>{H=e.K},e=>{L=e.D},e=>{N=e.D},e=>{O=e.c}],execute:function(){var t=document.createElement("style");function Q(e="person_id",t=c()){return{label:"view client",icon:d,color:"light",action:a=>t.push(`/patient/${a[e]}`)}}t.textContent=".no-data-table{height:55vh!important}\n",document.head.appendChild(t),e({g:Q,t:function(e,t={}){return Array.isArray(e)?e.map((e=>({label:e,path:e,drillable:!0,sortable:!0,...t}))):Object.entries(e).map((([e,a])=>({path:e,label:a,drillable:!0,sortable:!1,...t})))}}),e("_",p({__name:"ReportTable",props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Array},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""},drillTitle:{type:Function,default:()=>"Drill-down table"},customDrillColumns:{type:Array},drillRowParser:{type:Function}},emits:["generate"],setup(e,{emit:t}){const d=t,c=e,p=y({}),U=y({}),G=f((()=>r(`\n  ${c.reportType} \n  ${v().facility.name} \n  ${(c.filename||c.title).replace(c.reportType,"")} \n  ${c.period?c.period:c.date}\n`))),z=f((()=>{const e=[...c.customFilters];return c.useDateRangeFilter?(e.push({id:"startDate",label:"Start Date",type:"date",placeholder:"Start Date",slotName:"datePicker",value:c.period.split("-")[0]}),e.push({id:"endDate",label:"End Date",placeholder:"End Date",type:"date",slotName:"datePicker",value:c.period.split("-")[1]})):c.useQuarterFilter?e.push({id:"quarter",label:"Quarter:",type:"select",value:c.quarter,options:I(10).map((e=>({label:e.name,value:e.name,other:e})))}):c.useDateFilter&&e.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:c.date}),e})),K=f((()=>{var e,t;const r=[...c.actionButtons];return c.canExportCsv&&r.push(a(G.value,null===(e=c.quarter)||void 0===e?void 0:e.label,c.period)),c.canExportPDF&&r.push(l(G.value,c.useSecureExport,null===(t=c.quarter)||void 0===t?void 0:t.label,c.period)),c.showRefreshButton&&r.push({label:"Refresh/Rebuild",icon:h,color:"primary",action:()=>{if(i(U.value))return u("Invalid filters");d("generate",U.value,!0)}}),r})),Z=f((()=>{var e;return null!==(e=c.customDrillColumns)&&void 0!==e?e:[{path:"identifier",label:"ARV Number",preSort:n,initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:$},{path:"gender",label:"Gender",formatter:o}]}));function J(e){if("startDate"in e&&"endDate"in e){const{startDate:t,endDate:a}=p.value;if(!V(t,a))return u("Invalid date range");e.startDate=t,e.endDate=a,e.dateRange={startDate:t,endDate:a}}if("date"in e){if(i(p.value.date))return u("Invalid date");e.date=p.value.date}if(function(e){return z.value.every((t=>!1===t.required||!i(e[t.id])&&("object"!=typeof e[t.id]||Object.values(e[t.id]).every(Boolean))))}(e))return U.value=e,d("generate",e,!1);u("Invalid filters")}function W(e){return e.preventDefault(),X({row:{clients:c.totalClients},column:{path:"clients",label:"Total Clients"}})}async function X(e){var t,r;const n=c.drillTitle(e),o=y([]);return async function(e,t){if("function"==typeof c.drillRowParser)t.push(...await c.drillRowParser(e));else{const r=s(e.row,e.column.path,[]);for(const e of O(r,100)){var a,l;const r=await q.getAll(e);if(!r.ok)return u(null!==(a=r.errorMessage)&&void 0!==a?a:"Unable to load patient data");t.push(...null!==(l=r.data)&&void 0!==l?l:[])}}}(e,o.value),E.show(N,{title:n,columns:Z.value,rows:o.value,rowActionButtons:[Q("person_id",P)],actionButtons:[a(n,null===(t=c.quarter)||void 0===t?void 0:t.label,c.period),l(n,!1,null===(r=c.quarter)||void 0===r?void 0:r.label,c.period)]})}return(t,a)=>(w(),m(g(_),{style:{padding:"0 !important"}},{default:b((()=>[D(g(S),{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:b((()=>{var t;return[D(g(B),{innerHTML:e.title},null,8,["innerHTML"]),e.subtitle?(w(),m(g(x),{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,["innerHTML"])):A("",!0),null!==(t=e.totalClients)&&void 0!==t&&t.length?(w(),m(g(x),{key:1},{default:b((()=>[a[0]||(a[0]=R(" Total Clients: ")),C("a",{href:"#",onClick:W},F(e.totalClients.length),1)])),_:1})):A("",!0)]})),_:1}),D(g(k),{class:"ion-no-padding",style:{"padding-bottom":"30px","min-height":"55vh"}},{default:b((()=>[D(g(L),{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":K.value,"row-actions-buttons":e.rowActionButtons,"custom-filters":z.value,config:{showIndices:e.showIndices},onCustomFilter:J,onDrilldown:X,color:"light"},M({datePicker:b((({filter:e})=>{var t,a;return[D(g(H),{modelValue:p.value[e.id],"onUpdate:modelValue":t=>p.value[e.id]=t,"enable-time-picker":!1,"model-type":"dd/MMM/yyyy",format:"dd/MMM/yyyy",placeholder:null!==(t=null!==(a=e.placeholder)&&void 0!==a?a:e.label)&&void 0!==t?t:"Select Date","auto-apply":"","text-input":""},null,8,["modelValue","onUpdate:modelValue","placeholder"])]})),_:2},[T(t.$slots,((e,a)=>({name:a,fn:b((({filter:e})=>[j(t.$slots,a,{filter:{filter:e}})]))})))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config"])])),_:3})])),_:3}))}}))}}}));