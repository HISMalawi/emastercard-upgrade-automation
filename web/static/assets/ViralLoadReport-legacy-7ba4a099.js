System.register(["./loader-legacy-c82f4ab6.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./toasts-legacy-ec8222ac.js","./regimens-legacy-68ba62aa.js","./viral_load_report_service-legacy-6a52e1ad.js","./index-legacy-91295254.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./age_groups-legacy-5143fd58.js","./report_service-legacy-a06c1924.js","./url-legacy-2d97b2db.js"],(function(e,a){"use strict";var l,t,r,s,o,n,u,i,c,d;return{setters:[e=>{l=e.l},e=>{t=e._},e=>{r=e.t},e=>{s=e.R},e=>{o=e.V},e=>{n=e.d,u=e.r,i=e.G,c=e.o,d=e.h},null,null,null,null,null,null,null,null,null],execute:function(){e("default",n({__name:"ViralLoadReport",setup(e){const a=u([]),n=u(),g=u(),p=u("-"),y=[{path:"ageGroup",label:"Age Group"},...s.map((e=>({path:e,label:e}))),{path:"N/A",label:"Uknown"}],v=i((()=>[{id:"minVL",placeholder:"Min Viral Load",type:"number",value:n.value,required:!1},{id:"maxVL",placeholder:"Max Viral Load",type:"number",value:g.value,required:!1}]));async function j(e){await l.show();try{n.value=e.minVL,g.value=e.maxVL;const l=new o;l.setStartDate(e.dateRange.startDate),l.setEndDate(e.dateRange.endDate),p.value=l.getDateIntervalPeriod(),a.value=await l.getViralLoad({from:n.value,to:g.value})}catch(t){r("Unable to load report data"),console.error(t)}await l.hide()}return(e,l)=>(c(),d(t,{title:"MoH Viral Load Report","report-type":"MoH",columns:y,rows:a.value,period:p.value,"show-indices":"","use-date-range-filter":"","custom-filters":v.value,onGenerate:j},null,8,["rows","period","custom-filters"]))}}))}}}));