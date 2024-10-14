import{d as f,p as B,$ as A,R as D,_ as g,K as o,o as d,h as m,w as i,e as c,a as L,ag as S,t as h,c as y,x as O,I as V,n as q,J as k,M as w,aL as z,b as I,aM as R,aN as v,T as F,q as M,B as j,aO as P,aP as x}from"./index-44c2209e.js";import{t as H}from"./toasts-eb3581bc.js";const W=f({components:{IonToolbar:B,IonTitle:A,IonHeader:D},props:{title:{type:String,required:!0},subtitle:{type:String},color:{type:String}}});const G={key:0};function J(e,t,n,u,l,_){const s=o("ion-title"),a=o("ion-toolbar"),p=o("ion-header");return d(),m(p,null,{default:i(()=>[c(a,null,{default:i(()=>[c(s,{class:"ion-text-center"},{default:i(()=>[L("span",{class:S(["his-lg-text",e.color])},h(e.title),3),e.subtitle?(d(),y("h1",G,h(e.subtitle),1)):O("",!0)]),_:1})]),_:1})]),_:1})}const K=g(W,[["render",J],["__scopeId","data-v-b98f77f9"]]),Q=f({name:"HisNavFooter",data:()=>({footerBtns:[]}),created(){this.$emit("onFooterInstance",this)},props:{color:{type:String,default:"dark"},state:{type:Object},btns:{type:Object,required:!0}},components:{IonButton:V,IonFooter:q,IonToolbar:B},watch:{state:{handler(e){e&&(this.footerBtns=this.footerBtns.map(t=>(t.visibleOnStateChange&&(t.visible=t.visibleOnStateChange(e)),t)))},deep:!0,immediate:!0},btns:{handler(e){e&&(this.footerBtns=[...e])},deep:!0,immediate:!0}}});function U(e,t,n,u,l,_){const s=o("ion-button"),a=o("ion-toolbar"),p=o("ion-footer");return d(),m(p,null,{default:i(()=>[c(a,{color:e.color},{default:i(()=>[(d(!0),y(k,null,w(e.footerBtns,(r,$)=>z((d(),m(s,{key:$,slot:r.slot,onClick:C=>r.onClick(r),color:r.color,class:S(r.styleClass),size:r.size},{default:i(()=>[I(h(r.name),1)]),_:2},1032,["slot","onClick","color","class","size"])),[[R,r.visible]])),128))]),_:1},8,["color"])]),_:1})}const X=g(Q,[["render",U]]),Y=f({components:{DynamicNav:X},props:{buttons:{type:Array,default:()=>[]}},computed:{btns(){return this.buttons.map(e=>(e.size="large",e.color=e.color||"primary",e.visible=!0,e.styleClass="full-width-ion-btn",e.onClick||(e.onClick=async()=>{await v.dismiss({action:e.name})}),e))}}});function Z(e,t,n,u,l,_){const s=o("dynamic-nav");return d(),m(s,{color:"white",btns:e.btns},null,8,["btns"])}const ee=g(Y,[["render",Z]]),te=f({components:{ActionHeader:K,ActionFooter:ee},props:{title:{type:String,required:!0},subtitle:{type:String},actionButtons:{type:Object,required:!0},color:{type:String}}});const oe=f({components:{IonList:F,IonItem:M,IonContent:j,IonRadio:P,IonRadioGroup:x},mixins:[te],data:()=>({activeLabel:""}),props:{list:{type:Object,required:!0}},methods:{onclick(e){this.activeLabel=e}},computed:{buttons(){return this.actionButtons.map(e=>({...e,onClick:async()=>{if(e.role&&e.role.match(/default/i))return v.dismiss({action:e.name});if(e.role&&e.role.match(/action/i)&&!this.activeLabel)return H("Please select one of the options");await v.dismiss({selection:this.activeLabel,action:e.name})}}))}}});function ne(e,t,n,u,l,_){const s=o("action-header"),a=o("ion-radio"),p=o("ion-label"),r=o("ion-item"),$=o("ion-radio-group"),C=o("ion-list"),N=o("ion-content"),E=o("action-footer");return d(),y(k,null,[c(s,{title:e.title,subtitle:e.subtitle,color:e.color},null,8,["title","subtitle","color"]),c(N,{class:"ion-text-center"},{default:i(()=>[c(C,null,{default:i(()=>[c($,{value:e.activeLabel},{default:i(()=>[(d(!0),y(k,null,w(e.list,(b,T)=>(d(),m(r,{class:"his-md-text",onClick:re=>e.onclick(b),key:T},{default:i(()=>[c(a,{slot:"start",value:b},null,8,["value"]),c(p,null,{default:i(()=>[I(h(b),1)]),_:2},1024)]),_:2},1032,["onClick"]))),128))]),_:1},8,["value"])]),_:1})]),_:1}),c(E,{buttons:e.buttons},null,8,["buttons"])],64)}const se=g(oe,[["render",ne],["__scopeId","data-v-1d03ca5e"]]);function ae(){const e=(t,n)=>{setTimeout(()=>{const u=document.getElementsByClassName("modal-wrapper");if(u.length){const l=u[0],_=l.getElementsByTagName("ion-header");_.length>=2?_[1].remove():t<20&&e(t+1,n+100);const s=l.getElementsByTagName("ion-content");s.length>=2&&s[1].remove();const a=l.getElementsByTagName("ion-footer");a.length>=2&&a[1].parentElement&&a[1].parentElement.remove()}else t<5&&e(t+1,n+100)},n)};e(0,0)}async function ie(e,t,n,u,l="darkred",_="action-sheet-modal"){const s=await v.create({component:se,backdropDismiss:!1,cssClass:_,componentProps:{title:e,subtitle:t,color:l,list:n,actionButtons:u}});await s.present(),ae();const{data:a}=await s.onDidDismiss();return a}async function de(e,t="action-sheet-modal"){const n=await ie("Are you sure you want to void record?","Please specify reason for voiding this record",["Mistake/ Wrong Entry","Duplicate","System Error"],[{name:"Cancel",slot:"start"},{name:"Void",color:"danger",slot:"end",role:"action"}],"",t);n.selection&&n.action==="Void"&&await e(n.selection)}export{de as p};