System.register(["./index-legacy-65d6eaec.js","./patient_service-legacy-b0dedd24.js","./toasts-legacy-4bd31a3d.js","./TextInput-legacy-3c47726e.js","./DateInput.vue_vue_type_style_index_0_lang-legacy-f3ea58cb.js","./YesNoInput-legacy-8fdcafcb.js","./HIVReception-legacy-e9b3649d.js","./SelectInput-legacy-be04d03d.js","./location_options-legacy-96f34587.js","./regimen_service-legacy-778d0a1b.js","./DTFormElements-legacy-8934eb68.js","./consultation_service-legacy-ada5ffd1.js","./validations-legacy-dd101fef.js","./form-legacy-a2cb2c0a.js","./emc_event-legacy-58754a45.js","./his_date-legacy-f6da7b16.js","./program_service-legacy-a8007d75.js","./patient_identifier_service-legacy-4ff17be7.js","./Date-legacy-5518fe5a.js","./vue-datepicker-legacy-f849676a.js","./loader-legacy-3d9f610c.js","./encounter_types-legacy-dd9af3d0.js","./Strs-legacy-09248991.js"],(function(e,t){"use strict";var a,o,i,l,n,r,u,s,m,d,c,v,f,p,g,b,y,V,T,D,I,R,A,h,N,_,H,C,P,S,w,x,k,z,U,j,L,O,B,E,F,Y,Q,$,q,G,W,J;return{setters:[e=>{a=e.d,o=e.j,i=e.k,l=e.$,n=e.I,r=e.r,u=e.G,s=e.ae,m=e.aJ,d=e.a6,c=e.a2,v=e.E,f=e.ai,p=e._,g=e.K,b=e.o,y=e.c,V=e.e,T=e.w,D=e.b,I=e.J,R=e.x,A=e.h},e=>{h=e.P},e=>{N=e.i},e=>{_=e.T},e=>{H=e._},e=>{C=e.Y},e=>{P=e.C,S=e.P},e=>{w=e.S},e=>{x=e.g},e=>{k=e.N,z=e.R},e=>{U=e.i,j=e.b,L=e.H},e=>{O=e.C,B=e.V},e=>{E=e.d,F=e.r,Y=e.v,Q=e.e},e=>{$=e.s},e=>{q=e.E,G=e.a},e=>{W=e.a},e=>{J=e.P},null,null,null,null,null,null],execute:function(){const t=a({components:{IonRow:o,IonCol:i,IonTitle:l,IonButton:n,TextInput:_,DateInput:H,YesNoInput:C,SelectInput:w,NumberInput:k},props:{patient:{type:Object,required:!0},isNewPatient:{type:Boolean,default:!0},observations:{type:Object,default:()=>({})},initialVisitDate:{type:String,default:""}},emits:["onValue","onNext"],setup(e,{emit:t}){const{facility:a}=v(),o=r(""),i=r([]),l=new P(e.patient.getID(),e.initialVisitDate),n=new O(e.patient.getID(),e.initialVisitDate),p=new B(e.patient.getID(),e.initialVisitDate),g=new S(e.patient.getID(),e.initialVisitDate),b=u((()=>e.patient.getBirthdate())),y=s({arvNumber:{value:"",label:"ARV Number",placeholder:"Enter ARV Number",required:!0,validation:async(e,t)=>{if(t.arvNumber.disabled)return null;const o=E(e,"POSITIVE_INTEGERS");if(null!==o)return o;const i=await h.findByOtherID(m,`${a.code}-ARV-${e.value}`);return N(i.data)?null:["ARV Number already exists"]}},arvNumberAtPreviousLocation:{value:"",label:"ART Number at previous Location",computedValue:e=>({tag:"registration",obs:l.buildValueText("ART number at previous location",e)})},initialVisitDate:{value:e.initialVisitDate,label:"Registration Date",required:!0},shouldFollowUp:{value:e.observations["Agrees to followup"]?e.observations["Agrees to followup"].match(/yes|home visit/i)?"Yes":"No":"",label:"Agrees to follow up ?",computedValue:e=>({tag:"registration",obs:[l.buildGroupValueCoded("Agrees to followup","Home visit",e),l.buildGroupValueCoded("Agrees to followup","Phone",e)]}),required:!0},receivedArvTreatmentBefore:{value:e.observations["Ever received ART"]||"",label:"Ever received ARVs for treatment or prophylaxis?",computedValue:e=>({tag:"registration",obs:l.buildValueCoded("Ever received ART",e)}),required:!0},dateLastTakenArvs:{value:e.observations["Date ART last taken"]||"",label:"Date last taken ARVs",computedValue:e=>({tag:"registration",obs:l.buildValueDate("Date ART last taken",e)}),validation:async(e,t)=>"Yes"===t.receivedArvTreatmentBefore.value&&F(e)},everRegisteredAtClinic:{value:e.observations["Ever registered at ART clinic"]||"",label:"Ever registred at an ART clinic",computedValue:e=>({tag:"registration",obs:l.buildValueCoded("Ever registered at ART clinic",e)}),validation:async(e,t)=>"Yes"===t.receivedArvTreatmentBefore.value&&F(e)},artInitiationLocation:{value:e.observations["Location of ART initiation"]||"",label:"Location of ART Initiation",computedValue:e=>({tag:"registration",obs:n.buildValueText("Location of ART initiation","string"==typeof e?e:e.label)}),validation:async(e,t)=>"Yes"===t.everRegisteredAtClinic.value&&F(e)},artStartDate:{value:e.observations["Date ART started"]||"",label:"Date started ART",computedValue:e=>({tag:"registration",obs:l.buildValueDate("Date ART started",e)}),validation:async(e,t)=>"Yes"===t.everRegisteredAtClinic.value&&F(e)},initialWeight:{value:e.observations.weight||"",label:"Initial Weight",placeholder:"Enter weight",computedValue:e=>({tag:"vitals",obs:p.buildValueNumber("weight",e)}),validation:async(e,t)=>"Yes"===t.everRegisteredAtClinic.value&&"Unknown"!==e.value&&Y([()=>F(e),()=>E(e,"DECIMALS"),()=>Q(e,2,250)])},initialHeight:{value:e.observations.Height||"",label:"Initial Height",placeholder:"Enter height",computedValue:e=>({tag:"vitals",obs:l.buildValueNumber("Height",e)}),validation:async(e,t)=>"Yes"===t.everRegisteredAtClinic.value&&"Unknown"!==e.value&&Y([()=>F(e),()=>E(e),()=>Q(e,20,220)])},initialTBStatus:{value:e.observations["TB Status at Initiation"]||"",label:"Initial TB Status",placeholder:"select TB status",computedValue:e=>({tag:"registration",obs:l.buildValueCoded("TB Status at Initiation","string"==typeof e?e:e.label)}),validation:async(e,t)=>"Yes"===t.everRegisteredAtClinic.value&&F(e)},tptHistory:{value:e.observations["Previous TB treatment history"]||"",label:"TPT History",placeholder:"Select TPT history",computedValue:e=>({tag:"consultation",obs:n.buildValueText("Previous TB treatment history","string"==typeof e?e:e.label)}),validation:async(e,t)=>"Yes"===t.everRegisteredAtClinic.value&&F(e)},tptStartDate:{value:e.observations["TPT Drugs Received"]||"",label:"Date started TPT",validation:async(e,t)=>{var a;return(null===(a=t.tptHistory)||void 0===a||null===(a=a.value)||void 0===a||null===(a=a.label)||void 0===a?void 0:a.match(/currently/i))&&F(e)}},inhQty:{value:"",label:"INH Amount Received",validation:async(e,t)=>{var a;const o=null===(a=t.tptHistory)||void 0===a||null===(a=a.value)||void 0===a?void 0:a.label;return(null==o?void 0:o.match(/currently/i))&&(o.match(/ipt/i)||o.includes("3HP (RFP + INH)"))&&F(e)},computedValue:(e,t)=>{var a;return{tag:"consultation",obs:n.buildObs("TPT Drugs Received",{value_drug:(null===(a=i.value.find((e=>"INH or H (Isoniazid 300mg tablet)"===e.name)))||void 0===a?void 0:a.drug_id)||0,value_datetime:(null==t?void 0:t.tptStartDate.value)||null,value_numeric:e||0})}}},rifapentineQty:{value:"",label:"Rifapentine Amount Received",validation:async(e,t)=>{var a;const o=null===(a=t.tptHistory)||void 0===a||null===(a=a.value)||void 0===a?void 0:a.label;return(null==o?void 0:o.match(/currently/i))&&o.includes("3HP (RFP + INH)")&&F(e)},computedValue:(e,t)=>{var a;return{tag:"consultation",obs:n.buildObs("TPT Drugs Received",{value_drug:(null===(a=i.value.find((e=>"Rifapentine (150mg)"===e.name)))||void 0===a?void 0:a.drug_id)||0,value_datetime:(null==t?void 0:t.tptStartDate.value)||null,value_numeric:e||0})}}},threeHPQty:{value:"",label:"INH / RFP Amount Received",validation:async(e,t)=>{var a;const o=null===(a=t.tptHistory)||void 0===a||null===(a=a.value)||void 0===a?void 0:a.label;return(null==o?void 0:o.match(/currently/i))&&o.includes("INH 300 / RFP 300 (3HP)")&&F(e)},computedValue:(e,t)=>{var a;return{tag:"consultation",obs:n.buildObs("TPT Drugs Received",{value_drug:(null===(a=i.value.find((e=>"INH 300 / RFP 300 (3HP)"===e.name)))||void 0===a?void 0:a.drug_id)||0,value_datetime:(null==t?void 0:t.tptStartDate.value)||null,value_numeric:e||0})}}},tptStartLocation:{value:e.observations["Location TPT Last Received"]||"",label:"TPT Transfer From",validation:async(e,t)=>{var a;return(null===(a=t.tptHistory)||void 0===a||null===(a=a.value)||void 0===a||null===(a=a.label)||void 0===a?void 0:a.match(/currently/i))&&F(e)},computedValue:e=>({tag:"consultation",obs:n.buildValueText("Location TPT Last Received","string"==typeof e?e:e.label)})},confirmatoryTest:{value:e.observations["Confirmatory hiv test type"]||"",label:"Confirmatory Test",placeholder:"Select confirmatory test",required:!0,computedValue:e=>({tag:"registration",obs:l.buildValueCoded("Confirmatory hiv test type","string"==typeof e?e:e.value)})},confirmatoryTestLocation:{value:e.observations["Confirmatory HIV test location"]||"",label:"Location of Confirmatory",placeholder:"Select location",validation:async(e,t)=>!("Not done"===t.confirmatoryTest.value.label||"Not done"===t.confirmatoryTest.value)&&F(e),computedValue:e=>({tag:"registration",obs:l.buildValueText("Confirmatory HIV test location","string"==typeof e?e:e.label)})},confirmatoryTestDate:{value:e.observations["Confirmatory HIV test date"]||"",label:"Confirmatory HIV Test Date",validation:async(e,t)=>!("Not done"===t.confirmatoryTest.value.label||"Not done"===t.confirmatoryTest.value)&&F(e),computedValue:e=>({tag:"registration",obs:l.buildValueDate("Confirmatory HIV test date",e)})},patientType:{value:"New patient",computedValue:e=>({tag:"patient type",obs:g.buildValueCoded("Type of patient",e)})}}),V=u((()=>{var e;return!("Not done"===(null===(e=y.confirmatoryTest.value)||void 0===e?void 0:e.label)||"Not done"===y.confirmatoryTest.value)}));d(y.receivedArvTreatmentBefore,(e=>{"No"===e.value&&(y.everRegisteredAtClinic.value="")})),d(y.initialVisitDate,(e=>{q.emit(G.ON_INITIAL_VISIT_DATE,e.value)})),d((()=>y.artStartDate.value),(e=>q.emit(G.ON_ART_START_DATE,e)),{immediate:!0});const T=u((()=>{var e;const t="string"==typeof y.tptHistory.value?y.tptHistory.value:null===(e=y.tptHistory.value)||void 0===e?void 0:e.label;if(null!=t&&t.match(/currently/i)){if(t.match(/ipt/i))return["INH or H (Isoniazid 300mg tablet)"];if(t.includes("3HP (RFP + INH)"))return["INH or H (Isoniazid 300mg tablet)","Rifapentine (150mg)"];if(t.includes("INH 300 / RFP 300 (3HP)"))return["INH 300 / RFP 300 (3HP)"]}return[]}));return c((()=>{const t=e.patient.getArvNumber();t&&"Unknown"!==t?(y.arvNumber.value=t.split("-")[2],y.arvNumber.disabled=!0):J.getNextSuggestedARVNumber().then((e=>{o.value=e,o.value&&(y.arvNumber.label=`Arv Number (Suggested Number: ${o.value})`)})),z.getCustomIngridients().then((e=>{e.ok&&(i.value=e.data)}))})),{today:W,form:y,isConfirmatoryTestDone:V,initialTbStatusOptions:U,tptHistoryOptions:j,HIVTestOptions:L,tptDrugs:T,facility:a,birthdate:b,getFacilities:x,onClear:async()=>{if(await f("Are you sure you want to clear all fields?"))for(const e in y)"patientType"!==e&&(y[e].value=void 0,y[e].error="");q.emit(G.ON_CLEAR)},onSubmit:async()=>{g.setDate(y.initialVisitDate.value),l.setDate(y.initialVisitDate.value),p.setDate(y.initialVisitDate.value),n.setDate(y.initialVisitDate.value),await $(y,(async(e,o)=>{t("onValue",{type:"registration",data:{formData:{...e,arvNumber:e.arvNumber?`${a.code}-ARV-${e.arvNumber}`:""},computedData:o,arvNumberEditable:!y.arvNumber.disabled}}),t("onNext")}))}}}});e("default",p(t,[["render",function(e,t,a,o,i,l){const n=g("ion-title"),r=g("text-input"),u=g("ion-col"),s=g("DateInput"),m=g("yes-no-input"),d=g("SelectInput"),c=g("NumberInput"),v=g("ion-button"),f=g("ion-row");return b(),y(I,null,[V(n,{class:"ion-text-center ion-margin-vertical ion-padding-bottom bold"},{default:T((()=>t[22]||(t[22]=[D(" HIV Clinic Registration ")]))),_:1}),V(f,{class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(u,{size:"5",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(r,{modelValue:e.form.arvNumber,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.arvNumber=t),form:e.form,prefix:`${e.facility.code}-ARV-`,disabled:!e.isNewPatient},null,8,["modelValue","form","prefix","disabled"])])),_:1}),V(u,{size:"7",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(s,{modelValue:e.form.initialVisitDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.initialVisitDate=t),"min-date":e.birthdate,"max-date":e.today,form:e.form},null,8,["modelValue","min-date","max-date","form"])])),_:1}),V(u,{size:"5",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(m,{modelValue:e.form.shouldFollowUp,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.shouldFollowUp=t),inline:""},null,8,["modelValue"])])),_:1}),V(u,{size:"7",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(m,{modelValue:e.form.receivedArvTreatmentBefore,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.receivedArvTreatmentBefore=t),inline:""},null,8,["modelValue"])])),_:1}),"Yes"===e.form.receivedArvTreatmentBefore.value?(b(),y(I,{key:0},[V(u,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(s,{modelValue:e.form.dateLastTakenArvs,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.dateLastTakenArvs=t),form:e.form,"min-date":e.birthdate,"max-date":e.today},null,8,["modelValue","form","min-date","max-date"])])),_:1}),V(u,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(m,{modelValue:e.form.everRegisteredAtClinic,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.everRegisteredAtClinic=t),inline:""},null,8,["modelValue"])])),_:1})],64)):R("",!0),"Yes"===e.form.everRegisteredAtClinic.value?(b(),y(I,{key:1},[V(u,{size:"9",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(d,{modelValue:e.form.artInitiationLocation,"onUpdate:modelValue":t[6]||(t[6]=t=>e.form.artInitiationLocation=t),form:e.form,asyncOptions:e.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])])),_:1}),V(u,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(r,{modelValue:e.form.arvNumberAtPreviousLocation,"onUpdate:modelValue":t[7]||(t[7]=t=>e.form.arvNumberAtPreviousLocation=t),form:e.form},null,8,["modelValue","form"])])),_:1}),V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(s,{modelValue:e.form.artStartDate,"onUpdate:modelValue":t[8]||(t[8]=t=>e.form.artStartDate=t),form:e.form,"min-date":e.birthdate,"max-date":e.today},null,8,["modelValue","form","min-date","max-date"])])),_:1}),V(u,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(c,{modelValue:e.form.initialWeight,"onUpdate:modelValue":t[9]||(t[9]=t=>e.form.initialWeight=t),form:e.form,min:1,allowUnknown:""},null,8,["modelValue","form"])])),_:1}),V(u,{size:"3",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(c,{modelValue:e.form.initialHeight,"onUpdate:modelValue":t[10]||(t[10]=t=>e.form.initialHeight=t),form:e.form,min:1,allowUnknown:""},null,8,["modelValue","form"])])),_:1}),V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(d,{modelValue:e.form.initialTBStatus,"onUpdate:modelValue":t[11]||(t[11]=t=>e.form.initialTBStatus=t),form:e.form,options:e.initialTbStatusOptions},null,8,["modelValue","form","options"])])),_:1}),V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(d,{modelValue:e.form.tptHistory,"onUpdate:modelValue":t[12]||(t[12]=t=>e.form.tptHistory=t),form:e.form,options:e.tptHistoryOptions},null,8,["modelValue","form","options"])])),_:1}),e.tptDrugs.length?(b(),y(I,{key:0},[V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(s,{modelValue:e.form.tptStartDate,"onUpdate:modelValue":t[13]||(t[13]=t=>e.form.tptStartDate=t),"min-date":e.birthdate,"max-date":e.today,form:e.form},null,8,["modelValue","min-date","max-date","form"])])),_:1}),e.tptDrugs.includes("INH or H (Isoniazid 300mg tablet)")?(b(),A(u,{key:0,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(c,{modelValue:e.form.inhQty,"onUpdate:modelValue":t[14]||(t[14]=t=>e.form.inhQty=t),form:e.form,min:1},null,8,["modelValue","form"])])),_:1})):R("",!0),e.tptDrugs.includes("Rifapentine (150mg)")?(b(),A(u,{key:1,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(c,{modelValue:e.form.rifapentineQty,"onUpdate:modelValue":t[15]||(t[15]=t=>e.form.rifapentineQty=t),form:e.form,min:1},null,8,["modelValue","form"])])),_:1})):R("",!0),e.tptDrugs.includes("INH 300 / RFP 300 (3HP)")?(b(),A(u,{key:2,size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(c,{modelValue:e.form.threeHPQty,"onUpdate:modelValue":t[16]||(t[16]=t=>e.form.threeHPQty=t),form:e.form,min:1},null,8,["modelValue","form"])])),_:1})):R("",!0),V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(d,{modelValue:e.form.tptStartLocation,"onUpdate:modelValue":t[17]||(t[17]=t=>e.form.tptStartLocation=t),form:e.form,asyncOptions:e.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])])),_:1})],64)):R("",!0)],64)):R("",!0),V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(d,{modelValue:e.form.confirmatoryTest,"onUpdate:modelValue":t[18]||(t[18]=t=>e.form.confirmatoryTest=t),form:e.form,options:e.HIVTestOptions},null,8,["modelValue","form","options"])])),_:1}),e.isConfirmatoryTestDone?(b(),y(I,{key:2},[V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(d,{modelValue:e.form.confirmatoryTestLocation,"onUpdate:modelValue":t[19]||(t[19]=t=>e.form.confirmatoryTestLocation=t),form:e.form,asyncOptions:e.getFacilities,allowCustom:""},null,8,["modelValue","form","asyncOptions"])])),_:1}),V(u,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:T((()=>[V(s,{modelValue:e.form.confirmatoryTestDate,"onUpdate:modelValue":t[20]||(t[20]=t=>e.form.confirmatoryTestDate=t),form:e.form,"min-date":e.birthdate,"max-date":e.today},null,8,["modelValue","form","min-date","max-date"])])),_:1})],64)):R("",!0),V(u,{size:"12",class:"ion-margin-top"},{default:T((()=>[V(v,{class:"ion-margin-top ion-float-right",size:"large",onClick:e.onSubmit,color:"success"},{default:T((()=>t[23]||(t[23]=[D("Next")]))),_:1},8,["onClick"]),V(v,{class:"ion-margin-top ion-float-right",size:"large",color:"warning",onClick:e.onClear},{default:T((()=>t[24]||(t[24]=[D("Clear")]))),_:1},8,["onClick"]),e.isNewPatient?R("",!0):(b(),A(v,{key:0,class:"ion-margin-top ion-float-right",size:"large",onClick:t[21]||(t[21]=t=>e.$router.back()),color:"primary"},{default:T((()=>t[25]||(t[25]=[D("Back")]))),_:1}))])),_:1})])),_:1})],64)}]]))}}}));
