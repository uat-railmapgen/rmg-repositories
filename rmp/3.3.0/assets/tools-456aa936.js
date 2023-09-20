import{t as R,j as e,d as x,s as l,ag as B,ah as h,ai as m,_ as u,aj as f,ak as j,q}from"./chakra-c00f698a.js";import{b as p}from"./react-2c0b8364.js";import{c as L,i as z,j as C,aa as D,ab as O,ac as W,T as F,K,p as I,q as k,d as o,S as _,ad as v}from"./index-8e2f728d.js";import{m as d}from"./misc-nodes-997c7329.js";import{s as w}from"./stations-0f81c795.js";const c={justifyContent:"flex-start",p:0,w:"100%",h:10},S={p:2.5,h:10},b={p:0,display:"flex",flexDirection:"column"},X=()=>{const{t}=L(),i=z(),{mode:r,theme:T,paletteAppClip:{output:n}}=C(s=>s.runtime),{preference:{unlockSimplePathAttempts:M}}=C(s=>s.app),N=R("white","gray.800"),[a,P]=p.useState(!0),[V,g]=p.useState(!1);p.useEffect(()=>{V&&n&&(i(D(n)),g(!1))},[n==null?void 0:n.toString()]);const $=s=>i(v(`station-${s}`)),E=s=>i(v(`line-${s}`)),A=s=>i(v(`misc-node-${s}`));return e.jsxs(x,{flexShrink:"0",direction:"column",width:a?450:10,maxWidth:"100%",height:"100%",bg:N,zIndex:"5",transition:"width 0.3s ease-in-out",children:[e.jsx(l,{"aria-label":"Menu",leftIcon:a?e.jsx(O,{size:40,transform:"rotate(90)"}):e.jsx(W,{size:40,transform:"rotate(90)"}),onClick:()=>P(!a),sx:c,children:a?t("panel.tools.showLess"):void 0}),e.jsx(x,{className:"tools",overflow:"auto",children:e.jsxs(B,{width:"100%",allowMultiple:!0,defaultIndex:[0,1,2],children:[e.jsxs(h,{children:[e.jsxs(m,{sx:S,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.lineDrawing")}),e.jsx(f,{})]}),e.jsxs(j,{sx:b,children:[e.jsxs(x,{children:[e.jsx(F,{theme:T,onClick:()=>{g(!0),i(K(T))}}),e.jsx(q,{fontWeight:"600",pl:"1",alignSelf:"center",children:a?t("color"):void 0})]}),Object.values(I).filter(s=>!(s===I.Simple&&M>=0)).map(s=>e.jsx(l,{"aria-label":s,leftIcon:k[s].icon,onClick:()=>E(s),variant:r===`line-${s}`?"solid":"outline",sx:c,children:a?t(k[s].metadata.displayName):void 0},s)),e.jsx(l,{"aria-label":o.Virtual,leftIcon:d[o.Virtual].icon,onClick:()=>A(o.Virtual),variant:r===`misc-node-${o.Virtual}`?"solid":"outline",sx:c,children:a?t(d[o.Virtual].metadata.displayName):void 0})]})]}),e.jsxs(h,{children:[e.jsxs(m,{sx:S,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.stations")}),e.jsx(f,{})]}),e.jsx(j,{sx:b,children:Object.values(_).map(s=>e.jsx(l,{"aria-label":s,leftIcon:w[s].icon,onClick:()=>$(s),variant:r===`station-${s}`?"solid":"outline",sx:c,children:a?t(w[s].metadata.displayName):void 0},s))})]}),e.jsxs(h,{children:[e.jsxs(m,{sx:S,children:[a&&e.jsx(u,{as:"span",flex:"1",textAlign:"left",children:t("panel.tools.section.miscellaneousNodes")}),e.jsx(f,{})]}),e.jsx(j,{sx:b,children:Object.values(o).filter(s=>s!==o.Virtual).map(s=>e.jsx(l,{"aria-label":s,leftIcon:d[s].icon,onClick:()=>A(s),variant:r===`misc-node-${s}`?"solid":"outline",sx:c,children:a?t(d[s].metadata.displayName):void 0},s))})]})]})})]})};export{X as default};
