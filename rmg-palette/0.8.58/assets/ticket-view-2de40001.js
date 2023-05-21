import{h as f,j as e,K as ue,x as R,w as I,F as E,L as T,M as _,H as w,k as g,T as A,N as he,C as me,O as H,E as pe,y as x,Q as B,U as P,V as v,W as F,X as ge,Y as xe,Z as ye,_ as fe,$ as je,a0 as Y,a1 as $,a2 as Q,a3 as X,a4 as Z,t as Ce,J as be,r as U}from"./vendor-536952a8.js";import{u as N,a as ee,b as te,M as Se,c as ne,d as se,e as ke,f as ve}from"./index.esm-e1cfa684.js";import{b as L,u as O,c as we,C as Le,e as Ee,f as Re,h as Ie,i as Ne,j as Oe,r as Me,d as Pe,k as ze,l as Te,m as Ae,n as Be,g as Fe,p as De,o as Ue,q as Je,t as Ge,M as K,v as _e,w as He,x as Ve,y as qe,z as Ke,A as We,B as Ye,D as $e,I as J,G as Qe,F as G,H as k,J as z,K as oe,E as Xe}from"./index-10517283.js";const Ze={"& > div:first-of-type":{flex:1}};function V(o){var l;const{onUpdate:r,onLangSwitch:s,onRemove:a}=o,c=(l=o.entries)!=null?l:[],{t:h}=f(),u=N(),d=(i,t)=>[{type:"select",label:h("Language"),value:i,options:Object.entries(_).reduce((n,y)=>({...n,[y[0]]:u(y[1])}),{}),disabledOptions:c.filter(n=>n[0]!==i).map(n=>n[0]),onChange:n=>s(i,n)},{type:"input",label:h("Name"),value:t,onChange:n=>r(i,n),validator:n=>!!n}],m=()=>{const i=Object.keys(_).filter(t=>!c.find(n=>n[0]===t))[0];r(i,"")};return e.jsx(ue,{direction:"column",children:c.map(([i,t],n,y)=>e.jsxs(R,{sx:Ze,"data-testid":"entry-card-stack-"+i,children:[e.jsx(I,{fields:d(i,t),noLabel:n>0}),n===y.length-1?e.jsx(E,{size:"sm",variant:"ghost","aria-label":h("Add a name in another language"),title:h("Add a name in another language"),onClick:m,icon:e.jsx(ee,{})}):e.jsx(T,{minW:8}),y.length>1&&e.jsx(E,{size:"sm",variant:"ghost","aria-label":h("Remove this name"),title:h("Remove this name"),onClick:()=>a(i),icon:e.jsx(te,{})})]},n))})}function et(){const{t:o,i18n:r}=f(),s=N(),a=L(),{country:c,newCountry:h,countryName:u,newCountryLang:d}=O(t=>t.ticket),m={...we.map(t=>[t.id,s(t.name)]).sort((t,n)=>t[1].localeCompare(n[1],r.languages[0])).reduce((t,n)=>n[0]===Le.UN?t:{...t,[n[0]]:n[1]},{"":o("Please select...")}),new:o("Add a country/region...")},l=Object.entries(_).reduce((t,n)=>({...t,[n[0]]:s(n[1])}),{}),i=[{type:"select",label:o("Country / Region"),value:c,options:m,disabledOptions:[""],onChange:t=>a(Ee(t))},{type:"input",label:o("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:h,onChange:t=>a(Re(t)),hidden:c!=="new"},{type:"select",label:o("Official language"),value:d,options:l,onChange:t=>a(Ie(t||void 0)),hidden:c!=="new"}];return e.jsxs(T,{as:"section",children:[e.jsx(w,{as:"h5",size:"sm",mb:2,children:o("Country / Region")}),e.jsx(I,{fields:i}),c==="new"&&e.jsx(V,{entries:u,onUpdate:(t,n)=>a(Ne({lang:t,name:n})),onLangSwitch:(t,n)=>a(Oe({prevLang:t,nextLang:n})),onRemove:t=>a(Me(t))})]})}function tt(){const{t:o,i18n:r}=f(),s=L(),a=N(),{country:c,city:h,newCity:u,cityName:d}=O(t=>t.ticket),m={...Pe.filter(t=>t.country===c).map(t=>[t.id,a(t.name)]).sort((t,n)=>t[1].localeCompare(n[1],r.languages[0])).reduce((t,n)=>({...t,[n[0]]:n[1]}),{"":o("Please select...")}),new:o("Add a city")+"..."},l=async t=>{const n=await Fe(t);s(n?De(n):Ue())},i=[{type:"select",label:o("City"),value:h,options:m,disabledOptions:[""],onChange:t=>l(t)},{type:"input",label:o("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:u,onChange:t=>s(ze(t)),validator:t=>t!==""&&!t.match(/[^a-z]/),hidden:h!=="new"}];return e.jsxs(T,{as:"section",children:[e.jsx(w,{as:"h5",size:"sm",mt:3,mb:2,children:o("City")}),e.jsx(I,{fields:i}),h==="new"&&e.jsx(V,{entries:d,onUpdate:(t,n)=>s(Te({lang:t,name:n})),onLangSwitch:(t,n)=>s(Ae({prevLang:t,nextLang:n})),onRemove:t=>s(Be(t))})]})}const nt=o=>`{ getColor(code:"${o}") { code, rgb { r g b }, hex, cmyk { c m y k } } }`,ae=async(o,r)=>"#"+(await(await fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:nt(o)}),signal:r})).json()).data.getColor.hex;function st(o){const{ready:r,onReady:s}=o,{t:a}=f();return g.useEffect(()=>{const c=new AbortController;return ae("130 C",c.signal).then(h=>s(!!h)).catch(()=>s(!1)),()=>{c.abort()}},[]),e.jsx(A,{as:"i",fontSize:"xs",children:r===void 0?a("Checking Pantone service availability..."):r?a("Pantone service is ready")+" ✅":a("Pantone service is not available")+" ⚠️"})}function ot(o){const{entryId:r,pantoneReady:s}=o,{t:a}=f(),c=L(),h=O(p=>p.ticket.lines),u=h[r],[d,m]=g.useState("hex"),[l,i]=g.useState(""),t=g.useRef(new AbortController);g.useEffect(()=>{t.current.abort();const p=h[r];p!=null&&p.pantone?(i(p.pantone),m("pantone")):(i(""),m("hex"))},[r]);const n=async p=>{var C;if(t.current.abort(),!(!u||!s)){t.current=new AbortController;try{const b=await ae(p,t.current.signal);c(He({entryId:r,pantone:p,hex:b})),i(p)}catch(b){me.flushSync(()=>{i(p)}),i((C=u.pantone)!=null?C:"")}}},y=[{label:"RGB",value:"hex"},{label:a("Pantone"),value:"pantone"}],j=[{type:"input",label:a("Line code"),placeholder:"e.g. twl, gz1, sh1",value:u.id,onChange:p=>c(Je({entryId:r,lineId:p})),validator:p=>p!==""&&!p.match(/[^a-z0-9]/)},{type:"custom",label:a("Colour mode"),component:e.jsx(he,{selections:y,defaultValue:d,onChange:p=>m(p)}),hidden:!s},{type:"input",label:a("Background colour"),variant:"color",value:u.colour,onChange:p=>c(Ge({entryId:r,bgColour:p})),hidden:s&&d==="pantone"},{type:"input",label:a("Pantone code"),value:l,onChange:n,debouncedDelay:1500,hidden:!s||d!=="pantone"},{type:"select",label:a("Foreground colour"),value:u.fg,options:{[K.white]:a("White"),[K.black]:a("Black")},onChange:p=>c(_e({entryId:r,fgColour:p}))}];return e.jsx(I,{fields:j})}function at(){var m;const{t:o}=f(),r=N(),s=L(),a=O(l=>l.ticket.lines),[c,h]=g.useState(Object.keys(a)[0]),[u,d]=g.useState();return e.jsxs(T,{as:"section",children:[e.jsxs(H,{mt:3,mb:2,alignItems:"center",children:[e.jsx(w,{as:"h5",size:"sm",mr:"auto",children:o("Lines")}),e.jsx(st,{ready:u,onReady:d})]}),e.jsxs(R,{flexWrap:"wrap",sx:{"& .chakra-badge":{mb:1}},children:[Object.entries(a).map(([l,i])=>{const t=r(Object.fromEntries(i.nameEntity));return e.jsx(pe,{name:t,bg:i.colour,fg:i.fg,actions:e.jsxs(e.Fragment,{children:[e.jsx(E,{size:"xs",variant:"ghost",color:i.fg,"aria-label":o("Edit")+" "+t,title:o("Edit")+" "+t,icon:e.jsx(Se,{}),onClick:()=>h(l)}),e.jsx(E,{size:"xs",variant:"ghost",color:i.fg,"aria-label":o("Copy")+" "+t,title:o("Copy")+" "+t,icon:e.jsx(ne,{}),onClick:()=>s(Ve(l))}),e.jsx(E,{size:"xs",variant:"ghost",color:i.fg,"aria-label":o("Remove")+" "+t,title:o("Remove")+" "+t,icon:e.jsx(te,{}),onClick:()=>s(qe(l))})]})},l)}),e.jsx(x,{size:"xs",variant:"ghost",leftIcon:e.jsx(ee,{}),ml:"auto !important",onClick:()=>s(Ke()),children:o("Add a line")})]}),a[c]&&e.jsx(ot,{entryId:c,pantoneReady:u}),e.jsx(V,{entries:(m=a[c])==null?void 0:m.nameEntity,onUpdate:(l,i)=>s(We({entryId:c,lang:l,name:i})),onLangSwitch:(l,i)=>s(Ye({entryId:c,prevLang:l,nextLang:i})),onRemove:l=>s($e({entryId:c,lang:l}))})]})}function it(o){const{countryErrors:r,cityErrors:s,lineErrors:a,onIgnore:c,onClose:h}=o,{t:u}=f(),d=N();return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(A,{children:u("Your inputs contain the following errors. Please consider fixing it before submitting.")}),r.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(w,{as:"h5",size:"sm",my:2,children:u("Country / Region")}),e.jsx(P,{"aria-label":"List of country errors",children:r.map((m,l)=>e.jsx(v,{children:d(J[m])},l))})]}),s.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(w,{as:"h5",size:"sm",my:2,children:u("City")}),e.jsx(P,{"aria-label":"List of city errors",children:s.map((m,l)=>e.jsx(v,{children:d(J[m])},l))})]}),Object.values(a).flat().length>0&&e.jsxs(e.Fragment,{children:[e.jsx(w,{as:"h5",size:"sm",my:2,children:u("Lines")}),e.jsx(P,{"aria-label":"List of line errors",children:Object.entries(a).map(([m,l])=>e.jsxs(v,{children:[m,e.jsx(P,{children:l.map((i,t)=>e.jsx(v,{children:d(J[i])},t))})]},m))})]})]}),e.jsx(F,{children:e.jsxs(R,{children:[e.jsx(x,{onClick:c,children:u("Submit anyway")}),e.jsx(x,{colorScheme:"primary",onClick:h,children:u("Go back")})]})})]})}const W=o=>{var r;return!!((r=o.match(/^https?:\/\//))!=null&&r[0])};function rt(o){const{refLink:r,onRefLinkChange:s,justification:a,onJustificationChange:c,onPrev:h,onNext:u}=o,{t:d}=f(),m=[{type:"input",value:r,label:d("Reference link"),placeholder:d("Enter a valid URL"),onChange:s,validator:W},{type:"textarea",value:a,label:d("Justification"),placeholder:d("Briefly describe your changes and provide justification"),onChange:c}],l=!r||!a||!W(r);return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(A,{children:d("Please provide suitable source and justification.")}),e.jsx(I,{fields:m,minW:"full"})]}),e.jsxs(F,{children:[h&&e.jsx(x,{variant:"ghost",onClick:h,mr:"auto",leftIcon:e.jsx(se,{}),children:d("Previous")}),e.jsx(x,{colorScheme:"primary",onClick:u,rightIcon:e.jsx(ke,{}),isDisabled:l,children:d("Next")})]})]})}function ct(o){var j,p;const{countryEntry:r,cityEntry:s,paletteList:a,refLink:c,justification:h,onPrev:u}=o,{t:d}=f(),m=ge("primary.500","primary.300"),l=g.useRef(null),i=[`**Reference link:** ${c||"(REPLACE ME)"}`,`**Justification:** ${h||"(REPLACE ME)"}`,Qe,G("country",r),G("city",s),G("lines",a)].join(`

`),t=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((j=s==null?void 0:s.name)==null?void 0:j.en),body:i}),n=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((p=s==null?void 0:s.name)==null?void 0:p.en)}),y=async()=>{l!=null&&l.current&&(l.current.select(),await navigator.clipboard.writeText(i))};return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsx(A,{children:d("If the button below doesn't work for you, please follow the instructions below:")}),e.jsxs(xe,{children:[e.jsxs(v,{children:[d("Open")," ",e.jsxs(ye,{color:m,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+n.toString(),isExternal:!0,children:["Issue: New Palettes Request ",e.jsx(fe,{as:ve})]})]}),e.jsxs(v,{children:[d("Paste following text to the issue body")," ",e.jsx(x,{size:"xs",leftIcon:e.jsx(ne,{}),onClick:y,children:d("Copy")}),e.jsx(je,{ref:l,isReadOnly:!0,defaultValue:i,onClick:({target:C})=>C.select()})]})]})]}),e.jsxs(F,{children:[e.jsx(x,{variant:"ghost",onClick:u,mr:"auto",leftIcon:e.jsx(se,{}),children:d("Previous")}),e.jsx(x,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+t.toString(),"_blank"),children:d("1-click open issue")})]})]})}function lt(o){const{isOpen:r,onClose:s}=o,{t:a}=f(),[c,h]=g.useState([]),[u,d]=g.useState([]),[m,l]=g.useState({}),[i,t]=g.useState(""),[n,y]=g.useState(""),[j,p]=g.useState(!1),[C,b]=g.useState(!1),S=O(de=>de.ticket),ie=k.getCountryEntry(S),re=k.getCityEntry(S),ce=k.getPalettes(S);g.useEffect(()=>{r?(h(k.getCountryErrors(S)),d(k.getCityErrors(S)),l(k.getLineErrors(S))):(p(!1),t(""),y(""),b(!1))},[r]);const q=c.length>0||u.length>0||Object.values(m).flat().length>0,M=q&&!j,D=!M&&!C,le=()=>{!M&&!D&&window.localStorage.removeItem(z),s()};return e.jsxs(Y,{blockScrollOnMount:!1,isOpen:r,onClose:s,scrollBehavior:"inside",children:[e.jsx($,{}),e.jsxs(Q,{children:[e.jsx(X,{children:a("Submit palettes")}),e.jsx(Z,{onClick:le}),M&&e.jsx(it,{countryErrors:c,cityErrors:u,lineErrors:m,onIgnore:()=>p(!0),onClose:s}),D&&e.jsx(rt,{refLink:i,onRefLinkChange:t,justification:n,onJustificationChange:y,onPrev:q?()=>p(!1):void 0,onNext:()=>b(!0)}),!M&&!D&&e.jsx(ct,{countryEntry:ie,cityEntry:re,paletteList:ce,refLink:i,justification:n,onPrev:()=>b(!1)})]})]})}function dt(o){const{isOpen:r,onClose:s,incomingState:a}=o,{t:c}=f(),h=L(),u=()=>{window.localStorage.removeItem(z),s()},d=()=>{a&&h(oe(a)),s()};return e.jsxs(Y,{isOpen:r,onClose:s,children:[e.jsx($,{}),e.jsxs(Q,{children:[e.jsx(X,{children:c("Unsaved draft")}),e.jsx(Z,{}),e.jsx(B,{children:c("Do you want to continue with your last unsaved ticket?")}),e.jsx(F,{children:e.jsxs(R,{children:[e.jsx(x,{onClick:u,children:c("Discard")}),e.jsx(x,{colorScheme:"primary",onClick:d,children:c("Continue")})]})})]})]})}function pt(){const{t:o}=f(),r=L(),s=Ce(),[a,c]=g.useState(),[h,u]=g.useState(!1),[d,m]=g.useState(!1);g.useEffect(()=>{const t=window.localStorage.getItem(z);if(t)try{const n=JSON.parse(t);Object.keys(n.lines).length>0&&Object.values(n.lines)[0].id&&(c(n),u(!0))}catch(n){console.error("TicketView:: unable to restore draft ticket",t)}},[]);const l=()=>{U.isStandaloneWindow()?s("/"):U.openApp("rmg-palette")},i=()=>{r(oe()),window.localStorage.removeItem(z),U.event(Xe.RESET_TICKET,{})};return e.jsxs(be,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[e.jsxs(H,{direction:"column",flex:1,overflowY:"auto",children:[e.jsx(et,{}),e.jsx(tt,{}),e.jsx(at,{})]}),e.jsxs(H,{my:2,children:[e.jsx(x,{size:"sm",onClick:l,children:o("Go back")}),e.jsxs(R,{ml:"auto",children:[e.jsx(x,{size:"sm",variant:"outline",onClick:i,children:o("Reset")}),e.jsx(x,{size:"sm",colorScheme:"primary",onClick:()=>m(!0),children:o("Submit")})]})]}),e.jsx(dt,{isOpen:h,onClose:()=>u(!1),incomingState:a}),e.jsx(lt,{isOpen:d,onClose:()=>m(!1)})]})}export{pt as default};
