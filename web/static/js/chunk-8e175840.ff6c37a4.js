(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8e175840"],{"336a":function(e,t,r){"use strict";var a=r("df61"),n=r.n(a);n.a},"498a":function(e,t,r){"use strict";var a=r("23e7"),n=r("58a8").trim,o=r("c8d2");a({target:"String",proto:!0,forced:o("trim")},{trim:function(){return n(this)}})},"4dfe":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ctrs"},[r("div",{staticClass:"ctr-table"},[r("div",{staticClass:"ctr-row"},[r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("button",{staticClass:"btn btn-success",on:{click:e.submitDates}},[e._v("Submit")])])])])])},n=[],o=r("f0ca"),s=r.n(o),i=r("c1df"),c=r.n(i),l=(r("6f3c"),r("1789")),u={components:{DatePick:s.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(e,t){return l["a"].parse(e,t)},formatDate:function(e,t){return l["a"].format(e,t)}},mounted:function(){var e=this;setTimeout((function(){return e.initDates()}),300)}},d=u,f=(r("336a"),r("2877")),p=Object(f["a"])(d,a,n,!1,null,"15deca72",null);t["a"]=p.exports},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),o=r("7b0b"),s=r("50c4"),i=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,f=Math.min,p=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,D=h?"$":"$0";return[function(r,a){var n=c(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!h&&g||"string"===typeof a&&-1===a.indexOf(D)){var o=r(t,e,this,a);if(o.done)return o.value}var c=n(e),p=String(this),v="function"===typeof a;v||(a=String(a));var b=c.global;if(b){var w=c.unicode;c.lastIndex=0}var y=[];while(1){var C=u(c,p);if(null===C)break;if(y.push(C),!b)break;var S=String(C[0]);""===S&&(c.lastIndex=l(p,s(c.lastIndex),w))}for(var k="",x=0,O=0;O<y.length;O++){C=y[O];for(var P=String(C[0]),j=d(f(i(C.index),p.length),0),E=[],M=1;M<C.length;M++)E.push(m(C[M]));var Y=C.groups;if(v){var A=[P].concat(E,j,p);void 0!==Y&&A.push(Y);var R=String(a.apply(void 0,A))}else R=_(P,p,j,E,Y,a);j>=x&&(k+=p.slice(x,j)+R,x=j+P.length)}return k+p.slice(x)}];function _(e,r,a,n,s,i){var c=a+e.length,l=n.length,u=b;return void 0!==s&&(s=o(s),u=v),t.call(i,u,(function(t,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(c);case"<":i=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var d=p(u/10);return 0===d?t:d<=l?void 0===n[d-1]?o.charAt(1):n[d-1]+o.charAt(1):t}i=n[u-1]}return void 0===i?"":i}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var a=r("1d80"),n=r("5899"),o="["+n+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(e){return function(t){var r=String(a(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},"72e1":function(e,t,r){},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"8e71":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-overlay",{attrs:{show:e.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:e._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[e.reportSelected?e._e():r("h1",[e._v("No Report Selected")]),e.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):e._e()],1)]},proxy:!0}])},[e._t("default")],2)},n=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},s=o,i=r("2877"),c=Object(i["a"])(s,a,n,!1,null,null,null);t["a"]=c.exports},9521:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}));r("ac1f"),r("5319"),r("498a");function a(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function n(e){return e=e.toLowerCase(),"m"===e||"male"===e?"Male":"Female"}},bfd0:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("sdPicker",{attrs:{onSubmit:e.fetchDates}})],1)]),r("vue-bootstrap4-table",{attrs:{rows:e.rows,columns:e.columns,config:e.config,"show-loader":e.reportLoading,actions:e.actions},on:{"on-download":e.onDownload},scopedSlots:e._u([e._l(e.slots,(function(t){return{key:t,fn:function(a){return[r("span",{key:t,class:a.cell_value.length>0?"drillable":"",on:{click:function(t){return e.fetchDrillDown(a.cell_value)}}},[e._v(e._s(a.cell_value.length>0?a.cell_value.length:0))])]}}}))],null,!0)},[r("template",{slot:"sort-asc-icon"},[e._v("↑")]),r("template",{slot:"sort-desc-icon"},[e._v("↓")]),r("template",{slot:"no-sort-icon"},[e._v("↑↓")])],2)],1)],1),r("b-modal",{attrs:{id:"modal-1",title:"Drill Down Clients"}},[r("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:e.drillClients,fields:e.drillColumns,"per-page":e.perPage,"current-page":e.currentPage}}),r("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.rowCount,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("p",{staticClass:"mt-3"},[e._v("Current Page: "+e._s(e.currentPage))])],1)],1)},n=[],o=(r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),s=r("2909"),i=(r("96cf"),r("1da1")),c=r("8051"),l=r("8e71"),u=r("7c08"),d=r("4dfe"),f=r("12f9"),p=r("ebd8"),v=r("c1df"),b=r.n(v),m=r("2f62"),h=r("9521");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _={name:"VLCoverage",components:{ReportOverlay:l["a"],"top-nav":p["a"],"side-bar":u["a"],sdPicker:d["a"],VueBootstrap4Table:f["a"]},methods:{fetchDates:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.startDate=e[0],t.endDate=e[1],t.reportTitle="PEPFAR "+sessionStorage.location_name+" Viral load coverage ",t.reportTitle+=b()(e[0]).format("DDMMMYYYY"),t.reportTitle+=" - "+b()(e[1]).format("DDMMMYYYY"),t.reportLoading=!0,a="programs/1/reports/viral_load_coverage?start_date="+e[0],a+="&end_date="+e[1]+"&rebuild_outcomes=true&application=emastercard",r.next=10,c["a"].get(a,{},{});case 10:return n=r.sent,r.next=13,n.json();case 13:o=r.sent,t.loadData(o);case 15:case"end":return r.stop()}}),r)})))()},loadData:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a,n,o,i,c,l,u,d,f,p,v,b,m;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:a=1,n=["F","M"],o=[],i=0,c=n;case 4:if(!(i<c.length)){r.next=41;break}l=c[i],u=!0,d=!1,f=void 0,r.prev=9,p=t.ageGroups[Symbol.iterator]();case 11:if(u=(v=p.next()).done){r.next=24;break}b=v.value,r.t0=regeneratorRuntime.keys(e);case 14:if((r.t1=r.t0()).done){r.next=21;break}if(m=r.t1.value,b==m){r.next=18;break}return r.abrupt("continue",14);case 18:o.push({number:a++,age_group:b,gender:Object(h["a"])(l),due_for_vl:t.filterClients(e[m]["due_for_vl"],l),drawn:t.filterClients([].concat(Object(s["a"])(e[m]["drawn"]["routine"]),Object(s["a"])(e[m]["drawn"]["targeted"])),l),high_vl:t.filterClients([].concat(Object(s["a"])(e[m]["high_vl"]["routine"]),Object(s["a"])(e[m]["high_vl"]["targeted"])),l),low_vl:t.filterClients([].concat(Object(s["a"])(e[m]["low_vl"]["routine"]),Object(s["a"])(e[m]["low_vl"]["targeted"])),l)}),r.next=14;break;case 21:u=!0,r.next=11;break;case 24:r.next=30;break;case 26:r.prev=26,r.t2=r["catch"](9),d=!0,f=r.t2;case 30:r.prev=30,r.prev=31,u||null==p.return||p.return();case 33:if(r.prev=33,!d){r.next=36;break}throw f;case 36:return r.finish(33);case 37:return r.finish(30);case 38:i++,r.next=4;break;case 41:t.rows=o,t.reportLoading=!1;case 43:case"end":return r.stop()}}),r,null,[[9,26,30,38],[31,,33,37]])})))()},filterClients:function(e,t){return e?e.filter((function(e){return e.gender===t})):[]},fetchDrillDown:function(e){e.length>0&&(this.$bvModal.show("modal-1"),this.drillClients=e)},onDownload:function(){var e=null;this.columns.forEach((function(t){e+='"'.concat(t.label,'",')})),e=e.replace("null",""),this.rows.forEach((function(t){e+="\n",Object.keys(t).forEach((function(r){var a=t[r];Array.isArray(t[r])&&(a=t[r].length),e+='"'.concat(a,'",')}))})),e+="\n",e+="Date Created:  ".concat(b()().format("YYYY-MM-DD:h:m:s"),"\n                          Quarter: ").concat(this.startDate," to ").concat(this.endDate,"\n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion," \n                          Site UUID: ").concat(sessionStorage.siteUUID," \n                          API Version ").concat(sessionStorage.APIVersion);for(var t=0;t<34;t++)e+=",";var r=new Blob([e],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(r,exportFilename);else{var a=document.createElement("a");a.href=window.URL.createObjectURL(r),a.setAttribute("download","".concat(this.reportTitle,".csv")),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},data:function(){return{drillClients:[],perPage:10,currentPage:1,drillColumns:[{key:"arv_number",label:"ARV Number"},{key:"birthdate",label:"DOB"},{key:"gender",label:"Gender"}],startDate:null,endDate:null,reportLoading:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,reportTitle:null,ageGroups:["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"],showLoader:!1,slots:["due_for_vl","drawn","low_vl","high_vl"],rows:[],columns:[{label:"#",name:"number",sort:!0},{label:"Age Group",name:"age_group"},{label:"Gender",name:"gender"},{label:"Due for VL",name:"due_for_vl",slot_name:"due_for_vl"},{label:"Sample drawn",name:"drawn",slot_name:"drawn"},{label:"High VL (>=1000 copies)",name:"high_vl",slot_name:"high_vl"},{label:"Low VL (<1000 copies)",name:"low_vl",slot_name:"low_vl"}],config:{card_title:"Viral load coverage report",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}]}},computed:D({},Object(m["c"])(["location"]),{rowCount:function(){return this.drillClients.length}})},w=_,y=(r("c6ba"),r("2877")),C=Object(y["a"])(w,a,n,!1,null,"47b1f550",null);t["default"]=C.exports},c6ba:function(e,t,r){"use strict";var a=r("72e1"),n=r.n(a);n.a},c8d2:function(e,t,r){var a=r("d039"),n=r("5899"),o="​᠎";e.exports=function(e){return a((function(){return!!n[e]()||o[e]()!=o||n[e].name!==e}))}},df61:function(e,t,r){}}]);
//# sourceMappingURL=chunk-8e175840.ff6c37a4.js.map