import{h as b,l as e,$ as se,j as h,o as z,O as P,I,a0 as Y,a1 as j,a2 as Q,L as U,b as ie,K as re,H as x,w as f,a3 as A,a4 as le,M as $,U as ce,a5 as D,W as de,a6 as k,Y as ue,a7 as X,Q as C,a8 as G,a9 as O,aa as w,ab as q,ac as Z,ad as he,ae as me,af as pe,ag as ge,ah as ye,ai as fe,aj as Ce,ak as be,al as ve,am as ke,an as Se,ao as Ee,J as Le,_ as Re,r as we}from"./vendor-1e2cd711.js";import{t as xe,b as F,a as N,u as M,c as Ie,d as Pe,e as Ne,f as Me,g as Oe,r as ze,h as je,i as Ae,j as Be,k as Te,l as Je,m as Ue,n as De,o as Fe,q as Ge,v as qe,w as He,x as Ve,y as _e,z as We,I as T,G as $e,A as J,B as R,C as Ke,E as Ye}from"./index-33ecb253.js";import{u as H}from"./use-translated-name-ae9525ac.js";function V(n){var g;const{onUpdate:o,onAdd:i,onRemove:s}=n,r=(g=n.entries)!=null?g:xe.getInitialState(),{t:l}=b(),m=a=>{const d=F.selectById(r,a);if(!d)return[];const{lang:t,name:p}=d,v=Object.entries(U).reduce((y,c)=>c[1]!==t&&c[1]in r?y:{...y,[c[1]]:c[0]},{});return[{type:"select",label:l("Language"),value:t,options:v,onChange:y=>o(a,{lang:y})},{type:"input",label:l("Name"),value:p,onChange:y=>o(a,{name:y}),validator:y=>y!==""}]},u=()=>{const a=Object.values(U).filter(d=>!Object.values(r.entities).find(t=>(t==null?void 0:t.lang)===d))[0];i(a)};return e(se,{direction:"column",children:F.selectIds(r).map((a,d)=>h(z,{sx:{"& > div:first-of-type":{flex:1}},"data-testid":"entry-card-stack-"+a,children:[e(P,{fields:m(a),noLabel:d>0}),d===r.ids.length-1?e(I,{size:"sm",variant:"ghost","aria-label":l("Add a name in another language"),title:l("Add a name in another language"),onClick:u,icon:e(Y,{})}):e(j,{minW:8}),e(I,{size:"sm",variant:"ghost","aria-label":l("Remove this name"),title:l("Remove this name"),onClick:()=>s(a),icon:e(Q,{})})]},a))})}function Qe(){const{t:n,i18n:o}=b(),i=H(),s=N(),{country:r,newCountry:l,countryName:m,newCountryLang:u}=M(t=>t.ticket),g={...ie.map(t=>[t.id,i(t.name)]).sort((t,p)=>t[1].localeCompare(p[1],o.languages[0])).reduce((t,p)=>p[0]===re.UN?t:{...t,[p[0]]:p[1]},{}),new:n("Add a country/region...")},a=Object.entries(U).reduce((t,p)=>({...t,[p[1]]:p[0]}),{"":n("Please select...")}),d=[{type:"select",label:n("Country / Region"),value:r,options:g,onChange:t=>s(Ie(t))},{type:"input",label:n("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:l,onChange:t=>s(Pe(t)),hidden:r!=="new"},{type:"select",label:n("Offical language"),value:u,options:a,onChange:t=>s(Ne(t||void 0)),hidden:r!=="new"}];return h(j,{as:"section",children:[e(x,{as:"h5",size:"sm",mb:2,children:n("Country / Region")}),e(P,{fields:d}),r==="new"&&e(V,{entries:m,onUpdate:(t,p)=>s(Me({id:t,changes:p})),onAdd:t=>s(Oe(t)),onRemove:t=>s(ze(t))})]})}function Xe(){const{t:n}=b(),o=N(),{city:i,cityName:s}=M(l=>l.ticket),r=[{type:"input",label:n("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:i,onChange:l=>o(je(l)),validator:l=>l!==""&&!l.match(/[^a-z]/)}];return h(j,{as:"section",children:[e(x,{as:"h5",size:"sm",mt:3,mb:2,children:n("City")}),e(P,{fields:r}),e(V,{entries:s,onUpdate:(l,m)=>o(Ae({id:l,changes:m})),onAdd:l=>o(Be(l)),onRemove:l=>o(Te(l))})]})}const Ze=n=>`{ getColor(code:"${n}") { code, rgb { r g b }, hex, cmyk { c m y k } } }`,ee=async(n,o)=>"#"+(await(await fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:Ze(n)}),signal:o})).json()).data.getColor.hex;function et(n){const{ready:o,onReady:i}=n,{t:s}=b();return f.useEffect(()=>{const r=new AbortController;return ee("130 C",r.signal).then(l=>i(!!l)).catch(()=>i(!1)),()=>{r.abort()}},[]),e(A,{as:"i",fontSize:"xs",children:o===void 0?s("Checking Pantone service availability..."):o?s("Pantone service is ready")+" ✅":s("Pantone service is not available")+" ⚠️"})}function tt(n){const{entryId:o,pantoneReady:i}=n,{t:s}=b(),r=N(),l=M(c=>c.ticket.lines),m=l[o],[u,g]=f.useState("hex"),[a,d]=f.useState(""),t=f.useRef(new AbortController);f.useEffect(()=>{t.current.abort();const c=l[o];c!=null&&c.pantone?(d(c.pantone),g("pantone")):(d(""),g("hex"))},[o]);const p=async c=>{var S;if(t.current.abort(),!(!m||!i)){t.current=new AbortController;try{const E=await ee(c,t.current.signal);r(Fe({entryId:o,pantone:c,hex:E})),d(c)}catch(E){ce.flushSync(()=>{d(c)}),d((S=m.pantone)!=null?S:"")}}},v=[{label:"RGB",value:"hex"},{label:s("Pantone"),value:"pantone"}],y=[{type:"input",label:s("Line code"),placeholder:"e.g. twl, gz1, sh1",value:m.id,onChange:c=>r(Je({entryId:o,lineId:c})),validator:c=>c!==""&&!c.match(/[^a-z0-9]/)},{type:"custom",label:s("Colour mode"),component:e(le,{selections:v,defaultValue:u,onChange:c=>g(c)}),hidden:!i},{type:"input",label:s("Background colour"),variant:"color",value:m.colour,onChange:c=>r(Ue({entryId:o,bgColour:c})),hidden:i&&u==="pantone"},{type:"input",label:s("Pantone code"),value:a,onChange:p,debouncedDelay:1500,hidden:!i||u!=="pantone"},{type:"select",label:s("Foreground colour"),value:m.fg,options:{[$.white]:s("White"),[$.black]:s("Black")},onChange:c=>r(De({entryId:o,fgColour:c}))}];return e(P,{fields:y})}function nt(){var g;const{t:n}=b(),o=H(),i=N(),s=M(a=>a.ticket.lines),[r,l]=f.useState(Object.keys(s)[0]),[m,u]=f.useState();return h(j,{as:"section",children:[h(D,{mt:3,mb:2,alignItems:"center",children:[e(x,{as:"h5",size:"sm",mr:"auto",children:n("Lines")}),e(et,{ready:m,onReady:u})]}),h(z,{flexWrap:"wrap",sx:{"& .chakra-badge":{mb:1}},children:[Object.entries(s).map(([a,d])=>{const t=F.selectAll(d.nameEntity).reduce((v,y)=>({...v,[y.lang]:y.name}),{}),p=o(t);return e(de,{name:p,bg:d.colour,fg:d.fg,actions:h(k,{children:[e(I,{size:"xs",variant:"ghost",color:d.fg,"aria-label":n("Edit")+" "+p,title:n("Edit")+" "+p,icon:e(ue,{}),onClick:()=>l(a)}),e(I,{size:"xs",variant:"ghost",color:d.fg,"aria-label":n("Copy")+" "+p,title:n("Copy")+" "+p,icon:e(X,{}),onClick:()=>i(Ge(a))}),e(I,{size:"xs",variant:"ghost",color:d.fg,"aria-label":n("Remove")+" "+p,title:n("Remove")+" "+p,icon:e(Q,{}),onClick:()=>i(qe(a))})]})},a)}),e(C,{size:"xs",variant:"ghost",leftIcon:e(Y,{}),ml:"auto !important",onClick:()=>i(He()),children:n("Add a line")})]}),s[r]&&e(tt,{entryId:r,pantoneReady:m}),e(V,{entries:(g=s[r])==null?void 0:g.nameEntity,onUpdate:(a,d)=>i(Ve({entryId:r,id:a,changes:d})),onAdd:a=>i(_e({entryId:r,lang:a})),onRemove:a=>i(We({entryId:r,id:a}))})]})}function at(n){const{countryErrors:o,cityErrors:i,lineErrors:s,onIgnore:r,onClose:l}=n,{t:m}=b(),u=H();return h(k,{children:[h(G,{children:[e(A,{children:m("Your inputs contain the following errors. Please consider fixing it before submitting.")}),o.length>0&&h(k,{children:[e(x,{as:"h5",size:"sm",my:2,children:m("Country / Region")}),e(O,{"aria-label":"List of country errors",children:o.map((g,a)=>e(w,{children:u(T[g])},a))})]}),i.length>0&&h(k,{children:[e(x,{as:"h5",size:"sm",my:2,children:m("City")}),e(O,{"aria-label":"List of city errors",children:i.map((g,a)=>e(w,{children:u(T[g])},a))})]}),Object.values(s).flat().length>0&&h(k,{children:[e(x,{as:"h5",size:"sm",my:2,children:m("Lines")}),e(O,{"aria-label":"List of line errors",children:Object.entries(s).map(([g,a])=>h(w,{children:[g,e(O,{children:a.map((d,t)=>e(w,{children:u(T[d])},t))})]},g))})]})]}),e(q,{children:h(z,{children:[e(C,{onClick:r,children:m("Submit anyway")}),e(C,{colorScheme:"primary",onClick:l,children:m("Go back")})]})})]})}const K=n=>{var o;return!!((o=n.match(/^https?:\/\//))!=null&&o[0])};function ot(n){const{refLink:o,onRefLinkChange:i,justification:s,onJustificationChange:r,onPrev:l,onNext:m}=n,{t:u}=b(),g=[{type:"input",value:o,label:u("Reference link"),placeholder:u("Enter a valid URL"),onChange:i,validator:K},{type:"textarea",value:s,label:u("Justification"),placeholder:u("Briefly describe your changes and provide justification"),onChange:r}],a=!o||!s||!K(o);return h(k,{children:[h(G,{children:[e(A,{children:u("Please provide suitable source and justification.")}),e(P,{fields:g,minW:"full"})]}),h(q,{children:[l&&e(C,{variant:"ghost",onClick:l,mr:"auto",leftIcon:e(Z,{}),children:u("Previous")}),e(C,{colorScheme:"primary",onClick:m,rightIcon:e(he,{}),isDisabled:a,children:u("Next")})]})]})}function st(n){var y,c;const{countryEntry:o,cityEntry:i,paletteList:s,refLink:r,justification:l,onPrev:m}=n,{t:u}=b(),g=me("primary.500","primary.300"),a=f.useRef(null),d=[`**Reference link:** ${r||"(REPLACE ME)"}`,`**Justification:** ${l||"(REPLACE ME)"}`,$e,J("country",o),J("city",i),J("lines",s)].join(`

`),t=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((y=i==null?void 0:i.name)==null?void 0:y.en),body:d}),p=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+((c=i==null?void 0:i.name)==null?void 0:c.en)}),v=async()=>{a!=null&&a.current&&(a.current.select(),await navigator.clipboard.writeText(d))};return h(k,{children:[h(G,{children:[e(A,{children:u("If the button below doesn't work for you, please follow the instructions below:")}),h(pe,{children:[h(w,{children:[u("Open")," ",h(ge,{color:g,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+p.toString(),isExternal:!0,children:["Issue: New Palettes Request ",e(ye,{as:fe})]})]}),h(w,{children:[u("Paste following text to the issue body")," ",e(C,{size:"xs",leftIcon:e(X,{}),onClick:v,children:u("Copy")}),e(Ce,{ref:a,isReadOnly:!0,defaultValue:d,onClick:({target:S})=>S.select()})]})]})]}),h(q,{children:[e(C,{variant:"ghost",onClick:m,mr:"auto",leftIcon:e(Z,{}),children:u("Previous")}),e(C,{colorScheme:"primary",onClick:()=>window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+t.toString(),"_blank"),children:u("1-click open issue")})]})]})}function it(n){const{isOpen:o,onClose:i}=n,{t:s}=b(),[r,l]=f.useState([]),[m,u]=f.useState([]),[g,a]=f.useState({}),[d,t]=f.useState(""),[p,v]=f.useState(""),[y,c]=f.useState(!1),[S,E]=f.useState(!1),L=M(oe=>oe.ticket),te=R.getCountryEntry(L),ne=R.getCityEntry(L),ae=R.getPalettes(L);f.useEffect(()=>{o?(l(R.getCountryErrors(L)),u(R.getCityErrors(L)),a(R.getLineErrors(L))):(c(!1),t(""),v(""),E(!1))},[o]);const _=r.length>0||m.length>0||Object.values(g).flat().length>0,B=_&&!y,W=!B&&!S;return h(be,{blockScrollOnMount:!1,isOpen:o,onClose:i,scrollBehavior:"inside",children:[e(ve,{}),h(ke,{children:[e(Se,{children:s("Submit palettes")}),e(Ee,{}),B&&e(at,{countryErrors:r,cityErrors:m,lineErrors:g,onIgnore:()=>c(!0),onClose:i}),W&&e(ot,{refLink:d,onRefLinkChange:t,justification:p,onJustificationChange:v,onPrev:_?()=>c(!1):void 0,onNext:()=>E(!0)}),!B&&!W&&e(st,{countryEntry:te,cityEntry:ne,paletteList:ae,refLink:d,justification:p,onPrev:()=>E(!1)})]})]})}function dt(){const{t:n}=b(),o=N(),i=Le(),[s,r]=f.useState(!1),l=()=>{o(Ke()),we.event(Ye.RESET_TICKET,{})};return h(Re,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[h(D,{direction:"column",flex:1,overflowY:"auto",children:[e(Qe,{}),e(Xe,{}),e(nt,{})]}),h(D,{my:2,children:[e(C,{size:"sm",onClick:()=>i("/"),children:n("Go back")}),h(z,{ml:"auto",children:[e(C,{size:"sm",variant:"outline",onClick:l,children:n("Reset")}),e(C,{size:"sm",colorScheme:"primary",onClick:()=>r(!0),children:n("Submit")})]})]}),e(it,{isOpen:s,onClose:()=>r(!1)})]})}export{dt as default};
