(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f36f2ce"],{"0bb4":function(e,t,r){},2453:function(e,t,r){"use strict";r("b502")},3192:function(e,t,r){"use strict";r.r(t);var o=r("7a23");function a(e,t,r,a,n,l){const c=Object(o["resolveComponent"])("base-report-table");return Object(o["openBlock"])(),Object(o["createBlock"])(c,{title:"Regimen Formulation: Patient Level Clinic Report","report-icon":"reports/medical.png","report-type":"Clinic",period:e.period,columns:e.columns,rows:e.rows,rowActionButtons:e.rowActionBtns,"custom-filters":e.filters,useDateRangeFilter:"",onRegenerate:t[0]||(t[0]=()=>e.regenerateReport()),onCustomFilter:e.fetchData},null,8,["period","columns","rows","rowActionButtons","custom-filters","onCustomFilter"])}r("14d9");var n=r("b211"),l=r("afbc"),c=r("8727"),i=r("87e7"),s=r("9283"),u=r("5a0c"),d=r.n(u),p=r("0011"),m=r("3a8c"),b=Object(o["defineComponent"])({name:"RegimenFormulation",components:{BaseReportTable:c["a"]},setup(){const e=Object(o["ref"])([]),t=Object(o["reactive"])({}),r=Object(o["reactive"])({}),a=Object(o["ref"])("-"),c=new i["d"],u=[{path:"arv_number",label:"ARV Number",preSort:m["a"],initialSort:!0},{path:"gender",label:"Gender",formatter:p["g"]},{path:"birthdate",label:"Date of Birth",formatter:e=>d()(e).format(s["a"])}],b=async o=>{await n["a"].show(),c.setStartDate(o.dateRange.startDate),c.setEndDate(o.dateRange.endDate),a.value=c.getDateIntervalPeriod(),Object.assign(t,o.regimen),Object.assign(r,o.formulation),e.value=await c.getRegimenFormulationReport(t.value,r.value),await n["a"].hide()},f=async()=>{a.value&&t.value&&r.value&&(await n["a"].show(),e.value=await c.getRegimenFormulationReport(t.value,r.value),await n["a"].hide())},g=[{label:"Select",default:!0,action:e=>{l["a"].push("/emc/patient/"+e["patient_id"])}}],j=Object(o["computed"])(()=>[{id:"regimen",label:"Select Regimen",type:"select",value:t,options:i["b"].map(e=>({label:e,value:e}))},{id:"formulation",label:"Formulation",type:"select",value:r,options:i["a"].map(e=>({label:e,value:e}))}]);return{period:a,rows:e,columns:u,rowActionBtns:g,filters:j,regenerateReport:f,fetchData:b}}}),f=r("6b0d"),g=r.n(f);const j=g()(b,[["render",a]]);t["default"]=j},"3a8c":function(e,t,r){"use strict";function o(e){return parseInt(e.split("-")[2])||0}r.d(t,"a",(function(){return o}))},"40e3":function(e,t,r){"use strict";r.d(t,"b",(function(){return i})),r.d(t,"a",(function(){return u}));var o=r("4971"),a=r("2ef0"),n=r("1c74"),l=r("5a0c"),c=r.n(l);function i(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function s({columns:e,rows:t,quarter:r,period:l,filters:s}){let u=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return u+="\n",u+=Object(o["sortRows"])(t,(null===s||void 0===s?void 0:s.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(a["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),i(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),u+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),r&&(u+="\nQuarter: "+r),l&&(u+="\nQuarter: "+l),u+="\ne-Mastercard Version : "+n["e"].getAppVersion(),u+="\nAPI Version "+n["e"].getApiVersion(),u+="\nSite UUID: "+n["e"].getSiteUUID(),u}function u(e){const t=new Blob([s(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},"5f0b":function(e,t,r){},6361:function(e,t,r){"use strict";r("0bb4")},7717:function(e,t,r){"use strict";var o=r("7a23");const a={class:"date-picker-wrapper"},n=["value"],l=["value"];function c(e,t,r,c,i,s){const u=Object(o["resolveComponent"])("ion-icon"),d=Object(o["resolveComponent"])("date-picker");return Object(o["openBlock"])(),Object(o["createBlock"])(d,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(o["withCtx"])(({inputValue:t,inputEvents:r})=>[Object(o["createElementVNode"])("div",a,[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(o["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,n),Object(o["createVNode"])(u,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(o["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var i=r("d867"),s=r("ff79"),u=r("0261"),d=r("9283"),p=Object(o["defineComponent"])({name:"DateRangePicker",components:{IonIcon:i["IonIcon"],DatePicker:u["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(o["ref"])({input:"DD/MMM/YYYY"}),a=Object(o["ref"])({visibility:"click"}),n=Object(o["computed"])({get:()=>e.modelValue,set:({start:e,end:r})=>t("update:modelValue",{start:d["c"].toStandardHisFormat(e),end:d["c"].toStandardHisFormat(r)})});return{arrowForward:s["arrowForward"],range:n,masks:r,popover:a}}}),m=(r("6361"),r("6b0d")),b=r.n(m);const f=b()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,r){"use strict";var o=r("7a23");const a=["src"],n=["innerHTML"],l=["innerHTML"],c={key:1},i={key:2},s={key:3},u={key:4};function d(e,t,r,d,p,m){const b=Object(o["resolveComponent"])("ion-col"),f=Object(o["resolveComponent"])("ion-row"),g=Object(o["resolveComponent"])("ion-grid"),j=Object(o["resolveComponent"])("ion-card-header"),O=Object(o["resolveComponent"])("date-range-picker"),v=Object(o["resolveComponent"])("date-picker"),y=Object(o["resolveComponent"])("data-table"),w=Object(o["resolveComponent"])("ion-card-content"),h=Object(o["resolveComponent"])("ion-card");return Object(o["openBlock"])(),Object(o["createBlock"])(h,{style:{padding:"0 !important"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(o["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,a)]),_:1}),Object(o["createVNode"])(b,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(o["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",c," Period: "+Object(o["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",i," Quarter: "+Object(o["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",s,"Date: "+Object(o["toDisplayString"])(e.date),1)):Object(o["createCommentVNode"])("",!0),e.totalClients?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",u,"Total Clients: "+Object(o["toDisplayString"])(e.totalClients),1)):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(w,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(o["createSlots"])({dateRange:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(o["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(o["withCtx"])(({filter:t})=>[Object(o["renderSlot"])(e.$slots,r,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}r("14d9");var p=r("d867"),m=r("ad8d"),b=r("5a0c"),f=r.n(b),g=r("5969"),j=r("4971"),O=r("b5e4"),v=r("2ef0"),y=r("40e3"),w=r("7717");const h=["value"];function P(e,t,r,a,n,l){const c=Object(o["resolveComponent"])("date-picker",!0);return Object(o["openBlock"])(),Object(o["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(o["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:e,class:"box date-picker-input"},Object(o["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,h)]),_:1},8,["modelValue","masks"])}var A=r("0261"),C=r("9283"),R=Object(o["defineComponent"])({name:"DTDatePicker",components:{DatePicker:A["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(o["ref"])({input:"DD/MMM/YYYY"}),a=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",C["c"].toStandardHisFormat(e))});return{date:a,masks:r}}}),D=(r("9a25"),r("6b0d")),k=r.n(D);const V=k()(R,[["render",P],["__scopeId","data-v-2b798694"]]);var B=V,I=Object(o["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"],DateRangePicker:w["a"],DatePicker:B},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(o["ref"])({}),a=Object(o["ref"])(""),n=Object(o["computed"])(()=>`\n      ${e.reportType} \n      ${m["b"].getLocationName()} \n      ${Object(y["b"])(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `),l=Object(o["computed"])(()=>{const r=[...e.actionButtons];return e.showRefreshButton&&r.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&r.push({label:"CSV",color:"primary",action:async(t,r,o,a)=>{var l;return Object(y["a"])({rows:r,filters:o,columns:a,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:n.value})}}),r}),c=Object(o["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:g["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),i=e=>{if("dateRange"in e){if(Object(v["isEmpty"])(r.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:r.value.start,endDate:r.value.end}}if("date"in e){if(Object(v["isEmpty"])(a.value))return Object(O["e"])("Invalid date");e.date=a.value}if(c.value.every(t=>!1===t.required||(Object(v["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(v["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(v["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},s=e=>{t("drilldown",e)};return{actionBtns:l,filters:c,onCustomFilter:i,onDrilldown:s,dayjs:f.a,dateRange:r,pickerDate:a}}});r("2453");const F=k()(I,[["render",d],["__scopeId","data-v-6ce0d11e"]]);t["a"]=F},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s}));var o=r("ade3"),a=r("5969");const n=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],l=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],c=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],i=["pellets","tablets","granules"];class s extends a["a"]{constructor(){super(),Object(o["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},"9a25":function(e,t,r){"use strict";r("5f0b")},b502:function(e,t,r){}}]);
//# sourceMappingURL=chunk-4f36f2ce.9ca438d4.js.map