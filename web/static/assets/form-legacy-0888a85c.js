System.register(["./Strs-legacy-09248991.js","./toasts-legacy-ec8222ac.js","./loader-legacy-c82f4ab6.js"],(function(e,t){"use strict";var r,o,a,n;return{setters:[e=>{r=e.a},e=>{o=e.i,a=e.t},e=>{n=e.l}],execute:function(){async function t(e){for(const t in e){const{required:r,value:a,validation:n}=e[t];if(r&&o(a))e[t].error="This field is required";else if("function"==typeof n){const r="object"==typeof a?a:{label:a,value:a},s=await n(r,e);e[t].error=o(s)?"":s.join()}else e[t].error=""}return Object.values(e).every((({error:e})=>!e))}function s(e,t=!1){const o={},a={};for(const n in e){const{value:s,computedValue:c}=e[n];if(s){const i=t?r(n):n;o[i]=s,"function"==typeof c&&(a[i]=c(e[n].value,e))}}return{formData:o,computedFormData:a}}e({a:function(e,t=""){const r=Object.values(e).filter((e=>e&&(e.tag===t||""===t))).reduce(((e,t)=>{const r=t.obs?t.obs:t;return Array.isArray(r)?e=e.concat(r):e.push(r),e}),[]);return Promise.all(r)},i:t,r:s,s:async function(e,r,o){var c;if(!(await t(e)))return;const i=null===(c=null==o?void 0:o.showloader)||void 0===c||c;try{i&&await n.show();const{formData:t,computedFormData:a}=s(e,null==o?void 0:o.underscoreKeys);await r(t,a)}catch(u){a(`${u}`),console.error("WELL HERE IS THE FAILURE",u)}finally{i&&await n.hide()}},t:function(e){return e.map((e=>({value:e,label:e})))}})}}}));
