(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-05ce7852"],{1276:function(t,e,r){"use strict";var n=r("d784"),a=r("44e7"),o=r("825a"),i=r("1d80"),s=r("4840"),c=r("8aa5"),u=r("50c4"),l=r("14c3"),d=r("9263"),p=r("d039"),f=[].push,v=Math.min,h=4294967295,g=!p((function(){return!RegExp(h,"y")}));n("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n=String(i(this)),o=void 0===r?h:r>>>0;if(0===o)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,o);var s,c,u,l=[],p=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),v=0,g=new RegExp(t.source,p+"g");while(s=d.call(g,n)){if(c=g.lastIndex,c>v&&(l.push(n.slice(v,s.index)),s.length>1&&s.index<n.length&&f.apply(l,s.slice(1)),u=s[0].length,v=c,l.length>=o))break;g.lastIndex===s.index&&g.lastIndex++}return v===n.length?!u&&g.test("")||l.push(""):l.push(n.slice(v)),l.length>o?l.slice(0,o):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var a=i(this),o=void 0==e?void 0:e[t];return void 0!==o?o.call(e,a,r):n.call(String(a),e,r)},function(t,a){var i=r(n,t,this,a,n!==e);if(i.done)return i.value;var d=o(t),p=String(this),f=s(d,RegExp),b=d.unicode,m=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),y=new f(g?d:"^(?:"+d.source+")",m),w=void 0===a?h:a>>>0;if(0===w)return[];if(0===p.length)return null===l(y,p)?[p]:[];var D=0,S=0,x=[];while(S<p.length){y.lastIndex=g?S:0;var _,C=l(y,g?p:p.slice(S));if(null===C||(_=v(u(y.lastIndex+(g?0:S)),p.length))===D)S=c(p,S,b);else{if(x.push(p.slice(D,S)),x.length===w)return x;for(var O=1;O<=C.length-1;O++)if(x.push(C[O]),x.length===w)return x;S=D=_}}return x.push(p.slice(D)),x}]}),!g)},"13d5":function(t,e,r){"use strict";var n=r("23e7"),a=r("d58f").left,o=r("a640"),i=r("ae40"),s=o("reduce"),c=i("reduce",{1:0});n({target:"Array",proto:!0,forced:!s||!c},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"317c":function(t,e,r){"use strict";var n=r("d58c"),a=r.n(n);a.a},4632:function(t,e,r){"use strict";var n=r("7949"),a=r.n(n);a.a},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("50c4"),i=r("1d80"),s=r("8aa5"),c=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=a(t),u=String(this);if(!i.global)return c(i,u);var l=i.unicode;i.lastIndex=0;var d,p=[],f=0;while(null!==(d=c(i,u))){var v=String(d[0]);p[f]=v,""===v&&(i.lastIndex=s(u,o(i.lastIndex),l)),f++}return 0===f?null:p}]}))},5319:function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),o=r("7b0b"),i=r("50c4"),s=r("a691"),c=r("1d80"),u=r("8aa5"),l=r("14c3"),d=Math.max,p=Math.min,f=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,r,n){var b=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,m=n.REPLACE_KEEPS_$0,y=b?"$":"$0";return[function(r,n){var a=c(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,a,n):e.call(String(a),r,n)},function(t,n){if(!b&&m||"string"===typeof n&&-1===n.indexOf(y)){var o=r(e,t,this,n);if(o.done)return o.value}var c=a(t),f=String(this),v="function"===typeof n;v||(n=String(n));var h=c.global;if(h){var D=c.unicode;c.lastIndex=0}var S=[];while(1){var x=l(c,f);if(null===x)break;if(S.push(x),!h)break;var _=String(x[0]);""===_&&(c.lastIndex=u(f,i(c.lastIndex),D))}for(var C="",O=0,k=0;k<S.length;k++){x=S[k];for(var E=String(x[0]),R=d(p(s(x.index),f.length),0),j=[],A=1;A<x.length;A++)j.push(g(x[A]));var I=x.groups;if(v){var P=[E].concat(j,R,f);void 0!==I&&P.push(I);var M=String(n.apply(void 0,P))}else M=w(E,f,R,j,I,n);R>=O&&(C+=f.slice(O,R)+M,O=R+E.length)}return C+f.slice(O)}];function w(t,r,n,a,i,s){var c=n+t.length,u=a.length,l=h;return void 0!==i&&(i=o(i),l=v),e.call(s,l,(function(e,o){var s;switch(o.charAt(0)){case"$":return"$";case"&":return t;case"`":return r.slice(0,n);case"'":return r.slice(c);case"<":s=i[o.slice(1,-1)];break;default:var l=+o;if(0===l)return e;if(l>u){var d=f(l/10);return 0===d?e:d<=u?void 0===a[d-1]?o.charAt(1):a[d-1]+o.charAt(1):e}s=a[l-1]}return void 0===s?"":s}))}}))},"76ed":function(t,e,r){},7949:function(t,e,r){},"870a":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"control-container"},[r("div",{staticClass:"row"},[t.isCustom?r("div",{staticClass:"col-2"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1):t._e(),t.isCustom?r("div",{staticClass:"col-2"},[r("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1):t._e(),r("div",{staticClass:"col-4"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.qtr,expression:"qtr"}],attrs:{id:"quarters"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.qtr=e.target.multiple?r:r[0]}}},[r("option",{attrs:{selected:""}},[t._v("Select cohort quarter")]),r("option",[t._v("Custom")]),t._l(t.quarters,(function(e,n){return r("option",{key:n,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),r("div",{staticClass:"col-4"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-6"},[r("button",{ref:"myid",staticClass:"btn btn-primary",attrs:{id:"submit-btn"},on:{click:function(e){return t.selectQuarter(!1)}}},[t._v(" Archived report ")])]),r("div",{staticClass:"col-6"},[r("button",{ref:"myid",staticClass:"btn btn-danger",attrs:{id:"generate-btn"},on:{click:function(e){return t.selectQuarter(!0)}}},[t._v(" Fresh report ")])])])])])])},a=[],o=r("f0ca"),i=r.n(o),s=(r("6f3c"),r("1789")),c={data:function(){return{quarters:[],startDate:"",endDate:"",format:"YYYY-MM-DD",qtr:"Select cohort quarter"}},computed:{isCustom:function(){return"Custom"===this.qtr}},components:{DatePick:i.a},props:["onSubmit"],methods:{parseDate:function(t,e){return s["a"].parse(t,e)},formatDate:function(t,e){return s["a"].format(t,e)},selectQuarter:function(t){var e=quarters.value?[quarters.value,t,this.startDate,this.endDate]:[];e[2]=this.startDate,e[3]=this.endDate,this.onSubmit(e)},enableBTN:function(){this.$refs.myid.disabled=!1},loadQuarters:function(){var t=[],e="",r=new Date;r=new Date(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+" 00:00");var n=r.getFullYear();r>=new Date(n+"-01-01 00:00")&&r<=new Date(n+"-03-31 00:00")?e="1 "+n:r>=new Date(n+"-04-01 00:00")&&r<=new Date(n+"-06-30 00:00")?e="2 "+n:r>=new Date(n+"-07-01 00:00")&&r<=new Date(n+"-09-30 00:00")?e="3 "+n:r>=new Date(n+"-10-01 00:00")&&r<=new Date(n+"-12-31 00:00")&&(e="4 "+n);var a=parseInt(e.substring(0,1)),o=0;while(o<5)0==o&&this.addFollowingQ(t,a,n),t.push("Q"+a+" "+n),a=a>0?a-=1:a,n=0==a?n-1:n,a=0==a?a+=4:a,o++;this.quarters=t},addFollowingQ:function(t,e,r){e<4?t.push("Q"+(e+1)+" "+r):t.push("Q1 "+(r+1))}},mounted:function(){this.loadQuarters()}},u=c,l=(r("d7ec"),r("fd65"),r("2877")),d=Object(l["a"])(u,n,a,!1,null,"b7accc12",null);e["a"]=d.exports},"8aa5":function(t,e,r){"use strict";var n=r("6547").charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},"8e71":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-overlay",{attrs:{show:t.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[t.reportSelected?t._e():r("h1",[t._v("No Report Selected")]),t.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):t._e()],1)]},proxy:!0}])},[t._t("default")],2)},a=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},i=o,s=r("2877"),c=Object(s["a"])(i,n,a,!1,null,null,null);e["a"]=c.exports},9331:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"cohort"},[r("report-date-picker",{attrs:{onSubmit:t.fetchData}})],1),r("div",{staticStyle:{width:"100%","text-align":"right","margin-top":"25px"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.subgroup,expression:"subgroup"}],ref:"subgroup",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.subgroup=e.target.multiple?r:r[0]}}},[r("option",[t._v("Select sub group")]),r("option",{attrs:{value:"General"}},[t._v("General")]),r("option",{attrs:{value:"Children"}},[t._v("Children")]),r("option",{attrs:{value:"Women"}},[t._v("Option B+")])])]),r("report-overlay",{attrs:{reportLoading:t.reportLoading,reportSelected:t.reportSelected}},[r("vue-bootstrap4-table",{attrs:{rows:t.rows,columns:t.columns,config:t.config,"show-loader":t.reportLoading,actions:t.actions},on:{"on-download":t.onDownload}})],1)],1)],1)])},a=[],o=(r("a4d3"),r("e01a"),r("d28b"),r("99af"),r("4de4"),r("4160"),r("13d5"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("ac1f"),r("3ca3"),r("466d"),r("5319"),r("1276"),r("159b"),r("ddb0"),r("2b3d"),r("ade3")),i=(r("96cf"),r("1da1")),s=r("8e71"),c=r("870a"),u=r("7c08"),l=r("ebd8"),d=r("2f62"),p=r("12f9"),f=r("c1df"),v=r.n(f),h=r("8051");function g(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function b(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?g(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var m={name:"reports",components:{ReportOverlay:s["a"],"top-nav":l["a"],"side-bar":u["a"],"report-date-picker":c["a"],VueBootstrap4Table:p["a"]},methods:{redirect:function(){this.$router.push("/moh")},orderObj:function(t){return Object.keys(t).sort().reduce((function(e,r){return e[r]=t[r],e}),{})},fetchData:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(e.rows=[],r.prev=1,t){r.next=4;break}return r.abrupt("return");case 4:if(e.reportQtr=t[0],e.regenerateReport=t[1],"Select cohort quarter"!=e.reportQtr){r.next=8;break}return r.abrupt("return");case 8:if("Select sub group"!=e.$refs.subgroup.value){r.next=10;break}return r.abrupt("return");case 10:return e.reportLoading=!0,e.reportSelected=!0,r.next=14,e.fetchSurvivalAnalysisData();case 14:return r.prev=14,e.reportLoading=!1,r.finish(14);case 17:case"end":return r.stop()}}),r,null,[[1,,14,17]])})))()},onDownload:function(){var t=null;this.columns.forEach((function(e){t+='"'.concat(e.label,'",')})),t=t.replace("null",""),this.rows.forEach((function(e){t+="\n",Object.keys(e).forEach((function(r){var n=e[r];Array.isArray(e[r])&&(n=e[r].length),t+='"'.concat(n,'",')}))})),t+="\n",t+="Date Created:  ".concat(v()().format("YYYY-MM-DD:h:m:s")," \n                          QuarterName: ").concat(this.reportQtr,"\n                          e-Mastercard Version : ").concat(sessionStorage.EMCVersion,"\n                          Site UUID: ").concat(sessionStorage.siteUUID," \n                          API Version ").concat(sessionStorage.APIVersion);for(var e=0;e<34;e++)t+=",";var r=new Blob([t],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(r,exportFilename);else{var n=document.createElement("a");n.href=window.URL.createObjectURL(r),n.setAttribute("download","".concat(this.reportTitle,".csv")),document.body.appendChild(n),n.click(),document.body.removeChild(n)}},fetchSurvivalAnalysisData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="cohort_survival_analysis?date="+v()().format("YYYY-MM-DD"),e+="&quarter="+this.reportQtr,e+="&age_group="+this.$refs.subgroup.value+"&program_id=1",1==this.regenerateReport?(this.regenerateReport=!1,e+="&regenerate=true"):e+="&regenerate=false",t.next=6,h["a"].get(e);case 6:if(r=t.sent,200!==r.status){t.next=16;break}return t.t0=this,t.next=11,r.json();case 11:t.t1=t.sent,t.t2=this.$refs.subgroup.value,t.t0.loadData.call(t.t0,t.t1,t.t2),t.next=16;break;case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadData:function(t,e){var r=this.orderObj(t),n={};for(var a in r){var o=r[a];for(var i in o){var s=o[i];for(var c in s)n[c]=a}}var u=Object.keys(n);u.sort((function(t,e){return n[t]-n[e]})),u=u.reverse();var l=!0,d=!1,p=void 0;try{for(var f,v=u[Symbol.iterator]();!(l=(f=v.next()).done);l=!0){var h=f.value;for(var g in n)if(h==g)for(var b in r)if(n[h]==b){b.split(" ")[1];var m=r[b],y=b,w="",D=0,S=0,x=0,_=0,C=0,O=0,k=0;for(var E in m){var R=m[E];for(var j in R)w=j,"On antiretrovirals"==E?D=m[E][j]:"Defaulted"==E?x=m[E][j]:"Patient died"==E?S=m[E][j]:E.match(/Stopped/i)?_=m[E][j]:"Patient transferred out"==E?C=m[E][j]:O=m[E][j],k+=m[E][j]}if(k>0)this.rows.push({1:y,2:w,3:e,4:k,5:"",6:D,7:S,8:x,9:_,10:C,11:O})}}}catch(A){d=!0,p=A}finally{try{l||null==v.return||v.return()}finally{if(d)throw p}}},addClass:function(t){var e=document.getElementById(t),r=e.getElementsByTagName("td");r[5].setAttribute("class","count-separator")}},data:function(){return{reportQtr:[],regenerateReport:!1,reportData:null,reportID:null,reportLoading:!1,reportSelected:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,subgroup:"Select sub group",config:{card_title:"Survival Analysis.",show_refresh_button:!1,show_reset_button:!1},actions:[{btn_text:"CSV",event_name:"on-download",class:"btn btn-primary my-custom-class"}],rows:[],columns:[{label:"Reg Cohort",name:"1",sort:!0},{label:"Interval (Months)",name:"2",sort:!0},{label:"Sub group",name:"3",sort:!0},{label:"Total Reg (database)",name:"4",sort:!0},{label:"Total Reg (confirmed)",name:"5",sort:!0},{label:"Alive",name:"6",sort:!0},{label:"Died",name:"7",sort:!0},{label:"Defaulted",name:"8",sort:!0},{label:"Stopped",name:"9",sort:!0},{label:"Transferred out",name:"10",sort:!0},{label:"Unknown",name:"11"}]}},computed:b({},Object(d["c"])(["location"]),{getSubGroup:function(){},reportTitle:function(){return"MOH ".concat(this.location.name," cohort report (Survival analysis) ").concat(this.subgroup)}}),mounted:function(){}},y=m,w=(r("317c"),r("4632"),r("2877")),D=Object(w["a"])(y,n,a,!1,null,"0a2b636e",null);e["default"]=D.exports},ac90:function(t,e,r){},d58c:function(t,e,r){},d58f:function(t,e,r){var n=r("1c0b"),a=r("7b0b"),o=r("44ad"),i=r("50c4"),s=function(t){return function(e,r,s,c){n(r);var u=a(e),l=o(u),d=i(u.length),p=t?d-1:0,f=t?-1:1;if(s<2)while(1){if(p in l){c=l[p],p+=f;break}if(p+=f,t?p<0:d<=p)throw TypeError("Reduce of empty array with no initial value")}for(;t?p>=0:d>p;p+=f)p in l&&(c=r(c,l[p],p,u));return c}};t.exports={left:s(!1),right:s(!0)}},d7ec:function(t,e,r){"use strict";var n=r("76ed"),a=r.n(n);a.a},fd65:function(t,e,r){"use strict";var n=r("ac90"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-05ce7852.49596c73.js.map