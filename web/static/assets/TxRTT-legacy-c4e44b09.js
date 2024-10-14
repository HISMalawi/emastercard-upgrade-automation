System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./toasts-legacy-ec8222ac.js","./tx_report_service-legacy-c9618147.js","./arrays-legacy-42bab38c.js","./age_groups-legacy-5143fd58.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./report_service-legacy-a06c1924.js","./url-legacy-2d97b2db.js"],(function(e,a){"use strict";var t,r,l,n,s,o,g,i,u,c,d,h;return{setters:[e=>{t=e.l},e=>{r=e._},e=>{l=e.c,n=e.t,s=e.g},e=>{o=e.a},e=>{g=e.a},e=>{i=e.A},e=>{u=e.d,c=e.r,d=e.o,h=e.h},null,null,null,null,null,null,null],execute:function(){e("default",u({__name:"TxRTT",setup(e){const a=c("-"),u=c([]),p=c(),T=new o,v=[{path:"ageGroup",label:"Age group"},{path:"gender",label:"Gender",formatter:l},{path:"lessThanThree",label:"Returned <3 mo",drillable:!0},{path:"betweenThreeAndFive",label:"Returned 3-5 mo",drillable:!0},{path:"overSix",label:"Returned 6+ mo",drillable:!0}];function w(e,a,t,r){const l={gender:a,ageGroup:t,lessThanThree:[],betweenThreeAndFive:[],overSix:[]},n=s(e,`${t}.${a}`,[]);for(const{months:s,patient_id:o}of n)s<3?l.lessThanThree.push(o):s>=3&&s<6?l.betweenThreeAndFive.push(o):l.overSix.push(o);r[a].rows.push(l),r[a].aggregate.lessThanThree.push(...l.lessThanThree),r[a].aggregate.betweenThreeAndFive.push(...l.betweenThreeAndFive),r[a].aggregate.overSix.push(...l.overSix)}async function b({dateRange:e},r=!1){try{await t.show(),T.setStartDate(e.startDate),T.setEndDate(e.endDate),a.value=T.getDateIntervalPeriod();const l=function(e){return i.reduce(((a,t)=>(w(e,"F",t,a),w(e,"M",t,a),a)),{M:{rows:[],aggregate:{lessThanThree:[],betweenThreeAndFive:[],overSix:[]}},F:{rows:[],aggregate:{lessThanThree:[],betweenThreeAndFive:[],overSix:[]}}})}(await T.getClinicTxRtt(r));u.value=[...l.F.rows,...l.M.rows,{ageGroup:"All",gender:"Male",...l.M.aggregate},...await T.buildMaternityAgreggateRows(l.F.aggregate)],function(e){const a=Object.values(e.F.aggregate).flat(1),t=Object.values(e.M.aggregate).flat(1);p.value=g([...a,...t])}(l)}catch(l){n("ERROR! Unable to load report data"),console.error(l)}await t.hide()}function y(e){return`${e.column.label} | ${e.row.ageGroup} | ${l(e.row.gender)}s`}return(e,t)=>(d(),h(r,{title:"Clinic TX RTT Report","report-type":"Clinic",columns:v,rows:u.value,period:a.value,"total-clients":p.value,"drill-title":y,useDateRangeFilter:"",showIndices:"",onGenerate:b},null,8,["rows","period","total-clients"]))}}))}}}));
