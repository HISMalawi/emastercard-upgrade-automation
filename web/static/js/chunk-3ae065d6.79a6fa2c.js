(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3ae065d6"],{"0e60":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[a("span",[t._v(t._s(t.report_title)),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Back")])]),a("sdPicker",{attrs:{onSubmit:t.fetchDates}}),a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[t._m(0),a("tfoot",[a("tr",[a("td",[t._v(" Date Created: "+t._s(t.moment().format("YYYY-MM-DD:h:m:s"))+" e-Mastercard Version : "+t._s(t.EMCVersion)+" API Version "+t._s(t.APIVersion)+" ")])])])])],1)],1)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("ARV#")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Gender")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("DoB (Age in Years)")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Prev.Regimen")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Curr.Regimen")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("ARVs")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Dispensed date")])])])}],s=(a("a4d3"),a("99af"),a("4de4"),a("4160"),a("a15b"),a("b0c0"),a("e439"),a("dbb4"),a("b64b"),a("d3b7"),a("3ca3"),a("159b"),a("ddb0"),a("2b3d"),a("ade3")),i=(a("96cf"),a("1da1")),c=a("8051"),o=a("ebd8"),l=a("7c08"),d=a("c1df"),u=a.n(d),f=a("2f62"),p=a("4dfe"),m=a("1157"),b=a.n(m);a("6810");function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function D(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a("2cdf"),a("fd5e"),a("5caa"),a("c3dc"),a("4e95"),a("a8a1"),a("919c"),a("4b69"),a("7dae"),a("a821");var v={name:"reports",components:{"top-nav":o["a"],"side-bar":l["a"],sdPicker:p["a"]},methods:{fetchDates:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a,r,n=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.report_title="Clinc"+this.location.name+" Regimen switch report ",this.report_title+=u()(e[0]).format("DDMMMYYYY"),this.report_title+=" - "+u()(e[1]).format("DDMMMYYYY"),a="/regimen_switch?start_date="+e[0]+"&date="+e[1],a+="&end_date="+e[1]+"&program_id=1&pepfar=false",t.next=7,c["a"].get(a,{},{});case 7:r=t.sent,200===r.status?r.json().then((function(t){return n.checkResult(t)})):setTimeout((function(){return n.fetchData()}),5e3);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),initDataTable:function(){this.dTable=b()("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!0,data:this.formatedData,dom:"Bfrtip",buttons:[{extend:"copy",title:this.report_title},{extend:"csv",title:this.report_title,footer:!0},{extend:"pdf",title:this.report_title},{extend:"print",title:this.report_title}],columnDefs:[{className:"center-text",targets:1},{className:"center-text",targets:3},{className:"center-text",targets:4},{className:"center-text",targets:6}]})},checkResult:function(t){var e=this,a=window.location,r=new URL(a);r.searchParams.get("resource_id");this.reportData=t,setTimeout((function(){return e.datatableEnable(t)}),10)},datatableEnable:function(t){for(var e in this.formatedData=[],console.log(t),t){for(var a=t[e],r=a.birthdate?"".concat(a.birthdate," (").concat(u()(new Date).diff(a.birthdate,"years"),")"):"N/A",n=a.current_regimen,s=[],i=a.medication,c=void 0,o=a.previous_regimen,l=0;l<i.length;l++)s.push(i[l].medication+" ("+i[l].quantity+")"),c=u()(i[l].start_date).format("DD/MMM/YYYY");this.formatedData.push([a.arv_number,a.gender,r,o,n,s.join("<br />"),c])}this.dTable.api().destroy(),this.initDataTable()},createdShowBTN:function(t){var e=document.createElement("span"),a=document.createElement("button");return a.setAttribute("onclick",'javascript:location="/patient/mastercard/'+t+'"'),a.innerHTML="Show",a.setAttribute("class","btn-warning show-btn"),e.appendChild(a),e.innerHTML}},mounted:function(){var t=this;setTimeout((function(){return t.initDataTable()}),300)},data:function(){return{report_title:"Regimen switch report",reportData:null,dTable:null,formatedData:[],APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion}},computed:D({},Object(f["c"])(["location"]))},_=v,Y=(a("3fe9"),a("9e87"),a("2877")),g=Object(Y["a"])(_,r,n,!1,null,"5f6e0fdb",null);e["default"]=g.exports},"30a1":function(t,e,a){},"336a":function(t,e,a){"use strict";var r=a("df61"),n=a.n(r);n.a},"3fe9":function(t,e,a){"use strict";var r=a("9d5f"),n=a.n(r);n.a},"4dfe":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},n=[],s=a("f0ca"),i=a.n(s),c=a("c1df"),o=a.n(c),l=(a("6f3c"),a("1789")),d={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=o()(this.startDate).format("YYYY-MM-DD"),this.endDate=o()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return l["a"].parse(t,e)},formatDate:function(t,e){return l["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},u=d,f=(a("336a"),a("2877")),p=Object(f["a"])(u,r,n,!1,null,"15deca72",null);e["a"]=p.exports},"9d5f":function(t,e,a){},"9e87":function(t,e,a){"use strict";var r=a("30a1"),n=a.n(r);n.a},df61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-3ae065d6.79a6fa2c.js.map