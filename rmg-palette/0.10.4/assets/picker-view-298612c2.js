import{j as s,$ as y,Z as N,a5 as U,a6 as W,H,a7 as G,_ as K,f as P}from"./chakra-4c4a0221.js";import{e as I,U as R,M as x,b as k,a as X,z as L,d as Z,r as v,E as S,f as q,V as J}from"./index-b45ca07a.js";import{u as b,r as g,o as Q}from"./react-af516715.js";import{u as Y}from"./use-palette-068f3ba1.js";import{R as V,i as T}from"./index.esm-bd1dff2c.js";const ee=d=>{const e=d.toUpperCase().split("");return e.length===2?e.map(c=>((c.codePointAt(0)||0)+127397).toString(16).toUpperCase()):e.length===5?["1F3F4",...e.map(c=>((c.codePointAt(0)||0)+917536).toString(16).toUpperCase()),"E007F"]:[]},te=d=>{const e=ee(d);return String.fromCodePoint(...e.map(c=>parseInt(c,16)))};function ne(d){const{defaultValueId:e,onChange:c}=d,{i18n:u}=b(),f=e?I.find(a=>a.id===e):void 0,r=a=>{var n,t;return(t=(n=u.languages.map(o=>a.name[o]).find(o=>o!==void 0))!=null?n:a.name.en)!=null?t:""},h=a=>{const n=a.country==="TW"&&["zh-Hans","zh-CN"].includes(u.languages[0]),t=u.languages.map(o=>a.name[o]).find(o=>o!==void 0);return s.jsxs(s.Fragment,{children:[s.jsx("span",{className:"flag-emoji",children:n?"🏴":te(a.country)}),s.jsx("span",{children:t})]})},p=(a,n)=>Object.values(a.name).some(t=>t.toLowerCase().includes(n.toLowerCase())),i=I.slice().sort((a,n)=>a.id==="other"?1:n.id==="other"?-1:r(a).localeCompare(r(n),u.languages[0]));return s.jsx(R,{data:i,displayValue:r,displayHandler:h,predicate:p,defaultValue:f,onChange:a=>c==null?void 0:c(a.id)})}function se(d){const{city:e,defaultValueId:c,onChange:u}=d,{i18n:f}=b(),r=Y(e),h=c?r.find(n=>n.id===c):void 0,p=n=>{var t;return(t=f.languages.map(o=>n.name[o]).find(o=>o!==void 0))!=null?t:""},i=n=>{const t=p(n);return s.jsx(k,{name:t,fg:n.fg||x.white,bg:n.colour})},a=(n,t)=>Object.values(n.name).some(o=>o.includes(t));return s.jsx(R,{data:r,displayValue:p,displayHandler:i,predicate:a,defaultValue:h,onChange:n=>u==null?void 0:u(n.id,n.colour,n.fg||x.white)})}const F=d=>!!d.match(/^#[0-9a-fA-F]{6}$/),oe={flex:1,mx:2,"& .chakra-badge":{fontSize:"1em"},"& > .chakra-stack":{w:"100%",p:2,"& > div":{w:"100%"}},"& h5":{alignSelf:"flex-start"}};function ae(d){const{defaultTheme:e,sessionId:c,onSubmit:u,onClose:f}=d,{t:r}=b(),{recentlyUsed:h}=X(l=>l.app),[p,i]=g.useState(e==null?void 0:e[0]),[a,n]=g.useState(e==null?void 0:e[1]),[t,o]=g.useState((e==null?void 0:e[2])||"#AAAAAA"),[C,m]=g.useState((e==null?void 0:e[3])||x.white),[j,w]=g.useState("color");g.useEffect(()=>{c&&e&&(i(e[0]),n(e[1]),o(e[2]),m(e[3]))},[c,e==null?void 0:e.toString()]);const _=[{label:r("Select"),value:"color"},{label:r("Key in"),value:"text"}],M=[{label:r("Black"),value:x.black},{label:r("White"),value:x.white}],O=[{type:"custom",label:r("City"),component:s.jsx(ne,{defaultValueId:p,onChange:l=>{i(l),n(void 0),o("#AAAAAA"),m(x.white)}})},{type:"custom",label:r("Line"),component:s.jsx(se,{city:p,defaultValueId:a,onChange:(l,E,B)=>{n(l),o(E),m(B)}})}],D=[{type:"custom",label:r("Input mode"),component:s.jsx(L,{selections:_,defaultValue:j,onChange:l=>w(l)})},{type:"input",label:r("Background colour"),variant:j,value:t,placeholder:"#F3D03E",validator:F,onChange:l=>{i("other"),n("other"),o(l)}},{type:"custom",label:r("Foreground colour"),component:s.jsx(L,{selections:M,defaultValue:C,onChange:l=>{i("other"),n("other"),m(l)}})}],A=p&&a&&t&&C&&F(t),$=()=>{if(A){const l=`${p} - ${a}`;u==null||u([p,a,t,C],l)}},z=l=>{i(l[0]),n(l[1]),o(l[2]),m(l[3])};return s.jsxs(s.Fragment,{children:[s.jsxs(y,{sx:oe,children:[s.jsx(k,{name:r("Example"),fg:C,bg:t}),s.jsxs(y,{children:[s.jsx(V,{fields:O}),s.jsx(V,{fields:D})]}),s.jsxs(y,{children:[s.jsx(N,{as:"h5",size:"xs",children:r("Recently used")}),s.jsx(U,{children:h.map(({theme:l,displayName:E})=>s.jsx(W,{children:s.jsx(H,{size:"xs","aria-label":r("Apply"),title:E,mt:"0.45px",color:l[3],bg:l[2],icon:s.jsx(T,{}),onClick:()=>z(l)})},l.join("-")))})]})]}),s.jsx(G,{}),s.jsxs(K,{p:2,justifyContent:"flex-end",children:[s.jsx(P,{size:"sm",onClick:f,children:r("Cancel")}),s.jsx(P,{size:"sm",colorScheme:"primary",onClick:$,isDisabled:!A,children:r("Confirm")})]})]})}const re="rmg-palette-bridge--";function pe(){const[d]=Q(),e=d.get("parentId"),c=d.get("parentComponent"),u=Z(),[f,r]=g.useState(),[h,p]=g.useState(),i=g.useRef();g.useEffect(()=>{const t=new BroadcastChannel(re+e);i.current=t,v.event(S.APP_CLIP_VIEW_OPENED,{parentComponent:c}),t.onmessage=C=>{const{event:m,data:j}=C.data;console.log(`[${t.name}] Received event from parent component:`,m),m==="OPEN"&&(r(crypto.randomUUID()),p(j))},console.log(`[${t.name}] App clip connection established, parentComponent=${c}`);const o=document.createElement("style");return o.textContent=".rmg-window__header{margin-left: unset;}",document.head.appendChild(o),t.postMessage({event:"LOADED"}),()=>{t.close(),document.head.removeChild(o)}},[]);const a=(t,o)=>{var C,m;console.log(`[${(C=i.current)==null?void 0:C.name}] Emitting SELECT event, theme:`,t),(m=i.current)==null||m.postMessage({event:"SELECT",data:t}),u(J({theme:t,displayName:o})),v.event(S.APP_CLIP_VIEW_SELECT,{parentComponent:c,theme:t})},n=()=>{var t,o;console.log(`[${(t=i.current)==null?void 0:t.name}] Emitting CLOSE event`),(o=i.current)==null||o.postMessage({event:"CLOSE"}),v.event(S.APP_CLIP_VIEW_CLOSED,{parentComponent:c})};return s.jsx(q,{children:s.jsx(ae,{defaultTheme:h,sessionId:f,onSubmit:a,onClose:n})})}export{pe as default};
