var V=Object.defineProperty;var v=(o,r,t)=>r in o?V(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t;var s=(o,r,t)=>(v(o,typeof r!="symbol"?r+"":r,t),t);import{P as u}from"./program_service-af88ba4a.js";import{i as I}from"./common-abc2f84d.js";import{ap as l,H as c}from"./index-2c23db35.js";import{a as g}from"./his_date-e2411856.js";import{e as p}from"./encounter_types-1e88a09d.js";import{O as d,C as P}from"./patient_service-bfed97fb.js";class f{static create(r){const t={...r};return"program_id"in t||Object.assign(t,{program_id:l}),"encounter_datetime"in t||Object.assign(t,{encounter_datetime:g()}),c.postJson("/encounters",t)}static voidEncounter(r,t="Unknown"){return c.void("/encounters/".concat(r),{reason:t})}static getSavedEncounters(r,t=l){return c.getJson("programs/".concat(t,"/patients/").concat(r,"/saved_encounters"))}static getEncounters(r,t={}){return c.getJson("/encounters",{program_id:l,patient_id:r,paginate:!1,...t})}}class i extends d{constructor(t,e,a){super();s(this,"encounterTypeID");s(this,"programID");s(this,"encounterID");s(this,"providerID");s(this,"patientID");s(this,"date");this.encounterTypeID=e,this.patientID=t,this.encounterID=0,this.date=a,this.providerID=c.getProviderID(),this.programID=l}getDate(){return this.date}setDate(t){this.date=t}setEncounterID(t){this.encounterID=t}getEncounterID(){return this.encounterID}getFirstValueCoded(t){return i.getFirstValueCoded(this.patientID,t,this.date)}getFirstValueNumber(t){return i.getFirstValueNumber(this.patientID,t,this.date)}getFirstValueDatetime(t){return i.getFirstValueDatetime(this.patientID,t,this.date)}async buildObs(t,e){const a={...e,person_id:this.patientID,obs_datetime:this.date};return a.concept_id=await P.getConceptID(t),typeof e.value_coded=="string"&&(a.value_coded=await P.getConceptID(e.value_coded)),a}buildValueText(t,e){return i.buildValueText(t,e,this.date)}buildValueCoded(t,e){return i.buildValueCoded(t,e,this.date)}buildGroupValueCoded(t,e,a){return i.buildGroupValueCoded(t,e,a,this.date)}buildOptionsGroupObs(t,e){return Promise.all(e.map(async a=>this.buildGroupValueCoded(t,a.label,a.isChecked?"Yes":"No")))}buildValueNumber(t,e,a=null,n=null){return i.buildValueNumber(t,e,this.date,a,n)}buildValueDate(t,e){return i.buildValueDate(t,e,this.date)}buildValueDateEstimated(t,e){return this.buildObs(t,{value_datetime:e,value_text:"Estimated"})}buildDateObs(t,e,a){return/unknown/i.test(e)?this.buildValueText(t,"Unknown"):a?this.buildValueDateEstimated(t,e):this.buildValueDate(t,e)}async saveObservationList(t){return d.saveObsArray(this.encounterID,t)}async saveValueTextObs(t,e){const a=await d.buildValueText(t,e,this.date);return this.saveObs(a)}async saveValueCodedObs(t,e){const a=await d.buildValueCoded(t,e,this.date);return this.saveObs(a)}async saveValueNumericObs(t,e,a=null){const n=await d.buildValueNumber(t,e,this.date,a);return this.saveObs(n)}async saveValueDatetimeObs(t,e){const a=await d.buildValueDate(t,e,this.date);return this.saveObs(a)}async createEncounter(){const t={encounter_type_id:this.encounterTypeID,patient_id:this.patientID,encounter_datetime:this.date};this.providerID!=-1&&(t.provider_id=this.providerID);const e=await f.create(t);if(e)return this.encounterID=e.data.encounter_id,e.data}saveObs(t){return i.saveObs(this.encounterID,t)}}class S extends u{constructor(t){super();s(this,"patientId");s(this,"programId");s(this,"stateId");s(this,"patientProgramId");s(this,"programDate");s(this,"stateDate");s(this,"removedStates",["Pre-ART (Continue)","On antiretrovirals","Treatment never started","Transferred internally","Discharged uninfected","Exposed Child (Continue)","Patient transferred in"]);this.patientId=t,this.patientProgramId=-1,this.programId=l,this.stateId=-1,this.programDate=g(),this.stateDate=""}getProgramId(){return this.programId}getStateDate(){return this.stateDate}getProgramDate(){return this.programDate}getPatientProgramId(){return this.patientProgramId}getPrograms(){return u.getPatientPrograms(this.patientId)}async getProgram(){const t={patientID:-1,programID:-1,program:"N/A",outcome:"N/A",startDate:"",endDate:""},e=await this.getPrograms();if(I(e))return t;const a=e.data.filter(n=>n.program.program_id===l).map(n=>{const m=n.patient_states;let D="",b="",O="N/A";if(!I(m)){const h=m.length-1;D=m[h].start_date,b=m[h].end_date,O=m[h].name}return{patientID:n.patient_id,programID:n.program_id,program:n.program.name,outcome:O,startDate:D,endDate:b}});return I(a)?t:a[0]}getProgramStates(){return u.getPatientStates(this.patientId,this.programId)}async getProgramOutcomes(){const t=(await u.getProgramWorkflows(this.programId)).data;return t.length>0?t[0].states:[]}voidProgram(t){return u.voidProgram(this.patientProgramId,t)}voidState(t){return u.voidState(this.patientId,this.programId,this.stateId,t)}enrollProgram(){return u.enrollProgram(this.patientId,this.programId,this.programDate)}async transferOutEncounter(t,e=""){const a=new i(this.patientId,p.EXIT_FROM_HIV_CARE,this.stateDate);if(!await a.createEncounter())throw"Unable to transfer out encounter";return e&&await a.saveValueTextObs("Reason for transfer out",e),a.saveValueTextObs("Transfer to",t.name)}updateState(){return u.createState(this.patientId,this.programId,{state:this.stateId,date:this.stateDate})}setProgramDate(t){this.programDate=t}setStateDate(t){this.stateDate=t}setPatientProgramId(t){this.patientProgramId=t}setProgramId(t){this.programId=t}setStateId(t){this.stateId=t}}class x extends i{constructor(r,t=g()){super(r,p.VITALS,t)}}class R extends i{constructor(r,t=g()){super(r,p.HIV_CLINIC_CONSULTATION,t)}getFamilyPlanningMethods(){return["ORAL CONTRACEPTIVE PILLS","DEPO-PROVERA","INTRAUTERINE CONTRACEPTION","CONTRACEPTIVE IMPLANT","MALE CONDOMS","FEMALE CONDOMS","TUBAL LIGATION","NONE"]}}export{i as A,R as C,f as E,S as P,x as V};
