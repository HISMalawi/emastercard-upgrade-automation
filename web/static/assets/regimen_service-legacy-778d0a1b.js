System.register(["./index-legacy-65d6eaec.js","./his_date-legacy-f6da7b16.js"],(function(e,n){"use strict";var l,a,o,t,r,u,i,s,d,m,g,v,c,p,b,w,k,f,U,y,x,h,V,_,I;return{setters:[e=>{l=e.d,a=e.H,o=e.y,t=e.at,r=e.au,u=e.r,i=e.G,s=e.a6,d=e.a2,m=e._,g=e.K,v=e.o,c=e.c,p=e.h,b=e.w,w=e.a,k=e.t,f=e.x,U=e.b,y=e.e,x=e.ag,h=e.J,V=e.F,_=e.aj},e=>{I=e.a}],execute:function(){const n=l({name:"NumberInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},min:{type:Number,default:null},max:{type:Number,default:null},allowUnknown:{type:Boolean,default:!1}},components:{IonLabel:a,IonInput:o,IonNote:t,IonCheckbox:r},emits:["update:modelValue"],setup(e,{emit:n}){const l=u(!1),a=i({get:()=>e.modelValue,set:e=>n("update:modelValue",e)});return s(l,(e=>{e?(a.value.value="Unknown",a.value.error="",a.value.disabled=!0):(a.value.value="",a.value.disabled=!1)})),s(e.modelValue,(e=>{"Unknown"===e.value?l.value||(l.value=!0):l.value=!1})),d((()=>{"Unknown"!==a.value.value||l.value||(l.value=!0)})),{validate:async()=>{if(a.value.required&&!a.value.value)return a.value.error="This field is required";if(!e.allowUnknown&&"Unknown"===a.value.value||"N/A"===a.value.value)return a.value.error="Unknown is not allowed";if(a.value.validation){const n=await a.value.validation({label:a.value.value,value:a.value.value},e.form);if(n&&n.length)return a.value.error+=n.toString()}return a.value.error=""},model:a,isUnknown:l}}}),J={key:0,class:"text-danger"},$={key:1,class:"ion-float-right ion-margin-end checkbox-label"};e("N",m(n,[["render",function(e,n,l,a,o,t){const r=g("ion-checkbox"),u=g("ion-label"),i=g("ion-input"),s=g("ion-note");return v(),c(h,null,[e.model.label?(v(),p(u,{key:0,class:"ion-padding-bottom bold"},{default:b((()=>[w("span",null,k(e.model.label),1),e.model.required?(v(),c("span",J," *")):f("",!0),e.allowUnknown?(v(),c("span",$,[n[3]||(n[3]=U(" Unknown? ")),y(r,{modelValue:e.isUnknown,"onUpdate:modelValue":n[0]||(n[0]=n=>e.isUnknown=n)},null,8,["modelValue"])])):f("",!0)])),_:1})):f("",!0),y(i,{type:"number",class:x(["ion-margin-top",e.model.error?"box-input-error":"box-input"]),modelValue:e.model.value,"onUpdate:modelValue":n[1]||(n[1]=n=>e.model.value=n),placeholder:e.isUnknown?"Unknown":e.model.placeholder,disabled:e.model.disabled||e.isUnknown,onIonFocus:n[2]||(n[2]=n=>e.model.error=""),onIonBlur:e.validate,min:e.min,max:e.max},null,8,["class","modelValue","placeholder","disabled","onIonBlur","min","max"]),e.model.error?(v(),p(s,{key:1,color:"danger"},{default:b((()=>[U(k(e.model.error),1)])),_:1})):f("",!0)],64)}]])),e("R",class{static getAllArvRegimens(){return V.getJson(`programs/${_}/all_arv_regimens`)}static getRegimens(e){return V.getJson(`programs/${_}/regimens`,{patient_id:e})}static getRegimensByWeight(e,n=!1){return V.getJson(`programs/${_}/regimens`,{weight:e,tb_dosage:n})}static getCustomIngridients(){return V.getJson(`programs/${_}/custom_regimen_ingredients`)}static getCurrentRegimen(e,n=I()){return V.getJson(`programs/${_}/${e}`,{date:n})}static getRegimenExtras(e,n){return V.getJson(`programs/${_}/regimen_extras`,{name:e,weight:n})}})}}}));