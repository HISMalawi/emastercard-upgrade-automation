import{bn as a}from"./index-9908b3ca.js";async function n(t,e,s){return(await a.create({message:t,position:"top",animated:!0,duration:s,color:e,cssClass:"his-md-text",keyboardClose:!0,buttons:[{side:"end",text:"x",role:"cancel"}]})).present()}function c(t,e=3e3){return n(t,"warning",e)}function i(t,e=2e3){return n(t,"success",e)}function u(t,e=3e3){return n(t,"danger",e)}export{i as a,u as b,c as t};
