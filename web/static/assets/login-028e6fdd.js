import{d as A,f as b,r as w,g as R,h as B,w as a,u as e,o as v,e as o,i as E,j as F,k as C,l as T,b as i,m as z,t as f,a as n,n as M,p as N,q as g,I as P,s as S,v as q,c as D,x as K,y as x,z as k,A as U,B as L,C as j,D as G,E as W,F as H,_ as J}from"./index-d405c632.js";import{r as _}from"./image-cb93bc3e.js";import{t as y}from"./toasts-a55a3f6b.js";import{u as O}from"./PasswordUpdate-998877e9.js";import"./TextInput-b0fd244c.js";import"./his_date-933250a6.js";import"./form-c45c3bad.js";import"./Strs-7ee8a435.js";import"./loader-bd20757d.js";const Q=["src"],X=["src"],Y=["src"],Z={key:0},$=A({__name:"login",setup(ee){const{fullVersion:V}=G(),{facility:u,loadFacilityCode:h}=W(),I=b(),d=I.currentRoute.value.redirectedFrom,r=w(""),t=w(""),m=O();R().resetIdleTimer();const c=async()=>{try{if(!r.value||!t.value)return y("Invalid login details");const l=await H.login(r.value,t.value);l.ok?(m.setCurrentPassword(t.value),await m.canChangePassword()&&await m.changePasswaord(),h(),I.push(d!=null?d:"/")):y(l.errorMessage)}catch(l){y("An error occurred while logging in"),console.error(l)}};return(l,s)=>(v(),B(e(j),null,{default:a(()=>[o(e(L),null,{default:a(()=>[o(e(E),{style:{margin:"0",padding:"0"}},{default:a(()=>[o(e(F),null,{default:a(()=>[o(e(C),{size:"8"},{default:a(()=>[o(e(T),{class:"title"},{default:a(()=>s[2]||(s[2]=[i("E-MASTERCARD APP")])),_:1}),o(e(z),{class:"sub-title"},{default:a(()=>[i(f(e(V)),1)]),_:1}),n("img",{src:e(_)("report.png"),class:"hero-image"},null,8,Q),o(e(M),{class:"footer-section"},{default:a(()=>[o(e(N),null,{default:a(()=>[n("span",null,[n("img",{id:"coat",src:e(_)("login-logos/Malawi-Coat_of_arms_of_arms.png"),alt:"Malawi Coat of Arms logo",class:"brand-logo-moh"},null,8,X),n("img",{id:"pepfar",src:e(_)("login-logos/PEPFAR.png"),alt:"PEPFAR logo",class:"brand-logo-pepfar"},null,8,Y)]),o(e(g),{class:"his-sm-text",slot:"end",lines:"none"},{default:a(()=>[o(e(P),{color:"dark",fill:"outline",size:"large",slot:"end","router-link":"/settings/network"},{default:a(()=>s[3]||(s[3]=[i(" Network ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),o(e(C),{size:"4",class:"form-section"},{default:a(()=>[o(e(S),{icon:e(q),class:"avatar"},null,8,["icon"]),e(u).name?(v(),D("h3",Z,f(e(u).name)+" ("+f(e(u).district)+")",1)):K("",!0),s[5]||(s[5]=n("h4",null,"Please, log into your account",-1)),o(e(g),{style:{margin:"2rem 3.5rem"}},{default:a(()=>[o(e(x),{type:"text",placeholder:"Username",modelValue:r.value,"onUpdate:modelValue":s[0]||(s[0]=p=>r.value=p),onKeyup:k(c,["enter"]),min:5,required:""},null,8,["modelValue"])]),_:1}),o(e(g),{style:{margin:"2rem 3.5rem"}},{default:a(()=>[o(e(x),{type:"password",modelValue:t.value,"onUpdate:modelValue":s[1]||(s[1]=p=>t.value=p),placeholder:"Password",onKeyup:k(c,["enter"]),max:100,min:5,required:""},null,8,["modelValue"])]),_:1}),o(e(P),{expand:"full",size:"large",style:{margin:"2rem 3.5rem","text-transform":"none"},onClick:U(c,["prevent"])},{default:a(()=>s[4]||(s[4]=[i(" Login ")])),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}))}});const de=J($,[["__scopeId","data-v-fc1b88ee"]]);export{de as default};
