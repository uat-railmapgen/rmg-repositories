import{j as a,F as v,a8 as p}from"./chakra-80216e73.js";import{r as g}from"./react-326f1873.js";import{V as b,W as x,X as d,P as C,Y as j}from"./index-6016da67.js";function D(o){var i=o.fields,m=o.noLabel,h=o.minW;return a.jsx(v,{wrap:"wrap",children:i.map(function(t,c){if(t.hidden)return a.jsx(g.Fragment,{},c);var l=t.minW||h,s=l==="full";return a.jsx(b,{className:s?"mw-full":"",label:t.label,flex:s?void 0:1,minW:s?void 0:l,noLabel:m,oneLine:t.oneLine,children:function(e){switch(e.type){case"input":return a.jsx(j,{placeholder:e.placeholder,defaultValue:e.value,type:e.variant,validator:e.validator,onDebouncedChange:e.onChange,delay:e.debouncedDelay,optionList:e.optionList});case"textarea":return a.jsx(C,{placeholder:e.placeholder,defaultValue:e.value,onDebouncedChange:e.onChange});case"slider":return a.jsx(d,{defaultValue:e.value,min:e.min,max:e.max,step:e.step,onThrottledChange:e.onChange,leftIcon:e.leftIcon,rightIcon:e.rightIcon});case"select":return a.jsx(x,{defaultValue:e.value,onChange:function(u){var n,r=u.target.value;return(n=e.onChange)===null||n===void 0?void 0:n.call(e,typeof e.value=="number"?Number(r):r.toString())},options:e.options,disabledOptions:e.disabledOptions,isInvalid:e.isInvalid});case"switch":return a.jsx(p,{isChecked:e.isChecked,isDisabled:e.isDisabled,onChange:function(u){var n,r=u.target.checked;return(n=e.onChange)===null||n===void 0?void 0:n.call(e,r)}});case"custom":return e.component;default:return a.jsx("div",{})}}(t)},c)})})}export{D as R};
