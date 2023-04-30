import{r as d}from"./index-8db94870.js";import{c as G}from"./index-f800231c.js";import{f as k,a as v,o as C,d as f,c as p,h as j}from"./chunk-QEVFQ4EU-a3a83747.js";import{j as s}from"./jsx-runtime-94f6e698.js";import{k as L}from"./emotion-react.browser.esm-92f45e4a.js";import{u as M}from"./index-bf97d06a.js";var z=L({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),I=k((r,e)=>{const n=v("Spinner",r),{label:t="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:u,...m}=C(r),c=f("chakra-spinner",u),l={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${z} ${a} linear infinite`,...n};return s.jsx(p.div,{ref:e,__css:l,className:c,...m,children:t&&s.jsx(p.span,{srOnly:!0,children:t})})});I.displayName="Spinner";var[J,D]=G({strict:!1,name:"ButtonGroupContext"});function O(r){const[e,n]=d.useState(!r);return{ref:d.useCallback(a=>{a&&n(a.tagName==="BUTTON")},[]),type:e?"button":void 0}}function g(r){const{children:e,className:n,...t}=r,o=d.isValidElement(e)?d.cloneElement(e,{"aria-hidden":!0,focusable:!1}):e,a=f("chakra-button__icon",n);return s.jsx(p.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...t,className:a,children:o})}g.displayName="ButtonIcon";function x(r){const{label:e,placement:n,spacing:t="0.5rem",children:o=s.jsx(I,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...u}=r,m=f("chakra-button__spinner",a),c=n==="start"?"marginEnd":"marginStart",l=d.useMemo(()=>({display:"flex",alignItems:"center",position:e?"relative":"absolute",[c]:e?t:0,fontSize:"1em",lineHeight:"normal",...i}),[i,e,c,t]);return s.jsx(p.div,{className:m,...u,__css:l,children:o})}x.displayName="ButtonSpinner";var $=k((r,e)=>{const n=D(),t=v("Button",{...n,...r}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:u,leftIcon:m,rightIcon:c,loadingText:l,iconSpacing:h="0.5rem",type:b,spinner:y,spinnerPlacement:_="start",className:E,as:S,...T}=C(r),P=d.useMemo(()=>{const A={...t==null?void 0:t._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...t,...!!n&&{_focus:A}}},[t,n]),{ref:w,type:R}=O(S),N={rightIcon:c,leftIcon:m,iconSpacing:h,children:u};return s.jsxs(p.button,{ref:M(e,w),as:S,type:b??R,"data-active":j(i),"data-loading":j(a),__css:P,className:f("chakra-button",E),...T,disabled:o||a,children:[a&&_==="start"&&s.jsx(x,{className:"chakra-button__spinner--start",label:l,placement:"start",spacing:h,children:y}),a?l||s.jsx(p.span,{opacity:0,children:s.jsx(B,{...N})}):s.jsx(B,{...N}),a&&_==="end"&&s.jsx(x,{className:"chakra-button__spinner--end",label:l,placement:"end",spacing:h,children:y})]})});$.displayName="Button";function B(r){const{leftIcon:e,rightIcon:n,children:t,iconSpacing:o}=r;return s.jsxs(s.Fragment,{children:[e&&s.jsx(g,{marginEnd:o,children:e}),t,n&&s.jsx(g,{marginStart:o,children:n})]})}export{$ as B,I as S,J as a};
//# sourceMappingURL=chunk-NAA7TEES-feaaf6f8.js.map
