var p=Object.defineProperty;var _=(n,a,e)=>a in n?p(n,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[a]=e;var g=(n,a,e)=>(_(n,typeof a!="symbol"?a+"":a,e),e);import{g as i}from"./common-abc2f84d.js";import{R}from"./report_service-7e51be12.js";import{A as m}from"./age_groups-8203d13f.js";const h=["Died","IIT <3 mo","IIT 3-5 mo","IIT 6+ mo","Transferred out","Refused (Stopped)"],M={tx_curr:"TX_CURR",symptom_screen_alone:"Symptom Screen (alone)",cxr_screen:"CXR Screen",mwrd_screen:"mWRD Screen",sceen_pos_new:"New on ART/Screen Positive",sceen_neg_new:"New on ART/Screen Negative",sceen_pos_prev:"Already on ART/Screen Positive",sceen_neg_prev:"Already on ART/Screen Negative",started_tb_new:"Started TB RX_New on ART",started_tb_prev:"Started TB RX_Prev on ART"},u={less_than_three_months:"# of clients on <3 months of ARVs",three_to_five_months:"# of clients on 3 - 5 months of ARVs",greater_than_six_months:"# of clients on >= 6 months of ARVs"};class I extends R{constructor(){super();g(this,"reportType");g(this,"initialize");this.reportType="pepfar",this.initialize=!0}setReportType(e){this.reportType=e}setInitialize(e){this.initialize=e}async getTxCurrMMDReport(e=!1){const r=await this.getReport("programs/".concat(this.programId,"/reports/tx_curr_mmd"),{definition:this.reportType,rebuild:e});if(!r)return[];const t=this.txMmdReportBuilder(r),o=await this.buildMaternityAgreggateRows(t.F.aggregate);return[...t.F.rows,...t.M.rows,{ageGroup:"All",gender:"M",...t.M.aggregate},...o]}async getTxMlReport(e){const r=await this.getReport("tx_ml",{rebuild:e});if(!r)return[];const t=this.txMlReportBuilder(r),o=await this.buildMaternityAgreggateRows(t.F.aggregate);return[...t.F.rows,...t.M.rows,{ageGroup:"All",gender:"M",...t.M.aggregate},...o]}getTxRttReport(e){return this.getReport("tx_rtt",{rebuild:e})}getClinicTxRtt(e){return this.getReport("programs/".concat(this.programId,"/reports/clinic_tx_rtt"),{rebuild:e})}async getTxTbReport(e){return this.getReport("programs/".concat(this.programId,"/reports/tx_tb"),{rebuild_outcome:e})}getTxNewReport(e){return this.getReport("programs/".concat(this.programId,"/reports/tx_new"),{rebuild:e})}mapTxMlIndcators(e){return h.reduce((r,t,o)=>{var s;return r[t]=(s=e[o])!=null?s:[],r},{})}txMlReportBuilder(e){const r={M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}};return m.forEach(t=>{["F","M"].forEach(o=>{const s=this.mapTxMlIndcators(i(e,"".concat(t,".").concat(o),[]));r[o].rows.push({ageGroup:t,gender:o,...s}),this.aggregateIndicatorData(r,s,o)})}),r}aggregateIndicatorData(e,r,t){Object.entries(r).forEach(([o,s])=>{var c;e[t].aggregate[o]=[...s,...(c=e[t].aggregate[o])!=null?c:[]]})}txMmdReportBuilder(e){return Object.keys(e).reduce((r,t)=>{if(!/Unknown/i.test(t)){const o=i(e,"".concat(t,".Female"));r.F.rows.push({ageGroup:t,gender:"F",...o}),this.aggregateIndicatorData(r,o,"F");const s=i(e,"".concat(t,".Male"));r.M.rows.push({ageGroup:t,gender:"M",...s}),this.aggregateIndicatorData(r,s,"M")}return r},{M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}})}}export{u as T,I as a,h as b,M as c};