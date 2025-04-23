<<<<<<<< HEAD:web/static/assets/status-tap-legacy-05719eeb.js
System.register(["./index-legacy-2d6958b4.js"],(function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.b8,r=e.b9,s=e.ba,o=e.bb,i=e.bc}],execute:function(){
========
System.register(["./index-legacy-a3ed4133.js"],(function(e,t){"use strict";var n,r,s,o,i;return{setters:[e=>{n=e.ba,r=e.bb,s=e.bc,o=e.bd,i=e.be}],execute:function(){
>>>>>>>> d5dde79c4b802565fbd74045759fafa02ba3a825:web/static/assets/status-tap-legacy-a1ea3733.js
/*!
             * (C) Ionic http://ionicframework.com - MIT License
             */
e("startStatusTap",(()=>{const e=window;e.addEventListener("statusTap",(()=>{n((()=>{const t=e.innerWidth,n=e.innerHeight,a=document.elementFromPoint(t/2,n/2);if(!a)return;const c=r(a);c&&new Promise((e=>s(c,e))).then((()=>{o((async()=>{c.style.setProperty("--overflow","hidden"),await i(c,300),c.style.removeProperty("--overflow")}))}))}))}))}))}}}));
