import{f as E,h as e,X as ae,j as l,l as I,J as z,I as N,Y as V,Z as M,_ as Y,H as S,t as f,F,K as b,T as se,$ as R,U as oe,a0 as $,a1 as re,a2 as ie,a3 as le,a4 as ce,a5 as de,a6 as ue,a7 as J,a8 as O,a9 as k,aa as he,ab as me,ac as ge,ad as pe,ae as ye,af as Ce,E as fe,W as be,r as ve}from"./vendor.396a8425.js";import{t as we,d as H,L as D,a as A,u as B,c as ke,C as Le,e as Se,f as Ee,g as xe,h as Re,i as Ne,r as Oe,j as Ie,k as ze,l as Me,m as Ae,n as Be,o as je,q as Pe,v as Te,w as Ue,x as Fe,y as He,z as De,M as K,A as _e,B as L,G as qe,D as T,I as U,F as Ge,E as We}from"./index.ecea0d5f.js";import{u as _}from"./use-translated-name.b20ec1f9.js";function q(n){var i;const{onUpdate:u,onAdd:d,onRemove:a}=n,r=(i=n.entries)!=null?i:we.getInitialState(),{t:o}=E(),C=s=>{const c=H.selectById(r,s);if(!c)return[];const{lang:t,name:h}=c,p=Object.entries(D).reduce((m,w)=>w[1]!==t&&w[1]in r?m:{...m,[w[1]]:w[0]},{});return[{type:"select",label:o("Language"),value:t,options:p,onChange:m=>u(s,{lang:m})},{type:"input",label:o("Name"),value:h,onChange:m=>u(s,{name:m}),validator:m=>m!==""}]},g=()=>{const s=Object.values(D).filter(c=>!Object.values(r.entities).find(t=>(t==null?void 0:t.lang)===c))[0];d(s)};return e(ae,{direction:"column",children:H.selectIds(r).map((s,c)=>l(I,{sx:{"& > div:first-of-type":{flex:1}},"data-testid":"entry-card-stack-"+s,children:[e(z,{fields:C(s),noLabel:c>0}),c===r.ids.length-1?e(N,{size:"sm",variant:"ghost","aria-label":o("Add a name in another language"),title:o("Add a name in another language"),onClick:g,icon:e(V,{})}):e(M,{minW:8}),e(N,{size:"sm",variant:"ghost","aria-label":o("Remove this name"),title:o("Remove this name"),onClick:()=>a(s),icon:e(Y,{})})]},s))})}function Je(){const{t:n,i18n:u}=E(),d=_(),a=A(),{country:r,newCountry:o,countryName:C,newCountryLang:g}=B(t=>t.ticket),i={...ke.map(t=>[t.id,d(t.name)]).sort((t,h)=>t[1].localeCompare(h[1],u.languages[0])).reduce((t,h)=>h[0]===Le.UN?t:{...t,[h[0]]:h[1]},{}),new:n("Add a country/region...")},s=Object.entries(D).reduce((t,h)=>({...t,[h[1]]:h[0]}),{"":n("Please select...")}),c=[{type:"select",label:n("Country / Region"),value:r,options:i,onChange:t=>a(Se(t))},{type:"input",label:n("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:o,onChange:t=>a(Ee(t)),hidden:r!=="new"},{type:"select",label:n("Offical language"),value:g,options:s,onChange:t=>a(xe(t||void 0)),hidden:r!=="new"}];return l(M,{as:"section",children:[e(S,{as:"h5",size:"sm",mb:2,children:n("Country / Region")}),e(z,{fields:c}),r==="new"&&e(q,{entries:C,onUpdate:(t,h)=>a(Re({id:t,changes:h})),onAdd:t=>a(Ne(t)),onRemove:t=>a(Oe(t))})]})}function Ke(){const{t:n}=E(),u=A(),{city:d,cityName:a}=B(o=>o.ticket),r=[{type:"input",label:n("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:d,onChange:o=>u(Ie(o)),validator:o=>o!==""&&!o.match(/[^a-z]/)}];return l(M,{as:"section",children:[e(S,{as:"h5",size:"sm",mt:3,mb:2,children:n("City")}),e(z,{fields:r}),e(q,{entries:a,onUpdate:(o,C)=>u(ze({id:o,changes:C})),onAdd:o=>u(Me(o)),onRemove:o=>u(Ae(o))})]})}function Ve(){var g;const{t:n}=E(),u=_(),d=A(),a=B(i=>i.ticket.lines),[r,o]=f.exports.useState(Object.keys(a)[0]),C=i=>{const s=a[i];return s?[{type:"input",label:n("Line code"),placeholder:"e.g. twl, gz1, sh1",value:s.id,onChange:c=>d(He({entryId:i,lineId:c})),validator:c=>c!==""&&!c.match(/[^a-z0-9]/)},{type:"input",label:n("Background colour"),variant:"color",value:s.colour,onChange:c=>d(De({entryId:i,bgColour:c}))},{type:"select",label:n("Foreground colour"),value:s.fg,options:{[K.white]:n("White"),[K.black]:n("Black")},onChange:c=>d(_e({entryId:i,fgColour:c}))}]:[]};return l(M,{as:"section",children:[l(F,{mt:3,mb:2,alignItems:"center",children:[e(S,{as:"h5",size:"sm",mr:"auto",children:n("Lines")}),e(b,{size:"xs",variant:"ghost",leftIcon:e(V,{}),mr:1,onClick:()=>d(Be()),children:n("Add a line")})]}),e(I,{flexWrap:"wrap",sx:{"& .chakra-badge":{mb:1}},children:Object.entries(a).map(([i,s])=>{const c=H.selectAll(s.nameEntity).reduce((h,p)=>({...h,[p.lang]:p.name}),{}),t=u(c);return e(se,{name:t,bg:s.colour,fg:s.fg,actions:l(R,{children:[e(N,{size:"xs",variant:"ghost",color:s.fg,"aria-label":n("Edit")+" "+t,title:n("Edit")+" "+t,icon:e(oe,{}),onClick:()=>o(i)}),e(N,{size:"xs",variant:"ghost",color:s.fg,"aria-label":n("Copy")+" "+t,title:n("Copy")+" "+t,icon:e($,{}),onClick:()=>d(je(i))}),e(N,{size:"xs",variant:"ghost",color:s.fg,"aria-label":n("Remove")+" "+t,title:n("Remove")+" "+t,icon:e(Y,{}),onClick:()=>d(Pe(i))})]})},i)})}),e(z,{fields:C(r)}),e(q,{entries:(g=a[r])==null?void 0:g.nameEntity,onUpdate:(i,s)=>d(Te({entryId:r,id:i,changes:s})),onAdd:i=>d(Ue({entryId:r,lang:i})),onRemove:i=>d(Fe({entryId:r,id:i}))})]})}function Ye(n){var G,W;const{isOpen:u,onClose:d}=n,{t:a}=E(),r=_(),[o,C]=f.exports.useState([]),[g,i]=f.exports.useState([]),[s,c]=f.exports.useState({}),[t,h]=f.exports.useState(!1),p=f.exports.useRef(null),m=B(y=>y.ticket),w=L.getCountryEntry(m),v=L.getCityEntry(m),X=L.getPalettes(m);f.exports.useEffect(()=>{u?(C(L.getCountryErrors(m)),i(L.getCityErrors(m)),c(L.getLineErrors(m))):h(!1)},[u]);const j=[`**Justification:** ${a("Please provide any source or justification or we will not proceed with your request.")} (REPLACE ME)`,qe,T("country",w),T("city",v),T("lines",X)].join(`

`),Z=new URLSearchParams({template:"new-palettes-request.md",label:"resources",title:"Resources: New palettes of "+((G=v==null?void 0:v.name)==null?void 0:G.en),body:j}),Q=new URLSearchParams({template:"new-palettes-request.md",label:"resources",title:"Resources: New palettes of "+((W=v==null?void 0:v.name)==null?void 0:W.en)}),ee=async()=>{p!=null&&p.current&&(p.current.select(),await navigator.clipboard.writeText(j))},P=o.length>0||g.length>0||Object.values(s).flat().length>0;return l(re,{blockScrollOnMount:!1,isOpen:u,onClose:d,scrollBehavior:"inside",children:[e(ie,{}),l(le,{children:[e(ce,{children:a("Submit palettes")}),e(de,{}),l(ue,{children:[P&&e(J,{children:a("Your inputs contain the following errors. Please consider fixing it before submitting.")}),o.length>0&&l(R,{children:[e(S,{as:"h5",size:"sm",my:2,children:a("Country / Region")}),e(O,{"aria-label":"List of country errors",children:o.map((y,x)=>e(k,{children:r(U[y])},x))})]}),g.length>0&&l(R,{children:[e(S,{as:"h5",size:"sm",my:2,children:a("City")}),e(O,{"aria-label":"List of city errors",children:g.map((y,x)=>e(k,{children:r(U[y])},x))})]}),Object.values(s).flat().length>0&&l(R,{children:[e(S,{as:"h5",size:"sm",my:2,children:a("Lines")}),e(O,{"aria-label":"List of line errors",children:Object.entries(s).map(([y,x])=>l(k,{children:[y,e(O,{children:x.map((te,ne)=>e(k,{children:r(U[te])},ne))})]},y))})]}),(!P||t)&&l(R,{children:[e(J,{children:a("If the button below doesn't work for you, please follow the instructions below:")}),l(he,{children:[l(k,{children:[a("Open")," ",l(me,{color:"teal.500",href:"https://github.com/railmapgen/rmg-palette/issues/new?"+Q.toString(),isExternal:!0,children:["Issue: New Palettes Request ",e(ge,{as:pe})]})]}),l(k,{children:[a("Paste following text to the issue body and add anything you want to say.")," ",e(b,{size:"xs",leftIcon:e($,{}),onClick:ee,children:a("Copy")}),e(ye,{ref:p,isReadOnly:!0,defaultValue:j,onClick:({target:y})=>y.select()})]})]})]})]}),e(Ce,{children:!t&&P?l(I,{children:[e(b,{onClick:()=>h(!0),children:a("Submit anyway")}),e(b,{colorScheme:"primary",onClick:d,children:a("Go back")})]}):e(b,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+Z.toString(),"_blank"),children:a("1-click open issue")})})]})]})}function Qe(){const{t:n}=E(),u=A(),d=fe(),[a,r]=f.exports.useState(!1),o=()=>{u(Ge()),ve.event(We.RESET_TICKET,{})};return l(be,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[l(F,{direction:"column",flex:1,overflowY:"auto",children:[e(Je,{}),e(Ke,{}),e(Ve,{})]}),l(F,{my:2,children:[e(b,{size:"sm",onClick:()=>d("/"),children:n("Go back")}),l(I,{ml:"auto",children:[e(b,{size:"sm",variant:"outline",onClick:o,children:n("Reset")}),e(b,{size:"sm",colorScheme:"primary",onClick:()=>r(!0),children:n("Submit")})]})]}),e(Ye,{isOpen:a,onClose:()=>r(!1)})]})}export{Qe as default};
