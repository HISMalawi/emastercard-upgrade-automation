(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7471d23c"],{2819:function(e,t,n){"use strict";n.r(t);var i=n("7a23");function o(e,t,n,o,a,r){const s=Object(i["resolveComponent"])("his-standard-form"),u=Object(i["resolveComponent"])("ion-page");return Object(i["openBlock"])(),Object(i["createBlock"])(u,null,{default:Object(i["withCtx"])(()=>[Object(i["createVNode"])(s,{fields:e.fields,skipSummary:!0,onFinishAction:e.onFinish,cancelDestinationPath:e.cancelDestination},null,8,["fields","onFinishAction","cancelDestinationPath"])]),_:1})}n("14d9");var a=n("7365"),r=n("d95e"),s=n("ade3"),u=n("cc6f"),l=n("ff01");const c={12:13,13:14,14:16,15:17,16:18,17:19,18:20,19:21,20:22,21:24,22:25,23:25,24:27,25:28,26:29,27:30,28:32,29:33,30:34,31:35,32:36,33:37,34:38,35:39,36:40,37:42};class T extends u["a"]{constructor(e,t){super(e,98,t),Object(s["a"])(this,"gestationWeeks",void 0),this.gestationWeeks=0}expectedFundalHeightForGestationWeeks(){return this.getEquivalentFundalHeight(this.gestationWeeks)}async loadPregnancyStatus(){const e=await u["a"].getJson(`programs/${this.programID}/patients/${this.patientID}`);if(e){const t=e["date_of_lnmp"];if(t){const t=new l["a"](this.patientID,this.providerID);this.gestationWeeks=parseInt(t.calculateWeekOfFirstVisit(e["date_of_lnmp"]))}}}getEquivalentFundalWeeks(e){return e<12?c["12"]:e>37?c["37"]:c[e]}getEquivalentFundalHeight(e){for(const t in c){const n=c[t];if(e<=n)return parseInt(t)}return e>42?37:e<13?12:0}}var d=n("2706"),h=n("d867"),p=n("8158"),m=n("2ef0"),_=n("b5e4"),E=n("6be2"),v=Object(i["defineComponent"])({components:{IonPage:h["IonPage"]},mixins:[a["a"]],data:()=>({service:{}}),watch:{ready:{async handler(e){e&&(this.service=new T(this.patientID,this.providerID),await this.service.loadPregnancyStatus(),this.fields=this.getFields())},immediate:!0}},methods:{async onFinish(e,t){await this.service.createEncounter(),await this.service.saveObservationList(await this.resolveObs(t)),this.nextTask()},diagnosisOptions(e){return[...p["a"].getConceptsByCategory("anc_diagnosis"),{name:"None"}].map(t=>e({...this.toOption(t.name),isChecked:!1}))},getFields(){return[{id:"ultrasound",helpText:"Ultrasound scan results available",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),computedValue:e=>this.service.buildValueCoded("Ultrasound",e.value),options:()=>this.yesNoOptions()},{id:"multiple_gestation",helpText:"Number of fetuses",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),computedValue:e=>this.service.buildValueText("Multiple gestation",e.value),condition:e=>"Yes"===e.ultrasound.value,options:()=>[{label:"One",value:1},{label:"Two",value:2},{label:"Three",value:3},{label:"Four",value:4},{label:"Unknown",value:"Unknown"}]},{id:"liquor",helpText:"Liquor",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),computedValue:e=>this.service.buildValueText("LIQUOR",e.value),condition:e=>"Yes"===e.ultrasound.value,options:()=>this.mapStrToOptions(["Adequate","Not adequate","Unknown"])},{id:"lie",helpText:"Lie",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),computedValue:e=>this.service.buildValueText("Lie",e.value),condition:e=>"Yes"===e.ultrasound.value,options:()=>this.mapStrToOptions(["Longitudinal","Transverse","Unknown"])},{id:"fetal_heart_movement_seen",helpText:"Fetal heart movement seen",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),computedValue:e=>this.service.buildValueCoded("Fetal heart movement seen",e.value),condition:e=>"Yes"===e.ultrasound.value,options:()=>this.yesNoOptions()},{id:"presentation",helpText:"Presentation",type:r["b"].TT_GROUP_SELECTOR,validation:e=>this.validateSeries([()=>d["a"].required(e),()=>e&&!e.value?["Presentation cannot be Empty!"]:null,()=>{var t,n,i;return e&&null!==e&&void 0!==e&&null!==(t=e.other)&&void 0!==t&&t.subGroupOptions&&Object(m["isEmpty"])(null===e||void 0===e||null===(n=e.other)||void 0===n?void 0:n.subGroupOptionValue)?[((null===e||void 0===e||null===(i=e.other)||void 0===i?void 0:i.subgroupTitle)||"Subgroup")+" has no value selected"]:null},()=>{var t,n,i,o,a,r,s,u;return!e||Object(m["isEmpty"])(null===e||void 0===e||null===(t=e.other)||void 0===t?void 0:t.subGroupOptionValue)||Object(m["isEmpty"])(null===e||void 0===e||null===(n=e.other)||void 0===n||null===(i=n.subGroupOptionValue)||void 0===i||null===(o=i.other)||void 0===o?void 0:o.options)||null!==e&&void 0!==e&&null!==(a=e.other)&&void 0!==a&&null!==(r=a.subGroupOptionValue)&&void 0!==r&&r.value?null:[(null===e||void 0===e||null===(s=e.other)||void 0===s||null===(u=s.subGroupOptionValue)||void 0===u?void 0:u.label)+"'s value isnt selected"]}]),computedValue:e=>{var t,n;const i=[this.service.buildValueText("Presentation",e.label)];var o,a;null!==e&&void 0!==e&&null!==(t=e.other)&&void 0!==t&&null!==(n=t.subGroupOptionValue)&&void 0!==n&&n.value&&i.push(this.service.buildValueText("Position",null===e||void 0===e||null===(o=e.other)||void 0===o||null===(a=o.subGroupOptionValue)||void 0===a?void 0:a.value));return i},options:e=>{const t=(e,t="",n={})=>({label:e,value:t,other:n}),n=[t("Vertex","",{options:this.mapStrToOptions(["Left Occipito Anterior","Left Occipito Transverse","Left Occipito Posterior","Right Occipito Anterior","Right Occipito Transverse","Right Occipito Posterior","Unknown"])}),this.toOption("Oblique"),this.toOption("Transverse"),this.toOption("Breech",{options:this.mapStrToOptions(["Left Sacro Anterior","Left Sacro Transverse","Left Sacro Posterior","Right Sacro Anterior","Right Sacro Transverse","Right Sacro Posterior","Unknown"])}),t("Face","",{concept:"Position",options:this.mapStrToOptions(["Left Mento Anterior","Left Mento Transverse","Left Mento Posterior","Right Mento Anterior","Right Mento Transverse","Right Mento Posterior","Unknown"])}),t("Shoulder","",{options:this.mapStrToOptions(["Left Acromion Dorsal Anterior","Left Acromion Dorsal Transverse","Left Acromion Dorsal Posterior","Right Acromion Dorsal Anterior","Right Acromion Dorsal Transverse","Right Acromion Dorsal Posterior","Unknown"])})];return e.presentation?e.presentation:[t("Cephalic","",{subGroupOptions:n,subgroupTitle:"Cephalic Position",options:this.mapStrToOptions(["Right Occipito Anterior","Left Occipito Anterior","Unknown"])}),t("Breech","",{subGroupOptions:n,subgroupTitle:"Breech Position",options:this.mapStrToOptions(["Right Sacro Anterior","Left Sacro Anterior","Unknown"])}),this.toOption("Ball"),this.toOption("Nil palpable")]}},{id:"enter_fundal_height",helpText:"Fundal height (cm)",type:r["b"].TT_NUMBER,dynamicHelpText:()=>{const e="Fundal height (cm)";return this.service.gestationWeeks?`${e} (${this.service.gestationWeeks}wks/${this.service.getEquivalentFundalHeight(this.service.gestationWeeks)} cm)`:e},beforeNext:async(e,t)=>{if(e&&(""+e.value).match(/unknown/i)&&!["Nil palpable","Ball"].includes(t.presentation.value))return!!await Object(_["a"])("Do you want to proceed with Unknown Fundal height?");const n=this.service.expectedFundalHeightForGestationWeeks(),i=e?parseInt(e.value):-1;return!(this.service.gestationWeeks&&e&&"number"===typeof i&&(i<n||i>n))||!!await Object(_["a"])(`\n                        Fundal height is not equal to expected ${n} cm from gestation weeks of ${this.service.gestationWeeks} .\n                        Are you sure about this value?`)},validation:e=>this.validateSeries([()=>d["a"].required(e),()=>e&&!(""+e.value).match(/unknown/i)?d["a"].rangeOf(e,10,45):null]),computedValue:e=>"Unknown"!=e.value?this.service.buildValueNumber("Fundus",e.value):this.service.buildObs("Fundus",{value_coded:e.value,value_numeric:0}),config:{keypad:E["g"]}},{id:"fetal_heart_beat",helpText:"Fetal heart beat",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),computedValue:e=>this.service.buildValueText("Fetal Heart Beat",e.value),options:()=>this.mapStrToOptions(["Heard","Not heard"])},{id:"fetal_heart_rate",helpText:"Fetal heart rate",type:r["b"].TT_NUMBER,validation:e=>d["a"].required(e),beforeNext:async e=>{const t=120,n=140,i=e?parseInt(e.value):-1;if(e&&"number"===typeof i&&(i<t||i>n)){const e=await Object(_["a"])(`\n                            The value is out of Range of ${t} - ${n}.\n                            Are you sure about this value?`);return!!e}return!0},condition:e=>"Heard"===e.fetal_heart_beat.value,computedValue:e=>"Unknown"!=e.value?this.service.buildValueNumber("Fetal heart movement seen",""+e.value):this.service.buildObs("Fetal heart movement seen",{value_numeric:0,value_coded:e.value}),config:{keypad:E["g"]}},{id:"enter_fetal_movement",helpText:"Fetal movement heard",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),computedValue:e=>this.service.buildValueCoded("Fetal movement heard",""+e.value),options:()=>this.yesNoOptions()},{id:"fetal_movement_felt",helpText:"Fetal movement felt",type:r["b"].TT_SELECT,validation:e=>d["a"].required(e),condition:e=>!["Ball","Nil palpable"].includes(e.presentation.label),computedValue:e=>this.service.buildValueCoded("Fetal movement felt",""+e.value),options:()=>this.yesNoOptions()},{id:"last_fmf",helpText:"Last fetal movement felt (in Weeks)",type:r["b"].TT_NUMBER,validation:e=>d["a"].required(e),condition:e=>"Unknown"!=e.fetal_movement_felt.value,computedValue:e=>"Unknown"!=e.value?this.service.buildValueNumber("Last Fetal movement felt",e.value):this.service.buildObs("Last Fetal movement felt",{value_numeric:0,value_coded:e.value}),options:()=>this.yesNoUnknownOptions()},{id:"diagnosis",helpText:"Diagnosis",type:r["b"].TT_MULTIPLE_SELECT,validation:e=>d["a"].required(e),computedValue:e=>e&&e.map(e=>e.value).includes("None")?[]:e.map(e=>this.service.buildValueCoded(e.label,"Yes")),onValueUpdate(e,t){return e.map(e=>("None"===t.value&&"None"!=e.value&&(e.isChecked=!1),"None"!=t.value&&t.isChecked&&"None"===e.value&&(e.isChecked=!1),e))},options:()=>this.diagnosisOptions(e=>e),config:{footerBtns:[{name:"None",slot:"end",onClickComponentEvents:{refreshOptions:()=>this.diagnosisOptions(e=>(e.isChecked="None"===e.label,e))},onClick:()=>"None"}]}}]}}}),f=n("6b0d"),I=n.n(f);const S=I()(v,[["render",o]]);t["default"]=S},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"k",(function(){return o})),n.d(t,"f",(function(){return a})),n.d(t,"n",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"m",(function(){return l})),n.d(t,"j",(function(){return c})),n.d(t,"h",(function(){return T})),n.d(t,"a",(function(){return d})),n.d(t,"l",(function(){return h})),n.d(t,"c",(function(){return p})),n.d(t,"i",(function(){return m})),n.d(t,"g",(function(){return _}));const i=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],o=[["1","2","3"],["4","5","6"],["7","8","9"],["Del","0","."],["Unknown","",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0",""]],r=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],s=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],u=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],l=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],T=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],d=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],h=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],p=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],m=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],_=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"6be2":function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"g",(function(){return r})),n.d(t,"f",(function(){return s})),n.d(t,"e",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return h}));var i=n("3800");const o=[i["m"],[["","Delete"]]],a=[i["j"],[["Delete"]]],r=[i["j"],[["Delete","Unknown"]]],s=[i["j"],[["N/A"],["Delete","Unknown"]]],u=[i["j"],[["Delete"]]],l=[i["j"],[["Unknown","Delete"],["Qwerty","A-Z"]]],c=[i["h"],[["Unknown"]]],T=[i["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],d=[i["l"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],h=[{btn:"0-9",keyboard:l},{btn:"?123",keyboard:o},{btn:"A-Z",keyboard:T},{btn:"Qwerty",keyboard:d}]},7365:function(e,t,n){"use strict";n("14d9"),n("13d5");var i,o=n("7a23"),a=n("ad60"),r=n("2ef0"),s=n("0fa1"),u=n("7f35"),l=n("9283");(function(e){e["SET_PROVIDER"]="SET_PROVIDER",e["CHANGE_SESSION_DATE"]="change_session_date",e["GO_TO_PATIENT_DASHBOARD"]="go_to_patient_dashboard",e["CHANGE_PATIENT_OUTCOME"]="change_outcome",e["CONTINUE"]="continue",e["EXIT"]="exit"})(i||(i={}));const c=e=>l["c"].toStandardHisDisplayFormat(e),T={"Warn if attempting to create new encounters for a deceased patient":{priority:1,actions:{alert:async({outcomeStartDate:e})=>{const t=await Object(u["a"])("Data Integrity Issue Found","Patient died on "+c(e),"Proceeding with this outcome might affect accuracy of some reports",[{name:"Cancel",slot:"end",color:"primary"},{name:"Change outcome",slot:"end",color:"primary"},{name:"Continue Anyway",slot:"end",color:"danger"}]);return"Cancel"===t?i.GO_TO_PATIENT_DASHBOARD:"Change outcome"===t?i.CHANGE_PATIENT_OUTCOME:i.CONTINUE}},conditions:{outcome(e){return"Patient died"===e},outcomeStartDate(e,{sessionDate:t}){return t>=e}}},"A patient's date of birth must not be less than Session Date":{priority:2,actions:{alert:async({birthDate:e,sessionDate:t})=>{const n=await Object(u["a"])("Data integrity issue found","",`Session date ${c(t)} is less than birth date of ${c(e)}`,[{name:"Cancel",slot:"end",color:"danger"},{name:"Change session date",slot:"end",color:"success"}]);return"Change session date"===n?i.CHANGE_SESSION_DATE:i.GO_TO_PATIENT_DASHBOARD}},conditions:{birthDate(e,{sessionDate:t}){return t<e}}},"Select Encounter provider when in back data entry":{priority:3,actions:{selection:async({providers:e,encounterName:t,sessionDate:n,apiDate:o})=>{const a=await Object(u["c"])("Please select a provider for "+t,`BDE: ${c(n)} | Current: ${c(o)}`,e,[{name:"Cancel",color:"danger",slot:"start",role:"default"},{name:"Confirm",slot:"end",role:"action"}]);return"Cancel"===a.action?{value:-1,flowState:i.GO_TO_PATIENT_DASHBOARD}:{value:a.selection,flowState:i.SET_PROVIDER}}},conditions:{isBdeMode(e){return e}}}};var d=n("c21d"),h=n("7920"),p=n("b5e4"),m=n("8e8b"),_=Object(o["defineComponent"])({components:{HisStandardForm:h["a"]},data:()=>({patient:{},fields:[],patientID:"",providerID:-1,providers:[],facts:{sessionDate:"",apiDate:"",encounterName:"N/A",providers:[],isBdeMode:!1,birthDate:"",outcome:"",outcomeStartDate:""},ready:!1}),watch:{$route:{handler(e){e.params.patient_id&&this.patientID!=e.params.patient_id&&(this.patientID=parseInt(e.params.patient_id),m["a"].get("ACTIVE_PATIENT",{patientID:this.patientID}).then(e=>{this.patient=e,this.setEncounterFacts().then(()=>{this.checkEncounterGuidelines().then(()=>{this.ready=!0})})}))},immediate:!0,deep:!0}},computed:{cancelDestination(){return this.patientDashboardUrl()}},methods:{runflowState(e,t=null){const n={};if(n[i.SET_PROVIDER]=e=>{const[t]=e.split(" "),n=Object(r["find"])(this.providers,{username:t});return n&&(this.providerID=n.person_id),i.CONTINUE},n[i.CHANGE_SESSION_DATE]=()=>(this.$router.push("/session/date?patient_dashboard_redirection_id="+this.patientID),i.EXIT),n[i.CHANGE_PATIENT_OUTCOME]=()=>(this.$router.push("/patient/programs/"+this.patientID),i.EXIT),n[i.GO_TO_PATIENT_DASHBOARD]=()=>(this.gotoPatientDashboard(),i.EXIT),e in n)return n[e](t)},async checkEncounterGuidelines(){const e=Object(d["a"])(this.facts,T);for(const r in e){var t,n;const s=e[r];if(null!==s&&void 0!==s&&null!==(t=s.actions)&&void 0!==t&&t.alert){var o;const e=this.runflowState(await(null===s||void 0===s||null===(o=s.actions)||void 0===o?void 0:o.alert(this.facts)));if(e===i.EXIT)return}if(null!==s&&void 0!==s&&null!==(n=s.actions)&&void 0!==n&&n.selection){var a;const e=await(null===s||void 0===s||null===(a=s.actions)||void 0===a?void 0:a.selection(this.facts));this.runflowState(e.flowState,e.value)}}},async setEncounterFacts(){try{const e=await m["a"].get("PATIENT_PROGRAM",{patientID:this.patientID});this.facts.outcome=e.outcome,this.facts.outcomeStartDate=e.startDate}catch(e){console.error(e),Object(p["c"])(""+e)}this.facts.sessionDate=a["a"].getSessionDate(),this.facts.apiDate=a["a"].getCachedApiDate(),this.facts.isBdeMode=a["a"].isBDE(),this.facts.birthDate=this.patient.getBirthdate(),this.facts.encounterName=this.$route.name?this.$route.name.toString().toUpperCase():"N/A",a["a"].isBDE()&&(this.providers=await m["a"].get("PROVIDERS"),this.facts.providers=this.providers.sort((e,t)=>{const n=e.username.toUpperCase(),i=t.username.toUpperCase();return n<i?-1:n>i?1:0}).map(e=>{var t;let n=""+e.username;if(!Object(r["isEmpty"])(null===e||void 0===e||null===(t=e.person)||void 0===t?void 0:t.names)){var i;const[t]=(null===(i=e.person)||void 0===i?void 0:i.names)||[];n+=` (${t.given_name} ${t.family_name})`}return n}))},toOption(e,t={}){return{label:e,value:e,other:t}},mapStrToOptions(e){return e.map(e=>({label:e,value:e}))},patientDashboardUrl(){return"/patient/dashboard/"+this.patientID},gotoPatientDashboard(){return this.$router.push({path:this.patientDashboardUrl()})},nextTask(){return Object(s["b"])(this.patientID,this.$router)},yesNoOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"}]},toYesNoOption(e,t={}){return{label:e,value:"",other:{...t,values:this.yesNoOptions()}}},mapOptions(e){return e.map(e=>({label:e,value:e}))},yesNoUnknownOptions(){return[{label:"Yes",value:"Yes"},{label:"No",value:"No"},{label:"Unknown",value:"Unknown"}]},resolveObs(e,t=""){const n=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const n=t.obs?t.obs:t;return Array.isArray(n)?e=e.concat(n):"function"===typeof n?e.push(n()):e.push(n),e},[]);return Promise.all(n)},inArray(e,t){try{return e.filter(e=>t(e)).length>0}catch(n){return!1}},validateSeries(e){try{for(const t in e){const n=e[t]();if(n)return n}}catch(t){return[t]}}}});const E=_;t["a"]=E},7920:function(e,t,n){"use strict";var i=n("7a23");function o(e,t,n,o,a,r){return Object(i["openBlock"])(),Object(i["createBlock"])(Object(i["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=n("9441"),r=Object(i["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=n("6b0d"),u=n.n(s);const l=u()(r,[["render",o]]);t["a"]=l},c21d:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("14d9");function i(e,t){const n=[],i=[-1,"",null,void 0];for(const o in t){if(!(o in e))continue;const a=e[o];i.includes(a)?n.push(!1):n.push(t[o](a,e))}return n.every(Boolean)}function o(e){return e.sort((e,t)=>e.priority&&t.priority&&e.priority<t.priority?-1:1)}function a(e){return e.sort((e,t)=>e.weight&&t.weight&&e.weight>t.weight?-1:1)}function r(e,t,n="",r="",s="priority"){const u=[];for(const o in t){const a=t[o],s=[a.target&&n&&a.target!=n,a.targetEvent&&r&&a.targetEvent!=r];s.some(Boolean)||i(e,a.conditions)&&(a.title=o,a.description&&(a.description.text=a.description.info(e)),u.push(a))}return"priority"===s?o(u):a(u)}},d95e:function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o})),function(e){e["TT_MULTI_SELECT_GRID"]="HisMultiSelectGrid",e["TT_AGE_INPUT"]="HisAgeInput",e["TT_GROUP_SELECTOR"]="HisGroupSelector",e["TT_DATA_TABLE"]="HisDataTable",e["TT_GRID_SELECTOR"]="HisGridSelector",e["TT_NOTE"]="HisNote",e["TT_BARCODE"]="HisBarcodeInput",e["TT_MONTHLY_DAYS"]="HisMonthlyDays",e["TT_TEXT"]="HisTextInput",e["TT_NUMBER"]="HisNumberInput",e["TT_DATETIME"]="datetime",e["TT_SELECT"]="HisSelect",e["TT_MULTIPLE_SELECT"]="HisMultipleSelect",e["TT_ART_REGIMEN_SELECTION"]="HisArtRegimenSelection",e["TT_NEXT_VISIT_INTERVAL_SELECTION"]="HisNextVisitInterval",e["TT_TABLE_VIEWER"]="HisTableViewer",e["TT_DOSAGE_INPUT"]="HisDosageInput",e["TT_YES_NO"]="YesNoSelect",e["TT_MULTIPLE_YES_NO"]="MultiYesNoSelect",e["TT_SUMMARY"]="HisSummary",e["TT_WEIGHT_CHART"]="HisWeightChart",e["TT_VITALS_ENTRY"]="HisVitalsEntry",e["TT_ADHERENCE_INPUT"]="HisAdherenceInput",e["TT_ART_STAGING_SUMMARY"]="ArtStagingSummary",e["TT_LAB_ORDERS"]="HisLabOrders",e["TT_APPOINTMENTS_ENTRY"]="HisAppointments",e["TT_DISPENSATION_INPUT"]="DrugDispensationSelection",e["TT_PROGRAM_SELECTION"]="ProgramSelection",e["TT_DATE_PICKER"]="HisDatePicker",e["TT_PERSON_RESULT_VIEW"]="PersonSearchView",e["TT_RELATION_SELECTION"]="RelationsSelection",e["TT_FILING_NUMBER_VIEW"]="FilingNumberView",e["TT_CARD_SELECTOR"]="HisCardSelector",e["TT_PERSON_MATCH_VIEW"]="PersonMatchView",e["TT_FULL_DATE"]="HisDateInput",e["TT_BATCH_ENTRY"]="HisBatchEntry",e["TT_BATCH_VERIFICATION"]="HisBatchVerification",e["TT_BATCH_MOVEMENT"]="HisBatchMovement",e["TT_COMPLAINTS_PICKER"]="HisComplaintsPicker",e["TT_RADIOLOGY_PICKER"]="HisRadiologyPicker",e["TT_IP_ADDRESS"]="HisIPAddress",e["TT_TEXT_BANNER"]="HisTextBanner",e["TT_DRUG_DISPENSER"]="GeneralDrugDispenser",e["TT_CLINIC_HOLIDAY_PICKER"]="HisClinicHolidayPicker",e["TT_ANC_PREGNANCY_INPUT_CONFIG"]="AncPregnancyInfoConfig",e["TT_ANC_PREGNANCY_DETAILS_INPUT"]="AncPregnancyDetailsInput",e["TT_ANC_LMP_DATE_INPUT"]="AncLmpDateInput",e["TT_ANC_DRUGSET_INPUT"]="AncDrugSetInput",e["TT_DRUG_TRANSFER_IN"]="DrugTransferInput",e["TT_PRESCRIPTION_INPUT"]="HisPrescriptionInput",e["TT_INFINITE_SCROLL_MULTIPLE_SELECT"]="HisInfiniteScrollMultipleSelect"}(i||(i={}));const o=[i.TT_MULTI_SELECT_GRID,i.TT_AGE_INPUT,i.TT_BARCODE,i.TT_NOTE,i.TT_SELECT,i.TT_CARD_SELECTOR,i.TT_MULTIPLE_SELECT,i.TT_TEXT,i.TT_NUMBER,i.TT_MONTHLY_DAYS,i.TT_ART_REGIMEN_SELECTION,i.TT_NEXT_VISIT_INTERVAL_SELECTION,i.TT_TABLE_VIEWER,i.TT_DOSAGE_INPUT,i.TT_YES_NO,i.TT_MULTIPLE_YES_NO,i.TT_WEIGHT_CHART,i.TT_VITALS_ENTRY,i.TT_APPOINTMENTS_ENTRY,i.TT_COMPLAINTS_PICKER,i.TT_CLINIC_HOLIDAY_PICKER,i.TT_SUMMARY,i.TT_ART_STAGING_SUMMARY,i.TT_ADHERENCE_INPUT,i.TT_LAB_ORDERS,i.TT_PERSON_RESULT_VIEW,i.TT_PROGRAM_SELECTION,i.TT_DATE_PICKER,i.TT_RELATION_SELECTION,i.TT_FILING_NUMBER_VIEW,i.TT_PERSON_MATCH_VIEW,i.TT_FULL_DATE,i.TT_BATCH_ENTRY,i.TT_BATCH_VERIFICATION,i.TT_BATCH_MOVEMENT,i.TT_IP_ADDRESS,i.TT_TEXT_BANNER,i.TT_DISPENSATION_INPUT,i.TT_DATA_TABLE,i.TT_GROUP_SELECTOR,i.TT_ANC_PREGNANCY_INPUT_CONFIG,i.TT_ANC_PREGNANCY_DETAILS_INPUT,i.TT_ANC_LMP_DATE_INPUT,i.TT_DRUG_TRANSFER_IN,i.TT_GRID_SELECTOR,i.TT_ANC_DRUGSET_INPUT,i.TT_RADIOLOGY_PICKER,i.TT_PRESCRIPTION_INPUT,i.TT_INFINITE_SCROLL_MULTIPLE_SELECT,i.TT_DRUG_DISPENSER]},f159:function(e,t,n){var i={"./AncDrugSetInput.vue":["c99f","TouchFormElement0"],"./AncLmpDateInput.vue":["101a","TouchFormElement1"],"./AncPregnancyDetailsInput.vue":["b043","TouchFormElement2"],"./AncPregnancyInfoConfig.vue":["262e","TouchFormElement3"],"./ArtStagingSummary.vue":["43db","TouchFormElement4"],"./BaseTextInput.vue":["36ad","TouchFormElement5"],"./DrugDispensationSelection.vue":["05d5","TouchFormElement6"],"./DrugTransferInput.vue":["de42","TouchFormElement7"],"./FieldMixin.vue":["51c8","TouchFormElement8"],"./FilingNumberView.vue":["c650","TouchFormElement9"],"./GeneralDrugDispenser.vue":["7737","TouchFormElement10"],"./HisAdherenceInput.vue":["f2c3","TouchFormElement11"],"./HisAgeInput.vue":["c05f","TouchFormElement12"],"./HisAppointments.vue":["b2eb","chunk-366b6f0a","TouchFormElement13"],"./HisArtRegimenSelection.vue":["47b9","TouchFormElement14"],"./HisBarcodeInput.vue":["dd65","TouchFormElement15"],"./HisBatchEntry.vue":["f2ab","chunk-182277b5","TouchFormElement16"],"./HisBatchMovement.vue":["5148","chunk-182277b5","TouchFormElement17"],"./HisBatchVerification.vue":["7b0f","chunk-182277b5","TouchFormElement18"],"./HisCardSelector.vue":["0734","TouchFormElement19"],"./HisClinicHolidayPicker.vue":["4030","chunk-366b6f0a","TouchFormElement20"],"./HisComplaintsPicker.vue":["82d1","TouchFormElement21"],"./HisDataTable.vue":["a6ba","TouchFormElement22"],"./HisDateInput.vue":["374c","TouchFormElement23"],"./HisDatePicker.vue":["9b30","chunk-366b6f0a","TouchFormElement24"],"./HisDosageInput.vue":["b34c","TouchFormElement25"],"./HisGridSelector.vue":["112a","TouchFormElement26"],"./HisGroupSelector.vue":["81cf","TouchFormElement27"],"./HisIPAddress.vue":["2a82","TouchFormElement28"],"./HisInfiniteScrollMultipleSelect.vue":["52a3","TouchFormElement29"],"./HisLabOrders.vue":["e614","TouchFormElement30"],"./HisMonthlyDays.vue":["69cf","TouchFormElement31"],"./HisMultiSelectGrid.vue":["0fa3","TouchFormElement32"],"./HisMultipleSelect.vue":["2fd5","chunk-45847ec4","TouchFormElement33"],"./HisNextVisitInterval.vue":["3126","TouchFormElement34"],"./HisNote.vue":["c927","TouchFormElement35"],"./HisNumberInput.vue":["5e75","TouchFormElement36"],"./HisPrescriptionInput.vue":["87e5","TouchFormElement37"],"./HisRadiologyPicker.vue":["adc7","chunk-418a3f72","TouchFormElement38"],"./HisSelect.vue":["d11f","TouchFormElement39"],"./HisSummary.vue":["e0bd","TouchFormElement40"],"./HisTableViewer.vue":["8904","TouchFormElement41"],"./HisTextBanner.vue":["952c","TouchFormElement42"],"./HisTextInput.vue":["6ef9","TouchFormElement43"],"./HisVitalsEntry.vue":["e333","TouchFormElement44"],"./HisWeightChart.vue":["26a1","TouchFormElement45"],"./MultiYesNoSelect.vue":["5fd1","TouchFormElement46"],"./PersonMatchView.vue":["6591","TouchFormElement47"],"./PersonSearchView.vue":["28b2","TouchFormElement48"],"./ProgramSelection.vue":["e3b4","TouchFormElement49"],"./RelationsSelection.vue":["0e57","TouchFormElement50"],"./SelectMixin.vue":["82a9","TouchFormElement51"],"./YesNoSelect.vue":["71f2","TouchFormElement52"]};function o(e){if(!n.o(i,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=i[e],o=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(o)}))}o.keys=function(){return Object.keys(i)},o.id="f159",e.exports=o},ff01:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var i=n("cc6f"),o=n("74f4"),a=n("5a0c"),r=n.n(a),s=n("0011");class u extends i["a"]{constructor(e,t){super(e,81,t)}async enrollPatient(){const e=new o["a"](this.patientID);await e.enrollProgram(),e.setStateDate(this.date),e.setStateId(118),await e.updateState()}calculateWeekOfFirstVisit(e){const t=new Date(e);t.setDate(t.getDate()+7);const n=new Date(this.getDate()),i=n-t;return String(Math.floor(i/6048e5))}calculateGestationDateFromPeriod(e){return r()(this.date).subtract(e,"months").endOf("month").format("YYYY-MM-DD")}estimateDelieveryDate(e){const t=new Date(e);t.setDate(t.getDate()+7),t.setMonth(t.getMonth()+9);const n=Object(s["a"])(t.getMonth()+1),i=Object(s["a"])(t.getDate());return`${t.getFullYear()}-${n}-${i}`}}}}]);
//# sourceMappingURL=chunk-7471d23c.df20ac4a.js.map