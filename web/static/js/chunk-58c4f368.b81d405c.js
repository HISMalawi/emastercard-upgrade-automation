(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58c4f368"],{"1ad6":function(e,t,o){"use strict";o("a002")},"44e3":function(e,t,o){"use strict";o("14d9");var r=o("1c74"),a=o("7a23"),n=o("b446"),i=o("23e6"),s=o("9283"),c=o("d867"),l=o("d6aa"),d=o("5969"),p=o("d95e"),u=o("2706"),h=o("9ceb"),m=o("2ef0"),b=o("8e8b"),g=o("3e53"),f=o("0011"),O=Object(a["defineComponent"])({data:()=>({app:g["a"].getActiveApp(),fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",isMilitarySite:!1,drillDownCache:{}}),methods:{formatGender(e){return Object(f["b"])(e)},toDate(e){return s["c"].toStandardHisDisplayFormat(e)},sortByArvNumber(e,t="arv_number"){try{return e.sort((e,o)=>this.getArvInt(e[t])>this.getArvInt(o[t])?1:-1)}catch(o){return console.error(o),e}},getArvInt(e){if("string"===typeof e){const t=e.split("-")[2],o=parseInt(t);return"number"===typeof o?o:0}return 0},tdARV(e,t={}){return h["a"].td(e,{sortValue:this.getArvInt(e),...t})},confirmPatient(e){return this.$router.push("/patients/confirm?person_id="+e)},async drilldownAsyncRows(e,t,o,r=!0){const a=await c["modalController"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,asyncRows:o,canExport:r,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["modalController"].dismiss()}});a.present()},async drilldownData(e,t,o,r){const a=await c["modalController"].create({component:l["a"],cssClass:"large-modal",componentProps:{title:e,columns:t,rows:o,rowParser:r,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>c["modalController"].dismiss()}});a.present()},getDefaultDrillDownTable(){const e=[[h["a"].thTxt("ARV number"),h["a"].thTxt("Gender"),h["a"].thTxt("Birth Date"),h["a"].thTxt("Actions")]],t=async e=>{let t=0;const o=e.map(async e=>{let o=null,r=null;if(Object(m["isArray"])(e)){const[t,o]=e;if(r=t,o in this.drillDownCache)return[r,...this.drillDownCache[o].slice(1)]}else if(o=e,o in this.drillDownCache)return this.drillDownCache[o];const a=await i["a"].findByID(o),n=new i["a"](a),s=[];return r&&(t=1,s.push(r)),s.push(this.tdARV(n.getArvNumber())),s.push(h["a"].td(this.formatGender(n.getGender()))),s.push(h["a"].tdDate(n.getBirthdate().toString())),s.push(h["a"].tdBtn("Show",async()=>{await c["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+o})})),this.drillDownCache[o]=s,s}),r=await Promise.all(o);return r.sort((e,o)=>e[t].sortValue>o[t].sortValue?1:-1)};return{rowParser:t,columns:e}},runTableDrill(e,t="Drilldown patients"){const{columns:o,rowParser:r}=this.getDefaultDrillDownTable();this.drilldownData(t,o,e,r)},drill(e,t="Drill table"){return e&&e.length>0?h["a"].tdLink(e.length,()=>this.runTableDrill(e,t)):h["a"].td(0)},getQuaterOptions(){const e=d["a"].getReportQuarters();return e.map(e=>({label:e.name,value:e.start,other:e}))},getDateDurationFields(e=!1,t=!1,o=5,a=r["e"].getSessionDate()){const i="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:p["b"].TT_SELECT,condition:()=>e,validation:e=>u["a"].required(e),options:()=>{const e=d["a"].getReportQuarters(o);let r=e.map(e=>({label:e.name,value:e.start,other:e}));return t&&(r=[{label:"Set custom period",value:"custom_period",other:{}},...r]),r}},...Object(n["b"])({id:"start_date",helpText:"Start",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,minDate:()=>i,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),...Object(n["b"])({id:"end_date",helpText:"End",required:!0,condition:t=>t.quarter&&"custom_period"===t.quarter.value||!e,unload:(e,t,o,r)=>{"next"===t&&(this.endDate=r.end_date)},minDate:(e,t)=>t.start_date,maxDate:()=>a,estimation:{allowUnknown:!1},computeValue:e=>e}),{id:"occupation",helpText:"Report Group",type:p["b"].TT_SELECT,init:async()=>(this.isMilitarySite=await b["a"].get("IS_MILITARY_SITE"),!0),computedValue:e=>e.value,condition:()=>{var e;return"ART"===(null===(e=this.app)||void 0===e?void 0:e.applicationName)&&this.isMilitarySite},validation:e=>u["a"].required(e),options:()=>[{label:"All",value:"All"},{label:"Military",value:"Military"},{label:"Civilian",value:"Civilian"}]}]}}});const D=O;t["a"]=D},"552a":function(e,t,o){"use strict";var r=o("7a23");const a=e=>(Object(r["pushScopeId"])("data-v-b87105ea"),e=e(),Object(r["popScopeId"])(),e),n={class:"header-text-list"},i={key:0},s=a(()=>Object(r["createElementVNode"])("template",null,null,-1)),c={class:"report-content"};function l(e,t,o,a,l,d){const p=Object(r["resolveComponent"])("his-standard-form"),u=Object(r["resolveComponent"])("ion-img"),h=Object(r["resolveComponent"])("ion-thumbnail"),m=Object(r["resolveComponent"])("ion-label"),b=Object(r["resolveComponent"])("report-filter"),g=Object(r["resolveComponent"])("ion-toolbar"),f=Object(r["resolveComponent"])("ion-header"),O=Object(r["resolveComponent"])("report-table"),D=Object(r["resolveComponent"])("ion-content"),w=Object(r["resolveComponent"])("pagination"),y=Object(r["resolveComponent"])("ion-chip"),j=Object(r["resolveComponent"])("ion-footer"),v=Object(r["resolveComponent"])("his-footer"),C=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],null,[Object(r["withDirectives"])(Object(r["createVNode"])(p,{onOnFinish:e.onFinish,skipSummary:!0,fields:e.fields},null,8,["onOnFinish","fields"]),[[r["vShow"],e.showForm]]),e.showForm?Object(r["createCommentVNode"])("",!0):(Object(r["openBlock"])(),Object(r["createBlock"])(C,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(f,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(g,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(h,{slot:"start"},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(u,{src:e.logo},null,8,["src"])]),_:1}),Object(r["createVNode"])(m,null,{default:Object(r["withCtx"])(()=>{var o;return[Object(r["createElementVNode"])("ul",n,[Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Title "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.title),1)]),Object(r["createElementVNode"])("li",null,[Object(r["createTextVNode"])("Period "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.period),1)]),e.customInfo?(Object(r["openBlock"])(),Object(r["createElementBlock"])("li",i,[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.customInfo.label)+" ",1),Object(r["createElementVNode"])("b",null,["function"===typeof(null===(o=e.customInfo)||void 0===o||null===(o=o.other)||void 0===o?void 0:o.click)?(Object(r["openBlock"])(),Object(r["createElementBlock"])("a",{key:0,href:"#",onClick:t[0]||(t[0]=Object(r["withModifiers"])(t=>e.customInfo.other.click(),["prevent"]))},Object(r["toDisplayString"])(e.customInfo.value),1)):(Object(r["openBlock"])(),Object(r["createElementBlock"])(r["Fragment"],{key:1},[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.customInfo.value),1)],64))])])):Object(r["createCommentVNode"])("",!0),s])]}),_:1}),Object(r["createVNode"])(b,{slot:"end",showPerPageFilter:e.showFilters||e.paginated,disableSearchFilter:e.isTableLoading,disablePerPageFilter:e.isTableLoading,totalRowCount:e.tableRows.length,customFilter:e.customFilter,onOnItemsPerPage:t[1]||(t[1]=t=>e.itemsPerPage=t),onOnItemsVLtype:t[2]||(t[2]=t=>e.itemsVLtype=t),onOnSearchFilter:t[3]||(t[3]=t=>e.searchFilter=t)},null,8,["showPerPageFilter","disableSearchFilter","disablePerPageFilter","totalRowCount","customFilter"])]),_:1})]),_:1}),Object(r["createVNode"])(D,null,{default:Object(r["withCtx"])(()=>[Object(r["createElementVNode"])("div",c,[Object(r["createVNode"])(O,{rows:e.rows,paginated:e.paginated,asyncRows:e.asyncRows,rowParser:e.rowParser,config:{...e.config,tableCssTheme:e.tableCssTheme},columns:e.columns,showFilters:e.showFilters,newPage:e.currentPage,searchFilter:e.searchFilter,rowsPerPage:e.itemsPerPage,onOnIsLoading:t[4]||(t[4]=t=>e.isTableLoading=t),onOnTableRows:t[5]||(t[5]=t=>e.tableRows=t),onOnPagination:t[6]||(t[6]=t=>e.totalPages=t.length),onOnActiveColumns:t[7]||(t[7]=t=>e.activeColumns=t),onOnActiveRows:t[8]||(t[8]=t=>e.activeRows=t)},null,8,["rows","paginated","asyncRows","rowParser","config","columns","showFilters","newPage","searchFilter","rowsPerPage"])])]),_:1}),Object(r["createVNode"])(j,null,{default:Object(r["withCtx"])(()=>[!e.searchFilter&&e.paginated||!e.searchFilter&&e.totalPages>0&&e.paginated?(Object(r["openBlock"])(),Object(r["createBlock"])(g,{key:0},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(w,{perPage:e.itemsPerPage,maxVisibleButtons:10,totalPages:e.totalPages,onOnChangePage:t[9]||(t[9]=t=>e.currentPage=t)},null,8,["perPage","totalPages"])]),_:1})):Object(r["createCommentVNode"])("",!0),e.showReportStamp?(Object(r["openBlock"])(),Object(r["createBlock"])(g,{key:1},{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(y,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("Date Created: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.date),1)]),_:1}),Object(r["createVNode"])(y,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("His-Core Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.coreVersion),1)]),_:1}),Object(r["createVNode"])(y,{color:"primary"},{default:Object(r["withCtx"])(()=>[Object(r["createTextVNode"])("API Version: "),Object(r["createElementVNode"])("b",null,Object(r["toDisplayString"])(e.apiVersion),1)]),_:1})]),_:1})):Object(r["createCommentVNode"])("",!0)]),_:1}),Object(r["createVNode"])(v,{color:e.footerColor,btns:e.btns},null,8,["color","btns"])]),_:1}))],64)}o("14d9");var d=o("0f25"),p=o("80e3"),u=o("ba82"),h=o("9ceb"),m=o("7920"),b=o("d867"),g=o("1c74"),f=o("9283"),O=o("2f2a"),D=o("1799"),w=o("b5e4"),y=o("7f35"),j=o("0011"),v=Object(r["defineComponent"])({components:{HisStandardForm:m["a"],IonHeader:b["IonHeader"],ReportTable:p["a"],HisFooter:d["a"],IonPage:b["IonPage"],IonContent:b["IonContent"],IonToolbar:b["IonToolbar"],Pagination:D["a"],ReportFilter:O["a"],IonFooter:b["IonFooter"],IonChip:b["IonChip"],IonLabel:b["IonLabel"]},props:{title:{type:String,required:!0},customFilter:{type:Function},period:{type:String,default:""},encryptPDF:{type:Boolean,default:!1},config:{type:Object},fields:{type:Array,default:()=>[]},columns:{type:Array,required:!0},rows:{type:Array,required:!0},paginated:{type:Boolean,default:!1},customBtns:{type:Array,default:()=>[]},canExportPDf:{type:Boolean,default:!0},canExportCsv:{type:Boolean,default:!0},onReportConfiguration:{type:Function,required:!1},rowParser:{type:Function},showFilters:{type:Boolean,default:!1},showVLFilter:{type:Boolean,default:!1},rowsPerPage:{type:Number},asyncRows:{type:Function},footerColor:{type:String,default:"dark"},customFileName:{type:String,default:""},canExport:{type:Boolean,default:!0},showReportStamp:{type:Boolean,default:!0},customInfo:{type:Object},reportPrefix:{type:String,default:""}},data:()=>({formData:{},computeFormData:{},btns:[],isLoadingData:!1,showForm:!1,logo:"/assets/images/login-logos/Malawi-Coat_of_arms_of_arms.png",isTableLoading:!1,searchFilter:"",itemsPerPage:50,itemsVLtype:"",currentPage:0,tableRows:[],totalPages:0,activeColumns:[],activeRows:[],date:f["c"].toStandardHisDisplayFormat(g["e"].getSessionDate()),apiVersion:g["e"].getApiVersion(),coreVersion:g["e"].getCoreVersion(),siteUUID:g["e"].getSiteUUID(),tableCssTheme:"opd-report-theme"}),methods:{getFileName(){var e,t;return`${null!==(e=this.reportPrefix)&&void 0!==e?e:""} ${g["e"].getLocationName()} ${Object(j["g"])(this.title).replace(this.reportPrefix,"")} ${null!==(t=this.period)&&void 0!==t?t:this.date}`},pdfEncryptionData(){const e=g["e"].getUserName();return{encryption:{userPassword:e,ownerPassword:e,userPermissions:["print"]}}},async onFinish(e,t){this.formData=e,this.computeFormData=t,this.showForm=!1,await this.presentLoading();try{this.onReportConfiguration&&await this.onReportConfiguration(this.formData,this.computeFormData),b["loadingController"].dismiss()}catch(o){console.error(o),Object(w["c"])(""+o),b["loadingController"].dismiss()}},async reloadReport(){await this.onFinish(this.formData,this.computeFormData)},async presentLoading(){const e=await b["loadingController"].create({message:"Please wait...",backdropDismiss:!1});await e.present()}},created(){this.showForm=!!this.fields.length,this.btns=this.customBtns,this.btns.push({name:"CSV",size:"large",slot:"start",color:"primary",visible:this.canExportCsv,onClick:async()=>{const{columns:e,rows:t}=Object(h["b"])(this.columns,this.rows,"csvMode");Object(u["a"])(e,[...t,["Date Created: "+this.date],["Period: "+this.period],["HIS-Core Version: "+this.coreVersion],["API Version: "+this.apiVersion],["Site UUID: "+this.siteUUID]],this.getFileName())}},{name:"PDF",size:"large",slot:"start",color:"primary",visible:this.canExportPDf,onClick:async()=>{let e="pdfMode";if(this.encryptPDF){const t=await Object(y["a"])("Security warning","PDF may contain private data that will require a password to unlock","To access private data choose Secure PDF over Regular PDF",[{name:"Secure PDF",slot:"start",color:"success"},{name:"Regular PDF",slot:"start",color:"success"}],"his-danger-color");e="Secure PDF"===t?"pdfMode":"ignorePDFColumnexport"}const{columns:t,rows:o}=Object(h["b"])(this.activeColumns,this.activeRows,e);Object(u["c"])(t,o,this.getFileName(),!1,this.encryptPDF&&"ignorePDFColumnexport"!=e?this.pdfEncryptionData():{})}},{name:"Back",size:"large",slot:"end",color:"primary",visible:!0,onClick:()=>this.showForm=!0},{name:"Refresh",size:"large",slot:"end",color:"warning",visible:!0,onClick:()=>this.reloadReport()},{name:"Finish",size:"large",slot:"end",color:"success",visible:!0,onClick:()=>this.$router.push({path:"/"})})}}),C=(o("1ad6"),o("6b0d")),P=o.n(C);const F=P()(v,[["render",l],["__scopeId","data-v-b87105ea"]]);t["a"]=F},7920:function(e,t,o){"use strict";var r=o("7a23");function a(e,t,o,a,n,i){return Object(r["openBlock"])(),Object(r["createBlock"])(Object(r["resolveDynamicComponent"])(e.formType),{fields:e.fields,skipSummary:e.skipSummary,activeField:e.activeField,cancelDestinationPath:e.cancelDestinationPath,onOnFinish:e.onFinish,onFinish:e.onFinishAction,onOnIndex:e.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var n=o("9441"),i=Object(r["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:n["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(e,t){this.$emit("onFinish",e,t)},onIndex(e){this.$emit("onIndex",e)}}}),s=o("6b0d"),c=o.n(s);const l=c()(i,[["render",a]]);t["a"]=l},a002:function(e,t,o){},e4c1:function(e,t,o){"use strict";o.r(t);var r=o("7a23");function a(e,t,o,a,n,i){const s=Object(r["resolveComponent"])("report-template"),c=Object(r["resolveComponent"])("ion-page");return Object(r["openBlock"])(),Object(r["createBlock"])(c,null,{default:Object(r["withCtx"])(()=>[Object(r["createVNode"])(s,{title:e.title,rows:e.rows,fields:e.fields,columns:e.columns,period:e.period,reportPrefix:"Clinic",onReportConfiguration:e.init},null,8,["title","rows","fields","columns","period","onReportConfiguration"])]),_:1})}o("13d5"),o("14d9");var n=o("fcd5"),i=o("552a"),s=o("9ceb"),c=o("44e3"),l=o("2ef0"),d=o("d867"),p=Object(r["defineComponent"])({components:{ReportTemplate:i["a"],IonPage:d["IonPage"]},mixins:[c["a"]],data:()=>({title:"OPD diagnosis by address report",rows:[],reportService:{},columns:[[s["a"].thTxt("Address"),s["a"].thTxt("Diagnosis"),s["a"].thTxt("Count")]]}),created(){this.fields=this.getDateDurationFields()},methods:{async init(e,t){this.reportService=new n["d"],this.reportService.setStartDate(t.start_date),this.reportService.setEndDate(t.end_date),this.period=this.reportService.getDateIntervalPeriod(),this.rows=this.buildRows(await this.reportService.getDiagnosisByAddress())},totalDiagnosis(e){return Object.values(e).reduce((e,t)=>e+t,0)},buildRows(e){const t=[];if(Object(l["isEmpty"])(e))return t;for(const o in e)for(const r in e[o])t.push([s["a"].td(r),s["a"].td(o),s["a"].td(e[o][r])]);return t}}}),u=o("6b0d"),h=o.n(u);const m=h()(p,[["render",a]]);t["default"]=m},fcd5:function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"c",(function(){return l})),o.d(t,"b",(function(){return d})),o.d(t,"d",(function(){return p}));var r=o("ade3"),a=(o("14d9"),o("1c74")),n=o("9283"),i=o("b89f"),s=o("bef6");const c={one:"AL 1",two:"AL 2",three:"AL 3",four:"LA 4"},l=["Diabetes","Hypertension","Stroke","Suspected cancer","Confirmed cancer","Palliative cancer","Asthma","Depression","Acute psychosis","Chronic psychosis","Epilepsy"],d=["Organic mental disorder (Chronic)","Organic mental disorder (acute)","Alcohol use mental disorder","Drug use mental disorder","Schizophrenia","Acute and transient psychotic disorder","Schizo-affective disorder","Mood-affective disorder (MANIC)","Mood-affective disorder (BIPOLAR)","Mood-affective disorder (DEPRESSION)","Anxiety disorder","Stress reaction adjustment disorder","Dissociative conversion disorder","Somatoform disorder","Puerperal mental disorder","Personality/Behaviour disorder","Mental retardation","Psychological mental disorder","Hyperkinetic conduct disorder","Epilepsy"];class p extends a["e"]{constructor(){super(),Object(r["a"])(this,"programID",void 0),Object(r["a"])(this,"startDate",void 0),Object(r["a"])(this,"endDate",void 0),Object(r["a"])(this,"date",void 0),Object(r["a"])(this,"epiweek",void 0),this.endDate="",this.startDate="",this.epiweek="",this.date=a["e"].getSessionDate(),this.programID=a["e"].getProgramID()}getPatientsWithNIDs(){return this.getReport("with_nids")}getClinicRegistrations(){return this.getReport("registration")}getAttendance(){return this.getReport(`programs/${this.programID}/reports/attendance`)}getDrugs(){const e=`programs/${this.programID}/reports/drug`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosis(){const e=`programs/${this.programID}/reports/diagnosis`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}getDiagnosisByAddress(){return this.getReport("diagnosis_by_address")}getLaPrescriptions(){const e=`programs/${this.programID}/reports/la_prescriptions`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate})}getMalariaReport(){const e=`programs/${this.programID}/reports/malaria_report`;return a["e"].getJson(e,{start_date:this.startDate,end_date:this.endDate,date:this.date})}printLaReport(e){const t=new i["a"],o=`programs/${this.programID}/barcodes/la_report`,r={"date[start]":this.startDate,"date[end]":this.endDate};return Object.keys(c).forEach((t,o)=>{o++,r[o+"[prescription]"]=e[`total_la_${t}_prescribed_drugs`],r[o+"[dispensed]"]=e[`total_la_${t}_dispensed_drugs`]}),t.printLbl(`${o}?${s["a"].parameterizeObjToString(r)}`)}getDateIntervalPeriod(){return`${n["c"].toStandardHisDisplayFormat(this.startDate)} - ${n["c"].toStandardHisDisplayFormat(this.endDate)}`}setStartDate(e){this.startDate=e}setEndDate(e){this.endDate=e}setEpiWeek(e){this.epiweek=e}getReportPeriod(){return this.startDate&&this.endDate?`${n["c"].toStandardHisDisplayFormat(this.startDate)} - ${n["c"].toStandardHisDisplayFormat(this.endDate)}`:"-"}getReport(e,t={}){return a["e"].getJson(e,this.buildRequest(t))}buildRequest(e={}){const t={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(t["start_date"]=this.startDate,t["end_date"]=this.endDate),this.epiweek&&(t["epiweek"]=this.epiweek),{...t,...e}}static getReportQuarters(e=4){const t=[];let o=n["c"].getCurrentYear();for(let r=0;r<e;++r)t.push({name:"Q4 "+o,start:o+"-10-01",end:o+"-12-31"}),t.push({name:"Q3 "+o,start:o+"-07-01",end:o+"-09-30"}),t.push({name:"Q2 "+o,start:o+"-04-01",end:o+"-06-30"}),t.push({name:"Q1 "+o,start:o+"-01-01",end:o+"-03-31"}),--o;return t}}}}]);
//# sourceMappingURL=chunk-58c4f368.b81d405c.js.map