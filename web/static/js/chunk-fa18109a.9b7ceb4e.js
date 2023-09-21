(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fa18109a"],{"44e3":function(t,e,n){"use strict";n("14d9");var a=n("1c74"),r=n("7a23"),i=n("b446"),o=n("23e6"),s=n("9283"),l=n("d867"),c=n("d6aa"),d=n("5969"),h=n("d95e"),p=n("2706"),u=n("9ceb"),m=n("2ef0"),b=Object(r["defineComponent"])({data:()=>({fields:[],report:{},reportReady:!1,period:"",startDate:"",endDate:"",customFileName:"",drillDownCache:{}}),methods:{formatGender(t){const e=(""+t).toUpperCase();return"M"===e||"MALE"===e?"Male":"F"===e||"FEMALE"===e?"Female":/fbf|fnp|fp/i.test(t)?e:t},toDate(t){return s["c"].toStandardHisDisplayFormat(t)},sortByArvNumber(t,e="arv_number"){try{return t.sort((t,n)=>this.getArvInt(t[e])>this.getArvInt(n[e])?1:-1)}catch(n){return console.error(n),t}},getArvInt(t){if("string"===typeof t){const[e,n,a]=t.split("-"),r=parseInt(a);return"number"===typeof r?r:0}return 0},tdARV(t,e={}){return u["a"].td(t,{sortValue:this.getArvInt(t),...e})},confirmPatient(t){return this.$router.push("/patients/confirm?person_id="+t)},async drilldownAsyncRows(t,e,n,a=!0){const r=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:t,columns:e,asyncRows:n,canExport:a,showFilters:!0,rowsPerPage:50,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});r.present()},async drilldownData(t,e,n,a){const r=await l["modalController"].create({component:c["a"],cssClass:"large-modal",componentProps:{title:t,columns:e,rows:n,rowParser:a,rowsPerPage:50,showFilters:!0,paginated:!0,showReportStamp:!1,footerColor:"light",onFinish:()=>l["modalController"].dismiss()}});r.present()},getDefaultDrillDownTable(){const t=[[u["a"].thTxt("ARV number"),u["a"].thTxt("Gender"),u["a"].thTxt("Birth Date"),u["a"].thTxt("Actions")]],e=async t=>{let e=0;const n=t.map(async t=>{let n=null,a=null;if(Object(m["isArray"])(t)){const[e,n]=t;if(a=e,n in this.drillDownCache){const[t,...e]=this.drillDownCache[n];return[a,...e]}}else if(n=t,n in this.drillDownCache)return this.drillDownCache[n];const r=await o["a"].findByID(n),i=new o["a"](r),s=[];return a&&(e=1,s.push(a)),s.push(this.tdARV(i.getArvNumber())),s.push(u["a"].td(this.formatGender(i.getGender()))),s.push(u["a"].tdDate(i.getBirthdate().toString())),s.push(u["a"].tdBtn("Show",async()=>{await l["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+n})})),this.drillDownCache[n]=s,s}),a=await Promise.all(n);return a.sort((t,n)=>t[e].sortValue>n[e].sortValue?1:-1)};return{rowParser:e,columns:t}},runTableDrill(t,e="Drilldown patients"){const{columns:n,rowParser:a}=this.getDefaultDrillDownTable();this.drilldownData(e,n,t,a)},drill(t,e="Drill table"){return t&&t.length>0?u["a"].tdLink(t.length,()=>this.runTableDrill(t,e)):u["a"].td(0)},getQuaterOptions(){const t=d["a"].getReportQuarters();return t.map(t=>({label:t.name,value:t.start,other:t}))},getDateDurationFields(t=!1,e=!1,n=5,r=a["e"].getSessionDate()){const o="2000-01-01";return[{id:"quarter",helpText:"Select Quarter",type:h["b"].TT_SELECT,condition:()=>t,validation:t=>p["a"].required(t),options:()=>{const t=d["a"].getReportQuarters(n);let a=t.map(t=>({label:t.name,value:t.start,other:t}));return e&&(a=[{label:"Set custom period",value:"custom_period",other:{}},...a]),a}},...Object(i["b"])({id:"start_date",helpText:"Start",required:!0,condition:e=>e.quarter&&"custom_period"===e.quarter.value||!t,minDate:()=>o,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:t=>t}),...Object(i["b"])({id:"end_date",helpText:"End",required:!0,condition:e=>e.quarter&&"custom_period"===e.quarter.value||!t,unload:(t,e,n,a)=>{"next"===e&&(this.endDate=a.end_date)},minDate:(t,e)=>e.start_date,maxDate:()=>r,estimation:{allowUnknown:!1},computeValue:t=>t})]}}});const w=b;e["a"]=w},7920:function(t,e,n){"use strict";var a=n("7a23");function r(t,e,n,r,i,o){return Object(a["openBlock"])(),Object(a["createBlock"])(Object(a["resolveDynamicComponent"])(t.formType),{fields:t.fields,skipSummary:t.skipSummary,activeField:t.activeField,cancelDestinationPath:t.cancelDestinationPath,onOnFinish:t.onFinish,onFinish:t.onFinishAction,onOnIndex:t.onIndex},null,40,["fields","skipSummary","activeField","cancelDestinationPath","onOnFinish","onFinish","onOnIndex"])}var i=n("9441"),o=Object(a["defineComponent"])({name:"HisStandardForm",components:{TouchScreenForm:i["a"]},emits:["onFinish","onIndex"],data:()=>({formType:"touch-screen-form"}),props:{onFinishAction:{type:Function},skipSummary:{type:Boolean,default:!1},activeField:{type:String},fields:{type:Object,required:!0},cancelDestinationPath:{type:String,required:!1}},methods:{onFinish(t,e){this.$emit("onFinish",t,e)},onIndex(t){this.$emit("onIndex",t)}}}),s=n("6b0d"),l=n.n(s);const c=l()(o,[["render",r]]);e["a"]=c},cff2:function(t,e,n){"use strict";n("ea6d")},ea6d:function(t,e,n){},fe31:function(t,e,n){"use strict";n.r(e);var a=n("7a23");const r=t=>(Object(a["pushScopeId"])("data-v-5a438c42"),t=t(),Object(a["popScopeId"])(),t),i=r(()=>Object(a["createElementVNode"])("br",null,null,-1)),o=r(()=>Object(a["createElementVNode"])("br",null,null,-1)),s={class:"view-port-content"};function l(t,e,n,r,l,c){const d=Object(a["resolveComponent"])("his-standard-form"),h=Object(a["resolveComponent"])("ion-title"),p=Object(a["resolveComponent"])("ion-toolbar"),u=Object(a["resolveComponent"])("ion-header"),m=Object(a["resolveComponent"])("ApexChart"),b=Object(a["resolveComponent"])("view-port"),w=Object(a["resolveComponent"])("ion-content"),O=Object(a["resolveComponent"])("ion-button"),f=Object(a["resolveComponent"])("ion-footer"),j=Object(a["resolveComponent"])("ion-page");return Object(a["openBlock"])(),Object(a["createElementBlock"])(a["Fragment"],null,[t.canShowReport?Object(a["createCommentVNode"])("",!0):(Object(a["openBlock"])(),Object(a["createBlock"])(d,{key:0,onOnFinish:t.onPeriod,skipSummary:!0,fields:t.fields},null,8,["onOnFinish","fields"])),t.canShowReport?(Object(a["openBlock"])(),Object(a["createBlock"])(j,{key:1},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(u,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(h,null,{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Total Attendance: "),Object(a["createElementVNode"])("a",{href:"#",onClick:e[0]||(e[0]=Object(a["withModifiers"])(()=>t.drillPatients("Total attendance",t.totalAttendance),["prevent"]))},Object(a["toDisplayString"])(t.totalAttendance.length),1),i,Object(a["createTextVNode"])(" Patient visit: "),Object(a["createElementVNode"])("a",{href:"#",onClick:e[1]||(e[1]=Object(a["withModifiers"])(()=>t.drillPatients("Total patient visits",t.totalPatientVisits),["prevent"]))},Object(a["toDisplayString"])(t.totalPatientVisits.length),1),o,Object(a["createTextVNode"])(" Guardian visit: "),Object(a["createElementVNode"])("a",{href:"#",onClick:e[2]||(e[2]=Object(a["withModifiers"])(()=>t.drillPatients("Guardian visits",t.totalGuardianVisits),["prevent"]))},Object(a["toDisplayString"])(t.totalGuardianVisits.length),1)]),_:1})]),_:1})]),_:1}),Object(a["createVNode"])(w,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(b,null,{default:Object(a["withCtx"])(()=>[Object(a["createElementVNode"])("div",s,[Object(a["createVNode"])(m,{width:t.width,height:t.height,type:t.chartType,options:t.chartOptions,series:t.series,onMarkerClick:t.onPointSelection},null,8,["width","height","type","options","series","onMarkerClick"])])]),_:1})]),_:1}),Object(a["createVNode"])(f,null,{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(p,{color:"dark"},{default:Object(a["withCtx"])(()=>[Object(a["createVNode"])(O,{onClick:e[3]||(e[3]=e=>t.canShowReport=!1),slot:"start",size:"large"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" New Date ")]),_:1}),Object(a["createVNode"])(O,{slot:"end",size:"large","router-link":"/",color:"success"},{default:Object(a["withCtx"])(()=>[Object(a["createTextVNode"])(" Finish ")]),_:1})]),_:1})]),_:1})]),_:1})):Object(a["createCommentVNode"])("",!0)],64)}n("13d5"),n("14d9");var c=n("d867"),d=n("0a79"),h=n("ad8d"),p=n("7920"),u=n("44e3"),m=n("2ef0"),b=n("ae27"),w=n.n(b),O=n("9ceb"),f=n("23e6"),j=Object(a["defineComponent"])({components:{ApexChart:w.a,IonPage:c["IonPage"],IonHeader:c["IonHeader"],IonTitle:c["IonTitle"],IonToolbar:c["IonToolbar"],IonContent:c["IonContent"],IonFooter:c["IonFooter"],IonButton:c["IonButton"],ViewPort:d["a"],HisStandardForm:p["a"]},mixins:[u["a"]],data:()=>({patients:{},reportData:{},chartType:"area",height:"100%",width:"100%",canShowReport:!1,report:{},series:[],patientPresent:{},guardianPresent:{},bothPresent:{},chartOptions:{title:{text:"HIV Reception encounters"},yaxis:{title:{text:"Number of clients"},plotAreaHeight:800},xaxis:{type:"datetime"},markers:{size:8,hover:{sizeOffset:3}}}}),created(){this.fields=this.getDateDurationFields()},computed:{totalAttendance(){let t=[];return Object.keys(this.reportData).forEach(e=>{t=t.concat(Object.keys(this.reportData[e]).map(t=>({patient_id:t,date:e})))}),t},totalPatientVisits(){return Object.keys(this.patientPresent).reduce((t,e)=>t.concat(this.patientPresent[e].map(t=>({patient_id:t,date:e}))),[])},totalGuardianVisits(){return Object.keys(this.guardianPresent).reduce((t,e)=>t.concat(this.guardianPresent[e].map(t=>({patient_id:t,date:e}))),[])}},methods:{async onPeriod(t,e){await this.presentLoading(),this.reportData={},this.canShowReport=!0,this.patientPresent={},this.guardianPresent={},this.report=new h["b"],this.report.setStartDate(e.start_date),this.report.setEndDate(e.end_date),this.reportData=await this.report.getPatientVisitTypes(),this.series=this.buildSeries(this.reportData),c["loadingController"].dismiss()},async presentLoading(){(await c["loadingController"].create({message:"Please wait...",backdropDismiss:!1})).present()},async drillPatients(t,e){const n=[[O["a"].thTxt("ARV Number"),O["a"].thTxt("First name"),O["a"].thTxt("Last name"),O["a"].thTxt("Gender"),O["a"].thTxt("Visit date"),O["a"].thTxt("Action")]],a=async t=>{const e=t.map(async t=>{let e=null;if(this.patients[t.patient_id])e=this.patients[t.patient_id];else{const n=await f["a"].findByID(t.patient_id);e=new f["a"](n),this.patients[t.patient_id]=e}try{return[this.tdARV(e.getArvNumber()),O["a"].td(e.getGivenName()),O["a"].td(e.getFamilyName()),O["a"].td(this.formatGender(e.getGender())),O["a"].tdDate(t.date),O["a"].tdBtn("Show",async()=>{await c["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+t.patient_id})})]}catch(n){return[O["a"].td("N/A"),O["a"].td("N/A"),O["a"].td("N/A"),O["a"].td("N/A"),O["a"].td("N/A"),O["a"].tdBtn("Show",async()=>{await c["modalController"].dismiss({}),this.$router.push({path:"/patient/dashboard/"+t.patient_id})})]}});return Promise.all(e)};this.drilldownData(t,n,e,a)},onPointSelection(t,e,{dataPointIndex:n,seriesIndex:a}){try{const t=a<=0?0:a,e=this.series[t].data[n],r=this.series[t].raw[n],i=Array.from({length:r.length},(t,n)=>({patient_id:r[n],date:new Date(e[0]).toISOString()}));this.drillPatients("Point selection",i)}catch(t){console.log("Error loading point selection data")}},buildSeries(t){const e=Object(m["uniq"])(Object.keys(t)),n=(e,n,a)=>{e in n||(n[e]=[]);const r=Object.entries(t[e]).filter(([t,e])=>a(e.patient_present,e.guardian_present)).map(([t])=>t);return n[e]=[...n[e],...r],n},a=t=>e.map(e=>[new Date(e).getTime(),t[e].length]),r=t=>e.map(e=>t[e]);for(const i in t)n(i,this.patientPresent,(t,e)=>t&&!e),n(i,this.guardianPresent,(t,e)=>!t&&e),n(i,this.bothPresent,(t,e)=>t&&e);return[{name:"Patient present",raw:r(this.patientPresent),data:a(this.patientPresent)},{name:"Guardian present",raw:r(this.guardianPresent),data:a(this.guardianPresent)},{name:"Both patient and guardian present",raw:r(this.bothPresent),data:a(this.bothPresent)}]}}}),g=(n("cff2"),n("6b0d")),y=n.n(g);const D=y()(j,[["render",l],["__scopeId","data-v-5a438c42"]]);e["default"]=D}}]);
//# sourceMappingURL=chunk-fa18109a.9b7ceb4e.js.map