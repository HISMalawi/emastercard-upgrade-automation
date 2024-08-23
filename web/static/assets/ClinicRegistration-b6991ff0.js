import{d as F,j as Y,k as $,$ as Q,I as h,r as B,H as w,ae as q,a6 as k,a2 as W,F as j,ai as G,L as p,o as b,c as A,a as i,w as l,b as C,K as I,y as V,h as S}from"./index-a3fc2e12.js";import{P as M}from"./patient_service-5afecb64.js";import{i as K}from"./common-abc2f84d.js";import{T as J}from"./TextInput-7e75aa6a.js";import{_ as X}from"./DateInput.vue_vue_type_style_index_0_lang-c93f6776.js";import{Y as Z}from"./YesNoInput-0c815f4b.js";import{C as _,P as x}from"./HIVReception-b4260436.js";import{S as ee}from"./SelectInput-1728ba18.js";import{g as te}from"./location_options-6034f107.js";import{N as ae,R as oe}from"./regimen_service-46d436b5.js";import{i as ie,b as ne,H as le}from"./DTFormElements-a1199b88.js";import{C as re,V as se}from"./consultation_service-4db27026.js";import{d as U,r as m,v as E,e as O}from"./validations-b9fbcec4.js";import{s as ue}from"./form-1795cc6c.js";import{E as z,a as L}from"./emc_event-4721851b.js";import{a as me}from"./his_date-1bddad28.js";import{P as de}from"./program_service-f2f47ad0.js";import{A as fe}from"./index-95d3a767.js";import{_ as ve}from"./_plugin-vue_export-helper-c27b6911.js";import"./patient_identifier_service-4b6c219d.js";import"./Date-a30e6d6f.js";import"./vue-datepicker-7c4021ca.js";import"./toasts-d882244a.js";import"./loader-1c88a23f.js";import"./encounter_types-ae359711.js";import"./Strs-7ee8a435.js";const pe=F({components:{IonRow:Y,IonCol:$,IonTitle:Q,IonButton:h,TextInput:J,DateInput:X,YesNoInput:Z,SelectInput:ee,NumberInput:ae},props:{patient:{type:Object,required:!0},isNewPatient:{type:Boolean,default:!0},observations:{type:Object,default:()=>({})},initialVisitDate:{type:String,default:""}},emits:["onValue","onNext"],setup(t,{emit:o}){const{facility:D}=j(),H=B(""),T=B([]),d=new _(t.patient.getID(),t.initialVisitDate),v=new re(t.patient.getID(),t.initialVisitDate),R=new se(t.patient.getID(),t.initialVisitDate),s=new x(t.patient.getID(),t.initialVisitDate),y=w(()=>t.patient.getBirthdate()),r=q({arvNumber:{value:"",label:"ARV Number",placeholder:"Enter ARV Number",required:!0,validation:async(e,a)=>{if(a.arvNumber.disabled)return null;const n=U(e,"POSITIVE_INTEGERS");if(n!==null)return n;const u=await M.findByOtherID(fe,"".concat(D.code,"-ARV-").concat(e.value));return K(u.data)?null:["ARV Number already exists"]}},arvNumberAtPreviousLocation:{value:"",label:"ART Number at previous Location",computedValue:e=>({tag:"registration",obs:d.buildValueText("ART number at previous location",e)})},initialVisitDate:{value:t.initialVisitDate,label:"Registration Date",required:!0},shouldFollowUp:{value:t.observations["Agrees to followup"]?t.observations["Agrees to followup"].match(/yes|home visit/i)?"Yes":"No":"",label:"Agrees to follow up ?",computedValue:e=>({tag:"registration",obs:[d.buildGroupValueCoded("Agrees to followup","Home visit",e),d.buildGroupValueCoded("Agrees to followup","Phone",e)]}),required:!0},receivedArvTreatmentBefore:{value:t.observations["Ever received ART"]||"",label:"Ever received ARVs for treatment or prophylaxis?",computedValue:e=>({tag:"registration",obs:d.buildValueCoded("Ever received ART",e)}),required:!0},dateLastTakenArvs:{value:t.observations["Date ART last taken"]||"",label:"Date last taken ARVs",computedValue:e=>({tag:"registration",obs:d.buildValueDate("Date ART last taken",e)}),validation:async(e,a)=>a.receivedArvTreatmentBefore.value==="Yes"&&m(e)},everRegisteredAtClinic:{value:t.observations["Ever registered at ART clinic"]||"",label:"Ever registred at an ART clinic",computedValue:e=>({tag:"registration",obs:d.buildValueCoded("Ever registered at ART clinic",e)}),validation:async(e,a)=>a.receivedArvTreatmentBefore.value==="Yes"&&m(e)},artInitiationLocation:{value:t.observations["Location of ART initiation"]||"",label:"Location of ART Initiation",computedValue:e=>({tag:"registration",obs:v.buildValueText("Location of ART initiation",typeof e=="string"?e:e.label)}),validation:async(e,a)=>a.everRegisteredAtClinic.value==="Yes"&&m(e)},artStartDate:{value:t.observations["Date ART started"]||"",label:"Date started ART",computedValue:e=>({tag:"registration",obs:d.buildValueDate("Date ART started",e)}),validation:async(e,a)=>a.everRegisteredAtClinic.value==="Yes"&&m(e)},initialWeight:{value:t.observations.weight||"",label:"Initial Weight",placeholder:"Enter weight",computedValue:e=>({tag:"vitals",obs:R.buildValueNumber("weight",e)}),validation:async(e,a)=>a.everRegisteredAtClinic.value==="Yes"&&e.value!=="Unknown"&&E([()=>m(e),()=>U(e,"DECIMALS"),()=>O(e,2,250)])},initialHeight:{value:t.observations.Height||"",label:"Initial Height",placeholder:"Enter height",computedValue:e=>({tag:"vitals",obs:d.buildValueNumber("Height",e)}),validation:async(e,a)=>a.everRegisteredAtClinic.value==="Yes"&&e.value!=="Unknown"&&E([()=>m(e),()=>U(e),()=>O(e,20,220)])},initialTBStatus:{value:t.observations["TB Status at Initiation"]||"",label:"Initial TB Status",placeholder:"select TB status",computedValue:e=>({tag:"registration",obs:d.buildValueCoded("TB Status at Initiation",typeof e=="string"?e:e.label)}),validation:async(e,a)=>a.everRegisteredAtClinic.value==="Yes"&&m(e)},tptHistory:{value:t.observations["Previous TB treatment history"]||"",label:"TPT History",placeholder:"Select TPT history",computedValue:e=>({tag:"consultation",obs:v.buildValueText("Previous TB treatment history",typeof e=="string"?e:e.label)}),validation:async(e,a)=>a.everRegisteredAtClinic.value==="Yes"&&m(e)},tptStartDate:{value:t.observations["TPT Drugs Received"]||"",label:"Date started TPT",validation:async(e,a)=>{var n,u,f;return((f=(u=(n=a.tptHistory)==null?void 0:n.value)==null?void 0:u.label)==null?void 0:f.match(/currently/i))&&m(e)}},inhQty:{value:"",label:"INH Amount Received",validation:async(e,a)=>{var u,f;const n=(f=(u=a.tptHistory)==null?void 0:u.value)==null?void 0:f.label;return(n==null?void 0:n.match(/currently/i))&&(n.match(/ipt/i)||n.includes("3HP (RFP + INH)"))&&m(e)},computedValue:(e,a)=>{var n;return{tag:"consultation",obs:v.buildObs("TPT Drugs Received",{value_drug:((n=T.value.find(u=>u.name==="INH or H (Isoniazid 300mg tablet)"))==null?void 0:n.drug_id)||0,value_datetime:(a==null?void 0:a.tptStartDate.value)||null,value_numeric:e||0})}}},rifapentineQty:{value:"",label:"Rifapentine Amount Received",validation:async(e,a)=>{var u,f;const n=(f=(u=a.tptHistory)==null?void 0:u.value)==null?void 0:f.label;return(n==null?void 0:n.match(/currently/i))&&n.includes("3HP (RFP + INH)")&&m(e)},computedValue:(e,a)=>{var n;return{tag:"consultation",obs:v.buildObs("TPT Drugs Received",{value_drug:((n=T.value.find(u=>u.name==="Rifapentine (150mg)"))==null?void 0:n.drug_id)||0,value_datetime:(a==null?void 0:a.tptStartDate.value)||null,value_numeric:e||0})}}},threeHPQty:{value:"",label:"INH / RFP Amount Received",validation:async(e,a)=>{var u,f;const n=(f=(u=a.tptHistory)==null?void 0:u.value)==null?void 0:f.label;return(n==null?void 0:n.match(/currently/i))&&n.includes("INH 300 / RFP 300 (3HP)")&&m(e)},computedValue:(e,a)=>{var n;return{tag:"consultation",obs:v.buildObs("TPT Drugs Received",{value_drug:((n=T.value.find(u=>u.name==="INH 300 / RFP 300 (3HP)"))==null?void 0:n.drug_id)||0,value_datetime:(a==null?void 0:a.tptStartDate.value)||null,value_numeric:e||0})}}},tptStartLocation:{value:t.observations["Location TPT Last Received"]||"",label:"TPT Transfer From",validation:async(e,a)=>{var n,u,f;return((f=(u=(n=a.tptHistory)==null?void 0:n.value)==null?void 0:u.label)==null?void 0:f.match(/currently/i))&&m(e)},computedValue:e=>({tag:"consultation",obs:v.buildValueText("Location TPT Last Received",typeof e=="string"?e:e.label)})},confirmatoryTest:{value:t.observations["Confirmatory hiv test type"]||"",label:"Confirmatory Test",placeholder:"Select confirmatory test",required:!0,computedValue(e){return{tag:"registration",obs:d.buildValueCoded("Confirmatory hiv test type",typeof e=="string"?e:e.value)}}},confirmatoryTestLocation:{value:t.observations["Confirmatory HIV test location"]||"",label:"Location of Confirmatory",placeholder:"Select location",validation:async(e,a)=>!(a.confirmatoryTest.value.label==="Not done"||a.confirmatoryTest.value==="Not done")&&m(e),computedValue(e){return{tag:"registration",obs:d.buildValueText("Confirmatory HIV test location",typeof e=="string"?e:e.label)}}},confirmatoryTestDate:{value:t.observations["Confirmatory HIV test date"]||"",label:"Confirmatory HIV Test Date",validation:async(e,a)=>!(a.confirmatoryTest.value.label==="Not done"||a.confirmatoryTest.value==="Not done")&&m(e),computedValue:e=>({tag:"registration",obs:d.buildValueDate("Confirmatory HIV test date",e)})},patientType:{value:"New patient",computedValue:e=>({tag:"patient type",obs:s.buildValueCoded("Type of patient",e)})}}),g=w(()=>{var e;return!(((e=r.confirmatoryTest.value)==null?void 0:e.label)==="Not done"||r.confirmatoryTest.value==="Not done")});k(r.receivedArvTreatmentBefore,e=>{e.value==="No"&&(r.everRegisteredAtClinic.value="")}),k(r.initialVisitDate,e=>{z.emit(L.ON_INITIAL_VISIT_DATE,e.value)}),k(()=>r.artStartDate.value,e=>z.emit(L.ON_ART_START_DATE,e),{immediate:!0});const c=w(()=>{var a;const e=typeof r.tptHistory.value=="string"?r.tptHistory.value:(a=r.tptHistory.value)==null?void 0:a.label;if(e!=null&&e.match(/currently/i)){if(e.match(/ipt/i))return["INH or H (Isoniazid 300mg tablet)"];if(e.includes("3HP (RFP + INH)"))return["INH or H (Isoniazid 300mg tablet)","Rifapentine (150mg)"];if(e.includes("INH 300 / RFP 300 (3HP)"))return["INH 300 / RFP 300 (3HP)"]}return[]}),N=async()=>{if(await G("Are you sure you want to clear all fields?"))for(const e in r)e!=="patientType"&&(r[e].value=void 0,r[e].error="");z.emit(L.ON_CLEAR)},P=async()=>{s.setDate(r.initialVisitDate.value),d.setDate(r.initialVisitDate.value),R.setDate(r.initialVisitDate.value),v.setDate(r.initialVisitDate.value),await ue(r,async(e,a)=>{o("onValue",{type:"registration",data:{formData:{...e,arvNumber:e.arvNumber?"".concat(D.code,"-ARV-").concat(e.arvNumber):""},computedData:a,arvNumberEditable:!r.arvNumber.disabled}}),o("onNext")})};return W(()=>{const e=t.patient.getArvNumber();e&&e!=="Unknown"?(r.arvNumber.value=e.split("-")[2],r.arvNumber.disabled=!0):de.getNextSuggestedARVNumber().then(a=>{H.value=a,H.value&&(r.arvNumber.label="Arv Number (Suggested Number: ".concat(H.value,")"))}),oe.getCustomIngridients().then(a=>{a.ok&&(T.value=a.data)})}),{today:me,form:r,isConfirmatoryTestDone:g,initialTbStatusOptions:ie,tptHistoryOptions:ne,HIVTestOptions:le,tptDrugs:c,facility:D,birthdate:y,getFacilities:te,onClear:N,onSubmit:P}}});function be(t,o,D,H,T,d){const v=p("ion-title"),R=p("text-input"),s=p("ion-col"),y=p("DateInput"),r=p("yes-no-input"),g=p("SelectInput"),c=p("NumberInput"),N=p("ion-button"),P=p("ion-row");return b(),A(I,null,[i(v,{class:"ion-text-center ion-margin-vertical ion-padding-bottom bold"},{default:l(()=>[C(" HIV Clinic Registration ")]),_:1}),i(P,{class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(s,{size:"5",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(R,{modelValue:t.form.arvNumber,"onUpdate:modelValue":o[0]||(o[0]=e=>t.form.arvNumber=e),form:t.form,prefix:"".concat(t.facility.code,"-ARV-"),disabled:!t.isNewPatient},null,8,["modelValue","form","prefix","disabled"])]),_:1}),i(s,{size:"7",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.initialVisitDate,"onUpdate:modelValue":o[1]||(o[1]=e=>t.form.initialVisitDate=e),"min-date":t.birthdate,"max-date":t.today,form:t.form},null,8,["modelValue","min-date","max-date","form"])]),_:1}),i(s,{size:"5",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(r,{modelValue:t.form.shouldFollowUp,"onUpdate:modelValue":o[2]||(o[2]=e=>t.form.shouldFollowUp=e),inline:""},null,8,["modelValue"])]),_:1}),i(s,{size:"7",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(r,{modelValue:t.form.receivedArvTreatmentBefore,"onUpdate:modelValue":o[3]||(o[3]=e=>t.form.receivedArvTreatmentBefore=e),inline:""},null,8,["modelValue"])]),_:1}),t.form.receivedArvTreatmentBefore.value==="Yes"?(b(),A(I,{key:0},[i(s,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.dateLastTakenArvs,"onUpdate:modelValue":o[4]||(o[4]=e=>t.form.dateLastTakenArvs=e),form:t.form,"min-date":t.birthdate,"max-date":t.today},null,8,["modelValue","form","min-date","max-date"])]),_:1}),i(s,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(r,{modelValue:t.form.everRegisteredAtClinic,"onUpdate:modelValue":o[5]||(o[5]=e=>t.form.everRegisteredAtClinic=e),inline:""},null,8,["modelValue"])]),_:1})],64)):V("",!0),t.form.everRegisteredAtClinic.value==="Yes"?(b(),A(I,{key:1},[i(s,{size:"9",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.artInitiationLocation,"onUpdate:modelValue":o[6]||(o[6]=e=>t.form.artInitiationLocation=e),form:t.form,asyncOptions:t.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])]),_:1}),i(s,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(R,{modelValue:t.form.arvNumberAtPreviousLocation,"onUpdate:modelValue":o[7]||(o[7]=e=>t.form.arvNumberAtPreviousLocation=e),form:t.form},null,8,["modelValue","form"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.artStartDate,"onUpdate:modelValue":o[8]||(o[8]=e=>t.form.artStartDate=e),form:t.form,"min-date":t.birthdate,"max-date":t.today},null,8,["modelValue","form","min-date","max-date"])]),_:1}),i(s,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(c,{modelValue:t.form.initialWeight,"onUpdate:modelValue":o[9]||(o[9]=e=>t.form.initialWeight=e),form:t.form,min:1,allowUnknown:""},null,8,["modelValue","form"])]),_:1}),i(s,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(c,{modelValue:t.form.initialHeight,"onUpdate:modelValue":o[10]||(o[10]=e=>t.form.initialHeight=e),form:t.form,min:1,allowUnknown:""},null,8,["modelValue","form"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.initialTBStatus,"onUpdate:modelValue":o[11]||(o[11]=e=>t.form.initialTBStatus=e),form:t.form,options:t.initialTbStatusOptions},null,8,["modelValue","form","options"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.tptHistory,"onUpdate:modelValue":o[12]||(o[12]=e=>t.form.tptHistory=e),form:t.form,options:t.tptHistoryOptions},null,8,["modelValue","form","options"])]),_:1}),t.tptDrugs.length?(b(),A(I,{key:0},[i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.tptStartDate,"onUpdate:modelValue":o[13]||(o[13]=e=>t.form.tptStartDate=e),"min-date":t.birthdate,"max-date":t.today,form:t.form},null,8,["modelValue","min-date","max-date","form"])]),_:1}),t.tptDrugs.includes("INH or H (Isoniazid 300mg tablet)")?(b(),S(s,{key:0,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(c,{modelValue:t.form.inhQty,"onUpdate:modelValue":o[14]||(o[14]=e=>t.form.inhQty=e),form:t.form,min:1},null,8,["modelValue","form"])]),_:1})):V("",!0),t.tptDrugs.includes("Rifapentine (150mg)")?(b(),S(s,{key:1,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(c,{modelValue:t.form.rifapentineQty,"onUpdate:modelValue":o[15]||(o[15]=e=>t.form.rifapentineQty=e),form:t.form,min:1},null,8,["modelValue","form"])]),_:1})):V("",!0),t.tptDrugs.includes("INH 300 / RFP 300 (3HP)")?(b(),S(s,{key:2,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(c,{modelValue:t.form.threeHPQty,"onUpdate:modelValue":o[16]||(o[16]=e=>t.form.threeHPQty=e),form:t.form,min:1},null,8,["modelValue","form"])]),_:1})):V("",!0),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.tptStartLocation,"onUpdate:modelValue":o[17]||(o[17]=e=>t.form.tptStartLocation=e),form:t.form,asyncOptions:t.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])]),_:1})],64)):V("",!0)],64)):V("",!0),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.confirmatoryTest,"onUpdate:modelValue":o[18]||(o[18]=e=>t.form.confirmatoryTest=e),form:t.form,options:t.HIVTestOptions},null,8,["modelValue","form","options"])]),_:1}),t.isConfirmatoryTestDone?(b(),A(I,{key:2},[i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.confirmatoryTestLocation,"onUpdate:modelValue":o[19]||(o[19]=e=>t.form.confirmatoryTestLocation=e),form:t.form,asyncOptions:t.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.confirmatoryTestDate,"onUpdate:modelValue":o[20]||(o[20]=e=>t.form.confirmatoryTestDate=e),form:t.form,"min-date":t.birthdate,"max-date":t.today},null,8,["modelValue","form","min-date","max-date"])]),_:1})],64)):V("",!0),i(s,{size:"12",class:"ion-margin-top"},{default:l(()=>[i(N,{class:"ion-margin-top ion-float-right",size:"large",onClick:t.onSubmit,color:"success"},{default:l(()=>[C("Next")]),_:1},8,["onClick"]),i(N,{class:"ion-margin-top ion-float-right",size:"large",color:"warning",onClick:t.onClear},{default:l(()=>[C("Clear")]),_:1},8,["onClick"]),t.isNewPatient?V("",!0):(b(),S(N,{key:0,class:"ion-margin-top ion-float-right",size:"large",onClick:o[21]||(o[21]=e=>t.$router.back()),color:"primary"},{default:l(()=>[C("Back")]),_:1}))]),_:1})]),_:1})],64)}const he=ve(pe,[["render",be]]);export{he as default};