(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59073f37"],{"0bb4":function(e,t,r){},"40e3":function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return O}));r("88a7"),r("271a"),r("5494");var a=r("4971"),o=r("2ef0"),n=r("1c74"),l=r("5a0c"),c=r.n(l),i=r("8baf"),s=r("0da4"),d=r.n(s);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=n["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function m(e,t){return t||!1!==e.exportable}function b(e,t=!1){return e.filter(e=>m(e,t)).map(e=>e.label)}function f(e,t,r=!1){return t.map(t=>e.filter(e=>m(e,r)).map(e=>{let r=Object(o["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),u(e.drillable&&Array.isArray(r)?r.length:r)}))}function g(e){const{columns:t,rows:r,quarter:o,period:l,filters:i,safeMode:s}=e,d=b(t,s),u=f(t,Object(a["sortRows"])(r,(null===i||void 0===i?void 0:i.sort)||[]),s);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),o&&(p+="\nQuarter: "+o),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+n["e"].getAppVersion(),p+="\nAPI Version "+n["e"].getApiVersion(),p+="\nSite UUID: "+n["e"].getSiteUUID(),p}function j(e){const t=new Blob([g(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}function O(e){const{filename:t,canHorizontalPageBreak:r,columns:o,rows:n,filters:l,safeMode:c}=e,s=[b(o,c)],m=f(o,Object(a["sortRows"])(n,(null===l||void 0===l?void 0:l.sort)||[]),c),g=c?p():{},j=new i["default"]({...g}),O=j.splitTextToSize(u(t),180),v=O.length<=1?20:10*O.length;j.text(O,14,10);const h={startY:v,head:s,body:m};r&&(h.tableWidth="wrap",h.horizontalPageBreak=!0,h.horizontalPageBreakRepeat=0),d()(j,h);const y=t+".pdf";j.save(y)}},"4e59":function(e,t,r){},"5f0b":function(e,t,r){},6361:function(e,t,r){"use strict";r("0bb4")},7717:function(e,t,r){"use strict";var a=r("7a23");const o={class:"date-picker-wrapper"},n=["value"],l=["value"];function c(e,t,r,c,i,s){const d=Object(a["resolveComponent"])("ion-icon"),u=Object(a["resolveComponent"])("date-picker");return Object(a["openBlock"])(),Object(a["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(a["withCtx"])(({inputValue:t,inputEvents:r})=>[Object(a["createElementVNode"])("div",o,[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(a["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,n),Object(a["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(a["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var i=r("d867"),s=r("ff79"),d=r("0261"),u=r("9283"),p=Object(a["defineComponent"])({name:"DateRangePicker",components:{IonIcon:i["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(a["ref"])({input:"DD/MMM/YYYY"}),o=Object(a["ref"])({visibility:"click"}),n=Object(a["computed"])({get:()=>e.modelValue,set:({start:e,end:r})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(r)})});return{arrowForward:s["arrowForward"],range:n,masks:r,popover:o}}}),m=(r("6361"),r("6b0d")),b=r.n(m);const f=b()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,r){"use strict";var a=r("7a23");const o=["src"],n=["innerHTML"],l=["innerHTML"],c={key:1},i={key:2},s={key:3},d={key:4};function u(e,t,r,u,p,m){const b=Object(a["resolveComponent"])("ion-col"),f=Object(a["resolveComponent"])("ion-row"),g=Object(a["resolveComponent"])("ion-grid"),j=Object(a["resolveComponent"])("ion-card-header"),O=Object(a["resolveComponent"])("date-range-picker"),v=Object(a["resolveComponent"])("date-picker"),h=Object(a["resolveComponent"])("data-table"),y=Object(a["resolveComponent"])("ion-card-content"),w=Object(a["resolveComponent"])("ion-card");return Object(a["openBlock"])(),Object(a["createBlock"])(w,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,o)]),_:1}),Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",s,"Date: "+Object(a["toDisplayString"])(e.date),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",d,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(y,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({dateRange:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(a["withCtx"])(()=>[Object(a["createVNode"])(v,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(a["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,r,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}r("14d9");var p=r("d867"),m=r("ad8d"),b=r("5a0c"),f=r.n(b),g=r("5969"),j=r("4971"),O=r("b5e4"),v=r("2ef0"),h=r("40e3"),y=r("7717");const w=["value"];function P(e,t,r,o,n,l){const c=Object(a["resolveComponent"])("date-picker",!0);return Object(a["openBlock"])(),Object(a["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(a["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:e,class:"box date-picker-input"},Object(a["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,w)]),_:1},8,["modelValue","masks"])}var D=r("0261"),k=r("9283"),A=Object(a["defineComponent"])({name:"DTDatePicker",components:{DatePicker:D["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(a["ref"])({input:"DD/MMM/YYYY"}),o=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",k["c"].toStandardHisFormat(e))});return{date:o,masks:r}}}),C=(r("9a25"),r("6b0d")),R=r.n(C);const V=R()(A,[["render",P],["__scopeId","data-v-2b798694"]]);var B=V,F=r("7f35"),I=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"],DateRangePicker:y["a"],DatePicker:B},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(a["ref"])({}),o=Object(a["ref"])(""),n=Object(a["computed"])(()=>Object(h["c"])(`\n      ${e.reportType} \n      ${m["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(a["computed"])(()=>{var t,r;const a=[...e.actionButtons];return e.showRefreshButton&&a.push(d()),e.canExportCsv&&a.push(u(n.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&a.push(p(n.value,null===(r=e.quarter)||void 0===r?void 0:r.label,e.period)),a}),c=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:g["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),i=e=>{if("dateRange"in e){if(Object(v["isEmpty"])(r.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:r.value.start,endDate:r.value.end}}if("date"in e){if(Object(v["isEmpty"])(o.value))return Object(O["e"])("Invalid date");e.date=o.value}if(c.value.every(t=>!1===t.required||(Object(v["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(v["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(v["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},s=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,r)=>({label:"CSV",color:"primary",action:async(a,o,n,l)=>{Object(h["a"])({rows:o,filters:n,columns:l,quarter:t,period:r,filename:e})}}),p=(t,r,a)=>({label:"PDF",color:"primary",action:async(o,n,l,c)=>{let i=!1;if(e.useSecureExport){const e=await Object(F["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");i="Secure PDF"===e}Object(h["b"])({rows:n,filters:l,columns:c,quarter:r,period:a,filename:t,safeMode:i})}});return{actionBtns:l,filters:c,onCustomFilter:i,onDrilldown:s,dayjs:f.a,dateRange:r,pickerDate:o}}});r("f522");const _=R()(I,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=_},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return l})),r.d(t,"e",(function(){return c})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s}));var a=r("ade3"),o=r("5969");const n=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],l=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],c=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],i=["pellets","tablets","granules"];class s extends o["a"]{constructor(){super(),Object(a["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},"9a25":function(e,t,r){"use strict";r("5f0b")},cd6a:function(e,t,r){"use strict";r.r(t);var a=r("7a23");function o(e,t,r,o,n,l){const c=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(c,{title:"MoH Viral Load Report","report-icon":"reports/vl.png","report-type":"MOH",period:e.period,columns:e.columns,rows:e.rows,"custom-filters":e.filters,useDateRangeFilter:"",onRegenerate:t[0]||(t[0]=()=>e.regenerateReport()),onCustomFilter:e.fetchData},null,8,["period","columns","rows","custom-filters","onCustomFilter"])}r("14d9");var n=r("b211"),l=r("8727"),c=r("87e7"),i=r("df93"),s=r("ad8d"),d=r("2ef0"),u=r("9283"),p=Object(a["defineComponent"])({name:"ViralLoad",components:{BaseReportTable:l["a"]},setup(){const e=Object(a["ref"])([]),t=Object(a["ref"])(),r=Object(a["ref"])(),o=Object(a["ref"])("-"),l=[{path:"index",label:"#",initialSort:!0,initialSortOrder:"asc"},{path:"ageGroup",label:"Age Group"},...c["b"].map(e=>({path:e,label:e})),{path:"N/A",label:"Uknown"}],p=async a=>{await n["a"].show();const l=new i["a"];t.value=a.minVL,r.value=a.maxVL,l.setStartDate(a.dateRange.startDate),l.setEndDate(a.dateRange.endDate),o.value=l.getDateIntervalPeriod();const u=await l.getViralLoad({from:t.value,to:r.value});let p=0;const m=[];for(let e of s["a"]){e=e.replace("-"," - ");const t={index:p++,ageGroup:e};for(const r of[...c["b"],"N/A"])t[r]=Object(d["get"])(u,`${e}.${r}`,0);m.push(t)}await n["a"].hide(),e.value=m},m=async()=>{const[e,a]=o.value.split(" - ");e&&a&&await p({dateRange:{startDate:u["c"].toStandardHisFormat(e),endDate:u["c"].toStandardHisFormat(a)},minVL:t.value,maxVL:r.value})},b=Object(a["computed"])(()=>[{id:"minVL",placeholder:"Min Viral Load",type:"number",value:t.value,required:!1},{id:"maxVL",placeholder:"Max Viral Load",type:"number",value:r.value,required:!1}]);return{period:o,rows:e,columns:l,filters:b,regenerateReport:m,fetchData:p}}}),m=r("6b0d"),b=r.n(m);const f=b()(p,[["render",o]]);t["default"]=f},df93:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var a=r("bef6"),o=r("5969");class n extends o["a"]{constructor(){super()}getVlCollection(){return this.getReport(`programs/${this.programID}/reports/vl_collection`)}getVLCoverage(e={}){return this.getReport(`programs/${this.programID}/reports/viral_load_coverage`,{rebuild_outcomes:!0,...e})}getMaternalStatus(e){const t=a["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"});return o["a"].postJson("vl_maternal_status?"+t,{patient_ids:e})}getViralLoad(e={}){return this.getReport(`programs/${this.programID}/reports/vl_disaggregated`,e)}}},f522:function(e,t,r){"use strict";r("4e59")}}]);
//# sourceMappingURL=chunk-59073f37.f62be69e.js.map