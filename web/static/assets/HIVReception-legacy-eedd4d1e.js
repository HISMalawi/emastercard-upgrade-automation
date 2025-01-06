!function(){function t(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var i=a.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}System.register(["./index-legacy-084a8278.js","./patient_service-legacy-395b48b7.js","./toasts-legacy-35f2c029.js","./loader-legacy-1ef95e57.js","./encounter_types-legacy-dd9af3d0.js","./consultation_service-legacy-30923098.js","./his_date-legacy-31ba5787.js","./form-legacy-5a5cbfdd.js","./index-legacy-aa705205.js","./common-legacy-0d7df615.js","./emc_event-legacy-58754a45.js","./_plugin-vue_export-helper-legacy-762b7923.js"],(function(e,a){"use strict";var i,n,s,o,r,c,u,l,d,g,v,_,p,y,m,w,f,b,h,I,S,C,N,A,O,R,T,V,D,j,P,x,E,L,G,F,B,H,W,$,z;return{setters:[t=>{i=t.d,n=t.ay,s=t.h,o=t.i,r=t.j,c=t.I,u=t.ax,l=t.f,d=t.r,g=t.ac,v=t.F,_=t.a0,p=t.aw,y=t.az,m=t.J,w=t.g,f=t.w,b=t.o,h=t.e,I=t.R,S=t.aA,C=t.v},t=>{N=t.P,A=t.C},t=>{O=t.a,R=t.t},t=>{T=t.l},t=>{V=t.e},t=>{D=t.A,j=t.P,P=t.V,x=t.C},t=>{E=t.a},t=>{L=t.a},t=>{G=t.C,F=t.P},t=>{B=t.i,H=t.g},t=>{W=t.E,$=t.a},t=>{z=t._}],execute:function(){class k extends D{constructor(t,e=E()){super(t,V.HIV_CLINIC_REGISTRATION,e)}}e("C",k);class M extends D{constructor(t,e=E()){super(t,V.REGISTRATION,e)}}e("P",M);class U extends D{constructor(e,a,i=E()){super(e,V.HIV_STAGING,i),t(this,"age",void 0),t(this,"confirmatoryTest",void 0),this.age=a,this.confirmatoryTest=null}isAdult(){return this.age>=15}cd4CountIsValid(t){try{return!!t.match(/^(=|<|>)([0-9]*)$/m)}catch(e){return!1}}getStagingConditions(t){const e=this.getStagingCategoryByNum(t);return D.getConceptsByCategory(e)}getAllWhoStages(){return D.getConceptsByCategory("whole_staging_numbers")}getAllReasonsForART(t=this.date,e=!1){return D.getConceptsByCategory("reason_for_art").filter((a=>!(new Date(t)>new Date(G)&&a.name.match(/cd4/i))&&(!e||!a.name.match(/breastfeeding|pregnant/i))))}buildWhoStageObs(t){return this.buildValueCoded("Who stage",t)}buildWhoCriteriaObs(t){return this.buildValueCoded("Who stages criteria present",t)}buildReasonForArtObs(t){return this.buildValueCoded("Reason for ART eligibility",t)}getStagingCategoryByNum(t){switch(t){case 1:return this.isAdult()?"stage_1_conditions_adults":"stage_1_conditions_pedaids";case 2:return this.isAdult()?"stage_2_conditions_adults":"stage_2_conditions_pedaids";case 3:return this.isAdult()?"stage_3_conditions_adults":"stage_3_conditions_pedaids";case 4:return this.isAdult()?"stage_4_conditions_adults":"stage_4_conditions_pedaids";default:return""}}}e("S",U);const Y=i({components:{ClinicRegistration:n((()=>y((()=>a.import("./ClinicRegistration-legacy-01160882.js")),void 0))),Staging:n((()=>y((()=>a.import("./Staging-legacy-8afaa348.js")),void 0))),IonGrid:s,IonRow:o,IonCol:r,IonButton:c},setup(){const t=u(),e=l(),a=d(!1),i=g({}),n=d("ClinicRegistration"),s=parseInt(t.params.patientId.toString()||""),o=!!t.params.new.toString().match(/true/i),r=v((()=>"Staging"===n.value)),c=v((()=>"Staging"===n.value)),y=d({}),m=d(""),w=d(""),f=d([]),b=g({}),h=d(!1),I=async t=>{for(const e of t){f.value.includes(e.encounter_id)||f.value.push(e.encounter_id);const t=await A.getConceptName(e.concept_id);let a="";e.value_datetime||e.value_drug?a=e.value_datetime:e.value_text?a=e.value_text:e.value_numeric?a=e.value_numeric:e.value_coded&&(a=await A.getConceptName(e.value_coded)),e.value_modifier&&(a=e.value_modifier+a),b[t]=a}};return _((async()=>{new j(s).getPrograms().then((t=>{const e=t.data;h.value=e.some((t=>"HIV PROGRAM"===t.program.name))}));const t=await N.findByID(s);t.ok&&(y.value=new N(t.data)),o||await(async()=>{const{HIV_CLINIC_CONSULTATION:t,HIV_CLINIC_REGISTRATION:e,REGISTRATION:a,HIV_STAGING:i,VITALS:n}=V;try{const o=(await p.all({encounter_type_id:e,patient_id:s})).data;if(B(o))return;if(m.value=H(o,"[0].encounter_datetime",""),m.value){await I(o[0].observations);const e=(await p.all({program_id:F,patient_id:s,date:m.value})).data||[];for(const s of e){let e=[a,i];/yes/i.test(`${b["Ever registered at ART clinic"]}`)&&(e=[...e,t,n]),e.includes(s.encounter_type)&&await I(s.observations)}}}catch(o){R("Unable to load previous observations")}})(),a.value=!0,W.on($.ON_INITIAL_VISIT_DATE,(t=>{m.value=t})),W.on($.ON_ART_START_DATE,(t=>{w.value=t}))})),{activeForm:n,patient:y,isNewPatient:o,isStaging:r,isRegistration:c,isReady:a,initialVisitDate:m,observations:b,artStartDate:w,onValue:t=>i[t.type]=t.data,onFinish:async()=>{const{arvNumberEditable:t,formData:a,computedData:n}=i.registration,{computedData:r}=i.staging;try{if(T.show(),!o&&!B(f.value))for(const t of f.value)await p.void(t,"Duplicate");t&&a.arvNumber&&await y.value.createArvNumber(a.arvNumber);const i=new M(s,a.initialVisitDate);await i.createEncounter();const c=await L(n,"patient type");await i.saveObservationList(c);const u=new k(s,a.initialVisitDate);await u.createEncounter();const l=await L(n,"registration");if(await u.saveObservationList(l),"Yes"===a.everRegisteredAtClinic){const t=new P(s,a.initialVisitDate);await t.createEncounter();const e=await L(n,"vitals");await t.saveObservationList(e);const i=new x(s,a.initialVisitDate);await i.createEncounter();const o=await L(n,"consultation");await i.saveObservationList(o)}const d=new U(s,y.value.getAge(),a.initialVisitDate);await d.createEncounter();const g=await L(r);if(await d.saveObservationList(g),o||!h.value){const t=new j(s);t.setProgramDate(a.initialVisitDate),await t.enrollProgram()}await T.hide(),await O("Saved successfully"),e.push(`/patient/${s}`)}catch(c){await T.hide(),console.log(c),R(`${c}`)}},onNext:()=>n.value="Staging",onPrevious:()=>n.value="ClinicRegistration"}}});const J=z(Y,[["render",function(t,e,a,i,n,s){const o=m("ion-col"),r=m("ion-row"),c=m("ion-grid");return b(),w(c,null,{default:f((()=>[h(r,{class:"his-card"},{default:f((()=>[t.isReady?(b(),w(o,{key:0,size:"12"},{default:f((()=>[(b(),w(I,null,[(b(),w(S(t.activeForm),{patient:t.patient,isNewPatient:t.isNewPatient,initialVisitDate:t.initialVisitDate,artStartDate:t.artStartDate,observations:t.observations,onOnValue:t.onValue,onOnNext:t.onNext,onOnPrevious:t.onPrevious,onOnFinish:t.onFinish},null,40,["patient","isNewPatient","initialVisitDate","artStartDate","observations","onOnValue","onOnNext","onOnPrevious","onOnFinish"]))],1024))])),_:1})):C("",!0)])),_:1})])),_:1})}]]),q=Object.freeze(Object.defineProperty({__proto__:null,default:J},Symbol.toStringTag,{value:"Module"}));e("H",q)}}}))}();
