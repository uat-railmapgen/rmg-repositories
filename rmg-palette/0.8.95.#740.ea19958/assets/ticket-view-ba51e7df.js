import{j as e,$ as R,J as E,B as T,_ as k,v as B,F as _,i as x,t as A,a0 as P,h as w,w as F,x as ue,a1 as he,y as me,a2 as pe,a3 as $,M as Y,a4 as Q,r as X,s as Z}from"./chakra-30b94965.js";import{u as y,r as g,a as ge,m as xe}from"./react-326f1873.js";import{k as fe,b as I,L as V,f as L,a as N,c as ye,C as je,l as Ce,m as be,n as Se,o as ve,q as we,t as ke,g as Le,v as Ee,w as Re,x as Ie,y as Ne,z as Oe,h as Me,p as Pe,A as ze,B as Te,D as Be,F as Ae,M as W,G as Fe,H as De,d as Ue,I as Je,J as Ge,K as _e,N as Ve,O as qe,P as He,Q as U,S as We,T as J,U as Ke,V as v,W as z,X as ee,j as $e,r as G,E as Ye}from"./index-f00268d7.js";import{u as O,a as te,b as ne,M as Qe,c as se,d as oe,e as Xe,f as Ze}from"./index.esm-6fef172f.js";const et={"& > div:first-of-type":{flex:1}};function q(o){var l;const{onUpdate:r,onLangSwitch:s,onRemove:a}=o,c=(l=o.entries)!=null?l:[],{t:h}=y(),u=O(),d=(i,t)=>[{type:"select",label:h("Language"),value:i,options:Object.entries(V).reduce((n,f)=>({...n,[f[0]]:u(f[1])}),{}),disabledOptions:c.filter(n=>n[0]!==i).map(n=>n[0]),onChange:n=>s(i,n)},{type:"input",label:h("Name"),value:t,onChange:n=>r(i,n),validator:n=>!!n}],m=()=>{const i=Object.keys(V).filter(t=>!c.find(n=>n[0]===t))[0];r(i,"")};return e.jsx(fe,{direction:"column",children:c.map(([i,t],n,f)=>e.jsxs(R,{sx:et,"data-testid":"entry-card-stack-"+i,children:[e.jsx(I,{fields:d(i,t),noLabel:n>0}),n===f.length-1?e.jsx(E,{size:"sm",variant:"ghost","aria-label":h("Add a name in another language"),title:h("Add a name in another language"),onClick:m,icon:e.jsx(te,{})}):e.jsx(T,{minW:8}),f.length>1&&e.jsx(E,{size:"sm",variant:"ghost","aria-label":h("Remove this name"),title:h("Remove this name"),onClick:()=>a(i),icon:e.jsx(ne,{})})]},n))})}function tt(){const{t:o,i18n:r}=y(),s=O(),a=L(),{country:c,newCountry:h,countryName:u,newCountryLang:d}=N(t=>t.ticket),m={...ye.map(t=>[t.id,s(t.name)]).sort((t,n)=>t[1].localeCompare(n[1],r.languages[0])).reduce((t,n)=>n[0]===je.UN?t:{...t,[n[0]]:n[1]},{"":o("Please select...")}),new:o("Add a country/region...")},l=Object.entries(V).reduce((t,n)=>({...t,[n[0]]:s(n[1])}),{}),i=[{type:"select",label:o("Country/Region"),value:c,options:m,disabledOptions:[""],onChange:t=>a(Ce(t))},{type:"input",label:o("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:h,onChange:t=>a(be(t)),hidden:c!=="new"},{type:"select",label:o("Official language"),value:d,options:l,onChange:t=>a(Se(t||void 0)),hidden:c!=="new"}];return e.jsxs(T,{as:"section",children:[e.jsx(k,{as:"h5",size:"sm",mb:2,children:o("Country/Region")}),e.jsx(I,{fields:i}),c==="new"&&e.jsx(q,{entries:u,onUpdate:(t,n)=>a(ve({lang:t,name:n})),onLangSwitch:(t,n)=>a(we({prevLang:t,nextLang:n})),onRemove:t=>a(ke(t))})]})}function nt(){const{t:o,i18n:r}=y(),s=L(),a=O(),{country:c,city:h,newCity:u,cityName:d}=N(t=>t.ticket),m={...Le.filter(t=>t.country===c).map(t=>[t.id,a(t.name)]).sort((t,n)=>t[1].localeCompare(n[1],r.languages[0])).reduce((t,n)=>({...t,[n[0]]:n[1]}),{"":o("Please select...")}),new:o("Add a city")+"..."},l=async t=>{if(t==="new"){s(Oe("new"));return}const n=await Me(t);s(n?Pe(n):ze())},i=[{type:"select",label:o("City"),value:h,options:m,disabledOptions:[""],onChange:t=>l(t)},{type:"input",label:o("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:u,onChange:t=>s(Ee(t)),validator:t=>t!==""&&!t.match(/[^a-z]/),hidden:h!=="new"}];return e.jsxs(T,{as:"section",children:[e.jsx(k,{as:"h5",size:"sm",mt:3,mb:2,children:o("City")}),e.jsx(I,{fields:i}),h==="new"&&e.jsx(q,{entries:d,onUpdate:(t,n)=>s(Re({lang:t,name:n})),onLangSwitch:(t,n)=>s(Ie({prevLang:t,nextLang:n})),onRemove:t=>s(Ne(t))})]})}const st=o=>`{ getColor(code:"${o}") { code, rgb { r g b }, hex, cmyk { c m y k } } }`,ae=async(o,r)=>"#"+(await(await fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:st(o)}),signal:r})).json()).data.getColor.hex;function ot(o){const{ready:r,onReady:s}=o,{t:a}=y();return g.useEffect(()=>{const c=new AbortController;return ae("130 C",c.signal).then(h=>s(!!h)).catch(()=>s(!1)),()=>{c.abort()}},[]),e.jsx(B,{as:"i",fontSize:"xs",children:r===void 0?a("Checking Pantone service availability..."):r?a("Pantone service is ready")+" ✅":a("Pantone service is not available")+" ⚠️"})}function at(o){const{entryId:r,pantoneReady:s}=o,{t:a}=y(),c=L(),h=N(p=>p.ticket.lines),u=h[r],[d,m]=g.useState("hex"),[l,i]=g.useState(""),t=g.useRef(new AbortController);g.useEffect(()=>{t.current.abort();const p=h[r];p!=null&&p.pantone?(i(p.pantone),m("pantone")):(i(""),m("hex"))},[r]);const n=async p=>{var C;if(t.current.abort(),!(!u||!s)){t.current=new AbortController;try{const b=await ae(p,t.current.signal);c(De({entryId:r,pantone:p,hex:b})),i(p)}catch(b){ge.flushSync(()=>{i(p)}),i((C=u.pantone)!=null?C:"")}}},f=[{label:"RGB",value:"hex"},{label:a("Pantone"),value:"pantone"}],j=[{type:"input",label:a("Line code"),placeholder:"e.g. twl, gz1, sh1",value:u.id,onChange:p=>c(Te({entryId:r,lineId:p})),validator:p=>p!==""&&!p.match(/[^a-z0-9]/)},{type:"custom",label:a("Colour mode"),component:e.jsx(Be,{selections:f,defaultValue:d,onChange:p=>m(p)}),hidden:!s},{type:"input",label:a("Background colour"),variant:"color",value:u.colour,onChange:p=>c(Ae({entryId:r,bgColour:p})),hidden:s&&d==="pantone"},{type:"input",label:a("Pantone code"),value:l,onChange:n,debouncedDelay:1500,hidden:!s||d!=="pantone"},{type:"select",label:a("Foreground colour"),value:u.fg,options:{[W.white]:a("White"),[W.black]:a("Black")},onChange:p=>c(Fe({entryId:r,fgColour:p}))}];return e.jsx(I,{fields:j})}function it(){var m;const{t:o}=y(),r=O(),s=L(),a=N(l=>l.ticket.lines),[c,h]=g.useState(Object.keys(a)[0]),[u,d]=g.useState();return e.jsxs(T,{as:"section",children:[e.jsxs(_,{mt:3,mb:2,alignItems:"center",children:[e.jsx(k,{as:"h5",size:"sm",mr:"auto",children:o("Lines")}),e.jsx(ot,{ready:u,onReady:d})]}),e.jsxs(R,{flexWrap:"wrap",sx:{"& .chakra-badge":{mb:1}},children:[Object.entries(a).map(([l,i])=>{const t=r(Object.fromEntries(i.nameEntity));return e.jsx(Ue,{name:t,bg:i.colour,fg:i.fg,actions:e.jsxs(e.Fragment,{children:[e.jsx(E,{size:"xs",variant:"ghost",color:i.fg,"aria-label":o("Edit")+" "+t,title:o("Edit")+" "+t,icon:e.jsx(Qe,{}),onClick:()=>h(l)}),e.jsx(E,{size:"xs",variant:"ghost",color:i.fg,"aria-label":o("Copy")+" "+t,title:o("Copy")+" "+t,icon:e.jsx(se,{}),onClick:()=>s(Je(l))}),e.jsx(E,{size:"xs",variant:"ghost",color:i.fg,"aria-label":o("Remove")+" "+t,title:o("Remove")+" "+t,icon:e.jsx(ne,{}),onClick:()=>s(Ge(l))})]})},l)}),e.jsx(x,{size:"xs",variant:"ghost",leftIcon:e.jsx(te,{}),ml:"auto !important",onClick:()=>s(_e()),children:o("Add a line")})]}),a[c]&&e.jsx(at,{entryId:c,pantoneReady:u}),e.jsx(q,{entries:(m=a[c])==null?void 0:m.nameEntity,onUpdate:(l,i)=>s(Ve({entryId:c,lang:l,name:i})),onLangSwitch:(l,i)=>s(qe({entryId:c,prevLang:l,nextLang:i})),onRemove:l=>s(He({entryId:c,lang:l}))})]})}function rt(o){const{countryErrors:r,cityErrors:s,lineErrors:a,onIgnore:c,onClose:h}=o,{t:u}=y(),d=O();return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(B,{children:u("Your inputs contain the following errors. Please consider fixing it before submitting.")}),r.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(k,{as:"h5",size:"sm",my:2,children:u("Country/Region")}),e.jsx(P,{"aria-label":"List of country errors",children:r.map((m,l)=>e.jsx(w,{children:d(U[m])},l))})]}),s.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(k,{as:"h5",size:"sm",my:2,children:u("City")}),e.jsx(P,{"aria-label":"List of city errors",children:s.map((m,l)=>e.jsx(w,{children:d(U[m])},l))})]}),Object.values(a).flat().length>0&&e.jsxs(e.Fragment,{children:[e.jsx(k,{as:"h5",size:"sm",my:2,children:u("Lines")}),e.jsx(P,{"aria-label":"List of line errors",children:Object.entries(a).map(([m,l])=>e.jsxs(w,{children:[m,e.jsx(P,{children:l.map((i,t)=>e.jsx(w,{children:d(U[i])},t))})]},m))})]})]}),e.jsx(F,{children:e.jsxs(R,{children:[e.jsx(x,{onClick:c,children:u("Submit anyway")}),e.jsx(x,{colorScheme:"primary",onClick:h,children:u("Go back")})]})})]})}const K=o=>{var r;return!!((r=o.match(/^https?:\/\//))!=null&&r[0])};function ct(o){const{refLink:r,onRefLinkChange:s,justification:a,onJustificationChange:c,onPrev:h,onNext:u}=o,{t:d}=y(),m=[{type:"input",value:r,label:d("Reference link"),placeholder:d("Enter a valid URL"),onChange:s,validator:K},{type:"textarea",value:a,label:d("Justification"),placeholder:d("Briefly describe your changes and provide justification"),onChange:c}],l=!r||!a||!K(r);return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(B,{children:d("Please provide suitable source and justification.")}),e.jsx(I,{fields:m,minW:"full"})]}),e.jsxs(F,{children:[h&&e.jsx(x,{variant:"ghost",onClick:h,mr:"auto",leftIcon:e.jsx(oe,{}),children:d("Previous")}),e.jsx(x,{colorScheme:"primary",onClick:u,rightIcon:e.jsx(Xe,{}),isDisabled:l,children:d("Next")})]})]})}function lt(o){var j,p;const{countryEntry:r,cityEntry:s,paletteList:a,refLink:c,justification:h,onPrev:u}=o,{t:d}=y(),m=ue("primary.500","primary.300"),l=g.useRef(null),i=[`**Reference link:** ${c||"(REPLACE ME)"}`,`**Justification:** ${h||"(REPLACE ME)"}`,We,J("country",r),J("city",s),J("lines",a)].join(`

`),t=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((j=s==null?void 0:s.name)==null?void 0:j.en),body:i}),n=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((p=s==null?void 0:s.name)==null?void 0:p.en)}),f=async()=>{l!=null&&l.current&&(l.current.select(),await navigator.clipboard.writeText(i))};return e.jsxs(e.Fragment,{children:[e.jsxs(A,{children:[e.jsx(B,{children:d("If the button below doesn't work for you, please follow the instructions below:")}),e.jsxs(he,{children:[e.jsxs(w,{children:[d("Open")," ",e.jsxs(me,{color:m,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+n.toString(),isExternal:!0,children:["Issue: New Palettes Request ",e.jsx(pe,{as:Ze})]})]}),e.jsxs(w,{children:[d("Paste following text to the issue body")," ",e.jsx(x,{size:"xs",leftIcon:e.jsx(se,{}),onClick:f,children:d("Copy")}),e.jsx(Ke,{ref:l,isReadOnly:!0,defaultValue:i,onClick:({target:C})=>C.select()})]})]})]}),e.jsxs(F,{children:[e.jsx(x,{variant:"ghost",onClick:u,mr:"auto",leftIcon:e.jsx(oe,{}),children:d("Previous")}),e.jsx(x,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+t.toString(),"_blank"),children:d("1-click open issue")})]})]})}function dt(o){const{isOpen:r,onClose:s}=o,{t:a}=y(),[c,h]=g.useState([]),[u,d]=g.useState([]),[m,l]=g.useState({}),[i,t]=g.useState(""),[n,f]=g.useState(""),[j,p]=g.useState(!1),[C,b]=g.useState(!1),S=N(de=>de.ticket),ie=v.getCountryEntry(S),re=v.getCityEntry(S),ce=v.getPalettes(S);g.useEffect(()=>{r?(h(v.getCountryErrors(S)),d(v.getCityErrors(S)),l(v.getLineErrors(S))):(p(!1),t(""),f(""),b(!1))},[r]);const H=c.length>0||u.length>0||Object.values(m).flat().length>0,M=H&&!j,D=!M&&!C,le=()=>{!M&&!D&&window.localStorage.removeItem(z),s()};return e.jsxs($,{blockScrollOnMount:!1,isOpen:r,onClose:s,scrollBehavior:"inside",children:[e.jsx(Y,{}),e.jsxs(Q,{children:[e.jsx(X,{children:a("Submit palettes")}),e.jsx(Z,{onClick:le}),M&&e.jsx(rt,{countryErrors:c,cityErrors:u,lineErrors:m,onIgnore:()=>p(!0),onClose:s}),D&&e.jsx(ct,{refLink:i,onRefLinkChange:t,justification:n,onJustificationChange:f,onPrev:H?()=>p(!1):void 0,onNext:()=>b(!0)}),!M&&!D&&e.jsx(lt,{countryEntry:ie,cityEntry:re,paletteList:ce,refLink:i,justification:n,onPrev:()=>b(!1)})]})]})}function ut(o){const{isOpen:r,onClose:s,incomingState:a}=o,{t:c}=y(),h=L(),u=()=>{window.localStorage.removeItem(z),s()},d=()=>{a&&h(ee(a)),s()};return e.jsxs($,{isOpen:r,onClose:s,children:[e.jsx(Y,{}),e.jsxs(Q,{children:[e.jsx(X,{children:c("Unsaved draft")}),e.jsx(Z,{}),e.jsx(A,{children:c("Do you want to continue with your last unsaved ticket?")}),e.jsx(F,{children:e.jsxs(R,{children:[e.jsx(x,{onClick:u,children:c("Discard")}),e.jsx(x,{colorScheme:"primary",onClick:d,children:c("Continue")})]})})]})]})}function xt(){const{t:o}=y(),r=L(),s=xe(),[a,c]=g.useState(),[h,u]=g.useState(!1),[d,m]=g.useState(!1);g.useEffect(()=>{const t=window.localStorage.getItem(z);if(t)try{const n=JSON.parse(t);Object.keys(n.lines).length>0&&Object.values(n.lines)[0].id&&(c(n),u(!0))}catch(n){console.error("TicketView:: unable to restore draft ticket",t)}},[]);const l=()=>{G.isStandaloneWindow()?s("/"):G.openApp("rmg-palette")},i=()=>{r(ee()),window.localStorage.removeItem(z),G.event(Ye.RESET_TICKET,{})};return e.jsxs($e,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[e.jsxs(_,{direction:"column",flex:1,overflowY:"auto",children:[e.jsx(tt,{}),e.jsx(nt,{}),e.jsx(it,{})]}),e.jsxs(_,{my:2,children:[e.jsx(x,{size:"sm",onClick:l,children:o("Go back")}),e.jsxs(R,{ml:"auto",children:[e.jsx(x,{size:"sm",variant:"outline",onClick:i,children:o("Reset")}),e.jsx(x,{size:"sm",colorScheme:"primary",onClick:()=>m(!0),children:o("Submit")})]})]}),e.jsx(ut,{isOpen:h,onClose:()=>u(!1),incomingState:a}),e.jsx(dt,{isOpen:d,onClose:()=>m(!1)})]})}export{xt as default};
