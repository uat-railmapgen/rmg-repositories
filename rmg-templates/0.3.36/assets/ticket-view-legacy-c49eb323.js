!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],l=!0,s=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);l=!0);}catch(u){s=!0,o=u}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw o}}return c}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){if(t){if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,e):void 0}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",l=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(P){u=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof d?e:d,a=Object.create(i.prototype),c=new E(r||[]);return o(a,"_invoke",{value:C(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=f;var p={};function d(){}function m(){}function v(){}var y={};u(y,c,(function(){return this}));var g=Object.getPrototypeOf,j=g&&g(g(z([])));j&&j!==n&&r.call(j,c)&&(y=j);var x=v.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(e,n){function i(o,a,c,l){var s=h(e[o],e,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&r.call(f,"__await")?n.resolve(f.__await).then((function(t){i("next",t,c,l)}),(function(t){i("throw",t,c,l)})):n.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return i("throw",t,c,l)}))}l(s.arg)}var a;o(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){i(t,e,n,r)}))}return a=a?a.then(r,r):r()}})}function C(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return k()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===p)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=h(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===p)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function z(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return m.prototype=v,o(x,"constructor",{value:v,configurable:!0}),o(v,"constructor",{value:m,configurable:!0}),m.displayName=u(v,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},b(w.prototype),u(w.prototype,l,(function(){return this})),e.AsyncIterator=w,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new w(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(x),u(x,s,"Generator"),u(x,c,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=z,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),l=r.call(i,"finallyLoc");if(c&&l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),S(n),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;S(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:z(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),p}},e}function a(t,e,n,r,o,i,a){try{var c=t[i](a),l=c.value}catch(s){return void n(s)}c.done?e(l):Promise.resolve(l).then(r,o)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(t){a(i,r,o,c,l,"next",t)}function l(t){a(i,r,o,c,l,"throw",t)}c(void 0)}))}}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(e,n,r){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,n||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./vendor-legacy-dfa41c04.js","./index-legacy-06094e19.js","./use-templates-legacy-97f4e601.js"],(function(t,r){"use strict";var o,a,l,f,h,p,d,m,v,y,g,j,x,b,w,C,O,L,S,E,z,k,P,M,N,I,T,H,_,A,R,B,F,U,J,G,V,W,D,Y,q,K,$,Q,X,Z,tt,et,nt,rt,ot,it,at,ct;return{setters:[function(t){o=t.u,a=t.S,l=t.L,f=t.j,h=t.K,p=t.H,d=t.M,m=t.v,v=t.N,y=t.b,g=t.O,j=t.V,x=t.Q,b=t.U,w=t.x,C=t.w,O=t.r,L=t.W,S=t.h,E=t.X,z=t.Y,k=t.Z,P=t._,M=t.$,N=t.a0,I=t.a1,T=t.a2,H=t.a3,_=t.a4,A=t.a5,R=t.a6,B=t.a7,F=t.a8,U=t.s,J=t.J},function(t){G=t.a,V=t.u,W=t.b,D=t.c,Y=t.d,q=t.e,K=t.f,$=t.g,Q=t.h,X=t.r,Z=t.i,tt=t.j,et=t.t,nt=t.k},function(t){rt=t.u,ot=t.a,it=t.I,at=t.G,ct=t.E}],execute:function(){function r(){var t=o(),e=t.t,n=t.i18n,r=rt(),i=G(),c=V((function(t){return t.app})).companyConfig,v=V((function(t){return t.ticket})),y=v.company,g=v.newCompany,j=v.companyName,x=s(s({},c.map((function(t){return[t.id,r(t.name)]})).sort((function(t,e){return t[1].localeCompare(e[1],n.languages[0])})).reduce((function(t,e){return s(s({},t),{},u({},e[0],e[1]))}),{"":e("Please select...")})),{},{new:e("Add a company...")}),b=[{type:"select",label:e("Company"),value:y,options:x,disabledOptions:[""],onChange:function(t){return i(W(t))}},{type:"input",label:e("Company code"),placeholder:"e.g. mtr, gzmtr, shmetro",value:g,onChange:function(t){return i(D(t))},hidden:"new"!==y}],w=a.map((function(t){return{type:"input",label:r(l[t]),value:j[t],onChange:function(e){return i(Y({lang:t,name:e}))}}}));return f.jsxs(h,{as:"section",children:[f.jsx(p,{as:"h5",size:"sm",mb:2,children:e("Railway company")}),f.jsxs(d,{direction:"column",children:[f.jsx(m,{fields:b}),"new"===y&&f.jsx(m,{fields:w})]})]})}t("default",(function(){var t=o().t,n=U(),i=G(),a=e(y.useState(!1),2),c=a[0],l=a[1];return f.jsxs(J,{sx:Tt,children:[f.jsxs(E,{children:[f.jsx(r,{}),f.jsx(kt,{})]}),f.jsxs(E,{children:[f.jsx(w,{size:"sm",onClick:function(){O.isStandaloneWindow()?n("/"):O.openApp("rmg-templates")},children:t("Back to list")}),f.jsxs(C,{ml:"auto",children:[f.jsx(w,{size:"sm",variant:"outline",onClick:function(){i(nt()),O.event(ct.RESET_TICKETS,{})},children:t("Reset")}),f.jsx(w,{size:"sm",colorScheme:"primary",onClick:function(){return l(!0)},children:t("Submit")})]})]}),f.jsx(It,{isOpen:c,onClose:function(){return l(!1)}})]})}));var lt=function(t){return new Promise((function(e){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.readAsText(t)}))},st={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ut=v.createContext&&v.createContext(st),ft=globalThis&&globalThis.__assign||function(){return ft=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},ft.apply(this,arguments)},ht=globalThis&&globalThis.__rest||function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n};function pt(t){return t&&t.map((function(t,e){return v.createElement(t.tag,ft({key:e},t.attr),pt(t.child))}))}function dt(t){return function(e){return v.createElement(mt,ft({attr:ft({},t.attr)},e),pt(t.child))}}function mt(t){var e=function(e){var n,r=t.attr,o=t.size,i=t.title,a=ht(t,["attr","size","title"]),c=o||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),v.createElement("svg",ft({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,r,a,{className:n,style:ft(ft({color:t.color||e.color},e.style),t.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),i&&v.createElement("title",null,i),t.children)};return void 0!==ut?v.createElement(ut.Consumer,null,(function(t){return e(t)})):e(st)}function vt(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"}}]})(t)}function yt(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"}}]})(t)}function gt(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}}]})(t)}function jt(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"}}]})(t)}function xt(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M6 2c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6H6zm7 7V3.5L18.5 9H13z"}}]})(t)}function bt(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}}]})(t)}function wt(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}}]})(t)}function Ct(t){return dt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}}]})(t)}var Ot={position:"relative","& > div":{overflow:"hidden"},"& > div:last-of-type":{flex:1,alignItems:"center",justifyContent:"center",minW:120,"& input":{display:"none"}}};function Lt(t){var e=t.company,r=t.templateEntry,h=t.onLineChange,p=t.onNewLineChange,v=t.onMajorFlagChange,O=t.onLineNameChange,L=t.onParamChange,S=t.onParamImport,E=t.onRemove,z=r.line,k=r.newLine,P=r.majorUpdate,M=r.templateName,N=r.param,I=o().t,T=rt(),H=ot(e).templates,_=y.useRef(null),A=function(){var t=c(i().mark((function t(e){var n,r,o;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=null===(n=e.target.files)||void 0===n?void 0:n[0],console.log("handleFileUpload():: received file",r),r){t.next=4;break}return t.abrupt("return");case 4:if("application/json"===r.type){t.next=8;break}return alert("Invalid file type!"),e.target.value="",t.abrupt("return");case 8:return t.prev=8,t.next=11,lt(r);case 11:o=t.sent,L(JSON.parse(o)),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(8),alert("Invalid file!"),e.target.value="";case 19:case"end":return t.stop()}}),t,null,[[8,15]])})));return function(e){return t.apply(this,arguments)}}(),R=s(s({"":I("Please select...")},""===e||"new"===e?{}:H.reduce((function(t,e){return s(s({},t),{},u({},e.filename,T(e.name)))}),{})),{},{new:I("Add a line...")}),B=[{type:"select",label:I("Line"),value:z,options:R,disabledOptions:[""],onChange:function(t){return h(t)},minW:150},{type:"input",label:I("Line code"),placeholder:"e.g. twl, gz1, sh1",value:k,onChange:function(t){return p(t)},hidden:"new"!==z},{type:"switch",label:I("Major update"),isChecked:P,onChange:function(t){return v(t)},hidden:"new"===z,oneLine:!0}],F=a.map((function(t){return{type:"input",label:T(l[t]),value:M[t],onChange:function(e){return O(t,e)},minW:"en"===t?260:void 0}}));return f.jsxs(d,{sx:Ot,children:[f.jsx(g,{size:"sm",variant:"ghost",icon:f.jsx(Ct,{}),"aria-label":I("Remove this line"),title:I("Remove this line"),position:"absolute",top:0,right:0,zIndex:5,onClick:E}),f.jsx(m,{fields:[].concat(B,n(F)),minW:110}),f.jsx(j,{children:N?f.jsxs(f.Fragment,{children:[f.jsx(x,{as:xt,boxSize:10}),f.jsxs(b,{as:"i",fontSize:"xs",children:["(",I("Size"),": ",JSON.stringify(N).length," ",I("chars"),")"]}),f.jsx(w,{size:"sm",onClick:function(){return L(void 0)},children:I("Remove")})]}):f.jsxs(f.Fragment,{children:[f.jsx(b,{as:"i",fontSize:"sm",children:I("Import from")}),f.jsxs(C,{spacing:1,children:[f.jsx(w,{size:"sm",onClick:S,children:"RMG"}),f.jsx(w,{size:"sm",onClick:function(){var t;return null===(t=_.current)||void 0===t?void 0:t.click()},children:I("Local")}),f.jsx("input",{ref:_,type:"file",accept:".json",onChange:A})]})]})})]})}var St="rmg-bridge--",Et={h:500,maxH:"70%","& iframe":{h:"100%",w:"100%"}};function zt(t){var n=t.templateId,r=t.onClose,o=t.onImport,i=e(y.useState(crypto.randomUUID()),1)[0],a="/rmg/import?"+new URLSearchParams({parentComponent:O.getAppName(),parentId:i});return y.useEffect((function(){var t=new BroadcastChannel(St+i);return t.onmessage=function(t){var e=t.data,n=e.event,i=e.data;console.log("[rmg-templates] Received event from RMG app clip:",n),"CLOSE"===n?r():"IMPORT"===n&&o(i)},function(){t.close()}}),[n]),f.jsx(L,{isOpen:!!n,onClose:r,sx:Et,children:f.jsx("iframe",{src:a,loading:"lazy"})})}function kt(){var t=o().t,n=G(),r=V((function(t){return t.ticket})),i=r.company,a=r.templates,c=ot(i),l=c.templates,s=c.isLoading,u=e(y.useState(),2),d=u[0],m=u[1];return f.jsxs(h,{as:"section",mt:3,position:"relative",children:[s&&f.jsx(S,{isIndeterminate:!0}),f.jsxs(E,{children:[f.jsx(p,{as:"h5",size:"sm",mb:2,children:t("Add or update templates")}),f.jsx(z,{hasArrow:!0,label:t("Toggling on 'Major update' will update the uploader field of the template and you are required enter extra justification for it."),children:f.jsx("span",{children:f.jsx(x,{as:vt,ml:1})})})]}),a.map((function(t){return f.jsx(Lt,{company:i,templateEntry:t,onLineChange:function(e){return function(t,e){var r=l.find((function(t){return t.filename===e}));n(tt({id:t,line:e,name:null==r?void 0:r.name}))}(t.id,e)},onNewLineChange:function(e){return n(q({id:t.id,newLine:e}))},onMajorFlagChange:function(e){return n(K({id:t.id,majorUpdate:e}))},onLineNameChange:function(e,r){return n($({id:t.id,lang:e,name:r}))},onParamChange:function(e){return n(Q({id:t.id,param:e}))},onParamImport:function(){return m(t.id)},onRemove:function(){return n(X(t.id))}},t.id)})),f.jsx(C,{justifyContent:"flex-end",children:f.jsx(w,{variant:"ghost",size:"sm",leftIcon:f.jsx(gt,{}),onClick:function(){return n(Z())},children:t("Add item")})}),f.jsx(zt,{templateId:d,onClose:function(){return m(void 0)},onImport:function(t){d&&n(Q({id:d,param:t})),m(void 0)}})]})}function Pt(t){var n=t.companyErrors,r=t.templateErrors,i=t.onClose,a=o().t,c=rt();return f.jsxs(f.Fragment,{children:[f.jsxs(k,{children:[f.jsx(b,{children:a("Your inputs contain the following errors. Please fix it before submitting.")}),n.length>0&&f.jsxs(f.Fragment,{children:[f.jsx(p,{as:"h5",size:"sm",my:2,children:a("Railway company")}),f.jsx(P,{"aria-label":"List of company errors",children:n.map((function(t,e){return f.jsx(M,{children:c(it[t])},e)}))})]}),Object.values(r).flat().length>0&&f.jsxs(f.Fragment,{children:[f.jsx(p,{as:"h5",size:"sm",my:2,children:a("Templates")}),f.jsx(P,{"aria-label":"List of template errors",children:Object.entries(r).map((function(t){var n=e(t,2),r=n[0],o=n[1];return f.jsxs(M,{children:[r,f.jsx(P,{children:o.map((function(t,e){return f.jsx(M,{children:c(it[t])},e)}))})]},r)}))})]})]}),f.jsx(N,{children:f.jsx(C,{children:f.jsx(w,{colorScheme:"primary",onClick:i,children:a("Go back")})})})]})}function Mt(t){var r=t.justification,i=t.majorUpdateJustifications,a=t.onJustificationChange,c=t.onMajorUpdateJustificationChange,l=t.onNext,s=o().t,u=[{type:"textarea",value:r,label:s("Justification"),placeholder:s("Briefly describe your changes and provide justification"),onChange:a}],h=Object.entries(i).map((function(t){var n=e(t,2),r=n[0];return{type:"textarea",value:n[1],label:s("Justification for major update of")+" "+r,placeholder:s("Briefly describe your changes and provide justification"),onChange:function(t){return c(r,t)}}})),p=!r||Object.values(i).some((function(t){return!t}));return f.jsxs(f.Fragment,{children:[f.jsxs(k,{children:[f.jsx(b,{children:s("Please provide suitable source and justification.")}),f.jsx(m,{fields:[].concat(u,n(h)),minW:"full"})]}),f.jsx(N,{children:f.jsx(w,{colorScheme:"primary",onClick:l,rightIcon:f.jsx(wt,{}),isDisabled:p,children:s("Next")})})]})}function Nt(t){var r,a=t.companyName,l=t.companyBlock,s=t.templateBlocks,u=t.justification,h=t.majorUpdateJustifications,p=t.onPrev,d=t.onClose,m=o().t,v=I("primary.500","primary.300"),y=["**Justification:** ".concat(u||"(REPLACE ME)"),Object.entries(h).map((function(t){var n=e(t,2),r=n[0],o=n[1];return"- Major update of ".concat(r,": ").concat(o)})).join("\n"),at,null!==(r=null==l?void 0:l.outerHTML)&&void 0!==r?r:""].concat(n(s.map((function(t){return t.outerHTML})))).join("\n\n"),g=new URLSearchParams({template:"new-templates-request.md",label:"resources",title:"Resources: New templates of "+a}),j=function(){var t=c(i().mark((function t(){return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,navigator.clipboard.writeText(y);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return f.jsxs(f.Fragment,{children:[f.jsxs(k,{children:[f.jsx(b,{children:m("Follow the instructions below to open an Issue")+":"}),f.jsxs(T,{children:[f.jsxs(M,{children:[m("Open")," ",f.jsxs(H,{color:v,href:"https://github.com/railmapgen/rmg-templates/issues/new?"+g.toString(),isExternal:!0,children:["Issue: New Templates Request ",f.jsx(x,{as:yt})]})]}),f.jsxs(M,{children:[m("Click copy button and paste into issue body")," ",f.jsx(w,{size:"xs",leftIcon:f.jsx(jt,{}),onClick:j,children:m("Copy")})]})]})]}),f.jsxs(N,{children:[f.jsx(w,{variant:"ghost",onClick:p,mr:"auto",leftIcon:f.jsx(bt,{}),children:m("Previous")}),f.jsx(w,{colorScheme:"primary",onClick:d,children:m("Close")})]})]})}function It(t){var n=t.isOpen,r=t.onClose,i=o().t,a=e(y.useState([]),2),c=a[0],l=a[1],h=e(y.useState({}),2),p=h[0],d=h[1],m=e(y.useState(""),2),v=m[0],g=m[1],j=e(y.useState({}),2),x=j[0],b=j[1],w=e(y.useState(!1),2),C=w[0],O=w[1],L=V((function(t){return t.app})),S=L.companyConfig,E=L.templateList,z=V((function(t){return t.ticket})),k=et.getCompanyEnglishName(z,S),P=et.getCompanyBlock(z),M=et.getTemplateBlocks(z);y.useEffect((function(){if(n){l(et.getCompanyErrors(z)),d(et.getTemplateErrors(z));var t=et.getMajorUpdateNames(z,E).reduce((function(t,e){return s(s({},t),{},u({},e,""))}),{});b(t)}else g(""),b({}),O(!1)}),[n]);var N=c.length>0||Object.values(p).flat().length>0,I=!N&&!C;return f.jsxs(_,{blockScrollOnMount:!1,isOpen:n,onClose:r,scrollBehavior:"inside",children:[f.jsx(A,{}),f.jsxs(R,{children:[f.jsx(B,{children:i("Submit templates")}),f.jsx(F,{}),N&&f.jsx(Pt,{companyErrors:c,templateErrors:p,onClose:r}),I&&f.jsx(Mt,{justification:v,majorUpdateJustifications:x,onJustificationChange:g,onMajorUpdateJustificationChange:function(t,e){return b((function(n){return s(s({},n),{},u({},t,e))}))},onNext:function(){return O(!0)}}),!N&&C&&f.jsx(Nt,{companyName:k,companyBlock:P,templateBlocks:M,justification:v,majorUpdateJustifications:x,onPrev:function(){return O(!1)},onClose:r})]})]})}var Tt={px:2,pt:2,width:{base:"100%",md:520},"& > div:first-of-type":{flexDirection:"column",flex:1,overflowY:"auto"},"& > div:nth-of-type(2)":{my:2}}}}}))}();
