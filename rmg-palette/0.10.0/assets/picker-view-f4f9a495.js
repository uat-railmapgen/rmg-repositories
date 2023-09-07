import{j as s,$ as y,a6 as N,_ as $,f as P}from"./chakra-6df6a42a.js";import{e as b,U as F,M as h,b as V,z as A,r as x,E as j,f as z}from"./index-4db7e484.js";import{u as v,r as m,o as U}from"./react-af516715.js";import{u as W}from"./use-palette-6d372751.js";import{R as I}from"./rmg-fields-5c24e923.js";const H=i=>{const t=i.toUpperCase().split("");return t.length===2?t.map(l=>((l.codePointAt(0)||0)+127397).toString(16).toUpperCase()):t.length===5?["1F3F4",...t.map(l=>((l.codePointAt(0)||0)+917536).toString(16).toUpperCase()),"E007F"]:[]},G=i=>{const t=H(i);return String.fromCodePoint(...t.map(l=>parseInt(l,16)))};function K(i){const{defaultValueId:t,onChange:l}=i,{i18n:u}=v(),C=t?b.find(o=>o.id===t):void 0,r=o=>{var e,n;return(n=(e=u.languages.map(a=>o.name[a]).find(a=>a!==void 0))!=null?e:o.name.en)!=null?n:""},d=o=>{const e=o.country==="TW"&&["zh-Hans","zh-CN"].includes(u.languages[0]),n=u.languages.map(a=>o.name[a]).find(a=>a!==void 0);return s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"flag-emoji",children:e?"🏴":G(o.country)}),s.jsx("span",{children:n})]})},c=(o,e)=>Object.values(o.name).some(n=>n.toLowerCase().includes(e.toLowerCase())),p=b.slice().sort((o,e)=>o.id==="other"?1:e.id==="other"?-1:r(o).localeCompare(r(e),u.languages[0]));return s.jsx(F,{data:p,displayValue:r,displayHandler:d,predicate:c,defaultValue:C,onChange:o=>l==null?void 0:l(o.id)})}function X(i){const{city:t,defaultValueId:l,onChange:u}=i,{i18n:C}=v(),r=W(t),d=l?r.find(e=>e.id===l):void 0,c=e=>{var n;return(n=C.languages.map(a=>e.name[a]).find(a=>a!==void 0))!=null?n:""},p=e=>{const n=c(e);return s.jsx(V,{name:n,fg:e.fg||h.white,bg:e.colour})},o=(e,n)=>Object.values(e.name).some(a=>a.includes(n));return s.jsx(F,{data:r,displayValue:c,displayHandler:p,predicate:o,defaultValue:d,onChange:e=>u==null?void 0:u(e.id,e.colour,e.fg||h.white)})}const L=i=>!!i.match(/^#[0-9a-fA-F]{6}$/),q={flex:1,mx:2,"& .chakra-badge":{fontSize:"1em"},"& > .chakra-stack":{w:"100%",p:2,"& > div":{w:"100%"}}};function J(i){const{defaultTheme:t,sessionId:l,onSubmit:u,onClose:C}=i,{t:r}=v(),[d,c]=m.useState(t==null?void 0:t[0]),[p,o]=m.useState(t==null?void 0:t[1]),[e,n]=m.useState((t==null?void 0:t[2])||"#AAAAAA"),[a,f]=m.useState((t==null?void 0:t[3])||h.white),[E,k]=m.useState("color");m.useEffect(()=>{l&&t&&(c(t[0]),o(t[1]),n(t[2]),f(t[3]))},[l,t==null?void 0:t.toString()]);const w=[{label:r("Select"),value:"color"},{label:r("Key in"),value:"text"}],_=[{label:r("Black"),value:h.black},{label:r("White"),value:h.white}],R=[{type:"custom",label:r("City"),component:s.jsx(K,{defaultValueId:d,onChange:g=>{c(g),o(void 0),n("#AAAAAA"),f(h.white)}})},{type:"custom",label:r("Line"),component:s.jsx(X,{city:d,defaultValueId:p,onChange:(g,D,B)=>{o(g),n(D),f(B)}})}],O=[{type:"custom",label:r("Input mode"),component:s.jsx(A,{selections:w,defaultValue:E,onChange:g=>k(g)})},{type:"input",label:r("Background colour"),variant:E,value:e,placeholder:"#F3D03E",validator:L,onChange:g=>{c("other"),o("other"),n(g)}},{type:"custom",label:r("Foreground colour"),component:s.jsx(A,{selections:_,defaultValue:a,onChange:g=>{c("other"),o("other"),f(g)}})}],S=d&&p&&e&&a&&L(e),M=()=>{S&&(u==null||u([d,p,e,a]))};return s.jsxs(s.Fragment,{children:[s.jsxs(y,{sx:q,children:[s.jsx(V,{name:r("Example"),fg:a,bg:e}),s.jsxs(y,{children:[s.jsx(I,{fields:R}),s.jsx(I,{fields:O})]})]}),s.jsx(N,{}),s.jsxs($,{p:2,justifyContent:"flex-end",children:[s.jsx(P,{size:"sm",onClick:C,children:r("Cancel")}),s.jsx(P,{size:"sm",colorScheme:"primary",onClick:M,isDisabled:!S,children:r("Confirm")})]})]})}const Q="rmg-palette-bridge--";function ne(){const[i]=U(),t=i.get("parentId"),l=i.get("parentComponent"),[u,C]=m.useState(),[r,d]=m.useState(),c=m.useRef();m.useEffect(()=>{const e=new BroadcastChannel(Q+t);c.current=e,x.event(j.APP_CLIP_VIEW_OPENED,{parentComponent:l}),e.onmessage=a=>{const{event:f,data:E}=a.data;console.log(`[${e.name}] Received event from parent component:`,f),f==="OPEN"&&(C(crypto.randomUUID()),d(E))},console.log(`[${e.name}] App clip connection established, parentComponent=${l}`);const n=document.createElement("style");return n.textContent=".rmg-window__header{margin-left: unset;}",document.head.appendChild(n),e.postMessage({event:"LOADED"}),()=>{e.close(),document.head.removeChild(n)}},[]);const p=e=>{var n,a;console.log(`[${(n=c.current)==null?void 0:n.name}] Emitting SELECT event, theme:`,e),(a=c.current)==null||a.postMessage({event:"SELECT",data:e}),x.event(j.APP_CLIP_VIEW_SELECT,{parentComponent:l,theme:e})},o=()=>{var e,n;console.log(`[${(e=c.current)==null?void 0:e.name}] Emitting CLOSE event`),(n=c.current)==null||n.postMessage({event:"CLOSE"}),x.event(j.APP_CLIP_VIEW_CLOSED,{parentComponent:l})};return s.jsx(z,{children:s.jsx(J,{defaultTheme:r,sessionId:u,onSubmit:p,onClose:o})})}export{ne as default};
