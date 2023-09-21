(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25a6e5bc"],{"054e":function(e,t,o){"use strict";o("6547")},"1f15":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,a,i){const s=Object(n["resolveComponent"])("report-template"),l=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createBlock"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,config:{showIndex:!1},reportPrefix:"MoH",hasServerSideCaching:!0,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])]),_:1})}var a=o("8bab"),i=o("44e3"),s=o("2ef0"),l=o("4ba2"),c=o("2706"),d=o("d95e"),u=o("9ceb"),p=o("d867");const h={style:{borderRight:"5px solid black !important"}};var b=Object(n["defineComponent"])({mixins:[i["a"]],components:{ReportTemplate:l["a"],IonPage:p["IonPage"]},data:()=>({title:"Survival analysis report",totalClients:[],rows:[],columns:[[u["a"].thTxt("Reg cohort"),u["a"].thTxt("Interval (months)"),u["a"].thTxt("Sub group"),u["a"].thTxt("Total Reg (database)"),u["a"].thTxt("Total Reg (Confirmed)",h),u["a"].thTxt("Alive"),u["a"].thTxt("Died"),u["a"].thTxt("Defaulted"),u["a"].thTxt("Stopped"),u["a"].thTxt("TO"),u["a"].thTxt("Unknown")]]}),created(){this.fields=[...this.getDateDurationFields(!0,!1,17),{id:"group",helpText:"Select sub-group",type:d["b"].TT_SELECT,validation:e=>c["a"].required(e),options:()=>[{label:"General",value:a["a"].GENERAL},{label:"Children",value:a["a"].CHILDREN},{label:"Option B+",value:a["a"].WOMEN}]}]},methods:{async onPeriod({quarter:e,group:t},o,n=!1){this.rows=[],this.period=e.label,this.report=new a["b"],this.report.setRegenerate(n),this.report.setQuarter(e.label),this.report.setAgeGroup(t.value);const r=await this.report.getSurvivalAnalysis();this.title="Survival analysis report "+t.label,this.rows=this.getRows(r)},getRows(e){return Object.keys(e).filter(t=>!Object(s["isEmpty"])(e[t])).sort((e,t)=>{const[o,n]=e.split(" "),[r,a]=t.split(" ");return parseInt(n)-parseInt(a)}).map(t=>{const o=e[t];let n=0,r=0;const a={"On antiretrovirals":0,Defaulted:0,"Patient died":0,"Treatment stopped":0,"Patient transferred out":0,unknown:0};if(!Object(s["isEmpty"])(o)){for(const e in o){const t=o[e];for(const o in t){const i=t[o];n=parseInt(o),e in a?a[e]=i:a["unknown"]=i,r+=i}}return[u["a"].td(t),u["a"].td(n),u["a"].td(this.report.getAgeGroup()),u["a"].td(r),u["a"].td("",h),u["a"].td(a["On antiretrovirals"]),u["a"].td(a["Patient died"]),u["a"].td(a["Defaulted"]),u["a"].td(a["Treatment stopped"]),u["a"].td(a["Patient transferred out"]),u["a"].td(a["unknown"])]}})}}}),m=o("6b0d"),O=o.n(m);const j=O()(b,[["render",r]]);t["default"]=j},"44e3":function(e,t,o){"use strict";o("14d9");var n=o("1c74"),r=o("7a23"),a=o("b446"),i=o("23e6"),s=o("9283"),l=o("d867"),c=o("d6aa"),d=o("5969"),u=o("d95e"),p=o("2706"),h=o("9ceb"),b=o("2ef0"),m=Object(r["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(e){const t=(""+e).toUpperCase();return"M"===t||"MALE"===t?"Male":"F"===t||"FEMALE"===t?"Female":/fbf|fnp|fp/i.test(e)?t:e},toDate(e){return s["c"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const[t,o,n]=e.split("-"),r=parseInt(n);return"number"===typeof r?r:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,n=!0){const r=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:n,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});r.present()},async drilldownData(e,t,o,n){const r=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:n,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});r.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,n=null;if(Object(b["isArray"])(e)){const[t,o]=e;if(n=t,o in this.drillDownCache){const[e,...t]=this.drillDownCache[o];return[n,...t]}}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const r=await i["a"].findByID(o),a=new i["a"](r),s=[];return n&&(t=1,s.push(n)),s.push(this.tdARV(a.getArvNumber())),s.push(h["a"].td(this.formatGender(a.getGender()))),s.push(h["a"].tdDate(a.getBirthdate().toString())),s.push(h["a"].tdBtn("Show",async()=>{await l["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),n=await Promise.all(o);return n.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:n}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,n)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,r=n["e"].getSessionDate()){const i="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:u["b"].TT_SELECT,condition:()=>e,validation:e=>p["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let n=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(n=[{label:"Set custom period",value:"custom_period",other:{}},...n]),n}},...Object(a["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>i,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(a["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,n)=>{"next"===t&&(this.endDate=n.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:e=>e})]}}});const O=m;t["a"]=O},"4ba2":function(e,t,o){"use strict";var n=o("7a23");const r=["innerHTML"],a={class:"header-text-list"},i=["onClick"],s={key:1},l=["innerHTML"],c={key:0},d={class:"report-content"};function u(e,t,o,u,p,h){const b=Object(n["resolveComponent"])("his-standard-form"),m=Object(n["resolveComponent"])("ion-title"),O=Object(n["resolveComponent"])("ion-img"),j=Object(n["resolveComponent"])("ion-thumbnail"),f=Object(n["resolveComponent"])("ion-chip"),g=Object(n["resolveComponent"])("ion-label"),C=Object(n["resolveComponent"])("ion-item"),w=Object(n["resolveComponent"])("ion-toolbar"),v=Object(n["resolveComponent"])("ion-header"),y=Object(n["resolveComponent"])("report-table"),D=Object(n["resolveComponent"])("ion-content"),x=Object(n["resolveComponent"])("ion-footer"),k=Object(n["resolveComponent"])("his-footer"),F=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["withDirectives"])(Object(n["createVNode"])(b,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[n["vShow"],!e.canShowReport]]),e.canShowReport?(Object(n["openBlock"])(),Object(n["createBlock"])(F,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(w,null,{default:Object(n["withCtx"])(()=>[e.showtitleOnly?(Object(n["openBlock"])(),Object(n["createBlock"])(m,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:e.title},null,8,r)]),_:1})):Object(n["createCommentVNode"])("",!0),e.showtitleOnly?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(C,{key:1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(j,{slot:"start"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(O,{src:e.logo},null,8,["src"])]),_:1}),Object(n["createVNode"])(g,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("ul",a,[Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Title "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.title),1)]),Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Period "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.period),1)]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.headerInfoList,(e,t)=>{var o,r;return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,href:"#",onClick:Object(n["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(n["toDisplayString"])(e.value),9,i)):Object(n["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(r=e.other)&&void 0!==r&&r.onclick?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("b",s,[Object(n["createElementVNode"])("span",{innerHTML:e.value},null,8,l)]))])}),128)),e.showValidationStatus?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",c,[e.hasErrors?(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.errorCount),1),Object(n["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.hasErrors?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(f,{key:1,color:"success"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(n["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(n["createVNode"])(D,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",d,[Object(n["createVNode"])(y,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(n["createVNode"])(x,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(w,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Date Created: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.date),1)]),_:1}),Object(n["createVNode"])(f,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("His-Core Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(n["createVNode"])(f,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("API Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(k,{btns:e.btns},null,8,["btns"])]),_:1})):Object(n["createCommentVNode"])("",!0)],64)}o("14d9");var p=o("0f25"),h=o("80e3"),b=o("ba82"),m=o("9ceb"),O=o("7920"),j=o("d867"),f=o("b5e4"),g=o("1718"),C=o("1c74"),w=o("5a0c"),v=o.n(w),y=o("2ef0");const D=["innerHTML"];function x(e,t,o,r,a,i){const s=Object(n["resolveComponent"])("ion-title"),l=Object(n["resolveComponent"])("ion-toolbar"),c=Object(n["resolveComponent"])("ion-header"),d=Object(n["resolveComponent"])("ion-item"),u=Object(n["resolveComponent"])("ion-list"),p=Object(n["resolveComponent"])("ion-grid"),h=Object(n["resolveComponent"])("ion-button"),b=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(c,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(p,{class:"selector"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.errors,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(d,{class:"his-md-text ion-padding",key:t},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,D)]),_:2},1024))),128))]),_:1})]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var k=Object(n["defineComponent"])({components:{IonGrid:j["IonGrid"],IonList:j["IonList"],IonItem:j["IonItem"],IonFooter:j["IonFooter"],IonButton:j["IonButton"],IonToolbar:j["IonToolbar"],IonHeader:j["IonHeader"],IonTitle:j["IonTitle"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await j["modalController"].dismiss({})}}}),F=(o("054e"),o("6b0d")),V=o.n(F);const I=V()(k,[["render",x],["__scopeId","data-v-0ed0c7a2"]]);var N=I,T=o("7f35"),E=o("0011"),S=Object(n["defineComponent"])({components:{HisStandardForm:O["a"],IonHeader:j["IonHeader"],ReportTable:h["a"],HisFooter:p["a"],IonPage:j["IonPage"],IonContent:j["IonContent"],IonToolbar:j["IonToolbar"],IonChip:j["IonChip"],IonFooter:j["IonFooter"],IonLabel:j["IonLabel"],IonThumbnail:j["IonThumbnail"],IonItem:j["IonItem"],IonImg:j["IonImg"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:"HIS-Core"},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Object},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:C["e"].getSiteUUID(),apiVersion:C["e"].getApiVersion(),coreVersion:C["e"].getCoreVersion(),artVersion:C["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(y["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(y["isEmpty"])(e)||this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)})},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(g["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(g["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(g["a"])("reports.png")},hasErrors(){return!Object(y["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0}},methods:{async showErrors(){const e=await j["modalController"].create({component:N,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=C["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=v()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){return this.customFileName||`${this.reportPrefix} ${C["e"].getLocationName()} ${Object(E["e"])(this.title)} ${this.period}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),j["loadingController"].dismiss()}catch(e){Object(f["c"])(""+e),console.error(e),j["loadingController"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),j["loadingController"].dismiss()}catch(n){Object(f["c"])(""+n),console.error(n),j["loadingController"].dismiss()}},async reloadReport(e=!1){Object(y["isEmpty"])(this.formData)&&Object(y["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await j["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(m["b"])(this.activeColumns,this.activeRows,"csvMode");Object(b["a"])(e,[...t,["Date Created: "+this.date],["Quarter: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID],["Generated by: "+C["e"].getUserName()]],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(T["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(m["b"])(this.activeColumns,this.activeRows,e);Object(b["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(f["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(y["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("6aae");const P=V()(S,[["render",u],["__scopeId","data-v-f22df5d8"]]);t["a"]=P},6547:function(e,t,o){},"6aae":function(e,t,o){"use strict";o("a05b")},7920:function(e,t,o){"use strict";var n=o("7a23");function r(e,t,o,r,a,i){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var a=o("9441"),i=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:a["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("6b0d"),l=o.n(s);const c=l()(i,[["render",r]]);t["a"]=c},"8bab":function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return i}));var n,r=o("ade3"),a=o("5969");(function(e){e["GENERAL"]="General",e["CHILDREN"]="Children",e["WOMEN"]="Women"})(n||(n={}));class i extends a["a"]{constructor(){super(),Object(r["a"])(this,"ageGroup",void 0),Object(r["a"])(this,"quarter",void 0),Object(r["a"])(this,"regenerate",void 0),this.quarter="",this.regenerate=!1,this.ageGroup=n.GENERAL}setRegenerate(e){this.regenerate=e}getAgeGroup(){return this.ageGroup}setQuarter(e){this.quarter=e}setAgeGroup(e){this.ageGroup=e}getSurvivalAnalysis(){return this.getReport("cohort_survival_analysis",{quarter:this.quarter,regenerate:this.regenerate,date:this.date,age_group:this.ageGroup,program_id:this.programID})}}},a05b:function(e,t,o){}}]);
//# sourceMappingURL=chunk-25a6e5bc.f72eeca3.js.map