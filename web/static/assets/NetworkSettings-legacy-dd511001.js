System.register(["./index-legacy-6a8cc98f.js","./loader-legacy-1aa2e549.js","./SelectInput-legacy-3cae62bc.js","./TextInput-legacy-bd3b988e.js","./form-legacy-920c34b2.js","./validations-legacy-d24b5b8a.js","./toasts-legacy-7157433d.js","./common-legacy-0d7df615.js","./_plugin-vue_export-helper-legacy-762b7923.js","./Strs-legacy-09248991.js"],(function(e,l){"use strict";var t,a,o,s,i,n,r,u,d,c,f,g,p,m,_,y,v,h,b,S,k,w,j,P,V,$,A;return{setters:[e=>{t=e.d,a=e.ae,o=e.o,s=e.h,i=e.w,n=e.a,r=e.u,u=e.k,d=e.I,c=e.b,f=e.j,g=e.g,p=e.G,m=e.f,_=e.$,y=e.i,v=e.q,h=e.S,b=e.C,S=e.D},e=>{k=e.l},e=>{w=e.S},e=>{j=e.T},e=>{P=e.i,V=e.r},e=>{$=e.i},e=>{A=e.t},null,null,null],execute:function(){const l=t({__name:"NetworkForm",emits:["submit"],setup(e,{emit:l}){const t=l,g=[{label:"HTTP",value:"http"},{label:"HTTPS",value:"https"}],p=a({protocol:{value:"",label:"Select Protocol",required:!0},ipAddress:{value:"",label:"IP Address",placeholder:"Enter IP Address e.g. 127.0.0.1",required:!0,validation:async e=>$(e)},port:{value:"",label:"Port",placeholder:"Enter Port e.g. 3000",required:!0}}),m=async()=>{await P(p)&&t("submit",V(p).formData)};return(e,l)=>(o(),s(r(f),null,{default:i((()=>[n(r(u),{size:"12",class:"ion-margin-vertical"},{default:i((()=>[n(w,{modelValue:p.protocol,"onUpdate:modelValue":l[0]||(l[0]=e=>p.protocol=e),options:g},null,8,["modelValue"])])),_:1}),n(r(u),{size:"12",class:"ion-margin-vertical"},{default:i((()=>[n(j,{modelValue:p.ipAddress,"onUpdate:modelValue":l[1]||(l[1]=e=>p.ipAddress=e)},null,8,["modelValue"])])),_:1}),n(r(u),{size:"12",class:"ion-margin-vertical"},{default:i((()=>[n(j,{modelValue:p.port,"onUpdate:modelValue":l[2]||(l[2]=e=>p.port=e)},null,8,["modelValue"])])),_:1}),n(r(u),{size:"12",class:"ion-margin-vertical"},{default:i((()=>[n(r(d),{class:"ion-margin-top ion-float-right",color:"success",onClick:m},{default:i((()=>[c("Submit")])),_:1}),n(r(d),{class:"ion-margin-top ion-float-right",onClick:l[3]||(l[3]=l=>e.$router.back())},{default:i((()=>[c("Back")])),_:1})])),_:1})])),_:1}))}}),I={class:"his-card"},z={class:"his-card"};e("default",t({__name:"NetworkSettings",setup(e){const t=g(),a=p.isLoggedIn(),d=async({protocol:e,ipAddress:l,port:a})=>{try{if(k.show(),p.setHost(`${e.value}://${l}:${a}`),!(await p.apiOk()))throw new Error(`Unable to connect to: ${e.value}://${l}:${a}`);await k.hide(),t.back()}catch(o){await k.hide(),console.log(o),A(`${o}`),localStorage.clear()}};return(e,t)=>r(a)?(o(),s(r(y),{key:0},{default:i((()=>[n(r(f),null,{default:i((()=>[n(r(u),{size:"10",offset:"1",class:"ion-padding"},{default:i((()=>[m("div",I,[n(r(_),{style:{"padding-left":"0"}},{default:i((()=>[c("Network Settings / API Host configuration")])),_:1}),n(l,{onSubmit:d})])])),_:1})])),_:1})])),_:1})):(o(),s(r(S),{key:1},{default:i((()=>[n(r(h),null,{default:i((()=>[n(r(v),null,{default:i((()=>[n(r(_),null,{default:i((()=>[c("Network Settings / API Host configuration")])),_:1})])),_:1})])),_:1}),n(r(b),null,{default:i((()=>[n(r(y),null,{default:i((()=>[n(r(f),null,{default:i((()=>[n(r(u),{size:"10",offset:"1",class:"ion-padding"},{default:i((()=>[m("div",z,[n(l,{onSubmit:d})])])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}))}}))}}}));