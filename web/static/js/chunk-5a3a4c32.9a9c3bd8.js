(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a3a4c32"],{"0db2":function(e,t,o){"use strict";var l=o("7a23");const a={key:0,class:"ion-float-right ion-margin-end checkbox-label"},n={key:0,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}},r={style:{background:"#ffffff",height:"100%",padding:".5rem","flex-grow":"8"}},c={key:1,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}};function i(e,t,o,i,u,d){const s=Object(l["resolveComponent"])("ion-checkbox"),m=Object(l["resolveComponent"])("ion-label"),b=Object(l["resolveComponent"])("ion-input"),p=Object(l["resolveComponent"])("ion-note");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[e.model.label?(Object(l["openBlock"])(),Object(l["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("span",null,Object(l["toDisplayString"])(e.model.label),1),e.allowUnknown?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",a,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.label)+" Unknown? ",1),Object(l["createVNode"])(s,{modelValue:e.isUnknown,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isUnknown=t)},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0)]),_:1})):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",{class:Object(l["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),style:{width:"100%",height:"2.5rem",display:"flex","justify-content":"space-between"}},[e.prefix?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",n,[Object(l["createVNode"])(m,{class:"checkbox-label bold"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.prefix),1)]),_:1})])):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",r,[Object(l["createVNode"])(b,{class:"ion-no-margin ion-no-padding",modelValue:e.model.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.model.value=t),type:e.password?"password":"text",placeholder:e.model.placeholder,disabled:e.model.disabled||e.isUnknown,onIonFocus:t[2]||(t[2]=t=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","type","placeholder","disabled","onIonBlur"])]),e.suffix?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",c,[Object(l["createVNode"])(m,{class:"checkbox-label bold ion-float-right"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.suffix),1)]),_:1})])):Object(l["createCommentVNode"])("",!0)],2),e.model.error?(Object(l["openBlock"])(),Object(l["createBlock"])(p,{key:1,color:"danger"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.error),1)]),_:1})):Object(l["createCommentVNode"])("",!0)],64)}var u=o("d867"),d=Object(l["defineComponent"])({name:"TextInput",props:{modelValue:{type:Object,default:()=>({})},allowUnknown:{type:Boolean,default:!1},form:{type:Object,default:()=>({})},prefix:{type:String,default:""},suffix:{type:String,default:""},password:{type:Boolean,default:!1}},components:{IonLabel:u["IonLabel"],IonInput:u["IonInput"],IonNote:u["IonNote"],IonCheckbox:u["IonCheckbox"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(l["ref"])(!1),a=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),n=async()=>{if(a.value.required&&!a.value.value)return a.value.error="This field is required";if(!e.allowUnknown&&"Unknown"===a.value.value||"N/A"===a.value.value)return a.value.error="Unknown is not allowed";if(a.value.validation){const t=await a.value.validation({label:a.value.value,value:a.value.value},e.form);if(t&&t.length)return a.value.error+=t.toString()}return a.value.error=""};return Object(l["watch"])(o,e=>{e?(a.value.value="Unknown",a.value.error="",a.value.disabled=!0):(a.value.value="",a.value.disabled=!1)}),Object(l["watch"])(e.modelValue,e=>{"Unknown"===e.value?o.value||(o.value=!0):o.value=!1}),Object(l["onMounted"])(()=>{"Unknown"!==a.value.value||o.value||(o.value=!0)}),{validate:n,model:a,isUnknown:o}}}),s=o("d959"),m=o.n(s);const b=m()(d,[["render",i]]);t["a"]=b},"307e":function(e,t,o){},"403e":function(e,t,o){"use strict";function l(e){return e.map(e=>({value:e,label:e}))}o.d(t,"d",(function(){return l})),o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return n})),o.d(t,"a",(function(){return r})),o.d(t,"e",(function(){return c}));const a=[{label:"Male",value:"M"},{label:"Female",value:"F"}],n=(l(["TB NOT suspected","TB suspected","Confirmed TB NOT on treatment","Confirmed TB on treatment"]),[...l(["Current","Last 2 years","More than 2 years","Never"])]),r=[{label:"Rapid antibody test",value:"HIV rapid test"},{label:"DNA PCR",value:"HIV DNA polymerase chain reaction"},{label:"Not done",value:"Not done"}],c=l(["Currently on IPT","Currently on 3HP (RFP + INH)","Currently on INH 300 / RFP 300 (3HP)","Complete course of 3HP in the past (3 months RFP+INH)","Complete course of IPT in the past (min. 6 months of INH)","Aborted course of 3HP (RFP + INH) in the past","Aborted course of INH 300 / RFP 300 (3HP) in the past","Aborted course of IPT in the past","Never taken IPT or 3HP"])},"4cb7":function(e,t,o){},"5ab5":function(e,t,o){"use strict";var l=o("7a23");const a={key:0},n={key:1},r={key:2,class:"ion-float-right ion-margin-end checkbox-label"},c={key:2,style:{display:"flex","justify-content":"flex-start"}},i={class:"ion-margin-top ion-padding-end"},u=["disabled"],d=Object(l["createElementVNode"])("option",{value:0,disabled:"",selected:"",hidden:""},"MM",-1),s=["value"];function m(e,t,o,m,b,p){const v=Object(l["resolveComponent"])("ion-checkbox"),O=Object(l["resolveComponent"])("ion-label"),j=Object(l["resolveComponent"])("ion-input"),f=Object(l["resolveComponent"])("ion-icon"),h=Object(l["resolveComponent"])("ion-button"),k=Object(l["resolveComponent"])("DatePicker"),g=Object(l["resolveComponent"])("ion-note");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[e.model.label?(Object(l["openBlock"])(),Object(l["createBlock"])(O,{key:0,class:"ion-padding-bottom bold"},{default:Object(l["withCtx"])(()=>[e.isEstimated?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",a,Object(l["toDisplayString"])(e.estimationLabel),1)):(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",n,Object(l["toDisplayString"])(e.model.label),1)),e.allowEstimation?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",r,[Object(l["createTextVNode"])(" Estimate "+Object(l["toDisplayString"])(e.model.label)+" ",1),Object(l["createVNode"])(v,{modelValue:e.isEstimated,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isEstimated=t)},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0)]),_:1})):Object(l["createCommentVNode"])("",!0),e.isEstimated?(Object(l["openBlock"])(),Object(l["createBlock"])(j,{key:1,type:"number",class:Object(l["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),modelValue:e.age,"onUpdate:modelValue":t[1]||(t[1]=t=>e.age=t),placeholder:e.estimationLabel,disabled:e.model.disabled,min:1,onIonInput:e.onEstimate,onIonFocus:t[2]||(t[2]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["class","modelValue","placeholder","disabled","onIonInput","onIonBlur"])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",c,[Object(l["createElementVNode"])("div",i,[Object(l["createVNode"])(k,{mode:"date",modelValue:e.pickerDate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.pickerDate=t),"min-date":e.minDate,"max-date":e.maxDate,masks:{input:"YYYY-MM-DD"}},{default:Object(l["withCtx"])(({showPopover:t})=>[Object(l["createVNode"])(h,{onClick:t},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(f,{icon:e.calendar},null,8,["icon"])]),_:2},1032,["onClick"])]),_:1},8,["modelValue","min-date","max-date"])]),Object(l["createVNode"])(j,{modelValue:e.day,"onUpdate:modelValue":t[4]||(t[4]=t=>e.day=t),min:1,max:31,class:Object(l["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),style:{width:"30%"},type:"number",placeholder:"DD",disabled:e.model.disabled,onIonFocus:t[5]||(t[5]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","class","disabled","onIonBlur"]),Object(l["withDirectives"])(Object(l["createElementVNode"])("select",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.month=t),class:Object(l["normalizeClass"])(["ion-margin-top ion-margin-horizontal",e.model.error?"box-input-error":"box-input"]),style:Object(l["normalizeStyle"])([{"background-color":"#fff",width:"30%"},e.month?{color:"#000"}:{color:"#a0a0a0"}]),disabled:e.model.disabled,onFocus:t[7]||(t[7]=()=>e.model.error=""),onBlur:t[8]||(t[8]=(...t)=>e.validate&&e.validate(...t))},[d,(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.months,(e,t)=>(Object(l["openBlock"])(),Object(l["createElementBlock"])("option",{value:t+1,key:t},Object(l["toDisplayString"])(e),9,s))),128))],46,u),[[l["vModelSelect"],e.month]]),Object(l["createVNode"])(j,{modelValue:e.year,"onUpdate:modelValue":t[9]||(t[9]=t=>e.year=t),min:1900,class:Object(l["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),type:"number",placeholder:"YYYY",disabled:e.model.disabled,onIonFocus:t[10]||(t[10]=()=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","class","disabled","onIonBlur"])])),e.model.error?(Object(l["openBlock"])(),Object(l["createBlock"])(g,{key:3,color:"danger"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.error),1)]),_:1})):Object(l["createCommentVNode"])("",!0)],64)}var b=o("d867"),p=o("9283"),v=o("5a0c"),O=o.n(v),j=o("2706"),f=o("0ba8"),h=o("b5b2"),k=o("ff79"),g=o("0261"),y=Object(l["defineComponent"])({name:"DateInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},minDate:{type:String,default:""},maxDate:{type:String,default:""},allowEstimation:{type:Boolean,default:!1},estimationLabel:{type:String,default:"Estimate"}},components:{IonLabel:b["IonLabel"],IonInput:b["IonInput"],IonNote:b["IonNote"],IonCheckbox:b["IonCheckbox"],DatePicker:g["b"]},emits:["update:modelValue","isEstimated"],setup(e,{emit:t}){const o=Object(l["ref"])(!1),a=Object(l["ref"])(),n=Object(l["ref"])(e.modelValue.value?O()(e.modelValue.value).date():void 0),r=Object(l["ref"])(e.modelValue.value?O()(e.modelValue.value).month()+1:0),c=Object(l["ref"])(e.modelValue.value?O()(e.modelValue.value).year():void 0),i=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],u=Object(l["ref"])(e.modelValue.value),d=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),s=e=>{var t;d.value.error=null===(t=j["a"].isNumber({value:e.target.value}))||void 0===t?void 0:t.join(),d.value.error||(a.value=parseInt(e.target.value))},m=async()=>{let t="";if(o.value&&a.value)t=p["c"].toStandardHisFormat(p["c"].estimateDateFromAge(a.value));else if(n.value||r.value||c.value){const e=`${c.value}-${r.value}-${n.value}`;if(!e.match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return d.value.error="Invalid date";t=p["c"].toStandardHisFormat(e)}if(d.value.required&&!t)return d.value.error="This field is required";if(e.minDate&&new Date(t)<new Date(e.minDate))return d.value.error=o.value?`Estimated period must be less than or equal to ${O()(t).diff(e.minDate,"years")} years`:"Date must be after "+e.minDate;if(e.maxDate&&new Date(t)>new Date(e.maxDate))return d.value.error=o.value?`Estimated period must be more than or equal to ${O()(t).diff(e.maxDate,"years")} years`:"Date must be before "+e.maxDate;if(d.value.validation){const o=await d.value.validation({label:t,value:t},e.form);if(o&&o.length)return d.value.error+=o.toString()}d.value.error="",d.value.value=t};Object(l["watch"])(u,e=>{n.value=O()(e).date(),r.value=O()(e).month()+1,c.value=O()(e).year(),m()});const b=()=>{a.value=void 0,n.value=void 0,r.value=0,c.value=void 0,d.value.error="",u.value=""};return Object(l["watch"])(()=>e.modelValue.value,e=>{n.value=e?O()(e).date():void 0,r.value=e?O()(e).month()+1:0,c.value=e?O()(e).year():void 0,u.value=e}),Object(l["watch"])([()=>e.minDate,()=>e.maxDate],()=>m()),Object(l["watch"])(o,e=>{b(),t("isEstimated",e)}),Object(l["onMounted"])(()=>f["b"].on(h["a"].ON_CLEAR,b)),{validate:m,onEstimate:s,pickerDate:u,isEstimated:o,model:d,age:a,day:n,month:r,year:c,months:i,calendar:k["calendar"]}}}),V=(o("a69e"),o("d959")),C=o.n(V);const w=C()(y,[["render",m]]);t["a"]=w},"631c":function(e,t,o){"use strict";o("307e")},"6b6c":function(e,t,o){"use strict";var l=o("7a23");const a={key:0},n={key:1},r=Object(l["createElementVNode"])("span",{class:"ion-margin-start"},"Yes",-1),c=Object(l["createElementVNode"])("span",{class:"ion-margin-start"},"No",-1),i=Object(l["createElementVNode"])("br",null,null,-1);function u(e,t,o,u,d,s){const m=Object(l["resolveComponent"])("ion-label"),b=Object(l["resolveComponent"])("ion-radio"),p=Object(l["resolveComponent"])("ion-radio-group"),v=Object(l["resolveComponent"])("ion-note"),O=Object(l["resolveComponent"])("ion-col"),j=Object(l["resolveComponent"])("ion-row"),f=Object(l["resolveComponent"])("ion-grid");return Object(l["openBlock"])(),Object(l["createBlock"])(f,{class:"ion-no-margin ion-no-padding"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(j,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{size:12},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(m,{class:"ion-margin-end"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("b",null,Object(l["toDisplayString"])(e.model.label)+":",1)]),_:1}),e.inline?Object(l["createCommentVNode"])("",!0):(Object(l["openBlock"])(),Object(l["createElementBlock"])("br",a)),e.inline?Object(l["createCommentVNode"])("",!0):(Object(l["openBlock"])(),Object(l["createElementBlock"])("br",n)),Object(l["createVNode"])(p,{modelValue:e.model.value,"onUpdate:modelValue":t[0]||(t[0]=t=>e.model.value=t),onIonChange:t[1]||(t[1]=()=>e.model.error="")},{default:Object(l["withCtx"])(()=>[r,Object(l["createVNode"])(b,{class:"ion-margin-start",slot:"start",color:"primary",value:"Yes",disabled:e.disabled},null,8,["disabled"]),c,Object(l["createVNode"])(b,{class:"ion-margin-start",slot:"start",color:"primary",value:"No",disabled:e.disabled},null,8,["disabled"])]),_:1},8,["modelValue"]),i,e.model.error?(Object(l["openBlock"])(),Object(l["createBlock"])(v,{key:2,color:"danger"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.error),1)]),_:1})):Object(l["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})}var d=o("d867"),s=Object(l["defineComponent"])({name:"YesNoInput",props:{modelValue:{type:Object,default:()=>({})},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},components:{IonRadioGroup:d["IonRadioGroup"],IonRadio:d["IonRadio"],IonGrid:d["IonGrid"],IonRow:d["IonRow"],IonCol:d["IonCol"],IonLabel:d["IonLabel"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)});return{model:o}}}),m=o("d959"),b=o.n(m);const p=b()(s,[["render",u]]);t["a"]=p},"6d32":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var l=o("1c74");class a extends l["e"]{constructor(){super()}static getAllArvRegimens(){return this.getJson(`programs/${this.getProgramID()}/all_arv_regimens`)}static getRegimens(e){return this.getJson(`programs/${this.getProgramID()}/regimens`,{patient_id:e})}static getRegimensByWeight(e,t=!1){return this.getJson(`programs/${this.getProgramID()}/regimens`,{weight:e,tb_dosage:t})}static getCustomIngridients(){return this.getJson(`programs/${this.getProgramID()}/custom_regimen_ingredients`)}static getCurrentRegimen(e,t=this.getSessionDate()){return this.getJson(`programs/${this.getProgramID()}/${e}`,{date:t})}static getRegimenExtras(e,t){return this.getJson(`programs/${this.getProgramID()}/regimen_extras`,{name:e,weight:t})}}},a69e:function(e,t,o){"use strict";o("4cb7")},b5b2:function(e,t,o){"use strict";var l;o.d(t,"a",(function(){return l})),function(e){e["RELOAD_PATIENT_DATA"]="reload_patient_data",e["RELOAD_PATIENT_VISIT_DATA"]="reload_patient_visit_data",e["RELOAD_GUARDIAN_DATA"]="reload_guardian_data",e["RELOAD_LATEST_VL_RESULT"]="reload_latest_vl_result",e["RELOAD_STAGING_INFORMATION"]="reload_staging_info",e["ON_CLEAR"]="on_clear"}(l||(l={}))},be95:function(e,t,o){"use strict";var l=o("7a23");const a={key:0,class:"ion-float-right ion-margin-end checkbox-label"},n={class:"inner-input-box"},r={key:0,class:"input-options"},c={class:"input-icon"};function i(e,t,o,i,u,d){const s=Object(l["resolveComponent"])("ion-checkbox"),m=Object(l["resolveComponent"])("ion-label"),b=Object(l["resolveComponent"])("ion-input"),p=Object(l["resolveComponent"])("ion-icon"),v=Object(l["resolveComponent"])("ion-chip"),O=Object(l["resolveComponent"])("ion-item"),j=Object(l["resolveComponent"])("ion-list"),f=Object(l["resolveComponent"])("ion-note");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[e.model.label?(Object(l["openBlock"])(),Object(l["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("span",null,Object(l["toDisplayString"])(e.model.label),1),e.allowCustom?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",a,[Object(l["createTextVNode"])(" Add Custom "+Object(l["toDisplayString"])(e.model.label)+"? ",1),Object(l["createVNode"])(s,{modelValue:e.isCustom,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isCustom=t),onIonChange:t[1]||(t[1]=t=>e.model.value="")},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0)]),_:1})):Object(l["createCommentVNode"])("",!0),e.isCustom?(Object(l["openBlock"])(),Object(l["createBlock"])(b,{key:1,class:Object(l["normalizeClass"])(["box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}]),modelValue:e.customOption,"onUpdate:modelValue":t[2]||(t[2]=t=>e.customOption=t),placeholder:e.model.placeholder||e.model.label,disabled:e.model.disabled,onIonFocus:t[3]||(t[3]=()=>e.model.error=""),onIonBlur:e.validate,onIonInput:e.onCustomValue},null,8,["class","modelValue","placeholder","disabled","onIonBlur","onIonInput"])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:2,class:Object(l["normalizeClass"])(["outer-input-box box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}])},[Object(l["createElementVNode"])("div",n,[Object(l["createElementVNode"])("div",{style:{display:"flex","flex-wrap":"wrap",width:"100%"},onClick:t[6]||(t[6]=(...t)=>e.onShowOptions&&e.onShowOptions(...t))},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.tags,(t,o)=>(Object(l["openBlock"])(),Object(l["createBlock"])(v,{key:o},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(m,null,{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(t.label),1)]),_:2},1024),Object(l["createVNode"])(p,{icon:e.closeCircle,color:"danger",onClick:o=>e.diselect(t),style:{"z-index":"20"}},null,8,["icon","onClick"])]),_:2},1024))),128)),Object(l["createVNode"])(b,{disabled:e.model.disabled,placeholder:e.showPlaceholder?e.model.placeholder||"select option":"",modelValue:e.filter,"onUpdate:modelValue":t[4]||(t[4]=t=>e.filter=t),class:"search-input",ref:"searchInput",onKeydown:t[5]||(t[5]=t=>e.handleKeyDown(t))},null,8,["disabled","placeholder","modelValue"])]),e.showOptions?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",r,[Object(l["createVNode"])(j,null,{default:Object(l["withCtx"])(()=>[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.filteredOptions,(t,o)=>{var a;return Object(l["openBlock"])(),Object(l["createBlock"])(O,{key:o,lines:o+1===e.filteredOptions.length?"none":"",color:t.value===(null===(a=e.focusedOption)||void 0===a?void 0:a.value)?"light":"",onClick:o=>e.onSelect(t)},{default:Object(l["withCtx"])(()=>[e.multiple?(Object(l["openBlock"])(),Object(l["createBlock"])(s,{key:0,class:"input-option-checkbox",slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e},null,8,["modelValue","onUpdate:modelValue"])):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(m,null,{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1032,["lines","color","onClick"])}),128))]),_:1})])):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",c,[e.filter||e.tags.length>0?(Object(l["openBlock"])(),Object(l["createBlock"])(p,{key:0,icon:e.close,onClick:e.onReset},null,8,["icon","onClick"])):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(p,{icon:e.showOptions?e.chevronUp:e.chevronDown,onClick:t[7]||(t[7]=t=>e.showOptions?e.onCloseOptions():e.onShowOptions())},null,8,["icon"])])])],2)),e.model.error?(Object(l["openBlock"])(),Object(l["createBlock"])(f,{key:3,color:"danger"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.error),1)]),_:1})):Object(l["createCommentVNode"])("",!0)],64)}o("14d9");var u=o("d867"),d=o("ff79"),s=o("2ef0"),m=Object(l["defineComponent"])({name:"SelectInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},options:{type:Array,default:()=>[]},asyncOptions:{type:Function,required:!1},allowCustom:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},infiniteScrolling:{type:Boolean,default:!1}},components:{IonLabel:u["IonLabel"],IonInput:u["IonInput"],IonNote:u["IonNote"],IonIcon:u["IonIcon"],IonCheckbox:u["IonCheckbox"],IonList:u["IonList"],IonChip:u["IonChip"],IonItem:u["IonItem"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(l["ref"])(!1),a=Object(l["ref"])(""),n=Object(l["ref"])(),r=Object(l["ref"])(!1),c=Object(l["ref"])(),i=Object(l["ref"])(""),u=Object(l["ref"])([]),m=Object(l["ref"])(1),b=Object(l["computed"])(()=>e.multiple?u.value.filter(({isChecked:e})=>e):n.value?[n.value]:[]),p=Object(l["computed"])(()=>!i.value&&Object(s["isEmpty"])(b.value)&&!r.value),v=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),O=()=>{if(n.value=void 0,Object(s["isEmpty"])(v.value.value))return;if(Array.isArray(v.value.value)&&e.multiple)return v.value.value.forEach(e=>{const t=u.value.findIndex(({value:t})=>t===e.value);-1===t?u.value.push({...e,isChecked:!0}):u.value[t].isChecked=!0});const t=u.value.find(e=>e.value===v.value.value);n.value=t||{label:v.value.value,value:v.value.value}},j=async()=>{const t="function"===typeof e.asyncOptions?await e.asyncOptions(i.value):e.options.filter(({label:e})=>e.toLowerCase().includes(i.value.toLowerCase()));b.value.forEach(e=>{const o=t.findIndex(t=>t.value===e.value);-1===o?t.push(e):t[o].isChecked=!0}),u.value=t},f=async()=>{if(v.value.required&&Object(s["isEmpty"])(v.value.value))return v.value.error="This field is required";if(v.value.validation){const t=await v.value.validation({label:v.value.value,value:v.value.value},e.form);if(t&&t.length)return v.value.error+=t.toString()}return v.value.error=""},h=()=>{r.value=!1,v.value.value=e.multiple?b.value:Object(s["isEmpty"])(b.value)?void 0:b.value[0],i.value="",f()},k=()=>{v.value.disabled||(r.value=!0,v.value.error="")},g=()=>{v.value.value={label:a.value,value:a.value}},y=t=>{e.multiple||(n.value=t,h()),v.value.value=e.multiple?b.value:Object(s["isEmpty"])(b.value)?void 0:b.value[0],i.value=""},V=t=>e.multiple?t.isChecked=!1:n.value=void 0,C=()=>{i.value="",n.value=void 0,u.value.forEach(e=>e.isChecked=!1)},w=e=>{e.preventDefault();const t=u.value.indexOf(c.value)+1;c.value=u.value[t]||u.value[0]},I=e=>{e.preventDefault();const t=u.value.indexOf(c.value)-1;c.value=u.value[t]||u.value[u.value.length-1]},N=e=>{switch(r.value||(r.value=!0),e.key){case"ArrowDown":w(e);break;case"ArrowUp":I(e);break;case" ":case"Enter":y(c.value);break;case"Escape":h();break}};return Object(l["watch"])(i,async()=>{m.value++,await j()}),Object(l["watch"])([()=>e.options,()=>e.asyncOptions],async()=>j()),Object(l["watch"])(()=>e.modelValue.value,e=>Object(s["isEmpty"])(e)&&O()),Object(l["watch"])(r,e=>e&&(c.value=n.value||u.value[0])),Object(l["onMounted"])(async()=>{await j(),O(),addEventListener("click",e=>{const t=e.target.closest(".inner-input-box");!t&&r.value&&h()})}),Object(l["onBeforeUnmount"])(()=>removeEventListener("click",e=>console.log(e))),{validate:f,onSelect:y,onReset:C,onShowOptions:k,onCloseOptions:h,diselect:V,onCustomValue:g,handleKeyDown:N,model:v,customOption:a,isCustom:o,chevronDown:d["chevronDown"],chevronUp:d["chevronUp"],close:d["close"],closeCircle:d["closeCircle"],selectedOption:n,showOptions:r,focusedOption:c,showPlaceholder:p,filteredOptions:u,filter:i,tags:b}}}),b=(o("631c"),o("d959")),p=o.n(b);const v=p()(m,[["render",i],["__scopeId","data-v-f86477d2"]]);t["a"]=v},e86e:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"d",(function(){return r})),o.d(t,"c",(function(){return c})),o.d(t,"g",(function(){return i})),o.d(t,"f",(function(){return u})),o.d(t,"a",(function(){return d})),o.d(t,"h",(function(){return s})),o.d(t,"i",(function(){return m})),o.d(t,"j",(function(){return b})),o.d(t,"e",(function(){return p}));var l=o("5713"),a=o("2ef0");async function n(e=""){const t=await l["a"].getFacilities({name:e});return t.filter(e=>!Object(a["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function r(e=""){const t=await l["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function c(e=""){const t=await l["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function i(){const e=await l["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function u(){const e=await l["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function d(e){const t=await l["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function s(e,t=""){const o=await l["a"].getTraditionalAuthorities(e,t);return o.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function m(e,t=""){const o=await l["a"].getVillages(e,t);return o.map(e=>({label:e.name,value:e.village_id,other:e}))}async function b(e="a",t=1){const o=await l["a"].getVillagesByName(e,t);return o.map(e=>({label:e.name,value:e.village_id,other:e}))}function p(){const e=["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"];return e.map(e=>({label:e,value:e,other:{code:e}}))}},f27f:function(e,t,o){"use strict";var l=o("7a23");const a={key:0,class:"ion-float-right ion-margin-end checkbox-label"};function n(e,t,o,n,r,c){const i=Object(l["resolveComponent"])("ion-checkbox"),u=Object(l["resolveComponent"])("ion-label"),d=Object(l["resolveComponent"])("ion-input"),s=Object(l["resolveComponent"])("ion-note");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[e.model.label?(Object(l["openBlock"])(),Object(l["createBlock"])(u,{key:0,class:"ion-padding-bottom bold"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("span",null,Object(l["toDisplayString"])(e.model.label),1),e.allowUnknown?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",a,[Object(l["createTextVNode"])(" Unknown? "),Object(l["createVNode"])(i,{modelValue:e.isUnknown,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isUnknown=t)},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0)]),_:1})):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(d,{type:"number",class:Object(l["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),modelValue:e.model.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.model.value=t),placeholder:e.isUnknown?"Unknown":e.model.placeholder,disabled:e.model.disabled||e.isUnknown,onIonFocus:t[2]||(t[2]=t=>e.model.error=""),onIonBlur:e.validate,min:e.min,max:e.max},null,8,["class","modelValue","placeholder","disabled","onIonBlur","min","max"]),e.model.error?(Object(l["openBlock"])(),Object(l["createBlock"])(s,{key:1,color:"danger"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.error),1)]),_:1})):Object(l["createCommentVNode"])("",!0)],64)}var r=o("d867"),c=Object(l["defineComponent"])({name:"NumberInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},min:{type:Number,default:null},max:{type:Number,default:null},allowUnknown:{type:Boolean,default:!1}},components:{IonLabel:r["IonLabel"],IonInput:r["IonInput"],IonNote:r["IonNote"],IonCheckbox:r["IonCheckbox"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(l["ref"])(!1),a=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),n=async()=>{if(a.value.required&&!a.value.value)return a.value.error="This field is required";if(!e.allowUnknown&&"Unknown"===a.value.value||"N/A"===a.value.value)return a.value.error="Unknown is not allowed";if(a.value.validation){const t=await a.value.validation({label:a.value.value,value:a.value.value},e.form);if(t&&t.length)return a.value.error+=t.toString()}return a.value.error=""};return Object(l["watch"])(o,e=>{e?(a.value.value="Unknown",a.value.error="",a.value.disabled=!0):(a.value.value="",a.value.disabled=!1)}),Object(l["watch"])(e.modelValue,e=>{"Unknown"===e.value?o.value||(o.value=!0):o.value=!1}),Object(l["onMounted"])(()=>{"Unknown"!==a.value.value||o.value||(o.value=!0)}),{validate:n,model:a,isUnknown:o}}}),i=o("d959"),u=o.n(i);const d=u()(c,[["render",n]]);t["a"]=d}}]);
//# sourceMappingURL=chunk-5a3a4c32.9a9c3bd8.js.map