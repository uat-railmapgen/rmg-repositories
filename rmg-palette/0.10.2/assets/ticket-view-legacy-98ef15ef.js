!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(R){l=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),c=new O(r||[]);return i(a,"_invoke",{value:C(e,n,c)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}n.wrap=f;var d={};function p(){}function v(){}function y(){}var g={};l(g,c,(function(){return this}));var m=Object.getPrototypeOf,x=m&&m(m(E([])));x&&x!==r&&o.call(x,c)&&(g=x);var j=y.prototype=p.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function w(t,n){function r(i,a,c,u){var s=h(t[i],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==e(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):n.resolve(f).then((function(e){l.value=e,c(l)}),(function(e){return r("throw",e,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,o){r(e,t,n,o)}))}return a=a?a.then(o,o):o()}})}function C(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=k(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function k(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function E(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=y,i(j,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,l(e,s,"GeneratorFunction")),e.prototype=Object.create(j),e},n.awrap=function(e){return{__await:e}},b(w.prototype),l(w.prototype,u,(function(){return this})),n.AsyncIterator=w,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new w(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(j),l(j,s,"Generator"),l(j,c,(function(){return this})),l(j,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=E,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;L(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:E(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(s){return void n(s)}c.done?t(u):Promise.resolve(u).then(r,o)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function c(e){n(a,o,i,c,u,"next",e)}function u(e){n(a,o,i,c,u,"throw",e)}c(void 0)}))}}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,s=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(l){s=!0,o=l}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./chakra-legacy-c35d0d84.js","./react-legacy-2ad49228.js","./index-legacy-3f6c9ae7.js","./rmg-fields-legacy-c1de50b3.js","./index.esm-legacy-483d3798.js"],(function(e,n){"use strict";var i,a,s,l,f,h,d,p,v,y,g,m,x,j,b,w,C,k,S,L,O,E,P,R,z,I,N,A,U,_,D,M,F,T,G,q,J,B,W,Y,H,K,V,$,Q,Z,X,ee,te,ne,re,oe,ie,ae,ce,ue,se,le,fe,he,de,pe,ve,ye,ge,me,xe,je,be,we,Ce,ke,Se,Le,Oe,Ee,Pe,Re,ze;return{setters:[function(e){i=e.j,a=e._,s=e.H,l=e.B,f=e.Z,h=e.t,d=e.F,p=e.$,v=e.f,y=e.s,g=e.a0,m=e.e,x=e.v,j=e.w,b=e.a1,w=e.x,C=e.a2,k=e.a3,S=e.M,L=e.a4,O=e.q,E=e.r},function(e){P=e.u,R=e.r,z=e.a,I=e.n},function(e){N=e.h,A=e.L,U=e.d,_=e.a,D=e.c,M=e.i,F=e.j,T=e.k,G=e.l,q=e.m,J=e.n,B=e.e,W=e.o,Y=e.q,H=e.t,K=e.v,V=e.w,$=e.g,Q=e.p,Z=e.x,X=e.y,ee=e.z,te=e.M,ne=e.A,re=e.B,oe=e.C,ie=e.D,ae=e.F,ce=e.G,ue=e.H,se=e.I,le=e.J,fe=e.K,he=e.N,de=e.O,pe=e.P,ve=e.Q,ye=e.S,ge=e.T,me=e.f,xe=e.r,je=e.E},function(e){be=e.R},function(e){we=e.u,Ce=e.a,ke=e.b,Se=e.c,Le=e.d,Oe=e.M,Ee=e.e,Pe=e.f,Re=e.g,ze=e.h}],execute:function(){e("default",(function(){var e=P().t,t=U(),n=I(),r=o(R.useState(),2),c=r[0],u=r[1],s=o(R.useState(!1),2),l=s[0],f=s[1],h=o(R.useState(!1),2),p=h[0],y=h[1];R.useEffect((function(){var e=window.localStorage.getItem(ye);if(e)try{var t=JSON.parse(e);Object.keys(t.lines).length>0&&Object.values(t.lines)[0].id&&(u(t),f(!0))}catch(n){console.error("TicketView:: unable to restore draft ticket",e)}}),[]);return i.jsxs(me,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[i.jsxs(d,{direction:"column",flex:1,overflowY:"auto",children:[i.jsx(Ae,{}),i.jsx(Ue,{}),i.jsx(Ge,{})]}),i.jsxs(d,{my:2,children:[i.jsx(v,{size:"sm",onClick:function(){xe.isStandaloneWindow()?n("/"):xe.openApp("rmg-palette")},children:e("Go back")}),i.jsxs(a,{ml:"auto",children:[i.jsx(v,{size:"sm",variant:"outline",onClick:function(){t(ge()),window.localStorage.removeItem(ye),xe.event(je.RESET_TICKET,{})},children:e("Reset")}),i.jsx(v,{size:"sm",colorScheme:"primary",onClick:function(){return y(!0)},children:e("Submit")})]})]}),i.jsx(He,{isOpen:l,onClose:function(){return f(!1)},incomingState:c}),i.jsx(Ye,{isOpen:p,onClose:function(){return y(!1)}})]})}));var n={"& > div:first-of-type":{flex:1}},Ie=function(e){var t,r=e.onUpdate,f=e.onLangSwitch,h=e.onRemove,d=null!==(t=e.entries)&&void 0!==t?t:[],p=P().t,v=we(),y=function(e,t){return[{type:"select",label:p("Language"),value:e,options:Object.entries(A).reduce((function(e,t){return c(c({},e),{},u({},t[0],v(t[1])))}),{}),disabledOptions:d.filter((function(t){return t[0]!==e})).map((function(e){return e[0]})),onChange:function(t){return f(e,t)}},{type:"input",label:p("Name"),value:t,onChange:function(t){return r(e,t)},validator:function(e){return!!e}}]},g=function(){var e=Object.keys(A).filter((function(e){return!d.find((function(t){return t[0]===e}))}))[0];r(e,"")};return i.jsx(i.Fragment,{children:d.map((function(e,t,r){var c=o(e,2),u=c[0],f=c[1];return i.jsxs(a,{sx:n,"data-testid":"entry-card-stack-"+u,children:[i.jsx(be,{fields:y(u,f),noLabel:t>0}),t===r.length-1?i.jsx(s,{size:"sm",variant:"ghost","aria-label":p("Add a name in another language"),title:p("Add a name in another language"),onClick:g,icon:i.jsx(Ce,{})}):i.jsx(l,{minW:8}),r.length>1&&i.jsx(s,{size:"sm",variant:"ghost","aria-label":p("Remove this name"),title:p("Remove this name"),onClick:function(){return h(u)},icon:i.jsx(ke,{})})]},t)}))})};function Ne(e){return i.jsx(N,{direction:"column",children:i.jsx(Ie,c({},e))})}function Ae(){var e=P(),t=e.t,n=e.i18n,r=we(),o=U(),a=_((function(e){return e.ticket})),s=a.country,h=a.newCountry,d=a.countryName,p=a.newCountryLang,v=c(c({},D.map((function(e){return[e.id,r(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],n.languages[0])})).reduce((function(e,t){return"UN"===t[0]?e:c(c({},e),{},u({},t[0],t[1]))}),{"":t("Please select...")})),{},{new:t("Add a country/region...")}),y=Object.entries(A).reduce((function(e,t){return c(c({},e),{},u({},t[0],r(t[1])))}),{}),g=[{type:"select",label:t("Country/Region"),value:s,options:v,disabledOptions:[""],onChange:function(e){return o(M(e))}},{type:"input",label:t("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:h,onChange:function(e){return o(F(e))},hidden:"new"!==s},{type:"select",label:t("Official language"),value:p,options:y,onChange:function(e){return o(T(e||void 0))},hidden:"new"!==s}];return i.jsxs(l,{as:"section",children:[i.jsx(f,{as:"h5",size:"sm",mb:2,children:t("Country/Region")}),i.jsx(be,{fields:g}),"new"===s&&i.jsx(Ne,{entries:d,onUpdate:function(e,t){return o(G({lang:e,name:t}))},onLangSwitch:function(e,t){return o(q({prevLang:e,nextLang:t}))},onRemove:function(e){return o(J(e))}})]})}function Ue(){var e=P(),n=e.t,o=e.i18n,a=U(),s=we(),h=_((function(e){return e.ticket})),d=h.country,p=h.city,v=h.newCity,y=h.cityName,g=c(c({},B.filter((function(e){return e.country===d})).map((function(e){return[e.id,s(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],o.languages[0])})).reduce((function(e,t){return c(c({},e),{},u({},t[0],t[1]))}),{"":n("Please select...")})),{},{new:n("Add a city")+"..."}),m=function(){var e=r(t().mark((function e(n){var r;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("new"!==n){e.next=3;break}return a(V("new")),e.abrupt("return");case 3:return e.next=5,$(n);case 5:r=e.sent,a(r?Q(r):Z());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=[{type:"select",label:n("City"),value:p,options:g,disabledOptions:[""],onChange:function(e){return m(e)}},{type:"input",label:n("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:v,onChange:function(e){return a(W(e))},validator:function(e){return""!==e&&!e.match(/[^a-z]/)},hidden:"new"!==p}];return i.jsxs(l,{as:"section",children:[i.jsx(f,{as:"h5",size:"sm",mt:3,mb:2,children:n("City")}),i.jsx(be,{fields:x}),"new"===p&&i.jsx(Ne,{entries:y,onUpdate:function(e,t){return a(Y({lang:e,name:t}))},onLangSwitch:function(e,t){return a(H({prevLang:e,nextLang:t}))},onRemove:function(e){return a(K(e))}})]})}var _e=function(e){return'{ getColor(code:"'.concat(e,'") { code, rgb { r g b }, hex, cmyk { c m y k } } }')},De=function(){var e=r(t().mark((function e(n,r){var o,i;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:_e(n)}),signal:r});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return","#"+i.data.getColor.hex);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function Me(){var e=P().t,t=U(),n=_((function(e){return e.app})).pantoneReady;return R.useEffect((function(){var e=new AbortController;return De("130 C",e.signal).then((function(e){return t(X(!!e))})).catch((function(){return t(X(!1))})),function(){e.abort()}}),[]),i.jsx(h,{as:"i",fontSize:"xs",children:void 0===n?e("Checking Pantone service availability..."):n?e("Pantone service is ready")+" ✅":e("Pantone service is not available")+" ⚠️"})}function Fe(e){var n,a,c=e.lineDetail,s=e.onUpdate,l=P().t,f=_((function(e){return e.app})).pantoneReady,h=o(R.useState(c.pantone?"pantone":"hex"),2),d=h[0],p=h[1],v=o(R.useState(null!==(n=c.pantone)&&void 0!==n?n:""),2),y=v[0],g=v[1],m=R.useRef(new AbortController);R.useEffect((function(){return function(){var e;null===(e=m.current)||void 0===e||e.abort()}}),[]);var x=function(){var e=r(t().mark((function e(n){var r,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m.current.abort(),f){e.next=3;break}return e.abrupt("return");case 3:return m.current=new AbortController,e.prev=4,e.next=7,De(n,m.current.signal);case 7:r=e.sent,s({pantone:n,colour:r}),g(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),z.flushSync((function(){g(n)})),g(null!==(o=c.pantone)&&void 0!==o?o:"");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),j=[{label:"RGB",value:"hex"},{label:l("Pantone"),value:"pantone"}],b=[{type:"input",label:l("Line code"),placeholder:"e.g. twl, gz1, sh1",value:c.id,onChange:function(e){return s({id:e})},validator:function(e){return""!==e&&!e.match(/[^a-z0-9]/)}},{type:"custom",label:l("Colour mode"),component:i.jsx(ee,{selections:j,defaultValue:d,onChange:function(e){return p(e)}}),hidden:!f},{type:"input",label:l("Background colour"),variant:"color",value:c.colour,onChange:function(e){return s({colour:e})},hidden:f&&"pantone"===d},{type:"input",label:l("Pantone code"),value:y,onChange:x,debouncedDelay:1500,hidden:!f||"pantone"!==d},{type:"select",label:l("Foreground colour"),value:c.fg,options:(a={},u(a,te.white,l("White")),u(a,te.black,l("Black")),a),onChange:function(e){return s({fg:e})}}];return i.jsx(be,{fields:b})}function Te(e){var t=e.lineDetail,n=e.editable,r=e.onUpdate,c=e.onMoveUp,u=e.onMoveDown,l=e.onCopy,f=e.onRemove,h=e.onNameUpdate,p=e.onLangSwitch,v=e.onNameRemove,y=P().t,g=we(),m=o(R.useState(!1),2),x=m[0],j=m[1],b=R.useMemo((function(){return{bg:t.colour,m:-1,w:"calc(100% + var(--chakra-space-1) * 2)",px:2,"&, button":{color:t.fg},"& > div":{ml:"auto"}}}),[t.colour,t.fg]),w=g(Object.fromEntries(t.nameEntity));return i.jsxs(N,{direction:"column",sx:{pb:0},children:[i.jsxs(N,{sx:b,children:[w,n&&i.jsxs(a,{spacing:.5,children:[i.jsx(s,{size:"xs",variant:"ghost","aria-label":y("Move up"),title:y("Move up"),icon:i.jsx(Se,{}),onClick:c}),i.jsx(s,{size:"xs",variant:"ghost","aria-label":y("Move down"),title:y("Move down"),icon:i.jsx(Le,{}),onClick:u}),i.jsx(s,{size:"xs",variant:"ghost","aria-label":y("Edit"),title:y("Edit"),icon:i.jsx(Oe,{}),onClick:function(){return j((function(e){return!e}))}}),i.jsx(s,{size:"xs",variant:"ghost","aria-label":y("Duplicate"),title:y("Duplicate"),icon:i.jsx(Ee,{}),onClick:l}),i.jsx(s,{size:"xs",variant:"ghost","aria-label":y("Remove"),title:y("Remove"),icon:i.jsx(ke,{}),onClick:f})]})]}),x&&i.jsxs(d,{direction:"column",my:1,children:[i.jsx(Fe,{lineDetail:t,onUpdate:function(e){return null==r?void 0:r(e)}}),i.jsx(Ie,{entries:t.nameEntity,onUpdate:function(e,t){return null==h?void 0:h(e,t)},onLangSwitch:function(e,t){return null==p?void 0:p(e,t)},onRemove:function(e){return null==v?void 0:v(e)}})]})]})}function Ge(){var e=P().t,t=U(),n=_((function(e){return e.ticket.lines}));return i.jsxs(l,{as:"section",children:[i.jsxs(d,{mt:3,mb:2,alignItems:"center",children:[i.jsx(f,{as:"h5",size:"sm",mr:"auto",children:e("Lines")}),i.jsx(Me,{})]}),i.jsxs(p,{spacing:1,children:[Object.entries(n).map((function(e){var n=o(e,2),r=n[0],a=n[1];return i.jsx(Te,{lineDetail:a,editable:!0,onUpdate:function(e){return t(ne({entryId:r,updates:e}))},onMoveUp:function(){return t(re(r))},onMoveDown:function(){return t(oe(r))},onCopy:function(){return t(ie(r))},onRemove:function(){return t(ae(r))},onNameUpdate:function(e,n){return t(ce({entryId:r,lang:e,name:n}))},onLangSwitch:function(e,n){return t(ue({entryId:r,prevLang:e,nextLang:n}))},onNameRemove:function(e){return t(se({entryId:r,lang:e}))}},r)})),i.jsx(v,{size:"xs",variant:"ghost",leftIcon:i.jsx(Ce,{}),ml:"auto !important",onClick:function(){return t(le())},children:e("Add a line")})]})]})}function qe(e){var t=e.countryErrors,n=e.cityErrors,r=e.lineErrors,c=e.onIgnore,u=e.onClose,s=P().t,l=we();return i.jsxs(i.Fragment,{children:[i.jsxs(y,{children:[i.jsx(h,{children:s("Your inputs contain the following errors. Please consider fixing it before submitting.")}),t.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(f,{as:"h5",size:"sm",my:2,children:s("Country/Region")}),i.jsx(g,{"aria-label":"List of country errors",children:t.map((function(e,t){return i.jsx(m,{children:l(fe[e])},t)}))})]}),n.length>0&&i.jsxs(i.Fragment,{children:[i.jsx(f,{as:"h5",size:"sm",my:2,children:s("City")}),i.jsx(g,{"aria-label":"List of city errors",children:n.map((function(e,t){return i.jsx(m,{children:l(fe[e])},t)}))})]}),Object.values(r).flat().length>0&&i.jsxs(i.Fragment,{children:[i.jsx(f,{as:"h5",size:"sm",my:2,children:s("Lines")}),i.jsx(g,{"aria-label":"List of line errors",children:Object.entries(r).map((function(e){var t=o(e,2),n=t[0],r=t[1];return i.jsxs(m,{children:[n,i.jsx(g,{children:r.map((function(e,t){return i.jsx(m,{children:l(fe[e])},t)}))})]},n)}))})]})]}),i.jsx(x,{children:i.jsxs(a,{children:[i.jsx(v,{onClick:c,children:s("Submit anyway")}),i.jsx(v,{colorScheme:"primary",onClick:u,children:s("Go back")})]})})]})}var Je=function(e){var t;return!(null===(t=e.match(/^https?:\/\//))||void 0===t||!t[0])};function Be(e){var t=e.refLink,n=e.onRefLinkChange,r=e.justification,o=e.onJustificationChange,a=e.onPrev,c=e.onNext,u=P().t,s=[{type:"input",value:t,label:u("Reference link"),placeholder:u("Enter a valid URL"),onChange:n,validator:Je},{type:"textarea",value:r,label:u("Justification"),placeholder:u("Briefly describe your changes and provide justification"),onChange:o}],l=!t||!r||!Je(t);return i.jsxs(i.Fragment,{children:[i.jsxs(y,{children:[i.jsx(h,{children:u("Please provide suitable source and justification.")}),i.jsx(be,{fields:s,minW:"full"})]}),i.jsxs(x,{children:[a&&i.jsx(v,{variant:"ghost",onClick:a,mr:"auto",leftIcon:i.jsx(Pe,{}),children:u("Previous")}),i.jsx(v,{colorScheme:"primary",onClick:c,rightIcon:i.jsx(Re,{}),isDisabled:l,children:u("Next")})]})]})}function We(e){var n,o,a=e.countryEntry,c=e.cityEntry,u=e.paletteList,s=e.refLink,l=e.justification,f=e.onPrev,d=P().t,p=j("primary.500","primary.300"),g=R.useRef(null),k=["**Reference link:** ".concat(s||"(REPLACE ME)"),"**Justification:** ".concat(l||"(REPLACE ME)"),he,de("country",a),de("city",c),de("lines",u)].join("\n\n"),S=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==c||null===(n=c.name)||void 0===n?void 0:n.en),body:k}),L=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==c||null===(o=c.name)||void 0===o?void 0:o.en)}),O=function(){var e=r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==g||!g.current){e.next=4;break}return g.current.select(),e.next=4,navigator.clipboard.writeText(k);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.jsxs(i.Fragment,{children:[i.jsxs(y,{children:[i.jsx(h,{children:d("If the button below doesn't work for you, please follow the instructions below:")}),i.jsxs(b,{children:[i.jsxs(m,{children:[d("Open")," ",i.jsxs(w,{color:p,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+L.toString(),isExternal:!0,children:["Issue: New Palettes Request ",i.jsx(C,{as:ze})]})]}),i.jsxs(m,{children:[d("Paste following text to the issue body")," ",i.jsx(v,{size:"xs",leftIcon:i.jsx(Ee,{}),onClick:O,children:d("Copy")}),i.jsx(pe,{ref:g,isReadOnly:!0,defaultValue:k,onClick:function(e){return e.target.select()}})]})]})]}),i.jsxs(x,{children:[i.jsx(v,{variant:"ghost",onClick:f,mr:"auto",leftIcon:i.jsx(Pe,{}),children:d("Previous")}),i.jsx(v,{colorScheme:"primary",onClick:function(){return window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+S.toString(),"_blank")},children:d("1-click open issue")})]})]})}function Ye(e){var t=e.isOpen,n=e.onClose,r=P().t,a=o(R.useState([]),2),c=a[0],u=a[1],s=o(R.useState([]),2),l=s[0],f=s[1],h=o(R.useState({}),2),d=h[0],p=h[1],v=o(R.useState(""),2),y=v[0],g=v[1],m=o(R.useState(""),2),x=m[0],j=m[1],b=o(R.useState(!1),2),w=b[0],C=b[1],z=o(R.useState(!1),2),I=z[0],N=z[1],A=_((function(e){return e.ticket})),U=ve.getCountryEntry(A),D=ve.getCityEntry(A),M=ve.getPalettes(A);R.useEffect((function(){t?(u(ve.getCountryErrors(A)),f(ve.getCityErrors(A)),p(ve.getLineErrors(A))):(C(!1),g(""),j(""),N(!1))}),[t]);var F=c.length>0||l.length>0||Object.values(d).flat().length>0,T=F&&!w,G=!T&&!I;return i.jsxs(k,{blockScrollOnMount:!1,isOpen:t,onClose:n,scrollBehavior:"inside",children:[i.jsx(S,{}),i.jsxs(L,{children:[i.jsx(O,{children:r("Submit palettes")}),i.jsx(E,{onClick:function(){T||G||window.localStorage.removeItem(ye),n()}}),T&&i.jsx(qe,{countryErrors:c,cityErrors:l,lineErrors:d,onIgnore:function(){return C(!0)},onClose:n}),G&&i.jsx(Be,{refLink:y,onRefLinkChange:g,justification:x,onJustificationChange:j,onPrev:F?function(){return C(!1)}:void 0,onNext:function(){return N(!0)}}),!T&&!G&&i.jsx(We,{countryEntry:U,cityEntry:D,paletteList:M,refLink:y,justification:x,onPrev:function(){return N(!1)}})]})]})}function He(e){var t=e.isOpen,n=e.onClose,r=e.incomingState,o=P().t,c=U();return i.jsxs(k,{isOpen:t,onClose:n,children:[i.jsx(S,{}),i.jsxs(L,{children:[i.jsx(O,{children:o("Unsaved draft")}),i.jsx(E,{}),i.jsx(y,{children:o("Do you want to continue with your last unsaved ticket?")}),i.jsx(x,{children:i.jsxs(a,{children:[i.jsx(v,{onClick:function(){window.localStorage.removeItem(ye),n()},children:o("Discard")}),i.jsx(v,{colorScheme:"primary",onClick:function(){r&&c(ge(r)),n()},children:o("Continue")})]})})]})]})}}}}))}();
