(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5224c7ba"],{"3a8c":function(t,e,r){"use strict";function o(t){return parseInt(t.split("-")[2])||0}r.d(e,"a",(function(){return o}))},"40e3":function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var o=r("4971"),a=r("2ef0"),n=r("1c74"),s=r("5a0c"),i=r.n(s);function l(t){try{return t.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(e){return t}}function c({columns:t,rows:e,quarter:r,period:s,filters:c}){let d=t.filter(t=>!1!==t.exportable).map(t=>t.label).join(",");return d+="\n",d+=Object(o["sortRows"])(e,(null===c||void 0===c?void 0:c.sort)||[]).map(e=>t.filter(t=>!1!==t.exportable).map(t=>{let r=Object(a["get"])(e,t.path);return"function"===typeof t.formatter&&r&&(r=t.formatter(r,e)),l(t.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),d+="\nDate Created:  "+i()().format("DD/MMM/YYYY HH:MM:ss"),r&&(d+="\nQuarter: "+r),s&&(d+="\nQuarter: "+s),d+="\ne-Mastercard Version : "+n["e"].getAppVersion(),d+="\nAPI Version "+n["e"].getApiVersion(),d+="\nSite UUID: "+n["e"].getSiteUUID(),d}function d(t){const e=new Blob([c(t)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(e),r.setAttribute("download",t.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},"564f":function(t,e,r){"use strict";var o=r("7a23");function a(t,e,r,a,n,s){const i=Object(o["resolveComponent"])("IonIcon"),l=Object(o["resolveComponent"])("IonButton"),c=Object(o["resolveComponent"])("IonButtons"),d=Object(o["resolveComponent"])("IonTitle"),u=Object(o["resolveComponent"])("IonToolbar"),p=Object(o["resolveComponent"])("IonHeader"),b=Object(o["resolveComponent"])("data-table"),g=Object(o["resolveComponent"])("IonContent"),m=Object(o["resolveComponent"])("IonPage");return Object(o["openBlock"])(),Object(o["createBlock"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(p,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(c,{slot:"end"},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(l,{slot:"end",onClick:e[0]||(e[0]=e=>t.modal.hide()),"icon-only":""},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(i,{icon:t.close},null,8,["icon"])]),_:1})]),_:1}),Object(o["createVNode"])(d,null,{default:Object(o["withCtx"])(()=>[Object(o["createTextVNode"])(Object(o["toDisplayString"])(t.title),1)]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(b,{rows:t.rows,"async-rows":t.asyncRows,columns:t.columns,"row-actions-buttons":t.rowActionButtons,"actions-buttons":t.actionBtns,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons","actions-buttons"])]),_:1})]),_:1})}r("14d9");var n=r("d867"),s=r("4971"),i=r("ff79"),l=r("da44"),c=r("5a0c"),d=r.n(c),u=r("40e3"),p=Object(o["defineComponent"])({name:"DrilldownTable",components:{DataTable:s["DataTable"],IonButton:n["IonButton"],IonPage:n["IonPage"],IonHeader:n["IonHeader"],IonContent:n["IonContent"],IonToolbar:n["IonToolbar"],IonButtons:n["IonButtons"],IonTitle:n["IonTitle"],IonIcon:n["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},period:{type:String,default:""}},setup(t){const e=Object(o["computed"])(()=>{const e=[...t.actionButtons];return t.canExportCsv&&e.push({label:"CSV",color:"primary",action:async(e,r,o,a)=>Object(u["a"])({rows:r,filters:o,columns:a,period:t.period.includes("Custom")?t.period.substring(6):t.period,filename:`${t.title}-${d()().format("DD-MMM-YYYY")}`})}),e});return{close:i["close"],modal:l["a"],actionBtns:e}}}),b=r("d959"),g=r.n(b);const m=g()(p,[["render",a]]);e["a"]=m},5969:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var o=r("ade3"),a=(r("14d9"),r("1c74")),n=r("9283"),s=r("bef6"),i=r("5a0c"),l=r.n(i);class c extends a["e"]{constructor(){super(),Object(o["a"])(this,"programID",void 0),Object(o["a"])(this,"startDate",void 0),Object(o["a"])(this,"endDate",void 0),Object(o["a"])(this,"date",void 0),Object(o["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getDateIntervalPeriod(){return`${n["c"].toStandardHisDisplayFormat(this.startDate)} - ${n["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setQuarter(t){this.quarter=t}getReport(t,e={}){return a["e"].getJson(t,this.buildRequest(e))}getMaternalStatus(t,e="pepfar"){const r=s["a"].parameterizeObjToString(this.buildRequest({report_definition:e}));return a["e"].postJson("vl_maternal_status?"+r,{patient_ids:t})}buildRequest(t={}){const e={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(e["start_date"]=this.startDate,e["end_date"]=this.endDate),this.quarter&&(e["quarter"]=this.quarter),{...e,...t}}static getQuarterBounds(t){const e=e=>l()(`${t}-${e}-01`).daysInMonth(),r=e=>`${t}-${e}-01 00:00`,o=r=>`${t}-${r}-${e(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:o("03")},Q2:{qtr:2,start:r("04"),end:o("06")},Q3:{qtr:3,start:r("07"),end:o("09")},Q4:{qtr:4,start:r("10"),end:o("12")}}}static getQtrByDate(t){const e=this.getQuarterBounds(t.getFullYear());for(const r in e){const{start:o,end:a}=e[r];if(t>=new Date(o)&&t<=new Date(a))return e[r]}return null}static buildQtrObj(t,e){const r=this.getQuarterBounds(e),{start:o,end:a}=r[t];return{start:o,end:a,name:`${t} ${e}`}}static getReportQuarters(t=5){const e=[];let r=new Date,o=r.getFullYear();const a=o;r=new Date(`${a}-${r.getMonth()+1}-${r.getDate()} 00:00`);const n=this.getQtrByDate(r);let s=n.qtr,i=0;4===s&&e.push(this.buildQtrObj("Q1",o+1));while(i<t)0===i&&s<4&&e.push(this.buildQtrObj("Q"+(s+1),o)),e.push(this.buildQtrObj("Q"+s,o)),s=s>0?s-=1:s,o=0==s?o-1:o,s=0==s?s+=4:s,i++;return e}}},8727:function(t,e,r){"use strict";var o=r("7a23");const a=["src"],n=["innerHTML"],s=["innerHTML"],i={key:1},l={key:2},c={key:3},d={key:4};function u(t,e,r,u,p,b){const g=Object(o["resolveComponent"])("ion-col"),m=Object(o["resolveComponent"])("ion-row"),h=Object(o["resolveComponent"])("ion-grid"),f=Object(o["resolveComponent"])("ion-card-header"),j=Object(o["resolveComponent"])("data-table"),y=Object(o["resolveComponent"])("ion-card-content"),O=Object(o["resolveComponent"])("ion-card"),w=Object(o["resolveComponent"])("Layout");return Object(o["openBlock"])(),Object(o["createBlock"])(w,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(O,{class:"his-card",style:{padding:"0 !important"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(f,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(h,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(m,null,{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(g,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("img",{src:"assets/images/"+t.reportIcon,style:Object(o["normalizeStyle"])({height:t.subtitle?7:"5rem",width:t.subtitle?7:"5rem"})},null,12,a)]),_:1}),Object(o["createVNode"])(g,null,{default:Object(o["withCtx"])(()=>[Object(o["createElementVNode"])("h1",{innerHTML:t.title},null,8,n),t.subtitle?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h3",{key:0,innerHTML:t.subtitle,style:{color:"#818181"}},null,8,s)):Object(o["createCommentVNode"])("",!0),t.useDateRangeFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",i," Period: "+Object(o["toDisplayString"])(t.period),1)):t.useQuarterFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",l," Quarter: "+Object(o["toDisplayString"])(t.quarter.value),1)):t.useDateFilter?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",c,"Date: "+Object(o["toDisplayString"])(t.dayjs(t.date).format("DD/MMM/YYYY")),1)):Object(o["createCommentVNode"])("",!0),t.totalClients?(Object(o["openBlock"])(),Object(o["createElementBlock"])("h5",d,"Total Clients: "+Object(o["toDisplayString"])(t.totalClients),1)):Object(o["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(o["createVNode"])(y,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(o["withCtx"])(()=>[Object(o["createVNode"])(j,{rows:t.rows,"async-rows":t.asyncRows,columns:t.columns,"actions-buttons":t.actionBtns,"row-actions-buttons":t.rowActionButtons,"custom-filters":t.filters,config:{showIndices:t.showIndices},onCustomFilter:t.onCustomFilter,onDrilldown:t.onDrilldown,color:"custom"},Object(o["createSlots"])({_:2},[Object(o["renderList"])(t.$slots,(e,r)=>({name:r,fn:Object(o["withCtx"])(({filter:e})=>[Object(o["renderSlot"])(t.$slots,r,{filter:e})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}r("14d9");var p=r("d867"),b=r("ad8d"),g=r("5a0c"),m=r.n(g),h=r("8d56"),f=r("5969"),j=r("4971"),y=r("b5e4"),O=r("2ef0"),w=r("40e3"),D=Object(o["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:h["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:j["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(t,{emit:e}){const r=Object(o["computed"])(()=>`${b["b"].getLocationName()} ${t.title} ${t.period?t.period:t.date}`),a=Object(o["computed"])(()=>{const o=[...t.actionButtons];return t.showRefreshButton&&o.push({label:"Refresh/Rebuild",color:"success",action:()=>e("regenerate")}),t.canExportCsv&&o.push({label:"CSV",color:"primary",action:async(e,o,a,n)=>{var s;return Object(w["a"])({rows:o,filters:a,columns:n,quarter:null===(s=t.quarter)||void 0===s?void 0:s.label,period:t.period,filename:r.value})}}),o}),n=Object(o["computed"])(()=>{const e=[...t.customFilters];return t.useDateRangeFilter?e.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:t.period.split("-")[0],endDate:t.period.split("-")[1]}}):t.useQuarterFilter?e.push({id:"quarter",label:"Quarter:",type:"select",value:t.quarter,options:f["a"].getReportQuarters().map(t=>({label:t.name,value:t.name,other:t}))}):t.useDateFilter&&e.push({id:"date",label:"Date",type:"date",value:t.date}),e}),s=t=>"dateRange"in t&&new Date(t.dateRange.startDate)>new Date(t.dateRange.endDate)?Object(y["e"])("Invalid date range"):n.value.every(e=>!1===e.required||(Object(O["isEmpty"])(t[e.id])||"object"!==typeof t[e.id]?!Object(O["isEmpty"])(t[e.id]):Object.values(t[e.id]).every(t=>!Object(O["isEmpty"])(t))))?e("customFilter",t):void Object(y["e"])("Invalid filters"),i=t=>{e("drilldown",t)};return{actionBtns:a,filters:n,onCustomFilter:s,onDrilldown:i,dayjs:m.a}}}),v=r("d959"),C=r.n(v);const I=C()(D,[["render",u]]);e["a"]=I},"9a5e":function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return d}));var o=r("ade3"),a=(r("14d9"),r("13d5"),r("5969")),n=r("bef6"),s=r("2ef0"),i=r("ad8d");const l=["F","M"],c=["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Tranferred out","Refused (Stopped)"];class d extends a["a"]{constructor(){super(),Object(o["a"])(this,"org",void 0),Object(o["a"])(this,"initializeArvRefillReportTables",void 0),this.org="pepfar",this.initializeArvRefillReportTables=!0}initArvRefillPeriod(t){this.initializeArvRefillReportTables=t}setOrg(t){this.org=t}getClinicTxRtt(){return this.getReport(`programs/${this.programID}/reports/clinic_tx_rtt`)}getTxMMDClientLevelData(t){const e=n["a"].parameterizeObjToString({start_date:this.startDate,end_date:this.endDate,program_id:this.programID,date:this.date,org:this.org}),r="tx_mmd_client_level_data?"+e;return a["a"].postJson(r,{patient_ids:t})}remapTxClientLevelData(t){return t.map(t=>{let e=null;const r=[];for(const o in t){const a=Object.values(t[o]);a.forEach(t=>{for(const o in t){const a=t[o];e||(e={id:a.arv_number,dob:a.birthdate,dispenseDate:a.start_date}),r.push({name:a.drug_name,quantity:a.quantity,dose:a.dose_per_day})}})}return{...e,drugs:r}})}getTxCurrMMDReport(t,e){return this.getReport("arv_refill_periods",{org:this.org,min_age:""+t,max_age:""+e,initialize_tables:""+this.initializeArvRefillReportTables})}getTxMlReport(){return this.getReport("tx_ml")}getTxRttReport(){return this.getReport("tx_rtt")}buildTxMlReportData(t){const e=[];return l.forEach(r=>{i["a"].forEach(o=>{const a={gender:r,age_group:o};c.forEach((e,n)=>{a[e]=Object(s["get"])(t,`${o}.${r}[${n}]`,[])}),e.push(a)})}),e}aggregateTxML(t,e,r){return Object.values(t).reduce((t,o)=>o[e]?[...o[e][c.indexOf(r)],...t]:t,[])}getAggregatedTxMLMaleData(t){const e={gender:"Male",age_group:"All"};for(const r of c)e[r]=this.aggregateTxML(t,"M",r);return e}async getAggregatedTxMLMaternalStatus(t){const e=c.reduce((e,r)=>[...e,{indicator:r,data:this.aggregateTxML(t,"F",r)}],[]),r=Object(s["uniq"])(e.reduce((t,e)=>[...t,...e.data],[]).map(t=>t.patient_id)),o=await this.getMaternalStatus(r),a=o.FBf.concat(o.FP),n=[];for(const s of["FP","FNP","FBf"]){const t={gender:s,age_group:"All"};for(const r of c)t[r]=e.reduce((t,e)=>e.indicator===r?[...t,...e.data]:t,[]).filter(t=>"FNP"===s?!a.includes(t.patient_id):o[s].includes(t.patient_id));n.push(t)}return n}}},ad8d:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return n}));var o=r("5969");const a=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class n extends o["a"]{constructor(){super()}getBookedAppointments(t){return o["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:t})}getViralLoadResults(t){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:t})}getOtherOutcome(t){return this.getReport("patient_outcome_list",{outcome:t})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return o["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}},da44:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var o=r("d867");const a={async show(t,e,r="custom-modal",a=!0){const n=await o["modalController"].create({component:t,cssClass:r,backdropDismiss:a,componentProps:e});n.present();const{data:s}=await n.onWillDismiss();if(s)return s},async hide(t){await o["modalController"].dismiss(t)}}},f55f:function(t,e,r){"use strict";r.r(e);var o=r("7a23");function a(t,e,r,a,n,s){const i=Object(o["resolveComponent"])("base-report-table");return Object(o["openBlock"])(),Object(o["createBlock"])(i,{title:"PEPFAR TX ML Report",subtitle:"Clients that were Alive and on treatment before the reporting period and their “next appointment date / drug runout” date falls within the reporting period. 30 or more days have gone between their appointment date and the end of the reporting period without any clinical dispensation visit","report-icon":"reports/tx-ml.png",columns:t.columns,rows:t.rows,period:t.period,useDateRangeFilter:"",onCustomFilter:t.fetchData,onDrilldown:t.onDrilldown,showIndices:""},null,8,["columns","rows","period","onCustomFilter","onDrilldown"])}r("14d9");var n=r("b211"),s=r("8727"),i=r("da44"),l=r("564f"),c=r("9a5e"),d=r("23e6"),u=r("9283"),p=r("5a0c"),b=r.n(p),g=r("0011"),m=r("3a8c"),h=Object(o["defineComponent"])({name:"TBPrev",components:{BaseReportTable:s["a"]},setup(){const t=Object(o["ref"])("-"),e=Object(o["ref"])([]),r=[{path:"age_group",label:"Age group"},{path:"gender",label:"Gender",formatter:g["f"]},...c["b"].map(t=>({path:t,label:t,drillable:!0}))],a=async({dateRange:r})=>{await n["a"].show();const o=new c["a"];o.setStartDate(r.startDate),o.setEndDate(r.endDate),t.value=o.getDateIntervalPeriod();const a=await o.getTxMlReport();e.value=o.buildTxMlReportData(a),e.value.push(o.getAggregatedTxMLMaleData(a)),e.value.push(...await o.getAggregatedTxMLMaternalStatus(a)),await n["a"].hide()},s=async t=>{const e=[{path:"arv_number",label:"ARV Number",preSort:m["a"],initialSort:!0},{path:"birthdate",label:"Date of Birth",formatter:t=>b()(t).format(u["a"])},{path:"gender",label:"Gender",formatter:g["f"]},{path:"address",label:"Address"}],r=Object(o["ref"])([]),a=async()=>{for(const e of t.row[t.column.path]){const t=await d["a"].findByID(e),o=new d["a"](t);r.value.push({arv_number:o.getArvNumber(),birthdate:o.getBirthdate(),gender:o.getGender(),address:""+o.getCurrentVillage()})}};a(),await i["a"].show(l["a"],{columns:e,rows:r.value,title:`${t.row.age_group} ${t.column.label} ${t.row.gender}s`})};return{rows:e,columns:r,period:t,fetchData:a,onDrilldown:s}}}),f=r("d959"),j=r.n(f);const y=j()(h,[["render",a]]);e["default"]=y}}]);
//# sourceMappingURL=chunk-5224c7ba.eaaf79a2.js.map