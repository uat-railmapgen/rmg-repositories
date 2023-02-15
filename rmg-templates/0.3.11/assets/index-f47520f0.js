import{R as B,i as y,a as O,r as h,L as l,u as P,j as f,b as z,c as i,H,d as x,e as U,M as D,f as $,I as F,g as W,h as q,k as C,l as E,B as V,m as J,n as Y,o as w,p as L,q as N,s as I,t as G,v as K,w as Q,x as X,y as Z,z as ee,A as te,P as ne,C as ae,D as oe,E as se}from"./vendor-a8fb487b.js";function Ve(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const ie="modulepreload",re=function(e){return"/rmg-templates/"+e},A={},j=function(n,t,o){if(!t||t.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=re(s),s in A)return;A[s]=!0;const r=s.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!o)for(let p=a.length-1;p>=0;p--){const u=a[p];if(u.href===s&&(!r||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${c}`))return;const m=document.createElement("link");if(m.rel=r?"stylesheet":ie,r||(m.as="script",m.crossOrigin=""),m.href=s,document.head.appendChild(m),r)return new Promise((p,u)=>{m.addEventListener("load",p),m.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>n())},le={},ce="关闭",me="公司",pe="英文",de="线路",ue="名称",he="打开",fe="风格",ye="模板",ge="上传者",Ce={"Add a company...":"添加公司...","Add a line...":"添加线路...","Add item":"添加项目","Add or update templates":"添加或更新模本","Briefly describe your changes and provide justification":"简洁地描述您的改动并提供理由","Click copy button and paste into issue body":"点击复制按钮然后粘贴到 Issue 正文",Close:ce,Company:me,English:pe,"Follow the instructions below to open an Issue":"按下方的指引打开 Issue","Justification for major update of":"重大更新的理由：",Line:de,"Line code":"线路代码","Major update":"重大更新",Name:ue,Open:he,"Please provide suitable source and justification.":"请您提供适当的来源和理由。","Railway company":"铁路公司","Simplified Chinese":"简体中文",Style:fe,"Submit templates":"提交模板",Templates:ye,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"打开“重大更新”选项会更新模板的上传者栏位。您需要为此提供额外的理由。","Traditional Chinese":"繁体中文","Upload templates":"上传模板",Uploader:ge,"Your inputs contain the following errors. Please fix it before submitting.":"您的输入存在以下问题，请在提交前修正他們。"},Ee="關閉",Te="公司",we="英文",Le="路線",Ne="名稱",Ae="開啟",Se="風格",be="範本",ve="上載者",Ie={"Add a company...":"新增公司...","Add a line...":"新增路線...","Add item":"新增項目","Add or update templates":"新增或更新範本","Briefly describe your changes and provide justification":"簡短地描述你的變更並提供理由","Click copy button and paste into issue body":"點擊複製按鈕並於 Issue 正文內貼上",Close:Ee,Company:Te,English:we,"Follow the instructions below to open an Issue":"按下方的指引開啟 Issue","Justification for major update of":"重大更新的理由：",Line:Le,"Line code":"路線代碼","Major update":"重大更新",Name:Ne,Open:Ae,"Please provide suitable source and justification.":"請你提供適當的來源及理由。","Railway company":"鐵路公司","Simplified Chinese":"简體中文",Style:Se,"Submit templates":"提交範本",Templates:be,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"開啟「重大更新」選項會更新範本的上載者欄位。你需要為此提供額外的理由。","Traditional Chinese":"繁體中文","Upload templates":"上載範本",Uploader:ve,"Your inputs contain the following errors. Please fix it before submitting.":"你的輸入存在以下問題，請於提交前修正他們。"},je=new B.Builder().withResource("en",le).withResource("zh-Hans",Ce).withResource("zh-Hant",Ie).build();y.use(O).init({lng:h.getLanguage(),fallbackLng:{[l.ChineseCN]:[l.ChineseSimp,l.English],[l.ChineseHK]:[l.ChineseTrad,l.English],[l.ChineseTW]:[l.ChineseTrad,l.English],[l.ChineseTrad]:[l.ChineseHK,l.ChineseTW,l.English],default:[l.English]},resources:je}).then(e=>{document.title=e("RMG Templates"),document.documentElement.lang=y.language});const M=e=>{y.changeLanguage(e).then(),document.title=y.t("RMG Templates"),document.documentElement.lang=e};h.onLanguageChange(M);function Me(){const{t:e}=P(),n=h.getEnv(),t=h.getAppVersion(),o=a=>{h.setLanguage(a),M(a)};return f(z,{children:[i(H,{as:"h4",size:"md",children:e("RMG Templates")}),i(x,{environment:n,version:t}),i(U,{ml:"auto",children:f(D,{children:[i($,{as:F,icon:i(W,{}),variant:"ghost",size:"sm"}),f(q,{children:[i(C,{onClick:()=>o(l.English),children:"English"}),i(C,{onClick:()=>o(l.ChineseSimp),children:"简体中文"}),i(C,{onClick:()=>o(l.ChineseTrad),children:"繁體中文"})]})]})})]})}const Re=E.lazy(()=>j(()=>import("./templates-view-b6b1b403.js"),["assets/templates-view-b6b1b403.js","assets/vendor-a8fb487b.js","assets/constant-442f4e36.js"])),ke=E.lazy(()=>j(()=>import("./ticket-view-27f69114.js"),["assets/ticket-view-27f69114.js","assets/vendor-a8fb487b.js","assets/constant-442f4e36.js"]));function _e(){return i(V,{basename:"/rmg-templates/",children:f(J,{children:[i(Me,{}),f(Y,{children:[i(w,{path:"/new",element:i(L,{suspenseFallback:i(N,{isIndeterminate:!0}),children:i(ke,{})})}),i(w,{path:"/",element:i(L,{suspenseFallback:i(N,{isIndeterminate:!0}),children:i(Re,{})})})]})]})})}const Be={companyConfig:G,templateList:K,selectedCompany:""},R=I({name:"app",initialState:Be,reducers:{appendCompanyAndTemplates:(e,n)=>{const{company:t,templates:o}=n.payload;e.companyConfig.push(t),e.templateList[t.id]=o},setSelectedCompany:(e,n)=>{e.selectedCompany=n.payload}}}),{appendCompanyAndTemplates:Oe,setSelectedCompany:Ye}=R.actions,Pe=R.reducer,ze=e=>{const n=document.createElement("details");n.setAttribute("repo","rmg-templates"),n.setAttribute("company",e.id),n.setAttribute("line","00config");const t=document.createElement("summary");t.textContent="New company: "+e.name.en,n.append(t);const o=document.createElement("details");return o.setAttribute("type","name"),o.textContent=JSON.stringify(e.name),n.append(o),n},He=(e,n,t,o,a)=>{const s=document.createElement("details");s.setAttribute("repo","rmg-templates"),s.setAttribute("company",e),s.setAttribute("line",n),s.setAttribute("major",t.toString());const r=document.createElement("summary");r.textContent=`${e}/${n}`+(t?"(M)":""),s.append(r);const c=document.createElement("details");c.setAttribute("type","name"),c.textContent=JSON.stringify(o),s.append(c);const d=document.createElement("details");return d.setAttribute("type","param"),d.textContent=JSON.stringify(a),s.append(d),s},Ge={en:"English","zh-Hans":"Simplified Chinese","zh-Hant":"Traditional Chinese"},S=()=>({id:crypto.randomUUID(),line:"",newLine:"",majorUpdate:!1,templateName:{en:"","zh-Hans":"","zh-Hant":""},param:void 0}),b={company:"",newCompany:"",companyName:{en:"","zh-Hans":"","zh-Hant":""},templates:[]},k=I({name:"ticket",initialState:b,reducers:{setCompany:(e,n)=>{e.company=n.payload},setNewCompany:(e,n)=>{e.newCompany=n.payload},setCompanyNameByLang:(e,n)=>{const{lang:t,name:o}=n.payload;e.companyName[t]=o},addTemplate:e=>{e.templates.push(S())},setTemplateLineById:(e,n)=>{var r,c,d,m,p,u;const{id:t,line:o,name:a}=n.payload,s={...(r=e.templates.find(g=>g.id===t))!=null?r:S(),line:o};a&&(s.templateName.en=(c=a.en)!=null?c:"",s.templateName["zh-Hans"]=(d=a["zh-Hans"])!=null?d:"",s.templateName["zh-Hant"]=(u=(p=(m=a["zh-Hant"])!=null?m:a["zh-HK"])!=null?p:a["zh-TW"])!=null?u:""),e.templates=e.templates.map(g=>g.id===t?s:g)},setTemplateNewLineById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,newLine:n.payload.newLine}:t)},setTemplateMajorFlagById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,majorUpdate:n.payload.majorUpdate}:t)},setTemplateLineNameById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,templateName:{...t.templateName,[n.payload.lang]:n.payload.name}}:t)},setTemplateParamById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,param:n.payload.param}:t)},removeTemplate:(e,n)=>{e.templates=e.templates.filter(t=>t.id!==n.payload)},resetTicket:()=>b}}),Ke={getCompanyEnglishName:(e,n)=>{var t,o,a;return e.company==="new"?e.companyName.en:(a=(o=(t=n.find(s=>s.id===e.company))==null?void 0:t.name)==null?void 0:o.en)!=null?a:""},getCompanyBlock:e=>e.company!=="new"?null:ze({id:e.newCompany,name:e.companyName}),getTemplateBlocks:e=>{const n=e.company==="new"?e.newCompany:e.company;return e.templates.map(t=>{const o=t.line==="new"?t.newLine:t.line,a=t.line!=="new"&&t.majorUpdate;return He(n,o,a,t.templateName,t.param)})},getCompanyErrors:e=>{const n=[],{company:t,newCompany:o,companyName:a}=e;return(!t||t==="new"&&!o)&&n.push("COMPANY_CODE_UNDEFINED"),t==="new"&&Object.values(a).some(s=>!s)&&n.push("COMPANY_NAME_INCOMPLETE"),n},getTemplateErrors:e=>{const n={Overall:[]},{templates:t}=e;return t.length===0&&n.Overall.push("TEMPLATE_SECTION_EMPTY"),t.some(o=>!o.line||o.line==="new"&&!o.newLine)&&n.Overall.push("TEMPLATE_CODE_UNDEFINED"),new Set(t.map(o=>o.line==="new"?o.newLine:o.line)).size!==t.length&&n.Overall.push("TEMPLATE_CODE_DUPLICATED"),t.forEach(o=>{const a=[];Object.values(o.templateName).some(s=>!s)&&a.push("TEMPLATE_NAME_INCOMPLETE"),o.param||a.push("TEMPLATE_PARAM_UNDEFINED"),n["Line "+o.line||o.newLine]=a}),n},getMajorUpdateNames:(e,n)=>{const{company:t,templates:o}=e;return t==="new"?[]:o.filter(a=>a.majorUpdate&&a.line!=="new").map(a=>{var r;const s=(r=n[t].find(c=>c.filename===a.line))==null?void 0:r.name;return s?Object.values(s).join("/"):a.line})}},{setCompany:Qe,setNewCompany:Xe,setCompanyNameByLang:Ze,addTemplate:et,setTemplateLineById:tt,setTemplateNewLineById:nt,setTemplateMajorFlagById:at,setTemplateLineNameById:ot,setTemplateParamById:st,removeTemplate:it,resetTicket:rt}=k.actions,xe=k.reducer,Ue=Q(),T=X({reducer:{app:Pe,ticket:xe},middleware:e=>e().prepend(Ue.middleware)}),lt=()=>Z(),ct=ee;window.rmgStore=T;const _=document.querySelector.bind(document),De=async()=>{var e;try{const t=await(await fetch("/rmg-templates/resources/other-company-config.json")).json(),o=document.createElement("p");return o.textContent="Fetched non-core company config",(e=_("#root"))==null||e.append(o),t}catch(n){return console.error("Failed to fetch non-core company config",n),[]}},$e=async e=>{var n;try{const o=await(await fetch("/rmg-templates/resources/templates/"+e+"/00config.json")).json(),a=document.createElement("p");return a.textContent="Fetched templates of "+e,(n=_("#root"))==null||n.append(a),o}catch(t){return console.error("Failed to fetch template list for "+e,t),[]}},Fe=async e=>{const n=await De();for(const t of n){const o=await $e(t.id);e.dispatch(Oe({company:t,templates:o}))}};async function We(e){await Fe(e)}let v;const qe=()=>{v=te(document.getElementById("root")),v.render(i(E.StrictMode,{children:i(ne,{store:T,children:i(ae,{theme:oe,children:i(se,{i18n:y,children:i(_e,{})})})})}))};h.ready().then(()=>We(T)).then(()=>{qe(),h.injectCss()});export{Ge as A,Ve as __vite_legacy_guard,lt as a,Qe as b,Xe as c,Ze as d,nt as e,at as f,ot as g,st as h,et as i,tt as j,rt as k,it as r,Ye as s,Ke as t,ct as u};
