(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1086e090"],{"059d":function(t,e,n){},1276:function(t,e,n){"use strict";var r=n("d784"),a=n("44e7"),i=n("825a"),s=n("1d80"),c=n("4840"),u=n("8aa5"),o=n("50c4"),l=n("14c3"),d=n("9263"),f=n("d039"),p=[].push,h=Math.min,g=4294967295,v=!f((function(){return!RegExp(g,"y")}));r("split",2,(function(t,e,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,n){var r=String(s(this)),i=void 0===n?g:n>>>0;if(0===i)return[];if(void 0===t)return[r];if(!a(t))return e.call(r,t,i);var c,u,o,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=new RegExp(t.source,f+"g");while(c=d.call(v,r)){if(u=v.lastIndex,u>h&&(l.push(r.slice(h,c.index)),c.length>1&&c.index<r.length&&p.apply(l,c.slice(1)),o=c[0].length,h=u,l.length>=i))break;v.lastIndex===c.index&&v.lastIndex++}return h===r.length?!o&&v.test("")||l.push(""):l.push(r.slice(h)),l.length>i?l.slice(0,i):l}:"0".split(void 0,0).length?function(t,n){return void 0===t&&0===n?[]:e.call(this,t,n)}:e,[function(e,n){var a=s(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,n):r.call(String(a),e,n)},function(t,a){var s=n(r,t,this,a,r!==e);if(s.done)return s.value;var d=i(t),f=String(this),p=c(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(v?"y":"g"),x=new p(v?d:"^(?:"+d.source+")",b),_=void 0===a?g:a>>>0;if(0===_)return[];if(0===f.length)return null===l(x,f)?[f]:[];var w=0,y=0,P=[];while(y<f.length){x.lastIndex=v?y:0;var C,S=l(x,v?f:f.slice(y));if(null===S||(C=h(o(x.lastIndex+(v?0:y)),f.length))===w)y=u(f,y,m);else{if(P.push(f.slice(w,y)),P.length===_)return P;for(var R=1;R<=S.length-1;R++)if(P.push(S[R]),P.length===_)return P;y=w=C}}return P.push(f.slice(w)),P}]}),!v)},"13d5":function(t,e,n){"use strict";var r=n("23e7"),a=n("d58f").left,i=n("a640"),s=n("ae40"),c=i("reduce"),u=s("reduce",{1:0});r({target:"Array",proto:!0,forced:!c||!u},{reduce:function(t){return a(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},3558:function(t,e,n){t.exports=n.p+"img/female-2.20980733.png"},3835:function(t,e,n){"use strict";function r(t){if(Array.isArray(t))return t}n.d(e,"a",(function(){return s}));n("a4d3"),n("e01a"),n("d28b"),n("e260"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0");function a(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,i=void 0;try{for(var s,c=t[Symbol.iterator]();!(r=(s=c.next()).done);r=!0)if(n.push(s.value),e&&n.length===e)break}catch(u){a=!0,i=u}finally{try{r||null==c["return"]||c["return"]()}finally{if(a)throw i}}return n}}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){return r(t)||a(t,e)||i()}},"3df9":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[n("SideBar"),n("div",{attrs:{id:"page-content-wrapper"}},[n("TopNav"),n("div",{staticClass:"content"},[t._t("default")],2)],1)],1)},a=[],i=n("7c08"),s=n("ebd8"),c={name:"PageView",components:{SideBar:i["a"],TopNav:s["a"]}},u=c,o=(n("d1a5"),n("2877")),l=Object(o["a"])(u,r,a,!1,null,"09d8855c",null);e["a"]=l.exports},"3e2d":function(t,e,n){"use strict";var r=n("059d"),a=n.n(r);a.a},"466d":function(t,e,n){"use strict";var r=n("d784"),a=n("825a"),i=n("50c4"),s=n("1d80"),c=n("8aa5"),u=n("14c3");r("match",1,(function(t,e,n){return[function(e){var n=s(this),r=void 0==e?void 0:e[t];return void 0!==r?r.call(e,n):new RegExp(e)[t](String(n))},function(t){var r=n(e,t,this);if(r.done)return r.value;var s=a(t),o=String(this);if(!s.global)return u(s,o);var l=s.unicode;s.lastIndex=0;var d,f=[],p=0;while(null!==(d=u(s,o))){var h=String(d[0]);f[p]=h,""===h&&(s.lastIndex=c(o,i(s.lastIndex),l)),p++}return 0===p?null:f}]}))},"4fad":function(t,e,n){var r=n("23e7"),a=n("6f53").entries;r({target:"Object",stat:!0},{entries:function(t){return a(t)}})},"50e8":function(t,e,n){"use strict";n("99af"),n("4de4"),n("13d5"),n("4fad"),n("d3b7"),n("ac1f"),n("466d"),n("1276");var r=n("3835"),a=(n("96cf"),n("1da1")),i=n("8051"),s=n("7833");e["a"]=function(){function t(t){return e.apply(this,arguments)}function e(){return e=Object(a["a"])(regeneratorRuntime.mark((function t(e){var r,a,i,s,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.searchText,a=e.gender,t.next=3,l(r);case 3:i=t.sent,s=i.type,c=i.value,t.t0=s,t.next="name"===t.t0?9:"arv_number"===t.t0?12:15;break;case 9:return t.next=11,u(c,a);case 11:return t.abrupt("return",t.sent);case 12:return t.next=14,n(c);case 14:return t.abrupt("return",t.sent);case 15:throw new Error("Failed to parse searchText: ".concat(r));case 16:case"end":return t.stop()}}),t)}))),e.apply(this,arguments)}function n(t){return c.apply(this,arguments)}function c(){return c=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="search/patients/by_identifier?type_id=4&identifier=".concat(e),t.next=3,i["a"].get(n);case 3:if(r=t.sent,200===r.status){t.next=6;break}throw new Error("Patient search request to API failed");case 6:return t.next=8,r.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)}))),c.apply(this,arguments)}function u(t,e){return o.apply(this,arguments)}function o(){return o=Object(a["a"])(regeneratorRuntime.mark((function t(e,n){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=p(h(e,n)),t.next=3,i["a"].get("search/patients?".concat(r));case 3:if(a=t.sent,200===a.status){t.next=6;break}throw new Error("Patient search request to API failed");case 6:return t.next=8,a.json();case 8:return t.abrupt("return",t.sent);case 9:case"end":return t.stop()}}),t)}))),o.apply(this,arguments)}function l(t){return d.apply(this,arguments)}function d(){return d=Object(a["a"])(regeneratorRuntime.mark((function t(e){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.match(/^(\w+-ARV-\w+)$/)){t.next=2;break}return t.abrupt("return",{type:"arv_number",value:e});case 2:if(!e.match(/^(\d+)$/)){t.next=7;break}return t.next=5,s["a"].getSitePrefix();case 5:return n=t.sent,t.abrupt("return",{type:"arv_number",value:"".concat(n,"-ARV-").concat(e)});case 7:return t.abrupt("return",{type:"name",value:e});case 8:case"end":return t.stop()}}),t)}))),d.apply(this,arguments)}var f=function(){var t=Object(a["a"])(regeneratorRuntime.mark((function t(){var e,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:{},t.abrupt("return",new Promise((function(t,n){i["a"].remove("patients/".concat(e.patient_id,"?reason=").concat(e.reason)),t({status:200})})));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();function p(t){return Object.entries(t).reduce((function(t,e){var n=Object(r["a"])(e,2),a=n[0],i=n[1];return i&&0!==i.length?"".concat(t,"&").concat(a,"=").concat(encodeURIComponent(i)):t}),"")}function h(t,e){var n={},r=t.split(" ").filter((function(t){return/\S/.test(t)}));return r.length>0&&(n.given_name=r[0],r[1]&&(n.family_name=r[1]),r[2]&&(n.middle_name=r[1],n.family_name=r[2])),e&&(n.gender=e),n}return{searchPatients:t,searchPatientsByARVNumber:n,searchPatientsByNameAndGender:u,voidPatient:f}}()},"555f":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"d-flex justify-content-center",attrs:{id:"loader"}},[n("b-spinner",{attrs:{type:"grow",variant:"primary",label:"Loading"}})],1):t._e()},a=[],i={props:["loading"]},s=i,c=(n("7991"),n("2877")),u=Object(c["a"])(s,r,a,!1,null,"8d43011a",null);e["a"]=u.exports},"6f53":function(t,e,n){var r=n("83ab"),a=n("df75"),i=n("fc6a"),s=n("d1e7").f,c=function(t){return function(e){var n,c=i(e),u=a(c),o=u.length,l=0,d=[];while(o>l)n=u[l++],r&&!s.call(c,n)||d.push(t?[n,c[n]]:c[n]);return d}};t.exports={entries:c(!0),values:c(!1)}},7833:function(t,e,n){"use strict";n("96cf");var r=n("1da1"),a=n("8051");e["a"]=function(){function t(){return e.apply(this,arguments)}function e(){return e=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].get("global_properties?property=site_prefix");case 2:return e=t.sent,404===e.status&&alert("Site prefix not set, set it in settings/ site_prefix"),t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n.site_prefix);case 8:case"end":return t.stop()}}),t)}))),e.apply(this,arguments)}function n(){return i.apply(this,arguments)}function i(){return i=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a["a"].get("global_properties?property=site_uuid");case 2:return e=t.sent,404===e.status&&alert("Site UUID not set, set it in settings/ site_uuid"),t.next=6,e.json();case 6:return n=t.sent,t.abrupt("return",n.site_uuid);case 8:case"end":return t.stop()}}),t)}))),i.apply(this,arguments)}return{getSitePrefix:t,getSiteUUID:n}}()},7991:function(t,e,n){"use strict";var r=n("94b5"),a=n.n(r);a.a},8370:function(t,e,n){},8519:function(t,e,n){},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"94b5":function(t,e,n){},a434:function(t,e,n){"use strict";var r=n("23e7"),a=n("23cb"),i=n("a691"),s=n("50c4"),c=n("7b0b"),u=n("65f0"),o=n("8418"),l=n("1dde"),d=n("ae40"),f=l("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,g=Math.min,v=9007199254740991,m="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var n,r,l,d,f,p,b=c(this),x=s(b.length),_=a(t,x),w=arguments.length;if(0===w?n=r=0:1===w?(n=0,r=x-_):(n=w-2,r=g(h(i(e),0),x-_)),x+n-r>v)throw TypeError(m);for(l=u(b,r),d=0;d<r;d++)f=_+d,f in b&&o(l,d,b[f]);if(l.length=r,n<r){for(d=_;d<x-r;d++)f=d+r,p=d+n,f in b?b[p]=b[f]:delete b[p];for(d=x;d>x-r+n;d--)delete b[d-1]}else if(n>r)for(d=x-r;d>_;d--)f=d+r-1,p=d+n-1,f in b?b[p]=b[f]:delete b[p];for(d=0;d<n;d++)b[d+_]=arguments[d+2];return b.length=x-r+n,l}})},c782:function(t,e,n){"use strict";var r=n("cd59"),a=n.n(r);a.a},cd59:function(t,e,n){},cf38:function(t,e,n){t.exports=n.p+"img/male-1.9c278b65.png"},d1a5:function(t,e,n){"use strict";var r=n("8519"),a=n.n(r);a.a},d58f:function(t,e,n){var r=n("1c0b"),a=n("7b0b"),i=n("44ad"),s=n("50c4"),c=function(t){return function(e,n,c,u){r(n);var o=a(e),l=i(o),d=s(o.length),f=t?d-1:0,p=t?-1:1;if(c<2)while(1){if(f in l){u=l[f],f+=p;break}if(f+=p,t?f<0:d<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:d>f;f+=p)f in l&&(u=n(u,l[f],f,o));return u}};t.exports={left:c(!1),right:c(!0)}},dcc0:function(t,e,n){"use strict";var r=n("8370"),a=n.n(r);a.a},f742:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("PageView",[n("div",{staticClass:"row"},t._l(t.errors,(function(e,r){return n("div",{key:r,staticClass:"alert alert-danger alert-dismissible fade show col-md-8 offset-md-2",attrs:{role:"alert"}},[t._v(" "+t._s(e)+" "),n("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"},on:{click:function(){return t.onDeleteError(r)}}},[n("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])})),0),n("div",{staticClass:"row",staticStyle:{margin:"0"}},[n("div",{staticClass:"col-md-5"},[n("h5",[t._v("Primary Patient")]),n("PatientList",{attrs:{patients:t.targetPatients},on:{"on-search":t.searchTargetPatients,"on-patient-selected":t.onSelectTargetPatient}})],1),n("div",{staticClass:"col-md-1"},[n("div",{staticStyle:{margin:"auto",position:"relative",top:"45%"}},[n("Loader",{attrs:{loading:t.isMerging}}),t.isMerging?t._e():n("i",{staticClass:"fas fa-chevron-left fa-3x"})],1)]),n("div",{staticClass:"col-md-5"},[n("h5",[t._v("Secondary Patient")]),n("PatientList",{attrs:{patients:t.sourcePatients},on:{"on-search":t.searchSourcePatients,"on-patient-selected":t.onSelectSourcePatient}})],1)]),n("button",{staticClass:"btn btn-primary btn-lg shadow",attrs:{id:"merge-button",disabled:t.isMerging},on:{click:t.mergeSelectedPatients}},[t._v(" Merge ")])])},a=[],i=(n("4de4"),n("a434"),n("96cf"),n("1da1")),s=n("8051"),c=n("50e8"),u=n("555f"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"patient-list-container shadow rounded"},[n("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.triggerSearch(e)}}},[n("div",{staticClass:"input-group mb-2 mr-sm-2"},[t._m(0),n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchText,expression:"searchText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name or ARV Number"},domProps:{value:t.searchText},on:{input:function(e){e.target.composing||(t.searchText=e.target.value)}}})])]),n("div",{staticClass:"patient-list"},t._l(t.patients,(function(e){return n("PatientListItem",{key:e.patient_id,staticStyle:{width:"96%"},attrs:{patient:e,selected:e.patient_id===t.selectedPatientId},on:{"on-click":t.onPatientCardSelected}})})),1)])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"input-group-prepend"},[n("div",{staticClass:"input-group-text"},[n("i",{staticClass:"fas fa-search"})])])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card mb-2 shadow-lg card-hover",class:t.selected&&"card-selected",staticStyle:{width:"100%"},on:{click:t.triggerOnClick}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3",staticStyle:{margin:"auto"}},[n("img",{staticClass:"card-img rounded-circle",attrs:{src:t.imageType,alt:"avatar"}})]),n("div",{staticClass:"col-md-8"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title",staticStyle:{"text-align":"left"}},[t._v(t._s(t.fullName)+" - "+t._s(t.arvNumber))]),n("table",{staticClass:"table patient-details"},[n("tbody",[n("tr",[n("td",[t._v("DoB:")]),n("td",[t._v(t._s(t.formattedAge))])]),n("tr",[n("td",[t._v("Phone #:")]),n("td",[t._v(t._s(t.phoneNumber))])]),n("tr",[n("td",[t._v("Address:")]),n("td",[t._v(t._s(t.address))])]),n("tr",[n("td",[t._v("Visits:")]),n("td",[t._v(t._s(t.visitsCount))])])])])])])])])},f=[],p=(n("99af"),n("b0c0"),n("c1df")),h=n.n(p),g=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),function(){return{ATTR_LANDMARK:19,ATTR_CELLPHONE_NUMBER:12,ATTR_NEXT_OF_KIN:24,ATTR_NEXT_OF_KIN_CONTANT_NUMBER:25,getPersonAttribute:function(t,e){var n=!0,r=!1,a=void 0;try{for(var i,s=t.person_attributes[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var c=i.value;if(c.person_attribute_type_id==e)return c.value}}catch(u){r=!0,a=u}finally{try{n||null==s.return||s.return()}finally{if(r)throw a}}}}}()),v={props:["patient","selected"],created:function(){var t=this;s["a"].get("patients/".concat(this.patient.patient_id,"/visits")).then((function(t){return t.json()})).then((function(e){return t.visits=e}))},data:function(){return{visits:[]}},computed:{fullName:function(){var t=this.patient.person.names[0],e=t.given_name,n=t.family_name;return" ".concat(e," ").concat(n)},formattedAge:function(){return"".concat(h()(this.patient.person.birthdate).format("DD-MMM-YYYY")," (").concat(h()().diff(this.patient.person.birthdate,"years",!1)," years old)")},imageType:function(){return"M"===this.patient.person.gender?n("cf38"):n("3558")},arvNumber:function(){var t=this.patient.patient_identifiers.filter((function(t){return"ARV Number"===t.type.name}));return t.length>0?t[0].identifier:"N/A"},address:function(){return g.getPersonAttribute(this.patient.person,g.ATTR_LANDMARK)||"Unknown"},phoneNumber:function(){return g.getPersonAttribute(this.patient.person,g.ATTR_CELLPHONE_NUMBER)||"Unknown"},visitsCount:function(){return this.visits.length}},methods:{triggerOnClick:function(){this.$emit("on-click",this.patient.patient_id)}}},m=v,b=(n("dcc0"),n("2877")),x=Object(b["a"])(m,d,f,!1,null,"7b83db7f",null),_=x.exports,w={components:{PatientListItem:_},props:["patients"],data:function(){return{searchText:"",selectedPatientId:null}},methods:{triggerSearch:function(){this.$emit("on-search",this.searchText)},onPatientCardSelected:function(t){this.selectedPatientId=t,this.$emit("on-patient-selected",t)}}},y=w,P=(n("c782"),Object(b["a"])(y,o,l,!1,null,"cc3946ae",null)),C=P.exports,S=n("3df9"),R={components:{Loader:u["a"],PatientList:C,PageView:S["a"]},props:["patients"],data:function(){return{targetPatients:[],targetName:null,targetPatientId:null,sourcePatients:[],sourceName:null,sourcePatientId:null,errors:[],isMerging:!1}},methods:{searchTargetPatients:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c["a"].searchPatients({searchText:t});case 3:e.targetPatients=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),alert(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},searchSourcePatients:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c["a"].searchPatients({searchText:t});case 3:e.sourcePatients=n.sent,n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),alert(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})))()},onSelectTargetPatient:function(t){this.targetPatientId=t},onSelectSourcePatient:function(t){this.sourcePatientId=t},onDeleteError:function(t){this.errors.splice(t,1)},mergeSelectedPatients:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.validateSelection()){e.next=2;break}return e.abrupt("return");case 2:return t.isMerging=!0,n=[{doc_id:null,patient_id:t.sourcePatientId}],r={doc_id:null,patient_id:t.targetPatientId},e.next=7,s["a"].post("dde/patients/merge",{secondary:n,primary:r,program_id:1});case 7:if(a=e.sent,200===a.status){e.next=15;break}return e.next=11,a.text();case 11:return i=e.sent,t.errors=["Merge failed: API responded: ".concat(i)],t.isMerging=!1,e.abrupt("return");case 15:t.sourcePatients=t.sourcePatients.filter((function(e){var n=e.patient_id;return n!=t.sourcePatientId})),t.targetPatients=t.targetPatients.filter((function(e){var n=e.patient_id;return n!=t.sourcePatientId})),t.sourcePatientId=null,t.isMerging=!1;case 19:case"end":return e.stop()}}),e)})))()},validateSelection:function(){return this.targetPatientId?this.sourcePatientId?this.targetPatientId!==this.sourcePatientId||(this.errors=["Can't merge patient to self"],!1):(this.errors=["Please select a source patient"],!1):(this.errors=["Please select a target patient"],!1)}}},k=R,T=(n("3e2d"),Object(b["a"])(k,r,a,!1,null,"3b58a392",null));e["default"]=T.exports}}]);
//# sourceMappingURL=chunk-1086e090.d79f7d81.js.map