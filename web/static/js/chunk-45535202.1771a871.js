(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45535202"],{"0bb4":function(e,t,o){},"0bec":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,a,l){const c=Object(n["resolveComponent"])("base-report-table");return Object(n["openBlock"])(),Object(n["createBlock"])(c,{title:"PEPFAR TX_PVLS Report","report-icon":"reports/viral_load.png","report-type":"PEPFAR",columns:e.columns,rows:e.rows,period:e.period,"show-indices":"",useDateRangeFilter:"",onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown},null,8,["columns","rows","period","onCustomFilter","onDrilldown"])}o("14d9");var a=o("b211"),l=o("8727"),c=o("da44"),s=o("564f"),i=o("df93"),d=o("ad8d"),u=o("9283"),p=o("0011"),b=o("3a8c"),m=o("2ef0"),f=o("d10e"),g=o("afbc"),j=Object(n["defineComponent"])({name:"VLCoverage",components:{BaseReportTable:l["a"]},setup(){const e=Object(n["ref"])("-"),t=Object(n["ref"])([]),o=[{path:"age_group",label:"Age group"},{path:"gender",label:"Gender",formatter:p["i"]},{path:"tx_curr",label:"TX_CURR",drillable:!0},{path:"due_for_vl",label:"Due for VL",drillable:!0},{path:"drawn.routine",label:"Routine (Sample Drawn)",drillable:!0},{path:"drawn.targeted",label:"Targeted (Sample Drawn)",drillable:!0},{path:"high_vl.routine",label:"Routine (High VL (>=1000 copies))",drillable:!0},{path:"high_vl.targeted",label:"Targeted High VL (>=1000 copies)",drillable:!0},{path:"low_vl.routine",label:"Routine (Low VL (<1000 copies))",drillable:!0},{path:"low_vl.targeted",label:"Targeted (Low VL (<1000 copies))",drillable:!0}],r=(e,t,o)=>({gender:t,age_group:o,...Object(m["get"])(e,`${o}.${t}`,{drawn:{routine:[],targeted:[]},high_vl:{routine:[],targeted:[]},low_vl:{routine:[],targeted:[]},tx_curr:[],due_for_vl:[]})}),l=async({dateRange:o})=>{await a["a"].show();const n=new i["a"];n.setStartDate(o.startDate),n.setEndDate(o.endDate),e.value=n.getDateIntervalPeriod();const l=await n.getVLCoverage({application:"emastercard"}),c=[],s=[];for(const e of d["a"])c.push(r(l,"M",e)),s.push(r(l,"F",e));t.value=[...s,...c],await a["a"].hide()},j=async e=>{const t=[{path:"identifier",label:"ARV Number",preSort:b["b"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:u["c"].toStandardHisDisplayFormat},{path:"gender",label:"Gender",formatter:p["b"]}],o=[{label:"View Client",action:e=>g["a"].push("/emc/patient/"+e["person_id"])}];let n=[];const r=Object(m["chunk"])(e.row[e.column.path],1e3);for(const a of r){const e=await f["a"].getPersons(a);n=n.concat(null!==e&&void 0!==e?e:[])}return c["a"].show(s["a"],{title:`${e.row.age_group} ${e.column.label} ${e.row.gender}s`,rowActionButtons:o,rows:n,columns:t})};return{rows:t,columns:o,period:e,fetchData:l,onDrilldown:j}}}),O=o("6b0d"),h=o.n(O);const w=h()(j,[["render",r]]);t["default"]=w},"2bac":function(e,t,o){"use strict";o("ad6d3")},"3a8c":function(e,t,o){"use strict";function n(e){return parseInt(e.split("-")[2])||0}function r(e){return"<1 year"===e?[0,0]:"90 plus years"===e?[90,1e3]:e.split("-").map(e=>parseInt(e,10))}o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r}))},"40e3":function(e,t,o){"use strict";o.d(t,"c",(function(){return u})),o.d(t,"a",(function(){return j})),o.d(t,"b",(function(){return O}));o("88a7"),o("271a"),o("5494");var n=o("4971"),r=o("2ef0"),a=o("1c74"),l=o("5a0c"),c=o.n(l),s=o("8baf"),i=o("0da4"),d=o.n(i);function u(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r)/gm,"").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function p(){const e=a["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}}function b(e,t){return t||!1!==e.exportable}function m(e,t=!1){return e.filter(e=>b(e,t)).map(e=>e.label)}function f(e,t,o=!1){return t.map(t=>e.filter(e=>b(e,o)).map(e=>{let o=Object(r["get"])(t,e.path);return"function"===typeof e.formatter&&o&&(o=e.formatter(o,t)),u(e.drillable&&Array.isArray(o)?o.length:o)}))}function g(e){const{columns:t,rows:o,quarter:r,period:l,filters:s,safeMode:i}=e,d=m(t,i),u=f(t,Object(n["sortRows"])(o,(null===s||void 0===s?void 0:s.sort)||[]),i);let p=d.join(",")+"\n";return p+=u.map(e=>e.join(",")).join("\n"),p+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),r&&(p+="\nQuarter: "+r),l&&(p+="\nQuarter: "+l),p+="\ne-Mastercard Version : "+a["e"].getAppVersion(),p+="\nAPI Version "+a["e"].getApiVersion(),p+="\nSite UUID: "+a["e"].getSiteUUID(),p}function j(e){const t=new Blob([g(e)],{type:"text/csv;charset=utf-8;"}),o=document.createElement("a");o.href=window.URL.createObjectURL(t),o.setAttribute("download",e.filename+".csv"),document.body.appendChild(o),o.click(),document.body.removeChild(o)}function O(e){const{filename:t,canHorizontalPageBreak:o,columns:r,rows:a,filters:l,safeMode:c}=e,i=[m(r,c)],b=f(r,Object(n["sortRows"])(a,(null===l||void 0===l?void 0:l.sort)||[]),c),g=c?p():{},j=new s["default"]({...g}),O=j.splitTextToSize(u(t),180),h=O.length<=1?20:10*O.length;j.text(O,14,10);const w={startY:h,head:i,body:b};o&&(w.tableWidth="wrap",w.horizontalPageBreak=!0,w.horizontalPageBreakRepeat=0),d()(j,w);const v=t+".pdf";j.save(v)}},"564f":function(e,t,o){"use strict";var n=o("7a23");function r(e,t,o,r,a,l){const c=Object(n["resolveComponent"])("IonIcon"),s=Object(n["resolveComponent"])("IonButton"),i=Object(n["resolveComponent"])("IonButtons"),d=Object(n["resolveComponent"])("IonTitle"),u=Object(n["resolveComponent"])("IonToolbar"),p=Object(n["resolveComponent"])("IonHeader"),b=Object(n["resolveComponent"])("data-table"),m=Object(n["resolveComponent"])("IonContent"),f=Object(n["resolveComponent"])("IonPage");return Object(n["openBlock"])(),Object(n["createBlock"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,{slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}o("14d9");var a=o("d867"),l=o("4971"),c=o("ff79"),s=o("da44"),i=o("5a0c"),d=o.n(i),u=o("40e3"),p=Object(n["defineComponent"])({name:"DrilldownTable",components:{DataTable:l["DataTable"],IonButton:a["IonButton"],IonPage:a["IonPage"],IonHeader:a["IonHeader"],IonContent:a["IonContent"],IonToolbar:a["IonToolbar"],IonButtons:a["IonButtons"],IonTitle:a["IonTitle"],IonIcon:a["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(n["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,o,n,r)=>Object(u["a"])({rows:o,filters:n,columns:r,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:c["close"],modal:s["a"],actionBtns:t}}}),b=o("6b0d"),m=o.n(b);const f=m()(p,[["render",r]]);t["a"]=f},"5f0b":function(e,t,o){},6361:function(e,t,o){"use strict";o("0bb4")},7717:function(e,t,o){"use strict";var n=o("7a23");const r={class:"date-picker-wrapper"},a=["value"],l=["value"];function c(e,t,o,c,s,i){const d=Object(n["resolveComponent"])("ion-icon"),u=Object(n["resolveComponent"])("date-picker");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(n["withCtx"])(({inputValue:t,inputEvents:o})=>[Object(n["createElementVNode"])("div",r,[Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(n["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,a),Object(n["createVNode"])(d,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(n["toHandlers"])(o.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var s=o("d867"),i=o("ff79"),d=o("5db2"),u=o("9283"),p=Object(n["defineComponent"])({name:"DateRangePicker",components:{IonIcon:s["IonIcon"],DatePicker:d["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(n["ref"])({input:"DD/MMM/YYYY"}),r=Object(n["ref"])({visibility:"click"}),a=Object(n["computed"])({get:()=>e.modelValue,set:({start:e,end:o})=>t("update:modelValue",{start:u["c"].toStandardHisFormat(e),end:u["c"].toStandardHisFormat(o)})});return{arrowForward:i["arrowForward"],range:a,masks:o,popover:r}}}),b=(o("6361"),o("6b0d")),m=o.n(b);const f=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=f},8727:function(e,t,o){"use strict";var n=o("7a23");const r=["src"],a=["innerHTML"],l=["innerHTML"],c={key:1},s={key:2},i={key:3};function d(e,t,o,d,u,p){const b=Object(n["resolveComponent"])("ion-col"),m=Object(n["resolveComponent"])("ion-chip"),f=Object(n["resolveComponent"])("ion-row"),g=Object(n["resolveComponent"])("ion-grid"),j=Object(n["resolveComponent"])("ion-card-header"),O=Object(n["resolveComponent"])("date-range-picker"),h=Object(n["resolveComponent"])("date-picker"),w=Object(n["resolveComponent"])("data-table"),v=Object(n["resolveComponent"])("ion-card-content"),y=Object(n["resolveComponent"])("ion-card");return Object(n["openBlock"])(),Object(n["createBlock"])(y,{style:{padding:"0 !important"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(n["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,r)]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>{var t;return[Object(n["createElementVNode"])("h1",{innerHTML:e.title},null,8,a),e.subtitle?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(n["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",c," Period: "+Object(n["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",s," Quarter: "+Object(n["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",i,"Date: "+Object(n["toDisplayString"])(e.date),1)):Object(n["createCommentVNode"])("",!0),null!==(t=e.totalClients)&&void 0!==t&&t.length?(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:4,onClick:e.drillTotalClients,color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Total Clients: "+Object(n["toDisplayString"])(e.totalClients.length),1)]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0)]}),_:1})]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(v,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(w,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(n["createSlots"])({dateRange:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(n["renderList"])(e.$slots,(t,o)=>({name:o,fn:Object(n["withCtx"])(({filter:t})=>[Object(n["renderSlot"])(e.$slots,o,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}o("14d9");var u=o("d867"),p=o("ad8d"),b=o("5a0c"),m=o.n(b),f=o("5969"),g=o("4971"),j=o("b5e4"),O=o("2ef0"),h=o("40e3"),w=o("7717");const v=["value"];function y(e,t,o,r,a,l){const c=Object(n["resolveComponent"])("date-picker",!0);return Object(n["openBlock"])(),Object(n["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(n["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(n["createElementVNode"])("input",Object(n["mergeProps"])({value:e,class:"box date-picker-input"},Object(n["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,v)]),_:1},8,["modelValue","masks"])}var C=o("5db2"),D=o("9283"),V=Object(n["defineComponent"])({name:"DTDatePicker",components:{DatePicker:C["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(n["ref"])({input:"DD/MMM/YYYY"}),r=Object(n["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",D["c"].toStandardHisFormat(e))});return{date:r,masks:o}}}),k=(o("9a25"),o("6b0d")),I=o.n(k);const _=I()(V,[["render",y],["__scopeId","data-v-2b798694"]]);var B=_,R=o("7f35"),F=Object(n["defineComponent"])({name:"BaseReportTable",components:{IonCard:u["IonCard"],IonCardHeader:u["IonCardHeader"],IonCardContent:u["IonCardContent"],IonGrid:u["IonGrid"],IonRow:u["IonRow"],IonCol:u["IonCol"],DataTable:g["DataTable"],DateRangePicker:w["a"],DatePicker:B,IonChip:u["IonChip"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Array},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},useSecureExport:{type:Boolean,default:!1},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""},reportType:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const o=Object(n["ref"])({}),r=Object(n["ref"])(""),a=Object(n["computed"])(()=>Object(h["c"])(`\n      ${e.reportType} \n      ${p["b"].getLocationName()} \n      ${(e.filename||e.title).replace(e.reportType,"")} \n      ${e.period?e.period:e.date}\n    `)),l=Object(n["computed"])(()=>{var t,o;const n=[...e.actionButtons];return e.showRefreshButton&&n.push(u()),e.canExportCsv&&n.push(b(a.value,null===(t=e.quarter)||void 0===t?void 0:t.label,e.period)),e.canExportPDF&&n.push(g(a.value,null===(o=e.quarter)||void 0===o?void 0:o.label,e.period)),n}),c=Object(n["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),s=e=>{if("dateRange"in e){if(Object(O["isEmpty"])(o.value))return Object(j["e"])("Invalid date range");e.dateRange={startDate:o.value.start,endDate:o.value.end}}if("date"in e){if(Object(O["isEmpty"])(r.value))return Object(j["e"])("Invalid date");e.date=r.value}if(c.value.every(t=>!1===t.required||(Object(O["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(O["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(O["isEmpty"])(e)))))return t("customFilter",e);Object(j["e"])("Invalid filters")},i=e=>{t("drilldown",e)},d=()=>{const o={clients:e.totalClients},n={path:"clients",label:"Total Clients"};t("drilldown",{row:o,column:n})},u=()=>({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),b=(e,t,o)=>({label:"CSV",color:"primary",action:async(n,r,a,l)=>{Object(h["a"])({rows:r,filters:a,columns:l,quarter:t,period:o,filename:e})}}),g=(t,o,n)=>({label:"PDF",color:"primary",action:async(r,a,l,c)=>{let s=!1;if(e.useSecureExport){const e=await Object(R["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");s="Secure PDF"===e}Object(h["b"])({rows:a,filters:l,columns:c,quarter:o,period:n,filename:t,safeMode:s})}});return{actionBtns:l,filters:c,onCustomFilter:s,onDrilldown:i,drillTotalClients:d,dayjs:m.a,dateRange:o,pickerDate:r}}});o("2bac");const x=I()(F,[["render",d],["__scopeId","data-v-46af69ea"]]);t["a"]=x},"9a25":function(e,t,o){"use strict";o("5f0b")},ad6d3:function(e,t,o){},d10e:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("ade3"),r=o("1c74");class a extends r["e"]{constructor(e){super(),Object(n["a"])(this,"person",void 0),this.person=e}create(){return r["e"].postJson("/people",this.person)}update(e){return r["e"].putJson("people/"+e,{...this.person,program_id:r["e"].getProgramID()})}static searchFamilyName(e){return super.getJson("/search/family_name",{search_string:e})}static searchGivenName(e){return super.getJson("/search/given_name",{search_string:e})}static async getPersonFullName(e){const t=await super.getJson(`/people/${e}/names`);return t&&t.length?t[0].given_name+" "+t[0].family_name:""}static getPersons(e){return super.getJson("clients",{person_ids:e.join(",")})}}},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));var n=o("d867");const r={async show(e,t,o="custom-modal",r=!0){const a=await n["modalController"].create({component:e,cssClass:o,backdropDismiss:r,componentProps:t});a.present();const{data:l}=await a.onWillDismiss();if(l)return l},async hide(e){await n["modalController"].dismiss(e)}}},df93:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));var n=o("bef6"),r=o("5969");class a extends r["a"]{constructor(){super()}getVlCollection(){return this.getReport(`programs/${this.programID}/reports/vl_collection`)}getVLCoverage(e={}){return this.getReport(`programs/${this.programID}/reports/viral_load_coverage`,{rebuild_outcomes:!0,...e})}getMaternalStatus(e){const t=n["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,date:this.date,program_id:this.programID,report_definition:"pepfar"});return r["a"].postJson("vl_maternal_status?"+t,{patient_ids:e})}getViralLoad(e={}){return this.getReport(`programs/${this.programID}/reports/vl_disaggregated`,e)}}}}]);
//# sourceMappingURL=chunk-45535202.1771a871.js.map