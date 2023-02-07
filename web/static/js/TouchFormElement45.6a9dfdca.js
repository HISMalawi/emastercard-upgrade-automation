(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["TouchFormElement45","TouchFormElement38","TouchFormElement8"],{"04a0":function(t,e,a){},"0a79":function(t,e,a){"use strict";var o=a("7a23");function c(t,e,a,c,i,s){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{id:"view-port",class:Object(o["normalizeClass"])(t.showFull?"":"half")},[Object(o["renderSlot"])(t.$slots,"default",{},void 0,!0)],2)}var i=Object(o["defineComponent"])({name:"ViewPort",props:{showFull:{type:Boolean,default:()=>!0}}}),s=(a("a4d3"),a("d959")),n=a.n(s);const r=n()(i,[["render",c],["__scopeId","data-v-7c293cad"]]);e["a"]=r},"26a1":function(t,e,a){"use strict";a.r(e);var o=a("7a23");const c={class:"view-port-content"},i=["src"];function s(t,e,a,s,n,r){const l=Object(o["resolveComponent"])("ApexChart"),d=Object(o["resolveComponent"])("ion-col"),h=Object(o["resolveComponent"])("ion-label"),b=Object(o["resolveComponent"])("ion-chip"),u=Object(o["resolveComponent"])("ion-item"),O=Object(o["resolveComponent"])("ion-list"),j=Object(o["resolveComponent"])("ion-row"),p=Object(o["resolveComponent"])("view-port");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(j,{class:"parent-row"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,{size:"7"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{width:t.width,height:t.height,type:t.type,options:t.chartOptions,series:t.series},null,8,["width","height","type","options","series"])]),_:1}),Object(o["createVNode"])(d,{size:"5"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{class:"title"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Previous weight")]),_:1}),Object(o["createVNode"])(b,{slot:"end",color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.stats.prevWeight),1)]),_:1})]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{class:"title"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Lastest weight")]),_:1}),Object(o["createVNode"])(b,{slot:"end",color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.stats.curWeight),1)]),_:1})]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{class:"title"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Latest weight change")]),_:1}),Object(o["withDirectives"])(Object(o["createElementVNode"])("img",{src:t.stats.weightState,width:"50"},null,8,i),[[o["vShow"],t.stats.weightState]]),Object(o["createVNode"])(b,{slot:"end",color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.stats.curWeightChange),1)]),_:1})]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{class:"title"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Patient Age")]),_:1}),Object(o["createVNode"])(b,{slot:"end",color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.stats.age),1)]),_:1})]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{class:"title"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])("Patient BMI")]),_:1}),Object(o["createVNode"])(b,{slot:"end",color:"primary"},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.stats.bmi.index),1)]),_:1})]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{style:Object(o["normalizeStyle"])({"background-color":t.stats.bmi.color,color:"white",padding:"10px","text-align":"center"})},{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.stats.bmi.result),1)]),_:1},8,["style"])]),_:1})]),_:1})]),_:1})]),_:1})])]),_:1})}var n=a("0a79"),r=a("51c8"),l=a("d867"),d=a("ae27"),h=a.n(d),b=Object(o["defineComponent"])({components:{ApexChart:h.a,ViewPort:n["a"],IonCol:l["IonCol"],IonRow:l["IonRow"],IonItem:l["IonItem"],IonChip:l["IonChip"]},mixins:[r["default"]],data:()=>({stats:{prevWeight:"-",curWeight:"-",curWeightChange:"-",weightState:"",age:"-",bmi:{}},type:"area",width:"100%",height:"560px",series:[],chartOptions:{chart:{id:"weight_chart"},title:{text:"Weight trail (2 year period)"},stroke:{curve:"smooth"},yaxis:{title:{text:"Weight Kg(s)"},min:0},xaxis:{categories:[]},dataLabels:{enabled:!0,textAnchor:"start",formatter:function(t,e){var a;const o=null===(a=e.w.config.series[0].data[e.dataPointIndex-1])||void 0===a?void 0:a.y;return o&&o>0?(t/o*100-100).toFixed(2)+" %":"0.0%"}}}}),mounted(){this.$emit("onFieldActivated",this)},activated(){this.$emit("onFieldActivated",this)},methods:{setStats(t){var e,a;const o=(null===(e=t.values[t.values.length-2])||void 0===e?void 0:e.y)||0,c=(null===(a=t.values[t.values.length-1])||void 0===a?void 0:a.y)||0;if(this.stats.curWeight=c||"-",this.stats.prevWeight=o||"-",this.stats.age=t.age,this.stats.bmi=t.bmi,c>0&&o>0){this.stats.curWeightChange=Math.abs(c/o*100-100).toFixed(2)+" %";const t="/assets/images/drop-up-arrow.svg",e="/assets/images/drop-down-arrow.svg";this.stats.weightState=c>o?t:e}}},async created(){const t=await this.options(this.fdata),e=t[0].other,a=e.values;this.series=[{name:"Weight",data:a.sort((t,e)=>{const a=new Date(t.x),o=new Date(e.x);return a-o}).map(t=>{const[e,a]=t.x.split("/");return{x:`${e}.${a}`,y:t.y}})}],this.type=e.type?e.type:"area",this.width=e.width?e.width:"100%",this.setStats(e)}}),u=(a("46a5"),a("d959")),O=a.n(u);const j=O()(b,[["render",s],["__scopeId","data-v-fe558678"]]);e["default"]=j},"46a5":function(t,e,a){"use strict";a("acee")},"51c8":function(t,e,a){"use strict";a.r(e);var o=a("7a23"),c=Object(o["defineComponent"])({emits:["onValue","onFieldActivated"],props:{config:{type:Object,default:()=>({})},preset:{type:Object,default:()=>({label:"",value:""})},defaultValue:{type:Function},fdata:{type:Object,required:!0},cdata:{type:Object,required:!0},clear:{type:Number,required:!0},options:{type:Function,default:()=>[]},activationState:{type:String,default:""},onValue:{type:Function},onValueUpdate:{type:Function},footerButtonEvent:{type:Object}}});const i=c;e["default"]=i},a4d3:function(t,e,a){"use strict";a("04a0")},acee:function(t,e,a){}}]);
//# sourceMappingURL=TouchFormElement45.6a9dfdca.js.map