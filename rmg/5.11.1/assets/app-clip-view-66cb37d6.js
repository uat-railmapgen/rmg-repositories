import{j as e,z as j,C as y,a7 as A,J as h,h as C}from"./chakra-c9623454.js";import{b as M,r as c,E as m,b6 as I,a_ as b,o as w,b9 as O,ba as L,aZ as f}from"./index-ddf7dcb3.js";import{P as D,u as N}from"./param-updater-utils-140655a4.js";import{u as k,r}from"./react-5680e458.js";const B="rmg-bridge--",V={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}};function F(){const{t:a}=M(),[p]=k(),x=p.get("parentId"),l=p.get("parentComponent"),[S,u]=r.useState([]),[n,i]=r.useState(),[E,d]=r.useState(!1),o=r.useRef();r.useEffect(()=>{o.current=new BroadcastChannel(B+x),c.event(m.APP_CLIP_VIEW_OPENED,{parentComponent:l});const t=document.createElement("style");return t.textContent=".rmg-window__header{display: none;}",document.head.appendChild(t),u(I()),()=>{var s;(s=o.current)==null||s.close(),document.head.removeChild(t)}},[]);const _=()=>{var g;const t=window.localStorage.getItem(f.PARAM_CONFIG_BY_ID+n),s=window.localStorage.getItem(f.PARAM_BY_ID+n);try{const P=s?N(JSON.parse(s)):null;(g=o.current)==null||g.postMessage({event:"IMPORT",meta:t?JSON.parse(t):null,data:P}),c.event(m.APP_CLIP_VIEW_IMPORT,{parentComponent:l}),i(void 0),d(!1)}catch(P){d(!0)}},R=()=>{var t;(t=o.current)==null||t.postMessage({event:"CLOSE"}),c.event(m.APP_CLIP_VIEW_CLOSED,{parentComponent:l}),i(void 0),d(!1)},v=()=>{c.openApp("rmg")};return e.jsxs(b,{children:[E&&e.jsxs(j,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[e.jsx(y,{}),a("Project selected is invalid or corrupted.")]}),e.jsxs(w,{sx:V,children:[e.jsx(D,{paramRegistry:S,selectedParam:n,onParamSelect:i}),e.jsxs(A,{children:[e.jsx(h,{variant:"ghost","aria-label":a("Manage"),title:a("Manage"),icon:e.jsx(O,{}),onClick:v}),e.jsx(h,{variant:"ghost","aria-label":a("Reload"),title:a("Reload"),icon:e.jsx(L,{}),onClick:()=>u(I())}),e.jsx(C,{onClick:R,children:a("Close")}),e.jsx(C,{colorScheme:"primary",isDisabled:!n,onClick:_,children:a("Import")})]})]})]})}export{F as default};
