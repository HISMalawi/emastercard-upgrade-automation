(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4480d5f3"],{"0bb4":function(e,t,o){},"3a8c":function(e,t,o){"use strict";function a(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return a}))},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return g})),o.d(t,"b",(function(){return O}));o("88a7"),o("271a"),o("5494");var a=o("4971"),n=o("2ef0"),r=o("1c74"),c=o("5a0c"),l=o.n(c),s=o("8baf"),i=o("0da4"),d=o.n(i);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=r["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function m(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function f(e,t,o=!1){return t.map(t=>e.filter(e=>b(e,o)).map(e=>{let o=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),u(e.drillable&&Array.isArray(o)?o.length:o)}))}function j(e){const{columns:t,rows:o,quarter:n,period:c,filters:s,safeMode:i}=e,d=m(t,i),u=f(t,Object(a["sortRows"])(o,(null===s||void 0===s?void 0:s.sort)||[]),i);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+l()().format("DD/MMM/YYYY HH:MM:ss"),n&&(p+="\nQuarter: "+n),c&&(p+="\nQuarter: "+c),p+="\ne-Mastercard Version : "+r["e"].getAppVersion(),p+="\nAPI Version "+r["e"].getApiVersion(),p+="\nSite UUID: "+r["e"].getSiteUUID(),p}function g(e){const t=new Blob([j(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function O(e){const{filename:t,canHorizontalPageBreak:o,columns:n,rows:r,filters:c,safeMode:l}=e,i=[m(n,l)],b=f(n,Object(a["sortRows"])(r,(null===c||void 0===c?void 0:c.sort)||[]),l),j=l?p():{},g=new s["default"]({...j}),O=g.splitTextToSize(u(t),180),w=O.length<=1?20:10*O.length;g.text(O,14,10);const h={startY:w,head:i,body:b};o&&(h.tableWidth="wrap",h.horizontalPageBreak=!0,h.horizontalPageBreakRepeat=0),d()(g,h);const v=t+".pdf";g.save(v)}},"4e59":function(e,t,o){},"564f":function(e,t,o){"use strict";var a=o("7a23");function n(e,t,o,n,r,c){const l=Object(a["resolveComponent"])("IonIcon"),s=Object(a["resolveComponent"])("IonButton"),i=Object(a["resolveComponent"])("IonButtons"),d=Object(a["resolveComponent"])("IonTitle"),u=Object(a["resolveComponent"])("IonToolbar"),p=Object(a["resolveComponent"])("IonHeader"),b=Object(a["resolveComponent"])("data-table"),m=Object(a["resolveComponent"])("IonContent"),f=Object(a["resolveComponent"])("IonPage");return Object(a["openBlock"])(),Object(a["createBlock"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{slot:"end"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(l,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var r=o("d867"),c=o("4971"),l=o("ff79"),s=o("da44"),i=o("5a0c"),d=o.n(i),u=o("40e3"),p=Object(a["defineComponent"])({name:"DrilldownTable",components:{DataTable:c["DataTable"],IonButton:r["IonButton"],IonPage:r["IonPage"],IonHeader:r["IonHeader"],IonContent:r["IonContent"],IonToolbar:r["IonToolbar"],IonButtons:r["IonButtons"],IonTitle:r["IonTitle"],IonIcon:r["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(a["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,a,n)=>Object(u["a"])({rows:o,filters:a,columns:n,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:l["close"],modal:s["a"],actionBtns:t}}}),b=o("6b0d"),m=o.n(b);const f=m()(p,[["render",n]]);t["a"]=f},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},7717:function(e,t,o){"use strict";var a=o("7a23");const n={class:"date-picker-wrapper"},r=["value"],c=["value"];function l(e,t,o,l,s,i){const d=Object(a["resolveComponent"])("ion-icon"),u=Object(a["resolveComponent"])("date-picker");return Object(a["openBlock"])(),Object(a["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(a["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(a["createElementVNode"])("div",n,[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(a["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,r),Object(a["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(a["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,c)])]),_:1},8,["modelValue","masks","popover"])}var s=o("d867"),i=o("ff79"),d=o("5db2"),u=o("9283"),p=Object(a["defineComponent"])({name:"DateRangePicker",components:{IonIcon:s["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["ref"])({input:"DD/MMM/YYYY"}),n=Object(a["ref"])({visibility:"click"}),r=Object(a["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(o)})});return{arrowForward:i["arrowForward"],range:r,masks:o,popover:n}}}),b=(o("6361"),o("6b0d")),m=o.n(b);const f=m()(p,[["render",l],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,o){"use strict";var a=o("7a23");const n=["src"],r=["innerHTML"],c=["innerHTML"],l={key:1},s={key:2},i={key:3},d={key:4};function u(e,t,o,u,p,b){const m=Object(a["resolveComponent"])("ion-col"),f=Object(a["resolveComponent"])("ion-row"),j=Object(a["resolveComponent"])("ion-grid"),g=Object(a["resolveComponent"])("ion-card-header"),O=Object(a["resolveComponent"])("date-range-picker"),w=Object(a["resolveComponent"])("date-picker"),h=Object(a["resolveComponent"])("data-table"),v=Object(a["resolveComponent"])("ion-card-content"),y=Object(a["resolveComponent"])("ion-card");return Object(a["openBlock"])(),Object(a["createBlock"])(y,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,r),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,c)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",l," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",s," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i,"Date: "+Object(a["toDisplayString"])(e.date),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",d,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(v,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({dateRange:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(a["withCtx"])(()=>[Object(a["createVNode"])(w,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(a["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),m=o("5a0c"),f=o.n(m),j=o("5969"),g=o("4971"),O=o("b5e4"),w=o("2ef0"),h=o("40e3"),v=o("7717");const y=["value"];function C(e,t,o,n,r,c){const l=Object(a["resolveComponent"])("date-picker",!0);return Object(a["openBlock"])(),Object(a["createBlock"])(l,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(a["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(a["createElementVNode"])("input",Object(a["mergeProps"])({value:e,class:"box date-picker-input"},Object(a["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,y)]),_:1},8,["modelValue","masks"])}var D=o("5db2"),k=o("9283"),B=Object(a["defineComponent"])({name:"DTDatePicker",components:{DatePicker:D["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["ref"])({input:"DD/MMM/YYYY"}),n=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",k["c"].toStandardHisFormat(e))});return{date:n,masks:o}}}),I=(o("9a25"),o("6b0d")),V=o.n(I);const _=V()(B,[["render",C],["__scopeId","data-v-2b798694"]]);var P=_,F=o("7f35"),R=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:g["DataTable"],DateRangePicker:v["a"],DatePicker:P},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(a["ref"])({}),n=Object(a["ref"])(""),r=Object(a["computed"])(()=>Object(h["c"])(`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),c=Object(a["computed"])(()=>{var t,o;const a=[...e.actionButtons];return e.showRefreshButton&&a.push(d()),e.canExportCsv&&a.push(u(r.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&a.push(p(r.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),a}),l=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:j["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),s=e=>{if("dateRange"in e){if(Object(w["isEmpty"])(o.value))return Object(O["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(w["isEmpty"])(n.value))return Object(O["e"])("Invalid date");e.date=n.value}if(l.value.every(t=>!1===t.required||(Object(w["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(w["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(w["isEmpty"])(e)))))return t("customFilter",e);Object(O["e"])("Invalid filters")},i=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,o)=>({label:"CSV",color:"primary",action:async(a,n,r,c)=>{Object(h["a"])({rows:n,filters:r,columns:c,quarter:t,period:o,filename:e})}}),p=(t,o,a)=>({label:"PDF",color:"primary",action:async(n,r,c,l)=>{let s=!1;if(e.useSecureExport){const e=await Object(F["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");s="Secure PDF"===e}Object(h["b"])({rows:r,filters:c,columns:l,quarter:o,period:a,filename:t,safeMode:s})}});return{actionBtns:c,filters:l,onCustomFilter:s,onDrilldown:i,dayjs:f.a,dateRange:o,pickerDate:n}}});o("f522");const M=V()(R,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=M},"9a25":function(e,t,o){"use strict";o("5f0b")},d290:function(e,t,o){"use strict";o.r(t);var a=o("7a23");function n(e,t,o,n,r,c){const l=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(l,{title:"PEPFAR TB Prev Report","report-icon":"reports/previous.png","report-type":"PEPFAR",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown,showIndices:""},null,8,["columns","rows","period","onCustomFilter","onDrilldown"])}o("5b81"),o("14d9");var r=o("b211"),c=o("8727"),l=o("da44"),s=o("564f"),i=o("eb8b"),d=o("9283"),u=o("5a0c"),p=o.n(u),b=o("0011"),m=o("3a8c"),f=Object(a["defineComponent"])({name:"TBPrev",components:{BaseReportTable:c["a"]},setup(){const e=Object(a["ref"])("-"),t=Object(a["ref"])([]),o=e=>e.replaceAll("_"," "),n=[{path:"age_group",label:"Age group"},{path:"gender",label:"Gender",formatter:b["i"]},...i["b"].map(e=>[{path:"3hp_"+e,label:`3HP (${o(e)})`,drillable:!0},{path:"6h_"+e,label:`6H (${o(e)})`,drillable:!0}]).flat()],c=async({dateRange:o})=>{await r["a"].show();const a=new i["a"];a.setStartDate(o.startDate),a.setEndDate(o.endDate),e.value=a.getDateIntervalPeriod();const n=await a.getTBPrevReport();t.value=a.buildReportData(n),t.value.push(a.getAggregatedMaleData(n)),t.value.push(...await a.getAggregatedMaternalStatus(n)),await r["a"].hide()},u=async e=>{const t=[{path:"arv_number",label:"ARV Number",preSort:m["a"],initialSort:!0},{path:"gender",label:"Gender",formatter:b["i"]},{path:"birthdate",label:"Date of Birth",formatter:e=>p()(e).format(d["a"])},{path:"tpt_initiation_date",label:"TPT Initiation Date",formatter:e=>p()(e).format(d["a"])},{path:"outcome",label:"Outcome"}],o=e.row[e.column.path];await l["a"].show(s["a"],{title:`${e.row.age_group} ${e.column.label} ${e.row.gender}s`,columns:t,rows:o})};return{rows:t,columns:n,period:e,fetchData:c,onDrilldown:u}}}),j=o("6b0d"),g=o.n(j);const O=g()(f,[["render",n]]);t["default"]=O},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o("d867");const n={async show(e,t,o="custom-modal",n=!0){const r=await a["modalController"].create({component:e,cssClass:o,backdropDismiss:n,componentProps:t});r.present();const{data:c}=await r.onWillDismiss();if(c)return c},async hide(e){await a["modalController"].dismiss(e)}}},eb8b:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"a",(function(){return l}));o("14d9"),o("13d5");var a=o("2ef0"),n=o("5969"),r=o("ad8d");const c=["started_new_on_art","started_previously_on_art","completed_new_on_art","completed_previously_on_art"];class l extends n["a"]{constructor(){super()}getTBPrevReport(){return this.getReport(`/programs/${this.programID}/reports/tb_prev2`)}buildReportData(e){const t=[],o=["F","M"];return o.forEach(o=>{r["a"].forEach(n=>{const r={gender:o,age_group:n};c.forEach(t=>{r["3hp_"+t]=Object(a["get"])(e[n][o],"3HP."+t,[]),r["6h_"+t]=Object(a["get"])(e[n][o],"6H."+t,[])}),t.push(r)})}),t}aggregate(e,t,o,a){return Object.values(e).reduce((e,n)=>[...n[t][o][a],...e],[])}getAggregatedMaleData(e){const t={gender:"Male",age_group:"All"};for(const o of c)t["3hp_"+o]=this.aggregate(e,"M","3HP",o),t["6h_"+o]=this.aggregate(e,"M","6H",o);return t}async getAggregatedMaternalStatus(e){const t=c.reduce((t,o)=>[...t,{group:"3HP",indicator:o,data:this.aggregate(e,"F","3HP",o)},{group:"6H",indicator:o,data:this.aggregate(e,"F","6H",o)}],[]),o=Object(a["uniq"])(t.reduce((e,t)=>[...e,...t.data],[]).map(e=>e.patient_id)),n=await this.getMaternalStatus(o),r=n.FBf.concat(n.FP),l=[],s=(e,o,a)=>t.reduce((t,a)=>a.indicator===e&&o===a.group?[...t,...a.data]:t,[]).filter(e=>"FNP"===a?!r.includes(e.patient_id):n[a].includes(e.patient_id));for(const a of["FP","FNP","FBf"]){const e={gender:a,age_group:"All"};for(const t of c)e["3hp_"+t]=s(t,"3HP",a),e["6h_"+t]=s(t,"6H",a);l.push(e)}return l}}},f522:function(e,t,o){"use strict";o("4e59")}}]);
//# sourceMappingURL=chunk-4480d5f3.886bdc1b.js.map