(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eede1b0"],{1276:function(t,e,r){"use strict";var n=r("d784"),a=r("44e7"),o=r("825a"),i=r("1d80"),c=r("4840"),s=r("8aa5"),u=r("50c4"),l=r("14c3"),f=r("9263"),d=r("d039"),p=[].push,h=Math.min,v=4294967295,g=!d((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(i(this)),o=void 0===r?v:r>>>0;if(0===o)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,o);var c,s,u,l=[],d=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,d+"g");while(c=f.call(g,n)){if(s=g.lastIndex,s>h&&(l.push(n.slice(h,c.index)),c.length>1&&c.index<n.length&&p.apply(l,c.slice(1)),u=c[0].length,h=s,l.length>=o))break;g.lastIndex===c.index&&g.lastIndex++}return h===n.length?!u&&g.test("")||l.push(""):l.push(n.slice(h)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var a=i(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,a,r):n.call(String(a),e,r)},function(t,a){var i=r(n,t,this,a,n!==e);if(i.done)return i.value;var f=o(t),d=String(this),p=c(f,RegExp),m=f.unicode,b=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(g?"y":"g"),y=new p(g?f:"^(?:"+f.source+")",b),D=void 0===a?v:a>>>0;if(0===D)return[];if(0===d.length)return null===l(y,d)?[d]:[];var _=0,w=0,O=[];while(w<d.length){y.lastIndex=g?w:0;var j,P=l(y,g?d:d.slice(w));if(null===P||(j=h(u(y.lastIndex+(g?0:w)),d.length))===_)w=s(d,w,m);else{if(O.push(d.slice(_,w)),O.length===D)return O;for(var R=1;R<=P.length-1;R++)if(O.push(P[R]),O.length===D)return O;w=_=j}}return O.push(d.slice(_)),O}]}),!g)},"336a":function(t,e,r){"use strict";var n=r("df61"),a=r.n(n);a.a},3835:function(t,e,r){"use strict";function n(t){if(Array.isArray(t))return t}r.d(e,"a",(function(){return i}));r("a4d3"),r("e01a"),r("d28b"),r("e260"),r("d3b7"),r("25f0"),r("3ca3"),r("ddb0");function a(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var r=[],n=!0,a=!1,o=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0)if(r.push(i.value),e&&r.length===e)break}catch(s){a=!0,o=s}finally{try{n||null==c["return"]||c["return"]()}finally{if(a)throw o}}return r}}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(t,e){return n(t)||a(t,e)||o()}},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("50c4"),i=r("1d80"),c=r("8aa5"),s=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=a(t),u=String(this);if(!i.global)return s(i,u);var l=i.unicode;i.lastIndex=0;var f,d=[],p=0;while(null!==(f=s(i,u))){var h=String(f[0]);d[p]=h,""===h&&(i.lastIndex=c(u,o(i.lastIndex),l)),p++}return 0===p?null:d}]}))},"498a":function(t,e,r){"use strict";var n=r("23e7"),a=r("58a8").trim,o=r("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},"4dfe":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ctrs"},[r("div",{staticClass:"ctr-table"},[r("div",{staticClass:"ctr-row"},[r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},a=[],o=r("f0ca"),i=r.n(o),c=r("c1df"),s=r.n(c),u=(r("6f3c"),r("1789")),l={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:u["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=s()(this.startDate).format("YYYY-MM-DD"),this.endDate=s()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return u["a"].parse(t,e)},formatDate:function(t,e){return u["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},f=l,d=(r("336a"),r("2877")),p=Object(d["a"])(f,n,a,!1,null,"15deca72",null);e["a"]=p.exports},"4fad":function(t,e,r){var n=r("23e7"),a=r("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return a(t)}})},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),i=r("50c4"),c=r("a691"),s=r("1d80"),u=r("8aa5"),l=r("14c3"),f=Math.max,d=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,y=m?"$":"$0";return[function(r,n){var a=s(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!m&&b||"string"===typeof n&&-1===n.indexOf(y)){var o=r(e,t,this,n);if(o.done)return o.value}var s=a(t),p=String(this),h="function"===typeof n;h||(n=String(n));var v=s.global;if(v){var _=s.unicode;s.lastIndex=0}var w=[];while(1){var O=l(s,p);if(null===O)break;if(w.push(O),!v)break;var j=String(O[0]);""===j&&(s.lastIndex=u(p,i(s.lastIndex),_))}for(var P="",R=0,x=0;x<w.length;x++){O=w[x];for(var k=String(O[0]),S=f(d(c(O.index),p.length),0),C=[],E=1;E<O.length;E++)C.push(g(O[E]));var M=O.groups;if(h){var T=[k].concat(C,S,p);void 0!==M&&T.push(M);var Y=String(n.apply(void 0,T))}else Y=D(k,p,S,C,M,n);S>=R&&(P+=p.slice(R,S)+Y,R=S+k.length)}return P+p.slice(R)}];function D(t,r,n,a,i,c){var s=n+t.length,u=a.length,l=v;return void 0!==i&&(i=o(i),l=h),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var f=p(l/10);return 0===f?e:f<=u?void 0===a[f-1]?o.charAt(1):a[f-1]+o.charAt(1):e}c=a[l-1]}return void 0===c?"":c}))}}))},"54b3":function(t,e,r){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),a=r("5899"),o="["+a+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(c,"")),r}};t.exports={start:s(1),end:s(2),trim:s(3)}},"6f53":function(t,e,r){var n=r("83ab"),a=r("df75"),o=r("fc6a"),i=r("d1e7").f,c=function(t){return function(e){var r,c=o(e),s=a(c),u=s.length,l=0,f=[];while(u>l)r=s[l++],n&&!i.call(c,r)||f.push(t?[r,c[r]]:c[r]);return f}};t.exports={entries:c(!0),values:c(!1)}},8298:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return p})),r.d(e,"c",(function(){return h}));r("a4d3"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("96cf");var n=r("1da1"),a=r("ade3"),o=r("d4ec"),i=r("bee2"),c=r("8051"),s=r("8d9f"),u=r("9521");function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(a["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d=["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"],p=["F","M"],h=function(){function t(){Object(o["a"])(this,t),this.date=s["a"].isoDate(),this.startDate="",this.endDate="",this.quarter="",this.programID=1,this.isPepfar=!1}return Object(i["a"])(t,[{key:"getDateIntervalPeriod",value:function(){return"".concat(s["a"].localDate(this.startDate)," - ").concat(s["a"].localDate(this.endDate))}},{key:"setStartDate",value:function(t){this.startDate=t}},{key:"setProgramID",value:function(t){this.programID=t}},{key:"setEndDate",value:function(t){this.endDate=t}},{key:"setQuarter",value:function(t){this.quarter=t}},{key:"getReport",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c["a"].get("".concat(t,"?").concat(this.buildRequestParams(e))).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))}},{key:"buildRequestParams",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e={date:this.date,program_id:this.programID};return this.startDate&&this.endDate&&(e["start_date"]=this.startDate,e["end_date"]=this.endDate),this.quarter&&(e["quarter"]=this.quarter),Object(u["b"])(f({},e,{},t))}},{key:"getMaternalStatus",value:function(t){var e={report_definition:"pepfar"},r={patient_ids:t};return c["a"].post("/vl_maternal_status".concat("?",this.buildRequestParams(e)),r).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))}},{key:"getMoHTptCohortReport",value:function(){return this.getReport("moh_tpt")}},{key:"getTbPrevReport",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getReport("/programs/1/reports/tb_prev2"));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPepfarTxMLReport",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getReport("/tx_ml"));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getPepfarTxRttReport",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getReport("/tx_rtt"));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getTptOutcomesReport",value:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",this.getReport("/programs/1/reports/tpt_outcome"));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getClientRentention",value:function(){return this.getReport("/programs/1/reports/retention")}},{key:"getViralLoadResults",value:function(t){return this.getReport("/programs/".concat(this.programID,"/reports/high_vl_patients"),{range:t})}},{key:"getOtherOutcome",value:function(t){return this.getReport("patient_outcome_list",{outcome:t})}},{key:"getSamplesDrawnReport",value:function(){return this.getReport("samples_drawn")}},{key:"getLabResultsReport",value:function(){return this.getReport("lab_test_results")}}]),t}()},"87a0":function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));r("99af"),r("4de4"),r("a15b"),r("d81d"),r("b0c0"),r("d3b7"),r("3ca3"),r("ddb0"),r("2b3d");var n=r("1157"),a=r("c1df"),o=r.n(a),i=r("9521");function c(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=t.filter((function(t){return!1!==t.exportable})).map((function(t){return t.label})).join(",");return a+="\n",a+=e.map((function(e){return t.filter((function(t){return!1!==t.exportable})).map((function(t){return Array.isArray(e[t.name])?e[t.name].length:Object(i["c"])(e[t.name])})).join(",")})).join("\n"),a+="\n"+"Date Created:  ".concat(o()().format("YYYY-MM-DD:h:m:s")),Object(n["isEmptyObject"])(r)||(a+="\n"+"Quarter: ".concat(r.startDate," to ").concat(r.endDate)),a+="\n"+"e-Mastercard Version : ".concat(sessionStorage.EMCVersion),a+="\n"+"API Version ".concat(sessionStorage.APIVersion),a+="\n"+"Site UUID: ".concat(sessionStorage.siteUUID),a}function s(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=c(t,e,n),o=new Blob([a],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(o,r);else{var i=document.createElement("a");i.href=window.URL.createObjectURL(o),i.setAttribute("download","".concat(sessionStorage.location_name," ").concat(r,".csv")),document.body.appendChild(i),i.click(),document.body.removeChild(i)}}},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8ce6":function(t,e,r){"use strict";var n=r("54b3"),a=r.n(n);a.a},"8d9f":function(t,e,r){"use strict";var n=r("c1df"),a=r.n(n);e["a"]=function(){var t="YYYY-MM-DD",e="DD/MMM/YYYY";function r(t){var e=t.getMonth(),r=t.getFullYear();return e<3?["".concat(r,"-01-01"),"".concat(r,"-03-31")]:e<6?["".concat(r,"-04-01"),"".concat(r,"-06-30")]:e<9?["".concat(r,"-07-01"),"".concat(r,"-09-30")]:["".concat(r,"-10-01"),"".concat(r,"-12-31")]}function n(t){var e=t.getMonth(),r=t.getFullYear();return e<3?"Q1-".concat(r):e<6?"Q2-".concat(r):e<9?"Q3-".concat(r):"Q4-".concat(r)}function o(e){return a()(e).format(t)}function i(t){return a()(t).format(e)}return{ISO_FORMAT:t,LOCAL_FORMAT:e,dateQuarter:r,dateQuarterStr:n,isoDate:o,localDate:i}}()},9521:function(t,e,r){"use strict";r.d(e,"c",(function(){return a})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return i}));r("99af"),r("4fad"),r("ac1f"),r("466d"),r("5319"),r("498a");var n=r("3835");function a(t){try{return t.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(e){return t}}function o(t){return t.match(/fb|fbf|fnp/i)?t.toUpperCase():(t=t.toLowerCase(),"m"===t||"male"===t?"Male":"Female")}function i(t){for(var e="",r=0,a=Object.entries(t);r<a.length;r++){var o=Object(n["a"])(a[r],2),i=o[0],c=o[1];e+="".concat(i,"=").concat(c,"&")}return e}},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),o=r("fc6a"),i=r("a640"),c=[].join,s=a!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},a50c:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),r("vue-bootstrap4-table",{attrs:{rows:t.rows,columns:t.columns,config:t.config,"show-loader":t.reportLoading,actions:t.actions},on:{"on-download":t.onDownload},scopedSlots:t._u([t._l(t.slots,(function(e){return{key:e,fn:function(n){return[r("span",{key:e,class:n.cell_value.length>0?"drillable":"",on:{click:function(e){return t.drillDown(n.cell_value)}}},[t._v(" "+t._s(n.cell_value.length)+" ")])]}}}))],null,!0)},[r("template",{slot:"sort-asc-icon"},[t._v("↑")]),r("template",{slot:"sort-desc-icon"},[t._v("↓")]),r("template",{slot:"no-sort-icon"},[t._v("↑↓")])],2)],1)],1),r("b-modal",{attrs:{id:"modal-1",title:"Drill Down Clients",size:"xl"}},[r("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:t.drillClients,fields:t.columns,"per-page":t.perPage,"current-page":t.currentPage}}),r("b-pagination",{attrs:{"per-page":t.perPage,"total-rows":t.rowCount,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),r("p",{staticClass:"mt-3"},[t._v("Current Page: "+t._s(t.currentPage))])],1)],1)},a=[],o=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("1276"),r("159b"),r("ade3")),i=(r("96cf"),r("1da1")),c=r("8051"),s=r("7c08"),u=r("4dfe"),l=r("ebd8"),f=r("12f9"),d=r("2f62"),p=r("87a0"),h=r("9521"),v=r("8298");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={name:"TPTOutcomes",components:{"top-nav":l["a"],"side-bar":s["a"],sdPicker:u["a"],VueBootstrap4Table:f["a"]},methods:{fetchDates:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=new v["c"],n.setStartDate(t[0]),n.setEndDate(t[1]),e.period=n.getDateIntervalPeriod(),e.config.card_title+=e.period,e.reportLoading=!0,r.next=8,n.getTptOutcomesReport();case 8:a=r.sent,e.reportLoading=!1,e.rows=a.sort((function(t,e){return t.tpt_type>e.tpt_type?1:0})).map((function(t,e){return m({number:e},t)}));case 11:case"end":return r.stop()}}),r)})))()},drillDown:function(t){var e=this;t.length>0&&(this.$bvModal.show("modal-1"),this.drillClients=[],t.forEach(function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(r){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].get("patients/".concat(r),{},{});case 2:n=t.sent,200===n.status&&n.json().then((function(t){e.drillClients.push(e.parsePatient(t))}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()))},parsePatient:function(t){var e=t.person.birthdate,r=t.person.gender,n="";try{var a=t.person.addresses[0].city_village}catch(c){a=""}try{for(var o=0;o<t.patient_identifiers.length;o++)4==t.patient_identifiers[o]["identifier_type"]&&(n=t.patient_identifiers[o]["identifier"])}catch(c){console.log(c)}var i={};return i.dob=e,i.arv_number=n,i.gender=Object(h["a"])(r),i.current_village=a,i},onDownload:function(){Object(p["a"])(this.columns,this.rows,this.config.card_title,{startDate:this.period.split("-")[0],endDate:this.period.split("-")[1]})}},data:function(){return{drillClients:[],perPage:10,currentPage:1,period:null,reportLoading:!1,slots:["started_tpt","completed_tpt","not_completed_tpt","died","stopped","defaulted","transfer_out","confirmed_tb","pregnant"],rows:[],columns:[{label:"#",name:"number",sort:!0},{label:"Age Group",name:"age_group",sort:!0},{label:"TPT Type",name:"tpt_type",sort:!0},{label:"Started TPT",name:"started_tpt",slot_name:"started_tpt"},{label:"Completed TPT",name:"completed_tpt",slot_name:"completed_tpt"},{label:"Not completed TPT",name:"not_completed_tpt",slot_name:"not_completed_tpt"},{label:"Died",name:"died",slot_name:"died"},{label:"Defaulted",name:"defaulted",slot_name:"defaulted"},{label:"Stopped ART",name:"stopped",slot_name:"stopped"},{label:"Transfered Out",name:"transfer_out",slot_name:"transfer_out"},{label:"Confirmed TB",name:"confirmed_tb",slot_name:"confirmed_tb"},{label:"Pregnant",name:"pregnant",slot_name:"pregnant"}],config:{card_title:"TPT Outcomes Report ",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}]}},computed:m({},Object(d["c"])(["location"]),{rowCount:function(){return this.drillClients.length}})},y=b,D=(r("8ce6"),r("2877")),_=Object(D["a"])(y,n,a,!1,null,"612b88fa",null);e["default"]=_.exports},bee2:function(t,e,r){"use strict";function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function a(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}r.d(e,"a",(function(){return a}))},c8d2:function(t,e,r){var n=r("d039"),a=r("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!a[t]()||o[t]()!=o||a[t].name!==t}))}},d4ec:function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.d(e,"a",(function(){return n}))},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),i=r("ae40"),c=o("map"),s=i("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},df61:function(t,e,r){}}]);
//# sourceMappingURL=chunk-7eede1b0.7ebd539d.js.map