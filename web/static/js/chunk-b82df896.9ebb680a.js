(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b82df896"],{"2ef6":function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));var n=r("ade3"),o=r("5969"),a=r("ad8d");class s extends o["a"]{constructor(){super(),Object(n["a"])(this,"gender",void 0),Object(n["a"])(this,"ageGroup",void 0),Object(n["a"])(this,"initialize",void 0),Object(n["a"])(this,"rebuildOutcome",void 0),this.gender="",this.ageGroup=a["a"][0],this.initialize=!0,this.rebuildOutcome=!0}async init(){this.initialize=!0;const e=await this.getCohort();return!(!e||"created"!==e.temp_disaggregated)&&(this.initialize=!1,!0)}setAgeGroup(e){this.ageGroup=e}setInitialization(e){this.initialize=e}setRebuildOutcome(e){this.rebuildOutcome=e}setGender(e){this.gender=e}getGender(){return this.gender}getCohort(){return this.getReport("cohort_disaggregated",{age_group:""+this.ageGroup,rebuild_outcome:""+this.rebuildOutcome,initialize:""+this.initialize})}getTxIpt(){return this.getReport("clients_given_ipt",{gender:this.gender,age_group:""+this.ageGroup})}getTxCurrTB(){return this.getReport("screened_for_tb",{gender:this.gender,age_group:""+this.ageGroup})}getRegimenDistribution(){return this.getReport("disaggregated_regimen_distribution",{gender:""+this.gender,age_group:""+this.ageGroup})}}},"3a8c":function(e,t,r){"use strict";function n(e){return parseInt(e.split("-")[2])||0}r.d(t,"a",(function(){return n}))},"40e3":function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r("4971"),o=r("2ef0"),a=r("1c74"),s=r("5a0c"),i=r.n(s);function l(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function c({columns:e,rows:t,quarter:r,period:s,filters:c}){let d=e.filter(e=>!1!==e.exportable).map(e=>e.label).join(",");return d+="\n",d+=Object(n["sortRows"])(t,(null===c||void 0===c?void 0:c.sort)||[]).map(t=>e.filter(e=>!1!==e.exportable).map(e=>{let r=Object(o["get"])(t,e.path);return"function"===typeof e.formatter&&r&&(r=e.formatter(r,t)),l(e.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),d+="\nDate Created:  "+i()().format("DD/MMM/YYYY HH:MM:ss"),r&&(d+="\nQuarter: "+r),s&&(d+="\nQuarter: "+s),d+="\ne-Mastercard Version : "+a["e"].getAppVersion(),d+="\nAPI Version "+a["e"].getApiVersion(),d+="\nSite UUID: "+a["e"].getSiteUUID(),d}function d(e){const t=new Blob([c(e)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(t),r.setAttribute("download",e.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},"564f":function(e,t,r){"use strict";var n=r("7a23");function o(e,t,r,o,a,s){const i=Object(n["resolveComponent"])("IonIcon"),l=Object(n["resolveComponent"])("IonButton"),c=Object(n["resolveComponent"])("IonButtons"),d=Object(n["resolveComponent"])("IonTitle"),u=Object(n["resolveComponent"])("IonToolbar"),p=Object(n["resolveComponent"])("IonHeader"),g=Object(n["resolveComponent"])("data-table"),b=Object(n["resolveComponent"])("IonContent"),m=Object(n["resolveComponent"])("IonPage");return Object(n["openBlock"])(),Object(n["createBlock"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(c,{slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(i,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,"actions-buttons":e.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}r("14d9");var a=r("d867"),s=r("4971"),i=r("ff79"),l=r("da44"),c=r("5a0c"),d=r.n(c),u=r("40e3"),p=Object(n["defineComponent"])({name:"DrilldownTable",components:{DataTable:s["DataTable"],IonButton:a["IonButton"],IonPage:a["IonPage"],IonHeader:a["IonHeader"],IonContent:a["IonContent"],IonToolbar:a["IonToolbar"],IonButtons:a["IonButtons"],IonTitle:a["IonTitle"],IonIcon:a["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(e){const t=Object(n["computed"])(()=>{const t=[...e.actionButtons];return e.canExportCsv&&t.push({label:"CSV",color:"primary",action:async(t,r,n,o)=>Object(u["a"])({rows:r,filters:n,columns:o,period:e.period.includes("Custom")?e.period.substring(6):e.period,filename:`${e.title}-${d()().format("DD-MMM-YYYY")}`})}),t});return{close:i["close"],modal:l["a"],actionBtns:t}}}),g=r("d959"),b=r.n(g);const m=b()(p,[["render",o]]);t["a"]=m},5969:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("ade3"),o=(r("14d9"),r("1c74")),a=r("9283"),s=r("bef6"),i=r("5a0c"),l=r.n(i);class c extends o["e"]{constructor(){super(),Object(n["a"])(this,"programID",void 0),Object(n["a"])(this,"startDate",void 0),Object(n["a"])(this,"endDate",void 0),Object(n["a"])(this,"date",void 0),Object(n["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=o["e"].getSessionDate(),this.programID=o["e"].getProgramID()}getDateIntervalPeriod(){return`${a["c"].toStandardHisDisplayFormat(this.startDate)} - ${a["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setQuarter(e){this.quarter=e}getReport(e,t={}){return o["e"].getJson(e,this.buildRequest(t))}getMaternalStatus(e,t="pepfar"){const r=s["a"].parameterizeObjToString(this.buildRequest({report_definition:t}));return o["e"].postJson("vl_maternal_status?"+r,{patient_ids:e})}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.quarter&&(t["quarter"]=this.quarter),{...t,...e}}static getQuarterBounds(e){const t=t=>l()(`${e}-${t}-01`).daysInMonth(),r=t=>`${e}-${t}-01 00:00`,n=r=>`${e}-${r}-${t(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:n("03")},Q2:{qtr:2,start:r("04"),end:n("06")},Q3:{qtr:3,start:r("07"),end:n("09")},Q4:{qtr:4,start:r("10"),end:n("12")}}}static getQtrByDate(e){const t=this.getQuarterBounds(e.getFullYear());for(const r in t){const{start:n,end:o}=t[r];if(e>=new Date(n)&&e<=new Date(o))return t[r]}return null}static buildQtrObj(e,t){const r=this.getQuarterBounds(t),{start:n,end:o}=r[e];return{start:n,end:o,name:`${e} ${t}`}}static getReportQuarters(e=5){const t=[];let r=new Date,n=r.getFullYear();const o=n;r=new Date(`${o}-${r.getMonth()+1}-${r.getDate()} 00:00`);const a=this.getQtrByDate(r);let s=a.qtr,i=0;4===s&&t.push(this.buildQtrObj("Q1",n+1));while(i<e)0===i&&s<4&&t.push(this.buildQtrObj("Q"+(s+1),n)),t.push(this.buildQtrObj("Q"+s,n)),s=s>0?s-=1:s,n=0==s?n-1:n,s=0==s?s+=4:s,i++;return t}}},8727:function(e,t,r){"use strict";var n=r("7a23");const o=["src"],a=["innerHTML"],s=["innerHTML"],i={key:1},l={key:2},c={key:3},d={key:4};function u(e,t,r,u,p,g){const b=Object(n["resolveComponent"])("ion-col"),m=Object(n["resolveComponent"])("ion-row"),h=Object(n["resolveComponent"])("ion-grid"),f=Object(n["resolveComponent"])("ion-card-header"),O=Object(n["resolveComponent"])("data-table"),j=Object(n["resolveComponent"])("ion-card-content"),y=Object(n["resolveComponent"])("ion-card"),w=Object(n["resolveComponent"])("Layout");return Object(n["openBlock"])(),Object(n["createBlock"])(w,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y,{class:"his-card",style:{padding:"0 !important"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("img",{src:"assets/images/"+e.reportIcon,style:Object(n["normalizeStyle"])({height:e.subtitle?7:"5rem",width:e.subtitle?7:"5rem"})},null,12,o)]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("h1",{innerHTML:e.title},null,8,a),e.subtitle?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h3",{key:0,innerHTML:e.subtitle,style:{color:"#818181"}},null,8,s)):Object(n["createCommentVNode"])("",!0),e.useDateRangeFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",i," Period: "+Object(n["toDisplayString"])(e.period),1)):e.useQuarterFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",l," Quarter: "+Object(n["toDisplayString"])(e.quarter.value),1)):e.useDateFilter?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",c,"Date: "+Object(n["toDisplayString"])(e.dayjs(e.date).format("DD/MMM/YYYY")),1)):Object(n["createCommentVNode"])("",!0),e.totalClients?(Object(n["openBlock"])(),Object(n["createElementBlock"])("h5",d,"Total Clients: "+Object(n["toDisplayString"])(e.totalClients),1)):Object(n["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(j,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"actions-buttons":e.actionBtns,"row-actions-buttons":e.rowActionButtons,"custom-filters":e.filters,config:{showIndices:e.showIndices},onCustomFilter:e.onCustomFilter,onDrilldown:e.onDrilldown,color:"custom"},Object(n["createSlots"])({_:2},[Object(n["renderList"])(e.$slots,(t,r)=>({name:r,fn:Object(n["withCtx"])(({filter:t})=>[Object(n["renderSlot"])(e.$slots,r,{filter:t})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}r("14d9");var p=r("d867"),g=r("ad8d"),b=r("5a0c"),m=r.n(b),h=r("8d56"),f=r("5969"),O=r("4971"),j=r("b5e4"),y=r("2ef0"),w=r("40e3"),D=Object(n["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:h["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:O["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(e,{emit:t}){const r=Object(n["computed"])(()=>`${g["b"].getLocationName()} ${e.title} ${e.period?e.period:e.date}`),o=Object(n["computed"])(()=>{const n=[...e.actionButtons];return e.showRefreshButton&&n.push({label:"Refresh/Rebuild",color:"success",action:()=>t("regenerate")}),e.canExportCsv&&n.push({label:"CSV",color:"primary",action:async(t,n,o,a)=>{var s;return Object(w["a"])({rows:n,filters:o,columns:a,quarter:null===(s=e.quarter)||void 0===s?void 0:s.label,period:e.period,filename:r.value})}}),n}),a=Object(n["computed"])(()=>{const t=[...e.customFilters];return e.useDateRangeFilter?t.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:e.period.split("-")[0],endDate:e.period.split("-")[1]}}):e.useQuarterFilter?t.push({id:"quarter",label:"Quarter:",type:"select",value:e.quarter,options:f["a"].getReportQuarters().map(e=>({label:e.name,value:e.name,other:e}))}):e.useDateFilter&&t.push({id:"date",label:"Date",type:"date",value:e.date}),t}),s=e=>"dateRange"in e&&new Date(e.dateRange.startDate)>new Date(e.dateRange.endDate)?Object(j["e"])("Invalid date range"):a.value.every(t=>!1===t.required||(Object(y["isEmpty"])(e[t.id])||"object"!==typeof e[t.id]?!Object(y["isEmpty"])(e[t.id]):Object.values(e[t.id]).every(e=>!Object(y["isEmpty"])(e))))?t("customFilter",e):void Object(j["e"])("Invalid filters"),i=e=>{t("drilldown",e)};return{actionBtns:o,filters:a,onCustomFilter:s,onDrilldown:i,dayjs:m.a}}}),C=r("d959"),v=r.n(C);const A=v()(D,[["render",u]]);t["a"]=A},"87e7":function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return l})),r.d(t,"d",(function(){return c}));var n=r("ade3"),o=r("5969");const a=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4PP","4PA","9PP","9PA","11PP","11PA","12PP","12PA","14PP","14PA","15PP","15PA","16P","17PP","17PA"],s=["0A","2A","4A","5A","6A","7A","8A","9A","10A","11A","12A","13A","14A","15A","16A","17A","0P","2P","4P","4PP","4PA","9P","9PP","9PA","11P","11PP","11PA","12PP","12PA","14P","14PP","14PA","15P","15PP","15PA","16P","17P","17PP","17PA"],i=["10 - 13.9 Kg","14 - 19.9 Kg","20 - 24.9 Kg","25 - 29.9 Kg","3 - 3.9 Kg","30 - 34.9 Kg","35 - 39.9 Kg","4 - 4.9 Kg","40 Kg +","40 - 49.9 Kg","50 Kg +","6 - 9.9 Kg","Unknown"],l=["pellets","tablets","granules"];class c extends o["a"]{constructor(){super(),Object(n["a"])(this,"type",void 0),this.type="pepfar"}setReportType(e){this.type=e}getTptNewInitiations(){return this.getReport(`programs/${this.programID}/reports/tpt_newly_initiated`)}getRegimenFormulationReport(e,t){return this.getReport(`programs/${this.programID}/reports/regimens_and_formulations`,{regimen:e,formulation:t})}getRegimenReport(){return this.getReport("regimen_report",{type:this.type})}getRegimenSwitchReport(e=!1){return this.getReport("regimen_switch",{pepfar:e})}getRegimensByWeight(){return this.getReport(`programs/${this.programID}/reports/regimens_by_weight_and_gender`)}getSCReport(e=!1){return this.getReport("sc_arvdisp",{pepfar:e})}}},ad8d:function(e,t,r){"use strict";r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return a}));var n=r("5969");const o=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class a extends n["a"]{constructor(){super()}getBookedAppointments(e){return n["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:e})}getViralLoadResults(e){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:e})}getOtherOutcome(e){return this.getReport("patient_outcome_list",{outcome:e})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return n["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}},da44:function(e,t,r){"use strict";r.d(t,"a",(function(){return o}));var n=r("d867");const o={async show(e,t,r="custom-modal",o=!0){const a=await n["modalController"].create({component:e,cssClass:r,backdropDismiss:o,componentProps:t});a.present();const{data:s}=await a.onWillDismiss();if(s)return s},async hide(e){await n["modalController"].dismiss(e)}}},f315:function(e,t,r){"use strict";r.r(t);var n=r("7a23");function o(e,t,r,o,a,s){const i=Object(n["resolveComponent"])("base-report-table");return Object(n["openBlock"])(),Object(n["createBlock"])(i,{title:"PEPFAR Disaggregated Report","report-icon":"reports/split.png",columns:e.columns,rows:e.rows,period:e.period,useDateRangeFilter:"",onCustomFilter:e.fetchData,onDrilldown:e.onDrilldown,onRegenerate:e.onRegenerate},null,8,["columns","rows","period","onCustomFilter","onDrilldown","onRegenerate"])}r("13d5"),r("14d9");var a=r("b211"),s=r("8727"),i=r("da44"),l=r("564f"),c=r("5a0c"),d=r.n(c),u=r("2ef6"),p=r("b5e4"),g=r("2ef0"),b=r("ad8d"),m=r("87e7"),h=r("23e6"),f=r("9283"),O=r("0011"),j=r("3a8c"),y=Object(n["defineComponent"])({name:"CohortDisaggregated",components:{BaseReportTable:s["a"]},setup(){const e=new u["a"];let t=Object(n["reactive"])({});const r=Object(n["ref"])("-");let o=Object(n["reactive"])({}),s=Object(n["reactive"])([]);const c=Object(n["computed"])(()=>Object.keys(o).sort((e,t)=>parseInt(e)-parseInt(t)).reduce((e,t)=>e.concat(o[t]),[]).map((e,t)=>({index:t+1,...e}))),y=[{path:"index",label:"#",initialSort:!0,initialSortOrder:"asc"},{path:"age_group",label:"Age Group"},{path:"gender",label:"Gender",formatter:O["f"]},{path:"txNew",label:"Tx new (new on ART)",drillable:!0},{path:"txCurr",label:"TX curr (receiving ART)",drillable:!0},{path:"txGivenIpt",label:"TX curr (received IPT)",drillable:!0},{path:"txScreenTB",label:"TX curr (screened for TB)",drillable:!0},...m["b"].map(e=>({path:e,label:e,drillable:!0})),{path:"N/A",label:"Unknown",drillable:!0},{path:"total",label:"Total",drillable:!0}],w=(e,t,r=[])=>{s.push({col:e,gender:t,data:r})},D=async(t,r)=>{const n={},o=await e.getRegimenDistribution();for(const e of[...m["b"],"N/A"]){const t=Object(g["get"])(o,e,[]);n[e]=t,w(e,r,t)}return n.total=Object.values(n).reduce((e,t)=>e.concat(t),[]),w("regimenTotals",r,n.total),n},C=(e,t)=>s.filter(r=>r.col===e&&r.gender===t).reduce((e,t)=>e.concat(t.data),[]),v=e=>{const t={};for(const r of[...m["b"],"N/A"])t[r]=C(r,e);return t},A=e=>{o[e]=[{age_group:"All",gender:"Male",txNew:C("txNew","Male"),txCurr:C("txCurr","Male"),txGivenIpt:C("txGivenIpt","Male"),txScreenTB:C("txScreenTB","Male"),...v("Male"),total:C("regimenTotals","Male")}]},I=(e,t)=>s.filter(e=>e.gender.match(/fp|fbf/i)&&e.col===t).reduce((e,t)=>e.concat(t.data||[]),[]).includes(e),R=e=>{const t=e=>s.filter(t=>"Female"===t.gender&&t.col===e).reduce((t,r)=>t.concat(r.data.filter(t=>!I(t,e))),[]),r=()=>{const e={};for(const r of[...m["b"],"N/A"])e[r]=t(r);return e};o[e]=[{age_group:"All",gender:"FNP",txNew:t("txNew"),txCurr:t("txCurr"),txGivenIpt:t("txGivenIpt"),txScreenTB:t("txScreenTB"),...r(),total:t("regimenTotals")}]},x=async r=>{e.setGender(r.altAgeGroup?r.altAgeGroup.toLowerCase():r.altGender.toLowerCase());for(const n of r.ageGroups){let a=[],s=[],i=[],l=[];const c=r.altAgeGroup?r.altAgeGroup:n;if(e.setAgeGroup(c),!(c in t)){const r=await e.getCohort();e.setRebuildOutcome(!1),t[c]=Object(g["isEmpty"])(r)?{}:r[c]}switch(Object(g["isEmpty"])(t[c])||(a=Object(g["get"])(t,`${c}.${r.gender}.tx_new`,[]),s=Object(g["get"])(t,`${c}.${r.gender}.tx_curr`,[]),i=await e.getTxIpt(),l=await e.getTxCurrTB(),w("txNew",r.altGender,a),w("txCurr",r.altGender,s),w("txGivenIpt",r.altGender,i),w("txScreenTB",r.altGender,l)),e.getGender()){case"breastfeeding":e.setAgeGroup("All"),e.setGender("Fbf");break;case"pregnant":e.setAgeGroup("All"),e.setGender("FP");break}o[r.index]||(o[r.index]=[]),o[r.index].push({age_group:n,gender:r.altGender,txNew:a,txCurr:s,txGivenIpt:i,txScreenTB:l,...await D(c,r.altGender)})}},P=async({dateRange:t},n=!1)=>{await a["a"].show(),e.setStartDate(t.startDate),e.setEndDate(t.endDate),e.setRebuildOutcome(n),e.setQuarter("pepfar"),r.value=e.getDateIntervalPeriod();const o=await e.init();if(!o)return Object(p["e"])("Unable to initialise report");await x({index:1,gender:"F",altGender:"Female",ageGroups:b["a"]}),await x({index:2,gender:"M",altGender:"Male",ageGroups:b["a"]}),A(3),await x({index:4,gender:"F",altGender:"FP",ageGroups:["All"],altAgeGroup:"Pregnant"}),await x({index:6,gender:"F",altGender:"FBf",ageGroups:["All"],altAgeGroup:"Breastfeeding"}),R(5),await a["a"].hide()},_=async()=>{o={},s=[],t={};const[e,n]=r.value.split("-");e&&n&&await P({dateRange:{startDate:d()(e).format("YYYY-MM-DD"),endDate:d()(n).format("YYYY-MM-DD")}},!0)},B=async e=>{const t=[{path:"arv_number",label:"ARV Number",preSort:j["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:e=>d()(e).format(f["a"])},{path:"gender",label:"Gender",formatter:O["f"]},{path:"address",label:"Address"}],r=e.row[e.column.path],o=Object(n["ref"])([]),a=async()=>{for(const e of r){const t=await h["a"].findByID(e),r=new h["a"](t);o.value.push({arv_number:r.getArvNumber(),birthdate:r.getBirthdate(),gender:r.getGender(),address:""+r.getCurrentVillage()})}};a(),await i["a"].show(l["a"],{columns:t,rows:o.value,title:`${e.row.age_group} ${e.column.label} | ${e.row.gender}s`})};return{rows:c,columns:y,period:r,fetchData:P,onDrilldown:B,onRegenerate:_}}}),w=r("d959"),D=r.n(w);const C=D()(y,[["render",o]]);t["default"]=C}}]);
//# sourceMappingURL=chunk-b82df896.9ebb680a.js.map