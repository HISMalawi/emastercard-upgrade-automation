!function(){function t(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var i=a.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}System.register(["./index-legacy-6a8cc98f.js","./patient_service-legacy-2c2e282c.js","./toasts-legacy-7157433d.js","./loader-legacy-1aa2e549.js","./encounter_types-legacy-dd9af3d0.js","./consultation_service-legacy-5fd275ca.js","./his_date-legacy-45d6bc67.js","./form-legacy-920c34b2.js","./index-legacy-aa705205.js","./common-legacy-0d7df615.js","./emc_event-legacy-58754a45.js","./_plugin-vue_export-helper-legacy-762b7923.js"],(function(e,a){"use strict";var i,n,s,o,r,u,c,l,d,g,v,_,y,m,p,w,f,h,b,I,C,S,N,A,O,T,R,V,D,j,P,E,x,L,G,B,F,H,W,$,k;return{setters:[t=>{i=t.d,n=t.az,s=t.i,o=t.j,r=t.k,u=t.I,c=t.ay,l=t.g,d=t.r,g=t.ae,v=t.H,_=t.a2,y=t.aA,m=t.aB,p=t.L,w=t.h,f=t.w,h=t.o,b=t.a,I=t.T,C=t.aC,S=t.y},t=>{N=t.P,A=t.C},t=>{O=t.a,T=t.t},t=>{R=t.l},t=>{V=t.e},t=>{D=t.A,j=t.P,P=t.V,E=t.C},t=>{x=t.a},t=>{L=t.a},t=>{G=t.C,B=t.P},t=>{F=t.i,H=t.g},t=>{W=t.E,$=t.a},t=>{k=t._}],execute:function(){class z extends D{constructor(t,e=x()){super(t,V.HIV_CLINIC_REGISTRATION,e)}}e("C",z);class M extends D{constructor(t,e=x()){super(t,V.REGISTRATION,e)}}e("P",M);class U extends D{constructor(e,a,i=x()){super(e,V.HIV_STAGING,i),t(this,"age",void 0),t(this,"confirmatoryTest",void 0),this.age=a,this.confirmatoryTest=null}isAdult(){return this.age>=15}cd4CountIsValid(t){try{return!!t.match(/^(=|<|>)([0-9]*)$/m)}catch(e){return!1}}getStagingConditions(t){const e=this.getStagingCategoryByNum(t);return D.getConceptsByCategory(e)}getAllWhoStages(){return D.getConceptsByCategory("whole_staging_numbers")}getAllReasonsForART(t=this.date,e=!1){return D.getConceptsByCategory("reason_for_art").filter((a=>!(new Date(t)>new Date(G)&&a.name.match(/cd4/i))&&(!e||!a.name.match(/breastfeeding|pregnant/i))))}buildWhoStageObs(t){return this.buildValueCoded("Who stage",t)}buildWhoCriteriaObs(t){return this.buildValueCoded("Who stages criteria present",t)}buildReasonForArtObs(t){return this.buildValueCoded("Reason for ART eligibility",t)}getStagingCategoryByNum(t){switch(t){case 1:return this.isAdult()?"stage_1_conditions_adults":"stage_1_conditions_pedaids";case 2:return this.isAdult()?"stage_2_conditions_adults":"stage_2_conditions_pedaids";case 3:return this.isAdult()?"stage_3_conditions_adults":"stage_3_conditions_pedaids";case 4:return this.isAdult()?"stage_4_conditions_adults":"stage_4_conditions_pedaids";default:return""}}}e("S",U);const X=i({components:{ClinicRegistration:n((()=>m((()=>a.import("./ClinicRegistration-legacy-3bf50d92.js")),void 0))),Staging:n((()=>m((()=>a.import("./Staging-legacy-f87df728.js")),void 0))),IonGrid:s,IonRow:o,IonCol:r,IonButton:u},setup(){const t=c(),e=l(),a=d(!1),i=g({}),n=d("ClinicRegistration"),s=parseInt(t.params.patientId.toString()||""),o=!!t.params.new.toString().match(/true/i),r=v((()=>"Staging"===n.value)),u=v((()=>"Staging"===n.value)),m=d({}),p=d(""),w=d(""),f=d([]),h=g({}),b=d(!1),I=async t=>{for(const e of t){f.value.includes(e.encounter_id)||f.value.push(e.encounter_id);const t=await A.getConceptName(e.concept_id);let a="";e.value_datetime||e.value_drug?a=e.value_datetime:e.value_text?a=e.value_text:e.value_numeric?a=e.value_numeric:e.value_coded&&(a=await A.getConceptName(e.value_coded)),e.value_modifier&&(a=e.value_modifier+a),h[t]=a}};return _((async()=>{new j(s).getPrograms().then((t=>{const e=t.data;b.value=e.some((t=>"HIV PROGRAM"===t.program.name))}));const t=await N.findByID(s);t.ok&&(m.value=new N(t.data)),o||await(async()=>{const{HIV_CLINIC_CONSULTATION:t,HIV_CLINIC_REGISTRATION:e,REGISTRATION:a,HIV_STAGING:i,VITALS:n}=V;try{const o=(await y.all({encounter_type_id:e,patient_id:s})).data;if(F(o))return;if(p.value=H(o,"[0].encounter_datetime",""),p.value){await I(o[0].observations);const e=(await y.all({program_id:B,patient_id:s,date:p.value})).data||[];for(const s of e){let e=[a,i];/yes/i.test(`${h["Ever registered at ART clinic"]}`)&&(e=[...e,t,n]),e.includes(s.encounter_type)&&await I(s.observations)}}}catch(o){T("Unable to load previous observations")}})(),a.value=!0,W.on($.ON_INITIAL_VISIT_DATE,(t=>{p.value=t})),W.on($.ON_ART_START_DATE,(t=>{w.value=t}))})),{activeForm:n,patient:m,isNewPatient:o,isStaging:r,isRegistration:u,isReady:a,initialVisitDate:p,observations:h,artStartDate:w,onValue:t=>i[t.type]=t.data,onFinish:async()=>{const{arvNumberEditable:t,formData:a,computedData:n}=i.registration,{computedData:r}=i.staging;try{if(R.show(),!o&&!F(f.value))for(const t of f.value)await y.void(t,"Duplicate");t&&a.arvNumber&&await m.value.createArvNumber(a.arvNumber);const i=new M(s,a.initialVisitDate);await i.createEncounter();const u=await L(n,"patient type");await i.saveObservationList(u);const c=new z(s,a.initialVisitDate);await c.createEncounter();const l=await L(n,"registration");if(await c.saveObservationList(l),"Yes"===a.everRegisteredAtClinic){const t=new P(s,a.initialVisitDate);await t.createEncounter();const e=await L(n,"vitals");await t.saveObservationList(e);const i=new E(s,a.initialVisitDate);await i.createEncounter();const o=await L(n,"consultation");await i.saveObservationList(o)}const d=new U(s,m.value.getAge(),a.initialVisitDate);await d.createEncounter();const g=await L(r);if(await d.saveObservationList(g),o||!b.value){const t=new j(s);t.setProgramDate(a.initialVisitDate),await t.enrollProgram()}await R.hide(),await O("Saved successfully"),e.push(`/patient/${s}`)}catch(u){await R.hide(),console.log(u),T(`${u}`)}},onNext:()=>n.value="Staging",onPrevious:()=>n.value="ClinicRegistration"}}});const Y=k(X,[["render",function(t,e,a,i,n,s){const o=p("ion-col"),r=p("ion-row"),u=p("ion-grid");return h(),w(u,null,{default:f((()=>[b(r,{class:"his-card"},{default:f((()=>[t.isReady?(h(),w(o,{key:0,size:"12"},{default:f((()=>[(h(),w(I,null,[(h(),w(C(t.activeForm),{patient:t.patient,isNewPatient:t.isNewPatient,initialVisitDate:t.initialVisitDate,artStartDate:t.artStartDate,observations:t.observations,onOnValue:t.onValue,onOnNext:t.onNext,onOnPrevious:t.onPrevious,onOnFinish:t.onFinish},null,40,["patient","isNewPatient","initialVisitDate","artStartDate","observations","onOnValue","onOnNext","onOnPrevious","onOnFinish"]))],1024))])),_:1})):S("",!0)])),_:1})])),_:1})}]]),Z=Object.freeze(Object.defineProperty({__proto__:null,default:Y},Symbol.toStringTag,{value:"Module"}));e("H",Z)}}}))}();