!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(M){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new k(r||[]);return i(a,"_invoke",{value:C(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(M){return{type:"throw",arg:M}}}n.wrap=f;var p={};function d(){}function m(){}function v(){}var g={};u(g,c,(function(){return this}));var y=Object.getPrototypeOf,j=y&&y(y(z([])));j&&j!==r&&o.call(j,c)&&(g=j);var x=v.prototype=d.prototype=Object.create(g);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,n){function r(i,a,c,l){var s=h(e[i],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,c,l)}),(function(t){r("throw",t,c,l)})):n.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,l)}))}l(s.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}})}function C(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return E()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=h(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function z(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=v,i(x,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,s,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},n.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,l,(function(){return this})),n.AsyncIterator=w,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new w(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,s,"Generator"),u(x,c,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=z,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),l=o.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},n}function n(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(s){return void n(s)}c.done?e(l):Promise.resolve(l).then(r,o)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function c(t){n(a,o,i,c,l,"next",t)}function l(t){n(a,o,i,c,l,"throw",t)}c(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(u){s=!0,o=u}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||a(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./chakra-legacy-cc7e6f16.js","./index-legacy-505094bf.js","./use-templates-legacy-eceb6643.js","./react-legacy-fc1bc4c4.js"],(function(t,n){"use strict";var a,c,l,f,h,p,d,m,v,g,y,j,x,b,w,C,L,O,S,k,z,E,M,N,P,I,H,A,R,B,T,F,_,U,J,V,G,D,W,q,Y,K,$,Q,X,Z,tt,et,nt,rt,ot,it,at,ct,lt,st,ut;return{setters:[function(t){a=t.a1,c=t.j,l=t.r,f=t.Y,h=t.C,p=t.B,d=t.W,m=t.a2,v=t.a3,g=t.p,y=t.F,j=t.a4,x=t.o,b=t.a5,w=t.a6,C=t.q,L=t.s,O=t.a7,S=t.L,k=t.a8,z=t.M,E=t.a9,M=t.m,N=t.n},function(t){P=t.d,I=t.L,H=t.S,A=t.f,R=t.u,B=t.g,T=t.h,F=t.i,_=t.e,U=t.j,J=t.r,V=t.k,G=t.a,D=t.l,W=t.m,q=t.n,Y=t.o,K=t.p,$=t.q,Q=t.t,X=t.v,Z=t.w,tt=t.R,et=t.x},function(t){nt=t.u,rt=t.a,ot=t.b,it=t.I,at=t.G,ct=t.E},function(t){lt=t.u,st=t.r,ut=t.l}],execute:function(){function n(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}}]})(t)}function ft(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(t)}function ht(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(t)}function pt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}function dt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(t)}function mt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}}]})(t)}function vt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(t)}function gt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(t)}function yt(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(t)}function jt(t){var e=t.optionalName,r=t.onChange,a=lt().t,d=nt(),m=function(t,n){return[{type:"select",label:a("Language"),value:t,options:Object.entries(I).reduce((function(t,e){return s(s({},t),{},u({},e[0],d(e[1])))}),{}),disabledOptions:Object.keys(I).filter((function(t){return H.includes(t)||e.some((function(e){return e[0]===t}))})).filter((function(e){return e!==t})),onChange:function(e){return g(t,e)}},{type:"input",label:a("Name"),value:n,onChange:function(e){return y(t,e)},validator:function(t){return!!t}}]},v=function(){var t=Object.keys(I).filter((function(t){return!H.includes(t)&&!e.some((function(e){return e[0]===t}))}));t.includes("ko")?r([].concat(i(e),[["ko",""]])):r([].concat(i(e),[[t[0],""]]))},g=function(t,n){r(e.map((function(e){return e[0]===t?[n,e[1]]:e})))},y=function(t,n){r(e.map((function(e){return e[0]===t?[e[0],n]:e})))};return c.jsxs(c.Fragment,{children:[0===e.length&&c.jsx(l,{variant:"ghost",size:"sm",leftIcon:c.jsx(pt,{}),onClick:v,w:"100%",my:2,children:a("Add more translations")}),e.map((function(t,i,l){var s=o(t,2),u=s[0],d=s[1];return c.jsxs(f,{sx:{w:"100%","& > div:first-of-type":{flex:1}},children:[c.jsx(P,{fields:m(u,d),noLabel:i>0}),i===l.length-1?c.jsx(h,{size:"sm",variant:"ghost","aria-label":a("Add translation"),title:a("Add translation"),onClick:v,icon:c.jsx(pt,{})}):c.jsx(p,{minW:8}),c.jsx(h,{size:"sm",variant:"ghost","aria-label":a("Remove this translation"),title:a("Remove this translation"),onClick:function(){return function(t){r(e.filter((function(e){return e[0]!==t})))}(u)},icon:c.jsx(n,{})})]},u)}))]})}function xt(){var t=lt().t,e=nt(),n=A(),r=R((function(t){return t.ticket})),o=r.company,i=r.newCompany,a=r.companyName,l=r.companyOptionalName,f=rt(),h=[{type:"select",label:t("Company"),value:o,options:s(s({},f),{},u({},t("New"),{new:t("Add a company...")})),disabledOptions:[""],onChange:function(t){return n(B(t))}},{type:"input",label:t("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:i,onChange:function(t){return n(T(t))},hidden:"new"!==o}],m=H.map((function(t){return{type:"input",label:e(I[t]),value:a[t],onChange:function(e){return n(F({lang:t,name:e}))}}}));return c.jsxs(p,{as:"section",children:[c.jsx(d,{as:"h5",size:"sm",mb:2,children:t("Railway company")}),c.jsxs(_,{direction:"column",children:[c.jsx(P,{fields:h}),"new"===o&&c.jsx(P,{fields:m}),"new"===o&&c.jsx(jt,{optionalName:l,onChange:function(t){return n(U(t))}})]})]})}t("default",(function(){var t=lt().t,e=ut(),n=A(),r=o(st.useState(!1),2),i=r[0],a=r[1];return c.jsxs(tt,{sx:Pt,children:[c.jsxs(y,{children:[c.jsx(xt,{}),c.jsx(kt,{})]}),c.jsxs(y,{children:[c.jsx(l,{size:"sm",onClick:function(){J.isStandaloneWindow()?e("/"):J.openApp("rmg-templates")},children:t("Back to list")}),c.jsxs(f,{ml:"auto",children:[c.jsx(l,{size:"sm",variant:"outline",onClick:function(){n(et()),J.event(ct.RESET_TICKETS,{})},children:t("Reset")}),c.jsx(l,{size:"sm",colorScheme:"primary",onClick:function(){return a(!0)},children:t("Submit")})]})]}),c.jsx(Nt,{isOpen:i,onClose:function(){return a(!1)}})]})}));var bt=function(t){return new Promise((function(e){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.readAsText(t)}))},wt={position:"relative","& > div":{overflow:"hidden"},"& > div:last-of-type":{flex:1,alignItems:"center",justifyContent:"center",minW:120,"& input":{display:"none"}}};function Ct(t){var n=t.company,o=t.templateEntry,a=t.onLineChange,p=t.onNewLineChange,d=t.onMajorFlagChange,y=t.onLineNameChange,j=t.onOptionalNameChange,x=t.onParamChange,b=t.onParamImport,w=t.onRemove,C=o.line,L=o.newLine,O=o.majorUpdate,S=o.templateName,k=o.optionalName,z=o.param,E=lt().t,M=nt(),N=ot(n).templates,A=st.useRef(null),R=function(){var t=r(e().mark((function t(n){var r,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o=null===(r=n.target.files)||void 0===r?void 0:r[0],console.log("handleFileUpload():: received file",o),o){t.next=4;break}return t.abrupt("return");case 4:if("application/json"===o.type){t.next=8;break}return alert("Invalid file type!"),n.target.value="",t.abrupt("return");case 8:return t.prev=8,t.next=11,bt(o);case 11:i=t.sent,x(JSON.parse(i)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(8),alert("Invalid file!"),n.target.value="";case 19:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e){return t.apply(this,arguments)}}(),B=s(s({"":E("Please select...")},""===n||"new"===n?{}:N.reduce((function(t,e){return s(s({},t),{},u({},e.filename,M(e.name)))}),{})),{},{new:E("Add a line...")}),T=[{type:"select",label:E("Line"),value:C,options:B,disabledOptions:[""],onChange:function(t){return a(t)},minW:150},{type:"input",label:E("Line code"),placeholder:"e.g. twl, gz1, sh1",value:L,onChange:function(t){return p(t)},hidden:"new"!==C},{type:"switch",label:E("Major update"),isChecked:O,onChange:function(t){return d(t)},hidden:"new"===C,oneLine:!0}],F=H.map((function(t){return{type:"input",label:M(I[t]),value:S[t],onChange:function(e){return y(t,e)}}}));return c.jsxs(_,{sx:wt,children:[c.jsx(h,{size:"sm",variant:"ghost",icon:c.jsx(yt,{}),"aria-label":E("Remove this line"),title:E("Remove this line"),position:"absolute",top:0,right:0,zIndex:5,onClick:w}),c.jsxs(m,{spacing:0,children:[c.jsx(P,{fields:[].concat(T,i(F)),minW:110}),c.jsx(jt,{optionalName:k,onChange:j})]}),c.jsx(m,{children:z?c.jsxs(c.Fragment,{children:[c.jsx(v,{as:mt,boxSize:10}),c.jsxs(g,{as:"i",fontSize:"xs",children:["(",E("Size"),": ",JSON.stringify(z).length," ",E("chars"),")"]}),c.jsx(l,{size:"sm",onClick:function(){return x(void 0)},children:E("Remove")})]}):c.jsxs(c.Fragment,{children:[c.jsx(g,{as:"i",fontSize:"sm",children:E("Import from")}),c.jsxs(f,{spacing:1,children:[c.jsx(l,{size:"sm",onClick:b,children:"RMG"}),c.jsx(l,{size:"sm",onClick:function(){var t;return null===(t=A.current)||void 0===t?void 0:t.click()},children:E("Local")}),c.jsx("input",{ref:A,type:"file",accept:".json",onChange:R})]})]})})]})}var Lt="rmg-bridge--",Ot={h:500,maxH:"70%","& iframe":{h:"100%",w:"100%"}};function St(t){var e=t.templateId,n=t.onClose,r=t.onImport,i=o(st.useState(crypto.randomUUID()),1)[0],a="/rmg/#/import?"+new URLSearchParams({parentComponent:J.getAppName(),parentId:i});return st.useEffect((function(){var t=new BroadcastChannel(Lt+i);return t.onmessage=function(t){var e=t.data,o=e.event,i=e.data;console.log("[rmg-templates] Received event from RMG app clip:",o),"CLOSE"===o?n():"IMPORT"===o&&r(i)},function(){t.close()}}),[e]),c.jsx(V,{isOpen:!!e,onClose:n,sx:Ot,children:c.jsx("iframe",{src:a,loading:"lazy"})})}function kt(){var t=lt().t,e=A(),n=R((function(t){return t.ticket})),r=n.company,i=n.templates,a=ot(r),s=a.templates,u=a.isLoading,h=o(st.useState(),2),m=h[0],g=h[1];return c.jsxs(p,{as:"section",mt:3,position:"relative",children:[u&&c.jsx(G,{isIndeterminate:!0}),c.jsxs(y,{children:[c.jsx(d,{as:"h5",size:"sm",mb:2,children:t("Add or update templates")}),c.jsx(j,{hasArrow:!0,label:t("Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."),children:c.jsx("span",{children:c.jsx(v,{as:ft,ml:1})})})]}),i.map((function(t){return c.jsx(Ct,{company:r,templateEntry:t,onLineChange:function(n){return function(t,n){var r=s.find((function(t){return t.filename===n}));e(X({id:t,line:n,name:null==r?void 0:r.name}))}(t.id,n)},onNewLineChange:function(n){return e(D({id:t.id,newLine:n}))},onMajorFlagChange:function(n){return e(W({id:t.id,majorUpdate:n}))},onLineNameChange:function(n,r){return e(q({id:t.id,lang:n,name:r}))},onOptionalNameChange:function(n){return e(Y({id:t.id,optionalName:n}))},onParamChange:function(n){return e(K({id:t.id,param:n}))},onParamImport:function(){return g(t.id)},onRemove:function(){return e($(t.id))}},t.id)})),c.jsx(f,{justifyContent:"flex-end",children:c.jsx(l,{variant:"ghost",size:"sm",leftIcon:c.jsx(pt,{}),onClick:function(){return e(Q())},children:t("Add item")})}),c.jsx(St,{templateId:m,onClose:function(){return g(void 0)},onImport:function(t){m&&e(K({id:m,param:t})),g(void 0)}})]})}function zt(t){var e=t.companyErrors,n=t.templateErrors,r=t.onClose,i=lt().t,a=nt();return c.jsxs(c.Fragment,{children:[c.jsxs(x,{children:[c.jsx(g,{children:i("Your inputs contain the following errors. Please fix it before submitting.")}),e.length>0&&c.jsxs(c.Fragment,{children:[c.jsx(d,{as:"h5",size:"sm",my:2,children:i("Railway company")}),c.jsx(b,{"aria-label":"List of company errors",children:e.map((function(t,e){return c.jsx(w,{children:a(it[t])},e)}))})]}),Object.values(n).flat().length>0&&c.jsxs(c.Fragment,{children:[c.jsx(d,{as:"h5",size:"sm",my:2,children:i("Templates")}),c.jsx(b,{"aria-label":"List of template errors",children:Object.entries(n).map((function(t){var e=o(t,2),n=e[0],r=e[1];return c.jsxs(w,{children:[n,c.jsx(b,{children:r.map((function(t,e){return c.jsx(w,{children:a(it[t])},e)}))})]},n)}))})]})]}),c.jsx(C,{children:c.jsx(f,{children:c.jsx(l,{colorScheme:"primary",onClick:r,children:i("Go back")})})})]})}function Et(t){var e=t.justification,n=t.majorUpdateJustifications,r=t.onJustificationChange,a=t.onMajorUpdateJustificationChange,s=t.onNext,u=lt().t,f=[{type:"textarea",value:e,label:u("Justification"),placeholder:u("Briefly describe your changes and provide justification"),onChange:r}],h=Object.entries(n).map((function(t){var e=o(t,2),n=e[0];return{type:"textarea",value:e[1],label:u("Justification for major update of")+" "+n,placeholder:u("Briefly describe your changes and provide justification"),onChange:function(t){return a(n,t)}}})),p=!e||Object.values(n).some((function(t){return!t}));return c.jsxs(c.Fragment,{children:[c.jsxs(x,{children:[c.jsx(g,{children:u("Please provide suitable source and justification.")}),c.jsx(P,{fields:[].concat(f,i(h)),minW:"full"})]}),c.jsx(C,{children:c.jsx(l,{colorScheme:"primary",onClick:s,rightIcon:c.jsx(gt,{}),isDisabled:p,children:u("Next")})})]})}function Mt(t){var n,a=t.companyName,s=t.companyBlock,u=t.templateBlocks,f=t.justification,h=t.majorUpdateJustifications,p=t.onPrev,d=t.onClose,m=lt().t,y=L("primary.500","primary.300"),j=["**Justification:** ".concat(f||"(REPLACE ME)"),Object.entries(h).map((function(t){var e=o(t,2),n=e[0],r=e[1];return"- Major update of ".concat(n,": ").concat(r)})).join("\n"),at,null!==(n=null==s?void 0:s.outerHTML)&&void 0!==n?n:""].concat(i(u.map((function(t){return t.outerHTML})))).join("\n\n"),b=new URLSearchParams({template:"new-templates-request.md",label:"resources",title:"Resources: New templates of "+a}),k=function(){var t=r(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.writeText(j);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return c.jsxs(c.Fragment,{children:[c.jsxs(x,{children:[c.jsx(g,{children:m("Follow the instructions below to open an Issue")+":"}),c.jsxs(O,{children:[c.jsxs(w,{children:[m("Open")," ",c.jsxs(S,{color:y,href:"https://github.com/railmapgen/rmg-templates/issues/new?"+b.toString(),isExternal:!0,children:["Issue: New Templates Request ",c.jsx(v,{as:ht})]})]}),c.jsxs(w,{children:[m("Click copy button and paste into issue body")," ",c.jsx(l,{size:"xs",leftIcon:c.jsx(dt,{}),onClick:k,children:m("Copy")})]})]})]}),c.jsxs(C,{children:[c.jsx(l,{variant:"ghost",onClick:p,mr:"auto",leftIcon:c.jsx(vt,{}),children:m("Previous")}),c.jsx(l,{colorScheme:"primary",onClick:d,children:m("Close")})]})]})}function Nt(t){var e=t.isOpen,n=t.onClose,r=lt().t,a=o(st.useState([]),2),l=a[0],f=a[1],h=o(st.useState({}),2),p=h[0],d=h[1],m=o(st.useState(""),2),v=m[0],g=m[1],y=o(st.useState({}),2),j=y[0],x=y[1],b=o(st.useState(!1),2),w=b[0],C=b[1],L=R((function(t){return t.app})),O=L.coreCompanyConfig,S=L.otherCompanyConfig,P=L.templateList,I=R((function(t){return t.ticket})),H=Z.getCompanyEnglishName(I,[].concat(i(O),i(S))),A=Z.getCompanyBlock(I),B=Z.getTemplateBlocks(I);st.useEffect((function(){if(e){f(Z.getCompanyErrors(I)),d(Z.getTemplateErrors(I));var t=Z.getMajorUpdateNames(I,P).reduce((function(t,e){return s(s({},t),{},u({},e,""))}),{});x(t)}else g(""),x({}),C(!1)}),[e]);var T=l.length>0||Object.values(p).flat().length>0,F=!T&&!w;return c.jsxs(k,{blockScrollOnMount:!1,isOpen:e,onClose:n,scrollBehavior:"inside",children:[c.jsx(z,{}),c.jsxs(E,{children:[c.jsx(M,{children:r("Submit templates")}),c.jsx(N,{}),T&&c.jsx(zt,{companyErrors:l,templateErrors:p,onClose:n}),F&&c.jsx(Et,{justification:v,majorUpdateJustifications:j,onJustificationChange:g,onMajorUpdateJustificationChange:function(t,e){return x((function(n){return s(s({},n),{},u({},t,e))}))},onNext:function(){return C(!0)}}),!T&&w&&c.jsx(Mt,{companyName:H,companyBlock:A,templateBlocks:B,justification:v,majorUpdateJustifications:j,onPrev:function(){return C(!1)},onClose:n})]})]})}var Pt={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}}}}}))}();
