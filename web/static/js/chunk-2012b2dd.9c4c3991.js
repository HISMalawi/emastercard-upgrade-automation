(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2012b2dd"],{3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"k",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"n",(function(){return o})),n.d(t,"e",(function(){return u})),n.d(t,"b",(function(){return l})),n.d(t,"m",(function(){return s})),n.d(t,"j",(function(){return c})),n.d(t,"h",(function(){return T})),n.d(t,"a",(function(){return m})),n.d(t,"l",(function(){return d})),n.d(t,"c",(function(){return _})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return h}));const r=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],["Del","0","."],["Unknown","",""]],i=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0",""]],o=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],u=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],l=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],s=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],T=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],m=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],d=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],_=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],h=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"6be2":function(e,t,n){"use strict";n.d(t,"d",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"f",(function(){return u})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return m})),n.d(t,"a",(function(){return d}));var r=n("3800");const a=[r["m"],[["","Delete"]]],i=[r["j"],[["Delete"]]],o=[r["j"],[["Delete","Unknown"]]],u=[r["j"],[["N/A"],["Delete","Unknown"]]],l=[r["j"],[["Delete"]]],s=[r["j"],[["Unknown","Delete"],["Qwerty","A-Z"]]],c=[r["h"],[["Unknown"]]],T=[r["a"],[["0-9","Delete"],["Qwerty","Unknown"],["","Space"]]],m=[r["l"],[["","Delete"],["?123","0-9"],["Space","Unknown"]]],d=[{btn:"0-9",keyboard:s},{btn:"?123",keyboard:a},{btn:"A-Z",keyboard:T},{btn:"Qwerty",keyboard:m}]},7920:function(e,t,n){"use strict";var r=n("7a23");function a(e,t,n,a,i,o){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=n("9441"),o=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),u=n("d959"),l=n.n(u);const s=l()(o,[["render",a]]);t["a"]=s},"80b5":function(e,t,n){"use strict";n("13d5");var r=n("e86e"),a=n("d95e"),i=n("2706"),o=n("d10e"),u=n("b446"),l=n("9283"),s=n("23e6"),c=n("2ef0"),T=n("b5e4"),m=n("5713"),d=n("1c74");function _(e){return e.map(e=>({label:e,value:e}))}t["a"]={resolvePerson(e){let t={};for(const n in e){const r=e[n];Object(c["isPlainObject"])(r)&&"person"in r&&(Object(c["isPlainObject"])(r.person)?t={...t,...r.person}:t[n]=r["person"])}return t},getGivenNameField(){return{id:"given_name",helpText:"First name",type:a["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>i["a"].isName(e),options:async e=>{if(e.given_name){const t=await o["a"].searchGivenName(e.given_name.value);return _(t)}return[]}}},getFamilyNameField(){return{id:"family_name",helpText:"Last name",type:a["b"].TT_TEXT,computedValue:e=>({person:e.value}),validation:e=>i["a"].isName(e),options:async e=>{if(e.family_name){const t=await o["a"].searchFamilyName(e.family_name.value);return _(t)}return[]}}},getGenderField(){return{id:"gender",helpText:"Gender",type:a["b"].TT_SELECT,computedValue:e=>({person:e.value}),validation:e=>i["a"].required(e),options:()=>[{label:"Female",value:"F"},{label:"Male",value:"M"}]}},getDobConfig(){return{id:"birth_date",summaryLabel:"Date of Birth",helpText:"Birth",required:!0,minDate:()=>l["c"].estimateDateFromAge(100),maxDate:()=>o["a"].getSessionDate(),estimation:{allowUnknown:!0,allowUnknownMonthDay:!0,estimationFieldType:u["a"].AGE_ESTIMATE_FIELD},computeValue:(e,t)=>({date:e,isEstimate:t,person:{birthdate:e,birthdate_estimated:t}})}},getHomeRegionField(){return{id:"home_region",helpText:"Region of origin",type:a["b"].TT_SELECT,group:"person",requireNext:!1,computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:()=>Object(r["f"])()}},getHomeDistrictField(){return{id:"home_district",helpText:"Home District",type:a["b"].TT_SELECT,requireNext:!1,dynamicHelpText:e=>e.home_region&&e.home_region.label.match(/foreign/i)?"Home Country":"Home District",computedValue:e=>({person:e.label}),options:e=>Object(r["a"])(e.home_region.value)}},addCustomLocationBtnForTAorVillage(e,t){return{name:"Add "+e,slot:"end",color:"success",onClick:async(n,r,a)=>{if("string"!=typeof a.filter||a.filter.length<3)return Object(T["e"])("Please enter a valid "+e);if(!Object(c["isEmpty"])(a.filtered))return Object(T["e"])("Can't add existing "+e);const i=await Object(T["a"])(`Do you want to add ${e} ${a.filter}?`);if(!i)return;const o=await m["a"].createAddress(e,a.filter,n[t].value);if(!o)return Object(T["e"])("Unable to add "+e);a.filter=a.filter.toUpperCase()}}},getHomeTaField(){return{id:"home_traditional_authority",helpText:"Home TA",type:a["b"].TT_SELECT,requireNext:!1,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","home_district")]},defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.home_region&&e.home_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:(e,t)=>Object(r["h"])(e.home_district.value,t)}},getHomeVillageField(){return{id:"home_village",helpText:"Home Village",type:a["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","home_traditional_authority")]},requireNext:!1,defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.home_region&&e.home_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:(e,t)=>Object(r["i"])(e.home_traditional_authority.value,t)}},getCurrentRegionField(){return{id:"current_region",helpText:"Current Region",requireNext:!1,type:a["b"].TT_SELECT,computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:()=>Object(r["f"])()}},getCurrentDistrictField(){return{id:"current_district",helpText:"District",requireNext:!1,type:a["b"].TT_SELECT,dynamicHelpText:e=>e.current_region&&e.current_region.label.match(/foreign/i)?"Current Country":"Current District",computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:e=>Object(r["a"])(e.current_region.value)}},getCurrentTAfield(){return{id:"current_traditional_authority",helpText:"Current TA",requireNext:!1,type:a["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("TA","current_district")]},defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.current_region&&e.current_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:(e,t)=>Object(r["h"])(e.current_district.value,t)}},getCurrentVillageField(){return{id:"current_village",helpText:"Current Village",requireNext:!1,type:a["b"].TT_SELECT,config:{showKeyboard:!0,isFilterDataViaApi:!0,footerBtns:[this.addCustomLocationBtnForTAorVillage("Village","current_traditional_authority")]},defaultOutput:()=>({label:"N/A",value:"N/A"}),defaultComputedOutput:e=>e.current_region&&e.current_region.label.match(/foreign/i)?{person:"Unknown"}:null,computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:(e,t)=>Object(r["i"])(e.current_traditional_authority.value,t)}},getCellNumberField(){return{id:"cell_phone_number",helpText:"Cell phone number",group:"person",type:a["b"].TT_TEXT,computedValue:e=>({person:e.label}),validation:e=>{if(e){if(e.value.match(/Unknown|n\/a/i))return null;for(const t of(""+e.value).split("/"))if(i["a"].isMWPhoneNumber({label:t,value:t}))return[`"${t}" is not a valid phone number`];return null}return["Phone number cannot be empty"]},config:{customKeyboard:[[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],[["+265","/"],["Unknown","N/A"],["Delete"]]]}}},getLandmarkFields(){return[{id:"default_landmarks",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:a["b"].TT_SELECT,appearInSummary:e=>"Other"!=e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>i["a"].required(e),options:()=>_(["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"])},{id:"other_landmark",proxyID:"landmark",helpText:"Closest Landmark or Plot Number",type:a["b"].TT_NOTE,condition:e=>"Other"===e.default_landmarks.value,computedValue:e=>({person:e.value}),validation:e=>i["a"].required(e)}]},getFacilityLocationField(){return{id:"location",helpText:"Please select facility name",type:a["b"].TT_SELECT,computedValue:e=>({person:e.label}),validation:e=>i["a"].required(e),options:(e,t="")=>Object(r["b"])(t),config:{showKeyboard:!0,isFilterDataViaApi:!0}}},getPersonNameFromPersonObj(e,t){return e.names.length?e.names[0][t]:""},getAttrFromPersonObj(e,t){return Array.isArray(e.person_attributes)&&e.person_attributes.length?e.person_attributes.reduce((e,n)=>n.type.name===t?n.value:e,""):""},getAddressFromPersonObj(e,t){if(Array.isArray(e.addresses)&&e.addresses.length){const n=e.addresses[0],r={home_district:"address2",home_village:"neighborhood_cell",home_traditional_authority:"county_district",current_village:"city_village",current_traditional_authority:"township_division",current_district:"state_province"};return n[r[t]]}return""},mapPersonData(e){const t=this.getPersonNameFromPersonObj(e,"given_name"),n=this.getPersonNameFromPersonObj(e,"family_name"),r=this.getAddressFromPersonObj(e,"home_district"),a=this.getAddressFromPersonObj(e,"home_village"),i=this.getAddressFromPersonObj(e,"home_traditional_authority");return{id:e.person_id,name:`${t} ${n}`,given_name:t,family_name:n,gender:e.gender,birth_date:e.birthdate,birthdate_estimated:e.birthdate_estimated,home_district:r,home_village:a,home_traditional_authority:i,home_address:`${r} ${a}`,current_district:this.getAddressFromPersonObj(e,"current_district"),current_traditional_authority:this.getAddressFromPersonObj(e,"current_traditional_authority"),cell_phone_number:this.getAttrFromPersonObj(e,"Cell Phone Number"),landmark:this.getAttrFromPersonObj(e,"Landmark Or Plot Number")}},getPersonAttributeOptions(e){const t=new s["a"](e),n=(e,t)=>t in e?e[t]():"-";return{label:t.getPatientInfoString(),value:t.getID()||t.getNationalID(),other:{patientID:t.getID(),npid:t.getNationalID(),person:e,options:[{label:"National ID",value:n(t,"getNationalID")},{label:"ARV Number",value:n(t,"getArvNumber"),other:{show:()=>"ART"===d["e"].getProgramName()}},{label:"Name",value:n(t,"getFullName")},{label:"Gender",value:n(t,"getGender")},{label:"Birthdate",value:n(t,"getBirthdate")},{label:"Home District",value:n(t,"getHomeDistrict")},{label:"Home Village",value:n(t,"getHomeVillage")},{label:"Current District",value:n(t,"getCurrentDistrict")},{label:"Current T/A",value:n(t,"getCurrentTA")},{label:"Cellphone",value:n(t,"getPhoneNumber")}]}}}}},b446:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return N}));n("14d9"),n("13d5");var r,a=n("d95e"),i=[{label:"Jan",value:1},{label:"Feb",value:2},{label:"Mar",value:3},{label:"Apr",value:4},{label:"May",value:5},{label:"Jun",value:6},{label:"Jul",value:7},{label:"Aug",value:8},{label:"Sep",value:9},{label:"Oct",value:10},{label:"Nov",value:11},{label:"Dec",value:12}],o=n("9283"),u=n("2706"),l=n("3800"),s=n("6be2"),c=n("5a0c"),T=n.n(c),m=n("1c74");function d(e,t,n=!0){const r=[];return n&&r.push("UNKNOWN"),{id:e,helpText:t+" Year",appearInSummary:()=>!1,type:a["b"].TT_TEXT,config:{customKeyboard:[l["j"],[r,["DELETE"]]]}}}function _(e,t){return{id:e,helpText:t+" Month",appearInSummary:()=>!1,type:a["b"].TT_SELECT,options:()=>i}}function p(e,t){return{id:e,helpText:t+" Day",type:a["b"].TT_MONTHLY_DAYS,appearInSummary:()=>!1}}function h(e,t){return{id:e,helpText:t+" Estimated period",type:a["b"].TT_SELECT,appearInSummary:()=>!1,options:()=>[{label:"6 months ago",value:180},{label:"12 months ago",value:365},{label:"18 months ago",value:540},{label:"24 months ago",value:730},{label:"Over 2 years ago",value:730}]}}function E(e,t){return{id:e,helpText:t+" Age Estimate",type:a["b"].TT_NUMBER,appearInSummary:()=>!1,config:{keypad:s["e"]}}}function f(e){return parseInt(e)<10?"0"+e:e}async function b(e,t,n){if(t.defaultValue){const r=await t.defaultValue(e);if(r){const[e,t,a]=r.split("-");switch(n){case"Year":return e||"";case"Month":return parseInt(t)||"";case"Day":return parseInt(a)||""}}}return""}function v(e){return o["c"].toStandardHisDisplayFormat(e)}function g(e,t,n,r){if(t.minDate){const a=t.minDate(n,r);if(new Date(e)<new Date(a))return[`${v(e)} is less than minimum date of ${v(a)}`]}if(t.maxDate){const a=t.maxDate(n,r);if(a&&new Date(e)>new Date(a))return[`${v(e)} is greater than max date of  ${v(a)}`]}}function N(e,t=""){let n="",a="",l="",s="",c=!1;const N="year_"+e.id,I="month_"+e.id,y="day_"+e.id,A="age_estimate_"+e.id,S="duration_estimate_"+e.id,D=d(N,e.helpText,e.estimation.allowUnknown),C=_(I,e.helpText),F=p(y,e.helpText),O=E(A,e.helpText),P=h(S,e.helpText),L="boolean"===typeof e.estimation.allowUnknownMonthDay&&e.estimation.allowUnknownMonthDay,H=t=>!(t[N]&&t[N].value&&["Unknown"].includes(t[N].value))&&(!e.condition||e.condition(t)),R=(e,t)=>{const n=[{type:"year",value:a,default:"YYYY"},{type:"month",value:l,default:"MM"},{type:"day",value:s,default:"DD"}];return n.reduce((n,r)=>{const a=[null,void 0,"Unknown",""];return t===r.type?a.includes(e)?n.push(r.default):n.push(e):a.includes(r.value)?n.push(r.default):n.push(r.value),n},[]).join("-")};"function"===typeof e.init&&(D.init=e.init),D.updateHelpTextOnValue=e=>`${D.helpText} (${R(null===e||void 0===e?void 0:e.label,"year")})`,D.proxyID=e.id,D.unload=e=>a=e.value.toString(),D.config={...D.config,...e.config},D.defaultValue=t=>b(t,e,"Year"),D.condition=t=>!e.condition||e.condition(t),D.validation=(t,n,r)=>{if(e.required&&u["a"].required(t))return["Year cannot be empty"];const a=t?t.value:"";if(!e.estimation.allowUnknown&&a.toString().match(/unknown/i))return["Value unknown is not permitted"];if(a&&!["Unknown"].includes(a)&&isNaN(a)||a<1900)return["Invalid Year"];if(a&&"function"===typeof e.minDate){const t=o["c"].getYear(e.minDate(n,r));if(parseInt(a)<t)return[`Year of ${a} is less than Minimum year of ${t}`]}if(a&&"function"===typeof e.maxDate){const t=e.maxDate(n,r);if(t&&a>o["c"].getYear(t))return[`Year of ${a} exceeds Maximum year of ${o["c"].getYear(t)}`]}return null},D.summaryMapValue=()=>({label:e.summaryLabel||e.helpText,value:n?v(n):"Unknown"}),D.appearInSummary=(t,n)=>n===e.id,D.computedValue=t=>{if(n){const[r,a,i]=n.split("-");return n=`${t.value}-${a}-${i}`,e.computeValue(n,!1)}if(t&&"Unknown"===t.value)return n="",e.computeValue("Unknown",!1)},C.updateHelpTextOnValue=e=>`${C.helpText} (${R(null===e||void 0===e?void 0:e.label,"month")})`,C.proxyID=e.id,C.unload=e=>l=f(e.value.toString()),C.condition=e=>H(e),C.validation=e=>u["a"].required(e),C.defaultValue=t=>b(t,e,"Month"),L&&(C.options=()=>[...i,{label:"Unknown",value:"Unknown"}]),C.computedValue=(t,r)=>{if((""+t.value).match(/unknown/i))return n=r[N].value+"-07-15",e.computeValue(n,!0);if(n){const[r,a,i]=n.split("-"),o=f(""+t.value);return n=`${r}-${o}-${i}`,e.computeValue(n,!1)}},F.proxyID=e.id,F.updateHelpTextOnValue=e=>`${F.helpText} (${R(null===e||void 0===e?void 0:e.label,"day")})`,F.condition=e=>!(""+e[I].value).match(/unknown/i)&&H(e),F.validation=(t,r,i)=>u["a"].required(t)?["Day is required for date"]:(c=!!(""+t.value).match(/unknown/i),s=c?"15":f(""+t.value),n=`${a}-${l}-${s}`,g(n,e,r,i)),F.defaultValue=t=>b(t,e,"Day"),F.computedValue=()=>e.computeValue(n,c),F.unload=(t,n,r,a)=>{e.unload&&e.unload(t,n,r,a)},F.beforeNext=(t,r)=>!e.beforeNext||e.beforeNext(n,r),F.config={year:e=>e[N].value,month:e=>e[I].value},L||(F.config.keyboardActions=[]);const w=(t,n)=>{const r=["Unknown"===t[N].value,!e.condition||e.condition(t),e.estimation.estimationFieldType===n];return r.every(Boolean)};return O.proxyID=e.id,O.validation=(t,r,a)=>{if(t&&t.value>300)return["Age estimate is too high and exceeding hard limit of 300"];if(isNaN(parseInt(t.value.toString())))return["Please enter a valid number"];const i=/^(12[0-7]|1[01][0-9]|[1-9]?[0-9])$/;if(!t.value.toString().match(i))return["Not a valid age estimate"];const o=T()(m["e"].getSessionDate()).subtract(t.value,"years").year();return n=o+"-07-15",g(n,e,r,a)},O.condition=e=>w(e,r.AGE_ESTIMATE_FIELD),O.computedValue=()=>e.computeValue(n,!0),O.beforeNext=(t,r)=>!e.beforeNext||e.beforeNext(n,r),P.proxyID=e.id,P.validation=(t,r,a)=>u["a"].required(t)?["Please select an estimate"]:(n=T()(m["e"].getSessionDate()).subtract(t.value,"day").format(o["b"]),g(n,e,r,a)),P.condition=e=>w(e,r.MONTH_ESTIMATE_FIELD),P.computedValue=()=>e.computeValue(n,!0),P.beforeNext=(t,r)=>!e.beforeNext||e.beforeNext(n,r),[D,C,F,O,P]}(function(e){e["AGE_ESTIMATE_FIELD"]="age-estimate-field",e["MONTH_ESTIMATE_FIELD"]="month-period-estimate-field"})(r||(r={}))},d10e:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("ade3"),a=n("1c74");class i extends a["e"]{constructor(e){super(),Object(r["a"])(this,"person",void 0),this.person=e}create(){return a["e"].postJson("/people",this.person)}update(e){return a["e"].putJson("people/"+e,{...this.person,program_id:a["e"].getProgramID()})}static searchFamilyName(e){return super.getJson("/search/family_name",{search_string:e})}static searchGivenName(e){return super.getJson("/search/given_name",{search_string:e})}static async getPersonFullName(e){const t=await super.getJson(`/people/${e}/names`);return t&&t.length?t[0].given_name+" "+t[0].family_name:""}}},d95e:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),function(e){e["TT_MULTI_SELECT_GRID"]="HisMultiSelectGrid",e["TT_AGE_INPUT"]="HisAgeInput",e["TT_GROUP_SELECTOR"]="HisGroupSelector",e["TT_DATA_TABLE"]="HisDataTable",e["TT_GRID_SELECTOR"]="HisGridSelector",e["TT_NOTE"]="HisNote",e["TT_BARCODE"]="HisBarcodeInput",e["TT_MONTHLY_DAYS"]="HisMonthlyDays",e["TT_TEXT"]="HisTextInput",e["TT_NUMBER"]="HisNumberInput",e["TT_DATETIME"]="datetime",e["TT_SELECT"]="HisSelect",e["TT_MULTIPLE_SELECT"]="HisMultipleSelect",e["TT_ART_REGIMEN_SELECTION"]="HisArtRegimenSelection",e["TT_NEXT_VISIT_INTERVAL_SELECTION"]="HisNextVisitInterval",e["TT_TABLE_VIEWER"]="HisTableViewer",e["TT_DOSAGE_INPUT"]="HisDosageInput",e["TT_YES_NO"]="YesNoSelect",e["TT_MULTIPLE_YES_NO"]="MultiYesNoSelect",e["TT_SUMMARY"]="HisSummary",e["TT_WEIGHT_CHART"]="HisWeightChart",e["TT_VITALS_ENTRY"]="HisVitalsEntry",e["TT_ADHERENCE_INPUT"]="HisAdherenceInput",e["TT_ART_STAGING_SUMMARY"]="ArtStagingSummary",e["TT_LAB_ORDERS"]="HisLabOrders",e["TT_APPOINTMENTS_ENTRY"]="HisAppointments",e["TT_DISPENSATION_INPUT"]="DrugDispensationSelection",e["TT_PROGRAM_SELECTION"]="ProgramSelection",e["TT_DATE_PICKER"]="HisDatePicker",e["TT_PERSON_RESULT_VIEW"]="PersonSearchView",e["TT_RELATION_SELECTION"]="RelationsSelection",e["TT_FILING_NUMBER_VIEW"]="FilingNumberView",e["TT_CARD_SELECTOR"]="HisCardSelector",e["TT_PERSON_MATCH_VIEW"]="PersonMatchView",e["TT_FULL_DATE"]="HisDateInput",e["TT_BATCH_ENTRY"]="HisBatchEntry",e["TT_BATCH_VERIFICATION"]="HisBatchVerification",e["TT_BATCH_MOVEMENT"]="HisBatchMovement",e["TT_COMPLAINTS_PICKER"]="HisComplaintsPicker",e["TT_RADIOLOGY_PICKER"]="HisRadiologyPicker",e["TT_IP_ADDRESS"]="HisIPAddress",e["TT_TEXT_BANNER"]="HisTextBanner",e["TT_DRUG_DISPENSER"]="GeneralDrugDispenser",e["TT_CLINIC_HOLIDAY_PICKER"]="HisClinicHolidayPicker",e["TT_ANC_PREGNANCY_INPUT_CONFIG"]="AncPregnancyInfoConfig",e["TT_ANC_PREGNANCY_DETAILS_INPUT"]="AncPregnancyDetailsInput",e["TT_ANC_LMP_DATE_INPUT"]="AncLmpDateInput",e["TT_ANC_DRUGSET_INPUT"]="AncDrugSetInput",e["TT_DRUG_TRANSFER_IN"]="DrugTransferInput",e["TT_PRESCRIPTION_INPUT"]="HisPrescriptionInput",e["TT_INFINITE_SCROLL_MULTIPLE_SELECT"]="HisInfiniteScrollMultipleSelect"}(r||(r={}));const a=[r.TT_MULTI_SELECT_GRID,r.TT_AGE_INPUT,r.TT_BARCODE,r.TT_NOTE,r.TT_SELECT,r.TT_CARD_SELECTOR,r.TT_MULTIPLE_SELECT,r.TT_TEXT,r.TT_NUMBER,r.TT_MONTHLY_DAYS,r.TT_ART_REGIMEN_SELECTION,r.TT_NEXT_VISIT_INTERVAL_SELECTION,r.TT_TABLE_VIEWER,r.TT_DOSAGE_INPUT,r.TT_YES_NO,r.TT_MULTIPLE_YES_NO,r.TT_WEIGHT_CHART,r.TT_VITALS_ENTRY,r.TT_APPOINTMENTS_ENTRY,r.TT_COMPLAINTS_PICKER,r.TT_CLINIC_HOLIDAY_PICKER,r.TT_SUMMARY,r.TT_ART_STAGING_SUMMARY,r.TT_ADHERENCE_INPUT,r.TT_LAB_ORDERS,r.TT_PERSON_RESULT_VIEW,r.TT_PROGRAM_SELECTION,r.TT_DATE_PICKER,r.TT_RELATION_SELECTION,r.TT_FILING_NUMBER_VIEW,r.TT_PERSON_MATCH_VIEW,r.TT_FULL_DATE,r.TT_BATCH_ENTRY,r.TT_BATCH_VERIFICATION,r.TT_BATCH_MOVEMENT,r.TT_IP_ADDRESS,r.TT_TEXT_BANNER,r.TT_DISPENSATION_INPUT,r.TT_DATA_TABLE,r.TT_GROUP_SELECTOR,r.TT_ANC_PREGNANCY_INPUT_CONFIG,r.TT_ANC_PREGNANCY_DETAILS_INPUT,r.TT_ANC_LMP_DATE_INPUT,r.TT_DRUG_TRANSFER_IN,r.TT_GRID_SELECTOR,r.TT_ANC_DRUGSET_INPUT,r.TT_RADIOLOGY_PICKER,r.TT_PRESCRIPTION_INPUT,r.TT_INFINITE_SCROLL_MULTIPLE_SELECT,r.TT_DRUG_DISPENSER]},e86e:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"c",(function(){return u})),n.d(t,"g",(function(){return l})),n.d(t,"f",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"h",(function(){return T})),n.d(t,"i",(function(){return m})),n.d(t,"j",(function(){return d})),n.d(t,"e",(function(){return _}));var r=n("5713"),a=n("2ef0");async function i(e=""){const t=await r["a"].getFacilities({name:e});return t.filter(e=>!Object(a["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function o(e=""){const t=await r["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function u(e=""){const t=await r["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function l(){const e=await r["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function s(){const e=await r["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function c(e){const t=await r["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function T(e,t=""){const n=await r["a"].getTraditionalAuthorities(e,t);return n.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function m(e,t=""){const n=await r["a"].getVillages(e,t);return n.map(e=>({label:e.name,value:e.village_id,other:e}))}async function d(e="a",t=1){const n=await r["a"].getVillagesByName(e,t);return n.map(e=>({label:e.name,value:e.village_id,other:e}))}function _(){const e=["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"];return e.map(e=>({label:e,value:e,other:{code:e}}))}},f159:function(e,t,n){var r={"./AncDrugSetInput.vue":["c99f","TouchFormElement0"],"./AncLmpDateInput.vue":["101a","TouchFormElement1"],"./AncPregnancyDetailsInput.vue":["b043","TouchFormElement2"],"./AncPregnancyInfoConfig.vue":["262e","TouchFormElement3"],"./ArtStagingSummary.vue":["43db","TouchFormElement4"],"./BaseTextInput.vue":["36ad","TouchFormElement5"],"./DrugDispensationSelection.vue":["05d5","TouchFormElement6"],"./DrugTransferInput.vue":["de42","TouchFormElement7"],"./FieldMixin.vue":["51c8","TouchFormElement8"],"./FilingNumberView.vue":["c650","TouchFormElement9"],"./GeneralDrugDispenser.vue":["7737","TouchFormElement10"],"./HisAdherenceInput.vue":["f2c3","TouchFormElement11"],"./HisAgeInput.vue":["c05f","TouchFormElement12"],"./HisAppointments.vue":["b2eb","chunk-366b6f0a","TouchFormElement13"],"./HisArtRegimenSelection.vue":["47b9","TouchFormElement14"],"./HisBarcodeInput.vue":["dd65","TouchFormElement15"],"./HisBatchEntry.vue":["f2ab","chunk-fb7a1668","TouchFormElement16"],"./HisBatchMovement.vue":["5148","chunk-fb7a1668","TouchFormElement17"],"./HisBatchVerification.vue":["7b0f","chunk-fb7a1668","TouchFormElement18"],"./HisCardSelector.vue":["0734","TouchFormElement19"],"./HisClinicHolidayPicker.vue":["4030","chunk-366b6f0a","TouchFormElement20"],"./HisComplaintsPicker.vue":["82d1","TouchFormElement21"],"./HisDataTable.vue":["a6ba","TouchFormElement22"],"./HisDateInput.vue":["374c","TouchFormElement23"],"./HisDatePicker.vue":["9b30","chunk-366b6f0a","TouchFormElement24"],"./HisDosageInput.vue":["b34c","TouchFormElement25"],"./HisGridSelector.vue":["112a","TouchFormElement26"],"./HisGroupSelector.vue":["81cf","TouchFormElement27"],"./HisIPAddress.vue":["2a82","TouchFormElement28"],"./HisInfiniteScrollMultipleSelect.vue":["52a3","TouchFormElement29"],"./HisLabOrders.vue":["e614","TouchFormElement30"],"./HisMonthlyDays.vue":["69cf","TouchFormElement31"],"./HisMultiSelectGrid.vue":["0fa3","TouchFormElement32"],"./HisMultipleSelect.vue":["2fd5","chunk-8a3b8db0","TouchFormElement33"],"./HisNextVisitInterval.vue":["3126","TouchFormElement34"],"./HisNote.vue":["c927","TouchFormElement35"],"./HisNumberInput.vue":["5e75","TouchFormElement36"],"./HisPrescriptionInput.vue":["87e5","TouchFormElement37"],"./HisRadiologyPicker.vue":["adc7","chunk-3c642140","TouchFormElement38"],"./HisSelect.vue":["d11f","TouchFormElement39"],"./HisSummary.vue":["e0bd","TouchFormElement40"],"./HisTableViewer.vue":["8904","TouchFormElement41"],"./HisTextBanner.vue":["952c","TouchFormElement42"],"./HisTextInput.vue":["6ef9","TouchFormElement43"],"./HisVitalsEntry.vue":["e333","TouchFormElement44"],"./HisWeightChart.vue":["26a1","TouchFormElement45"],"./MultiYesNoSelect.vue":["5fd1","TouchFormElement46"],"./PersonMatchView.vue":["6591","TouchFormElement47"],"./PersonSearchView.vue":["28b2","TouchFormElement48"],"./ProgramSelection.vue":["e3b4","TouchFormElement49"],"./RelationsSelection.vue":["0e57","TouchFormElement50"],"./SelectMixin.vue":["82a9","TouchFormElement51"],"./YesNoSelect.vue":["71f2","TouchFormElement52"]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(a)}))}a.keys=function(){return Object.keys(r)},a.id="f159",e.exports=a}}]);
//# sourceMappingURL=chunk-2012b2dd.9c4c3991.js.map