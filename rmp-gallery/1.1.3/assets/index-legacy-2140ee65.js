!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return n};var n={},r=Object.prototype,i=r.hasOwnProperty,o=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(A){s=function(e,t,n){return e[t]=n}}function h(e,t,n,r){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),c=new L(r||[]);return o(a,"_invoke",{value:x(e,n,c)}),a}function d(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(A){return{type:"throw",arg:A}}}n.wrap=h;var f={};function p(){}function m(){}function g(){}var y={};s(y,c,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(P([])));v&&v!==r&&i.call(v,c)&&(y=v);var w=g.prototype=p.prototype=Object.create(y);function k(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function S(t,n){function r(o,a,c,l){var u=d(t[o],t,a);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==e(h)&&i.call(h,"__await")?n.resolve(h.__await).then((function(e){r("next",e,c,l)}),(function(e){r("throw",e,c,l)})):n.resolve(h).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,l)}))}l(u.arg)}var a;o(this,"_invoke",{value:function(e,t){function i(){return new n((function(n,i){r(e,t,n,i)}))}return a=a?a.then(i,i):i()}})}function x(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return z()}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var c=C(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=d(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function C(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,C(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var i=d(r,e.iterator,t.arg);if("throw"===i.type)return t.method="throw",t.arg=i.arg,t.delegate=null,f;var o=i.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function j(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(j,this),this.reset(!0)}function P(e){if(e){var t=e[c];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,r=function t(){for(;++n<e.length;)if(i.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return r.next=r}}return{next:z}}function z(){return{value:void 0,done:!0}}return m.prototype=g,o(w,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:m,configurable:!0}),m.displayName=s(g,u,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,u,"GeneratorFunction")),e.prototype=Object.create(w),e},n.awrap=function(e){return{__await:e}},k(S.prototype),s(S.prototype,l,(function(){return this})),n.AsyncIterator=S,n.async=function(e,t,r,i,o){void 0===o&&(o=Promise);var a=new S(h(e,t,r,i),o);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},k(w),s(w,u,"Generator"),s(w,c,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=P,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!e)for(var t in this)"t"===t.charAt(0)&&i.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),l=i.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),O(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;O(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:P(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},n}function n(e,t,n,r,i,o,a){try{var c=e[o](a),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,i)}function r(e){return function(){var t=this,r=arguments;return new Promise((function(i,o){var a=e.apply(t,r);function c(e){n(a,i,o,c,l,"next",e)}function l(e){n(a,i,o,c,l,"throw",e)}c(void 0)}))}}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);l=!0);}catch(s){u=!0,i=s}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw i}}return c}}(e,t)||l(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./vendor-legacy-74a07e82.js"],(function(e,n){"use strict";var i,l,u,s,h,d,f,p,m,g,y,b,v,w,k,S,x,C,j,O,L,P,z,A,E,_,R,D,G,I,T,M,U,N,F,W,B,H,V,J,Y,q,Z,$,K,Q,X,ee,te,ne,re,ie,oe,ae,ce,le,ue,se,he,de,fe,pe,me,ge,ye,be,ve,we,ke,Se,xe,Ce,je,Oe,Le,Pe,ze,Ae,Ee,_e,Re;return{setters:[function(e){i=e.c,l=e.a,u=e.b,s=e.u,h=e.d,d=e.e,f=e.f,p=e.g,m=e.R,g=e.j,y=e.M,b=e.h,v=e.i,w=e.k,k=e.l,S=e.m,x=e.n,C=e.V,j=e.I,O=e.H,L=e.T,P=e.o,z=e.A,A=e.p,E=e.q,_=e.r,R=e.s,D=e.t,G=e.v,I=e.w,T=e.x,M=e.y,U=e.z,N=e.B,F=e.C,W=e.D,B=e.E,H=e.F,V=e.G,J=e.J,Y=e.S,q=e.K,Z=e.L,$=e.N,K=e.O,Q=e.P,X=e.Q,ee=e.U,te=e.W,ne=e.X,re=e.Y,ie=e.Z,oe=e._,ae=e.$,ce=e.a0,le=e.a1,ue=e.a2,se=e.a3,he=e.a4,de=e.a5,fe=e.a6,pe=e.a7,me=e.a8,ge=e.a9,ye=e.aa,be=e.ab,ve=e.ac,we=e.ad,ke=e.ae,Se=e.af,xe=e.ag,Ce=e.ah,je=e.ai,Oe=e.aj,Le=e.ak,Pe=e.al,ze=e.am,Ae=e.an,Ee=e.ao,_e=e.ap,Re=e.aq}],execute:function(){var e=i({name:"app",initialState:{counter:0,gallery:{shanghai:{contributors:["3353040"],name:{en:"Shanghai","zh-Hans":"上海","zh-Hant":"上海"}}}},reducers:{bumpCounter:function(e){e.counter++},setGallery:function(e,t){e.gallery=t.payload}}}),n=e.actions,De=(n.bumpCounter,n.setGallery),Ge=e.reducer,Ie=l(),Te=u({reducer:{app:Ge},middleware:function(e){return e().prepend(Ie.middleware)}}),Me=function(){return s()},Ue=h;window.rmgStore=Te;var Ne=function(e){return e.APP_LOAD="APP_LOAD",e.UPLOAD_TEMPLATES="UPLOAD_TEMPLATES",e}(Ne||{}),Fe="Hi RMP team! I would like to contribute to the gallery with the data below.",We="**Do not edit lines below, they are meant for bots only!!!**";function Be(){var e=d().i18n;return function(t){var n,r;return null!==(n=null!==(r=e.languages.map((function(e){return t[e]})).find((function(e){return void 0!==e})))&&void 0!==r?r:t.en)&&void 0!==n?n:"(Translation Error)"}}var He=function(e){var t=e.city,n=e.isOpen,r=e.onClose,i=f(),a=p(),l=d().t,u=Be(),s=Ue((function(e){return e.app.gallery})),h=c(m.useState({name:{en:""},desc:{en:""},reference:"",justification:""}),2),U=h[0],N=h[1];m.useEffect((function(){fetch("resources/metadata/".concat(t,".json")).then((function(e){return e.json()})).then((function(e){return N(o(o({},e),{},{justification:""}))}))}),[t]);var F="https://".concat(window.location.hostname,"/rmp/s/").concat(t),W={title:l("Link copied."),status:"success",duration:9e3,isClosable:!0};return g(y,{isOpen:n,onClose:r,size:"6xl",scrollBehavior:"inside",children:[b(v,{}),g(w,{children:[b(k,{children:l("Details")}),b(S,{}),g(x,{paddingBottom:10,children:[b(C,{children:b("a",{href:"resources/thumbnails/".concat(t,".png"),target:"_blank",rel:"noopener noreferrer",children:b(j,{src:"resources/thumbnails/".concat(t,".png"),alt:t,borderRadius:"lg"})})}),b(O,{as:"h5",size:"sm",mt:3,mb:2,children:u(U.name)}),b(L,{children:u(U.desc)})]}),g(P,{children:[b(z,{max:8,mr:"auto",children:s[t].contributors.map((function(e){return b(A,{src:"https://avatars.githubusercontent.com/u/".concat(e),cursor:"pointer",onClick:function(){return fetch("https://api.github.com/user/".concat(e)).then((function(e){return e.json()})).then((function(e){return window.open("https://github.com/".concat(e.login))}))}},e)}))}),b(E,{"aria-label":"Like",variant:"ghost",icon:b(_,{}),isDisabled:!0}),b(E,{"aria-label":"Favorite",variant:"ghost",icon:b(R,{}),isDisabled:!0}),b(D,{label:F,children:b(E,{"aria-label":"Share",variant:"ghost",icon:b(G,{}),onClick:function(){navigator.clipboard.writeText(F),a(W)}})}),b(E,{"aria-label":"Edit",variant:"ghost",icon:b(I,{}),onClick:function(){return i("/new",{state:{metadata:U}})}}),b("a",{href:"resources/real_world/".concat(t,".json"),target:"_blank",rel:"noopener noreferrer",children:b(E,{"aria-label":"Download",variant:"ghost",icon:b(T,{})})}),b(E,{"aria-label":"Import",variant:"ghost",icon:b(M,{}),isDisabled:!0})]})]})]})};function Ve(){var e=f(),t=Me(),n=Be(),r=d().t,i=Ue((function(e){return e.app.gallery})),o=c(m.useState("shanghai"),2),a=o[0],l=o[1],u=c(m.useState(!1),2),s=u[0],h=u[1];return m.useEffect((function(){fetch("resources/real_world.json").then((function(e){return e.json()})).then((function(e){return t(De(e))}))}),[]),g(U,{isLazy:!0,isFitted:!0,children:[g(N,{children:[b(F,{children:r("gallery.type.realWorld")}),b(F,{isDisabled:!0,children:r("gallery.type.fantasy")})]}),b(W,{children:g(B,{children:[g(H,{flexWrap:"wrap",children:[Object.keys(i).map((function(e){return g(V,{variant:"elevated",minWidth:"300",m:"2",children:[g(J,{children:[b(j,{src:"resources/thumbnails/".concat(e,"@300.png"),alt:e,borderRadius:"lg"}),b(Y,{mt:"6",spacing:"3",children:b(O,{size:"lg",children:n(i[e].name)})})]}),g(q,{children:[b(z,{max:3,children:i[e].contributors.map((function(e){return b(A,{src:"https://avatars.githubusercontent.com/u/".concat(e)},e)}))}),b(Z,{variant:"solid",colorScheme:"blue",ml:"auto",onClick:function(){return function(e){h(!0),l(e)}(e)},children:r("Details")})]})]},e)})),b($,{onClick:function(){e("/new",{state:{metadata:{name:{en:""},desc:{en:""},reference:"",justification:""}}}),Q.event(Ne.UPLOAD_TEMPLATES,{})},position:"fixed",bottom:"20px",right:"20px",zIndex:3,children:b(E,{"aria-label":"new",size:"lg",icon:b(K,{}),colorScheme:"blue",variant:"solid"})})]}),b(He,{city:a,isOpen:s,onClose:function(){return h(!1)}})]})})]})}var Je=function(e){return new Promise((function(t){var n=new FileReader;n.onloadend=function(){return t(n.result)},n.readAsText(e)}))},Ye=function(e,t,n){if(null!==t){var r=document.createElement("details");return r.setAttribute("repo","rmp-gallery"),r.setAttribute("type",e),Object.entries(n).forEach((function(e){var t=c(e,2),n=t[0],i=t[1];r.setAttribute(n,i)})),r.textContent=t,r.outerHTML}return""},qe={"& > div:first-of-type":{flex:1}};function Ze(e){var t=e.translations,n=e.onUpdate,r=e.onLangSwitch,i=e.onRemove,l=d().t,u=Be(),s=function(e,i){return[{type:"select",label:l("Language"),value:e,options:Object.entries(re).reduce((function(e,t){return o(o({},e),{},a({},t[0],u(t[1])))}),{}),disabledOptions:t.filter((function(t){return t[0]!==e})).map((function(e){return e[0]})),onChange:function(t){return r(e,t)}},{type:"input",label:l("Name"),value:i,onChange:function(t){return n(e,t)},validator:function(e){return!!e}}]},h=function(){var e=Object.keys(re).filter((function(e){return!t.find((function(t){return t[0]===e}))}))[0];n(e,"")};return b(X,{direction:"column",children:t.map((function(e,t,n){var r=c(e,2),o=r[0],a=r[1];return g(ee,{sx:qe,children:[b(te,{fields:s(o,a),noLabel:t>0}),t===n.length-1?b(E,{size:"sm",variant:"ghost","aria-label":l("Add a name in another language"),title:l("Add a name in another language"),onClick:h,icon:b(K,{})}):b($,{minW:8}),n.length>1&&b(E,{size:"sm",variant:"ghost","aria-label":l("Remove this name"),title:l("Remove this name"),onClick:function(){return i(o)},icon:b(ne,{})})]},t)}))})}var $e={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}};function Ke(){var e,n,i=ie().state.metadata,l=f(),u=Ue((function(e){return e.app.gallery})),s=d().t,h=m.useRef(null),p=c(m.useState(!1),2),C=p[0],j=p[1],O=c(m.useState(i),2),z=O[0],A=O[1],E=c(m.useState(""),2),_=E[0],R=E[1],D=null!==(e=null===(n=z.name.en)||void 0===n?void 0:n.replace(/[^A-Za-z0-9]/g,"").toLowerCase())&&void 0!==e?e:"",G=[Fe,We,Ye("metadata",JSON.stringify(z,null,4),{}),Ye("real_world",_,{compress:"zipson",city:D})].join("\n\n"),I=new URLSearchParams({labels:"resources",title:"Resources: ".concat(D in u?"Update":"New"," template of ").concat(D)}),T=function(){var e=r(t().mark((function e(n){var r,i,o;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=null===(r=n.target.files)||void 0===r?void 0:r[0],console.log("handleFileUpload():: received file",i),i){e.next=4;break}return e.abrupt("return");case 4:if("application/json"===i.type){e.next=8;break}return alert("Invalid file type!"),n.target.value="",e.abrupt("return");case 8:return e.prev=8,e.next=11,Je(i);case 11:o=e.sent,R(se.stringify(JSON.parse(o.trim())).trim()),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(8),alert("Invalid file!"),n.target.value="";case 19:case"end":return e.stop()}}),e,null,[[8,15]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=r(t().mark((function e(){return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null==h||!h.current){e.next=4;break}return h.current.select(),e.next=4,navigator.clipboard.writeText(G);case 4:window.open("https://github.com/railmapgen/rmp-gallery/issues/new?"+I.toString(),"_blank");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=[{type:"custom",label:s("Project file"),component:b(oe,{variant:"flushed",size:"xs",type:"file",accept:".json",onChange:T}),minW:250},{type:"input",label:s("Reference link"),placeholder:"Enter the link where you get the valid data",value:z.reference,onChange:function(e){return A(o(o({},z),{},{reference:e}))},minW:250},{type:"input",label:s("Justification"),placeholder:"The reason why you make these changes",value:z.justification,onChange:function(e){return A(o(o({},z),{},{justification:e}))},minW:250}];return g(ae,{sx:$e,children:[g(H,{children:[b(te,{fields:U}),b(ce,{label:s("City Name"),children:b(Ze,{translations:Object.entries(z.name),onUpdate:function(e,t){return A(o(o({},z),{},{name:o(o({},z.name),{},a({},e,t))}))},onLangSwitch:function(e,t){var n=structuredClone(z);n.name[t]=n.name[e],delete n.name[e],A(n)},onRemove:function(e){var t=structuredClone(z);delete t.name[e],A(t)}})}),b(ce,{label:s("Description (Optional)"),children:b(Ze,{translations:Object.entries(z.desc),onUpdate:function(e,t){return A(o(o({},z),{},{desc:o(o({},z.desc),{},a({},e,t))}))},onLangSwitch:function(e,t){var n=structuredClone(z);n.desc[t]=n.desc[e],delete n.desc[e],A(n)},onRemove:function(e){var t=structuredClone(z);delete t.desc[e],A(t)}})})]}),g(H,{children:[b(Z,{size:"sm",onClick:function(){return l("/")},children:s("Back to list")}),b(ee,{ml:"auto",children:b(Z,{size:"sm",colorScheme:"primary",isDisabled:""===_||""===z.reference||""===D,onClick:function(){return j(!0)},children:s("Submit")})})]}),g(y,{isOpen:C,onClose:function(){return j(!1)},children:[b(v,{}),g(w,{children:[b(k,{children:s("Submit template")}),b(S,{}),g(x,{children:[b(L,{children:s("You may now copy the following text into your new issue's body.")}),b(le,{mt:"2",mb:"2"}),b(ue,{ref:h,isReadOnly:!0,defaultValue:G,onClick:function(e){return e.target.select()}})]}),b(P,{children:b(Z,{colorScheme:"primary",onClick:M,children:s("Copy issue body and open a new issue")})})]})]})]})}var Qe=function(e){var t=e.isOpen,n=e.onClose,r=d().t,i=Q.getAppVersion();return g(y,{isOpen:t,onClose:n,size:"xl",scrollBehavior:"inside",children:[b(v,{}),g(w,{children:[b(k,{children:r("header.about.title")}),b(S,{}),g(x,{paddingBottom:10,children:[g(H,{direction:"row",children:[b(j,{boxSize:"128px",src:"/logo192.png"}),g(H,{direction:"column",width:"100%",alignItems:"center",justifyContent:"center",children:[b(L,{fontSize:"xl",as:"b",children:r("header.about.rmpGallery")}),b(L,{children:i}),b(L,{}),b(L,{fontSize:"sm",children:r("header.about.railmapgen")})]})]}),b($,{margin:5,children:b(L,{fontSize:"xl",children:r("header.about.desc")})}),b(O,{as:"h5",size:"sm",mt:3,mb:2,children:r("header.about.contributors")}),b(O,{as:"h6",size:"xs",my:2,children:r("header.about.coreContributors")}),b(C,{children:g(he,{size:"lg",w:"85%",onClick:function(){return window.open("https://github.com/thekingofcity","_blank")},cursor:"pointer",children:[b(A,{src:"https://github.com/thekingofcity.png",size:"lg",my:2,ml:-1,mr:2}),g(de,{display:"block",width:"100%",children:[b(L,{fontSize:"lg",fontWeight:"bold",mb:1,children:"thekingofcity"}),b(L,{fontSize:"sm",children:r("header.about.content1")}),b(L,{fontSize:"sm",align:"right",mb:1,children:r("header.about.content2")})]})]})}),b(O,{as:"h6",size:"xs",my:2,children:r("header.about.templateAdministrators")}),b(C,{children:["52PD","linchen1965"].map((function(e){return g(he,{size:"lg",w:"85%",onClick:function(){return window.open("https://github.com/".concat(e),"_blank")},cursor:"pointer",children:[b(A,{src:"https://github.com/".concat(e,".png"),size:"lg",my:2,ml:-1,mr:2}),g(de,{display:"block",width:"100%",children:[b(L,{fontSize:"lg",fontWeight:"bold",mb:1,children:e}),b(L,{fontSize:"sm",mb:1,children:r("header.about.".concat(e))})]})]},e)}))}),b(O,{as:"h5",size:"sm",mt:3,mb:2,children:r("header.about.contactUs")}),g(C,{children:[g(he,{size:"lg",w:"85%",onClick:function(){return window.open("https://github.com/railmapgen/rmp-gallery/issues","_blank")},cursor:"pointer",children:[b(A,{src:"/rmp-gallery/assets/github-mark-7a0dd11e.svg",size:"lg",my:2,ml:-1,mr:2}),g(de,{display:"block",width:"100%",children:[b(L,{fontSize:"lg",fontWeight:"bold",mb:1,children:r("header.about.github")}),b(L,{fontSize:"sm",children:r("header.about.githubContent")})]})]}),g(he,{size:"lg",w:"85%",onClick:function(){return window.open("https://join.slack.com/t/railmapgenerator/shared_invite/zt-1odhhta3n-DdZF~fnVwo_q0S0RJmgV8A","_blank")},cursor:"pointer",children:[b(A,{src:"/rmp-gallery/assets/slack-mark-19839006.svg",size:"lg",my:2,ml:-1,mr:2}),g(de,{display:"block",width:"100%",children:[b(L,{fontSize:"lg",fontWeight:"bold",mb:1,children:r("header.about.slack")}),b(L,{fontSize:"sm",children:r("header.about.slackContent")}),b(L,{fontSize:"sm",as:"i",children:"#rmg, #rmp, #gallery, #random"})]})]})]})]})]})]})};function Xe(){var e=d().t,t=Q.getEnv(),n=Q.getAppVersion(),r=c(m.useState(!1),2),i=r[0],o=r[1];return g(fe,{children:[b(O,{as:"h4",size:"md",children:e("header.about.rmpGallery")}),b(pe,{environment:t,version:n}),g(ee,{ml:"auto",children:[g(me,{children:[b(ge,{as:E,icon:b(ye,{}),variant:"ghost",size:"sm"}),b(be,{children:ve.map((function(e){return b(we,{onClick:function(){return t=e,Q.setLanguage(t),void Q.getI18nInstance().changeLanguage(t);var t},children:re[e][e]},e)}))})]}),b(E,{size:"sm",variant:"ghost","aria-label":"Help",icon:b(ke,{}),onClick:function(){return o(!0)}})]}),b(Qe,{isOpen:i,onClose:function(){return o(!1)}})]})}function et(){return b(Se,{basename:"/rmp-gallery/",children:b(xe,{children:g(Ce,{children:[b(Xe,{}),b(ae,{children:g(je,{children:[b(Oe,{path:"/",element:b(Le,{suspenseFallback:b(Pe,{isIndeterminate:!0}),children:b(Ve,{})})}),b(Oe,{path:"/new",element:b(Le,{suspenseFallback:b(Pe,{isIndeterminate:!0}),children:b(Ke,{})})})]})})]})})})}var tt={header:{about:{rmpGallery:"RMP Gallery",title:"About",railmapgen:"A railmapgen project",desc:"Browse, set, and submit your RMP template here!",content1:"In memory of all the freedom and equality we once had.",content2:"06/01/2022 in Shanghai",contributors:"Contributors",coreContributors:"Core Contributors",templateAdministrators:"Administrators","52PD":"Special thanks for his continuous effort in maintaining templates.",linchen1965:"Special thanks for his continuous effort in maintaining templates.",contactUs:"Contact Us",github:"Project Repository",githubContent:"Face any problems? Search or raise an issue here!",slack:"Slack Group",slackContent:"Chat in these Slack channels!"}},gallery:{type:{realWorld:"Real World",fantasy:"Fantasy"}}},nt={header:{about:{rmpGallery:"RMP画廊",title:"About",railmapgen:"一个railmapgen项目",desc:"浏览、设置、提交你制作的RMP模板！",content1:"谨以此纪念我们曾拥有的自由与平等。",content2:"06/01/2022于上海",contributors:"贡献者",coreContributors:"核心贡献者",templateAdministrators:"管理员","52PD":"特别感谢他维护这些模板的持续付出。",linchen1965:"特别感谢他维护这些模板的持续付出。",contactUs:"联系我们",github:"项目仓库",githubContent:"遇到任何问题？在这里搜索或提出一个问题！",slack:"Slack群组",slackContent:"在这些Slack频道中讨论!"}}},rt={header:{about:{rmpGallery:"RMP畫廊",title:"關於",railmapgen:"一個railmapgen項目",desc:"瀏覽、設置、提交你製作的RMP模板！",content1:"謹以此紀念我們曾擁有的自由與平等。",content2:"06/01/2022於上海",contributors:"貢獻者",coreContributors:"核心貢獻者",templateAdministrators:"管理員","52PD":"特別感謝他維護這些模板的持續付出。",linchen1965:"特別感謝他維護這些模板的持續付出。",contactUs:"聯繫我們",github:"項目倉庫",githubContent:"遇到任何問題？在這裡搜索或提出一個問題！",slack:"Slack群組",slackContent:"在這些Slack頻道中討論!"}}},it={header:{about:{rmpGallery:"RMP 갤러리",title:"대함",railmapgen:"railmapgen 프로젝트",desc:"Browse, set, and submit your RMP template here!",content1:"우리가 가졌던 자유와 평등을 기념한다.",content2:"2022년 6월 1일 상해",contributors:"기여자",coreContributors:"핵심 기여자",templateAdministrators:"Administrators","52PD":"Special thanks for his continuous effort in maintaining templates.",linchen1965:"Special thanks for his continuous effort in maintaining templates.",contactUs:"우리에게 연락하기",github:"프로젝트 저장소",githubContent:"무슨 문제라도 있나요? 여기서 문제를 검색하거나 제기하십시오!",slack:"슬랙 그룹",slackContent:"이 슬랙 채널에서 채팅해요!"}}},ot=(new Q.I18nBuilder).use(ze).withAppName("RMP Gallery").withLng(Q.getLanguage()).withResource("en",tt).withResource("zh-Hans",nt).withResource("zh-Hant",rt).withResource("ko",it).build();Q.ready().then((function(){Ae(document.getElementById("root")).render(b(Ee.StrictMode,{children:b(_e,{store:Te,children:b(Re,{i18n:ot,children:b(et,{})})})})),Q.injectCss(),Q.event(Ne.APP_LOAD,{})}))}}}))}();
