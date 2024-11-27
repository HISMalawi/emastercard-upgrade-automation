import{d as F,j as Y,k as $,$ as Q,I as q,r as L,G as w,ae as G,aJ as W,a6 as k,a2 as j,E as M,ai as J,_ as K,K as p,o as b,c as A,e as i,w as l,b as C,J as I,x as V,h as S}from"./index-d405c632.js";import{P as h}from"./patient_service-26381809.js";import{i as X}from"./toasts-a55a3f6b.js";import{T as Z}from"./TextInput-b0fd244c.js";import{_}from"./DateInput.vue_vue_type_style_index_0_lang-ed4d5334.js";import{Y as x}from"./YesNoInput-9f0ecd72.js";import{C as ee,P as te}from"./HIVReception-62853506.js";import{S as ae}from"./SelectInput-0a074711.js";import{g as oe}from"./location_options-535292e3.js";import{N as ie,R as ne}from"./regimen_service-8f72039f.js";import{i as le,b as re,H as se}from"./DTFormElements-a1199b88.js";import{C as ue,V as me}from"./consultation_service-24208768.js";import{d as U,r as m,v as B,e as O}from"./validations-fafb7daf.js";import{s as de}from"./form-c45c3bad.js";import{E as z,a as E}from"./emc_event-4721851b.js";import{a as fe}from"./his_date-933250a6.js";import{P as ve}from"./program_service-0866e502.js";import"./patient_identifier_service-865ccb9e.js";import"./Date-1abd6c8b.js";import"./vue-datepicker-37b96ef6.js";import"./loader-bd20757d.js";import"./encounter_types-ae359711.js";import"./Strs-7ee8a435.js";const pe=F({components:{IonRow:Y,IonCol:$,IonTitle:Q,IonButton:q,TextInput:Z,DateInput:_,YesNoInput:x,SelectInput:ae,NumberInput:ie},props:{patient:{type:Object,required:!0},isNewPatient:{type:Boolean,default:!0},observations:{type:Object,default:()=>({})},initialVisitDate:{type:String,default:""}},emits:["onValue","onNext"],setup(t,{emit:a}){const{facility:D}=M(),H=L(""),c=L([]),d=new ee(t.patient.getID(),t.initialVisitDate),v=new ue(t.patient.getID(),t.initialVisitDate),R=new me(t.patient.getID(),t.initialVisitDate),s=new te(t.patient.getID(),t.initialVisitDate),y=w(()=>t.patient.getBirthdate()),r=G({arvNumber:{value:"",label:"ARV Number",placeholder:"Enter ARV Number",required:!0,validation:async(e,o)=>{if(o.arvNumber.disabled)return null;const n=U(e,"POSITIVE_INTEGERS");if(n!==null)return n;const u=await h.findByOtherID(W,"".concat(D.code,"-ARV-").concat(e.value));return X(u.data)?null:["ARV Number already exists"]}},arvNumberAtPreviousLocation:{value:"",label:"ART Number at previous Location",computedValue:e=>({tag:"registration",obs:d.buildValueText("ART number at previous location",e)})},initialVisitDate:{value:t.initialVisitDate,label:"Registration Date",required:!0},shouldFollowUp:{value:t.observations["Agrees to followup"]?t.observations["Agrees to followup"].match(/yes|home visit/i)?"Yes":"No":"",label:"Agrees to follow up ?",computedValue:e=>({tag:"registration",obs:[d.buildGroupValueCoded("Agrees to followup","Home visit",e),d.buildGroupValueCoded("Agrees to followup","Phone",e)]}),required:!0},receivedArvTreatmentBefore:{value:t.observations["Ever received ART"]||"",label:"Ever received ARVs for treatment or prophylaxis?",computedValue:e=>({tag:"registration",obs:d.buildValueCoded("Ever received ART",e)}),required:!0},dateLastTakenArvs:{value:t.observations["Date ART last taken"]||"",label:"Date last taken ARVs",computedValue:e=>({tag:"registration",obs:d.buildValueDate("Date ART last taken",e)}),validation:async(e,o)=>o.receivedArvTreatmentBefore.value==="Yes"&&m(e)},everRegisteredAtClinic:{value:t.observations["Ever registered at ART clinic"]||"",label:"Ever registred at an ART clinic",computedValue:e=>({tag:"registration",obs:d.buildValueCoded("Ever registered at ART clinic",e)}),validation:async(e,o)=>o.receivedArvTreatmentBefore.value==="Yes"&&m(e)},artInitiationLocation:{value:t.observations["Location of ART initiation"]||"",label:"Location of ART Initiation",computedValue:e=>({tag:"registration",obs:v.buildValueText("Location of ART initiation",typeof e=="string"?e:e.label)}),validation:async(e,o)=>o.everRegisteredAtClinic.value==="Yes"&&m(e)},artStartDate:{value:t.observations["Date ART started"]||"",label:"Date started ART",computedValue:e=>({tag:"registration",obs:d.buildValueDate("Date ART started",e)}),validation:async(e,o)=>o.everRegisteredAtClinic.value==="Yes"&&m(e)},initialWeight:{value:t.observations.weight||"",label:"Initial Weight",placeholder:"Enter weight",computedValue:e=>({tag:"vitals",obs:R.buildValueNumber("weight",e)}),validation:async(e,o)=>o.everRegisteredAtClinic.value==="Yes"&&e.value!=="Unknown"&&B([()=>m(e),()=>U(e,"DECIMALS"),()=>O(e,2,250)])},initialHeight:{value:t.observations.Height||"",label:"Initial Height",placeholder:"Enter height",computedValue:e=>({tag:"vitals",obs:d.buildValueNumber("Height",e)}),validation:async(e,o)=>o.everRegisteredAtClinic.value==="Yes"&&e.value!=="Unknown"&&B([()=>m(e),()=>U(e),()=>O(e,20,220)])},initialTBStatus:{value:t.observations["TB Status at Initiation"]||"",label:"Initial TB Status",placeholder:"select TB status",computedValue:e=>({tag:"registration",obs:d.buildValueCoded("TB Status at Initiation",typeof e=="string"?e:e.label)}),validation:async(e,o)=>o.everRegisteredAtClinic.value==="Yes"&&m(e)},tptHistory:{value:t.observations["Previous TB treatment history"]||"",label:"TPT History",placeholder:"Select TPT history",computedValue:e=>({tag:"consultation",obs:v.buildValueText("Previous TB treatment history",typeof e=="string"?e:e.label)}),validation:async(e,o)=>o.everRegisteredAtClinic.value==="Yes"&&m(e)},tptStartDate:{value:t.observations["TPT Drugs Received"]||"",label:"Date started TPT",validation:async(e,o)=>{var n,u,f;return((f=(u=(n=o.tptHistory)==null?void 0:n.value)==null?void 0:u.label)==null?void 0:f.match(/currently/i))&&m(e)}},inhQty:{value:"",label:"INH Amount Received",validation:async(e,o)=>{var u,f;const n=(f=(u=o.tptHistory)==null?void 0:u.value)==null?void 0:f.label;return(n==null?void 0:n.match(/currently/i))&&(n.match(/ipt/i)||n.includes("3HP (RFP + INH)"))&&m(e)},computedValue:(e,o)=>{var n;return{tag:"consultation",obs:v.buildObs("TPT Drugs Received",{value_drug:((n=c.value.find(u=>u.name==="INH or H (Isoniazid 300mg tablet)"))==null?void 0:n.drug_id)||0,value_datetime:(o==null?void 0:o.tptStartDate.value)||null,value_numeric:e||0})}}},rifapentineQty:{value:"",label:"Rifapentine Amount Received",validation:async(e,o)=>{var u,f;const n=(f=(u=o.tptHistory)==null?void 0:u.value)==null?void 0:f.label;return(n==null?void 0:n.match(/currently/i))&&n.includes("3HP (RFP + INH)")&&m(e)},computedValue:(e,o)=>{var n;return{tag:"consultation",obs:v.buildObs("TPT Drugs Received",{value_drug:((n=c.value.find(u=>u.name==="Rifapentine (150mg)"))==null?void 0:n.drug_id)||0,value_datetime:(o==null?void 0:o.tptStartDate.value)||null,value_numeric:e||0})}}},threeHPQty:{value:"",label:"INH / RFP Amount Received",validation:async(e,o)=>{var u,f;const n=(f=(u=o.tptHistory)==null?void 0:u.value)==null?void 0:f.label;return(n==null?void 0:n.match(/currently/i))&&n.includes("INH 300 / RFP 300 (3HP)")&&m(e)},computedValue:(e,o)=>{var n;return{tag:"consultation",obs:v.buildObs("TPT Drugs Received",{value_drug:((n=c.value.find(u=>u.name==="INH 300 / RFP 300 (3HP)"))==null?void 0:n.drug_id)||0,value_datetime:(o==null?void 0:o.tptStartDate.value)||null,value_numeric:e||0})}}},tptStartLocation:{value:t.observations["Location TPT Last Received"]||"",label:"TPT Transfer From",validation:async(e,o)=>{var n,u,f;return((f=(u=(n=o.tptHistory)==null?void 0:n.value)==null?void 0:u.label)==null?void 0:f.match(/currently/i))&&m(e)},computedValue:e=>({tag:"consultation",obs:v.buildValueText("Location TPT Last Received",typeof e=="string"?e:e.label)})},confirmatoryTest:{value:t.observations["Confirmatory hiv test type"]||"",label:"Confirmatory Test",placeholder:"Select confirmatory test",required:!0,computedValue(e){return{tag:"registration",obs:d.buildValueCoded("Confirmatory hiv test type",typeof e=="string"?e:e.value)}}},confirmatoryTestLocation:{value:t.observations["Confirmatory HIV test location"]||"",label:"Location of Confirmatory",placeholder:"Select location",validation:async(e,o)=>!(o.confirmatoryTest.value.label==="Not done"||o.confirmatoryTest.value==="Not done")&&m(e),computedValue(e){return{tag:"registration",obs:d.buildValueText("Confirmatory HIV test location",typeof e=="string"?e:e.label)}}},confirmatoryTestDate:{value:t.observations["Confirmatory HIV test date"]||"",label:"Confirmatory HIV Test Date",validation:async(e,o)=>!(o.confirmatoryTest.value.label==="Not done"||o.confirmatoryTest.value==="Not done")&&m(e),computedValue:e=>({tag:"registration",obs:d.buildValueDate("Confirmatory HIV test date",e)})},patientType:{value:"New patient",computedValue:e=>({tag:"patient type",obs:s.buildValueCoded("Type of patient",e)})}}),g=w(()=>{var e;return!(((e=r.confirmatoryTest.value)==null?void 0:e.label)==="Not done"||r.confirmatoryTest.value==="Not done")});k(r.receivedArvTreatmentBefore,e=>{e.value==="No"&&(r.everRegisteredAtClinic.value="")}),k(r.initialVisitDate,e=>{z.emit(E.ON_INITIAL_VISIT_DATE,e.value)}),k(()=>r.artStartDate.value,e=>z.emit(E.ON_ART_START_DATE,e),{immediate:!0});const T=w(()=>{var o;const e=typeof r.tptHistory.value=="string"?r.tptHistory.value:(o=r.tptHistory.value)==null?void 0:o.label;if(e!=null&&e.match(/currently/i)){if(e.match(/ipt/i))return["INH or H (Isoniazid 300mg tablet)"];if(e.includes("3HP (RFP + INH)"))return["INH or H (Isoniazid 300mg tablet)","Rifapentine (150mg)"];if(e.includes("INH 300 / RFP 300 (3HP)"))return["INH 300 / RFP 300 (3HP)"]}return[]}),N=async()=>{if(await J("Are you sure you want to clear all fields?"))for(const e in r)e!=="patientType"&&(r[e].value=void 0,r[e].error="");z.emit(E.ON_CLEAR)},P=async()=>{s.setDate(r.initialVisitDate.value),d.setDate(r.initialVisitDate.value),R.setDate(r.initialVisitDate.value),v.setDate(r.initialVisitDate.value),await de(r,async(e,o)=>{a("onValue",{type:"registration",data:{formData:{...e,arvNumber:e.arvNumber?"".concat(D.code,"-ARV-").concat(e.arvNumber):""},computedData:o,arvNumberEditable:!r.arvNumber.disabled}}),a("onNext")})};return j(()=>{const e=t.patient.getArvNumber();e&&e!=="Unknown"?(r.arvNumber.value=e.split("-")[2],r.arvNumber.disabled=!0):ve.getNextSuggestedARVNumber().then(o=>{H.value=o,H.value&&(r.arvNumber.label="Arv Number (Suggested Number: ".concat(H.value,")"))}),ne.getCustomIngridients().then(o=>{o.ok&&(c.value=o.data)})}),{today:fe,form:r,isConfirmatoryTestDone:g,initialTbStatusOptions:le,tptHistoryOptions:re,HIVTestOptions:se,tptDrugs:T,facility:D,birthdate:y,getFacilities:oe,onClear:N,onSubmit:P}}});function be(t,a,D,H,c,d){const v=p("ion-title"),R=p("text-input"),s=p("ion-col"),y=p("DateInput"),r=p("yes-no-input"),g=p("SelectInput"),T=p("NumberInput"),N=p("ion-button"),P=p("ion-row");return b(),A(I,null,[i(v,{class:"ion-text-center ion-margin-vertical ion-padding-bottom bold"},{default:l(()=>a[22]||(a[22]=[C(" HIV Clinic Registration ")])),_:1}),i(P,{class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(s,{size:"5",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(R,{modelValue:t.form.arvNumber,"onUpdate:modelValue":a[0]||(a[0]=e=>t.form.arvNumber=e),form:t.form,prefix:"".concat(t.facility.code,"-ARV-"),disabled:!t.isNewPatient},null,8,["modelValue","form","prefix","disabled"])]),_:1}),i(s,{size:"7",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.initialVisitDate,"onUpdate:modelValue":a[1]||(a[1]=e=>t.form.initialVisitDate=e),"min-date":t.birthdate,"max-date":t.today,form:t.form},null,8,["modelValue","min-date","max-date","form"])]),_:1}),i(s,{size:"5",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(r,{modelValue:t.form.shouldFollowUp,"onUpdate:modelValue":a[2]||(a[2]=e=>t.form.shouldFollowUp=e),inline:""},null,8,["modelValue"])]),_:1}),i(s,{size:"7",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(r,{modelValue:t.form.receivedArvTreatmentBefore,"onUpdate:modelValue":a[3]||(a[3]=e=>t.form.receivedArvTreatmentBefore=e),inline:""},null,8,["modelValue"])]),_:1}),t.form.receivedArvTreatmentBefore.value==="Yes"?(b(),A(I,{key:0},[i(s,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.dateLastTakenArvs,"onUpdate:modelValue":a[4]||(a[4]=e=>t.form.dateLastTakenArvs=e),form:t.form,"min-date":t.birthdate,"max-date":t.today},null,8,["modelValue","form","min-date","max-date"])]),_:1}),i(s,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(r,{modelValue:t.form.everRegisteredAtClinic,"onUpdate:modelValue":a[5]||(a[5]=e=>t.form.everRegisteredAtClinic=e),inline:""},null,8,["modelValue"])]),_:1})],64)):V("",!0),t.form.everRegisteredAtClinic.value==="Yes"?(b(),A(I,{key:1},[i(s,{size:"9",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.artInitiationLocation,"onUpdate:modelValue":a[6]||(a[6]=e=>t.form.artInitiationLocation=e),form:t.form,asyncOptions:t.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])]),_:1}),i(s,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(R,{modelValue:t.form.arvNumberAtPreviousLocation,"onUpdate:modelValue":a[7]||(a[7]=e=>t.form.arvNumberAtPreviousLocation=e),form:t.form},null,8,["modelValue","form"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.artStartDate,"onUpdate:modelValue":a[8]||(a[8]=e=>t.form.artStartDate=e),form:t.form,"min-date":t.birthdate,"max-date":t.today},null,8,["modelValue","form","min-date","max-date"])]),_:1}),i(s,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(T,{modelValue:t.form.initialWeight,"onUpdate:modelValue":a[9]||(a[9]=e=>t.form.initialWeight=e),form:t.form,min:1,allowUnknown:""},null,8,["modelValue","form"])]),_:1}),i(s,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(T,{modelValue:t.form.initialHeight,"onUpdate:modelValue":a[10]||(a[10]=e=>t.form.initialHeight=e),form:t.form,min:1,allowUnknown:""},null,8,["modelValue","form"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.initialTBStatus,"onUpdate:modelValue":a[11]||(a[11]=e=>t.form.initialTBStatus=e),form:t.form,options:t.initialTbStatusOptions},null,8,["modelValue","form","options"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.tptHistory,"onUpdate:modelValue":a[12]||(a[12]=e=>t.form.tptHistory=e),form:t.form,options:t.tptHistoryOptions},null,8,["modelValue","form","options"])]),_:1}),t.tptDrugs.length?(b(),A(I,{key:0},[i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.tptStartDate,"onUpdate:modelValue":a[13]||(a[13]=e=>t.form.tptStartDate=e),"min-date":t.birthdate,"max-date":t.today,form:t.form},null,8,["modelValue","min-date","max-date","form"])]),_:1}),t.tptDrugs.includes("INH or H (Isoniazid 300mg tablet)")?(b(),S(s,{key:0,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(T,{modelValue:t.form.inhQty,"onUpdate:modelValue":a[14]||(a[14]=e=>t.form.inhQty=e),form:t.form,min:1},null,8,["modelValue","form"])]),_:1})):V("",!0),t.tptDrugs.includes("Rifapentine (150mg)")?(b(),S(s,{key:1,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(T,{modelValue:t.form.rifapentineQty,"onUpdate:modelValue":a[15]||(a[15]=e=>t.form.rifapentineQty=e),form:t.form,min:1},null,8,["modelValue","form"])]),_:1})):V("",!0),t.tptDrugs.includes("INH 300 / RFP 300 (3HP)")?(b(),S(s,{key:2,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(T,{modelValue:t.form.threeHPQty,"onUpdate:modelValue":a[16]||(a[16]=e=>t.form.threeHPQty=e),form:t.form,min:1},null,8,["modelValue","form"])]),_:1})):V("",!0),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.tptStartLocation,"onUpdate:modelValue":a[17]||(a[17]=e=>t.form.tptStartLocation=e),form:t.form,asyncOptions:t.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])]),_:1})],64)):V("",!0)],64)):V("",!0),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.confirmatoryTest,"onUpdate:modelValue":a[18]||(a[18]=e=>t.form.confirmatoryTest=e),form:t.form,options:t.HIVTestOptions},null,8,["modelValue","form","options"])]),_:1}),t.isConfirmatoryTestDone?(b(),A(I,{key:2},[i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(g,{modelValue:t.form.confirmatoryTestLocation,"onUpdate:modelValue":a[19]||(a[19]=e=>t.form.confirmatoryTestLocation=e),form:t.form,asyncOptions:t.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])]),_:1}),i(s,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:l(()=>[i(y,{modelValue:t.form.confirmatoryTestDate,"onUpdate:modelValue":a[20]||(a[20]=e=>t.form.confirmatoryTestDate=e),form:t.form,"min-date":t.birthdate,"max-date":t.today},null,8,["modelValue","form","min-date","max-date"])]),_:1})],64)):V("",!0),i(s,{size:"12",class:"ion-margin-top"},{default:l(()=>[i(N,{class:"ion-margin-top ion-float-right",size:"large",onClick:t.onSubmit,color:"success"},{default:l(()=>a[23]||(a[23]=[C("Next")])),_:1},8,["onClick"]),i(N,{class:"ion-margin-top ion-float-right",size:"large",color:"warning",onClick:t.onClear},{default:l(()=>a[24]||(a[24]=[C("Clear")])),_:1},8,["onClick"]),t.isNewPatient?V("",!0):(b(),S(N,{key:0,class:"ion-margin-top ion-float-right",size:"large",onClick:a[21]||(a[21]=e=>t.$router.back()),color:"primary"},{default:l(()=>a[25]||(a[25]=[C("Back")])),_:1}))]),_:1})]),_:1})],64)}const Ye=K(pe,[["render",be]]);export{Ye as default};
