(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-361d1d4e"],{"37e6":function(e,t,r){"use strict";r.r(t);var a=r("7a23");function o(e,t,r,o,n,l){const s=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(s,{title:"MoH Survival Analysis Report","report-icon":"reports/refill.png",columns:e.columns,rows:e.rows,quarter:e.quarter,useQuarterFilter:"","custom-filters":e.customFilters,onCustomFilter:e.fetchData,onRegenerate:e.onRegenerate},null,8,["columns","rows","quarter","custom-filters","onCustomFilter","onRegenerate"])}r("14d9");var n=r("b211"),l=r("8727"),s=r("8bab"),i=r("2ef0"),c=Object(a["defineComponent"])({name:"SurvivalAnalysis",components:{BaseReportTable:l["a"]},setup(){const e=Object(a["reactive"])({}),t=Object(a["reactive"])({}),r=Object(a["ref"])([]),o=[{path:"quarter",label:"Reg Cohort",initialSort:!0,initialSortOrder:"asc",preSort:e=>parseInt(e.split(" ")[1])},{path:"interval",label:"Interval (Months)"},{path:"subgroup",label:"Sub group"},{path:"totalReg",label:"Total Reg (database)"},{path:"totalConfirmed",label:"Total Reg (Confirmed)"},{path:"alive",label:"Alive"},{path:"died",label:"Died"},{path:"defaulted",label:"Defaulted"},{path:"stopped",label:"Stopped"},{path:"transferred",label:"Transferred out"},{path:"unknown",label:"Unknown"}],l=async(a,o=!1)=>{await n["a"].show(),Object.assign(e,a.quarter),Object.assign(t,a.ageGroup);const l=new s["b"];l.setRegenerate(o),l.setQuarter(a.quarter.value),l.setAgeGroup(a.ageGroup.value);const c=await l.getSurvivalAnalysis(),u=[];Object.keys(c).filter(e=>!Object(i["isEmpty"])(c[e])).forEach(e=>{const r=c[e],a=Object.keys(Object.values(r)[0])[0],o=Object(i["get"])(r,"On antiretrovirals."+a,0),n=Object(i["get"])(r,"Patient died."+a,0),l=Object(i["get"])(r,"Defaulted."+a,0),s=Object(i["get"])(r,"Treatment stopped."+a,0),d=Object(i["get"])(r,"Patient transferred out."+a,0),p=Object(i["get"])(r,"N/A."+a,0);u.push({quarter:e,interval:a,alive:o,died:n,defaulted:l,stopped:s,transferred:d,unknown:p,subgroup:t.value,totalReg:o+n+l+s+d+p})}),r.value=u,await n["a"].hide()},c=Object(a["computed"])(()=>[{id:"ageGroup",type:"select",label:"Sub Group:",value:t,options:Object.values(s["a"]).map(e=>({label:e.match(/Women/i)?"Option B+":e,value:e}))}]),u=async()=>{e.value&&t.value&&l({quarter:e,ageGroup:t},!0)};return{rows:r,columns:o,quarter:e,customFilters:c,fetchData:l,onRegenerate:u}}}),u=r("d959"),d=r.n(u);const p=d()(c,[["render",o]]);t["default"]=p},"40e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r("4971"),o=r("2ef0"),n=r("1c74"),l=r("5a0c"),s=r.n(l);function i(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function c({columns:e,rows:t,quarter:r,period:l,filters:c}){let u=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return u+="\n",u+=Object(a["sortRows"])(t,(null===c||void 0===c?void 0:c.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(o["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),i(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),u+="\nDate Created:  "+s()().format("DD/MMM/YYYY HH:MM:ss"),r&&(u+="\nQuarter: "+r),l&&(u+="\nQuarter: "+l),u+="\ne-Mastercard Version : "+n["e"].getAppVersion(),u+="\nAPI Version "+n["e"].getApiVersion(),u+="\nSite UUID: "+n["e"].getSiteUUID(),u}function u(e){const t=new Blob([c(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},8727:function(e,t,r){"use strict";var a=r("7a23");const o=["src"],n=["innerHTML"],l=["innerHTML"],s={key:1},i={key:2},c={key:3},u={key:4};function d(e,t,r,d,p,b){const m=Object(a["resolveComponent"])("ion-col"),g=Object(a["resolveComponent"])("ion-row"),j=Object(a["resolveComponent"])("ion-grid"),f=Object(a["resolveComponent"])("ion-card-header"),O=Object(a["resolveComponent"])("data-table"),h=Object(a["resolveComponent"])("ion-card-content"),y=Object(a["resolveComponent"])("ion-card"),v=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(v,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(j,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,o)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,l)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",s," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c,"Date: "+Object(a["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",u,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(h,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({_:2},[Object(a["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,r,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}r("14d9");var p=r("d867"),b=r("ad8d"),m=r("5a0c"),g=r.n(m),j=r("8d56"),f=r("5969"),O=r("4971"),h=r("b5e4"),y=r("2ef0"),v=r("40e3"),w=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:j["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:O["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(a["computed"])(()=>`${b["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),o=Object(a["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a,o,n)=>{var l;return Object(v["a"])({rows:a,filters:o,columns:n,quarter:null===(l=e.quarter)||void 0===l?void 0:l.label,period:e.period,filename:r.value})}}),a}),n=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),l=e=>"dateRange"in e&&new Date(e.dateRange.startDate)>new Date(e.dateRange.endDate)?Object(h["e"])("Invalid date range"):n.value.every(t=>!1===t.required||(Object(y["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(y["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(y["isEmpty"])(e))))?t("customFilter",e):void Object(h["e"])("Invalid filters"),s=e=>{t("drilldown",e)};return{actionBtns:o,filters:n,onCustomFilter:l,onDrilldown:s,dayjs:g.a}}}),C=r("d959"),D=r.n(C);const R=D()(w,[["render",d]]);t["a"]=R},"8bab":function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return l}));var a,o=r("ade3"),n=r("5969");(function(e){e["GENERAL"]="General",e["CHILDREN"]="Children",e["WOMEN"]="Women"})(a||(a={}));class l extends n["a"]{constructor(){super(),Object(o["a"])(this,"ageGroup",void 0),Object(o["a"])(this,"quarter",void 0),Object(o["a"])(this,"regenerate",void 0),this.quarter="",this.regenerate=!1,this.ageGroup=a.GENERAL}setRegenerate(e){this.regenerate=e}getAgeGroup(){return this.ageGroup}setQuarter(e){this.quarter=e}setAgeGroup(e){this.ageGroup=e}getSurvivalAnalysis(){return this.getReport("cohort_survival_analysis",{quarter:this.quarter,regenerate:this.regenerate,date:this.date,age_group:this.ageGroup,program_id:this.programID})}}}}]);
//# sourceMappingURL=chunk-361d1d4e.08ab0875.js.map