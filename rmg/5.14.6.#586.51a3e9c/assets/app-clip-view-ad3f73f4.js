import{j as e,x as R,y,a8 as S,G as P,d as g}from"./chakra-81918c77.js";import{b as _,r as c,E as m,aW as M,h as A,a$ as b,b0 as L}from"./index-dd8add87.js";import{u as k,r}from"./react-50230a52.js";import{g as f,P as O,c as w,u as D}from"./param-updater-utils-35eb3af8.js";const V="rmg-bridge--",W={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}};function F(){const{t:a}=_(),[p]=k(),x=p.get("parentId"),i=p.get("parentComponent"),[C,u]=r.useState([]),[n,l]=r.useState(),[E,d]=r.useState(!1),o=r.useRef();r.useEffect(()=>{o.current=new BroadcastChannel(V+x),c.event(m.APP_CLIP_VIEW_OPENED,{parentComponent:i});const t=document.createElement("style");return t.textContent=".rmg-window__header{display: none;}",document.head.appendChild(t),u(f()),()=>{var s;(s=o.current)==null||s.close(),document.head.removeChild(t)}},[]);const v=()=>{var h;if(!n)return;const{config:t,param:s}=w(n);try{(h=o.current)==null||h.postMessage({event:"IMPORT",meta:t,data:s&&D(s)}),c.event(m.APP_CLIP_VIEW_IMPORT,{parentComponent:i}),l(void 0),d(!1)}catch(B){d(!0)}},I=()=>{var t;(t=o.current)==null||t.postMessage({event:"CLOSE"}),c.event(m.APP_CLIP_VIEW_CLOSED,{parentComponent:i}),l(void 0),d(!1)},j=()=>{c.openApp("rmg")};return e.jsxs(M,{children:[E&&e.jsxs(R,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[e.jsx(y,{}),a("Project selected is invalid or corrupted.")]}),e.jsxs(A,{sx:W,children:[e.jsx(O,{paramRegistry:C,selectedParam:n,onParamSelect:l}),e.jsxs(S,{children:[e.jsx(P,{variant:"ghost","aria-label":a("Manage"),title:a("Manage"),icon:e.jsx(b,{}),onClick:j}),e.jsx(P,{variant:"ghost","aria-label":a("Reload"),title:a("Reload"),icon:e.jsx(L,{}),onClick:()=>u(f())}),e.jsx(g,{onClick:I,children:a("Close")}),e.jsx(g,{colorScheme:"primary",isDisabled:!n,onClick:v,children:a("Import")})]})]})]})}export{F as default};
