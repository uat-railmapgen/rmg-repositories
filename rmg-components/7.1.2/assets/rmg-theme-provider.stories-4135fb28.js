import{j as p}from"./jsx-runtime-94f6e698.js";import{u as x,R}from"./rmg-theme-provider-780d3984.js";import{r as h}from"./index-8db94870.js";import{r as C}from"./index-f87d6104.js";import{u as y}from"./chunk-QEVFQ4EU-a3a83747.js";import{R as L}from"./rmg-button-group-6cb1d8cc.js";import"./emotion-react.browser.esm-92f45e4a.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-FRKYNQ2N-89e1d262.js";import"./index-f800231c.js";import"./index-a91c9d3c.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";import"./motion-03f83e4d.js";import"./chunk-RWQIUCJP-ee763db7.js";import"./chunk-DKFDJSXF-50906ab2.js";import"./chunk-NAA7TEES-feaaf6f8.js";import"./index-bf97d06a.js";import"./index-b1d0288f.js";import"./chunk-DUEJD2BE-40e6879b.js";import"./getPrototypeOf-624f05c9.js";function b(t,o={}){const{ssr:m=!0,fallback:a}=o,{getWindow:s}=x(),u=Array.isArray(t)?t:[t];let l=Array.isArray(a)?a:[a];l=l.filter(r=>r!=null);const[E,f]=h.useState(()=>u.map((r,n)=>({media:r,matches:m?!!l[n]:s().matchMedia(r).matches})));return h.useEffect(()=>{const r=s();f(u.map(e=>({media:e,matches:r.matchMedia(e).matches})));const n=u.map(e=>r.matchMedia(e)),i=e=>{f(k=>k.slice().map(d=>d.media===e.media?{...d,matches:e.matches}:d))};return n.forEach(e=>{typeof e.addListener=="function"?e.addListener(i):e.addEventListener("change",i)}),()=>{n.forEach(e=>{typeof e.removeListener=="function"?e.removeListener(i):e.removeEventListener("change",i)})}},[s]),E.map(r=>r.matches)}const j=()=>{const{colorMode:t,setColorMode:o}=y(),[m]=b("(prefers-color-scheme: dark)"),a=h.useCallback(s=>{C.setColourMode(s),o(s==="system"?m?"dark":"light":s)},[t,o,m]);return{colourMode:t,setColourMode:a}},Y={title:"RmgThemeProvider",component:R,decorators:[]},P=()=>{const{setColourMode:t}=j(),o=[{label:"System",value:"system"},{label:"Light",value:"light"},{label:"Dark",value:"dark"}];return p.jsx(L,{selections:o,defaultValue:C.getColourMode(),onChange:t})},c=()=>p.jsx(R,{children:p.jsx(P,{})});var g,v,M;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  return <RmgThemeProvider>
            <Inner />
        </RmgThemeProvider>;
}`,...(M=(v=c.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};const Z=["Basic"];export{c as Basic,Z as __namedExportsOrder,Y as default};
//# sourceMappingURL=rmg-theme-provider.stories-4135fb28.js.map
