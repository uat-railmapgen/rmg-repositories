var D=Object.defineProperty;var o=(n,a)=>D(n,"name",{value:a,configurable:!0});var I=o(function(n){return new Promise(function(a){setTimeout(a,n)})},"waitFor"),p;(function(n){n.DEV="DEV",n.UAT="UAT",n.PRD="PRD"})(p||(p={}));var E;(function(n){n.GITHUB="GitHub",n.GITLAB="GitLab",n.BITBUCKET="Bitbucket",n.LOCALHOST="localhost",n.UNKNOWN="unknown"})(E||(E={}));var _=globalThis&&globalThis.__awaiter||function(n,a,t,u){function i(e){return e instanceof t?e:new t(function(s){s(e)})}return o(i,"adopt"),new(t||(t=Promise))(function(e,s){function g(c){try{r(u.next(c))}catch(d){s(d)}}o(g,"fulfilled");function v(c){try{r(u.throw(c))}catch(d){s(d)}}o(v,"rejected");function r(c){c.done?e(c.value):i(c.value).then(g,v)}o(r,"step"),r((u=u.apply(n,a||[])).next())})},U=globalThis&&globalThis.__generator||function(n,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,s;return s={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function g(r){return function(c){return v([r,c])}}function v(r){if(u)throw new TypeError("Generator is already executing.");for(;t;)try{if(u=1,i&&(e=r[0]&2?i.return:r[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,r[1])).done)return e;switch(i=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return t.label++,{value:r[1],done:!1};case 5:t.label++,i=r[1],r=[0];continue;case 7:r=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){t.label=r[1];break}if(r[0]===6&&t.label<e[1]){t.label=e[1],e=r;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(r);break}e[2]&&t.ops.pop(),t.trys.pop();continue}r=a.call(n,t)}catch(c){r=[6,c],i=0}finally{u=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},T="rmg-unknown",y="unknown",L=p.PRD,C=E.UNKNOWN,A=!1,R=o(function(){return _(void 0,void 0,void 0,function(){var n,a,t,u;return U(this,function(i){switch(i.label){case 0:return n=window.location.pathname.split("/")[1],a=n?"/".concat(n,"/info.json"):"/info.json",[4,fetch(a)];case 1:return t=i.sent(),t.ok?[4,t.json()]:[3,3];case 2:u=i.sent(),T=u.component,y=u.version,L=u.environment,C=u.instance,i.label=3;case 3:return[2]}})})},"fetchInfoJson"),x=o(function(){return _(void 0,void 0,void 0,function(){var n,a;return U(this,function(t){switch(t.label){case 0:n=20,a=0,t.label=1;case 1:return a++<n?A?[2]:[3,2]:[3,5];case 2:return console.log("[rmg-runtime] Config is not ready yet. Attempt: ".concat(a,"/").concat(n)),[4,I(500)];case 3:t.sent(),t.label=4;case 4:return[3,1];case 5:return A=!0,console.error("[rmg-runtime] Failed to load config after 10 seconds"),[2]}})})},"waitForSettled"),k=o(function(){return T},"getComponent"),O=o(function(){return y},"getVersion"),F=o(function(){return L},"getEnvironment"),j=o(function(){return C},"getInstance");R().finally(function(){A=!0});const l={waitForSettled:x,getComponent:k,getVersion:O,getEnvironment:F,getInstance:j};window.dataLayer=window.dataLayer||[];var V=o(function(){var n=document.createElement("script");n.async=!0,n.src="https://www.googletagmanager.com/gtag/js?id=G-2HP8Y4MRRQ",document.head.append(n)},"installGtag");function S(){for(var n=[],a=0;a<arguments.length;a++)n[a]=arguments[a];if(l.getEnvironment()!==p.DEV)return window.dataLayer.push(arguments);console.log("[rmg-runtime] Not going to send event in DEV environment",n)}o(S,"gtag");var H=o(function(n,a){S("event",n,a)},"customEvent"),W=o(function(){V(),S("js",new Date),S("config","G-2HP8Y4MRRQ",{appName:l.getComponent(),version:l.getVersion(),environment:l.getEnvironment(),instance:l.getInstance()})},"initLogger");l.waitForSettled().then(function(){W()});const B={customEvent:H};var K="rmg-runtime-channel",h={},N=new BroadcastChannel(K);N.onmessage=function(n){var a,t=n.data,u=t.event,i=t.data,e=t.frameId;(a=h[u])===null||a===void 0||a.forEach(function(s){return s(i,e)})};var Y=o(function(n,a){var t;N.postMessage({event:n,data:a,frameId:(t=window.frameElement)===null||t===void 0?void 0:t.id})},"postEvent"),$=o(function(n,a){var t;n in h?(t=h[n])===null||t===void 0||t.push(a):h[n]=[a]},"onMessage");const w={postEvent:Y,onMessage:$};var f;(function(n){n.SET_LANGUAGE="SET_LANGUAGE",n.OPEN_APP="OPEN_APP",n.UPDATE_URL="UPDATE_URL"})(f||(f={}));var G=o(function(){return!window.frameElement},"isStandaloneWindow"),z=o(function(){if(!G()){var n=document.createElement("style");n.textContent=".rmg-window__header{display: none !important;}",document.head.append(n)}},"injectCss"),Q=o(function(n){w.postEvent(f.OPEN_APP,n)},"openApp"),J=o(function(n){w.postEvent(f.UPDATE_URL,n)},"updateUrl"),X=o(function(n){w.onMessage(f.OPEN_APP,n)},"onAppOpen"),q=o(function(n){w.onMessage(f.UPDATE_URL,n)},"onUrlUpdate");const m={isStandaloneWindow:G,injectCss:z,openApp:Q,onAppOpen:X,updateUrl:J,onUrlUpdate:q};var P="rmg-runtime__language",M=["en","zh-Hans","zh-Hant"],Z=o(function(n){M.includes(n)&&(w.postEvent(f.SET_LANGUAGE,n),window.localStorage.setItem(P,n))},"setLanguage"),nn=o(function(){var n=window.localStorage.getItem(P);return n&&M.includes(n)?n:"en"},"getLanguage"),en=o(function(n){w.onMessage(f.SET_LANGUAGE,n)},"onLanguageChange");const b={setLanguage:Z,getLanguage:nn,onLanguageChange:en};var tn=new Date().getTime();function rn(){var n=l.getComponent(),a=window.localStorage.getItem(n+"__startTime");return a===null?new Date().getTime()-tn:new Date().getTime()-Number(a)}o(rn,"getMsSinceStartUp");const an={getMsSinceStartUp:rn};var on=o(function(){var n=l.getComponent();if(n==="rmg-unknown"){console.log("[rmg-runtime] Unable to clear storage for unknown app");return}n==="railmapgen.github.io"&&(n="rmg-home");for(var a=0;a<window.localStorage.length;){var t=window.localStorage.key(a);t!=null&&t.startsWith(n+"__")?(window.localStorage.removeItem(t),console.log("[rmg-runtime] Removed item ".concat(t))):a++}},"clearStorageForCurrentApp");const un={clearStorageForCurrentApp:on};var cn=globalThis&&globalThis.__awaiter||function(n,a,t,u){function i(e){return e instanceof t?e:new t(function(s){s(e)})}return o(i,"adopt"),new(t||(t=Promise))(function(e,s){function g(c){try{r(u.next(c))}catch(d){s(d)}}o(g,"fulfilled");function v(c){try{r(u.throw(c))}catch(d){s(d)}}o(v,"rejected");function r(c){c.done?e(c.value):i(c.value).then(g,v)}o(r,"step"),r((u=u.apply(n,a||[])).next())})},sn=globalThis&&globalThis.__generator||function(n,a){var t={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},u,i,e,s;return s={next:g(0),throw:g(1),return:g(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function g(r){return function(c){return v([r,c])}}function v(r){if(u)throw new TypeError("Generator is already executing.");for(;t;)try{if(u=1,i&&(e=r[0]&2?i.return:r[0]?i.throw||((e=i.return)&&e.call(i),0):i.next)&&!(e=e.call(i,r[1])).done)return e;switch(i=0,e&&(r=[r[0]&2,e.value]),r[0]){case 0:case 1:e=r;break;case 4:return t.label++,{value:r[1],done:!1};case 5:t.label++,i=r[1],r=[0];continue;case 7:r=t.ops.pop(),t.trys.pop();continue;default:if(e=t.trys,!(e=e.length>0&&e[e.length-1])&&(r[0]===6||r[0]===2)){t=0;continue}if(r[0]===3&&(!e||r[1]>e[0]&&r[1]<e[3])){t.label=r[1];break}if(r[0]===6&&t.label<e[1]){t.label=e[1],e=r;break}if(e&&t.label<e[2]){t.label=e[2],t.ops.push(r);break}e[2]&&t.ops.pop(),t.trys.pop();continue}r=a.call(n,t)}catch(c){r=[6,c],i=0}finally{u=e=0}if(r[0]&5)throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}},ln={ready:function(){return cn(void 0,void 0,void 0,function(){return sn(this,function(n){switch(n.label){case 0:return[4,Promise.all([l.waitForSettled()])];case 1:return n.sent(),[2]}})})},getAppName:l.getComponent,getAppVersion:l.getVersion,getEnv:l.getEnvironment,getInstance:l.getInstance,event:B.customEvent,isStandaloneWindow:m.isStandaloneWindow,injectCss:m.injectCss,openApp:m.openApp,onAppOpen:m.onAppOpen,updateUrl:m.updateUrl,onUrlUpdate:m.onUrlUpdate,setLanguage:b.setLanguage,getLanguage:b.getLanguage,onLanguageChange:b.onLanguageChange,clearStorageForCurrentApp:un.clearStorageForCurrentApp,getMsSinceStartUp:an.getMsSinceStartUp};window.rmgRuntime=ln;export{p as R,ln as r};
//# sourceMappingURL=index.100218d1.js.map
