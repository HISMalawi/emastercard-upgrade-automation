(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-49e291dc"],{"0a4e":function(e,t,c){},"4e35":function(e,t,c){},6967:function(e,t,c){"use strict";c("0a4e")},7769:function(e,t,c){"use strict";c("4e35")},b111:function(e,t,c){"use strict";var n=c("7a23");function a(e,t,c,a,r,o){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:Object(n["normalizeClass"])(["his-card clickable",e.stateClass])},[Object(n["createElementVNode"])("li",null,[Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" NPID : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.npid),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Arv# : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.arvNum),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Name : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.name),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Birth date : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.birthdate),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Gender : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.gender),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Home District : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.homeDistrict),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Home Village : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.homeVillage),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Current District : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.currentDistrict),1)]),Object(n["createElementVNode"])("ul",null,[Object(n["createTextVNode"])(" Current Village : "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.patient.currentVillage),1)])])],2)}var r=Object(n["defineComponent"])({props:{patient:{type:Object,required:!0},isActive:{type:Boolean}},computed:{stateClass(){return{"active-card-color":this.isActive,"inactive-card-color":!this.isActive}}}}),o=(c("6967"),c("6b0d")),i=c.n(o);const l=i()(r,[["render",a],["__scopeId","data-v-154d9c56"]]);t["a"]=l},d725:function(e,t,c){"use strict";c.r(t);var n=c("7a23");const a={class:"ion-margin-start"};function r(e,t,c,r,o,i){const l=Object(n["resolveComponent"])("ion-button"),d=Object(n["resolveComponent"])("ion-col"),s=Object(n["resolveComponent"])("ion-card-title"),b=Object(n["resolveComponent"])("ion-searchbar"),u=Object(n["resolveComponent"])("ion-card-header"),m=Object(n["resolveComponent"])("patient-card"),O=Object(n["resolveComponent"])("ion-card-content"),j=Object(n["resolveComponent"])("ion-card"),p=Object(n["resolveComponent"])("ion-row"),h=Object(n["resolveComponent"])("ion-grid");return Object(n["openBlock"])(),Object(n["createBlock"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,{size:"12",class:"padding"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("h2",a,[Object(n["createTextVNode"])(" Patient Merging "),Object(n["createVNode"])(l,{class:"ion-float-right ion-margin-end",disabled:!e.enableMergeBtn,onClick:e.merge},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Merge Selected Patients ")]),_:1},8,["disabled","onClick"])])]),_:1}),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.patients,t=>(Object(n["openBlock"])(),Object(n["createBlock"])(d,{size:"6",key:t.category},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,{color:"light"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{class:"ion-margin-bottom"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(t.category)+" patients ",1)]),_:2},1024),Object(n["createVNode"])(b,{style:{width:"100%",height:"45px"},class:"box-input ion-no-padding ion-margin-end",placeholder:"Type Name or ARV Number and press enter",modelValue:t.query,"onUpdate:modelValue":e=>t.query=e,onKeyup:Object(n["withKeys"])(c=>e.searchPatient(t),["enter"])},null,8,["modelValue","onUpdate:modelValue","onKeyup"])]),_:2},1024),Object(n["createVNode"])(O,{color:"light",style:{height:"70vh","overflow-y":"auto"}},{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(t.results,(c,a)=>(Object(n["openBlock"])(),Object(n["createBlock"])(m,{onClick:n=>e.onPatient(c,t.category),key:a,patient:c,isActive:c.isChecked},null,8,["onClick","patient","isActive"]))),128))]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}c("14d9");var o=c("d867"),i=c("23e6"),l=c("cc74"),d=c("6605"),s=c("b111"),b=c("b5e4"),u=Object(n["defineComponent"])({components:{IonGrid:o["IonGrid"],IonRow:o["IonRow"],IonCol:o["IonCol"],PatientCard:s["a"],IonSearchbar:o["IonSearchbar"]},setup(){const e=Object(d["i"])(),t=Object(n["reactive"])([{category:"primary",query:"",results:[]},{category:"secondary",query:"",results:[]}]),c=Object(n["computed"])(()=>t.every(e=>e.results.length>0&&e.results.some(e=>e.isChecked))),a=async e=>{if(e.match(/^(\w+-ARV-\w+)$/))return{type:"arv_number",value:e};if(e.match(/^(\d+)$/)){const t=await l["b"].sitePrefix();return{type:"arv_number",value:`${t}-ARV-${e}`}}return{type:"name",value:e}},r=e=>{const t={},c=e.split(" ").filter(e=>/\S/.test(e));return c.length>0&&(t["given_name"]=c[0],c[1]&&(t["family_name"]=c[1]),c[2]&&(t["middle_name"]=c[1],t["family_name"]=c[2])),t},o=async e=>{if(e.query)try{const{type:t,value:c}=await a(e.query),n="name"===t?await i["a"].search(r(c)):"arv_number"===t?await i["a"].findByOtherID(4,c):[];e.results=n.map((e,t)=>{const c=new i["a"](e);return{index:t,id:c.getID(),name:c.getFullName(),docID:c.getDocID(),birthdate:c.getBirthdate(),arvNum:c.getArvNumber(),npid:c.getNationalID(),gender:c.getGender(),homeDistrict:c.getHomeDistrict(),homeVillage:c.getHomeVillage(),currentDistrict:c.getCurrentDistrict(),currentVillage:c.getCurrentVillage(),isChecked:!1}})}catch(t){console.log(""+t)}},s=(e,c)=>{if("primary"===c)t[0].results.forEach(t=>{t.id===e.id?t.isChecked=!t.isChecked:t.isChecked=!1}),e.isChecked&&t[1].results.forEach(t=>{t.id===e.id&&(t.isChecked=!1)});else{if(e.isChecked)return e.isChecked=!1;e.isChecked=!t[0].results.some(t=>t.isChecked&&t.id===e.id)}},u=async()=>{if(await Object(b["a"])("Are you sure you want to merge these patients?"))try{const c=t[0].results.find(e=>e.isChecked),n=await i["a"].mergePatients({primary:{patient_id:c.id,doc_id:c.docID},secondary:t[1].results.filter(e=>e.isChecked).map(e=>({patient_id:e.id,doc_id:e.docID}))});e.push({name:"EMC Mastercard",params:{patientId:n["patient_id"]}})}catch(c){Object(b["c"])(""+c)}};return{patients:t,enableMergeBtn:c,searchPatient:o,onPatient:s,merge:u}}}),m=(c("7769"),c("6b0d")),O=c.n(m);const j=O()(u,[["render",r]]);t["default"]=j}}]);
//# sourceMappingURL=chunk-49e291dc.efb546d2.js.map