import{t as R,j as e,d as x,s as l,ag as B,ah as h,ai as m,a9 as u,aj as f,ak as j,q as L}from"./chakra-6dc5c7a5.js";import{b as p}from"./react-2c0b8364.js";import{d as z,e as q,z as A,a7 as D,a8 as O,a9 as W,T as F,K as G,L as C,l as k,G as o,S as K,aa as v}from"./index-d1183c16.js";import{m as d}from"./misc-nodes-8525e6e9.js";import{s as w}from"./stations-206dd396.js";const c={justifyContent:"flex-start",p:0,w:"100%",h:10},S={p:2.5,h:10},T={p:0,display:"flex",flexDirection:"column"},Y=()=>{const{t}=z(),i=q(),{mode:r,theme:b,paletteAppClip:{nextTheme:n}}=A(s=>s.runtime),{preference:{unlockSimplePathAttempts:M}}=A(s=>s.app),N=R("white","gray.800"),[a,P]=p.useState(!0),[V,g]=p.useState(!1);p.useEffect(()=>{V&&n&&(i(D(n)),g(!1))},[n==null?void 0:n.toString()]);const $=s=>i(v(`station-${s}`)),E=s=>i(v(`line-${s}`)),I=s=>i(v(`misc-node-${s}`));return e.jsxs(x,{flexShrink:"0",direction:"column",width:a?450:10,maxWidth:"100%",height:"100%",bg:N,zIndex:"5",transition:"width 0.3s ease-in-out",children:[e.jsx(l,{"aria-label":"Menu",leftIcon:a?e.jsx(O,{size:40,transform:"rotate(90)"}):e.jsx(W,{size:40,transform:"rotate(90)"}),onClick:()=>P(!a),sx:c,children:a?t("panel.tools.showLess"):void 0}),e.jsx(x,{className:"tools",overflow:"auto",children:e.jsxs(B,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[e.jsxs(h,{children:[e.jsxs(m,{sx:S,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.lineDrawing")}),e.jsx(f,{})]}),e.jsxs(j,{sx:T,children:[e.jsxs(x,{children:[e.jsx(F,{theme:b,onClick:()=>{g(!0),i(G(b))}}),e.jsx(L,{fontWeight:"600",pl:"1",alignSelf:"center",children:a?t("color"):void 0})]}),Object.values(C).filter(s=>!(s===C.Simple&&M>=0)).map(s=>e.jsx(l,{"aria-label":s,leftIcon:k[s].icon,onClick:()=>E(s),variant:r===`line-${s}`?"solid":"outline",sx:c,children:a?t(k[s].metadata.displayName):void 0},s)),e.jsx(l,{"aria-label":o.Virtual,leftIcon:d[o.Virtual].icon,onClick:()=>I(o.Virtual),variant:r===`misc-node-${o.Virtual}`?"solid":"outline",sx:c,children:a?t(d[o.Virtual].metadata.displayName):void 0})]})]}),e.jsxs(h,{children:[e.jsxs(m,{sx:S,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.stations")}),e.jsx(f,{})]}),e.jsx(j,{sx:T,children:Object.values(K).map(s=>e.jsx(l,{"aria-label":s,leftIcon:w[s].icon,onClick:()=>$(s),variant:r===`station-${s}`?"solid":"outline",sx:c,children:a?t(w[s].metadata.displayName):void 0},s))})]}),e.jsxs(h,{children:[e.jsxs(m,{sx:S,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.miscellaneousNodes")}),e.jsx(f,{})]}),e.jsx(j,{sx:T,children:Object.values(o).filter(s=>s!==o.Virtual).map(s=>e.jsx(l,{"aria-label":s,leftIcon:d[s].icon,onClick:()=>I(s),variant:r===`misc-node-${s}`?"solid":"outline",sx:c,children:a?t(d[s].metadata.displayName):void 0},s))})]})]})})]})};export{Y as default};
