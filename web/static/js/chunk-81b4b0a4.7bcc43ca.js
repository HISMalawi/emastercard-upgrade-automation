(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-81b4b0a4"],{"336a":function(t,e,r){"use strict";var n=r("df61"),a=r.n(n);a.a},"4d3c":function(t,e,r){},"4dfe":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ctrs"},[r("div",{staticClass:"ctr-table"},[r("div",{staticClass:"ctr-row"},[r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},a=[],o=r("f0ca"),s=r.n(o),i=r("c1df"),c=r.n(i),l=(r("6f3c"),r("1789")),u={components:{DatePick:s.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return l["a"].parse(t,e)},formatDate:function(t,e){return l["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},d=u,p=(r("336a"),r("2877")),f=Object(p["a"])(d,n,a,!1,null,"15deca72",null);e["a"]=f.exports},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),s=r("50c4"),i=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,p=Math.min,f=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g,_=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,g=v?"$":"$0";return[function(r,n){var a=c(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!v&&b||"string"===typeof n&&-1===n.indexOf(g)){var o=r(e,t,this,n);if(o.done)return o.value}var c=a(t),f=String(this),h="function"===typeof n;h||(n=String(n));var m=c.global;if(m){var D=c.unicode;c.lastIndex=0}var w=[];while(1){var Y=u(c,f);if(null===Y)break;if(w.push(Y),!m)break;var M=String(Y[0]);""===M&&(c.lastIndex=l(f,s(c.lastIndex),D))}for(var O="",S=0,C=0;C<w.length;C++){Y=w[C];for(var P=String(Y[0]),k=d(p(i(Y.index),f.length),0),x=[],E=1;E<Y.length;E++)x.push(_(Y[E]));var R=Y.groups;if(h){var j=[P].concat(x,k,f);void 0!==R&&j.push(R);var A=String(n.apply(void 0,j))}else A=y(P,f,k,x,R,n);k>=S&&(O+=f.slice(S,k)+A,S=k+P.length)}return O+f.slice(S)}];function y(t,r,n,a,s,i){var c=n+t.length,l=a.length,u=m;return void 0!==s&&(s=o(s),u=h),e.call(i,u,(function(e,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":i=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>l){var d=f(u/10);return 0===d?e:d<=l?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):e}i=a[u-1]}return void 0===i?"":i}))}}))},"6deb":function(t,e,r){"use strict";var n=r("4d3c"),a=r.n(n);a.a},"7a99":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),r("report-overlay",{attrs:{reportLoading:t.reportLoading}},[r("vue-bootstrap4-table",{attrs:{rows:t.rows,columns:t.columns,config:t.config,"show-loader":t.reportLoading,actions:t.actions},on:{"on-download":t.onDownload},scopedSlots:t._u([t._l(t.slots,(function(e){return{key:e,fn:function(n){return[r("span",{key:e,class:n.cell_value.length>0?"drillable":"",on:{click:function(e){return t.fetchDrillDown(n.cell_value)}}},[t._v(t._s(n.cell_value.length>0?n.cell_value.length:0))])]}}}))],null,!0)})],1)],1)],1),r("b-modal",{attrs:{id:"modal-1",title:"Drill Down Clients"}},[r("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:t.drillClients,fields:t.columns,"per-page":t.perPage,"current-page":t.currentPage}}),r("b-pagination",{attrs:{"per-page":t.perPage,"total-rows":t.rowCount,"aria-controls":"my-table"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}}),r("p",{staticClass:"mt-3"},[t._v("Current Page: "+t._s(t.currentPage))])],1)],1)},a=[],o=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),s=(r("96cf"),r("1da1")),i=r("8051"),c=r("8e71"),l=r("7c08"),u=r("4dfe"),d=(r("8d9f"),r("ebd8")),p=r("12f9"),f=r("c1df"),h=r.n(f),m=r("2f62");function _(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?_(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var b={name:"txML",components:{ReportOverlay:c["a"],"top-nav":d["a"],"side-bar":l["a"],sdPicker:u["a"],VueBootstrap4Table:p["a"]},methods:{redirect:function(t){this.$router.push(t)},fetchDates:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.rows=[],r.prev=1,e.startDate=t[0],e.endDate=t[1],e.reportTitle="PEPFAR "+sessionStorage.location_name+" TX RTT report ",e.reportTitle+=h()(t[0]).format("DDMMMYYYY"),e.reportTitle+=" - "+h()(t[1]).format("DDMMMYYYY"),e.reportLoading=!0,r.next=10,e.loadXLdata();case 10:r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](1),console.error(r.t0),e.router.push({name:"error",params:{message:r.t0.message}});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},loadXLdata:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="tx_rtt?date="+h()().format("YYYY-MM-DD"),e+="&start_date="+this.startDate,e+="&end_date="+this.endDate,e+="&program_id=1",t.next=6,i["a"].get(e);case 6:if(r=t.sent,200!==r.status){t.next=13;break}return t.t0=this,t.next=11,r.json();case 11:t.t1=t.sent,t.t0.loadGroupData.call(t.t0,t.t1);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),fetchDrillDown:function(t){var e=this;t.length>0&&(this.$bvModal.show("modal-1"),this.drillClients=[],t.forEach((function(t){e.getClient(t)})))},getClient:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(e){var r,n,a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="patients/"+e,t.next=3,i["a"].get(r,{},{});case 3:n=t.sent,200===n.status&&n.json().then((function(t){return a.drillClients.push(a.parsePatient(t))}));case 5:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),parsePatient:function(t){var e=t.person.birthdate,r=t.person.gender,n="";t.person.names[0].given_name,t.person.names[0].family_name,t.patient_identifiers.filter((function(t){return 4===t.identifier_type?t.identifier:""}));try{var a=t.person.addresses[0].city_village;t.person.addresses[0].address2,t.person.person_attributes[1].value}catch(i){a=""}try{for(var o=0;o<t.patient_identifiers.length;o++)4==t.patient_identifiers[o]["identifier_type"]&&(n=t.patient_identifiers[o]["identifier"])}catch(i){console.log(i)}var s={};return s.dob=e,s.arv_number=n,s.gender=r,s.current_village=a,s},hasRow:function(t,e){return this.rows.filter((function(e){e.age_group===t&&e.gender})).length>0},sortDataByMonth:function(t,e){return t.filter((function(t){return e(t.months)})).map((function(t){return t.patient_id}))},loadGroupData:function(t){for(var e=this,r=1,n=["F","M"],a=this.ageGroups,o=0;o<n.length;o++)for(var s=0;s<a.length;s++){var i=a[s];if(t.hasOwnProperty(i)){var c=t[i],l=n[o];c.hasOwnProperty(l)&&!this.hasRow(i,l)?function(){var t=c[l],n=function(r){return e.sortDataByMonth(t,r)};e.rows.push({number:r++,age_group:i,gender:l,return_less_than_3_mo:n((function(t){return t<3})),return_by_3_to_5_mo:n((function(t){return t>=3&&t<=5})),return_6_plus_mo:n((function(t){return t>=6}))}),!0}():this.rows.push({number:r++,age_group:a[s],gender:n[o],return_less_than_3_mo:0,return_by_3_to_5_mo:0,return_6_plus_mo:0})}else this.rows.push({number:r++,age_group:a[s],gender:n[o],return_less_than_3_mo:0,return_by_3_to_5_mo:0,return_6_plus_mo:0})}this.reportLoading=!1},onDownload:function(){var t=null;this.columns.forEach((function(e){t+='"'.concat(e.label,'",')})),t=t.replace("null",""),this.rows.forEach((function(e){t+="\n",Object.keys(e).forEach((function(r){var n=e[r];Array.isArray(e[r])&&(n=e[r].length),t+='"'.concat(n,'",')}))})),t+="\n",t+="Date Created:  ".concat(h()().format("YYYY-MM-DD:h:m:s")," \n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion," \n                          Site UUID: ").concat(sessionStorage.siteUUID," \n                          API Version ").concat(sessionStorage.APIVersion);for(var e=0;e<34;e++)t+=",";var r=new Blob([t],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(r,exportFilename);else{var n=document.createElement("a");n.href=window.URL.createObjectURL(r),n.setAttribute("download","".concat(this.reportTitle,".csv")),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},data:function(){var t;return t={drillClients:[],perPage:15,currentPage:1,columns:[{key:"arv_number",label:"ARV Number"},{key:"dob",label:"DOB"},{key:"gender",label:"Gender"},{key:"current_village",label:"Village"}],startDate:null,endDate:null,reportLoading:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,reportTitle:null,ageGroups:["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"],showLoader:!1,slots:["return_less_than_3_mo","return_by_3_to_5_mo","return_6_plus_mo"],rows:[]},Object(o["a"])(t,"columns",[{label:"#",name:"number",sort:!0},{label:"Age Group",name:"age_group",sort:!0},{label:"Gender",name:"gender",sort:!0},{label:"Returned <3 mo",name:"return_less_than_3_mo",slot_name:"return_less_than_3_mo",sort:!0},{label:"Returned 3-5 mo",name:"return_by_3_to_5_mo",slot_name:"return_by_3_to_5_mo",sort:!0},{label:"Returned 6+ mo",name:"return_6_plus_mo",slot_name:"return_6_plus_mo",sort:!0}]),Object(o["a"])(t,"config",{card_title:"TX RTT: Clients that have their clinical dispensation visit falling in the reporting period and there is a difference of 30 or more days between their visit date and their previous appointment date / runout date",show_refresh_button:!1,show_reset_button:!1}),Object(o["a"])(t,"actions",[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}]),t},computed:v({},Object(m["c"])(["location"]),{rowCount:function(){return this.drillClients.length}}),mounted:function(){}},g=b,y=(r("6deb"),r("2877")),D=Object(y["a"])(g,n,a,!1,null,"42dc91d4",null);e["default"]=D.exports},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8d9f":function(t,e,r){"use strict";var n=r("c1df"),a=r.n(n);e["a"]=function(){var t="YYYY-MM-DD",e="DD/MM/YYYY";function r(t){var e=t.getMonth(),r=t.getFullYear();return e<3?["".concat(r,"-01-01"),"".concat(r,"-03-31")]:e<6?["".concat(r,"-04-01"),"".concat(r,"-06-30")]:e<9?["".concat(r,"-07-01"),"".concat(r,"-09-30")]:["".concat(r,"-10-01"),"".concat(r,"-12-31")]}function n(t){var e=t.getMonth(),r=t.getFullYear();return e<3?"Q1-".concat(r):e<6?"Q2-".concat(r):e<9?"Q3-".concat(r):"Q4-".concat(r)}function o(e){return a()(e).format(t)}function s(t){return a()(t).format(e)}return{ISO_FORMAT:t,LOCAL_FORMAT:e,dateQuarter:r,dateQuarterStr:n,isoDate:o,localDate:s}}()},"8e71":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-overlay",{attrs:{show:t.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[t.reportSelected?t._e():r("h1",[t._v("No Report Selected")]),t.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):t._e()],1)]},proxy:!0}])},[t._t("default")],2)},a=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},s=o,i=r("2877"),c=Object(i["a"])(s,n,a,!1,null,null,null);e["a"]=c.exports},d81d:function(t,e,r){"use strict";var n=r("23e7"),a=r("b727").map,o=r("1dde"),s=r("ae40"),i=o("map"),c=s("map");n({target:"Array",proto:!0,forced:!i||!c},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},df61:function(t,e,r){}}]);
//# sourceMappingURL=chunk-81b4b0a4.7bcc43ca.js.map