(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-544545fc"],{"03f6":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),r=a("b211"),n=a("8727"),l=a("9283"),c=a("b5e4"),i=a("c1e4"),s=Object(o["defineComponent"])({__name:"SystemUsageReport",setup(e){const t=Object(o["ref"])(""),a=Object(o["ref"])(""),s=Object(o["computed"])(()=>t.value&&a.value?`${l["c"].toStandardHisDisplayFormat(t.value)} - \n      ${l["c"].toStandardHisDisplayFormat(a.value)}`:""),d=Object(o["ref"])([]),u=[{path:"given_name",label:"First name"},{path:"family_name",label:"Last name"},{path:"role",label:"Role"},{path:"registered_on",label:"Registered on",formatter:l["c"].toStandardHisDisplayFormat},{path:"encounters",label:"Encounters Created"}],p=async e=>{if(e&&"dateRange"in e&&(t.value=e.dateRange.startDate,a.value=e.dateRange.endDate),!t.value&&!a.value)return Object(c["e"])("Invalid report date");r["a"].show();try{d.value=await i["a"].getSystemUsageByUsers(t.value,a.value)}catch(o){Object(c["e"])("Failed to load report data"),console.error(o)}r["a"].hide()};return(e,t)=>(Object(o["openBlock"])(),Object(o["createBlock"])(n["a"],{title:"User System Usage Report","report-icon":"reports/line-chart.png",columns:u,rows:d.value,period:s.value,useDateRangeFilter:"",onCustomFilter:p,onRegenerate:p},null,8,["rows","period"]))}});const d=s;t["default"]=d},"40e3":function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var o=a("4971"),r=a("2ef0"),n=a("1c74"),l=a("5a0c"),c=a.n(l);function i(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function s({columns:e,rows:t,quarter:a,period:l,filters:s}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(o["sortRows"])(t,(null===s||void 0===s?void 0:s.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let a=Object(r["get"])(t,e.path);return"function"===typeof e.formatter&&a&&(a=e.formatter(a,t)),i(e.drillable&&Array.isArray(a)?a.length:a)}).join(",")).join("\n"),d+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),a&&(d+="\nQuarter: "+a),l&&(d+="\nQuarter: "+l),d+="\ne-Mastercard Version : "+n["e"].getAppVersion(),d+="\nAPI Version "+n["e"].getApiVersion(),d+="\nSite UUID: "+n["e"].getSiteUUID(),d}function d(e){const t=new Blob([s(e)],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=window.URL.createObjectURL(t),a.setAttribute("download",e.filename+".csv"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}},"5ded":function(e,t,a){},6361:function(e,t,a){"use strict";a("cac1")},7717:function(e,t,a){"use strict";var o=a("7a23");const r={class:"date-picker-wrapper"},n=["value"],l=["value"];function c(e,t,a,c,i,s){const d=Object(o["resolveComponent"])("ion-icon"),u=Object(o["resolveComponent"])("date-picker");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(o["withCtx"])(({inputValue:t,inputEvents:a})=>[Object(o["createElementVNode"])("div",r,[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(o["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,n),Object(o["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(o["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var i=a("d867"),s=a("ff79"),d=a("0261"),u=a("9283"),p=Object(o["defineComponent"])({name:"DateRangePicker",components:{IonIcon:i["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])({input:"DD/MMM/YYYY"}),r=Object(o["ref"])({visibility:"click"}),n=Object(o["computed"])({get:()=>e.modelValue,set:({start:e,end:a})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(a)})});return{arrowForward:s["arrowForward"],range:n,masks:a,popover:r}}}),b=(a("6361"),a("d959")),m=a.n(b);const j=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=j},"7f7e":function(e,t,a){},8727:function(e,t,a){"use strict";var o=a("7a23");const r=["src"],n=["innerHTML"],l=["innerHTML"],c={key:1},i={key:2},s={key:3},d={key:4};function u(e,t,a,u,p,b){const m=Object(o["resolveComponent"])("ion-col"),j=Object(o["resolveComponent"])("ion-row"),O=Object(o["resolveComponent"])("ion-grid"),f=Object(o["resolveComponent"])("ion-card-header"),v=Object(o["resolveComponent"])("date-range-picker"),g=Object(o["resolveComponent"])("date-picker"),y=Object(o["resolveComponent"])("data-table"),w=Object(o["resolveComponent"])("ion-card-content"),h=Object(o["resolveComponent"])("ion-card");return Object(o["openBlock"])(),Object(o["createBlock"])(h,{style:{padding:"0 !important"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(o["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,r)]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(o["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",c," Period: "+Object(o["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",i," Quarter: "+Object(o["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",s,"Date: "+Object(o["toDisplayString"])(e.date),1)):Object(o["createCommentVNode"])("",!0),e.totalClients?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",d,"Total Clients: "+Object(o["toDisplayString"])(e.totalClients),1)):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(w,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(o["createSlots"])({dateRange:Object(o["withCtx"])(()=>[Object(o["createVNode"])(v,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(o["renderList"])(e.$slots,(t,a)=>({name:a,fn:Object(o["withCtx"])(({filter:t})=>[Object(o["renderSlot"])(e.$slots,a,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}a("14d9");var p=a("d867"),b=a("ad8d"),m=a("5a0c"),j=a.n(m),O=a("5969"),f=a("4971"),v=a("b5e4"),g=a("2ef0"),y=a("40e3"),w=a("7717");const h=["value"];function C(e,t,a,r,n,l){const c=Object(o["resolveComponent"])("date-picker",!0);return Object(o["openBlock"])(),Object(o["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(o["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:e,class:"box date-picker-input"},Object(o["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,h)]),_:1},8,["modelValue","masks"])}var k=a("0261"),D=a("9283"),V=Object(o["defineComponent"])({name:"DTDatePicker",components:{DatePicker:k["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])({input:"DD/MMM/YYYY"}),r=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",D["c"].toStandardHisFormat(e))});return{date:r,masks:a}}}),R=(a("9a25"),a("d959")),B=a.n(R);const F=B()(V,[["render",C],["__scopeId","data-v-2b798694"]]);var I=F,S=Object(o["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:f["DataTable"],DateRangePicker:w["a"],DatePicker:I},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const a=Object(o["ref"])({}),r=Object(o["ref"])(""),n=Object(o["computed"])(()=>`${b["b"].getLocationName()} ${e.filename||e.title} ${e.period?e.period:e.date}`),l=Object(o["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a,o,r)=>{var l;return Object(y["a"])({rows:a,filters:o,columns:r,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:n.value})}}),a}),c=Object(o["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:O["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),i=e=>{if("dateRange"in e){if(Object(g["isEmpty"])(a.value))return Object(v["e"])("Invalid date range");e.dateRange={startDate:a.value.start,endDate:a.value.end}}if("date"in e){if(Object(g["isEmpty"])(r.value))return Object(v["e"])("Invalid date");e.date=r.value}if(c.value.every(t=>!1===t.required||(Object(g["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(g["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(g["isEmpty"])(e)))))return t("customFilter",e);Object(v["e"])("Invalid filters")},s=e=>{t("drilldown",e)};return{actionBtns:l,filters:c,onCustomFilter:i,onDrilldown:s,dayjs:j.a,dateRange:a,pickerDate:r}}});a("f51e");const M=B()(S,[["render",u],["__scopeId","data-v-4d9b68a1"]]);t["a"]=M},"9a25":function(e,t,a){"use strict";a("5ded")},cac1:function(e,t,a){},f51e:function(e,t,a){"use strict";a("7f7e")}}]);
//# sourceMappingURL=chunk-544545fc.33798bc1.js.map