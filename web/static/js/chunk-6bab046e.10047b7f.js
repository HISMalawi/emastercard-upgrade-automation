(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6bab046e"],{"00ed":function(t,e,a){"use strict";var r=a("6aaa"),n=a.n(r);n.a},"336a":function(t,e,a){"use strict";var r=a("df61"),n=a.n(r);n.a},"4dfe":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},n=[],s=a("f0ca"),o=a.n(s),i=a("c1df"),c=a.n(i),d=(a("6f3c"),a("1789")),l={components:{DatePick:o.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:d["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return d["a"].parse(t,e)},formatDate:function(t,e){return d["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},u=l,p=(a("336a"),a("2877")),f=Object(p["a"])(u,r,n,!1,null,"15deca72",null);e["a"]=f.exports},"6aaa":function(t,e,a){},"75a6":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{attrs:{id:"main-container"}},[t._m(0),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{"z-index":"30"}},[a("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("report-overlay",{attrs:{reportLoading:t.reportLoading}},[a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Age group")]),a("th",[t._v("Gender")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Defaulted (new registration)")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Defaulted (old registration)")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Died")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Stopped")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Transferred out")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Unknown")])])]),a("tbody",{ref:"tableBody"}),a("tfoot",[a("tr",[a("td",[t._v(" Date Created: "+t._s(t.moment().format("YYYY-MM-DD:h:m:s"))+" e-Mastercard Version : "+t._s(t.EMCVersion)+" API Version "+t._s(t.APIVersion)+" ")])])])])])],1)])])],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"alert alert-info"},[a("strong",[t._v("TX ML")]),t._v(" Clients that were Alive and on treatment before the reporting period and their “next appointment date / drug runout” date falls within the reporting period. 30 or more days have gone between their appointment date and the end of the reporting period without any clinical dispensation visit. ")])])])}],s=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),o=(a("96cf"),a("1da1")),i=a("8051"),c=a("8e71"),d=a("7c08"),l=a("4dfe"),u=(a("8d9f"),a("ebd8")),p=a("c1df"),f=a.n(p),h=a("2f62"),m=a("1157"),v=a.n(m);a("6810");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a("2cdf"),a("fd5e"),a("5caa"),a("c3dc"),a("4e95"),a("a8a1"),a("919c"),a("4b69"),a("7dae"),a("a821");var b={name:"txML",components:{ReportOverlay:c["a"],"top-nav":u["a"],"side-bar":d["a"],sdPicker:l["a"]},methods:{redirect:function(t){this.$router.push(t)},initDataTable:function(){this.dTable=v()("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!0,searching:!1,paging:!1,Processing:!0,ServerSide:!0,scroller:{loadingIndicator:!0},dom:"Bfrtip",buttons:[{extend:"copy",title:this.reportTitle},{extend:"csv",title:this.reportTitle,footer:!0},{extend:"pdf",title:this.reportTitle},{extend:"print",title:this.reportTitle}]})},fetchDates:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e.startDate=t[0],e.endDate=t[1],e.reportTitle="PEPFAR "+sessionStorage.location_name+" TX ML report ",e.reportTitle+=f()(t[0]).format("DDMMMYYYY"),e.reportTitle+=" - "+f()(t[1]).format("DDMMMYYYY"),e.reportLoading=!0,a.next=9,e.loadXLdata();case 9:e.reportLoading=!1,a.next=16;break;case 12:a.prev=12,a.t0=a["catch"](0),console.error(a.t0),e.router.push({name:"error",params:{message:a.t0.message}});case 16:case"end":return a.stop()}}),a,null,[[0,12]])})))()},loadXLdata:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(){var e,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="tx_ml?date="+f()().format("YYYY-MM-DD"),e+="&start_date="+this.startDate,e+="&end_date="+this.endDate,e+="&program_id=1",t.next=6,i["a"].get(e);case 6:if(a=t.sent,200!==a.status){t.next=13;break}return t.t0=this,t.next=11,a.json();case 11:t.t1=t.sent,t.t0.loadGroupData.call(t.t0,t.t1);case 13:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadGroupData:function(t){this.initDataTable();var e=1,a=["F","M"],r=this.ageGroups;this.dTable.fnClearTable();for(var n=0;n<a.length;n++)for(var s=!1,o=0;o<r.length;o++){for(var i in t){var c=t[i];for(var d in c)if(i==r[o]&&d==a[n]){var l=c[d];this.dTable.fnAddData([e++,i,d,l[0].length,l[1].length,l[2].length,l[3].length,l[4].length,l[5].length]),s=!0}}s?s=!1:this.dTable.fnAddData([e++,r[o],a[n],0,0,0,0,0,0])}}},data:function(){return{startDate:null,endDate:null,reportLoading:!1,APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion,reportTitle:null,ageGroups:["0-5 months","6-11 months","12-23 months","2-4 years","5-9 years","10-14 years","15-17 years","18-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50 plus years"]}},computed:D({},Object(h["c"])(["location"])),mounted:function(){}},y=b,Y=(a("00ed"),a("2877")),_=Object(Y["a"])(y,r,n,!1,null,"650d762a",null);e["default"]=_.exports},"8d9f":function(t,e,a){"use strict";var r=a("c1df"),n=a.n(r);e["a"]=function(){var t="YYYY-MM-DD",e="DD/MM/YYYY";function a(t){var e=t.getMonth(),a=t.getFullYear();return e<3?["".concat(a,"-01-01"),"".concat(a,"-03-31")]:e<6?["".concat(a,"-04-01"),"".concat(a,"-06-30")]:e<9?["".concat(a,"-07-01"),"".concat(a,"-09-30")]:["".concat(a,"-10-01"),"".concat(a,"-12-31")]}function r(t){var e=t.getMonth(),a=t.getFullYear();return e<3?"Q1-".concat(a):e<6?"Q2-".concat(a):e<9?"Q3-".concat(a):"Q4-".concat(a)}function s(e){return n()(e).format(t)}function o(t){return n()(t).format(e)}return{ISO_FORMAT:t,LOCAL_FORMAT:e,dateQuarter:a,dateQuarterStr:r,isoDate:s,localDate:o}}()},"8e71":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-overlay",{attrs:{show:t.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([{key:"overlay",fn:function(){return[a("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[t.reportSelected?t._e():a("h1",[t._v("No Report Selected")]),t.reportSelected?a("b-spinner",{attrs:{type:"grow",variant:"primary"}}):t._e()],1)]},proxy:!0}])},[t._t("default")],2)},n=[],s={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},o=s,i=a("2877"),c=Object(i["a"])(o,r,n,!1,null,null,null);e["a"]=c.exports},df61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6bab046e.10047b7f.js.map