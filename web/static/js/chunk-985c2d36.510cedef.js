(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-985c2d36"],{"0fc9":function(t,e,a){"use strict";var n=a("c8b7"),r=a.n(n);r.a},"336a":function(t,e,a){"use strict";var n=a("df61"),r=a.n(n);r.a},"498a":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").trim,o=a("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},"4dfe":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},r=[],o=a("f0ca"),i=a.n(o),c=a("c1df"),s=a.n(c),u=(a("6f3c"),a("1789")),l={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:u["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=s()(this.startDate).format("YYYY-MM-DD"),this.endDate=s()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return u["a"].parse(t,e)},formatDate:function(t,e){return u["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},d=l,f=(a("336a"),a("2877")),m=Object(f["a"])(d,n,r,!1,null,"15deca72",null);e["a"]=m.exports},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),o=a("7b0b"),i=a("50c4"),c=a("a691"),s=a("1d80"),u=a("8aa5"),l=a("14c3"),d=Math.max,f=Math.min,m=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,D=n.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(a,n){var r=s(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!h&&D||"string"===typeof n&&-1===n.indexOf(g)){var o=a(e,t,this,n);if(o.done)return o.value}var s=r(t),m=String(this),p="function"===typeof n;p||(n=String(n));var b=s.global;if(b){var w=s.unicode;s.lastIndex=0}var Y=[];while(1){var y=l(s,m);if(null===y)break;if(Y.push(y),!b)break;var M=String(y[0]);""===M&&(s.lastIndex=u(m,i(s.lastIndex),w))}for(var O="",j=0,S=0;S<Y.length;S++){y=Y[S];for(var x=String(y[0]),C=d(f(c(y.index),m.length),0),k=[],E=1;E<y.length;E++)k.push(v(y[E]));var P=y.groups;if(p){var A=[x].concat(k,C,m);void 0!==P&&A.push(P);var $=String(n.apply(void 0,A))}else $=_(x,m,C,k,P,n);C>=j&&(O+=m.slice(j,C)+$,j=C+x.length)}return O+m.slice(j)}];function _(t,a,n,r,i,c){var s=n+t.length,u=r.length,l=b;return void 0!==i&&(i=o(i),l=p),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var d=m(l/10);return 0===d?e:d<=u?void 0===r[d-1]?o.charAt(1):r[d-1]+o.charAt(1):e}c=r[l-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(c,"")),a}};t.exports={start:s(1),end:s(2),trim:s(3)}},"5e54":function(t,e,a){"use strict";var n=a("e24a"),r=a.n(n);r.a},"87a0":function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("99af"),a("4de4"),a("a15b"),a("d81d"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var n=a("1157"),r=a("c1df"),o=a.n(r),i=a("9521");function c(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.filter((function(t){return!1!==t.exportable})).map((function(t){return t.label})).join(",");return r+="\n",r+=e.map((function(e){return t.filter((function(t){return!1!==t.exportable})).map((function(t){return Object(i["b"])(e[t.name])})).join(",")})).join("\n"),r+="\n"+"Date Created:  ".concat(o()().format("YYYY-MM-DD:h:m:s")),Object(n["isEmptyObject"])(a)||(r+="\n"+"Quarter: ".concat(a.startDate," to ").concat(a.endDate)),r+="\n"+"e-Mastercard Version : ".concat(sessionStorage.EMCVersion),r+="\n"+"API Version ".concat(sessionStorage.APIVersion),r+="\n"+"Site UUID: ".concat(sessionStorage.siteUUID),r}function s(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=c(t,e,n),o=new Blob([r],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(o,a);else{var i=document.createElement("a");i.href=window.URL.createObjectURL(o),i.setAttribute("download","".concat(sessionStorage.location_name," ").concat(a,".csv")),document.body.appendChild(i),i.click(),document.body.removeChild(i)}}},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9521:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));a("ac1f"),a("5319"),a("498a");function n(t){try{return t.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(e){return t}}function r(t){return t=t.toLowerCase(),"m"===t||"male"===t?"Male":"Female"}},a15b:function(t,e,a){"use strict";var n=a("23e7"),r=a("44ad"),o=a("fc6a"),i=a("a640"),c=[].join,s=r!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},b922:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),a("vue-bootstrap4-table",{attrs:{rows:t.rows,columns:t.columns,config:t.config,"show-loader":t.showLoader,actions:t.actions},on:{"on-download":t.onDownload},scopedSlots:t._u([{key:"birthdate",fn:function(e){return[t._v(" "+t._s(t.moment(e.cell_value).format("DD/MMM/YYYY"))+" ("+t._s(t.moment().diff(e.cell_value,"years",!1))+") ")]}},{key:"appointment_date",fn:function(e){return[t._v(" "+t._s(t.moment(e.cell_value).format("DD/MMM/YYYY"))+" ")]}},{key:"contact_details",fn:function(e){return[a("i",{domProps:{innerHTML:t._s(e.cell_value)}})]}},{key:"patient_id",fn:function(e){return[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.redirect(e.cell_value)}}},[t._v(" show ")])]}}])},[a("template",{slot:"sort-asc-icon"},[t._v("↑")]),a("template",{slot:"sort-desc-icon"},[t._v("↓")]),a("template",{slot:"no-sort-icon"},[t._v("↑↓")])],2)],1)],1)],1)},r=[],o=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("d81d"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),i=(a("96cf"),a("1da1")),c=a("8051"),s=a("ebd8"),u=a("7c08"),l=a("c1df"),d=a.n(l),f=a("4dfe"),m=a("12f9"),p=a("87a0"),b=a("9521");function v(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function h(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?v(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var D={name:"reports",components:{"top-nav":s["a"],"side-bar":u["a"],sdPicker:f["a"],VueBootstrap4Table:m["a"]},data:function(){return{startDate:"",endDate:"",showLoader:!1,rows:[],columns:[{label:"ARV Number",name:"arv_number",sort:!0,initial_sort:!0,initial_sort_order:"asc"},{label:"First Name",name:"given_name",exportable:!1,sort:!0},{label:"Last Name",name:"family_name",exportable:!1,sort:!0},{label:"Gender",name:"gender",sort:!0},{label:"DOB",name:"birthdate",slot_name:"birthdate",sort:!0},{label:"Date Missed",name:"appointment_date",slot_name:"appointment_date",sort:!0},{label:"Outcome",name:"current_outcome",sort:!0},{label:"Contact Details",name:"contact_details",slot_name:"contact_details"},{label:"Actions",name:"person_id",slot_name:"patient_id",exportable:!1}],config:{card_title:"Clinic Appointment missed report",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class",event_payload:{msg:"my custom msg"}}]}},methods:{fetchDates:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,n,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.showLoader=!0,this.startDate=e[0],this.endDate=e[1],this.config.card_title+=" "+d()(e[0]).format("DD/MMM/YYYY"),this.config.card_title+=" - "+d()(e[1]).format("DD/MMM/YYYY"),a="/missed_appointments?start_date="+e[0]+"&end_date="+e[1],a+="&program_id=1&date="+d()().format("YYYY-MM-DD"),t.next=9,c["a"].get(a,{},{});case 9:n=t.sent,200===n.status&&n.json().then((function(t){r.rows=t.map((function(t){return h({},t,{gender:Object(b["a"])(t.gender),contact_details:"Cell: ".concat(t.cell_number,"<br>\n                              District: ").concat(t.district,"<br>\n                              TA: ").concat(t.ta,"<br>\n                              Village: ").concat(t.village)})}))})),this.showLoader=!1;case 12:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),redirect:function(t){this.$router.push("/patient/mastercard/".concat(t))},onDownload:function(){Object(p["a"])(this.columns,this.rows,this.config.card_title,{startDate:this.startDate,endDate:this.endDate})}}},g=D,_=(a("5e54"),a("0fc9"),a("2877")),w=Object(_["a"])(g,n,r,!1,null,"f49453fc",null);e["default"]=w.exports},c8b7:function(t,e,a){},c8d2:function(t,e,a){var n=a("d039"),r=a("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||o[t]()!=o||r[t].name!==t}))}},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,o=a("1dde"),i=a("ae40"),c=o("map"),s=i("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},df61:function(t,e,a){},e24a:function(t,e,a){}}]);
//# sourceMappingURL=chunk-985c2d36.510cedef.js.map