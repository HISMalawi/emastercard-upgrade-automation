(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21327ecf"],{"3a8c":function(e,t,o){"use strict";function a(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return a}))},"40e3":function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var a=o("4971"),n=o("2ef0"),r=o("1c74"),l=o("5a0c"),s=o.n(l);function c(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function i({columns:e,rows:t,quarter:o,period:l,filters:i}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(a["sortRows"])(t,(null===i||void 0===i?void 0:i.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let o=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),c(e.drillable&&Array.isArray(o)?o.length:o)}).join(",")).join("\n"),d+="\nDate Created:  "+s()().format("DD/MMM/YYYY HH:MM:ss"),o&&(d+="\nQuarter: "+o),l&&(d+="\nQuarter: "+l),d+="\ne-Mastercard Version : "+r["e"].getAppVersion(),d+="\nAPI Version "+r["e"].getApiVersion(),d+="\nSite UUID: "+r["e"].getSiteUUID(),d}function d(e){const t=new Blob([i(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}},"564f":function(e,t,o){"use strict";var a=o("7a23");function n(e,t,o,n,r,l){const s=Object(a["resolveComponent"])("IonIcon"),c=Object(a["resolveComponent"])("IonButton"),i=Object(a["resolveComponent"])("IonButtons"),d=Object(a["resolveComponent"])("IonTitle"),u=Object(a["resolveComponent"])("IonToolbar"),p=Object(a["resolveComponent"])("IonHeader"),b=Object(a["resolveComponent"])("data-table"),m=Object(a["resolveComponent"])("IonContent"),f=Object(a["resolveComponent"])("IonPage");return Object(a["openBlock"])(),Object(a["createBlock"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{slot:"end"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(c,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var r=o("d867"),l=o("4971"),s=o("ff79"),c=o("da44"),i=o("5a0c"),d=o.n(i),u=o("40e3"),p=Object(a["defineComponent"])({name:"DrilldownTable",components:{DataTable:l["DataTable"],IonButton:r["IonButton"],IonPage:r["IonPage"],IonHeader:r["IonHeader"],IonContent:r["IonContent"],IonToolbar:r["IonToolbar"],IonButtons:r["IonButtons"],IonTitle:r["IonTitle"],IonIcon:r["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(a["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,a,n)=>Object(u["a"])({rows:o,filters:a,columns:n,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:s["close"],modal:c["a"],actionBtns:t}}}),b=o("d959"),m=o.n(b);const f=m()(p,[["render",n]]);t["a"]=f},"5ef4":function(e,t,o){"use strict";o.r(t);var a=o("7a23");function n(e,t,o,n,r,l){const s=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{title:e.title,"report-icon":"reports/stats.png",columns:e.columns,rows:e.rows,period:e.period,"show-indices":!0,useDateRangeFilter:"",onCustomFilter:e.getData,onDrilldown:e.onDrilldown,onRegenerate:e.onRegenerate},null,8,["title","columns","rows","period","onCustomFilter","onDrilldown","onRegenerate"])}o("14d9");var r=o("b211"),l=o("8727"),s=o("6cb7"),c=o("23e6"),i=o("564f"),d=o("da44"),u=o("5a0c"),p=o.n(u),b=o("0011"),m=o("9283"),f=o("3a8c"),j=Object(a["defineComponent"])({name:"TptOutcomes",components:{BaseReportTable:l["a"]},setup(){const e=Object(a["ref"])(""),t=Object(a["ref"])("TPT Outcomes Clinic Report"),o=Object(a["ref"])([]),n=[{path:"age_group",label:"Age Group"},{path:"tpt_type",label:"TPT Type"},{path:"started_tpt",label:"Started TPT",drillable:!0,sortable:!1},{path:"completed_tpt",label:"Completed TPT",drillable:!0,sortable:!1},{path:"not_completed_tpt",label:"Not completed TPT",drillable:!0,sortable:!1},{path:"died",label:"Died",drillable:!0,sortable:!1},{path:"defaulted",label:"Defaulted",drillable:!0,sortable:!1},{path:"stopped",label:"Stopped ART",drillable:!0,sortable:!1},{path:"transfer_out",label:"Transfered Out",drillable:!0,sortable:!1},{path:"confirmed_tb",label:"Confirmed TB",drillable:!0,sortable:!1},{path:"pregnant",label:"Pregnant",drillable:!0,sortable:!1},{path:"breast_feeding",label:"Breastfeeding",drillable:!0,sortable:!1},{path:"skin_rash",label:"Skin rash",drillable:!0,sortable:!1},{path:"peripheral_neuropathy",label:"Peripheral neuropathy",drillable:!0,sortable:!1},{path:"yellow_eyes",label:"Yellow eyes",drillable:!0,sortable:!1},{path:"nausea",label:"Nausea",drillable:!0,sortable:!1},{path:"dizziness",label:"Dizziness",drillable:!0,sortable:!1}],l=async({dateRange:t})=>{await r["a"].show();const a=new s["a"];a.setStartDate(t.startDate),a.setEndDate(t.endDate),e.value=a.getDateIntervalPeriod();const n=await a.getTtpOutcomes()||[];o.value=n.sort((e,t)=>e.tpt_type>t.tpt_type?1:0),await r["a"].hide()},u=async()=>{const[t,o]=e.value.split("-");t&&o&&l({dateRange:{startDate:p()(t).format("YYYY-MM-DD"),endDate:p()(o).format("YYYY-MM-DD")}})},j=async e=>{const t=[{path:"arvNumber",label:"ARV Number",preSort:f["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:m["c"].toStandardHisDisplayFormat},{path:"gender",label:"Gender",formatter:b["g"]},{path:"address",label:"Address"},{path:"artStartDate",label:"Art Start Date",formatter:m["c"].toStandardHisDisplayFormat},{path:"tptStartDate",label:"TPT Initiation Date",formatter:m["c"].toStandardHisDisplayFormat},{path:"tptCompleteDate",label:"TPT Completion Date",formatter:m["c"].toStandardHisDisplayFormat}],o=e.row[e.column.path],n=Object(a["ref"])([]);for(const a of o)c["a"].findByID(a).then(e=>{var t,o;const a=new c["a"](e);n.value.push({arvNumber:a.getArvNumber(),birthdate:a.getBirthdate(),gender:a.getGender(),address:""+a.getCurrentVillage(),artStartDate:e.art_start_date,tptStartDate:null===(t=e.tpt_status)||void 0===t?void 0:t.tpt_init_date,tptCompleteDate:null===(o=e.tpt_status)||void 0===o?void 0:o.tpt_complete_date})});await d["a"].show(i["a"],{title:`${e.row.age_group} ${e.column.label} (${e.row.tpt_type})`,columns:t,rows:n.value})};return{rows:o,title:t,columns:n,period:e,getData:l,onDrilldown:j,onRegenerate:u}}}),O=o("d959"),y=o.n(O);const h=y()(j,[["render",n]]);t["default"]=h},"6cb7":function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o("5969");class n extends a["a"]{constructor(){super()}getTtpOutcomes(){return this.getReport(`programs/${this.programID}/reports/tpt_outcome`)}}},8727:function(e,t,o){"use strict";var a=o("7a23");const n=["src"],r=["innerHTML"],l=["innerHTML"],s={key:1},c={key:2},i={key:3},d={key:4};function u(e,t,o,u,p,b){const m=Object(a["resolveComponent"])("ion-col"),f=Object(a["resolveComponent"])("ion-row"),j=Object(a["resolveComponent"])("ion-grid"),O=Object(a["resolveComponent"])("ion-card-header"),y=Object(a["resolveComponent"])("data-table"),h=Object(a["resolveComponent"])("ion-card-content"),w=Object(a["resolveComponent"])("ion-card"),g=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(w,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,r),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",s," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i,"Date: "+Object(a["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",d,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(h,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({_:2},[Object(a["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,o,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),m=o("5a0c"),f=o.n(m),j=o("8d56"),O=o("5969"),y=o("4971"),h=o("b5e4"),w=o("2ef0"),g=o("40e3"),C=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:j["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:y["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(a["computed"])(()=>`${b["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),n=Object(a["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a,n,r)=>{var l;return Object(g["a"])({rows:a,filters:n,columns:r,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:o.value})}}),a}),r=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:O["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),l=e=>"dateRange"in e&&new Date(e.dateRange.startDate)>new Date(e.dateRange.endDate)?Object(h["e"])("Invalid date range"):r.value.every(t=>!1===t.required||(Object(w["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(w["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(w["isEmpty"])(e))))?t("customFilter",e):void Object(h["e"])("Invalid filters"),s=e=>{t("drilldown",e)};return{actionBtns:n,filters:r,onCustomFilter:l,onDrilldown:s,dayjs:f.a}}}),D=o("d959"),v=o.n(D);const I=v()(C,[["render",u]]);t["a"]=I},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o("d867");const n={async show(e,t,o="custom-modal",n=!0){const r=await a["modalController"].create({component:e,cssClass:o,backdropDismiss:n,componentProps:t});r.present();const{data:l}=await r.onWillDismiss();if(l)return l},async hide(e){await a["modalController"].dismiss(e)}}}}]);
//# sourceMappingURL=chunk-21327ecf.71d632ec.js.map