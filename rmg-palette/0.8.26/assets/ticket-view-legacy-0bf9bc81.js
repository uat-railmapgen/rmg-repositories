!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(s){l=!0,o=s}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(R){s=function(e,t,n){return e[t]=n}}function f(e,t,n,r){var o=t&&t.prototype instanceof p?t:p,a=Object.create(o.prototype),c=new S(r||[]);return i(a,"_invoke",{value:k(e,n,c)}),a}function h(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}t.wrap=f;var d={};function p(){}function y(){}function v(){}var g={};s(g,c,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(L([])));b&&b!==n&&o.call(b,c)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function C(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(t,n){function r(i,a,c,u){var l=h(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==e(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u)}),(function(e){r("throw",e,c,u)})):n.resolve(f).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,o){r(e,t,n,o)}))}return a=a?a.then(o,o):o()}})}function k(e,t,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return P()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=E(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(e,t,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function E(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),d;var o=h(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var i=o.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function L(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(o.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=s(v,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},C(x.prototype),s(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},C(w),s(w,l,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:L(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},t}function o(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(l){return void n(l)}c.done?t(u):Promise.resolve(u).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function c(e){o(a,r,i,c,u,"next",e)}function u(e){o(a,r,i,c,u,"throw",e)}c(void 0)}))}}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./vendor-legacy-2ad94cb0.js","./index-legacy-9d5198cb.js","./use-translated-name-legacy-911403a0.js"],(function(e,n){"use strict";var o,a,l,s,f,h,d,p,y,v,g,m,b,w,C,x,k,E,j,O,S,L,P,R,I,z,A,N,_,T,G,U,q,B,J,D,F,M,W,Y,K,H,V,$,Q,X,Z,ee,te,ne,re,oe,ie,ae,ce,ue,le,se,fe,he,de,pe,ye,ve,ge,me,be,we,Ce,xe,ke,Ee,je,Oe,Se,Le;return{setters:[function(e){o=e.h,a=e.l,l=e.$,s=e.j,f=e.o,h=e.O,d=e.I,p=e.a0,y=e.a1,v=e.a2,g=e.L,m=e.b,b=e.K,w=e.H,C=e.w,x=e.a3,k=e.a4,E=e.M,j=e.U,O=e.a5,S=e.W,L=e.a6,P=e.Y,R=e.a7,I=e.Q,z=e.a8,A=e.a9,N=e.aa,_=e.ab,T=e.ac,G=e.ad,U=e.ae,q=e.af,B=e.ag,J=e.ah,D=e.ai,F=e.aj,M=e.ak,W=e.al,Y=e.am,K=e.an,H=e.ao,V=e.J,$=e._,Q=e.r},function(e){X=e.t,Z=e.b,ee=e.a,te=e.u,ne=e.c,re=e.d,oe=e.e,ie=e.f,ae=e.g,ce=e.r,ue=e.h,le=e.i,se=e.j,fe=e.k,he=e.l,de=e.m,pe=e.n,ye=e.o,ve=e.q,ge=e.v,me=e.w,be=e.x,we=e.y,Ce=e.z,xe=e.I,ke=e.G,Ee=e.A,je=e.B,Oe=e.C,Se=e.E},function(e){Le=e.u}],execute:function(){function n(e){var t,n=e.onUpdate,r=e.onAdd,i=e.onRemove,m=null!==(t=e.entries)&&void 0!==t?t:X.getInitialState(),b=o().t,w=function(e){var t=Z.selectById(m,e);if(!t)return[];var r=t.lang,o=t.name,i=Object.entries(g).reduce((function(e,t){return t[1]!==r&&t[1]in m?e:c(c({},e),{},u({},t[1],t[0]))}),{});return[{type:"select",label:b("Language"),value:r,options:i,onChange:function(t){return n(e,{lang:t})}},{type:"input",label:b("Name"),value:o,onChange:function(t){return n(e,{name:t})},validator:function(e){return""!==e}}]},C=function(){var e=Object.values(g).filter((function(e){return!Object.values(m.entities).find((function(t){return(null==t?void 0:t.lang)===e}))}))[0];r(e)};return a(l,{direction:"column",children:Z.selectIds(m).map((function(e,t){return s(f,{sx:{"& > div:first-of-type":{flex:1}},"data-testid":"entry-card-stack-"+e,children:[a(h,{fields:w(e),noLabel:t>0}),t===m.ids.length-1?a(d,{size:"sm",variant:"ghost","aria-label":b("Add a name in another language"),title:b("Add a name in another language"),onClick:C,icon:a(p,{})}):a(y,{minW:8}),a(d,{size:"sm",variant:"ghost","aria-label":b("Remove this name"),title:b("Remove this name"),onClick:function(){return i(e)},icon:a(v,{})})]},e)}))})}function Pe(){var e=o(),t=e.t,r=e.i18n,i=Le(),l=ee(),f=te((function(e){return e.ticket})),d=f.country,p=f.newCountry,v=f.countryName,C=f.newCountryLang,x=c(c({},m.map((function(e){return[e.id,i(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],r.languages[0])})).reduce((function(e,t){return t[0]===b.UN?e:c(c({},e),{},u({},t[0],t[1]))}),{})),{},{new:t("Add a country/region...")}),k=Object.entries(g).reduce((function(e,t){return c(c({},e),{},u({},t[1],t[0]))}),{"":t("Please select...")}),E=[{type:"select",label:t("Country / Region"),value:d,options:x,onChange:function(e){return l(ne(e))}},{type:"input",label:t("Country/region code"),placeholder:"e.g. CN, HK, JP (ISO 3166-1 alpha-2)",value:p,onChange:function(e){return l(re(e))},hidden:"new"!==d},{type:"select",label:t("Offical language"),value:C,options:k,onChange:function(e){return l(oe(e||void 0))},hidden:"new"!==d}];return s(y,{as:"section",children:[a(w,{as:"h5",size:"sm",mb:2,children:t("Country / Region")}),a(h,{fields:E}),"new"===d&&a(n,{entries:v,onUpdate:function(e,t){return l(ie({id:e,changes:t}))},onAdd:function(e){return l(ae(e))},onRemove:function(e){return l(ce(e))}})]})}function Re(){var e=o().t,t=ee(),r=te((function(e){return e.ticket})),i=r.city,c=r.cityName,u=[{type:"input",label:e("City code"),placeholder:"e.g. hongkong, guangzhou, shanghai",value:i,onChange:function(e){return t(ue(e))},validator:function(e){return""!==e&&!e.match(/[^a-z]/)}}];return s(y,{as:"section",children:[a(w,{as:"h5",size:"sm",mt:3,mb:2,children:e("City")}),a(h,{fields:u}),a(n,{entries:c,onUpdate:function(e,n){return t(le({id:e,changes:n}))},onAdd:function(e){return t(se(e))},onRemove:function(e){return t(fe(e))}})]})}e("default",(function(){var e=o().t,n=ee(),r=V(),i=t(C.useState(!1),2),c=i[0],u=i[1];return s($,{px:2,pt:2,sx:{width:{base:"100%",md:520}},children:[s(O,{direction:"column",flex:1,overflowY:"auto",children:[a(Pe,{}),a(Re,{}),a(_e,{})]}),s(O,{my:2,children:[a(I,{size:"sm",onClick:function(){return r("/")},children:e("Go back")}),s(f,{ml:"auto",children:[a(I,{size:"sm",variant:"outline",onClick:function(){n(Oe()),Q.event(Se.RESET_TICKET,{})},children:e("Reset")}),a(I,{size:"sm",colorScheme:"primary",onClick:function(){return u(!0)},children:e("Submit")})]})]}),a(Be,{isOpen:c,onClose:function(){return u(!1)}})]})}));var Ie=function(e){return'{ getColor(code:"'.concat(e,'") { code, rgb { r g b }, hex, cmyk { c m y k } } }')},ze=function(){var e=i(r().mark((function e(t,n){var o,i;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql",{method:"POST",headers:{"Content-Type":"application/json","x-api-key":"da2-sa3lsp2tkzhj3c2ysxbdprl73e"},body:JSON.stringify({query:Ie(t)}),signal:n});case 2:return o=e.sent,e.next=5,o.json();case 5:return i=e.sent,e.abrupt("return","#"+i.data.getColor.hex);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function Ae(e){var t=e.ready,n=e.onReady,r=o().t;return C.useEffect((function(){var e=new AbortController;return ze("130 C",e.signal).then((function(e){return n(!!e)})).catch((function(){return n(!1)})),function(){e.abort()}}),[]),a(x,{as:"i",fontSize:"xs",children:void 0===t?r("Checking Pantone service availability..."):t?r("Pantone service is ready")+" ✅":r("Pantone service is not available")+" ⚠️"})}function Ne(e){var n,c=e.entryId,l=e.pantoneReady,s=o().t,f=ee(),d=te((function(e){return e.ticket.lines})),p=d[c],y=t(C.useState("hex"),2),v=y[0],g=y[1],m=t(C.useState(""),2),b=m[0],w=m[1],x=C.useRef(new AbortController);C.useEffect((function(){x.current.abort();var e=d[c];null!=e&&e.pantone?(w(e.pantone),g("pantone")):(w(""),g("hex"))}),[c]);var O=function(){var e=i(r().mark((function e(t){var n,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.current.abort(),p&&l){e.next=3;break}return e.abrupt("return");case 3:return x.current=new AbortController,e.prev=4,e.next=7,ze(t,x.current.signal);case 7:n=e.sent,f(ye({entryId:c,pantone:t,hex:n})),w(t),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),j.flushSync((function(){w(t)})),w(null!==(o=p.pantone)&&void 0!==o?o:"");case 16:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t){return e.apply(this,arguments)}}(),S=[{label:"RGB",value:"hex"},{label:s("Pantone"),value:"pantone"}],L=[{type:"input",label:s("Line code"),placeholder:"e.g. twl, gz1, sh1",value:p.id,onChange:function(e){return f(he({entryId:c,lineId:e}))},validator:function(e){return""!==e&&!e.match(/[^a-z0-9]/)}},{type:"custom",label:s("Colour mode"),component:a(k,{selections:S,defaultValue:v,onChange:function(e){return g(e)}}),hidden:!l},{type:"input",label:s("Background colour"),variant:"color",value:p.colour,onChange:function(e){return f(de({entryId:c,bgColour:e}))},hidden:l&&"pantone"===v},{type:"input",label:s("Pantone code"),value:b,onChange:O,debouncedDelay:1500,hidden:!l||"pantone"!==v},{type:"select",label:s("Foreground colour"),value:p.fg,options:(n={},u(n,E.white,s("White")),u(n,E.black,s("Black")),n),onChange:function(e){return f(pe({entryId:c,fgColour:e}))}}];return a(h,{fields:L})}function _e(){var e,r=o().t,i=Le(),l=ee(),h=te((function(e){return e.ticket.lines})),g=t(C.useState(Object.keys(h)[0]),2),m=g[0],b=g[1],x=t(C.useState(),2),k=x[0],E=x[1];return s(y,{as:"section",children:[s(O,{mt:3,mb:2,alignItems:"center",children:[a(w,{as:"h5",size:"sm",mr:"auto",children:r("Lines")}),a(Ae,{ready:k,onReady:E})]}),s(f,{flexWrap:"wrap",sx:{"& .chakra-badge":{mb:1}},children:[Object.entries(h).map((function(e){var n=t(e,2),o=n[0],f=n[1],h=Z.selectAll(f.nameEntity).reduce((function(e,t){return c(c({},e),{},u({},t.lang,t.name))}),{}),p=i(h);return a(S,{name:p,bg:f.colour,fg:f.fg,actions:s(L,{children:[a(d,{size:"xs",variant:"ghost",color:f.fg,"aria-label":r("Edit")+" "+p,title:r("Edit")+" "+p,icon:a(P,{}),onClick:function(){return b(o)}}),a(d,{size:"xs",variant:"ghost",color:f.fg,"aria-label":r("Copy")+" "+p,title:r("Copy")+" "+p,icon:a(R,{}),onClick:function(){return l(ve(o))}}),a(d,{size:"xs",variant:"ghost",color:f.fg,"aria-label":r("Remove")+" "+p,title:r("Remove")+" "+p,icon:a(v,{}),onClick:function(){return l(ge(o))}})]})},o)})),a(I,{size:"xs",variant:"ghost",leftIcon:a(p,{}),ml:"auto !important",onClick:function(){return l(me())},children:r("Add a line")})]}),h[m]&&a(Ne,{entryId:m,pantoneReady:k}),a(n,{entries:null===(e=h[m])||void 0===e?void 0:e.nameEntity,onUpdate:function(e,t){return l(be({entryId:m,id:e,changes:t}))},onAdd:function(e){return l(we({entryId:m,lang:e}))},onRemove:function(e){return l(Ce({entryId:m,id:e}))}})]})}function Te(e){var n=e.countryErrors,r=e.cityErrors,i=e.lineErrors,c=e.onIgnore,u=e.onClose,l=o().t,h=Le();return s(L,{children:[s(z,{children:[a(x,{children:l("Your inputs contain the following errors. Please consider fixing it before submitting.")}),n.length>0&&s(L,{children:[a(w,{as:"h5",size:"sm",my:2,children:l("Country / Region")}),a(A,{"aria-label":"List of country errors",children:n.map((function(e,t){return a(N,{children:h(xe[e])},t)}))})]}),r.length>0&&s(L,{children:[a(w,{as:"h5",size:"sm",my:2,children:l("City")}),a(A,{"aria-label":"List of city errors",children:r.map((function(e,t){return a(N,{children:h(xe[e])},t)}))})]}),Object.values(i).flat().length>0&&s(L,{children:[a(w,{as:"h5",size:"sm",my:2,children:l("Lines")}),a(A,{"aria-label":"List of line errors",children:Object.entries(i).map((function(e){var n=t(e,2),r=n[0],o=n[1];return s(N,{children:[r,a(A,{children:o.map((function(e,t){return a(N,{children:h(xe[e])},t)}))})]},r)}))})]})]}),a(_,{children:s(f,{children:[a(I,{onClick:c,children:l("Submit anyway")}),a(I,{colorScheme:"primary",onClick:u,children:l("Go back")})]})})]})}var Ge=function(e){var t;return!(null===(t=e.match(/^https?:\/\//))||void 0===t||!t[0])};function Ue(e){var t=e.refLink,n=e.onRefLinkChange,r=e.justification,i=e.onJustificationChange,c=e.onPrev,u=e.onNext,l=o().t,f=[{type:"input",value:t,label:l("Reference link"),placeholder:l("Enter a valid URL"),onChange:n,validator:Ge},{type:"textarea",value:r,label:l("Justification"),placeholder:l("Briefly describe your changes and provide justification"),onChange:i}],d=!t||!r||!Ge(t);return s(L,{children:[s(z,{children:[a(x,{children:l("Please provide suitable source and justification.")}),a(h,{fields:f,minW:"full"})]}),s(_,{children:[c&&a(I,{variant:"ghost",onClick:c,mr:"auto",leftIcon:a(T,{}),children:l("Previous")}),a(I,{colorScheme:"primary",onClick:u,rightIcon:a(G,{}),isDisabled:d,children:l("Next")})]})]})}function qe(e){var t,n,c=e.countryEntry,u=e.cityEntry,l=e.paletteList,f=e.refLink,h=e.justification,d=e.onPrev,p=o().t,y=U("primary.500","primary.300"),v=C.useRef(null),g=["**Reference link:** ".concat(f||"(REPLACE ME)"),"**Justification:** ".concat(h||"(REPLACE ME)"),ke,Ee("country",c),Ee("city",u),Ee("lines",l)].join("\n\n"),m=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==u||null===(t=u.name)||void 0===t?void 0:t.en),body:g}),b=new URLSearchParams({template:"new-palettes-request.md",labels:"resources",title:"Resources: New palettes of "+(null==u||null===(n=u.name)||void 0===n?void 0:n.en)}),w=function(){var e=i(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==v||!v.current){e.next=4;break}return v.current.select(),e.next=4,navigator.clipboard.writeText(g);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return s(L,{children:[s(z,{children:[a(x,{children:p("If the button below doesn't work for you, please follow the instructions below:")}),s(q,{children:[s(N,{children:[p("Open")," ",s(B,{color:y,href:"https://github.com/railmapgen/rmg-palette/issues/new?"+b.toString(),isExternal:!0,children:["Issue: New Palettes Request ",a(J,{as:D})]})]}),s(N,{children:[p("Paste following text to the issue body")," ",a(I,{size:"xs",leftIcon:a(R,{}),onClick:w,children:p("Copy")}),a(F,{ref:v,isReadOnly:!0,defaultValue:g,onClick:function(e){return e.target.select()}})]})]})]}),s(_,{children:[a(I,{variant:"ghost",onClick:d,mr:"auto",leftIcon:a(T,{}),children:p("Previous")}),a(I,{colorScheme:"primary",onClick:function(){return window.open("https://github.com/railmapgen/rmg-palette/issues/new?"+m.toString(),"_blank")},children:p("1-click open issue")})]})]})}function Be(e){var n=e.isOpen,r=e.onClose,i=o().t,c=t(C.useState([]),2),u=c[0],l=c[1],f=t(C.useState([]),2),h=f[0],d=f[1],p=t(C.useState({}),2),y=p[0],v=p[1],g=t(C.useState(""),2),m=g[0],b=g[1],w=t(C.useState(""),2),x=w[0],k=w[1],E=t(C.useState(!1),2),j=E[0],O=E[1],S=t(C.useState(!1),2),L=S[0],P=S[1],R=te((function(e){return e.ticket})),I=je.getCountryEntry(R),z=je.getCityEntry(R),A=je.getPalettes(R);C.useEffect((function(){n?(l(je.getCountryErrors(R)),d(je.getCityErrors(R)),v(je.getLineErrors(R))):(O(!1),b(""),k(""),P(!1))}),[n]);var N=u.length>0||h.length>0||Object.values(y).flat().length>0,_=N&&!j,T=!_&&!L;return s(M,{blockScrollOnMount:!1,isOpen:n,onClose:r,scrollBehavior:"inside",children:[a(W,{}),s(Y,{children:[a(K,{children:i("Submit palettes")}),a(H,{}),_&&a(Te,{countryErrors:u,cityErrors:h,lineErrors:y,onIgnore:function(){return O(!0)},onClose:r}),T&&a(Ue,{refLink:m,onRefLinkChange:b,justification:x,onJustificationChange:k,onPrev:N?function(){return O(!1)}:void 0,onNext:function(){return P(!0)}}),!_&&!T&&a(qe,{countryEntry:I,cityEntry:z,paletteList:A,refLink:m,justification:x,onPrev:function(){return P(!1)}})]})]})}}}}))}();
