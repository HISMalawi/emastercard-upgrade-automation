import{bf as i,bg as a,bh as c,bi as d,bj as l}from"./index-f1e5fa33.js";/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const h=()=>{const e=window;e.addEventListener("statusTap",()=>{i(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=a(n);t&&new Promise(r=>c(t,r)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{h as startStatusTap};
