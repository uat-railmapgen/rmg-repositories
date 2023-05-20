import{c as be,a as fe,b as ye,u as we,d as Se,e as A,f as T,g as ke,R as k,j as a,M as j,h as e,i as I,k as U,l as _,m as B,n as $,V as D,I as H,H as v,T as m,L as Ce,o as ve,F as L,A as z,p as Re,q as ie,r as w,s as Ae,t as ze,v as Le,w as Me,x as Pe,y as Oe,z as De,B as xe,C as Ee,D as Y,E as Te,G as je,J as Ie,K as Ue,S as _e,N as Be,O as $e,P as M,Q as N,U as le,W as S,X as He,Y as G,Z as ce,_ as Ne,$ as E,a0 as Ge,a1 as Fe,a2 as de,a3 as K,a4 as Q,a5 as We,a6 as Ve,a7 as qe,a8 as Je,a9 as P,aa as O,ab as Ze,ac as Ye,ad as Ke,ae as Qe,af as Xe,ag as et,ah as tt,ai as at,aj as nt,ak as rt,al as st,am as ot,an as it,ao as X,ap as ee,aq as te,ar as lt,as as ct,at as dt,au as ht,av as ut}from"./vendor-eeda8e7a.js";function Nt(){import.meta.url,import("_").catch(()=>1);async function*i(){}}(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&t(u)}).observe(document,{childList:!0,subtree:!0});function c(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(o){if(o.ep)return;o.ep=!0;const n=c(o);fetch(o.href,n)}})();const mt={gallery:{shanghai:{contributors:["3353040"],name:{en:"Shanghai","zh-Hans":"上海","zh-Hant":"上海"},lastUpdateOn:1683810518708}}},he=be({name:"app",initialState:mt,reducers:{setGallery:(i,r)=>{i.gallery=r.payload}}}),{setGallery:pt}=he.actions,gt=he.reducer,bt=fe(),ue=ye({reducer:{app:gt},middleware:i=>i().prepend(bt.middleware)}),ft=()=>we(),me=Se;window.rmgStore=ue;var F=(i=>(i.APP_LOAD="APP_LOAD",i.UPLOAD_TEMPLATES="UPLOAD_TEMPLATES",i))(F||{});const ae="Hi RMP team! I would like to contribute to the gallery with the data below.",ne="**Do not edit lines below, they are meant for bots only!!!**";function W(){const{i18n:i}=A();return r=>{var c,t;return(t=(c=i.languages.map(o=>r[o]).find(o=>o!==void 0))!=null?c:r.en)!=null?t:"(Translation Error)"}}const yt=i=>{const{city:r,isOpen:c,onClose:t}=i,o=T(),n=ke(),{t:u}=A(),C=W(),[l,h]=k.useState({name:{en:""},desc:{en:""},reference:"",updateHistory:[]});k.useEffect(()=>{fetch(`resources/metadata/${r}.json`).then(g=>g.json()).then(g=>h({...g,justification:""}))},[r]);const f=()=>{const g=structuredClone(l),R=(({updateHistory:V,...x})=>({...x,justification:""}))(g);o("/new",{state:{metadata:R}})},s=`https://${window.location.hostname}/rmp/s/${r}`,p={title:u("Link copied."),status:"success",duration:9e3,isClosable:!0};return a(j,{isOpen:c,onClose:t,size:"6xl",scrollBehavior:"inside",children:[e(I,{}),a(U,{children:[e(_,{children:u("Details")}),e(B,{}),a($,{paddingBottom:10,children:[e(D,{children:e("a",{href:`resources/thumbnails/${r}.png`,target:"_blank",rel:"noopener noreferrer",children:e(H,{src:`resources/thumbnails/${r}.png`,alt:r,borderRadius:"lg"})})}),e(v,{as:"h5",size:"md",mt:3,mb:2,children:C(l.name)}),e(m,{children:C(l.desc)}),e(v,{as:"h5",size:"sm",mt:3,mb:2,children:u("Update History")}),e(Ce,{children:l.updateHistory.map(g=>e(ve,{children:a(L,{flexDirection:"row",alignItems:"center",children:[e(z,{size:"sm",mr:"2",src:`https://avatars.githubusercontent.com/u/${g.id}`,cursor:"pointer",onClick:()=>fetch(`https://api.github.com/user/${g.id}`).then(R=>R.json()).then(R=>window.open(`https://github.com/${R.login}`))}),e(Re,{mr:"auto",href:`https://github.com/railmapgen/rmp-gallery/issues/${g.issueNumber}`,isExternal:!0,children:g.reason}),e(m,{children:new Date(g.time).toLocaleString(void 0,{hour12:!1})})]})},g.issueNumber))})]}),a(ie,{children:[e(w,{"aria-label":"Like",variant:"ghost",icon:e(Ae,{}),isDisabled:!0}),e(w,{"aria-label":"Favorite",variant:"ghost",icon:e(ze,{}),isDisabled:!0}),e(Le,{label:s,children:e(w,{"aria-label":"Share",variant:"ghost",icon:e(Me,{}),onClick:()=>{navigator.clipboard.writeText(s),n(p)}})}),e(w,{"aria-label":"Edit",variant:"ghost",icon:e(Pe,{}),onClick:f}),e("a",{href:`resources/real_world/${r}.json`,target:"_blank",rel:"noopener noreferrer",children:e(w,{"aria-label":"Download",variant:"ghost",icon:e(Oe,{})})}),e(w,{"aria-label":"Import",variant:"ghost",icon:e(De,{}),isDisabled:!0})]})]})]})};function wt(){const i=T(),r=ft(),c=W(),{t}=A(),{gallery:o}=me(s=>s.app),n=()=>{i("/new",{state:{metadata:{name:{en:""},desc:{en:""},reference:"",justification:""}}}),S.event(F.UPLOAD_TEMPLATES,{})},[u,C]=k.useState("shanghai"),[l,h]=k.useState(!1),f=s=>{h(!0),C(s)};return k.useEffect(()=>{fetch("resources/real_world.json").then(s=>s.json()).then(s=>r(pt(s)))},[]),a(xe,{isLazy:!0,isFitted:!0,children:[a(Ee,{children:[e(Y,{children:t("gallery.type.realWorld")}),e(Y,{isDisabled:!0,children:t("gallery.type.fantasy")})]}),e(Te,{children:a(je,{children:[a(L,{flexWrap:"wrap",children:[Object.keys(o).map(s=>a(Ie,{variant:"elevated",minWidth:"300",m:"2",children:[a(Ue,{children:[e(H,{src:`resources/thumbnails/${s}@300.png`,alt:s,borderRadius:"lg"}),e(_e,{mt:"6",spacing:"3",children:e(v,{size:"lg",children:c(o[s].name)})})]}),a(Be,{children:[e($e,{max:3,children:o[s].contributors.map(p=>e(z,{src:`https://avatars.githubusercontent.com/u/${p}`},p))}),e(M,{variant:"solid",colorScheme:"blue",ml:"auto",onClick:()=>f(s),children:t("Details")})]})]},s)),e(N,{onClick:n,position:"fixed",bottom:"20px",right:"20px",zIndex:3,children:e(w,{"aria-label":"new",size:"lg",icon:e(le,{}),colorScheme:"blue",variant:"solid"})})]}),e(yt,{city:u,isOpen:l,onClose:()=>h(!1)})]})})]})}const St=i=>new Promise(r=>{const c=new FileReader;c.onloadend=()=>r(c.result),c.readAsText(i)}),re=(i,r,c)=>{if(r!==null){const t=document.createElement("details");return t.setAttribute("repo","rmp-gallery"),t.setAttribute("type",i),Object.entries(c).forEach(([o,n])=>{t.setAttribute(o,n)}),t.textContent=r,t.outerHTML}else return""},kt=(i,r,c)=>{const t=new Blob([c],{type:r});Ct(i,t)},Ct=(i,r)=>{const c=window.URL.createObjectURL(r),t=document.createElement("a");t.href=c,t.download=i,document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(c)},vt={"& > div:first-of-type":{flex:1}};function se(i){const{translations:r,onUpdate:c,onLangSwitch:t,onRemove:o}=i,{t:n}=A(),u=W(),C=(h,f)=>[{type:"select",label:n("Language"),value:h,options:Object.entries(E).reduce((s,p)=>({...s,[p[0]]:u(p[1])}),{}),disabledOptions:r.filter(s=>s[0]!==h).map(s=>s[0]),onChange:s=>t(h,s)},{type:"input",label:n("Name"),value:f,onChange:s=>c(h,s),validator:s=>!!s}],l=()=>{const h=Object.keys(E).filter(f=>!r.find(s=>s[0]===f))[0];c(h,"")};return e(He,{direction:"column",children:r.map(([h,f],s,p)=>a(G,{sx:vt,children:[e(ce,{fields:C(h,f),noLabel:s>0}),s===p.length-1?e(w,{size:"sm",variant:"ghost","aria-label":n("Add a name in another language"),title:n("Add a name in another language"),onClick:l,icon:e(le,{})}):e(N,{minW:8}),p.length>1&&e(w,{size:"sm",variant:"ghost","aria-label":n("Remove this name"),title:n("Remove this name"),onClick:()=>o(h),icon:e(Ne,{})})]},s))})}const Rt={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}};function At(){var q,J;const{state:{metadata:i}}=Ge(),r=T(),c=me(d=>d.app.gallery),{t}=A(),o=()=>r("/"),n=k.useRef(null),[u,C]=k.useState(!1),[l,h]=k.useState(i),[f,s]=k.useState(""),p=(J=(q=l.name.en)==null?void 0:q.replace(/[^A-Za-z0-9]/g,"").toLowerCase())!=null?J:"",g=[ae,ne,re("metadata",JSON.stringify(l,null,4),{}),re("real_world",f,{compress:"zipson",city:p})].join(`

`),R=new URLSearchParams({labels:"resources",title:`Resources: ${p in c?"Update":"New"} template of ${p}`}),V=async d=>{var y;const b=(y=d.target.files)==null?void 0:y[0];if(console.log("handleFileUpload():: received file",b),!!b){if(b.type!=="application/json"){alert("Invalid file type!"),d.target.value="";return}try{const Z=await St(b);s(Je.stringify(JSON.parse(Z.trim())).trim())}catch(Z){alert("Invalid file!"),d.target.value=""}}},x=async()=>{n!=null&&n.current&&(n.current.select(),await navigator.clipboard.writeText(g)),window.open("https://github.com/railmapgen/rmp-gallery/issues/new?"+R.toString(),"_blank")},pe=()=>{kt(`${p}.txt`,"application/json",g);const d=new URLSearchParams({labels:"resources",title:`Resources: ${p in c?"Update":"New"} template of ${p}`,body:[ae,ne,""].join(`

`)});window.open("https://github.com/railmapgen/rmp-gallery/issues/new?"+d.toString(),"_blank")},ge=[{type:"custom",label:t("Project file"),component:e(Fe,{variant:"flushed",size:"xs",type:"file",accept:".json",onChange:V}),minW:250},{type:"input",label:t("Reference link (Official website preferred)"),placeholder:"Enter the link where you get the valid data",value:l.reference,onChange:d=>h({...l,reference:d}),minW:250},{type:"input",label:t("Justification (English only)"),placeholder:"The reason why you make these changes",validator:d=>/^[a-zA-Z0-9. -]+$/.test(d),value:l.justification,onChange:d=>h({...l,justification:d}),minW:250}];return a(de,{sx:Rt,children:[a(L,{children:[e(ce,{fields:ge}),e(K,{label:t("City Name (English required)"),children:e(se,{translations:Object.entries(l.name),onUpdate:(d,b)=>h({...l,name:{...l.name,[d]:b}}),onLangSwitch:(d,b)=>{const y=structuredClone(l);y.name[b]=y.name[d],delete y.name[d],h(y)},onRemove:d=>{const b=structuredClone(l);delete b.name[d],h(b)}})}),e(K,{label:t("Description (Optional, English required)"),children:e(se,{translations:Object.entries(l.desc),onUpdate:(d,b)=>h({...l,desc:{...l.desc,[d]:b}}),onLangSwitch:(d,b)=>{const y=structuredClone(l);y.desc[b]=y.desc[d],delete y.desc[d],h(y)},onRemove:d=>{const b=structuredClone(l);delete b.desc[d],h(b)}})})]}),a(L,{children:[e(M,{size:"sm",onClick:o,children:t("Back to list")}),e(G,{ml:"auto",children:e(M,{size:"sm",colorScheme:"primary",isDisabled:f===""||l.reference===""||l.justification===""||!/^[a-zA-Z0-9. -]+$/.test(l.justification)||Object.keys(l.desc).length>0&&!("en"in l.desc)||p==="",onClick:()=>C(!0),children:t("Submit")})})]}),a(j,{isOpen:u,onClose:()=>C(!1),children:[e(I,{}),a(U,{children:[e(_,{children:t("Submit template")}),e(B,{}),e($,{children:g.length<100*100?a(Q,{children:[e(m,{children:t("You may now copy the following text into your new issue's body.")}),e(We,{mt:"2",mb:"4"}),e(Ve,{ref:n,isReadOnly:!0,defaultValue:g,onClick:({target:d})=>d.select()})]}):a(Q,{children:[e(m,{children:t("Upload the file downloaded below at the end of your new issue's body.")}),a(m,{children:[t("Make sure to submit your issue after "),e(qe,{children:t("Uploading your files... (1/1)")}),t(" is disappeared.")]})]})}),e(ie,{children:g.length<100*100?e(M,{colorScheme:"primary",onClick:x,children:t("Copy issue body and open an issue")}):e(M,{colorScheme:"primary",onClick:pe,children:t("Download file")})})]})]})]})}const zt="/rmp-gallery/assets/github-mark-7a0dd11e.svg",Lt="/rmp-gallery/assets/slack-mark-19839006.svg",Mt=i=>{const{isOpen:r,onClose:c}=i,{t}=A(),o=S.getAppVersion();return a(j,{isOpen:r,onClose:c,size:"xl",scrollBehavior:"inside",children:[e(I,{}),a(U,{children:[e(_,{children:t("header.about.title")}),e(B,{}),a($,{paddingBottom:10,children:[a(L,{direction:"row",children:[e(H,{boxSize:"128px",src:"/rmp-gallery/logo192.png"}),a(L,{direction:"column",width:"100%",alignItems:"center",justifyContent:"center",children:[e(m,{fontSize:"xl",as:"b",children:t("header.about.rmpGallery")}),e(m,{children:o}),e(m,{}),e(m,{fontSize:"sm",children:t("header.about.railmapgen")})]})]}),e(N,{margin:5,children:e(m,{fontSize:"xl",children:t("header.about.desc")})}),e(v,{as:"h5",size:"sm",mt:3,mb:2,children:t("header.about.contributors")}),e(v,{as:"h6",size:"xs",my:2,children:t("header.about.coreContributors")}),e(D,{children:a(P,{size:"lg",w:"85%",onClick:()=>window.open("https://github.com/thekingofcity","_blank"),cursor:"pointer",children:[e(z,{src:"https://github.com/thekingofcity.png",size:"lg",my:2,ml:-1,mr:2}),a(O,{display:"block",width:"100%",children:[e(m,{fontSize:"lg",fontWeight:"bold",mb:1,children:"thekingofcity"}),e(m,{fontSize:"sm",children:t("header.about.content1")}),e(m,{fontSize:"sm",align:"right",mb:1,children:t("header.about.content2")})]})]})}),e(v,{as:"h6",size:"xs",my:2,children:t("header.about.templateAdministrators")}),e(D,{children:["52PD","linchen1965"].map(n=>a(P,{size:"lg",w:"85%",onClick:()=>window.open(`https://github.com/${n}`,"_blank"),cursor:"pointer",children:[e(z,{src:`https://github.com/${n}.png`,size:"lg",my:2,ml:-1,mr:2}),a(O,{display:"block",width:"100%",children:[e(m,{fontSize:"lg",fontWeight:"bold",mb:1,children:n}),e(m,{fontSize:"sm",mb:1,children:t(`header.about.${n}`)})]})]},n))}),e(v,{as:"h5",size:"sm",mt:3,mb:2,children:t("header.about.contactUs")}),a(D,{children:[a(P,{size:"lg",w:"85%",onClick:()=>window.open("https://github.com/railmapgen/rmp-gallery/issues","_blank"),cursor:"pointer",children:[e(z,{src:zt,size:"lg",my:2,ml:-1,mr:2}),a(O,{display:"block",width:"100%",children:[e(m,{fontSize:"lg",fontWeight:"bold",mb:1,children:t("header.about.github")}),e(m,{fontSize:"sm",children:t("header.about.githubContent")})]})]}),a(P,{size:"lg",w:"85%",onClick:()=>window.open("https://join.slack.com/t/railmapgenerator/shared_invite/zt-1odhhta3n-DdZF~fnVwo_q0S0RJmgV8A","_blank"),cursor:"pointer",children:[e(z,{src:Lt,size:"lg",my:2,ml:-1,mr:2}),a(O,{display:"block",width:"100%",children:[e(m,{fontSize:"lg",fontWeight:"bold",mb:1,children:t("header.about.slack")}),e(m,{fontSize:"sm",children:t("header.about.slackContent")}),e(m,{fontSize:"sm",as:"i",children:"#rmg, #rmp, #gallery, #random"})]})]})]})]})]})]})};function Pt(){const{t:i}=A(),r=S.getEnv(),c=S.getAppVersion(),[t,o]=k.useState(!1),n=u=>{S.setLanguage(u),S.getI18nInstance().changeLanguage(u)};return a(Ze,{children:[e(v,{as:"h4",size:"md",children:i("header.about.rmpGallery")}),e(Ye,{environment:r,version:c}),a(G,{ml:"auto",children:[a(Ke,{children:[e(Qe,{as:w,icon:e(Xe,{}),variant:"ghost",size:"sm"}),e(et,{children:tt.map(u=>e(at,{onClick:()=>n(u),children:E[u][u]},u))})]}),e(w,{size:"sm",variant:"ghost","aria-label":"Help",icon:e(nt,{}),onClick:()=>o(!0)})]}),e(Mt,{isOpen:t,onClose:()=>o(!1)})]})}function Ot(){return e(rt,{basename:"/rmp-gallery/",children:e(st,{children:a(ot,{children:[e(Pt,{}),e(de,{children:a(it,{children:[e(X,{path:"/",element:e(ee,{suspenseFallback:e(te,{isIndeterminate:!0}),children:e(wt,{})})}),e(X,{path:"/new",element:e(ee,{suspenseFallback:e(te,{isIndeterminate:!0}),children:e(At,{})})})]})})]})})})}const Dt={about:{rmpGallery:"RMP Gallery",title:"About",railmapgen:"A railmapgen project",desc:"Browse, set, and submit your RMP template here!",content1:"In memory of all the freedom and equality we once had.",content2:"06/01/2022 in Shanghai",contributors:"Contributors",coreContributors:"Core Contributors",templateAdministrators:"Administrators","52PD":"Special thanks for his continuous effort in maintaining templates.",linchen1965:"Special thanks for his continuous effort in maintaining templates.",contactUs:"Contact Us",github:"Project Repository",githubContent:"Face any problems? Search or raise an issue here!",slack:"Slack Group",slackContent:"Chat in these Slack channels!"}},xt={type:{realWorld:"Real World",fantasy:"Fantasy"}},Et={header:Dt,gallery:xt},Tt={about:{rmpGallery:"RMP画廊",title:"About",railmapgen:"一个railmapgen项目",desc:"浏览、设置、提交你制作的RMP模板！",content1:"谨以此纪念我们曾拥有的自由与平等。",content2:"06/01/2022于上海",contributors:"贡献者",coreContributors:"核心贡献者",templateAdministrators:"管理员","52PD":"特别感谢他维护这些模板的持续付出。",linchen1965:"特别感谢他维护这些模板的持续付出。",contactUs:"联系我们",github:"项目仓库",githubContent:"遇到任何问题？在这里搜索或提出一个问题！",slack:"Slack群组",slackContent:"在这些Slack频道中讨论!"}},jt={header:Tt},It={about:{rmpGallery:"RMP畫廊",title:"關於",railmapgen:"一個railmapgen項目",desc:"瀏覽、設置、提交你製作的RMP模板！",content1:"謹以此紀念我們曾擁有的自由與平等。",content2:"06/01/2022於上海",contributors:"貢獻者",coreContributors:"核心貢獻者",templateAdministrators:"管理員","52PD":"特別感謝他維護這些模板的持續付出。",linchen1965:"特別感謝他維護這些模板的持續付出。",contactUs:"聯繫我們",github:"項目倉庫",githubContent:"遇到任何問題？在這裡搜索或提出一個問題！",slack:"Slack群組",slackContent:"在這些Slack頻道中討論!"}},Ut={header:It},_t={about:{rmpGallery:"RMP 갤러리",title:"대함",railmapgen:"railmapgen 프로젝트",desc:"Browse, set, and submit your RMP template here!",content1:"우리가 가졌던 자유와 평등을 기념한다.",content2:"2022년 6월 1일 상해",contributors:"기여자",coreContributors:"핵심 기여자",templateAdministrators:"Administrators","52PD":"Special thanks for his continuous effort in maintaining templates.",linchen1965:"Special thanks for his continuous effort in maintaining templates.",contactUs:"우리에게 연락하기",github:"프로젝트 저장소",githubContent:"무슨 문제라도 있나요? 여기서 문제를 검색하거나 제기하십시오!",slack:"슬랙 그룹",slackContent:"이 슬랙 채널에서 채팅해요!"}},Bt={header:_t},$t=new S.I18nBuilder().use(lt).withAppName("RMP Gallery").withLng(S.getLanguage()).withResource("en",Et).withResource("zh-Hans",jt).withResource("zh-Hant",Ut).withResource("ko",Bt).build();let oe;const Ht=()=>{oe=ct(document.getElementById("root")),oe.render(e(dt.StrictMode,{children:e(ht,{store:ue,children:e(ut,{i18n:$t,children:e(Ot,{})})})}))};S.ready().then(()=>{Ht(),S.injectCss(),S.event(F.APP_LOAD,{})});export{Nt as __vite_legacy_guard};
