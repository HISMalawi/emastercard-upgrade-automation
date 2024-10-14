!function(){function e(e,a,l){return(a=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,a||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(a))in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}System.register(["./ReportTable.vue_vue_type_style_index_0_lang-legacy-e31a45cd.js","./user_service-legacy-af9351f9.js","./index-legacy-91295254.js","./TextInput-legacy-b45439a0.js","./SelectInput-legacy-afa7905e.js","./form-legacy-0888a85c.js","./toasts-legacy-ec8222ac.js","./validations-legacy-77533b67.js","./Date-legacy-2e7df426.js","./exports-legacy-14edbc2c.js","./index-legacy-c59dd992.js","./his_date-legacy-87db423b.js","./vue-datepicker-legacy-efeca79e.js","./DrilldownTable-legacy-97cc3f45.js","./arrays-legacy-42bab38c.js","./Strs-legacy-09248991.js","./loader-legacy-c82f4ab6.js"],(function(a,l){"use strict";var n,t,o,r,s,i,u,c,d,m,f,v,p,g,y,w,_,b,h,I,U,j,V,S,x,B,P,T,A,C,N,R,k,F,D,q,z,E,O,$,H,G,L;return{setters:[e=>{n=e._},e=>{t=e.U},e=>{o=e.d,r=e.I,s=e.C,i=e.R,u=e.B,c=e.p,d=e.Y,m=e.n,f=e.$,v=e.s,p=e.i,g=e.j,y=e.k,w=e.r,_=e.G,b=e.ae,h=e.a2,I=e.aQ,U=e.ak,j=e._,V=e.K,S=e.o,x=e.h,B=e.w,P=e.e,T=e.b,A=e.t,C=e.aR,N=e.aS,R=e.ai,k=e.aT},e=>{F=e.T},e=>{D=e.S},e=>{q=e.i,z=e.r},e=>{E=e.i,O=e.g,$=e.t,H=e.a},e=>{G=e.a},e=>{L=e.H},null,null,null,null,null,null,null,null],execute:function(){class l extends Error{constructor(a,l){super(a),e(this,"errors",void 0),this.errors=l}}const J=o({name:"UserModal",components:{IonButton:r,IonPage:s,IonHeader:i,IonContent:u,IonToolbar:c,IonButtons:d,IonFooter:m,IonTitle:f,IonIcon:v,TextInput:F,SelectInput:D,IonGrid:p,IonRow:g,IonCol:y},props:{user:{type:Object,default:()=>({})}},setup(e){var a;const n=w([]),o=_((()=>E(e.user)?"Add New User":"Edit User")),r=b({givenName:{value:O(e.user,"person.names[0].given_name",""),label:"First Name",required:!0,validation:e=>G(e)},familyName:{validation:e=>G(e),value:O(e.user,"person.names[0].family_name",""),label:"Last Name",required:!0},username:{value:O(e.user,"username",""),label:"Username",required:!0,disabled:!E(e.user),validation:async e=>`${e.value}`.length<4?["Username must be at least 4 characters long"]:null},password:{value:"",label:"Password",required:E(e.user),validation:async({value:e})=>e&&`${e}`.length<6?["Password must be at least 6 characters long"]:null},confirmPassword:{value:"",label:"Confirm Password",required:E(e.user),validation:async({value:e},a)=>e&&e!==a.password.value?["Passwords not matching"]:null},roles:{value:(null===(a=e.user)||void 0===a||null===(a=a.roles)||void 0===a?void 0:a.map((e=>({label:e.role,value:e.role,other:e}))))||[],label:"Roles",placeholder:"Select Roles",required:!0}});return h((()=>{t.getAllRoles().then((e=>{const a=Array.isArray(e.data)?e.data:[];n.value=null==a?void 0:a.map((e=>({value:e.role,label:e.role,other:e})))}))})),{form:r,close:I,modal:U,roles:n,title:o,submit:async()=>{if(!(await q(r)))return;const{formData:a}=z(r,!0);let n={...a,roles:a.roles.map((e=>e.label))};try{n=E(e.user)?await t.createUser(n):await t.updateUser(e.user.user_id,n),U.hide(n)}catch(o){if(o instanceof l)return r.username.error="Username already exists";$(JSON.stringify(o),2e3)}}}}});const K=j(J,[["render",function(e,a,l,n,t,o){const r=V("IonIcon"),s=V("IonButton"),i=V("IonButtons"),u=V("IonTitle"),c=V("IonToolbar"),d=V("IonHeader"),m=V("text-input"),f=V("ion-col"),v=V("TextInput"),p=V("SelectInput"),g=V("ion-row"),y=V("ion-grid"),w=V("IonContent"),_=V("IonFooter"),b=V("IonPage");return S(),x(b,null,{default:B((()=>[P(d,null,{default:B((()=>[P(c,null,{default:B((()=>[P(i,{slot:"end"},{default:B((()=>[P(s,{slot:"end",onClick:a[0]||(a[0]=a=>e.modal.hide()),"icon-only":""},{default:B((()=>[P(r,{icon:e.close},null,8,["icon"])])),_:1})])),_:1}),P(u,null,{default:B((()=>[T(A(e.title),1)])),_:1})])),_:1})])),_:1}),P(w,null,{default:B((()=>[P(y,null,{default:B((()=>[P(g,null,{default:B((()=>[P(f,{size:"12",class:"ion-margin-vertical"},{default:B((()=>[P(m,{modelValue:e.form.username,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.username=a)},null,8,["modelValue"])])),_:1}),P(f,{size:"6",class:"ion-margin-vertical"},{default:B((()=>[P(v,{modelValue:e.form.password,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.password=a),password:""},null,8,["modelValue"])])),_:1}),P(f,{size:"6",class:"ion-margin-vertical"},{default:B((()=>[P(v,{modelValue:e.form.confirmPassword,"onUpdate:modelValue":a[3]||(a[3]=a=>e.form.confirmPassword=a),form:e.form,password:""},null,8,["modelValue","form"])])),_:1}),P(f,{size:"12",class:"ion-margin-vertical"},{default:B((()=>[P(p,{modelValue:e.form.roles,"onUpdate:modelValue":a[4]||(a[4]=a=>e.form.roles=a),options:e.roles,multiple:""},null,8,["modelValue","options"])])),_:1}),P(f,{size:"12",class:"ion-margin-vertical"},{default:B((()=>[P(v,{modelValue:e.form.givenName,"onUpdate:modelValue":a[5]||(a[5]=a=>e.form.givenName=a)},null,8,["modelValue"])])),_:1}),P(f,{size:"12",class:"ion-margin-vertical"},{default:B((()=>[P(v,{modelValue:e.form.familyName,"onUpdate:modelValue":a[6]||(a[6]=a=>e.form.familyName=a)},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})])),_:1}),P(_,null,{default:B((()=>[P(s,{class:"ion-margin-end ion-margin-vertical ion-float-right",onClick:e.submit},{default:B((()=>a[8]||(a[8]=[T("Save")]))),_:1},8,["onClick"]),P(s,{class:"ion-margin-vertical ion-float-right",color:"light",onClick:a[7]||(a[7]=a=>e.modal.hide())},{default:B((()=>a[9]||(a[9]=[T("Close")]))),_:1})])),_:1})])),_:1})}]]),M=o({name:"Users",components:{BaseReportTable:n},setup(){const e=w([]),a=[{path:"username",label:"Username",initialSort:!0,initialSortOrder:"asc"},{path:"given_name",label:"First name"},{path:"family_name",label:"Last name"},{path:"role",label:"Roles"},{path:"deactivated_on",label:"Deactivated On",formatter:L.toStandardHisDisplayFormat}],l=e=>{try{return{given_name:O(e,"person.names[0].given_name","Unknown"),family_name:O(e,"person.names[0].family_name","Unknown"),role:e.roles.map((e=>e.role)).join(", "),...e}}catch(a){return console.error("Error occurred while processing user details:",a),null}},n=[{icon:C,action:async e=>{const a=await U.show(K,{user:e});E(a)||Object.assign(e,l(a.data))}},{color:"danger",icon:N,condition:e=>null===e.deactivated_on,action:async e=>{if(await R("Are you sure you want to deactivate this user?"))try{const{user:a}=await(await t.deactivateUser(e.user_id)).data;e.deactivated_on=a.deactivated_on,H("User deactivated")}catch(a){$(`Deactivation Failed: ${a}`)}}},{color:"warning",icon:k,condition:e=>null!==e.deactivated_on,action:async e=>{try{await t.activateUser(e.user_id),e.deactivated_on=null}catch(a){$(`Activation Failed: ${a}`)}}}],o=[{label:"Add New User",action:async()=>{const a=await U.show(K);E(null==a?void 0:a.user)||e.value.push(l(a.user))}}];return h((async()=>{const a=(await t.getAllUsers({paginate:!1})).data,n=await t.getCurrentUser();e.value=a.filter((e=>e.person_id!==(null==n?void 0:n.person_id))).map((e=>l(e)))})),{rows:e,columns:a,rowActionBtns:n,actionBtns:o}}});a("default",j(M,[["render",function(e,a,l,n,t,o){const r=V("base-report-table");return S(),x(r,{title:"Users","report-icon":"patient-type.png",columns:e.columns,rows:e.rows,rowActionButtons:e.rowActionBtns,"action-buttons":e.actionBtns,canExportCsv:!1,canExportPDF:!1,showRefreshButton:!1},null,8,["columns","rows","rowActionButtons","action-buttons"])}]]))}}}))}();