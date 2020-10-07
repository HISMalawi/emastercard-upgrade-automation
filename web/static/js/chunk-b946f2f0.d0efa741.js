(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b946f2f0"],{"05e1":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex",attrs:{id:"wrapper"}},[a("side-bar"),a("div",{attrs:{id:"page-content-wrapper"}},[a("top-nav"),a("div",{staticClass:"col-12 table-col",attrs:{id:"main-container"}},[a("span",[t._v(t._s(t.report_title)),a("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.$router.go(-1)}}},[t._v("Back")])]),a("sdPicker",{attrs:{onSubmit:t.fetchDates}}),a("table",{staticClass:"table table-striped report",attrs:{id:"cohort-clients"}},[t._m(0),a("tfoot",[a("tr",[a("td",[t._v(" Date Created: "+t._s(t.moment().format("YYYY-MM-DD:h:m:s"))+" e-Mastercard Version : "+t._s(t.EMCVersion)+" API Version "+t._s(t.APIVersion)+" ")])])])])],1)],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("ARV number")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Gender")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("DOB")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Weight (KG)")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Regimen")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("ARVs")]),a("th",{staticClass:"center-text",attrs:{scope:"col"}},[t._v("Dispensed date")])])])}],n=(a("a15b"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),i=a("8051"),c=a("ebd8"),o=a("7c08"),l=a("c1df"),d=a.n(l),u=a("4dfe"),f=a("1157"),p=a.n(f);a("6810");a("2cdf"),a("fd5e"),a("5caa"),a("c3dc"),a("4e95"),a("a8a1"),a("919c"),a("4b69"),a("7dae"),a("a821");var m={name:"reports",components:{"top-nav":c["a"],"side-bar":o["a"],sdPicker:u["a"]},methods:{fetchDates:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(e){var a,r,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.report_title="Clinic "+sessionStorage.location_name+" regimen dispensation report ",this.report_title+=d()(e[0]).format("DDMMMYYYY"),this.report_title+=" - "+d()(e[1]).format("DDMMMYYYY"),a="/regimen_report?start_date="+e[0]+"&date="+e[1],a+="&end_date="+e[1]+"&program_id=1&type=moh",t.next=7,i["a"].get(a,{},{});case 7:r=t.sent,200===r.status?r.json().then((function(t){return s.checkResult(t)})):setTimeout((function(){return s.fetchData()}),5e3);case 9:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),initDataTable:function(){this.dTable=p()("#cohort-clients").dataTable({order:[[0,"asc"]],fixedHeader:!0,data:this.formatedData,dom:"Bfrtip",buttons:[{extend:"copy",title:this.report_title},{extend:"csv",title:this.report_title,footer:!0},{extend:"pdf",title:this.report_title},{extend:"print",title:this.report_title}],columnDefs:[{className:"center-text",targets:1},{className:"center-text",targets:3},{className:"center-text",targets:4}]})},checkResult:function(t){var e=this;this.initDataTable();var a=window.location,r=new URL(a);r.searchParams.get("resource_id");this.reportData=t,setTimeout((function(){return e.datatableEnable(t)}),10)},datatableEnable:function(t){for(var e in this.formatedData=[],t){var a=t[e],r=void 0;try{r=d()(a.birthdate).format("DD/MMM/YYYY")}catch(u){r="N/A"}for(var s=a.current_regimen,n=a.current_weight,i=[],c=a.medication,o=void 0,l=0;l<c.length;l++)i.push(c[l].medication+" ("+c[l].quantity+")"),o=d()(c[l].start_date).format("DD/MMM/YYYY");this.formatedData.push([a.arv_number,a.gender,r,n,s,i.join("<br />"),o])}this.dTable.api().destroy(),this.initDataTable()},createdShowBTN:function(t){var e=document.createElement("span"),a=document.createElement("button");return a.setAttribute("onclick",'javascript:location="/patient/mastercard/'+t+'"'),a.innerHTML="Show",a.setAttribute("class","btn-warning show-btn"),e.appendChild(a),e.innerHTML}},mounted:function(){},data:function(){return{report_title:"Regimen distribution ",reportData:null,dTable:null,formatedData:[],APIVersion:sessionStorage.APIVersion,EMCVersion:sessionStorage.EMCVersion}}},h=m,D=(a("61c1"),a("a159"),a("2877")),b=Object(D["a"])(h,r,s,!1,null,"6a033ad4",null);e["default"]=b.exports},"336a":function(t,e,a){"use strict";var r=a("df61"),s=a.n(r);s.a},"4dfe":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ctrs"},[a("div",{staticClass:"ctr-table"},[a("div",{staticClass:"ctr-row"},[a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"Start Date",readonly:!0}},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("date-pick",{staticClass:"date-inputs",attrs:{format:t.format,parseDate:t.parseDate,formatDate:t.formatDate,inputAttributes:{placeholder:"End Date",readonly:!0}},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1),a("div",{staticClass:"ctr-cell"},[a("button",{staticClass:"btn btn-success",on:{click:t.submitDates}},[t._v("Submit")])])])])])},s=[],n=a("f0ca"),i=a.n(n),c=a("c1df"),o=a.n(c),l=(a("6f3c"),a("1789")),d={components:{DatePick:i.a},props:["onSubmit"],data:function(){return{startDate:null,endDate:null,format:"DD/MMM/YYYY",date:l["a"].format(new Date,"DD/MMM/YYYY")}},methods:{initDates:function(){},submitDates:function(){this.startDate=o()(this.startDate).format("YYYY-MM-DD"),this.endDate=o()(this.endDate).format("YYYY-MM-DD"),this.onSubmit([this.startDate,this.endDate])},parseDate:function(t,e){return l["a"].parse(t,e)},formatDate:function(t,e){return l["a"].format(t,e)}},mounted:function(){var t=this;setTimeout((function(){return t.initDates()}),300)}},u=d,f=(a("336a"),a("2877")),p=Object(f["a"])(u,r,s,!1,null,"15deca72",null);e["a"]=p.exports},"61c1":function(t,e,a){"use strict";var r=a("8ff2"),s=a.n(r);s.a},"6a62":function(t,e,a){},"8ff2":function(t,e,a){},a159:function(t,e,a){"use strict";var r=a("6a62"),s=a.n(r);s.a},df61:function(t,e,a){}}]);
//# sourceMappingURL=chunk-b946f2f0.d0efa741.js.map