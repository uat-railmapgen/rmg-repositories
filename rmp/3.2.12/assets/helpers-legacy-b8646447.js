!function(){function t(r){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(r)}function r(r,e,n){return(e=function(r){var e=function(r,e){if("object"!==t(r)||null===r)return r;var n=r[Symbol.toPrimitive];if(void 0!==n){var o=n.call(r,e||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(r)}(r,"string");return"symbol"===t(e)?e:String(e)}(e))in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(O){f=function(t,r,e){return t[r]=e}}function s(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),u=new N(n||[]);return i(a,"_invoke",{value:_(t,e,u)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(O){return{type:"throw",arg:O}}}r.wrap=s;var p={};function y(){}function v(){}function m(){}var d={};f(d,u,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(A([])));b&&b!==n&&o.call(b,u)&&(d=b);var w=m.prototype=y.prototype=Object.create(d);function x(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function L(r,e){function n(i,a,u,c){var l=h(r[i],r,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&o.call(s,"__await")?e.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):e.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return a=a?a.then(o,o):o()}})}function _(t,r,e){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var u=E(a,e);if(u){if(u===p)continue;return u}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===n)throw n="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n="executing";var c=h(t,r,e);if("normal"===c.type){if(n=e.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(n="completed",e.method="throw",e.arg=c.arg)}}}function E(t,r){var e=r.method,n=t.iterator[e];if(void 0===n)return r.delegate=null,"throw"===e&&t.iterator.return&&(r.method="return",r.arg=void 0,E(t,r),"throw"===r.method)||"return"!==e&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+e+"' method")),p;var o=h(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function S(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function j(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function A(t){if(t){var r=t[u];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,n=function r(){for(;++e<t.length;)if(o.call(t,e))return r.value=t[e],r.done=!1,r;return r.value=void 0,r.done=!0,r};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return v.prototype=m,i(w,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=f(m,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===v||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(L.prototype),f(L.prototype,c,(function(){return this})),r.AsyncIterator=L,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new L(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=A,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&o.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function e(e,n){return a.type="throw",a.arg=t,r.next=e,n&&(r.method="next",r.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return e("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return e(i.catchLoc,!0);if(this.prev<i.finallyLoc)return e(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return e(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return e(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),p},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),p}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,e){return this.delegate={iterator:A(t),resultName:r,nextLoc:e},"next"===this.method&&(this.arg=void 0),p}},r}function n(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,r){if(!t)return;if("string"==typeof t)return o(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,r)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function i(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void e(l)}u.done?r(c):Promise.resolve(c).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){i(a,n,o,u,c,"next",t)}function c(t){i(a,n,o,u,c,"throw",t)}u(void 0)}))}}System.register(["./index-legacy-1e235512.js"],(function(t,o){"use strict";var i,u;return{setters:[function(t){i=t.S,u=t.H}],execute:function(){var o,c=function(t){return new Promise((function(r){var e=new FileReader;e.onloadend=function(){return r(e.result)},e.readAsDataURL(t)}))},l=(t("g",function(){var t=a(e().mark((function t(r,o,i,u){var f,s,h,p,y,v;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=Array.from(new Set(o.map((function(t){return n(r.querySelectorAll(t))})).flat().map((function(t){return t.innerHTML})).join("").replace(/\s/g,""))).join(""),t.next=3,document.fonts.load(i.join(", "),s);case 3:if(h=t.sent,p=null===(f=document.querySelector("link#".concat(u)))||void 0===f||null===(f=f.sheet)||void 0===f?void 0:f.cssRules){t.next=7;break}return t.abrupt("return",Promise.reject(new Error("cssRules can not be found in link#".concat(u))));case 7:return y=Array.from(p).filter((function(t){return t instanceof CSSFontFaceRule})),v=h.reduce((function(t,r){var e,n=(e=r,y.find((function(t){var r=t.style;return r.getPropertyValue("font-family")===e.family&&r.getPropertyValue("unicode-range")===e.unicodeRange})));return n?t.find((function(t){var r=t.style,e=n.style;return r.getPropertyValue("font-family")===e.getPropertyValue("font-family")&&r.getPropertyValue("unicode-range")===e.getPropertyValue("unicode-range")}))?t:t.concat(n):t}),[]),t.next=11,Promise.all(v.map(function(){var t=a(e().mark((function t(r){var n,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(l(r));case 3:return n=t.sent,t.t0=c,t.next=7,n.blob();case 7:return t.t1=t.sent,t.next=10,(0,t.t0)(t.t1);case 10:return o=t.sent,t.abrupt("return",r.cssText.replace(/src:[ \w('",\-:/.)]+;/g,"src: url('".concat(o,"'); ")));case 14:return t.prev=14,t.t2=t.catch(0),console.error(t.t2),t.abrupt("return","");case 18:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(r){return t.apply(this,arguments)}}()));case 11:return t.abrupt("return",t.sent);case 12:case"end":return t.stop()}}),t)})));return function(r,e,n,o){return t.apply(this,arguments)}}()),function(t){var r,e=t.style.getPropertyValue("src");return navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")?e.replace(/^url\("(\S+)"\).*$/,"$1"):"/rmp//styles/"+(null===(r=e.match(/^url\("([\S*]+)"\)/))||void 0===r?void 0:r[1])});t("F",(r(o={},i.MTR,{className:[".rmp-name__mtr__zh",".rmp-name__mtr__en"],cssFont:["80px GenYoMin TW","Vegur"],cssName:"fonts_mtr"}),r(o,u.BerlinSBahnLineBadge,{className:[".rmp-name__berlin"],cssFont:["16px Roboto"],cssName:"fonts_berlin"}),r(o,u.BerlinUBahnLineBadge,{className:[".rmp-name__berlin"],cssFont:["16px Roboto"],cssName:"fonts_berlin"}),o)),t("a",(function(t){var r=t.currentTarget.getBoundingClientRect();return{x:t.clientX-r.left,y:t.clientY-r.top}})),t("r",(function(t,r){return Math.round(t/r)*r})),t("c",(function(t){var r=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE],e=r[0],n=r[1],o=r[2],i=r[3];return t.forEachNode((function(t,r){e=Math.min(r.x,e),n=Math.min(r.y,n),o=Math.max(r.x,o),i=Math.max(r.y,i)})),{xMin:e-=100,yMin:n-=100,xMax:o+=150,yMax:i+=150}})),t("i",navigator.platform.startsWith("Mac")),t("f",(function(t){var r=Object.fromEntries([].concat(n(Object.values(i)),[Object.values(u)]).map((function(t){return[t,!1]})));return t.forEachNode((function(e){var n=t.getNodeAttribute(e,"type");r[n]=!0})),r}))}}}))}();
