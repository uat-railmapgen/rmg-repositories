!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var e=["num"],r=["stationName","stationState","lower","align","facility"];function n(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return e};var e={},r=Object.prototype,i=r.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},c=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(N){u=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),c=new j(n||[]);return a(o,"_invoke",{value:O(t,r,c)}),o}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(N){return{type:"throw",arg:N}}}e.wrap=f;var d={};function g(){}function m(){}function p(){}var v={};u(v,c,(function(){return this}));var y=Object.getPrototypeOf,b=y&&y(y(L([])));b&&b!==r&&i.call(b,c)&&(v=b);var w=p.prototype=g.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,r){function n(a,o,c,l){var s=h(e[a],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==t(f)&&i.call(f,"__await")?r.resolve(f.__await).then((function(t){n("next",t,c,l)}),(function(t){n("throw",t,c,l)})):r.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return n("throw",t,c,l)}))}l(s.arg)}var o;a(this,"_invoke",{value:function(t,e){function i(){return new r((function(r,i){n(t,e,r,i)}))}return o=o?o.then(i,i):i()}})}function O(t,e,r){var n="suspendedStart";return function(i,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===i)throw a;return E()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var c=_(o,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=h(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===d)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}function _(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var i=h(n,t.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,d;var a=i.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function L(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(i.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return m.prototype=p,a(w,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:m,configurable:!0}),m.displayName=u(p,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,l,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(f(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},x(w),u(w,s,"Generator"),u(w,c,(function(){return this})),u(w,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=L,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return o.type="throw",o.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],o=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var c=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(c&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;k(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function i(t,e,r,n,i,a,o){try{var c=t[a](o),l=c.value}catch(s){return void r(s)}c.done?e(l):Promise.resolve(l).then(n,i)}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){h(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,i=function(t,e){if(null==t)return{};var r,n,i={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(i[r]=t[r])}return i}function l(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,a,o,c=[],l=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(u){s=!0,i=u}finally{try{if(!l&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(s)throw i}}return c}}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t){return function(t){if(Array.isArray(t))return f(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function h(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,r||"default");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./vendor-legacy-2a665149.js","./index-legacy-3b535603.js","./share-legacy-167bcae4.js","./mtr-legacy-01f1ae4b.js","./app-router-legacy-35318392.js"],(function(t,a){"use strict";var u,f,d,g,m,p,v,y,b,w,x,S,O,_,P,k,j,L,E,N,M;return{setters:[function(t){u=t.p,f=t.b,d=t.j,g=t.a9},function(t){m=t.ar,p=t.u,v=t.S,y=t.as,b=t.D,w=t.F,x=t.at},function(t){S=t.S,O=t.a,_=t.c,P=t.g,k=t.b},function(t){j=t.g,L=t.S,E=t.r,N=t.l},function(t){M=t.w}],execute:function(){var a=u.memo((function(t){var e;return f("rect",{fill:"var(--rmg-theme-colour)",height:20,style:(e={width:"var(--rmg-svg-width)"},h(e,"--strip-percentage",t.stripPc),h(e,"transform","translateY(calc(var(--strip-percentage, 95) * var(--rmg-svg-height) / 100 - 10px))"),e)})})),R=m.Destination;function T(){var t=p((function(t){return t.app})).canvasScale,e=p((function(t){return t.param})),r=e.svgWidth,n=e.svg_height,i=e.theme,o=r[R];return d(S,{type:R,svgWidth:o,svgHeight:n,canvasScale:t,theme:i,children:[f(I,{}),f(a,{stripPc:90}),f(A,{})]})}var I=u.memo((function(){return f("defs",{children:f("path",{id:"arrow",d:"M60,60L0,0L60-60H100L55-15H160V15H55L100,60z",fill:"var(--rmg-black,#000)"})})})),A=function(){var t,e=p((function(t){return t.helper.routes})),r=p((function(t){return t.param.svgWidth})),n=p((function(t){return t.param.direction})),i=p((function(t){return t.param.customiseMTRDest})),a=p((function(t){return t.param.platform_num})),o=p((function(t){return t.param.line_name})),c=p((function(t){return t.param.current_stn_idx})),h=p((function(t){return t.param.stn_list}));if(!1!==i.terminal)t=i.terminal;else{var g=s(new Set(e.filter((function(t){return t.includes(c)})).map((function(t){return t.filter((function(t){return!["linestart","lineend"].includes(t)})).slice(n===v.left?0:-1)[0]})).filter((function(t){return t!==c}))));t=[g.map((function(t){return h[t].name[0]})).join("/"),g.map((function(t){return h[t].name[1]})).join("/").replace("\\"," ")]}var y=u.useRef(null),b=l(u.useState({width:0}),2),w=b[0],x=b[1];u.useEffect((function(){y.current&&x(y.current.getBBox())}),[t.toString(),i.isLegacy]);var S=310+w.width+45+50,O=(r[m.Destination]-(n===v.left?1:-1)*S)/2,_=O+285*(n===v.left?1:-1),P=_+120*(n===v.left?1:-1);return d("g",{id:"dest_name",style:{transform:"translateY(calc(var(--rmg-svg-height) / 2 - 20px))"},children:[f("use",{xlinkHref:"#arrow",transform:"translate(".concat(O,",0)rotate(").concat(n===v.left?0:180,")")}),f(D,{num:a,transform:"translate(".concat(_,",0)")}),d("g",{ref:y,textAnchor:n===v.left?"start":"end",transform:"translate(".concat(P,",-25)"),fill:"var(--rmg-black)",children:[f("text",{className:"rmg-name__zh",fontSize:90,children:(i.isLegacy?o[0]:"")+"往"+t[0]}),f("text",{className:"rmg-name__en",fontSize:45,dy:80,children:(i.isLegacy?o[1]+" ":"")+"to "+t[1]})]})]})},D=function(t){var r=t.num,n=c(t,e);return f("g",o(o({id:"platform"},n),{},{children:u.useMemo((function(){return d(g,{children:[f("circle",{cx:0,cy:0,r:75,fill:"var(--rmg-theme-colour)"}),f("text",{className:"rmg-name__zh",dy:0,textAnchor:"middle",fontSize:135,fill:"#fff",children:r})]})}),[r])}))},G=function(t){switch(t){case y.UP:return 180;case y.DOWN:return 0;case y.LEFT:return 90;case y.RIGHT:return-90}};var F=u.memo((function(t){var e=t.interchangeInfo,r=t.isPassed,n=t.position,i=t.repel,a=t.repelOffset,o=e[4].split("\\").length,c=e[5].split("\\").length,l=n===y.LEFT||i===b.left?"end":n===y.RIGHT||i===b.right?"start":"middle",s={path:{rotate:G(n)},g:{x:(n===y.LEFT?-24:n===y.RIGHT?24:0)+(i===b.left?-1:i===b.right?1:0)*(null!=a?a:3),y:n===y.UP?-37-10*(o-1)-7*(c-1):n===y.DOWN?31:6-(20+10*(o-1)+7*(c-1)-1)/2}};return d(g,{children:[f("path",{d:"M0,0v17",strokeLinecap:"round",stroke:r?"var(--rmg-grey)":e[2],strokeWidth:8,transform:"rotate(".concat(s.path.rotate,")")}),d("g",{textAnchor:l,transform:"translate(".concat(s.g.x,",").concat(s.g.y,")"),fill:r?"var(--rmg-grey)":"var(--rmg-black)",children:[e[4].split("\\").map((function(t,e){return f("text",{dy:10*e,className:"rmg-name__zh",fontSize:10,children:t},e)})),e[5].split("\\").map((function(t,e){return f("text",{dy:10*o-1+7*e,className:"rmg-name__en",fontSize:7,children:t},o+e)}))]})]})}),(function(t,e){return t.interchangeInfo.toString()===e.interchangeInfo.toString()&&t.isPassed===e.isPassed&&t.position===e.position&&t.repel===e.repel}));function W(t){var e=t.length,r=t.isPassed,n=t.isReversed;return f("path",{d:"M-8,0 v".concat(e," a8,8 0 0,0 16,0 v-").concat(e," a8,8 0 0,0 -16,0Z"),className:"rmg-stn__mtr",stroke:r?"var(--rmg-grey)":"var(--rmg-black)",transform:"scale(1,".concat(n?-1:1,")")})}function z(t){var e=t.interchangeInfoList,r=t.direction,n=t.isPassed,i=t.isReversed,a=t.repel,o=e.length<=1?0:18*e.length;return d("g",{children:[1===e.length&&f(F,{interchangeInfo:e[0],isPassed:n,position:i?y.UP:y.DOWN,repel:a}),e.length>1&&e.map((function(t,e){return f("g",{transform:"translate(0,".concat(i?-18*(e+1):18*(e+1),")"),children:f(F,{interchangeInfo:t,isPassed:n,position:r===b.right?y.RIGHT:y.LEFT})},e)})),f(W,{length:o,isPassed:n,isReversed:i})]})}function H(t){var e,r,n,i,a,o=t.interchangeInfoList,c=t.direction,l=t.isPassed,s=t.isReversed,u=t.isTerminal,h=t.stationName,g=null!==(e=null==h||null===(r=h[1])||void 0===r||null===(n=r.split("\\"))||void 0===n?void 0:n.length)&&void 0!==e?e:1,m=18*(o.length-1),p={name:{x:u?0:1===o.length?c===b.left?-13:13:c===b.left?13:-13,y:u?s?19:-28:(s?-9:9)*(o.length-1)-4-5*(g-1)}};return d("g",{children:[o.map((function(t,e,r){return f("g",{transform:"translate(0,".concat(s?-18*e:18*e,")"),children:f(F,{interchangeInfo:t,isPassed:l,position:1===r.length?s?y.UP:y.DOWN:c===b.right?y.RIGHT:y.LEFT,repel:u?c:void 0,repelOffset:u&&1===r.length?-4:0})},e)})),f(W,{length:m,isPassed:l,isReversed:s}),d("g",{textAnchor:0===p.name.x?"middle":p.name.x>0?"start":"end",fill:l?"var(--rmg-grey)":"var(--rmg-black)",transform:"translate(".concat(p.name.x,",").concat(p.name.y,")"),children:[f("text",{className:"rmg-name__zh",fontSize:14,children:null==h?void 0:h[0]}),null==h||null===(i=h[1])||void 0===i||null===(a=i.split("\\"))||void 0===a?void 0:a.map((function(t,e){return f("text",{className:"rmg-name__en",fontSize:9,dy:12+10*e,children:t},e)}))]})]})}var U=function(){var t,e=(t=n().mark((function t(){var e,r,i,a;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=3;case 1:if(!e--){t.next=19;break}return t.next=4,document.fonts.ready;case 4:r=t.sent,i=r.values();case 6:if(!(a=i.next()).done){t.next=10;break}return t.abrupt("break",14);case 10:if("GenYoMin TW"!==a.value.family){t.next=12;break}return t.abrupt("return");case 12:t.next=6;break;case 14:return console.log("GenYoMin is NOT ready. Retry attempts remaining: "+e+" ..."),t.next=17,M(500);case 17:t.next=1;break;case 19:throw new Error("Failed to load GenYoMin after 3 attempts");case 20:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function c(t){i(o,n,a,c,l,"next",t)}function l(t){i(o,n,a,c,l,"throw",t)}c(void 0)}))});return function(){return e.apply(this,arguments)}}(),Y=u.memo((function(t){var e=t.stnName,r=t.onUpdate,n=t.align,i=u.useRef(null),a=function(){i.current&&r&&r(i.current.getBBox())};u.useEffect((function(){a(),U().then().catch(console.log).finally(a)}),[e.toString(),n]);return d("g",{ref:i,textAnchor:function(t){switch(t){case b.left:return"start";case b.right:return"end";default:return"middle"}}(n),children:[f("text",{className:"rmg-name__zh rmg-name__mtr--station",children:e[0]}),e[1].split("\\").map((function(t,e){return f("text",{className:"rmg-name__en rmg-name__mtr--station",dy:(r=e,17+11*r),children:t},e);var r}))]})}),(function(t,e){return t.stnName.toString()===e.stnName.toString()&&t.align===e.align})),B=-10.8125,J=17-B+13.21875-8,Z=14;function C(t){var e=t.stationName,n=t.stationState,i=t.lower,a=t.align,s=t.facility,h=c(t,r),g=l(u.useState({x:0,width:0}),2),m=g[0],p=g[1],v=e[1].split("\\").length,y={g:{x:a?a===b.right?-3:3:0,y:(i?Z-B:-Z-B-J-11*(v-1))+(a?i?10:-10:0)},rect:{x:m.x-3+(s===w.none?0:a?a===b.right?-3-J:0:(J+5)/2-3-J),y:B-1,width:m.width+6+(s===w.none?0:J+3),height:J+2+11*(v-1)},use:{x:a?a===b.right?-(J+2)/2-m.width-3:(J+2)/2-2:-(m.width+3)/2,y:B-1+5.5*(v-1)},StationName:{x:s===w.none?0:a?a===b.right?0:J+3:(J+5)/2,y:0}};return f("g",o(o({},h),{},{children:d("g",{fill:function(t){switch(t){case x.PASSED:return"var(--rmg-grey)";case x.CURRENT:return"#fff";case x.FUTURE:return"var(--rmg-black)"}}(n),transform:"translate(".concat(y.g.x,",").concat(y.g.y,")"),children:[n===x.CURRENT&&f("rect",{x:y.rect.x,y:y.rect.y,width:y.rect.width,height:y.rect.height,fill:"var(--rmg-black)"}),s!==w.none&&f("use",{xlinkHref:"#".concat(s),fill:n===x.PASSED?"var(--rmg-grey)":"var(--rmg-black)",x:y.use.x,y:y.use.y}),f("g",{transform:"translate(".concat(y.StationName.x,",").concat(y.StationName.y,")"),children:f(Y,{stnName:e,onUpdate:p,align:a})})]})}))}function V(t){var e,r,n,i,a,o,c,l=t.stationId,s=t.stationState,u=t.isReversed,h=p((function(t){return t.param.stn_list[l]})),g=h.name,m=h.parents,y=h.children,w=h.transfer,S=w.info,O=w.tick_direc,_=w.osi_names,P=w.paid_area,k=h.facility,j=null!==(e=S[0])&&void 0!==e&&e.length?m.includes("linestart")?b.left:y.includes("lineend")?b.right:void 0:void 0,L=Boolean((null===(r=S[1])||void 0===r?void 0:r.length)&&!j),E={link:{scaleX:j===b.left?-1:1,scaleY:u?-1:1},osi:{x:j?j===b.left?-41:41:0,y:j?0:u?-26:26}};return d("g",{"data-testid":"station-icon-wrapper",children:[(null===(n=S[1])||void 0===n?void 0:n.length)&&f("path",{d:j&&null!==(i=S[0])&&void 0!==i&&i.length?"M0,0H41":"M0,0V26",strokeWidth:2.69,strokeDasharray:P?0:2.5,stroke:s===x.PASSED?"var(--rmg-grey)":"var(--rmg-black)",transform:"scale(".concat(E.link.scaleX,",").concat(E.link.scaleY,")")}),f(z,{interchangeInfoList:S[0],direction:O===v.right?b.right:b.left,isPassed:s===x.PASSED,isReversed:!j&&null!==(a=S[1])&&void 0!==a&&a.length?!u:u,repel:L?O===v.right?b.right:b.left:void 0}),(null===(o=S[1])||void 0===o?void 0:o.length)&&f("g",{transform:"translate(".concat(E.osi.x,",").concat(E.osi.y,")"),children:f(H,{interchangeInfoList:S[1],direction:j||(O===v.right?b.right:b.left),stationName:_[0],isPassed:s===x.PASSED,isReversed:j?!u:u,isTerminal:Boolean(j)})}),f(C,{stationName:g,stationState:s,facility:k,lower:u,align:null!==(c=S[0])&&void 0!==c&&c.length&&L?O===v.left?b.left:b.right:void 0})]})}var X=function(){var t,e=p((function(t){return t.helper})),r=e.branches,n=e.routes,i=e.depsStr,a=p((function(t){return t.param})),c=a.svgWidth,l=a.svg_height,s=a.y_pc,g=a.padding,v=a.branchSpacingPct,y=a.direction,b=a.namePosMTR,w=a.current_stn_idx,x=a.stn_list,S=O(x,N,E),M=u.useMemo((function(){return _("linestart","lineend",S)}),[JSON.stringify(S)]),R=u.useMemo((function(){return _(M.nodes[1],M.nodes.slice(-2)[0],S)}),[JSON.stringify(S)]),T=u.useMemo((function(){return console.log("computing x shares"),Object.keys(x).reduce((function(t,e){return o(o({},t),{},h({},e,P(e,S,r)))}),{})}),[r.toString(),JSON.stringify(S)]),I=[c[m.RailMap]*g/100,c[m.RailMap]*(1-g/100)],A=Object.keys(T).reduce((function(t,e){return o(o({},t),{},h({},e,I[0]+T[e]/R.len*(I[1]-I[0])))}),{}),D=u.useMemo((function(){return Object.keys(x).reduce((function(t,e){return o(o({},t),{},h({},e,j(e,r,x)*v*l/200))}),{})}),[i,v,l]),G=u.useMemo((function(){return k(w,n,y)}),[w,y,n.toString()]),F=Object.keys(x).reduce((function(t,e){return o(o({},t),{},h({},e,function(t,e,r){var n,i=r.isStagger,a=r.isFlip;if(!i)return a;if(e[0].includes(t))n=e[0].indexOf(t)%2;else{var o=e.filter((function(e){return e.includes(t)}))[0];n=(e[0].indexOf(o[0])+o.indexOf(t)+1)%2}return 0===n?a:!a}(e,r,b)))}),{}),W=L.drawLine(r,G,x,I,A,D,v*l/200,M);return d("g",{id:"main",style:(t={},h(t,"--y-percentage",s),h(t,"transform","translateY(calc(var(--y-percentage) * var(--rmg-svg-height) / 100))"),t),children:[f(q,{paths:W}),f($,{xs:A,ys:D,stnStates:G,namePoss:F})]})},q=u.memo((function(t){return d("g",{fill:"none",strokeWidth:9.68,children:[d("g",{stroke:"var(--rmg-grey)",children:[t.paths.pass.map((function(t,e){return f("path",{d:t},e)})),t.paths.sidingPass.map((function(t,e){var r;return f("path",{d:t,strokeDasharray:4===(null===(r=t.match(/a/g))||void 0===r?void 0:r.length)?"10 4":void 0},e)}))]}),d("g",{stroke:"var(--rmg-theme-colour)",children:[t.paths.main.map((function(t,e){return f("path",{d:t},e)})),t.paths.sidingMain.map((function(t,e){var r;return f("path",{d:t,strokeDasharray:4===(null===(r=t.match(/a/g))||void 0===r?void 0:r.length)?"10 4":void 0},e)}))]})]})}),(function(t,e){return JSON.stringify(t.paths)===JSON.stringify(e.paths)})),$=function(t){var e=t.xs,r=t.ys,n=t.stnStates,i=t.namePoss,a=p((function(t){return t.param.stn_list}));return f("g",{id:"stn_icons",children:Object.keys(a).filter((function(t){return!["linestart","lineend"].includes(t)})).map((function(t){return f("g",{style:{transform:"translate(".concat(e[t],"px,").concat(r[t],"px)")},children:f(V,{stationId:t,stationState:n[t],isReversed:i[t]})},t)}))})},K=m.RailMap;function Q(){var t=p((function(t){return t.app})).canvasScale,e=p((function(t){return t.param})),r=e.svgWidth,n=e.svg_height,i=e.theme,o=r[K];return d(S,{type:K,svgWidth:o,svgHeight:n,canvasScale:t,theme:i,children:[f(tt,{}),f(a,{stripPc:90}),f(X,{})]})}var tt=u.memo((function(){return d("defs",{children:[d("g",{id:"airport",transform:"scale(0.5970084519)",children:[f("rect",{x:-29.33899,height:58.67798,width:58.67798}),f("path",{id:"airport",d:"M28.9769,6.60134c1.711.013,3.111,2.53205,3.111,4.241v10.337s17.106,15.435,17.358,15.666a1.145,1.145,0,0,1,.488,1.152v2.833c0,.651-.451.61-.695.467-.334-.119-17.151-8.863-17.151-8.863-.004,1.458-.797,9.006-1.326,13.304,0,0,4.61,2.457,4.699,2.521.334.268.352.359.352.852v2.001c0,.477-.352.428-.51.324-.183-.062-5.693-1.921-5.693-1.921a2.56018,2.56018,0,0,0-.633-.127,2.31654,2.31654,0,0,0-.666.127s-5.477,1.859-5.672,1.921c-.185.104-.523.153-.523-.324v-2.001c0-.493.029-.584.367-.852.086-.064,4.678-2.521,4.678-2.521-.524-4.298-1.307-11.846-1.325-13.304,0,0-16.822,8.744-17.148,8.863-.217.143-.69.184-.69-.467v-2.833a1.16206,1.16206,0,0,1,.473-1.152c.276-.231,17.365-15.666,17.365-15.666v-10.337c0-1.709,1.403-4.228,3.14105-4.241",transform:"translate(-28.9697,0.14347)",fill:"white"})]}),d("g",{id:"disney",transform:"scale(0.5970084519)",children:[f("rect",{x:-29.33899,width:58.67798,height:58.67798}),f("path",{fill:"white",d:"M45.6152,7.85015a9.80248,9.80248,0,0,0-9.79907,9.801,9.70059,9.70059,0,0,0,.342,2.582c.002.026.002.055.002.093a.31815.31815,0,0,1-.31494.318.67741.67741,0,0,1-.12806-.02,15.71521,15.71521,0,0,0-13.498,0,.61.61,0,0,1-.122.02.31841.31841,0,0,1-.322-.318v-.067a9.62553,9.62553,0,0,0,.35608-2.608,9.803,9.803,0,1,0-9.797,9.8,10.10364,10.10364,0,0,0,2.308-.271h.05493a.31113.31113,0,0,1,.31409.318.32433.32433,0,0,1-.019.12,15.72588,15.72588,0,1,0,29.703,7.216,15.83676,15.83676,0,0,0-1.746-7.23.18417.18417,0,0,1-.0271-.106.31612.31612,0,0,1,.32007-.318h.057a10.15953,10.15953,0,0,0,2.316.271,9.80051,9.80051,0,0,0,0-19.601",transform:"translate(-28.9697 0.13398)"})]}),f("clipPath",{id:"hsr-clip-path",transform:"translate(-0.00057 0.01643)",children:f("path",{fill:"none",d:"M5.1606.89861a3.67176,3.67176,0,0,0-3.676,3.667v48.966a3.67842,3.67842,0,0,0,3.676,3.692h48.443a3.67892,3.67892,0,0,0,3.678-3.692V4.5656a3.67227,3.67227,0,0,0-3.678-3.667Z"})}),d("g",{id:"hsr",transform:"scale(0.5970084519)",children:[f("rect",{x:-29.33899,width:58.67798,height:58.67798}),d("g",{clipPath:"url(#hsr-clip-path)",transform:"translate(-29.33899,0)",children:[f("rect",{x:-3.25242,y:24.74141,width:61.75879,height:.98008,transform:"translate(-8.93747 17.31321) rotate(-30.16134)",fill:"white"}),f("path",{d:"M5.77169,48.97289c-2.17407-3.89294,2.56994-10.525,4.85-13.724l.173-.248a83.00826,83.00826,0,0,1,7.39294-9.285,97.384,97.384,0,0,1,11.082-9.958c7.051-6.045,15.832-5.876,16.447-5.894l11.785-.957.276,17.42-11.5271,10.586c-.36.39405-5.553,5.863-18.10193,11.035-6.752,2.783-11.877,4.146-15.66,4.146-3.301,0-5.561-1.049-6.71692-3.121",transform:"translate(-0.00057 0.01643)",fill:"white"}),f("polygon",{points:"57.453 29.614 32.426 58.31 35.582 58.509 57.584 30.433 57.453 29.614",fill:"white"}),f("path",{d:"M49.04708,11.61364a.94277.94277,0,0,0-.17407-.227c-.752-.93695-2.988-1.259-5.933-.793a25.98382,25.98382,0,0,0-9.99695,3.032A98.52916,98.52916,0,0,0,20.723,23.69768c-3.1759,3.487-4.645,6.388-3.62292,7.584,1.84,2.166,13.7539.716,22.00793-6.066,9.035-7.42,10.718-11.577,9.93909-13.602",transform:"translate(-0.00057 0.01643)"}),f("path",{d:"M34.65255,13.81182c5.65991-2.842,11.28088-2.856,12.1499-1.213.88306,1.652-2.99792,5.303-8.656,8.128-5.648,2.837-10.9469,3.805-11.81994,2.15-.873-1.641,2.668-6.237,8.326-9.065",transform:"translate(-0.00057 0.01643)",fill:"white"}),f("path",{d:"M58.10958,25.03454c-16.832,20.708-40.7301,26.038-40.7301,26.038,11-6.73,12.769-8.111,18.968-18.01,8.364-13.351,21.77808-21.549,21.912-21.63,0,0-.068,13.5-.1499,13.602",transform:"translate(-0.00057 0.01643)"}),f("path",{d:"M27.1877,26.69561l9.705-2.814a6.22768,6.22768,0,0,1-1.994,2.759,25.57277,25.57277,0,0,1-6.697,3.405,11.78221,11.78221,0,0,1-5.5.783Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),f("path",{d:"M19.59005,25.97692a18.37656,18.37656,0,0,1,3.891-3.976,6.66452,6.66452,0,0,0-.30908,2.213l-4.391,4.829a6.18212,6.18212,0,0,1,.80908-3.066",transform:"translate(-0.00057 0.01643)",fill:"white"}),f("polygon",{points:"23.156 58.311 57.463 26.746 57.396 25.857 21.582 58.607 23.156 58.311",fill:"white"}),f("path",{d:"M60.15645,12.35973a68.6782,68.6782,0,0,0-12.602,9.542c-8.15,7.745-12.109,15.259-9.855,16.091,2.24793.816,10.678-4.782,18.83594-12.543,1.828-1.74,3.48-3.424,4.926-5.024Z",transform:"translate(-0.00057 0.01643)",fill:"white"}),f("path",{d:"M63.07638,11.82653a40.86955,40.86955,0,0,0-10,7.096c-5.90406,5.437-9.48609,11.105-7.848,11.742,1.657.631,8.28894-3.955,14.188-9.401a61.76591,61.76591,0,0,0,4.61694-4.705Z",transform:"translate(-0.00057 0.01643)"}),f("path",{d:"M12.67989,42.93969a9.87,9.87,0,0,0-5.754-1.895c-.113.22-.223.439-.33008.662a9.45046,9.45046,0,0,1,5.69507,1.749,6.27885,6.27885,0,0,1,2.61,6.305,10.16524,10.16524,0,0,1-.598,2.228c.238-.023.481-.053.725-.087.78308-2.249,1.394-6.184-2.3479-8.962",transform:"translate(-0.00057 0.01643)"})]})]}),f("path",{id:"inttick",d:"M0,0v17",strokeLinecap:"round"})]})}));t("default",{destination:f(T,{}),railmap:f(Q,{})})}}}))}();
