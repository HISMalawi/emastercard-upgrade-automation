import{d as v,aU as B,aT as C,k as w,l as Y,m as O,J as $,h as L,_ as R,L as a,o as n,j as _,w as l,e as s,a as t,t as p,c as r,z as i,K as c,N as j,b as z}from"./index-0dab41e9.js";const G=v({name:"YesNoInput",props:{modelValue:{type:Object,default:()=>({})},inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},customOptions:{type:Array}},components:{IonRadioGroup:B,IonRadio:C,IonGrid:w,IonRow:Y,IonCol:O,IonLabel:$},emits:["update:modelValue"],setup(e,{emit:o}){return{model:L({get:()=>e.modelValue,set:b=>o("update:modelValue",b)})}}}),T={key:0,class:"text-danger"},U={key:0},q={key:1},A={class:"ion-margin-start"};function D(e,o,g,b,E,F){const f=a("ion-label"),u=a("ion-radio"),y=a("ion-radio-group"),k=a("ion-note"),V=a("ion-col"),I=a("ion-row"),N=a("ion-grid");return n(),_(N,{class:"ion-no-margin ion-no-padding"},{default:l(()=>[s(I,null,{default:l(()=>[s(V,{size:"12"},{default:l(()=>[s(f,{class:"ion-margin-end"},{default:l(()=>[t("b",null,[t("span",null,p(e.model.label)+":",1),e.model.required?(n(),r("span",T,"*")):i("",!0)])]),_:1}),e.inline?i("",!0):(n(),r("br",U)),e.inline?i("",!0):(n(),r("br",q)),s(y,{modelValue:e.model.value,"onUpdate:modelValue":o[0]||(o[0]=d=>e.model.value=d),onIonChange:o[1]||(o[1]=()=>e.model.error="")},{default:l(()=>{var d;return[(d=e.customOptions)!=null&&d.length?(n(!0),r(c,{key:0},j(e.customOptions,m=>(n(),r(c,{key:m.label},[t("span",A,p(m.label),1),s(u,{class:"ion-margin-start",slot:"start",color:"primary",value:m.value,disabled:e.disabled},null,8,["value","disabled"])],64))),128)):(n(),r(c,{key:1},[o[2]||(o[2]=t("span",{class:"ion-margin-start"},"Yes",-1)),s(u,{class:"ion-margin-start",slot:"start",color:"primary",value:"Yes",disabled:e.disabled},null,8,["disabled"]),o[3]||(o[3]=t("span",{class:"ion-margin-start"},"No",-1)),s(u,{class:"ion-margin-start",slot:"start",color:"primary",value:"No",disabled:e.disabled},null,8,["disabled"])],64))]}),_:1},8,["modelValue"]),o[4]||(o[4]=t("br",null,null,-1)),e.model.error?(n(),_(k,{key:2,color:"danger"},{default:l(()=>[z(p(e.model.error),1)]),_:1})):i("",!0)]),_:1})]),_:1})]),_:1})}const K=R(G,[["render",D]]);export{K as Y};
