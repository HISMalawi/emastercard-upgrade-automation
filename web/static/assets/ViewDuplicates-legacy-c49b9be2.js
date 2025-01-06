System.register(["./loader-legacy-3c24c91b.js","./ReportTable.vue_vue_type_style_index_0_lang-legacy-1fdbf4fd.js","./toasts-legacy-3ebefc85.js","./patient_identifier_service-legacy-1358443d.js","./index-legacy-5e2e9988.js","./DrilldownTable-legacy-8b04591a.js","./patient_service-legacy-849a4de9.js","./Strs-legacy-09248991.js","./his_date-legacy-68b7a348.js","./dde-legacy-9214c5d3.js","./exports-legacy-357034ad.js","./index-legacy-23ffa7c9.js","./vue-datepicker-legacy-f21b02bd.js","./common-legacy-0d7df615.js","./arrays-legacy-e3b1d86b.js","./Date-legacy-5a7582e8.js"],(function(e,t){"use strict";var a,l,i,n,s,r,o,c,u,d,p,v,y,f,g,h,_,m,j;return{setters:[e=>{a=e.l},e=>{l=e._},e=>{i=e.t,n=e.a},e=>{s=e.P},e=>{r=e.d,o=e.r,c=e.f,u=e.h,d=e.i,p=e.j,v=e.aj,y=e.ak,f=e.o},e=>{g=e.D},e=>{h=e.P},e=>{_=e.t},e=>{m=e.t},e=>{j=e.d},null,null,null,null,null,null],execute:function(){e("default",r({__name:"ViewDuplicates",setup(e){const t=o([]),r=c(),b=o(),w=new s,D=o([]),I=[{path:"identifier",label:"Identifier"},{path:"count",label:"Count"}],x=u((()=>[{id:"identifier",label:"Select Identifier type",type:"select",gridSize:5,options:D.value}])),F=[{label:"View Patients",action:e=>{var t,l,s,c;const u=o([]),d=`Patients with ${null===(t=b.value)||void 0===t?void 0:t.label}: ${e.identifier}`,p=[{path:"person.names[0].given_name",label:"First Name"},{path:"person.names[0].family_name",label:"Last Name"},{path:"person.gender",label:"Gender",formatter:_},{path:"person.birthdate",label:"Date of Birth",formatter:m}],f=[{label:"View",action:e=>r.push(`/patients/${e.patient_id}`)}];return(null===(l=b.value)||void 0===l?void 0:l.value)===v&&j.value&&f.push({label:"Re-assign",action:async e=>{try{return await w.reassignNPID(e.patient_id),n("Identifier re-assigned successfully"),r.push(`/patients/${e.patient_id}`)}catch(t){console.error(t),i("Failed to re-assign identifier")}}}),a.show(),h.findByOtherID(null!==(s=null===(c=b.value)||void 0===c?void 0:c.value)&&void 0!==s?s:-1,e.identifier).then((e=>{var t;a.hide(),u.value.push(...null!==(t=e.data)&&void 0!==t?t:[])})).catch((e=>{i("Failed to load patients"),console.error(e)})),y.show(g,{title:d,columns:p,rows:u.value,rowActionButtons:f})}}];async function P({identifier:e}){try{var l;a.show(),b.value=e,t.value=null!==(l=await w.getDuplicateIndentifiers(e.value))&&void 0!==l?l:[]}catch(n){i("Failed to load report data"),console.error(n)}finally{a.hide()}}return d((async()=>{try{const e=await w.getIdentifierTypes();D.value=e.map((e=>({label:e.name,value:e.patient_identifier_type_id,other:e})))}catch(e){console.error(e),i("Failed to load identifier types")}})),(e,a)=>(f(),p(l,{title:"Duplicates Identifiers",columns:I,rows:t.value,"custom-filters":x.value,"row-action-buttons":F,onGenerate:P},null,8,["rows","custom-filters"]))}}))}}}));
