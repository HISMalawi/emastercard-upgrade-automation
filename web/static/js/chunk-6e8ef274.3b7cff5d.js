(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6e8ef274"],{"01ee":function(t,e,a){"use strict";var r=a("dc51"),s=a.n(r);s.a},"29ed":function(t,e,a){"use strict";var r=a("8793"),s=a.n(r);s.a},"336a":function(t,e,a){"use strict";var r=a("df61"),s=a.n(r);s.a},"4dfe":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},s=[],n=a("f0ca"),i=a.n(n),o=a("c1df"),c=a.n(o),d=(a("6f3c"),a("1789")),l={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:d["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=c()(this.startDate).format("YYYY-MM-DD"),this.endDate=c()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return d["a"].parse(t,e)},formatDate:function(t,e){return d["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},u=l,f=(a("336a"),a("2877")),p=Object(f["a"])(u,r,s,!1,null,"15deca72",null);e["a"]=p.exports},8793:function(t,e,a){},"97d0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[a("span",[t._v(t._s(t.report_title)),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Back")])]),a("sdPicker",{attrs:{onSubmit:t.fetchDates}}),a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[t._m(0),a("tbody",{ref:"tableBody"})])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("#")]),a("th",[t._v("Age group")]),a("th",[t._v("Gender")]),a("th",{staticClass:"disaggregated-numbers"},[t._v("Count")])])])}],n=(a("96cf"),a("1da1")),i=a("8051"),o=a("ebd8"),c=a("7c08"),d=a("c1df"),l=a.n(d),u=a("4dfe"),f=a("1157"),p=a.n(f);a("6810");a("2cdf"),a("fd5e"),a("5caa"),a("c3dc"),a("4e95"),a("a8a1"),a("919c"),a("4b69"),a("7dae"),a("a821");var h={name:"txML",components:{"top-nav":o["a"],"side-bar":c["a"],sdPicker:u["a"]},methods:{redirect:function(t){this.$router.push(t)},initDataTable:function(){this.dTable=p()("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!0,searching:!1,paging:!1,Processing:!0,ServerSide:!0,scroller:{loadingIndicator:!0},dom:"Bfrtip",buttons:[{extend:"copy",title:this.report_title},{extend:"csv",title:this.report_title},{extend:"pdf",title:this.report_title},{extend:"print",title:this.report_title}],columnDefs:[{className:"dt-center numbers",targets:0},{className:"dt-center",targets:1},{className:"dt-center",targets:2},{className:"dt-right",targets:3}]})},fetchDates:function(t){this.startDate=t[0],this.endDate=t[1],this.loadXLdata()},loadXLdata:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,r=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e="ipt_coverage?date="+l()().format("YYYY-MM-DD"),e+="&start_date="+this.startDate,e+="&end_date="+this.endDate,e+="&program_id=1",t.next=6,i["a"].get(e,{},{});case 6:a=t.sent,200===a.status&&a.json().then((function(t){return r.loadGroupData(t)}));case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),loadGroupData:function(t){this.report_title=sessionStorage.location_name+"  IPT coverage (those completed six months: 168 days): "+l()(this.startDate).format("DD/MMM/YYYY"),this.report_title+=" - "+l()(this.endtDate).format("DD/MMM/YYYY");this.dTable.fnClearTable();for(var e=this.ageGroups,a=["Female","Male"],r=1,s=0;s<a.length;s++)for(var n=0;n<e.length;n++){var i=0;try{i=t[e[n]][a[s]]?t[e[n]][a[s]].length:0}catch(o){i=0}this.dTable.fnAddData([r++,e[n],a[s],i])}}},data:function(){return{report_title:"IPT coverage (those completed six months: 168 days)",startDate:null,endDate:null,ageGroups:["0-5 months","6-11 months","12-23 months","2-4 years","5-9 years","10-14 years","15-17 years","18-19 years","20-24 years","25-29 years","30-34 years","35-39 years","40-44 years","45-49 years","50 plus years"]}},mounted:function(){var t=this;setTimeout((function(){return t.initDataTable()}),300)}},D=h,m=(a("29ed"),a("01ee"),a("2877")),b=Object(m["a"])(D,r,s,!1,null,"1220c7e5",null);e["default"]=b.exports},dc51:function(t,e,a){},df61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-6e8ef274.3b7cff5d.js.map