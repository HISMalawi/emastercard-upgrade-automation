(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d210a2b"],{b975:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("PageView",[t("UserEditForm",{attrs:{loading:e.loading,user:e.user,editMode:!0,submitText:"Update user"},on:{"on-submit":e.editUser}})],1)},a=[],s=(t("a15b"),t("15fd")),u=(t("96cf"),t("1da1")),o=t("8051"),i=t("3df9"),c=t("0c98"),d={components:{PageView:i["a"],UserEditForm:c["a"]},created:function(){this.loadUser()},computed:{userId:function(){return this.$route.params["userId"]}},data:function(){return{user:{},loading:!0}},methods:{editUser:function(e){var r=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var n,a,u,i,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r.loading=!0,n=e.password,a=Object(s["a"])(e,["password"]),n&&n.length>0&&(a["password"]=n),t.next=6,o["a"].put("/users/".concat(r.user.user_id),a);case 6:if(u=t.sent,200===u.status){t.next=14;break}return t.next=10,u.json();case 10:return i=t.sent,c=i.errors,r.$vbToast.toast("Failed to update user: ".concat(c.join(", ")),{title:"Error",variant:"danger"}),t.abrupt("return");case 14:r.$router.push({name:"ListUsers"});case 15:return t.prev=15,r.loading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[0,,15,18]])})))()},fetchUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,o["a"].get("/users/".concat(e.userId));case 2:if(t=r.sent,404!==t.status){r.next=8;break}return e.$router.push({name:"NotFoundError",params:{message:"User #".concat(e.userId," not found!")}}),r.abrupt("return",null);case 8:if(200===t.status){r.next=13;break}return alert("Unexpected error occurred: ".concat(t.status)),r.abrupt("return",null);case 13:return r.abrupt("return",t.json());case 14:case"end":return r.stop()}}),r)})))()},loadUser:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loading=!0,r.next=3,e.fetchUser();case 3:t=r.sent,n=t.person.names[0],e.user={user_id:t.user_id,username:t.username,given_name:n&&n.given_name,family_name:n&&n.family_name,roles:t.roles},e.loading=!1;case 7:case"end":return r.stop()}}),r)})))()}}},l=d,p=t("2877"),m=Object(p["a"])(l,n,a,!1,null,null,null);r["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d210a2b.a1800d3f.js.map