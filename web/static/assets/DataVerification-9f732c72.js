import{d as _,H as k,o as s,c as V,h as v,w as r,f as D,t as C,y as c,u as o,J as x,a as l,ag as I,ak as w,b as u,al as B,K as N,g as T,ae as E,k as m,$ as q,j as y,I as f,i as z,ai as S}from"./index-51662e8b.js";import{s as $}from"./form-272de43f.js";import{D as F}from"./data_cleaning_report_service-30a9078d.js";import{T as R}from"./TextInput-d94a33bd.js";import{D as U}from"./DateInput-ae26be06.js";import{E as j,a as A}from"./emc_event-4721851b.js";import{a as L}from"./his_date-4e03837c.js";import{t as O}from"./toasts-505fc814.js";import"./Strs-7ee8a435.js";import"./common-abc2f84d.js";import"./loader-4f58724a.js";import"./report_service-ff364fc0.js";import"./index-95d3a767.js";import"./arrays-31d2d38b.js";import"./url-ffe761c9.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./validations-b9fbcec4.js";import"./vue-datepicker-b3128b5a.js";const h={key:0,class:"text-danger"},K=_({__name:"TextAreaInput",props:{modelValue:{type:Object,default:()=>({})},maxLength:{type:Number,default:2e3},form:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(g,{emit:d}){const t=g,p=d,e=k({get:()=>t.modelValue,set:a=>p("update:modelValue",a)}),i=async()=>{if(e.value.required&&!e.value.value)return e.value.error="This field is required";if(e.value.validation){const a=await e.value.validation({label:e.value.value,value:e.value.value},t.form);if(a&&a.length)return e.value.error+=a.toString()}return e.value.error=""};return(a,n)=>(s(),V(N,null,[e.value.label?(s(),v(o(x),{key:0,class:"ion-padding-bottom bold"},{default:r(()=>[D("span",null,C(e.value.label),1),e.value.required?(s(),V("span",h," *")):c("",!0)]),_:1})):c("",!0),l(o(w),{class:I(["ion-no-margin ion-no-padding",e.value.error?"box-input-error":"box-input"]),modelValue:e.value.value,"onUpdate:modelValue":n[0]||(n[0]=b=>e.value.value=b),"auto-grow":"",placeholder:e.value.placeholder,disabled:e.value.disabled,onIonFocus:n[1]||(n[1]=b=>e.value.error=""),onIonBlur:i},null,8,["class","modelValue","placeholder","disabled"]),e.value.error?(s(),v(o(B),{key:1,color:"danger"},{default:r(()=>[u(C(e.value.error),1)]),_:1})):c("",!0)],64))}}),se=_({__name:"DataVerification",setup(g){const d=T(),t=E({dataCleaningDatetime:{value:"",label:"Date of Cleaning",required:!0},supervisors:{value:"",label:"Verified By",required:!0},comments:{value:"",label:"Comments"}});function p(){return $(t,async i=>{(await new F().saveDataCleaningVerification(i)).ok?d.back():O("Failed to save cleaning verification data")},{showloader:!0,underscoreKeys:!0})}const e=async()=>{if(await S("Are you sure you want to clear all fields?")){for(const i in t)t[i].value="";j.emit(A.ON_CLEAR)}};return(i,a)=>(s(),v(o(z),{class:"ion-margin-vertical"},{default:r(()=>[l(o(y),null,{default:r(()=>[l(o(m),{class:"his-card ion-padding",size:"10",offset:"1"},{default:r(()=>[l(o(q),{class:"ion-text-center ion-margin-vertical ion-padding-bottom bold"},{default:r(()=>[u(" Data Cleaning Verification ")]),_:1}),l(o(y),{class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[l(o(m),{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[l(U,{modelValue:t.dataCleaningDatetime,"onUpdate:modelValue":a[0]||(a[0]=n=>t.dataCleaningDatetime=n),minDate:"1920-01-01",maxDate:o(L)},null,8,["modelValue","maxDate"])]),_:1}),l(o(m),{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[l(R,{modelValue:t.supervisors,"onUpdate:modelValue":a[1]||(a[1]=n=>t.supervisors=n),form:t},null,8,["modelValue","form"])]),_:1}),l(o(m),{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[l(K,{modelValue:t.comments,"onUpdate:modelValue":a[2]||(a[2]=n=>t.comments=n),form:t},null,8,["modelValue","form"])]),_:1})]),_:1}),l(o(f),{class:"ion-margin-top",onClick:p,color:"success"},{default:r(()=>[u(" Submit ")]),_:1}),l(o(f),{class:"ion-margin-top",onClick:e,color:"warning"},{default:r(()=>[u(" Clear ")]),_:1}),l(o(f),{class:"ion-margin-top",onClick:a[3]||(a[3]=n=>i.$router.back()),color:"light"},{default:r(()=>[u(" Back ")]),_:1})]),_:1})]),_:1})]),_:1}))}});export{se as default};