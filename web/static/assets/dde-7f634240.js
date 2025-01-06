import{a as c,t as i}from"./toasts-5a6b8805.js";import{r as f,aC as l,aB as d,ag as p}from"./index-b34da4cb.js";import{P as m}from"./index-95d3a767.js";const r=new l(m),s=f(!1);function u(t){return t.patient_identifiers.reduce((e,a)=>({...e,[a.type.name]:a.identifier}),{})["DDE person document ID"]}async function w(t){var a;if(s.value)return D(await r.findByNpid(t));const e=await d.searchByNpid(t);return e.ok?(c("DDE status updated"),e.data):(i((a=e.errorMessage)!=null?a:"Searching client by NPID returned error: ".concat(e.clientErrorType)),[])}async function b(t){var a;if(s.value)return D(await r.findByDemographics(t));const e=await d.searchBy(t);return e.ok?e.data:(i((a=e.errorMessage)!=null?a:"Searching client by Demographics returned error: ".concat(e.clientErrorType)),[])}async function E(t){var a;if(!await p("Are you sure you want to import client?"))return;const e=await r.importPatient(t);if(e.ok)return c("Client imported to local database"),e.data;i((a=e.errorMessage)!=null?a:"Error importing with error: ".concat(e.clientErrorType))}async function B(){s.value=await r.isDDeEnabled()}async function S(t){var a;const e=await(t?r.enableDDe():r.disableDDe());e.ok?(s.value=t,c("DDE status updated")):i((a=e.errorMessage)!=null?a:"Unable to change status because ".concat(e.clientErrorType))}function D(t){var e;return t.ok&&t.data?Object.keys(t.data).reduce((a,o)=>[...a,...t.data[o].map(n=>({...n,source:o,docID:u(n),ddeClientRequiresImport:u(n)&&o==="remotes"&&!n.patient_id}))],[]):(i((e=t.errorMessage)!=null?e:"An error happened with status code: ".concat(t.httpStatusResponse)),[])}export{w as a,b,s as d,E as i,B as r,S as s};
