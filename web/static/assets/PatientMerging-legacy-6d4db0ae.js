System.register(["./index-legacy-5e2e9988.js","./patient_service-legacy-849a4de9.js","./toasts-legacy-3ebefc85.js","./patient_identifier_service-legacy-1358443d.js","./his_date-legacy-68b7a348.js","./Date-legacy-5a7582e8.js","./common-legacy-0d7df615.js"],(function(e,t){"use strict";var a,n,i,l,r,s,o,d,c,u,m,g,h,p,y,b,v,f,C,_,k,w,D,V,I,A;return{setters:[e=>{a=e.d,n=e._,i=e.c,l=e.a,r=e.b,s=e.t,o=e.am,d=e.o,c=e.k,u=e.l,m=e.m,g=e.an,h=e.f,p=e.ah,y=e.h,b=e.ao,v=e.G,f=e.L,C=e.j,_=e.w,k=e.e,w=e.N,D=e.B,V=e.K},e=>{I=e.P},e=>{A=e.b},null,null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".his-card[data-v-db98b469]{padding:0;margin:3%}li[data-v-db98b469]{padding:0;margin:0;list-style:none}.box{border-color:#a3a3a3;border-width:thin;border-style:solid;border-radius:3px}.searchBtn{height:50px!important;margin-top:0;margin-bottom:0;margin-right:.5rem}.sc-ion-searchbar-md-h{--box-shadow: none !important}\n",document.head.appendChild(t);const P=a({props:{patient:{type:Object,required:!0},isActive:{type:Boolean}},computed:{stateClass(){return{"active-card-color":this.isActive,"inactive-card-color":!this.isActive}}}}),x=a({components:{IonGrid:c,IonRow:u,IonCol:m,PatientCard:n(P,[["render",function(e,t,a,n,c,u){return d(),i("div",{class:o(["his-card clickable",e.stateClass])},[l("li",null,[l("ul",null,[t[0]||(t[0]=r(" NPID : ")),l("b",null,s(e.patient.npid),1)]),l("ul",null,[t[1]||(t[1]=r(" Arv# : ")),l("b",null,s(e.patient.arvNum),1)]),l("ul",null,[t[2]||(t[2]=r(" Name : ")),l("b",null,s(e.patient.name),1)]),l("ul",null,[t[3]||(t[3]=r(" Birth date : ")),l("b",null,s(e.patient.birthdate),1)]),l("ul",null,[t[4]||(t[4]=r(" Gender : ")),l("b",null,s(e.patient.gender),1)]),l("ul",null,[t[5]||(t[5]=r(" Home District : ")),l("b",null,s(e.patient.homeDistrict),1)]),l("ul",null,[t[6]||(t[6]=r(" Home Village : ")),l("b",null,s(e.patient.homeVillage),1)]),l("ul",null,[t[7]||(t[7]=r(" Current District : ")),l("b",null,s(e.patient.currentDistrict),1)]),l("ul",null,[t[8]||(t[8]=r(" Current Village : ")),l("b",null,s(e.patient.currentVillage),1)])])],2)}],["__scopeId","data-v-db98b469"]]),IonSearchbar:g},setup(){const e=h(),{facility:t}=v(),a=p([{category:"primary",query:"",results:[]},{category:"secondary",query:"",results:[]}]),n=y((()=>a.every((e=>e.results.length>0&&e.results.some((e=>e.isChecked))))));return{patients:a,enableMergeBtn:n,searchPatient:async e=>{if(e.query)try{const{type:a,value:n}=await(async e=>e.match(/^(\w+-ARV-\w+)$/)?{type:"arv_number",value:e}:e.match(/^(\d+)$/)?{type:"arv_number",value:`${t.code}-ARV-${e}`}:{type:"name",value:e})(e.query);let i;i="name"===a?(await I.search((e=>{const t={},a=e.split(" ").filter((e=>/\S/.test(e)));return a.length>0&&(t.given_name=a[0],a[1]&&(t.family_name=a[1]),a[2]&&(t.middle_name=a[1],t.family_name=a[2])),t})(n))).data:"arv_number"===a?(await I.findByOtherID(4,n)).data:[],e.results=i.map(((e,t)=>{const a=new I(e);return{index:t,id:a.getID(),name:a.getFullName(),docID:a.getDocID(),birthdate:a.getBirthdate(),arvNum:a.getArvNumber(),npid:a.getNationalID(),gender:a.getGender(),homeDistrict:a.getHomeDistrict(),homeVillage:a.getHomeVillage(),currentDistrict:a.getCurrentDistrict(),currentVillage:a.getCurrentVillage(),isChecked:!1}}))}catch(a){console.log(`${a}`)}},onPatient:(e,t)=>{if("primary"===t)a[0].results.forEach((t=>{t.id===e.id?t.isChecked=!t.isChecked:t.isChecked=!1})),e.isChecked&&a[1].results.forEach((t=>{t.id===e.id&&(t.isChecked=!1)}));else{if(e.isChecked)return e.isChecked=!1;e.isChecked=!a[0].results.some((t=>t.isChecked&&t.id===e.id))}},merge:async()=>{if(await b("Are you sure you want to merge these patients?"))try{var t;const n=a[0].results.find((e=>e.isChecked)),i=await I.mergePatients({primary:{patient_id:n.id,doc_id:n.docID},secondary:a[1].results.filter((e=>e.isChecked)).map((e=>({patient_id:e.id,doc_id:e.docID})))});if(!i.ok)throw new Error("Unable to merge Patients");const l=null===(t=i.data)||void 0===t?void 0:t.patient_id;e.push(`/patient/${l}`)}catch(n){A(`${n}`)}}}}}),N={class:"ion-margin-start"};e("default",n(x,[["render",function(e,t,a,n,o,c){const u=f("ion-button"),m=f("ion-col"),g=f("ion-card-title"),h=f("ion-searchbar"),p=f("ion-card-header"),y=f("patient-card"),b=f("ion-card-content"),v=f("ion-card"),I=f("ion-row"),A=f("ion-grid");return d(),C(A,null,{default:_((()=>[k(I,null,{default:_((()=>[k(m,{size:"12",class:"padding"},{default:_((()=>[l("h2",N,[t[1]||(t[1]=r(" Patient Merging ")),k(u,{class:"ion-float-right ion-margin-end",disabled:!e.enableMergeBtn,onClick:e.merge},{default:_((()=>t[0]||(t[0]=[r(" Merge Selected Patients ")]))),_:1},8,["disabled","onClick"])])])),_:1}),(d(!0),i(V,null,w(e.patients,(t=>(d(),C(m,{size:"6",key:t.category},{default:_((()=>[k(v,null,{default:_((()=>[k(p,{color:"light"},{default:_((()=>[k(g,{class:"ion-margin-bottom"},{default:_((()=>[r(s(t.category)+" patients ",1)])),_:2},1024),k(h,{style:{width:"100%",height:"45px"},class:"box-input ion-no-padding ion-margin-end",placeholder:"Type Name or ARV Number and press enter",modelValue:t.query,"onUpdate:modelValue":e=>t.query=e,onKeyup:D((a=>e.searchPatient(t)),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])])),_:2},1024),k(b,{color:"light",style:{height:"70vh","overflow-y":"auto"}},{default:_((()=>[(d(!0),i(V,null,w(t.results,((a,n)=>(d(),C(y,{onClick:n=>e.onPatient(a,t.category),key:n,patient:a,isActive:a.isChecked},null,8,["onClick","patient","isActive"])))),128))])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})}]]))}}}));
