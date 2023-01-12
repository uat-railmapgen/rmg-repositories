var v=Object.defineProperty;var m=(t,r)=>v(t,"name",{value:r,configurable:!0});import{r as d,R as p,j as a}from"./jsx-runtime.def5eff7.js";import{R as k}from"./rmg-label.53a13385.js";import{R as w}from"./rmg-debounced-input.72ec7757.js";import{R as f}from"./index.91cb1d48.js";import{R as F}from"./rmg-select.a729eca9.js";import{R as I}from"./rmg-throttled-slider.33073f69.js";import{u as L}from"./index.esm.e611552d.js";import{i as N,j as T,o as E,e as h}from"./index.esm.6ef52bc8.js";import{F as O}from"./index.esm.b2b3757c.js";var D=m((...t)=>t.filter(Boolean).join(" "),"cx"),_=m(t=>t?"":void 0,"dataAttr"),R=N(m(function(r,g){const n=T("Switch",r),{spacing:s="0.5rem",children:i,...u}=E(r),{state:c,getInputProps:e,getCheckboxProps:l,getRootProps:o,getLabelProps:x}=L(u),S=d.exports.useMemo(()=>({display:"inline-block",position:"relative",verticalAlign:"middle",lineHeight:0,...n.container}),[n.container]),y=d.exports.useMemo(()=>({display:"inline-flex",flexShrink:0,justifyContent:"flex-start",boxSizing:"content-box",cursor:"pointer",...n.track}),[n.track]),C=d.exports.useMemo(()=>({userSelect:"none",marginStart:s,...n.label}),[s,n.label]);return p.createElement(h.label,{...o(),className:D("chakra-switch",r.className),__css:S},a("input",{className:"chakra-switch__input",...e({},g)}),p.createElement(h.span,{...l(),className:"chakra-switch__track",__css:y},p.createElement(h.span,{__css:n.thumb,className:"chakra-switch__thumb","data-checked":_(c.isChecked),"data-hover":_(c.isHovered)})),i&&p.createElement(h.span,{className:"chakra-switch__label",...x(),__css:C},i))},"Switch2"));R.displayName="Switch";function b(t){const{fields:r,noLabel:g,minW:n}=t;return a(O,{wrap:"wrap",children:r.map((s,i)=>{if(s.hidden)return a(d.exports.Fragment,{},i);const u=s.minW||n,c=u==="full";return a(k,{className:c?"mw-full":"",label:s.label,flex:c?void 0:1,minW:c?void 0:u,noLabel:g,oneLine:s.oneLine,children:(e=>{switch(e.type){case"input":return a(w,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList});case"textarea":return a(f,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange});case"slider":return a(I,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon});case"select":return a(F,{defaultValue:e.value,onChange:({target:{value:l}})=>{var o;return(o=e.onChange)==null?void 0:o.call(e,typeof e.value=="number"?Number(l):l.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid});case"switch":return a(R,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:({target:{checked:l}})=>{var o;return(o=e.onChange)==null?void 0:o.call(e,l)}});case"custom":return e.component;default:return a("div",{})}})(s)},i)})})}m(b,"RmgFields");try{b.displayName="RmgFields",b.__docgenInfo={description:"",displayName:"RmgFields",props:{fields:{defaultValue:null,description:"",name:"fields",required:!0,type:{name:"RmgFieldsField<T>[]"}},noLabel:{defaultValue:null,description:"",name:"noLabel",required:!1,type:{name:"boolean"}},minW:{defaultValue:null,description:"",name:"minW",required:!1,type:{name:'number | "full" | `${number}px`'}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/rmg-fields/rmg-fields.tsx#RmgFields"]={docgenInfo:b.__docgenInfo,name:"RmgFields",path:"src/rmg-fields/rmg-fields.tsx#RmgFields"})}catch{}export{b as R};
//# sourceMappingURL=rmg-fields.cc32d425.js.map
