(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0eabddaa"],{"0b22":function(e,t,o){"use strict";o.d(t,"d",(function(){return a})),o.d(t,"c",(function(){return r})),o.d(t,"b",(function(){return l})),o.d(t,"a",(function(){return c}));o("d9e2");var n=o("2ef0");function a(e,t){return[...new Map(e.filter(Boolean).map(e=>{const o=Array.isArray(t)?t.map(t=>e[t]).join("_"):e[t];return[o,e]})).values()]}function r(e,t){if(t<0||t>=e.length-1)throw new Error("Invalid index or no adjacent items to swap.");return[e[t],e[t+1]]=[e[t+1],e[t]],e}function l(e,t,o){if(Object(n["isEmpty"])(e))return e;const a="desc"===o?-1:1;return e.sort((e,o)=>e[t]>o[t]?1*a:e[t]<o[t]?-1*a:0)}function c(e){const t=e.length;return 0===t?"":1===t?e[0]:`${e.slice(0,t-1).join(", ")} and ${e[t-1]}`}},"0bb4":function(e,t,o){},"2bac":function(e,t,o){"use strict";o("ad6d3")},"3a8c":function(e,t,o){"use strict";function n(e){return parseInt(e.split("-")[2])||0}function a(e){return"<1 year"===e?[0,0]:"90 plus years"===e?[90,1e3]:e.split("-").map(e=>parseInt(e,10))}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return a}))},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return O})),o.d(t,"b",(function(){return g}));o("88a7"),o("271a"),o("5494");var n=o("4971"),a=o("2ef0"),r=o("1c74"),l=o("5a0c"),c=o.n(l),s=o("8baf"),i=o("0da4"),d=o.n(i);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=r["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function m(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function f(e,t,o=!1){return t.map(t=>e.filter(e=>b(e,o)).map(e=>{let o=Object(a["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),u(e.drillable&&Array.isArray(o)?o.length:o)}))}function j(e){const{columns:t,rows:o,quarter:a,period:l,filters:s,safeMode:i}=e,d=m(t,i),u=f(t,Object(n["sortRows"])(o,(null===s||void 0===s?void 0:s.sort)||[]),i);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),a&&(p+="\nQuarter: "+a),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+r["e"].getAppVersion(),p+="\nAPI Version "+r["e"].getApiVersion(),p+="\nSite UUID: "+r["e"].getSiteUUID(),p}function O(e){const t=new Blob([j(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function g(e){const{filename:t,canHorizontalPageBreak:o,columns:a,rows:r,filters:l,safeMode:c}=e,i=[m(a,c)],b=f(a,Object(n["sortRows"])(r,(null===l||void 0===l?void 0:l.sort)||[]),c),j=c?p():{},O=new s["default"]({...j}),g=O.splitTextToSize(u(t),180),y=g.length<=1?20:10*g.length;O.text(g,14,10);const w={startY:y,head:i,body:b};o&&(w.tableWidth="wrap",w.horizontalPageBreak=!0,w.horizontalPageBreakRepeat=0),d()(O,w);const h=t+".pdf";O.save(h)}},"564f":function(e,t,o){"use strict";var n=o("7a23");function a(e,t,o,a,r,l){const c=Object(n["resolveComponent"])("IonIcon"),s=Object(n["resolveComponent"])("IonButton"),i=Object(n["resolveComponent"])("IonButtons"),d=Object(n["resolveComponent"])("IonTitle"),u=Object(n["resolveComponent"])("IonToolbar"),p=Object(n["resolveComponent"])("IonHeader"),b=Object(n["resolveComponent"])("data-table"),m=Object(n["resolveComponent"])("IonContent"),f=Object(n["resolveComponent"])("IonPage");return Object(n["openBlock"])(),Object(n["createBlock"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,{slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var r=o("d867"),l=o("4971"),c=o("ff79"),s=o("da44"),i=o("5a0c"),d=o.n(i),u=o("40e3"),p=Object(n["defineComponent"])({name:"DrilldownTable",components:{DataTable:l["DataTable"],IonButton:r["IonButton"],IonPage:r["IonPage"],IonHeader:r["IonHeader"],IonContent:r["IonContent"],IonToolbar:r["IonToolbar"],IonButtons:r["IonButtons"],IonTitle:r["IonTitle"],IonIcon:r["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(n["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,n,a)=>Object(u["a"])({rows:o,filters:n,columns:a,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:c["close"],modal:s["a"],actionBtns:t}}}),b=o("6b0d"),m=o.n(b);const f=m()(p,[["render",a]]);t["a"]=f},"5ef4":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function a(e,t,o,a,r,l){const c=Object(n["resolveComponent"])("base-report-table");return Object(n["openBlock"])(),Object(n["createBlock"])(c,{title:e.title,"report-icon":"reports/stats.png","report-type":"Clinic",columns:e.columns,rows:e.rows,period:e.period,"show-indices":!0,useDateRangeFilter:"",onCustomFilter:e.getData,onDrilldown:e.onDrilldown,onRegenerate:e.getData},null,8,["title","columns","rows","period","onCustomFilter","onDrilldown","onRegenerate"])}o("14d9"),o("13d5");var r=o("b211"),l=o("8727"),c=o("6cb7"),s=o("23e6"),i=o("564f"),d=o("da44"),u=o("0011"),p=o("9283"),b=o("3a8c"),m=o("0b22"),f=o("b5e4"),j=o("2ef0"),O=Object(n["defineComponent"])({name:"TptOutcomes",components:{BaseReportTable:l["a"]},setup(){const e=Object(n["ref"])(""),t=new c["a"],o=Object(n["ref"])("TPT Outcomes Clinic Report"),a=Object(n["ref"])([]),l={started_tpt_new:"Started TPT (New on ART)",started_tpt_prev:"Started TPT (Previous on ART)",completed_tpt_new:"Completed TPT(New on ART)",completed_tpt_prev:"Completed TPT(Previous on ART)",not_completed_tpt:"Not completed TPT",died:"Died",defaulted:"Defaulted",stopped:"Stopped ART",transfer_out:"Transfered Out",confirmed_tb:"Confirmed TB",pregnant:"Pregnant",breast_feeding:"Breastfeeding",skin_rash:"Skin rash",peripheral_neuropathy:"Peripheral neuropathy",yellow_eyes:"Yellow eyes",nausea:"Nausea",dizziness:"Dizziness"},O=[{path:"age_group",label:"Age Group"},{path:"tpt_type",label:"TPT Type"},...Object.entries(l).map(([e,t])=>({path:e,label:t,drillable:!0,sortable:!1}))],g=async o=>{if(o&&"dateRange"in o){const{startDate:n,endDate:a}=o.dateRange;t.setStartDate(n),t.setEndDate(a),e.value=t.getDateIntervalPeriod()}if(!e.value)return Object(f["e"])("Select report period");await r["a"].show();try{const e=await t.getTtpOutcomes()||[];a.value=Object(m["b"])(e,"tpt_type");const o=w(e);a.value.push({age_group:"All",tpt_type:"Male",...o.males}),a.value.push(...y(o.females))}catch(n){Object(f["e"])("Failed to load report data"),console.error(n)}r["a"].hide()},y=e=>["FP","FNP","FBf"].map(t=>{const o={age_group:"All",tpt_type:t};for(const n in l)o[n]=e[n].filter(o=>"FP"===t?e.pregnant.includes(o):"FBf"===t?e.breast_feeding.includes(o):![...e.pregnant,e.breast_feeding].includes(o));return o}),w=e=>e.reduce((e,t)=>{for(const o in l)o in e.males||(e.males[o]=[]),o in e.females||(e.females[o]=[]),Object(j["isEmpty"])(t[o])||t[o].forEach(t=>{"F"===t.gender?e.females[o].push(t.patient_id):e.males[o].push(t.patient_id)});return e},{males:{},females:{}}),h=async e=>{const t=[{path:"arvNumber",label:"ARV Number",preSort:b["b"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:p["c"].toStandardHisDisplayFormat},{path:"gender",label:"Gender",formatter:u["i"]},{path:"address",label:"Address"},{path:"artStartDate",label:"Art Start Date",formatter:p["c"].toStandardHisDisplayFormat},{path:"tptStartDate",label:"TPT Initiation Date",formatter:p["c"].toStandardHisDisplayFormat},{path:"tptCompleteDate",label:"TPT Completion Date",formatter:p["c"].toStandardHisDisplayFormat}],o=e.row[e.column.path].map(e=>"object"===typeof e&&"patient_id"in e?e.patient_id:e),a=Object(n["ref"])([]);for(const n of o)s["a"].findByID(n).then(e=>{var t,o;const n=new s["a"](e);a.value.push({arvNumber:n.getArvNumber(),birthdate:n.getBirthdate(),gender:n.getGender(),address:""+n.getCurrentVillage(),artStartDate:e.art_start_date,tptStartDate:null===(t=e.tpt_status)||void 0===t?void 0:t.tpt_init_date,tptCompleteDate:null===(o=e.tpt_status)||void 0===o?void 0:o.tpt_complete_date})});await d["a"].show(i["a"],{title:`${e.row.age_group} ${e.column.label} (${e.row.tpt_type})`,columns:t,rows:a.value})};return{rows:a,title:o,columns:O,period:e,getData:g,onDrilldown:h}}}),g=o("6b0d"),y=o.n(g);const w=y()(O,[["render",a]]);t["default"]=w},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},"6cb7":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("5969");class a extends n["a"]{constructor(){super()}getTtpOutcomes(){return this.getReport(`programs/${this.programID}/reports/tpt_outcome`)}getHypertensionReport(){return this.getReport(`programs/${this.programID}/reports/hypertension_report`)}}},7717:function(e,t,o){"use strict";var n=o("7a23");const a={class:"date-picker-wrapper"},r=["value"],l=["value"];function c(e,t,o,c,s,i){const d=Object(n["resolveComponent"])("ion-icon"),u=Object(n["resolveComponent"])("date-picker");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(n["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(n["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,r),Object(n["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(n["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var s=o("d867"),i=o("ff79"),d=o("5db2"),u=o("9283"),p=Object(n["defineComponent"])({name:"DateRangePicker",components:{IonIcon:s["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(n["ref"])({input:"DD/MMM/YYYY"}),a=Object(n["ref"])({visibility:"click"}),r=Object(n["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(o)})});return{arrowForward:i["arrowForward"],range:r,masks:o,popover:a}}}),b=(o("6361"),o("6b0d")),m=o.n(b);const f=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,o){"use strict";var n=o("7a23");const a=["src"],r=["innerHTML"],l=["innerHTML"],c={key:1},s={key:2},i={key:3};function d(e,t,o,d,u,p){const b=Object(n["resolveComponent"])("ion-col"),m=Object(n["resolveComponent"])("ion-chip"),f=Object(n["resolveComponent"])("ion-row"),j=Object(n["resolveComponent"])("ion-grid"),O=Object(n["resolveComponent"])("ion-card-header"),g=Object(n["resolveComponent"])("date-range-picker"),y=Object(n["resolveComponent"])("date-picker"),w=Object(n["resolveComponent"])("data-table"),h=Object(n["resolveComponent"])("ion-card-content"),v=Object(n["resolveComponent"])("ion-card");return Object(n["openBlock"])(),Object(n["createBlock"])(v,{style:{padding:"0 !important"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(n["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,a)]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>{var t;return[Object(n["createElementVNode"])("h1",{innerHTML:e.title},null,8,r),e.subtitle?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(n["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",c," Period: "+Object(n["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",s," Quarter: "+Object(n["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",i,"Date: "+Object(n["toDisplayString"])(e.date),1)):Object(n["createCommentVNode"])("",!0),null!==(t=e.totalClients)&&void 0!==t&&t.length?(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:4,onClick:e.drillTotalClients,color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Total Clients: "+Object(n["toDisplayString"])(e.totalClients.length),1)]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0)]}),_:1})]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(h,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(n["createSlots"])({dateRange:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(n["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(n["withCtx"])(({filter:t})=>[Object(n["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var u=o("d867"),p=o("ad8d"),b=o("5a0c"),m=o.n(b),f=o("5969"),j=o("4971"),O=o("b5e4"),g=o("2ef0"),y=o("40e3"),w=o("7717");const h=["value"];function v(e,t,o,a,r,l){const c=Object(n["resolveComponent"])("date-picker",!0);return Object(n["openBlock"])(),Object(n["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(n["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:e,class:"box date-picker-input"},Object(n["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,h)]),_:1},8,["modelValue","masks"])}var C=o("5db2"),D=o("9283"),k=Object(n["defineComponent"])({name:"DTDatePicker",components:{DatePicker:C["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(n["ref"])({input:"DD/MMM/YYYY"}),a=Object(n["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",D["c"].toStandardHisFormat(e))});return{date:a,masks:o}}}),I=(o("9a25"),o("6b0d")),_=o.n(I);const B=_()(k,[["render",v],["__scopeId","data-v-2b798694"]]);var T=B,V=o("7f35"),R=Object(n["defineComponent"])({name:"BaseReportTable",components:{IonCard:u["IonCard"],IonCardHeader:u["IonCardHeader"],IonCardContent:u["IonCardContent"],IonGrid:u["IonGrid"],IonRow:u["IonRow"],IonCol:u["IonCol"],DataTable:j["DataTable"],DateRangePicker:w["a"],DatePicker:T,IonChip:u["IonChip"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Array},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(n["ref"])({}),a=Object(n["ref"])(""),r=Object(n["computed"])(()=>Object(y["c"])(`\n      ${e.reportType} \n      ${p["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(n["computed"])(()=>{var t,o;const n=[...e.actionButtons];return e.showRefreshButton&&n.push(u()),e.canExportCsv&&n.push(b(r.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&n.push(j(r.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),n}),c=Object(n["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),s=e=>{if("dateRange"in e){if(Object(g["isEmpty"])(o.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(g["isEmpty"])(a.value))return Object(O["e"])("Invalid date");e.date=a.value}if(c.value.every(t=>!1===t.required||(Object(g["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(g["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(g["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},i=e=>{t("drilldown",e)},d=()=>{const o={clients:e.totalClients},n={path:"clients",label:"Total Clients"};t("drilldown",{row:o,column:n})},u=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),b=(e,t,o)=>({label:"CSV",color:"primary",action:async(n,a,r,l)=>{Object(y["a"])({rows:a,filters:r,columns:l,quarter:t,period:o,filename:e})}}),j=(t,o,n)=>({label:"PDF",color:"primary",action:async(a,r,l,c)=>{let s=!1;if(e.useSecureExport){const e=await Object(V["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");s="Secure PDF"===e}Object(y["b"])({rows:r,filters:l,columns:c,quarter:o,period:n,filename:t,safeMode:s})}});return{actionBtns:l,filters:c,onCustomFilter:s,onDrilldown:i,drillTotalClients:d,dayjs:m.a,dateRange:o,pickerDate:a}}});o("2bac");const S=_()(R,[["render",d],["__scopeId","data-v-46af69ea"]]);t["a"]=S},"9a25":function(e,t,o){"use strict";o("5f0b")},ad6d3:function(e,t,o){},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("d867");const a={async show(e,t,o="custom-modal",a=!0){const r=await n["modalController"].create({component:e,cssClass:o,backdropDismiss:a,componentProps:t});r.present();const{data:l}=await r.onWillDismiss();if(l)return l},async hide(e){await n["modalController"].dismiss(e)}}}}]);
//# sourceMappingURL=chunk-0eabddaa.6663b2de.js.map