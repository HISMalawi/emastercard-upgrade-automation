(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-067835e4"],{"0bb4":function(e,t,o){},"2ef6":function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var r=o("ade3"),n=o("5969"),a=o("ad8d");class c extends n["a"]{constructor(){super(),Object(r["a"])(this,"gender",void 0),Object(r["a"])(this,"ageGroup",void 0),Object(r["a"])(this,"initialize",void 0),Object(r["a"])(this,"rebuildOutcome",void 0),this.gender="",this.ageGroup=a["a"][0],this.initialize=!0,this.rebuildOutcome=!0}async init(){this.initialize=!0;const e=await this.getCohort();return!(!e||"created"!==e.temp_disaggregated)&&(this.initialize=!1,!0)}setAgeGroup(e){this.ageGroup=e}setInitialization(e){this.initialize=e}setRebuildOutcome(e){this.rebuildOutcome=e}setGender(e){this.gender=e}getGender(){return this.gender}getCohort(){return this.getReport("cohort_disaggregated",{age_group:""+this.ageGroup,rebuild_outcome:""+this.rebuildOutcome,initialize:""+this.initialize})}getTxIpt(){return this.getReport("clients_given_ipt",{gender:this.gender,age_group:""+this.ageGroup})}getTxCurrTB(){return this.getReport("screened_for_tb",{gender:this.gender,age_group:""+this.ageGroup})}getRegimenDistribution(){return this.getReport("disaggregated_regimen_distribution",{gender:""+this.gender,age_group:""+this.ageGroup})}}},"3a8c":function(e,t,o){"use strict";function r(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return r}))},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return O})),o.d(t,"b",(function(){return j}));o("88a7"),o("271a"),o("5494");var r=o("4971"),n=o("2ef0"),a=o("1c74"),c=o("5a0c"),i=o.n(c),l=o("8baf"),s=o("0da4"),d=o.n(s);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=a["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function g(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function m(e,t,o=!1){return t.map(t=>e.filter(e=>b(e,o)).map(e=>{let o=Object(n["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),u(e.drillable&&Array.isArray(o)?o.length:o)}))}function f(e){const{columns:t,rows:o,quarter:n,period:c,filters:l,safeMode:s}=e,d=g(t,s),u=m(t,Object(r["sortRows"])(o,(null===l||void 0===l?void 0:l.sort)||[]),s);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+i()().format("DD/MMM/YYYY HH:MM:ss"),n&&(p+="\nQuarter: "+n),c&&(p+="\nQuarter: "+c),p+="\ne-Mastercard Version : "+a["e"].getAppVersion(),p+="\nAPI Version "+a["e"].getApiVersion(),p+="\nSite UUID: "+a["e"].getSiteUUID(),p}function O(e){const t=new Blob([f(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function j(e){const{filename:t,canHorizontalPageBreak:o,columns:n,rows:a,filters:c,safeMode:i}=e,s=[g(n,i)],b=m(n,Object(r["sortRows"])(a,(null===c||void 0===c?void 0:c.sort)||[]),i),f=i?p():{},O=new l["default"]({...f}),j=O.splitTextToSize(u(t),180),h=j.length<=1?20:10*j.length;O.text(j,14,10);const w={startY:h,head:s,body:b};o&&(w.tableWidth="wrap",w.horizontalPageBreak=!0,w.horizontalPageBreakRepeat=0),d()(O,w);const y=t+".pdf";O.save(y)}},"4e59":function(e,t,o){},"564f":function(e,t,o){"use strict";var r=o("7a23");function n(e,t,o,n,a,c){const i=Object(r["resolveComponent"])("IonIcon"),l=Object(r["resolveComponent"])("IonButton"),s=Object(r["resolveComponent"])("IonButtons"),d=Object(r["resolveComponent"])("IonTitle"),u=Object(r["resolveComponent"])("IonToolbar"),p=Object(r["resolveComponent"])("IonHeader"),b=Object(r["resolveComponent"])("data-table"),g=Object(r["resolveComponent"])("IonContent"),m=Object(r["resolveComponent"])("IonPage");return Object(r["openBlock"])(),Object(r["createBlock"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(u,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{slot:"end"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(i,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(r["createVNode"])(d,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var a=o("d867"),c=o("4971"),i=o("ff79"),l=o("da44"),s=o("5a0c"),d=o.n(s),u=o("40e3"),p=Object(r["defineComponent"])({name:"DrilldownTable",components:{DataTable:c["DataTable"],IonButton:a["IonButton"],IonPage:a["IonPage"],IonHeader:a["IonHeader"],IonContent:a["IonContent"],IonToolbar:a["IonToolbar"],IonButtons:a["IonButtons"],IonTitle:a["IonTitle"],IonIcon:a["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(r["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,r,n)=>Object(u["a"])({rows:o,filters:r,columns:n,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:i["close"],modal:l["a"],actionBtns:t}}}),b=o("6b0d"),g=o.n(b);const m=g()(p,[["render",n]]);t["a"]=m},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},7717:function(e,t,o){"use strict";var r=o("7a23");const n={class:"date-picker-wrapper"},a=["value"],c=["value"];function i(e,t,o,i,l,s){const d=Object(r["resolveComponent"])("ion-icon"),u=Object(r["resolveComponent"])("date-picker");return Object(r["openBlock"])(),Object(r["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(r["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(r["createElementVNode"])("div",n,[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,a),Object(r["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(r["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,c)])]),_:1},8,["modelValue","masks","popover"])}var l=o("d867"),s=o("ff79"),d=o("0261"),u=o("9283"),p=Object(r["defineComponent"])({name:"DateRangePicker",components:{IonIcon:l["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),n=Object(r["ref"])({visibility:"click"}),a=Object(r["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(o)})});return{arrowForward:s["arrowForward"],range:a,masks:o,popover:n}}}),b=(o("6361"),o("6b0d")),g=o.n(b);const m=g()(p,[["render",i],["__scopeId","data-v-4991088d"]]);t["a"]=m},8727:function(e,t,o){"use strict";var r=o("7a23");const n=["src"],a=["innerHTML"],c=["innerHTML"],i={key:1},l={key:2},s={key:3},d={key:4};function u(e,t,o,u,p,b){const g=Object(r["resolveComponent"])("ion-col"),m=Object(r["resolveComponent"])("ion-row"),f=Object(r["resolveComponent"])("ion-grid"),O=Object(r["resolveComponent"])("ion-card-header"),j=Object(r["resolveComponent"])("date-range-picker"),h=Object(r["resolveComponent"])("date-picker"),w=Object(r["resolveComponent"])("data-table"),y=Object(r["resolveComponent"])("ion-card-content"),v=Object(r["resolveComponent"])("ion-card");return Object(r["openBlock"])(),Object(r["createBlock"])(v,{style:{padding:"0 !important"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(r["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("h1",{innerHTML:e.title},null,8,a),e.subtitle?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,c)):Object(r["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",i," Period: "+Object(r["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",l," Quarter: "+Object(r["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",s,"Date: "+Object(r["toDisplayString"])(e.date),1)):Object(r["createCommentVNode"])("",!0),e.totalClients?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",d,"Total Clients: "+Object(r["toDisplayString"])(e.totalClients),1)):Object(r["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(y,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(r["createSlots"])({dateRange:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(r["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(r["withCtx"])(({filter:t})=>[Object(r["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var p=o("d867"),b=o("ad8d"),g=o("5a0c"),m=o.n(g),f=o("5969"),O=o("4971"),j=o("b5e4"),h=o("2ef0"),w=o("40e3"),y=o("7717");const v=["value"];function C(e,t,o,n,a,c){const i=Object(r["resolveComponent"])("date-picker",!0);return Object(r["openBlock"])(),Object(r["createBlock"])(i,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(r["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:e,class:"box date-picker-input"},Object(r["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,v)]),_:1},8,["modelValue","masks"])}var D=o("0261"),P=o("9283"),A=Object(r["defineComponent"])({name:"DTDatePicker",components:{DatePicker:D["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(r["ref"])({input:"DD/MMM/YYYY"}),n=Object(r["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",P["c"].toStandardHisFormat(e))});return{date:n,masks:o}}}),R=(o("9a25"),o("6b0d")),k=o.n(R);const I=k()(A,[["render",C],["__scopeId","data-v-2b798694"]]);var B=I,V=o("7f35"),x=Object(r["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:O["DataTable"],DateRangePicker:y["a"],DatePicker:B},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(r["ref"])({}),n=Object(r["ref"])(""),a=Object(r["computed"])(()=>Object(w["c"])(`\n      ${e.reportType} \n      ${b["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),c=Object(r["computed"])(()=>{var t,o;const r=[...e.actionButtons];return e.showRefreshButton&&r.push(d()),e.canExportCsv&&r.push(u(a.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&r.push(p(a.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),r}),i=Object(r["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),l=e=>{if("dateRange"in e){if(Object(h["isEmpty"])(o.value))return Object(j["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(h["isEmpty"])(n.value))return Object(j["e"])("Invalid date");e.date=n.value}if(i.value.every(t=>!1===t.required||(Object(h["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(h["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(h["isEmpty"])(e)))))return t("customFilter",e);Object(j["e"])("Invalid filters")},s=e=>{t("drilldown",e)},d=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),u=(e,t,o)=>({label:"CSV",color:"primary",action:async(r,n,a,c)=>{Object(w["a"])({rows:n,filters:a,columns:c,quarter:t,period:o,filename:e})}}),p=(t,o,r)=>({label:"PDF",color:"primary",action:async(n,a,c,i)=>{let l=!1;if(e.useSecureExport){const e=await Object(V["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");l="Secure PDF"===e}Object(w["b"])({rows:a,filters:c,columns:i,quarter:o,period:r,filename:t,safeMode:l})}});return{actionBtns:c,filters:i,onCustomFilter:l,onDrilldown:s,dayjs:m.a,dateRange:o,pickerDate:n}}});o("f522");const _=k()(x,[["render",u],["__scopeId","data-v-4840dd5c"]]);t["a"]=_},"87e7":function(e,t,o){"use strict";o.d(t,"b",(function(){return a})),o.d(t,"c",(function(){return c})),o.d(t,"e",(function(){return i})),o.d(t,"a",(function(){return l})),o.d(t,"d",(function(){return s}));var r=o("ade3"),n=o("5969");const a=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],c=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],i=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],l=["pellets","tablets","granules"];class s extends n["a"]{constructor(){super(),Object(r["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},"9a25":function(e,t,o){"use strict";o("5f0b")},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o("d867");const n={async show(e,t,o="custom-modal",n=!0){const a=await r["modalController"].create({component:e,cssClass:o,backdropDismiss:n,componentProps:t});a.present();const{data:c}=await a.onWillDismiss();if(c)return c},async hide(e){await r["modalController"].dismiss(e)}}},f522:function(e,t,o){"use strict";o("4e59")},fcba:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function n(e,t,o,n,a,c){const i=Object(r["resolveComponent"])("base-report-table");return Object(r["openBlock"])(),Object(r["createBlock"])(i,{title:"MoH Cohort Disaggregated Report","report-icon":"reports/split.png","report-type":"MOH",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown,onRegenerate:e.onRegenerate},null,8,["columns","rows","period","onCustomFilter","onDrilldown","onRegenerate"])}o("13d5"),o("14d9");var a=o("b211"),c=o("8727"),i=o("da44"),l=o("564f"),s=o("87e7"),d=o("5a0c"),u=o.n(d),p=o("2ef6"),b=o("b5e4"),g=o("2ef0"),m=o("ad8d"),f=o("23e6"),O=o("6605"),j=o("9283"),h=o("0011"),w=o("3a8c"),y=Object(r["defineComponent"])({name:"CohortDisaggregated",components:{BaseReportTable:c["a"]},setup(){const e=new p["a"];let t=Object(r["reactive"])({});const o=Object(r["ref"])("-");let n=Object(r["reactive"])({}),c=Object(r["reactive"])([]);const d=Object(r["computed"])(()=>Object.keys(n).sort((e,t)=>parseInt(e)-parseInt(t)).reduce((e,t)=>e.concat(n[t]),[]).map((e,t)=>({index:t+1,...e}))),y=[{path:"index",label:"#",initialSort:!0,initialSortOrder:"asc"},{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:h["i"]},{path:"txCurr",label:"TX curr (receiving ART)",drillable:!0},...s["b"].map(e=>({path:e,label:e,drillable:!0})),{path:"N/A",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],v=(e,t,o=[])=>{c.push({col:e,gender:t,data:o})},C=async(t,o)=>{const r={},n=await e.getRegimenDistribution();for(const e of[...s["b"],"N/A"]){const t=Object(g["get"])(n,e,[]);r[e]=t,v(e,o,t)}return r.total=Object.values(r).reduce((e,t)=>e.concat(t),[]),v("regimenTotals",o,r.total),r},D=(e,t)=>c.filter(o=>o.col===e&&o.gender===t).reduce((e,t)=>e.concat(t.data),[]),P=e=>{const t={};for(const o of[...s["b"],"N/A"])t[o]=D(o,e);return t},A=e=>{n[e]=[{age_group:"All",gender:"Male",txCurr:D("txCurr","Male"),...P("Male"),total:D("regimenTotals","Male")}]},R=(e,t)=>c.filter(e=>e.gender.match(/fp|fbf/i)&&e.col===t).reduce((e,t)=>e.concat(t.data||[]),[]).includes(e),k=e=>{const t=e=>c.filter(t=>"Female"===t.gender&&t.col===e).reduce((t,o)=>t.concat(o.data.filter(t=>!R(t,e))),[]),o=()=>{const e={};for(const o of[...s["b"],"N/A"])e[o]=t(o);return e};n[e]=[{age_group:"All",gender:"FNP",txCurr:t("txCurr"),...o(),total:t("regimenTotals")}]},I=async o=>{e.setGender(o.altAgeGroup?o.altAgeGroup.toLowerCase():o.altGender.toLowerCase());for(const r of o.ageGroups){let a=[];const c=o.altAgeGroup?o.altAgeGroup:r;if(e.setAgeGroup(c),!(c in t)){const o=await e.getCohort();e.setRebuildOutcome(!1),t[c]=Object(g["isEmpty"])(o)?{}:o[c]}switch(Object(g["isEmpty"])(t[c])||(a=Object(g["get"])(t,`${c}.${o.gender}.tx_curr`,[]),v("txCurr",o.altGender,a)),e.getGender()){case"breastfeeding":e.setAgeGroup("All"),e.setGender("Fbf");break;case"pregnant":e.setAgeGroup("All"),e.setGender("FP");break}n[o.index]||(n[o.index]=[]),n[o.index].push({age_group:r,gender:o.altGender,txCurr:a,...await C(c,o.altGender)})}},B=async({dateRange:t},r=!1,n="Custom")=>{await a["a"].show(),e.setStartDate(t.startDate),e.setEndDate(t.endDate),e.setRebuildOutcome(r),e.setQuarter(n),o.value=e.getDateIntervalPeriod();const c=await e.init();if(!c)return Object(b["e"])("Unable to initialise report");const i=[{index:1,gender:"F",altGender:"Female",ageGroups:m["a"]},{index:2,gender:"M",altGender:"Male",ageGroups:m["a"]},{index:4,gender:"F",altGender:"FP",ageGroups:["All"],altAgeGroup:"Pregnant"},{index:6,gender:"F",altGender:"FBf",ageGroups:["All"],altAgeGroup:"Breastfeeding"}];for(const e of i)await I(e);A(3),k(5),await a["a"].hide()},V=async()=>{n={},c=[],t={};const[e,r]=o.value.split("-");e&&r&&await B({dateRange:{startDate:u()(e).format("YYYY-MM-DD"),endDate:u()(r).format("YYYY-MM-DD")}},!0)},x=async e=>{const t=[{path:"arv_number",label:"ARV Number",preSort:w["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:e=>u()(e).format(j["a"])},{path:"gender",label:"Gender",formatter:h["i"]},{path:"address",label:"Address"}],o=e.row[e.column.path],n=Object(r["ref"])([]),a=async()=>{for(const e of o){const t=await f["a"].findByID(e),o=new f["a"](t);n.value.push({arv_number:o.getArvNumber(),birthdate:o.getBirthdate(),gender:o.getGender(),address:""+o.getCurrentVillage()})}};a(),await i["a"].show(l["a"],{title:`${e.row.age_group} ${e.column.label} | ${e.row.gender}s`,columns:t,rows:n.value})};return Object(r["onMounted"])(()=>{const{start_date:e,end_date:t,quarter:o}=Object(O["h"])().query;if(e&&t&&o){const r={startDate:u()(e.toString()).format("YYYY-MM-DD"),endDate:u()(t.toString()).format("YYYY-MM-DD")};B({dateRange:r},!1,o.toString())}}),{rows:d,columns:y,period:o,fetchData:B,onDrilldown:x,onRegenerate:V}}}),v=o("6b0d"),C=o.n(v);const D=C()(y,[["render",n]]);t["default"]=D}}]);
//# sourceMappingURL=chunk-067835e4.982eb548.js.map