import{bg as i}from"./index-d405c632.js";function p(t){return t==null||Array.isArray(t)&&!t.length||typeof t=="object"&&!Object.keys(t).length||!t}function u(t){return t.replace(/<(?:.|\n)*?>/gm," ").replace(/(\r\n|\n|\r|\t|\s{2,}|[=,])/g," ").trim()}function f(t,n,r){return n.replace(/\[(\w+)\]/g,".$1").replace(/^\./,"").split(".").reduce((e,o)=>{var a;return(a=e==null?void 0:e[o])!=null?a:r},t)}function g(t){return parseInt(t.split("-")[2])||1/0}function m(t){const n="".concat(t).toUpperCase();return n==="M"||n==="MALE"?"Male":n==="F"||n==="FEMALE"?"Female":/fbf|fnp|fp/i.test(t)?n:t}async function s(t,n,r){return(await i.create({message:t,position:"top",animated:!0,duration:r,color:n,cssClass:"his-md-text",keyboardClose:!0,buttons:[{side:"end",text:"x",role:"cancel"}]})).present()}function l(t,n=3e3){return s(t,"warning",n)}function y(t,n=2e3){return s(t,"success",n)}function b(t,n=3e3){return s(t,"danger",n)}export{y as a,b,m as c,f as g,p as i,g as p,u as s,l as t};