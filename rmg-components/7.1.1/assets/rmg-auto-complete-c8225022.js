import{j as a}from"./jsx-runtime-94f6e698.js";import{r as l}from"./index-8db94870.js";import{R as h}from"./rmg-debounced-input-c3a7719e.js";import{u as V,P as j,L as R,a as v}from"./chunk-7NBWC5PS-b5941467.js";import{P as C,a as b,b as I}from"./chunk-KVBLLJMP-317bfedd.js";import{B as _}from"./chunk-6CSUKJP7-aa140969.js";import{B as q}from"./chunk-NAA7TEES-feaaf6f8.js";function c(o){const{data:u,displayValue:n,displayHandler:d,predicate:f,defaultValue:t,onChange:s,isInvalid:y}=o,p=l.useRef(null),[m,r]=l.useState(t?n(t):""),[x,i]=l.useState(!1);V({ref:p,handler:()=>i(!1)}),l.useEffect(()=>{r(t?n(t):"")},[JSON.stringify(u),JSON.stringify(t)]);const g=e=>{r(n(e)),i(!1),s==null||s(e)};return a.jsx(_,{ref:p,children:a.jsxs(C,{placement:"bottom-start",isOpen:x,autoFocus:!1,children:[a.jsx(j,{children:a.jsx(h,{defaultValue:m,onDebouncedChange:e=>r(e),onFocus:()=>i(!0),isInvalid:y})}),a.jsx(b,{w:"unset",minW:200,children:a.jsx(I,{p:0,children:a.jsx(R,{role:"menu",maxH:270,overflowY:"auto",children:u.filter(e=>f(e,m)).map(e=>a.jsx(v,{role:"none",children:a.jsx(q,{role:"menuitem",size:"sm",variant:"ghost",justifyContent:"flex-start",flexShrink:0,borderRadius:0,w:"100%",onClick:()=>g(e),children:d?d(e):n(e)})},e.id))})})})]})})}try{c.displayName="RmgAutoComplete",c.__docgenInfo={description:"",displayName:"RmgAutoComplete",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"T[]"}},displayValue:{defaultValue:null,description:"",name:"displayValue",required:!0,type:{name:"(item: T) => string"}},displayHandler:{defaultValue:null,description:"",name:"displayHandler",required:!1,type:{name:"((item: T) => string | number | ReactElement<any, string | JSXElementConstructor<any>>)"}},predicate:{defaultValue:null,description:"",name:"predicate",required:!0,type:{name:"(item: T, input: string) => boolean"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"{ id: string; }"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((item: T) => void)"}},isInvalid:{defaultValue:null,description:"",name:"isInvalid",required:!1,type:{name:"boolean"}}}}}catch{}export{c as R};
//# sourceMappingURL=rmg-auto-complete-c8225022.js.map
