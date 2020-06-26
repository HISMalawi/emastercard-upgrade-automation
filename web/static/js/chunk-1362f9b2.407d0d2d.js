(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1362f9b2"],{2189:function(t,e,r){},4632:function(t,e,r){"use strict";var a=r("7949"),n=r.n(a);n.a},7949:function(t,e,r){},"870a":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"control-container"},[r("select",{attrs:{id:"quarters"}},[r("option",[t._v("Select cohort quarter")]),t._l(t.quarters,(function(e,a){return r("option",{key:a,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2),r("button",{ref:"myid",staticClass:"btn btn-primary",attrs:{id:"submit-btn"},on:{click:function(e){return t.selectQuarter(!1)}}},[t._v("Archived report (if available)")]),r("button",{ref:"myid",staticClass:"btn btn-danger",attrs:{id:"generate-btn"},on:{click:function(e){return t.selectQuarter(!0)}}},[t._v("Fresh report")])])},n=[],o={data:function(){return{quarters:[]}},props:["onSubmit"],methods:{selectQuarter:function(t){var e=quarters.value?[quarters.value,t]:[];this.onSubmit(e)},enableBTN:function(){this.$refs.myid.disabled=!1},loadQuarters:function(){var t=[],e="",r=new Date;r=new Date(r.getFullYear()+"-"+(r.getMonth()+1)+"-"+r.getDate()+" 00:00");var a=r.getFullYear();r>=new Date(a+"-01-01 00:00")&&r<=new Date(a+"-03-31 00:00")?e="1 "+a:r>=new Date(a+"-04-01 00:00")&&r<=new Date(a+"-06-30 00:00")?e="2 "+a:r>=new Date(a+"-07-01 00:00")&&r<=new Date(a+"-09-30 00:00")?e="3 "+a:r>=new Date(a+"-10-01 00:00")&&r<=new Date(a+"-12-31 00:00")&&(e="4 "+a);var n=parseInt(e.substring(0,1)),o=0;while(o<5)0==o&&this.addFollowingQ(t,n,a),t.push("Q"+n+" "+a),n=n>0?n-=1:n,a=0==n?a-1:a,n=0==n?n+=4:n,o++;this.quarters=t},addFollowingQ:function(t,e,r){e<4?t.push("Q"+(e+1)+" "+r):t.push("Q1 "+(r+1))}},mounted:function(){this.loadQuarters()}},i=o,s=(r("99d2"),r("2877")),c=Object(s["a"])(i,a,n,!1,null,"f39eba7c",null);e["a"]=c.exports},"8e71":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-overlay",{attrs:{show:t.hideReport,"no-center":!0,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([{key:"overlay",fn:function(){return[r("div",{staticStyle:{display:"block","min-height":"720px",width:"100%","padding-top":"20%"}},[t.reportSelected?t._e():r("h1",[t._v("No Report Selected")]),t.reportSelected?r("b-spinner",{attrs:{type:"grow",variant:"primary"}}):t._e()],1)]},proxy:!0}])},[t._t("default")],2)},n=[],o={name:"report-overlay",props:{reportLoading:{type:Boolean,required:!0},reportSelected:{type:Boolean,default:!0}},computed:{hideReport:function(){return this.reportLoading||!this.reportSelected}}},i=o,s=r("2877"),c=Object(s["a"])(i,a,n,!1,null,null,null);e["a"]=c.exports},9331:function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[r("side-bar"),r("div",{attrs:{id:"page-content-wrapper"}},[r("top-nav"),r("div",{staticClass:"cohort"},[r("report-date-picker",{attrs:{onSubmit:t.fetchData}})],1),r("div",{staticStyle:{width:"100%","text-align":"right","margin-top":"25px"}},[r("select",{ref:"subgroup"},[r("option",[t._v("Select sub group")]),r("option",{attrs:{value:"General"}},[t._v("General")]),r("option",{attrs:{value:"Children"}},[t._v("Children")]),r("option",{attrs:{value:"Women"}},[t._v("Option B+")])])]),r("report-overlay",{attrs:{reportLoading:t.reportLoading,reportSelected:t.reportSelected}},[r("table",{staticClass:"display",attrs:{id:"example",width:"100%"}},[r("thead",[r("tr",[r("th",[t._v("Reg cohort")]),r("th",[t._v("Interval (months)")]),r("th",[t._v("Sub group")]),r("th",{staticClass:"disaggregated-numbers"},[t._v("Total Reg (database)")]),r("th",{staticClass:"disaggregated-numbers"},[t._v("Total Reg (confirmed)")]),r("th",{staticClass:"disaggregated-numbers count-separator"},[t._v("Alive")]),r("th",{staticClass:"disaggregated-numbers"},[t._v("Died")]),r("th",{staticClass:"disaggregated-numbers"},[t._v("Defaulted")]),r("th",{staticClass:"disaggregated-numbers"},[t._v("Stopped")]),r("th",{staticClass:"disaggregated-numbers"},[t._v("TO")]),r("th",{staticClass:"disaggregated-numbers"},[t._v("Unknown")])])]),r("tbody",{attrs:{id:"table-body"}})])])],1)],1)])},n=[],o=(r("a4d3"),r("4de4"),r("4160"),r("b0c0"),r("e439"),r("dbb4"),r("b64b"),r("ac1f"),r("1276"),r("159b"),r("ade3")),i=(r("96cf"),r("1da1")),s=r("8e71"),c=r("870a"),u=r("7c08"),l=r("ebd8"),d=r("2f62"),p=r("c1df"),f=r.n(p),b=r("8051"),v=r("1157"),g=r.n(v);r("6810");function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(o["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r("2cdf"),r("fd5e"),r("5caa"),r("c3dc"),r("4e95"),r("a8a1"),r("919c"),r("4b69"),r("7dae"),r("a821");var y={name:"reports",components:{ReportOverlay:s["a"],"top-nav":l["a"],"side-bar":u["a"],"report-date-picker":c["a"]},methods:{redirect:function(){this.$router.push("/moh")},fetchData:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(r.prev=0,t){r.next=3;break}return r.abrupt("return");case 3:if(e.reportQtr=t[0],e.regenerateReport=t[1],"Select cohort quarter"!=e.reportQtr){r.next=7;break}return r.abrupt("return");case 7:if("Select sub group"!=e.$refs.subgroup.value){r.next=9;break}return r.abrupt("return");case 9:return e.reportLoading=!0,e.reportSelected=!0,r.next=13,e.fetchSurvivalAnalysisData();case 13:return r.prev=13,e.reportLoading=!1,r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,,13,16]])})))()},fetchSurvivalAnalysisData:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="cohort_survival_analysis?date="+f()().format("YYYY-MM-DD"),e+="&quarter="+this.reportQtr,e+="&age_group="+this.$refs.subgroup.value+"&program_id=1",1==this.regenerateReport?(this.regenerateReport=!1,e+="&regenerate=true"):e+="&regenerate=false",console.log(e),t.next=7,b["a"].get(e);case 7:if(r=t.sent,200!==r.status){t.next=17;break}return t.t0=this,t.next=12,r.json();case 12:t.t1=t.sent,t.t2=this.$refs.subgroup.value,t.t0.loadData.call(t.t0,t.t1,t.t2),t.next=17;break;case 17:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadData:function(t,e){for(var r in this.dTable.fnClearTable(),t){r.split(" ")[1];var a=t[r],n=r,o="",i=0,s=0,c=0,u=0,l=0,d=0,p=0;for(var f in a){var b=a[f];for(var v in b)o=v,"On antiretrovirals"==f?i=a[f][v]:"Defaulted"==f?c=a[f][v]:"Patient died"==f?s=a[f][v]:"Stopped"==f?u=a[f][v]:"Patient transferred out"==f?l=a[f][v]:d=a[f][v],p+=a[f][v]}if(p>0)this.dTable.fnAddData([n,o,e,p,"",i,s,c,u,l,d])}},addClass:function(t){var e=document.getElementById(t),r=e.getElementsByTagName("td");r[5].setAttribute("class","count-separator")},initDataTable:function(){this.dTable=g()("#example").dataTable({order:[[0,"asc"]],fixedHeader:!0,searching:!1,paging:!1,Processing:!0,ServerSide:!0,scroller:{loadingIndicator:!0},dom:"Bfrtip",buttons:[{extend:"copy",title:this.reportTitle},{extend:"csv",title:this.reportTitle},{extend:"pdf",title:this.reportTitle},{extend:"print",title:this.reportTitle}],columnDefs:[{className:"dt-center",targets:4}]})}},data:function(){return{reportQtr:[],regenerateReport:!1,reportData:null,reportID:null,reportLoading:!1,reportSelected:!1}},computed:m({},Object(d["c"])(["location"]),{reportTitle:function(){return"".concat(this.location.name," MoH cohort report (Survival analysis)")}}),mounted:function(){var t=this;setTimeout((function(){return t.initDataTable()}),300)}},w=y,_=(r("96e3"),r("4632"),r("2877")),D=Object(_["a"])(w,a,n,!1,null,"b61d9426",null);e["default"]=D.exports},"96e3":function(t,e,r){"use strict";var a=r("2189"),n=r.n(a);n.a},"99d2":function(t,e,r){"use strict";var a=r("9c63"),n=r.n(a);n.a},"9c63":function(t,e,r){}}]);
//# sourceMappingURL=chunk-1362f9b2.407d0d2d.js.map