import{d as P,ae as T,o as g,h as _,w as o,e,u as t,k as i,I as b,b as d,j as I,f as y,F as p,a as v,$ as k,i as w,p as A,R as C,B as N,C as z}from"./index-d405c632.js";import{l as c}from"./loader-bd20757d.js";import{S as B}from"./SelectInput-0a074711.js";import{T as V}from"./TextInput-b0fd244c.js";import{i as H,r as x}from"./form-c45c3bad.js";import{i as F}from"./validations-fafb7daf.js";import{t as U}from"./toasts-a55a3f6b.js";import"./Strs-7ee8a435.js";const S=P({__name:"NetworkForm",emits:["submit"],setup($,{emit:m}){const f=m,u=[{label:"HTTP",value:"http"},{label:"HTTPS",value:"https"}],l=T({protocol:{value:"",label:"Select Protocol",required:!0},ipAddress:{value:"",label:"IP Address",placeholder:"Enter IP Address e.g. 127.0.0.1",required:!0,validation:async r=>F(r)},port:{value:"",label:"Port",placeholder:"Enter Port e.g. 3000",required:!0}}),s=async()=>{await H(l)&&f("submit",x(l).formData)};return(r,a)=>(g(),_(t(I),null,{default:o(()=>[e(t(i),{size:"12",class:"ion-margin-vertical"},{default:o(()=>[e(B,{modelValue:l.protocol,"onUpdate:modelValue":a[0]||(a[0]=n=>l.protocol=n),options:u},null,8,["modelValue"])]),_:1}),e(t(i),{size:"12",class:"ion-margin-vertical"},{default:o(()=>[e(V,{modelValue:l.ipAddress,"onUpdate:modelValue":a[1]||(a[1]=n=>l.ipAddress=n)},null,8,["modelValue"])]),_:1}),e(t(i),{size:"12",class:"ion-margin-vertical"},{default:o(()=>[e(V,{modelValue:l.port,"onUpdate:modelValue":a[2]||(a[2]=n=>l.port=n)},null,8,["modelValue"])]),_:1}),e(t(i),{size:"12",class:"ion-margin-vertical"},{default:o(()=>[e(t(b),{class:"ion-margin-top ion-float-right",color:"success",onClick:s},{default:o(()=>a[4]||(a[4]=[d("Submit")])),_:1}),e(t(b),{class:"ion-margin-top ion-float-right",onClick:a[3]||(a[3]=n=>r.$router.back())},{default:o(()=>a[5]||(a[5]=[d("Back")])),_:1})]),_:1})]),_:1}))}}),h={class:"his-card"},q={class:"his-card"},J=P({__name:"NetworkSettings",setup($){const m=y(),f=p.isLoggedIn(),u=async({protocol:l,ipAddress:s,port:r})=>{try{if(c.show(),p.setHost("".concat(l.value,"://").concat(s,":").concat(r)),!await p.apiOk())throw new Error("Unable to connect to: ".concat(l.value,"://").concat(s,":").concat(r));await c.hide(),m.back()}catch(a){await c.hide(),console.log(a),U("".concat(a)),localStorage.clear()}};return(l,s)=>t(f)?(g(),_(t(w),{key:0},{default:o(()=>[e(t(I),null,{default:o(()=>[e(t(i),{size:"10",offset:"1",class:"ion-padding"},{default:o(()=>[v("div",h,[e(t(k),{style:{"padding-left":"0"}},{default:o(()=>s[0]||(s[0]=[d("Network Settings / API Host configuration")])),_:1}),e(S,{onSubmit:u})])]),_:1})]),_:1})]),_:1})):(g(),_(t(z),{key:1},{default:o(()=>[e(t(C),null,{default:o(()=>[e(t(A),null,{default:o(()=>[e(t(k),null,{default:o(()=>s[1]||(s[1]=[d("Network Settings / API Host configuration")])),_:1})]),_:1})]),_:1}),e(t(N),null,{default:o(()=>[e(t(w),null,{default:o(()=>[e(t(I),null,{default:o(()=>[e(t(i),{size:"10",offset:"1",class:"ion-padding"},{default:o(()=>[v("div",q,[e(S,{onSubmit:u})])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});export{J as default};
