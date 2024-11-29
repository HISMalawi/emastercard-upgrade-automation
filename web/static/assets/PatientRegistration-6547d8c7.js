import{d as B,i as q,j as R,k as S,au as T,f as M,r as U,ae as A,a6 as G,ai as O,av as $,aw as C,_ as W,K as u,h as Y,w as i,o as H,e as n,a as y,b as I}from"./index-d405c632.js";import{P as j,R as K}from"./relations_service-dda930ad.js";import{T as J}from"./TextInput-b0fd244c.js";import{_ as Q}from"./DateInput.vue_vue_type_style_index_0_lang-ed4d5334.js";import{S as X}from"./SelectInput-0a074711.js";import{a as Z,b as x}from"./location_options-535292e3.js";import{i as E,r as _}from"./form-c45c3bad.js";import{a as ee}from"./Strs-7ee8a435.js";import{l as h}from"./loader-bd20757d.js";import{E as ae,a as ne}from"./emc_event-4721851b.js";import{a as v,b as oe,c as z}from"./validations-fafb7daf.js";import{a as te}from"./his_date-933250a6.js";import{t as le}from"./toasts-a55a3f6b.js";import{P as ie}from"./patient_identifier_service-865ccb9e.js";import"./program_service-0866e502.js";import"./vue-datepicker-37b96ef6.js";const re=B({components:{IonGrid:q,IonRow:R,IonCol:S,TextInput:J,DateInput:Q,SelectInput:X,IonCheckbox:T},setup(){const o=M(),a=U(!1),f=U(!1),P=Z(),D=[{label:"Male",value:"M"},{label:"Female",value:"F"}],p=A({givenName:{label:"First Name",value:"",placeholder:"Enter First Name",required:!0,validation:e=>v(e)},familyName:{label:"Last Name",value:"",placeholder:"Enter Last Name",required:!0,validation:e=>v(e)},middleName:{label:"Middle Name",value:"",placeholder:"Enter middle Name",validation:e=>e&&e.label?v(e):null},nationalId:{label:"Malawi National ID Number",value:"",placeholder:"Enter Malawi National ID Number",validation:e=>e&&e.label?oe(e):null},gender:{value:"",required:!0,label:"Gender",placeholder:"select gender"},birthdate:{value:"",label:"Date of Birth",required:!0},cellPhoneNumber:{value:"",required:!0,label:"Cellphone Number",placeholder:"Enter cellphone number e.g. 0991234567",validation:async e=>e.value!=="Unknown"&&z(e)},homeVillage:{value:"",label:"Home Village",placeholder:"Home Village",required:!0},landmark:{value:"",label:"Landmark",placeholder:"Closest Landmark or Plot Number",required:!0}}),t=A({givenName:{label:"First Name",value:"",placeholder:"Enter First Name",required:!0,validation:e=>v(e)},familyName:{label:"Last Name",value:"",placeholder:"Enter Last Name",required:!0,validation:e=>v(e)},cellPhoneNumber:{value:"",required:!0,label:"Cellphone Number",placeholder:"Enter cellphone number e.g. 0991234567",validation:async e=>e.value!=="Unknown"&&z(e)}});G(f,e=>{e?(t.givenName.value="Unknown",t.familyName.value="Unknown",t.cellPhoneNumber.value="Unknown",t.givenName.disabled=!0,t.familyName.disabled=!0,t.givenName.error="",t.familyName.error="",t.cellPhoneNumber.error=""):(t.givenName.value="",t.familyName.value="",t.cellPhoneNumber.value="",t.givenName.disabled=!1,t.familyName.disabled=!1)});const b=async()=>{if(await O("Are you sure you want to clear all fields?")){for(const e in p)p[e].value=void 0,p[e].error="";for(const e in t)t[e].value=void 0,t[e].error="";ae.emit(ne.ON_CLEAR)}},c=(e,s={})=>{const r={facility_name:null,occupation:null};for(const m in e)r[ee(m)]=e[m];return{...r,...s}},d=async e=>{var m,N,l,g,w;let s,r;try{(m=e==null?void 0:e.other)!=null&&m.traditional_authority_id&&(s=await C.getTraditionalAuthorityById(e.other.traditional_authority_id)),s&&(r=await C.getDistrictByID(s.district_id))}catch(k){le("Unable to resolve client address. Saving using default address"),console.error(k)}return{home_district:(N=r==null?void 0:r.name)!=null?N:"N/A",home_traditional_authority:(l=s==null?void 0:s.name)!=null?l:"N/A",home_village:(e==null?void 0:e.label)||"N/A",current_district:(g=r==null?void 0:r.name)!=null?g:"N/A",current_traditional_authority:(w=s==null?void 0:s.name)!=null?w:"N/A",current_village:(e==null?void 0:e.label)||"N/A"}};return{today:te,patient:p,guardian:t,landmarks:P,genderOptions:D,guardianAbsent:f,isBirthdateEstimated:a,onClear:b,onFinish:async()=>{const e=await E(p),s=f.value?!0:await E(t);if(e&&s){await h.show("Saving...");try{const r=_(p).formData,m=new j,N=await d(r.homeVillage),l=c(r,{...N,isPatient:!0,patient_type:null,gender:r.gender.value,landmark:r.landmark.value,birthdate_estimated:a.value?"Yes":"No",relationship:f.value?"No":"Yes"});await m.createPerson(l),await m.createPatient();const g=m.getPersonID();if(r.nationalId&&await ie.create(g,$,r.nationalId),!f.value&&s){const{formData:w}=_(t),k=await d(),F=c(w,{...k,middle_name:"",gender:"N/A",birthdate:"N/A",birthdate_estimated:"N/A",landmark:"N/A",relationship:"N/A",patient_type:"",isPatient:!1,patient_id:g});await m.registerGuardian(F);const L=m.getPersonID();await K.createRelation(g,L,13)}h.hide(),o.push("/patient/reception/".concat(g,"/true"))}catch(r){console.log(r),h.hide()}}},getVillagesByName:x}}}),se={class:"ion-margin-start checkbox-label"};function me(o,a,f,P,D,p){const t=u("ion-col"),b=u("ion-row"),c=u("ion-title"),d=u("TextInput"),V=u("SelectInput"),e=u("DateInput"),s=u("ion-checkbox"),r=u("ion-button"),m=u("ion-grid"),N=u("Layout");return H(),Y(N,null,{default:i(()=>[n(m,null,{default:i(()=>[n(b,null,{default:i(()=>[n(t,{class:"ion-margin-bottom"},{default:i(()=>a[14]||(a[14]=[y("h1",null,"New Patient Registration",-1)])),_:1})]),_:1}),n(b,{class:"his-card"},{default:i(()=>[n(t,{size:"12"},{default:i(()=>[n(c,{class:"ion-text-center ion-margin-vertical"},{default:i(()=>a[15]||(a[15]=[y("b",null,"Personal Details",-1)])),_:1}),n(b,{class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(t,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.patient.givenName,"onUpdate:modelValue":a[0]||(a[0]=l=>o.patient.givenName=l)},null,8,["modelValue"])]),_:1}),n(t,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.patient.middleName,"onUpdate:modelValue":a[1]||(a[1]=l=>o.patient.middleName=l)},null,8,["modelValue"])]),_:1}),n(t,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.patient.familyName,"onUpdate:modelValue":a[2]||(a[2]=l=>o.patient.familyName=l)},null,8,["modelValue"])]),_:1}),n(t,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.patient.nationalId,"onUpdate:modelValue":a[3]||(a[3]=l=>o.patient.nationalId=l)},null,8,["modelValue"])]),_:1}),n(t,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(V,{modelValue:o.patient.gender,"onUpdate:modelValue":a[4]||(a[4]=l=>o.patient.gender=l),options:o.genderOptions},null,8,["modelValue","options"])]),_:1}),n(t,{size:"4",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.patient.cellPhoneNumber,"onUpdate:modelValue":a[5]||(a[5]=l=>o.patient.cellPhoneNumber=l),allowUnknown:""},null,8,["modelValue"])]),_:1}),n(t,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(e,{modelValue:o.patient.birthdate,"onUpdate:modelValue":a[6]||(a[6]=l=>o.patient.birthdate=l),allowEstimation:!0,estimationLabel:"Estimate Age",minDate:"1920-01-01",maxDate:o.today(),onIsEstimated:a[7]||(a[7]=l=>o.isBirthdateEstimated=l)},null,8,["modelValue","maxDate"])]),_:1}),n(t,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(V,{modelValue:o.patient.homeVillage,"onUpdate:modelValue":a[8]||(a[8]=l=>o.patient.homeVillage=l),asyncOptions:o.getVillagesByName,allowCustom:""},null,8,["modelValue","asyncOptions"])]),_:1}),n(t,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(V,{modelValue:o.patient.landmark,"onUpdate:modelValue":a[9]||(a[9]=l=>o.patient.landmark=l),options:o.landmarks,allowCustom:""},null,8,["modelValue","options"])]),_:1})]),_:1}),n(c,{class:"ion-text-center ion-margin-vertical ion-padding-top"},{default:i(()=>[a[17]||(a[17]=y("b",null,"Guardian details",-1)),y("span",se,[a[16]||(a[16]=I(" Guardian Details Unknown? ")),n(s,{modelValue:o.guardianAbsent,"onUpdate:modelValue":a[10]||(a[10]=l=>o.guardianAbsent=l)},null,8,["modelValue"])])]),_:1}),n(b,{class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(t,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.guardian.givenName,"onUpdate:modelValue":a[11]||(a[11]=l=>o.guardian.givenName=l)},null,8,["modelValue"])]),_:1}),n(t,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.guardian.familyName,"onUpdate:modelValue":a[12]||(a[12]=l=>o.guardian.familyName=l)},null,8,["modelValue"])]),_:1}),n(t,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:i(()=>[n(d,{modelValue:o.guardian.cellPhoneNumber,"onUpdate:modelValue":a[13]||(a[13]=l=>o.guardian.cellPhoneNumber=l),allowUnknown:""},null,8,["modelValue"])]),_:1})]),_:1}),n(r,{class:"ion-margin-top ion-float-right",onClick:o.onFinish,size:"large",color:"success"},{default:i(()=>a[18]||(a[18]=[I("Finish")])),_:1},8,["onClick"]),n(r,{class:"ion-margin-top ion-float-right",onClick:o.onClear,size:"large",color:"warning"},{default:i(()=>a[19]||(a[19]=[I("Clear")])),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1})}const De=W(re,[["render",me]]);export{De as default};