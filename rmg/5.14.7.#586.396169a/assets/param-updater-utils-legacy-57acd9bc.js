!function(){function t(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=s(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function e(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},e=Object.prototype,o=e.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(k){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new A(r||[]);return i(a,"_invoke",{value:j(t,n,c)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var h={};function p(){}function v(){}function g(){}var m={};s(m,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(P([])));b&&b!==e&&o.call(b,c)&&(m=b);var _=g.prototype=p.prototype=Object.create(m);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(i,a,c,u){var l=d(t[i],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==n(f)&&o.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return r("throw",t,c,u)}))}u(l.arg)}var a;i(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function j(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return L()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=O(a,n);if(c){if(c===h)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function O(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,O(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:L}}function L(){return{value:void 0,done:!0}}return v.prototype=g,i(_,"constructor",{value:g,configurable:!0}),i(g,"constructor",{value:v,configurable:!0}),v.displayName=s(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,l,"GeneratorFunction")),t.prototype=Object.create(_),t},t.awrap=function(t){return{__await:t}},w(x.prototype),s(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(f(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(_),s(_,l,"Generator"),s(_,c,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},t}function o(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function c(t){o(a,r,i,c,u,"next",t)}function u(t){o(a,r,i,c,u,"throw",t)}c(void 0)}))}}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==e);u=!0);}catch(s){l=!0,o=s}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||s(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,e){if(t){if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./chakra-legacy-eeb88485.js","./react-legacy-125cc24e.js","./index-legacy-9b409e6d.js"],(function(o,a){"use strict";var s,f,d,h,p,v,g,m,y,b,_,w,x,j,O,S,E,A,P,L,k,D,C,T,N,R,I,M,F,G,W,z;return{setters:[function(t){s=t.u,f=t.j,d=t.c,h=t.e,p=t.an,v=t.a3,g=t.M,m=t.a4,y=t.q,b=t.r,_=t.s,w=t.v,x=t.d,j=t.Q,O=t.B,S=t.G,E=t.t},function(t){A=t.r},function(t){P=t.k,L=t.ax,k=t.b1,D=t.b2,C=t.aw,T=t.b,N=t.b3,R=t.b4,I=t.m,M=t.r,F=t.aV,G=t.e,W=t.b5,z=t.i}],execute:function(){o({P:function(t){var e=t.paramRegistry,n=t.downloading,r=t.selectedParam,o=t.onParamSelect,i=t.onParamRemove,a=t.onParamUpdate,c=T().t,u=l(A.useState(),2),s=u[0],d=u[1];return f.jsxs(j,{sx:Z,children:[f.jsxs(h,{children:[n&&f.jsx(N,{variant:"ghost",primaryText:c("Downloading")+"...",secondaryText:n,isDisabled:!0}),e.slice().sort((function(t,e){var n,r;return(null!==(n=e.lastModified)&&void 0!==n?n:0)-(null!==(r=t.lastModified)&&void 0!==r?r:0)})).map((function(t){var e;return f.jsxs(O,{size:"sm",isAttached:!0,colorScheme:r===t.id?"primary":void 0,variant:r===t.id?"solid":"ghost",children:[f.jsx(N,{primaryText:null!==(e=t.name)&&void 0!==e?e:c("Project")+" "+t.id,secondaryText:c("Last modified")+": "+J(t.lastModified).map((function(t){return c(t)})).join(" "),"aria-pressed":r===t.id,onClick:function(){return o(t.id)}}),a&&f.jsx(S,{"aria-label":c("Edit project info"),title:c("Edit project info"),icon:f.jsx(R,{}),onClick:function(){return d(t)}}),i&&f.jsx(S,{"aria-label":c("Remove project"),title:c("Remove project"),icon:f.jsx(I,{}),onClick:function(){return i(t.id)}})]},t.id)}))]}),e.length>=10&&f.jsx(E,{as:"em",fontSize:"xs",children:c("You have reached the maximum number of projects.")}),f.jsx(V,{config:s,onClose:function(){return d(void 0)},onUpdate:function(t){null==a||a(t),d(void 0)}})]})},R:U});var a=function(t){var e=t.children,n=t.noWrap,r=s("RmgOutput",{noWrap:n});return f.jsx(d.output,{sx:r,children:e})};function U(t){var e=t.fields,n=t.noLabel,r=t.minW;return f.jsx(h,{wrap:"wrap",children:e.map((function(t,e){if(t.hidden)return f.jsx(A.Fragment,{},e);var o=t.minW||r,i="full"===o;return f.jsx(P,{className:i?"mw-full":"",label:t.label,flex:i?void 0:1,minW:i?void 0:o,noLabel:n,oneLine:t.oneLine,children:function(t){switch(t.type){case"input":return f.jsx(C,{placeholder:t.placeholder,defaultValue:t.value,type:t.variant,validator:t.validator,onDebouncedChange:t.onChange,delay:t.debouncedDelay,optionList:t.optionList,isDisabled:t.isDisabled});case"output":return f.jsx(a,{noWrap:!0,children:t.value});case"textarea":return f.jsx(D,{placeholder:t.placeholder,defaultValue:t.value,onDebouncedChange:t.onChange,isDisabled:t.isDisabled});case"slider":return f.jsx(k,{defaultValue:t.value,min:t.min,max:t.max,step:t.step,onThrottledChange:t.onChange,leftIcon:t.leftIcon,rightIcon:t.rightIcon,isDisabled:t.isDisabled});case"select":return f.jsx(L,{defaultValue:t.value,onChange:function(e){var n,r=e.target.value;return null===(n=t.onChange)||void 0===n?void 0:n.call(t,"number"==typeof t.value?Number(r):r.toString())},options:t.options,disabledOptions:t.disabledOptions,isInvalid:t.isInvalid,isDisabled:t.isDisabled});case"switch":return f.jsx(p,{isChecked:t.isChecked,isDisabled:t.isDisabled,onChange:function(e){var n,r=e.target.checked;return null===(n=t.onChange)||void 0===n?void 0:n.call(t,r)}});case"custom":return t.component;default:return f.jsx("div",{})}}(t)},e)}))})}var Y=o("n",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")})),B=(o("a",(function(t,e,n){var r=new Blob([n],{type:e});B(t,r)})),o("d",(function(t,e){var n=window.URL.createObjectURL(e),r=document.createElement("a");r.href=n,r.download=t,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)}))),J=(o("r",(function(t){return new Promise((function(e){var n=new FileReader;n.onloadend=function(){return e(n.result)},n.readAsText(t)}))})),o("i",(function(){return navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")})),function(t){if(t){var e=(new Date).getTime()-t;return e<6e4?["Just now"]:e<12e4?["1","minute ago"]:e<36e5?[Math.floor(e/1e3/60).toString(),"minutes ago"]:e<72e5?["1","hour ago"]:e<864e5?[Math.floor(e/1e3/60/60).toString(),"hours ago"]:e<1728e5?["1","day ago"]:[Math.floor(e/1e3/60/60/24).toString(),"days ago"]}return["Unknown"]});o("w",(function(t){return new Promise((function(e){setTimeout(e,t)}))}));function V(t){var e,n=t.config,r=t.onClose,o=t.onUpdate,i=T().t,a=l(A.useState(null!==(e=null==n?void 0:n.name)&&void 0!==e?e:""),2),u=a[0],s=a[1];A.useEffect((function(){var t;n&&s(null!==(t=n.name)&&void 0!==t?t:"")}),[n]);var d=[{type:"input",label:i("Project name"),value:u,onChange:s,debouncedDelay:0}];return f.jsxs(v,{isOpen:!!n,onClose:r,isCentered:!0,children:[f.jsx(g,{}),f.jsxs(m,{children:[f.jsx(y,{children:i("Edit project info")}),f.jsx(b,{}),f.jsx(_,{children:f.jsx(U,{fields:d})}),f.jsx(w,{children:f.jsx(x,{colorScheme:"primary",onClick:function(){var t;n&&((null!==(t=n.name)&&void 0!==t?t:"")!==u&&o(c(c({},n),{},{name:u})))},children:i("Confirm")})})]})]})}var Z={flex:"2 1 0%",overflow:"hidden",minW:{base:"unset",md:240},w:{base:"100%",md:"unset"},mr:{base:0,md:2},mb:{base:2,md:0},"& > div":{flexDirection:"column",h:200,overflowX:"hidden",overflowY:"auto",borderRadius:"md",borderWidth:2,"& >.chakra-button":{alignItems:"center"},"& .chakra-button__group":{"& button:not(:first-of-type)":{h:"100%"}}}};o("g",(function(){var t=function(){var t="".concat(M.getAppName(),"__").concat(F.PARAM_CONFIG_BY_ID),e=Object.entries(M.storage.getAll()).filter((function(e){return l(e,1)[0].startsWith(t)})).map((function(e){var n=l(e,2),r=n[0],o=n[1],i=r.slice(t.length);if(!o)return{id:i};try{return c(c({},JSON.parse(o)),{},{id:i})}catch(a){return{id:i}}}));return console.log("loadParamRegistry():: Found param config in localStorage",e.map((function(t){return t.id}))),e}(),e="".concat(M.getAppName(),"__").concat(F.PARAM_BY_ID),n=Object.keys(M.storage.getAll()).filter((function(t){return t.startsWith(e)})).map((function(n){var r,o=n.slice(e.length);return null!==(r=t.find((function(t){return t.id===o})))&&void 0!==r?r:{id:o}}));return console.log("getParamRegistry():: Actual param found in localStorage",n.map((function(t){return t.id}))),t.filter((function(t){return n.every((function(e){return e.id!==t.id}))})).forEach((function(t){return M.storage.remove(F.PARAM_CONFIG_BY_ID+t.id)})),n})),o("c",(function(t){var e=M.storage.get(F.PARAM_CONFIG_BY_ID+t),n=M.storage.get(F.PARAM_BY_ID+t);return{param:n?JSON.parse(n):n,config:e?JSON.parse(e):e}}));var H=o("b",(function(t,e){var n=Y();return M.storage.set(F.PARAM_BY_ID+n,t),M.storage.set(F.PARAM_CONFIG_BY_ID+n,JSON.stringify({name:e,lastModified:Date.now()})),n})),$=(o("f",function(){var t=i(r().mark((function t(e){var n,o,i;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.split("/").at(-1),t.prev=1,t.next=4,fetch(e);case 4:if(!(o=t.sent).ok){t.next=12;break}return t.next=8,o.text();case 8:return i=t.sent,t.abrupt("return",H(i,n));case 12:return console.warn("Failed to download param"),t.abrupt("return",null);case 14:t.next=20;break;case 16:return t.prev=16,t.t0=t.catch(1),console.warn("Failed to download param.",t.t0),t.abrupt("return",null);case 20:case"end":return t.stop()}}),t,null,[[1,16]])})));return function(e){return t.apply(this,arguments)}}()),o("u",(function(t){var e,n,r;"line_name"in t||(t.line_name=["路線名","Name of Line"]),delete t.fontZH,delete t.fontEN,delete t.weightZH,delete t.weightEN;for(var o=0,i=Object.entries(t.stn_list);o<i.length;o++){var a=l(i[o],2),s=a[0],f=a[1];"branch"in f||(t.stn_list[s].branch={},2===f.children.length&&(t.stn_list[s].branch.right=["through",f.children[1]]),2===f.parents.length&&(t.stn_list[s].branch.left=["through",f.parents[1]]))}t.psd_num="psd_num"in t?t.psd_num.toString():"1","line_num"in t||(t.line_num="1"),3===t.theme.length&&t.theme.push("#fff");for(var d=0,h=Object.entries(t.stn_list);d<h.length;d++){var p=l(h[d],2),v=p[0],g=p[1];"num"in g||(t.stn_list[v].num="00"),"interchange"in g&&g.interchange.map((function(t){return t.forEach((function(t){5===t.length&&t.splice(3,0,"#fff")}))}))}for(var m=0,y=Object.entries(t.stn_list);m<y.length;m++){var b=l(y[m],2),_=b[0],w=b[1];"osi22_end_p"===w.change_type&&(t.stn_list[_].change_type="osi22_pr"),"osi22_end_u"===w.change_type&&(t.stn_list[_].change_type="osi22_ur")}for(var x=0,j=Object.entries(t.stn_list);x<j.length;x++){var O=l(j[x],2),S=O[0];"interchange"in O[1]||(t.stn_list[S].interchange=[[]])}t.info_panel_type="info_panel_type"in t?function(t){switch(t){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return t}}(t.info_panel_type):"gz28","direction_gz_x"in t||(t.direction_gz_x=50),"direction_gz_y"in t||(t.direction_gz_y=70);for(var E=0,A=Object.entries(t.stn_list);E<A.length;E++){var P,L,k,D,C=l(A[E],2),T=C[0],N=C[1];if(!("transfer"in N))t.stn_list[T].transfer={tick_direc:"none"===N.change_type||"int2"===N.change_type?"r":null===(P=N.change_type)||void 0===P?void 0:P.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(L=N.change_type)||void 0===L?void 0:L.indexOf("osi"))||"p"===(null===(k=N.change_type)||void 0===k?void 0:k.split("_")[1][0]),osi_names:-1!==(null===(D=N.change_type)||void 0===D?void 0:D.indexOf("osi"))?[N.interchange[1][0]]:[],info:2===N.interchange.length?[N.interchange[0],N.interchange[1].slice(1)]:N.interchange};delete t.stn_list[T].change_type,delete t.stn_list[T].interchange}for(var R=0,I=Object.entries(t.stn_list);R<I.length;R++){var M=l(I[R],2),F=M[0],W=M[1];"services"in W||(t.stn_list[F].services=["local"]),"facility"in W?""===W.facility&&(t.stn_list[F].facility=void 0):t.stn_list[F].facility=W.usage||void 0,delete t.stn_list[F].usage}"customiseMTRDest"in t||(t.customiseMTRDest={isLegacy:t.dest_legacy||!1,terminal:!1}),delete t.dest_legacy,"svgWidth"in t||(t.svgWidth={destination:t.svg_dest_width,runin:t.svg_dest_width,railmap:t.svg_width,indoor:t.svg_width}),"indoor"in t.svgWidth||(t.svgWidth.indoor=t.svgWidth.railmap),delete t.svg_width,delete t.svg_dest_width,t.notesGZMTR=null===(e=t.notesGZMTR)||void 0===e?void 0:e.map((function(t){return 4===t.length?t.concat([!1]):t})),delete t.char_form,delete t.show_outer,delete t.strip_pc,delete t.txt_bg_gap,"namePosMTR"in t||(t.namePosMTR={isStagger:!0,isFlip:t.txt_flip}),delete t.txt_flip,Object.keys(t.stn_list).forEach((function(e){"secondaryName"in t.stn_list[e]&&!1===t.stn_list[e].secondaryName&&delete t.stn_list[e].secondaryName,"type"in t.stn_list[e].transfer&&delete t.stn_list[e].transfer.type})),t.style=void 0!==t.style&&Object.values(G).includes(t.style)?t.style:G.MTR,t.coline=null!==(n=t.coline)&&void 0!==n?n:[],t.loop=null!==(r=t.loop)&&void 0!==r&&r,t.loop_info=void 0===t.loop_info?{bank:!0,left_and_right_factor:0,bottom_factor:1}:c(c({},t.loop_info),{},{bottom_factor:Math.max(t.loop_info.bottom_factor,1)});for(var z=0,U=Object.entries(t.stn_list);z<U.length;z++){var B=l(U[z],2),J=B[0];"loop_pivot"in B[1]||(t.stn_list[J].loop_pivot=!1)}return Array.isArray(t.coline)&&(t.coline=t.coline.reduce((function(t,e){return c(c({},t),{},u({},Y(4),e))}),{})),!1===t.platform_num&&(t.platform_num=""),Object.values(t.stn_list).forEach((function(e){var n,r,o=e;o.one_line=null!==(n=o.one_line)&&void 0!==n&&n,o.int_padding=null!==(r=o.int_padding)&&void 0!==r?r:t.loop?250:355})),void 0===t.branchSpacingPct&&(t.style===G.SHMetro?t.branchSpacingPct=Math.round(t.branch_spacing/t.svg_height*300):t.branchSpacingPct=Math.round(t.branch_spacing/t.svg_height*200),delete t.branch_spacing),$(t),tt(t),t})),function(t){for(var e=function(){var e=l(r[n],2),o=e[0],i=e[1],a=i.transfer.info;a&&(t.stn_list[o].transfer.groups=a.map((function(t,e){return t.length?{name:i.transfer.osi_names[e-1],lines:t.map((function(t){var e=t;return{theme:e.slice(0,4),name:e.slice(4,6)}}))}:{lines:[]}}))),delete t.stn_list[o].transfer.info,delete t.stn_list[o].transfer.osi_names},n=0,r=Object.entries(t.stn_list);n<r.length;n++)e()}),q=function(t){return 4===t.length&&t.every((function(t){return"string"==typeof t}))&&!!t[2].match(/^#[0-9a-fA-F]{6}$/)&&Object.values(z).includes(t[3])},Q=function(t){var e=[];return function t(r,o){if(Array.isArray(r)&&q(r))e.push({path:o||"",value:r});else{var i=function(){var i=r[a],c=o?"".concat(o,".").concat(a):a;Array.isArray(i)?q(i)?e.push({path:c,value:i}):i.forEach((function(e,n){return t(e,"".concat(c,".").concat(n))})):i&&"object"===n(i)&&t(i,c)};for(var a in r)i()}}(t),e},X=function(t,e,n){for(var r=e.split("."),o=t,i=0;i<r.length-1;i++)o=o[r[i]];o[r[r.length-1]]=n},K=(o("e",function(){var e=i(r().mark((function e(n){var o,a,c,u,l,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=(new Date).getTime(),a=Q(n),console.log("[rmg] Found all themes pending for update",a),c=JSON.parse(JSON.stringify(n)),5e3,l=!1,s=new Promise((function(e,n){u=setTimeout((function(){l=!0,n("Executing time exceeds ".concat(5e3,"ms"))}),5e3),i(r().mark((function e(){var n,o,i,u,s,f;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t(a),e.prev=1,n.s();case 3:if((o=n.n()).done){e.next=13;break}if(i=o.value,u=i.path,s=i.value,!l){e.next=7;break}throw new Error("Update aborted");case 7:return e.next=9,W(s);case 9:f=e.sent,X(c,u,f);case 11:e.next=3;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),n.e(e.t0);case 18:return e.prev=18,n.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[1,15,18,21]])})))().then(e).catch(n)})),e.prev=7,e.next=10,s;case 10:return console.log("[rmg] Themes update completed, elapsed time ".concat(((new Date).getTime()-o)/1e3," sec")),e.abrupt("return",c);case 14:return e.prev=14,e.t0=e.catch(7),console.warn("[rmg] Error occurs when updating themes, elapsed time ".concat(((new Date).getTime()-o)/1e3," sec"),e.t0),e.abrupt("return",c);case 18:return e.prev=18,clearTimeout(u),e.finish(18);case 21:case"end":return e.stop()}}),e,null,[[7,14,18,21]])})));return function(t){return e.apply(this,arguments)}}()),{notesGZMTR:function(t){return!t||0===(null==t?void 0:t.length)},"stn_list.*.branch.left":function(t){return!t||0===(null==t?void 0:t.length)},"stn_list.*.branch.right":function(t){return!t||0===(null==t?void 0:t.length)},"stn_list.*.facility":function(t){return!t},"stn_list.*.secondaryName":function(t){return!t||","===t.join(",")}}),tt=function(t){return Object.entries(K).forEach((function(r){var o=l(r,2),i=o[0],a=o[1];Object.entries(function(t,r){var o={};return function t(r,i,a){for(var c,u=r,l=function(n){var r;return"*"===a[n]?(Object.keys(u).forEach((function(r){return t(u,[].concat(e(i),e(a.slice(0,n))),[r].concat(e(a.slice(n+1))))})),{v:void 0}):void 0===(u=null===(r=u)||void 0===r?void 0:r[a[n]])?{v:void 0}:void 0},s=0;s<a.length-1;s++){var f=l(s);if("object"===n(f))return f.v}o[[].concat(e(i),e(a)).join(".")]=null===(c=u)||void 0===c?void 0:c[a[a.length-1]]}(t,[],r.split(".")),o}(t,i)).forEach((function(e){var n=l(e,2),r=n[0],o=n[1];a(o)&&X(t,r,void 0)}))})),t}}}}))}();
