import{j as e,x as j,y,a8 as A,G as h,d as C}from"./chakra-81918c77.js";import{b as M,r as c,E as m,b0 as x,aX as b,h as w,b3 as O,b4 as L,aW as I}from"./index-8982d5e2.js";import{u as D,r}from"./react-50230a52.js";import{P as N,u as k}from"./param-updater-utils-f07ce729.js";const B="rmg-bridge--",V={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}};function H(){const{t:a}=M(),[p]=D(),f=p.get("parentId"),l=p.get("parentComponent"),[S,u]=r.useState([]),[n,i]=r.useState(),[E,d]=r.useState(!1),o=r.useRef();r.useEffect(()=>{o.current=new BroadcastChannel(B+f),c.event(m.APP_CLIP_VIEW_OPENED,{parentComponent:l});const t=document.createElement("style");return t.textContent=".rmg-window__header{display: none;}",document.head.appendChild(t),u(x()),()=>{var s;(s=o.current)==null||s.close(),document.head.removeChild(t)}},[]);const R=()=>{var g;const t=window.localStorage.getItem(I.PARAM_CONFIG_BY_ID+n),s=window.localStorage.getItem(I.PARAM_BY_ID+n);try{const P=s?k(JSON.parse(s)):null;(g=o.current)==null||g.postMessage({event:"IMPORT",meta:t?JSON.parse(t):null,data:P}),c.event(m.APP_CLIP_VIEW_IMPORT,{parentComponent:l}),i(void 0),d(!1)}catch(P){d(!0)}},_=()=>{var t;(t=o.current)==null||t.postMessage({event:"CLOSE"}),c.event(m.APP_CLIP_VIEW_CLOSED,{parentComponent:l}),i(void 0),d(!1)},v=()=>{c.openApp("rmg")};return e.jsxs(b,{children:[E&&e.jsxs(j,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[e.jsx(y,{}),a("Project selected is invalid or corrupted.")]}),e.jsxs(w,{sx:V,children:[e.jsx(N,{paramRegistry:S,selectedParam:n,onParamSelect:i}),e.jsxs(A,{children:[e.jsx(h,{variant:"ghost","aria-label":a("Manage"),title:a("Manage"),icon:e.jsx(O,{}),onClick:v}),e.jsx(h,{variant:"ghost","aria-label":a("Reload"),title:a("Reload"),icon:e.jsx(L,{}),onClick:()=>u(x())}),e.jsx(C,{onClick:_,children:a("Close")}),e.jsx(C,{colorScheme:"primary",isDisabled:!n,onClick:R,children:a("Import")})]})]})]})}export{H as default};
