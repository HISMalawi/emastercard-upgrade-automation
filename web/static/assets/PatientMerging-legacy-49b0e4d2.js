System.register(["./index-legacy-91295254.js","./patient_service-legacy-c42371d7.js","./toasts-legacy-ec8222ac.js","./patient_identifier_service-legacy-5f047932.js","./his_date-legacy-87db423b.js","./Date-legacy-2e7df426.js"],(function(e,t){"use strict";var a,i,n,r,l,s,o,d,c,u,g,h,m,p,y,b,v,f,C,_,k,w,D,V,I,A;return{setters:[e=>{a=e.d,i=e._,n=e.c,r=e.a,l=e.b,s=e.t,o=e.ag,d=e.o,c=e.i,u=e.j,g=e.k,h=e.ah,m=e.f,p=e.ae,y=e.G,b=e.ai,v=e.E,f=e.K,C=e.h,_=e.w,k=e.e,w=e.M,D=e.z,V=e.J},e=>{I=e.P},e=>{A=e.b},null,null,null],execute:function(){var t=document.createElement("style");t.textContent=".his-card[data-v-db98b469]{padding:0;margin:3%}li[data-v-db98b469]{padding:0;margin:0;list-style:none}.box{border-color:#a3a3a3;border-width:thin;border-style:solid;border-radius:3px}.searchBtn{height:50px!important;margin-top:0;margin-bottom:0;margin-right:.5rem}.sc-ion-searchbar-md-h{--box-shadow: none !important}\n",document.head.appendChild(t);const P=a({props:{patient:{type:Object,required:!0},isActive:{type:Boolean}},computed:{stateClass(){return{"active-card-color":this.isActive,"inactive-card-color":!this.isActive}}}}),x=a({components:{IonGrid:c,IonRow:u,IonCol:g,PatientCard:i(P,[["render",function(e,t,a,i,c,u){return d(),n("div",{class:o(["his-card clickable",e.stateClass])},[r("li",null,[r("ul",null,[t[0]||(t[0]=l(" NPID : ")),r("b",null,s(e.patient.npid),1)]),r("ul",null,[t[1]||(t[1]=l(" Arv# : ")),r("b",null,s(e.patient.arvNum),1)]),r("ul",null,[t[2]||(t[2]=l(" Name : ")),r("b",null,s(e.patient.name),1)]),r("ul",null,[t[3]||(t[3]=l(" Birth date : ")),r("b",null,s(e.patient.birthdate),1)]),r("ul",null,[t[4]||(t[4]=l(" Gender : ")),r("b",null,s(e.patient.gender),1)]),r("ul",null,[t[5]||(t[5]=l(" Home District : ")),r("b",null,s(e.patient.homeDistrict),1)]),r("ul",null,[t[6]||(t[6]=l(" Home Village : ")),r("b",null,s(e.patient.homeVillage),1)]),r("ul",null,[t[7]||(t[7]=l(" Current District : ")),r("b",null,s(e.patient.currentDistrict),1)]),r("ul",null,[t[8]||(t[8]=l(" Current Village : ")),r("b",null,s(e.patient.currentVillage),1)])])],2)}],["__scopeId","data-v-db98b469"]]),IonSearchbar:h},setup(){const e=m(),{facility:t}=v(),a=p([{category:"primary",query:"",results:[]},{category:"secondary",query:"",results:[]}]),i=y((()=>a.every((e=>e.results.length>0&&e.results.some((e=>e.isChecked))))));return{patients:a,enableMergeBtn:i,searchPatient:async e=>{if(e.query)try{const{type:a,value:i}=await(async e=>e.match(/^(\w+-ARV-\w+)$/)?{type:"arv_number",value:e}:e.match(/^(\d+)$/)?{type:"arv_number",value:`${t.code}-ARV-${e}`}:{type:"name",value:e})(e.query);let n;n="name"===a?(await I.search((e=>{const t={},a=e.split(" ").filter((e=>/\S/.test(e)));return a.length>0&&(t.given_name=a[0],a[1]&&(t.family_name=a[1]),a[2]&&(t.middle_name=a[1],t.family_name=a[2])),t})(i))).data:"arv_number"===a?(await I.findByOtherID(4,i)).data:[],e.results=n.map(((e,t)=>{const a=new I(e);return{index:t,id:a.getID(),name:a.getFullName(),docID:a.getDocID(),birthdate:a.getBirthdate(),arvNum:a.getArvNumber(),npid:a.getNationalID(),gender:a.getGender(),homeDistrict:a.getHomeDistrict(),homeVillage:a.getHomeVillage(),currentDistrict:a.getCurrentDistrict(),currentVillage:a.getCurrentVillage(),isChecked:!1}}))}catch(a){console.log(`${a}`)}},onPatient:(e,t)=>{if("primary"===t)a[0].results.forEach((t=>{t.id===e.id?t.isChecked=!t.isChecked:t.isChecked=!1})),e.isChecked&&a[1].results.forEach((t=>{t.id===e.id&&(t.isChecked=!1)}));else{if(e.isChecked)return e.isChecked=!1;e.isChecked=!a[0].results.some((t=>t.isChecked&&t.id===e.id))}},merge:async()=>{if(await b("Are you sure you want to merge these patients?"))try{var t;const i=a[0].results.find((e=>e.isChecked)),n=await I.mergePatients({primary:{patient_id:i.id,doc_id:i.docID},secondary:a[1].results.filter((e=>e.isChecked)).map((e=>({patient_id:e.id,doc_id:e.docID})))});if(!n.ok)throw new Error("Unable to merge Patients");const r=null===(t=n.data)||void 0===t?void 0:t.patient_id;e.push(`/patient/${r}`)}catch(i){A(`${i}`)}}}}}),j={class:"ion-margin-start"};e("default",i(x,[["render",function(e,t,a,i,o,c){const u=f("ion-button"),g=f("ion-col"),h=f("ion-card-title"),m=f("ion-searchbar"),p=f("ion-card-header"),y=f("patient-card"),b=f("ion-card-content"),v=f("ion-card"),I=f("ion-row"),A=f("ion-grid");return d(),C(A,null,{default:_((()=>[k(I,null,{default:_((()=>[k(g,{size:"12",class:"padding"},{default:_((()=>[r("h2",j,[t[1]||(t[1]=l(" Patient Merging ")),k(u,{class:"ion-float-right ion-margin-end",disabled:!e.enableMergeBtn,onClick:e.merge},{default:_((()=>t[0]||(t[0]=[l(" Merge Selected Patients ")]))),_:1},8,["disabled","onClick"])])])),_:1}),(d(!0),n(V,null,w(e.patients,(t=>(d(),C(g,{size:"6",key:t.category},{default:_((()=>[k(v,null,{default:_((()=>[k(p,{color:"light"},{default:_((()=>[k(h,{class:"ion-margin-bottom"},{default:_((()=>[l(s(t.category)+" patients ",1)])),_:2},1024),k(m,{style:{width:"100%",height:"45px"},class:"box-input ion-no-padding ion-margin-end",placeholder:"Type Name or ARV Number and press enter",modelValue:t.query,"onUpdate:modelValue":e=>t.query=e,onKeyup:D((a=>e.searchPatient(t)),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])])),_:2},1024),k(b,{color:"light",style:{height:"70vh","overflow-y":"auto"}},{default:_((()=>[(d(!0),n(V,null,w(t.results,((a,i)=>(d(),C(y,{onClick:i=>e.onPatient(a,t.category),key:i,patient:a,isActive:a.isChecked},null,8,["onClick","patient","isActive"])))),128))])),_:2},1024)])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})}]]))}}}));
