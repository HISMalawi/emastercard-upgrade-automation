(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e82a34e4"],{"3a8c":function(t,e,r){"use strict";function a(t){return parseInt(t.split("-")[2])||0}r.d(e,"a",(function(){return a}))},"40e3":function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));var a=r("4971"),n=r("2ef0"),o=r("1c74"),s=r("5a0c"),i=r.n(s);function l(t){try{return t.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(e){return t}}function c({columns:t,rows:e,quarter:r,period:s,filters:c}){let d=t.filter(t=>!1!==t.exportable).map(t=>t.label).join(",");return d+="\n",d+=Object(a["sortRows"])(e,(null===c||void 0===c?void 0:c.sort)||[]).map(e=>t.filter(t=>!1!==t.exportable).map(t=>{let r=Object(n["get"])(e,t.path);return"function"===typeof t.formatter&&r&&(r=t.formatter(r,e)),l(t.drillable&&Array.isArray(r)?r.length:r)}).join(",")).join("\n"),d+="\nDate Created:  "+i()().format("DD/MMM/YYYY HH:MM:ss"),r&&(d+="\nQuarter: "+r),s&&(d+="\nQuarter: "+s),d+="\ne-Mastercard Version : "+o["e"].getAppVersion(),d+="\nAPI Version "+o["e"].getApiVersion(),d+="\nSite UUID: "+o["e"].getSiteUUID(),d}function d(t){const e=new Blob([c(t)],{type:"text/csv;charset=utf-8;"}),r=document.createElement("a");r.href=window.URL.createObjectURL(e),r.setAttribute("download",t.filename+".csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}},5969:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r("ade3"),n=(r("14d9"),r("1c74")),o=r("9283"),s=r("bef6"),i=r("5a0c"),l=r.n(i);class c extends n["e"]{constructor(){super(),Object(a["a"])(this,"programID",void 0),Object(a["a"])(this,"startDate",void 0),Object(a["a"])(this,"endDate",void 0),Object(a["a"])(this,"date",void 0),Object(a["a"])(this,"quarter",void 0),this.endDate="",this.startDate="",this.quarter="",this.date=n["e"].getSessionDate(),this.programID=n["e"].getProgramID()}getDateIntervalPeriod(){return`${o["c"].toStandardHisDisplayFormat(this.startDate)} - ${o["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(t){this.startDate=t}setEndDate(t){this.endDate=t}setQuarter(t){this.quarter=t}getReport(t,e={}){return n["e"].getJson(t,this.buildRequest(e))}getMaternalStatus(t,e="pepfar"){const r=s["a"].parameterizeObjToString(this.buildRequest({report_definition:e}));return n["e"].postJson("vl_maternal_status?"+r,{patient_ids:t})}buildRequest(t={}){const e={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(e["start_date"]=this.startDate,e["end_date"]=this.endDate),this.quarter&&(e["quarter"]=this.quarter),{...e,...t}}static getQuarterBounds(t){const e=e=>l()(`${t}-${e}-01`).daysInMonth(),r=e=>`${t}-${e}-01 00:00`,a=r=>`${t}-${r}-${e(r)} 00:00`;return{Q1:{qtr:1,start:r("01"),end:a("03")},Q2:{qtr:2,start:r("04"),end:a("06")},Q3:{qtr:3,start:r("07"),end:a("09")},Q4:{qtr:4,start:r("10"),end:a("12")}}}static getQtrByDate(t){const e=this.getQuarterBounds(t.getFullYear());for(const r in e){const{start:a,end:n}=e[r];if(t>=new Date(a)&&t<=new Date(n))return e[r]}return null}static buildQtrObj(t,e){const r=this.getQuarterBounds(e),{start:a,end:n}=r[t];return{start:a,end:n,name:`${t} ${e}`}}static getReportQuarters(t=5){const e=[];let r=new Date,a=r.getFullYear();const n=a;r=new Date(`${n}-${r.getMonth()+1}-${r.getDate()} 00:00`);const o=this.getQtrByDate(r);let s=o.qtr,i=0;4===s&&e.push(this.buildQtrObj("Q1",a+1));while(i<t)0===i&&s<4&&e.push(this.buildQtrObj("Q"+(s+1),a)),e.push(this.buildQtrObj("Q"+s,a)),s=s>0?s-=1:s,a=0==s?a-1:a,s=0==s?s+=4:s,i++;return e}}},8727:function(t,e,r){"use strict";var a=r("7a23");const n=["src"],o=["innerHTML"],s=["innerHTML"],i={key:1},l={key:2},c={key:3},d={key:4};function u(t,e,r,u,p,b){const m=Object(a["resolveComponent"])("ion-col"),g=Object(a["resolveComponent"])("ion-row"),h=Object(a["resolveComponent"])("ion-grid"),y=Object(a["resolveComponent"])("ion-card-header"),f=Object(a["resolveComponent"])("data-table"),j=Object(a["resolveComponent"])("ion-card-content"),O=Object(a["resolveComponent"])("ion-card"),D=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(D,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{style:{padding:"0 !important"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(y,{style:{"border-bottom":"1px solid #c2c2c2","font-weight":"500",color:"#000"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(g,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,{size:"1",class:"ion-padding ion-margin-end"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("img",{src:"assets/images/"+t.reportIcon,style:Object(a["normalizeStyle"])({height:t.subtitle?7:"5rem",width:t.subtitle?7:"5rem"})},null,12,n)]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("h1",{innerHTML:t.title},null,8,o),t.subtitle?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h3",{key:0,innerHTML:t.subtitle,style:{color:"#818181"}},null,8,s)):Object(a["createCommentVNode"])("",!0),t.useDateRangeFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",i," Period: "+Object(a["toDisplayString"])(t.period),1)):t.useQuarterFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",l," Quarter: "+Object(a["toDisplayString"])(t.quarter.value),1)):t.useDateFilter?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",c,"Date: "+Object(a["toDisplayString"])(t.dayjs(t.date).format("DD/MMM/YYYY")),1)):Object(a["createCommentVNode"])("",!0),t.totalClients?(Object(a["openBlock"])(),Object(a["createElementBlock"])("h5",d,"Total Clients: "+Object(a["toDisplayString"])(t.totalClients),1)):Object(a["createCommentVNode"])("",!0)]),_:1})]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(j,{class:"ion-no-padding",style:{"min-height":"45vh"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(f,{rows:t.rows,"async-rows":t.asyncRows,columns:t.columns,"actions-buttons":t.actionBtns,"row-actions-buttons":t.rowActionButtons,"custom-filters":t.filters,config:{showIndices:t.showIndices},onCustomFilter:t.onCustomFilter,onDrilldown:t.onDrilldown,color:"custom"},Object(a["createSlots"])({_:2},[Object(a["renderList"])(t.$slots,(e,r)=>({name:r,fn:Object(a["withCtx"])(({filter:e})=>[Object(a["renderSlot"])(t.$slots,r,{filter:e})])}))]),1032,["rows","async-rows","columns","actions-buttons","row-actions-buttons","custom-filters","config","onCustomFilter","onDrilldown"])]),_:3})]),_:3})]),_:3})}r("14d9");var p=r("d867"),b=r("ad8d"),m=r("5a0c"),g=r.n(m),h=r("8d56"),y=r("5969"),f=r("4971"),j=r("b5e4"),O=r("2ef0"),D=r("40e3"),w=Object(a["defineComponent"])({name:"BaseReportTable",components:{IonCard:p["IonCard"],IonCardHeader:p["IonCardHeader"],IonCardContent:p["IonCardContent"],Layout:h["a"],IonGrid:p["IonGrid"],IonRow:p["IonRow"],IonCol:p["IonCol"],DataTable:f["DataTable"]},props:{title:{type:String,default:"Report"},subtitle:{type:String,default:""},period:{type:String,default:""},date:{type:String,default:""},quarter:{type:Object,default:()=>({})},totalClients:{type:Number,default:0},reportIcon:{type:String,default:"reports/report.png"},columns:{type:Array,default:()=>[]},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},actionButtons:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!0},canExportPDF:{type:Boolean,default:!0},showRefreshButton:{type:Boolean,default:!0},useDateRangeFilter:{type:Boolean,default:!1},useQuarterFilter:{type:Boolean,default:!1},useDateFilter:{type:Boolean,default:!1},customFilters:{type:Array,default:()=>[]},showIndices:{type:Boolean,default:!1}},emits:["regenerate","customFilter","drilldown"],setup(t,{emit:e}){const r=Object(a["computed"])(()=>`${b["b"].getLocationName()} ${t.title} ${t.period?t.period:t.date}`),n=Object(a["computed"])(()=>{const a=[...t.actionButtons];return t.showRefreshButton&&a.push({label:"Refresh/Rebuild",color:"success",action:()=>e("regenerate")}),t.canExportCsv&&a.push({label:"CSV",color:"primary",action:async(e,a,n,o)=>{var s;return Object(D["a"])({rows:a,filters:n,columns:o,quarter:null===(s=t.quarter)||void 0===s?void 0:s.label,period:t.period,filename:r.value})}}),a}),o=Object(a["computed"])(()=>{const e=[...t.customFilters];return t.useDateRangeFilter?e.push({id:"dateRange",label:"Date Range",type:"dateRange",gridSize:5,value:{startDate:t.period.split("-")[0],endDate:t.period.split("-")[1]}}):t.useQuarterFilter?e.push({id:"quarter",label:"Quarter:",type:"select",value:t.quarter,options:y["a"].getReportQuarters().map(t=>({label:t.name,value:t.name,other:t}))}):t.useDateFilter&&e.push({id:"date",label:"Date",type:"date",value:t.date}),e}),s=t=>"dateRange"in t&&new Date(t.dateRange.startDate)>new Date(t.dateRange.endDate)?Object(j["e"])("Invalid date range"):o.value.every(e=>!1===e.required||(Object(O["isEmpty"])(t[e.id])||"object"!==typeof t[e.id]?!Object(O["isEmpty"])(t[e.id]):Object.values(t[e.id]).every(t=>!Object(O["isEmpty"])(t))))?e("customFilter",t):void Object(j["e"])("Invalid filters"),i=t=>{e("drilldown",t)};return{actionBtns:n,filters:o,onCustomFilter:s,onDrilldown:i,dayjs:g.a}}}),C=r("d959"),v=r.n(C);const B=v()(w,[["render",u]]);e["a"]=B},ad8d:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var a=r("5969");const n=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"];class o extends a["a"]{constructor(){super()}getBookedAppointments(t){return a["a"].getJson(`programs/${this.programID}/scheduled_appointments`,{date:t})}getViralLoadResults(t){return this.getReport(`/programs/${this.programID}/reports/high_vl_patients`,{range:t})}getOtherOutcome(t){return this.getReport("patient_outcome_list",{outcome:t})}getPatientVisitTypes(){return this.getReport("patient_visit_types")}getClientsDueForVl(){return this.getReport("clients_due_vl")}getClientRentention(){return this.getReport(`/programs/${this.programID}/reports/retention`)}getExternalConsultationClients(){return this.getReport(this.programID+"/external_consultation_clients")}getMissedAppointments(){return this.getReport("missed_appointments")}getPregnantWomen(){return this.getReport(`/programs/${this.programID}/reports/pregnant_patients`)}getArchivingCandidates(){return a["a"].getJson(`programs/${this.programID}/reports/archiving_candidates`,{start_date:this.date})}getIncompleteVisits(){return this.getReport("incomplete_visits",{tool_name:"INCOMPLETE VISITS"})}}},d323:function(t,e,r){"use strict";r.r(e);var a=r("7a23");function n(t,e,r,n,o,s){const i=Object(a["resolveComponent"])("base-report-table");return Object(a["openBlock"])(),Object(a["createBlock"])(i,{title:t.title,"report-icon":"reports/appointment-missed.png",columns:t.columns,rows:t.rows,period:t.period,rowActionButtons:t.rowActionBtns,useDateRangeFilter:"",onCustomFilter:t.getData},null,8,["title","columns","rows","period","rowActionButtons","onCustomFilter"])}r("14d9");var o=r("b211"),s=r("afbc"),i=r("8727"),l=r("ad8d"),c=r("9283"),d=r("5a0c"),u=r.n(d),p=r("0011"),b=r("3a8c"),m=Object(a["defineComponent"])({name:"ClinicAppointments",components:{BaseReportTable:i["a"]},setup(){const t=Object(a["ref"])(""),e=Object(a["ref"])("Clinic Appointment missed report"),r=Object(a["ref"])([]),n=[{path:"arv_number",label:"ARV Number",preSort:b["a"],initialSort:!0},{path:"given_name",label:"First name",exportable:!1},{path:"family_name",label:"Last name",exportable:!1},{path:"gender",label:"Gender",formatter:p["g"]},{path:"birthdate",label:"DOB",formatter:t=>u()(t).format(c["a"])},{path:"appointment_date",label:"Appointment",formatter:t=>u()(t).format(c["a"])},{path:"days_missed",label:"Days Missed"},{path:"current_outcome",label:"Current Outcome"},{path:"address",label:"Contact Details",exportable:!1}],i=async({dateRange:e})=>{await o["a"].show();const a=new l["b"];a.setStartDate(e.startDate),a.setEndDate(e.endDate),t.value=a.getDateIntervalPeriod();const n=await a.getMissedAppointments();r.value=n.map(t=>({...t,address:`CELL: ${t.cell_number}\n                  District: ${t.district}\n                  Village: ${t.village}\n                  TA: ${t.ta}`})),await o["a"].hide()},d=[{label:"Select",default:!0,action:t=>{s["a"].push("/emc/patient/"+t["person_id"])}}];return{rows:r,title:e,columns:n,rowActionBtns:d,period:t,getData:i}}}),g=r("d959"),h=r.n(g);const y=h()(m,[["render",n]]);e["default"]=y}}]);
//# sourceMappingURL=chunk-e82a34e4.e1555b89.js.map