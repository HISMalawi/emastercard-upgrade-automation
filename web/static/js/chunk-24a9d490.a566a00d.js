(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-24a9d490"],{"0b89":function(e,t,o){},"0c8c":function(e,t,o){"use strict";o("2e98")},"0db2":function(e,t,o){"use strict";var a=o("7a23");const l={key:0,class:"text-danger"},n={key:1,class:"ion-float-right ion-margin-end checkbox-label"},c={key:0,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}},r={style:{background:"#ffffff",height:"100%",padding:".5rem","flex-grow":"8"}},i={key:1,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}};function d(e,t,o,d,u,s){const b=Object(a["resolveComponent"])("ion-checkbox"),m=Object(a["resolveComponent"])("ion-label"),p=Object(a["resolveComponent"])("ion-input"),O=Object(a["resolveComponent"])("ion-note");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[e.model.label?(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.model.label),1),e.model.required?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",l," *")):Object(a["createCommentVNode"])("",!0),e.allowUnknown?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",n,[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.model.label)+" Unknown? ",1),Object(a["createVNode"])(b,{modelValue:e.isUnknown,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isUnknown=t)},null,8,["modelValue"])])):Object(a["createCommentVNode"])("",!0)]),_:1})):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",{class:Object(a["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),style:{width:"100%",height:"2.5rem",display:"flex","justify-content":"space-between"}},[e.prefix?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(m,{class:"checkbox-label bold"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.prefix),1)]),_:1})])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",r,[Object(a["createVNode"])(p,{class:"ion-no-margin ion-no-padding",modelValue:e.model.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.model.value=t),type:e.password?"password":"text",placeholder:e.model.placeholder,disabled:e.model.disabled||e.isUnknown,onIonFocus:t[2]||(t[2]=t=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","type","placeholder","disabled","onIonBlur"])]),e.suffix?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[Object(a["createVNode"])(m,{class:"checkbox-label bold ion-float-right"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.suffix),1)]),_:1})])):Object(a["createCommentVNode"])("",!0)],2),e.model.error?(Object(a["openBlock"])(),Object(a["createBlock"])(O,{key:1,color:"danger"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.model.error),1)]),_:1})):Object(a["createCommentVNode"])("",!0)],64)}var u=o("d867"),s=Object(a["defineComponent"])({name:"TextInput",props:{modelValue:{type:Object,default:()=>({})},allowUnknown:{type:Boolean,default:!1},form:{type:Object,default:()=>({})},prefix:{type:String,default:""},suffix:{type:String,default:""},password:{type:Boolean,default:!1}},components:{IonLabel:u["IonLabel"],IonInput:u["IonInput"],IonNote:u["IonNote"],IonCheckbox:u["IonCheckbox"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["ref"])(!1),l=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),n=async()=>{if(l.value.required&&!l.value.value)return l.value.error="This field is required";if(!e.allowUnknown&&"Unknown"===l.value.value||"N/A"===l.value.value)return l.value.error="Unknown is not allowed";if(l.value.validation){const t=await l.value.validation({label:l.value.value,value:l.value.value},e.form);if(t&&t.length)return l.value.error+=t.toString()}return l.value.error=""};return Object(a["watch"])(o,e=>{e?(l.value.value="Unknown",l.value.error="",l.value.disabled=!0):(l.value.value="",l.value.disabled=!1)}),Object(a["watch"])(e.modelValue,e=>{"Unknown"===e.value?o.value||(o.value=!0):o.value=!1}),Object(a["onMounted"])(()=>{"Unknown"!==l.value.value||o.value||(o.value=!0)}),{validate:n,model:l,isUnknown:o}}}),b=o("6b0d"),m=o.n(b);const p=m()(s,[["render",d]]);t["a"]=p},"27dd":function(e,t,o){"use strict";o.r(t);var a=o("7a23");function l(e,t,o,l,n,c){const r=Object(a["resolveComponent"])("ion-title"),i=Object(a["resolveComponent"])("SelectInput"),d=Object(a["resolveComponent"])("ion-col"),u=Object(a["resolveComponent"])("yes-no-input"),s=Object(a["resolveComponent"])("DateInput"),b=Object(a["resolveComponent"])("text-input"),m=Object(a["resolveComponent"])("ion-button"),p=Object(a["resolveComponent"])("ion-row");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[Object(a["createVNode"])(r,{class:"ion-text-center ion-margin-vertical ion-padding-bottom bold"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Staging ")]),_:1}),Object(a["createVNode"])(p,{class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{modelValue:e.form.reasonsForEligibity,"onUpdate:modelValue":t[0]||(t[0]=t=>e.form.reasonsForEligibity=t),options:e.reasonsForArt},null,8,["modelValue","options"])]),_:1}),Object(a["createVNode"])(d,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{modelValue:e.form.whoStage,"onUpdate:modelValue":t[1]||(t[1]=t=>e.form.whoStage=t),options:e.whoStages},null,8,["modelValue","options"])]),_:1}),Object(a["createVNode"])(d,{size:"12",class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{modelValue:e.form.cd4countAvailable,"onUpdate:modelValue":t[2]||(t[2]=t=>e.form.cd4countAvailable=t),inline:""},null,8,["modelValue"])]),_:1}),"Yes"===e.form.cd4countAvailable.value?(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:0},[Object(a["createVNode"])(d,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{modelValue:e.form.cd4CountDate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.form.cd4CountDate=t),"min-date":e.patientDob,"max-date":e.today},null,8,["modelValue","min-date","max-date"])]),_:1}),Object(a["createVNode"])(d,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{modelValue:e.form.cd4Count,"onUpdate:modelValue":t[4]||(t[4]=t=>e.form.cd4Count=t)},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(d,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{modelValue:e.form.cd4CountLocation,"onUpdate:modelValue":t[5]||(t[5]=t=>e.form.cd4CountLocation=t),asyncOptions:e.getFacilities,allowCustom:""},null,8,["modelValue","asyncOptions"])]),_:1})],64)):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(d,{size:"6",class:"ion-margin-top ion-margin-bottom"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{modelValue:e.form.whoConditions,"onUpdate:modelValue":t[6]||(t[6]=t=>e.form.whoConditions=t),options:e.stagingCoditions,multiple:""},null,8,["modelValue","options"])]),_:1}),Object(a["createVNode"])(d,{size:"12",class:"ion-margin-top"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{class:"ion-margin-top ion-float-right",size:"large",onClick:e.onSubmit,color:"success"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Finish")]),_:1},8,["onClick"]),Object(a["createVNode"])(m,{class:"ion-margin-top ion-float-right",size:"large",color:"warning",onClick:e.onClear},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Clear")]),_:1},8,["onClick"]),Object(a["createVNode"])(m,{class:"ion-margin-top ion-float-right",size:"large",onClick:t[7]||(t[7]=t=>e.$emit("onPrevious")),color:"primary"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Previous")]),_:1})]),_:1})]),_:1})],64)}var n=o("d867"),c=o("b5e4"),r=o("9283"),i=o("0db2"),d=o("5ab5"),u=o("6b6c"),s=o("be95"),b=o("e86e"),m=o("5a0c"),p=o.n(m),O=o("2706"),v=o("5e76"),j=o("85d6"),f=o("0ba8"),g=o("b5b2"),h=Object(a["defineComponent"])({components:{IonRow:n["IonRow"],IonCol:n["IonCol"],IonButton:n["IonButton"],IonTitle:n["IonTitle"],TextInput:i["a"],DateInput:d["a"],YesNoInput:u["a"],SelectInput:s["a"]},props:{patient:{type:Object,required:!0},isNewPatient:{type:Boolean,default:!0},observations:{type:Object,default:()=>({})},initialVisitDate:{type:String,default:""},artStartDate:{type:String,default:""}},emits:["onValue","onPrevious","onFinish"],setup(e,{emit:t}){const o=Object(a["ref"])([]),l=Object(a["ref"])([]),n=p()().format(r["b"]),i=Object(a["computed"])(()=>{const t=e.patient.getBirthdate();return t?p()(t).format(r["b"]):""}),d=new j["a"](e.patient.getID(),e.patient.getAge(),-1),u=Object(a["computed"])(()=>d.getAllReasonsForART(e.artStartDate||e.initialVisitDate,e.patient.isMale()).map(e=>({label:e.name,value:e.name}))),s=d.getAllWhoStages().filter(e=>e.name.match(/1|2|3|4/i)).map(e=>({label:e.name,value:e.name})),m=Object(a["reactive"])({reasonsForEligibity:{value:e.observations["Reason for ART eligibility"]||"",label:"Reason for Starting",placeholder:"Select Reason for Starting",required:!0,computedValue:e=>({obs:d.buildReasonForArtObs("string"===typeof e?e:e.label)})},whoStage:{value:e.observations["Who stage"]||"",label:"Select Stage",placeholder:"Select Stage",required:!0,computedValue:e=>({obs:d.buildWhoStageObs("string"===typeof e?e:e.label)})},cd4countAvailable:{value:e.observations["CD4 count"]?"Yes":"No",label:"Recent CD4 Count results available?",required:!0},cd4CountDate:{value:e.observations["Cd4 count datetime"]||"",label:"CD4 Count date",placeholder:"CD4 Count date",computedValue:e=>({obs:j["a"].buildValueDate("Cd4 count datetime",e)}),validation:async(e,t)=>{var o;return"Yes"===(null===(o=t.cd4countAvailable)||void 0===o?void 0:o.value)&&O["a"].required(e)}},cd4Count:{value:e.observations["CD4 count"]||"",label:"CD4 Count",placeholder:"CD4 Count e.g. <100 or >500",computedValue:e=>{const t=parseInt(e.substring(1)),o=e.substring(0,1);return{modifier:o,count:t,obs:j["a"].buildValueNumber("CD4 count",t,o)}},validation:async(e,t)=>{var o;return"Yes"===(null===(o=t.cd4countAvailable)||void 0===o?void 0:o.value)&&O["a"].validateSeries([()=>O["a"].required(e),()=>d.cd4CountIsValid(e.value.toString())?null:["Please start with a modifier. e.g. >, <, or ="]])}},cd4CountLocation:{value:e.observations["Cd4 count location"]||"",label:"CD4 Count location",computedValue:e=>({obs:j["a"].buildValueText("Cd4 count location","string"===typeof e?e:e.label)}),validation:async(e,t)=>{var o;return"Yes"===(null===(o=t.cd4countAvailable)||void 0===o?void 0:o.value)&&O["a"].required(e)}},whoConditions:{value:e.observations["Who stages criteria present"]?[{label:e.observations["Who stages criteria present"],value:e.observations["Who stages criteria present"]}]:"",required:!0,label:"Select Staging Conditions",computedValue:e=>({obs:"string"===typeof e?d.buildWhoCriteriaObs(e):e.map(e=>d.buildWhoCriteriaObs(e.label))})}}),h=async()=>{if(await Object(c["a"])("Are you sure you want to clear all fields?")){for(const e in m)m[e].value=void 0,m[e].error="";f["b"].emit(g["a"].ON_CLEAR)}},C=async()=>{d.setDate(e.initialVisitDate),await Object(v["e"])(m,async(e,o)=>{t("onValue",{type:"staging",data:{formData:e,computedData:o}}),t("onFinish")})},V=e=>{e&&(m.whoConditions.value="");const t=parseInt((null===e||void 0===e?void 0:e.split(" ")[2])||"1");o.value=d.getStagingConditions(t).map(e=>({label:e.name,value:e.name,other:e})).sort((e,t)=>e.label.localeCompare(t.label))};return Object(a["watch"])(()=>m.whoStage.value,e=>V(null===e||void 0===e?void 0:e.label)),Object(a["watch"])(()=>m.reasonsForEligibity.value,()=>{m.whoStage.value="",m.whoConditions.value=""}),Object(a["onMounted"])(()=>V()),{today:n,patientDob:i,form:m,whoStages:s,stagingCoditions:o,selectedConditions:l,reasonsForArt:u,getFacilities:b["b"],onClear:h,onSubmit:C}}}),C=(o("8af5"),o("6b0d")),V=o.n(C);const k=V()(h,[["render",l],["__scopeId","data-v-1b580a4e"]]);t["default"]=k},"2e98":function(e,t,o){},"5ab5":function(e,t,o){"use strict";var a=o("7a23");const l={key:0},n={key:1},c={key:2,class:"text-danger"},r={key:3,class:"ion-float-right ion-margin-end checkbox-label"},i={key:2,style:{display:"flex","justify-content":"flex-start"}},d={class:"ion-margin-top ion-padding-end"},u=["disabled"],s=Object(a["createElementVNode"])("option",{value:0,disabled:"",selected:"",hidden:""},"MM",-1),b=["value"];function m(e,t,o,m,p,O){const v=Object(a["resolveComponent"])("ion-checkbox"),j=Object(a["resolveComponent"])("ion-label"),f=Object(a["resolveComponent"])("ion-input"),g=Object(a["resolveComponent"])("ion-icon"),h=Object(a["resolveComponent"])("ion-button"),C=Object(a["resolveComponent"])("DatePicker"),V=Object(a["resolveComponent"])("ion-note");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[e.model.label?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:0,class:"ion-padding-bottom bold"},{default:Object(a["withCtx"])(()=>[e.isEstimated?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",l,Object(a["toDisplayString"])(e.estimationLabel),1)):(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",n,Object(a["toDisplayString"])(e.model.label),1)),e.model.required?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",c," *")):Object(a["createCommentVNode"])("",!0),e.allowEstimation?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",r,[Object(a["createTextVNode"])(" Estimate "+Object(a["toDisplayString"])(e.model.label)+" ",1),Object(a["createVNode"])(v,{modelValue:e.isEstimated,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isEstimated=t)},null,8,["modelValue"])])):Object(a["createCommentVNode"])("",!0)]),_:1})):Object(a["createCommentVNode"])("",!0),e.isEstimated?(Object(a["openBlock"])(),Object(a["createBlock"])(f,{key:1,type:"number",class:Object(a["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),modelValue:e.age,"onUpdate:modelValue":t[1]||(t[1]=t=>e.age=t),placeholder:e.estimationLabel,disabled:e.model.disabled,min:1,onIonInput:e.onEstimate,onIonFocus:t[2]||(t[2]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["class","modelValue","placeholder","disabled","onIonInput","onIonBlur"])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",i,[Object(a["createElementVNode"])("div",d,[Object(a["createVNode"])(C,{mode:"date",modelValue:e.pickerDate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.pickerDate=t),"min-date":e.minDate,"max-date":e.maxDate,masks:{input:"YYYY-MM-DD"}},{default:Object(a["withCtx"])(({showPopover:t})=>[Object(a["createVNode"])(h,{onClick:t},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,{icon:e.calendar},null,8,["icon"])]),_:2},1032,["onClick"])]),_:1},8,["modelValue","min-date","max-date"])]),Object(a["createVNode"])(f,{modelValue:e.day,"onUpdate:modelValue":t[4]||(t[4]=t=>e.day=t),min:1,max:31,class:Object(a["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),style:{width:"30%"},type:"number",placeholder:"DD",disabled:e.model.disabled,onIonFocus:t[5]||(t[5]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","class","disabled","onIonBlur"]),Object(a["withDirectives"])(Object(a["createElementVNode"])("select",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.month=t),class:Object(a["normalizeClass"])(["ion-margin-top ion-margin-horizontal",e.model.error?"box-input-error":"box-input"]),style:Object(a["normalizeStyle"])([{"background-color":"#fff",width:"30%"},e.month?{color:"#000"}:{color:"#a0a0a0"}]),disabled:e.model.disabled,onFocus:t[7]||(t[7]=()=>e.model.error=""),onBlur:t[8]||(t[8]=(...t)=>e.validate&&e.validate(...t))},[s,(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.months,(e,t)=>(Object(a["openBlock"])(),Object(a["createElementBlock"])("option",{value:t+1,key:t},Object(a["toDisplayString"])(e),9,b))),128))],46,u),[[a["vModelSelect"],e.month]]),Object(a["createVNode"])(f,{modelValue:e.year,"onUpdate:modelValue":t[9]||(t[9]=t=>e.year=t),min:1900,class:Object(a["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),type:"number",placeholder:"YYYY",disabled:e.model.disabled,onIonFocus:t[10]||(t[10]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","class","disabled","onIonBlur"])])),e.model.error?(Object(a["openBlock"])(),Object(a["createBlock"])(V,{key:3,color:"danger"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.model.error),1)]),_:1})):Object(a["createCommentVNode"])("",!0)],64)}var p=o("d867"),O=o("9283"),v=o("5a0c"),j=o.n(v),f=o("2706"),g=o("0ba8"),h=o("b5b2"),C=o("ff79"),V=o("5db2"),k=Object(a["defineComponent"])({name:"DateInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},minDate:{type:String,default:""},maxDate:{type:String,default:""},allowEstimation:{type:Boolean,default:!1},estimationLabel:{type:String,default:"Estimate"}},components:{IonLabel:p["IonLabel"],IonInput:p["IonInput"],IonNote:p["IonNote"],IonCheckbox:p["IonCheckbox"],DatePicker:V["b"]},emits:["update:modelValue","isEstimated"],setup(e,{emit:t}){const o=Object(a["ref"])(!1),l=Object(a["ref"])(),n=Object(a["ref"])(e.modelValue.value?j()(e.modelValue.value).date():void 0),c=Object(a["ref"])(e.modelValue.value?j()(e.modelValue.value).month()+1:0),r=Object(a["ref"])(e.modelValue.value?j()(e.modelValue.value).year():void 0),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],d=Object(a["ref"])(e.modelValue.value),u=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),s=e=>{var t;u.value.error=null===(t=f["a"].isNumber({value:e.target.value}))||void 0===t?void 0:t.join(),u.value.error||(l.value=parseInt(e.target.value))},b=async()=>{let t="";if(o.value&&l.value)t=O["c"].toStandardHisFormat(O["c"].estimateDateFromAge(l.value));else if(n.value||c.value||r.value){const e=`${r.value}-${c.value}-${n.value}`;if(!e.match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return u.value.error="Invalid date";t=O["c"].toStandardHisFormat(e)}if(u.value.required&&!t)return u.value.error="This field is required";if(e.minDate&&new Date(t)<new Date(e.minDate))return u.value.error=o.value?`Estimated period must be less than or equal to ${j()().diff(e.minDate,"years")} years`:"Date must be after "+O["c"].toStandardHisDisplayFormat(e.minDate);if(e.maxDate&&new Date(t)>new Date(e.maxDate))return u.value.error=o.value?"Estimated period must be more than or equal to 0 years":"Date must be before "+O["c"].toStandardHisDisplayFormat(e.maxDate);if(u.value.validation){const o=await u.value.validation({label:t,value:t},e.form);if(o&&o.length)return u.value.error+=o.toString()}u.value.error="",u.value.value=t};Object(a["watch"])(d,e=>{n.value=j()(e).date(),c.value=j()(e).month()+1,r.value=j()(e).year(),b()});const m=()=>{l.value=void 0,n.value=void 0,c.value=0,r.value=void 0,u.value.error="",d.value=""};return Object(a["watch"])(()=>e.modelValue.value,e=>{n.value=e?j()(e).date():void 0,c.value=e?j()(e).month()+1:0,r.value=e?j()(e).year():void 0,d.value=e}),Object(a["watch"])([()=>e.minDate,()=>e.maxDate],()=>b()),Object(a["watch"])(o,e=>{m(),t("isEstimated",e)}),Object(a["onMounted"])(()=>g["b"].on(h["a"].ON_CLEAR,m)),{validate:b,onEstimate:s,pickerDate:d,isEstimated:o,model:u,age:l,day:n,month:c,year:r,months:i,calendar:C["calendar"]}}}),y=(o("0c8c"),o("6b0d")),w=o.n(y);const x=w()(k,[["render",m]]);t["a"]=x},"64b8":function(e,t,o){},"6b6c":function(e,t,o){"use strict";var a=o("7a23");const l={key:0,class:"text-danger"},n={key:0},c={key:1},r={class:"ion-margin-start"},i=Object(a["createElementVNode"])("span",{class:"ion-margin-start"},"Yes",-1),d=Object(a["createElementVNode"])("span",{class:"ion-margin-start"},"No",-1),u=Object(a["createElementVNode"])("br",null,null,-1);function s(e,t,o,s,b,m){const p=Object(a["resolveComponent"])("ion-label"),O=Object(a["resolveComponent"])("ion-radio"),v=Object(a["resolveComponent"])("ion-radio-group"),j=Object(a["resolveComponent"])("ion-note"),f=Object(a["resolveComponent"])("ion-col"),g=Object(a["resolveComponent"])("ion-row"),h=Object(a["resolveComponent"])("ion-grid");return Object(a["openBlock"])(),Object(a["createBlock"])(h,{class:"ion-no-margin ion-no-padding"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,{size:"12"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,{class:"ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("b",null,[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.model.label)+":",1),e.model.required?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",l,"*")):Object(a["createCommentVNode"])("",!0)])]),_:1}),e.inline?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("br",n)),e.inline?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createElementBlock"])("br",c)),Object(a["createVNode"])(v,{modelValue:e.model.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model.value=t),onIonChange:t[1]||(t[1]=()=>e.model.error="")},{default:Object(a["withCtx"])(()=>{var t;return[null!==(t=e.customOptions)&&void 0!==t&&t.length?(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],{key:0},Object(a["renderList"])(e.customOptions,t=>(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:t.label},[Object(a["createElementVNode"])("span",r,Object(a["toDisplayString"])(t.label),1),Object(a["createVNode"])(O,{class:"ion-margin-start",slot:"start",color:"primary",value:t.value,disabled:e.disabled},null,8,["value","disabled"])],64))),128)):(Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],{key:1},[i,Object(a["createVNode"])(O,{class:"ion-margin-start",slot:"start",color:"primary",value:"Yes",disabled:e.disabled},null,8,["disabled"]),d,Object(a["createVNode"])(O,{class:"ion-margin-start",slot:"start",color:"primary",value:"No",disabled:e.disabled},null,8,["disabled"])],64))]}),_:1},8,["modelValue"]),u,e.model.error?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:2,color:"danger"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.model.error),1)]),_:1})):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})}var b=o("d867"),m=Object(a["defineComponent"])({name:"YesNoInput",props:{modelValue:{type:Object,default:()=>({})},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customOptions:{type:Array}},components:{IonRadioGroup:b["IonRadioGroup"],IonRadio:b["IonRadio"],IonGrid:b["IonGrid"],IonRow:b["IonRow"],IonCol:b["IonCol"],IonLabel:b["IonLabel"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)});return{model:o}}}),p=o("6b0d"),O=o.n(p);const v=O()(m,[["render",s]]);t["a"]=v},8191:function(e,t,o){"use strict";o("64b8")},"8af5":function(e,t,o){"use strict";o("0b89")},be95:function(e,t,o){"use strict";var a=o("7a23");const l={key:0,class:"text-danger"},n={key:1,class:"ion-float-right ion-margin-end checkbox-label"},c={class:"inner-input-box"},r={key:0,class:"input-options"},i={class:"input-icon"};function d(e,t,o,d,u,s){const b=Object(a["resolveComponent"])("ion-checkbox"),m=Object(a["resolveComponent"])("ion-label"),p=Object(a["resolveComponent"])("ion-input"),O=Object(a["resolveComponent"])("ion-icon"),v=Object(a["resolveComponent"])("ion-chip"),j=Object(a["resolveComponent"])("ion-item"),f=Object(a["resolveComponent"])("ion-list"),g=Object(a["resolveComponent"])("ion-note");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[e.model.label?(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.model.label),1),e.model.required?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",l," *")):Object(a["createCommentVNode"])("",!0),e.allowCustom?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",n,[Object(a["createTextVNode"])(" Add Custom "+Object(a["toDisplayString"])(e.model.label)+"? ",1),Object(a["createVNode"])(b,{modelValue:e.isCustom,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isCustom=t),onIonChange:t[1]||(t[1]=t=>e.model.value="")},null,8,["modelValue"])])):Object(a["createCommentVNode"])("",!0)]),_:1})):Object(a["createCommentVNode"])("",!0),e.isCustom?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:1,class:Object(a["normalizeClass"])(["box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}]),modelValue:e.customOption,"onUpdate:modelValue":t[2]||(t[2]=t=>e.customOption=t),placeholder:e.model.placeholder||e.model.label,disabled:e.model.disabled,onIonFocus:t[3]||(t[3]=()=>e.model.error=""),onIonBlur:e.validate,onIonInput:e.onCustomValue},null,8,["class","modelValue","placeholder","disabled","onIonBlur","onIonInput"])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:2,class:Object(a["normalizeClass"])(["outer-input-box box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}])},[Object(a["createElementVNode"])("div",c,[Object(a["createElementVNode"])("div",{style:{display:"flex","flex-wrap":"wrap",width:"100%"},onClick:t[6]||(t[6]=(...t)=>e.onShowOptions&&e.onShowOptions(...t))},[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.tags,(t,o)=>(Object(a["openBlock"])(),Object(a["createBlock"])(v,{key:o},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.label),1)]),_:2},1024),Object(a["createVNode"])(O,{icon:e.closeCircle,color:"danger",onClick:o=>e.diselect(t),style:{"z-index":"20"}},null,8,["icon","onClick"])]),_:2},1024))),128)),Object(a["createVNode"])(p,{disabled:e.model.disabled,placeholder:e.showPlaceholder?e.model.placeholder||"select option":"",modelValue:e.filter,"onUpdate:modelValue":t[4]||(t[4]=t=>e.filter=t),class:"search-input",ref:"searchInput",onKeydown:t[5]||(t[5]=t=>e.handleKeyDown(t))},null,8,["disabled","placeholder","modelValue"])]),e.showOptions?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",r,[Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.filteredOptions,(t,o)=>{var l;return Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:o,lines:o+1===e.filteredOptions.length?"none":void 0,color:t.value===(null===(l=e.focusedOption)||void 0===l?void 0:l.value)?"light":"",onClick:o=>e.onSelect(t)},{default:Object(a["withCtx"])(()=>[e.multiple?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:0,class:"input-option-checkbox",slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e},null,8,["modelValue","onUpdate:modelValue"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1032,["lines","color","onClick"])}),128))]),_:1})])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",i,[e.filter||e.tags.length>0?(Object(a["openBlock"])(),Object(a["createBlock"])(O,{key:0,icon:e.close,onClick:e.resetHandler},null,8,["icon","onClick"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(O,{icon:e.showOptions?e.chevronUp:e.chevronDown,onClick:t[7]||(t[7]=t=>e.showOptions?e.onCloseOptions():e.onShowOptions())},null,8,["icon"])])])],2)),e.model.error?(Object(a["openBlock"])(),Object(a["createBlock"])(g,{key:3,color:"danger"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.model.error),1)]),_:1})):Object(a["createCommentVNode"])("",!0)],64)}o("14d9");var u=o("d867"),s=o("ff79"),b=o("2ef0"),m=Object(a["defineComponent"])({name:"SelectInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},options:{type:Array,default:()=>[]},asyncOptions:{type:Function,required:!1},allowCustom:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},infiniteScrolling:{type:Boolean,default:!1}},components:{IonLabel:u["IonLabel"],IonInput:u["IonInput"],IonNote:u["IonNote"],IonIcon:u["IonIcon"],IonCheckbox:u["IonCheckbox"],IonList:u["IonList"],IonChip:u["IonChip"],IonItem:u["IonItem"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["ref"])(!1),l=Object(a["ref"])(""),n=Object(a["ref"])(),c=Object(a["ref"])(!1),r=Object(a["ref"])(),i=Object(a["ref"])(""),d=Object(a["ref"])([]),u=Object(a["ref"])(1),m=Object(a["computed"])(()=>e.multiple?d.value.filter(({isChecked:e})=>e):n.value?[n.value]:[]),p=Object(a["computed"])(()=>!i.value&&Object(b["isEmpty"])(m.value)&&!c.value),O=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),v=()=>{i.value="",n.value=void 0,d.value.forEach(e=>e.isChecked=!1)},j=()=>{if(v(),Object(b["isEmpty"])(O.value.value))return;if(Array.isArray(O.value.value)&&e.multiple)return O.value.value.forEach(e=>{const t=d.value.findIndex(({value:t})=>t===e.value);-1===t?d.value.push({...e,isChecked:!0}):d.value[t].isChecked=!0});const t=d.value.find(e=>e.value===O.value.value);n.value=t||{label:O.value.value,value:O.value.value}},f=async()=>{const t="function"===typeof e.asyncOptions?await e.asyncOptions(i.value):e.options.filter(({label:e})=>e.toLowerCase().includes(i.value.toLowerCase()));m.value.forEach(e=>{const o=t.findIndex(t=>t.value===e.value);-1===o?t.push(e):t[o].isChecked=!0}),d.value=t.filter(({label:e})=>!!e)},g=async()=>{if(O.value.required&&Object(b["isEmpty"])(O.value.value))return O.value.error="This field is required";if(O.value.validation){const t=await O.value.validation({label:O.value.value,value:O.value.value},e.form);if(t&&t.length)return O.value.error+=t.toString()}return O.value.error=""},h=()=>{c.value=!1,O.value.value=e.multiple?m.value:Object(b["isEmpty"])(m.value)?void 0:m.value[0],i.value="",g()},C=()=>{O.value.disabled||(c.value=!0,O.value.error="")},V=()=>{O.value.value={label:l.value,value:l.value}},k=t=>{e.multiple||(n.value=t,h()),O.value.value=e.multiple?m.value:Object(b["isEmpty"])(m.value)?void 0:m.value[0],i.value=""},y=t=>e.multiple?t.isChecked=!1:n.value=void 0,w=e=>{e.preventDefault();const t=d.value.indexOf(r.value)+1;r.value=d.value[t]||d.value[0]},x=e=>{e.preventDefault();const t=d.value.indexOf(r.value)-1;r.value=d.value[t]||d.value[d.value.length-1]},N=e=>{switch(c.value||(c.value=!0),e.key){case"ArrowDown":w(e);break;case"ArrowUp":x(e);break;case"Enter":k(r.value);break;case"Escape":h();break}};return Object(a["watch"])(i,async()=>{u.value++,await f()}),Object(a["watch"])([()=>e.options,()=>e.asyncOptions],async()=>f()),Object(a["watch"])(()=>e.modelValue.value,e=>Object(b["isEmpty"])(e)&&j(),{deep:!0,immediate:!0}),Object(a["watch"])(c,e=>e&&(r.value=n.value||d.value[0])),Object(a["onMounted"])(async()=>{await f(),j(),addEventListener("click",e=>{const t=e.target.closest(".inner-input-box");!t&&c.value&&h()})}),Object(a["onBeforeUnmount"])(()=>removeEventListener("click",e=>console.log(e))),{validate:g,onSelect:k,resetHandler:v,onShowOptions:C,onCloseOptions:h,diselect:y,onCustomValue:V,handleKeyDown:N,model:O,customOption:l,isCustom:o,chevronDown:s["chevronDown"],chevronUp:s["chevronUp"],close:s["close"],closeCircle:s["closeCircle"],selectedOption:n,showOptions:c,focusedOption:r,showPlaceholder:p,filteredOptions:d,filter:i,tags:m}}}),p=(o("8191"),o("6b0d")),O=o.n(p);const v=O()(m,[["render",d],["__scopeId","data-v-36e0e4d8"]]);t["a"]=v},e86e:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"d",(function(){return c})),o.d(t,"c",(function(){return r})),o.d(t,"g",(function(){return i})),o.d(t,"f",(function(){return d})),o.d(t,"a",(function(){return u})),o.d(t,"h",(function(){return s})),o.d(t,"i",(function(){return b})),o.d(t,"j",(function(){return m})),o.d(t,"e",(function(){return p}));var a=o("5713"),l=o("2ef0");async function n(e=""){const t=await a["a"].getFacilities({name:e});return t.filter(e=>!Object(l["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function c(e=""){const t=await a["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function r(e=""){const t=await a["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function i(){const e=await a["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function d(){const e=await a["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function u(e){const t=await a["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function s(e,t=""){const o=await a["a"].getTraditionalAuthorities(e,t);return o.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function b(e,t=""){const o=await a["a"].getVillages(e,t);return o.map(e=>({label:e.name,value:e.village_id,other:e}))}async function m(e="a",t=1){const o=await a["a"].getVillagesByName(e,t);return o.map(e=>({label:e.name,value:e.village_id,other:e}))}function p(){const e=["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"];return e.map(e=>({label:e,value:e,other:{code:e}}))}},edd0:function(e,t,o){"use strict";var a=o("13d2"),l=o("9bf2");e.exports=function(e,t,o){return o.get&&a(o.get,t,{getter:!0}),o.set&&a(o.set,t,{setter:!0}),l.f(e,t,o)}}}]);
//# sourceMappingURL=chunk-24a9d490.a566a00d.js.map