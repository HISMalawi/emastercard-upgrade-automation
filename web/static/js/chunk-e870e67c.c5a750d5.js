(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e870e67c"],{"054e":function(e,t,o){"use strict";o("6547")},3811:function(e,t,o){},"44e3":function(e,t,o){"use strict";o("14d9");var n=o("1c74"),a=o("7a23"),i=o("b446"),r=o("23e6"),s=o("9283"),l=o("d867"),c=o("d6aa"),d=o("5969"),u=o("d95e"),h=o("2706"),p=o("9ceb"),m=o("2ef0"),b=o("8e8b"),O=o("3e53"),f=o("0011"),j=Object(a["defineComponent"])({data:()=>({app:O["a"].getActiveApp(),fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",isMilitarySite:!1,drillDownCache:{}}),methods:{formatGender(e){return Object(f["b"])(e)},toDate(e){return s["c"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const t=e.split("-")[2],o=parseInt(t);return"number"===typeof o?o:0}return 0},tdARV(e,t={}){return p["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,n=!0){const a=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:n,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});a.present()},async drilldownData(e,t,o,n){const a=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:n,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});a.present()},getDefaultDrillDownTable(){const e=[[p["a"].thTxt("ARV number"),p["a"].thTxt("Gender"),p["a"].thTxt("Birth Date"),p["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,n=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(n=t,o in this.drillDownCache)return[n,...this.drillDownCache[o].slice(1)]}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const a=await r["a"].findByID(o),i=new r["a"](a),s=[];return n&&(t=1,s.push(n)),s.push(this.tdARV(i.getArvNumber())),s.push(p["a"].td(this.formatGender(i.getGender()))),s.push(p["a"].tdDate(i.getBirthdate().toString())),s.push(p["a"].tdBtn("Show",async()=>{await l["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),n=await Promise.all(o);return n.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:n}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,n)},drill(e,t="Drill table"){return e&&e.length>0?p["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):p["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,a=n["e"].getSessionDate()){const r="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:u["b"].TT_SELECT,condition:()=>e,validation:e=>h["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let n=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(n=[{label:"Set custom period",value:"custom_period",other:{}},...n]),n}},...Object(i["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>r,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(i["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,n)=>{"next"===t&&(this.endDate=n.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"occupation",helpText:"Report Group",type:u["b"].TT_SELECT,init:async()=>(this.isMilitarySite=await b["a"].get("IS_MILITARY_SITE"),!0),computedValue:e=>e.value,condition:()=>{var e;return"ART"===(null===(e=this.app)||void 0===e?void 0:e.applicationName)&&this.isMilitarySite},validation:e=>h["a"].required(e),options:()=>[{label:"All",value:"All"},{label:"Military",value:"Military"},{label:"Civilian",value:"Civilian"}]}]}}});const w=j;t["a"]=w},"4ba2":function(e,t,o){"use strict";var n=o("7a23");const a=["innerHTML"],i={class:"header-text-list"},r=["onClick"],s={key:1},l=["innerHTML"],c={key:0},d={class:"report-content"};function u(e,t,o,u,h,p){const m=Object(n["resolveComponent"])("his-standard-form"),b=Object(n["resolveComponent"])("ion-title"),O=Object(n["resolveComponent"])("ion-img"),f=Object(n["resolveComponent"])("ion-thumbnail"),j=Object(n["resolveComponent"])("ion-chip"),w=Object(n["resolveComponent"])("ion-label"),C=Object(n["resolveComponent"])("ion-item"),g=Object(n["resolveComponent"])("ion-toolbar"),y=Object(n["resolveComponent"])("ion-header"),v=Object(n["resolveComponent"])("report-table"),D=Object(n["resolveComponent"])("ion-content"),T=Object(n["resolveComponent"])("ion-footer"),x=Object(n["resolveComponent"])("his-footer"),I=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["withDirectives"])(Object(n["createVNode"])(m,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[n["vShow"],!e.canShowReport]]),e.canShowReport?(Object(n["openBlock"])(),Object(n["createBlock"])(I,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(y,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,null,{default:Object(n["withCtx"])(()=>[e.showtitleOnly?(Object(n["openBlock"])(),Object(n["createBlock"])(b,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:e.title},null,8,a)]),_:1})):Object(n["createCommentVNode"])("",!0),e.showtitleOnly?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{slot:"start"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{src:e.logo},null,8,["src"])]),_:1}),Object(n["createVNode"])(w,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("ul",i,[Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Title "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.title),1)]),Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Period "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.period),1)]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.headerInfoList,(e,t)=>{var o,a;return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,href:"#",onClick:Object(n["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(n["toDisplayString"])(e.value),9,r)):Object(n["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(a=e.other)&&void 0!==a&&a.onclick?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("b",s,[Object(n["createElementVNode"])("span",{innerHTML:e.value},null,8,l)]))])}),128)),e.showValidationStatus?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",c,[e.hasErrors?(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.errorCount),1),Object(n["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.hasErrors?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(j,{key:1,color:"success"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(n["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(n["createVNode"])(D,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(v,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(n["createVNode"])(T,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(g,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Date Created: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.date),1)]),_:1}),Object(n["createVNode"])(j,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("His-Core Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(n["createVNode"])(j,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("API Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(x,{btns:e.btns},null,8,["btns"])]),_:1})):Object(n["createCommentVNode"])("",!0)],64)}o("14d9");var h=o("0f25"),p=o("80e3"),m=o("ba82"),b=o("9ceb"),O=o("7920"),f=o("d867"),j=o("b5e4"),w=o("1718"),C=o("1c74"),g=o("5a0c"),y=o.n(g),v=o("2ef0");const D=["innerHTML"];function T(e,t,o,a,i,r){const s=Object(n["resolveComponent"])("ion-title"),l=Object(n["resolveComponent"])("ion-toolbar"),c=Object(n["resolveComponent"])("ion-header"),d=Object(n["resolveComponent"])("ion-item"),u=Object(n["resolveComponent"])("ion-list"),h=Object(n["resolveComponent"])("ion-grid"),p=Object(n["resolveComponent"])("ion-button"),m=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(h,{class:"selector"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.errors,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(d,{class:"his-md-text ion-padding",key:t},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,D)]),_:2},1024))),128))]),_:1})]),_:1}),Object(n["createVNode"])(m,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(p,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var x=Object(n["defineComponent"])({components:{IonGrid:f["IonGrid"],IonList:f["IonList"],IonItem:f["IonItem"],IonFooter:f["IonFooter"],IonButton:f["IonButton"],IonToolbar:f["IonToolbar"],IonHeader:f["IonHeader"],IonTitle:f["IonTitle"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await f["modalController"].dismiss({})}}}),I=(o("054e"),o("6b0d")),V=o.n(I);const S=V()(x,[["render",T],["__scopeId","data-v-0ed0c7a2"]]);var _=S,N=o("7f35"),F=o("0011"),k=Object(n["defineComponent"])({components:{HisStandardForm:O["a"],IonHeader:f["IonHeader"],ReportTable:p["a"],HisFooter:h["a"],IonPage:f["IonPage"],IonContent:f["IonContent"],IonToolbar:f["IonToolbar"],IonChip:f["IonChip"],IonFooter:f["IonFooter"],IonLabel:f["IonLabel"],IonThumbnail:f["IonThumbnail"],IonItem:f["IonItem"],IonImg:f["IonImg"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:""},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:C["e"].getSiteUUID(),apiVersion:C["e"].getApiVersion(),coreVersion:C["e"].getCoreVersion(),artVersion:C["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(v["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(v["isEmpty"])(e)?(this.canShowReport=!0,this.refreshTimeStamp()):(this.canShowReport=!1,this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)}))},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(w["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(w["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(w["a"])("reports.png")},hasErrors(){return!Object(v["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0},footerRows(){const e=[["Date Created: "+this.date]];return this.period&&e.push(["Quarter: "+this.period]),e.push(["HIS-Core Version: "+this.coreVersion]),e.push(["API Version: "+this.apiVersion]),e.push(["Site UUID: "+this.siteUUID]),e.push(["Generated by: "+C["e"].getUserName()]),e}},methods:{async showErrors(){const e=await f["modalController"].create({component:_,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=C["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=y()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){var e;return this.customFileName||`${this.reportPrefix} ${C["e"].getLocationName()} ${Object(F["g"])(this.title).replace(this.reportPrefix,"")} ${null!==(e=this.period)&&void 0!==e?e:this.date}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),f["loadingController"].dismiss()}catch(e){Object(j["c"])(""+e),console.error(e),f["loadingController"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),f["loadingController"].dismiss()}catch(n){Object(j["c"])(""+n),console.error(n),f["loadingController"].dismiss()}},async reloadReport(e=!1){Object(v["isEmpty"])(this.formData)&&Object(v["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await f["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(b["b"])(this.activeColumns,this.activeRows,"csvMode");Object(m["a"])(e,[...t,...this.footerRows],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(N["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(b["b"])(this.activeColumns,this.activeRows,e);Object(m["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(j["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(v["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("68a7");const E=V()(k,[["render",u],["__scopeId","data-v-5ed78ee7"]]);t["a"]=E},6547:function(e,t,o){},"68a7":function(e,t,o){"use strict";o("3811")},7920:function(e,t,o){"use strict";var n=o("7a23");function a(e,t,o,a,i,r){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=o("9441"),r=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("6b0d"),l=o.n(s);const c=l()(r,[["render",a]]);t["a"]=c},"8a2d":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function a(e,t,o,a,i,r){const s=Object(n["resolveComponent"])("report-template"),l=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,showFilters:!0,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}o("14d9");var i=o("f01e"),r=o("44e3"),s=o("4ba2"),l=o("9ceb"),c=o("2706"),d=o("d95e"),u=o("d867"),h=o("1c74"),p=o("b446"),m=o("9283"),b=o("2ef0"),O=Object(n["defineComponent"])({mixins:[r["a"]],components:{ReportTemplate:s["a"],IonPage:u["IonPage"]},data:()=>({title:"Data cleaning report",rows:[],columns:[],defaultIndicator:{}}),created(){this.fields=[{id:"indicator",helpText:"Select indicator",type:d["b"].TT_SELECT,requireNext:!1,condition:()=>!this.defaultIndicator,defaultOutput:()=>this.defaultIndicator,validation:e=>c["a"].required(e),options:()=>this.getIndicatorOptions()},...Object(p["b"])({id:"start_date",helpText:"Start",required:!0,minDate:()=>"2000-01-01",maxDate:()=>h["e"].getSessionDate(),estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(p["b"])({id:"end_date",helpText:"End",required:!0,minDate:(e,t)=>t.start_date,maxDate:()=>h["e"].getSessionDate(),estimation:{allowUnknown:!1},computeValue:e=>e})],this.defaultIndicator=Object(b["find"])(this.getIndicatorOptions(),{value:this.$route.query["cleaning_tool"]})||null},methods:{async onPeriod(e,t){const o=e=>m["c"].toStandardHisDisplayFormat(e);this.rows=[],this.title=e.indicator.label;const n=e.indicator;this.columns=n.other.columns,this.report=new i["b"],this.report.setStartDate(t.start_date),this.report.setEndDate(t.end_date),this.period=`${o(t.start_date)} - ${o(t.end_date)}`;const a=await this.report.getDataToolReport(n.value);a&&(this.rows=await Promise.all(a.map(e=>n.other.formatRow(e))))},showPatientBtn(e){return l["a"].tdBtn("View",()=>this.$router.push("/patient/dashboard/"+e))},getIndicatorOptions(){return[{label:"Males with ANC Encounters",value:i["a"].MALES_WITH_ANC_ENCOUNTERS,other:{columns:[[l["a"].thTxt("National ID"),l["a"].thTxt("First name"),l["a"].thTxt("Last name"),l["a"].thTxt("Total Encounters"),l["a"].thTxt("Action")]],formatRow:e=>[l["a"].td(e.identifier),l["a"].td(e.given_name),l["a"].td(e.family_name),l["a"].td(e.total_encounters),this.showPatientBtn(e.patient_id)]}},{label:"Encounters after death",value:i["a"].ENCOUNTERS_AFTER_DEATH,other:{columns:[[l["a"].thTxt("National ID"),l["a"].thTxt("First name"),l["a"].thTxt("Last name"),l["a"].thTxt("Date of death"),l["a"].thTxt("Recent encounter date"),l["a"].thTxt("Count"),l["a"].thTxt("Action")]],formatRow:e=>[l["a"].td(e.identifier),l["a"].td(e.given_name),l["a"].td(e.family_name),l["a"].tdDate(e.patient_died_date),l["a"].tdDate(e.minimum_encounter_datetime),l["a"].td(e.total_encounters),this.showPatientBtn(e.patient_id)]}},{label:"Incomplete visits",value:i["a"].INCOMPLETE_VISITS,other:{columns:[[l["a"].thTxt("National ID"),l["a"].thTxt("Name"),l["a"].thTxt("Visit date"),l["a"].thTxt("Incomplete count"),l["a"].thTxt("Action")]],formatRow:e=>[l["a"].td(e.n_id),l["a"].td(e.name),l["a"].td(e.visit_date),l["a"].td(e.visit_no),this.showPatientBtn(e.patient_id)]}},{label:"Duplicate encounters",value:i["a"].DUPLICATE_ENCOUNTERS,other:{columns:[[l["a"].thTxt("National ID"),l["a"].thTxt("Given name"),l["a"].thTxt("Family name"),l["a"].thTxt("Name"),l["a"].thTxt("Total"),l["a"].thTxt("Action")]],formatRow:e=>[l["a"].td(e.identifier),l["a"].td(e.given_name),l["a"].td(e.family_name),l["a"].td(e.name),l["a"].td(e.total),this.showPatientBtn(e.patient_id)]}},{label:"Missing HIV Status",value:i["a"].MISSING_HIV_STATUS,other:{columns:[[l["a"].thTxt("National ID"),l["a"].thTxt("Given name"),l["a"].thTxt("Family name"),l["a"].thTxt("Action")]],formatRow:e=>[l["a"].td(e.identifier),l["a"].td(e.given_name),l["a"].td(e.family_name),this.showPatientBtn(e.patient_id)]}}]}}}),f=o("6b0d"),j=o.n(f);const w=j()(O,[["render",a]]);t["default"]=w}}]);
//# sourceMappingURL=chunk-e870e67c.c5a750d5.js.map