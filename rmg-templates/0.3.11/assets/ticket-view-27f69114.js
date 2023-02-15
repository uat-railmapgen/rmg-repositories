import{u as w,j as l,Z as W,c as e,H as I,_ as $,J as x,$ as Y,I as K,a0 as Z,a1 as P,a2 as Q,a3 as q,a4 as X,e as A,K as j,a5 as ee,a6 as E,a7 as U,a8 as z,a9 as F,aa as T,ab as H,ac as ae,ad as te,ae as ne,af as oe,ag as se,ah as ie,ai as le,l as M,aj as re,ak as ce,al as de,am as me,an as pe,F as ue,Y as he,r as fe}from"./vendor-a8fb487b.js";import{a as _,u as L,b as ge,c as Ce,A as V,d as ye,e as be,f as je,g as ve,h as Se,r as we,i as Me,j as Le,t as N,k as Ne}from"./index-f47520f0.js";import{u as D,I as G,G as ke,E as Ee}from"./constant-442f4e36.js";function Te(){const{t:o,i18n:t}=w(),i=D(),m=_(),{companyConfig:c}=L(n=>n.app),{company:p,newCompany:a,companyName:s}=L(n=>n.ticket),r={...c.map(n=>[n.id,i(n.name)]).sort((n,f)=>n[1].localeCompare(f[1],t.languages[0])).reduce((n,f)=>({...n,[f[0]]:f[1]}),{"":o("Please select...")}),new:o("Add a company...")},h=[{type:"select",label:o("Company"),value:p,options:r,disabledOptions:[""],onChange:n=>m(ge(n))},{type:"input",label:o("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:a,onChange:n=>m(Ce(n)),hidden:p!=="new"}],g=Object.entries(V).map(n=>{const f=n[0],u=n[1];return{type:"input",label:o(u),value:s[f],onChange:b=>m(ye({lang:f,name:b}))}});return l(W,{as:"section",children:[e(I,{as:"h5",size:"sm",mb:2,children:o("Railway company")}),l($,{direction:"column",children:[e(x,{fields:h}),p==="new"&&e(x,{fields:g})]})]})}const Ie=o=>new Promise(t=>{const i=new FileReader;i.onloadend=()=>t(i.result),i.readAsText(o)});function xe(o){const{company:t,templateEntry:i,onLineChange:m,onNewLineChange:c,onMajorFlagChange:p,onLineNameChange:a,onParamChange:s,onRemove:r}=o,{line:h,newLine:g,majorUpdate:n,templateName:f}=i,{t:u}=w(),b=D(),{templateList:k}=L(d=>d.app),v=async d=>{var y;const C=(y=d.target.files)==null?void 0:y[0];if(console.log("handleFileUpload():: received file",C),!!C){if(C.type!=="application/json"){alert("Invalid file type!"),d.target.value="";return}try{const S=await Ie(C);s(JSON.parse(S))}catch(S){alert("Invalid file!"),d.target.value=""}}},O={"":u("Please select..."),...t===""||t==="new"?{}:k[t].reduce((d,C)=>({...d,[C.filename]:b(C.name)}),{}),new:u("Add a line...")},R=[{type:"select",label:u("Line"),value:h,options:O,disabledOptions:[""],onChange:d=>m(d),minW:150},{type:"custom",label:u("Configuration file"),component:e(Y,{variant:"flushed",size:"xs",type:"file",accept:".json",onChange:v}),minW:250},{type:"input",label:u("Line code"),placeholder:"e.g. twl, gz1, sh1",value:g,onChange:d=>c(d),hidden:h!=="new"},{type:"switch",label:u("Major update"),isChecked:n,onChange:d=>p(d),hidden:h==="new",oneLine:!0}],B=Object.entries(V).map(d=>{const C=d[0],y=d[1];return{type:"input",label:u(y),value:f[C],onChange:S=>a(C,S)}});return l($,{position:"relative",direction:"column",children:[e(K,{size:"sm",variant:"ghost",icon:e(Z,{}),"aria-label":u("Remove this line"),title:u("Remove this line"),position:"absolute",top:0,right:0,zIndex:5,onClick:r}),e(x,{fields:[...R,...B],minW:110})]})}function Oe(){const{t:o}=w(),t=_(),{templateList:i}=L(a=>a.app),{company:m,templates:c}=L(a=>a.ticket),p=(a,s)=>{var h;const r=(h=i[m])==null?void 0:h.find(g=>g.filename===s);t(Le({id:a,line:s,name:r==null?void 0:r.name}))};return l(W,{as:"section",mt:3,children:[l(P,{children:[e(I,{as:"h5",size:"sm",mb:2,children:o("Add or update templates")}),e(Q,{hasArrow:!0,label:o("Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."),children:e("span",{children:e(q,{as:X,ml:1})})})]}),c.map(a=>e(xe,{company:m,templateEntry:a,onLineChange:s=>p(a.id,s),onNewLineChange:s=>t(be({id:a.id,newLine:s})),onMajorFlagChange:s=>t(je({id:a.id,majorUpdate:s})),onLineNameChange:(s,r)=>t(ve({id:a.id,lang:s,name:r})),onParamChange:s=>t(Se({id:a.id,param:s})),onRemove:()=>t(we(a.id))},a.id)),e(A,{justifyContent:"flex-end",children:e(j,{variant:"ghost",size:"sm",leftIcon:e(ee,{}),onClick:()=>t(Me()),children:o("Add item")})})]})}function Re(o){const{companyErrors:t,templateErrors:i,onClose:m}=o,{t:c}=w(),p=D();return l(E,{children:[l(U,{children:[e(z,{children:c("Your inputs contain the following errors. Please fix it before submitting.")}),t.length>0&&l(E,{children:[e(I,{as:"h5",size:"sm",my:2,children:c("Railway company")}),e(F,{"aria-label":"List of company errors",children:t.map((a,s)=>e(T,{children:p(G[a])},s))})]}),Object.values(i).flat().length>0&&l(E,{children:[e(I,{as:"h5",size:"sm",my:2,children:c("Templates")}),e(F,{"aria-label":"List of template errors",children:Object.entries(i).map(([a,s])=>l(T,{children:[a,e(F,{children:s.map((r,h)=>e(T,{children:p(G[r])},h))})]},a))})]})]}),e(H,{children:e(A,{children:e(j,{colorScheme:"primary",onClick:m,children:c("Go back")})})})]})}function Be(o){const{justification:t,majorUpdateJustifications:i,onJustificationChange:m,onMajorUpdateJustificationChange:c,onNext:p}=o,{t:a}=w(),s=[{type:"textarea",value:t,label:a("Justification"),placeholder:a("Briefly describe your changes and provide justification"),onChange:m}],r=Object.entries(i).map(([g,n])=>({type:"textarea",value:n,label:a("Justification for major update of")+" "+g,placeholder:a("Briefly describe your changes and provide justification"),onChange:f=>c(g,f)})),h=!t||Object.values(i).some(g=>!g);return l(E,{children:[l(U,{children:[e(z,{children:a("Please provide suitable source and justification.")}),e(x,{fields:[...s,...r],minW:"full"})]}),e(H,{children:e(j,{colorScheme:"primary",onClick:p,rightIcon:e(ae,{}),isDisabled:h,children:a("Next")})})]})}function Je(o){var u;const{companyName:t,companyBlock:i,templateBlocks:m,justification:c,majorUpdateJustifications:p,onPrev:a,onClose:s}=o,{t:r}=w(),h=te("primary.500","primary.300"),g=[`**Justification:** ${c||"(REPLACE ME)"}`,Object.entries(p).map(([b,k])=>`- Major update of ${b}: ${k}`).join(`
`),ke,(u=i==null?void 0:i.outerHTML)!=null?u:"",...m.map(b=>b.outerHTML)].join(`

`),n=new URLSearchParams({template:"new-templates-request.md",label:"resources",title:"Resources: New templates of "+t}),f=async()=>{await navigator.clipboard.writeText(g)};return l(E,{children:[l(U,{children:[e(z,{children:r("Follow the instructions below to open an Issue")+":"}),l(ne,{children:[l(T,{children:[r("Open")," ",l(oe,{color:h,href:"https://github.com/railmapgen/rmg-templates/issues/new?"+n.toString(),isExternal:!0,children:["Issue: New Templates Request ",e(q,{as:se})]})]}),l(T,{children:[r("Click copy button and paste into issue body")," ",e(j,{size:"xs",leftIcon:e(ie,{}),onClick:f,children:r("Copy")})]})]})]}),l(H,{children:[e(j,{variant:"ghost",onClick:a,mr:"auto",leftIcon:e(le,{}),children:r("Previous")}),e(j,{colorScheme:"primary",onClick:s,children:r("Close")})]})]})}function Fe(o){const{isOpen:t,onClose:i}=o,{t:m}=w(),[c,p]=M.useState([]),[a,s]=M.useState({}),[r,h]=M.useState(""),[g,n]=M.useState({}),[f,u]=M.useState(!1),{companyConfig:b,templateList:k}=L(y=>y.app),v=L(y=>y.ticket),O=N.getCompanyEnglishName(v,b),R=N.getCompanyBlock(v),B=N.getTemplateBlocks(v);M.useEffect(()=>{if(t){p(N.getCompanyErrors(v)),s(N.getTemplateErrors(v));const y=N.getMajorUpdateNames(v,k).reduce((S,J)=>({...S,[J]:""}),{});n(y)}else h(""),n({}),u(!1)},[t]);const d=c.length>0||Object.values(a).flat().length>0,C=!d&&!f;return l(re,{blockScrollOnMount:!1,isOpen:t,onClose:i,scrollBehavior:"inside",children:[e(ce,{}),l(de,{children:[e(me,{children:m("Submit templates")}),e(pe,{}),d&&e(Re,{companyErrors:c,templateErrors:a,onClose:i}),C&&e(Be,{justification:r,majorUpdateJustifications:g,onJustificationChange:h,onMajorUpdateJustificationChange:(y,S)=>n(J=>({...J,[y]:S})),onNext:()=>u(!0)}),!d&&f&&e(Je,{companyName:O,companyBlock:R,templateBlocks:B,justification:r,majorUpdateJustifications:g,onPrev:()=>u(!1),onClose:i})]})]})}const Pe={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}};function He(){const{t:o}=w(),t=ue(),i=_(),[m,c]=M.useState(!1),p=()=>{i(Ne()),fe.event(Ee.RESET_TICKETS,{})};return l(he,{sx:Pe,children:[l(P,{children:[e(Te,{}),e(Oe,{})]}),l(P,{children:[e(j,{size:"sm",onClick:()=>t("/"),children:o("Go back")}),l(A,{ml:"auto",children:[e(j,{size:"sm",variant:"outline",onClick:p,children:o("Reset")}),e(j,{size:"sm",colorScheme:"primary",onClick:()=>c(!0),children:o("Submit")})]})]}),e(Fe,{isOpen:m,onClose:()=>c(!1)})]})}export{He as default};
