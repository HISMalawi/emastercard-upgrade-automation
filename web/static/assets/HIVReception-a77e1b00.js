var st=Object.defineProperty;var ot=(a,i,e)=>i in a?st(a,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[i]=e;var N=(a,i,e)=>(ot(a,typeof i!="symbol"?i+"":i,e),e);import{aK as rt,d as ct,aL as W,k as ut,l as lt,m as dt,I as vt,aJ as _t,f as gt,r as v,ah as k,h as M,i as pt,aI as D,ap as mt,aM as z,_ as ft,L as E,j as C,w as P,o as h,e as wt,T as St,aN as It,z as yt}from"./index-2c23db35.js";import{P as j,C as U}from"./patient_service-bfed97fb.js";import{a as Ct,t as x}from"./toasts-5b35ce85.js";import{l as L}from"./loader-792d5ee5.js";import{e as b}from"./encounter_types-1e88a09d.js";import{A as p,P as K,V as ht,C as bt}from"./consultation_service-eb284b83.js";import{a as F}from"./his_date-e2411856.js";import{a as S}from"./form-82430209.js";import{i as J,g as At}from"./common-abc2f84d.js";import{E as Y,a as q}from"./emc_event-4721851b.js";class Ot extends p{constructor(i,e=F()){super(i,b.HIV_CLINIC_REGISTRATION,e)}}class Rt extends p{constructor(i,e=F()){super(i,b.REGISTRATION,e)}}class Tt extends p{constructor(e,r,c=F()){super(e,b.HIV_STAGING,c);N(this,"age");N(this,"confirmatoryTest");this.age=r,this.confirmatoryTest=null}isAdult(){return this.age>=15}cd4CountIsValid(e){try{return!!e.match(/^(=|<|>)([0-9]*)$/m)}catch(r){return!1}}getStagingConditions(e){const r=this.getStagingCategoryByNum(e);return p.getConceptsByCategory(r)}getAllWhoStages(){return p.getConceptsByCategory("whole_staging_numbers")}getAllReasonsForART(e=this.date,r=!1){return p.getConceptsByCategory("reason_for_art").filter(c=>!(new Date(e)>new Date(rt)&&c.name.match(/cd4/i)||r&&c.name.match(/breastfeeding|pregnant/i)))}buildWhoStageObs(e){return this.buildValueCoded("Who stage",e)}buildWhoCriteriaObs(e){return this.buildValueCoded("Who stages criteria present",e)}buildReasonForArtObs(e){return this.buildValueCoded("Reason for ART eligibility",e)}getStagingCategoryByNum(e){switch(e){case 1:return this.isAdult()?"stage_1_conditions_adults":"stage_1_conditions_pedaids";case 2:return this.isAdult()?"stage_2_conditions_adults":"stage_2_conditions_pedaids";case 3:return this.isAdult()?"stage_3_conditions_adults":"stage_3_conditions_pedaids";case 4:return this.isAdult()?"stage_4_conditions_adults":"stage_4_conditions_pedaids";default:return""}}}const Vt=ct({components:{ClinicRegistration:W(()=>z(()=>import("./ClinicRegistration-c98b6c9c.js"),["assets/ClinicRegistration-c98b6c9c.js","assets/index-2c23db35.js","assets/index-4ecf4d26.css","assets/patient_service-bfed97fb.js","assets/patient_identifier_service-6ef7cbb1.js","assets/his_date-e2411856.js","assets/Date-1f077565.js","assets/common-abc2f84d.js","assets/TextInput-0719638e.js","assets/TextInput-e777cfa6.css","assets/DateInput.vue_vue_type_style_index_0_lang-877561e4.js","assets/validations-6f974720.js","assets/emc_event-4721851b.js","assets/vue-datepicker-358f2adb.js","assets/DateInput-5fa0484d.css","assets/YesNoInput-549247f5.js","assets/SelectInput-d28a2d7d.js","assets/SelectInput-5e7944e5.css","assets/location_options-1b0f4b95.js","assets/regimen_service-1824cd33.js","assets/DTFormElements-a1199b88.js","assets/consultation_service-eb284b83.js","assets/program_service-af88ba4a.js","assets/encounter_types-1e88a09d.js","assets/form-82430209.js","assets/Strs-7ee8a435.js","assets/toasts-5b35ce85.js","assets/loader-792d5ee5.js"])),Staging:W(()=>z(()=>import("./Staging-16506c2c.js"),["assets/Staging-16506c2c.js","assets/index-2c23db35.js","assets/index-4ecf4d26.css","assets/TextInput-0719638e.js","assets/TextInput-e777cfa6.css","assets/DateInput.vue_vue_type_style_index_0_lang-877561e4.js","assets/his_date-e2411856.js","assets/validations-6f974720.js","assets/common-abc2f84d.js","assets/emc_event-4721851b.js","assets/vue-datepicker-358f2adb.js","assets/DateInput-5fa0484d.css","assets/YesNoInput-549247f5.js","assets/SelectInput-d28a2d7d.js","assets/SelectInput-5e7944e5.css","assets/location_options-1b0f4b95.js","assets/form-82430209.js","assets/Strs-7ee8a435.js","assets/toasts-5b35ce85.js","assets/loader-792d5ee5.js","assets/patient_service-bfed97fb.js","assets/patient_identifier_service-6ef7cbb1.js","assets/Date-1f077565.js","assets/encounter_types-1e88a09d.js","assets/consultation_service-eb284b83.js","assets/program_service-af88ba4a.js","assets/Staging-fc4f8fe8.css"])),IonGrid:ut,IonRow:lt,IonCol:dt,IonButton:vt},setup(){const a=_t(),i=gt(),e=v(!1),r=k({}),c=v("ClinicRegistration"),s=parseInt(a.params.patientId.toString()||""),_=!!a.params.new.toString().match(/true/i),A=M(()=>c.value==="Staging"),O=M(()=>c.value==="Staging"),I=v({}),m=v(""),G=v(""),y=v([]),R=k({}),B=v(!1),Q=()=>{new K(s).getPrograms().then(t=>{const u=t.data;B.value=u.some(n=>n.program.name==="HIV PROGRAM")})},X=o=>r[o.type]=o.data,Z=()=>c.value="Staging",tt=()=>c.value="ClinicRegistration",et=async()=>{const{arvNumberEditable:o,formData:t,computedData:u}=r.registration,{computedData:n}=r.staging;try{if(L.show(),!_&&!J(y.value))for(const d of y.value)await D.void(d,"Duplicate");o&&t.arvNumber&&await I.value.createArvNumber(t.arvNumber);const l=new Rt(s,t.initialVisitDate);await l.createEncounter();const T=await S(u,"patient type");await l.saveObservationList(T);const g=new Ot(s,t.initialVisitDate);await g.createEncounter();const V=await S(u,"registration");if(await g.saveObservationList(V),t.everRegisteredAtClinic==="Yes"){const d=new ht(s,t.initialVisitDate);await d.createEncounter();const it=await S(u,"vitals");await d.saveObservationList(it);const $=new bt(s,t.initialVisitDate);await $.createEncounter();const nt=await S(u,"consultation");await $.saveObservationList(nt)}const f=new Tt(s,I.value.getAge(),t.initialVisitDate);await f.createEncounter();const w=await S(n);if(await f.saveObservationList(w),_||!B.value){const d=new K(s);d.setProgramDate(t.initialVisitDate),await d.enrollProgram()}await L.hide(),await Ct("Saved successfully"),i.push("/patient/".concat(s))}catch(l){await L.hide(),console.log(l),x("".concat(l))}},H=async o=>{for(const t of o){y.value.includes(t.encounter_id)||y.value.push(t.encounter_id);const u=await U.getConceptName(t.concept_id);let n="";t.value_datetime||t.value_drug?n=t.value_datetime:t.value_text?n=t.value_text:t.value_numeric?n=t.value_numeric:t.value_coded&&(n=await U.getConceptName(t.value_coded)),t.value_modifier&&(n=t.value_modifier+n),R[u]=n}},at=async()=>{const{HIV_CLINIC_CONSULTATION:o,HIV_CLINIC_REGISTRATION:t,REGISTRATION:u,HIV_STAGING:n,VITALS:l}=b;try{const g=(await D.all({encounter_type_id:t,patient_id:s})).data;if(J(g))return;if(m.value=At(g,"[0].encounter_datetime",""),m.value){await H(g[0].observations);const V=(await D.all({program_id:mt,patient_id:s,date:m.value})).data||[];for(const f of V){let w=[u,n];/yes/i.test("".concat(R["Ever registered at ART clinic"]))&&(w=[...w,o,l]),w.includes(f.encounter_type)&&await H(f.observations)}}}catch(T){x("Unable to load previous observations")}};return pt(async()=>{Q();const o=await j.findByID(s);o.ok&&(I.value=new j(o.data)),_||await at(),e.value=!0,Y.on(q.ON_INITIAL_VISIT_DATE,t=>{m.value=t}),Y.on(q.ON_ART_START_DATE,t=>{G.value=t})}),{activeForm:c,patient:I,isNewPatient:_,isStaging:A,isRegistration:O,isReady:e,initialVisitDate:m,observations:R,artStartDate:G,onValue:X,onFinish:et,onNext:Z,onPrevious:tt}}});function Nt(a,i,e,r,c,s){const _=E("ion-col"),A=E("ion-row"),O=E("ion-grid");return h(),C(O,null,{default:P(()=>[wt(A,{class:"his-card"},{default:P(()=>[a.isReady?(h(),C(_,{key:0,size:"12"},{default:P(()=>[(h(),C(St,null,[(h(),C(It(a.activeForm),{patient:a.patient,isNewPatient:a.isNewPatient,initialVisitDate:a.initialVisitDate,artStartDate:a.artStartDate,observations:a.observations,onOnValue:a.onValue,onOnNext:a.onNext,onOnPrevious:a.onPrevious,onOnFinish:a.onFinish},null,40,["patient","isNewPatient","initialVisitDate","artStartDate","observations","onOnValue","onOnNext","onOnPrevious","onOnFinish"]))],1024))]),_:1})):yt("",!0)]),_:1})]),_:1})}const Dt=ft(Vt,[["render",Nt]]),zt=Object.freeze(Object.defineProperty({__proto__:null,default:Dt},Symbol.toStringTag,{value:"Module"}));export{Ot as C,zt as H,Rt as P,Tt as S};
