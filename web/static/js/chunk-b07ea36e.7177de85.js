(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b07ea36e"],{"0452":function(t,e,a){},"336a":function(t,e,a){"use strict";var i=a("df61"),s=a.n(i);s.a},"4dfe":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},s=[],o=a("f0ca"),r=a.n(o),n=a("c1df"),d=a.n(n),l=(a("6f3c"),a("1789")),c={components:{DatePick:r.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=d()(this.startDate).format("YYYY-MM-DD"),this.endDate=d()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return l["a"].parse(t,e)},formatDate:function(t,e){return l["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},f=c,h=(a("336a"),a("2877")),u=Object(h["a"])(f,i,s,!1,null,"15deca72",null);e["a"]=u.exports},"728d":function(t,e,a){var i,s;a("7db0"),a("d81d");a("7037");
/*!
 FixedHeader 3.1.3
 ©2009-2017 SpryMedia Ltd - datatables.net/license
*/(function(o){i=[a("1157"),a("1653")],s=function(t){return o(t,window,document)}.apply(e,i),void 0===s||(t.exports=s)})((function(t,e,a,i){var s=t.fn.dataTable,o=0,r=function a(i,r){if(!(this instanceof a))throw"FixedHeader must be initialised with the 'new' keyword.";!0===r&&(r={}),i=new s.Api(i),this.c=t.extend(!0,{},a.defaults,r),this.s={dt:i,position:{theadTop:0,tbodyTop:0,tfootTop:0,tfootBottom:0,width:0,left:0,tfootHeight:0,theadHeight:0,windowHeight:t(e).height(),visible:!0},headerMode:null,footerMode:null,autoWidth:i.settings()[0].oFeatures.bAutoWidth,namespace:".dtfc"+o++,scrollLeft:{header:-1,footer:-1},enable:!0},this.dom={floatingHeader:null,thead:t(i.table().header()),tbody:t(i.table().body()),tfoot:t(i.table().footer()),header:{host:null,floating:null,placeholder:null},footer:{host:null,floating:null,placeholder:null}},this.dom.header.host=this.dom.thead.parent(),this.dom.footer.host=this.dom.tfoot.parent();var n=i.settings()[0];if(n._fixedHeader)throw"FixedHeader already initialised on table "+n.nTable.id;n._fixedHeader=this,this._constructor()};return t.extend(r.prototype,{enable:function(t){this.s.enable=t,this.c.header&&this._modeChange("in-place","header",!0),this.c.footer&&this.dom.tfoot.length&&this._modeChange("in-place","footer",!0),this.update()},headerOffset:function(t){return t!==i&&(this.c.headerOffset=t,this.update()),this.c.headerOffset},footerOffset:function(t){return t!==i&&(this.c.footerOffset=t,this.update()),this.c.footerOffset},update:function(){this._positions(),this._scroll(!0)},_constructor:function(){var a=this,i=this.s.dt;t(e).on("scroll"+this.s.namespace,(function(){a._scroll()})).on("resize"+this.s.namespace,(function(){a.s.position.windowHeight=t(e).height(),a.update()}));var s=t(".fh-fixedHeader");!this.c.headerOffset&&s.length&&(this.c.headerOffset=s.outerHeight()),s=t(".fh-fixedFooter"),!this.c.footerOffset&&s.length&&(this.c.footerOffset=s.outerHeight()),i.on("column-reorder.dt.dtfc column-visibility.dt.dtfc draw.dt.dtfc column-sizing.dt.dtfc",(function(){a.update()})),i.on("destroy.dtfc",(function(){i.off(".dtfc"),t(e).off(a.s.namespace)})),this._positions(),this._scroll()},_clone:function(e,a){var i=this.s.dt,s=this.dom[e],o="header"===e?this.dom.thead:this.dom.tfoot;!a&&s.floating?s.floating.removeClass("fixedHeader-floating fixedHeader-locked"):(s.floating&&(s.placeholder.remove(),this._unsize(e),s.floating.children().detach(),s.floating.remove()),s.floating=t(i.table().node().cloneNode(!1)).css("table-layout","fixed").removeAttr("id").append(o).appendTo("body"),s.placeholder=o.clone(!1),s.placeholder.find("*[id]").removeAttr("id"),s.host.prepend(s.placeholder),this._matchWidths(s.placeholder,s.floating))},_matchWidths:function(e,a){var i=function(a){return t(a,e).map((function(){return t(this).width()})).toArray()},s=function(e,i){t(e,a).each((function(e){t(this).css({width:i[e],minWidth:i[e]})}))},o=i("th");i=i("td");s("th",o),s("td",i)},_unsize:function(e){var a=this.dom[e].floating;a&&("footer"===e||"header"===e&&!this.s.autoWidth)?t("th, td",a).css({width:"",minWidth:""}):a&&"header"===e&&t("th, td",a).css("min-width","")},_horizontal:function(t,e){var a=this.dom[t],i=this.s.position,s=this.s.scrollLeft;a.floating&&s[t]!==e&&(a.floating.css("left",i.left-e),s[t]=e)},_modeChange:function(e,i,s){var o=this.dom[i],r=this.s.position,n=t.contains(this.dom["footer"===i?"tfoot":"thead"][0],a.activeElement)?a.activeElement:null;"in-place"===e?(o.placeholder&&(o.placeholder.remove(),o.placeholder=null),this._unsize(i),"header"===i?o.host.prepend(this.dom.thead):o.host.append(this.dom.tfoot),o.floating&&(o.floating.remove(),o.floating=null)):"in"===e?(this._clone(i,s),o.floating.addClass("fixedHeader-floating").css("header"===i?"top":"bottom",this.c[i+"Offset"]).css("left",r.left+"px").css("width",r.width+"px"),"footer"===i&&o.floating.css("top","")):"below"===e?(this._clone(i,s),o.floating.addClass("fixedHeader-locked").css("top",r.tfootTop-r.theadHeight).css("left",r.left+"px").css("width",r.width+"px")):"above"===e&&(this._clone(i,s),o.floating.addClass("fixedHeader-locked").css("top",r.tbodyTop).css("left",r.left+"px").css("width",r.width+"px")),n&&n!==a.activeElement&&n.focus(),this.s.scrollLeft.header=-1,this.s.scrollLeft.footer=-1,this.s[i+"Mode"]=e},_positions:function(){var e=this.s.dt.table(),a=this.s.position,i=this.dom,s=(e=t(e.node()),e.children("thead")),o=e.children("tfoot");i=i.tbody;a.visible=e.is(":visible"),a.width=e.outerWidth(),a.left=e.offset().left,a.theadTop=s.offset().top,a.tbodyTop=i.offset().top,a.theadHeight=a.tbodyTop-a.theadTop,o.length?(a.tfootTop=o.offset().top,a.tfootBottom=a.tfootTop+o.outerHeight(),a.tfootHeight=a.tfootBottom-a.tfootTop):(a.tfootTop=a.tbodyTop+i.outerHeight(),a.tfootBottom=a.tfootTop,a.tfootHeight=a.tfootTop)},_scroll:function(e){var i,s=t(a).scrollTop(),o=t(a).scrollLeft(),r=this.s.position;this.s.enable&&(this.c.header&&(i=!r.visible||s<=r.theadTop-this.c.headerOffset?"in-place":s<=r.tfootTop-r.theadHeight-this.c.headerOffset?"in":"below",(e||i!==this.s.headerMode)&&this._modeChange(i,"header",e),this._horizontal("header",o)),this.c.footer&&this.dom.tfoot.length)&&(s=!r.visible||s+r.windowHeight>=r.tfootBottom+this.c.footerOffset?"in-place":r.windowHeight+s>r.tbodyTop+r.tfootHeight+this.c.footerOffset?"in":"above",(e||s!==this.s.footerMode)&&this._modeChange(s,"footer",e),this._horizontal("footer",o))}}),r.version="3.1.3",r.defaults={header:!0,footer:!1,headerOffset:0,footerOffset:0},t.fn.dataTable.FixedHeader=r,t.fn.DataTable.FixedHeader=r,t(a).on("init.dt.dtfh",(function(e,a){if("dt"===e.namespace){var i=a.oInit.fixedHeader,o=s.defaults.fixedHeader;!i&&!o||a._fixedHeader||(o=t.extend({},o,i),!1!==i&&new r(a,o))}})),s.Api.register("fixedHeader()",(function(){})),s.Api.register("fixedHeader.adjust()",(function(){return this.iterator("table",(function(t){(t=t._fixedHeader)&&t.update()}))})),s.Api.register("fixedHeader.enable()",(function(t){return this.iterator("table",(function(e){e=e._fixedHeader,t=t===i||t,e&&t!==e.s.enable&&e.enable(t)}))})),s.Api.register("fixedHeader.disable()",(function(){return this.iterator("table",(function(t){(t=t._fixedHeader)&&t.s.enable&&t.enable(!1)}))})),t.each(["header","footer"],(function(t,e){s.Api.register("fixedHeader."+e+"Offset()",(function(t){var a=this.context;return t===i?a.length&&a[0]._fixedHeader?a[0]._fixedHeader[e+"Offset"]():i:this.iterator("table",(function(a){(a=a._fixedHeader)&&a[e+"Offset"](t)}))}))})),r}))},"74a6":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{attrs:{id:"main-container"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12",staticStyle:{"z-index":"20"}},[a("span",[t._v(t._s(t.reportTitle)),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Back")])]),a("sdPicker",{attrs:{onSubmit:t.fetchDates}})],1)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("b-overlay",{attrs:{show:t.hideReport,"spinner-type":"grow","spinner-variant":"primary"},scopedSlots:t._u([t.reportSelected?null:{key:"overlay",fn:function(){return[a("h1",[t._v("No Report Selected")])]},proxy:!0}],null,!0)},[a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[a("thead",[a("tr",[a("th",[t._v("Weight Band")]),a("th",[t._v("Gender")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("0A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("2A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("4A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("5A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("6A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("7A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("8A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("9A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("10A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("11A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("12A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("13A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("14A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("15A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("16A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("17A")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("0P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("2P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("4P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("9P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("11P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("14P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("15P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("16P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("17P")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Unknown")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Total (regimen)")])])]),a("tbody",{ref:"tableBody"},[t._l(t.reportData,(function(e,i){return a("tr",{key:i},[a("td",[t._v(t._s(e.weight))]),a("td",[t._v("Male")]),t._l(e.males,(function(e,i){return a("td",{key:i},[t._v(" "+t._s(e[Object.keys(e)[0]])+" ")])}))],2)})),t._l(t.reportData,(function(e,i){return a("tr",{key:i+"fem"},[a("td",[t._v(t._s(e.weight))]),a("td",[t._v("Female")]),t._l(e.females,(function(e,i){return a("td",{key:i},[t._v(" "+t._s(e[Object.keys(e)[0]])+" ")])}))],2)}))],2)])])],1)])])],1)],1)},s=[],o=(a("4160"),a("b0c0"),a("b64b"),a("159b"),a("ade3")),r=(a("96cf"),a("1da1")),n=a("8051"),d=a("ebd8"),l=a("7c08"),c=a("c1df"),f=a.n(c),h=a("4dfe"),u=a("1157"),g=a.n(u);a("6810");a("2cdf"),a("fd5e"),a("5caa"),a("c3dc"),a("8b8e"),a("4e95"),a("a8a1"),a("919c"),a("4b69"),a("7dae"),a("a821"),a("728d");var p={name:"reports",components:{"top-nav":d["a"],"side-bar":l["a"],sdPicker:h["a"]},methods:{fetchDates:function(t){this.startDate=t[0],this.endDate=t[1],this.initializeReport()},initializeReport:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.reportLoading=!0,this.reportSelected=!0,this.report_title=sessionStorage.location_name+" MoH Disaggregated report",e="/programs/1/reports/regimens_by_weight_and_gender?",e+="start_date="+this.startDate,e+="&end_date="+this.endDate,t.next=8,n["a"].get(e,{},{});case 8:a=t.sent,200===a.status&&a.json().then((function(t){i.mergeRegimens(t)}));case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),initDataTable:function(){this.report_title=sessionStorage.location_name+" MoH Disaggregated regimen distribution by weight report. ",this.report_title+=" Reporting  period: "+f()(this.startDate).format("DD/MMM/YYYY"),this.report_title+=" "+f()(this.endDate).format("DD/MMM/YYYY"),this.dTable=g()("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!1,searching:!1,paging:!1,Processing:!1,ServerSide:!1,scrollY:"50vh",scrollX:!0,scrollCollapse:!0,fixedColumns:{leftColumns:2,rightColumns:1},scroller:{loadingIndicator:!0},dom:"Bfrtip",buttons:[{extend:"copy",title:this.report_title},{extend:"csv",title:this.report_title},{extend:"pdf",title:this.report_title},{extend:"print",title:this.report_title}]})},mergeRegimens:function(t){var e=this;t.forEach((function(a,i){t[i].males=e.getReg(a.males),t[i].females=e.getReg(a.females)})),this.reportData=t,this.reportLoading=!1,setTimeout((function(){return e.initDataTable()}),400)},getReg:function(t){var e=[{"0A":0},{"2A":0},{"4A":0},{"5A":0},{"6A":0},{"7A":0},{"8A":0},{"9A":0},{"10A":0},{"11A":0},{"12A":0},{"13A":0},{"14A":0},{"15A":0},{"16A":0},{"17A":0},{"0P":0},{"2P":0},{"4P":0},{"9P":0},{"11P":0},{"14P":0},{"15P":0},{"16P":0},{"17P":0},{"N/A":0}],a={total:0};return t.forEach((function(t,i){e.forEach((function(a,i){a.hasOwnProperty(Object.keys(t))&&(e[i]=t)})),a.total+=t[Object.keys(t)[0]]})),e.push(a),e}},mounted:function(){},data:function(){return Object(o["a"])({reportData:null,dTable:null,formatedData:[],rebuildOutcome:!0,startDate:null,endDate:null,screenedTB:[],givenIPT:[],totalMales:[0,0,0,0],totalFemales:[0,0,0,0],fpRow:null,fbfRow:null,allRows:[],initialize:!1,reportSelected:!1,reportLoading:!1},"reportData",[])},computed:{getRegimens:function(){return this.regimens},hideReport:function(){return this.reportLoading||!this.reportSelected},reportTitle:function(){return"".concat(this.$store.state.location.name," Regimen Distribution by weight")}}},m=p,b=(a("bb14"),a("8fd5"),a("2877")),v=Object(b["a"])(m,i,s,!1,null,"58f63a52",null);e["default"]=v.exports},"7db0":function(t,e,a){"use strict";var i=a("23e7"),s=a("b727").find,o=a("44d2"),r=a("ae40"),n="find",d=!0,l=r(n);n in[]&&Array(1)[n]((function(){d=!1})),i({target:"Array",proto:!0,forced:d||!l},{find:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),o(n)},"8b8e":function(t,e,a){},"8fd5":function(t,e,a){"use strict";var i=a("ca99"),s=a.n(i);s.a},bb14:function(t,e,a){"use strict";var i=a("0452"),s=a.n(i);s.a},ca99:function(t,e,a){},df61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b07ea36e.7177de85.js.map