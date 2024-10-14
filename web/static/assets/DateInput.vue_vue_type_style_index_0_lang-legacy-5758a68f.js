System.register(["./index-legacy-91295254.js","./his_date-legacy-87db423b.js","./validations-legacy-77533b67.js","./emc_event-legacy-58754a45.js","./vue-datepicker-legacy-efeca79e.js","./toasts-legacy-ec8222ac.js"],(function(e,a){"use strict";var l,t,u,o,n,r,i,d,v,s,m,p,c,y,f,b,g,V,h,x,D,I,j,k,w,_,E,q,F,$,M,S,U,B,J,L;return{setters:[e=>{l=e.d,t=e.r,u=e.G,o=e.a6,n=e.a2,r=e.c,i=e.h,d=e.w,v=e.u,s=e.x,m=e.ag,p=e.a,c=e.e,y=e.J,f=e.o,b=e.t,g=e.b,V=e.au,h=e.H,x=e.y,D=e.I,I=e.s,j=e.a8,k=e.M,w=e.dx,_=e.dy,E=e.at},e=>{q=e.d,F=e.c,$=e.j,M=e.t},e=>{S=e.d},e=>{U=e.E,B=e.a},e=>{J=e.K},e=>{L=e.i}],execute:function(){var a=document.createElement("style");a.textContent=".vc-popover-content-wrapper{z-index:1000!important}\n",document.head.appendChild(a);const O={key:0},Y={key:1},A={key:2,class:"text-danger"},C={key:3,class:"ion-float-right ion-margin-end checkbox-label"},z={key:2,style:{display:"flex","justify-content":"flex-start","justify-items":"center"}},N={style:{"margin-top":"0.7rem","flex-grow":"1"}};e("_",l({__name:"DateInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},minDate:{type:[String,Function],required:!1},maxDate:{type:[String,Function],required:!1},allowEstimation:{type:Boolean,default:!1},estimationLabel:{type:String,default:"Estimate"}},emits:["update:modelValue","isEstimated"],setup(e,{emit:a}){const l=e,G=a,H=t(!1),K=t(),R=t(l.modelValue.value?q(l.modelValue.value).date():void 0),T=t(l.modelValue.value?q(l.modelValue.value).month()+1:0),Z=t(l.modelValue.value?q(l.modelValue.value).year():void 0),P=t(l.modelValue.value),Q=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],W=u((()=>{const e="function"==typeof l.minDate?l.minDate():l.minDate;return L(e)?"":F(e)})),X=u((()=>{const e="function"==typeof l.maxDate?l.maxDate():l.maxDate;return L(e)?"":F(e)})),ee=u({get:()=>l.modelValue?l.modelValue:{},set:e=>G("update:modelValue",e)}),ae=e=>{var a;ee.value.error=null===(a=S({value:e.target.value}))||void 0===a?void 0:a.join(),ee.value.error||(K.value=parseInt(e.target.value)),le()},le=async()=>{let e="";if(H.value&&K.value)e=$(K.value);else if(R.value||T.value||Z.value){const a=`${Z.value}-${T.value}-${R.value}`;if(!a.match(/^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return ee.value.error="Invalid date";e=F(a)}if(ee.value.required&&!e)return ee.value.error="This field is required";if(W.value&&new Date(e)<new Date(W.value))return ee.value.error=H.value?`Estimated period must be less than or equal to ${q().diff(W.value,"years")} years`:`Date must be after ${M(W.value)}`;if(X.value&&new Date(e)>new Date(X.value))return ee.value.error=H.value?"Estimated period must be more than or equal to 0 years":`Date must be before ${M(X.value)}`;if(ee.value.validation){const a=await ee.value.validation({label:e,value:e},l.form);if(a&&a.length)return ee.value.error+=a.toString()}ee.value.error="",ee.value.value=e};o(P,(e=>{R.value=q(e).date(),T.value=q(e).month()+1,Z.value=q(e).year(),le()}));const te=()=>{K.value=void 0,R.value=void 0,T.value=0,Z.value=void 0,ee.value.error="",P.value=""};return o((()=>l.modelValue.value),(e=>{R.value=e?q(e).date():void 0,T.value=e?q(e).month()+1:0,Z.value=e?q(e).year():void 0,P.value=e})),o(H,(e=>{te(),G("isEstimated",e)})),n((()=>U.on(B.ON_CLEAR,te))),(a,l)=>(f(),r(y,null,[ee.value.label?(f(),i(v(h),{key:0,class:"ion-padding-bottom bold"},{default:d((()=>[H.value?(f(),r("span",O,b(e.estimationLabel),1)):(f(),r("span",Y,b(ee.value.label),1)),ee.value.required?(f(),r("span",A," *")):s("",!0),e.allowEstimation?(f(),r("span",C,[g(" Estimate "+b(ee.value.label)+" ",1),c(v(V),{modelValue:H.value,"onUpdate:modelValue":l[0]||(l[0]=e=>H.value=e)},null,8,["modelValue"])])):s("",!0)])),_:1})):s("",!0),H.value?(f(),i(v(x),{key:1,type:"number",class:m(["ion-margin-top",ee.value.error?"box-input-error":"box-input"]),modelValue:K.value,"onUpdate:modelValue":l[1]||(l[1]=e=>K.value=e),placeholder:e.estimationLabel,disabled:ee.value.disabled,min:1,onIonInput:ae,onIonFocus:l[2]||(l[2]=()=>ee.value.error="")},null,8,["class","modelValue","placeholder","disabled"])):(f(),r("div",z,[p("div",N,[c(v(J),{"auto-apply":"",modelValue:P.value,"onUpdate:modelValue":l[3]||(l[3]=e=>P.value=e),teleport:!0,"enable-time-picker":!1,maxDate:X.value,minDate:W.value},{trigger:d((()=>[c(v(D),null,{default:d((()=>[c(v(I),{icon:v(j)},null,8,["icon"])])),_:1})])),_:1},8,["modelValue","maxDate","minDate"])]),c(v(x),{modelValue:R.value,"onUpdate:modelValue":l[4]||(l[4]=e=>R.value=e),min:1,max:31,class:"ion-margin-top",fill:"outline",style:{"flex-grow":"2"},type:"number",placeholder:"DD",disabled:ee.value.disabled,onIonFocus:l[5]||(l[5]=()=>ee.value.error=""),onIonInput:le,onIonBlur:le},null,8,["modelValue","disabled"]),c(v(_),{modelValue:T.value,"onUpdate:modelValue":l[6]||(l[6]=e=>T.value=e),"aria-label":"Months",interface:"popover",placeholder:"MM",class:"ion-margin-top ion-margin-horizontal",fill:"outline",justify:"end",disabled:ee.value.disabled,onIonFocus:l[7]||(l[7]=()=>ee.value.error=""),onIonInput:le,onIonBlur:le},{default:d((()=>[(f(),r(y,null,k(Q,((e,a)=>c(v(w),{value:a+1,key:a},{default:d((()=>[g(b(e),1)])),_:2},1032,["value"]))),64))])),_:1},8,["modelValue","disabled"]),c(v(x),{modelValue:Z.value,"onUpdate:modelValue":l[8]||(l[8]=e=>Z.value=e),min:1900,class:"ion-margin-top",fill:"outline",style:{"flex-grow":"2"},type:"number",placeholder:"YYYY",disabled:ee.value.disabled,onIonFocus:l[9]||(l[9]=()=>ee.value.error=""),onIonInput:le,onIonBlur:le},null,8,["modelValue","disabled"])])),ee.value.error?(f(),i(v(E),{key:3,color:"danger"},{default:d((()=>[g(b(ee.value.error),1)])),_:1})):s("",!0)],64))}}))}}}));