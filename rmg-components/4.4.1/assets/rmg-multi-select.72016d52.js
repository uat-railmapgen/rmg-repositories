var V=Object.defineProperty;var f=(o,n)=>V(o,"name",{value:n,configurable:!0});import{r as i,j as t,a as u}from"./jsx-runtime.cac6885b.js";import{C as b}from"./index.esm.fe1a6111.js";import{g as O}from"./index.esm.178b0ab7.js";import{u as M}from"./index.esm.77736ccf.js";import{B as w,b as B,L,a as k}from"./index.esm.2bb7c29e.js";import{P as A,a as E,b as I,c as N}from"./index.esm.79b62cac.js";const g=f(o=>{var x;const{displayValue:n,selections:d,defaultValue:c,onChange:l}=o,R=O("RmgMultiSelect"),[r,m]=i.exports.useState(c),[p,h]=i.exports.useState(!1),S=i.exports.useRef(null),v=i.exports.useRef(null);M({ref:S,handler:()=>h(!1)}),i.exports.useEffect(()=>{c.toString()&&m(c)},[c.toString()]);const _=r.filter(e=>d.some(a=>a.value===e)).length,y=f((e,a)=>{if(a){if(!r.includes(e.value)){const s=[...r,e.value];m(s),l==null||l(s)}}else{const s=r.filter(C=>C!==e.value);m(s),l==null||l(s)}},"handleCheck");return t(w,{ref:S,sx:R,children:u(A,{placement:"bottom-start",isOpen:p,autoFocus:!1,children:[t(E,{children:u("div",{className:"rmg-multi-select__wrapper",role:"combobox","aria-expanded":p,"aria-controls":(x=v.current)==null?void 0:x.id,"aria-label":n,onClick:()=>h(e=>!e),children:[u("div",{className:`rmg-multi-select__field ${p?"active":""}`,children:[t("span",{children:n}),u(B,{colorScheme:_?"blue":void 0,role:"status",children:[_,"/",d.length]})]}),t("div",{className:"rmg-multi-select__icon-wrapper",children:t("svg",{viewBox:"0 0 24 24",children:t("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]})}),t(I,{ref:v,children:t(N,{children:t(L,{children:d.map(e=>t(k,{children:t(b,{isChecked:r.includes(e.value),isDisabled:e.disabled,onChange:({target:{checked:a}})=>y(e,a),children:e.label})},e.value.toString()))})})})]})})},"RmgMultiSelect");try{g.displayName="RmgMultiSelect",g.__docgenInfo={description:"",displayName:"RmgMultiSelect",props:{displayValue:{defaultValue:null,description:"",name:"displayValue",required:!0,type:{name:"string"}},selections:{defaultValue:null,description:"",name:"selections",required:!0,type:{name:"Selection[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/rmg-multi-select/rmg-multi-select.tsx#RmgMultiSelect"]={docgenInfo:g.__docgenInfo,name:"RmgMultiSelect",path:"src/rmg-multi-select/rmg-multi-select.tsx#RmgMultiSelect"})}catch{}export{g as R};
//# sourceMappingURL=rmg-multi-select.72016d52.js.map
