(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement34","TouchFormElement6","TouchFormElement9"],{"0a79":function(e,t,i){"use strict";var o=i("7a23");function n(e,t,i,n,l,a){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{id:"view-port",class:Object(o["normalizeClass"])(e.showFull?"":"half")},[Object(o["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)}var l=Object(o["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),a=(i("a4d3"),i("6b0d")),c=i.n(a);const s=c()(l,[["render",n],["__scopeId","data-v-7c293cad"]]);t["a"]=s},2645:function(e,t,i){},"2fd5":function(e,t,i){"use strict";i.r(t);var o=i("7a23");function n(e,t,i,n,l,a){const c=Object(o["resolveComponent"])("his-text-input"),s=Object(o["resolveComponent"])("ion-icon"),d=Object(o["resolveComponent"])("ion-chip"),r=Object(o["resolveComponent"])("ion-checkbox"),h=Object(o["resolveComponent"])("ion-text"),u=Object(o["resolveComponent"])("ion-label"),f=Object(o["resolveComponent"])("ion-item"),p=Object(o["resolveComponent"])("ion-list"),b=Object(o["resolveComponent"])("view-port"),m=Object(o["resolveComponent"])("his-keyboard");return Object(o["openBlock"])(),Object(o["createElementBlock"])(o["Fragment"],null,[Object(o["createVNode"])(b,{showFull:!e.showKeyboard},{default:Object(o["withCtx"])(()=>[e.showKeyboard?(Object(o["openBlock"])(),Object(o["createBlock"])(c,{key:0,value:e.filter,onOnValue:t[0]||(t[0]=t=>e.onKbValue(t,e.showKeyboard)),disabled:!1},null,8,["value"])):Object(o["createCommentVNode"])("",!0),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.checkedItems,(t,i)=>(Object(o["openBlock"])(),Object(o["createElementBlock"])("span",{key:i},[Object(o["createVNode"])(d,{class:"his-md-text",color:"primary",onClick:i=>e.uncheck(t.label)},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label)+" ",1),Object(o["createVNode"])(s,{icon:e.closeIcon},null,8,["icon"])]),_:2},1032,["onClick"])]))),128)),Object(o["createVNode"])(p,{class:"view-port-content"},{default:Object(o["withCtx"])(()=>[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.listValues,(t,i)=>(Object(o["openBlock"])(),Object(o["createBlock"])(f,{onClick:()=>e.onselect(t),key:i,color:t.isChecked?"lightblue":"",lines:t.isChecked?"none":""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(r,{slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e,disabled:null===t||void 0===t?void 0:t.disabled},null,8,["modelValue","onUpdate:modelValue","disabled"]),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{class:"his-md-text"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.label),1)]),_:2},1024),e.isDescription(t.description,t.isChecked)?(Object(o["openBlock"])(),Object(o["createBlock"])(h,{key:0,color:t.description.color},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("p",null,[Object(o["createElementVNode"])("i",null,Object(o["toDisplayString"])(t.description.text),1)])]),_:2},1032,["color"])):Object(o["createCommentVNode"])("",!0)]),_:2},1024)]),_:2},1032,["onClick","color","lines"]))),128))]),_:1})]),_:1},8,["showFull"]),e.showKeyboard?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0,kbConfig:e.keyboard,onKeyPress:e.keypress},null,8,["kbConfig","onKeyPress"])):Object(o["createCommentVNode"])("",!0)],64)}var l=i("82a9"),a=i("2ef0"),c=i("d867"),s=i("ff79"),d=i("2345"),r=i("6062"),h=Object(o["defineComponent"])({components:{IonCheckbox:c["IonCheckbox"],IonText:c["IonText"],IonChip:c["IonChip"],IonItem:c["IonItem"],IonList:c["IonList"],IonLabel:c["IonLabel"],IonIcon:c["IonIcon"]},data:()=>({listData:[],filter:""}),name:"HisMultipleSelect",mixins:[l["default"]],methods:{async init(){this.$emit("onFieldActivated",this),!Object(a["isEmpty"])(this.listData)&&this.config.buildOptionsOnce||(this.listData=await this.options(this.fdata,this.getChecked(this.listData),this.cdata,this.listData),this.$emit("onValue",this.getChecked(this.listData)))},async onselect(e){var t;if(setTimeout(()=>this.filter="",30),"function"===typeof(null===e||void 0===e||null===(t=e.other)||void 0===t?void 0:t.onEvent)&&await e.other.onEvent(e.isChecked),this.onValue&&e.isChecked){const t=await this.onValue(e,this.fdata,this.cdata);if(!t)return void(e.isChecked=!1)}this.onValueUpdate&&(this.listData=await this.onValueUpdate([...this.listData],e,this.fdata,this.cdata)),this.$emit("onValue",this.getChecked(this.listData))},onKbValue(e){this.filter=e},keypress(e){this.filter=Object(d["a"])(e,this.filter)},uncheck(e){this.listData.forEach(t=>{t.label!==e||t.disabled||(t.isChecked=!1)})},getChecked(e){return e.filter(e=>e.isChecked)},isDescription(e,t=!1){return!!e&&(null===e||void 0===e||!e.show||("onChecked"===e.show&&t||"always"===e.show))}},computed:{closeIcon:()=>s["close"],listValues(){if(this.filter){const e=new r["a"](this.listData,{threshold:.3,keys:["label"],useExtendedSearch:!0});return e.search(this.filter).map(e=>e.item)}return this.listData},checkedItems(){return this.getChecked(this.listData)}},watch:{clear(){this.listData.forEach(e=>e.isChecked=!1)},footerButtonEvent:{async handler(e){var t,i;e&&"function"===typeof(null===(t=e.onClickComponentEvents)||void 0===t?void 0:t.refreshOptions)&&(this.listData=await(null===(i=e.onClickComponentEvents)||void 0===i?void 0:i.refreshOptions(e,this.listData,this.fdata,this.cdata)),this.$emit("onValue",this.getChecked(this.listData)))},deep:!0,immediate:!0}},mounted(){this.init()},activated(){this.init()}}),u=i("6b0d"),f=i.n(u);const p=f()(h,[["render",n]]);t["default"]=p},"36ad":function(e,t,i){"use strict";i.r(t);var o=i("7a23");function n(e,t,i,n,l,a){const c=Object(o["resolveComponent"])("ion-input");return Object(o["openBlock"])(),Object(o["createBlock"])(c,{ref:"input",class:"input_display",modelValue:e.text,"onUpdate:modelValue":t[0]||(t[0]=t=>e.text=t),type:e.type,disabled:e.disabled,readonly:e.readOnly,autocapitalize:"sentences",placeholder:e.placeholder},null,8,["modelValue","type","disabled","readonly","placeholder"])}var l=i("d867"),a=i("2ed9"),c=Object(o["defineComponent"])({name:"HisInput",components:{IonInput:l["IonInput"]},setup(){const{activePlatformProfile:e}=Object(a["e"])(),t=Object(o["computed"])(()=>"HIS_KEYBOARD_ONLY"===e.value.keyboard);return{readOnly:t}},data:()=>({text:""}),watch:{value(e){this.text=e},text(e){this.$emit("onValue",e)}},props:{value:{required:!1},type:{type:String,default:()=>"text"},disabled:{type:Boolean,default:()=>!1},placeholder:{type:String,default:()=>""}}}),s=(i("86f4"),i("6b0d")),d=i.n(s);const r=d()(c,[["render",n],["__scopeId","data-v-04472bbc"]]);t["default"]=r},4910:function(e,t,i){},"51c8":function(e,t,i){"use strict";i.r(t);var o=i("7a23"),n=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const l=n;t["default"]=l},"82a9":function(e,t,i){"use strict";i.r(t);i("14d9");var o=i("7a23"),n=i("db10"),l=i("2345"),a=i("36ad"),c=i("6be2"),s=i("0a79"),d=i("51c8"),r=i("d867"),h=i("2ef0"),u=Object(o["defineComponent"])({components:{IonList:r["IonList"],IonItem:r["IonItem"],IonLabel:r["IonLabel"],HisTextInput:a["default"],HisKeyboard:n["a"],ViewPort:s["a"],IonGrid:r["IonGrid"],IonRow:r["IonRow"],IonCol:r["IonCol"],IonInfiniteScroll:r["IonInfiniteScroll"],IonInfiniteScrollContent:r["IonInfiniteScrollContent"],IonContent:r["IonContent"]},mixins:[d["default"]],data:()=>({showKeyboard:!1,selected:"",filter:"",filtered:[],keyboard:c["h"],listData:[],infiniteScroll:{enabled:!1,page:1,limit:10,threshold:"100px",handler:void 0}}),created(){var e,t,i,o,n,l;this.showKeyboard=!0===(null===(e=this.config)||void 0===e?void 0:e.showKeyboard),this.infiniteScroll.enabled=!0===(null===(t=this.config)||void 0===t||null===(t=t.infiniteScroll)||void 0===t?void 0:t.enabled),this.infiniteScroll.page=(null===(i=this.config)||void 0===i||null===(i=i.infiniteScroll)||void 0===i?void 0:i.page)||1,this.infiniteScroll.limit=(null===(o=this.config)||void 0===o||null===(o=o.infiniteScroll)||void 0===o?void 0:o.limit)||10,this.infiniteScroll.threshold=(null===(n=this.config)||void 0===n||null===(n=n.infiniteScroll)||void 0===n?void 0:n.threshold)||"100px",this.infiniteScroll.handler=null===(l=this.config)||void 0===l||null===(l=l.infiniteScroll)||void 0===l?void 0:l.handler},watch:{footerButtonEvent:{handler(e){if(Object(h["isPlainObject"])(e.onClickComponentEvents)){const t=(null===e||void 0===e?void 0:e.onClickComponentEvents)||{};if(t&&"function"===typeof t.setValue){const i=t.setValue(e);"string"===typeof i&&(this.filter=i,this.selected=i)}}},deep:!0},listData:{handler(e){e&&(this.filtered=e)},deep:!0,immediate:!0},filter:{async handler(e){var t;if(e)if(null!==(t=this.config)&&void 0!==t&&t.isFilterDataViaApi){if(this.filtered=await this.options(this.fdata,e),this.selected===this.filter){const e=Object(h["find"])(this.filtered,{label:this.filter});e&&this.$emit("onValue",e)}}else this.infiniteScroll.enabled&&(this.infiniteScroll.page=1),this.filtered=this.listData.filter(e=>this.isMatch(e.label,this.filter));else this.filtered=this.listData},immediate:!0}},methods:{isMatch(e,t){return e.match(new RegExp(t,"i"))},clearSelection(){this.filter="",this.selected=""},onKbValue(e,t=!0){t&&this.selected!==e&&(this.filter=e,this.selected=this.filter)},keypress(e){this.filter||(this.selected=""),this.filter=Object(l["a"])(e,this.selected),this.selected=this.filter},async pushData(e){if(this.infiniteScroll.enabled&&"function"===typeof this.infiniteScroll.handler){this.infiniteScroll.page++;const e=await this.infiniteScroll.handler(this.filter,this.infiniteScroll.page,this.infiniteScroll.limit);this.listData.push(...e)}e.target.complete()}}}),f=(i("c9da"),i("6b0d")),p=i.n(f);const b=p()(u,[["__scopeId","data-v-ac90d438"]]);t["default"]=b},"86f4":function(e,t,i){"use strict";i("4910")},a4d3:function(e,t,i){"use strict";i("a6f7")},a6f7:function(e,t,i){},c9da:function(e,t,i){"use strict";i("2645")}}]);
//# sourceMappingURL=TouchFormElement34.bcf6a3c6.js.map