<<<<<<<< HEAD:web/static/assets/status-tap-9a54349a.js
import{b8 as a,b9 as i,ba as c,bb as d,bc as l}from"./index-2c23db35.js";/*!
========
import{ba as a,bb as i,bc as c,bd as d,be as l}from"./index-2ad1f2cc.js";/*!
>>>>>>>> d5dde79c4b802565fbd74045759fafa02ba3a825:web/static/assets/status-tap-3819cbc8.js
 * (C) Ionic http://ionicframework.com - MIT License
 */const m=()=>{const e=window;e.addEventListener("statusTap",()=>{a(()=>{const o=e.innerWidth,s=e.innerHeight,n=document.elementFromPoint(o/2,s/2);if(!n)return;const t=i(n);t&&new Promise(r=>c(t,r)).then(()=>{d(async()=>{t.style.setProperty("--overflow","hidden"),await l(t,300),t.style.removeProperty("--overflow")})})})})};export{m as startStatusTap};
