import{c as xe,a as $e,b as Ie,u as Oe,d as Ne,e as M,f as _,g as Fe,R as w,j as t,M as W,h as e,i as G,k as q,l as V,m as Y,n as J,V as O,I as se,H as A,T as u,L as ee,o as R,F as B,A as H,p as Ae,q as Pe,r as k,s as _e,t as We,v as F,w as Ge,x as qe,y as Ve,z as S,B as pe,C as te,D as Ye,E as Je,G as ge,J as Ze,K as Ke,N as ne,O as ae,S as x,P as ie,Q as Qe,U as T,W as U,X as Le,Y as Xe,Z as L,_ as j,$ as et,a0 as ye,a1 as oe,a2 as tt,a3 as Z,a4 as K,a5 as Q,a6 as X,a7 as nt,a8 as at,a9 as le,aa as N,ab as it,ac as re,ad as ot,ae as rt,af as Me,ag as be,ah as st,ai as lt,aj as ct,ak as $,al as I,am as dt,an as ut,ao as ht,ap as mt,aq as pt,ar as gt,as as yt,at as bt,au as ft,av as kt,aw as wt,ax as St,ay as fe,az as ke,aA as Ct,aB as vt,aC as Rt,aD as At,aE as Pt}from"./vendor-bc0725cb.js";function Bn(){import.meta.url,import("_").catch(()=>1);async function*l(){}}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const Lt={realWorld:{shanghai:{contributors:["3353040"],name:{en:"Shanghai","zh-Hans":"上海","zh-Hant":"上海"},lastUpdateOn:1683810518708}},fantasy:{wenxi:{contributors:["3353040"],name:{en:"Shanghai","zh-Hans":"上海","zh-Hant":"上海"},lastUpdateOn:1683810518708}}},Ee=xe({name:"app",initialState:Lt,reducers:{setRealWorld:(l,r)=>{l.realWorld=r.payload},setFantasy:(l,r)=>{l.fantasy=r.payload}}}),{setRealWorld:Mt,setFantasy:Et}=Ee.actions,Tt=Ee.reducer,zt=$e(),Te=Ie({reducer:{app:Tt},middleware:l=>l().prepend(zt.middleware)}),Ht=()=>Oe(),ze=Ne;window.rmgStore=Te;var ce=(l=>(l.APP_LOAD="APP_LOAD",l.UPLOAD_TEMPLATES="UPLOAD_TEMPLATES",l))(ce||{});const we="Hi RMP team! I would like to contribute to the gallery with the data below.",Se="**Do not edit lines below, they are meant for bots only!!!**";function de(){const{i18n:l}=M();return r=>{var a,i;return(i=(a=l.languages.map(n=>r[n]).find(n=>n!==void 0))!=null?a:r.en)!=null?i:"(Translation Error)"}}const Ut="RMP_GALLERY_CHANNEL",Bt="OPEN_TEMPLATE",Dt=new BroadcastChannel(Ut),jt=l=>{const{city:r,type:a,isOpen:i,onClose:n}=l,s=_(),d=Fe(),{t:C}=M(),P=de(),[g,v]=w.useState({name:{en:""},desc:{en:""},reference:"",updateHistory:[]});w.useEffect(()=>{fetch(`resources/metadata/${r}.json`).then(h=>h.json()).then(h=>v({...h,justification:""}))},[r]);const o=()=>{const h=structuredClone(g),b=(({updateHistory:D,...z})=>({...z,justification:""}))(h);s("/new",{state:{metadata:b,type:a}})},m=()=>{Dt.postMessage({event:Bt,data:r}),d({title:C(`Template ${r} imported in Rail Map Painter.`),status:"success",duration:9e3,isClosable:!0}),n()},E=`https://${window.location.hostname}/rmp/s/${r}`,p={title:C("Link copied."),status:"success",duration:9e3,isClosable:!0};return t(W,{isOpen:i,onClose:n,size:"6xl",scrollBehavior:"inside",children:[e(G,{}),t(q,{children:[e(V,{children:C("details.title")}),e(Y,{}),t(J,{paddingBottom:10,children:[e(O,{children:e("a",{href:`resources/thumbnails/${r}.png`,target:"_blank",rel:"noopener noreferrer",children:e(se,{src:`resources/thumbnails/${r}.png`,alt:r,borderRadius:"lg"})})}),e(A,{as:"h5",size:"md",mt:3,mb:2,children:P(g.name)}),e(u,{children:P(g.desc)}),e(A,{as:"h5",size:"sm",mt:3,mb:2,children:C("details.updateHistory")}),e(ee,{children:g.updateHistory.map(h=>e(R,{children:t(B,{flexDirection:"row",alignItems:"center",children:[e(H,{size:"sm",mr:"2",src:`https://avatars.githubusercontent.com/u/${h.id}`,cursor:"pointer",onClick:()=>fetch(`https://api.github.com/user/${h.id}`).then(b=>b.json()).then(b=>window.open(`https://github.com/${b.login}`))}),e(Ae,{mr:"auto",href:`https://github.com/railmapgen/rmp-gallery/issues/${h.issueNumber}`,isExternal:!0,children:h.reason}),e(u,{children:new Date(h.time).toLocaleDateString(void 0,{hour12:!1})})]})},h.issueNumber))})]}),t(Pe,{children:[e(k,{"aria-label":"Like",variant:"ghost",icon:e(_e,{}),isDisabled:!0}),e(k,{"aria-label":"Favorite",variant:"ghost",icon:e(We,{}),isDisabled:!0}),e(F,{label:E,children:e(k,{"aria-label":"Share",variant:"ghost",icon:e(Ge,{}),onClick:()=>{navigator.clipboard.writeText(E),d(p)}})}),e(k,{"aria-label":"Edit",variant:"ghost",icon:e(qe,{}),onClick:o}),e("a",{href:`resources/${a}/${r}.json`,target:"_blank",rel:"noopener noreferrer",children:e(k,{"aria-label":"Download",variant:"ghost",icon:e(Ve,{})})}),S.isStandaloneWindow()?e(F,{label:C("details.import"),children:e(k,{"aria-label":"Import",variant:"ghost",icon:e(pe,{}),isDisabled:!0})}):e(k,{"aria-label":"Import",variant:"ghost",icon:e(pe,{}),onClick:m})]})]})]})};function xt(){const l=_(),r=Ht(),a=de(),{t:i}=M(),{realWorld:n,fantasy:s}=ze(p=>p.app),[d,C]=w.useState("real_world"),[P,g]=w.useState("shanghai"),[v,o]=w.useState(!1),m=p=>{o(!0),g(p)},E=()=>{l("/new",{state:{metadata:{name:{en:""},desc:{en:""},reference:"",justification:""},type:d}}),S.event(ce.UPLOAD_TEMPLATES,{})};return w.useEffect(()=>{fetch("resources/real_world.json").then(p=>p.json()).then(p=>r(Mt(p))),fetch("resources/fantasy.json").then(p=>p.json()).then(p=>r(Et(p)))},[]),t(te,{children:[t(Ye,{isLazy:!0,isFitted:!0,onChange:p=>C(p===0?"real_world":"fantasy"),children:[t(Je,{children:[e(ge,{children:i("gallery.type.realWorld")}),e(ge,{children:i("gallery.type.fantasy")})]}),e(Ze,{children:[n,s].map((p,h)=>e(Ke,{children:t(B,{flexWrap:"wrap",children:[Object.entries(p).map(([b,D])=>t(ne,{variant:"elevated",minWidth:"300",m:"2",children:[t(ae,{children:[e(se,{src:`resources/thumbnails/${b}@300.png`,alt:b,borderRadius:"lg"}),e(x,{mt:"6",spacing:"3",children:e(A,{size:"lg",children:a(D.name)})})]}),t(ie,{children:[e(Qe,{max:3,children:D.contributors.map(z=>e(H,{src:`https://avatars.githubusercontent.com/u/${z}`},z))}),e(T,{variant:"solid",colorScheme:"blue",ml:"auto",onClick:()=>m(b),children:i("details.title")})]})]},`${d}+${b}`)),e(U,{onClick:E,position:"fixed",bottom:"20px",right:"20px",zIndex:3,children:e(k,{"aria-label":"new",size:"lg",icon:e(Le,{}),colorScheme:"blue",variant:"solid"})})]})},h))})]}),e(jt,{city:P,type:d,isOpen:v,onClose:()=>o(!1)})]})}const $t=l=>new Promise(r=>{const a=new FileReader;a.onloadend=()=>r(a.result),a.readAsText(l)}),Ce=(l,r,a)=>{if(r!==null){const i=document.createElement("details");return i.setAttribute("repo","rmp-gallery"),i.setAttribute("type",l),Object.entries(a).forEach(([n,s])=>{i.setAttribute(n,s)}),i.textContent=r,i.outerHTML}else return""},It=(l,r,a)=>{const i=new Blob([a],{type:r});Ot(l,i)},Ot=(l,r)=>{const a=window.URL.createObjectURL(r),i=document.createElement("a");i.href=a,i.download=l,document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(a)};function Nt(l){const r=_(),{t:a}=M(),i=()=>r("/"),n=s=>{const d=new URLSearchParams({labels:"donation",title:`Donation: Early bird ${s}`});window.open("https://github.com/railmapgen/rmp-gallery/issues/new?"+d.toString(),"_blank")};return t(W,{isOpen:!0,onClose:i,size:"2xl",children:[e(G,{}),t(q,{children:[e(V,{children:a("donation.title")}),e(Y,{}),e(J,{paddingBottom:10,children:t(x,{spacing:3,children:[e(u,{children:a("donation.content1")}),t(u,{children:[a("donation.content2"),e(Ae,{color:"blue.500",href:"https://railmapgen.github.io/rmp/s/mcG7zS",target:"_blank",rel:"noopener noreferrer",children:"https://railmapgen.github.io/rmp/s/mcG7zS"})]}),t(Xe,{columns:2,spacing:"10",children:[t(ne,{align:"center",children:[e(ae,{children:t(x,{spacing:3,alignItems:"center",children:[e(A,{children:a("donation.typeA")}),t(ee,{children:[t(R,{children:[e(L,{as:j,color:"blue.500"}),a("donation.uniqueLink")]}),t(R,{children:[e(L,{as:j,color:"blue.500"}),a("donation.duration")]}),t(R,{children:[e(L,{as:et,color:"red.500"}),a("donation.noUpdates")]}),e(F,{label:t(x,{alignItems:"center",children:[e(u,{children:a("donation.earlyBirdBonus")}),e(u,{children:"https://railmapgen.github.io/rmp/s/wenxi"})]}),children:t(R,{children:[e(L,{as:ye,color:"teal.500"}),a("donation.personalizedLink")]})})]})]})}),e(oe,{}),e(ie,{children:e(T,{colorScheme:"blue",onClick:()=>n("A"),children:a("donation.becomeAnEarlyBird")})})]}),t(ne,{align:"center",children:[e(ae,{children:t(x,{spacing:3,alignItems:"center",children:[e(A,{children:a("donation.typeA")}),t(ee,{children:[t(R,{children:[e(L,{as:j,color:"blue.500"}),a("donation.uniqueLink")]}),t(R,{children:[e(L,{as:j,color:"blue.500"}),a("donation.duration")]}),t(R,{children:[e(L,{as:j,color:"blue.500"}),a("donation.unlimitedUpdates")]}),e(F,{label:a("donation.earlyBirdBonus"),children:t(R,{children:[e(L,{as:ye,color:"teal.500"}),a("donation.personalizedLink")]})})]})]})}),e(oe,{}),e(ie,{children:e(T,{colorScheme:"blue",onClick:()=>n("B"),children:a("donation.becomeAnEarlyBird")})})]})]}),e(u,{children:a("donation.content3")}),e(u,{children:a("donation.content4")}),t(tt,{allowToggle:!0,allowMultiple:!0,children:[t(Z,{children:[t(K,{children:[e(U,{as:"span",flex:"1",textAlign:"left",children:a("donation.termsAndConditions")}),e(Q,{})]}),e(X,{children:e(nt,{children:Array.from({length:12}).map((s,d)=>e(R,{children:a(`donation.terms${d+1}`)},d))})})]}),t(Z,{children:[t(K,{children:[e(U,{as:"span",flex:"1",textAlign:"left",children:a("donation.methodCN")}),e(Q,{})]}),e(X,{children:a("donation.comingSoon")})]}),t(Z,{children:[t(K,{children:[e(U,{as:"span",flex:"1",textAlign:"left",children:a("donation.methodUS")}),e(Q,{})]}),e(X,{children:a("donation.comingSoon")})]})]})]})})]})]})}const Ft={"& > div:first-of-type":{flex:1}};function ve(l){const{translations:r,onUpdate:a,onLangSwitch:i,onRemove:n}=l,{t:s}=M(),d=de(),C=(g,v)=>[{type:"select",label:s("multiLangEntry.lang"),value:g,options:Object.entries(re).reduce((o,m)=>({...o,[m[0]]:d(m[1])}),{}),disabledOptions:r.filter(o=>o[0]!==g).map(o=>o[0]),onChange:o=>i(g,o)},{type:"input",label:s("multiLangEntry.name"),value:v,onChange:o=>a(g,o),validator:o=>!!o}],P=()=>{const g=Object.keys(re).filter(v=>!r.find(o=>o[0]===v))[0];a(g,"")};return e(at,{direction:"column",children:r.map(([g,v],o,m)=>t(le,{sx:Ft,children:[e(N,{fields:C(g,v),noLabel:o>0}),o===m.length-1?e(k,{size:"sm",variant:"ghost","aria-label":s("multiLangEntry.add"),title:s("multiLangEntry.add"),onClick:P,icon:e(Le,{})}):e(U,{minW:8}),m.length>1&&e(k,{size:"sm",variant:"ghost","aria-label":s("multiLangEntry.remove"),title:s("multiLangEntry.remove"),onClick:()=>n(g),icon:e(it,{})})]},o))})}const _t={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}};function Wt(){var ue,he;const{state:{metadata:l,type:r}}=ot(),a=_(),i=ze(c=>c.app.realWorld),{t:n}=M(),s=()=>a("/"),d=w.useRef(null),[C,P]=w.useState(!1),[g,v]=w.useState(!0),[o,m]=w.useState(l),[E,p]=w.useState(""),h=(he=(ue=o.name.en)==null?void 0:ue.replace(/[^A-Za-z0-9]/g,"").toLowerCase())!=null?he:"",b=[we,Se,Ce("metadata",JSON.stringify(o,null,4),{}),Ce("real_world",E,{compress:"zipson",city:h})].join(`

`),D=new URLSearchParams({labels:"resources",title:`Resources: ${h in i?"Update":"New"} template of ${h}`}),z=async c=>{var f;const y=(f=c.target.files)==null?void 0:f[0];if(console.log("handleFileUpload():: received file",y),!!y){if(y.type!=="application/json"){alert("Invalid file type!"),c.target.value="";return}try{const me=await $t(y);p(ct.stringify(JSON.parse(me.trim())).trim())}catch(me){alert("Invalid file!"),c.target.value=""}}},He=async()=>{d!=null&&d.current&&(d.current.select(),await navigator.clipboard.writeText(b)),window.open("https://github.com/railmapgen/rmp-gallery/issues/new?"+D.toString(),"_blank")},Ue=()=>{It(`${h}.txt`,"application/json",b);const c=new URLSearchParams({labels:"resources",title:`Resources: ${h in i?"Update":"New"} template of ${h}`,body:[we,Se,""].join(`

`)});window.open("https://github.com/railmapgen/rmp-gallery/issues/new?"+c.toString(),"_blank")},Be=[{type:"custom",label:n("ticket.file"),component:e(rt,{variant:"flushed",size:"xs",type:"file",accept:".json",onChange:z}),minW:250}],De=[{type:"input",label:n("ticket.link"),placeholder:n("ticket.linkPlaceHolder"),value:o.reference,onChange:c=>m({...o,reference:c}),minW:250},{type:"input",label:n("ticket.justification"),placeholder:n("ticket.justificationPlaceHolder"),validator:c=>/^[a-zA-Z0-9. -]+$/.test(c),value:o.justification,onChange:c=>m({...o,justification:c}),minW:250}],je=[{type:"input",label:n("ticket.donation"),placeholder:n("ticket.donationPlaceHolder"),value:o.reference,onChange:c=>m({...o,reference:c}),minW:250},{type:"input",label:n("ticket.reason"),placeholder:n("ticket.reasonPlaceHolder"),value:o.justification,onChange:c=>m({...o,justification:c}),minW:250}];return t(Me,{sx:_t,children:[t(B,{children:[e(N,{fields:Be}),r==="real_world"&&e(N,{fields:De}),r==="fantasy"&&e(N,{fields:je}),e(be,{label:n("ticket.cityName"),children:e(ve,{translations:Object.entries(o.name),onUpdate:(c,y)=>m({...o,name:{...o.name,[c]:y}}),onLangSwitch:(c,y)=>{const f=structuredClone(o);f.name[y]=f.name[c],delete f.name[c],m(f)},onRemove:c=>{const y=structuredClone(o);delete y.name[c],m(y)}})}),e(be,{label:n("ticket.description"),children:e(ve,{translations:Object.entries(o.desc),onUpdate:(c,y)=>m({...o,desc:{...o.desc,[c]:y}}),onLangSwitch:(c,y)=>{const f=structuredClone(o);f.desc[y]=f.desc[c],delete f.desc[c],m(f)},onRemove:c=>{const y=structuredClone(o);delete y.desc[c],m(y)}})})]}),t(B,{children:[e(T,{size:"sm",onClick:s,children:n("ticket.back")}),e(le,{ml:"auto",children:e(T,{size:"sm",colorScheme:"primary",isDisabled:E===""||o.reference===""||r==="real_world"&&(o.justification===""||!/^[a-zA-Z0-9. -]+$/.test(o.justification))||r==="fantasy"||Object.keys(o.desc).length>0&&!("en"in o.desc)||h==="",onClick:()=>P(!0),children:n("ticket.submit")})})]}),t(W,{isOpen:C,onClose:()=>P(!1),children:[e(G,{}),t(q,{children:[e(V,{children:n("ticket.submitTemplate")}),e(Y,{}),e(J,{children:b.length<100*100?t(te,{children:[e(u,{children:n("ticket.instruction")}),e(oe,{mt:"2",mb:"4"}),e(st,{ref:d,isReadOnly:!0,defaultValue:b,onClick:({target:c})=>c.select()})]}):t(te,{children:[e(u,{children:n("ticket.instructionFile")}),t(u,{children:[n("ticket.instructionFileHint1"),e(lt,{children:n("Uploading your files... (1/1)")}),n("ticket.instructionFileHint2")]})]})}),e(Pe,{children:b.length<100*100?e(T,{colorScheme:"primary",onClick:He,children:n("ticket.openIssue")}):e(T,{colorScheme:"primary",onClick:Ue,children:n("ticket.download")})})]})]}),e(Nt,{isOpen:g,onClose:()=>v(!1)})]})}const Gt="/rmp-gallery/assets/github-mark-7a0dd11e.svg",qt="/rmp-gallery/assets/slack-mark-19839006.svg",Vt=l=>{const{isOpen:r,onClose:a}=l,{t:i}=M(),n=S.getAppVersion();return t(W,{isOpen:r,onClose:a,size:"xl",scrollBehavior:"inside",children:[e(G,{}),t(q,{children:[e(V,{children:i("header.about.title")}),e(Y,{}),t(J,{paddingBottom:10,children:[t(B,{direction:"row",children:[e(se,{boxSize:"128px",src:"/rmp-gallery/logo192.png"}),t(B,{direction:"column",width:"100%",alignItems:"center",justifyContent:"center",children:[e(u,{fontSize:"xl",as:"b",children:i("header.about.rmpGallery")}),e(u,{children:n}),e(u,{}),e(u,{fontSize:"sm",children:i("header.about.railmapgen")})]})]}),e(U,{margin:5,children:e(u,{fontSize:"xl",children:i("header.about.desc")})}),e(A,{as:"h5",size:"sm",mt:3,mb:2,children:i("header.about.contributors")}),e(A,{as:"h6",size:"xs",my:2,children:i("header.about.coreContributors")}),e(O,{children:t($,{size:"lg",w:"85%",onClick:()=>window.open("https://github.com/thekingofcity","_blank"),cursor:"pointer",children:[e(H,{src:"https://github.com/thekingofcity.png",size:"lg",my:2,ml:-1,mr:2}),t(I,{display:"block",width:"100%",children:[e(u,{fontSize:"lg",fontWeight:"bold",mb:1,children:"thekingofcity"}),e(u,{fontSize:"sm",children:i("header.about.content1")}),e(u,{fontSize:"sm",align:"right",mb:1,children:i("header.about.content2")})]})]})}),e(A,{as:"h6",size:"xs",my:2,children:i("header.about.templateAdministrators")}),e(O,{children:["52PD","linchen1965"].map(s=>t($,{size:"lg",w:"85%",onClick:()=>window.open(`https://github.com/${s}`,"_blank"),cursor:"pointer",children:[e(H,{src:`https://github.com/${s}.png`,size:"lg",my:2,ml:-1,mr:2}),t(I,{display:"block",width:"100%",children:[e(u,{fontSize:"lg",fontWeight:"bold",mb:1,children:s}),e(u,{fontSize:"sm",mb:1,children:i(`header.about.${s}`)})]})]},s))}),e(A,{as:"h5",size:"sm",mt:3,mb:2,children:i("header.about.contactUs")}),t(O,{children:[t($,{size:"lg",w:"85%",onClick:()=>window.open("https://github.com/railmapgen/rmp-gallery/issues","_blank"),cursor:"pointer",children:[e(H,{src:Gt,size:"lg",my:2,ml:-1,mr:2}),t(I,{display:"block",width:"100%",children:[e(u,{fontSize:"lg",fontWeight:"bold",mb:1,children:i("header.about.github")}),e(u,{fontSize:"sm",children:i("header.about.githubContent")})]})]}),t($,{size:"lg",w:"85%",onClick:()=>window.open("https://join.slack.com/t/railmapgenerator/shared_invite/zt-1odhhta3n-DdZF~fnVwo_q0S0RJmgV8A","_blank"),cursor:"pointer",children:[e(H,{src:qt,size:"lg",my:2,ml:-1,mr:2}),t(I,{display:"block",width:"100%",children:[e(u,{fontSize:"lg",fontWeight:"bold",mb:1,children:i("header.about.slack")}),e(u,{fontSize:"sm",children:i("header.about.slackContent")}),e(u,{fontSize:"sm",as:"i",children:"#rmg, #rmp, #gallery, #random"})]})]})]})]})]})]})};function Yt(){const{t:l}=M(),r=S.getEnv(),a=S.getAppVersion(),[i,n]=w.useState(!1),s=d=>{S.setLanguage(d),S.getI18nInstance().changeLanguage(d)};return t(dt,{children:[e(A,{as:"h4",size:"md",children:l("header.about.rmpGallery")}),e(ut,{environment:r,version:a}),t(le,{ml:"auto",children:[t(ht,{children:[e(mt,{as:k,icon:e(pt,{}),variant:"ghost",size:"sm"}),e(gt,{children:["en","zh-Hans","zh-Hant","ja","ko"].map(d=>e(yt,{onClick:()=>s(d),children:re[d][d]},d))})]}),e(k,{size:"sm",variant:"ghost","aria-label":"Help",icon:e(bt,{}),onClick:()=>n(!0)})]}),e(Vt,{isOpen:i,onClose:()=>n(!1)})]})}function Jt(){return e(ft,{basename:"/rmp-gallery/",children:e(kt,{children:t(wt,{children:[e(Yt,{}),e(Me,{children:t(St,{children:[e(fe,{path:"/",element:e(ke,{children:e(xt,{})})}),e(fe,{path:"/new",element:e(ke,{children:e(Wt,{})})})]})})]})})})}const Zt={about:{rmpGallery:"RMP Gallery",title:"About",railmapgen:"A Rail Map Toolkit project",desc:"Browse, set, and submit your RMP template here!",content1:"In memory of all the freedom and equality we once had.",content2:"06/01/2022 in Shanghai",contributors:"Contributors",coreContributors:"Core Contributors",templateAdministrators:"Administrators","52PD":"Special thanks for his continuous effort in maintaining templates.",linchen1965:"Special thanks for his continuous effort in maintaining templates.",contactUs:"Contact Us",github:"Project Repository",githubContent:"Face any problems? Search or raise an issue here!",slack:"Slack Group",slackContent:"Chat in these Slack channels!"}},Kt={type:{realWorld:"Real World",fantasy:"Fantasy"}},Qt={title:"Details",updateHistory:"Update History",import:"You may directly use this template if your are in Rail Map Painter or Rail Map Toolkit"},Xt={file:"Project file",link:"Reference link (Official website preferred)",linkPlaceHolder:"Enter the link where you get the valid data",justification:"Justification (English only)",justificationPlaceHolder:"The reason why you make these changes",donation:"Donation code",donationPlaceHolder:"Follow the donation instruction and paste the code here",reason:"Reason",reasonPlaceHolder:"The reason why you make these changes",cityName:"City Name (English required)",description:"Description (Optional, English required)",back:"Back to list",submit:"Submit",submitTemplate:"Submit template",instruction:"You may now copy the following text into your new issue's body.",openIssue:"Copy issue body and open an issue",instructionFile:"Upload the file downloaded below at the end of your new issue's body.",instructionFileHint1:"Make sure to submit your issue after ",instructionFileHint2:" is disappeared.",download:"Download file"},en={title:"Early Bird Donation",content1:"Thank you for considering making a donation to Rail Map Toolkit. Your support will enable us to continue updating and enhancing this outstanding project.",content2:"By donating, you will also be able to upload your works which can then be showcased in this gallery, and shared via an auto-generated random link. e.g. ",content3:"We encourage you to open an issue today to secure your personalized link privilege as an early bird bonus before donations become available. Please note that the personalized link will cost more once donations are open.",content4:"Thank you again for supporting the Rail Map Toolkit. You may find terms and conditions below as well as how to donate using various methods (coming soon).",typeA:"2.99 USD",typeB:"4.99 USD",uniqueLink:"Unique share link",duration:"Valid for 1 year",noUpdates:"No updates",unlimitedUpdates:"Unlimited updates",personalizedLink:"Personalized share link",termsAndConditions:"Terms and Conditions",earlyBirdBonus:"Early bird bonus!",becomeAnEarlyBird:"Become an early bird",terms1:"Donations are non-refundable under any circumstances.",terms2:"Any payment should be for donation purposes only, and does not constitute a contract for the purchase of any products or services.",terms3:"Additionally, we will add users who have donated to a whitelist that can update the gallery.",terms4:"After donation and uploading the work, it will be published immediately and can be accessed no later than 24 hours afterwards.",terms5:"Early bird donation does not involve any transactions. We plan to launch the donation function this year and merge all uploaded works.",terms6:"After the donation function is launched, you have 60 days to donate and upload data, and we will reply to you in Github's issue tracker. Failure to donate and upload data in a timely manner will result in the loss of eligibility to use personalized links.",terms7:"Personalized links may be taken based on the order of donations, in case of conflicts.",terms8:"All provided data will be publicly available on the internet for anyone to browse.",terms9:"Links will be valid within 365 days of being added to the gallery. Donating again and re-requesting before the link expires will extend its validity until you no longer donate or re-request. After it expires, the previously obtained link may be revoked and allocated to other works.",terms10:"Uploaded works must not contain any political bias, pornography, violence or infringement of intellectual property rights. Inappropriate works and links will be blocked and removed.",terms11:"We believe in a free and open internet. If you have a Uniform Resource Locator address that can be accessed by global users, you can share your work using a link with extra parameters. This feature will be launched after the donation function is open, at the latest within 180 days after opening.",terms12:"We have the right to interpret the terms and conditions. We reserve the right to modify, add, or remove these terms without further notice.",methodCN:"Donate in CNY via Alipay or Wechat Pay",methodUS:"Donate in USD via Paypal or Visa card",comingSoon:"Coming Soon."},tn={lang:"Language",name:"Name",add:"Add a name in another language",remove:"Remove this name"},nn={header:Zt,gallery:Kt,details:Qt,ticket:Xt,donation:en,multiLangEntry:tn},an={about:{rmpGallery:"RMP画廊",title:"About",railmapgen:"一个 Rail Map Toolkit 项目",desc:"浏览、设置、提交你制作的RMP模板！",content1:"谨以此纪念我们曾拥有的自由与平等。",content2:"06/01/2022于上海",contributors:"贡献者",coreContributors:"核心贡献者",templateAdministrators:"管理员","52PD":"特别感谢他维护这些模板的持续付出。",linchen1965:"特别感谢他维护这些模板的持续付出。",contactUs:"联系我们",github:"项目仓库",githubContent:"遇到任何问题？在这里搜索或提出一个问题！",slack:"Slack群组",slackContent:"在这些Slack频道中讨论!"}},on={type:{realWorld:"现实世界",fantasy:"幻想"}},rn={title:"详情",updateHistory:"更新历史",import:"如果您正在使用Rail Map Painter或Rail Map Toolkit，您可以直接使用此模板"},sn={file:"项目文件",link:"参考链接（首选官方网站）",linkPlaceHolder:"输入您获得有效数据的链接",justification:"证明（仅限英文）",justificationPlaceHolder:"您进行这些更改的原因",donation:"捐赠代码",donationPlaceHolder:"按照捐赠说明粘贴代码到此处",reason:"原因",reasonPlaceHolder:"您进行这些更改的原因",cityName:"城市名称（需要英文）",description:"描述（可选，需要英文）",back:"返回列表",submit:"提交",submitTemplate:"提交模板",instruction:"现在，您可以将以下文本复制到新问题的正文中。",openIssue:"复制问题正文并打开一个问题",instructionFile:"在新问题的结尾处上传下载下面的文件。",instructionFileHint1:"确保在",instructionFileHint2:" 消失后提交您的问题。",download:"下载文件"},ln={title:"早鸟捐赠",content1:"感谢您考虑向Rail Map Toolkit捐赠。您的支持将使我们能够继续更新和完善这个优秀的项目。",content2:"通过捐赠，您还可以上传您的作品，然后在这个画廊展示，并通过自动生成的随机链接共享。例如：",content3:"我们鼓励您今天开启一个问题来确保您的个性化链接特权作为早期投资者奖金，捐款开放之前。请注意，一旦捐款开放，个性化链接将会更贵。",content4:"再次感谢您支持Rail Map Toolkit。您可以在下面找到条款和条件，以及如何使用各种方法进行捐赠（即将推出）。",typeA:"18人民币",typeB:"28人民币",uniqueLink:"独特的分享链接",duration:"有效期一年",noUpdates:"无更新",unlimitedUpdates:"无限更新",personalizedLink:"个性化分享链接",termsAndConditions:"条款和条件",earlyBirdBonus:"早鸟奖金！",becomeAnEarlyBird:"成为早鸟",terms1:"捐赠不可退款，无论任何情况。",terms2:"任何付款都应仅用于捐赠目的，不构成任何产品或服务的购买合同。",terms3:"此外，我们将向捐赠者添加到白名单中，以便更新画廊。",terms4:"捐赠并上传作品后，它将立即发布，并且最迟在24小时内可以访问。",terms5:"早期捐赠不涉及任何交易。我们计划在今年推出捐赠功能并合并所有上传的作品。",terms6:"捐赠功能推出后，您有60天时间捐赠和上传数据，我们将在Github问题跟踪器中回复您。未能及时捐赠和上传数据将导致失去使用个性化链接的资格。",terms7:"基于捐赠顺序，可能会占用个性化链接，以防冲突。",terms8:"提供的所有数据将公开在互联网上供任何人浏览。",terms9:"链接将在添加到画廊后的365天内有效。在链接到期前再次捐赠并重新请求将延长其有效期，直到您不再捐赠或重新请求为止。过期后，之前获得的链接可能会被吊销并分配给其他作品。",terms10:"上传的作品不得包含任何政治倾向、色情、暴力或侵犯知识产权。不适当的作品和链接将被阻止和删除。",terms11:"我们相信在自由和开放的互联网环境中。如果您有一个可以全球用户访问的统一资源定位符地址，您可以使用带有额外参数的链接共享您的作品。此功能将在捐赠功能开放后推出，最晚在开放后180天内。",terms12:"我们有权解释条款和条件。我们保留修改、添加或删除这些条款的权利，而无需事先通知。",methodCN:"通过支付宝或微信捐赠人民币",methodUS:"通过Paypal或Visa卡捐赠美元",comingSoon:"即将推出。"},cn={lang:"语言",name:"姓名",add:"添加另一种语言的姓名",remove:"删除此姓名"},dn={header:an,gallery:on,details:rn,ticket:sn,donation:ln,multiLangEntry:cn},un={about:{rmpGallery:"RMP畫廊",title:"關於",railmapgen:"一個 Rail Map Toolkit 項目",desc:"瀏覽、設置、提交你製作的RMP模板！",content1:"謹以此紀念我們曾擁有的自由與平等。",content2:"06/01/2022於上海",contributors:"貢獻者",coreContributors:"核心貢獻者",templateAdministrators:"管理員","52PD":"特別感謝他維護這些模板的持續付出。",linchen1965:"特別感謝他維護這些模板的持續付出。",contactUs:"聯絡我們",github:"項目存儲庫",githubContent:"遇到問題？在這裡搜索或提出問題！",slack:"Slack 群組",slackContent:"在這些 Slack 頻道中聊天!"}},hn={type:{realWorld:"現實世界",fantasy:"幻想世界"}},mn={title:"詳情",updateHistory:"更新歷史",import:"如果您正在使用Rail Map Painter或Rail Map Toolkit，您可以直接使用此模板"},pn={file:"項目文件",link:"參考鏈接（官方網站優先）",linkPlaceHolder:"輸入您獲取有效數據的鏈接",justification:"理由（僅英文）",justificationPlaceHolder:"您做出這些更改的原因",donation:"捐贈",donationPlaceHolder:"按照捐贈說明貼上代碼到此處",reason:"原因",reasonPlaceHolder:"您進行這些更改的原因",cityName:"城市名稱（必需為英文）",description:"描述（可選，必需為英文）",back:"返回列表",submit:"提交",submitTemplate:"提交模板",instruction:"您現在可以將以下文本複製到新問題的正文中。",openIssue:"複製問題正文並打開問題",instructionFile:"在新問題的正文末尾上傳下載的文件。",instructionFileHint1:"確認 ",instructionFileHint2:" 消失後提交您的問題。",download:"下載文件"},gn={title:"早鳥捐款",content1:"感謝您考慮捐贈 Rail Map Toolkit。您的支持將使我們能夠繼續更新和增強這個優秀的項目。",content2:"通過捐贈，您還可以上傳您的作品，這些作品可以在此畫廊展示，並通過自動生成的隨機鏈接分享。例如：",content3:"我們鼓勵您今天開立問題，以確保在捐款開放之前獲得個性化鏈接特權的早鳥獎金。請注意，個性化鏈接在捐贈開放後的費用會更高。",content4:"再次感謝您支持 Rail Map Toolkit。您可以在下面找到條款和條件，以及使用各種方法（即將推出）進行捐贈。",typeA:"18 元人民幣",typeB:"28 元人民幣",uniqueLink:"唯一分享鏈接",duration:"有效期為1年",noUpdates:"無更新",unlimitedUpdates:"不限更新",personalizedLink:"個性化分享鏈接",termsAndConditions:"條款和條件",earlyBirdBonus:"早鳥獎金！",becomeAnEarlyBird:"成為早鳥",terms1:"捐贈不可退還，無論任何情況。",terms2:"任何付款都應僅用於捐贈目的，並不構成任何產品或服務的購買合同。",terms3:"此外，我們將把捐贈的用戶添加到可以更新畫廊的白名單中。",terms4:"捐贈並上傳作品後，作品將立即發布，最遲在24小時後可訪問。",terms5:"早鳥捐款不涉及任何交易。我們計劃在今年推出捐贈功能，並合併所有上傳的作品。",terms6:"捐贈功能推出後，您有60天時間進行捐贈和上傳數據，我們將在 Github 的問題跟踪器中回復您。未能及時捐贈和上傳數據將導致失去使用個性化鏈接的資格。",terms7:"基於捐贈的順序，個性化鏈接可能會被佔用，在衝突情況下。",terms8:"所有提供的數據將公開在互聯網上供任何人瀏覽。",terms9:"連結將在添加到畫廊後的365天內有效。在連結到期之前再次捐贈並重新請求將延長其有效期，直到您不再捐贈或重新請求為止。過期後，先前獲得的連結可能會被撤銷並分配給其他作品。",terms10:"上傳的作品不得包含任何政治傾向、色情、暴力或侵犯知識產權。不適當的作品和連結將被阻止和刪除。",terms11:"我們相信在自由和開放的互聯網環境中。如果您有一個可以全球用戶訪問的統一資源定位符地址，您可以使用帶有額外參數的連結共享您的作品。此功能將在捐贈功能開放後推出，最晚在開放後180天內。",terms12:"我們有權解釋條款和條件。我們保留修改、添加或刪除這些條款的權利，而無需事先通知。",methodCN:"通過支付寶或微信捐贈人民幣",methodUS:"通過Paypal或Visa卡捐贈美元",comingSoon:"即將推出。"},yn={lang:"語言",name:"名稱",add:"添加其他語言的名稱",remove:"刪除此名稱"},bn={header:un,gallery:hn,details:mn,ticket:pn,donation:gn,multiLangEntry:yn},fn={about:{rmpGallery:"RMP ギャラリー",title:"について",railmapgen:"Rail Map Toolkit プロジェクト",desc:"ここで RMP テンプレートを閲覧、設定、提出できます！",content1:"かつて私たちが持っていた自由と平等の全てを偲びます。",content2:"06/01/2022 上海",contributors:"貢献者",coreContributors:"主要貢献者",templateAdministrators:"管理者","52PD":"テンプレートのメンテナンスに継続的に取り組んでいただいたことに感謝します。",linchen1965:"テンプレートのメンテナンスに継続的に取り組んでいただいたことに感謝します。",contactUs:"お問い合わせ",github:"プロジェクトリポジトリ",githubContent:"問題が発生した場合は、ここで検索するか問題を上げてください。",slack:"Slack グループ",slackContent:"これらの Slack チャンネルでチャットしましょう！"}},kn={type:{realWorld:"リアルワールド",fantasy:"ファンタジー"}},wn={title:"詳細",updateHistory:"更新履歴",import:"Rail Map PainterまたはRail Map Toolkitを使用している場合、このテンプレートを直接使用することができます"},Sn={file:"プロジェクトファイル",link:"参照リンク（公式サイトが望ましい）",linkPlaceHolder:"有効なデータを取得したリンクを入力してください",justification:"正当化（英語のみ）",justificationPlaceHolder:"変更を行った理由",donation:"寄付コード",donationPlaceHolder:"寄付手順に従って、ここにコードを貼り付けてください。",reason:"理由",reasonPlaceHolder:"変更を行う理由",cityName:"都市名（英語が必要です）",description:"説明（任意、英語が必要です）",back:"リストに戻る",submit:"提出する",submitTemplate:"テンプレートを提出する",instruction:"以下のテキストを新しい問題の本文にコピーできます。",openIssue:"問題本文をコピーして問題を開く",instructionFile:"以下のファイルを新しい問題の本文の最後にアップロードしてください。",instructionFileHint1:"消える前に問題を送信してください。",instructionFileHint2:"",download:"ファイルをダウンロードする"},Cn={title:"アーリーバード寄付",content1:"Rail Map Toolkitへの寄付をご検討いただきありがとうございます。あなたのサポートによって、この優れたプロジェクトの更新と向上を続けることができます。",content2:"寄付することで、あなたの作品をアップロードしてこのギャラリーで展示し、自動生成されたランダムリンクで共有することもできます。例：",content3:"寄付が可能になる前に、アーリーバードボーナスとして個人用リンク特典を確保するために今すぐ問題を開くようお勧めします。なお、個人用リンクは寄付が開始された後に費用がかかります。",content4:"Rail Map Toolkitをサポートしていただきありがとうございます。以下に利用規約や各種寄付方法（近日公開予定）などがあります。",typeA:"2.99 USD",typeB:"4.99 USD",uniqueLink:"一意の共有リンク",duration:"1年間有効",noUpdates:"更新なし",unlimitedUpdates:"無制限の更新",personalizedLink:"個人用共有リンク",termsAndConditions:"利用規約",earlyBirdBonus:"アーリーバードボーナス！",becomeAnEarlyBird:"アーリーバードになる",terms1:"寄付はいかなる場合においても返金できません。",terms2:"支払いは寄付目的のみとし、製品またはサービスの購入の契約を構成するものではありません。",terms3:"また、寄付をしたユーザーをギャラリーの更新可能なホワイトリストに追加します。",terms4:"寄付と作品のアップロード後、すぐに公開され、それ以降24時間以内にアクセスできます。",terms5:"アーリーバード寄付には取引は含まれません。寄付機能を今年中に立ち上げ、すべてのアップロードされた作品を統合する予定です。",terms6:"寄付機能が立ち上がった後、60日以内に寄付してデータをアップロードし、Githubの問題トラッカーで返信します。適時に寄付とデータをアップロードしなかった場合、個人用リンクを使用する権利が失われることになります。",terms7:"個人用リンクは、寄付の順序に基づいて取得される場合があります。",terms8:"提供されたすべてのデータは、誰でも閲覧できるようにインターネット上で公開されます。",terms9:"リンクは、ギャラリーに追加されてから365日以内に有効です。リンクが期限切れになる前に再度寄付して再要求すると、その有効期限が延長されます。期限切れ後、以前に入手したリンクは取り消され、他の作品に割り当てられる可能性があります。",terms10:"アップロードされた作品には、政治的なバイアス、ポルノ、暴力、知的財産権の侵害が含まれていてはなりません。不適切な作品やリンクはブロックされ、削除されます。",terms11:"私たちは自由でオープンなインターネットを信じています。グローバルユーザーがアクセスできるUniform Resource Locatorアドレスを持っている場合、追加パラメータを含むリンクを使用して作品を共有できます。この機能は、寄付機能が開始された後に最大180日以内に立ち上げられます。",terms12:"私たちは利用規約を解釈する権利を持っています。これらの条項を修正、追加、または削除する権利を予告なく行使することがあります。",methodCN:"AlipayまたはWechat Payを介してCNYで寄付",methodUS:"PaypalまたはVisaカードを使用してUSDで寄付",comingSoon:"近日公開予定。"},vn={lang:"言語",name:"名前",add:"他の言語で名前を追加する",remove:"この名前を削除する"},Rn={header:fn,gallery:kn,details:wn,ticket:Sn,donation:Cn,multiLangEntry:vn},An={about:{rmpGallery:"RMP 갤러리",title:"대함",railmapgen:"Rail Map Toolkit 프로젝트",desc:"여기에서 RMP 템플릿을 검색하고 설정하고 제출하세요!",content1:"우리가 가졌던 자유와 평등을 기념한다.",content2:"2022년 6월 1일 상해",contributors:"기여자",coreContributors:"핵심 기여자",templateAdministrators:"관리자","52PD":"템플릿 유지를 위한 지속적인 노력에 대해 특별히 감사드립니다.",linchen1965:"템플릿 유지를 위한 지속적인 노력에 대해 특별히 감사드립니다.",contactUs:"우리에게 연락하기",github:"프로젝트 저장소",githubContent:"무슨 문제라도 있나요? 여기서 문제를 검색하거나 제기하십시오!",slack:"슬랙 그룹",slackContent:"이 슬랙 채널에서 채팅해요!"}},Pn={type:{realWorld:"실제 세계의",fantasy:"판타지"}},Ln={title:"세부 정보",updateHistory:"업데이트 이력",import:"Rail Map Painter 또는 Rail Map Toolkit을 사용 중이라면이 템플릿을 직접 사용할 수 있습니다"},Mn={file:"프로젝트 파일",link:"참조 링크 (공식 웹사이트 우선)",linkPlaceHolder:"유효한 데이터를 얻은 링크를 입력하세요",justification:"정당화 (영어만 가능)",justificationPlaceHolder:"변경 사유",donation:"기부 코드",donationPlaceHolder:"기부 지시에 따라 코드를 여기에 붙여넣으세요",reason:"이유",reasonPlaceHolder:"변경 사유",cityName:"도시 이름 (영어 필수)",description:"설명 (선택, 영어 필수)",back:"목록으로 돌아가기",submit:"제출",submitTemplate:"템플릿 제출",instruction:"이제 다음 텍스트를 새 이슈의 본문에 복사할 수 있습니다.",openIssue:"이슈 본문 복사 및 이슈 열기",instructionFile:"다음 파일을 다운로드하고, 새 이슈의 끝에 업로드해주세요",instructionFileHint1:"확인 후 이슈를 제출해주세요. ",instructionFileHint2:"이 사라지면서 제출이 완료됩니다.",download:"파일 다운로드"},En={title:"얼리버드 기부",content1:"Rail Map Toolkit에 기부를 고려해 주셔서 감사합니다. 여러분의 지원으로 이 탁월한 프로젝트를 계속 업데이트하고 개선할 수 있습니다.",content2:"기부함으로써 여러분은 작업물을 업로드하고 해당 갤러리에서 쇼케이스되며 자동 생성된 무작위 링크를 통해 공유할 수도 있습니다. 예시: ",content3:"우리는 기부가 가능해지기 전 얼리버드 보너스로 맞춤형 링크 권한을 확보하기 위해 오늘 문제를 개설할 것을 권장합니다. 맞춤형 링크는 기부가 시작된 후에는 더 비싸질 것입니다.",content4:"Rail Map Toolkit의 지원에 다시 한 번 감사드립니다. 아래 약관 및 다양한 방법으로 기부하는 방법을 찾을 수 있습니다(곧 제공 예정).",typeA:"2.99 USD",typeB:"4.99 USD",uniqueLink:"고유 공유 링크",duration:"1년 유효",noUpdates:"업데이트 없음",unlimitedUpdates:"무제한 업데이트",personalizedLink:"맞춤형 공유 링크",termsAndConditions:"약관 및 조건",earlyBirdBonus:"얼리버드 보너스!",becomeAnEarlyBird:"얼리버드로 등록하세요",terms1:"기부금은 어떤 경우에도 환불이 불가능합니다.",terms2:"모든 지불은 기부 목적으로만 사용됩니다. 제품 또는 서비스 구매를 위한 계약으로 간주되지 않습니다.",terms3:"또한, 기부한 사용자를 갤러리 업데이트가 가능한 화이트리스트에 추가할 것입니다.",terms4:"기부 후 작업물을 업로드하면 즉시 게시되며 24시간 이내에 액세스할 수 있습니다.",terms5:"얼리버드 기부는 어떠한 거래도 포함하지 않습니다. 기부 기능을 올해에 출시하고 모든 업로드된 작업물을 병합할 예정입니다.",terms6:"기부 기능이 출시되면 60일 이내에 기부하고 데이터를 업로드해야 하며, 저희는 Github의 이슈 추적기에서 답변할 것입니다. 제때 기부 및 데이터 업로드를 하지 않으면 맞춤형 링크 사용 자격을 상실하게 됩니다.",terms7:"맞춤형 링크는 기부 순서에 따라 할당될 수 있습니다.",terms8:"제공된 모든 데이터는 누구나 인터넷에서 검색할 수 있는 공개적으로 이용 가능합니다.",terms9:"갤러리에 추가된 후 365일 이내의 링크만 유효합니다. 링크가 만료되기 전에 기부를 다시하고 재요청하면 기부를 중단하거나 재요청하지 않는 한 유효 기간이 연장됩니다. 만료된 후, 이전에 얻은 링크는 철회되어 다른 작품에 할당될 수 있습니다.",terms10:"업로드된 작업은 어떤 정치적 편향, 음란물, 폭력 또는 지적 재산권 침해도 포함해서는 안됩니다. 부적절한 작업과 링크는 차단되어 제거됩니다.",terms11:"우리는 자유롭고 개방된 인터넷을 믿습니다. 전 세계 사용자가 액세스할 수 있는 URL 주소가 있다면, 추가 매개변수가 있는 링크를 사용하여 작업을 공유할 수 있습니다. 이 기능은 기부 기능이 열린 후 최대 180일 이내에 시작됩니다.",terms12:"이용 약관은 당사가 해석하는 권리가 있으며, 사전 예고 없이 이 약관을 수정, 추가 또는 삭제할 권리가 있습니다.",methodCN:"알리페이 또는 위챗 페이를 통해 CNY로 기부하기",methodUS:"Paypal 또는 Visa 카드를 통해 USD로 기부하기",comingSoon:"곧 제공됩니다."},Tn={lang:"언어",name:"이름",add:"다른 언어의 이름 추가",remove:"이 이름 제거"},zn={header:An,gallery:Pn,details:Ln,ticket:Mn,donation:En,multiLangEntry:Tn},Hn=new S.I18nBuilder().use(Ct).withAppName("RMP Gallery").withLng(S.getLanguage()).withResource("en",nn).withResource("zh-Hans",dn).withResource("zh-Hant",bn).withResource("ja",Rn).withResource("ko",zn).build();let Re;const Un=()=>{Re=vt(document.getElementById("root")),Re.render(e(Rt.StrictMode,{children:e(At,{store:Te,children:e(Pt,{i18n:Hn,children:e(Jt,{})})})}))};S.ready().then(()=>{Un(),S.injectCss(),S.event(ce.APP_LOAD,{})});export{Bn as __vite_legacy_guard};
