(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3afe45b2"],{"06ed":function(t,e,a){},"124c":function(t,e,a){"use strict";var n=a("06ed"),r=a.n(n);r.a},"1bc2":function(t,e,a){"use strict";var n=a("68b3"),r=a.n(n);r.a},"336a":function(t,e,a){"use strict";var n=a("df61"),r=a.n(n);r.a},"498a":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").trim,o=a("c8d2");n({target:"String",proto:!0,forced:o("trim")},{trim:function(){return r(this)}})},"4dfe":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},r=[],o=a("f0ca"),i=a.n(o),s=a("c1df"),c=a.n(s),u=(a("6f3c"),a("1789")),l={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:u["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return u["a"].parse(t,e)},formatDate:function(t,e){return u["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},d=l,f=(a("336a"),a("2877")),m=Object(f["a"])(d,n,r,!1,null,"15deca72",null);e["a"]=m.exports},5319:function(t,e,a){"use strict";var n=a("d784"),r=a("825a"),o=a("7b0b"),i=a("50c4"),s=a("a691"),c=a("1d80"),u=a("8aa5"),l=a("14c3"),d=Math.max,f=Math.min,m=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,b=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,a,n){var h=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,D=n.REPLACE_KEEPS_$0,g=h?"$":"$0";return[function(a,n){var r=c(this),o=void 0==a?void 0:a[t];return void 0!==o?o.call(a,r,n):e.call(String(r),a,n)},function(t,n){if(!h&&D||"string"===typeof n&&-1===n.indexOf(g)){var o=a(e,t,this,n);if(o.done)return o.value}var c=r(t),m=String(this),p="function"===typeof n;p||(n=String(n));var v=c.global;if(v){var w=c.unicode;c.lastIndex=0}var Y=[];while(1){var S=l(c,m);if(null===S)break;if(Y.push(S),!v)break;var x=String(S[0]);""===x&&(c.lastIndex=u(m,i(c.lastIndex),w))}for(var M="",C=0,y=0;y<Y.length;y++){S=Y[y];for(var E=String(S[0]),k=d(f(s(S.index),m.length),0),j=[],A=1;A<S.length;A++)j.push(b(S[A]));var $=S.groups;if(p){var P=[E].concat(j,k,m);void 0!==$&&P.push($);var R=String(n.apply(void 0,P))}else R=_(E,m,k,j,$,n);k>=C&&(M+=m.slice(C,k)+R,C=k+E.length)}return M+m.slice(C)}];function _(t,a,n,r,i,s){var c=n+t.length,u=r.length,l=v;return void 0!==i&&(i=o(i),l=p),e.call(s,l,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return a.slice(0,n);case"'":return a.slice(c);case"<":s=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var d=m(l/10);return 0===d?e:d<=u?void 0===r[d-1]?o.charAt(1):r[d-1]+o.charAt(1):e}s=r[l-1]}return void 0===s?"":s}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("1d80"),r=a("5899"),o="["+r+"]",i=RegExp("^"+o+o+"*"),s=RegExp(o+o+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(i,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},"68b3":function(t,e,a){},"87a0":function(t,e,a){"use strict";a.d(e,"a",(function(){return c}));a("99af"),a("4de4"),a("a15b"),a("d81d"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var n=a("1157"),r=a("c1df"),o=a.n(r),i=a("9521");function s(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.filter((function(t){return!1!==t.exportable})).map((function(t){return t.label})).join(",");return r+="\n",r+=e.map((function(e){return t.filter((function(t){return!1!==t.exportable})).map((function(t){return Object(i["b"])(e[t.name])})).join(",")})).join("\n"),r+="\n"+"Date Created:  ".concat(o()().format("YYYY-MM-DD:h:m:s")),Object(n["isEmptyObject"])(a)||(r+="\n"+"Quarter: ".concat(a.startDate," to ").concat(a.endDate)),r+="\n"+"e-Mastercard Version : ".concat(sessionStorage.EMCVersion),r+="\n"+"API Version ".concat(sessionStorage.APIVersion),r+="\n"+"Site UUID: ".concat(sessionStorage.siteUUID),r}function c(t,e,a){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=s(t,e,n),o=new Blob([r],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(o,a);else{var i=document.createElement("a");i.href=window.URL.createObjectURL(o),i.setAttribute("download","".concat(sessionStorage.location_name," ").concat(a,".csv")),document.body.appendChild(i),i.click(),document.body.removeChild(i)}}},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9521:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"a",(function(){return r}));a("ac1f"),a("5319"),a("498a");function n(t){try{return t.replace(/<(?:.|\n)*?>/gm," ").replace(/\n/g," ").replace(/\t/g," ").replace(/\s{2,}/g," ").replace(/=/g," ").replace(/,/g," ").trim()}catch(e){return t}}function r(t){return t=t.toLowerCase(),"m"===t||"male"===t?"Male":"Female"}},a15b:function(t,e,a){"use strict";var n=a("23e7"),r=a("44ad"),o=a("fc6a"),i=a("a640"),s=[].join,c=r!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(o(this),void 0===t?",":t)}})},c8d2:function(t,e,a){var n=a("d039"),r=a("5899"),o="​᠎";t.exports=function(t){return n((function(){return!!r[t]()||o[t]()!=o||r[t].name!==t}))}},d7d1:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{attrs:{id:"main-container"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{"z-index":"20"}},[a("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),a("vue-bootstrap4-table",{attrs:{rows:t.rows,columns:t.columns,config:t.config,"show-loader":t.showLoader,actions:t.actions},on:{"on-download":t.onDownload},scopedSlots:t._u([{key:"birthdate",fn:function(e){return[t._v(" "+t._s(t.moment(e.cell_value).format("DD/MMM/YYYY"))+" ")]}},{key:"patient_id",fn:function(e){return[a("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.redirect(e.cell_value)}}},[t._v(" show ")])]}}])},[a("template",{slot:"sort-asc-icon"},[t._v("↑")]),a("template",{slot:"sort-desc-icon"},[t._v("↓")]),a("template",{slot:"no-sort-icon"},[t._v("↑↓")])],2)],1)],1)],1)},r=[],o=(a("96cf"),a("1da1")),i=a("8051"),s=a("ebd8"),c=a("7c08"),u=a("c1df"),l=a.n(u),d=a("4dfe"),f=a("12f9"),m=a("87a0"),p={name:"reports",components:{"top-nav":s["a"],"side-bar":c["a"],sdPicker:d["a"],"vue-bootstrap4-table":f["a"]},data:function(){return{startDate:"",endDate:"",showLoader:!1,rows:[],columns:[{label:"ARV Number",name:"arv_number",sort:!0,initial_sort:!0,initial_sort_order:"asc"},{label:"First Name",name:"given_name",exportable:!1,sort:!0},{label:"Last Name",name:"family_name",exportable:!1,sort:!0},{label:"Gender",name:"gender",sort:!0},{label:"DOB",name:"birthdate",slot_name:"birthdate",sort:!0},{label:"Actions",name:"patient_id",slot_name:"patient_id",exportable:!1}],config:{card_title:"Pregnant Patients Clinic Report ",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class",event_payload:{msg:"my custom msg"}}]}},methods:{fetchDates:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.showLoader=!0,e.startDate=t[0],e.endDate=t[1],e.config.card_title+=l()(t[0]).format("DD/MMM/YYYY")+" - "+l()(t[1]).format("DDMMMYYYY"),n="/programs/1/reports/pregnant_patients?start_date="+t[0]+"end_date="+t[1],n+="&paginate=false",a.next=8,i["a"].get(n,{},{});case 8:r=a.sent,200===r.status&&r.json().then((function(t){return e.rows=t})),e.showLoader=!1;case 11:case"end":return a.stop()}}),a)})))()},redirect:function(t){this.$router.push("/patient/mastercard/".concat(t))},onDownload:function(){Object(m["a"])(this.columns,this.rows,this.config.card_title,{startDate:this.startDate,endDate:this.endDate})}}},v=p,b=(a("124c"),a("1bc2"),a("2877")),h=Object(b["a"])(v,n,r,!1,null,"5aada17a",null);e["default"]=h.exports},d81d:function(t,e,a){"use strict";var n=a("23e7"),r=a("b727").map,o=a("1dde"),i=a("ae40"),s=o("map"),c=i("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},df61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3afe45b2.44ceb341.js.map