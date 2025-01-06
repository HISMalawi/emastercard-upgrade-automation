import{d as F,l as z,m as _,I as E,a0 as R,r as S,h as y,ah as k,a6 as D,i as N,ao as O,_ as W,L as u,o as w,c as I,e as n,w as r,b as p,K as A,z as T}from"./index-0dab41e9.js";import{T as U}from"./TextInput-0aacbbd5.js";import{_ as Y}from"./DateInput.vue_vue_type_style_index_0_lang-820ea7dc.js";import{Y as $}from"./YesNoInput-64a88047.js";import{S as q}from"./SelectInput-bcf6e373.js";import{g as B}from"./location_options-d816fd70.js";import{s as L}from"./form-9e3f9bc9.js";import{S as P}from"./HIVReception-efcc5217.js";import{E as j,a as M}from"./emc_event-4721851b.js";import{r as v,v as K}from"./validations-6f974720.js";import"./his_date-1be895e6.js";import"./vue-datepicker-b770edc0.js";import"./common-abc2f84d.js";import"./Strs-7ee8a435.js";import"./toasts-efd70885.js";import"./loader-09fe7d6a.js";import"./patient_service-fa642ea3.js";import"./patient_identifier_service-7790a48c.js";import"./Date-d6cf1fc2.js";import"./encounter_types-1e88a09d.js";import"./consultation_service-d2e7c589.js";import"./program_service-fc73886d.js";const G=F({components:{IonRow:z,IonCol:_,IonButton:E,IonTitle:R,TextInput:U,DateInput:Y,YesNoInput:$,SelectInput:q},props:{patient:{type:Object,required:!0},isNewPatient:{type:Boolean,default:!0},observations:{type:Object,default:()=>({})},initialVisitDate:{type:String,default:""},artStartDate:{type:String,default:""}},emits:["onValue","onPrevious","onFinish"],setup(t,{emit:a}){const g=S([]),C=S([]),V=y(()=>t.patient.getBirthdate()),s=new P(t.patient.getID(),t.patient.getAge(),t.initialVisitDate),c=y(()=>s.getAllReasonsForART(t.artStartDate||t.initialVisitDate,t.patient.isMale()).map(o=>({label:o.name,value:o.name}))),m=s.getAllWhoStages().filter(o=>o.name.match(/1|2|3|4/i)).map(o=>({label:o.name,value:o.name})),i=k({reasonsForEligibity:{value:t.observations["Reason for ART eligibility"]||"",label:"Reason for Starting",placeholder:"Select Reason for Starting",required:!0,computedValue:o=>({obs:s.buildReasonForArtObs(typeof o=="string"?o:o.label)})},whoStage:{value:t.observations["Who stage"]||"",label:"Select Stage",placeholder:"Select Stage",required:!0,computedValue:o=>({obs:s.buildWhoStageObs(typeof o=="string"?o:o.label)})},cd4countAvailable:{value:t.observations["CD4 count"]?"Yes":"No",label:"Recent CD4 Count results available?",required:!0},cd4CountDate:{value:t.observations["Cd4 count datetime"]||"",label:"CD4 Count date",placeholder:"CD4 Count date",computedValue:o=>({obs:s.buildValueDate("Cd4 count datetime",o)}),validation:async(o,l)=>{var e;return((e=l.cd4countAvailable)==null?void 0:e.value)==="Yes"&&v(o)}},cd4Count:{value:t.observations["CD4 count"]||"",label:"CD4 Count",placeholder:"CD4 Count e.g. <100 or >500",computedValue:o=>{const l=parseInt(o.substring(1)),e=o.substring(0,1);return{modifier:e,count:l,obs:s.buildValueNumber("CD4 count",l,e)}},validation:async(o,l)=>{var e;return((e=l.cd4countAvailable)==null?void 0:e.value)==="Yes"&&K([()=>v(o),()=>s.cd4CountIsValid(o.value.toString())?null:["Please start with a modifier. e.g. >, <, or ="]])}},cd4CountLocation:{value:t.observations["Cd4 count location"]||"",label:"CD4 Count location",computedValue:o=>({obs:s.buildValueText("Cd4 count location",typeof o=="string"?o:o.label)}),validation:async(o,l)=>{var e;return((e=l.cd4countAvailable)==null?void 0:e.value)==="Yes"&&v(o)}},whoConditions:{value:t.observations["Who stages criteria present"]?[{label:t.observations["Who stages criteria present"],value:t.observations["Who stages criteria present"]}]:"",required:!0,label:"Select Staging Conditions",computedValue:o=>({obs:typeof o=="string"?s.buildWhoCriteriaObs(o):o.map(l=>s.buildWhoCriteriaObs(l.label))})}}),b=async()=>{if(await O("Are you sure you want to clear all fields?")){for(const o in i)i[o].value=void 0,i[o].error="";j.emit(M.ON_CLEAR)}},f=async()=>{s.setDate(t.initialVisitDate),await L(i,async(o,l)=>{a("onValue",{type:"staging",data:{formData:o,computedData:l}}),a("onFinish")})},d=o=>{o&&(i.whoConditions.value="");const l=parseInt((o==null?void 0:o.split(" ")[2])||"1");g.value=s.getStagingConditions(l).map(e=>({label:e.name,value:e.name,other:e})).sort((e,h)=>e.label.localeCompare(h.label))};return D(()=>i.whoStage.value,o=>d(o==null?void 0:o.label)),D(()=>i.reasonsForEligibity.value,()=>{i.whoStage.value="",i.whoConditions.value=""}),N(()=>d()),{patientDob:V,form:i,whoStages:m,stagingCoditions:g,selectedConditions:C,reasonsForArt:c,getFacilities:B,onClear:b,onSubmit:f}}});function H(t,a,g,C,V,s){const c=u("ion-title"),m=u("SelectInput"),i=u("ion-col"),b=u("yes-no-input"),f=u("DateInput"),d=u("text-input"),o=u("ion-button"),l=u("ion-row");return w(),I(A,null,[n(c,{class:"ion-text-center ion-margin-vertical ion-padding-bottom bold"},{default:r(()=>a[8]||(a[8]=[p(" Staging ")])),_:1}),n(l,{class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(i,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(m,{modelValue:t.form.reasonsForEligibity,"onUpdate:modelValue":a[0]||(a[0]=e=>t.form.reasonsForEligibity=e),options:t.reasonsForArt},null,8,["modelValue","options"])]),_:1}),n(i,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(m,{modelValue:t.form.whoStage,"onUpdate:modelValue":a[1]||(a[1]=e=>t.form.whoStage=e),options:t.whoStages},null,8,["modelValue","options"])]),_:1}),n(i,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(b,{modelValue:t.form.cd4countAvailable,"onUpdate:modelValue":a[2]||(a[2]=e=>t.form.cd4countAvailable=e),inline:""},null,8,["modelValue"])]),_:1}),t.form.cd4countAvailable.value==="Yes"?(w(),I(A,{key:0},[n(i,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(f,{modelValue:t.form.cd4CountDate,"onUpdate:modelValue":a[3]||(a[3]=e=>t.form.cd4CountDate=e),"min-date":t.patientDob,"max-date":t.initialVisitDate},null,8,["modelValue","min-date","max-date"])]),_:1}),n(i,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(d,{modelValue:t.form.cd4Count,"onUpdate:modelValue":a[4]||(a[4]=e=>t.form.cd4Count=e)},null,8,["modelValue"])]),_:1}),n(i,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(m,{modelValue:t.form.cd4CountLocation,"onUpdate:modelValue":a[5]||(a[5]=e=>t.form.cd4CountLocation=e),asyncOptions:t.getFacilities,allowCustom:""},null,8,["modelValue","asyncOptions"])]),_:1})],64)):T("",!0),n(i,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:r(()=>[n(m,{modelValue:t.form.whoConditions,"onUpdate:modelValue":a[6]||(a[6]=e=>t.form.whoConditions=e),options:t.stagingCoditions,multiple:""},null,8,["modelValue","options"])]),_:1}),n(i,{size:"12",class:"ion-margin-top"},{default:r(()=>[n(o,{class:"ion-margin-top ion-float-right",size:"large",onClick:t.onSubmit,color:"success"},{default:r(()=>a[9]||(a[9]=[p("Finish")])),_:1},8,["onClick"]),n(o,{class:"ion-margin-top ion-float-right",size:"large",color:"warning",onClick:t.onClear},{default:r(()=>a[10]||(a[10]=[p("Clear")])),_:1},8,["onClick"]),n(o,{class:"ion-margin-top ion-float-right",size:"large",onClick:a[7]||(a[7]=e=>t.$emit("onPrevious")),color:"primary"},{default:r(()=>a[11]||(a[11]=[p("Previous")])),_:1})]),_:1})]),_:1})],64)}const Co=W(G,[["render",H],["__scopeId","data-v-cc453135"]]);export{Co as default};
