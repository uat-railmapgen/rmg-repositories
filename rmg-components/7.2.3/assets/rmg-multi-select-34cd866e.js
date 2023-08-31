import{j as e}from"./jsx-runtime-4ca860c5.js";import{r as l}from"./index-61bf1805.js";import{u as D}from"./chunk-RMJG37OC-823e3ac4.js";import{P as M,a as L,b as O}from"./chunk-24I2HV4N-d252c289.js";import{P as q,L as E,a as $}from"./chunk-DY5QRMBO-da789a6a.js";import{B as z}from"./chunk-Z6RXEUPO-3e919507.js";import{B as G}from"./chunk-PULVB27S-dfb23afe.js";import{c as W}from"./index-6830816b.js";import{c as m,f as X,d as F,o as T,i as H,a as J,u as K}from"./chunk-ZJJGQIVY-35f6fb8e.js";import{u as Q}from"./chunk-7D6N5TE5-7847f1c7.js";import{k as b}from"./emotion-react.browser.esm-3572b68e.js";var[ge,U]=W({name:"CheckboxGroupContext",strict:!1});function Y(o){const[r,i]=l.useState(o),[t,n]=l.useState(!1);return o!==r&&(n(!0),i(o)),t}function Z(o){return e.jsx(m.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...o,children:e.jsx("polyline",{points:"1.5 6 4.5 9 10.5 1"})})}function ee(o){return e.jsx(m.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...o,children:e.jsx("line",{x1:"21",x2:"3",y1:"12",y2:"12"})})}function te(o){const{isIndeterminate:r,isChecked:i,...t}=o,n=r?ee:Z;return i||r?e.jsx(m.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},children:e.jsx(n,{...t})}):null}var se={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},oe={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},ne=b({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),re=b({from:{opacity:0},to:{opacity:1}}),ae=b({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),P=X(function(r,i){const t=U(),n={...t,...r},c=F("Checkbox",n),a=T(r),{spacing:p="0.5rem",className:h,children:f,iconColor:x,iconSize:v,icon:k=e.jsx(te,{}),isChecked:j,isDisabled:C=t==null?void 0:t.isDisabled,onChange:s,inputProps:u,...d}=a;let y=j;t!=null&&t.value&&a.value&&(y=t.value.includes(a.value));let _=s;t!=null&&t.onChange&&a.value&&(_=H(t.onChange,s));const{state:g,getInputProps:w,getCheckboxProps:V,getLabelProps:R,getRootProps:A}=Q({...d,isDisabled:C,isChecked:y,onChange:_}),S=Y(g.isChecked),N=l.useMemo(()=>({animation:S?g.isIndeterminate?`${re} 20ms linear, ${ae} 200ms linear`:`${ne} 200ms linear`:void 0,fontSize:v,color:x,...c.icon}),[x,v,S,g.isIndeterminate,c.icon]),B=l.cloneElement(k,{__css:N,isIndeterminate:g.isIndeterminate,isChecked:g.isChecked});return e.jsxs(m.label,{__css:{...oe,...c.container},className:J("chakra-checkbox",h),...A(),children:[e.jsx("input",{className:"chakra-checkbox__input",...w(u,i)}),e.jsx(m.span,{__css:{...se,...c.control},className:"chakra-checkbox__control",...V(),children:B}),f&&e.jsx(m.span,{className:"chakra-checkbox__label",...R(),__css:{marginStart:p,...c.label},children:f})]})});P.displayName="Checkbox";const I=o=>{var C;const{displayValue:r,selections:i,defaultValue:t,onChange:n}=o,c=K("RmgMultiSelect"),[a,p]=l.useState(t),[h,f]=l.useState(!1),x=l.useRef(null),v=l.useRef(null);D({ref:x,handler:()=>f(!1)}),l.useEffect(()=>{t.toString()&&p(t)},[t.toString()]);const k=a.filter(s=>i.some(u=>u.value===s)).length,j=(s,u)=>{if(u){if(!a.includes(s.value)){const d=[...a,s.value];p(d),n==null||n(d)}}else{const d=a.filter(y=>y!==s.value);p(d),n==null||n(d)}};return e.jsx(G,{ref:x,sx:c,children:e.jsxs(M,{placement:"bottom-start",isOpen:h,autoFocus:!1,children:[e.jsx(q,{children:e.jsxs("div",{className:"rmg-multi-select__wrapper",role:"combobox","aria-expanded":h,"aria-controls":(C=v.current)==null?void 0:C.id,"aria-label":r,onClick:()=>f(s=>!s),children:[e.jsxs("div",{className:`rmg-multi-select__field ${h?"active":""}`,children:[e.jsx("span",{children:r}),e.jsxs(z,{colorScheme:k?"blue":void 0,role:"status",children:[k,"/",i.length]})]}),e.jsx("div",{className:"rmg-multi-select__icon-wrapper",children:e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{fill:"currentColor",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})})})]})}),e.jsx(L,{ref:v,children:e.jsx(O,{children:e.jsx(E,{children:i.map(s=>e.jsx($,{children:e.jsx(P,{isChecked:a.includes(s.value),isDisabled:s.disabled,onChange:({target:{checked:u}})=>j(s,u),children:s.label})},s.value.toString()))})})})]})})};try{I.displayName="RmgMultiSelect",I.__docgenInfo={description:"",displayName:"RmgMultiSelect",props:{displayValue:{defaultValue:null,description:"",name:"displayValue",required:!0,type:{name:"string"}},selections:{defaultValue:null,description:"",name:"selections",required:!0,type:{name:"Selection[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!0,type:{name:"string[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string[]) => void)"}}}}}catch{}export{I as R};
//# sourceMappingURL=rmg-multi-select-34cd866e.js.map
