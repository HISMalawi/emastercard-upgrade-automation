(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-014073e2"],{"336a":function(e,t,r){"use strict";var a=r("df61"),n=r.n(a);n.a},"4dfe":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ctrs"},[r("div",{staticClass:"ctr-table"},[r("div",{staticClass:"ctr-row"},[r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("button",{staticClass:"btn btn-success",on:{click:e.submitDates}},[e._v("Submit")])])])])])},n=[],o=r("f0ca"),s=r.n(o),i=r("c1df"),l=r.n(i),c=(r("6f3c"),r("1789")),u={components:{DatePick:s.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:c["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=l()(this.startDate).format("YYYY-MM-DD"),this.endDate=l()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(e,t){return c["a"].parse(e,t)},formatDate:function(e,t){return c["a"].format(e,t)}},mounted:function(){var e=this;setTimeout((function(){return e.initDates()}),300)}},d=u,p=(r("336a"),r("2877")),f=Object(p["a"])(d,a,n,!1,null,"15deca72",null);t["a"]=f.exports},5319:function(e,t,r){"use strict";var a=r("d784"),n=r("825a"),o=r("7b0b"),s=r("50c4"),i=r("a691"),l=r("1d80"),c=r("8aa5"),u=r("14c3"),d=Math.max,p=Math.min,f=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,_=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(r,a){var n=l(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,n,a):t.call(String(n),r,a)},function(e,a){if(!v&&g||"string"===typeof a&&-1===a.indexOf(b)){var o=r(t,e,this,a);if(o.done)return o.value}var l=n(e),f=String(this),m="function"===typeof a;m||(a=String(a));var h=l.global;if(h){var y=l.unicode;l.lastIndex=0}var w=[];while(1){var Y=u(l,f);if(null===Y)break;if(w.push(Y),!h)break;var M=String(Y[0]);""===M&&(l.lastIndex=c(f,s(l.lastIndex),y))}for(var C="",S=0,O=0;O<w.length;O++){Y=w[O];for(var P=String(Y[0]),k=d(p(i(Y.index),f.length),0),x=[],E=1;E<Y.length;E++)x.push(_(Y[E]));var j=Y.groups;if(m){var A=[P].concat(x,k,f);void 0!==j&&A.push(j);var R=String(a.apply(void 0,A))}else R=D(P,f,k,x,j,a);k>=S&&(C+=f.slice(S,k)+R,S=k+P.length)}return C+f.slice(S)}];function D(e,r,a,n,s,i){var l=a+e.length,c=n.length,u=h;return void 0!==s&&(s=o(s),u=m),t.call(i,u,(function(t,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(l);case"<":i=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>c){var d=f(u/10);return 0===d?t:d<=c?void 0===n[d-1]?o.charAt(1):n[d-1]+o.charAt(1):t}i=n[u-1]}return void 0===i?"":i}))}}))},"75a6":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("sdPicker",{attrs:{onSubmit:e.fetchDates}})],1)]),r("report-overlay",{attrs:{reportLoading:e.reportLoading}},[r("vue-bootstrap4-table",{attrs:{rows:e.rows,columns:e.columns,config:e.config,"show-loader":e.reportLoading,actions:e.actions},on:{"on-download":e.onDownload},scopedSlots:e._u([e._l(e.slots,(function(t){return{key:t,fn:function(a){return[r("span",{key:t,class:a.cell_value.length>0?"drillable":"",on:{click:function(t){return e.fetchDrillDown(a.cell_value)}}},[e._v(e._s(a.cell_value.length>0?a.cell_value.length:0))])]}}}))],null,!0)})],1)],1)],1),r("b-modal",{attrs:{id:"modal-1",title:"Drill Down Clients"}},[r("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:e.drillClients,fields:e.drillColumns,"per-page":e.perPage,"current-page":e.currentPage}}),r("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.rowCount,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("p",{staticClass:"mt-3"},[e._v("Current Page: "+e._s(e.currentPage))])],1)],1)},n=[],o=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),s=(r("96cf"),r("1da1")),i=r("8051"),l=r("8e71"),c=r("7c08"),u=r("4dfe"),d=(r("8d9f"),r("ebd8")),p=r("12f9"),f=r("c1df"),m=r.n(f),h=r("2f62");function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={name:"txML",components:{ReportOverlay:l["a"],"top-nav":d["a"],"side-bar":c["a"],sdPicker:u["a"],VueBootstrap4Table:p["a"]},methods:{redirect:function(e){this.$router.push(e)},fetchDates:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.rows=[],r.prev=1,t.startDate=e[0],t.endDate=e[1],t.reportTitle="PEPFAR "+sessionStorage.location_name+" TX ML report ",t.reportTitle+=m()(e[0]).format("DDMMMYYYY"),t.reportTitle+=" - "+m()(e[1]).format("DDMMMYYYY"),t.reportLoading=!0,r.next=10,t.loadXLdata();case 10:r.next=16;break;case 12:r.prev=12,r.t0=r["catch"](1),console.error(r.t0),t.router.push({name:"error",params:{message:r.t0.message}});case 16:case"end":return r.stop()}}),r,null,[[1,12]])})))()},loadXLdata:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="tx_ml?date="+m()().format("YYYY-MM-DD"),t+="&start_date="+this.startDate,t+="&end_date="+this.endDate,t+="&program_id=1",e.next=6,i["a"].get(t);case 6:if(r=e.sent,200!==r.status){e.next=13;break}return e.t0=this,e.next=11,r.json();case 11:e.t1=e.sent,e.t0.loadGroupData.call(e.t0,e.t1);case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),fetchDrillDown:function(e){var t=this;e.length>0&&(this.$bvModal.show("modal-1"),this.drillClients=[],e.forEach((function(e){t.getClient(e)})))},getClient:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,a,n=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="patients/"+t,e.next=3,i["a"].get(r,{},{});case 3:a=e.sent,200===a.status&&a.json().then((function(e){return n.drillClients.push(n.parsePatient(e))}));case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),parsePatient:function(e){var t=e.person.birthdate,r=e.person.gender,a="";e.person.names[0].given_name,e.person.names[0].family_name,e.patient_identifiers.filter((function(e){return 4===e.identifier_type?e.identifier:""}));try{var n=e.person.addresses[0].city_village;e.person.addresses[0].address2,e.person.person_attributes[1].value}catch(i){n=""}try{for(var o=0;o<e.patient_identifiers.length;o++)4==e.patient_identifiers[o]["identifier_type"]&&(a=e.patient_identifiers[o]["identifier"])}catch(i){console.log(i)}var s={};return s.dob=t,s.arv_number=a,s.gender=r,s.current_village=n,s},hasRow:function(e,t){return this.rows.filter((function(t){t.age_group===e&&t.gender})).length>0},loadGroupData:function(e){for(var t=1,r=["F","M"],a=this.ageGroups,n=0;n<r.length;n++)for(var o=0;o<a.length;o++){var s=a[o];if(e.hasOwnProperty(s)){var i=e[s],l=r[n];if(i.hasOwnProperty(l)&&!this.hasRow(s,l)){var c=i[l];this.rows.push({number:t++,age_group:s,gender:l,died:c[0],iit_less_than_3_mo:c[1],iit_3_to_5_mo:c[2],iit_6_plus_mo:c[3],transferred_out:c[4],refused:c[5]})}else this.rows.push({number:t++,age_group:a[o],gender:r[n],died:0,iit_less_than_3_mo:0,iit_3_to_5_mo:0,iit_6_plus_mo:0,transferred_out:0,refused:0})}else this.rows.push({number:t++,age_group:a[o],gender:r[n],died:0,iit_less_than_3_mo:0,iit_3_to_5_mo:0,iit_6_plus_mo:0,transferred_out:0,refused:0})}this.reportLoading=!1},onDownload:function(){var e=null;this.columns.forEach((function(t){e+='"'.concat(t.label,'",')})),e=e.replace("null",""),this.rows.forEach((function(t){e+="\n",Object.keys(t).forEach((function(r){var a=t[r];Array.isArray(t[r])&&(a=t[r].length),e+='"'.concat(a,'",')}))})),e+="\n",e+="Date Created:  ".concat(m()().format("YYYY-MM-DD:h:m:s")," \n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion," \n                          Site UUID: ").concat(sessionStorage.siteUUID," \n                          API Version ").concat(sessionStorage.APIVersion);for(var t=0;t<34;t++)e+=",";var r=new Blob([e],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(r,exportFilename);else{var a=document.createElement("a");a.href=window.URL.createObjectURL(r),a.setAttribute("download","".concat(this.reportTitle,".csv")),document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},data:function(){return{drillClients:[],perPage:15,currentPage:1,drillColumns:[{key:"arv_number",label:"ARV Number"},{key:"dob",label:"DOB"},{key:"gender",label:"Gender"},{key:"current_village",label:"Village"}],startDate:null,endDate:null,reportLoading:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,reportTitle:null,ageGroups:["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"],showLoader:!1,slots:["died","iit_less_than_3_mo","iit_3_to_5_mo","iit_6_plus_mo","transferred_out","refused"],rows:[],columns:[{label:"#",name:"number",sort:!0},{label:"Age Group",name:"age_group",sort:!0},{label:"Gender",name:"gender",sort:!0},{label:"Died",name:"died",slot_name:"died",sort:!0},{label:"IIT <3 mo",name:"iit_less_than_3_mo",slot_name:"iit_less_than_3_mo",sort:!0},{label:"IIT 3-5 mo",name:"iit_3_to_5_mo",slot_name:"iit_3_to_5_mo",sort:!0},{label:"IIT 6+ mo",name:"iit_6_plus_mo",slot_name:"iit_6_plus_mo",sort:!0},{label:"Transferred out",name:"transferred_out",slot_name:"transferred_out",sort:!0},{label:"Refused (Stopped)",name:"refused",slot_name:"refused",sort:!0}],config:{card_title:"TX ML: Clients that were Alive and on treatment before the reporting period and their “next appointment date / drug runout” date falls within the reporting period. 30 or more days have gone between their appointment date and the end of the reporting period without any clinical dispensation visit.",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}]}},computed:v({},Object(h["c"])(["location"]),{rowCount:function(){return this.drillClients.length}}),mounted:function(){}},b=g,D=(r("9f8d"),r("2877")),y=Object(D["a"])(b,a,n,!1,null,"e9f05814",null);t["default"]=y.exports},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"8d9f":function(e,t,r){"use strict";var a=r("c1df"),n=r.n(a);t["a"]=function(){var e="YYYY-MM-DD",t="DD/MM/YYYY";function r(e){var t=e.getMonth(),r=e.getFullYear();return t<3?["".concat(r,"-01-01"),"".concat(r,"-03-31")]:t<6?["".concat(r,"-04-01"),"".concat(r,"-06-30")]:t<9?["".concat(r,"-07-01"),"".concat(r,"-09-30")]:["".concat(r,"-10-01"),"".concat(r,"-12-31")]}function a(e){var t=e.getMonth(),r=e.getFullYear();return t<3?"Q1-".concat(r):t<6?"Q2-".concat(r):t<9?"Q3-".concat(r):"Q4-".concat(r)}function o(t){return n()(t).format(e)}function s(e){return n()(e).format(t)}return{ISO_FORMAT:e,LOCAL_FORMAT:t,dateQuarter:r,dateQuarterStr:a,isoDate:o,localDate:s}}()},"8e71":function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-overlay",{attrs:{show:e.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:e._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[e.reportSelected?e._e():r("h1",[e._v("No Report Selected")]),e.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):e._e()],1)]},proxy:!0}])},[e._t("default")],2)},n=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},s=o,i=r("2877"),l=Object(i["a"])(s,a,n,!1,null,null,null);t["a"]=l.exports},"9f8d":function(e,t,r){"use strict";var a=r("d662"),n=r.n(a);n.a},d662:function(e,t,r){},df61:function(e,t,r){}}]);
//# sourceMappingURL=chunk-014073e2.9a520d5d.js.map