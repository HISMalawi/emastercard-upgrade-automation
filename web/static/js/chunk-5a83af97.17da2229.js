(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5a83af97"],{"0178":function(e,t,r){},"3df9":function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("SideBar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("TopNav"),r("div",{staticClass:"content"},[e._t("default")],2)],1)],1)},a=[],s=r("7c08"),c=r("ebd8"),i={name:"PageView",components:{SideBar:s["a"],TopNav:c["a"]}},o=i,u=(r("d1a5"),r("2877")),l=Object(u["a"])(o,n,a,!1,null,"09d8855c",null);t["a"]=l.exports},"6b78":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("PageView",[r("UserList",{attrs:{users:e.users,"show-loader":e.loading},on:{"create-user":e.createUser,"edit-user":e.editUser,"deactivate-user":e.deactivateUser,"activate-user":e.activateUser}})],1)},a=[],s=(r("a4d3"),r("4de4"),r("4160"),r("d81d"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("3ca3"),r("159b"),r("ddb0"),r("ade3")),c=(r("96cf"),r("1da1")),i=r("8051"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("li",[e._t("default")],2)},u=[],l=r("2877"),d={},f=Object(l["a"])(d,o,u,!1,null,null,null),p=f.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"action-pane bg-light border-top border-bottom"},[r("h5",[e._v("Actions")]),r("ul",[e._t("default")],2)])},m=[],v={},h=v,g=(r("a00c"),Object(l["a"])(h,b,m,!1,null,"8c5b1c34",null)),w=g.exports,_=(r("7c08"),r("3df9")),O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("BootstrapTable",{staticClass:"table table-striped",attrs:{rows:e.users,columns:e.table.columns,config:e.table.config,actions:e.table.actions,"show-loader":e.showLoader},on:{"on-create-user":e.createUser},scopedSlots:e._u([{key:"roles",fn:function(t){return[r("ul",{staticClass:"roles-list"},e._l(t.cell_value,(function(t){return r("li",{key:t.role,staticClass:"roles-list-item"},[e._v(" "+e._s(t.role)+" ")])})),0)]}},{key:"deactivated_on",fn:function(t){return[e._v(" "+e._s(t.cell_value?e.moment(t.cell_value).format("d/MMM/YYYY"):"N/A")+" ")]}},{key:"user_id",fn:function(t){return[r("button",{attrs:{type:"button"},on:{click:function(){return e.editUser(t.cell_value)}}},[r("i",{staticClass:"fas fa-user-edit",attrs:{"aria-hidden":"true"}})]),e.userIsDeactivated(t.cell_value)?e._e():r("button",{attrs:{type:"button"},on:{click:function(){return e.deactivateUser(t.cell_value)}}},[r("i",{staticClass:"fas fa-user-minus",attrs:{"aria-hidden":"true"}})]),e.userIsDeactivated(t.cell_value)?r("button",{attrs:{type:"button"},on:{click:function(){return e.activateUser(t.cell_value)}}},[r("i",{staticClass:"fas fa-user-plus",attrs:{"aria-hidden":"true"}})]):e._e()]}}])})},y=[],j=(r("7db0"),r("c1df"),r("12f9"));function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={props:["users","showLoader"],components:{BootstrapTable:j["a"]},computed:{table_rows:function(){return this.users.map((function(e){return k({},e,{roles:e.roles.map((function(e){return e.role}))})}))}},data:function(){return{table:{actions:[{btn_text:"Add user",btn_name:"Add user",event_name:"on-create-user",class:"btn btn-primary"}],config:{card_title:"Users",global_search:{placeholder:"Search",visibility:!0}},rows:[],columns:[{label:"username",name:"username",sort:!0},{label:"Given name",name:"given_name",sort:!0},{label:"Family name",name:"family_name",sort:!0},{label:"Roles",name:"roles",sort:!1},{label:"Deactivated on",name:"deactivated_on",sort:!0},{label:"Actions",name:"user_id",sort:!1}]}}},methods:{createUser:function(){this.$emit("create-user")},editUser:function(e){this.$emit("edit-user",e)},activateUser:function(e){this.$emit("activate-user",e)},deactivateUser:function(e){this.$emit("deactivate-user",e)},getUserByUserId:function(e){return this.users.find((function(t){return t.user_id==e}))},userIsDeactivated:function(e){return!!this.getUserByUserId(e).deactivated_on}}},P=x,D=(r("9c42"),Object(l["a"])(P,O,y,!1,null,"b21ba716",null)),R=D.exports;function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={name:"Users",components:{Action:p,ActionPane:w,PageView:_["a"],UserList:R},data:function(){return{users:[],loading:!0}},mounted:function(){this.loadUsers()},methods:{loadUsers:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.fetchUsers();case 3:e.users=t.sent,e.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},fetchUsers:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){var t,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].get("users?paginate=false");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,n=r.map(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var r,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,i["a"].get("people/".concat(t.person_id,"/names"));case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,a=n[0]||{given_name:"Unknown",family_name:"Unknown",middle_name:"Unknown"},e.abrupt("return",A({},t,{},a));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=9,Promise.all(n);case 9:return e.abrupt("return",e.sent);case 10:case"end":return e.stop()}}),e)})))()},createUser:function(){this.$router.push({name:"CreateUser"})},editUser:function(e){this.$router.push({name:"EditUser",params:{userId:e}})},deactivateUser:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["a"].post("users/".concat(e,"/deactivate"));case 2:if(n=r.sent,200===n.status){r.next=6;break}return n.json().then(alert),r.abrupt("return");case 6:t.loadUsers();case 7:case"end":return r.stop()}}),r)})))()},activateUser:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,i["a"].post("users/".concat(e,"/activate"));case 2:if(n=r.sent,200===n.status){r.next=6;break}return n.json().then(alert),r.abrupt("return");case 6:t.loadUsers();case 7:case"end":return r.stop()}}),r)})))()}}},E=C,S=Object(l["a"])(E,n,a,!1,null,null,null);t["default"]=S.exports},"7db0":function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").find,s=r("44d2"),c=r("ae40"),i="find",o=!0,u=c(i);i in[]&&Array(1)[i]((function(){o=!1})),n({target:"Array",proto:!0,forced:o||!u},{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),s(i)},8519:function(e,t,r){},9186:function(e,t,r){},"9c42":function(e,t,r){"use strict";var n=r("0178"),a=r.n(n);a.a},a00c:function(e,t,r){"use strict";var n=r("9186"),a=r.n(n);a.a},d1a5:function(e,t,r){"use strict";var n=r("8519"),a=r.n(n);a.a},d81d:function(e,t,r){"use strict";var n=r("23e7"),a=r("b727").map,s=r("1dde"),c=r("ae40"),i=s("map"),o=c("map");n({target:"Array",proto:!0,forced:!i||!o},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);
//# sourceMappingURL=chunk-5a83af97.17da2229.js.map