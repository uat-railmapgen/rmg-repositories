import{j as o,a5 as B,a6 as A,a7 as z,_ as N,f as P}from"./chakra-6ce25592.js";import{e as L,U as w,c as F,M as x,b as R,z as V,r as y,E as S,f as H}from"./index-274ae2db.js";import{u as b,r as m,o as U}from"./react-af516715.js";import{u as G}from"./use-palette-6b4556fd.js";import{R as k}from"./rmg-fields-171d010a.js";function K(u){const{countryCode:t,svgFilename:l}=u;return l?o.jsx(B,{src:`/rmg-palette/resources/flags/${l.slice(0,-4)}.svg`,alt:`Flag of ${t}`,h:17,mr:1}):o.jsx(o.Fragment,{})}function X(u){const{defaultValueId:t,onChange:l}=u,{i18n:i}=b(),h=t?L.find(s=>s.id===t):void 0,a=s=>{var e,n;return(n=(e=i.languages.map(r=>s.name[r]).find(r=>r!==void 0))!=null?e:s.name.en)!=null?n:""},d=s=>{var E,j;const e=s.country==="TW"&&["zh-Hans","zh-CN"].includes(i.languages[0]),n=["Win32","Win64"].includes(navigator.platform),r=i.languages.map(f=>s.name[f]).find(f=>f!==void 0),p=(E=F.find(f=>f.id===s.country))==null?void 0:E.flagSvg,v=(j=F.find(f=>f.id===s.country))==null?void 0:j.flagEmoji;return o.jsxs(o.Fragment,{children:[e?o.jsx("span",{children:"🏴 "}):n?o.jsx(K,{countryCode:s.country,svgFilename:p}):o.jsxs("span",{children:[v," "]}),r]})},c=(s,e)=>Object.values(s.name).some(n=>n.includes(e)),g=L.slice().sort((s,e)=>s.id==="other"?1:e.id==="other"?-1:a(s).localeCompare(a(e),i.languages[0]));return o.jsx(w,{data:g,displayValue:a,displayHandler:d,predicate:c,defaultValue:h,onChange:s=>l==null?void 0:l(s.id)})}function q(u){const{city:t,defaultValueId:l,onChange:i}=u,{i18n:h}=b(),a=G(t),d=l?a.find(e=>e.id===l):void 0,c=e=>{var n;return(n=h.languages.map(r=>e.name[r]).find(r=>r!==void 0))!=null?n:""},g=e=>{const n=c(e);return o.jsx(R,{name:n,fg:e.fg||x.white,bg:e.colour})},s=(e,n)=>Object.values(e.name).some(r=>r.includes(n));return o.jsx(w,{data:a,displayValue:c,displayHandler:g,predicate:s,defaultValue:d,onChange:e=>i==null?void 0:i(e.id,e.colour,e.fg||x.white)})}const _=u=>!!u.match(/^#[0-9a-fA-F]{6}$/),J={flex:1,mx:2,"& .chakra-badge":{fontSize:"1em"},"& > .chakra-stack":{w:"100%",p:2,"& > div":{w:"100%"}}};function Q(u){const{defaultTheme:t,sessionId:l,onSubmit:i,onClose:h}=u,{t:a}=b(),[d,c]=m.useState(t==null?void 0:t[0]),[g,s]=m.useState(t==null?void 0:t[1]),[e,n]=m.useState((t==null?void 0:t[2])||"#AAAAAA"),[r,p]=m.useState((t==null?void 0:t[3])||x.white),[v,E]=m.useState("color");m.useEffect(()=>{l&&t&&(c(t[0]),s(t[1]),n(t[2]),p(t[3]))},[l,t==null?void 0:t.toString()]);const j=[{label:a("Select"),value:"color"},{label:a("Key in"),value:"text"}],f=[{label:a("Black"),value:x.black},{label:a("White"),value:x.white}],O=[{type:"custom",label:a("City"),component:o.jsx(X,{defaultValueId:d,onChange:C=>{c(C),s(void 0),n("#AAAAAA"),p(x.white)}})},{type:"custom",label:a("Line"),component:o.jsx(q,{city:d,defaultValueId:g,onChange:(C,D,$)=>{s(C),n(D),p($)}})}],M=[{type:"custom",label:a("Input mode"),component:o.jsx(V,{selections:j,defaultValue:v,onChange:C=>E(C)})},{type:"input",label:a("Background colour"),variant:v,value:e,placeholder:"#F3D03E",validator:_,onChange:C=>{c("other"),s("other"),n(C)}},{type:"custom",label:a("Foreground colour"),component:o.jsx(V,{selections:f,defaultValue:r,onChange:C=>{c("other"),s("other"),p(C)}})}],I=d&&g&&e&&r&&_(e),W=()=>{I&&(i==null||i([d,g,e,r]))};return o.jsxs(o.Fragment,{children:[o.jsxs(A,{sx:J,children:[o.jsx(R,{name:a("Example"),fg:r,bg:e}),o.jsxs(A,{children:[o.jsx(k,{fields:O}),o.jsx(k,{fields:M})]})]}),o.jsx(z,{}),o.jsxs(N,{p:2,justifyContent:"flex-end",children:[o.jsx(P,{size:"sm",onClick:h,children:a("Cancel")}),o.jsx(P,{size:"sm",colorScheme:"primary",onClick:W,isDisabled:!I,children:a("Confirm")})]})]})}const Y="rmg-palette-bridge--";function oe(){const[u]=U(),t=u.get("parentId"),l=u.get("parentComponent"),[i,h]=m.useState(),[a,d]=m.useState(),c=m.useRef();m.useEffect(()=>{const e=new BroadcastChannel(Y+t);c.current=e,y.event(S.APP_CLIP_VIEW_OPENED,{parentComponent:l}),e.onmessage=r=>{const{event:p,data:v}=r.data;console.log(`[${e.name}] Received event from parent component:`,p),p==="OPEN"&&(h(crypto.randomUUID()),d(v))},console.log(`[${e.name}] App clip connection established, parentComponent=${l}`);const n=document.createElement("style");return n.textContent=".rmg-window__header{margin-left: unset;}",document.head.appendChild(n),e.postMessage({event:"LOADED"}),()=>{e.close(),document.head.removeChild(n)}},[]);const g=e=>{var n,r;console.log(`[${(n=c.current)==null?void 0:n.name}] Emitting SELECT event, theme:`,e),(r=c.current)==null||r.postMessage({event:"SELECT",data:e}),y.event(S.APP_CLIP_VIEW_SELECT,{parentComponent:l,theme:e})},s=()=>{var e,n;console.log(`[${(e=c.current)==null?void 0:e.name}] Emitting CLOSE event`),(n=c.current)==null||n.postMessage({event:"CLOSE"}),y.event(S.APP_CLIP_VIEW_CLOSED,{parentComponent:l})};return o.jsx(H,{children:o.jsx(Q,{defaultTheme:a,sessionId:i,onSubmit:g,onClose:s})})}export{oe as default};
