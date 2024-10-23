!function(){function t(t,e,a){return(e=function(t){var e=function(t,e){if("object"!=typeof t||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:e+""}(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}System.register(["./index-legacy-65d6eaec.js","./arrays-legacy-681d874a.js","./toasts-legacy-4bd31a3d.js","./his_date-legacy-f6da7b16.js","./url-legacy-2d97b2db.js"],(function(e,a){"use strict";var r,s,i,n,u,o,d,l,c;return{setters:[t=>{r=t.aj,s=t.F},t=>{i=t.a},t=>{n=t.i},t=>{u=t.a,o=t.c,d=t.t,l=t.d},t=>{c=t.p}],execute:function(){e("R",class{constructor(){t(this,"date",void 0),t(this,"startDate",void 0),t(this,"endDate",void 0),t(this,"programId",void 0),t(this,"useDefaultParams",void 0),this.programId=r,this.date=u(),this.endDate="",this.startDate="",this.useDefaultParams=!0}setDate(t){this.date=o(t)}setStartDate(t){this.startDate=o(t)}setEndDate(t){this.endDate=o(t)}getDateIntervalPeriod(){return this.startDate&&this.endDate?`${d(this.startDate)} - ${d(this.endDate)}`:"-"}buildParams(t){let e={};return this.useDefaultParams&&(e.date=this.date,e.program_id=this.programId),this.startDate&&(e.start_date=this.startDate),this.endDate&&(e.end_date=this.endDate),t&&(e={...e,...t}),e}async getReport(t,e){const a=await s.getJson(c(t,this.buildParams(e)));if(a.ok)return a.data}static getReportQuarters(t=5){const e=[];let a=new Date,r=a.getFullYear();a=new Date(`${r}-${a.getMonth()+1}-${a.getDate()} 00:00`);let s=this.getQtrByDate(a).qtr,i=0;for(4===s&&e.push(this.buildQtrObj("Q1",r+1));i<t;)0===i&&s<4&&e.push(this.buildQtrObj(`Q${s+1}`,r)),e.push(this.buildQtrObj(`Q${s}`,r)),s=s>0?s-=1:s,r=0==s?r-1:r,s=0==s?s+=4:s,i++;return e}static getQtrByDate(t){const e=this.getQuarterBounds(t.getFullYear());for(const a in e){const{start:r,end:s}=e[a];if(t>=new Date(r)&&t<=new Date(s))return e[a]}return null}static buildQtrObj(t,e){const a=this.getQuarterBounds(e),{start:r,end:s}=a[t];return{start:r,end:s,name:`${t} ${e}`}}static getQuarterBounds(t){const e=e=>`${t}-${e}-01 00:00`,a=e=>`${t}-${e}-${(e=>l(`${t}-${e}-01`).daysInMonth())(e)} 00:00`;return{Q1:{qtr:1,start:e("01"),end:a("03")},Q2:{qtr:2,start:e("04"),end:a("06")},Q3:{qtr:3,start:e("07"),end:a("09")},Q4:{qtr:4,start:e("10"),end:a("12")}}}async getMaternalStatus(t,e="pepfar"){var a;if(n(t))return{FP:[],FBf:[]};const r=c("vl_maternal_status",this.buildParams({report_definition:e}));return null!==(a=(await s.postJson(r,{patient_ids:t})).data)&&void 0!==a?a:{FP:[],FBf:[]}}async buildMaternityAgreggateRows(t,e="pepfar"){const a=i(Object.values(t).flat(1).map((t=>t instanceof Object?t.patient_id:t))),r=Object.keys(t),s=await this.getMaternalStatus(a,e),n=s.FBf.concat(s.FP);return["FP","FNP","FBf"].map((e=>r.reduce(((a,r)=>({[r]:t[r].filter((t=>{const a=t instanceof Object?t.patient_id:t;return"FNP"===e?!n.includes(a):s[e].includes(a)})),...a})),{ageGroup:"All",gender:e})))}})}}}))}();
