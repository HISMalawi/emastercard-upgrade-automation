(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-20777ab4"],{"00a4":function(e,t,o){},"048a":function(e,t,o){"use strict";o("00a4")},"0db2":function(e,t,o){"use strict";var l=o("7a23");const a={key:0,class:"text-danger"},n={key:1,class:"ion-float-right ion-margin-end checkbox-label"},c={key:0,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}},r={style:{background:"#ffffff",height:"100%",padding:".5rem","flex-grow":"8"}},i={key:1,style:{background:"#f2f2f2",height:"100%",padding:".5rem","flex-grow":"1"}};function u(e,t,o,u,d,s){const b=Object(l["resolveComponent"])("ion-checkbox"),m=Object(l["resolveComponent"])("ion-label"),p=Object(l["resolveComponent"])("ion-input"),O=Object(l["resolveComponent"])("ion-note");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[e.model.label?(Object(l["openBlock"])(),Object(l["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("span",null,Object(l["toDisplayString"])(e.model.label),1),e.model.required?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",a," *")):Object(l["createCommentVNode"])("",!0),e.allowUnknown?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",n,[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.label)+" Unknown? ",1),Object(l["createVNode"])(b,{modelValue:e.isUnknown,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isUnknown=t)},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0)]),_:1})):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",{class:Object(l["normalizeClass"])(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),style:{width:"100%",height:"2.5rem",display:"flex","justify-content":"space-between"}},[e.prefix?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",c,[Object(l["createVNode"])(m,{class:"checkbox-label bold"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.prefix),1)]),_:1})])):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",r,[Object(l["createVNode"])(p,{class:"ion-no-margin ion-no-padding",modelValue:e.model.value,"onUpdate:modelValue":t[1]||(t[1]=t=>e.model.value=t),type:e.password?"password":"text",placeholder:e.model.placeholder,disabled:e.model.disabled||e.isUnknown,onIonFocus:t[2]||(t[2]=t=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","type","placeholder","disabled","onIonBlur"])]),e.suffix?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",i,[Object(l["createVNode"])(m,{class:"checkbox-label bold ion-float-right"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.suffix),1)]),_:1})])):Object(l["createCommentVNode"])("",!0)],2),e.model.error?(Object(l["openBlock"])(),Object(l["createBlock"])(O,{key:1,color:"danger"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.error),1)]),_:1})):Object(l["createCommentVNode"])("",!0)],64)}var d=o("d867"),s=Object(l["defineComponent"])({name:"TextInput",props:{modelValue:{type:Object,default:()=>({})},allowUnknown:{type:Boolean,default:!1},form:{type:Object,default:()=>({})},prefix:{type:String,default:""},suffix:{type:String,default:""},password:{type:Boolean,default:!1}},components:{IonLabel:d["IonLabel"],IonInput:d["IonInput"],IonNote:d["IonNote"],IonCheckbox:d["IonCheckbox"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(l["ref"])(!1),a=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),n=async()=>{if(a.value.required&&!a.value.value)return a.value.error="This field is required";if(!e.allowUnknown&&"Unknown"===a.value.value||"N/A"===a.value.value)return a.value.error="Unknown is not allowed";if(a.value.validation){const t=await a.value.validation({label:a.value.value,value:a.value.value},e.form);if(t&&t.length)return a.value.error+=t.toString()}return a.value.error=""};return Object(l["watch"])(o,e=>{e?(a.value.value="Unknown",a.value.error="",a.value.disabled=!0):(a.value.value="",a.value.disabled=!1)}),Object(l["watch"])(e.modelValue,e=>{"Unknown"===e.value?o.value||(o.value=!0):o.value=!1}),Object(l["onMounted"])(()=>{"Unknown"!==a.value.value||o.value||(o.value=!0)}),{validate:n,model:a,isUnknown:o}}}),b=o("6b0d"),m=o.n(b);const p=m()(s,[["render",u]]);t["a"]=p},"5e76":function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"c",(function(){return u})),o.d(t,"d",(function(){return d})),o.d(t,"b",(function(){return s})),o.d(t,"e",(function(){return b}));o("13d5"),o("14d9");var l=o("7957"),a=o("0011"),n=o("2ef0"),c=o("b211"),r=o("b5e4");async function i(e){for(const t in e){if(e[t].required&&Object(n["isEmpty"])(e[t].value)){e[t].error="This field is required";continue}if("function"!==typeof e[t].validation){e[t].error="";continue}const o="object"===typeof e[t].value?e[t].value:{label:e[t].value,value:e[t].value},l=await e[t].validation(o,e);l&&l.length>0?e[t].error=l.toString():e[t].error=""}return Object.values(e).every(({error:e})=>!e)}function u(e,t=!1){const o={},l={};for(const n in e)if(e[n].value){const c=t?Object(a["j"])(n):n;o[c]=e[n].value,"function"===typeof e[n].computedValue&&(l[c]=e[n].computedValue(e[n].value,e))}return{formData:o,computedFormData:l}}function d(e,t=""){const o=Object.values(e).filter(e=>e&&(e.tag===t||""===t)).reduce((e,t)=>{const o=t.obs?t.obs:t;return Array.isArray(o)?e=e.concat(o):e.push(o),e},[]);return Promise.all(o)}function s(e,t){return Promise.all(t.map(async t=>l["a"].buildGroupValueCoded(e,t.label,t.isChecked?"Yes":"No")))}async function b(e,t,o){if(!await i(e))return;const l=(null===o||void 0===o?void 0:o.showloader)||!1;try{l&&await c["a"].show();const{formData:a,computedFormData:n}=u(e,null===o||void 0===o?void 0:o.underscoreKeys);await t(a,n)}catch(a){Object(r["e"])(""+a),console.error(a)}finally{l&&await c["a"].hide()}}},"94fe":function(e,t,o){"use strict";o.r(t);var l=o("7a23");const a={class:"his-card"},n=Object(l["createElementVNode"])("h2",null,"Site Settings",-1),c=Object(l["createElementVNode"])("br",null,null,-1),r=Object(l["createElementVNode"])("br",null,null,-1),i=Object(l["createElementVNode"])("br",null,null,-1);function u(e,t,o,u,d,s){const b=Object(l["resolveComponent"])("SelectInput"),m=Object(l["resolveComponent"])("ion-col"),p=Object(l["resolveComponent"])("IonButton"),O=Object(l["resolveComponent"])("TextInput"),v=Object(l["resolveComponent"])("ion-row"),j=Object(l["resolveComponent"])("ion-grid");return Object(l["openBlock"])(),Object(l["createBlock"])(j,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(v,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(m,{size:"10",offset:"1",class:"ion-padding"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("div",a,[n,Object(l["createVNode"])(v,null,{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(m,{size:"11",class:"ion-margin-vertical"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(b,{modelValue:e.nameForm.name,"onUpdate:modelValue":t[0]||(t[0]=t=>e.nameForm.name=t),asyncOptions:e.getFacilities},null,8,["modelValue","asyncOptions"])]),_:1}),Object(l["createVNode"])(m,{size:"1",class:"ion-margin-vertical"},{default:Object(l["withCtx"])(()=>[c,Object(l["createVNode"])(p,{class:"ion-margin-top ion-float-right",onClick:e.updateName},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("Submit")]),_:1},8,["onClick"])]),_:1}),Object(l["createVNode"])(m,{size:"11",class:"ion-margin-vertical"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.prefixForm.prefix,"onUpdate:modelValue":t[1]||(t[1]=t=>e.prefixForm.prefix=t)},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(m,{size:"1",class:"ion-margin-vertical"},{default:Object(l["withCtx"])(()=>[r,Object(l["createVNode"])(p,{class:"ion-margin-top ion-float-right",onClick:e.updatePrefix},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("Submit")]),_:1},8,["onClick"])]),_:1}),Object(l["createVNode"])(m,{size:"11",class:"ion-margin-vertical"},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(O,{modelValue:e.uuidForm.uuid,"onUpdate:modelValue":t[2]||(t[2]=t=>e.uuidForm.uuid=t)},null,8,["modelValue"])]),_:1}),Object(l["createVNode"])(m,{size:"1",class:"ion-margin-vertical"},{default:Object(l["withCtx"])(()=>[i,Object(l["createVNode"])(p,{class:"ion-margin-top ion-float-right",onClick:e.updateUUID},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])("Submit")]),_:1},8,["onClick"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})}var d=o("d867"),s=o("0db2"),b=o("be95"),m=o("5e76"),p=o("b5e4"),O=o("e86e"),v=o("cc74"),j=o("1c74"),f=Object(l["defineComponent"])({name:"UserModal",components:{IonButton:d["IonButton"],IonGrid:d["IonGrid"],IonRow:d["IonRow"],IonCol:d["IonCol"],TextInput:s["a"],SelectInput:b["a"]},setup(){const e=Object(l["reactive"])({name:{value:j["e"].getLocationName()||"",label:"Site Name",required:!0}}),t=Object(l["reactive"])({prefix:{value:"",label:"Site Prefix",required:!0}}),o=Object(l["reactive"])({uuid:{value:"",label:"Site UUID",required:!0}}),a=()=>Object(m["e"])(e,async({name:e})=>{await v["b"].setHealthCenterID(e.value),await Object(p["d"])("Site name updated successfully"),sessionStorage.setItem("locationName",e.label),document.location.reload()}),n=async()=>Object(m["e"])(t,async({prefix:e})=>{await v["b"].setSitePrefix(e),await Object(p["d"])("Site Prefix updated successfully"),document.location.reload()}),c=async()=>Object(m["e"])(o,async({uuid:e})=>{await v["b"].setSiteUUID(e),await Object(p["d"])("Site Prefix updated successfully"),document.location.reload()});return Object(l["onMounted"])(async()=>{t.prefix.value=await v["b"].sitePrefix(),o.uuid.value=await v["b"].siteUUID()}),{nameForm:e,prefixForm:t,uuidForm:o,getFacilities:O["b"],updateName:a,updatePrefix:n,updateUUID:c}}}),h=o("6b0d"),k=o.n(h);const w=k()(f,[["render",u]]);t["default"]=w},b211:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var l=o("d867");const a={async show(e){return(await l["loadingController"].create({message:e||"Loading...",spinner:"crescent",translucent:!0})).present()},async hide(){l["loadingController"].getTop().then(e=>e?l["loadingController"].dismiss():null)}}},be95:function(e,t,o){"use strict";var l=o("7a23");const a={key:0,class:"text-danger"},n={key:1,class:"ion-float-right ion-margin-end checkbox-label"},c={class:"inner-input-box"},r={key:0,class:"input-options"},i={class:"input-icon"};function u(e,t,o,u,d,s){const b=Object(l["resolveComponent"])("ion-checkbox"),m=Object(l["resolveComponent"])("ion-label"),p=Object(l["resolveComponent"])("ion-input"),O=Object(l["resolveComponent"])("ion-icon"),v=Object(l["resolveComponent"])("ion-chip"),j=Object(l["resolveComponent"])("ion-item"),f=Object(l["resolveComponent"])("ion-list"),h=Object(l["resolveComponent"])("ion-note");return Object(l["openBlock"])(),Object(l["createElementBlock"])(l["Fragment"],null,[e.model.label?(Object(l["openBlock"])(),Object(l["createBlock"])(m,{key:0,class:"ion-padding-bottom bold"},{default:Object(l["withCtx"])(()=>[Object(l["createElementVNode"])("span",null,Object(l["toDisplayString"])(e.model.label),1),e.model.required?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",a," *")):Object(l["createCommentVNode"])("",!0),e.allowCustom?(Object(l["openBlock"])(),Object(l["createElementBlock"])("span",n,[Object(l["createTextVNode"])(" Add Custom "+Object(l["toDisplayString"])(e.model.label)+"? ",1),Object(l["createVNode"])(b,{modelValue:e.isCustom,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isCustom=t),onIonChange:t[1]||(t[1]=t=>e.model.value="")},null,8,["modelValue"])])):Object(l["createCommentVNode"])("",!0)]),_:1})):Object(l["createCommentVNode"])("",!0),e.isCustom?(Object(l["openBlock"])(),Object(l["createBlock"])(p,{key:1,class:Object(l["normalizeClass"])(["box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}]),modelValue:e.customOption,"onUpdate:modelValue":t[2]||(t[2]=t=>e.customOption=t),placeholder:e.model.placeholder||e.model.label,disabled:e.model.disabled,onIonFocus:t[3]||(t[3]=()=>e.model.error=""),onIonBlur:e.validate,onIonInput:e.onCustomValue},null,8,["class","modelValue","placeholder","disabled","onIonBlur","onIonInput"])):(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",{key:2,class:Object(l["normalizeClass"])(["outer-input-box box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}])},[Object(l["createElementVNode"])("div",c,[Object(l["createElementVNode"])("div",{style:{display:"flex","flex-wrap":"wrap",width:"100%"},onClick:t[6]||(t[6]=(...t)=>e.onShowOptions&&e.onShowOptions(...t))},[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.tags,(t,o)=>(Object(l["openBlock"])(),Object(l["createBlock"])(v,{key:o},{default:Object(l["withCtx"])(()=>[Object(l["createVNode"])(m,null,{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(t.label),1)]),_:2},1024),Object(l["createVNode"])(O,{icon:e.closeCircle,color:"danger",onClick:o=>e.diselect(t),style:{"z-index":"20"}},null,8,["icon","onClick"])]),_:2},1024))),128)),Object(l["createVNode"])(p,{disabled:e.model.disabled,placeholder:e.showPlaceholder?e.model.placeholder||"select option":"",modelValue:e.filter,"onUpdate:modelValue":t[4]||(t[4]=t=>e.filter=t),class:"search-input",ref:"searchInput",onKeydown:t[5]||(t[5]=t=>e.handleKeyDown(t))},null,8,["disabled","placeholder","modelValue"])]),e.showOptions?(Object(l["openBlock"])(),Object(l["createElementBlock"])("div",r,[Object(l["createVNode"])(f,null,{default:Object(l["withCtx"])(()=>[(Object(l["openBlock"])(!0),Object(l["createElementBlock"])(l["Fragment"],null,Object(l["renderList"])(e.filteredOptions,(t,o)=>{var a;return Object(l["openBlock"])(),Object(l["createBlock"])(j,{key:o,lines:o+1===e.filteredOptions.length?"none":"",color:t.value===(null===(a=e.focusedOption)||void 0===a?void 0:a.value)?"light":"",onClick:o=>e.onSelect(t)},{default:Object(l["withCtx"])(()=>[e.multiple?(Object(l["openBlock"])(),Object(l["createBlock"])(b,{key:0,class:"input-option-checkbox",slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e},null,8,["modelValue","onUpdate:modelValue"])):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(m,null,{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1032,["lines","color","onClick"])}),128))]),_:1})])):Object(l["createCommentVNode"])("",!0),Object(l["createElementVNode"])("div",i,[e.filter||e.tags.length>0?(Object(l["openBlock"])(),Object(l["createBlock"])(O,{key:0,icon:e.close,onClick:e.resetHandler},null,8,["icon","onClick"])):Object(l["createCommentVNode"])("",!0),Object(l["createVNode"])(O,{icon:e.showOptions?e.chevronUp:e.chevronDown,onClick:t[7]||(t[7]=t=>e.showOptions?e.onCloseOptions():e.onShowOptions())},null,8,["icon"])])])],2)),e.model.error?(Object(l["openBlock"])(),Object(l["createBlock"])(h,{key:3,color:"danger"},{default:Object(l["withCtx"])(()=>[Object(l["createTextVNode"])(Object(l["toDisplayString"])(e.model.error),1)]),_:1})):Object(l["createCommentVNode"])("",!0)],64)}o("14d9");var d=o("d867"),s=o("ff79"),b=o("2ef0"),m=Object(l["defineComponent"])({name:"SelectInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},options:{type:Array,default:()=>[]},asyncOptions:{type:Function,required:!1},allowCustom:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},infiniteScrolling:{type:Boolean,default:!1}},components:{IonLabel:d["IonLabel"],IonInput:d["IonInput"],IonNote:d["IonNote"],IonIcon:d["IonIcon"],IonCheckbox:d["IonCheckbox"],IonList:d["IonList"],IonChip:d["IonChip"],IonItem:d["IonItem"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(l["ref"])(!1),a=Object(l["ref"])(""),n=Object(l["ref"])(),c=Object(l["ref"])(!1),r=Object(l["ref"])(),i=Object(l["ref"])(""),u=Object(l["ref"])([]),d=Object(l["ref"])(1),m=Object(l["computed"])(()=>e.multiple?u.value.filter(({isChecked:e})=>e):n.value?[n.value]:[]),p=Object(l["computed"])(()=>!i.value&&Object(b["isEmpty"])(m.value)&&!c.value),O=Object(l["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),v=()=>{i.value="",n.value=void 0,u.value.forEach(e=>e.isChecked=!1)},j=()=>{if(v(),Object(b["isEmpty"])(O.value.value))return;if(Array.isArray(O.value.value)&&e.multiple)return O.value.value.forEach(e=>{const t=u.value.findIndex(({value:t})=>t===e.value);-1===t?u.value.push({...e,isChecked:!0}):u.value[t].isChecked=!0});const t=u.value.find(e=>e.value===O.value.value);n.value=t||{label:O.value.value,value:O.value.value}},f=async()=>{const t="function"===typeof e.asyncOptions?await e.asyncOptions(i.value):e.options.filter(({label:e})=>e.toLowerCase().includes(i.value.toLowerCase()));m.value.forEach(e=>{const o=t.findIndex(t=>t.value===e.value);-1===o?t.push(e):t[o].isChecked=!0}),u.value=t},h=async()=>{if(O.value.required&&Object(b["isEmpty"])(O.value.value))return O.value.error="This field is required";if(O.value.validation){const t=await O.value.validation({label:O.value.value,value:O.value.value},e.form);if(t&&t.length)return O.value.error+=t.toString()}return O.value.error=""},k=()=>{c.value=!1,O.value.value=e.multiple?m.value:Object(b["isEmpty"])(m.value)?void 0:m.value[0],i.value="",h()},w=()=>{O.value.disabled||(c.value=!0,O.value.error="")},C=()=>{O.value.value={label:a.value,value:a.value}},y=t=>{e.multiple||(n.value=t,k()),O.value.value=e.multiple?m.value:Object(b["isEmpty"])(m.value)?void 0:m.value[0],i.value=""},g=t=>e.multiple?t.isChecked=!1:n.value=void 0,V=e=>{e.preventDefault();const t=u.value.indexOf(r.value)+1;r.value=u.value[t]||u.value[0]},x=e=>{e.preventDefault();const t=u.value.indexOf(r.value)-1;r.value=u.value[t]||u.value[u.value.length-1]},N=e=>{switch(c.value||(c.value=!0),e.key){case"ArrowDown":V(e);break;case"ArrowUp":x(e);break;case" ":case"Enter":y(r.value);break;case"Escape":k();break}};return Object(l["watch"])(i,async()=>{d.value++,await f()}),Object(l["watch"])([()=>e.options,()=>e.asyncOptions],async()=>f()),Object(l["watch"])(()=>e.modelValue.value,e=>Object(b["isEmpty"])(e)&&j(),{deep:!0,immediate:!0}),Object(l["watch"])(c,e=>e&&(r.value=n.value||u.value[0])),Object(l["onMounted"])(async()=>{await f(),j(),addEventListener("click",e=>{const t=e.target.closest(".inner-input-box");!t&&c.value&&k()})}),Object(l["onBeforeUnmount"])(()=>removeEventListener("click",e=>console.log(e))),{validate:h,onSelect:y,resetHandler:v,onShowOptions:w,onCloseOptions:k,diselect:g,onCustomValue:C,handleKeyDown:N,model:O,customOption:a,isCustom:o,chevronDown:s["chevronDown"],chevronUp:s["chevronUp"],close:s["close"],closeCircle:s["closeCircle"],selectedOption:n,showOptions:c,focusedOption:r,showPlaceholder:p,filteredOptions:u,filter:i,tags:m}}}),p=(o("048a"),o("6b0d")),O=o.n(p);const v=O()(m,[["render",u],["__scopeId","data-v-b64db9c4"]]);t["a"]=v},e86e:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"d",(function(){return c})),o.d(t,"c",(function(){return r})),o.d(t,"g",(function(){return i})),o.d(t,"f",(function(){return u})),o.d(t,"a",(function(){return d})),o.d(t,"h",(function(){return s})),o.d(t,"i",(function(){return b})),o.d(t,"j",(function(){return m})),o.d(t,"e",(function(){return p}));var l=o("5713"),a=o("2ef0");async function n(e=""){const t=await l["a"].getFacilities({name:e});return t.filter(e=>!Object(a["isEmpty"])(e)&&""!=e.name.trim()).map(e=>({label:e.name,value:e.location_id,other:e}))}async function c(e=""){const t=await l["a"].getLabs({search_name:e});return t.map(e=>({label:e,value:e}))}async function r(e=""){const t=await l["a"].getFacilities({name:e,tag:"Facility adult sections"});return t.map(e=>({label:e.name,value:e.name,other:e}))}async function i(){const e=await l["a"].getSpecialistClinics();return e.map(e=>({label:e.name,value:e.name,other:e}))}async function u(){const e=await l["a"].getRegions();return e.map(e=>({label:e.name,value:e.region_id,other:e}))}async function d(e){const t=await l["a"].getDistricts(e);return t.map(e=>({label:e.name,value:e.district_id,other:e}))}async function s(e,t=""){const o=await l["a"].getTraditionalAuthorities(e,t);return o.map(e=>({label:e.name,value:e.traditional_authority_id,other:e}))}async function b(e,t=""){const o=await l["a"].getVillages(e,t);return o.map(e=>({label:e.name,value:e.village_id,other:e}))}async function m(e="a",t=1){const o=await l["a"].getVillagesByName(e,t);return o.map(e=>({label:e.name,value:e.village_id,other:e}))}function p(){const e=["Catholic Church","CCAP","Seventh Day","Mosque","Primary School","Borehole","Secondary School","College","Market","Football Ground","Other"];return e.map(e=>({label:e,value:e,other:{code:e}}))}}}]);
//# sourceMappingURL=chunk-20777ab4.c6f9252f.js.map