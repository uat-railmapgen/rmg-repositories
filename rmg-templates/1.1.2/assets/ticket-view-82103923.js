import{a2 as y,j as e,d as x,Z as O,E as D,a3 as re,X as F,c as ae,a4 as K,a5 as W,s as R,a6 as ce,r as q,a7 as G,a8 as z,t as $,v as de,a9 as pe,L as me,aa as he,M as ue,ab as ge,p as fe,q as xe,e as Q}from"./chakra-0292837a.js";import{L as I,S as A,e as Y,u as P,f as je,g as ve,h as Ce,i as ne,j as se,d as oe,k as ye,l as be,r as H,m as Me,a as Se,n as we,o as Le,p as Ne,q as ze,t as ee,v as Ie,w as Re,x as ke,I as te,G as Oe,y as S,R as Ee,z as Be,E as Te}from"./index-48996f60.js";import{u as b,r as j,n as He}from"./react-61f43b90.js";import{u as U,R as k,a as Fe,b as ie}from"./use-templates-94c55e7c.js";function Ae(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(a)}function Pe(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(a)}function Ue(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(a)}function _(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(a)}function Je(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(a)}function Ve(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}}]})(a)}function Ge(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(a)}function De(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(a)}function _e(a){return y({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(a)}function le(a){const{optionalName:n,onChange:i}=a,{t:r}=b(),d=U(),u=(t,s)=>[{type:"select",label:r("Language"),value:t,options:Object.entries(I).reduce((o,f)=>({...o,[f[0]]:d(f[1])}),{}),disabledOptions:Object.keys(I).filter(o=>A.includes(o)||n.some(f=>f[0]===o)).filter(o=>o!==t),onChange:o=>m(t,o)},{type:"input",label:r("Name"),value:s,onChange:o=>c(t,o),validator:o=>!!o}],l=()=>{const t=Object.keys(I).filter(s=>!A.includes(s)&&!n.some(o=>o[0]===s));t.includes("ko")?i([...n,["ko",""]]):i([...n,[t[0],""]])},m=(t,s)=>{i(n.map(o=>o[0]===t?[s,o[1]]:o))},c=(t,s)=>{i(n.map(o=>o[0]===t?[o[0],s]:o))},g=t=>{i(n.filter(s=>s[0]!==t))};return e.jsxs(e.Fragment,{children:[n.length===0&&e.jsx(x,{variant:"ghost",size:"sm",leftIcon:e.jsx(_,{}),onClick:l,w:"100%",my:2,children:r("Add more translations")}),n.map(([t,s],o,f)=>e.jsxs(O,{sx:{w:"100%","& > div:first-of-type":{flex:1}},children:[e.jsx(k,{fields:u(t,s),noLabel:o>0}),o===f.length-1?e.jsx(D,{size:"sm",variant:"ghost","aria-label":r("Add translation"),title:r("Add translation"),onClick:l,icon:e.jsx(_,{})}):e.jsx(re,{minW:8}),e.jsx(D,{size:"sm",variant:"ghost","aria-label":r("Remove this translation"),title:r("Remove this translation"),onClick:()=>g(t),icon:e.jsx(Ae,{})})]},t))]})}function We(){const{t:a}=b(),n=U(),i=Y(),{company:r,newCompany:d,companyName:u,companyOptionalName:l}=P(t=>t.ticket),m=Fe(),c=[{type:"select",label:a("Company"),value:r,options:{...m,[a("New")]:{new:a("Add a company...")}},disabledOptions:[""],onChange:t=>i(je(t))},{type:"input",label:a("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:d,onChange:t=>i(ve(t)),hidden:r!=="new"}],g=A.map(t=>({type:"input",label:n(I[t]),value:u[t],onChange:s=>i(Ce({lang:t,name:s}))}));return e.jsxs(ne,{children:[e.jsx(se,{children:e.jsx(F,{as:"h5",size:"sm",children:a("Railway company")})}),e.jsx(ae.div,{px:1,children:e.jsxs(oe,{direction:"column",children:[e.jsx(k,{fields:c}),r==="new"&&e.jsx(k,{fields:g}),r==="new"&&e.jsx(le,{optionalName:l,onChange:t=>i(ye(t))})]})})]})}const qe=a=>new Promise(n=>{const i=new FileReader;i.onloadend=()=>n(i.result),i.readAsText(a)}),$e={position:"relative","& > div":{overflow:"hidden"},"& > div:last-of-type":{flex:1,alignItems:"center",justifyContent:"center",minW:120,"& input":{display:"none"}}};function Ye(a){const{company:n,templateEntry:i,onLineChange:r,onNewLineChange:d,onMajorFlagChange:u,onLineNameChange:l,onOptionalNameChange:m,onParamChange:c,onParamImport:g,onRemove:t}=a,{line:s,newLine:o,majorUpdate:f,templateName:M,optionalName:w,param:E}=i,{t:h}=b(),B=U(),{templates:J}=ie(n),T=j.useRef(null),L=async p=>{var X;const C=(X=p.target.files)==null?void 0:X[0];if(console.log("handleFileUpload():: received file",C),!!C){if(C.type!=="application/json"){alert("Invalid file type!"),p.target.value="";return}try{const Z=await qe(C);c(JSON.parse(Z))}catch(Z){alert("Invalid file!"),p.target.value=""}}},V={"":h("Please select..."),...n===""||n==="new"?{}:J.reduce((p,C)=>({...p,[C.filename]:B(C.name)}),{}),new:h("Add a line...")},v=[{type:"select",label:h("Line"),value:s,options:V,disabledOptions:[""],onChange:p=>r(p),minW:150},{type:"input",label:h("Line code"),placeholder:"e.g. twl, gz1, sh1",value:o,onChange:p=>d(p),hidden:s!=="new"},{type:"custom",label:h("Major update"),component:e.jsx(be,{selections:[{label:h("Yes"),value:!0},{label:h("No"),value:!1}],defaultValue:f,onChange:p=>u(p)}),hidden:s==="new"}],N=A.map(p=>({type:"input",label:B(I[p]),value:M[p],onChange:C=>l(p,C)}));return e.jsxs(oe,{sx:$e,children:[e.jsx(D,{size:"sm",variant:"ghost",icon:e.jsx(_e,{}),"aria-label":h("Remove this line"),title:h("Remove this line"),position:"absolute",top:0,right:0,zIndex:5,onClick:t}),e.jsxs(K,{spacing:0,children:[e.jsx(k,{fields:[...v,...N],minW:110}),e.jsx(le,{optionalName:w,onChange:m})]}),e.jsx(K,{children:E?e.jsxs(e.Fragment,{children:[e.jsx(W,{as:Ve,boxSize:10}),e.jsxs(R,{as:"i",fontSize:"xs",children:["(",h("Size"),": ",JSON.stringify(E).length," ",h("chars"),")"]}),e.jsx(x,{size:"sm",onClick:()=>c(void 0),children:h("Remove")})]}):e.jsxs(e.Fragment,{children:[e.jsx(R,{as:"i",fontSize:"sm",children:h("Import from")}),e.jsxs(O,{spacing:1,children:[e.jsx(x,{size:"sm",onClick:g,children:"RMG"}),e.jsx(x,{size:"sm",onClick:()=>{var p;return(p=T.current)==null?void 0:p.click()},children:h("Local")}),e.jsx("input",{ref:T,type:"file",accept:".json",onChange:L})]})]})})]})}const Xe="rmg-bridge--",Ze={h:500,maxH:"70%","& iframe":{h:"100%",w:"100%"}};function Ke(a){const{templateId:n,onClose:i,onImport:r}=a,[d]=j.useState(crypto.randomUUID()),u="/rmg/#/import?"+new URLSearchParams({parentComponent:H.getAppName(),parentId:d});return j.useEffect(()=>{const l=new BroadcastChannel(Xe+d);return l.onmessage=m=>{const{event:c,data:g}=m.data;console.log("[rmg-templates] Received event from RMG app clip:",c),c==="CLOSE"?i():c==="IMPORT"&&r(g)},()=>{l.close()}},[n]),e.jsx(Me,{isOpen:!!n,onClose:i,sx:Ze,children:e.jsx("iframe",{src:u,loading:"lazy"})})}function Qe(){const{t:a}=b(),n=Y(),{company:i,templates:r}=P(t=>t.ticket),{templates:d,isLoading:u}=ie(i),[l,m]=j.useState(),c=(t,s)=>{const o=d.find(f=>f.filename===s);n(ke({id:t,line:s,name:o==null?void 0:o.name}))},g=t=>{l&&n(ee({id:l,param:t})),m(void 0)};return e.jsxs(ne,{children:[u&&e.jsx(Se,{isIndeterminate:!0}),e.jsxs(se,{children:[e.jsx(F,{as:"h5",size:"sm",children:a("Add or update templates")}),e.jsx(ce,{hasArrow:!0,label:a("Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."),children:e.jsx("span",{children:e.jsx(W,{as:Pe,ml:1})})})]}),e.jsx(ae.div,{px:1,transform:"translateZ(0)",children:r.map(t=>e.jsx(Ye,{company:i,templateEntry:t,onLineChange:s=>c(t.id,s),onNewLineChange:s=>n(we({id:t.id,newLine:s})),onMajorFlagChange:s=>n(Le({id:t.id,majorUpdate:s})),onLineNameChange:(s,o)=>n(Ne({id:t.id,lang:s,name:o})),onOptionalNameChange:s=>n(ze({id:t.id,optionalName:s})),onParamChange:s=>n(ee({id:t.id,param:s})),onParamImport:()=>m(t.id),onRemove:()=>n(Ie(t.id))},t.id))}),e.jsx(O,{justifyContent:"flex-end",children:e.jsx(x,{variant:"ghost",size:"sm",leftIcon:e.jsx(_,{}),onClick:()=>n(Re()),children:a("Add item")})}),e.jsx(Ke,{templateId:l,onClose:()=>m(void 0),onImport:g})]})}function et(a){const{companyErrors:n,templateErrors:i,onClose:r}=a,{t:d}=b(),u=U();return e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsx(R,{children:d("Your inputs contain the following errors. Please fix it before submitting.")}),n.length>0&&e.jsxs(e.Fragment,{children:[e.jsx(F,{as:"h5",size:"sm",my:2,children:d("Railway company")}),e.jsx(G,{"aria-label":"List of company errors",children:n.map((l,m)=>e.jsx(z,{children:u(te[l])},m))})]}),Object.values(i).flat().length>0&&e.jsxs(e.Fragment,{children:[e.jsx(F,{as:"h5",size:"sm",my:2,children:d("Templates")}),e.jsx(G,{"aria-label":"List of template errors",children:Object.entries(i).map(([l,m])=>e.jsxs(z,{children:[l,e.jsx(G,{children:m.map((c,g)=>e.jsx(z,{children:u(te[c])},g))})]},l))})]})]}),e.jsx($,{children:e.jsx(O,{children:e.jsx(x,{colorScheme:"primary",onClick:r,children:d("Go back")})})})]})}function tt(a){const{justification:n,majorUpdateJustifications:i,onJustificationChange:r,onMajorUpdateJustificationChange:d,onNext:u}=a,{t:l}=b(),m=[{type:"textarea",value:n,label:l("Justification"),placeholder:l("Briefly describe your changes and provide justification"),onChange:r}],c=Object.entries(i).map(([t,s])=>({type:"textarea",value:s,label:l("Justification for major update of")+" "+t,placeholder:l("Briefly describe your changes and provide justification"),onChange:o=>d(t,o)})),g=!n||Object.values(i).some(t=>!t);return e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsx(R,{children:l("Please provide suitable source and justification.")}),e.jsx(k,{fields:[...m,...c],minW:"full"})]}),e.jsx($,{children:e.jsx(x,{colorScheme:"primary",onClick:u,rightIcon:e.jsx(De,{}),isDisabled:g,children:l("Next")})})]})}function at(a){var f;const{companyName:n,companyBlock:i,templateBlocks:r,justification:d,majorUpdateJustifications:u,onPrev:l,onClose:m}=a,{t:c}=b(),g=de("primary.500","primary.300"),t=[`**Justification:** ${d||"(REPLACE ME)"}`,Object.entries(u).map(([M,w])=>`- Major update of ${M}: ${w}`).join(`
`),Oe,(f=i==null?void 0:i.outerHTML)!=null?f:"",...r.map(M=>M.outerHTML)].join(`

`),s=new URLSearchParams({template:"new-templates-request.md",labels:"resources",title:"Resources: New templates of "+n}),o=async()=>{await navigator.clipboard.writeText(t)};return e.jsxs(e.Fragment,{children:[e.jsxs(q,{children:[e.jsx(R,{children:c("Follow the instructions below to open an Issue")+":"}),e.jsxs(pe,{children:[e.jsxs(z,{children:[c("Open")," ",e.jsxs(me,{color:g,href:"https://github.com/railmapgen/rmg-templates/issues/new?"+s.toString(),isExternal:!0,children:["Issue: New Templates Request ",e.jsx(W,{as:Ue})]})]}),e.jsxs(z,{children:[c("Click copy button and paste into issue body")," ",e.jsx(x,{size:"xs",leftIcon:e.jsx(Je,{}),onClick:o,children:c("Copy")})]})]})]}),e.jsxs($,{children:[e.jsx(x,{variant:"ghost",onClick:l,mr:"auto",leftIcon:e.jsx(Ge,{}),children:c("Previous")}),e.jsx(x,{colorScheme:"primary",onClick:m,children:c("Close")})]})]})}function nt(a){const{isOpen:n,onClose:i}=a,{t:r}=b(),[d,u]=j.useState([]),[l,m]=j.useState({}),[c,g]=j.useState(""),[t,s]=j.useState({}),[o,f]=j.useState(!1),{coreCompanyConfig:M,otherCompanyConfig:w,templateList:E}=P(v=>v.app),h=P(v=>v.ticket),B=S.getCompanyEnglishName(h,[...M,...w]),J=S.getCompanyBlock(h),T=S.getTemplateBlocks(h);j.useEffect(()=>{if(n){u(S.getCompanyErrors(h)),m(S.getTemplateErrors(h));const v=S.getMajorUpdateNames(h,E).reduce((N,p)=>({...N,[p]:""}),{});s(v)}else g(""),s({}),f(!1)},[n]);const L=d.length>0||Object.values(l).flat().length>0,V=!L&&!o;return e.jsxs(he,{blockScrollOnMount:!1,isOpen:n,onClose:i,scrollBehavior:"inside",children:[e.jsx(ue,{}),e.jsxs(ge,{children:[e.jsx(fe,{children:r("Submit templates")}),e.jsx(xe,{}),L&&e.jsx(et,{companyErrors:d,templateErrors:l,onClose:i}),V&&e.jsx(tt,{justification:c,majorUpdateJustifications:t,onJustificationChange:g,onMajorUpdateJustificationChange:(v,N)=>s(p=>({...p,[v]:N})),onNext:()=>f(!0)}),!L&&o&&e.jsx(at,{companyName:B,companyBlock:J,templateBlocks:T,justification:c,majorUpdateJustifications:t,onPrev:()=>f(!1),onClose:i})]})]})}const st={width:{base:"100%",md:520},alignSelf:"center","& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto",bg:"inherit"},"& > div:nth-of-type(2)":{my:2}};function ct(){const{t:a}=b(),n=He(),i=Y(),[r,d]=j.useState(!1),u=()=>{H.isStandaloneWindow()?n("/"):H.openApp("rmg-templates")},l=()=>{i(Be()),H.event(Te.RESET_TICKETS,{})};return e.jsxs(Ee,{sx:st,children:[e.jsxs(Q,{children:[e.jsx(We,{}),e.jsx(Qe,{})]}),e.jsxs(Q,{children:[e.jsx(x,{size:"sm",onClick:u,children:a("Back to list")}),e.jsxs(O,{ml:"auto",children:[e.jsx(x,{size:"sm",variant:"outline",onClick:l,children:a("Reset")}),e.jsx(x,{size:"sm",colorScheme:"primary",onClick:()=>d(!0),children:a("Submit")})]})]}),e.jsx(nt,{isOpen:r,onClose:()=>d(!1)})]})}export{ct as default};
