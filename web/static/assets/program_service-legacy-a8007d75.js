System.register(["./index-legacy-65d6eaec.js"],(function(t,r){"use strict";var e,a;return{setters:[t=>{e=t.F,a=t.aj}],execute:function(){t("P",class{static getPatientPrograms(t){return e.getJson(`patients/${t}/programs`)}static getProgramWorkflows(t){return e.getJson(`programs/${t}/workflows`)}static getPatientStates(t,r){return e.getJson(`programs/${r}/patients/${t}/states`)}static voidProgram(t,r=""){return e.void(`patient_programs/${t}/`,{reason:r})}static createState(t,r,a){return e.postJson(`programs/${r}/patients/${t}/states`,a)}static voidState(t,r,a,s=""){return e.void(`programs/${r}/patients/${t}/states/${a}`,{reason:s})}static getCurrentProgramInformation(t,r){return e.getJson(`/programs/${a}/patients/${t}/visit?date=${r}`)}static async getNextSuggestedARVNumber(){var t;const r=await e.getJson("/programs/1/next_available_arv_number");if(r.ok)return null===(t=r.data)||void 0===t?void 0:t.arv_number.replace(/^\D+|\s/g,"")}static voidARVNumber(t){return e.postJson(`/programs/1/void_arv_number/${t}`,{})}static createPatient(t){return e.postJson("/patients/",{program_id:a,person_id:t})}static enrollPatient(t,r){return e.postJson(`/patients/${t}/programs`,{program_id:a,date_enrolled:r})}static enrollProgram(t,r,a){return e.postJson(`/patients/${t}/programs`,{program_id:r,date_enrolled:a})}static getWeightForHeightValues(){return e.getJson("/patient_weight_for_height_values")}})}}}));
