(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70fd8d96"],{"1b17":function(t,e,a){},"27e6":function(t,e,a){"use strict";var r=a("dbe9"),n=a.n(r);n.a},"336a":function(t,e,a){"use strict";var r=a("df61"),n=a.n(r);n.a},3835:function(t,e,a){"use strict";function r(t){if(Array.isArray(t))return t}a.d(e,"a",(function(){return i}));a("a4d3"),a("e01a"),a("d28b"),a("e260"),a("d3b7"),a("25f0"),a("3ca3"),a("ddb0");function n(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var a=[],r=!0,n=!1,s=void 0;try{for(var i,l=t[Symbol.iterator]();!(r=(i=l.next()).done);r=!0)if(a.push(i.value),e&&a.length===e)break}catch(o){n=!0,s=o}finally{try{r||null==l["return"]||l["return"]()}finally{if(n)throw s}}return a}}function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(t,e){return r(t)||n(t,e)||s()}},"466d":function(t,e,a){"use strict";var r=a("d784"),n=a("825a"),s=a("50c4"),i=a("1d80"),l=a("8aa5"),o=a("14c3");r("match",1,(function(t,e,a){return[function(e){var a=i(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,a):new RegExp(e)[t](String(a))},function(t){var r=a(e,t,this);if(r.done)return r.value;var i=n(t),c=String(this);if(!i.global)return o(i,c);var u=i.unicode;i.lastIndex=0;var d,g=[],f=0;while(null!==(d=o(i,c))){var h=String(d[0]);g[f]=h,""===h&&(i.lastIndex=l(c,s(i.lastIndex),u)),f++}return 0===f?null:g}]}))},"498a":function(t,e,a){"use strict";var r=a("23e7"),n=a("58a8").trim,s=a("c8d2");r({target:"String",proto:!0,forced:s("trim")},{trim:function(){return n(this)}})},"4dfe":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},n=[],s=a("f0ca"),i=a.n(s),l=a("c1df"),o=a.n(l),c=(a("6f3c"),a("1789")),u={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:c["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=o()(this.startDate).format("YYYY-MM-DD"),this.endDate=o()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return c["a"].parse(t,e)},formatDate:function(t,e){return c["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},d=u,g=(a("336a"),a("2877")),f=Object(g["a"])(d,r,n,!1,null,"15deca72",null);e["a"]=f.exports},"4fad":function(t,e,a){var r=a("23e7"),n=a("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return n(t)}})},5319:function(t,e,a){"use strict";var r=a("d784"),n=a("825a"),s=a("7b0b"),i=a("50c4"),l=a("a691"),o=a("1d80"),c=a("8aa5"),u=a("14c3"),d=Math.max,g=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,p=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,a,r){var _=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,v=_?"$":"$0";return[function(a,r){var n=o(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,n,r):e.call(String(n),a,r)},function(t,r){if(!_&&b||"string"===typeof r&&-1===r.indexOf(v)){var s=a(e,t,this,r);if(s.done)return s.value}var o=n(t),f=String(this),h="function"===typeof r;h||(r=String(r));var m=o.global;if(m){var D=o.unicode;o.lastIndex=0}var C=[];while(1){var P=u(o,f);if(null===P)break;if(C.push(P),!m)break;var x=String(P[0]);""===x&&(o.lastIndex=c(f,i(o.lastIndex),D))}for(var w="",j=0,O=0;O<C.length;O++){P=C[O];for(var Y=String(P[0]),A=d(g(l(P.index),f.length),0),M=[],T=1;T<P.length;T++)M.push(p(P[T]));var S=P.groups;if(h){var k=[Y].concat(M,A,f);void 0!==S&&k.push(S);var R=String(r.apply(void 0,k))}else R=y(Y,f,A,M,S,r);A>=j&&(w+=f.slice(j,A)+R,j=A+Y.length)}return w+f.slice(j)}];function y(t,a,r,n,i,l){var o=r+t.length,c=n.length,u=m;return void 0!==i&&(i=s(i),u=h),e.call(l,u,(function(e,s){var l;switch(s.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,r);case"'":return a.slice(o);case"<":l=i[s.slice(1,-1)];break;default:var u=+s;if(0===u)return e;if(u>c){var d=f(u/10);return 0===d?e:d<=c?void 0===n[d-1]?s.charAt(1):n[d-1]+s.charAt(1):e}l=n[u-1]}return void 0===l?"":l}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var r=a("1d80"),n=a("5899"),s="["+n+"]",i=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),o=function(t){return function(e){var a=String(r(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(l,"")),a}};t.exports={start:o(1),end:o(2),trim:o(3)}},"60f6":function(t,e,a){"use strict";var r=a("1b17"),n=a.n(r);n.a},"6f53":function(t,e,a){var r=a("83ab"),n=a("df75"),s=a("fc6a"),i=a("d1e7").f,l=function(t){return function(e){var a,l=s(e),o=n(l),c=o.length,u=0,d=[];while(c>u)a=o[u++],r&&!i.call(l,a)||d.push(t?[a,l[a]]:l[a]);return d}};t.exports={entries:l(!0),values:l(!1)}},"8aa5":function(t,e,a){"use strict";var r=a("6547").charAt;t.exports=function(t,e,a){return e+(a?r(t,e).length:1)}},"8e71":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-overlay",{attrs:{show:t.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([{key:"overlay",fn:function(){return[a("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[t.reportSelected?t._e():a("h1",[t._v("No Report Selected")]),t.reportSelected?a("b-spinner",{attrs:{type:"grow",variant:"primary"}}):t._e()],1)]},proxy:!0}])},[t._t("default")],2)},n=[],s={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},i=s,l=a("2877"),o=Object(l["a"])(i,r,n,!1,null,null,null);e["a"]=o.exports},9521:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return s})),a.d(e,"b",(function(){return i}));a("99af"),a("4fad"),a("ac1f"),a("466d"),a("5319"),a("498a");var r=a("3835");function n(t){try{return t.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(e){return t}}function s(t){return t.match(/fb|fbf|fnp/i)?t.toUpperCase():(t=t.toLowerCase(),"m"===t||"male"===t?"Male":"Female")}function i(t){for(var e="",a=0,n=Object.entries(t);a<n.length;a++){var s=Object(r["a"])(n[a],2),i=s[0],l=s[1];e+="".concat(i,"=").concat(l,"&")}return e}},c8d2:function(t,e,a){var r=a("d039"),n=a("5899"),s="​᠎";t.exports=function(t){return r((function(){return!!n[t]()||s[t]()!=s||n[t].name!==t}))}},dbe9:function(t,e,a){},df61:function(t,e,a){},edff:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{"z-index":"30"}},[a("span",[t._v(t._s(t.report_title)),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$router.go(-1)}}},[t._v(" Back ")])]),a("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),a("div",{staticClass:"row"},[a("button",{staticClass:"btn btn-secondary",staticStyle:{margin:"0 0 10px 50px"},attrs:{id:"csv",disabled:!t.reportSelected},on:{click:t.printCSV}},[t._v(" CSV ")]),a("div",{staticClass:"col-sm12"},[a("ReportOverlay",{attrs:{reportLoading:t.reportLoading,reportSelected:t.reportSelected}},[a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Age group")]),a("th",[t._v("Gender")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Tx new (new on ART)")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("TX curr (receiving ART)")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("TX curr (received IPT)")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("TX curr (screened for TB)")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("0A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("2A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("4A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("5A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("6A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("7A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("8A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("9A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("10A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("11A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("12A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("13A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("14A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("15A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("16A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("17A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("0P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("2P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("4PP")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("4PA")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("9PP")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("9PA")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("11PP")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("11PA")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("12PP")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("12PA")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("14PP")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("14PA")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("15PP")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("15PA")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("16P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("17PP")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("17PA")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Unknown")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Total (regimen)")])])]),a("tbody",{ref:"tableBody"},[t._l(t.genders,(function(e,r){return t._l(Object.keys(t.patientData),(function(n,s){return a("tr",{key:e+s},[a("td",[t._v(t._s(r+1===2?15+s+1:s+1))]),a("td",[t._v(t._s(n))]),a("td",[t._v(t._s(t.formatGender(e)))]),t._l(Object.keys(t.patientData[n][e]),(function(r,s){return a("td",{key:s,class:t.patientData[n][e][r].length>0?"drillable":"",on:{click:function(a){return t.fetchDrillDown(e,n,r)}}},[t._v(" "+t._s(t.patientData[n][e][r].length)+" ")])})),a("td",[t._v(" "+t._s(t.getTotal(n,e))+" ")])],2)}))})),t._l(Object.keys(t.allClients),(function(e,r){return a("tr",{key:"all"+r},[a("td",[t._v(t._s(r+1+30))]),a("td",[t._v("All")]),a("td",[t._v(t._s(e))]),t._l(Object.keys(t.allClients[e]),(function(r,n){return a("td",{key:n},[t._v(" "+t._s(t.allClients[e][r].length)+" ")])})),a("td",[t._v(" "+t._s(t.getTotalClientsByKey(e))+" ")])],2)}))],2)])])],1)])]),a("b-modal",{attrs:{id:"modal-1",title:"Drill Down Clients",size:"xl"}},[a("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:t.drillClients,fields:t.columns,"per-page":t.perPage,"current-page":t.currentPage}}),a("b-pagination",{attrs:{"per-page":t.perPage,"total-rows":t.rows,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),a("p",{staticClass:"mt-3"},[t._v("Current Page: "+t._s(t.currentPage))])],1)],1)],1)},n=[],s=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("caad"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("ac1f"),a("2532"),a("3ca3"),a("5319"),a("159b"),a("ddb0"),a("2b3d"),a("ade3")),i=a("2909"),l=(a("96cf"),a("1da1")),o=a("8051"),c=a("ebd8"),u=a("7c08"),d=a("c1df"),g=a.n(d),f=a("4dfe"),h=a("8e71"),m=a("9521");function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function _(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var b={tx_new:[],tx_curr:[],tx_curr_ipt:[],tx_curr_screened_tb:[],"0A":[],"2A":[],"4A":[],"5A":[],"6A":[],"7A":[],"8A":[],"9A":[],"10A":[],"11A":[],"12A":[],"13A":[],"14A":[],"15A":[],"16A":[],"17A":[],"0P":[],"2P":[],"4PP":[],"4PA":[],"9PP":[],"9PA":[],"11PP":[],"11PA":[],"12PA":[],"12PP":[],"14PP":[],"14PA":[],"15PP":[],"15PA":[],"16P":[],"17PP":[],"17PA":[],"N/A":[]},v={name:"reports",components:{ReportOverlay:h["a"],"top-nav":c["a"],"side-bar":u["a"],sdPicker:f["a"]},methods:{formatGender:function(t){return Object(m["a"])(t)},fetchDates:function(t){this.startDate=t[0],this.endDate=t[1],this.reportLoading=!0,this.reportSelected=!0,this.initializeReport()},printCSV:function(){var t=null,e=document.getElementsByTagName("thead")[0].getElementsByTagName("th");e.forEach((function(e){null==t?t='"'.concat(e.innerText,'",'):t+='"'.concat(e.innerText,'",')}));var a=e[0].getElementsByTagName("tr");a=document.getElementsByTagName("tbody")[0].getElementsByTagName("tr"),a.forEach((function(e){t+="\n",e.getElementsByTagName("td").forEach((function(e){t+='"'.concat(e.innerHTML.replace("&lt;","<"),'",')}))})),t+="\n",t+="Date Created:  ".concat(g()().format("YYYY-MM-DD:h:m:s"),"\n                          Quarter: ").concat(this.startDate," to ").concat(this.endDate,"\n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion,"\n                          Site UUID: ").concat(sessionStorage.siteUUID," \n                          API Version ").concat(sessionStorage.APIVersion);for(var r=0;r<34;r++)t+=",";this.report_title="MoH "+sessionStorage.location_name+" cohort disaggregated report ",this.report_title+=g()(this.startDate).format("DDMMMYYYY"),this.report_title+=" - "+g()(this.endDate).format("DDMMMYYYY");var n=new Blob([t],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(n,exportFilename);else{var s=document.createElement("a");s.href=window.URL.createObjectURL(n),s.setAttribute("download","".concat(this.report_title,".csv")),document.body.appendChild(s),s.click(),document.body.removeChild(s)}},initDataTable:function(){g()(this.startDate).format("DD/MMM/YYYY"),g()(this.endDate).format("DD/MMM/YYYY");this.report_title="MoH "+sessionStorage.location_name+" cohort disaggregated report ",this.report_title+=g()(this.startDate).format("DDMMMYYYY"),this.report_title+=" - "+g()(this.endDate).format("DDMMMYYYY"),this.dTable=jQuery("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!1,searching:!1,paging:!1,Processing:!1,ServerSide:!1,scrollY:"50vh",scrollX:!0,scrollCollapse:!0,fixedColumns:{leftColumns:2,rightColumns:1},scroller:{loadingIndicator:!0},dom:"Bfrtip",buttons:[{extend:"copy",title:this.report_title},{extend:"csv",title:this.report_title,footer:!0},{extend:"pdf",title:this.report_title},{extend:"print",title:this.report_title}]})},checkResult:function(t){},datatableEnable:function(t){for(var e in this.formatedData=[],t);},fetchDrillDown:function(t,e,a){var r=this,n=this.patientData[e][t][a];n.length>0&&(this.$bvModal.show("modal-1"),this.drillClients=[],n.forEach((function(t){r.getClient(t)})))},initializeReport:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:for(this.report_title="MoH "+sessionStorage.location_name+" cohort disaggregated report ",this.report_title+=g()(this.startDate).format("DDMMMYYYY"),this.report_title+=" - "+g()(this.endDate).format("DDMMMYYYY"),e="cohort_disaggregated",e+="?date="+g()().format("YYYY-MM-DD"),e+="&quarter=Custom",e+="&age_group="+this.ageGroups[0],e+="&rebuild_outcome="+this.rebuildOutcome,e+="&initialize="+this.initialize,e+="&start_date="+this.startDate,e+="&end_date="+this.endDate,e+="&program_id=1",a=document.getElementsByClassName("dt-button"),r=0;r<a.length;r++)a[r].setAttribute("disabled",!0),a[r].style="display: none;";return this.initialize=!1,t.next=17,o["a"].get(e,{},{});case 17:n=t.sent,200===n.status?(this.rebuildOutcome=!1,n.json().then((function(t){return setTimeout((function(){return s.addData(t)}),5e3)}))):setTimeout((function(){return s.fetchData()}),5e3);case 19:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addData:function(t){for(var e in t){var a=t[e];for(var r in a){var n=t[e][r];this.screenedTB.push([n.tx_screened_for_tb,r,e]),this.givenIPT.push([n.tx_given_ipt,r,e]),"M"==r?(this.patientData[e]["male"]["tx_curr"]=n.tx_curr,this.patientData[e]["male"]["tx_new"]=n.tx_new,this.totalMales[0]+=n.tx_new.length,this.totalMales[1]+=n.tx_curr.length):"F"==r&&(this.patientData[e]["female"]["tx_curr"]=n.tx_curr,this.patientData[e]["female"]["tx_new"]=n.tx_new,this.totalFemales[0]+=n.tx_new.length,this.totalFemales[1]+=n.tx_curr.length)}}this.ageGroups.length>0&&this.ageGroups.shift(),this.ageGroups.length>0&&this.initializeReport(),this.ageGroups.length<1&&this.addTBscreenedData()},addTBscreenedData:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.screenedTB[0][2],a=this.screenedTB[0][1],r=this.screenedTB[0][0],n="screened_for_tb",n+="?date="+g()().format("YYYY-MM-DD"),n+="&outcome_table=temp_patient_outcomes",n+="&age_group="+e,n+="&gender="+a,n+="&start_date="+this.startDate,n+="&end_date="+this.endDate,n+="&program_id=1",t.next=13,o["a"].get(n,{},{});case 13:s=t.sent,200===s.status&&(this.screenedTB.shift(),s.json().then((function(t){var n="F"===a?"female":"male";i.patientData[e][n]["tx_curr_screened_tb"]=t,i.TBscreened(r,a,t)})),this.screenedTB.length<1?this.addGivenIPTdata():setTimeout((function(){return i.addTBscreenedData()}),500));case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addGivenIPTdata:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.givenIPT[0][2],a=this.givenIPT[0][1],r=this.givenIPT[0][0],n="clients_given_ipt",n+="?date="+g()().format("YYYY-MM-DD"),n+="&outcome_table=temp_patient_outcomes",n+="&age_group="+e,n+="&gender="+a,n+="&start_date="+this.startDate,n+="&end_date="+this.endDate,n+="&program_id=1",t.next=13,o["a"].get(n,{},{});case 13:s=t.sent,200===s.status&&(this.givenIPT.shift(),s.json().then((function(t){var n="F"===a?"female":"male";i.patientData[e][n]["tx_curr_ipt"]=t,i.iptGiven(r,a,t)})),this.givenIPT.length<1?(["female","male"].forEach((function(t){Object.keys(i.patientData).forEach((function(e){i.getRegimenInfo(t,e)}))})),this.reportLoading=!1,this.allMales()):setTimeout((function(){return i.addGivenIPTdata()}),500));case 15:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),iptGiven:function(t,e,a){"M"==e?this.totalMales[2]+=a.length:this.totalFemales[2]+=a.length},TBscreened:function(t,e,a){t.innerHTML=a.length,"M"==e?this.totalMales[3]+=a.length:this.totalFemales[3]+=a.length},allMales:function(){var t=this;Object.keys(this.allClients["male"]).forEach((function(e){var a=t.getTotalByKey("male",e);t.allClients["male"][e]=a})),this.getAllFemale("Pregnant")},getAllFemale:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="cohort_disaggregated",a+="?date="+g()().format("YYYY-MM-DD"),a+="&outcome_table=temp_patient_outcomes",a+="&age_group="+e,a+="&start_date="+this.startDate,a+="&end_date="+this.endDate,a+="&program_id=1",a+="&quarter=Custom",a+="&initialize=false",a+="&rebuild_outcome="+this.rebuildOutcome,t.next=12,o["a"].get(a,{},{});case 12:r=t.sent,200===r.status&&r.json().then((function(t){return n.addNewFemaleRow(e,t)}));case 14:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),getClient:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var a,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a="patients/"+e,t.next=3,o["a"].get(a,{},{});case 3:r=t.sent,200===r.status&&r.json().then((function(t){return n.drillClients.push(n.parsePatient(t))}));case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),parsePatient:function(t){var e=t.person.birthdate,a=t.person.gender,r="";t.person.names[0].given_name,t.person.names[0].family_name,t.patient_identifiers.filter((function(t){return 4===t.identifier_type?t.identifier:""}));try{var n=t.person.addresses[0].city_village;t.person.addresses[0].address2,t.person.person_attributes[1].value}catch(l){n=""}try{for(var s=0;s<t.patient_identifiers.length;s++)4==t.patient_identifiers[s]["identifier_type"]&&(r=t.patient_identifiers[s]["identifier"])}catch(l){console.log(l)}var i={};return i.dob=e,i.arv_number=r,i.gender=Object(m["a"])(a),i.current_village=n,i},addNewFemaleRow:function(t,e){for(var a in e){var r=e[a];for(var n in r){var s=e[a][n].tx_new,i=e[a][n].tx_curr,l=e[a][n].tx_screened_for_tb,o=e[a][n].tx_given_ipt;"Pregnant"==t?(this.allClients["FP"]["tx_new"]=s,this.allClients["FP"]["tx_curr"]=i,this.allClients["FP"]["tx_curr_ipt"]=o,this.allClients["FP"]["tx_curr_screened_tb"]=l,this.getAllFemale("Breastfeeding"),this.getRegimenInfo("FP","All",!0)):(this.allClients["Fbf"]["tx_new"]=s,this.allClients["Fbf"]["tx_curr"]=i,this.allClients["Fbf"]["tx_curr_ipt"]=o,this.allClients["Fbf"]["tx_curr_screened_tb"]=l,this.getRegimenInfo("Fbf","All",!0),this.loadFPdata("pregnant","screened_for_tb"))}}},loadFPdata:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,a){var r,n,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=a,r+="?date="+g()().format("YYYY-MM-DD"),r+="&start_date="+this.startDate,r+="&end_date="+this.endDate,r+="&gender="+e,r+="&age_group="+e,r+="&outcome_table=temp_patient_outcomes",r+="&program_id=1",t.next=10,o["a"].get(r,{},{});case 10:n=t.sent,200===n.status&&"pregnant"==e&&"screened_for_tb"==a?(n.json().then((function(t){return s.allClients["FP"]["tx_curr_screened_tb"]=t})),this.loadFPdata("breastfeeding",a)):200===n.status&&"breastfeeding"==e&&"screened_for_tb"==a?(n.json().then((function(t){return s.allClients["Fbf"]["tx_curr_screened_tb"]=t})),this.loadFPdata("pregnant","clients_given_ipt")):200===n.status&&"pregnant"==e?(n.json().then((function(t){return s.allClients["FP"]["tx_curr_ipt"]=t})),this.loadFPdata("breastfeeding",a)):200===n.status&&"breastfeeding"==e&&(n.json().then((function(t){return s.allClients["Fbf"]["tx_curr_ipt"]=t})),setTimeout((function(){s.addAllFemaleRow()}),2e3));case 12:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}(),assignValueTD:function(t,e,a){1==a?jQuery("td",t)[5].innerHTML=e:jQuery("td",t)[6].innerHTML=e},addAllFemaleRow:function(){var t=this;["Fbf","FP"].forEach((function(e){t.getRegimenInfo(e,null,!0)})),Object.keys(this.allClients["male"]).forEach((function(e){var a=t.getTotalByKey("male",e);t.allClients["male"][e]=a})),Object.keys(b).forEach((function(e){var a=t.allClients["FP"][e],r=t.allClients["Fbf"][e],n=t.getTotalByKey("female",e),s=n.filter((function(t){return!a.includes(t)}));s=s.filter((function(t){return!r.includes(t)})),t.allClients["FNP"][e]=s}))},getRegimenInfo:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,a,r){var n,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="disaggregated_regimen_distribution",n+="?date="+g()().format("YYYY-MM-DD"),n+="&start_date="+this.startDate,n+="&end_date="+this.endDate,n+="&gender="+e,n+="&age_group="+a,n+="&outcome_table=temp_patient_outcomes",n+="&program_id=1",t.next=10,o["a"].get(n,{},{});case 10:s=t.sent,200===s.status&&s.json().then((function(t){return i.addRegimen(t,e,a,r)}));case 12:case"end":return t.stop()}}),t,this)})));function e(e,a,r){return t.apply(this,arguments)}return e}(),getTotal:function(t,e){var a=this,r=0;return Object.keys(this.patientData[t][e]).forEach((function(n){"tx_curr"===n||"tx_new"===n||"tx_curr_ipt"===n||"tx_curr_screened_tb"===n||(r+=a.patientData[t][e][n].length)})),r},getTotalByKey:function(t,e){var a=this,r=[];return Object.keys(this.patientData).forEach((function(n){r.push.apply(r,Object(i["a"])(a.patientData[n][t][e]))})),r},getTotalClientsByKey:function(t){var e=this,a=0;return Object.keys(this.allClients[t]).forEach((function(r){"tx_curr"===r||"tx_new"===r||"tx_curr_ipt"===r||"tx_curr_screened_tb"===r||(a+=e.allClients[t][r].length)})),a},addRegimen:function(t,e,a,r){for(var n in t)r?this.allClients[e][n]=t[n]:this.patientData[a][e][n]=t[n]}},computed:{rows:function(){return this.drillClients.length}},mounted:function(){},data:function(){var t;return t={allKeys:_({},b),reportData:null,report_title:"MoH Disaggregated "},Object(s["a"])(t,"reportData",null),Object(s["a"])(t,"dTable",null),Object(s["a"])(t,"formatedData",[]),Object(s["a"])(t,"rebuildOutcome",!0),Object(s["a"])(t,"startDate",null),Object(s["a"])(t,"endDate",null),Object(s["a"])(t,"screenedTB",[]),Object(s["a"])(t,"givenIPT",[]),Object(s["a"])(t,"totalMales",[0,0,0,0]),Object(s["a"])(t,"totalRows",0),Object(s["a"])(t,"totalFemales",[0,0,0,0]),Object(s["a"])(t,"columns",[{key:"arv_number",label:"ARV Number"},{key:"dob",label:"DOB"},{key:"gender",label:"Gender"},{key:"current_village",label:"Village"}]),Object(s["a"])(t,"reportLoading",!1),Object(s["a"])(t,"reportSelected",!1),Object(s["a"])(t,"fpRow",null),Object(s["a"])(t,"FbfRow",null),Object(s["a"])(t,"allRows",[]),Object(s["a"])(t,"initialize",!1),Object(s["a"])(t,"genders",["female","male"]),Object(s["a"])(t,"ageGroups",["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"].reverse()),Object(s["a"])(t,"drillClients",[]),Object(s["a"])(t,"perPage",10),Object(s["a"])(t,"currentPage",1),Object(s["a"])(t,"allClients",{male:_({},b),FP:_({},b),FNP:_({},b),Fbf:_({},b)}),Object(s["a"])(t,"patientData",{"<1 year":{male:_({},b),female:_({},b)},"1-4 years":{male:_({},b),female:_({},b)},"5-9 years":{male:_({},b),female:_({},b)},"10-14 years":{male:_({},b),female:_({},b)},"15-19 years":{male:_({},b),female:_({},b)},"20-24 years":{male:_({},b),female:_({},b)},"25-29 years":{male:_({},b),female:_({},b)},"30-34 years":{male:_({},b),female:_({},b)},"35-39 years":{male:_({},b),female:_({},b)},"40-44 years":{male:_({},b),female:_({},b)},"45-49 years":{male:_({},b),female:_({},b)},"50-54 years":{male:_({},b),female:_({},b)},"55-59 years":{male:_({},b),female:_({},b)},"60-64 years":{male:_({},b),female:_({},b)},"65-69 years":{male:_({},b),female:_({},b)},"70-74 years":{male:_({},b),female:_({},b)},"75-79 years":{male:_({},b),female:_({},b)},"80-84 years":{male:_({},b),female:_({},b)},"85-89 years":{male:_({},b),female:_({},b)},"90 plus years":{male:_({},b),female:_({},b)}}),t}},y=v,D=(a("27e6"),a("60f6"),a("2877")),C=Object(D["a"])(y,r,n,!1,null,"9cc438a0",null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-70fd8d96.2756cd33.js.map