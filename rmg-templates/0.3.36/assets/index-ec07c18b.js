import{u as x,r as h,j as i,R as A,H as R,a as S,b as y,B as v,c as I,d as M,e as P,f as z,g as H,h as L,i as E,k as O,l as _,m as $,n as U,o as D,p as F,q as J,P as q,I as V}from"./vendor-dd6be2bd.js";function tn(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const W="modulepreload",Y=function(e){return"/rmg-templates/"+e},w={},j=function(n,t,s){if(!t||t.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Y(o),o in w)return;w[o]=!0;const l=o.endsWith(".css"),m=l?'[rel="stylesheet"]':"";if(!!s)for(let c=a.length-1;c>=0;c--){const d=a[c];if(d.href===o&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${m}`))return;const r=document.createElement("link");if(r.rel=l?"stylesheet":W,l||(r.as="script",r.crossOrigin=""),r.href=o,document.head.appendChild(r),l)return new Promise((c,d)=>{r.addEventListener("load",c),r.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};function G(){const{t:e}=x(),n=h.getEnv(),t=h.getAppVersion();return i.jsxs(A,{children:[i.jsx(R,{as:"h4",size:"md",children:e("RMG Templates")}),i.jsx(S,{environment:n,version:t})]})}const K=y.lazy(()=>j(()=>import("./templates-view-ab32dbb4.js"),["assets/templates-view-ab32dbb4.js","assets/vendor-dd6be2bd.js","assets/use-templates-a7943314.js"])),Z=y.lazy(()=>j(()=>import("./ticket-view-c4953f16.js"),["assets/ticket-view-c4953f16.js","assets/vendor-dd6be2bd.js","assets/use-templates-a7943314.js"]));function Q(){return i.jsx(v,{basename:"/rmg-templates/",children:i.jsx(I,{children:i.jsxs(M,{children:[i.jsx(G,{}),i.jsxs(P,{children:[i.jsx(z,{path:"/new",element:i.jsx(H,{suspenseFallback:i.jsx(L,{isIndeterminate:!0}),children:i.jsx(Z,{})})}),i.jsx(z,{path:"/",element:i.jsx(H,{suspenseFallback:i.jsx(L,{isIndeterminate:!0}),children:i.jsx(K,{})})})]})]})})})}const X=[{id:"basic",name:{en:"Basic",ko:"기본",zh:"基本"}},{id:"mtr",name:{en:"MTR",ko:"홍콩 지하철","zh-Hans":"港铁","zh-Hant":"港鐵"}},{id:"gzmtr",name:{en:"Guangzhou Metro",ko:"광저우 지하철","zh-Hans":"广州地铁","zh-Hant":"廣州地鐵"}},{id:"shmetro",name:{en:"Shanghai Metro",ko:"상해 지하철","zh-Hans":"上海地铁","zh-Hant":"上海地鐵"}}],ee=[{filename:"default",name:{en:"Default",ko:"묵인","zh-Hans":"默认","zh-Hant":"預設"},style:"mtr"},{filename:"coline",name:{en:"Track Share",ko:"공용선","zh-Hans":"共线","zh-Hant":"共綫"},style:"shmetro"},{filename:"loop",name:{en:"Loop Line",ko:"순환선","zh-Hans":"环线","zh-Hant":"環綫"},style:"shmetro"}],ne=[{filename:"twl",name:{en:"Tsuen Wan Line",ko:"췬완선","zh-Hans":"荃湾线","zh-Hant":"荃灣綫"},uploadBy:"wongchito",style:"mtr"},{filename:"ktl",name:{en:"Kwun Tong Line",ko:"군통선","zh-Hans":"观塘线","zh-Hant":"觀塘綫"},uploadBy:"wongchito",style:"mtr"},{filename:"isl",name:{en:"Island Line",ko:"공도선","zh-Hans":"港岛线","zh-Hant":"港島綫"},uploadBy:"wongchito",style:"mtr"},{filename:"tkl",name:{en:"Tseung Kwan O Line",ko:"정관오선","zh-Hans":"将军澳线","zh-Hant":"將軍澳綫"},uploadBy:"wongchito",style:"mtr"},{filename:"tcl",name:{en:"Tung Chung Line",ko:"둥충선","zh-Hans":"东涌线","zh-Hant":"東涌綫"},uploadBy:"wongchito",style:"mtr"},{filename:"sile",name:{en:"South Island Line",ko:"남공도선","zh-Hans":"南港岛线","zh-Hant":"南港島綫"},uploadBy:"wongchito",style:"mtr"},{filename:"drl",name:{en:"Disneyland Resort Line",ko:"디즈니선","zh-Hans":"迪士尼线","zh-Hant":"迪士尼綫"},uploadBy:"wongchito",style:"mtr"},{filename:"ael",name:{en:"Airport Express",ko:"홍콩 공항철도","zh-Hans":"机场快线","zh-Hant":"機場快綫"},uploadBy:"wongchito",style:"mtr"},{filename:"eal",name:{en:"East Rail Line",ko:"둥팃선","zh-Hans":"东铁线","zh-Hant":"東鐵綫"},uploadBy:"wongchito",style:"mtr"},{filename:"tml",name:{en:"Tuen Ma Line",ko:"튄마선","zh-Hans":"屯马线","zh-Hant":"屯馬綫"},uploadBy:"wongchito",style:"mtr"}],te=[{filename:"gz1",name:{en:"Line 1",ko:"1호선","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz2",name:{en:"Line 2",ko:"2호선","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz3",name:{en:"Line 3",ko:"3호선","zh-Hans":"3号线","zh-Hant":"3號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz4",name:{en:"Line 4",ko:"4호선","zh-Hans":"4号线","zh-Hant":"4號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz5",name:{en:"Line 5",ko:"5호선","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz6",name:{en:"Line 6",ko:"6호선","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz7",name:{en:"Line 7",ko:"7호선","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz8",name:{en:"Line 8",ko:"8호선","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz9",name:{en:"Line 9",ko:"9호선","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz13",name:{en:"Line 13",ko:"13호선","zh-Hans":"13号线","zh-Hant":"13號線"},uploadBy:"Dingdong2334",style:"gzmtr"},{filename:"gz14",name:{en:"Line 14",ko:"14호선","zh-Hans":"14号线","zh-Hant":"14號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz18",name:{en:"Line 18","zh-Hans":"18号线","zh-Hant":"18號線",ko:"18호선"},uploadBy:"Dingdong2334",style:"gzmtr"},{filename:"gz21",name:{en:"Line 21",ko:"21호선","zh-Hans":"21号线","zh-Hant":"21號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gz22",name:{en:"Line 22",ko:"22호선","zh-Hans":"22号线","zh-Hant":"22號線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"gf",name:{en:"Guangfo Line",ko:"광포 지하철","zh-Hans":"广佛线","zh-Hant":"廣佛線"},uploadBy:"wongchito",style:"gzmtr"},{filename:"apm",name:{en:"APM Line",ko:"주장신청 자동운송 체계","zh-Hans":"APM线","zh-Hant":"APM線"},uploadBy:"Dingdong2334",style:"gzmtr"},{filename:"thz1",name:{en:"Haizhu Tram Line 1",ko:"하이주 전차 1호선","zh-Hans":"海珠有轨1号线","zh-Hant":"海珠有軌1號線"},uploadBy:"clearng-kly",style:"gzmtr"},{filename:"thp1",name:{en:"Huangpu Tram Line 1",ko:"황푸 전차 1호선","zh-Hans":"黄埔有轨1号线","zh-Hant":"黃埔有軌1號線"},uploadBy:"clearng-kly",style:"gzmtr"}],ae=[{filename:"sh1",name:{en:"Line 1",ko:"1호선","zh-Hans":"1号线","zh-Hant":"1號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh2",name:{en:"Line 2",ko:"2호선","zh-Hans":"2号线","zh-Hant":"2號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh3",name:{en:"Line 3 (External)",ko:"3호선(공선)","zh-Hans":"3号线 （共线）","zh-Hant":"3號線 （共線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh4",name:{en:"Line 4 (Loop)",ko:"4호선(순환선)","zh-Hans":"4号线 （环线）","zh-Hant":"4號線 （環線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh3&4",name:{en:"Line 3 and 4 (External with Loop)",ko:"3호선과 4호선(공선과 순환선)","zh-Hans":"3与4号线 （共线与环线）","zh-Hant":"3與4號線 （共線與環線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh5",name:{en:"Line 5",ko:"5호선","zh-Hans":"5号线","zh-Hant":"5號線"},uploadBy:"Tianxiu11111",style:"shmetro"},{filename:"sh6",name:{en:"Line 6",ko:"6호선","zh-Hans":"6号线","zh-Hant":"6號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh7",name:{en:"Line 7",ko:"7호선","zh-Hans":"7号线","zh-Hant":"7號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh8",name:{en:"Line 8",ko:"8호선","zh-Hans":"8号线","zh-Hant":"8號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh9",name:{en:"Line 9",ko:"9호선","zh-Hans":"9号线","zh-Hant":"9號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh10",name:{en:"Line 10 (Branch)",ko:"10호선(지선)","zh-Hans":"10号线 （支线）","zh-Hant":"10號線 （支線）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh11",name:{en:"Line 11",ko:"11호선","zh-Hans":"11号线","zh-Hant":"11號線"},uploadBy:"Tianxiu11111",style:"shmetro"},{filename:"sh12",name:{en:"Line 12",ko:"12호선","zh-Hans":"12号线","zh-Hant":"12號線"},uploadBy:"Andy1782010",style:"shmetro"},{filename:"sh13",name:{en:"Line 13",ko:"13호선","zh-Hans":"13号线","zh-Hant":"13號線"},uploadBy:"Andy1782010",style:"shmetro"},{filename:"sh14",name:{en:"Line 14",ko:"14호선","zh-Hans":"14号线","zh-Hant":"14號線"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh15",name:{en:"Line 15",ko:"15호선","zh-Hans":"15号线","zh-Hant":"15號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh16",name:{en:"Line 16 (Express)",ko:"16호선(급행)","zh-Hans":"16号线 （快车）","zh-Hant":"16號線 （快車）"},uploadBy:"thekingofcity",style:"shmetro"},{filename:"sh17",name:{en:"Line 17",ko:"17호선","zh-Hans":"17号线","zh-Hant":"17號線"},uploadBy:"Thomastzc",style:"shmetro"},{filename:"sh18",name:{en:"Line 18",ko:"18호선","zh-Hans":"18号线","zh-Hant":"18號線"},uploadBy:"Tianxiu11111",style:"shmetro"}],oe={basic:ee,mtr:ne,gzmtr:te,shmetro:ae};var k;(function(e){e.MTR="mtr",e.GZMTR="gzmtr",e.SHMetro="shmetro"})(k||(k={}));const se=X,ie=oe,le={companyConfig:se,templateList:ie,selectedCompany:""},N=E({name:"app",initialState:le,reducers:{appendCompanies:(e,n)=>{e.companyConfig=e.companyConfig.concat(n.payload)},setTemplateListByCompany:(e,n)=>{const{company:t,templates:s}=n.payload;e.templateList[t]=s},setSelectedCompany:(e,n)=>{e.selectedCompany=n.payload}}}),{appendCompanies:me,setTemplateListByCompany:on,setSelectedCompany:sn}=N.actions,re=N.reducer,ce=e=>{const n=document.createElement("details");n.setAttribute("repo","rmg-templates"),n.setAttribute("company",e.id),n.setAttribute("line","00config");const t=document.createElement("summary");t.textContent="New company: "+e.name.en,n.append(t);const s=document.createElement("details");return s.setAttribute("type","name"),s.textContent=JSON.stringify(e.name),n.append(s),n},pe=(e,n,t,s,a)=>{const o=document.createElement("details");o.setAttribute("repo","rmg-templates"),o.setAttribute("company",e),o.setAttribute("line",n),o.setAttribute("major",t.toString());const l=document.createElement("summary");l.textContent=`${e}/${n}`+(t?"(M)":""),o.append(l);const m=document.createElement("details");m.setAttribute("type","name"),m.textContent=JSON.stringify(s),o.append(m);const p=document.createElement("details");return p.setAttribute("type","param"),p.textContent=JSON.stringify(a),o.append(p),o},T=()=>({id:crypto.randomUUID(),line:"",newLine:"",majorUpdate:!1,templateName:{en:"","zh-Hans":"","zh-Hant":"",ko:""},param:void 0}),B={company:"",newCompany:"",companyName:{en:"","zh-Hans":"","zh-Hant":"",ko:""},templates:[]},b=E({name:"ticket",initialState:B,reducers:{setCompany:(e,n)=>{e.company=n.payload},setNewCompany:(e,n)=>{e.newCompany=n.payload},setCompanyNameByLang:(e,n)=>{const{lang:t,name:s}=n.payload;e.companyName[t]=s},addTemplate:e=>{e.templates.push(T())},setTemplateLineById:(e,n)=>{var l,m,p,r,c,d,g;const{id:t,line:s,name:a}=n.payload,o={...(l=e.templates.find(u=>u.id===t))!=null?l:T(),line:s};a&&(o.templateName.en=(m=a.en)!=null?m:"",o.templateName["zh-Hans"]=(p=a["zh-Hans"])!=null?p:"",o.templateName["zh-Hant"]=(d=(c=(r=a["zh-Hant"])!=null?r:a["zh-HK"])!=null?c:a["zh-TW"])!=null?d:"",o.templateName.ko=(g=a.ko)!=null?g:""),e.templates=e.templates.map(u=>u.id===t?o:u)},setTemplateNewLineById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,newLine:n.payload.newLine}:t)},setTemplateMajorFlagById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,majorUpdate:n.payload.majorUpdate}:t)},setTemplateLineNameById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,templateName:{...t.templateName,[n.payload.lang]:n.payload.name}}:t)},setTemplateParamById:(e,n)=>{e.templates=e.templates.map(t=>t.id===n.payload.id?{...t,param:n.payload.param}:t)},removeTemplate:(e,n)=>{e.templates=e.templates.filter(t=>t.id!==n.payload)},resetTicket:()=>B}}),ln={getCompanyEnglishName:(e,n)=>{var t,s,a;return e.company==="new"?e.companyName.en:(a=(s=(t=n.find(o=>o.id===e.company))==null?void 0:t.name)==null?void 0:s.en)!=null?a:""},getCompanyBlock:e=>e.company!=="new"?null:ce({id:e.newCompany,name:e.companyName}),getTemplateBlocks:e=>{const n=e.company==="new"?e.newCompany:e.company;return e.templates.map(t=>{const s=t.line==="new"?t.newLine:t.line,a=t.line!=="new"&&t.majorUpdate;return pe(n,s,a,t.templateName,t.param)})},getCompanyErrors:e=>{const n=[],{company:t,newCompany:s,companyName:a}=e;return(!t||t==="new"&&!s)&&n.push("COMPANY_CODE_UNDEFINED"),t==="new"&&Object.values(a).some(o=>!o)&&n.push("COMPANY_NAME_INCOMPLETE"),n},getTemplateErrors:e=>{const n={Overall:[]},{templates:t}=e;return t.length===0&&n.Overall.push("TEMPLATE_SECTION_EMPTY"),t.some(s=>!s.line||s.line==="new"&&!s.newLine)&&n.Overall.push("TEMPLATE_CODE_UNDEFINED"),new Set(t.map(s=>s.line==="new"?s.newLine:s.line)).size!==t.length&&n.Overall.push("TEMPLATE_CODE_DUPLICATED"),t.forEach(s=>{const a=[];Object.values(s.templateName).some(o=>!o)&&a.push("TEMPLATE_NAME_INCOMPLETE"),s.param||a.push("TEMPLATE_PARAM_UNDEFINED"),n["Line "+s.line||s.newLine]=a}),n},getMajorUpdateNames:(e,n)=>{const{company:t,templates:s}=e;return t==="new"?[]:s.filter(a=>a.majorUpdate&&a.line!=="new").map(a=>{var l;const o=(l=n[t].find(m=>m.filename===a.line))==null?void 0:l.name;return o?Object.values(o).join("/"):a.line})}},{setCompany:mn,setNewCompany:rn,setCompanyNameByLang:cn,addTemplate:pn,setTemplateLineById:dn,setTemplateNewLineById:hn,setTemplateMajorFlagById:un,setTemplateLineNameById:yn,setTemplateParamById:fn,removeTemplate:gn,resetTicket:zn}=b.actions,de=b.reducer,he=O(),f=_({reducer:{app:re,ticket:de},middleware:e=>e().prepend(he.middleware)}),Hn=()=>$(),Ln=U;window.rmgStore=f;const ue={},ye="字符",fe="关闭",ge="公司",ze="线路",He="本地",Le="名称",we="打开",ke="删除",Te="大小",Be="风格",Ce="模板",Ee="上传者",je={"Add a company...":"添加公司...","Add a line...":"添加线路...","Add item":"添加项目","Add or update templates":"添加或更新模本","Briefly describe your changes and provide justification":"简洁地描述您的改动并提供理由",chars:ye,"Click copy button and paste into issue body":"点击复制按钮然后粘贴到 Issue 正文",Close:fe,Company:ge,"Follow the instructions below to open an Issue":"按下方的指引打开 Issue","Import from":"导入自","Justification for major update of":"重大更新的理由：",Line:ze,"Line code":"线路代码",Local:He,"Major update":"重大更新",Name:Le,Open:we,"Please provide suitable source and justification.":"请您提供适当的来源和理由。","Railway company":"铁路公司",Remove:ke,"Remove this line":"删除此线路",Size:Te,Style:Be,"Submit templates":"提交模板",Templates:Ce,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"打开“重大更新”选项会更新模板的上传者栏位。您需要为此提供额外的理由。","Upload templates":"上传模板",Uploader:Ee,"Your inputs contain the following errors. Please fix it before submitting.":"您的输入存在以下问题，请在提交前修正他們。"},Ne="字元",be="關閉",xe="公司",Ae="路線",Re="本機",Se="名稱",ve="開啟",Ie="移除",Me="大小",Pe="風格",Oe="範本",_e="上載者",$e={"Add a company...":"新增公司...","Add a line...":"新增路線...","Add item":"新增項目","Add or update templates":"新增或更新範本","Briefly describe your changes and provide justification":"簡短地描述你的變更並提供理由",chars:Ne,"Click copy button and paste into issue body":"點擊複製按鈕並於 Issue 正文內貼上",Close:be,Company:xe,"Follow the instructions below to open an Issue":"按下方的指引開啟 Issue","Import from":"讀入自","Justification for major update of":"重大更新的理由：",Line:Ae,"Line code":"路線代碼",Local:Re,"Major update":"重大更新",Name:Se,Open:ve,"Please provide suitable source and justification.":"請你提供適當的來源及理由。","Railway company":"鐵路公司",Remove:Ie,"Remove this line":"移除此路線",Size:Me,Style:Pe,"Submit templates":"提交範本",Templates:Oe,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"開啟「重大更新」選項會更新範本的上載者欄位。你需要為此提供額外的理由。","Upload templates":"上載範本",Uploader:_e,"Your inputs contain the following errors. Please fix it before submitting.":"你的輸入存在以下問題，請於提交前修正他們。"},Ue="닫기",De="회사",Fe="노선",Je="명칭",qe="열기",Ve="스타일",We="템플릿",Ye="업로더",Ge={"Add a company...":"회사 추가","Add a line...":"노선 추가","Add item":"프로젝트 추가","Add or update templates":"템플릿 추가 또는 업데이트","Briefly describe your changes and provide justification":"변경 사항을 간결하게 설명하고 이유를 제공하세요","Click copy button and paste into issue body":"복사 단추를 누른 다음 Issue 본문에 붙여넣기",Close:Ue,Company:De,"Follow the instructions below to open an Issue":"아래 안내로 Issue 열기","Justification for major update of":"주요 업데이트 이유:",Line:Fe,"Line code":"노선 코드","Major update":"주요 업데이트",Name:Je,Open:qe,"Please provide suitable source and justification.":"당신이 적당한 출처와 이유를 제공해 주십시오.","Railway company":"철도회사",Style:Ve,"Submit templates":"템플릿 제출",Templates:We,"Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it.":"'주요 업데이트' 옵션을 열면 템플릿의 게시자 필드가 업데이트됩니다.이를 위한 추가적인 이유가 필요합니다.","Upload templates":"업로드 템플릿",Uploader:Ye,"Your inputs contain the following errors. Please fix it before submitting.":"귀하의 입력에 다음과 같은 문제가 있으니 제출하기 전에 수정해 주십시오."},Ke=new h.I18nBuilder().use(D).withAppName("RMG Templates").withLng(h.getLanguage()).withDefaultResource(F).withResource("en",ue).withResource("zh-Hans",je).withResource("zh-Hant",$e).withResource("ko",Ge).build(),Ze=document.querySelector.bind(document),Qe=async()=>{var e;try{const t=await(await fetch("/rmg-templates/resources/other-company-config.json")).json(),s=document.createElement("p");return s.textContent="Fetched non-core company config",(e=Ze("#root"))==null||e.append(s),t}catch(n){return console.error("Failed to fetch non-core company config",n),[]}},Xe=async e=>{const n=await Qe();e.dispatch(me(n))};async function en(e){await Xe(e)}let C;const nn=()=>{C=J(document.getElementById("root")),C.render(i.jsx(y.StrictMode,{children:i.jsx(q,{store:f,children:i.jsx(V,{i18n:Ke,children:i.jsx(Q,{})})})}))};h.ready().then(()=>en(f)).then(()=>{nn(),h.injectUITools()});export{tn as __vite_legacy_guard,Hn as a,mn as b,rn as c,cn as d,hn as e,un as f,yn as g,fn as h,pn as i,dn as j,zn as k,on as l,gn as r,sn as s,ln as t,Ln as u};
