import{d,ac as m,a0 as c,c as p,a as f,t as v,u as t,e,w as a,o as D,j as l,i as n,I as _,b as S}from"./index-b34da4cb.js";import{S as g}from"./SelectInput-3966d61d.js";import{r as V,d as b,s as x}from"./dde-7f634240.js";import"./common-abc2f84d.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./toasts-5a6b8805.js";import"./index-95d3a767.js";const I={class:"his-card ion-padding",style:{margin:"0px auto",width:"60%","margin-top":"3%"}},F=d({__name:"DDeSettings",setup(h){const o=m({status:{value:"",label:"DDE Status",required:!0}}),i=[{label:"Activated",value:!0},{label:"Deactivated",value:!1}];function u(){x(o.status.value.value)}return c(()=>V()),(w,s)=>(D(),p("div",I,[f("h2",null,"DDE Settings ("+v(t(b)?"Activated":"Deactivated")+")",1),e(t(n),null,{default:a(()=>[e(t(l),{size:"11",class:"ion-margin-vertical"},{default:a(()=>[e(g,{modelValue:o.status,"onUpdate:modelValue":s[0]||(s[0]=r=>o.status=r),options:i},null,8,["modelValue"])]),_:1})]),_:1}),e(t(n),null,{default:a(()=>[e(t(l),null,{default:a(()=>[e(t(_),{onClick:u},{default:a(()=>s[1]||(s[1]=[S("Submit")])),_:1})]),_:1})]),_:1})]))}});export{F as default};
