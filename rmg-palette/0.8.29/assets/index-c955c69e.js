import{c as b,a as G,L as y,n as g,M as F,b as H,d as W,u as j,e as Y,R as V,i as D,f as K,r as N,g as d,h as J,j as I,k as M,l,H as q,m as Q,o as A,B as X,p as ee,q as ne,s as v,t as P,v as U,w as te,P as oe,C as ae,x as ie,I as se}from"./vendor-6fddc59b.js";function pn(){import.meta.url,import("_").catch(()=>1);async function*e(){}}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const re={selectedCountry:""},S=b({name:"app",initialState:re,reducers:{setSelectedCountry:(e,n)=>{e.selectedCountry=n.payload}}}),{setSelectedCountry:fn}=S.actions,ce=S.reducer,_n="**Do not edit lines below, they are meant for bots only!!!**",In=(e,n)=>{if(n!==null){const t=document.createElement("details");return t.setAttribute("repo","rmg-palette"),t.setAttribute("type",e),t.textContent=JSON.stringify(n,null,4),t.outerHTML}else return""};var p=(e=>(e.COUNTRY_CODE_UNDEFINED="COUNTRY_CODE_UNDEFINED",e.CITY_CODE_UNDEFINED="CITY_CODE_UNDEFINED",e.LINE_CODE_UNDEFINED="LINE_CODE_UNDEFINED",e.LINE_CODE_DUPLICATED="LINE_CODE_DUPLICATED",e))(p||{}),m=(e=>(e.EN_UNDEFINED="EN_UNDEFINED",e.ZH_UNDEFINED="ZH_UNDEFINED",e.ZH_HANS_UNDEFINED="ZH_HANS_UNDEFINED",e.ZH_HANT_UNDEFINED="ZH_HANT_UNDEFINED",e.ZH_HK_UNDEFINED="ZH_HK_UNDEFINED",e.ZH_TW_UNDEFINED="ZH_TW_UNDEFINED",e.ZH_VARIANTS_REDEFINED="ZH_VARIANTS_REDEFINED",e.LANGUAGE_DUPLICATED="LANGUAGE_DUPLICATED",e.OFFICAL_LANGUAGE_UNDEFINED="OFFICAL_LANGUAGE_UNDEFINED",e))(m||{});const Ln={COUNTRY_CODE_UNDEFINED:{en:"Country/region code is missing","zh-Hans":"缺少国家/地区代码","zh-Hant":"缺少國家/地區代碼"},CITY_CODE_UNDEFINED:{en:"City code is missing","zh-Hans":"缺少城市代码","zh-Hant":"缺少城市代碼"},LINE_CODE_UNDEFINED:{en:"At least one line code is missing","zh-Hans":"至少1条线路的代码缺失","zh-Hant":"至少1條路綫的代碼缺失"},LINE_CODE_DUPLICATED:{en:"Duplicated line code found","zh-Hans":"包含重复的线路代码","zh-Hant":"包含重複的路綫代碼"},EN_UNDEFINED:{en:"English name is missing","zh-Hans":"缺少英文名称","zh-Hant":"缺少英文名稱"},ZH_UNDEFINED:{en:"Chinese name is missing","zh-Hans":"缺少中文名称","zh-Hant":"缺少中文名稱"},ZH_HANS_UNDEFINED:{en:"Simplified Chinese name is missing","zh-Hans":"缺少简体中文名称","zh-Hant":"缺少簡體中文名稱"},ZH_HANT_UNDEFINED:{en:"Traditional Chinese name is missing","zh-Hans":"缺少繁体中文名称","zh-Hant":"缺少繁體中文名稱"},ZH_HK_UNDEFINED:{en:"Traditional Chinese (Hong Kong variant) name is missing","zh-Hans":"缺少繁体中文（香港变体）名称","zh-Hant":"缺少繁體中文（香港變體）名稱"},ZH_TW_UNDEFINED:{en:"Traditional Chinese (Taiwan variant) name is missing","zh-Hans":"缺少繁体中文（台湾变体）名称","zh-Hant":"缺少繁體中文（台灣變體）名稱"},ZH_VARIANTS_REDEFINED:{en:"Chinese variants are redefined","zh-Hans":"包含重复的中文变体","zh-Hant":"包含重複的中文變體"},LANGUAGE_DUPLICATED:{en:"Duplicated language found","zh-Hans":"包含重复的语言","zh-Hant":"包含重複的語言"},OFFICAL_LANGUAGE_UNDEFINED:{en:"Name in offcial language is missing","zh-Hans":"缺少官方语言名称","zh-Hant":"缺少官方語言名稱"}};var T=(e=>(e.APP_LOAD="APP_LOAD",e.ADD_CITY="ADD_CITY",e.EDIT_CITY="EDIT_CITY",e.RESET_TICKET="RESET_TICKET",e))(T||{});const u=G(),k=u.getSelectors(),le=e=>u.upsertMany(u.getInitialState(),e),f=e=>k.selectAll(e).reduce((n,t)=>({...n,[t.lang]:t.name}),{}),_=(e,n)=>{const t=[],s=k.selectAll(e);s.some(i=>i.lang===y.English&&i.name)||t.push(m.EN_UNDEFINED);const o=s.some(i=>i.lang===y.ChineseSimp&&i.name),a=s.some(i=>i.lang===y.ChineseTrad&&i.name),r=s.some(i=>i.lang===y.ChineseCN&&i.name),c=s.some(i=>i.lang===y.ChineseHK&&i.name),E=s.some(i=>i.lang===y.ChineseTW&&i.name);return s.some(i=>i.lang===y.Chinese&&i.name)?(o||a||r||c||E)&&t.push(m.ZH_VARIANTS_REDEFINED):!o&&!a&&!r&&!c&&!E?t.push(m.ZH_UNDEFINED):(o?r&&t.push(m.ZH_VARIANTS_REDEFINED):r||t.push(m.ZH_HANS_UNDEFINED),a?(c||E)&&t.push(m.ZH_VARIANTS_REDEFINED):!c&&!E?t.push(m.ZH_HANT_UNDEFINED):c?E||t.push(m.ZH_TW_UNDEFINED):t.push(m.ZH_HK_UNDEFINED)),new Set(s.map(i=>i.lang)).size!==s.length&&t.push(m.LANGUAGE_DUPLICATED),n&&s.every(i=>i.lang!==n)&&t.push(m.OFFICAL_LANGUAGE_UNDEFINED),t},L=u.upsertOne(u.getInitialState(),{id:g(),lang:y.English,name:""}),z={id:"",nameEntity:L,colour:"#aaaaaa",fg:F.white,pantone:void 0},w=()=>({country:void 0,newCountry:"",newCountryLang:void 0,countryName:L,city:"",cityName:L,lines:{[g()]:z}}),$=b({name:"ticket",initialState:w(),reducers:{setCountry:(e,n)=>{e.country=n.payload},setNewCountry:(e,n)=>{e.newCountry=n.payload},setNewCountryLang:(e,n)=>{e.newCountryLang=n.payload},updateCountryName:(e,n)=>{u.updateOne(e.countryName,n.payload)},addCountryName:(e,n)=>{u.addOne(e.countryName,{id:g(),lang:n.payload,name:""})},removeCountryName:(e,n)=>{u.removeOne(e.countryName,n.payload)},setCity:(e,n)=>{e.city=n.payload},updateCityName:(e,n)=>{u.updateOne(e.cityName,n.payload)},addCityName:(e,n)=>{u.addOne(e.cityName,{id:g(),lang:n.payload,name:""})},removeCityName:(e,n)=>{u.removeOne(e.cityName,n.payload)},updateLineId:(e,n)=>{e.lines[n.payload.entryId].id=n.payload.lineId},updateLineBgColour:(e,n)=>{const{entryId:t,bgColour:s}=n.payload;e.lines[t].colour=s,e.lines[t].pantone=void 0},updateLinePantone:(e,n)=>{const{entryId:t,pantone:s,hex:o}=n.payload;e.lines[t].colour=o,e.lines[t].pantone=s},updateLineFgColour:(e,n)=>{e.lines[n.payload.entryId].fg=n.payload.fgColour},updateLineName:(e,n)=>{const{entryId:t,...s}=n.payload;u.updateOne(e.lines[t].nameEntity,s)},addLineName:(e,n)=>{u.addOne(e.lines[n.payload.entryId].nameEntity,{id:g(),lang:n.payload.lang,name:""})},removeLineName:(e,n)=>{u.removeOne(e.lines[n.payload.entryId].nameEntity,n.payload.id)},addLine:e=>{e.lines[g()]=z},copyLine:(e,n)=>{e.lines[g()]=JSON.parse(JSON.stringify(e.lines[n.payload]))},removeLine:(e,n)=>{delete e.lines[n.payload]},resetTicket:()=>w(),populateTicket:(e,n)=>{const{city:t,palettes:s}=n.payload;e.country=t.country,e.city=t.id,u.setAll(e.cityName,Object.entries(t.name).map(([o,a])=>({id:g(),lang:o,name:a}))),e.lines=s.reduce((o,a)=>{const{id:r,colour:c,fg:E,pantone:i}=a,h=le(Object.entries(a.name).map(([C,Z])=>({id:g(),lang:C,name:Z})));return{...o,[g()]:{id:r,nameEntity:h,colour:c,fg:E!=null?E:F.white,pantone:i}}},{})}}}),An={getCountryEntry:e=>e.country!=="new"?null:{id:e.newCountry,name:f(e.countryName),language:e.newCountryLang},getCityEntry:e=>{var n;return{id:e.city,country:e.country==="new"?e.newCountry:(n=e.country)!=null?n:"",name:f(e.cityName)}},getPalettes:e=>Object.values(e.lines).map(n=>{const{nameEntity:t,...s}=n;return{...s,name:f(t)}}),getCountryErrors:e=>{const n=[],{country:t,newCountry:s,newCountryLang:o,countryName:a}=e;return(!t||t==="new"&&!s)&&n.push(p.COUNTRY_CODE_UNDEFINED),t==="new"&&n.push(..._(a,o)),n},getCityErrors:e=>{var c;const n=[],{country:t,newCountryLang:s,city:o,cityName:a}=e;o||n.push(p.CITY_CODE_UNDEFINED);const r=t==="new"?s:(c=H.find(E=>E.id===t))==null?void 0:c.language;return n.push(..._(a,r)),n},getLineErrors:e=>{var r;const n={Overall:[]},{country:t,newCountryLang:s,lines:o}=e;Object.values(o).some(c=>c.id==="")&&n.Overall.push(p.LINE_CODE_UNDEFINED),new Set(Object.values(o).map(c=>c.id)).size!==Object.keys(o).length&&n.Overall.push(p.LINE_CODE_DUPLICATED);const a=t==="new"?s:(r=H.find(c=>c.id===t))==null?void 0:r.language;return Object.values(o).forEach(c=>{n["Line "+c.id]=_(c.nameEntity,a)}),n}},{setCountry:Hn,setNewCountry:vn,setNewCountryLang:Pn,updateCountryName:Un,addCountryName:wn,removeCountryName:On,setCity:Rn,updateCityName:bn,addCityName:Fn,removeCityName:Sn,updateLineId:Tn,updateLineBgColour:kn,updateLinePantone:zn,updateLineFgColour:$n,updateLineName:xn,addLineName:Bn,removeLineName:Zn,addLine:Gn,copyLine:Wn,removeLine:jn,resetTicket:Yn,populateTicket:Vn}=$.actions,ue=$.reducer,x=W({reducer:{app:ce,ticket:ue}}),Kn=()=>j(),Jn=Y;window.xyStore=x;const de={},Ee="操作",me="黑",ge="城市",ye="复制",Ne="编辑",he="理由",Ce="语言",pe="线路",De="名称",fe="下一步",_e="打开",Ie="潘通",Le="上一步",Ae="删除",He="重置",ve="白",Pe={"1-click open issue":"一键开启Issue",Action:Ee,"Add a city":"添加城市","Add a country/region...":"添加国家/地区...","Add a line":"添加线路","Add a name in another language":"添加另一语言的名称","Background colour":"背景色",Black:me,"Briefly describe your changes and provide justification":"简洁地描述您的改动并提供理由","Checking Pantone service availability...":"正在检查潘通服务可用性...",City:ge,"City code":"城市代码","Colour mode":"颜色模式",Copy:ye,"Country / Region":"国家/地区","Country/region code":"国家/地区代码",Edit:Ne,"Edit city":"编辑城市","Enter a valid URL":"输入有效的URL","Foreground colour":"前景色","Go back":"返回","If the button below doesn't work for you, please follow the instructions below:":"如果您无法使用下面的按钮，请按下方的指引开启 Issue：",Justification:he,Language:Ce,"Line code":"线路代码",Lines:pe,Name:De,Next:fe,"Offical language":"官方语言",Open:_e,Pantone:Ie,"Pantone code":"潘通代码","Pantone service is not available":"潘通服务不可用","Pantone service is ready":"潘通服务已准备就绪","Paste following text to the issue body":"将下面的文字粘贴到 Issue 正文","Please provide suitable source and justification.":"请您提供适当的来源和理由。","Please select...":"请选择...",Previous:Le,"Reference link":"参考链接",Remove:Ae,"Remove this name":"删除此名称",Reset:He,"Submit anyway":"继续提交","Submit palettes":"提交调色板",White:ve,"Your inputs contain the following errors. Please consider fixing it before submitting.":"您的输入存在以下问题，请考虑在提交前修正他們。"},Ue="動作",we="黑",Oe="城市",Re="複製",be="編輯",Fe="理由",Se="語言",Te="路綫",ke="名稱",ze="下一步",$e="開啟",xe="Pantone",Be="上一步",Ze="移除",Ge="重設",We="白",je={"1-click open issue":"一鍵開啟Issue",Action:Ue,"Add a city":"新增城市","Add a country/region...":"新增國家/地區...","Add a line":"新增路綫","Add a name in another language":"新增另一語言的名稱","Background colour":"背景色",Black:we,"Briefly describe your changes and provide justification":"簡短地描述你的變更並提供理由","Checking Pantone service availability...":"正在檢查 Pantone 服務可用性...",City:Oe,"City code":"城市代碼","Colour mode":"顏色模式",Copy:Re,"Country / Region":"國家/地區","Country/region code":"國家/地區代碼",Edit:be,"Edit city":"編輯城市","Enter a valid URL":"輸入有效的URL","Foreground colour":"前景色","Go back":"返回","If the button below doesn't work for you, please follow the instructions below:":"若你無法使用下面的按鈕，請按下方的指引開啟 Issue：",Justification:Fe,Language:Se,"Line code":"路綫代碼",Lines:Te,Name:ke,Next:ze,Open:$e,"Offical language":"官方語言",Pantone:xe,"Pantone code":"Pantone 代碼","Pantone service is not available":"Pantone 服務不可用","Pantone service is ready":"Pantone 服務已準備妥當","Paste following text to the issue body":"將下面的文字於 Issue 正文內貼上","Please provide suitable source and justification.":"請你提供適當的來源及理由。","Please select...":"請選擇...",Previous:Be,"Reference link":"参考連結",Remove:Ze,"Remove this name":"移除此名稱",Reset:Ge,"Submit anyway":"繼續提交","Submit palettes":"提交調色盤",White:We,"Your inputs contain the following errors. Please consider fixing it before submitting.":"你的輸入存在以下問題，請考慮於提交前修正他們。"},Ye="조작",Ve="블랙",Ke="도시",Je="복사",Me="편집",qe="이유",Qe="언어",Xe=" 노선",en="명칭",nn="다음",tn="열기",on="팬톤",an="한 걸음",sn="삭제",rn="리셋",cn="화이트",ln={"1-click open issue":"원터치로 Issue 열기",Action:Ye,"Add a city":"도시 추가","Add a country/region...":"국가/ 지역 추가...","Add a line":"노선 추가","Add a name in another language":"다른 언어 명칭 추가하기","Background colour":"배경색",Black:Ve,"Briefly describe your changes and provide justification":"변경 사항을 간결하게 설명하고 이유를 제공합니다","Checking Pantone service availability...":"펜톤 서비스 사용 가능 여부 확인 중...",City:Ke,"City code":"도시 코드","Colour mode":"컬러 모드",Copy:Je,"Country / Region":"국가/지역","Country/region code":"국가/지역 코드",Edit:Me,"Edit city":"도시 편집","Enter a valid URL":"유효한 URL을 입력하세요","Foreground colour":"전경색","Go back":"반품","If the button below doesn't work for you, please follow the instructions below:":"아래 버튼을 사용할 수 없는 경우 아래 지침에 따라 문제를 여십시오.",Justification:qe,Language:Qe,"Line code":" 노선 코드",Lines:Xe,Name:en,Next:nn,"Offical language":"공용언어",Open:tn,Pantone:on,"Pantone code":"판톤 코드","Pantone service is not available":"펜톤 서비스를 사용할 수 없습니다","Pantone service is ready":"펜톤 서비스 준비 완료","Paste following text to the issue body":"다음 텍스트를 Issue 본문에 붙여넣기","Please provide suitable source and justification.":"적절한 출처와 이유를 알려주세요.","Please select...":"선택해주세요..",Previous:an,"Reference link":"참조 링크",Remove:sn,"Remove this name":"이 명칭 삭제",Reset:rn,"Submit anyway":"계속 제출","Submit palettes":"제출 팔레트",White:cn,"Your inputs contain the following errors. Please consider fixing it before submitting.":"당신의 입력에 다음과 같은 문제가 있으니 제출하기 전에 수정하는 것을 고려해 주세요."},un=new V.Builder().withResource("en",de).withResource("zh-Hans",Pe).withResource("zh-Hant",je).withResource("ko",ln).build();D.use(K).init({lng:N.getLanguage(),fallbackLng:{[d.ChineseCN]:[d.ChineseSimp,d.English],[d.ChineseHK]:[d.ChineseTrad,d.English],[d.ChineseTW]:[d.ChineseTrad,d.English],[d.ChineseTrad]:[d.ChineseHK,d.ChineseTW,d.English],default:[d.English]},resources:un}).then(e=>{document.title=e("Palette"),document.documentElement.lang=D.language});const dn=e=>{D.changeLanguage(e).then(),document.title=D.t("Palette"),document.documentElement.lang=e};N.onLanguageChange(dn);const En="modulepreload",mn=function(e){return"/rmg-palette/"+e},O={},B=function(n,t,s){if(!t||t.length===0)return n();const o=document.getElementsByTagName("link");return Promise.all(t.map(a=>{if(a=mn(a),a in O)return;O[a]=!0;const r=a.endsWith(".css"),c=r?'[rel="stylesheet"]':"";if(!!s)for(let h=o.length-1;h>=0;h--){const C=o[h];if(C.href===a&&(!r||C.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${c}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":En,r||(i.as="script",i.crossOrigin=""),i.href=a,document.head.appendChild(i),r)return new Promise((h,C)=>{i.addEventListener("load",h),i.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${a}`)))})})).then(()=>n())};function gn(){const{t:e}=J(),n=N.getEnv(),t=N.getAppVersion();return I(M,{children:[l(q,{as:"h4",size:"md",children:e("Palette")}),l(Q,{environment:n,version:t})]})}const yn=A.lazy(()=>B(()=>import("./palette-view-af3b1368.js"),["assets/palette-view-af3b1368.js","assets/vendor-6fddc59b.js","assets/index.esm-b31c7325.js"])),Nn=A.lazy(()=>B(()=>import("./ticket-view-2794fd4b.js"),["assets/ticket-view-2794fd4b.js","assets/vendor-6fddc59b.js","assets/index.esm-b31c7325.js"]));function hn(){return l(X,{basename:"/rmg-palette/",children:I(ee,{children:[l(gn,{}),I(ne,{children:[l(v,{path:"/new",element:l(P,{suspenseFallback:l(U,{isIndeterminate:!0}),children:l(Nn,{})})}),l(v,{path:"/",element:l(P,{suspenseFallback:l(U,{isIndeterminate:!0}),children:l(yn,{})})})]})]})})}let R;const Cn=()=>{R=te(document.getElementById("root")),R.render(l(A.StrictMode,{children:l(oe,{store:x,children:l(ae,{theme:ie,children:l(se,{i18n:D,children:l(hn,{})})})})}))};N.ready().then(()=>{Cn(),N.injectCss(),N.event(T.APP_LOAD,{isStandaloneWindow:N.isStandaloneWindow()})});export{In as A,An as B,Yn as C,T as E,_n as G,Ln as I,B as _,pn as __vite_legacy_guard,Kn as a,k as b,Hn as c,vn as d,Pn as e,Un as f,wn as g,Rn as h,bn as i,Fn as j,Sn as k,Tn as l,kn as m,$n as n,zn as o,Vn as p,Wn as q,On as r,fn as s,u as t,Jn as u,jn as v,Gn as w,xn as x,Bn as y,Zn as z};
