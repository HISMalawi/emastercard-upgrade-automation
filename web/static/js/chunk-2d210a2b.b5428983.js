(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210a2b"],{b975:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("PageView",[e.loading?e._e():t("UserEditForm",{attrs:{user:e.user,editMode:!0,submitText:"Update user"},on:{"on-submit":e.editUser}})],1)},a=[],s=t("15fd"),u=(t("96cf"),t("1da1")),o=t("8051"),c=t("3df9"),i=t("0c98"),d={components:{PageView:c["a"],UserEditForm:i["a"]},created:function(){this.loadUser()},computed:{userId:function(){return this.$route.params["userId"]}},data:function(){return{user:{},loading:!0}},methods:{editUser:function(e){var r=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,a,u;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.password,a=Object(s["a"])(e,["password"]),n&&n.length>0&&(a["password"]=n),t.next=4,o["a"].put("/users/".concat(r.user.user_id),a);case 4:if(u=t.sent,200===u.status){t.next=8;break}return u.text().then(alert),t.abrupt("return");case 8:r.$router.push({name:"ListUsers"});case 9:case"end":return t.stop()}}),t)})))()},fetchUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o["a"].get("/users/".concat(e.userId));case 2:if(t=r.sent,404!==t.status){r.next=8;break}return e.$router.push({name:"NotFoundError",params:{message:"User #".concat(e.userId," not found!")}}),r.abrupt("return",null);case 8:if(200===t.status){r.next=13;break}return alert("Unexpected error occurred: ".concat(t.status)),r.abrupt("return",null);case 13:return r.abrupt("return",t.json());case 14:case"end":return r.stop()}}),r)})))()},loadUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.fetchUser();case 3:t=r.sent,n=t.person.names[0],e.user={user_id:t.user_id,username:t.username,given_name:n&&n.given_name,family_name:n&&n.family_name,roles:t.roles},e.loading=!1;case 7:case"end":return r.stop()}}),r)})))()}}},p=d,m=t("2877"),l=Object(m["a"])(p,n,a,!1,null,null,null);r["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d210a2b.b5428983.js.map