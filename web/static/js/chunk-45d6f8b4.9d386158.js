(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45d6f8b4"],{"476f":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[n("side-bar"),n("div",{attrs:{id:"page-content-wrapper"}},[n("top-nav"),n("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("datePicker",{attrs:{onSubmit:t.fetchDate}})],1)]),n("vue-bootstrap4-table",{attrs:{rows:t.rows,columns:t.columns,config:t.config,"show-loader":t.showLoader,actions:t.actions},on:{"on-download":t.onDownload},scopedSlots:t._u([{key:"birthdate",fn:function(e){return[t._v(" "+t._s(t.moment(e.cell_value).format("DD/MMM/YYYY"))+" ")]}},{key:"gender",fn:function(e){var n=e.cell_value;return[t._v(" "+t._s(t.formatGender(n))+" ")]}},{key:"patient_id",fn:function(e){return[n("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(n){return t.redirect(e.cell_value)}}},[t._v(" show ")])]}}])},[n("template",{slot:"sort-asc-icon"},[t._v("↑")]),n("template",{slot:"sort-desc-icon"},[t._v("↓")]),n("template",{slot:"no-sort-icon"},[t._v("↑↓")])],2)],1)],1)],1)},r=[],o=(n("96cf"),n("1da1")),i=n("8051"),c=n("ebd8"),s=n("7c08"),u=n("c1df"),l=n.n(u),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ctrs"},[n("div",{staticClass:"ctr-table"},[n("div",{staticClass:"ctr-row"},[n("div",{staticClass:"ctr-cell"},[n("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),n("div",{staticClass:"ctr-cell"},[n("button",{staticClass:"btn btn-success",on:{click:t.submitDate}},[t._v("Submit")])])])])])},f=[],m=n("f0ca"),p=n.n(m),v=(n("6f3c"),n("1789")),b={components:{DatePick:p.a},props:["onSubmit"],data:function(){return{endDate:null,format:"DD/MMM/YYYY",date:v["a"].format(new Date,"DD/MMM/YYYY")}},methods:{submitDate:function(){this.endDate=l()(this.endDate).format("YYYY-MM-DD"),this.onSubmit(this.endDate)},parseDate:function(t,e){return v["a"].parse(t,e)},formatDate:function(t,e){return v["a"].format(t,e)}},mounted:function(){}},h=b,g=(n("fca7"),n("2877")),_=Object(g["a"])(h,d,f,!1,null,"1a2e2ebf",null),D=_.exports,w=n("12f9"),S=n("87a0"),x=n("9521"),Y={name:"ClinicAppointments",components:{"top-nav":c["a"],"side-bar":s["a"],datePicker:D,VueBootstrap4Table:w["a"]},data:function(){return{showLoader:!1,rows:[],columns:[{label:"ARV Number",name:"arv_number",sort:!0,initial_sort:!0,initial_sort_order:"asc"},{label:"First Name",name:"given_name",exportable:!1,sort:!0},{label:"Last Name",name:"family_name",exportable:!1,sort:!0},{label:"Gender",name:"gender",slot_name:"gender",sort:!0},{label:"DOB",name:"birthdate",slot_name:"birthdate",sort:!0},{label:"Actions",name:"person_id",slot_name:"patient_id",exportable:!1}],config:{card_title:"Clinic Appointments report",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class",event_payload:{msg:"my custom msg"}}]}},methods:{formatGender:function(t){return Object(x["a"])(t)},fetchDate:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var n,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.config.card_title+=l()(e).format("DD/MMM/YYYY"),n="/programs/1/scheduled_appointments?date="+e,n+="&paginate=false",t.next=5,i["a"].get(n,{},{});case 5:a=t.sent,200===a.status?a.json().then((function(t){return r.rows=t})):setTimeout((function(){return r.fetchDate(e)}),3e3);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),redirect:function(t){this.$router.push("/patient/mastercard/".concat(t))},onDownload:function(){Object(S["a"])(this.columns,this.rows,this.config.card_title)}}},C=Y,y=(n("ce55"),n("7890"),Object(g["a"])(C,a,r,!1,null,"b6516d3c",null));e["default"]=y.exports},"498a":function(t,e,n){"use strict";var a=n("23e7"),r=n("58a8").trim,o=n("c8d2");a({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),o=n("7b0b"),i=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),l=n("14c3"),d=Math.max,f=Math.min,m=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n,a){var h=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=a.REPLACE_KEEPS_$0,_=h?"$":"$0";return[function(n,a){var r=s(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,r,a):e.call(String(r),n,a)},function(t,a){if(!h&&g||"string"===typeof a&&-1===a.indexOf(_)){var o=n(e,t,this,a);if(o.done)return o.value}var s=r(t),m=String(this),p="function"===typeof a;p||(a=String(a));var v=s.global;if(v){var w=s.unicode;s.lastIndex=0}var S=[];while(1){var x=l(s,m);if(null===x)break;if(S.push(x),!v)break;var Y=String(x[0]);""===Y&&(s.lastIndex=u(m,i(s.lastIndex),w))}for(var C="",y=0,M=0;M<S.length;M++){x=S[M];for(var E=String(x[0]),k=d(f(c(x.index),m.length),0),j=[],A=1;A<x.length;A++)j.push(b(x[A]));var $=x.groups;if(p){var O=[E].concat(j,k,m);void 0!==$&&O.push($);var R=String(a.apply(void 0,O))}else R=D(E,m,k,j,$,a);k>=y&&(C+=m.slice(y,k)+R,y=k+E.length)}return C+m.slice(y)}];function D(t,n,a,r,i,c){var s=a+t.length,u=r.length,l=v;return void 0!==i&&(i=o(i),l=p),e.call(c,l,(function(e,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(s);case"<":c=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var d=m(l/10);return 0===d?e:d<=u?void 0===r[d-1]?o.charAt(1):r[d-1]+o.charAt(1):e}c=r[l-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("1d80"),r=n("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),c=RegExp(o+o+"*$"),s=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(i,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},"656b":function(t,e,n){},7890:function(t,e,n){"use strict";var a=n("656b"),r=n.n(a);r.a},"87a0":function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n("99af"),n("4de4"),n("a15b"),n("d81d"),n("b0c0"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d");var a=n("1157"),r=n("c1df"),o=n.n(r),i=n("9521");function c(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.filter((function(t){return!1!==t.exportable})).map((function(t){return t.label})).join(",");return r+="\n",r+=e.map((function(e){return t.filter((function(t){return!1!==t.exportable})).map((function(t){return Object(i["b"])(e[t.name])})).join(",")})).join("\n"),r+="\n"+"Date Created:  ".concat(o()().format("YYYY-MM-DD:h:m:s")),Object(a["isEmptyObject"])(n)||(r+="\n"+"Quarter: ".concat(n.startDate," to ").concat(n.endDate)),r+="\n"+"e-Mastercard Version : ".concat(sessionStorage.EMCVersion),r+="\n"+"API Version ".concat(sessionStorage.APIVersion),r+="\n"+"Site UUID: ".concat(sessionStorage.siteUUID),r}function s(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=c(t,e,a),o=new Blob([r],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(o,n);else{var i=document.createElement("a");i.href=window.URL.createObjectURL(o),i.setAttribute("download","".concat(sessionStorage.location_name," ").concat(n,".csv")),document.body.appendChild(i),i.click(),document.body.removeChild(i)}}},"88ee":function(t,e,n){},"8aa5":function(t,e,n){"use strict";var a=n("6547").charAt;t.exports=function(t,e,n){return e+(n?a(t,e).length:1)}},9521:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));n("ac1f"),n("5319"),n("498a");function a(t){try{return t.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(e){return t}}function r(t){return t=t.toLowerCase(),"m"===t||"male"===t?"Male":"Female"}},a15b:function(t,e,n){"use strict";var a=n("23e7"),r=n("44ad"),o=n("fc6a"),i=n("a640"),c=[].join,s=r!=Object,u=i("join",",");a({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(o(this),void 0===t?",":t)}})},c8d2:function(t,e,n){var a=n("d039"),r=n("5899"),o="​᠎";t.exports=function(t){return a((function(){return!!r[t]()||o[t]()!=o||r[t].name!==t}))}},cd8a:function(t,e,n){},ce55:function(t,e,n){"use strict";var a=n("88ee"),r=n.n(a);r.a},d81d:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").map,o=n("1dde"),i=n("ae40"),c=o("map"),s=i("map");a({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},fca7:function(t,e,n){"use strict";var a=n("cd8a"),r=n.n(a);r.a}}]);
//# sourceMappingURL=chunk-45d6f8b4.9d386158.js.map