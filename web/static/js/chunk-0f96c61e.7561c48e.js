(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f96c61e"],{"0b22":function(e,t,n){"use strict";n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return i}));n("d9e2");var o=n("2ef0");function r(e,t){return[...new Map(e.filter(Boolean).map(e=>{const n=Array.isArray(t)?t.map(t=>e[t]).join("_"):e[t];return[n,e]})).values()]}function a(e,t){if(t<0||t>=e.length-1)throw new Error("Invalid index or no adjacent items to swap.");return[e[t],e[t+1]]=[e[t+1],e[t]],e}function i(e,t,n){if(Object(o["isEmpty"])(e))return e;const r="desc"===n?-1:1;return e.sort((e,n)=>e[t]>n[t]?1*r:e[t]<n[t]?-1*r:0)}},"0bb4":function(e,t,n){},2453:function(e,t,n){"use strict";n("b502")},"2ef6":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("ade3"),r=n("5969"),a=n("ad8d");class i extends r["a"]{constructor(){super(),Object(o["a"])(this,"gender",void 0),Object(o["a"])(this,"ageGroup",void 0),Object(o["a"])(this,"initialize",void 0),Object(o["a"])(this,"rebuildOutcome",void 0),this.gender="",this.ageGroup=a["a"][0],this.initialize=!0,this.rebuildOutcome=!0}async init(){this.initialize=!0;const e=await this.getCohort();return!(!e||"created"!==e.temp_disaggregated)&&(this.initialize=!1,!0)}setAgeGroup(e){this.ageGroup=e}setInitialization(e){this.initialize=e}setRebuildOutcome(e){this.rebuildOutcome=e}setGender(e){this.gender=e}getGender(){return this.gender}getCohort(){return this.getReport("cohort_disaggregated",{age_group:""+this.ageGroup,rebuild_outcome:""+this.rebuildOutcome,initialize:""+this.initialize})}getTxIpt(){return this.getReport("clients_given_ipt",{gender:this.gender,age_group:""+this.ageGroup})}getTxCurrTB(){return this.getReport("screened_for_tb",{gender:this.gender,age_group:""+this.ageGroup})}getRegimenDistribution(){return this.getReport("disaggregated_regimen_distribution",{gender:""+this.gender,age_group:""+this.ageGroup})}}},"3a8c":function(e,t,n){"use strict";function o(e){return parseInt(e.split("-")[2])||0}n.d(t,"a",(function(){return o}))},"40e3":function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return u}));var o=n("4971"),r=n("2ef0"),a=n("1c74"),i=n("5a0c"),c=n.n(i);function l(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function s({columns:e,rows:t,quarter:n,period:i,filters:s}){let u=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return u+="\n",u+=Object(o["sortRows"])(t,(null===s||void 0===s?void 0:s.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let n=Object(r["get"])(t,e.path);return"function"===typeof e.formatter&&n&&(n=e.formatter(n,t)),l(e.drillable&&Array.isArray(n)?n.length:n)}).join(",")).join("\n"),u+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),n&&(u+="\nQuarter: "+n),i&&(u+="\nQuarter: "+i),u+="\ne-Mastercard Version : "+a["e"].getAppVersion(),u+="\nAPI Version "+a["e"].getApiVersion(),u+="\nSite UUID: "+a["e"].getSiteUUID(),u}function u(e){const t=new Blob([s(e)],{type:"text/csv;charset=utf-8;"}),n=document.createElement("a");n.href=window.URL.createObjectURL(t),n.setAttribute("download",e.filename+".csv"),document.body.appendChild(n),n.click(),document.body.removeChild(n)}},"564f":function(e,t,n){"use strict";var o=n("7a23");function r(e,t,n,r,a,i){const c=Object(o["resolveComponent"])("IonIcon"),l=Object(o["resolveComponent"])("IonButton"),s=Object(o["resolveComponent"])("IonButtons"),u=Object(o["resolveComponent"])("IonTitle"),d=Object(o["resolveComponent"])("IonToolbar"),p=Object(o["resolveComponent"])("IonHeader"),b=Object(o["resolveComponent"])("data-table"),m=Object(o["resolveComponent"])("IonContent"),g=Object(o["resolveComponent"])("IonPage");return Object(o["openBlock"])(),Object(o["createBlock"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(s,{slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}n("14d9");var a=n("d867"),i=n("4971"),c=n("ff79"),l=n("da44"),s=n("5a0c"),u=n.n(s),d=n("40e3"),p=Object(o["defineComponent"])({name:"DrilldownTable",components:{DataTable:i["DataTable"],IonButton:a["IonButton"],IonPage:a["IonPage"],IonHeader:a["IonHeader"],IonContent:a["IonContent"],IonToolbar:a["IonToolbar"],IonButtons:a["IonButtons"],IonTitle:a["IonTitle"],IonIcon:a["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(o["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,n,o,r)=>Object(d["a"])({rows:n,filters:o,columns:r,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${u()().format("DD-MMM-YYYY")}`})}),t});return{close:c["close"],modal:l["a"],actionBtns:t}}}),b=n("6b0d"),m=n.n(b);const g=m()(p,[["render",r]]);t["a"]=g},"5f0b":function(e,t,n){},6361:function(e,t,n){"use strict";n("0bb4")},7717:function(e,t,n){"use strict";var o=n("7a23");const r={class:"date-picker-wrapper"},a=["value"],i=["value"];function c(e,t,n,c,l,s){const u=Object(o["resolveComponent"])("ion-icon"),d=Object(o["resolveComponent"])("date-picker");return Object(o["openBlock"])(),Object(o["createBlock"])(d,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(o["withCtx"])(({inputValue:t,inputEvents:n})=>[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(o["toHandlers"])(n.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,a),Object(o["createVNode"])(u,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(o["toHandlers"])(n.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,i)])]),_:1},8,["modelValue","masks","popover"])}var l=n("d867"),s=n("ff79"),u=n("0261"),d=n("9283"),p=Object(o["defineComponent"])({name:"DateRangePicker",components:{IonIcon:l["IonIcon"],DatePicker:u["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const n=Object(o["ref"])({input:"DD/MMM/YYYY"}),r=Object(o["ref"])({visibility:"click"}),a=Object(o["computed"])({get:()=>e.modelValue,set:({start:e,end:n})=>t("update:modelValue",{start:d["c"].toStandardHisFormat(e),end:d["c"].toStandardHisFormat(n)})});return{arrowForward:s["arrowForward"],range:a,masks:n,popover:r}}}),b=(n("6361"),n("6b0d")),m=n.n(b);const g=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=g},8727:function(e,t,n){"use strict";var o=n("7a23");const r=["src"],a=["innerHTML"],i=["innerHTML"],c={key:1},l={key:2},s={key:3},u={key:4};function d(e,t,n,d,p,b){const m=Object(o["resolveComponent"])("ion-col"),g=Object(o["resolveComponent"])("ion-row"),f=Object(o["resolveComponent"])("ion-grid"),j=Object(o["resolveComponent"])("ion-card-header"),O=Object(o["resolveComponent"])("date-range-picker"),h=Object(o["resolveComponent"])("date-picker"),w=Object(o["resolveComponent"])("data-table"),v=Object(o["resolveComponent"])("ion-card-content"),y=Object(o["resolveComponent"])("ion-card");return Object(o["openBlock"])(),Object(o["createBlock"])(y,{style:{padding:"0 !important"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(o["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,r)]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h1",{innerHTML:e.title},null,8,a),e.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,i)):Object(o["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",c," Period: "+Object(o["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",l," Quarter: "+Object(o["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",s,"Date: "+Object(o["toDisplayString"])(e.date),1)):Object(o["createCommentVNode"])("",!0),e.totalClients?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",u,"Total Clients: "+Object(o["toDisplayString"])(e.totalClients),1)):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(v,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(o["createSlots"])({dateRange:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(o["renderList"])(e.$slots,(t,n)=>({name:n,fn:Object(o["withCtx"])(({filter:t})=>[Object(o["renderSlot"])(e.$slots,n,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}n("14d9");var p=n("d867"),b=n("ad8d"),m=n("5a0c"),g=n.n(m),f=n("5969"),j=n("4971"),O=n("b5e4"),h=n("2ef0"),w=n("40e3"),v=n("7717");const y=["value"];function C(e,t,n,r,a,i){const c=Object(o["resolveComponent"])("date-picker",!0);return Object(o["openBlock"])(),Object(o["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(o["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:e,class:"box date-picker-input"},Object(o["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,y)]),_:1},8,["modelValue","masks"])}var A=n("0261"),P=n("9283"),D=Object(o["defineComponent"])({name:"DTDatePicker",components:{DatePicker:A["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const n=Object(o["ref"])({input:"DD/MMM/YYYY"}),r=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",P["c"].toStandardHisFormat(e))});return{date:r,masks:n}}}),I=(n("9a25"),n("6b0d")),R=n.n(I);const B=R()(D,[["render",C],["__scopeId","data-v-2b798694"]]);var k=B,x=Object(o["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"],DateRangePicker:v["a"],DatePicker:k},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const n=Object(o["ref"])({}),r=Object(o["ref"])(""),a=Object(o["computed"])(()=>`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${Object(w["b"])(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `),i=Object(o["computed"])(()=>{const n=[...e.actionButtons];return e.showRefreshButton&&n.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&n.push({label:"CSV",color:"primary",action:async(t,n,o,r)=>{var i;return Object(w["a"])({rows:n,filters:o,columns:r,quarter:null===(i=e.quarter)||void 0===i?void 0:i.label,period:e.period,filename:a.value})}}),n}),c=Object(o["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),l=e=>{if("dateRange"in e){if(Object(h["isEmpty"])(n.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:n.value.start,endDate:n.value.end}}if("date"in e){if(Object(h["isEmpty"])(r.value))return Object(O["e"])("Invalid date");e.date=r.value}if(c.value.every(t=>!1===t.required||(Object(h["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(h["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(h["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},s=e=>{t("drilldown",e)};return{actionBtns:i,filters:c,onCustomFilter:l,onDrilldown:s,dayjs:g.a,dateRange:n,pickerDate:r}}});n("2453");const V=R()(x,[["render",d],["__scopeId","data-v-6ce0d11e"]]);t["a"]=V},"87e7":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return c})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return s}));var o=n("ade3"),r=n("5969");const a=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],i=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],c=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],l=["pellets","tablets","granules"];class s extends r["a"]{constructor(){super(),Object(o["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},"9a25":function(e,t,n){"use strict";n("5f0b")},b502:function(e,t,n){},da44:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("d867");const r={async show(e,t,n="custom-modal",r=!0){const a=await o["modalController"].create({component:e,cssClass:n,backdropDismiss:r,componentProps:t});a.present();const{data:i}=await a.onWillDismiss();if(i)return i},async hide(e){await o["modalController"].dismiss(e)}}},f315:function(e,t,n){"use strict";n.r(t);var o=n("7a23");function r(e,t,n,r,a,i){const c=Object(o["resolveComponent"])("base-report-table");return Object(o["openBlock"])(),Object(o["createBlock"])(c,{title:"PEPFAR Disaggregated Report","report-icon":"reports/split.png","report-type":"PEPFAR",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",showIndices:"",onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown,onRegenerate:e.onRegenerate},null,8,["columns","rows","period","onCustomFilter","onDrilldown","onRegenerate"])}n("13d5"),n("14d9");var a=n("b211"),i=n("8727"),c=n("da44"),l=n("564f"),s=n("5a0c"),u=n.n(s),d=n("2ef6"),p=n("2ef0"),b=n("ad8d"),m=n("87e7"),g=n("23e6"),f=n("9283"),j=n("0011"),O=n("3a8c"),h=n("0b22"),w=Object(o["defineComponent"])({name:"CohortDisaggregated",components:{BaseReportTable:i["a"]},setup(){const e=new d["a"];let t={};const n=Object(o["ref"])("-"),r=Object(o["ref"])([]),i=Object(o["ref"])([]),s=Object(o["ref"])([]),w=Object(o["computed"])(()=>[...r.value,...i.value,...s.value]),v=[{path:"ageGroup",label:"Age Group"},{path:"gender",label:"Gender",formatter:j["g"]},{path:"txNew",label:"Tx new (new on ART)",drillable:!0},{path:"txCurr",label:"TX curr (receiving ART)",drillable:!0},{path:"txGivenIpt",label:"TX curr (received IPT)",drillable:!0},{path:"txScreenTB",label:"TX curr (screened for TB)",drillable:!0},...m["b"].map(e=>({path:e,label:e,drillable:!0})),{path:"N/A",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],y=async t=>{/fp|fbf/i.test(t)&&(e.setAgeGroup("All"),e.setGender(t));const n={},o=await e.getRegimenDistribution();for(const e of[...m["b"],"N/A"]){const t=Object(p["get"])(o,e,[]);n[e]=t}return n.total=Object.values(n).reduce((e,t)=>e.concat(t),[]),n},C=(e,t)=>{const n=e.reduce((e,t)=>{for(const n in t)e[n]=n in e?e[n].concat(t[n]):t[n];return e},{});return{...n,ageGroup:"All",gender:t}},A=()=>{i.value.push(C(i.value,"Male"))},P=()=>{const e=C(r.value,"Female"),t=C(s.value,"Female"),n=n=>Object(p["difference"])(e[n],t[n]),o=()=>{const e={};for(const t of[...m["b"],"N/A"])e[t]=n(t);return e};s.value.push({ageGroup:"All",gender:"FNP",txNew:n("txNew"),txCurr:n("txCurr"),txGivenIpt:n("txGivenIpt"),txScreenTB:n("txScreenTB"),...o(),total:n("total")})},D=async(n,o)=>{let r=[],a=[];if(e.setGender("FP"===n?"pregnant":"FBf"===n?"breastfeeding":Object(j["g"])(n)),e.setAgeGroup(o),!(o in t)){const n=await e.getCohort();e.setRebuildOutcome(!1),t[o]=Object(p["isEmpty"])(n)?{}:n[o]}return Object(p["isEmpty"])(t[o])||(r=await e.getTxIpt(),a=await e.getTxCurrTB()),{gender:n,txGivenIpt:r,txScreenTB:a,txNew:Object(p["get"])(t,`${o}.${n.charAt(0)}.tx_new`,[]),txCurr:Object(p["get"])(t,`${o}.${n.charAt(0)}.tx_curr`,[]),ageGroup:/pregnant|breastfeeding/i.test(o)?"All":o,...await y(n)}},I=async()=>{for(const e of b["a"])i.value.push({...await D("M",e)}),r.value.push({...await D("F",e)})},R=async()=>{for(const e of["Pregnant","Breastfeeding"]){const t="Pregnant"===e?"FP":"FBf";s.value.push({...await D(t,e)})}},B=async(o,c=!0)=>{await a["a"].show(),i.value=[],r.value=[],s.value=[],t={},o&&(e.setStartDate(null===o||void 0===o?void 0:o.dateRange.startDate),e.setEndDate(null===o||void 0===o?void 0:o.dateRange.endDate)),e.setRebuildOutcome(c),e.setQuarter("pepfar"),n.value=e.getDateIntervalPeriod(),e.initialize=!1,await I(),A(),await R(),P(),Object(h["b"])(s.value,1),await a["a"].hide()},k=()=>{if(n.value)return B()},x=async e=>{const t=[{path:"arv_number",label:"ARV Number",preSort:O["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:e=>u()(e).format(f["a"])},{path:"gender",label:"Gender",formatter:j["g"]},{path:"address",label:"Address"}],n=e.row[e.column.path],r=Object(o["ref"])([]),a=async()=>{for(const e of n){const t=await g["a"].findByID(e),n=new g["a"](t);r.value.push({arv_number:n.getArvNumber(),birthdate:n.getBirthdate(),gender:n.getGender(),address:""+n.getCurrentVillage()})}};a(),await c["a"].show(l["a"],{columns:t,rows:r.value,title:`${e.row.ageGroup} ${e.column.label} | ${e.row.gender}s`})};return{rows:w,columns:v,period:n,fetchData:B,onDrilldown:x,onRegenerate:k}}}),v=n("6b0d"),y=n.n(v);const C=y()(w,[["render",r]]);t["default"]=C}}]);
//# sourceMappingURL=chunk-0f96c61e.7561c48e.js.map