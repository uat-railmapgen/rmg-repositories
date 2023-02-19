import{c as R,a as j,L as y,n as N,M as T,b as U,d as Y,u as V,e as K,R as M,i as _,f as J,r as g,g as u,h as q,j as D,k as Q,l as r,H as X,m as ee,o as ne,p as te,q as ae,I as oe,s as se,t as ie,v as f,w as H,B as re,x as ce,y as le,z as v,A as O,C as P,D as ue,P as de,E as Ee,F as me,G as Ne}from"./vendor-1e2cd711.js";function ln(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const ge={selectedCountry:""},b=R({name:"app",initialState:ge,reducers:{setSelectedCountry:(e,n)=>{e.selectedCountry=n.payload}}}),{setSelectedCountry:dn}=b.actions,ye=b.reducer,En="**Do not edit lines below, they are meant for bots only!!!**",mn=(e,n)=>{if(n!==null){const t=document.createElement("details");return t.setAttribute("repo","rmg-palette"),t.setAttribute("type",e),t.textContent=JSON.stringify(n,null,4),t.outerHTML}else return""};var p=(e=>(e.COUNTRY_CODE_UNDEFINED="COUNTRY_CODE_UNDEFINED",e.CITY_CODE_UNDEFINED="CITY_CODE_UNDEFINED",e.LINE_CODE_UNDEFINED="LINE_CODE_UNDEFINED",e.LINE_CODE_DUPLICATED="LINE_CODE_DUPLICATED",e))(p||{}),m=(e=>(e.EN_UNDEFINED="EN_UNDEFINED",e.ZH_UNDEFINED="ZH_UNDEFINED",e.ZH_HANS_UNDEFINED="ZH_HANS_UNDEFINED",e.ZH_HANT_UNDEFINED="ZH_HANT_UNDEFINED",e.ZH_HK_UNDEFINED="ZH_HK_UNDEFINED",e.ZH_TW_UNDEFINED="ZH_TW_UNDEFINED",e.ZH_VARIANTS_REDEFINED="ZH_VARIANTS_REDEFINED",e.LANGUAGE_DUPLICATED="LANGUAGE_DUPLICATED",e.OFFICAL_LANGUAGE_UNDEFINED="OFFICAL_LANGUAGE_UNDEFINED",e))(m||{});const Nn={COUNTRY_CODE_UNDEFINED:{en:"Country/region code is missing","zh-Hans":"缺少国家/地区代码","zh-Hant":"缺少國家/地區代碼"},CITY_CODE_UNDEFINED:{en:"City code is missing","zh-Hans":"缺少城市代码","zh-Hant":"缺少城市代碼"},LINE_CODE_UNDEFINED:{en:"At least one line code is missing","zh-Hans":"至少1条线路的代码缺失","zh-Hant":"至少1條路綫的代碼缺失"},LINE_CODE_DUPLICATED:{en:"Duplicated line code found","zh-Hans":"包含重复的线路代码","zh-Hant":"包含重複的路綫代碼"},EN_UNDEFINED:{en:"English name is missing","zh-Hans":"缺少英文名称","zh-Hant":"缺少英文名稱"},ZH_UNDEFINED:{en:"Chinese name is missing","zh-Hans":"缺少中文名称","zh-Hant":"缺少中文名稱"},ZH_HANS_UNDEFINED:{en:"Simplified Chinese name is missing","zh-Hans":"缺少简体中文名称","zh-Hant":"缺少簡體中文名稱"},ZH_HANT_UNDEFINED:{en:"Traditional Chinese name is missing","zh-Hans":"缺少繁体中文名称","zh-Hant":"缺少繁體中文名稱"},ZH_HK_UNDEFINED:{en:"Traditional Chinese (Hong Kong variant) name is missing","zh-Hans":"缺少繁体中文（香港变体）名称","zh-Hant":"缺少繁體中文（香港變體）名稱"},ZH_TW_UNDEFINED:{en:"Traditional Chinese (Taiwan variant) name is missing","zh-Hans":"缺少繁体中文（台湾变体）名称","zh-Hant":"缺少繁體中文（台灣變體）名稱"},ZH_VARIANTS_REDEFINED:{en:"Chinese variants are redefined","zh-Hans":"包含重复的中文变体","zh-Hant":"包含重複的中文變體"},LANGUAGE_DUPLICATED:{en:"Duplicated language found","zh-Hans":"包含重复的语言","zh-Hant":"包含重複的語言"},OFFICAL_LANGUAGE_UNDEFINED:{en:"Name in offcial language is missing","zh-Hans":"缺少官方语言名称","zh-Hant":"缺少官方語言名稱"}};var z=(e=>(e.APP_LOAD="APP_LOAD",e.ADD_CITY="ADD_CITY",e.EDIT_CITY="EDIT_CITY",e.RESET_TICKET="RESET_TICKET",e))(z||{});const d=j(),k=d.getSelectors(),he=e=>d.upsertMany(d.getInitialState(),e),I=e=>k.selectAll(e).reduce((n,t)=>({...n,[t.lang]:t.name}),{}),L=(e,n)=>{const t=[],s=k.selectAll(e);s.some(i=>i.lang===y.English&&i.name)||t.push(m.EN_UNDEFINED);const a=s.some(i=>i.lang===y.ChineseSimp&&i.name),o=s.some(i=>i.lang===y.ChineseTrad&&i.name),c=s.some(i=>i.lang===y.ChineseCN&&i.name),l=s.some(i=>i.lang===y.ChineseHK&&i.name),E=s.some(i=>i.lang===y.ChineseTW&&i.name);return s.some(i=>i.lang===y.Chinese&&i.name)?(a||o||c||l||E)&&t.push(m.ZH_VARIANTS_REDEFINED):!a&&!o&&!c&&!l&&!E?t.push(m.ZH_UNDEFINED):(a?c&&t.push(m.ZH_VARIANTS_REDEFINED):c||t.push(m.ZH_HANS_UNDEFINED),o?(l||E)&&t.push(m.ZH_VARIANTS_REDEFINED):!l&&!E?t.push(m.ZH_HANT_UNDEFINED):l?E||t.push(m.ZH_TW_UNDEFINED):t.push(m.ZH_HK_UNDEFINED)),new Set(s.map(i=>i.lang)).size!==s.length&&t.push(m.LANGUAGE_DUPLICATED),n&&s.every(i=>i.lang!==n)&&t.push(m.OFFICAL_LANGUAGE_UNDEFINED),t},A=d.upsertOne(d.getInitialState(),{id:N(),lang:y.English,name:""}),x={id:"",nameEntity:A,colour:"#aaaaaa",fg:T.white,pantone:void 0},F=()=>({country:void 0,newCountry:"",newCountryLang:void 0,countryName:A,city:"",cityName:A,lines:{[N()]:x}}),Z=R({name:"ticket",initialState:F(),reducers:{setCountry:(e,n)=>{e.country=n.payload},setNewCountry:(e,n)=>{e.newCountry=n.payload},setNewCountryLang:(e,n)=>{e.newCountryLang=n.payload},updateCountryName:(e,n)=>{d.updateOne(e.countryName,n.payload)},addCountryName:(e,n)=>{d.addOne(e.countryName,{id:N(),lang:n.payload,name:""})},removeCountryName:(e,n)=>{d.removeOne(e.countryName,n.payload)},setCity:(e,n)=>{e.city=n.payload},updateCityName:(e,n)=>{d.updateOne(e.cityName,n.payload)},addCityName:(e,n)=>{d.addOne(e.cityName,{id:N(),lang:n.payload,name:""})},removeCityName:(e,n)=>{d.removeOne(e.cityName,n.payload)},updateLineId:(e,n)=>{e.lines[n.payload.entryId].id=n.payload.lineId},updateLineBgColour:(e,n)=>{const{entryId:t,bgColour:s}=n.payload;e.lines[t].colour=s,e.lines[t].pantone=void 0},updateLinePantone:(e,n)=>{const{entryId:t,pantone:s,hex:a}=n.payload;e.lines[t].colour=a,e.lines[t].pantone=s},updateLineFgColour:(e,n)=>{e.lines[n.payload.entryId].fg=n.payload.fgColour},updateLineName:(e,n)=>{const{entryId:t,...s}=n.payload;d.updateOne(e.lines[t].nameEntity,s)},addLineName:(e,n)=>{d.addOne(e.lines[n.payload.entryId].nameEntity,{id:N(),lang:n.payload.lang,name:""})},removeLineName:(e,n)=>{d.removeOne(e.lines[n.payload.entryId].nameEntity,n.payload.id)},addLine:e=>{e.lines[N()]=x},copyLine:(e,n)=>{e.lines[N()]=JSON.parse(JSON.stringify(e.lines[n.payload]))},removeLine:(e,n)=>{delete e.lines[n.payload]},resetTicket:()=>F(),populateTicket:(e,n)=>{const{city:t,palettes:s}=n.payload;e.country=t.country,e.city=t.id,d.setAll(e.cityName,Object.entries(t.name).map(([a,o])=>({id:N(),lang:a,name:o}))),e.lines=s.reduce((a,o)=>{const{id:c,colour:l,fg:E,pantone:i}=o,h=he(Object.entries(o.name).map(([C,W])=>({id:N(),lang:C,name:W})));return{...a,[N()]:{id:c,nameEntity:h,colour:l,fg:E!=null?E:T.white,pantone:i}}},{})}}}),gn={getCountryEntry:e=>e.country!=="new"?null:{id:e.newCountry,name:I(e.countryName),language:e.newCountryLang},getCityEntry:e=>{var n;return{id:e.city,country:e.country==="new"?e.newCountry:(n=e.country)!=null?n:"",name:I(e.cityName)}},getPalettes:e=>Object.values(e.lines).map(n=>{const{nameEntity:t,...s}=n;return{...s,name:I(t)}}),getCountryErrors:e=>{const n=[],{country:t,newCountry:s,newCountryLang:a,countryName:o}=e;return(!t||t==="new"&&!s)&&n.push(p.COUNTRY_CODE_UNDEFINED),t==="new"&&n.push(...L(o,a)),n},getCityErrors:e=>{var l;const n=[],{country:t,newCountryLang:s,city:a,cityName:o}=e;a||n.push(p.CITY_CODE_UNDEFINED);const c=t==="new"?s:(l=U.find(E=>E.id===t))==null?void 0:l.language;return n.push(...L(o,c)),n},getLineErrors:e=>{var c;const n={Overall:[]},{country:t,newCountryLang:s,lines:a}=e;Object.values(a).some(l=>l.id==="")&&n.Overall.push(p.LINE_CODE_UNDEFINED),new Set(Object.values(a).map(l=>l.id)).size!==Object.keys(a).length&&n.Overall.push(p.LINE_CODE_DUPLICATED);const o=t==="new"?s:(c=U.find(l=>l.id===t))==null?void 0:c.language;return Object.values(a).forEach(l=>{n["Line "+l.id]=L(l.nameEntity,o)}),n}},{setCountry:yn,setNewCountry:hn,setNewCountryLang:Cn,updateCountryName:pn,addCountryName:Dn,removeCountryName:_n,setCity:fn,updateCityName:In,addCityName:Ln,removeCityName:An,updateLineId:Hn,updateLineBgColour:Un,updateLinePantone:vn,updateLineFgColour:On,updateLineName:Pn,addLineName:Fn,removeLineName:wn,addLine:Sn,copyLine:Rn,removeLine:Tn,resetTicket:bn,populateTicket:zn}=Z.actions,Ce=Z.reducer,B=Y({reducer:{app:ye,ticket:Ce}}),kn=()=>V(),xn=K;window.xyStore=B;const pe={},De="操作",_e="黑",fe="城市",Ie="复制",Le="编辑",Ae="理由",He="语言",Ue="线路",ve="名称",Oe="下一步",Pe="打开",Fe="潘通",we="上一步",Se="删除",Re="重置",Te="白",be={"1-click open issue":"一键开启Issue",Action:De,"Add a city":"添加城市","Add a country/region...":"添加国家/地区...","Add a line":"添加线路","Add a name in another language":"添加另一语言的名称","Background colour":"背景色",Black:_e,"Briefly describe your changes and provide justification":"简洁地描述您的改动并提供理由","Checking Pantone service availability...":"正在检查潘通服务可用性...",City:fe,"City code":"城市代码","Colour mode":"颜色模式",Copy:Ie,"Country / Region":"国家/地区","Country/region code":"国家/地区代码",Edit:Le,"Edit city":"编辑城市","Enter a valid URL":"输入有效的URL","Foreground colour":"前景色","Go back":"返回","If the button below doesn't work for you, please follow the instructions below:":"如果您无法使用下面的按钮，请按下方的指引开启 Issue：",Justification:Ae,Language:He,"Line code":"线路代码",Lines:Ue,Name:ve,Next:Oe,"Offical language":"官方语言",Open:Pe,Pantone:Fe,"Pantone code":"潘通代码","Pantone service is not available":"潘通服务不可用","Pantone service is ready":"潘通服务已准备就绪","Paste following text to the issue body":"将下面的文字粘贴到 Issue 正文","Please provide suitable source and justification.":"请您提供适当的来源和理由。","Please select...":"请选择...",Previous:we,"Reference link":"参考链接",Remove:Se,"Remove this name":"删除此名称",Reset:Re,"Submit anyway":"继续提交","Submit palettes":"提交调色板",White:Te,"Your inputs contain the following errors. Please consider fixing it before submitting.":"您的输入存在以下问题，请考虑在提交前修正他們。"},ze="動作",ke="黑",xe="城市",Ze="複製",Be="編輯",Ge="理由",$e="語言",We="路綫",je="名稱",Ye="下一步",Ve="開啟",Ke="Pantone",Me="上一步",Je="移除",qe="重設",Qe="白",Xe={"1-click open issue":"一鍵開啟Issue",Action:ze,"Add a city":"新增城市","Add a country/region...":"新增國家/地區...","Add a line":"新增路綫","Add a name in another language":"新增另一語言的名稱","Background colour":"背景色",Black:ke,"Briefly describe your changes and provide justification":"簡短地描述你的變更並提供理由","Checking Pantone service availability...":"正在檢查 Pantone 服務可用性...",City:xe,"City code":"城市代碼","Colour mode":"顏色模式",Copy:Ze,"Country / Region":"國家/地區","Country/region code":"國家/地區代碼",Edit:Be,"Edit city":"編輯城市","Enter a valid URL":"輸入有效的URL","Foreground colour":"前景色","Go back":"返回","If the button below doesn't work for you, please follow the instructions below:":"若你無法使用下面的按鈕，請按下方的指引開啟 Issue：",Justification:Ge,Language:$e,"Line code":"路綫代碼",Lines:We,Name:je,Next:Ye,Open:Ve,"Offical language":"官方語言",Pantone:Ke,"Pantone code":"Pantone 代碼","Pantone service is not available":"Pantone 服務不可用","Pantone service is ready":"Pantone 服務已準備妥當","Paste following text to the issue body":"將下面的文字於 Issue 正文內貼上","Please provide suitable source and justification.":"請你提供適當的來源及理由。","Please select...":"請選擇...",Previous:Me,"Reference link":"参考連結",Remove:Je,"Remove this name":"移除此名稱",Reset:qe,"Submit anyway":"繼續提交","Submit palettes":"提交調色盤",White:Qe,"Your inputs contain the following errors. Please consider fixing it before submitting.":"你的輸入存在以下問題，請考慮於提交前修正他們。"},en=new M.Builder().withResource("en",pe).withResource("zh-Hans",be).withResource("zh-Hant",Xe).build();_.use(J).init({lng:g.getLanguage(),fallbackLng:{[u.ChineseCN]:[u.ChineseSimp,u.English],[u.ChineseHK]:[u.ChineseTrad,u.English],[u.ChineseTW]:[u.ChineseTrad,u.English],[u.ChineseTrad]:[u.ChineseHK,u.ChineseTW,u.English],default:[u.English]},resources:en}).then(e=>{document.title=e("Palette"),document.documentElement.lang=_.language});const G=e=>{_.changeLanguage(e).then(),document.title=_.t("Palette"),document.documentElement.lang=e};g.onLanguageChange(G);const nn="modulepreload",tn=function(e){return"/rmg-palette/"+e},w={},$=function(n,t,s){if(!t||t.length===0)return n();const a=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=tn(o),o in w)return;w[o]=!0;const c=o.endsWith(".css"),l=c?'[rel="stylesheet"]':"";if(!!s)for(let h=a.length-1;h>=0;h--){const C=a[h];if(C.href===o&&(!c||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const i=document.createElement("link");if(i.rel=c?"stylesheet":nn,c||(i.as="script",i.crossOrigin=""),i.href=o,document.head.appendChild(i),c)return new Promise((h,C)=>{i.addEventListener("load",h),i.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>n())};function an(){const{t:e}=q(),n=g.getEnv(),t=g.getAppVersion(),s=a=>{g.setLanguage(a),G(a)};return D(Q,{children:[r(X,{as:"h4",size:"md",children:e("Palette")}),r(ee,{environment:n,version:t}),r(ne,{ml:"auto",children:D(te,{children:[r(ae,{as:oe,icon:r(se,{}),variant:"ghost",size:"sm"}),D(ie,{children:[r(f,{onClick:()=>s(u.English),children:"English"}),r(f,{onClick:()=>s(u.ChineseSimp),children:"简体中文"}),r(f,{onClick:()=>s(u.ChineseTrad),children:"繁體中文"})]})]})})]})}const on=H.lazy(()=>$(()=>import("./palette-view-6bc0f9fb.js"),["assets/palette-view-6bc0f9fb.js","assets/vendor-1e2cd711.js","assets/use-translated-name-ae9525ac.js"])),sn=H.lazy(()=>$(()=>import("./ticket-view-2b7a67db.js"),["assets/ticket-view-2b7a67db.js","assets/vendor-1e2cd711.js","assets/use-translated-name-ae9525ac.js"]));function rn(){return r(re,{basename:"/rmg-palette/",children:D(ce,{children:[r(an,{}),D(le,{children:[r(v,{path:"/new",element:r(O,{suspenseFallback:r(P,{isIndeterminate:!0}),children:r(sn,{})})}),r(v,{path:"/",element:r(O,{suspenseFallback:r(P,{isIndeterminate:!0}),children:r(on,{})})})]})]})})}let S;const cn=()=>{S=ue(document.getElementById("root")),S.render(r(H.StrictMode,{children:r(de,{store:B,children:r(Ee,{theme:me,children:r(Ne,{i18n:_,children:r(rn,{})})})})}))};g.ready().then(()=>{cn(),g.injectCss(),g.event(z.APP_LOAD,{isStandaloneWindow:g.isStandaloneWindow()})});export{mn as A,gn as B,bn as C,z as E,En as G,Nn as I,$ as _,ln as __vite_legacy_guard,kn as a,k as b,yn as c,hn as d,Cn as e,pn as f,Dn as g,fn as h,In as i,Ln as j,An as k,Hn as l,Un as m,On as n,vn as o,zn as p,Rn as q,_n as r,dn as s,d as t,xn as u,Tn as v,Sn as w,Pn as x,Fn as y,wn as z};
