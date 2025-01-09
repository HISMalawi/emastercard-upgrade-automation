System.register(["./age_groups-legacy-5143fd58.js","./regimens-legacy-68ba62aa.js","./report_service-legacy-a3c5dfb2.js","./common-legacy-0d7df615.js"],(function(e,r){"use strict";var t,a,o,g;return{setters:[e=>{t=e.A},e=>{a=e.R},e=>{o=e.R},e=>{g=e.g}],execute:function(){e("T",{tx_curr:"TX_CURR",due_for_vl:"Due for VL",drawn_routine:"Routine (Sample Drawn)",drawn_targeted:"Targeted (Sample Drawn)",high_vl_routine:"Routine (High VL (>=1000 copies))",high_vl_targeted:"Targeted (High VL (>=1000 copies))",low_vl_routine:"Routine (Low VL (<1000 copies))",low_vl_targeted:"Targeted (Low VL (<1000 copies))"}),e("V",class extends o{constructor(){super()}getVlCollection(){return this.getReport(`programs/${this.programId}/reports/vl_collection`)}async getTxPVLS(e={}){const r=await this.getReport(`programs/${this.programId}/reports/viral_load_coverage`,{rebuild_outcomes:!0,...e});if(!r)return[];const t=this.txPVLSBuilder(r),a=await this.buildMaternityAgreggateRows(t.F.aggregate);return[...t.F.rows,...t.M.rows,{...t.M.aggregate,ageGroup:"All",gender:"M"},...a]}async getViralLoad(e={}){const r=await this.getReport(`programs/${this.programId}/reports/vl_disaggregated`,e);return this.vlReportBuilder(r)}flattenTxPVLSData(e){return Object.entries(e).reduce(((e,[r,t])=>(Array.isArray(t)?e[r]=t:(e[`${r}_routine`]=t.routine,e[`${r}_targeted`]=t.targeted),e)),{})}txPVLSBuilder(e){return Object.entries(null!=e?e:{}).reduce(((e,[r,t])=>("Unknown"!==r&&Object.entries(t).forEach((([t,a])=>{const o=t,g=this.flattenTxPVLSData(a);e[o].rows.push({ageGroup:r,gender:o,...g}),Object.entries(g).forEach((([r,t])=>{var a;e[o].aggregate[r]=[...null!==(a=e[o].aggregate[r])&&void 0!==a?a:[],...null!=t?t:[]]}))})),e)),{M:{rows:[],aggregate:{}},F:{rows:[],aggregate:{}}})}vlReportBuilder(e){return t.map((r=>[...a,"N/A"].reduce(((t,a)=>(t[a]=g(e,`${r.replace("-"," - ")}.${a}`,0),t)),{ageGroup:r})))}})}}}));
