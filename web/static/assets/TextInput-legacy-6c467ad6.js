System.register(["./index-legacy-b3d9e99f.js","./_plugin-vue_export-helper-legacy-762b7923.js"],(function(e,l){"use strict";var a,n,o,r,t,u,d,i,s,p,f,c,v,m,w,b,g,k,x,h,y,U;return{setters:[e=>{a=e.d,n=e.J,o=e.z,r=e.aq,t=e.ar,u=e.r,d=e.H,i=e.a6,s=e.a2,p=e.L,f=e.c,c=e.h,v=e.w,m=e.y,w=e.f,b=e.a,g=e.ag,k=e.K,x=e.o,h=e.t,y=e.b},e=>{U=e._}],execute:function(){var l=document.createElement("style");l.textContent=".outer-input-wrapper{width:100%;height:2.5rem;display:flex;justify-content:space-between;justify-items:center}.inner-input-wrapper{background:#ffffff;height:100%;padding-top:0!important;flex-grow:8}.pre-suffix-wrapper{background:#f2f2f2;height:100%;padding:.5rem;flex-grow:1}\n",document.head.appendChild(l);const V=a({name:"TextInput",props:{modelValue:{type:Object,default:()=>({})},allowUnknown:{type:Boolean,default:!1},form:{type:Object,default:()=>({})},prefix:{type:String,default:""},suffix:{type:String,default:""},password:{type:Boolean,default:!1}},components:{IonLabel:n,IonInput:o,IonNote:r,IonCheckbox:t},emits:["update:modelValue"],setup(e,{emit:l}){const a=u(!1),n=d({get:()=>e.modelValue,set:e=>l("update:modelValue",e)});return i(a,(e=>{e?(n.value.value="Unknown",n.value.error="",n.value.disabled=!0):(n.value.value="",n.value.disabled=!1)})),i(e.modelValue,(e=>{"Unknown"===e.value?a.value||(a.value=!0):a.value=!1})),s((()=>{"Unknown"!==n.value.value||a.value||(a.value=!0)})),{validate:async()=>{if(n.value.required&&!n.value.value)return n.value.error="This field is required";if(!e.allowUnknown&&"Unknown"===n.value.value||"N/A"===n.value.value)return n.value.error="Unknown is not allowed";if(n.value.validation){const l=await n.value.validation({label:n.value.value,value:n.value.value},e.form);if(l&&l.length)return n.value.error+=l.toString()}return n.value.error=""},model:n,isUnknown:a}}}),I={key:0,class:"text-danger"},_={key:1,class:"ion-float-right ion-margin-end checkbox-label"},j={key:0,class:"pre-suffix-wrapper"},q={class:"inner-input-wrapper"},B={key:1,class:"pre-suffix-wrapper"};e("T",U(V,[["render",function(e,l,a,n,o,r){const t=p("ion-checkbox"),u=p("ion-label"),d=p("ion-input"),i=p("ion-note");return x(),f(k,null,[e.model.label?(x(),c(u,{key:0,class:"ion-padding-bottom bold"},{default:v((()=>[w("span",null,h(e.model.label),1),e.model.required?(x(),f("span",I," *")):m("",!0),e.allowUnknown?(x(),f("span",_,[y(h(e.model.label)+" Unknown? ",1),b(t,{modelValue:e.isUnknown,"onUpdate:modelValue":l[0]||(l[0]=l=>e.isUnknown=l)},null,8,["modelValue"])])):m("",!0)])),_:1})):m("",!0),w("div",{class:g(["ion-margin-top outer-input-wrapper",e.model.error?"box-input-error":"box-input"])},[e.prefix?(x(),f("div",j,[b(u,{class:"checkbox-label bold"},{default:v((()=>[y(h(e.prefix),1)])),_:1})])):m("",!0),w("div",q,[b(d,{class:"ion-no-margin ion-no-padding",modelValue:e.model.value,"onUpdate:modelValue":l[1]||(l[1]=l=>e.model.value=l),type:e.password?"password":"text",placeholder:e.model.placeholder,disabled:e.model.disabled||e.isUnknown,onIonFocus:l[2]||(l[2]=l=>e.model.error=""),onIonBlur:e.validate},null,8,["modelValue","type","placeholder","disabled","onIonBlur"])]),e.suffix?(x(),f("div",B,[b(u,{class:"checkbox-label bold ion-float-right"},{default:v((()=>[y(h(e.suffix),1)])),_:1})])):m("",!0)],2),e.model.error?(x(),c(i,{key:1,color:"danger"},{default:v((()=>[y(h(e.model.error),1)])),_:1})):m("",!0)],64)}]]))}}}));