import{j as n,K as C}from"./chakra-c00f698a.js";import{r as E,v as R}from"./index-b4e56c0b.js";import{b as s}from"./react-2c0b8364.js";const x="rmg-palette-bridge--",h={position:"relative",h:460,maxH:"70%","& > button":{position:"absolute",right:1,top:1},"& iframe":{h:"100%",w:"100%"}};function j(p){const{isOpen:c,onClose:a,defaultTheme:t,onSelect:l}=p,[r]=s.useState(crypto.randomUUID()),[m,f]=s.useState(!1),d="/rmg-palette/#/picker?"+new URLSearchParams({parentComponent:E.getAppName(),parentId:r}),i=s.useRef();return s.useEffect(()=>{const e=new BroadcastChannel(x+r);return i.current=e,e.onmessage=u=>{const{event:o,data:g}=u.data;console.log("[rmp] Received event from Palette app clip:",o),o==="CLOSE"?a():o==="SELECT"?l(g):o==="LOADED"&&f(!0)},()=>{e.close()}},[]),s.useEffect(()=>{var e;t&&((e=i.current)==null||e.postMessage({event:"OPEN",data:t}))},[m,t==null?void 0:t.toString()]),n.jsxs(R,{size:"md",isOpen:c,onClose:a,sx:h,children:[n.jsx(C,{onClick:a}),n.jsx("iframe",{src:d,loading:"eager"})]})}export{j as default};
