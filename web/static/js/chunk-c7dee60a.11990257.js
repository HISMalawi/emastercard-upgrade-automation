(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c7dee60a"],{"307e":function(e,t,o){},"3a8c":function(e,t,o){"use strict";function a(e){return parseInt(e.split("-")[2])||0}o.d(t,"a",(function(){return a}))},"564f":function(e,t,o){"use strict";var a=o("7a23");function n(e,t,o,n,l,c){const r=Object(a["resolveComponent"])("IonIcon"),i=Object(a["resolveComponent"])("IonButton"),s=Object(a["resolveComponent"])("IonButtons"),u=Object(a["resolveComponent"])("IonTitle"),d=Object(a["resolveComponent"])("IonToolbar"),b=Object(a["resolveComponent"])("IonHeader"),p=Object(a["resolveComponent"])("data-table"),O=Object(a["resolveComponent"])("IonContent"),m=Object(a["resolveComponent"])("IonFooter"),v=Object(a["resolveComponent"])("IonPage");return Object(a["openBlock"])(),Object(a["createBlock"])(v,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{slot:"end"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{slot:"end",onClick:t[0]||(t[0]=t=>e.modal.hide()),"icon-only":""},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{icon:e.close},null,8,["icon"])]),_:1})]),_:1}),Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(O,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,{rows:e.rows,"async-rows":e.asyncRows,columns:e.columns,"row-actions-buttons":e.rowActionButtons,color:"custom"},null,8,["rows","async-rows","columns","row-actions-buttons"])]),_:1}),Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{class:"ion-margin ion-float-right",onClick:t[1]||(t[1]=t=>e.modal.hide())},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Close")]),_:1})]),_:1})]),_:1})}var l=o("d867"),c=o("4971"),r=o("ff79"),i=o("da44"),s=Object(a["defineComponent"])({name:"DrilldownTable",components:{DataTable:c["DataTable"],IonButton:l["IonButton"],IonPage:l["IonPage"],IonHeader:l["IonHeader"],IonContent:l["IonContent"],IonToolbar:l["IonToolbar"],IonButtons:l["IonButtons"],IonFooter:l["IonFooter"],IonTitle:l["IonTitle"],IonIcon:l["IonIcon"]},props:{title:{type:String,default:"Report"},rows:{type:Array,default:()=>[]},asyncRows:{type:Function},columns:{type:Array,default:()=>[]},rowActionButtons:{type:Array,default:()=>[]},actionButtons:{type:Array,default:()=>[]},canExportCsv:{type:Boolean,default:!1},period:{type:String,default:""}},setup(){return{close:r["close"],modal:i["a"]}}}),u=o("d959"),d=o.n(u);const b=d()(s,[["render",n]]);t["a"]=b},"5efc":function(e,t,o){"use strict";o.r(t);var a=o("7a23");function n(e,t,o,n,l,c){const r=Object(a["resolveComponent"])("SelectInput"),i=Object(a["resolveComponent"])("ion-col"),s=Object(a["resolveComponent"])("DateRangePicker"),u=Object(a["resolveComponent"])("ion-button"),d=Object(a["resolveComponent"])("ion-row"),b=Object(a["resolveComponent"])("cohort-v"),p=Object(a["resolveComponent"])("cohort-h"),O=Object(a["resolveComponent"])("cohort-ft"),m=Object(a["resolveComponent"])("ion-grid"),v=Object(a["resolveComponent"])("Layout");return Object(a["openBlock"])(),Object(a["createBlock"])(v,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(m,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(d,null,{default:Object(a["withCtx"])(()=>{var o,n;return[Object(a["createVNode"])(i,{size:"2"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{modelValue:e.quarter,"onUpdate:modelValue":t[0]||(t[0]=t=>e.quarter=t),options:e.quarters},null,8,["modelValue","options"])]),_:1}),"Custom"===(null===(o=e.quarter.value)||void 0===o?void 0:o.label)?(Object(a["openBlock"])(),Object(a["createBlock"])(i,{key:0,size:"4"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{range:e.dateRange,onRangeChange:e.onDateRangeChange},null,8,["range","onRangeChange"])]),_:1})):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(i,{size:"Custom"===(null===(n=e.quarter.value)||void 0===n?void 0:n.label)?6:10},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,{class:"ion-float-right",color:"primary",onClick:e.exportToCsv},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Export CSV")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{class:"ion-float-right",color:"primary",onClick:e.printSpec},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Print Report")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{class:"ion-float-right",color:"secondary",onClick:e.disaggregateReport},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Disaggregated")]),_:1},8,["onClick"]),Object(a["createVNode"])(u,{class:"ion-float-right",color:"warning",onClick:t[1]||(t[1]=t=>e.fetchData(!0))},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Fresh Report")]),_:1}),Object(a["createVNode"])(u,{class:"ion-float-right",color:"success",onClick:e.fetchData},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])("Archived Report")]),_:1},8,["onClick"])]),_:1},8,["size"])]}),_:1}),Object(a["createVNode"])(d,{class:"his-card"},{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(),Object(a["createBlock"])(i,{size:"12",key:e.componentKey,id:"report-content"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,{indicators:e.indicators,style:{"font-weight":"600"}},null,8,["indicators"]),Object(a["createVNode"])(p,{reportparams:e.period,clinicName:e.clinicName},null,8,["reportparams","clinicName"]),Object(a["createVNode"])(O,{onOnClickIndicator:e.onDrilldown,indicators:e.indicators,site:"E-Mastercard"},null,8,["onOnClickIndicator","indicators"])]),_:1}))]),_:1})]),_:1})]),_:1})}o("14d9"),o("13d5");var l=o("b211"),c=o("da44"),r=o("564f"),i=o("b5e4"),s=o("2ef0"),u=o("7717"),d=o("5969"),b=o("b31c"),p=o("bdc2"),O=o("364b"),m=o("0795"),v=o("8d56"),j=o("d867"),h=o("bef6"),C=o("ba82"),f=o("1c74"),w=o("be95"),y=o("9283"),g=o("0011"),I=o("3a8c"),k=o("5a0c"),V=o.n(k),x=o("6605"),N=Object(a["defineComponent"])({name:"Cohort",components:{DateRangePicker:u["a"],CohortH:p["a"],CohortV:O["a"],CohortFt:m["a"],Layout:v["a"],IonCol:j["IonCol"],IonRow:j["IonRow"],IonGrid:j["IonGrid"],SelectInput:w["a"]},setup(){const e=Object(x["i"])(),t=Object(a["ref"])(0),o=Object(a["reactive"])({value:"",placeholder:"Select Quarter"}),n=Object(a["ref"])(""),u=Object(a["ref"])(),p=Object(a["reactive"])({}),O=Object(a["ref"])({}),m=Object(a["ref"])({}),v=Object(a["ref"])(""),j=b["a"].getLocationName(),w=new b["a"],k=[{label:"Custom",value:"Custom"},...d["a"].getReportQuarters(6).map(e=>({label:e.name,value:e.name,other:e}))];Object(a["watch"])(o,()=>{var e;"Custom"===(null===(e=o.value)||void 0===e?void 0:e.label)&&Object.assign(p,{startDate:"",endDate:""})});const N=e=>{Object.assign(p,e)},B=()=>{u.value?e.push("/emc_moh_cohort_disaggregated?"+u.value):Object(i["e"])("Please select a period")},D=async t=>{const o=[{path:"arv_number",label:"ARV Number",preSort:I["a"],initialSort:!0},{path:"given_name",label:"First Name"},{path:"family_name",label:"Last Name"},{path:"birthdate",label:"Date of Birth",formatter:y["c"].toStandardHisDisplayFormat},{path:"gender",label:"Gender",formatter:g["f"]},{path:"outcome",label:"Outcome"}],a=Object(s["find"])(m.value,{name:t});if(!a)return;const n=await w.getCohortDrillDown(a.id),l=[{label:"select",action:t=>e.push("/emc/patient/"+t["person_id"])}];await c["a"].show(r["a"],{title:a["indicator_name"]||"Drill down",rowActionButtons:l,columns:o,rows:n})},_=(e,t,o)=>{w.setQuarter(e),w.setStartDate(t),w.setEndDate(o)},S=e=>e.reduce((e,t)=>(e[t.name]=parseInt(t.contents),e),{}),E=async(e=!1)=>{var a;if(Object(s["isEmpty"])(o.value)&&Object(s["isEmpty"])(p)||"Custom"===o.value&&Object(s["isEmpty"])(p))return Object(i["e"])("Please select report period");l["a"].show();let c={},r="",d="";var b,j,C,f;(O.value={},m.value={},w.setRegenerate(e),"Custom"===(null===(a=o.value)||void 0===a?void 0:a.label))?(r=p.startDate,d=p.endDate,_(o.value,r,d),n.value="Custom "+w.getDateIntervalPeriod(),c=w.datePeriodRequestParams()):(r=y["c"].toStandardHisFormat(null===(b=o.value)||void 0===b?void 0:b.other.start),d=y["c"].toStandardHisFormat(null===(j=o.value)||void 0===j?void 0:j.other.end),_(null===(C=o.value)||void 0===C?void 0:C.label,r,d),n.value=null===(f=o.value)||void 0===f?void 0:f.label,c=w.qaurterRequestParams());u.value=h["a"].parameterizeObjToString({start_date:r,end_date:d,quarter:o.value.label});const g=await w.requestCohort(c);if(null!==g&&void 0!==g&&g.ok){const e=setInterval(async()=>{c.regenerate=!1;const o=await w.requestCohort(c);if(200===(null===o||void 0===o?void 0:o.status)){const a=await o.json();v.value=a.id,m.value=a.values,O.value=S(a.values),await l["a"].hide(),w.cacheCohort(a.values),clearInterval(e),t.value++}},3e3)}},R=async()=>{const e=open("","","width:1024px, height:768px"),t=document.getElementById("report-content");t&&e&&(e.document.write(`\n            <html>\n              <head>\n                <title>Print Cohort</title>\n                <link rel="stylesheet" media="print" href="/assets/css/cohort.css" />\n              </head>\n              <body>\n                ${t.innerHTML}\n              </body>\n            </html>\n          `),setTimeout(()=>{e.print(),e.close()},3500))},T=()=>{var e;const t=["Indicator","Value"],a=Object.keys(O.value).map(e=>[e,O.value[e]]),l=`${f["e"].getLocationName()} cohort report ${n.value}`;Object(C["a"])([t],[...a,["Date Created: "+V()().format("DD/MMM/YYYY HH:MM:ss")],["Quarter: "+(null!==(e=o.value)&&void 0!==e&&e.label.match(/custom/i)?`${p.startDate} - ${p.endDate}`:o.value.value)],["HIS-Core Version: "+f["e"].getCoreVersion()],["API Version: "+f["e"].getApiVersion()],["Site: "+f["e"].getLocationName()],["Site UUID: "+f["e"].getSiteUUID()]],l)};return{period:n,quarter:o,quarters:k,dateRange:p,clinicName:j,indicators:O,componentKey:t,fetchData:E,onDrilldown:D,onDateRangeChange:N,disaggregateReport:B,printSpec:R,exportToCsv:T}}}),B=(o("7ac7"),o("d959")),D=o.n(B);const _=D()(N,[["render",n]]);t["default"]=_},"631c":function(e,t,o){"use strict";o("307e")},6393:function(e,t,o){},7717:function(e,t,o){"use strict";var a=o("7a23");function n(e,t,o,n,l,c){const r=Object(a["resolveComponent"])("ion-input"),i=Object(a["resolveComponent"])("ion-col"),s=Object(a["resolveComponent"])("ion-icon"),u=Object(a["resolveComponent"])("ion-row"),d=Object(a["resolveComponent"])("ion-grid");return Object(a["openBlock"])(),Object(a["createBlock"])(d,{class:"ion-no-padding ion-no-margin",style:{height:"100%"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(i,{size:"6"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{modelValue:e.start,"onUpdate:modelValue":t[0]||(t[0]=t=>e.start=t),type:"date",class:"box",style:{width:"100%",height:"100%"}},null,8,["modelValue"])]),_:1}),Object(a["createVNode"])(i,{size:"1",style:{display:"flex","justify-content":"center"}},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(s,{icon:e.arrowForward,style:Object(a["normalizeStyle"])({fontSize:"24px",padding:".5rem"})},null,8,["icon","style"])]),_:1}),Object(a["createVNode"])(i,{size:"5"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(r,{modelValue:e.end,"onUpdate:modelValue":t[1]||(t[1]=t=>e.end=t),type:"date",class:"box",style:{width:"100%",height:"100%"}},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}var l=o("d867"),c=o("ff79"),r=o("5a0c"),i=o.n(r),s=o("b5e4"),u=Object(a["defineComponent"])({name:"DateRangePicker",components:{IonInput:l["IonInput"],IonGrid:l["IonGrid"],IonRow:l["IonRow"],IonCol:l["IonCol"],IonIcon:l["IonIcon"]},props:{range:{type:Object,default:()=>({startDate:"",endDate:""})}},emits:["rangeChange"],setup(e,{emit:t}){const o=Object(a["ref"])(e.range.startDate),n=Object(a["ref"])(e.range.endDate),l=(e,t)=>!(!i()(e).isSame(t)&&!i()(e).isBefore(t))||(Object(s["e"])("Start date must be before or equal to end date"),!1),r=Object(a["computed"])(()=>{if(o.value&&n.value&&l(o.value,n.value))return{startDate:o.value,endDate:n.value}});return Object(a["watch"])(r,e=>{e&&t("rangeChange",e)}),{arrowForward:c["arrowForward"],start:o,end:n}}}),d=o("d959"),b=o.n(d);const p=b()(u,[["render",n]]);t["a"]=p},"7ac7":function(e,t,o){"use strict";o("6393")},be95:function(e,t,o){"use strict";var a=o("7a23");const n={key:0,class:"ion-float-right ion-margin-end checkbox-label"},l={class:"inner-input-box"},c={key:0,class:"input-options"},r={class:"input-icon"};function i(e,t,o,i,s,u){const d=Object(a["resolveComponent"])("ion-checkbox"),b=Object(a["resolveComponent"])("ion-label"),p=Object(a["resolveComponent"])("ion-input"),O=Object(a["resolveComponent"])("ion-icon"),m=Object(a["resolveComponent"])("ion-chip"),v=Object(a["resolveComponent"])("ion-item"),j=Object(a["resolveComponent"])("ion-list"),h=Object(a["resolveComponent"])("ion-note");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[e.model.label?(Object(a["openBlock"])(),Object(a["createBlock"])(b,{key:0,class:"ion-padding-bottom bold"},{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("span",null,Object(a["toDisplayString"])(e.model.label),1),e.allowCustom?(Object(a["openBlock"])(),Object(a["createElementBlock"])("span",n,[Object(a["createTextVNode"])(" Add Custom "+Object(a["toDisplayString"])(e.model.label)+"? ",1),Object(a["createVNode"])(d,{modelValue:e.isCustom,"onUpdate:modelValue":t[0]||(t[0]=t=>e.isCustom=t),onIonChange:t[1]||(t[1]=t=>e.model.value="")},null,8,["modelValue"])])):Object(a["createCommentVNode"])("",!0)]),_:1})):Object(a["createCommentVNode"])("",!0),e.isCustom?(Object(a["openBlock"])(),Object(a["createBlock"])(p,{key:1,class:Object(a["normalizeClass"])(["box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}]),modelValue:e.customOption,"onUpdate:modelValue":t[2]||(t[2]=t=>e.customOption=t),placeholder:e.model.placeholder||e.model.label,disabled:e.model.disabled,onIonFocus:t[3]||(t[3]=()=>e.model.error=""),onIonBlur:e.validate,onIonInput:e.onCustomValue},null,8,["class","modelValue","placeholder","disabled","onIonBlur","onIonInput"])):(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",{key:2,class:Object(a["normalizeClass"])(["outer-input-box box-input",{"box-input-error":e.model.error,"ion-margin-top":e.model.label}])},[Object(a["createElementVNode"])("div",l,[Object(a["createElementVNode"])("div",{style:{display:"flex","flex-wrap":"wrap",width:"100%"},onClick:t[6]||(t[6]=(...t)=>e.onShowOptions&&e.onShowOptions(...t))},[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.tags,(t,o)=>(Object(a["openBlock"])(),Object(a["createBlock"])(m,{key:o},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.label),1)]),_:2},1024),Object(a["createVNode"])(O,{icon:e.closeCircle,color:"danger",onClick:o=>e.diselect(t),style:{"z-index":"20"}},null,8,["icon","onClick"])]),_:2},1024))),128)),Object(a["createVNode"])(p,{disabled:e.model.disabled,placeholder:e.showPlaceholder?e.model.placeholder||"select option":"",modelValue:e.filter,"onUpdate:modelValue":t[4]||(t[4]=t=>e.filter=t),class:"search-input",ref:"searchInput",onKeydown:t[5]||(t[5]=t=>e.handleKeyDown(t))},null,8,["disabled","placeholder","modelValue"])]),e.showOptions?(Object(a["openBlock"])(),Object(a["createElementBlock"])("div",c,[Object(a["createVNode"])(j,null,{default:Object(a["withCtx"])(()=>[(Object(a["openBlock"])(!0),Object(a["createElementBlock"])(a["Fragment"],null,Object(a["renderList"])(e.filteredOptions,(t,o)=>{var n;return Object(a["openBlock"])(),Object(a["createBlock"])(v,{key:o,lines:o+1===e.filteredOptions.length?"none":"",color:t.value===(null===(n=e.focusedOption)||void 0===n?void 0:n.value)?"light":"",onClick:o=>e.onSelect(t)},{default:Object(a["withCtx"])(()=>[e.multiple?(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:0,class:"input-option-checkbox",slot:"start",modelValue:t.isChecked,"onUpdate:modelValue":e=>t.isChecked=e},null,8,["modelValue","onUpdate:modelValue"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(t.label),1)]),_:2},1024)]),_:2},1032,["lines","color","onClick"])}),128))]),_:1})])):Object(a["createCommentVNode"])("",!0),Object(a["createElementVNode"])("div",r,[e.filter||e.tags.length>0?(Object(a["openBlock"])(),Object(a["createBlock"])(O,{key:0,icon:e.close,onClick:e.onReset},null,8,["icon","onClick"])):Object(a["createCommentVNode"])("",!0),Object(a["createVNode"])(O,{icon:e.showOptions?e.chevronUp:e.chevronDown,onClick:t[7]||(t[7]=t=>e.showOptions?e.onCloseOptions():e.onShowOptions())},null,8,["icon"])])])],2)),e.model.error?(Object(a["openBlock"])(),Object(a["createBlock"])(h,{key:3,color:"danger"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(Object(a["toDisplayString"])(e.model.error),1)]),_:1})):Object(a["createCommentVNode"])("",!0)],64)}o("14d9");var s=o("d867"),u=o("ff79"),d=o("2ef0"),b=Object(a["defineComponent"])({name:"SelectInput",props:{modelValue:{type:Object,default:()=>({})},form:{type:Object,default:()=>({})},options:{type:Array,default:()=>[]},asyncOptions:{type:Function,required:!1},allowCustom:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},infiniteScrolling:{type:Boolean,default:!1}},components:{IonLabel:s["IonLabel"],IonInput:s["IonInput"],IonNote:s["IonNote"],IonIcon:s["IonIcon"],IonCheckbox:s["IonCheckbox"],IonList:s["IonList"],IonChip:s["IonChip"],IonItem:s["IonItem"]},emits:["update:modelValue"],setup(e,{emit:t}){const o=Object(a["ref"])(!1),n=Object(a["ref"])(""),l=Object(a["ref"])(),c=Object(a["ref"])(!1),r=Object(a["ref"])(),i=Object(a["ref"])(""),s=Object(a["ref"])([]),b=Object(a["ref"])(1),p=Object(a["computed"])(()=>e.multiple?s.value.filter(({isChecked:e})=>e):l.value?[l.value]:[]),O=Object(a["computed"])(()=>!i.value&&Object(d["isEmpty"])(p.value)&&!c.value),m=Object(a["computed"])({get:()=>e.modelValue,set:e=>t("update:modelValue",e)}),v=()=>{if(l.value=void 0,Object(d["isEmpty"])(m.value.value))return;if(Array.isArray(m.value.value)&&e.multiple)return m.value.value.forEach(e=>{const t=s.value.findIndex(({value:t})=>t===e.value);-1===t?s.value.push({...e,isChecked:!0}):s.value[t].isChecked=!0});const t=s.value.find(e=>e.value===m.value.value);l.value=t||{label:m.value.value,value:m.value.value}},j=async()=>{const t="function"===typeof e.asyncOptions?await e.asyncOptions(i.value):e.options.filter(({label:e})=>e.toLowerCase().includes(i.value.toLowerCase()));p.value.forEach(e=>{const o=t.findIndex(t=>t.value===e.value);-1===o?t.push(e):t[o].isChecked=!0}),s.value=t},h=async()=>{if(m.value.required&&Object(d["isEmpty"])(m.value.value))return m.value.error="This field is required";if(m.value.validation){const t=await m.value.validation({label:m.value.value,value:m.value.value},e.form);if(t&&t.length)return m.value.error+=t.toString()}return m.value.error=""},C=()=>{c.value=!1,m.value.value=e.multiple?p.value:Object(d["isEmpty"])(p.value)?void 0:p.value[0],i.value="",h()},f=()=>{m.value.disabled||(c.value=!0,m.value.error="")},w=()=>{m.value.value={label:n.value,value:n.value}},y=t=>{e.multiple||(l.value=t,C()),m.value.value=e.multiple?p.value:Object(d["isEmpty"])(p.value)?void 0:p.value[0],i.value=""},g=t=>e.multiple?t.isChecked=!1:l.value=void 0,I=()=>{i.value="",l.value=void 0,s.value.forEach(e=>e.isChecked=!1)},k=e=>{e.preventDefault();const t=s.value.indexOf(r.value)+1;r.value=s.value[t]||s.value[0]},V=e=>{e.preventDefault();const t=s.value.indexOf(r.value)-1;r.value=s.value[t]||s.value[s.value.length-1]},x=e=>{switch(c.value||(c.value=!0),e.key){case"ArrowDown":k(e);break;case"ArrowUp":V(e);break;case" ":case"Enter":y(r.value);break;case"Escape":C();break}};return Object(a["watch"])(i,async()=>{b.value++,await j()}),Object(a["watch"])([()=>e.options,()=>e.asyncOptions],async()=>j()),Object(a["watch"])(()=>e.modelValue.value,e=>Object(d["isEmpty"])(e)&&v()),Object(a["watch"])(c,e=>e&&(r.value=l.value||s.value[0])),Object(a["onMounted"])(async()=>{await j(),v(),addEventListener("click",e=>{const t=e.target.closest(".inner-input-box");!t&&c.value&&C()})}),Object(a["onBeforeUnmount"])(()=>removeEventListener("click",e=>console.log(e))),{validate:h,onSelect:y,onReset:I,onShowOptions:f,onCloseOptions:C,diselect:g,onCustomValue:w,handleKeyDown:x,model:m,customOption:n,isCustom:o,chevronDown:u["chevronDown"],chevronUp:u["chevronUp"],close:u["close"],closeCircle:u["closeCircle"],selectedOption:l,showOptions:c,focusedOption:r,showPlaceholder:O,filteredOptions:s,filter:i,tags:p}}}),p=(o("631c"),o("d959")),O=o.n(p);const m=O()(b,[["render",i],["__scopeId","data-v-f86477d2"]]);t["a"]=m},da44:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o("d867");const n={async show(e,t,o="custom-modal",n=!0){const l=await a["modalController"].create({component:e,cssClass:o,backdropDismiss:n,componentProps:t});l.present();const{data:c}=await l.onWillDismiss();if(c)return c},async hide(e){await a["modalController"].dismiss(e)}}}}]);
//# sourceMappingURL=chunk-c7dee60a.11990257.js.map