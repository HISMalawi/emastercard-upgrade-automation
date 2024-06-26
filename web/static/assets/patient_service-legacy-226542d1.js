!function(){function e(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var r=i.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}System.register(["./index-legacy-5705a9b7.js","./patient_identifier_service-legacy-5997f069.js","./his_date-legacy-df0799d6.js","./index-legacy-aa705205.js"],(function(t,i){"use strict";var r,n,s,a,u;return{setters:[e=>{r=e.G},e=>{n=e.P},e=>{s=e.d,a=e.a},e=>{u=e.P}],execute:function(){const i=t("g",((e,t)=>{const i=e.filter((e=>e.person_attribute_type_id==t));return i.length>0?i[0].value:""}));class d{constructor(t){e(this,"patient",void 0),this.patient=t}static async findByID(e){return r.getJson(`/patients/${e}`)}createArvNumber(e){return n.create(this.getID(),4,e)}getID(){return this.patient.patient_id}getAge(){return s(a()).diff(this.patient.person.birthdate,"years")}isFemale(){return["Female","F"].includes(this.getGender())}isMale(){return["Male","M"].includes(this.getGender())}getGender(){return this.patient.person.gender}static async search(e){return r.getJson("/search/patients",e)}static findByOtherID(e,t){return r.getJson("search/patients/by_identifier",{type_id:e,identifier:t})}getFullName(){try{const e=this.patient.person.names[0],t=e.given_name,i=e.family_name,r=e.middle_name;return this.normaliseName(`${t} ${r} ${i}`)}catch(e){return console.error(e),"Unknown"}}getDocID(){const e=this.findIdentifierByType("DDE person document ID");return e.match(/unknown/i)?null:e}getNationalID(){return this.findIdentifierByType("National id")}getMWNationalID(){return this.findIdentifierByType("Malawi National ID")}getArvNumber(){return this.findIdentifierByType("ARV Number")}getBirthdate(){return this.patient.person.birthdate}findIdentifierByType(e){return this.patient.patient_identifiers.filter((t=>t.type.name===e)).sort(((e,t)=>e.date_created<t.date_created?1:0)).reduce(((e,t)=>"Unknown"===e?t.identifier:e),"Unknown")}getHomeVillage(){return this.getAddresses().ancestryVillage}getHomeDistrict(){return this.getAddresses().ancestryDistrict}getAddresses(){const e={ancestryDistrict:"",ancestryTA:"",ancestryVillage:"",currentDistrict:"",currentTA:"",currentVillage:""};if(this.patient.person.addresses.length>0){const t=this.patient.person.addresses[0];e.ancestryDistrict=t.address2,e.ancestryTA=t.county_district,e.ancestryVillage=t.neighborhood_cell,e.currentDistrict=t.state_province,e.currentTA=t.township_division,e.currentVillage=t.city_village}return e}getCurrentDistrict(){return this.getAddresses().currentDistrict}getCurrentVillage(){return this.getAddresses().currentVillage}static mergePatients(e){return e.program_id=u,r.postJson("dde/patients/merge",e)}normaliseName(e){return e.replace(/n\/a|unknown|null|undefined/gi,"").trim()}getGivenName(){return this.patient.person.names[0].given_name}getFamilyName(){return this.patient.person.names[0].family_name}getClosestLandmark(){return this.getAttribute(19)}getPhoneNumber(){return this.getAttribute(12)}getAttribute(e){return i(this.patient.person.person_attributes,e)}getMiddleName(){return this.patient.person.names[0].middle_name}updateARVNumber(e){var t;const i=(null===(t=this.getIdentifiers().find((e=>"ARV Number"===e.type.name)))||void 0===t?void 0:t.patient_identifier_id)||"";return d.reassignARVNumber(i,{identifier:e})}updateMWNationalId(e){var t;const i=null===(t=this.getIdentifiers().find((e=>"Malawi National ID"===e.type.name)))||void 0===t?void 0:t.patient_identifier_id;return i?n.update(i,e):n.create(this.getID(),28,e)}getIdentifiers(){return this.patient.patient_identifiers}static reassignARVNumber(e,t){return r.putJson("patient_identifiers/"+e,t)}static async getPatientVisits(e,t){const i=(await r.getJson(`patients/${e}/visits`,{program_id:u,include_defaulter_dates:1==t})).data;return i?i.sort(((e,t)=>new Date(e)<new Date(t)?1:0)):[]}}t("P",d)}}}))}();
