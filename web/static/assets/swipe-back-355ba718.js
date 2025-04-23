<<<<<<<< HEAD:web/static/assets/swipe-back-7c44809a.js
import{b2 as h,b3 as f,b4 as D}from"./index-2c23db35.js";/*!
========
import{b4 as h,b5 as f,b6 as D}from"./index-2ad1f2cc.js";/*!
>>>>>>>> d5dde79c4b802565fbd74045759fafa02ba3a825:web/static/assets/swipe-back-355ba718.js
 * (C) Ionic http://ionicframework.com - MIT License
 */const k=(n,m,g,p,X)=>{const c=n.ownerDocument.defaultView;let s=h(n);const w=t=>{const{startX:e}=t;return s?e>=c.innerWidth-50:e<=50},a=t=>s?-t.deltaX:t.deltaX,b=t=>s?-t.velocityX:t.velocityX;return f({el:n,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:t=>(s=h(n),w(t)&&m()),onStart:g,onMove:t=>{const e=a(t)/c.innerWidth;p(e)},onEnd:t=>{const o=a(t),e=c.innerWidth,r=o/e,i=b(t),v=e/2,l=i>=0&&(i>.2||o>v),u=(l?1-r:r)*e;let d=0;if(u>5){const y=u/Math.abs(i);d=Math.min(y,540)}X(l,r<=0?.01:D(0,r,.9999),d)}})};export{k as createSwipeBackGesture};
