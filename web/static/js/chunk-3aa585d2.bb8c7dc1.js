(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3aa585d2"],{"08a6":function(e,t,a){"use strict";var r=a("fc32"),n=a.n(r);n.a},"1f9b":function(e,t,a){"use strict";var r=a("4bd9"),n=a.n(r);n.a},29299:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{attrs:{id:"main-container"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{"z-index":"30"}},[a("span",[e._v(e._s(e.reportTitle)),a("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.$router.go(-1)}}},[e._v("Back")])]),a("sdPicker",{attrs:{onSubmit:e.fetchDates}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("ReportOverlay",{attrs:{reportLoading:e.reportLoading,reportSelected:e.reportSelected}},[a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[a("thead",[a("tr",[a("th",[e._v("#")]),a("th",[e._v("Age group")]),a("th",[e._v("Gender")]),a("th",{staticClass:"disaggregated-numbers"},[e._v("Tx new (new on ART)")]),a("th",{staticClass:"disaggregated-numbers"},[e._v("TX curr (receiving ART)")]),a("th",{staticClass:"disaggregated-numbers"},[e._v("TX curr (received IPT)")]),a("th",{staticClass:"disaggregated-numbers"},[e._v("TX curr (screened for TB)")])])]),a("tbody",{ref:"tableBody"})])])],1)])])],1)],1)},n=[],s=(a("a4d3"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("159b"),a("ddb0"),a("ade3")),i=a("3835"),o=(a("96cf"),a("1da1")),c=a("8051"),l=a("ebd8"),u=a("7c08"),d=a("2f62"),p=a("c1df"),f=a.n(p),h=a("4dfe"),b=a("8e71"),g=a("1157"),m=a.n(g);a("6810");function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach((function(t){Object(s["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}a("2cdf"),a("fd5e"),a("5caa"),a("c3dc"),a("4e95"),a("a8a1"),a("919c"),a("4b69"),a("7dae"),a("a821");var x={name:"reports",components:{ReportOverlay:b["a"],"top-nav":l["a"],"side-bar":u["a"],sdPicker:h["a"]},methods:{fetchDates:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,r=Object(i["a"])(e,2),t.startDate=r[0],t.endDate=r[1],n=function(e){return e&&"Invalid date"!==e},n(t.startDate)&&n(t.endDate)){a.next=7;break}return a.abrupt("return");case 7:return t.reportLoading=!0,t.reportSelected=!0,a.next=11,t.initializeReport();case 11:a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](0),t.$router.push({name:"error",params:{message:a.t0.message}});case 16:return a.prev=16,t.reportLoading=!1,a.finish(16);case 19:case"end":return a.stop()}}),a,null,[[0,13,16,19]])})))()},initDataTable:function(){this.dTable=m()("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!0,searching:!1,paging:!1,Processing:!0,ServerSide:!0,scroller:{loadingIndicator:!0},dom:"Bfrtip",buttons:[{extend:"copy",title:this.reportTitle},{extend:"csv",title:this.reportTitle},{extend:"pdf",title:this.reportTitle},{extend:"print",title:this.reportTitle}]})},checkResult:function(e){},datatableEnable:function(e){for(var t in this.formatedData=[],e);},addTableBody:function(){for(var e=this,t=["0-5 months","6-11 months","12-23 months","2-4 years","5-9 years","10-14 years","15-17 years","18-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50 plus years"],a=this.$refs.tableBody,r=1,n=["Female","Male"],s=0;s<n.length;s++)for(var i=0;i<t.length;i++){var o=document.createElement("tr");o.setAttribute("class",n[s]+"_row"),a.appendChild(o);var c=0;while(c<7){var l=document.createElement("td");o.appendChild(l),0==c&&(l.innerHTML=r++),1==c&&(l.innerHTML=t[i]),2==c&&(l.innerHTML=n[s]),c>2&&(l.innerHTML=0,l.setAttribute("class","disaggregated-numbers")),o.appendChild(l),c++}}setTimeout((function(){return e.initDataTable()}),300)},initializeReport:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="cohort_disaggregated",t+="?date="+f()().format("YYYY-MM-DD"),t+="&quarter=pepfar",t+="&age_group="+this.ageGroups[0],t+="&rebuild_outcome="+this.rebuildOutcome,t+="&initialize=false",t+="&start_date="+this.startDate,t+="&end_date="+this.endDate,t+="&program_id=1",e.next=11,c["a"].get(t);case 11:if(a=e.sent,200!==a.status){e.next=22;break}return this.rebuildOutcome=!1,e.t0=this,e.next=17,a.json();case 17:return e.t1=e.sent,e.next=20,e.t0.addData.call(e.t0,e.t1);case 20:e.next=22;break;case 22:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addData:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n,s,i,o,c,l,u,d,p,f;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:for(r=t.$refs.tableBody.children,i=0;i<r.length;i++)for(o=r[i].children,c=0;c<o.length;c++)o[c].innerHTML==t.ageGroups[0]&&("Female"==o[2].innerHTML?n=r[i]:s=r[i]);for(l in e)for(d in u=e[l],u)p="F"==d?n:s,f=e[l][d],p.children[3].innerHTML=f.tx_new,p.children[4].innerHTML=f.tx_curr,t.screenedTB.push([p.children[6],d,l]),t.givenIPT.push([p.children[5],d,l]),"M"==d?(t.totalMales[0]+=f.tx_new,t.totalMales[1]+=f.tx_curr):(t.totalFemales[0]+=f.tx_new,t.totalFemales[1]+=f.tx_curr);if(t.ageGroups.length>0&&t.ageGroups.shift(),!(t.ageGroups.length>0)){a.next=7;break}return a.next=7,t.initializeReport();case 7:if(!(t.ageGroups.length<1)){a.next=10;break}return a.next=10,t.addTBscreenedData();case 10:case"end":return a.stop()}}),a)})))()},addTBscreenedData:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(0!==this.screenedTB.length){e.next=2;break}return e.abrupt("return");case 2:return t=this.screenedTB[0][2],a=this.screenedTB[0][1],r=this.screenedTB[0][0],n="screened_for_tb",n+="?date="+f()().format("YYYY-MM-DD"),n+="&outcome_table=temp_pepfar_patient_outcomes",n+="&age_group="+t,n+="&gender="+a,n+="&start_date="+this.startDate,n+="&end_date="+this.endDate,n+="&program_id=1",e.next=15,c["a"].get(n);case 15:if(s=e.sent,200!==s.status){e.next=34;break}return this.screenedTB.shift(),e.t0=this,e.t1=r,e.t2=a,e.next=23,s.json();case 23:if(e.t3=e.sent,e.t0.TBscreened.call(e.t0,e.t1,e.t2,e.t3),!(this.screenedTB.length<1)){e.next=30;break}return e.next=28,this.addGivenIPTdata();case 28:e.next=32;break;case 30:return e.next=32,this.addTBscreenedData();case 32:e.next=34;break;case 34:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),addGivenIPTdata:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(){var t,a,r,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.givenIPT[0][2],a=this.givenIPT[0][1],r=this.givenIPT[0][0],n="clients_given_ipt",n+="?date="+f()().format("YYYY-MM-DD"),n+="&outcome_table=temp_pepfar_patient_outcomes",n+="&age_group="+t,n+="&gender="+a,n+="&start_date="+this.startDate,n+="&end_date="+this.endDate,n+="&program_id=1",e.next=13,c["a"].get(n);case 13:if(s=e.sent,200!==s.status){e.next=32;break}return this.givenIPT.shift(),e.t0=this,e.t1=r,e.t2=a,e.next=21,s.json();case 21:if(e.t3=e.sent,e.t0.iptGiven.call(e.t0,e.t1,e.t2,e.t3),!(this.givenIPT.length<1)){e.next=28;break}return e.next=26,this.allMales();case 26:e.next=30;break;case 28:return e.next=30,this.addGivenIPTdata();case 30:e.next=32;break;case 32:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),iptGiven:function(e,t,a){e.innerHTML=a.length,"M"==t?this.totalMales[2]+=a.length:this.totalFemales[2]+=a.length},TBscreened:function(e,t,a){e.innerHTML=a.length,"M"==t?this.totalMales[3]+=a.length:this.totalFemales[3]+=a.length},allMales:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.dTable.fnAddData(["31","All","Male",e.totalMales[0],e.totalMales[1],e.totalMales[2],e.totalMales[3]]),t.next=3,e.getAllFemale("Pregnant");case 3:case"end":return t.stop()}}),t)})))()},getAllFemale:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a="cohort_disaggregated",a+="?date="+f()().format("YYYY-MM-DD"),a+="&outcome_table=temp_pepfar_patient_outcomes",a+="&age_group="+t,a+="&start_date="+this.startDate,a+="&end_date="+this.endDate,a+="&program_id=1",a+="&quarter=pepfar",a+="&initialize=false",a+="&rebuild_outcome="+this.rebuildOutcome,e.next=12,c["a"].get(a);case 12:if(r=e.sent,200!==r.status){e.next=21;break}return e.t0=this,e.t1=t,e.next=18,r.json();case 18:return e.t2=e.sent,e.next=21,e.t0.addNewFemaleRow.call(e.t0,e.t1,e.t2);case 21:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),addNewFemaleRow:function(e,t){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,s,i,o,c,l,u,d,p,f,h,b,g;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:r.t0=regeneratorRuntime.keys(t);case 1:if((r.t1=r.t0()).done){r.next=30;break}n=r.t1.value,s=t[n],r.t2=regeneratorRuntime.keys(s);case 5:if((r.t3=r.t2()).done){r.next=28;break}if(i=r.t3.value,o=t[n][i].tx_new,c=t[n][i].tx_curr,l=t[n][i].tx_screened_for_tb,u=t[n][i].tx_given_ipt,"Pregnant"!=e){r.next=20;break}return d=a.dTable.fnAddData(["32","All","FP",o,c,u,l]),p=a.dTable.fnSettings(),f=p.aoData[d[0]].nTr,a.fpRow=f,r.next=18,a.getAllFemale("Breastfeeding");case 18:r.next=26;break;case 20:return h=a.dTable.fnAddData(["33","All","Fbf",o,c,u,l]),b=a.dTable.fnSettings(),g=b.aoData[h[0]].nTr,a.fbfRow=g,r.next=26,a.loadFPdata("pregnant","screened_for_tb");case 26:r.next=5;break;case 28:r.next=1;break;case 30:case"end":return r.stop()}}),r)})))()},loadFPdata:function(){var e=Object(o["a"])(regeneratorRuntime.mark((function e(t,a){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=a,r+="?date="+f()().format("YYYY-MM-DD"),r+="&start_date="+this.startDate,r+="&end_date="+this.endDate,r+="&gender="+t,r+="&age_group="+t,r+="&outcome_table=temp_pepfar_patient_outcomes",r+="&program_id=1",e.next=10,c["a"].get(r);case 10:if(n=e.sent,200!==n.status||"pregnant"!=t||"screened_for_tb"!=a){e.next=22;break}return e.t0=this,e.t1=this.fpRow,e.next=16,n.json();case 16:return e.t2=e.sent.length,e.t0.assignValueTD.call(e.t0,e.t1,e.t2,2),e.next=20,this.loadFPdata("breastfeeding",a);case 20:e.next=52;break;case 22:if(200!==n.status||"breastfeeding"!=t||"screened_for_tb"!=a){e.next=33;break}return e.t3=this,e.t4=this.fbfRow,e.next=27,n.json();case 27:return e.t5=e.sent.length,e.t3.assignValueTD.call(e.t3,e.t4,e.t5,2),e.next=31,this.loadFPdata("pregnant","clients_given_ipt");case 31:e.next=52;break;case 33:if(200!==n.status||"pregnant"!=t){e.next=44;break}return e.t6=this,e.t7=this.fpRow,e.next=38,n.json();case 38:return e.t8=e.sent.length,e.t6.assignValueTD.call(e.t6,e.t7,e.t8,1),e.next=42,this.loadFPdata("breastfeeding",a);case 42:e.next=52;break;case 44:if(200!==n.status||"breastfeeding"!=t){e.next=52;break}return e.t9=this,e.t10=this.fbfRow,e.next=49,n.json();case 49:e.t11=e.sent.length,e.t9.assignValueTD.call(e.t9,e.t10,e.t11,1),this.addAllFemaleRow();case 52:case"end":return e.stop()}}),e,this)})));function t(t,a){return e.apply(this,arguments)}return t}(),assignValueTD:function(e,t,a){1==a?console.log(m()("td",e)[5].innerHTML=t):console.log(m()("td",e)[6].innerHTML=t)},addAllFemaleRow:function(){for(var e=this.$refs.tableBody.children,t=0;t<e.length;t++){var a=e[t].children[0],r=e[t].children;"32"!=a.innerHTML&&"33"!=a.innerHTML||(this.totalFemales[0]-=parseInt(r[3].innerHTML),this.totalFemales[1]-=parseInt(r[4].innerHTML),this.totalFemales[2]-=parseInt(r[5].innerHTML),this.totalFemales[3]-=parseInt(r[6].innerHTML))}this.dTable.fnAddData(["34","All","FNP",this.totalFemales[0],this.totalFemales[1],this.totalFemales[2],this.totalFemales[3]]),this.dTable.fnDestroy(),this.initDataTable()}},mounted:function(){var e=this;setTimeout((function(){return e.addTableBody()}),300)},data:function(){return{reportData:null,dTable:null,formatedData:[],rebuildOutcome:!0,startDate:null,endDate:null,screenedTB:[],givenIPT:[],totalMales:[0,0,0,0],totalFemales:[0,0,0,0],fpRow:null,fbfRow:null,ageGroups:["0-5 months","6-11 months","12-23 months","2-4 years","5-9 years","10-14 years","15-17 years","18-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50 plus years"].reverse(),reportLoading:!1,reportSelected:!1}},computed:D({},Object(d["c"])(["location"]),{reportTitle:function(){return"".concat(this.location.name," PEPFAR Disaggregated report")}})},_=x,T=(a("1f9b"),a("08a6"),a("2877")),y=Object(T["a"])(_,r,n,!1,null,"27244068",null);t["default"]=y.exports},"336a":function(e,t,a){"use strict";var r=a("df61"),n=a.n(r);n.a},3835:function(e,t,a){"use strict";function r(e){if(Array.isArray(e))return e}a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0");function n(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var a=[],r=!0,n=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done);r=!0)if(a.push(i.value),t&&a.length===t)break}catch(c){n=!0,s=c}finally{try{r||null==o["return"]||o["return"]()}finally{if(n)throw s}}return a}}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(e,t){return r(e)||n(e,t)||s()}a.d(t,"a",(function(){return i}))},"4bd9":function(e,t,a){},"4dfe":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:e.submitDates}},[e._v("Submit")])])])])])},n=[],s=a("f0ca"),i=a.n(s),o=a("c1df"),c=a.n(o),l=(a("6f3c"),a("1789")),u={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(e,t){return l["a"].parse(e,t)},formatDate:function(e,t){return l["a"].format(e,t)}},mounted:function(){var e=this;setTimeout((function(){return e.initDates()}),300)}},d=u,p=(a("336a"),a("2877")),f=Object(p["a"])(d,r,n,!1,null,"15deca72",null);t["a"]=f.exports},"8e71":function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-overlay",{attrs:{show:e.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:e._u([{key:"overlay",fn:function(){return[a("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[e.reportSelected?e._e():a("h1",[e._v("No Report Selected")]),e.reportSelected?a("b-spinner",{attrs:{type:"grow",variant:"primary"}}):e._e()],1)]},proxy:!0}])},[e._t("default")],2)},n=[],s={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},i=s,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);t["a"]=c.exports},df61:function(e,t,a){},fc32:function(e,t,a){}}]);
//# sourceMappingURL=chunk-3aa585d2.bb8c7dc1.js.map