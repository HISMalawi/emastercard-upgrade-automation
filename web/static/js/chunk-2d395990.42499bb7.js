(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d395990"],{"0ece":function(e,t,r){"use strict";var n=r("6605"),a=r.n(n);a.a},"336a":function(e,t,r){"use strict";var n=r("df61"),a=r.n(n);a.a},"386a":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-12"},[r("sdPicker",{attrs:{onSubmit:e.fetchDates}})],1)]),r("report-overlay",{attrs:{reportLoading:e.reportLoading}},[r("vue-bootstrap4-table",{attrs:{rows:e.rows,columns:e.columns,config:e.config,"show-loader":e.reportLoading,actions:e.actions},on:{"on-download":e.onDownload},scopedSlots:e._u([e._l(e.slots,(function(t){return{key:t,fn:function(n){return[r("span",{key:t,class:n.cell_value.length>0?"drillable":"",on:{click:function(t){return e.fetchDrillDown(n.cell_value)}}},[e._v(e._s(n.cell_value.length>0?n.cell_value.length:0))])]}}}))],null,!0)},[r("template",{slot:"sort-asc-icon"},[e._v("↑")]),r("template",{slot:"sort-desc-icon"},[e._v("↓")]),r("template",{slot:"no-sort-icon"},[e._v("↑↓")])],2),r("tfoot",[r("tr",[r("td",[e._v(" Date Created: "+e._s(e.moment().format("YYYY-MM-DD:h:m:s"))+" e-Mastercard Version : "+e._s(e.EMCVersion)+" API Version "+e._s(e.APIVersion)+" ")])])])],1)],1)],1),r("b-modal",{attrs:{id:"modal-1",title:"Drill Down Clients"}},[r("b-table",{attrs:{striped:"",hover:"",id:"my-table",items:e.drillClients,fields:e.columns,"per-page":e.perPage,"current-page":e.currentPage}}),r("b-pagination",{attrs:{"per-page":e.perPage,"total-rows":e.rowCount,"aria-controls":"my-table"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}),r("p",{staticClass:"mt-3"},[e._v("Current Page: "+e._s(e.currentPage))])],1)],1)},a=[],o=(r("a4d3"),r("99af"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("5319"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),s=(r("96cf"),r("1da1")),i=r("8051"),c=r("8e71"),l=r("7c08"),u=r("4dfe"),p=(r("8d9f"),r("ebd8")),d=r("12f9"),_=r("c1df"),f=r.n(_),h=r("2f62"),m=r("9521");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){Object(o["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b={name:"txML",components:{ReportOverlay:c["a"],"top-nav":p["a"],"side-bar":l["a"],sdPicker:u["a"],VueBootstrap4Table:d["a"]},methods:{redirect:function(e){this.$router.push(e)},initRows:function(){var e=this;this.rows=[];var t=["F","M"],r=0;t.forEach((function(t){e.ageGroups.forEach((function(n,a){r+=1,e.rows.push({number:r,age_group:n,gender:t,new_six_h:0,new_three_p_h:0,prev_six_h:0,prev_three_p_h:0,comp_new_six_h:0,comp_new_three_h:0,comp_prev_six_h:0,comp_prev_three_p_h:0})}))}))},fetchDates:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:t.initRows(),t.startDate=e[0],t.endDate=e[1],t.reportTitle="PEPFAR "+sessionStorage.location_name+" TB PREV report ",t.reportTitle+=f()(e[0]).format("DDMMMYYYY"),t.reportTitle+=" - "+f()(e[1]).format("DDMMMYYYY"),t.reportLoading=!0,n="programs/1/reports/tb_prev2?start_date="+t.startDate+"&date="+f()().format("YYYY-MM-DD"),n+="&end_date="+t.endDate,console.log(n),t.loadData(n);case 11:case"end":return r.stop()}}),r)})))()},loadData:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["a"].get(e,{},{}).then((function(e){e.json().then((function(e){Object.keys(e).length>0?(console.log(e),t.buildReportData(e)):t.reportLoading=!1}))}));case 2:case"end":return r.stop()}}),r)})))()},buildReportData:function(e){var t=this;this.rows=[],this.GENDERS.forEach((function(r){t.ageGroups.forEach((function(n,a){var o="F"===r?a+1:a+12+1,s=e[n][r];t.rows.push({number:o,age_group:n,gender:Object(m["a"])(r),new_three_p_h:s["3HP"].started_new_on_art,new_six_h:s["6H"].started_new_on_art,prev_three_p_h:s["3HP"].started_previously_on_art,prev_six_h:s["6H"].started_previously_on_art,comp_new_three_h:s["3HP"].completed_new_on_art,comp_new_six_h:s["6H"].completed_new_on_art,comp_prev_three_p_h:s["3HP"].completed_previously_on_art,comp_prev_six_h:s["6H"].completed_previously_on_art})}))})),this.reportLoading=!1},fetchDrillDown:function(e){var t=this;console.log(e),e.length>0&&(this.$bvModal.show("modal-1"),this.drillClients=[],e.forEach((function(e){t.getClient(e.patient_id)})))},getClient:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var r,n,a=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="patients/"+t,e.next=3,i["a"].get(r,{},{});case 3:n=e.sent,200===n.status&&n.json().then((function(e){return a.drillClients.push(a.parsePatient(e))}));case 5:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),parsePatient:function(e){var t=e.person.birthdate,r=e.person.gender,n="";e.person.names[0].given_name,e.person.names[0].family_name,e.patient_identifiers.filter((function(e){return 4===e.identifier_type?e.identifier:""}));try{var a=e.person.addresses[0].city_village;e.person.addresses[0].address2,e.person.person_attributes[1].value}catch(i){a=""}try{for(var o=0;o<e.patient_identifiers.length;o++)4==e.patient_identifiers[o]["identifier_type"]&&(n=e.patient_identifiers[o]["identifier"])}catch(i){console.log(i)}var s={};return s.dob=t,s.arv_number=n,s.gender=Object(m["a"])(r),s.current_village=a,s},onDownload:function(){var e=null;this.columns.forEach((function(t){e+='"'.concat(t.label,'",')})),e=e.replace("null",""),this.rows.forEach((function(t){e+="\n",Object.keys(t).forEach((function(r){var n=t[r];Array.isArray(t[r])&&(n=t[r].length),e+='"'.concat(n,'",')}))})),e+="\n",e+="Date Created:  ".concat(f()().format("YYYY-MM-DD:h:m:s"),"\n                          Quarter: ").concat(this.startDate," to ").concat(this.endDate,"\n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion,"\n                          Site UUID: ").concat(sessionStorage.siteUUID," \n                          API Version ").concat(sessionStorage.APIVersion);for(var t=0;t<34;t++)e+=",";var r=new Blob([e],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(r,exportFilename);else{var n=document.createElement("a");n.href=window.URL.createObjectURL(r),n.setAttribute("download","".concat(this.reportTitle,".csv")),document.body.appendChild(n),n.click(),document.body.removeChild(n)}}},data:function(){var e;return e={GENDERS:["F","M"],drillClients:[],perPage:10,currentPage:1,columns:[{key:"arv_number",label:"ARV Number"},{key:"dob",label:"DOB"},{key:"gender",label:"Gender"},{key:"current_village",label:"Village"}],startDate:null,endDate:null,reportLoading:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,reportTitle:null,ageGroups:["<1 year","1-4 years","5-9 years","10-14 years","15-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50-54 years","55-59 years","60-64 years","65-69 years","70-74 years","75-79 years","80-84 years","85-89 years","90 plus years"],showLoader:!1,slots:["new_six_h","new_three_p_h","prev_six_h","prev_three_p_h","comp_new_six_h","comp_new_three_h","comp_prev_six_h","comp_prev_three_p_h"],rows:[]},Object(o["a"])(e,"columns",[{label:"#",name:"number",sort:!0},{label:"Age Group",name:"age_group",sort:!0},{label:"Gender",name:"gender",sort:!0},{label:"3HP(Started New on ART)",name:"new_three_p_h",slot_name:"new_three_p_h"},{label:"6H(Started New on ART)",name:"new_six_h",sort_name:"new_six_h"},{label:"3HP(Started Previously on ART)",name:"prev_three_p_h",sort_name:"old_three_p_h"},{label:"6H(Started Previously on ART)",name:"prev_six_h",sort_name:"prev_six_h"},{label:"3HP(Completed New on ART)",name:"comp_new_three_h",sort_name:"comp_new_three_h"},{label:"6H(Completed New on ART)",name:"comp_new_six_h",sort_name:"comp_new_six_h"},{label:"3HP(Completed Previously on ART)",name:"comp_prev_three_p_h",sort_name:"comp_prev_three_p_h"},{label:"6H(Completed Previously on ART)",name:"comp_prev_six_h",sort_name:"comp_prev_six_h"}]),Object(o["a"])(e,"config",{card_title:"TB Prev",show_refresh_button:!1,show_reset_button:!1}),Object(o["a"])(e,"actions",[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}]),e},computed:g({},Object(h["c"])(["location"]),{rowCount:function(){return this.drillClients.length}}),mounted:function(){this.initRows()}},w=b,D=(r("0ece"),r("6f55"),r("2877")),y=Object(D["a"])(w,n,a,!1,null,"50b407d9",null);t["default"]=y.exports},"498a":function(e,t,r){"use strict";var n=r("23e7"),a=r("58a8").trim,o=r("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return a(this)}})},"4dfe":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ctrs"},[r("div",{staticClass:"ctr-table"},[r("div",{staticClass:"ctr-row"},[r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:e.startDate,callback:function(t){e.startDate=t},expression:"startDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:e.format,parseDate:e.parseDate,formatDate:e.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:e.endDate,callback:function(t){e.endDate=t},expression:"endDate"}})],1),r("div",{staticClass:"ctr-cell"},[r("button",{staticClass:"btn btn-success",on:{click:e.submitDates}},[e._v("Submit")])])])])])},a=[],o=r("f0ca"),s=r.n(o),i=r("c1df"),c=r.n(i),l=(r("6f3c"),r("1789")),u={components:{DatePick:s.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(e,t){return l["a"].parse(e,t)},formatDate:function(e,t){return l["a"].format(e,t)}},mounted:function(){var e=this;setTimeout((function(){return e.initDates()}),300)}},p=u,d=(r("336a"),r("2877")),_=Object(d["a"])(p,n,a,!1,null,"15deca72",null);t["a"]=_.exports},5319:function(e,t,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),s=r("50c4"),i=r("a691"),c=r("1d80"),l=r("8aa5"),u=r("14c3"),p=Math.max,d=Math.min,_=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};n("replace",2,(function(e,t,r,n){var v=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=n.REPLACE_KEEPS_$0,b=v?"$":"$0";return[function(r,n){var a=c(this),o=void 0==r?void 0:r[e];return void 0!==o?o.call(r,a,n):t.call(String(a),r,n)},function(e,n){if(!v&&g||"string"===typeof n&&-1===n.indexOf(b)){var o=r(t,e,this,n);if(o.done)return o.value}var c=a(e),_=String(this),f="function"===typeof n;f||(n=String(n));var h=c.global;if(h){var D=c.unicode;c.lastIndex=0}var y=[];while(1){var x=u(c,_);if(null===x)break;if(y.push(x),!h)break;var P=String(x[0]);""===P&&(c.lastIndex=l(_,s(c.lastIndex),D))}for(var S="",Y=0,M=0;M<y.length;M++){x=y[M];for(var C=String(x[0]),O=p(d(i(x.index),_.length),0),E=[],R=1;R<x.length;R++)E.push(m(x[R]));var A=x.groups;if(f){var k=[C].concat(E,O,_);void 0!==A&&k.push(A);var j=String(n.apply(void 0,k))}else j=w(C,_,O,E,A,n);O>=Y&&(S+=_.slice(Y,O)+j,Y=O+C.length)}return S+_.slice(Y)}];function w(e,r,n,a,s,i){var c=n+e.length,l=a.length,u=h;return void 0!==s&&(s=o(s),u=f),t.call(i,u,(function(t,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":i=s[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var p=_(u/10);return 0===p?t:p<=l?void 0===a[p-1]?o.charAt(1):a[p-1]+o.charAt(1):t}i=a[u-1]}return void 0===i?"":i}))}}))},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,r){var n=r("1d80"),a=r("5899"),o="["+a+"]",s=RegExp("^"+o+o+"*"),i=RegExp(o+o+"*$"),c=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(s,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:c(1),end:c(2),trim:c(3)}},6605:function(e,t,r){},"6f55":function(e,t,r){"use strict";var n=r("ff59"),a=r.n(n);a.a},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"8d9f":function(e,t,r){"use strict";var n=r("c1df"),a=r.n(n);t["a"]=function(){var e="YYYY-MM-DD",t="DD/MM/YYYY";function r(e){var t=e.getMonth(),r=e.getFullYear();return t<3?["".concat(r,"-01-01"),"".concat(r,"-03-31")]:t<6?["".concat(r,"-04-01"),"".concat(r,"-06-30")]:t<9?["".concat(r,"-07-01"),"".concat(r,"-09-30")]:["".concat(r,"-10-01"),"".concat(r,"-12-31")]}function n(e){var t=e.getMonth(),r=e.getFullYear();return t<3?"Q1-".concat(r):t<6?"Q2-".concat(r):t<9?"Q3-".concat(r):"Q4-".concat(r)}function o(t){return a()(t).format(e)}function s(e){return a()(e).format(t)}return{ISO_FORMAT:e,LOCAL_FORMAT:t,dateQuarter:r,dateQuarterStr:n,isoDate:o,localDate:s}}()},"8e71":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-overlay",{attrs:{show:e.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:e._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[e.reportSelected?e._e():r("h1",[e._v("No Report Selected")]),e.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):e._e()],1)]},proxy:!0}])},[e._t("default")],2)},a=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},s=o,i=r("2877"),c=Object(i["a"])(s,n,a,!1,null,null,null);t["a"]=c.exports},9521:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));r("ac1f"),r("5319"),r("498a");function n(e){try{return e.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(t){return e}}function a(e){return e=e.toLowerCase(),"m"===e||"male"===e?"Male":"Female"}},c8d2:function(e,t,r){var n=r("d039"),a=r("5899"),o="​᠎";e.exports=function(e){return n((function(){return!!a[e]()||o[e]()!=o||a[e].name!==e}))}},df61:function(e,t,r){},ff59:function(e,t,r){}}]);
//# sourceMappingURL=chunk-2d395990.42499bb7.js.map