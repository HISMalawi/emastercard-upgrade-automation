(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1fbe1780"],{"336a":function(t,e,a){"use strict";var r=a("df61"),n=a.n(r);n.a},"4dfe":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},n=[],s=a("f0ca"),i=a.n(s),o=a("c1df"),c=a.n(o),l=(a("6f3c"),a("1789")),d={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return l["a"].parse(t,e)},formatDate:function(t,e){return l["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},u=d,p=(a("336a"),a("2877")),f=Object(p["a"])(u,r,n,!1,null,"15deca72",null);e["a"]=f.exports},"6c4d":function(t,e,a){},"7a99":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{attrs:{id:"main-container"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{"z-index":"40"}},[a("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("report-overlay",{attrs:{reportLoading:t.reportLoading}},[a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Age group")]),a("th",[t._v("Gender")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Returned after 30+ days")])])]),a("tbody",{ref:"tableBody"})])])],1)])])],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"alert alert-info"},[a("strong",[t._v("TX RTT")]),t._v(" Clients that have their clinical dispensation visit falling in the reporting period and there is a difference of 30 or more days between their visit date and their previous appointment date / runout date ")])])])}],s=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),i=(a("96cf"),a("1da1")),o=a("8051"),c=a("ebd8"),l=a("7c08"),d=a("8e71"),u=a("8d9f"),p=a("c1df"),f=a.n(p),h=a("2f62"),v=a("4dfe"),b=a("1157"),D=a.n(b);a("6810");function m(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?m(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a("2cdf"),a("fd5e"),a("5caa"),a("c3dc"),a("4e95"),a("a8a1"),a("919c"),a("4b69"),a("7dae"),a("a821");var y={name:"txML",components:{ReportOverlay:d["a"],"top-nav":c["a"],"side-bar":l["a"],sdPicker:v["a"]},methods:{redirect:function(t){this.$router.push(t)},initDataTable:function(){this.dTable=D()("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!0,searching:!1,paging:!1,Processing:!0,ServerSide:!0,scroller:{loadingIndicator:!0},dom:"Bfrtip",buttons:[{extend:"copy",title:this.reportTitle},{extend:"csv",title:this.reportTitle},{extend:"pdf",title:this.reportTitle},{extend:"print",title:this.reportTitle}]})},fetchDates:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.startDate=t[0],e.endDate=t[1],e.reportLoading=!0,a.next=6,e.loadXLdata();case 6:e.reportLoading=!1,a.next=13;break;case 9:a.prev=9,a.t0=a["catch"](0),console.error(a.t0),e.router.push({name:"error",params:{message:a.t0.message}});case 13:case"end":return a.stop()}}),a,null,[[0,9]])})))()},loadXLdata:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="tx_rtt?date="+f()().format("YYYY-MM-DD"),e+="&start_date="+this.startDate,e+="&end_date="+this.endDate,e+="&program_id=1",t.next=6,o["a"].get(e);case 6:if(a=t.sent,200!==a.status){t.next=13;break}return t.t0=this,t.next=11,a.json();case 11:t.t1=t.sent,t.t0.loadGroupData.call(t.t0,t.t1);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadGroupData:function(t){var e=1,a=["F","M"],r=this.ageGroups;this.dTable.fnClearTable();for(var n=0;n<a.length;n++)for(var s=!1,i=0;i<r.length;i++){for(var o in t){var c=t[o];for(var l in c){if(o==r[i]&&l==a[n]){var d=c[l];this.dTable.fnAddData([e++,o,l,d.length]),s=!0;break}if(1==s)break}if(1==s)break}s?s=!1:this.dTable.fnAddData([e++,r[i],a[n],0])}}},data:function(){return{reportLoading:!1,startDate:null,endDate:null,ageGroups:["0-5 months","6-11 months","12-23 months","2-4 years","5-9 years","10-14 years","15-17 years","18-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50 plus years"]}},computed:g({},Object(h["c"])(["location"]),{reportTitle:function(){var t=this.startDate&&this.endDate?"".concat(u["a"].localDate(this.startDate)," - ").concat(u["a"].localDate(this.endDate)):"";return"".concat(this.location.name," TX RTT: ").concat(t)}}),mounted:function(){this.$nextTick(this.initDataTable)}},w=y,Y=(a("7c6e"),a("2877")),O=Object(Y["a"])(w,r,n,!1,null,"10567433",null);e["default"]=O.exports},"7c6e":function(t,e,a){"use strict";var r=a("6c4d"),n=a.n(r);n.a},"8d9f":function(t,e,a){"use strict";var r=a("c1df"),n=a.n(r);e["a"]=function(){var t="YYYY-MM-DD",e="DD/MM/YYYY";function a(t){var e=t.getMonth(),a=t.getFullYear();return e<3?["".concat(a,"-01-01"),"".concat(a,"-03-31")]:e<6?["".concat(a,"-04-01"),"".concat(a,"-06-30")]:e<9?["".concat(a,"-07-01"),"".concat(a,"-09-30")]:["".concat(a,"-10-01"),"".concat(a,"-12-31")]}function r(t){var e=t.getMonth(),a=t.getFullYear();return e<3?"Q1-".concat(a):e<6?"Q2-".concat(a):e<9?"Q3-".concat(a):"Q4-".concat(a)}function s(e){return n()(e).format(t)}function i(t){return n()(t).format(e)}return{ISO_FORMAT:t,LOCAL_FORMAT:e,dateQuarter:a,dateQuarterStr:r,isoDate:s,localDate:i}}()},"8e71":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-overlay",{attrs:{show:t.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([{key:"overlay",fn:function(){return[a("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[t.reportSelected?t._e():a("h1",[t._v("No Report Selected")]),t.reportSelected?a("b-spinner",{attrs:{type:"grow",variant:"primary"}}):t._e()],1)]},proxy:!0}])},[t._t("default")],2)},n=[],s={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},i=s,o=a("2877"),c=Object(o["a"])(i,r,n,!1,null,null,null);e["a"]=c.exports},df61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1fbe1780.a64fc57e.js.map