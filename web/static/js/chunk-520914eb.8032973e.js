(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520914eb"],{"3a8c":function(e,t,r){"use strict";function a(e){return parseInt(e.split("-")[2])||0}r.d(t,"a",(function(){return a}))},"40e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var a=r("4971"),o=r("2ef0"),n=r("1c74"),c=r("5a0c"),l=r.n(c);function i(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function s({columns:e,rows:t,quarter:r,period:c,filters:s}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(a["sortRows"])(t,(null===s||void 0===s?void 0:s.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(o["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),i(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),d+="\nDate Created:  "+l()().format("DD/MMM/YYYY HH:MM:ss"),r&&(d+="\nQuarter: "+r),c&&(d+="\nQuarter: "+c),d+="\ne-Mastercard Version : "+n["e"].getAppVersion(),d+="\nAPI Version "+n["e"].getApiVersion(),d+="\nSite UUID: "+n["e"].getSiteUUID(),d}function d(e){const t=new Blob([s(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},"5ded":function(e,t,r){},6361:function(e,t,r){"use strict";r("cac1")},7717:function(e,t,r){"use strict";var a=r("7a23");const o={class:"date-picker-wrapper"},n=["value"],c=["value"];function l(e,t,r,l,i,s){const d=Object(a["resolveComponent"])("ion-icon"),u=Object(a["resolveComponent"])("date-picker");return Object(a["openBlock"])(),Object(a["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(a["withCtx"])(({inputValue:t,inputEvents:r})=>[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(a["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,n),Object(a["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(a["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,c)])]),_:1},8,["modelValue","masks","popover"])}var i=r("d867"),s=r("ff79"),d=r("0261"),u=r("9283"),p=Object(a["defineComponent"])({name:"DateRangePicker",components:{IonIcon:i["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(a["ref"])({input:"DD/MMM/YYYY"}),o=Object(a["ref"])({visibility:"click"}),n=Object(a["computed"])({get:()=>e.modelValue,set:({start:e,end:r})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(r)})});return{arrowForward:s["arrowForward"],range:n,masks:r,popover:o}}}),m=(r("6361"),r("d959")),b=r.n(m);const g=b()(p,[["render",l],["__scopeId","data-v-4991088d"]]);t["a"]=g},"7f7e":function(e,t,r){},8727:function(e,t,r){"use strict";var a=r("7a23");const o=["src"],n=["innerHTML"],c=["innerHTML"],l={key:1},i={key:2},s={key:3},d={key:4};function u(e,t,r,u,p,m){const b=Object(a["resolveComponent"])("ion-col"),g=Object(a["resolveComponent"])("ion-row"),f=Object(a["resolveComponent"])("ion-grid"),j=Object(a["resolveComponent"])("ion-card-header"),O=Object(a["resolveComponent"])("date-range-picker"),h=Object(a["resolveComponent"])("date-picker"),y=Object(a["resolveComponent"])("data-table"),v=Object(a["resolveComponent"])("ion-card-content"),w=Object(a["resolveComponent"])("ion-card");return Object(a["openBlock"])(),Object(a["createBlock"])(w,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,o)]),_:1}),Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,c)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",l," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",s,"Date: "+Object(a["toDisplayString"])(e.date),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",d,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(v,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({dateRange:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(a["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,r,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}r("14d9");var p=r("d867"),m=r("ad8d"),b=r("5a0c"),g=r.n(b),f=r("5969"),j=r("4971"),O=r("b5e4"),h=r("2ef0"),y=r("40e3"),v=r("7717");const w=["value"];function P(e,t,r,o,n,c){const l=Object(a["resolveComponent"])("date-picker",!0);return Object(a["openBlock"])(),Object(a["createBlock"])(l,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(a["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:e,class:"box date-picker-input"},Object(a["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,w)]),_:1},8,["modelValue","masks"])}var D=r("0261"),A=r("9283"),C=Object(a["defineComponent"])({name:"DTDatePicker",components:{DatePicker:D["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(a["ref"])({input:"DD/MMM/YYYY"}),o=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",A["c"].toStandardHisFormat(e))});return{date:o,masks:r}}}),R=(r("9a25"),r("d959")),k=r.n(R);const V=k()(C,[["render",P],["__scopeId","data-v-2b798694"]]);var B=V,_=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"],DateRangePicker:v["a"],DatePicker:B},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(a["ref"])({}),o=Object(a["ref"])(""),n=Object(a["computed"])(()=>`${m["b"].getLocationName()} ${e.filename||e.title} ${e.period?e.period:e.date}`),c=Object(a["computed"])(()=>{const r=[...e.actionButtons];return e.showRefreshButton&&r.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&r.push({label:"CSV",color:"primary",action:async(t,r,a,o)=>{var c;return Object(y["a"])({rows:r,filters:a,columns:o,quarter:null===(c=e.quarter)||void 0===c?void 0:c.label,period:e.period,filename:n.value})}}),r}),l=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),i=e=>{if("dateRange"in e){if(Object(h["isEmpty"])(r.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:r.value.start,endDate:r.value.end}}if("date"in e){if(Object(h["isEmpty"])(o.value))return Object(O["e"])("Invalid date");e.date=o.value}if(l.value.every(t=>!1===t.required||(Object(h["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(h["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(h["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},s=e=>{t("drilldown",e)};return{actionBtns:c,filters:l,onCustomFilter:i,onDrilldown:s,dayjs:g.a,dateRange:r,pickerDate:o}}});r("f51e");const I=k()(_,[["render",u],["__scopeId","data-v-4d9b68a1"]]);t["a"]=I},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s}));var a=r("ade3"),o=r("5969");const n=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],c=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],l=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],i=["pellets","tablets","granules"];class s extends o["a"]{constructor(){super(),Object(a["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},"9a25":function(e,t,r){"use strict";r("5ded")},cac1:function(e,t,r){},e7d4:function(e,t,r){"use strict";r.r(t);var a=r("7a23");function o(e,t,r,o,n,c){const l=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{title:"Clinic Regimen Dispensation Report","report-icon":"reports/regimen-give.png",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.fetchData},null,8,["columns","rows","period","onCustomFilter"])}var n=r("b211"),c=r("8727"),l=r("87e7"),i=r("9283"),s=r("5a0c"),d=r.n(s),u=r("0011"),p=r("3a8c"),m=Object(a["defineComponent"])({name:"RegimenDispensation",components:{BaseReportTable:c["a"]},setup(){const e=Object(a["ref"])(""),t=Object(a["ref"])([]),r=e=>d()(e).format(i["a"]),o=[{path:"arv_number",label:"ARV Number",preSort:p["a"],initialSort:!0},{path:"gender",label:"Gender",formatter:u["g"]},{path:"birthdate",label:"DOB",formatter:r},{path:"art_start_date",label:"ART Start Date",formatter:r},{path:"current_weight",label:"Weight (Kg)"},{path:"current_regimen",label:"Curr. Reg"},{path:"medications",label:"ARVs"},{path:"dispensation_date",label:"Curr. reg Dispensed",formatter:r},{path:"vl_result",label:"VL Result"},{path:"vl_result_date",label:"Date of VL Result",formatter:r}],c=async r=>{await n["a"].show();const a=new l["d"];a.setStartDate(r.dateRange.startDate),a.setEndDate(r.dateRange.endDate),a.setReportType("moh"),e.value=a.getDateIntervalPeriod();const o=await a.getRegimenReport();t.value=Object.values(o).map(e=>{let t="";const r=e.medication.map(e=>(t=e.start_date,`${e.medication} (${e.quantity})`));return{...e,dispensation_date:t,medications:r.join(", ")}}),await n["a"].hide()};return{rows:t,columns:o,period:e,fetchData:c}}}),b=r("d959"),g=r.n(b);const f=g()(m,[["render",o]]);t["default"]=f},f51e:function(e,t,r){"use strict";r("7f7e")}}]);
//# sourceMappingURL=chunk-520914eb.8032973e.js.map