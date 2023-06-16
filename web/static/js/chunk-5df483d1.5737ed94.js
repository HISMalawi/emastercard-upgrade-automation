(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5df483d1"],{"0690":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var i=n("ade3"),r=(n("13d5"),n("cc6f")),a=n("9283"),s=n("2ef0"),o=n("32b3"),u=n("5a0c"),c=n.n(u);class l extends r["a"]{constructor(e,t){super(e,68,t),Object(i["a"])(this,"lastDrugs",void 0),Object(i["a"])(this,"lastReceiptDate",void 0),this.lastDrugs=[],this.lastReceiptDate=""}async loadPreviousDrugs(e=!1){const t=new Date(this.date);t.setDate(t.getDate()-1);const n=e=>a["c"].toStandardHisFormat(e),i=await r["a"].getJson(`patients/${this.patientID}/drugs_received`,{date:n(t)});if(!Object(s["isEmpty"])(i)){this.lastReceiptDate=i.reduce((e,t)=>!e||new Date(n(t.order.start_date))>new Date(e)?n(t.order.start_date):e,null);const t=o["a"].htnDrugReferences().map(e=>e.drug_id);if(this.lastDrugs=i.filter(e=>!t.includes(e.drug["drug_id"])&&n(e.order.start_date)===this.lastReceiptDate),e){const e=await this.getPreviousDrugPillCount()||{};this.lastDrugs=this.lastDrugs.map(t=>(e[t.drug.drug_id]&&t.quantity&&(t.quantity+=e[t.drug.drug_id]),t))}}}getReceiptDate(){return this.lastReceiptDate}getLastDrugs(){return this.lastDrugs}receivedDrugsBefore(){return!Object(s["isEmpty"])(this.lastDrugs)}buildPillCountObs(e,t){return this.buildValueNumber("Number of tablets brought to clinic",t,null,e)}getPreviousDrugPillCount(){return r["a"].getJson("last_drugs_pill_count",{patient_id:this.patientID,program_id:this.programID,date:this.lastReceiptDate})}async buildAdherenceObs(e,t,n){const i=await r["a"].getConceptID("Drug adherence",!0);return{concept_id:i,value_numeric:n,value_drug:t,value_modifier:"%",order_id:e,person_id:this.patientID,obs_datetime:r["a"].getSessionDate()}}isAdherenceGood(e){return e>=95&&e<=105}calculateAdherence(e,t,n){return Math.round(100*(e-t)/(e-n))}calculateExpected(e,t,n,i){const r="QW"===i?"week":"day",a=this.calcTimeElapsed(n,r);return e-a*parseFloat(t.toString())}calcTimeElapsed(e,t){return c()(a["c"].toStandardHisFormat(this.date)).diff(a["c"].toStandardHisFormat(e),t)+1}calculateUnaccountedOrMissed(e,t){const n=parseFloat(e)-parseFloat(t);return n<0?-1*n+" missed":n+" unacc"}}},"32b3":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var i,r=n("cc6f"),a=n("7957");(function(e){e["Prescription"]="htnPrescription"})(i||(i={}));class s extends r["a"]{constructor(e,t){super(e,48,t)}static getBpGrade(e,t){return e<140&&t<90?"normal":e>=140&&e<160||t>=100&&t<110?"grade 1":e>=180&&t>110||e>=180?"grade 3":e>=160&&e<180||t>=110?"grade 2":"N/A"}static isBpNormotensive(e){const[t,n]=Object.values(e).sort((e,t)=>e.date<t.date?1:0).map(e=>this.getBpGrade(e.sbp,e.dbp));return"normal"===t&&"normal"===n}getSystolicBp(){return a["a"].getFirstValueNumber(this.patientID,"Systolic blood pressure")}getDiastolicBp(){return a["a"].getFirstValueNumber(this.patientID,"Diastolic blood pressure")}async onBpDrugs(){const e=await a["a"].getFirstValueCoded(this.patientID,"Treatment status");return!!e&&"Yes"===e}async getBPTrail(){return await r["a"].getJson(`/patients/${this.patientID}/bp_trail`)}async getCurrentDrugs(){return await r["a"].getJson(`/patients/${this.patientID}/current_bp_drugs`)}async getLastDrugs(){return await r["a"].getJson(`/patients/${this.patientID}/last_bp_drugs_dispensation`)}async getAdherence(e,t){return await r["a"].postJson(`/patients/${this.patientID}/remaining_bp_drugs`,{drug_id:e,pills:t})}async enrollPatient(e){return await r["a"].postJson(`/patients/${this.patientID}/update_or_create_htn_state`,e)}static htnDrugReferences(){return[{drug_id:275,drug_name:"HCZ (25mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:942,drug_name:"Enalapril (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:943,drug_name:"Enalapril (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:558,drug_name:"Amlodipine (5mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:559,drug_name:"Amlodipine (10mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:117,drug_name:"Atenolol (50mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"},{drug_id:11,drug_name:"Atenolol(100mg tablet)",units:"tab(s)",am:0,noon:0,pm:1,frequency:"Daily (QOD)"}]}getDrugs(){return{HCZ:{drugs:[{drugName:"HCZ (25mg tablet)",drugID:275,amount:"25mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null}],selected:null,notes:[]},Enalapril:{drugs:[{drugName:"Enalapril (5mg tablet)",drugID:942,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Enalapril (10mg tablet)",drugID:943,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Amlodipine:{drugs:[{drugName:"Amlodipine (5mg tablet)",drugID:558,amount:"5mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Amlodipine (10mg tablet)",drugID:559,amount:"10mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]},Atenolol:{drugs:[{drugName:"Atenolol (50mg tablet)",drugID:117,amount:"50mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null},{drugName:"Atenolol(100mg tablet)",drugID:11,amount:"100mg",current:!1,selected:!1,isChecked:!1,dispensed:null,expectedRemaining:null,adherence:null,remaining:null}],selected:null,notes:[]}}}}},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var i,r=n("7a23"),a=n("ad60"),s=n("2ef0"),o=n("0fa1"),u=n("7f35"),c=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(i||(i={}));const l=e=>c["c"].toStandardHisDisplayFormat(e),d={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(u["a"])("Data Integrity Issue Found","Patient died on "+l(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(u["a"])("Data integrity issue found","",`Session date ${l(t)} is less than birth date of ${l(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:r})=>{const a=await Object(u["c"])("Please select a provider for "+t,`BDE: ${l(n)} | Current: ${l(r)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===a.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:a.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var T=n("c21d"),h=n("7920"),m=n("b5e4"),_=n("8e8b"),p=Object(r["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),_["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[i.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(s["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(T["a"])(this.facts,d);for(const s in e){var t,n;const o=e[s];if(null!==o&&void 0!==o&&null!==(t=o.actions)&&void 0!==t&&t.alert){var r;const e=this.runflowState(await(null===o||void 0===o||null===(r=o.actions)||void 0===r?void 0:r.alert(this.facts)));if(e===i.EXIT)return}if(null!==o&&void 0!==o&&null!==(n=o.actions)&&void 0!==n&&n.selection){var a;const e=await(null===o||void 0===o||null===(a=o.actions)||void 0===a?void 0:a.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await _["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(m["c"])(""+e)}this.facts.sessionDate=a["a"].getSessionDate(),this.facts.apiDate=a["a"].getCachedApiDate(),this.facts.isBdeMode=a["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",a["a"].isBDE()&&(this.providers=await _["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),i=t.username.toUpperCase();return n<i?-1:n>i?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(s["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var i;const[t]=(null===(i=e.person)||void 0===i?void 0:i.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(o["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const E=p;t["a"]=E},7920:function(e,t,n){"use strict";var i=n("7a23");function r(e,t,n,r,a,s){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=n("9441"),s=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),o=n("d959"),u=n.n(o);const c=u()(s,[["render",r]]);t["a"]=c},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("14d9");function i(e,t){const n=[],i=[-1,"",null,void 0];for(const r in t){if(!(r in e))continue;const a=e[r];i.includes(a)?n.push(!1):n.push(t[r](a,e))}return n.every(Boolean)}function r(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function a(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function s(e,t,n="",s="",o="priority"){const u=[];for(const r in t){const a=t[r],o=[a.target&&n&&a.target!=n,a.targetEvent&&s&&a.targetEvent!=s];o.some(Boolean)||i(e,a.conditions)&&(a.title=r,a.description&&(a.description.text=a.description.info(e)),u.push(a))}return"priority"===o?r(u):a(u)}},d95e:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r})),function(e){e["TT_MULTI_SELECT_GRID"]="HisMultiSelectGrid",e["TT_AGE_INPUT"]="HisAgeInput",e["TT_GROUP_SELECTOR"]="HisGroupSelector",e["TT_DATA_TABLE"]="HisDataTable",e["TT_GRID_SELECTOR"]="HisGridSelector",e["TT_NOTE"]="HisNote",e["TT_BARCODE"]="HisBarcodeInput",e["TT_MONTHLY_DAYS"]="HisMonthlyDays",e["TT_TEXT"]="HisTextInput",e["TT_NUMBER"]="HisNumberInput",e["TT_DATETIME"]="datetime",e["TT_SELECT"]="HisSelect",e["TT_MULTIPLE_SELECT"]="HisMultipleSelect",e["TT_ART_REGIMEN_SELECTION"]="HisArtRegimenSelection",e["TT_NEXT_VISIT_INTERVAL_SELECTION"]="HisNextVisitInterval",e["TT_TABLE_VIEWER"]="HisTableViewer",e["TT_DOSAGE_INPUT"]="HisDosageInput",e["TT_YES_NO"]="YesNoSelect",e["TT_MULTIPLE_YES_NO"]="MultiYesNoSelect",e["TT_SUMMARY"]="HisSummary",e["TT_WEIGHT_CHART"]="HisWeightChart",e["TT_VITALS_ENTRY"]="HisVitalsEntry",e["TT_ADHERENCE_INPUT"]="HisAdherenceInput",e["TT_ART_STAGING_SUMMARY"]="ArtStagingSummary",e["TT_LAB_ORDERS"]="HisLabOrders",e["TT_APPOINTMENTS_ENTRY"]="HisAppointments",e["TT_DISPENSATION_INPUT"]="DrugDispensationSelection",e["TT_PROGRAM_SELECTION"]="ProgramSelection",e["TT_DATE_PICKER"]="HisDatePicker",e["TT_PERSON_RESULT_VIEW"]="PersonSearchView",e["TT_RELATION_SELECTION"]="RelationsSelection",e["TT_FILING_NUMBER_VIEW"]="FilingNumberView",e["TT_CARD_SELECTOR"]="HisCardSelector",e["TT_PERSON_MATCH_VIEW"]="PersonMatchView",e["TT_FULL_DATE"]="HisDateInput",e["TT_BATCH_ENTRY"]="HisBatchEntry",e["TT_BATCH_VERIFICATION"]="HisBatchVerification",e["TT_BATCH_MOVEMENT"]="HisBatchMovement",e["TT_COMPLAINTS_PICKER"]="HisComplaintsPicker",e["TT_RADIOLOGY_PICKER"]="HisRadiologyPicker",e["TT_IP_ADDRESS"]="HisIPAddress",e["TT_TEXT_BANNER"]="HisTextBanner",e["TT_DRUG_DISPENSER"]="GeneralDrugDispenser",e["TT_CLINIC_HOLIDAY_PICKER"]="HisClinicHolidayPicker",e["TT_ANC_PREGNANCY_INPUT_CONFIG"]="AncPregnancyInfoConfig",e["TT_ANC_PREGNANCY_DETAILS_INPUT"]="AncPregnancyDetailsInput",e["TT_ANC_LMP_DATE_INPUT"]="AncLmpDateInput",e["TT_ANC_DRUGSET_INPUT"]="AncDrugSetInput",e["TT_DRUG_TRANSFER_IN"]="DrugTransferInput",e["TT_PRESCRIPTION_INPUT"]="HisPrescriptionInput",e["TT_INFINITE_SCROLL_MULTIPLE_SELECT"]="HisInfiniteScrollMultipleSelect"}(i||(i={}));const r=[i.TT_MULTI_SELECT_GRID,i.TT_AGE_INPUT,i.TT_BARCODE,i.TT_NOTE,i.TT_SELECT,i.TT_CARD_SELECTOR,i.TT_MULTIPLE_SELECT,i.TT_TEXT,i.TT_NUMBER,i.TT_MONTHLY_DAYS,i.TT_ART_REGIMEN_SELECTION,i.TT_NEXT_VISIT_INTERVAL_SELECTION,i.TT_TABLE_VIEWER,i.TT_DOSAGE_INPUT,i.TT_YES_NO,i.TT_MULTIPLE_YES_NO,i.TT_WEIGHT_CHART,i.TT_VITALS_ENTRY,i.TT_APPOINTMENTS_ENTRY,i.TT_COMPLAINTS_PICKER,i.TT_CLINIC_HOLIDAY_PICKER,i.TT_SUMMARY,i.TT_ART_STAGING_SUMMARY,i.TT_ADHERENCE_INPUT,i.TT_LAB_ORDERS,i.TT_PERSON_RESULT_VIEW,i.TT_PROGRAM_SELECTION,i.TT_DATE_PICKER,i.TT_RELATION_SELECTION,i.TT_FILING_NUMBER_VIEW,i.TT_PERSON_MATCH_VIEW,i.TT_FULL_DATE,i.TT_BATCH_ENTRY,i.TT_BATCH_VERIFICATION,i.TT_BATCH_MOVEMENT,i.TT_IP_ADDRESS,i.TT_TEXT_BANNER,i.TT_DISPENSATION_INPUT,i.TT_DATA_TABLE,i.TT_GROUP_SELECTOR,i.TT_ANC_PREGNANCY_INPUT_CONFIG,i.TT_ANC_PREGNANCY_DETAILS_INPUT,i.TT_ANC_LMP_DATE_INPUT,i.TT_DRUG_TRANSFER_IN,i.TT_GRID_SELECTOR,i.TT_ANC_DRUGSET_INPUT,i.TT_RADIOLOGY_PICKER,i.TT_PRESCRIPTION_INPUT,i.TT_INFINITE_SCROLL_MULTIPLE_SELECT,i.TT_DRUG_DISPENSER]},f159:function(e,t,n){var i={"./AncDrugSetInput.vue":["c99f","TouchFormElement0"],"./AncLmpDateInput.vue":["101a","TouchFormElement1"],"./AncPregnancyDetailsInput.vue":["b043","TouchFormElement2"],"./AncPregnancyInfoConfig.vue":["262e","TouchFormElement3"],"./ArtStagingSummary.vue":["43db","TouchFormElement4"],"./BaseTextInput.vue":["36ad","TouchFormElement5"],"./DrugDispensationSelection.vue":["05d5","TouchFormElement6"],"./DrugTransferInput.vue":["de42","TouchFormElement7"],"./FieldMixin.vue":["51c8","TouchFormElement8"],"./FilingNumberView.vue":["c650","TouchFormElement9"],"./GeneralDrugDispenser.vue":["7737","TouchFormElement10"],"./HisAdherenceInput.vue":["f2c3","TouchFormElement11"],"./HisAgeInput.vue":["c05f","TouchFormElement12"],"./HisAppointments.vue":["b2eb","chunk-366b6f0a","TouchFormElement13"],"./HisArtRegimenSelection.vue":["47b9","TouchFormElement14"],"./HisBarcodeInput.vue":["dd65","TouchFormElement15"],"./HisBatchEntry.vue":["f2ab","chunk-fb7a1668","TouchFormElement16"],"./HisBatchMovement.vue":["5148","chunk-fb7a1668","TouchFormElement17"],"./HisBatchVerification.vue":["7b0f","chunk-fb7a1668","TouchFormElement18"],"./HisCardSelector.vue":["0734","TouchFormElement19"],"./HisClinicHolidayPicker.vue":["4030","chunk-366b6f0a","TouchFormElement20"],"./HisComplaintsPicker.vue":["82d1","TouchFormElement21"],"./HisDataTable.vue":["a6ba","TouchFormElement22"],"./HisDateInput.vue":["374c","TouchFormElement23"],"./HisDatePicker.vue":["9b30","chunk-366b6f0a","TouchFormElement24"],"./HisDosageInput.vue":["b34c","TouchFormElement25"],"./HisGridSelector.vue":["112a","TouchFormElement26"],"./HisGroupSelector.vue":["81cf","TouchFormElement27"],"./HisIPAddress.vue":["2a82","TouchFormElement28"],"./HisInfiniteScrollMultipleSelect.vue":["52a3","TouchFormElement29"],"./HisLabOrders.vue":["e614","TouchFormElement30"],"./HisMonthlyDays.vue":["69cf","TouchFormElement31"],"./HisMultiSelectGrid.vue":["0fa3","TouchFormElement32"],"./HisMultipleSelect.vue":["2fd5","chunk-8a3b8db0","TouchFormElement33"],"./HisNextVisitInterval.vue":["3126","TouchFormElement34"],"./HisNote.vue":["c927","TouchFormElement35"],"./HisNumberInput.vue":["5e75","TouchFormElement36"],"./HisPrescriptionInput.vue":["87e5","TouchFormElement37"],"./HisRadiologyPicker.vue":["adc7","chunk-3c642140","TouchFormElement38"],"./HisSelect.vue":["d11f","TouchFormElement39"],"./HisSummary.vue":["e0bd","TouchFormElement40"],"./HisTableViewer.vue":["8904","TouchFormElement41"],"./HisTextBanner.vue":["952c","TouchFormElement42"],"./HisTextInput.vue":["6ef9","TouchFormElement43"],"./HisVitalsEntry.vue":["e333","TouchFormElement44"],"./HisWeightChart.vue":["26a1","TouchFormElement45"],"./MultiYesNoSelect.vue":["5fd1","TouchFormElement46"],"./PersonMatchView.vue":["6591","TouchFormElement47"],"./PersonSearchView.vue":["28b2","TouchFormElement48"],"./ProgramSelection.vue":["e3b4","TouchFormElement49"],"./RelationsSelection.vue":["0e57","TouchFormElement50"],"./SelectMixin.vue":["82a9","TouchFormElement51"],"./YesNoSelect.vue":["71f2","TouchFormElement52"]};function r(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(i)},r.id="f159",e.exports=r},fe96:function(e,t,n){"use strict";n("14d9");var i=n("7a23"),r=n("d95e"),a=n("b5e4"),s=n("0690"),o=n("7365"),u=n("2706"),c=n("9283"),l=n("2ef0"),d=n("8e8b"),T=Object(i["defineComponent"])({mixins:[o["a"]],data:()=>({adherence:{},drugObs:[],askReasonForPoorAdherence:!1,calculationAgreementObs:[]}),methods:{async saveAdherence(){await this.adherence.createEncounter();const e=await Promise.all([...this.drugObs,...this.calculationAgreementObs]),t=await this.adherence.saveObservationList(e);if(!t)return Object(a["e"])("Unable to save patient observations")},buildAdherenceReport(e){const t=this.adherence.getReceiptDate(),n=this.adherence.calcTimeElapsed(t,"day"),i=` Last visit: ${c["c"].toStandardHisDisplayFormat(t)} \n                (${n} Days Elapsed)`,r=[{indexes:[0,3,6],class:"adherence-col-bg"}],a=[],s=[i],o=[["Prescription"],["Tabs given"],["Tabs per"],["Tabs remaining"],["Expected"],["Actual (counted)"],["Adherence"],["Doses missed/ Unaccounted for"],["Doses consumed"],["Art Adherence"]];return e.forEach((e,t)=>{const n=this.formatFrequency(e.frequency),i=this.calcPillsExpected(e),r=this.adherence.calculateAdherence(e.quantity,e.pillsBrought,i),u=this.adherence.isAdherenceGood(r)?"Good adherence":"Explore problem",c=this.adherence.calculateUnaccountedOrMissed(i,e.pillsBrought);s.push(e.drug.name),o[0].push(""),o[1].push(e.quantity),o[2].push(`${e.equivalent_daily_dose} <b>${n}</b>`),o[3].push(""),o[4].push(i<0?0:i),o[5].push(e.pillsBrought),o[6].push(""),o[7].push(c),o[8].push(r+"%"),o[9].push(u),a.push({index:t+1,row:9,class:u.match(/good/i)?"adherence-txt-good":"adherence-txt-bad"})}),[{label:"Selected Medication",value:"Table",other:{columns:s,rows:o,rowColors:r,cellColors:a}}]},formatFrequency(e){return(""+e).match(/qod/i)?"QOD":(""+e).match(/weekly/i)?"QW":e},calcPillsExpected(e){return this.adherence.calculateExpected(e.quantity,e.equivalent_daily_dose,e.order.start_date,this.formatFrequency(e.frequency))},getAdherenceFields(e=!1){return[{id:"pills_brought",helpText:"Pills remaining (brought to clinic)",type:r["b"].TT_ADHERENCE_INPUT,init:async()=>(this.adherence=new s["a"](this.patientID,this.providerID),await this.adherence.loadPreviousDrugs(await d["a"].get("ASK_HANGING_PILLS")),!0),condition:()=>!e||this.adherence.receivedDrugsBefore(),validation:e=>{if(u["a"].required(e))return["No drugs available"];const t=e.map(e=>""===e.value);return t.some(Boolean)?["Some values are missing"]:null},unload:async e=>{this.drugObs=[],e.forEach(async e=>{const{drug:t,order:n}=e.other,i={...e.other,pillsBrought:e.value},r=this.adherence.calculateAdherence(i.quantity,i.pillsBrought,this.calcPillsExpected(i));this.drugObs.push(this.adherence.buildAdherenceObs(n.order_id,t.drug_id,r)),this.drugObs.push(this.adherence.buildPillCountObs(n.order_id,e.value)),this.askReasonForPoorAdherence||(this.askReasonForPoorAdherence=!this.adherence.isAdherenceGood(i))})},options:e=>Object(l["isEmpty"])(e.pills_brought)?this.adherence.getLastDrugs().map(e=>({label:e.drug.name,value:"",other:{...e}})):e.pills_brought},{id:"adherence_report",helpText:"ART adherence",type:r["b"].TT_TABLE_VIEWER,condition:()=>!e||this.adherence.receivedDrugsBefore(),options:e=>this.buildAdherenceReport(e.pills_brought.map(e=>({...e.other,pillsBrought:e.value}))),config:{hiddenFooterBtns:["Clear"]}},{id:"agree_with_calculation",helpText:"Agree with adherence calculation",type:r["b"].TT_SELECT,condition:()=>this.askReasonForPoorAdherence,validation:e=>u["a"].required(e),unload:({value:e})=>{this.calculationAgreementObs=[this.adherence.buildValueCoded("Reason for poor treatment adherence",e)]},options:()=>[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]}]}}});const h=T;t["a"]=h}}]);
//# sourceMappingURL=chunk-5df483d1.5737ed94.js.map