(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46030cac"],{"37e6":function(e,t,a){"use strict";a.r(t);var r=a("7a23");function o(e,t,a,o,n,l){const c=Object(r["resolveComponent"])("base-report-table");return Object(r["openBlock"])(),Object(r["createBlock"])(c,{title:"MoH Survival Analysis Report","report-icon":"reports/refill.png",columns:e.columns,rows:e.rows,quarter:e.quarter,filename:e.filename,useQuarterFilter:"","custom-filters":e.customFilters,onCustomFilter:e.fetchData,onRegenerate:e.onRegenerate},null,8,["columns","rows","quarter","filename","custom-filters","onCustomFilter","onRegenerate"])}a("14d9");var n=a("b211"),l=a("8727"),c=a("8bab"),s=a("2ef0"),i=Object(r["defineComponent"])({name:"SurvivalAnalysis",components:{BaseReportTable:l["a"]},setup(){const e=Object(r["reactive"])({}),t=Object(r["reactive"])({}),a=Object(r["computed"])(()=>`MoH Survival Analysis (${t.value}) Report`),o=Object(r["ref"])([]),l=[{path:"quarter",label:"Reg Cohort",initialSort:!0,initialSortOrder:"asc",preSort:e=>parseInt(e.split(" ")[1])},{path:"interval",label:"Interval (Months)"},{path:"subgroup",label:"Sub group"},{path:"totalReg",label:"Total Reg (database)"},{path:"totalConfirmed",label:"Total Reg (Confirmed)"},{path:"alive",label:"Alive"},{path:"died",label:"Died"},{path:"defaulted",label:"Defaulted"},{path:"stopped",label:"Stopped"},{path:"transferred",label:"Transferred out"},{path:"unknown",label:"Unknown"}],i=async(a,r=!1)=>{await n["a"].show(),Object.assign(e,a.quarter),Object.assign(t,a.ageGroup);const l=new c["b"];l.setRegenerate(r),l.setQuarter(a.quarter.value),l.setAgeGroup(a.ageGroup.value);const i=await l.getSurvivalAnalysis(),u=[];Object.keys(i).filter(e=>!Object(s["isEmpty"])(i[e])).forEach(e=>{const a=i[e],r=Object.keys(Object.values(a)[0])[0],o=Object(s["get"])(a,"On antiretrovirals."+r,0),n=Object(s["get"])(a,"Patient died."+r,0),l=Object(s["get"])(a,"Defaulted."+r,0),c=Object(s["get"])(a,"Treatment stopped."+r,0),d=Object(s["get"])(a,"Patient transferred out."+r,0),p=Object(s["get"])(a,"N/A."+r,0);u.push({quarter:e,interval:r,alive:o,died:n,defaulted:l,stopped:c,transferred:d,unknown:p,subgroup:t.value,totalReg:o+n+l+c+d+p})}),o.value=u,await n["a"].hide()},u=Object(r["computed"])(()=>[{id:"ageGroup",type:"select",label:"Sub Group:",value:t,options:Object.values(c["a"]).map(e=>({label:e.match(/Women/i)?"Option B+":e,value:e}))}]),d=async()=>{e.value&&t.value&&i({quarter:e,ageGroup:t},!0)};return{rows:o,columns:l,quarter:e,customFilters:u,filename:a,fetchData:i,onRegenerate:d}}}),u=a("d959"),d=a.n(u);const p=d()(i,[["render",o]]);t["default"]=p},"40e3":function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var r=a("4971"),o=a("2ef0"),n=a("1c74"),l=a("5a0c"),c=a.n(l);function s(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function i({columns:e,rows:t,quarter:a,period:l,filters:i}){let u=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return u+="\n",u+=Object(r["sortRows"])(t,(null===i||void 0===i?void 0:i.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let a=Object(o["get"])(t,e.path);return"function"===typeof e.formatter&&a&&(a=e.formatter(a,t)),s(e.drillable&&Array.isArray(a)?a.length:a)}).join(",")).join("\n"),u+="\nDate Created:  "+c()().format("DD/MMM/YYYY HH:MM:ss"),a&&(u+="\nQuarter: "+a),l&&(u+="\nQuarter: "+l),u+="\ne-Mastercard Version : "+n["e"].getAppVersion(),u+="\nAPI Version "+n["e"].getApiVersion(),u+="\nSite UUID: "+n["e"].getSiteUUID(),u}function u(e){const t=new Blob([i(e)],{type:"text/csv;charset=utf-8;"}),a=document.createElement("a");a.href=window.URL.createObjectURL(t),a.setAttribute("download",e.filename+".csv"),document.body.appendChild(a),a.click(),document.body.removeChild(a)}},"5ded":function(e,t,a){},6361:function(e,t,a){"use strict";a("cac1")},7717:function(e,t,a){"use strict";var r=a("7a23");const o={class:"date-picker-wrapper"},n=["value"],l=["value"];function c(e,t,a,c,s,i){const u=Object(r["resolveComponent"])("ion-icon"),d=Object(r["resolveComponent"])("date-picker");return Object(r["openBlock"])(),Object(r["createBlock"])(d,{modelValue:e.range,"onUpdate:modelValue":t[0]||(t[0]=t=>e.range=t),"is-range":"",masks:e.masks,popover:e.popover},{default:Object(r["withCtx"])(({inputValue:t,inputEvents:a})=>[Object(r["createElementVNode"])("div",o,[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.start,class:"box date-picker-input"},Object(r["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,n),Object(r["createVNode"])(u,{icon:e.arrowForward,class:"date-picker-icon"},null,8,["icon"]),Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:t.end,class:"box date-picker-input"},Object(r["toHandlers"])(a.start,!0),{placeholder:"DD/MMM/YYYY"}),null,16,l)])]),_:1},8,["modelValue","masks","popover"])}var s=a("d867"),i=a("ff79"),u=a("0261"),d=a("9283"),p=Object(r["defineComponent"])({name:"DateRangePicker",components:{IonIcon:s["IonIcon"],DatePicker:u["b"]},props:{modelValue:{type:Object,default:()=>({start:"",end:""})}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(r["ref"])({input:"DD/MMM/YYYY"}),o=Object(r["ref"])({visibility:"click"}),n=Object(r["computed"])({get:()=>e.modelValue,set:({start:e,end:a})=>t("update:modelValue",{start:d["c"].toStandardHisFormat(e),end:d["c"].toStandardHisFormat(a)})});return{arrowForward:i["arrowForward"],range:n,masks:a,popover:o}}}),b=(a("6361"),a("d959")),m=a.n(b);const j=m()(p,[["render",c],["__scopeId","data-v-4991088d"]]);t["a"]=j},"7f7e":function(e,t,a){},8727:function(e,t,a){"use strict";var r=a("7a23");const o=["src"],n=["innerHTML"],l=["innerHTML"],c={key:1},s={key:2},i={key:3},u={key:4};function d(e,t,a,d,p,b){const m=Object(r["resolveComponent"])("ion-col"),j=Object(r["resolveComponent"])("ion-row"),O=Object(r["resolveComponent"])("ion-grid"),f=Object(r["resolveComponent"])("ion-card-header"),g=Object(r["resolveComponent"])("date-range-picker"),v=Object(r["resolveComponent"])("date-picker"),h=Object(r["resolveComponent"])("data-table"),y=Object(r["resolveComponent"])("ion-card-content"),w=Object(r["resolveComponent"])("ion-card");return Object(r["openBlock"])(),Object(r["createBlock"])(w,{style:{padding:"0 !important"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(r["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,o)]),_:1}),Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(r["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",c," Period: "+Object(r["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",s," Quarter: "+Object(r["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",i,"Date: "+Object(r["toDisplayString"])(e.date),1)):Object(r["createCommentVNode"])("",!0),e.totalClients?(Object(r["openBlock"])(),Object(r["createElementBlock"])("h5",u,"Total Clients: "+Object(r["toDisplayString"])(e.totalClients),1)):Object(r["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(y,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(r["createSlots"])({dateRange:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,{modelValue:e.dateRange,"onUpdate:modelValue":t[0]||(t[0]=t=>e.dateRange=t)},null,8,["modelValue"])]),datePicker:Object(r["withCtx"])(()=>[Object(r["createVNode"])(v,{modelValue:e.pickerDate,"onUpdate:modelValue":t[1]||(t[1]=t=>e.pickerDate=t)},null,8,["modelValue"])]),_:2},[Object(r["renderList"])(e.$slots,(t,a)=>({name:a,fn:Object(r["withCtx"])(({filter:t})=>[Object(r["renderSlot"])(e.$slots,a,{filter:t},void 0,!0)])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})}a("14d9");var p=a("d867"),b=a("ad8d"),m=a("5a0c"),j=a.n(m),O=a("5969"),f=a("4971"),g=a("b5e4"),v=a("2ef0"),h=a("40e3"),y=a("7717");const w=["value"];function C(e,t,a,o,n,l){const c=Object(r["resolveComponent"])("date-picker",!0);return Object(r["openBlock"])(),Object(r["createBlock"])(c,{mode:"date",modelValue:e.date,"onUpdate:modelValue":t[0]||(t[0]=t=>e.date=t),masks:e.masks},{default:Object(r["withCtx"])(({inputValue:e,inputEvents:t})=>[Object(r["createElementVNode"])("input",Object(r["mergeProps"])({value:e,class:"box date-picker-input"},Object(r["toHandlers"])(t,!0),{placeholder:"DD/MMM/YYYY"}),null,16,w)]),_:1},8,["modelValue","masks"])}var k=a("0261"),D=a("9283"),R=Object(r["defineComponent"])({name:"DTDatePicker",components:{DatePicker:k["b"]},props:{modelValue:{type:String,default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const a=Object(r["ref"])({input:"DD/MMM/YYYY"}),o=Object(r["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",D["c"].toStandardHisFormat(e))});return{date:o,masks:a}}}),V=(a("9a25"),a("d959")),B=a.n(V);const I=B()(R,[["render",C],["__scopeId","data-v-2b798694"]]);var S=I,E=Object(r["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:f["DataTable"],DateRangePicker:y["a"],DatePicker:S},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1},filename:{type:String,default:""}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const a=Object(r["ref"])({}),o=Object(r["ref"])(""),n=Object(r["computed"])(()=>`${b["b"].getLocationName()} ${e.filename||e.title} ${e.period?e.period:e.date}`),l=Object(r["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a,r,o)=>{var l;return Object(h["a"])({rows:a,filters:r,columns:o,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:n.value})}}),a}),c=Object(r["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",slotName:"dateRange",gridSize:5,value:{start:e.period.split("-")[0],end:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:O["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",slotName:"datePicker",value:e.date}),t}),s=e=>{if("dateRange"in e){if(Object(v["isEmpty"])(a.value))return Object(g["e"])("Invalid date range");e.dateRange={startDate:a.value.start,endDate:a.value.end}}if("date"in e){if(Object(v["isEmpty"])(o.value))return Object(g["e"])("Invalid date");e.date=o.value}if(c.value.every(t=>!1===t.required||(Object(v["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(v["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(v["isEmpty"])(e)))))return t("customFilter",e);Object(g["e"])("Invalid filters")},i=e=>{t("drilldown",e)};return{actionBtns:l,filters:c,onCustomFilter:s,onDrilldown:i,dayjs:j.a,dateRange:a,pickerDate:o}}});a("f51e");const F=B()(E,[["render",d],["__scopeId","data-v-4d9b68a1"]]);t["a"]=F},"8bab":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return l}));var r,o=a("ade3"),n=a("5969");(function(e){e["GENERAL"]="General",e["CHILDREN"]="Children",e["WOMEN"]="Women"})(r||(r={}));class l extends n["a"]{constructor(){super(),Object(o["a"])(this,"ageGroup",void 0),Object(o["a"])(this,"quarter",void 0),Object(o["a"])(this,"regenerate",void 0),this.quarter="",this.regenerate=!1,this.ageGroup=r.GENERAL}setRegenerate(e){this.regenerate=e}getAgeGroup(){return this.ageGroup}setQuarter(e){this.quarter=e}setAgeGroup(e){this.ageGroup=e}getSurvivalAnalysis(){return this.getReport("cohort_survival_analysis",{quarter:this.quarter,regenerate:this.regenerate,date:this.date,age_group:this.ageGroup,program_id:this.programID})}}},"9a25":function(e,t,a){"use strict";a("5ded")},cac1:function(e,t,a){},f51e:function(e,t,a){"use strict";a("7f7e")}}]);
//# sourceMappingURL=chunk-46030cac.aa067b48.js.map