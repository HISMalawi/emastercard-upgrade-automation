import{d as G,i as O,j as W,k as x,I as U,ah as z,f as L,r as y,ae as j,G as C,a2 as q,F as Q,E as Y,aI as R,av as $,aJ as P,_ as H,K as c,h as J,w as l,o as X,e as s,z as M,a as k,b as S}from"./index-d405c632.js";import{t as N,b as Z}from"./toasts-a55a3f6b.js";import{g as ee}from"./DTFormElements-a1199b88.js";import{S as ae}from"./SelectInput-0a074711.js";import{D as te}from"./index-68b5c08e.js";import{p as ne}from"./VoidReason-de3c59df.js";import{t as oe}from"./Strs-7ee8a435.js";import{t as re,e as se}from"./his_date-933250a6.js";import{r as ie,a as le,i as ce,b as ue}from"./dde-afe445d0.js";import{b as de}from"./validations-fafb7daf.js";const me=G({components:{IonGrid:O,IonRow:W,IonCol:x,SelectInput:ae,IonButton:U,IonSearchbar:z,DataTable:te},setup(){const n=L(),{facility:o}=Y(),r=y(""),T=y(document.getElementById("selectInput")),g=j({value:"",placeholder:"select gender"}),d=y(!1),u=y([]),I=C(()=>o.code+"-ARV-");q(()=>ie());const m=[{label:"ARV Number",path:"arv_number"},{label:"MW National ID",path:"national_id"},{path:"given_name",label:"First name"},{path:"family_name",label:"Last name"},{path:"gender",label:"Gender",formatter:oe},{path:"birthdate",label:"Date of Birth (AGE)",formatter:a=>"".concat(re(a)," (").concat(se(a),")")},{path:"source",label:"Source"}],p={showSearchField:!1,showSubmitButton:!1},_=async a=>{var t;const e=await R.searchByOtherID($,a);return e.ok?e.data:(N((t=e.errorMessage)!=null?t:"Searching client by Malawi National ID returned error: ".concat(e.clientErrorType)),[])},b=async a=>{var t;const e=await R.searchByOtherID(P,a);return e.ok?e.data:(N((t=e.errorMessage)!=null?t:"Searching client by ARV Number returned error: ".concat(e.clientErrorType)),[])},D=(a,e)=>{const t={},i=a.split(" ").filter(v=>/\S/.test(v));return e&&(t.gender=e),i.length>0&&(t.given_name=i[0],t.family_name=i[2]||i[1]||"",t.middle_name=i[2]?i[1]:""),ue(t)},f=a=>a.split(" ").length===1&&(a.length>=6||a.length===13),h=a=>{d.value&&(d.value=!1),a==null||a.map(e=>{var t,i,v,A,B;return u.value.push({arv_number:(t=e.patient_identifiers.find(w=>w.identifier_type==P))==null?void 0:t.identifier,national_id:(i=e.patient_identifiers.find(w=>w.identifier_type==$))==null?void 0:i.identifier,given_name:e.person.names[0].given_name,family_name:e.person.names[0].family_name,gender:e.person.gender,birthdate:e.person.birthdate,personId:e.patient_id,source:(v=e.source)!=null?v:"locals",docID:(A=e.docID)!=null?A:"",ddeClientRequiresImport:(B=e==null?void 0:e.ddeClientRequiresImport)!=null?B:!1})})},V=async()=>{if(r.value&&!d.value)try{d.value=!0,u.value=[],r.value.match(/^(\w+-ARV-\w+)$/)&&b(r.value).then(h),de({value:r.value,label:r.value})===null&&_(r.value).then(h),f(r.value)&&le(r.value).then(h),r.value.match(/^(\d+)$/)?b("".concat(I.value).concat(r.value)).then(h):D(r.value,g.value.value).then(h)}catch(a){N("Unable to search patients"),console.error(a)}},E=()=>{r.value="",g.value="",u.value=[]},K=()=>({label:"void",color:"danger",action:async a=>{ne(async e=>{try{await R.void(a.personId,e),await V()}catch(t){Z("".concat(t))}},"void-modal")}}),F=C(()=>{const a=[{label:"Select",action:e=>{e.ddeClientRequiresImport?ce(e.docID).then(t=>{t&&n.push("/patient/".concat(t.patient_id))}):n.push("/patient/".concat(e.personId))}}];return Q.userHasRoles(["Program Manager","Superuser","System Developer"])&&a.push(K()),a});return{searchText:r,gender:g,tableRows:u,tableColumns:m,tableConfig:p,genderOptions:ee,selectInput:T,TableRowActions:F,searchPatient:V,resetQuery:E}}});const pe={style:{"max-width":"250px"},class:"ion-margin-end ion-margin-vertical"};function fe(n,o,r,T,g,d){const u=c("ion-searchbar"),I=c("SelectInput"),m=c("ion-button"),p=c("ion-col"),_=c("ion-row"),b=c("data-table"),D=c("ion-grid");return X(),J(D,null,{default:l(()=>[s(_,{class:"his-card"},{default:l(()=>[s(p,{size:"10",style:{display:"flex","justify-content":"flex-start"}},{default:l(()=>[s(u,{style:{width:"350px",height:"2.75rem"},class:"box-input ion-no-padding ion-margin-end ion-margin-vertical",placeholder:"Search by Name or ARV Number or MW National ID",modelValue:n.searchText,"onUpdate:modelValue":o[0]||(o[0]=f=>n.searchText=f),onKeyup:M(n.searchPatient,["enter"])},null,8,["modelValue","onKeyup"]),k("div",pe,[s(I,{modelValue:n.gender,"onUpdate:modelValue":o[1]||(o[1]=f=>n.gender=f),options:n.genderOptions,onKeyup:M(n.searchPatient,["enter"])},null,8,["modelValue","options","onKeyup"])]),s(m,{class:"ion-margin-vertical",onClick:n.searchPatient},{default:l(()=>o[2]||(o[2]=[S("Search")])),_:1},8,["onClick"]),s(m,{class:"ion-margin-vertical",onClick:n.resetQuery,color:"secondary"},{default:l(()=>o[3]||(o[3]=[S("Reset")])),_:1},8,["onClick"])]),_:1}),s(p,null,{default:l(()=>[s(m,{class:"ion-margin-vertical",href:"/patient/registration",color:"success",style:{float:"right"}},{default:l(()=>o[4]||(o[4]=[S(" Add New Patient ")])),_:1})]),_:1})]),_:1}),s(_,{class:"his-card ion-margin-top",style:{padding:"0 !important"}},{default:l(()=>[s(p,{size:"12",style:{"min-height":"320px"},class:"ion-no-padding"},{default:l(()=>[o[5]||(o[5]=k("h1",{class:"ion-margin"},"Patients Search Results",-1)),s(b,{rows:n.tableRows,columns:n.tableColumns,config:n.tableConfig,"row-actions-buttons":n.TableRowActions,color:"light"},null,8,["rows","columns","config","row-actions-buttons"])]),_:1})]),_:1})]),_:1})}const Se=H(me,[["render",fe]]);export{Se as default};
