(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53509df8"],{"054e":function(e,t,o){"use strict";o("6547")},3811:function(e,t,o){},"4ba2":function(e,t,o){"use strict";var n=o("7a23");const r=["innerHTML"],i={class:"header-text-list"},c=["onClick"],a={key:1},s=["innerHTML"],l={key:0},u={class:"report-content"};function d(e,t,o,d,T,m){const p=Object(n["resolveComponent"])("his-standard-form"),h=Object(n["resolveComponent"])("ion-title"),b=Object(n["resolveComponent"])("ion-img"),f=Object(n["resolveComponent"])("ion-thumbnail"),E=Object(n["resolveComponent"])("ion-chip"),O=Object(n["resolveComponent"])("ion-label"),_=Object(n["resolveComponent"])("ion-item"),C=Object(n["resolveComponent"])("ion-toolbar"),I=Object(n["resolveComponent"])("ion-header"),j=Object(n["resolveComponent"])("report-table"),v=Object(n["resolveComponent"])("ion-content"),N=Object(n["resolveComponent"])("ion-footer"),y=Object(n["resolveComponent"])("his-footer"),S=Object(n["resolveComponent"])("ion-page");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["withDirectives"])(Object(n["createVNode"])(p,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[n["vShow"],!e.canShowReport]]),e.canShowReport?(Object(n["openBlock"])(),Object(n["createBlock"])(S,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(I,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[e.showtitleOnly?(Object(n["openBlock"])(),Object(n["createBlock"])(h,{key:0},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:e.title},null,8,r)]),_:1})):Object(n["createCommentVNode"])("",!0),e.showtitleOnly?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(_,{key:1},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(f,{slot:"start"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(b,{src:e.logo},null,8,["src"])]),_:1}),Object(n["createVNode"])(O,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("ul",i,[Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Title "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.title),1)]),Object(n["createElementVNode"])("li",null,[Object(n["createTextVNode"])("Period "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.period),1)]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.headerInfoList,(e,t)=>{var o,r;return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:t},[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.label)+" ",1),e&&null!==e&&void 0!==e&&null!==(o=e.other)&&void 0!==o&&o.onclick?(Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{key:0,href:"#",onClick:Object(n["withModifiers"])(t=>e.other.onclick(),["prevent"])},Object(n["toDisplayString"])(e.value),9,c)):Object(n["createCommentVNode"])("",!0),!e||null!==e&&void 0!==e&&null!==(r=e.other)&&void 0!==r&&r.onclick?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("b",a,[Object(n["createElementVNode"])("span",{innerHTML:e.value},null,8,s)]))])}),128)),e.showValidationStatus?(Object(n["openBlock"])(),Object(n["createElementBlock"])("li",l,[e.hasErrors?(Object(n["openBlock"])(),Object(n["createBlock"])(E,{key:0,onClick:e.showErrors,color:"danger"},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.errorCount),1),Object(n["createTextVNode"])(" Error(s) found. Click for more ")]),_:1},8,["onClick"])):Object(n["createCommentVNode"])("",!0),e.hasErrors?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createBlock"])(E,{key:1,color:"success"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Report is Consistent ")]),_:1}))])):Object(n["createCommentVNode"])("",!0)])]),_:1})]),_:1}))]),_:1})]),_:1}),Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("div",u,[Object(n["createVNode"])(j,{rows:e.rows,columns:e.columns,showFilters:e.showFilters,config:{...e.config,tableCssTheme:e.tableCssTheme},onOnActiveColumns:e.onActiveColumns,onOnActiveRows:e.onActiveRows},null,8,["rows","columns","showFilters","config","onOnActiveColumns","onOnActiveRows"])])]),_:1}),Object(n["createVNode"])(N,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(C,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(E,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("Date Created: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.date),1)]),_:1}),Object(n["createVNode"])(E,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("His-Core Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(n["createVNode"])(E,{color:"primary"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])("API Version: "),Object(n["createElementVNode"])("b",null,Object(n["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(y,{btns:e.btns},null,8,["btns"])]),_:1})):Object(n["createCommentVNode"])("",!0)],64)}o("14d9");var T=o("0f25"),m=o("80e3"),p=o("ba82"),h=o("9ceb"),b=o("7920"),f=o("d867"),E=o("b5e4"),O=o("1718"),_=o("1c74"),C=o("5a0c"),I=o.n(C),j=o("2ef0");const v=["innerHTML"];function N(e,t,o,r,i,c){const a=Object(n["resolveComponent"])("ion-title"),s=Object(n["resolveComponent"])("ion-toolbar"),l=Object(n["resolveComponent"])("ion-header"),u=Object(n["resolveComponent"])("ion-item"),d=Object(n["resolveComponent"])("ion-list"),T=Object(n["resolveComponent"])("ion-grid"),m=Object(n["resolveComponent"])("ion-button"),p=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(a,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(T,{class:"selector"},{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.errors,(e,t)=>(Object(n["openBlock"])(),Object(n["createBlock"])(u,{class:"his-md-text ion-padding",key:t},{default:Object(n["withCtx"])(()=>[Object(n["createElementVNode"])("span",{innerHTML:`(${t+1}) ${e}`},null,8,v)]),_:2},1024))),128))]),_:1})]),_:1}),Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(s,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(m,{class:"close-btn",color:"danger",size:"large",onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var y=Object(n["defineComponent"])({components:{IonGrid:f["IonGrid"],IonList:f["IonList"],IonItem:f["IonItem"],IonFooter:f["IonFooter"],IonButton:f["IonButton"],IonToolbar:f["IonToolbar"],IonHeader:f["IonHeader"],IonTitle:f["IonTitle"]},props:{title:{type:String,default:"Report Errors"},errors:{type:Array,required:!0}},methods:{async closeModal(){await f["modalController"].dismiss({})}}}),S=(o("054e"),o("6b0d")),g=o.n(S);const w=g()(y,[["render",N],["__scopeId","data-v-0ed0c7a2"]]);var D=w,F=o("7f35"),A=o("0011"),R=Object(n["defineComponent"])({components:{HisStandardForm:b["a"],IonHeader:f["IonHeader"],ReportTable:m["a"],HisFooter:T["a"],IonPage:f["IonPage"],IonContent:f["IonContent"],IonToolbar:f["IonToolbar"],IonChip:f["IonChip"],IonFooter:f["IonFooter"],IonLabel:f["IonLabel"],IonThumbnail:f["IonThumbnail"],IonItem:f["IonItem"],IonImg:f["IonImg"]},props:{encryptPDF:{type:Boolean,default:!1},showValidationStatus:{type:Boolean,default:!1},validationErrors:{type:Array,default:()=>[]},config:{type:Object},headerInfoList:{type:Array,default:()=>[]},reportPrefix:{type:String,default:""},reportLogo:{type:String},showtitleOnly:{type:Boolean,default:!1},title:{type:String,required:!0},period:{type:String},showFilters:{type:Boolean,default:!1},fields:{type:Array,default:()=>[]},columns:{type:Object,required:!0},rows:{type:Object,required:!0},customBtns:{type:Array,default:()=>[]},hasServerSideCaching:{type:Boolean,default:!1},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},enabledPDFHorizontalPageBreak:{type:Boolean,default:!1},onFinishBtnAction:{type:Function},onReportConfiguration:{type:Function,required:!0},onDefaultConfiguration:{type:Function},customFileName:{type:String,default:""}},data:()=>({date:"",formData:{},btns:[],computeFormData:{},activeColumns:[],activeRows:[],isLoadingData:!1,canShowReport:!1,siteUUID:_["e"].getSiteUUID(),apiVersion:_["e"].getApiVersion(),coreVersion:_["e"].getCoreVersion(),artVersion:_["e"].getAppVersion(),tableCssTheme:"art-report-theme"}),watch:{validationErrors:{handler(e){Object(j["isEmpty"])(e)||this.showErrors()},deep:!0,immediate:!0},fields:{handler(e){Object(j["isEmpty"])(e)?(this.canShowReport=!0,this.refreshTimeStamp()):(this.canShowReport=!1,this.btns.forEach(e=>{"Back"===e.name&&(e.visible=!0)}))},immediate:!0}},computed:{logo(){if(!this.reportLogo&&"string"===typeof this.reportPrefix){if(this.reportPrefix.match(/pepfar/i))return Object(O["a"])("login-logos/PEPFAR.png");if(this.reportPrefix.match(/moh/i))return Object(O["a"])("login-logos/Malawi-Coat_of_arms_of_arms.png")}return Object(O["a"])("reports.png")},hasErrors(){return!Object(j["isEmpty"])(this.validationErrors)},errorCount(){return this.validationErrors?this.validationErrors.length:0},footerRows(){const e=[["Date Created: "+this.date]];return this.period&&e.push(["Quarter: "+this.period]),e.push(["HIS-Core Version: "+this.coreVersion]),e.push(["API Version: "+this.apiVersion]),e.push(["Site UUID: "+this.siteUUID]),e.push(["Generated by: "+_["e"].getUserName()]),e}},methods:{async showErrors(){const e=await f["modalController"].create({component:D,backdropDismiss:!1,cssClass:"large-modal",componentProps:{errors:this.validationErrors}});e.present()},pdfEncryptionData(){const e=_["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},refreshTimeStamp(){this.date=I()().format("DD/MMM/YYYY HH:MM:ss")},onActiveColumns(e){this.activeColumns=e},onActiveRows(e){this.activeRows=e},getFileName(){var e;return this.customFileName||`${this.reportPrefix} ${_["e"].getLocationName()} ${Object(A["g"])(this.title).replace(this.reportPrefix,"")} ${null!==(e=this.period)&&void 0!==e?e:this.date}`},async onLoadDefault(){this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),this.onDefaultConfiguration&&await this.onDefaultConfiguration(),f["loadingController"].dismiss()}catch(e){Object(E["c"])(""+e),console.error(e),f["loadingController"].dismiss()}},async onFinish(e,t,o=!1){this.formData=e,this.computeFormData=t,this.canShowReport=!0,await this.presentLoading();try{this.refreshTimeStamp(),await this.onReportConfiguration(this.formData,this.computeFormData,o),f["loadingController"].dismiss()}catch(n){Object(E["c"])(""+n),console.error(n),f["loadingController"].dismiss()}},async reloadReport(e=!1){Object(j["isEmpty"])(this.formData)&&Object(j["isEmpty"])(this.computeFormData)?this.onDefaultConfiguration&&await this.onLoadDefault():await this.onFinish(this.formData,this.computeFormData,e)},async presentLoading(){const e=await f["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.onDefaultConfiguration&&this.onLoadDefault(),this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(h["b"])(this.activeColumns,this.activeRows,"csvMode");Object(p["a"])(e,[...t,...this.footerRows],this.getFileName())}}),this.btns.push({name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(F["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(h["b"])(this.activeColumns,this.activeRows,e);Object(p["c"])(t,o,this.getFileName(),this.enabledPDFHorizontalPageBreak,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}}),this.btns.push({name:"Refresh/Rebuild",size:"large",slot:"end",color:"warning",visible:!0,onClick:async()=>{let e=!1;this.hasServerSideCaching&&(e=await Object(E["a"])("Do you want to rebuild report cache?",{header:"Rebuild Report"})),this.reloadReport(e)}}),this.btns.push({name:"Back",size:"large",slot:"end",color:"primary",visible:!Object(j["isEmpty"])(this.fields),onClick:()=>this.canShowReport=!1}),this.btns.push({name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>{this.onFinishBtnAction?this.onFinishBtnAction():this.$router.push({path:"/"})}})}});o("68a7");const P=g()(R,[["render",d],["__scopeId","data-v-5ed78ee7"]]);t["a"]=P},6547:function(e,t,o){},"68a7":function(e,t,o){"use strict";o("3811")},7322:function(e,t,o){"use strict";var n,r;o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return r})),function(e){e["Documents"]="DOCUMENTS",e["Data"]="DATA",e["Library"]="LIBRARY",e["Cache"]="CACHE",e["External"]="EXTERNAL",e["ExternalStorage"]="EXTERNAL_STORAGE"}(n||(n={})),function(e){e["UTF8"]="utf8",e["ASCII"]="ascii",e["UTF16"]="utf16"}(r||(r={}))},7920:function(e,t,o){"use strict";var n=o("7a23");function r(e,t,o,r,i,c){return Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=o("9441"),c=Object(n["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),a=o("6b0d"),s=o.n(a);const l=s()(c,[["render",r]]);t["a"]=l},"7bdc":function(e,t,o){"use strict";o.r(t);var n=o("7a23");function r(e,t,o,r,i,c){const a=Object(n["resolveComponent"])("report-template");return Object(n["openBlock"])(),Object(n["createBlock"])(a,{title:e.title,period:e.period,rows:e.rows,fields:e.fields,columns:e.columns,canExportCsv:!1,canExportPDf:!1,onReportConfiguration:e.onPeriod},null,8,["title","period","rows","fields","columns","onReportConfiguration"])}o("14d9");var i=o("4ba2"),c=o("d95e"),a=o("9ceb"),s=o("fb25"),l=o("2706"),u=o("7f12"),d=o("d867"),T=o("23e6"),m=o("9283"),p=o("fa73"),h=o("b5e4"),b=Object(n["defineComponent"])({components:{ReportTemplate:i["a"]},data:()=>({service:{},dde:{},title:"Duplicate Identifiers",fields:[],rows:[],columns:[[a["a"].thTxt("Identifier"),a["a"].thTxt("Count"),a["a"].thTxt("View"),a["a"].thTxt("Resolve")]]}),async created(){this.fields=this.getFormFields(),this.dde=new p["a"],await this.dde.loadDDEStatus()},methods:{async onPeriod({identifier:e}){const t=parseInt(e.value.toString());this.title=e.label+" Duplicates",this.service=new s["a"],this.service.setIdentifierType(t),this.rows=await this.getRows()},getFormFields(){return[{id:"identifier",helpText:"Select Identifier type",type:c["b"].TT_SELECT,validation:e=>l["a"].required(e),options:async()=>(await s["a"].getIdentifierTypes()).map(e=>({label:e.name,value:e.patient_identifier_type_id}))}]},toDate(e){return m["c"].toStandardHisDisplayFormat(e)},async drillDuplicates(e){const t=await d["modalController"].create({component:u["a"],cssClass:"custom-modal",componentProps:{title:"Persons using identifier "+e,columns:["Given name","Family name","Gender","Birth date","Action"],onRows:async()=>{const t=await this.service.getPatientsByIdentifier(e);return t.map(e=>{try{const t=new T["a"](e);return[t.getGivenName(),t.getFamilyName(),t.getGender(),this.toDate(t.getBirthdate()),{type:"button",name:"View",action:()=>{d["modalController"].dismiss().then(()=>{this.$router.push("/patient/dashboard/"+t.getID())})}}]}catch(t){return Object(h["c"])("Unable to load patient details"),["N/A","N/A","N/A","N/A","N/A"]}})}}});t.present()},async getRows(){return(await this.service.getDuplicateIndentifiers()).map(e=>[a["a"].td(e.identifier),a["a"].td(e.count),a["a"].tdBtn("Select",()=>this.drillDuplicates(e.identifier)),a["a"].tdBtn("Resolve",()=>{this.$router.push("/npid/duplicates/"+e.identifier)},{event:{disabled:3!=this.service.getIdentifierType()}},"danger")])}}}),f=o("6b0d"),E=o.n(f);const O=E()(b,[["render",r]]);t["default"]=O},"7f12":function(e,t,o){"use strict";var n=o("7a23");const r={key:0},i={key:1};function c(e,t,o,c,a,s){const l=Object(n["resolveComponent"])("ion-title"),u=Object(n["resolveComponent"])("ion-toolbar"),d=Object(n["resolveComponent"])("ion-header"),T=Object(n["resolveComponent"])("his-basic-table"),m=Object(n["resolveComponent"])("text-skeloton"),p=Object(n["resolveComponent"])("ion-content"),h=Object(n["resolveComponent"])("ion-button"),b=Object(n["resolveComponent"])("ion-footer");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(d,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(l,null,{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.title),1)]),_:1})]),_:1})]),_:1}),Object(n["createVNode"])(p,null,{default:Object(n["withCtx"])(()=>[e.ready?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",r,[Object(n["createVNode"])(T,{columns:e.columns,rows:e.rows},null,8,["columns","rows"])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",i,[Object(n["createVNode"])(m)]))]),_:1}),Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(u,null,{default:Object(n["withCtx"])(()=>[Object(n["createVNode"])(h,{color:"danger",onClick:e.closeModal,slot:"end"},{default:Object(n["withCtx"])(()=>[Object(n["createTextVNode"])(" Close ")]),_:1},8,["onClick"])]),_:1})]),_:1})],64)}var a=o("a3a5"),s=o("d867"),l=o("ded6"),u=Object(n["defineComponent"])({components:{HisBasicTable:a["a"],IonHeader:s["IonHeader"],IonToolbar:s["IonToolbar"],IonContent:s["IonContent"],IonFooter:s["IonFooter"],IonButton:s["IonButton"],TextSkeloton:l["a"]},props:{title:{type:String,required:!0},columns:{type:Object,required:!0},onRows:{type:Function,required:!0}},data:()=>({rows:[],ready:!1}),watch:{onRows:{async handler(e){e&&(this.rows=await e(),this.ready=!0)},immediate:!0,deep:!0}},methods:{async closeModal(){await s["modalController"].dismiss({})}}}),d=o("6b0d"),T=o.n(d);const m=T()(u,[["render",c]]);t["a"]=m},ba82:function(e,t,o){"use strict";o.d(t,"b",(function(){return N})),o.d(t,"a",(function(){return y})),o.d(t,"c",(function(){return S}));o("13d5"),o("5b81"),o("88a7"),o("271a"),o("5494");var n=o("8baf"),r=o("0da4"),i=o.n(r),c=o("1547"),a=o("7322");const s=Object(c["d"])("Filesystem",{web:()=>o.e("chunk-2d0a4885").then(o.bind(null,"079a")).then(e=>new e.FilesystemWeb)});var l=o("2ed9"),u=o("b5e4");const d=Object(c["d"])("BlobWriter"),T=window.CapacitorWebFetch||window.fetch;function m(e){return window.btoa(Array.from(new Uint8Array(e)).map((function(e){return String.fromCharCode(e)})).join(""))}function p({path:e,directory:t,blob:o,recursive:n}){return s.writeFile({directory:t,path:e,recursive:n,data:""}).then((function(){return new Promise((function(n,r){function i(e){r(e.target.error)}const c=window.indexedDB.open("Disc");c.onerror=i,c.onsuccess=function(){const r=c.result,a=r.transaction("FileStorage","readwrite");a.onerror=i;const s=a.objectStore("FileStorage"),l=`/${t}/${e.replace(/^\//,"")}`,u=s.get(l);u.onsuccess=function(){u.result.size=o.size,u.result.content=o;const e=s.put(u.result);e.onsuccess=function(){n(void 0)}}}}))}))}function h({path:e,directory:t,blob:o,recursive:n}){return s.writeFile({directory:t,path:e,recursive:n,data:""}).then((function n(){if(0===o.size)return Promise.resolve();const r=393216,i=o.slice(0,r);return o=o.slice(r),new Response(i).arrayBuffer().then((function(o){return s.appendFile({directory:t,path:e,data:m(o)})})).then(n)}))}function b(e){const{path:t,directory:o,blob:n,fast_mode:r=!1,recursive:i,on_fallback:a}=e;return n&&Number.isSafeInteger(n.size)&&"string"===typeof n.type?"web"===c["a"].getPlatform()?r?p(e):h(e):Promise.all([d.get_config(),s.getUri({path:t,directory:o})]).then((function([e,t]){const o=t.uri.replace("file://","");return T(e.base_url+o+(i?"?recursive=true":""),{headers:{authorization:e.auth_token},method:"put",body:n}).then((function(e){if(204!==e.status)throw new Error("Bad HTTP status: "+e.status);return t.uri}))})).catch((function(t){return void 0!==a&&a(t),h(e)})):Promise.reject(new Error("Not a Blob."))}var f=Object.freeze(b),E=o("ec2d"),O=function(){var e=function(t,o){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])},e(t,o)};return function(t,o){if("function"!==typeof o&&null!==o)throw new TypeError("Class extends value "+String(o)+" is not a constructor or null");function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return O(t,e),t.prototype.fromURL=function(e,t){return Object(E["b"])(this,"fromURL",{otherPromise:!0},arguments)},t.prototype.fromData=function(e,t){return Object(E["b"])(this,"fromData",{otherPromise:!0},arguments)},t.pluginName="PDFGenerator",t.plugin="cordova-pdf-generator",t.pluginRef="cordova.plugins.pdf",t.repo="https://github.com/cesarvr/pdf-generator",t.platforms=["Android","iOS"],t}(E["a"]),C=new _,I=o("1c74");function j(e){return e.reduce((e,t)=>e+t.map(e=>`"${e}"`).join(",")+"\n","")}function v(e,t,o){let n=null;const r="HIS-Core/"+e.replaceAll("/","_");Object(u["d"])(`Exporting file to "Documents/${r}"...`),n="blob"===o?f({path:r,blob:t,directory:a["a"].Documents,recursive:!0}):s.writeFile({path:r,data:t,directory:a["a"].Documents,encoding:a["b"].UTF8,recursive:!0}),null!=n&&n.then(()=>Object(u["d"])(`File exported to "Documents/${r}"!`,3e3)).catch(e=>Object(u["c"])(""+e))}function N(e){const{activePlatformProfile:t}=Object(l["e"])();if(t.value.fileExport===l["a"].FILE_SYSTEM)C.fromData(e,{documentSize:"a4",type:"share"}).catch(e=>Object(u["c"])(""+e));else if(t.value.fileExport===l["a"].WEB){const t=open("","","width:1024px, height:768px");t&&(null===t||void 0===t||t.document.write(e),setTimeout(()=>{t.print(),t.close()},3500))}else Object(u["e"])("Platform not supported")}function y(e,t,o="document"){t=g(t);const n=j(e.concat(t)),{activePlatformProfile:r}=Object(l["e"])(),i=o+".csv",c=I["e"].isPocSite();if(c&&r.value.fileExport!==l["a"].WEB)r.value.fileExport===l["a"].FILE_SYSTEM?v(i,n,"text"):Object(u["e"])("Platform not supported");else{const e=new Blob([n],{type:"text/csv;charset=utf-8;"}),t=document.createElement("a");t.setAttribute("id","csv"),t.href=window.URL.createObjectURL(e),t.setAttribute("download",o+".csv"),document.body.appendChild(t),t.click(),t.remove()}}function S(e,t,o="document",r=!1,c={}){t=g(t);const a=new n["default"]({...c}),s=a.splitTextToSize(o,180),d=s.length<=1?20:10*s.length;a.text(s,14,10);const T={startY:d,head:[e[e.length-1]],body:t};r&&(T.tableWidth="wrap",T.horizontalPageBreak=!0,T.horizontalPageBreakRepeat=0),i()(a,T);const{activePlatformProfile:m}=Object(l["e"])(),p=o+".pdf";m.value.fileExport===l["a"].WEB?a.save(p):m.value.fileExport===l["a"].FILE_SYSTEM?v(p,a.output(),"blob"):Object(u["c"])("Platform not supported")}function g(e){const t=e.map(e=>e.map(e=>"string"===typeof e?e.replace(/&lt;/g,"<"):e));return t}},d95e:function(e,t,o){"use strict";var n;o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return r})),function(e){e["TT_ASYNC_MULTI_SELECT"]="AsyncMultiSelect",e["TT_LINKAGE_CODE"]="LinkageCodeInput",e["TT_MULTI_SELECT_GRID"]="HisMultiSelectGrid",e["TT_AGE_INPUT"]="HisAgeInput",e["TT_GROUP_SELECTOR"]="HisGroupSelector",e["TT_DATA_TABLE"]="HisDataTable",e["TT_GRID_SELECTOR"]="HisGridSelector",e["TT_NOTE"]="HisNote",e["TT_BARCODE"]="HisBarcodeInput",e["TT_MONTHLY_DAYS"]="HisMonthlyDays",e["TT_TEXT"]="HisTextInput",e["TT_NUMBER"]="HisNumberInput",e["TT_DATETIME"]="datetime",e["TT_SELECT"]="HisSelect",e["TT_MULTIPLE_SELECT"]="HisMultipleSelect",e["TT_ART_REGIMEN_SELECTION"]="HisArtRegimenSelection",e["TT_NEXT_VISIT_INTERVAL_SELECTION"]="HisNextVisitInterval",e["TT_TABLE_VIEWER"]="HisTableViewer",e["TT_DOSAGE_INPUT"]="HisDosageInput",e["TT_YES_NO"]="YesNoSelect",e["TT_MULTIPLE_YES_NO"]="MultiYesNoSelect",e["TT_SUMMARY"]="HisSummary",e["TT_WEIGHT_CHART"]="HisWeightChart",e["TT_VITALS_ENTRY"]="HisVitalsEntry",e["TT_ADHERENCE_INPUT"]="HisAdherenceInput",e["TT_ART_STAGING_SUMMARY"]="ArtStagingSummary",e["TT_LAB_ORDERS"]="HisLabOrders",e["TT_APPOINTMENTS_ENTRY"]="HisAppointments",e["TT_DISPENSATION_INPUT"]="DrugDispensationSelection",e["TT_PROGRAM_SELECTION"]="ProgramSelection",e["TT_DATE_PICKER"]="HisDatePicker",e["TT_PERSON_RESULT_VIEW"]="PersonSearchView",e["TT_RELATION_SELECTION"]="RelationsSelection",e["TT_FILING_NUMBER_VIEW"]="FilingNumberView",e["TT_CARD_SELECTOR"]="HisCardSelector",e["TT_PERSON_MATCH_VIEW"]="PersonMatchView",e["TT_FULL_DATE"]="HisDateInput",e["TT_BATCH_ENTRY"]="HisBatchEntry",e["TT_BATCH_VERIFICATION"]="HisBatchVerification",e["TT_BATCH_MOVEMENT"]="HisBatchMovement",e["TT_COMPLAINTS_PICKER"]="HisComplaintsPicker",e["TT_RADIOLOGY_PICKER"]="HisRadiologyPicker",e["TT_IP_ADDRESS"]="HisIPAddress",e["TT_TEXT_BANNER"]="HisTextBanner",e["TT_DRUG_DISPENSER"]="GeneralDrugDispenser",e["TT_CLINIC_HOLIDAY_PICKER"]="HisClinicHolidayPicker",e["TT_ANC_PREGNANCY_INPUT_CONFIG"]="AncPregnancyInfoConfig",e["TT_ANC_PREGNANCY_DETAILS_INPUT"]="AncPregnancyDetailsInput",e["TT_ANC_LMP_DATE_INPUT"]="AncLmpDateInput",e["TT_ANC_DRUGSET_INPUT"]="AncDrugSetInput",e["TT_DRUG_TRANSFER_IN"]="DrugTransferInput",e["TT_PRESCRIPTION_INPUT"]="HisPrescriptionInput",e["TT_INFINITE_SCROLL_MULTIPLE_SELECT"]="HisInfiniteScrollMultipleSelect"}(n||(n={}));const r=[n.TT_ASYNC_MULTI_SELECT,n.TT_LINKAGE_CODE,n.TT_MULTI_SELECT_GRID,n.TT_AGE_INPUT,n.TT_BARCODE,n.TT_NOTE,n.TT_SELECT,n.TT_CARD_SELECTOR,n.TT_MULTIPLE_SELECT,n.TT_TEXT,n.TT_NUMBER,n.TT_MONTHLY_DAYS,n.TT_ART_REGIMEN_SELECTION,n.TT_NEXT_VISIT_INTERVAL_SELECTION,n.TT_TABLE_VIEWER,n.TT_DOSAGE_INPUT,n.TT_YES_NO,n.TT_MULTIPLE_YES_NO,n.TT_WEIGHT_CHART,n.TT_VITALS_ENTRY,n.TT_APPOINTMENTS_ENTRY,n.TT_COMPLAINTS_PICKER,n.TT_CLINIC_HOLIDAY_PICKER,n.TT_SUMMARY,n.TT_ART_STAGING_SUMMARY,n.TT_ADHERENCE_INPUT,n.TT_LAB_ORDERS,n.TT_PERSON_RESULT_VIEW,n.TT_PROGRAM_SELECTION,n.TT_DATE_PICKER,n.TT_RELATION_SELECTION,n.TT_FILING_NUMBER_VIEW,n.TT_PERSON_MATCH_VIEW,n.TT_FULL_DATE,n.TT_BATCH_ENTRY,n.TT_BATCH_VERIFICATION,n.TT_BATCH_MOVEMENT,n.TT_IP_ADDRESS,n.TT_TEXT_BANNER,n.TT_DISPENSATION_INPUT,n.TT_DATA_TABLE,n.TT_GROUP_SELECTOR,n.TT_ANC_PREGNANCY_INPUT_CONFIG,n.TT_ANC_PREGNANCY_DETAILS_INPUT,n.TT_ANC_LMP_DATE_INPUT,n.TT_DRUG_TRANSFER_IN,n.TT_GRID_SELECTOR,n.TT_ANC_DRUGSET_INPUT,n.TT_RADIOLOGY_PICKER,n.TT_PRESCRIPTION_INPUT,n.TT_INFINITE_SCROLL_MULTIPLE_SELECT,n.TT_DRUG_DISPENSER]},f159:function(e,t,o){var n={"./AncDrugSetInput.vue":["c99f","TouchFormElement0"],"./AncLmpDateInput.vue":["101a","TouchFormElement1"],"./AncPregnancyDetailsInput.vue":["b043","TouchFormElement2"],"./AncPregnancyInfoConfig.vue":["262e","TouchFormElement3"],"./ArtStagingSummary.vue":["43db","TouchFormElement4"],"./AsyncMultiSelect.vue":["5de2","chunk-03993608","TouchFormElement5"],"./BaseTextInput.vue":["36ad","TouchFormElement6"],"./DrugDispensationSelection.vue":["05d5","TouchFormElement7"],"./DrugTransferInput.vue":["de42","chunk-337918c0","TouchFormElement8"],"./FieldMixin.vue":["51c8","TouchFormElement9"],"./FilingNumberView.vue":["c650","TouchFormElement10"],"./GeneralDrugDispenser.vue":["7737","TouchFormElement11"],"./HisAdherenceInput.vue":["f2c3","chunk-337918c0","TouchFormElement12"],"./HisAgeInput.vue":["c05f","TouchFormElement13"],"./HisAppointments.vue":["b2eb","chunk-228c9c72","TouchFormElement14"],"./HisArtRegimenSelection.vue":["47b9","TouchFormElement15"],"./HisBarcodeInput.vue":["dd65","TouchFormElement16"],"./HisBatchEntry.vue":["f2ab","chunk-182277b5","chunk-337918c0","TouchFormElement17"],"./HisBatchMovement.vue":["5148","chunk-182277b5","chunk-337918c0","TouchFormElement18"],"./HisBatchVerification.vue":["7b0f","chunk-182277b5","chunk-337918c0","TouchFormElement19"],"./HisCardSelector.vue":["0734","TouchFormElement20"],"./HisClinicHolidayPicker.vue":["4030","chunk-228c9c72","TouchFormElement21"],"./HisComplaintsPicker.vue":["82d1","TouchFormElement22"],"./HisDataTable.vue":["a6ba","TouchFormElement23"],"./HisDateInput.vue":["374c","TouchFormElement24"],"./HisDatePicker.vue":["9b30","chunk-228c9c72","TouchFormElement25"],"./HisDosageInput.vue":["b34c","chunk-337918c0","TouchFormElement26"],"./HisGridSelector.vue":["112a","TouchFormElement27"],"./HisGroupSelector.vue":["81cf","TouchFormElement28"],"./HisIPAddress.vue":["2a82","TouchFormElement29"],"./HisInfiniteScrollMultipleSelect.vue":["52a3","TouchFormElement30"],"./HisLabOrders.vue":["e614","chunk-03993608","TouchFormElement31"],"./HisMonthlyDays.vue":["69cf","TouchFormElement32"],"./HisMultiSelectGrid.vue":["0fa3","TouchFormElement33"],"./HisMultipleSelect.vue":["2fd5","chunk-03993608","TouchFormElement34"],"./HisNextVisitInterval.vue":["3126","TouchFormElement35"],"./HisNote.vue":["c927","TouchFormElement36"],"./HisNumberInput.vue":["5e75","TouchFormElement37"],"./HisPrescriptionInput.vue":["87e5","chunk-337918c0","TouchFormElement38"],"./HisRadiologyPicker.vue":["adc7","TouchFormElement39"],"./HisSelect.vue":["d11f","TouchFormElement40"],"./HisSummary.vue":["e0bd","TouchFormElement41"],"./HisTableViewer.vue":["8904","TouchFormElement42"],"./HisTextBanner.vue":["952c","TouchFormElement43"],"./HisTextInput.vue":["6ef9","TouchFormElement44"],"./HisVitalsEntry.vue":["e333","TouchFormElement45"],"./HisWeightChart.vue":["26a1","TouchFormElement46"],"./LinkageCodeInput.vue":["ac86","TouchFormElement47"],"./MultiYesNoSelect.vue":["5fd1","TouchFormElement48"],"./PersonMatchView.vue":["6591","TouchFormElement49"],"./PersonSearchView.vue":["28b2","TouchFormElement50"],"./ProgramSelection.vue":["e3b4","TouchFormElement51"],"./RelationsSelection.vue":["0e57","TouchFormElement52"],"./SelectMixin.vue":["82a9","TouchFormElement53"],"./YesNoSelect.vue":["71f2","TouchFormElement54"]};function r(e){if(!o.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],r=t[0];return Promise.all(t.slice(1).map(o.e)).then((function(){return o(r)}))}r.keys=function(){return Object.keys(n)},r.id="f159",e.exports=r},fb25:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o("ade3"),r=o("1c74");class i extends r["e"]{constructor(){super(),Object(n["a"])(this,"identifierType",void 0),this.identifierType=-1}static getIdentifierTypes(){return super.getJson("types/patient_identifiers")}static async arvNumberExists(e){const t=await super.getJson(`programs/${super.getProgramID()}/lookup_arv_number/${e}`);return t.exists}getIdentifierType(){return this.identifierType}setIdentifierType(e){this.identifierType=e}getDuplicateIndentifiers(){return r["e"].getJson("search/identifiers/duplicates",{type_id:this.identifierType})}getPatientsByIdentifier(e){return r["e"].getJson("search/patients/by_identifier",{type_id:this.identifierType,identifier:e})}getMultipleIdentifiers(){return r["e"].getJson("search/identifiers/multiples",{type_id:this.identifierType})}voidMultipleIdentifiers(e,t,o){const n={identifiers:e,reason:t,identifier_type:o};return r["e"].void("void_multiple_identifiers",n)}}}}]);
//# sourceMappingURL=chunk-53509df8.890f8324.js.map