import{j as e,_ as M,H as w,B as A,Z as E,t as T,F as I,$ as me,f,s as U,a0 as D,e as S,v as B,w as xe,a1 as ge,x as je,a2 as fe,a3 as Y,M as Q,a4 as Z,q as X,r as ee}from"./chakra-e48cc0c5.js";import{u as y,r as x,a as ye,n as Ce}from"./react-af516715.js";import{h as q,L as H,d as L,a as R,c as be,i as ve,j as we,k as ke,l as Se,m as Ee,n as Le,e as Re,o as Me,q as Ne,t as Oe,v as Pe,w as De,g as Ie,p as ze,x as Ae,y as K,z as Te,M as W,A as Ue,B as Be,C as Fe,D as Je,F as Ge,G as _e,H as qe,I as He,J as Ve,K as J,N as Ke,O as G,P as We,Q as k,S as z,T as te,f as $e,r as _,E as Ye}from"./index-5699903d.js";import{R as N}from"./rmg-fields-9f2e53b2.js";import{u as O,a as ne,b as se,c as Qe,d as Ze,M as Xe,e as oe,f as ae,g as et,h as tt}from"./index.esm-4925ec0c.js";const nt={"& > div:first-of-type":{flex:1}},ie=a=>{var d;const{onUpdate:n,onLangSwitch:i,onRemove:s}=a,l=(d=a.entries)!=null?d:[],{t:r}=y(),u=O(),c=(h,t)=>[{type:"select",label:r("Language"),value:h,options:Object.entries(H).reduce((o,g)=>({...o,[g[0]]:u(g[1])}),{}),disabledOptions:l.filter(o=>o[0]!==h).map(o=>o[0]),onChange:o=>i(h,o)},{type:"input",label:r("Name"),value:t,onChange:o=>n(h,o),validator:o=>!!o}],p=()=>{const h=Object.keys(H).filter(t=>!l.find(o=>o[0]===t))[0];n(h,"")};return e.jsx(e.Fragment,{children:l.map(([h,t],o,g)=>e.jsxs(M,{sx:nt,"data-testid":"entry-card-stack-"+h,children:[e.jsx(N,{fields:c(h,t),noLabel:o>0}),o===g.length-1?e.jsx(w,{size:"sm",variant:"ghost","aria-label":r("Add a name in another language"),title:r("Add a name in another language"),onClick:p,icon:e.jsx(ne,{})}):e.jsx(A,{minW:8}),g.length>1&&e.jsx(w,{size:"sm",variant:"ghost","aria-label":r("Remove this name"),title:r("Remove this name"),onClick:()=>s(h),icon:e.jsx(se,{})})]},o))})};function re(a){return e.jsx(q,{direction:"column",children:e.jsx(ie,{...a})})}function st(){const{t:a,i18n:n}=y(),i=O(),s=L(),{country:l,newCountry:r,countryName:u,newCountryLang:c}=R(t=>t.ticket),p={...be.map(t=>[t.id,i(t.name)]).sort((t,o)=>t[1].localeCompare(o[1],n.languages[0])).reduce((t,o)=>o[0]==="UN"?t:{...t,[o[0]]:o[1]},{"":a("Please select...")}),new:a("Add a country/region...")},d=Object.entries(H).reduce((t,o)=>({...t,[o[0]]:i(o[1])}),{}),h=[{type:"select",label:a("Country/Region"),value:l,options:p,disabledOptions:[""],onChange:t=>s(ve(t))},{type:"input",label:a("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:r,onChange:t=>s(we(t)),hidden:l!=="new"},{type:"select",label:a("Official language"),value:c,options:d,onChange:t=>s(ke(t||void 0)),hidden:l!=="new"}];return e.jsxs(A,{as:"section",children:[e.jsx(E,{as:"h5",size:"sm",mb:2,children:a("Country/Region")}),e.jsx(N,{fields:h}),l==="new"&&e.jsx(re,{entries:u,onUpdate:(t,o)=>s(Se({lang:t,name:o})),onLangSwitch:(t,o)=>s(Ee({prevLang:t,nextLang:o})),onRemove:t=>s(Le(t))})]})}function ot(){const{t:a,i18n:n}=y(),i=L(),s=O(),{country:l,city:r,newCity:u,cityName:c}=R(t=>t.ticket),p={...Re.filter(t=>t.country===l).map(t=>[t.id,s(t.name)]).sort((t,o)=>t[1].localeCompare(o[1],n.languages[0])).reduce((t,o)=>({...t,[o[0]]:o[1]}),{"":a("Please select...")}),new:a("Add a city")+"..."},d=async t=>{if(t==="new"){i(De("new"));return}const o=await Ie(t);i(o?ze(o):Ae())},h=[{type:"select",label:a("City"),value:r,options:p,disabledOptions:[""],onChange:t=>d(t)},{type:"input",label:a("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:u,onChange:t=>i(Me(t)),validator:t=>t!==""&&!t.match(/[^a-z]/),hidden:r!=="new"}];return e.jsxs(A,{as:"section",children:[e.jsx(E,{as:"h5",size:"sm",mt:3,mb:2,children:a("City")}),e.jsx(N,{fields:h}),r==="new"&&e.jsx(re,{entries:c,onUpdate:(t,o)=>i(Ne({lang:t,name:o})),onLangSwitch:(t,o)=>i(Oe({prevLang:t,nextLang:o})),onRemove:t=>i(Pe(t))})]})}const at=a=>`{ getColor(code:"${a}") { code, rgb { r g b }, hex, cmyk { c m y k } } }`,le=async(a,n)=>"#"+(await(await fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:at(a)}),signal:n})).json()).data.getColor.hex;function it(){const{t:a}=y(),n=L(),{pantoneReady:i}=R(s=>s.app);return x.useEffect(()=>{const s=new AbortController;return le("130 C",s.signal).then(l=>n(K(!!l))).catch(()=>n(K(!1))),()=>{s.abort()}},[]),e.jsx(T,{as:"i",fontSize:"xs",children:i===void 0?a("Checking Pantone service availability..."):i?a("Pantone service is ready")+" ✅":a("Pantone service is not available")+" ⚠️"})}function rt(a){var g;const{lineDetail:n,onUpdate:i}=a,{t:s}=y(),{pantoneReady:l}=R(m=>m.app),[r,u]=x.useState(n.pantone?"pantone":"hex"),[c,p]=x.useState((g=n.pantone)!=null?g:""),d=x.useRef(new AbortController);x.useEffect(()=>()=>{var m;(m=d.current)==null||m.abort()},[]);const h=async m=>{var C;if(d.current.abort(),!!l){d.current=new AbortController;try{const v=await le(m,d.current.signal);i({pantone:m,colour:v}),p(m)}catch(v){ye.flushSync(()=>{p(m)}),p((C=n.pantone)!=null?C:"")}}},t=[{label:"RGB",value:"hex"},{label:s("Pantone"),value:"pantone"}],o=[{type:"input",label:s("Line code"),placeholder:"e.g. twl, gz1, sh1",value:n.id,onChange:m=>i({id:m}),validator:m=>m!==""&&!m.match(/[^a-z0-9]/)},{type:"custom",label:s("Colour mode"),component:e.jsx(Te,{selections:t,defaultValue:r,onChange:m=>u(m)}),hidden:!l},{type:"input",label:s("Background colour"),variant:"color",value:n.colour,onChange:m=>i({colour:m}),hidden:l&&r==="pantone"},{type:"input",label:s("Pantone code"),value:c,onChange:h,debouncedDelay:1500,hidden:!l||r!=="pantone"},{type:"select",label:s("Foreground colour"),value:n.fg,options:{[W.white]:s("White"),[W.black]:s("Black")},onChange:m=>i({fg:m})}];return e.jsx(N,{fields:o})}function lt(a){const{lineDetail:n,editable:i,onUpdate:s,onMoveUp:l,onMoveDown:r,onCopy:u,onRemove:c,onNameUpdate:p,onLangSwitch:d,onNameRemove:h}=a,{t}=y(),o=O(),[g,m]=x.useState(!1),C=x.useMemo(()=>({bg:n.colour,m:-1,w:"calc(100% + var(--chakra-space-1) * 2)",px:2,"&, button":{color:n.fg},"& > div":{ml:"auto"}}),[n.colour,n.fg]),v=o(Object.fromEntries(n.nameEntity));return e.jsxs(q,{direction:"column",sx:{pb:0},children:[e.jsxs(q,{sx:C,children:[v,i&&e.jsxs(M,{spacing:.5,children:[e.jsx(w,{size:"xs",variant:"ghost","aria-label":t("Move up"),title:t("Move up"),icon:e.jsx(Qe,{}),onClick:l}),e.jsx(w,{size:"xs",variant:"ghost","aria-label":t("Move down"),title:t("Move down"),icon:e.jsx(Ze,{}),onClick:r}),e.jsx(w,{size:"xs",variant:"ghost","aria-label":t("Edit"),title:t("Edit"),icon:e.jsx(Xe,{}),onClick:()=>m(j=>!j)}),e.jsx(w,{size:"xs",variant:"ghost","aria-label":t("Duplicate"),title:t("Duplicate"),icon:e.jsx(oe,{}),onClick:u}),e.jsx(w,{size:"xs",variant:"ghost","aria-label":t("Remove"),title:t("Remove"),icon:e.jsx(se,{}),onClick:c})]})]}),g&&e.jsxs(I,{direction:"column",my:1,children:[e.jsx(rt,{lineDetail:n,onUpdate:j=>s==null?void 0:s(j)}),e.jsx(ie,{entries:n.nameEntity,onUpdate:(j,b)=>p==null?void 0:p(j,b),onLangSwitch:(j,b)=>d==null?void 0:d(j,b),onRemove:j=>h==null?void 0:h(j)})]})]})}function ct(){const{t:a}=y(),n=L(),i=R(s=>s.ticket.lines);return e.jsxs(A,{as:"section",children:[e.jsxs(I,{mt:3,mb:2,alignItems:"center",children:[e.jsx(E,{as:"h5",size:"sm",mr:"auto",children:a("Lines")}),e.jsx(it,{})]}),e.jsxs(me,{spacing:1,children:[Object.entries(i).map(([s,l])=>e.jsx(lt,{lineDetail:l,editable:!0,onUpdate:r=>n(Ue({entryId:s,updates:r})),onMoveUp:()=>n(Be(s)),onMoveDown:()=>n(Fe(s)),onCopy:()=>n(Je(s)),onRemove:()=>n(Ge(s)),onNameUpdate:(r,u)=>n(_e({entryId:s,lang:r,name:u})),onLangSwitch:(r,u)=>n(qe({entryId:s,prevLang:r,nextLang:u})),onNameRemove:r=>n(He({entryId:s,lang:r}))},s)),e.jsx(f,{size:"xs",variant:"ghost",leftIcon:e.jsx(ne,{}),ml:"auto !important",onClick:()=>n(Ve()),children:a("Add a line")})]})]})}function dt(a){const{countryErrors:n,cityErrors:i,lineErrors:s,onIgnore:l,onClose:r}=a,{t:u}=y(),c=O();return e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(T,{children:u("Your inputs contain the following errors. Please consider fixing it before submitting.")}),n.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h5",size:"sm",my:2,children:u("Country/Region")}),e.jsx(D,{"aria-label":"List of country errors",children:n.map((p,d)=>e.jsx(S,{children:c(J[p])},d))})]}),i.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h5",size:"sm",my:2,children:u("City")}),e.jsx(D,{"aria-label":"List of city errors",children:i.map((p,d)=>e.jsx(S,{children:c(J[p])},d))})]}),Object.values(s).flat().length>0&&e.jsxs(e.Fragment,{children:[e.jsx(E,{as:"h5",size:"sm",my:2,children:u("Lines")}),e.jsx(D,{"aria-label":"List of line errors",children:Object.entries(s).map(([p,d])=>e.jsxs(S,{children:[p,e.jsx(D,{children:d.map((h,t)=>e.jsx(S,{children:c(J[h])},t))})]},p))})]})]}),e.jsx(B,{children:e.jsxs(M,{children:[e.jsx(f,{onClick:l,children:u("Submit anyway")}),e.jsx(f,{colorScheme:"primary",onClick:r,children:u("Go back")})]})})]})}const $=a=>{var n;return!!((n=a.match(/^https?:\/\//))!=null&&n[0])};function ut(a){const{refLink:n,onRefLinkChange:i,justification:s,onJustificationChange:l,onPrev:r,onNext:u}=a,{t:c}=y(),p=[{type:"input",value:n,label:c("Reference link"),placeholder:c("Enter a valid URL"),onChange:i,validator:$},{type:"textarea",value:s,label:c("Justification"),placeholder:c("Briefly describe your changes and provide justification"),onChange:l}],d=!n||!s||!$(n);return e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(T,{children:c("Please provide suitable source and justification.")}),e.jsx(N,{fields:p,minW:"full"})]}),e.jsxs(B,{children:[r&&e.jsx(f,{variant:"ghost",onClick:r,mr:"auto",leftIcon:e.jsx(ae,{}),children:c("Previous")}),e.jsx(f,{colorScheme:"primary",onClick:u,rightIcon:e.jsx(et,{}),isDisabled:d,children:c("Next")})]})]})}function ht(a){var m,C;const{countryEntry:n,cityEntry:i,paletteList:s,refLink:l,justification:r,onPrev:u}=a,{t:c}=y(),p=xe("primary.500","primary.300"),d=x.useRef(null),h=[`**Reference link:** ${l||"(REPLACE ME)"}`,`**Justification:** ${r||"(REPLACE ME)"}`,Ke,G("country",n),G("city",i),G("lines",s)].join(`

`),t=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((m=i==null?void 0:i.name)==null?void 0:m.en),body:h}),o=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((C=i==null?void 0:i.name)==null?void 0:C.en)}),g=async()=>{d!=null&&d.current&&(d.current.select(),await navigator.clipboard.writeText(h))};return e.jsxs(e.Fragment,{children:[e.jsxs(U,{children:[e.jsx(T,{children:c("If the button below doesn't work for you, please follow the instructions below:")}),e.jsxs(ge,{children:[e.jsxs(S,{children:[c("Open")," ",e.jsxs(je,{color:p,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+o.toString(),isExternal:!0,children:["Issue: New Palettes Request ",e.jsx(fe,{as:tt})]})]}),e.jsxs(S,{children:[c("Paste following text to the issue body")," ",e.jsx(f,{size:"xs",leftIcon:e.jsx(oe,{}),onClick:g,children:c("Copy")}),e.jsx(We,{ref:d,isReadOnly:!0,defaultValue:h,onClick:({target:v})=>v.select()})]})]})]}),e.jsxs(B,{children:[e.jsx(f,{variant:"ghost",onClick:u,mr:"auto",leftIcon:e.jsx(ae,{}),children:c("Previous")}),e.jsx(f,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+t.toString(),"_blank"),children:c("1-click open issue")})]})]})}function pt(a){const{isOpen:n,onClose:i}=a,{t:s}=y(),[l,r]=x.useState([]),[u,c]=x.useState([]),[p,d]=x.useState({}),[h,t]=x.useState(""),[o,g]=x.useState(""),[m,C]=x.useState(!1),[v,j]=x.useState(!1),b=R(pe=>pe.ticket),ce=k.getCountryEntry(b),de=k.getCityEntry(b),ue=k.getPalettes(b);x.useEffect(()=>{n?(r(k.getCountryErrors(b)),c(k.getCityErrors(b)),d(k.getLineErrors(b))):(C(!1),t(""),g(""),j(!1))},[n]);const V=l.length>0||u.length>0||Object.values(p).flat().length>0,P=V&&!m,F=!P&&!v,he=()=>{!P&&!F&&window.localStorage.removeItem(z),i()};return e.jsxs(Y,{blockScrollOnMount:!1,isOpen:n,onClose:i,scrollBehavior:"inside",children:[e.jsx(Q,{}),e.jsxs(Z,{children:[e.jsx(X,{children:s("Submit palettes")}),e.jsx(ee,{onClick:he}),P&&e.jsx(dt,{countryErrors:l,cityErrors:u,lineErrors:p,onIgnore:()=>C(!0),onClose:i}),F&&e.jsx(ut,{refLink:h,onRefLinkChange:t,justification:o,onJustificationChange:g,onPrev:V?()=>C(!1):void 0,onNext:()=>j(!0)}),!P&&!F&&e.jsx(ht,{countryEntry:ce,cityEntry:de,paletteList:ue,refLink:h,justification:o,onPrev:()=>j(!1)})]})]})}function mt(a){const{isOpen:n,onClose:i,incomingState:s}=a,{t:l}=y(),r=L(),u=()=>{window.localStorage.removeItem(z),i()},c=()=>{s&&r(te(s)),i()};return e.jsxs(Y,{isOpen:n,onClose:i,children:[e.jsx(Q,{}),e.jsxs(Z,{children:[e.jsx(X,{children:l("Unsaved draft")}),e.jsx(ee,{}),e.jsx(U,{children:l("Do you want to continue with your last unsaved ticket?")}),e.jsx(B,{children:e.jsxs(M,{children:[e.jsx(f,{onClick:u,children:l("Discard")}),e.jsx(f,{colorScheme:"primary",onClick:c,children:l("Continue")})]})})]})]})}function Ct(){const{t:a}=y(),n=L(),i=Ce(),[s,l]=x.useState(),[r,u]=x.useState(!1),[c,p]=x.useState(!1);x.useEffect(()=>{const t=window.localStorage.getItem(z);if(t)try{const o=JSON.parse(t);Object.keys(o.lines).length>0&&Object.values(o.lines)[0].id&&(l(o),u(!0))}catch(o){console.error("TicketView:: unable to restore draft ticket",t)}},[]);const d=()=>{_.isStandaloneWindow()?i("/"):_.openApp("rmg-palette")},h=()=>{n(te()),window.localStorage.removeItem(z),_.event(Ye.RESET_TICKET,{})};return e.jsxs($e,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[e.jsxs(I,{direction:"column",flex:1,overflowY:"auto",children:[e.jsx(st,{}),e.jsx(ot,{}),e.jsx(ct,{})]}),e.jsxs(I,{my:2,children:[e.jsx(f,{size:"sm",onClick:d,children:a("Go back")}),e.jsxs(M,{ml:"auto",children:[e.jsx(f,{size:"sm",variant:"outline",onClick:h,children:a("Reset")}),e.jsx(f,{size:"sm",colorScheme:"primary",onClick:()=>p(!0),children:a("Submit")})]})]}),e.jsx(mt,{isOpen:r,onClose:()=>u(!1),incomingState:s}),e.jsx(pt,{isOpen:c,onClose:()=>p(!1)})]})}export{Ct as default};
