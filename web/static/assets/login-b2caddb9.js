import{d as A,g as R,r as y,h as b,w as o,u as e,o as v,a,i as B,j as E,k as h,l as F,b as i,m as S,t as _,f as s,n as z,q as M,s as f,I as w,v as N,x as T,c as q,y as D,z as C,A as x,B as K,C as U,D as G,E as L,F as j,p as W,e as H,G as J}from"./index-a3fc2e12.js";import{r as g}from"./image-cb93bc3e.js";import{t as k}from"./toasts-d882244a.js";import{_ as O}from"./_plugin-vue_export-helper-c27b6911.js";const Q=t=>(W("data-v-9a9039ea"),t=t(),H(),t),X=["src"],Y=["src"],Z=["src"],$={key:0},ee=Q(()=>s("h4",null,"Please, log into your account",-1)),ae=A({__name:"login",setup(t){const{fullVersion:V}=L(),{facility:u,loadFacilityCode:P}=j(),I=R(),d=I.currentRoute.value.redirectedFrom,l=y(""),n=y(""),c=async()=>{if(!l.value||!n.value)return k("Invalid login details");const m=await J.login(l.value,n.value);m.ok?(P(),I.push(d!=null?d:"/")):k(m.errorMessage)};return(m,r)=>(v(),b(e(G),null,{default:o(()=>[a(e(U),null,{default:o(()=>[a(e(B),{style:{margin:"0",padding:"0"}},{default:o(()=>[a(e(E),null,{default:o(()=>[a(e(h),{size:"8"},{default:o(()=>[a(e(F),{class:"title"},{default:o(()=>[i("E-MASTERCARD APP")]),_:1}),a(e(S),{class:"sub-title"},{default:o(()=>[i(_(e(V)),1)]),_:1}),s("img",{src:e(g)("report.png"),class:"hero-image"},null,8,X),a(e(z),{class:"footer-section"},{default:o(()=>[a(e(M),null,{default:o(()=>[s("span",null,[s("img",{id:"coat",src:e(g)("login-logos/Malawi-Coat_of_arms_of_arms.png"),alt:"Malawi Coat of Arms logo",class:"brand-logo-moh"},null,8,Y),s("img",{id:"pepfar",src:e(g)("login-logos/PEPFAR.png"),alt:"PEPFAR logo",class:"brand-logo-pepfar"},null,8,Z)]),a(e(f),{class:"his-sm-text",slot:"end",lines:"none"},{default:o(()=>[a(e(w),{color:"dark",fill:"outline",size:"large",slot:"end","router-link":"/settings/network"},{default:o(()=>[i(" Network ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),a(e(h),{size:"4",class:"form-section"},{default:o(()=>[a(e(N),{icon:e(T),class:"avatar"},null,8,["icon"]),e(u).name?(v(),q("h3",$,_(e(u).name)+" ("+_(e(u).district)+")",1)):D("",!0),ee,a(e(f),{style:{margin:"2rem 3.5rem"}},{default:o(()=>[a(e(C),{type:"text",placeholder:"Username",modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=p=>l.value=p),onKeyup:x(c,["enter"]),min:5,required:""},null,8,["modelValue"])]),_:1}),a(e(f),{style:{margin:"2rem 3.5rem"}},{default:o(()=>[a(e(C),{type:"password",modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=p=>n.value=p),placeholder:"Password",onKeyup:x(c,["enter"]),max:100,min:5,required:""},null,8,["modelValue"])]),_:1}),a(e(w),{expand:"full",size:"large",style:{margin:"2rem 3.5rem","text-transform":"none"},onClick:K(c,["prevent"])},{default:o(()=>[i(" Login ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const ne=O(ae,[["__scopeId","data-v-9a9039ea"]]);export{ne as default};