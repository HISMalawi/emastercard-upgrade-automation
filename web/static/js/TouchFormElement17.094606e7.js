(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement17","TouchFormElement5","TouchFormElement8"],{"10be":function(e,t,n){"use strict";var o=n("7a23");const l={class:"keypad"};function a(e,t,n,a,c,r){const i=Object(o["resolveComponent"])("ion-input"),s=Object(o["resolveComponent"])("ion-chip"),u=Object(o["resolveComponent"])("center"),d=Object(o["resolveComponent"])("base-keyboard"),b=Object(o["resolveComponent"])("ion-content");return Object(o["openBlock"])(),Object(o["createBlock"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",l,[Object(o["createVNode"])(i,{value:e.value,disabled:!0,class:"keypad-input"},null,8,["value"]),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title||"keypad"),1)]),_:1})]),_:1}),Object(o["createVNode"])(d,{btnSize:"96px",layout:e.keypad,onKeyPress:e.keypress},null,8,["layout","onKeyPress"])])]),_:1})}var c=n("c924"),r=n("3800"),i=n("2345"),s=n("fe70"),u=Object(o["defineComponent"])({components:{BaseKeyboard:c["a"]},props:{title:{type:String},preset:{type:String},onKeyPress:{type:Function,required:!0},strictNumbers:{type:Boolean,default:!1}},data:()=>({value:"0",keypad:r["d"]}),watch:{preset:{handler(e){e&&(this.value=e.toString())},immediate:!0}},methods:{async keypress(e){if(e.match(/done/i))await s["s"].dismiss(this.value);else if(this.strictNumbers){if(e.includes(".")&&this.value.includes("."))return;e.includes(".")||"0"!==this.value||(this.value=""),this.value=Object(i["a"])(e,this.value),this.value||(this.value="0"),""+parseInt(this.value)===this.value?this.onKeyPress(parseInt(this.value)):this.onKeyPress(this.value)}else this.value=Object(i["a"])(e,this.value),this.onKeyPress(this.value)}}}),d=(n("27f1"),n("d959")),b=n.n(d);const p=b()(u,[["render",a],["__scopeId","data-v-7454247c"]]);t["a"]=p},2345:function(e,t,n){"use strict";function o(e,t,n){let o=t;if(e.match(/enter/i))return o+"\r\n";if(e.match(/clear/i))return"";if(o=e.match(/delete|del/i)?o.match(/unknown/i)||o.match(/n\/a/i)?"":o.substring(0,o.length-1):e.match(/space/i)?t+" ":e.match(/unknown/i)?"Unknown":e.match(/n\/a/i)?"N/A":o.match(/unknown/i)||o.match(/n\/a/i)?e:`${t}${e}`,"string"===typeof o&&o)switch(n){case"lowercase":o=o.toLowerCase();break;case"uppercase":o=o.toUpperCase();break;default:o=o.charAt(0).toUpperCase()+o.slice(1);break}return o}n.d(t,"a",(function(){return o}))},"27f1":function(e,t,n){"use strict";n("3f97")},"36ad":function(e,t,n){"use strict";n.r(t);var o=n("7a23");function l(e,t,n,l,a,c){const r=Object(o["resolveComponent"])("ion-input");return Object(o["openBlock"])(),Object(o["createBlock"])(r,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var a=n("d867"),c=n("2ed9"),r=Object(o["defineComponent"])({name:"HisInput",components:{IonInput:a["IonInput"]},setup(){const{activePlatformProfile:e}=Object(c["e"])(),t=Object(o["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),i=(n("86f4"),n("d959")),s=n.n(i);const u=s()(r,[["render",l],["__scopeId","data-v-04472bbc"]]);t["default"]=u},3800:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"k",(function(){return l})),n.d(t,"f",(function(){return a})),n.d(t,"n",(function(){return c})),n.d(t,"e",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"m",(function(){return s})),n.d(t,"j",(function(){return u})),n.d(t,"h",(function(){return d})),n.d(t,"a",(function(){return b})),n.d(t,"l",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"i",(function(){return j})),n.d(t,"g",(function(){return h}));const o=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["","Done",""]],l=[["1","2","3"],["4","5","6"],["7","8","9"],["Del","0","."],["Unknown","",""]],a=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0",""]],c=[["1","2","3"],["4","5","6"],["7","8","9"],[".","0","Del"],["Clear","%","/"]],r=[["1","2","3"],["4","5","6"],["7","8","9"],["Del.","0","Clear"]],i=[["1","2","3","<"],["4","5","6",">"],["7","8","9","="],["","0",""]],s=[["1","2","3","+","-","/","*"],["4","5","6","%","=","<",">","Qwerty"],["7","8","9",".",","],["","0",""]],u=[["1","2","3"],["4","5","6"],["7","8","9"],["","0",""]],d=[["1","2","3","4","5","6","7"],["8","9","10","11","12","13","14"],["15","16","17","18","19","20","21"],["22","23","24","25","26","27","28"],["29","30","31"]],b=[["a","b","c","d","e","f","g","h","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],p=[["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","'"],["z","x","c","v","b","n","m",",",".","A-Z"]],m=[["1","2","3","4","5","6","7","8","9","0"],["a","b","c","d","e","f","g","h","-","."],["i","j","k","l","m","n","o","p","q"],["r","s","t","u","v","w","x","y","z"]],j=[["1","2","3","4","5","6","7","8","9","0","Del"],["q","w","e","r","t","y","u","i","o","p","Clear"],["a","s","d","f","g","h","j","k","l",".","Caps"],["z","x","c","v","b","n","m","<",">","/","Enter"]],h=[["1","2","3","4","5","6","7","8","9","0"],["q","w","e","r","t","y","u","i","o","p"],["a","s","d","f","g","h","j","k","l","Del."],["z","x","c","v","b","n","m","Caps","Login"]]},"3f97":function(e,t,n){},5148:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function l(e,t,n,l,a,c){const r=Object(o["resolveComponent"])("his-text-input"),i=Object(o["resolveComponent"])("ion-item"),s=Object(o["resolveComponent"])("ion-list"),u=Object(o["resolveComponent"])("ion-col"),d=Object(o["resolveComponent"])("ion-label"),b=Object(o["resolveComponent"])("ion-input"),p=Object(o["resolveComponent"])("ion-row"),m=Object(o["resolveComponent"])("ion-grid"),j=Object(o["resolveComponent"])("view-port");return Object(o["openBlock"])(),Object(o["createBlock"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{readonly:"",value:e.fullSelectedDrugName},null,8,["value"]),Object(o["createVNode"])(m,{style:{background:"white"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{size:"4",class:"border-right scroll-list"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(s,{key:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{detail:"",color:n===e.selectedDrug?"secondary":"",onClick:t=>e.selectDrug(n)},{default:Object(o["withCtx"])(()=>{var e;return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(""+(null!==(e=t.drug_name)&&void 0!==e?e:t.drug_legacy_name)),1)]}),_:2},1032,["color","onClick"])]),_:2},1024))),128))]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[null!==e.selectedDrug?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0,class:"scroll-list"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.drugs[e.selectedDrug].entries,(t,n)=>(Object(o["openBlock"])(),Object(o["createBlock"])(p,{key:n},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,{size:"12",class:"ion-margin-bottom"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Available Tins/Pallets:")]),_:1}),Object(o["createVNode"])(b,{readonly:"",disabled:"",value:e.fmtNumber(t.quantity)},null,8,["value"])]),_:2},1024)]),_:2},1024),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{position:"floating"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Total Tins Relocated/Disposed")]),_:1}),Object(o["createVNode"])(b,{readonly:"",color:"primary",value:e.fmtNumber(t.tins||0),onClick:t=>e.enterTins(n)},null,8,["value","onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1})}n("14d9");var a=n("0a79"),c=n("51c8"),r=n("d867"),i=n("2ef0"),s=n("d95e"),u=n("2706"),d=n("36ad"),b=n("0011"),p=n("c731"),m=Object(o["defineComponent"])({components:{ViewPort:a["a"],IonGrid:r["IonGrid"],IonList:r["IonList"],IonCol:r["IonCol"],IonRow:r["IonRow"],IonItem:r["IonItem"],IonLabel:r["IonLabel"],IonInput:r["IonInput"],HisTextInput:d["default"]},mixins:[c["default"]],data:()=>({drugs:[],selectedDrug:null}),mounted(){this.init()},async activated(){this.init()},methods:{async init(){this.$emit("onFieldActivated",this),await this.setDefaultValue()},fmtNumber(e){return Object(b["h"])(e)},async setDefaultValue(){const e=await this.options();this.drugs=this.drugs.filter(t=>e.map(e=>e.label).includes(t.label)),e.forEach(e=>{const t={tins:null,quantity:e.value.current_quantity/e.value.pack_size||1},n={label:e.label,entries:[{...t}],...e.value},o=Object(i["find"])(this.drugs,{label:e.label});o||this.drugs.push(n)}),this.drugs.length>=1&&this.selectDrug(0)},getModalTitle(e){return`${e} (${this.drugs[this.selectedDrug].label})`},getDrugValue(e,t){return this.drugs[this.selectedDrug].entries[e][t]},setDrugValue(e,t,n){this.drugs[this.selectedDrug].entries[e][t]=n?n.value:""},enterTins(e){Object(p["b"])({id:"tins",helpText:this.getModalTitle("Enter number of tins"),type:s["b"].TT_NUMBER,defaultValue:()=>this.getDrugValue(e,"tins"),validation:t=>!t||t&&!t.value?null:u["a"].validateSeries([()=>u["a"].isNumber(t),()=>t.value<=0?["Number of tins must be greater than 1"]:null,()=>t.value>this.getDrugValue(e,"quantity")?["You cannot dispose/relocate more than available tins"]:null])},t=>this.setDrugValue(e,"tins",t))},async selectDrug(e){this.selectedDrug=e},validateEntry(e){return!Object(i["isEmpty"])(e.tins)}},computed:{fullSelectedDrugName(){try{return this.drugs[this.selectedDrug].label}catch(e){return"N/A"}},enteredDrugs(){const e=[];return this.drugs.forEach(t=>{if(t.entries){const n=t.entries.filter(e=>this.validateEntry(e));n.forEach(n=>{e.push({label:t.shortname,value:{...n,...t}})})}}),e}},watch:{clear(){this.drugs=this.drugs.map(e=>(e.entries=e.entries.map(e=>(e.tins=null,e)),e))},drugs:{async handler(){this.$emit("onValue",this.enteredDrugs)},immediate:!0,deep:!0}}}),j=(n("aa5d"),n("d959")),h=n.n(j);const O=h()(m,[["render",l],["__scopeId","data-v-51e542aa"]]);t["default"]=O},"51c8":function(e,t,n){"use strict";n.r(t);var o=n("7a23"),l=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const a=l;t["default"]=a},"72a4":function(e,t,n){},"86f4":function(e,t,n){"use strict";n("89a0")},"89a0":function(e,t,n){},aa5d:function(e,t,n){"use strict";n("72a4")},c731:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return s}));var o=n("d867"),l=n("e6e9"),a=n("9441"),c=n("10be");async function r(e,t,n=null){(await o["modalController"].create({component:a["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{onFinish:t,fields:e,skipSummary:!0,disableAutoModalDismiss:!0,cancelAction:()=>{"function"===typeof n&&n(),o["modalController"].dismiss()}}})).present()}async function i(e,t={}){const n="boolean"!==typeof(null===t||void 0===t?void 0:t.strictNumbers)||(null===t||void 0===t?void 0:t.strictNumbers),l=await o["modalController"].create({component:c["a"],backdropDismiss:!1,cssClass:"keypad-modal custom-modal-backdrop",componentProps:{title:(null===t||void 0===t?void 0:t.title)||"",preset:(null===t||void 0===t?void 0:t.preset)||"",toggleButton:null===t||void 0===t?void 0:t.toggleButton,strictNumbers:n,customKeyboard:null===t||void 0===t?void 0:t.customKeyboard,noFloat:"boolean"===typeof(null===t||void 0===t?void 0:t.noFloat)&&t.noFloat,onKeyPress(t,o){e(n?parseInt(t):t,o)}}});l.present()}async function s(e,t){(await o["modalController"].create({component:l["a"],backdropDismiss:!1,cssClass:"full-modal",componentProps:{dismissType:"modal",currentField:e,onFinish:t}})).present()}},c924:function(e,t,n){"use strict";var o=n("7a23");function l(e,t,n,l,a,c){const r=Object(o["resolveComponent"])("ion-button");return Object(o["openBlock"])(),Object(o["createElementBlock"])("table",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.layout,(t,n)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("tr",{key:n},[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(t,(n,l)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("td",{class:"his-keyboard-margin",key:"btn-"+l},[n?(Object(o["openBlock"])(),Object(o["createBlock"])(r,{key:0,style:Object(o["normalizeStyle"])({width:e.btnSize}),class:Object(o["normalizeClass"])(`his-keyboard-btn btn-${n}-${e.dynamicClass(t)}`),onClick:()=>e.keyPress(n)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(n),1)]),_:2},1032,["style","class","onClick"])):Object(o["createCommentVNode"])("",!0)]))),128))]))),128))])}var a=n("d867"),c=Object(o["defineComponent"])({components:{IonButton:a["IonButton"]},props:{btnSize:{type:String,default:"90%"},layout:{type:Array,required:!0,default:()=>[]},onKeyPress:{type:Function,required:!0}},methods:{keyPress(e){this.onKeyPress(e)},dynamicClass(e){return 3==e.length&&"Unknown"==e[0]?"Keypad":e[0]}}}),r=n("d959"),i=n.n(r);const s=i()(c,[["render",l]]);t["a"]=s},e6e9:function(e,t,n){"use strict";var o=n("7a23");function l(e,t,n,l,a,c){const r=Object(o["resolveComponent"])("ion-title"),i=Object(o["resolveComponent"])("ion-toolbar"),s=Object(o["resolveComponent"])("ion-header"),u=Object(o["resolveComponent"])("ion-content"),d=Object(o["resolveComponent"])("ion-button"),b=Object(o["resolveComponent"])("ion-footer"),p=Object(o["resolveComponent"])("ion-page");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{class:"his-lg-text ion-text-center"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.currentField.helpText),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(),Object(o["createBlock"])(o["KeepAlive"],null,[(Object(o["openBlock"])(),Object(o["createBlock"])(Object(o["resolveDynamicComponent"])(e.currentField.type),{key:e.currentField.id,currentFieldig:e.currentField.currentFieldig,options:e.currentField.options,preset:e.currentField.preset,clear:e.valueClearIndex,fdata:e.formData,config:e.currentField.config,cdata:e.computedFormData,activationState:e.state,onValue:e.currentField.onValue,defaultValue:e.currentField.defaultValue,onValueUpdate:e.currentField.onValueUpdate,onOnValue:e.onFieldValue},null,40,["currentFieldig","options","preset","clear","fdata","config","cdata","activationState","onValue","defaultValue","onValueUpdate","onOnValue"]))],1024))]),_:1}),Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{color:"light"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onClose,slot:"start",color:"danger",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Close ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onClear,slot:"end",color:"warning",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Clear ")]),_:1},8,["disabled","onClick"]),Object(o["createVNode"])(d,{disabled:e.disableBtn,onClick:e.onDone,slot:"end",color:"success",size:"large"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(" Done ")]),_:1},8,["disabled","onClick"])]),_:1})]),_:1})]),_:1})}var a=n("b5e4"),c=n("d95e"),r=n("d867");function i(){const e={};return c["a"].forEach(t=>{e[t]=Object(o["defineAsyncComponent"])(()=>n("f159")(`./${t}.vue`))}),e}var s=Object(o["defineComponent"])({name:"SingleFieldTouchForm",components:{IonPage:r["IonPage"],IonContent:r["IonContent"],IonFooter:r["IonFooter"],IonToolbar:r["IonToolbar"],IonButton:r["IonButton"],IonHeader:r["IonHeader"],IonTitle:r["IonTitle"],...i()},props:{dismissType:{type:String},onFinish:{type:Function,required:!0},currentField:{type:Object,required:!0}},data:()=>({valueClearIndex:0,formData:{},computedFormData:{},state:"",value:null,disableBtn:!1}),methods:{onClose(){"modal"===this.dismissType?r["modalController"].dismiss():this.$router.back()},onClear(){this.valueClearIndex+=1,this.value=null},onFieldValue(e){this.value=e},onDone(){if(this.disableBtn=!0,this.currentField.validation){const e=this.currentField.validation(this.value);if(this.disableBtn=!1,e)return Object(a["e"])(e.join(", "),6e4)}try{this.onFinish(this.value)}catch(e){Object(a["c"])(""+e),console.error(e)}this.onClose(),this.disableBtn=!1}}}),u=n("d959"),d=n.n(u);const b=d()(s,[["render",l]]);t["a"]=b}}]);
//# sourceMappingURL=TouchFormElement17.094606e7.js.map