(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f18964e"],{"0bb4":function(e,t,r){},"2bac":function(e,t,r){"use strict";r("ad6d3")},"3a8c":function(e,t,r){"use strict";function n(e){return parseInt(e.split("-")[2])||0}function a(e){return"<1 year"===e?[0,0]:"90 plus years"===e?[90,1e3]:e.split("-").map(e=>parseInt(e,10))}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},"40e3":function(e,t,r){"use strict";r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return j})),r.d(t,"b",(function(){return O}));r("88a7"),r("271a"),r("5494");var n=r("4971"),a=r("2ef0"),o=r("1c74"),c=r("5a0c"),i=r.n(c),l=r("8baf"),s=r("0da4"),d=r.n(s);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=o["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function m(e,t){return t||!1!==e.exportable}function b(e,t=!1){return e.filter(e=>m(e,t)).map(e=>e.label)}function f(e,t,r=!1){return t.map(t=>e.filter(e=>m(e,r)).map(e=>{let r=Object(a["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),u(e.drillable&&Array.isArray(r)?r.length:r)}))}function g(e){const{columns:t,rows:r,quarter:a,period:c,filters:l,safeMode:s}=e,d=b(t,s),u=f(t,Object(n["sortRows"])(r,(null===l||void 0===l?void 0:l.sort)||[]),s);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+i()().format("DD/MMM/YYYY HH:MM:ss"),a&&(p+="\nQuarter: "+a),c&&(p+="\nQuarter: "+c),p+="\ne-Mastercard Version : "+o["e"].getAppVersion(),p+="\nAPI Version "+o["e"].getApiVersion(),p+="\nSite UUID: "+o["e"].getSiteUUID(),p}function j(e){const t=new Blob([g(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}function O(e){const{filename:t,canHorizontalPageBreak:r,columns:a,rows:o,filters:c,safeMode:i}=e,s=[b(a,i)],m=f(a,Object(n["sortRows"])(o,(null===c||void 0===c?void 0:c.sort)||[]),i),g=i?p():{},j=new l["default"]({...g}),O=j.splitTextToSize(u(t),180),h=O.length<=1?20:10*O.length;j.text(O,14,10);const y={startY:h,head:s,body:m};r&&(y.tableWidth="wrap",y.horizontalPageBreak=!0,y.horizontalPageBreakRepeat=0),d()(j,y);const w=t+".pdf";j.save(w)}},"5f0b":function(e,t,r){},6361:function(e,t,r){"use strict";r("0bb4")},7717:function(e,t,r){"use strict";var n=r("7a23");const a={class:"date-picker-wrapper"},o=["value"],c=["value"];function i(e,t,r,i,l,s){const d=Object(n["resolveComponent"])("ion-icon"),u=Object(n["resolveComponent"])("date-picker");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(n["withCtx"])(({inputValue:t,inputEvents:r})=>[Object(n["createElementVNode"])("div",a,[Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(n["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,o),Object(n["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(n["toHandlers"])(r.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,c)])]),_:1},8,["modelValue","masks","popover"])}var l=r("d867"),s=r("ff79"),d=r("5db2"),u=r("9283"),p=Object(n["defineComponent"])({name:"DateRangePicker",components:{IonIcon:l["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(n["ref"])({input:"DD/MMM/YYYY"}),a=Object(n["ref"])({visibility:"click"}),o=Object(n["computed"])({get:()=>e.modelValue,set:({start:e,end:r})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(r)})});return{arrowForward:s["arrowForward"],range:o,masks:r,popover:a}}}),m=(r("6361"),r("6b0d")),b=r.n(m);const f=b()(p,[["render",i],["__scopeId","data-v-4991088d"]]);t["a"]=f},"7aa1":function(e,t,r){"use strict";r.r(t);var n=r("7a23");function a(e,t,r,a,o,c){const i=Object(n["resolveComponent"])("base-report-table");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{title:"Clinic Regimen Switch Report","report-icon":"reports/regimen-switch.png","report-type":"Clinic",period:e.period,columns:e.columns,rows:e.rows,useDateRangeFilter:"",onCustomFilter:e.fetchData},null,8,["period","columns","rows","onCustomFilter"])}var o=r("b211"),c=r("8727"),i=r("87e7"),l=r("0011"),s=r("9283"),d=r("3a8c"),u=Object(n["defineComponent"])({name:"RegimenSwitch",components:{BaseReportTable:c["a"]},setup(){const{toStandardHisDisplayFormat:e,getAgeInYears:t}=s["c"],r=Object(n["ref"])(""),a=Object(n["ref"])([]),c=[{path:"arv_number",label:"ARV Number",preSort:d["b"],initialSort:!0},{path:"gender",label:"Gender",formatter:l["i"]},{path:"birthdate",label:"DOB (Age in Years)",formatter:r=>`${e(r)} (${t(r)})`},{path:"art_start_date",label:"Start Date",formatter:e},{path:"current_weight",label:"Weight (Kg)"},{path:"previous_regimen",label:"Prev Regimen"},{path:"current_regimen",label:"Curr Regimen"},{path:"medications",label:"ARVs"},{path:"dispensation_date",label:"Dispensation Date",formatter:e}],u=async e=>{await o["a"].show();const t=new i["d"];t.setStartDate(e.dateRange.startDate),t.setEndDate(e.dateRange.endDate),r.value=t.getDateIntervalPeriod();const n=await t.getRegimenSwitchReport();a.value=Object.values(n).map(e=>{let t="";const r=e.medication.map(e=>(t=e.start_date,`${e.medication} (${e.quantity})`));return{...e,gender:Object(l["i"])(e.gender),dispensation_date:t,medications:r.join(", ")}}),await o["a"].hide()};return{rows:a,columns:c,period:r,fetchData:u}}}),p=r("6b0d"),m=r.n(p);const b=m()(u,[["render",a]]);t["default"]=b},8727:function(e,t,r){"use strict";var n=r("7a23");const a=["src"],o=["innerHTML"],c=["innerHTML"],i={key:1},l={key:2},s={key:3};function d(e,t,r,d,u,p){const m=Object(n["resolveComponent"])("ion-col"),b=Object(n["resolveComponent"])("ion-chip"),f=Object(n["resolveComponent"])("ion-row"),g=Object(n["resolveComponent"])("ion-grid"),j=Object(n["resolveComponent"])("ion-card-header"),O=Object(n["resolveComponent"])("date-range-picker"),h=Object(n["resolveComponent"])("date-picker"),y=Object(n["resolveComponent"])("data-table"),w=Object(n["resolveComponent"])("ion-card-content"),v=Object(n["resolveComponent"])("ion-card");return Object(n["openBlock"])(),Object(n["createBlock"])(v,{style:{padding:"0 !important"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(n["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,a)]),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>{var t;return[Object(n["createElementVNode"])("h1",{innerHTML:e.title},null,8,o),e.subtitle?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,c)):Object(n["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",i," Period: "+Object(n["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",l," Quarter: "+Object(n["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",s,"Date: "+Object(n["toDisplayString"])(e.date),1)):Object(n["createCommentVNode"])("",!0),null!==(t=e.totalClients)&&void 0!==t&&t.length?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:4,onClick:e.drillTotalClients,color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Total Clients: "+Object(n["toDisplayString"])(e.totalClients.length),1)]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0)]}),_:1})]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(w,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(n["createSlots"])({dateRange:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(n["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(n["withCtx"])(({filter:t})=>[Object(n["renderSlot"])(e.$slots,r,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}r("14d9");var u=r("d867"),p=r("ad8d"),m=r("5a0c"),b=r.n(m),f=r("5969"),g=r("4971"),j=r("b5e4"),O=r("2ef0"),h=r("40e3"),y=r("7717");const w=["value"];function v(e,t,r,a,o,c){const i=Object(n["resolveComponent"])("date-picker",!0);return Object(n["openBlock"])(),Object(n["createBlock"])(i,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(n["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:e,class:"box date-picker-input"},Object(n["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,w)]),_:1},8,["modelValue","masks"])}var P=r("5db2"),C=r("9283"),D=Object(n["defineComponent"])({name:"DTDatePicker",components:{DatePicker:P["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const r=Object(n["ref"])({input:"DD/MMM/YYYY"}),a=Object(n["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",C["c"].toStandardHisFormat(e))});return{date:a,masks:r}}}),A=(r("9a25"),r("6b0d")),k=r.n(A);const R=k()(D,[["render",v],["__scopeId","data-v-2b798694"]]);var V=R,B=r("7f35"),I=Object(n["defineComponent"])({name:"BaseReportTable",components:{IonCard:u["IonCard"],IonCardHeader:u["IonCardHeader"],IonCardContent:u["IonCardContent"],IonGrid:u["IonGrid"],IonRow:u["IonRow"],IonCol:u["IonCol"],DataTable:g["DataTable"],DateRangePicker:y["a"],DatePicker:V,IonChip:u["IonChip"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Array},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(n["ref"])({}),a=Object(n["ref"])(""),o=Object(n["computed"])(()=>Object(h["c"])(`\n      ${e.reportType} \n      ${p["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),c=Object(n["computed"])(()=>{var t,r;const n=[...e.actionButtons];return e.showRefreshButton&&n.push(u()),e.canExportCsv&&n.push(m(o.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&n.push(g(o.value,null===(r=e.quarter)||void 0===r?void 0:r.label,e.period)),n}),i=Object(n["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),l=e=>{if("dateRange"in e){if(Object(O["isEmpty"])(r.value))return Object(j["e"])("Invalid date range");e.dateRange={startDate:r.value.start,endDate:r.value.end}}if("date"in e){if(Object(O["isEmpty"])(a.value))return Object(j["e"])("Invalid date");e.date=a.value}if(i.value.every(t=>!1===t.required||(Object(O["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(O["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(O["isEmpty"])(e)))))return t("customFilter",e);Object(j["e"])("Invalid filters")},s=e=>{t("drilldown",e)},d=()=>{const r={clients:e.totalClients},n={path:"clients",label:"Total Clients"};t("drilldown",{row:r,column:n})},u=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),m=(e,t,r)=>({label:"CSV",color:"primary",action:async(n,a,o,c)=>{Object(h["a"])({rows:a,filters:o,columns:c,quarter:t,period:r,filename:e})}}),g=(t,r,n)=>({label:"PDF",color:"primary",action:async(a,o,c,i)=>{let l=!1;if(e.useSecureExport){const e=await Object(B["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");l="Secure PDF"===e}Object(h["b"])({rows:o,filters:c,columns:i,quarter:r,period:n,filename:t,safeMode:l})}});return{actionBtns:c,filters:i,onCustomFilter:l,onDrilldown:s,drillTotalClients:d,dayjs:b.a,dateRange:r,pickerDate:a}}});r("2bac");const S=k()(I,[["render",d],["__scopeId","data-v-46af69ea"]]);t["a"]=S},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"c",(function(){return c})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return s}));var n=r("ade3"),a=r("5969");const o=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],c=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],i=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],l=["pellets","tablets","granules"];class s extends a["a"]{constructor(){super(),Object(n["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},"9a25":function(e,t,r){"use strict";r("5f0b")},ad6d3:function(e,t,r){}}]);
//# sourceMappingURL=chunk-4f18964e.f74988f9.js.map