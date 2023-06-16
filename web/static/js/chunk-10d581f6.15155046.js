(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-10d581f6"],{"054e":function(e,t,o){"use strict";o("9c1a")},1497:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o("5969");class n extends r["a"]{constructor(){super(),this.programID=23}getSamplesDrawnReport(){return this.getReport("samples_drawn")}getLabResultsReport(){return this.getReport("lab_test_results")}}},"1d66":function(e,t,o){"use strict";o("353d")},"353d":function(e,t,o){},"44e3":function(e,t,o){"use strict";o("14d9");var r=o("1c74"),n=o("7a23"),a=o("b446"),i=o("23e6"),s=o("9283"),l=o("d867"),c=o("d6aa"),d=o("5969"),p=o("d95e"),u=o("2706"),h=o("9ceb"),m=o("2ef0"),b=Object(n["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(e){const t=(""+e).toUpperCase();return"M"===t||"MALE"===t?"Male":"F"===t||"FEMALE"===t?"Female":/fbf|fnp|fp/i.test(e)?t:e},toDate(e){return s["c"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const[t,o,r]=e.split("-"),n=parseInt(r);return"number"===typeof n?n:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,r=!0){const n=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});n.present()},async drilldownData(e,t,o,r){const n=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});n.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,r=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(r=t,o in this.drillDownCache){const[e,...t]=this.drillDownCache[o];return[r,...t]}}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const n=await i["a"].findByID(o),a=new i["a"](n),s=[];return r&&(t=1,s.push(r)),s.push(this.tdARV(a.getArvNumber())),s.push(h["a"].td(this.formatGender(a.getGender()))),s.push(h["a"].tdDate(a.getBirthdate().toString())),s.push(h["a"].tdBtn("Show",async()=>{await l["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),r=await Promise.all(o);return r.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,r)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,n=r["e"].getSessionDate()){const i="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:p["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(a["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>i,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(a["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>n,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const O=b;t["a"]=O},"4ba2":function(e,t,o){"use strict";var r=o("7a23");const n=["innerHTML"],a={class:"header-text-list"},i=["onClick"],s={key:1},l=["innerHTML"],c={key:0},d={class:"report-content"};function p(e,t,o,p,u,h){const m=Object(r["resolveComponent"])("his-standard-form"),b=Object(r["resolveComponent"])("ion-title"),O=Object(r["resolveComponent"])("ion-img"),j=Object(r["resolveComponent"])("ion-thumbnail"),f=Object(r["resolveComponent"])("ion-chip"),g=Object(r["resolveComponent"])("ion-label"),C=Object(r["resolveComponent"])("ion-item"),w=Object(r["resolveComponent"])("ion-toolbar"),y=Object(r["resolveComponent"])("ion-header"),v=Object(r["resolveComponent"])("report-table"),D=Object(r["resolveComponent"])("ion-content"),F=Object(r["resolveComponent"])("ion-footer"),T=Object(r["resolveComponent"])("his-footer"),x=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createVNode"])(m,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[r["vShow"],!e.canShowReport]]),e.canShowReport?(Object(r["openBlock"])(),Object(r["createBlock"])(x,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(y,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(w,null,{default:Object(r["withCtx"])(()=>[e.showtitleOnly?(Object(r["openBlock"])(),Object(r["createBlock"])(b,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:e.title},null,8,n)]),_:1})):Object(r["createCommentVNode"])("",!0),e.showtitleOnly?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(C,{key:1},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(j,{slot:"start"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(O,{src:e.logo},null,8,["src"])]),_:1}),Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("ul",a,[Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Title "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.title),1)]),Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Period "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.period),1)]),(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.headerInfoList,(e,t)=>{var o,n;return Object(r["openBlock"])(),Object(r["createElementBlock"])("li",{key:t},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:0,href:"#",onClick:Object(r["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(r["toDisplayString"])(e.value),9,i)):Object(r["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(n=e.other)&&void 0!==n&&n.onclick?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createElementBlock"])("b",s,[Object(r["createElementVNode"])("span",{innerHTML:e.value},null,8,l)]))])}),128)),e.showValidationStatus?(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",c,[e.hasErrors?(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.errorCount),1),Object(r["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(r["createCommentVNode"])("",!0),e.hasErrors?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(f,{key:1,color:"success"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(r["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",d,[Object(r["createVNode"])(v,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(r["createVNode"])(F,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(w,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("Date Created: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.date),1)]),_:1}),Object(r["createVNode"])(f,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("His-Core Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(r["createVNode"])(f,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("API Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(T,{btns:e.btns},null,8,["btns"])]),_:1})):Object(r["createCommentVNode"])("",!0)],64)}o("14d9");var u=o("0f25"),h=o("80e3"),m=o("ba82"),b=o("9ceb"),O=o("7920"),j=o("d867"),f=o("b5e4"),g=o("1718"),C=o("1c74"),w=o("5a0c"),y=o.n(w),v=o("2ef0");const D=["innerHTML"];function F(e,t,o,n,a,i){const s=Object(r["resolveComponent"])("ion-title"),l=Object(r["resolveComponent"])("ion-toolbar"),c=Object(r["resolveComponent"])("ion-header"),d=Object(r["resolveComponent"])("ion-item"),p=Object(r["resolveComponent"])("ion-list"),u=Object(r["resolveComponent"])("ion-grid"),h=Object(r["resolveComponent"])("ion-button"),m=Object(r["resolveComponent"])("ion-footer");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["createVNode"])(c,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,null,{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(r["createVNode"])(u,{class:"selector"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(p,null,{default:Object(r["withCtx"])(()=>[(Object(r["openBlock"])(!0),Object(r["createElementBlock"])(r["Fragment"],null,Object(r["renderList"])(e.errors,(e,t)=>(Object(r["openBlock"])(),Object(r["createBlock"])(d,{class:"his-md-text ion-padding",key:t},{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,D)]),_:2},1024))),128))]),_:1})]),_:1}),Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(l,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var T=Object(r["defineComponent"])({components:{IonGrid:j["IonGrid"],IonList:j["IonList"],IonItem:j["IonItem"],IonFooter:j["IonFooter"],IonButton:j["IonButton"],IonToolbar:j["IonToolbar"],IonHeader:j["IonHeader"],IonTitle:j["IonTitle"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await j["modalController"].dismiss({})}}}),x=(o("054e"),o("d959")),V=o.n(x);const k=V()(T,[["render",F],["__scopeId","data-v-0ed0c7a2"]]);var E=k,I=o("7f35"),N=o("0011"),S=Object(r["defineComponent"])({components:{HisStandardForm:O["a"],IonHeader:j["IonHeader"],ReportTable:h["a"],HisFooter:u["a"],IonPage:j["IonPage"],IonContent:j["IonContent"],IonToolbar:j["IonToolbar"],IonChip:j["IonChip"],IonFooter:j["IonFooter"],IonLabel:j["IonLabel"],IonThumbnail:j["IonThumbnail"],IonItem:j["IonItem"],IonImg:j["IonImg"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:C["e"].getSiteUUID(),apiVersion:C["e"].getApiVersion(),coreVersion:C["e"].getCoreVersion(),artVersion:C["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(v["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(v["isEmpty"])(e)||this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)})},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(g["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(g["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(g["a"])("reports.png")},hasErrors(){return!Object(v["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0}},methods:{async showErrors(){const e=await j["modalController"].create({component:E,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=C["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=y()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){return this.customFileName?this.customFileName:`${this.reportPrefix} ${C["e"].getLocationName()} ${Object(N["e"])(this.title)} ${this.period}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),j["loadingController"].dismiss()}catch(e){Object(f["c"])(""+e),console.error(e),j["loadingController"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),j["loadingController"].dismiss()}catch(r){Object(f["c"])(""+r),console.error(r),j["loadingController"].dismiss()}},async reloadReport(e=!1){Object(v["isEmpty"])(this.formData)&&Object(v["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await j["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(b["b"])(this.activeColumns,this.activeRows,"csvMode");Object(m["a"])(e,[...t,["Date Created: "+this.date],["Quarter: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID],["Generated by: "+C["e"].getUserName()]],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(I["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(b["b"])(this.activeColumns,this.activeRows,e);Object(m["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(f["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(v["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("1d66");const B=V()(S,[["render",p],["__scopeId","data-v-2feab4be"]]);t["a"]=B},7920:function(e,t,o){"use strict";var r=o("7a23");function n(e,t,o,n,a,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=o("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("d959"),l=o.n(s);const c=l()(i,[["render",n]]);t["a"]=c},"9c1a":function(e,t,o){},de46:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function n(e,t,o,n,a,i){const s=Object(r["resolveComponent"])("report-template");return Object(r["openBlock"])(),Object(r["createBlock"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!0,canExportPDf:!0,reportReady:e.reportReady,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","reportReady","onReportConfiguration"])}o("14d9");var a=o("1497"),i=o("44e3"),s=o("4ba2"),l=o("ad8d"),c=o("d95e"),d=o("9ceb"),p=Object(r["defineComponent"])({mixins:[i["a"]],components:{ReportTemplate:s["a"]},data:()=>({title:"Tests requested",rows:[],cohort:[],reportType:"",reportReady:!1,columns:[],patientLevelColumns:[[d["a"].thTxt("ARV#"),d["a"].thTxt("Gender"),d["a"].thTxt("Birthdate"),d["a"].thTxt("Ordered Date"),d["a"].thTxt("Test"),d["a"].thTxt("Reason")]],disaggregatedColumns:[d["a"].thTxt("Age group"),d["a"].thTxt("Gender")]}),created(){this.report=new a["a"],this.fields=this.getFormFields()},methods:{async onPeriod({type:e,tests:t}){this.reportReady=!0,this.rows=[],this.period=this.report.getDateIntervalPeriod(),this.reportType=e.value,"disaggregated"===this.reportType?this.setDisaggregatedRows(t):"patient_level"===this.reportType&&this.setPatientLevelRows(t)},getFormFields(){return[...this.getDateDurationFields(),{id:"tests",helpText:"Test(s) Requested",type:c["b"].TT_MULTIPLE_SELECT,options:async(e,t,o)=>{this.report.setStartDate(o.start_date),this.report.setEndDate(o.end_date);const r=await this.report.getSamplesDrawnReport(),n=this.buildAvailableTests(r);return this.buildAvailableTestOptions(n)}},{id:"type",helpText:"Select report type",type:c["b"].TT_SELECT,options:()=>[{label:"Disaggregated",value:"disaggregated"},{label:"Patient level",value:"patient_level"}]}]},buildAvailableTests(e){const t={};return e.forEach(e=>{e.tests.forEach(o=>{o in t||(t[o]=[]),t[o].push(e)})}),t},buildAvailableTestOptions(e){const t=[];for(const o in e){const r=e[o];t.push({label:o,value:r.length,other:r})}return t},setDisaggregatedRows(e){const t=[],o=[];this.columns=[this.disaggregatedColumns.concat(e.map(e=>d["a"].thTxt(e.label)))];for(const r in l["a"]){const n=l["a"][r],a=[d["a"].td(n),d["a"].td("M")],i=[d["a"].td(n),d["a"].td("F")];e.forEach(({other:e})=>{const t=t=>e.filter(e=>e.gender===t&&e.age_group===n).map(e=>e.patient_id);a.push(this.drill(t("M"),"Males of "+n)),i.push(this.drill(t("F"),"Females of "+n))}),t.push(a),o.push(i),this.rows=[...o,...t]}},setPatientLevelRows(e){this.columns=this.patientLevelColumns,e.forEach(({other:e})=>{this.sortByArvNumber(e).forEach(e=>{this.rows.push([d["a"].td(e.arv_number),d["a"].td(e.gender),d["a"].tdDate(e.birthdate),d["a"].tdDate(e.order_date),d["a"].td(e.tests.join(",")),d["a"].td(e.reason_for_test)])})})}}}),u=o("d959"),h=o.n(u);const m=h()(p,[["render",n]]);t["default"]=m}}]);
//# sourceMappingURL=chunk-10d581f6.15155046.js.map