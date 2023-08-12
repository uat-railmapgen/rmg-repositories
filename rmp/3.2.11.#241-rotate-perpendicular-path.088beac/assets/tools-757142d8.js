import{v as $,j as e,F as d,h as n,aw as B,ax as x,ay as h,B as u,az as m,aA as j,s as O}from"./chakra-e455e76b.js";import{b as S}from"./react-beb26faf.js";import{d as z,e as E,z as L,a7 as P,a8 as R,T as D,N as F,a9 as W,L as T,l as I,H as l,S as H,aa as f}from"./index-d7df8afb.js";import{s as g}from"./stations-a1447aae.js";import{m as r}from"./misc-nodes-c9a628a7.js";const t={justifyContent:"flex-start",p:0,w:"100%",h:10},p={p:2.5,h:10},v={p:0,display:"flex",flexDirection:"column"},Q=()=>{const{t:o}=z(),i=E(),{mode:c,theme:C}=L(s=>s.runtime),w=$("white","gray.800"),[a,N]=S.useState(!0),[A,b]=S.useState(!1),k=s=>i(f(`station-${s}`)),V=s=>i(f(`line-${s}`)),M=s=>i(f(`misc-node-${s}`));return e.jsxs(d,{flexShrink:"0",direction:"column",width:a?450:10,maxWidth:"100%",height:"100%",bg:w,zIndex:"5",transition:"width 0.3s ease-in-out",children:[e.jsx(n,{"aria-label":"Menu",leftIcon:a?e.jsx(P,{size:40,transform:"rotate(90)"}):e.jsx(R,{size:40,transform:"rotate(90)"}),onClick:()=>N(!a),sx:t,children:a?o("panel.tools.showLess"):void 0}),e.jsx(d,{className:"tools",overflow:"auto",children:e.jsxs(B,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[e.jsxs(x,{children:[e.jsxs(h,{sx:p,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.lineDrawing")}),e.jsx(m,{})]}),e.jsxs(j,{sx:v,children:[e.jsxs(d,{children:[e.jsx(D,{theme:C,onClick:()=>b(!0)}),e.jsx(O,{fontWeight:"600",pl:"1",alignSelf:"center",children:a?o("color"):void 0})]}),e.jsx(F,{isOpen:A,defaultTheme:C,onClose:()=>b(!1),onUpdate:s=>i(W(s))}),Object.values(T).filter(s=>s!==T.Simple).map(s=>e.jsx(n,{"aria-label":s,leftIcon:I[s].icon,onClick:()=>V(s),variant:c===`line-${s}`?"solid":"outline",sx:t,children:a?o(I[s].metadata.displayName):void 0},s)),e.jsx(n,{"aria-label":l.Virtual,leftIcon:r[l.Virtual].icon,onClick:()=>M(l.Virtual),variant:c===`misc-node-${l.Virtual}`?"solid":"outline",sx:t,children:a?o(r[l.Virtual].metadata.displayName):void 0})]})]}),e.jsxs(x,{children:[e.jsxs(h,{sx:p,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.stations")}),e.jsx(m,{})]}),e.jsx(j,{sx:v,children:Object.values(H).map(s=>e.jsx(n,{"aria-label":s,leftIcon:g[s].icon,onClick:()=>k(s),variant:c===`station-${s}`?"solid":"outline",sx:t,children:a?o(g[s].metadata.displayName):void 0},s))})]}),e.jsxs(x,{children:[e.jsxs(h,{sx:p,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:o("panel.tools.section.miscellaneousNodes")}),e.jsx(m,{})]}),e.jsx(j,{sx:v,children:Object.values(l).filter(s=>s!==l.Virtual).map(s=>e.jsx(n,{"aria-label":s,leftIcon:r[s].icon,onClick:()=>M(s),variant:c===`misc-node-${s}`?"solid":"outline",sx:t,children:a?o(r[s].metadata.displayName):void 0},s))})]})]})})]})};export{Q as default};
