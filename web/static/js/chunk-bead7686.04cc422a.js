(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bead7686"],{"3a8c":function(e,t,r){"use strict";function a(e){return parseInt(e.split("-")[2])||0}r.d(t,"a",(function(){return a}))},"40e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var a=r("4971"),o=r("2ef0"),n=r("1c74"),s=r("5a0c"),i=r.n(s);function l(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function c({columns:e,rows:t,quarter:r,period:s,filters:c}){let u=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return u+="\n",u+=Object(a["sortRows"])(t,(null===c||void 0===c?void 0:c.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(o["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),l(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),u+="\nDate Created:  "+i()().format("DD/MMM/YYYY HH:MM:ss"),r&&(u+="\nQuarter: "+r),s&&(u+="\nQuarter: "+s),u+="\ne-Mastercard Version : "+n["e"].getAppVersion(),u+="\nAPI Version "+n["e"].getApiVersion(),u+="\nSite UUID: "+n["e"].getSiteUUID(),u}function u(e){const t=new Blob([c(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},5969:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r("ade3"),o=(r("14d9"),r("1c74")),n=r("9283"),s=r("bef6"),i=r("5a0c"),l=r.n(i);class c extends o["e"]{constructor(){super(),Object(a["a"])(this,"programID",void 0),Object(a["a"])(this,"startDate",void 0),Object(a["a"])(this,"endDate",void 0),Object(a["a"])(this,"date",void 0),Object(a["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=o["e"].getSessionDate(),this.programID=o["e"].getProgramID()}getDateIntervalPeriod(){return`${n["c"].toStandardHisDisplayFormat(this.startDate)} - ${n["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return o["e"].getJson(e,this.buildRequest(t))}getMaternalStatus(e,t="pepfar"){const r=s["a"].parameterizeObjToString(this.buildRequest({report_definition:t}));return o["e"].postJson("vl_maternal_status?"+r,{patient_ids:e})}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>l()(`${e}-${t}-01`).daysInMonth(),r=t=>`${e}-${t}-01 00:00`,a=r=>`${e}-${r}-${t(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:a("03")},Q2:{qtr:2,start:r("04"),end:a("06")},Q3:{qtr:3,start:r("07"),end:a("09")},Q4:{qtr:4,start:r("10"),end:a("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const r in t){const{start:a,end:o}=t[r];if(e>=new Date(a)&&e<=new Date(o))return t[r]}return null}static buildQtrObj(e,t){const r=this.getQuarterBounds(t),{start:a,end:o}=r[e];return{start:a,end:o,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let r=new Date,a=r.getFullYear();const o=a;r=new Date(`${o}-${r.getMonth()+1}-${r.getDate()} 00:00`);const n=this.getQtrByDate(r);let s=n.qtr,i=0;4===s&&t.push(this.buildQtrObj("Q1",a+1));while(i<e)0===i&&s<4&&t.push(this.buildQtrObj("Q"+(s+1),a)),t.push(this.buildQtrObj("Q"+s,a)),s=s>0?s-=1:s,a=0==s?a-1:a,s=0==s?s+=4:s,i++;return t}}},8727:function(e,t,r){"use strict";var a=r("7a23");const o=["src"],n=["innerHTML"],s=["innerHTML"],i={key:1},l={key:2},c={key:3},u={key:4};function d(e,t,r,d,p,b){const m=Object(a["resolveComponent"])("ion-col"),g=Object(a["resolveComponent"])("ion-row"),h=Object(a["resolveComponent"])("ion-grid"),f=Object(a["resolveComponent"])("ion-card-header"),y=Object(a["resolveComponent"])("data-table"),j=Object(a["resolveComponent"])("ion-card-content"),O=Object(a["resolveComponent"])("ion-card"),D=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(D,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{class:"his-card",style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(a["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,o)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:e.title},null,8,n),e.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,s)):Object(a["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Period: "+Object(a["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",l," Quarter: "+Object(a["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c,"Date: "+Object(a["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(a["createCommentVNode"])("",!0),e.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",u,"Total Clients: "+Object(a["toDisplayString"])(e.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(j,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(a["createSlots"])({_:2},[Object(a["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(a["withCtx"])(({filter:t})=>[Object(a["renderSlot"])(e.$slots,r,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}r("14d9");var p=r("d867"),b=r("ad8d"),m=r("5a0c"),g=r.n(m),h=r("8d56"),f=r("5969"),y=r("4971"),j=r("b5e4"),O=r("2ef0"),D=r("40e3"),w=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:h["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:y["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(a["computed"])(()=>`${b["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),o=Object(a["computed"])(()=>{const a=[...e.actionButtons];return e.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(t,a,o,n)=>{var s;return Object(D["a"])({rows:a,filters:o,columns:n,quarter:null===(s=e.quarter)||void 0===s?void 0:s.label,period:e.period,filename:r.value})}}),a}),n=Object(a["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),s=e=>"dateRange"in e&&new Date(e.dateRange.startDate)>new Date(e.dateRange.endDate)?Object(j["e"])("Invalid date range"):n.value.every(t=>!1===t.required||(Object(O["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(O["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(O["isEmpty"])(e))))?t("customFilter",e):void Object(j["e"])("Invalid filters"),i=e=>{t("drilldown",e)};return{actionBtns:o,filters:n,onCustomFilter:s,onDrilldown:i,dayjs:g.a}}}),v=r("d959"),C=r.n(v);const R=C()(w,[["render",d]]);t["a"]=R},"98aa":function(e,t,r){"use strict";r.r(t);var a=r("7a23");function o(e,t,r,o,n,s){const i=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{title:e.title,"report-icon":"reports/vl.png",period:e.period,columns:e.columns,rows:e.rows,rowActionButtons:e.rowActionBtns,"custom-filters":e.filters,useDateRangeFilter:"",onRegenerate:e.regenerateReport,onCustomFilter:e.fetchData},null,8,["title","period","columns","rows","rowActionButtons","custom-filters","onRegenerate","onCustomFilter"])}r("14d9");var n=r("b211"),s=r("afbc"),i=r("8727"),l=r("9283"),c=r("0011"),u=r("3a8c"),d=r("ad8d"),p=r("2ef0"),b=Object(a["defineComponent"])({name:"ClinicViralLoad",components:{BaseReportTable:i["a"]},setup(){const e=Object(a["ref"])("-"),t=Object(a["ref"])([]),r=Object(a["reactive"])({}),o=new d["b"],i=Object(a["computed"])(()=>Object(p["isEmpty"])(r)?"Clinic Viral Load Report":r.value+" Report"),b=[{path:"arv_number",label:"ARV Number",preSort:u["a"],initialSort:!0},{path:"gender",label:"Gender",formatter:c["f"]},{path:"birthdate",label:"Date of Birth",formatter:l["c"].toStandardHisDisplayFormat},{path:"specimen",label:"Specimen"},{path:"order_date",label:"Ordered",formatter:l["c"].toStandardHisDisplayFormat},{path:"result_modifier",label:"Result",formatter:(e,t)=>`${t.result_modifier||""} ${t.result}`},{path:"result_date",label:"Released",formatter:l["c"].toStandardHisDisplayFormat}],m=async a=>{await n["a"].show(),o.setStartDate(a.dateRange.startDate),o.setEndDate(a.dateRange.endDate),e.value=o.getDateIntervalPeriod(),Object.assign(r,a.type),t.value=await o.getViralLoadResults(r.value),await n["a"].hide()},g=async()=>{e.value&&r.value&&(await n["a"].show(),t.value=await o.getViralLoadResults(r.value),await n["a"].hide())},h=[{label:"Select",default:!0,action:e=>{s["a"].push("/emc/patient/"+e["patient_id"])}}],f=Object(a["computed"])(()=>[{id:"type",label:"Select result type",type:"select",value:r,options:[{label:"Viraemia 1000+",value:"viraemia-1000"},{label:"Suppressed",value:"suppressed"},{label:"Low level viraemia",value:"low-level-viraemia"}]}]);return{title:i,period:e,rows:t,columns:b,rowActionBtns:h,filters:f,regenerateReport:g,fetchData:m}}}),m=r("d959"),g=r.n(m);const h=g()(b,[["render",o]]);t["default"]=h},ad8d:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return n}));var a=r("5969");const o=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class n extends a["a"]{constructor(){super()}getBookedAppointments(e){return a["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:e})}getViralLoadResults(e){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:e})}getOtherOutcome(e){return this.getReport("patient_outcome_list",{outcome:e})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return a["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}}}]);
//# sourceMappingURL=chunk-bead7686.04cc422a.js.map