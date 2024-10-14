System.register(["./index-legacy-91295254.js","./image-legacy-0b5f9ca9.js","./LineChart.vue_vue_type_script_setup_true_lang-legacy-8f130fa4.js","./index-legacy-c59dd992.js","./report_service-legacy-a06c1924.js","./his_date-legacy-87db423b.js","./encounter_types-legacy-dd9af3d0.js","./url-legacy-2d97b2db.js","./toasts-legacy-ec8222ac.js","./arrays-legacy-42bab38c.js"],(function(e,t){"use strict";var a,l,n,i,o,s,r,u,d,c,p,v,g,m,h,f,_,y,b,D,I,T,C,w,x,A,V,N,S,E,L,O,R,j,F,P,z,G,M,k,H,q,$,B,J,X;return{setters:[e=>{a=e.d,l=e.r,n=e.a2,i=e.o,o=e.c,s=e.t,r=e.h,u=e.w,d=e.e,c=e.u,p=e.m,v=e.b,g=e.l,m=e.a3,h=e.s,f=e.x,_=e.a4,y=e.a5,b=e._,D=e.F,I=e.a6,T=e.G,C=e.a,w=e.I,x=e.j,A=e.k,V=e.a7,N=e.a8,S=e.a9,E=e.aa,L=e.ab,O=e.ac,R=e.ad,j=e.i},e=>{F=e.r},e=>{P=e._},e=>{z=e.D},e=>{G=e.R},e=>{M=e.t,k=e.s,H=e.g,q=e.a,$=e.b},e=>{B=e.e},e=>{J=e.p},e=>{X=e.t},null],execute:function(){var t=document.createElement("style");t.textContent="ion-icon[data-v-6289fcf4]{position:absolute;right:0;top:0;margin-right:1rem;font-size:28px;opacity:.9}ion-img[data-v-6289fcf4]{width:3rem;height:3rem}\n",document.head.appendChild(t);const U=a({__name:"CountTo",props:{end:{type:Number,required:!0},start:{type:Number,default:0},time:{type:Number,default:500}},setup(e){const t=e,a=l(t.start);function r(){const e=t.end/t.time;a.value<t.end?(a.value=Math.ceil(a.value+e),setTimeout(r,1)):a.value=t.end}return n((()=>r())),(e,t)=>(i(),o("span",null,s(a.value),1))}}),W=["src"],Y=a({__name:"BoxCard",props:{value:{type:Number,required:!0},label:{type:String,required:!0},icon:{type:String},img:{type:String},color:{type:String,default:"light"},isLoading:{type:Boolean,default:!1}},setup:e=>(t,a)=>(i(),r(c(y),{color:""},{default:u((()=>[d(c(_),null,{default:u((()=>[d(c(p),{class:"text-sm"},{default:u((()=>[v(s(e.label),1)])),_:1}),d(c(g),{style:{"font-size":"x-large","font-weight":"bold"}},{default:u((()=>[e.isLoading?(i(),r(c(m),{key:0,name:"bubbles",color:e.color},null,8,["color"])):(i(),r(U,{key:1,end:e.value},null,8,["end"]))])),_:1}),e.icon?(i(),r(c(h),{key:0,icon:e.icon,color:e.color,class:"ion-float-right ion-margin-top"},null,8,["icon","color"])):f("",!0),e.img?(i(),o("img",{key:1,src:c(F)(e.img),class:"ion-float-right ion-margin-top"},null,8,W)):f("",!0)])),_:1})])),_:1}))}),Z=b(Y,[["__scopeId","data-v-6289fcf4"]]),K=a({__name:"EncounterTable",props:{rowData:{type:Array,required:!0},isLoading:{type:Boolean,default:!1}},setup(e){const t={showSearchField:!1,showIndices:!1,showSubmitButton:!1,pagination:{enabled:!1}},a=[{path:"encounter",label:"Encounter Name",thStyles:{minWidth:"120px !important"}},{path:"female",label:"Female",sortable:!1},{path:"male",label:"Male",sortable:!1},{path:"me",label:"Me",sortable:!1},{path:"facility",label:"Facility",sortable:!1}];return(l,n)=>(i(),r(c(y),{style:{height:"100%"}},{default:u((()=>[d(c(_),null,{default:u((()=>[d(c(g),{class:"ion-padding-start ion-padding-bottom text-sm",style:{"font-weight":"800"}},{default:u((()=>n[0]||(n[0]=[v("Encounters created today")]))),_:1}),d(c(z),{rows:e.rowData,columns:a,color:"light",config:t,loading:e.isLoading},null,8,["rows","loading"])])),_:1})])),_:1}))}});class Q extends G{constructor(){super()}async getVisits(){this.useDefaultParams=!1;const e=await this.getReport(`programs/${this.programId}/reports/visits`,{name:"visits"});return this.useDefaultParams=!0,Object.entries(e).reduce(((e,[t,a])=>(e.dates.push(M(t)),e.complete.push(a.complete),e.incomplete.push(a.incomplete),e)),{dates:[],complete:[],incomplete:[]})}getMissedAppointments(){return this.getReport("missed_appointments")}getAppointmentsDue(e){return this.getReport(`programs/${this.programId}/booked_appointments`,{date:e})}getPatientsDueForVL(){return this.getReport(`programs/${this.programId}/reports/vl_due`)}getDefaulters(){return this.getReport("defaulter_list",{pepfar:!0})}getPatientsOnDTG(){return this.getReport(`programs/${this.programId}/reports/patients_on_dtg`)}async getTXCurrent(e){return this.getReport(`programs/${this.programId}/reports/tx_curr`,{start_date:k(this.startDate,e,"days")})}}const ee={"HIV clinic registration":B.HIV_CLINIC_REGISTRATION,"HIV reception":B.HIV_RECEPTION,Vitals:B.VITALS,"HIV staging":B.HIV_STAGING,"HIV clinic consultation":B.HIV_CLINIC_CONSULTATION,"ART adherence":B.ART_ADHERENCE,Prescription:B.TREATMENT,Dispensing:B.DISPENSING,Appointments:B.APPOINTMENT},te={complete:[],incomplete:[],dates:[]},ae="__emc_dashboard_statistics__",le=new class extends G{constructor(){super()}buildEncounters(e,t){return Object.entries(ee).map((([a,l])=>({encounter:a,female:e?e[l].F:0,male:e?e[l].M:0,me:t?t[l].F+t[l].M:0,facility:e?e[l].F+e[l].M:0})))}async getStats(){const e=Object.values(ee),t=J("reports/encounters",this.buildParams()),a=await D.postJson(t,{encounter_types:e}),l=await D.postJson(t,{encounter_types:e,all:!0});return this.buildEncounters(a.data,l.data)}};function ne(){var e,t,a,n,i,o,s,r,u;const d=function(){try{const e=localStorage.getItem(ae);return e?JSON.parse(e):void 0}catch(e){return void X("Error parsing cached stats. Please, refresh to load fresh stats")}}(),c=l(!1),p=l(null!==(e=null==d?void 0:d.visits)&&void 0!==e?e:te),v=l(null!==(t=null==d?void 0:d.missedAppointments)&&void 0!==t?t:[]),g=l(null!==(a=null==d?void 0:d.appointmentsDue)&&void 0!==a?a:[]),m=l(null!==(n=null==d?void 0:d.dueForVL)&&void 0!==n?n:[]),h=l(null!==(i=null==d?void 0:d.defaulters)&&void 0!==i?i:[]),f=l(null!==(o=null==d?void 0:d.patientsOnDTG)&&void 0!==o?o:[]),_=l(null!==(s=null==d?void 0:d.txCurrent30)&&void 0!==s?s:[]),y=l(null!==(r=null==d?void 0:d.txCurrent60)&&void 0!==r?r:[]),b=l(null!==(u=null==d?void 0:d.encounters)&&void 0!==u?u:le.buildEncounters());return I([p,v,g,m,h,f,_,y,b],(([e,t,a,l,n,i,o,s,r])=>localStorage.setItem(ae,JSON.stringify({visits:e,missedAppointments:t,appointmentsDue:a,dueForVL:l,defaulters:n,patientsOnDTG:i,txCurrent30:o,txCurrent60:s,encounters:r})))),{visits:p,missedAppointments:v,appointmentsDue:g,dueForVL:m,defaulters:h,patientsOnDTG:f,txCurrent30:_,txCurrent60:y,encounters:b,isLoading:c,refresh:async function(){const{start:e,end:t}=H(q()),a=new Q;a.setStartDate(e),a.setEndDate(t),b.value=void 0,p.value=void 0,v.value=void 0,g.value=void 0,h.value=void 0,f.value=void 0,m.value=void 0,_.value=void 0,y.value=void 0,c.value=!0;try{b.value=await le.getStats(),p.value=await a.getVisits(),g.value=await a.getAppointmentsDue($()),f.value=await a.getPatientsOnDTG(),_.value=await a.getTXCurrent(30),v.value=await a.getMissedAppointments(),m.value=await a.getPatientsDueForVL(),y.value=await a.getTXCurrent(60),h.value=await a.getDefaulters()}catch(l){console.error(l),X("Unable to update dashboard starts")}c.value=!1}}}const ie={id:"containter"},oe={class:"ion-padding-start"};e("default",a({__name:"dashboard",setup(e){const{visits:t,missedAppointments:a,appointmentsDue:l,dueForVL:n,defaulters:s,patientsOnDTG:r,txCurrent30:p,txCurrent60:g,encounters:m,isLoading:h,refresh:f}=ne(),_=T((()=>t?"No Data":"Loading data...")),y=T((()=>{var e,a;return null!==(e=null===(a=t.value)||void 0===a?void 0:a.complete.concat(t.value.incomplete).reduce(((e,t)=>e+t),0))&&void 0!==e?e:0})),b=T((()=>{var e,a;return{title:{text:"Complete / incomplete visits",align:"left"},xaxis:{categories:null!==(e=null===(a=t.value)||void 0===a?void 0:a.dates)&&void 0!==e?e:[],tickAmount:30,labels:{show:!0,rotate:-75}}}})),D=T((()=>{var e,a,l,n;return[{name:"Complete Visits",data:null!==(e=null===(a=t.value)||void 0===a?void 0:a.complete)&&void 0!==e?e:[]},{name:"Incomplete Visits",data:null!==(l=null===(n=t.value)||void 0===n?void 0:n.incomplete)&&void 0!==l?l:[]}]}));return(e,I)=>(i(),o("div",ie,[C("h1",oe,[I[1]||(I[1]=v(" Dashboard ")),d(c(w),{class:"ion-margin-end ion-float-right",onClick:c(f),disabled:c(h)},{default:u((()=>I[0]||(I[0]=[v(" Refresh ")]))),_:1},8,["onClick","disabled"])]),d(c(j),null,{default:u((()=>[d(c(x),null,{default:u((()=>[d(c(A),{"size-md":"3"},{default:u((()=>[d(Z,{label:"Total Visits",value:y.value,icon:c(V),color:"success","is-loading":!c(t)},null,8,["value","icon","is-loading"])])),_:1}),d(c(A),{"size-md":"3"},{default:u((()=>{var e,t;return[d(Z,{label:"Missed Appointments",value:null!==(e=null===(t=c(a))||void 0===t?void 0:t.length)&&void 0!==e?e:0,icon:c(N),color:"danger","is-loading":!c(a)},null,8,["value","icon","is-loading"])]})),_:1}),d(c(A),{"size-md":"3"},{default:u((()=>{var e,t;return[d(Z,{label:"Appointments Due",value:null!==(e=null===(t=c(l))||void 0===t?void 0:t.length)&&void 0!==e?e:0,icon:c(S),color:"secondary","is-loading":!c(l)},null,8,["value","icon","is-loading"])]})),_:1}),d(c(A),{"size-md":"3"},{default:u((()=>{var e,t;return[d(Z,{label:"Due For VL",value:null!==(e=null===(t=c(n))||void 0===t?void 0:t.length)&&void 0!==e?e:0,icon:c(E),color:"secondary","is-loading":!c(n)},null,8,["value","icon","is-loading"])]})),_:1}),d(c(A),{"size-md":"3"},{default:u((()=>{var e,t;return[d(Z,{label:"Defaulter (this quarter)",value:null!==(e=null===(t=c(s))||void 0===t?void 0:t.length)&&void 0!==e?e:0,icon:c(L),color:"danger","is-loading":!c(s)},null,8,["value","icon","is-loading"])]})),_:1}),d(c(A),{"size-md":"3"},{default:u((()=>{var e,t;return[d(Z,{label:"Patients on DTG",value:null!==(e=null===(t=c(r))||void 0===t?void 0:t.length)&&void 0!==e?e:0,icon:c(O),color:"primary","is-loading":!c(r)},null,8,["value","icon","is-loading"])]})),_:1}),d(c(A),{"size-md":"3"},{default:u((()=>{var e,t;return[d(Z,{label:"Tx Curr (30 Days)",value:null!==(e=null===(t=c(p))||void 0===t?void 0:t.length)&&void 0!==e?e:0,icon:c(R),color:"primary","is-loading":!c(p)},null,8,["value","icon","is-loading"])]})),_:1}),d(c(A),{"size-md":"3"},{default:u((()=>{var e,t;return[d(Z,{label:"Tx Curr (60 Days)",value:null!==(e=null===(t=c(g))||void 0===t?void 0:t.length)&&void 0!==e?e:0,icon:c(R),color:"primary","is-loading":!c(g)},null,8,["value","icon","is-loading"])]})),_:1})])),_:1}),d(c(x),{class:"ion-margin-bottom"},{default:u((()=>[d(c(A),{"size-md":"6"},{default:u((()=>[d(P,{series:D.value,options:b.value,placeholder:_.value},null,8,["series","options","placeholder"])])),_:1}),d(c(A),{"size-md":"6"},{default:u((()=>{var e;return[d(K,{"row-data":null!==(e=c(m))&&void 0!==e?e:[],"is-loading":!c(m)},null,8,["row-data","is-loading"])]})),_:1})])),_:1})])),_:1})]))}}))}}}));
