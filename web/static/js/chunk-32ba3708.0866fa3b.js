(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32ba3708"],{"336a":function(t,e,r){"use strict";var a=r("df61"),n=r.n(a);n.a},"4dfe":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ctrs"},[r("div",{staticClass:"ctr-table"},[r("div",{staticClass:"ctr-row"},[r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},n=[],o=r("f0ca"),i=r.n(o),s=r("c1df"),c=r.n(s),l=(r("6f3c"),r("1789")),u={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return l["a"].parse(t,e)},formatDate:function(t,e){return l["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},d=u,f=(r("336a"),r("2877")),p=Object(f["a"])(d,a,n,!1,null,"15deca72",null);e["a"]=p.exports},5319:function(t,e,r){"use strict";var a=r("d784"),n=r("825a"),o=r("7b0b"),i=r("50c4"),s=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),d=Math.max,f=Math.min,p=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,h=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,r,a){var b=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,D=a.REPLACE_KEEPS_$0,g=b?"$":"$0";return[function(r,a){var n=c(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,n,a):e.call(String(n),r,a)},function(t,a){if(!b&&D||"string"===typeof a&&-1===a.indexOf(g)){var o=r(e,t,this,a);if(o.done)return o.value}var c=n(t),p=String(this),m="function"===typeof a;m||(a=String(a));var v=c.global;if(v){var w=c.unicode;c.lastIndex=0}var y=[];while(1){var Y=u(c,p);if(null===Y)break;if(y.push(Y),!v)break;var M=String(Y[0]);""===M&&(c.lastIndex=l(p,i(c.lastIndex),w))}for(var S="",C=0,O=0;O<y.length;O++){Y=y[O];for(var A=String(Y[0]),E=d(f(s(Y.index),p.length),0),P=[],R=1;R<Y.length;R++)P.push(h(Y[R]));var k=Y.groups;if(m){var j=[A].concat(P,E,p);void 0!==k&&j.push(k);var x=String(a.apply(void 0,j))}else x=_(A,p,E,P,k,a);E>=C&&(S+=p.slice(C,E)+x,C=E+A.length)}return S+p.slice(C)}];function _(t,r,a,n,i,s){var c=a+t.length,l=n.length,u=v;return void 0!==i&&(i=o(i),u=m),e.call(s,u,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,a);case"'":return r.slice(c);case"<":s=i[o.slice(1,-1)];break;default:var u=+o;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===n[d-1]?o.charAt(1):n[d-1]+o.charAt(1):e}s=n[u-1]}return void 0===s?"":s}))}}))},7670:function(t,e,r){"use strict";var a=r("fd21"),n=r.n(a);n.a},"8aa5":function(t,e,r){"use strict";var a=r("6547").charAt;t.exports=function(t,e,r){return e+(r?a(t,e).length:1)}},"8d9f":function(t,e,r){"use strict";var a=r("c1df"),n=r.n(a);e["a"]=function(){var t="YYYY-MM-DD",e="DD/MM/YYYY";function r(t){var e=t.getMonth(),r=t.getFullYear();return e<3?["".concat(r,"-01-01"),"".concat(r,"-03-31")]:e<6?["".concat(r,"-04-01"),"".concat(r,"-06-30")]:e<9?["".concat(r,"-07-01"),"".concat(r,"-09-30")]:["".concat(r,"-10-01"),"".concat(r,"-12-31")]}function a(t){var e=t.getMonth(),r=t.getFullYear();return e<3?"Q1-".concat(r):e<6?"Q2-".concat(r):e<9?"Q3-".concat(r):"Q4-".concat(r)}function o(e){return n()(e).format(t)}function i(t){return n()(t).format(e)}return{ISO_FORMAT:t,LOCAL_FORMAT:e,dateQuarter:r,dateQuarterStr:a,isoDate:o,localDate:i}}()},"8e71":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-overlay",{attrs:{show:t.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[t.reportSelected?t._e():r("h1",[t._v("No Report Selected")]),t.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):t._e()],1)]},proxy:!0}])},[t._t("default")],2)},n=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},i=o,s=r("2877"),c=Object(s["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports},d81d:function(t,e,r){"use strict";var a=r("23e7"),n=r("b727").map,o=r("1dde"),i=r("ae40"),s=o("map"),c=i("map");a({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}})},df61:function(t,e,r){},f4f2:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),r("report-overlay",{attrs:{reportLoading:t.reportLoading}},[r("vue-bootstrap4-table",{attrs:{rows:t.rows,columns:t.columns,config:t.config,"show-loader":t.showLoader,actions:t.actions},on:{redirect:t.onRedirect,"on-download":t.onDownload},scopedSlots:t._u([{key:"patient_id",fn:function(e){return[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(r){return t.redirect("/patient/mastercard/"+e.cell_value)}}},[t._v(" select ")])]}}])}),r("tfoot",[r("tr",[r("td",[t._v(" Date Created: "+t._s(t.moment().format("YYYY-MM-DD:h:m:s"))+" e-Mastercard Version : "+t._s(t.EMCVersion)+" API Version "+t._s(t.APIVersion)+" ")])])])],1)],1)],1)],1)},n=[],o=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),i=(r("96cf"),r("1da1")),s=r("8051"),c=r("8e71"),l=r("7c08"),u=r("4dfe"),d=(r("8d9f"),r("ebd8")),f=r("12f9"),p=r("c1df"),m=r.n(p),v=r("2f62");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var D={name:"txML",components:{ReportOverlay:c["a"],"top-nav":d["a"],"side-bar":l["a"],sdPicker:u["a"],VueBootstrap4Table:f["a"]},methods:{redirect:function(t){this.$router.push(t)},onRedirect:function(t){this.$router.push(t.event_payload.url)},initRows:function(){this.rows=[]},fetchDates:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:e.reportLoading=!0,e.initRows(),e.startDate=t[0],e.endDate=t[1],e.reportTitle="PEPFAR "+sessionStorage.location_name+" Clients Due for Viral Load ",e.reportTitle+=m()(t[0]).format("DDMMMYYYY"),e.reportTitle+=" - "+m()(t[1]).format("DDMMMYYYY"),e.reportLoading=!0,a="clients_due_vl?date="+m()().format("YYYY-MM-DD"),a+="&start_date="+e.startDate,a+="&end_date="+e.endDate,a+="&program_id=1",e.loadData(a);case 13:case"end":return r.stop()}}),r)})))()},loadData:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,s["a"].get(t,{},{}).then((function(t){t.json().then((function(t){if(console.log(t),0===Object.keys(t).length)return e.reportLoading=!1;e.buildReportData(t)}))}));case 2:case"end":return r.stop()}}),r)})))()},buildReportData:function(t){var e=0;this.rows=t.map((function(t){e+=1;var r=t.arv_number,a=t.given_name,n=t.family_name,o=t.gender,i=t.birthdate,s=t.appointment_date,c=t.months_on_art,l=t.mile_stone,u=t.patient_id;return{rowCount:e,arv_number:r,given_name:a,family_name:n,gender:o,birthdate:i,appointment_date:s,months_on_art:c,mile_stone:l,patient_id:u}})),this.reportLoading=!1},onDownload:function(){var t=null;this.columns.forEach((function(e){t+='"'.concat(e.label,'",')})),t=t.replace("null",""),this.rows.forEach((function(e){t+="\n",Object.keys(e).forEach((function(r){var a=e[r];Array.isArray(e[r])&&(a=e[r].length),t+='"'.concat(a,'",')}))})),t+="\n",t+="Date Created:  ".concat(m()().format("YYYY-MM-DD:h:m:s"),"\n                          Quarter: ").concat(this.startDate," to ").concat(this.endDate,"\n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion,"\n                          Site UUID: ").concat(sessionStorage.siteUUID," \n                          API Version ").concat(sessionStorage.APIVersion);for(var e=0;e<34;e++)t+=",";var r=new Blob([t],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(r,exportFilename);else{var a=document.createElement("a");a.href=window.URL.createObjectURL(r),a.setAttribute("download","".concat(this.reportTitle,".csv")),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},data:function(){return{drillClients:[],perPage:10,currentPage:1,rows:[],columns:[{label:"#",name:"rowCount",slot_name:"rowCount",sort:!0},{label:"ARV#",name:"arv_number",slot_name:"arv_number",sort:!1},{label:"First Name",name:"given_name",sort:!1},{label:"Last Name",name:"family_name",sort:!1},{label:"Gender",name:"gender",sort:!1},{label:"Birthdate",name:"birthdate",sort:!1},{label:"App Date",name:"appointment_date",sort:!1},{label:"Months on ART",name:"months_on_art",sort:!1},{label:"Milestone",name:"mile_stone",sort:!1},{label:"Action",name:"patient_id",slot_name:"patient_id"}],config:{card_title:"Clients Due for Viral Load",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}],startDate:null,endDate:null,reportLoading:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,reportTitle:null,showLoader:!1}},computed:b({},Object(v["c"])(["location"]),{rowCount:function(){return this.drillClients.length}}),mounted:function(){this.initRows()}},g=D,_=(r("7670"),r("2877")),w=Object(_["a"])(g,a,n,!1,null,"2e504160",null);e["default"]=w.exports},fd21:function(t,e,r){}}]);
//# sourceMappingURL=chunk-32ba3708.0866fa3b.js.map