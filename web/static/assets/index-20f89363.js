import{d as b,h as _,o,c as m,j as u,u as e,x as C,z as y,e as t,w as n,b as p,t as I,J as v,K as h,_ as H,H as x,L as V,v as M,M as O,a as f,N as S,O as z,P as F,Q as j,s as T,R as q,S as E,T as G,U as B,V as K,D as $,q as U,W as J,F as Q,X as W,Y as X,f as Y,Z as A,$ as Z,a0 as ee,G as te,a1 as ne,a2 as ae,i as le,g as oe,E as se}from"./index-2c23db35.js";import{r as N}from"./image-cb93bc3e.js";import{r as L}from"./url-ffe761c9.js";const re=["src"],ie=b({__name:"SideMenuItemLabel",props:{item:{}},setup(c){const a=c,d=_(()=>{var s,r,g;return"".concat((g=(r=(s=a.item.meta)==null?void 0:s.title)!=null?r:a.item.name)!=null?g:a.item.path)}),i=_(()=>{var s;return(s=a.item.meta)==null?void 0:s.img}),l=_(()=>{var s;return(s=a.item.meta)==null?void 0:s.icon});return(s,r)=>(o(),m(h,null,[l.value?(o(),u(e(C),{key:0,icon:l.value,slot:"start"},null,8,["icon"])):i.value?(o(),m("img",{key:1,src:e(N)(i.value),class:"ion-margin-end icon"},null,8,re)):y("",!0),t(e(v),null,{default:n(()=>[p(I(d.value),1)]),_:1})],64))}});const P=H(ie,[["__scopeId","data-v-ccc83e32"]]),ue={key:0},ce={class:"ion-padding-start",slot:"content"},de=b({__name:"SideMenuItem",props:{item:{type:Object,required:!0},parentPath:{type:String,default:""}},setup(c){const a=c,d=_(()=>{var r;return a.item.meta&&"hidden"in a.item.meta?!((r=a.item.meta)!=null&&r.hidden):a.item.meta&&"roles"in a.item.meta?x.userHasRoles(a.item.meta.roles):!0}),i=_(()=>!!(a.item.meta&&a.item.meta.alwaysShow)),l=_(()=>{var r,g;return(g=(r=a.item.children)==null?void 0:r.filter(w=>!(w.meta&&w.meta.hidden)).length)!=null?g:0}),s=_(()=>{if(l.value>1)return null;if(a.item.children){for(const r of a.item.children)if(!r.meta||!r.meta.hidden)return r}return{...a.item,path:""}});return(r,g)=>{const w=V("router-link"),R=V("side-menu-item",!0);return d.value?(o(),m("div",ue,[!i.value&&s.value&&!s.value.children?(o(),m(h,{key:0},[s.value.meta?(o(),u(e(O),{key:0,"auto-hide":""},{default:n(()=>[t(w,{to:e(L)(s.value.path,c.parentPath)},{default:n(({isActive:k,isExactActive:D})=>[t(e(M),{button:"",color:k&&D?"primary":""},{default:n(()=>[t(P,{item:s.value},null,8,["item"])]),_:2},1032,["color"])]),_:1},8,["to"])]),_:1})):y("",!0)],64)):(o(),u(e(j),{key:1},{default:n(()=>[t(e(F),{value:c.item.path,"toggle-icon":e(z)},{default:n(()=>[t(e(M),{slot:"header"},{default:n(()=>[t(P,{item:c.item},null,8,["item"])]),_:1}),f("div",ce,[(o(!0),m(h,null,S(c.item.children,k=>(o(),u(R,{item:k,key:k.path,"parent-path":e(L)(k.path,c.parentPath)},null,8,["item","parent-path"]))),128))])]),_:1},8,["value","toggle-icon"])]),_:1}))])):y("",!0)}}}),me=["src"],_e=b({__name:"index",setup(c){const{appVersion:a,apiVersion:d}=Q();return(i,l)=>(o(),u(e(J),{"menu-id":"app-menu","content-id":"main-content","auto-hide":""},{default:n(()=>[t(e(E),null,{default:n(()=>[t(e(T),null,{default:n(()=>[t(e(M),{lines:"none"},{default:n(()=>[t(e(q),{slot:"start"},{default:n(()=>[f("img",{src:e(N)("aids.png"),class:"logo",alt:"HIV Electronic Mastercard App logo"},null,8,me)]),_:1}),t(e(v),null,{default:n(()=>l[0]||(l[0]=[p("E-MASTERCARD")])),_:1})]),_:1}),t(e(v),{class:"ion-margin-start"},{default:n(()=>l[1]||(l[1]=[p("HIV Electronic Mastercard App")])),_:1})]),_:1})]),_:1}),t(e($),null,{default:n(()=>[(o(),u(G,null,[t(e(B),null,{default:n(()=>[(o(!0),m(h,null,S(e(K),(s,r)=>(o(),u(de,{key:r,item:s,"parent-path":s.path},null,8,["item","parent-path"]))),128))]),_:1})],1024))]),_:1}),t(e(U),{class:"ion-padding-vertical ion-padding-start"},{default:n(()=>[t(e(v),{style:{color:"black"}},{default:n(()=>[l[2]||(l[2]=f("b",null,"EMC Version: ",-1)),p(I(e(a)),1)]),_:1}),l[4]||(l[4]=f("br",null,null,-1)),t(e(v),{style:{color:"black"}},{default:n(()=>[l[3]||(l[3]=f("b",null,"API Version: ",-1)),p(I(e(d)),1)]),_:1})]),_:1})]),_:1}))}}),pe={style:{"font-size":"14px","margin-right":"5px"}},fe=b({__name:"navbarItem",props:{label:{},items:{}},setup(c){return(a,d)=>{var i;return o(),m(h,null,[t(e(M),{id:a.label,button:"",lines:"none"},{default:n(()=>{var l;return[f("span",pe,I(a.label),1),(l=a.items)!=null&&l.length?(o(),u(e(C),{key:0,icon:e(W)},null,8,["icon"])):y("",!0)]}),_:1},8,["id"]),(i=a.items)!=null&&i.length?(o(),u(e(X),{key:0,trigger:a.label,"trigger-action":"click",dismissOnSelect:""},{default:n(()=>[t(e($),{style:{width:"100%"}},{default:n(()=>[t(e(B),null,{default:n(()=>[(o(!0),m(h,null,S(a.items,l=>(o(),u(e(M),{key:l.label,onClick:l.action,button:""},{default:n(()=>[l.icon?(o(),u(e(C),{key:0,icon:l.icon,slot:"start",style:{"margin-right":"1rem"}},null,8,["icon"])):y("",!0),t(e(v),null,{default:n(()=>[p(I(l.label),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1})]),_:1})]),_:1},8,["trigger"])):y("",!0)],64)}}}),he=b({__name:"index",setup(c){const{facility:a}=te(),d=Y(),i=[{label:"User Profile",action:()=>d.push("/users/profile"),icon:ne},{label:"Logout",action:()=>{x.logout(),d.push("/login")},icon:ae}];return(l,s)=>(o(),u(e(E),{class:"toolbar-size"},{default:n(()=>[t(e(T),null,{default:n(()=>[t(e(A),{slot:"start"},{default:n(()=>[t(e(Z),{"auto-hide":""})]),_:1}),t(e(ee),null,{default:n(()=>[p(I(e(a).name),1)]),_:1}),t(e(A),{slot:"end",size:"large"},{default:n(()=>{var r;return[t(fe,{label:(r=e(x).username)!=null?r:"",items:i},null,8,["label"])]}),_:1})]),_:1})]),_:1}))}}),ge={style:{"background-color":"#fafafa",height:"100%"}},be=b({__name:"index",setup(c){return le(()=>oe().resetIdleTimer()),(a,d)=>{const i=V("router-view");return e(x).isLoggedIn()?(o(),m(h,{key:1},[t(_e,{type:"overlay"}),t(e(se),{id:"main-content"},{default:n(()=>[t(he),t(e($),{color:"light"},{default:n(()=>[f("div",ge,[t(i,{style:{overflow:"auto","padding-left":"1rem"}})])]),_:1})]),_:1})],64)):(o(),u(i,{key:0}))}}});export{be as default};
