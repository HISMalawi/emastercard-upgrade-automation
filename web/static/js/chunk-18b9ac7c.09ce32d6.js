(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18b9ac7c"],{"0921":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function a(e,t,o,a,r,l){const c=Object(n["resolveComponent"])("base-report-table");return Object(n["openBlock"])(),Object(n["createBlock"])(c,{title:e.title,"report-icon":"reports/retention.png",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.getData,onDrilldown:e.onDrilldown,onRegenerate:e.onRegenerate},null,8,["title","columns","rows","period","onCustomFilter","onDrilldown","onRegenerate"])}o("14d9");var r=o("b211"),l=o("8727"),c=o("23e6"),s=o("564f"),i=o("da44"),d=o("5a0c"),u=o.n(d),p=o("0011"),b=o("9283"),m=o("3a8c"),f=o("ad8d"),j=o("2ef0"),O=Object(n["defineComponent"])({name:"ClinicRetention",components:{BaseReportTable:l["a"]},setup(){const{toStandardHisDisplayFormat:e}=b["c"],t=Object(n["ref"])(""),o=Object(n["ref"])("Clinic Retention Report"),a=Object(n["ref"])([]),l=[{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:p["g"]},{path:"initiated_1",label:"Initiated one month",drillable:!0,sortable:!1},{path:"completed_1",label:"Completed one month",drillable:!0,sortable:!1},{path:"initiated_3",label:"Initiated Three months",drillable:!0,sortable:!1},{path:"completed_3",label:"Completed Three months",drillable:!0,sortable:!1},{path:"initiated_6",label:"Initiated Six months",drillable:!0,sortable:!1},{path:"completed_6",label:"Completed Six months",drillable:!0,sortable:!1}],d=(e,t,o,n,a)=>Object(j["get"])(e,`${t}.${a}`,[]).filter(e=>e.gender===o&&e.age_group===n).map(e=>e.patient_id),O=(e,t=["F","M"])=>{const o=[];return t.forEach(t=>{f["a"].forEach(n=>{const a={age_group:n,gender:t};Object.keys(e).forEach(o=>{a["initiated_"+o]=d(e,o,t,n,"all"),a["completed_"+o]=d(e,o,t,n,"retained")}),o.push(a)})}),o},w=async({dateRange:e})=>{await r["a"].show();const o=new f["b"];o.setStartDate(e.startDate),o.setEndDate(e.endDate),t.value=o.getDateIntervalPeriod();const n=await o.getClientRentention();a.value=O(n),await r["a"].hide()},y=async()=>{const[e,o]=t.value.split("-");e&&o&&w({dateRange:{startDate:u()(e).format("YYYY-MM-DD"),endDate:u()(o).format("YYYY-MM-DD")}})},g=async t=>{const o=[{path:"arv_number",label:"ARV Number",preSort:m["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:e},{path:"gender",label:"Gender",formatter:p["g"]},{path:"address",label:"Address"}],n=t.row[t.column.path],a=[];for(const e of n){const t=await c["a"].findByID(e),o=new c["a"](t);a.push({arv_number:o.getArvNumber(),birthdate:o.getBirthdate(),gender:o.getGender(),address:""+o.getCurrentVillage()})}await i["a"].show(s["a"],{title:`${t.row.age_group} ${t.column.label} ${t.row.gender}s`,columns:o,rows:a})};return{rows:a,title:o,columns:l,period:t,getData:w,onDrilldown:g,onRegenerate:y}}}),w=o("d959"),y=o.n(w);const g=y()(O,[["render",a]]);t["default"]=g},"3a8c":function(e,t,o){"use strict";function n(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return n}))},"40e3":function(e,t,o){"use strict";o.d(t,"a",(function(){return d}));var n=o("4971"),a=o("2ef0"),r=o("1c74"),l=o("5a0c"),c=o.n(l);function s(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function i({columns:e,rows:t,quarter:o,period:l,filters:i}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(n["sortRows"])(t,(null===i||void 0===i?void 0:i.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let o=Object(a["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),s(e.drillable&&Array.isArray(o)?o.length:o)}).join(",")).join("\n"),d+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),o&&(d+="\nQuarter: "+o),l&&(d+="\nQuarter: "+l),d+="\ne-Mastercard Version : "+r["e"].getAppVersion(),d+="\nAPI Version "+r["e"].getApiVersion(),d+="\nSite UUID: "+r["e"].getSiteUUID(),d}function d(e){const t=new Blob([i(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}},"564f":function(e,t,o){"use strict";var n=o("7a23");function a(e,t,o,a,r,l){const c=Object(n["resolveComponent"])("IonIcon"),s=Object(n["resolveComponent"])("IonButton"),i=Object(n["resolveComponent"])("IonButtons"),d=Object(n["resolveComponent"])("IonTitle"),u=Object(n["resolveComponent"])("IonToolbar"),p=Object(n["resolveComponent"])("IonHeader"),b=Object(n["resolveComponent"])("data-table"),m=Object(n["resolveComponent"])("IonContent"),f=Object(n["resolveComponent"])("IonPage");return Object(n["openBlock"])(),Object(n["createBlock"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,{slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var r=o("d867"),l=o("4971"),c=o("ff79"),s=o("da44"),i=o("5a0c"),d=o.n(i),u=o("40e3"),p=Object(n["defineComponent"])({name:"DrilldownTable",components:{DataTable:l["DataTable"],IonButton:r["IonButton"],IonPage:r["IonPage"],IonHeader:r["IonHeader"],IonContent:r["IonContent"],IonToolbar:r["IonToolbar"],IonButtons:r["IonButtons"],IonTitle:r["IonTitle"],IonIcon:r["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(n["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,n,a)=>Object(u["a"])({rows:o,filters:n,columns:a,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:c["close"],modal:s["a"],actionBtns:t}}}),b=o("d959"),m=o.n(b);const f=m()(p,[["render",a]]);t["a"]=f},8727:function(e,t,o){"use strict";var n=o("7a23");const a=["src"],r=["innerHTML"],l=["innerHTML"],c={key:1},s={key:2},i={key:3},d={key:4};function u(e,t,o,u,p,b){const m=Object(n["resolveComponent"])("ion-col"),f=Object(n["resolveComponent"])("ion-row"),j=Object(n["resolveComponent"])("ion-grid"),O=Object(n["resolveComponent"])("ion-card-header"),w=Object(n["resolveComponent"])("data-table"),y=Object(n["resolveComponent"])("ion-card-content"),g=Object(n["resolveComponent"])("ion-card"),h=Object(n["resolveComponent"])("Layout");return Object(n["openBlock"])(),Object(n["createBlock"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,{style:{padding:"0 !important"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(n["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,a)]),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("h1",{innerHTML:e.title},null,8,r),e.subtitle?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(n["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",c," Period: "+Object(n["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",s," Quarter: "+Object(n["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",i,"Date: "+Object(n["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(n["createCommentVNode"])("",!0),e.totalClients?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",d,"Total Clients: "+Object(n["toDisplayString"])(e.totalClients),1)):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(y,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(n["createSlots"])({_:2},[Object(n["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(n["withCtx"])(({filter:t})=>[Object(n["renderSlot"])(e.$slots,o,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),m=o("5a0c"),f=o.n(m),j=o("8d56"),O=o("5969"),w=o("4971"),y=o("b5e4"),g=o("2ef0"),h=o("40e3"),C=Object(n["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:j["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:w["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(n["computed"])(()=>`${b["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),a=Object(n["computed"])(()=>{const n=[...e.actionButtons];return e.showRefreshButton&&n.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&n.push({label:"CSV",color:"primary",action:async(t,n,a,r)=>{var l;return Object(h["a"])({rows:n,filters:a,columns:r,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:o.value})}}),n}),r=Object(n["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:O["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),l=e=>"dateRange"in e&&new Date(e.dateRange.startDate)>new Date(e.dateRange.endDate)?Object(y["e"])("Invalid date range"):r.value.every(t=>!1===t.required||(Object(g["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(g["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(g["isEmpty"])(e))))?t("customFilter",e):void Object(y["e"])("Invalid filters"),c=e=>{t("drilldown",e)};return{actionBtns:a,filters:r,onCustomFilter:l,onDrilldown:c,dayjs:f.a}}}),D=o("d959"),v=o.n(D);const I=v()(C,[["render",u]]);t["a"]=I},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("d867");const a={async show(e,t,o="custom-modal",a=!0){const r=await n["modalController"].create({component:e,cssClass:o,backdropDismiss:a,componentProps:t});r.present();const{data:l}=await r.onWillDismiss();if(l)return l},async hide(e){await n["modalController"].dismiss(e)}}}}]);
//# sourceMappingURL=chunk-18b9ac7c.09ce32d6.js.map