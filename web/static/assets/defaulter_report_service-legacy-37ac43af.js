!function(){function e(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./report_service-legacy-a3c5dfb2.js"],(function(t,r){"use strict";var i;return{setters:[e=>{i=e.R}],execute:function(){t("D",class extends i{constructor(){super(),e(this,"pepfar",void 0),this.pepfar=!0}setIsPepfar(e){this.pepfar=e}getDefaulters(){return this.getReport("defaulter_list",{pepfar:this.pepfar})}})}}}))}();
