(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0730f198"],{"0bb4":function(e,t,a){},"3a8c":function(e,t,a){"use strict";function o(e){return parseInt(e.split("-")[2])||0}a.d(t,"a",(function(){return o}))},"40e3":function(e,t,a){"use strict";a.d(t,"c",(function(){return u})),a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return g}));a("88a7"),a("271a"),a("5494");var o=a("4971"),n=a("2ef0"),r=a("1c74"),l=a("5a0c"),c=a.n(l),i=a("8baf"),s=a("0da4"),d=a.n(s);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=r["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function m(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function f(e,t,a=!1){return t.map(t=>e.filter(e=>b(e,a)).map(e=>{let a=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&a&&(a=e.formatter(a,t)),u(e.drillable&&Array.isArray(a)?a.length:a)}))}function j(e){const{columns:t,rows:a,quarter:n,period:l,filters:i,safeMode:s}=e,d=m(t,s),u=f(t,Object(o["sortRows"])(a,(null===i||void 0===i?void 0:i.sort)||[]),s);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),n&&(p+="\nQuarter: "+n),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+r["e"].getAppVersion(),p+="\nAPI Version "+r["e"].getApiVersion(),p+="\nSite UUID: "+r["e"].getSiteUUID(),p}function O(e){const t=new Blob([j(e)],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=window.URL.createObjectURL(t),a.setAttribute("download",e.filename+".csv"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}function g(e){const{filename:t,canHorizontalPageBreak:a,columns:n,rows:r,filters:l,safeMode:c}=e,s=[m(n,c)],b=f(n,Object(o["sortRows"])(r,(null===l||void 0===l?void 0:l.sort)||[]),c),j=c?p():{},O=new i["default"]({...j}),g=O.splitTextToSize(u(t),180),w=g.length<=1?20:10*g.length;O.text(g,14,10);const y={startY:w,head:s,body:b};a&&(y.tableWidth="wrap",y.horizontalPageBreak=!0,y.horizontalPageBreakRepeat=0),d()(O,y);const v=t+".pdf";O.save(v)}},"4e59":function(e,t,a){},"5f0b":function(e,t,a){},6361:function(e,t,a){"use strict";a("0bb4")},7717:function(e,t,a){"use strict";var o=a("7a23");const n={class:"date-picker-wrapper"},r=["value"],l=["value"];function c(e,t,a,c,i,s){const d=Object(o["resolveComponent"])("ion-icon"),u=Object(o["resolveComponent"])("date-picker");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(o["withCtx"])(({inputValue:t,inputEvents:a})=>[Object(o["createElementVNode"])("div",n,[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(o["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,r),Object(o["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(o["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var i=a("d867"),s=a("ff79"),d=a("0261"),u=a("9283"),p=Object(o["defineComponent"])({name:"DateRangePicker",components:{IonIcon:i["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])({input:"DD/MMM/YYYY"}),n=Object(o["ref"])({visibility:"click"}),r=Object(o["computed"])({get:()=>e.modelValue,set:({start:e,end:a})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(a)})});return{arrowForward:s["arrowForward"],range:r,masks:a,popover:n}}}),b=(a("6361"),a("6b0d")),m=a.n(b);const f=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,a){"use strict";var o=a("7a23");const n=["src"],r=["innerHTML"],l=["innerHTML"],c={key:1},i={key:2},s={key:3},d={key:4};function u(e,t,a,u,p,b){const m=Object(o["resolveComponent"])("ion-col"),f=Object(o["resolveComponent"])("ion-row"),j=Object(o["resolveComponent"])("ion-grid"),O=Object(o["resolveComponent"])("ion-card-header"),g=Object(o["resolveComponent"])("date-range-picker"),w=Object(o["resolveComponent"])("date-picker"),y=Object(o["resolveComponent"])("data-table"),v=Object(o["resolveComponent"])("ion-card-content"),h=Object(o["resolveComponent"])("ion-card");return Object(o["openBlock"])(),Object(o["createBlock"])(h,{style:{padding:"0 !important"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(o["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h1",{innerHTML:e.title},null,8,r),e.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(o["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",c," Period: "+Object(o["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",i," Quarter: "+Object(o["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",s,"Date: "+Object(o["toDisplayString"])(e.date),1)):Object(o["createCommentVNode"])("",!0),e.totalClients?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",d,"Total Clients: "+Object(o["toDisplayString"])(e.totalClients),1)):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(v,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(o["createSlots"])({dateRange:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(o["withCtx"])(()=>[Object(o["createVNode"])(w,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(o["renderList"])(e.$slots,(t,a)=>({name:a,fn:Object(o["withCtx"])(({filter:t})=>[Object(o["renderSlot"])(e.$slots,a,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}a("14d9");var p=a("d867"),b=a("ad8d"),m=a("5a0c"),f=a.n(m),j=a("5969"),O=a("4971"),g=a("b5e4"),w=a("2ef0"),y=a("40e3"),v=a("7717");const h=["value"];function D(e,t,a,n,r,l){const c=Object(o["resolveComponent"])("date-picker",!0);return Object(o["openBlock"])(),Object(o["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(o["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(o["createElementVNode"])("input",Object(o["mergeProps"])({value:e,class:"box date-picker-input"},Object(o["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,h)]),_:1},8,["modelValue","masks"])}var C=a("0261"),k=a("9283"),V=Object(o["defineComponent"])({name:"DTDatePicker",components:{DatePicker:C["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(o["ref"])({input:"DD/MMM/YYYY"}),n=Object(o["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",k["c"].toStandardHisFormat(e))});return{date:n,masks:a}}}),B=(a("9a25"),a("6b0d")),F=a.n(B);const R=F()(V,[["render",D],["__scopeId","data-v-2b798694"]]);var S=R,I=a("7f35"),x=Object(o["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:O["DataTable"],DateRangePicker:v["a"],DatePicker:S},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const a=Object(o["ref"])({}),n=Object(o["ref"])(""),r=Object(o["computed"])(()=>Object(y["c"])(`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(o["computed"])(()=>{var t,a;const o=[...e.actionButtons];return e.showRefreshButton&&o.push(d()),e.canExportCsv&&o.push(u(r.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&o.push(p(r.value,null===(a=e.quarter)||void 0===a?void 0:a.label,e.period)),o}),c=Object(o["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:j["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),i=e=>{if("dateRange"in e){if(Object(w["isEmpty"])(a.value))return Object(g["e"])("Invalid date range");e.dateRange={startDate:a.value.start,endDate:a.value.end}}if("date"in e){if(Object(w["isEmpty"])(n.value))return Object(g["e"])("Invalid date");e.date=n.value}if(c.value.every(t=>!1===t.required||(Object(w["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(w["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(w["isEmpty"])(e)))))return t("customFilter",e);Object(g["e"])("Invalid filters")},s=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,a)=>({label:"CSV",color:"primary",action:async(o,n,r,l)=>{Object(y["a"])({rows:n,filters:r,columns:l,quarter:t,period:a,filename:e})}}),p=(t,a,o)=>({label:"PDF",color:"primary",action:async(n,r,l,c)=>{let i=!1;if(e.useSecureExport){const e=await Object(I["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");i="Secure PDF"===e}Object(y["b"])({rows:r,filters:l,columns:c,quarter:a,period:o,filename:t,safeMode:i})}});return{actionBtns:l,filters:c,onCustomFilter:i,onDrilldown:s,dayjs:f.a,dateRange:a,pickerDate:n}}});a("f522");const M=F()(x,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=M},"9a25":function(e,t,a){"use strict";a("5f0b")},d323:function(e,t,a){"use strict";a.r(t);var o=a("7a23");function n(e,t,a,n,r,l){const c=Object(o["resolveComponent"])("base-report-table");return Object(o["openBlock"])(),Object(o["createBlock"])(c,{title:e.title,"report-icon":"reports/appointment-missed.png","report-type":"Clinic",columns:e.columns,rows:e.rows,period:e.period,rowActionButtons:e.rowActionBtns,useSecureExport:"",useDateRangeFilter:"",onCustomFilter:e.getData},null,8,["title","columns","rows","period","rowActionButtons","onCustomFilter"])}a("14d9");var r=a("b211"),l=a("afbc"),c=a("8727"),i=a("ad8d"),s=a("9283"),d=a("5a0c"),u=a.n(d),p=a("0011"),b=a("3a8c"),m=Object(o["defineComponent"])({name:"ClinicAppointments",components:{BaseReportTable:c["a"]},setup(){const e=Object(o["ref"])(""),t=Object(o["ref"])("Clinic Appointment missed report"),a=Object(o["ref"])([]),n=[{path:"arv_number",label:"ARV Number",preSort:b["a"],initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:p["i"]},{path:"birthdate",label:"DOB",formatter:e=>u()(e).format(s["a"])},{path:"appointment_date",label:"Appointment",formatter:e=>u()(e).format(s["a"])},{path:"days_missed",label:"Days Missed"},{path:"current_outcome",label:"Current Outcome"},{path:"address",label:"Contact Details",exportable:!1}],c=async({dateRange:t})=>{await r["a"].show();const o=new i["b"];o.setStartDate(t.startDate),o.setEndDate(t.endDate),e.value=o.getDateIntervalPeriod();const n=await o.getMissedAppointments();a.value=n.map(e=>({...e,address:`CELL: ${e.cell_number}\n                  District: ${e.district}\n                  Village: ${e.village}\n                  TA: ${e.ta}`})),await r["a"].hide()},d=[{label:"Select",default:!0,action:e=>{l["a"].push("/emc/patient/"+e["person_id"])}}];return{rows:a,title:t,columns:n,rowActionBtns:d,period:e,getData:c}}}),f=a("6b0d"),j=a.n(f);const O=j()(m,[["render",n]]);t["default"]=O},f522:function(e,t,a){"use strict";a("4e59")}}]);
//# sourceMappingURL=chunk-0730f198.2a9b35b9.js.map