!function(){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function e(n,t){for(var e=0;e<t.length;e++){var r=t[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,s(r.key),r)}}function r(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),Object.defineProperty(n,"prototype",{writable:!1}),n}function i(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),t&&o(n,t)}function o(n,t){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},o(n,t)}function c(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,r=f(n);if(t){var i=f(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return u(this,e)}}function u(t,e){if(e&&("object"===n(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return a(t)}function a(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function f(n){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},f(n)}function l(n,t,e){return(t=s(t))in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function s(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,e||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}function h(n,t){var e="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!e){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return p(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1;return{s:function(){e=e.call(n)},n:function(){var n=e.next();return c=n.done,n},e:function(n){u=!0,o=n},f:function(){try{c||null==e.return||e.return()}finally{if(u)throw o}}}}function p(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./share-legacy.ecf95bad.js"],(function(n,e){"use strict";var o;return{setters:[function(n){o=n.d}],execute:function(){n("g",(function(n,t,e){var r=t[0];if(r.includes(n)){if(t.slice(1).find((function(t){return t.includes(n)})))return 0;var i=t.slice(1).find((function(t){var e="linestart"===t[0],i=r.indexOf(n)<r.indexOf(t.slice(-1)[0]),o="lineend"===t.slice(-1)[0],c=r.indexOf(n)>r.indexOf(t[0]);return e&&i||o&&c}));return i?1===e[i[0]].children.indexOf(i[1])?-1:1:0}var o=t.slice(1).find((function(t){return t.includes(n)}));return o?"linestart"!==o[0]&&"lineend"!==o.slice(-1)[0]?1===e[o[0]].children.indexOf(o[1])?1.2:-1.2:1===e[o[0]].children.indexOf(o[1])?1:-1:0}));var e=function(n){var t,e="a".concat(6,",").concat(6,",0,0,1,").concat(6,",").concat(6),r="a".concat(6,",").concat(6,",0,0,0,").concat(6,",").concat(6),i="a".concat(6,",").concat(6,",0,0,0,").concat(6,",-").concat(6),o="a".concat(6,",").concat(6,",0,0,1,").concat(6,",-").concat(6),c=void 0,u=[],a=h(n);try{for(a.s();!(t=a.n()).done;){var f=t.value;if(c)if(f[1]===c[1])u.push("H"+f[0]);else{var l=(f[0]+c[0])/2-(0===c[1]?0:12);u.push("H"+l),f[1]>c[1]?(u.push(e),u.push("V"+(f[1]-6)),u.push(r)):(u.push(i),u.push("V"+(f[1]+6)),u.push(o)),u.push("H"+f[0])}else u.push("M"+f.join(","));c=f}}catch(s){a.e(s)}finally{a.f()}return u.join(" ").replace(/( H([\d.]+))+/g," H$2")},u=n("l",(function(n,t){var e=0,r=n[t].transfer,i=r.info.map((function(n){return n.length}));return"l"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.4),!i[1]||1===i[0]&&2===i[1]||(e+=.4)),1===i[0]&&2===i[1]&&"linestart"!==n[t].parents[0]&&"lineend"!==n[t].children[0]&&(e+=.8),2===n[t].parents.length&&(e+=.2),2===n[n[t].parents[0]].children.length&&(e+=.4),e})),f=n("r",(function(n,t){var e=0,r=n[t].transfer,i=r.info.map((function(n){return n.length}));return"r"===r.tick_direc&&(!i[1]&&i[0]>1&&(e+=.4),!i[1]||1===i[0]&&2===i[1]||(e+=.4)),1===i[0]&&2===i[1]&&"linestart"!==n[t].parents[0]&&"lineend"!==n[t].children[0]&&(e+=.8),2===n[t].children.length&&(e+=.2),2===n[n[t].children[0]].parents.length&&(e+=.4),e})),s=function(n){i(s,n);var o=c(s);function s(){var n;t(this,s);for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];return l(a(n=o.call.apply(o,[this].concat(r))),"leftWideFactor",(function(t){return u(n.stnList,t)})),l(a(n),"rightWideFactor",(function(t){return f(n.stnList,t)})),n}return r(s,null,[{key:"drawLine",value:function(n,t,r,i,o,c,u,a){var f=this,l=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,s={main:[],pass:[],sidingMain:[],sidingPass:[]};return n.forEach((function(h){var p="linestart"!==h[0]&&"lineend"!==h.slice(-1)[0],d=(h=h.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),y=h.filter((function(n){return t[n]<=0}));1===d.length&&(y=h),0===d.filter((function(n){return-1!==y.indexOf(n)})).length&&d.length&&(y[0]===h[0]?y.push(d[0]):d[0]===h[0]&&d[d.length-1]===h[h.length-1]&&y.length?(y=h,d=[]):y.unshift(d[d.length-1])),p?(s.sidingMain.push(e(d.map((function(n){return[o[n],c[n]]})))),s.sidingPass.push(e(y.map((function(n){return[o[n],c[n]]}))))):(s.main.push(new f({stnList:r,criticalPath:a})._linePath(d,i,n,o,c,u,a,l)),s.pass.push(new f({stnList:r,criticalPath:a})._linePath(y,i,n,o,c,u,a,l)))})),s}}]),s}(o);n("S",s);var p=function(n){i(o,n);var e=c(o);function o(){return t(this,o),e.apply(this,arguments)}return r(o,null,[{key:"drawLine",value:function(n,t,e,r,i,o,c,u){var a=this,f=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0,l={main:[],pass:[],sidingMain:[],sidingPass:[]};return n.forEach((function(s){var h=(s=s.filter((function(n){return!["linestart","lineend"].includes(n)}))).filter((function(n){return t[n]>=0})),p=s.filter((function(n){return t[n]<=0}));1===h.length&&(p=s),0===h.filter((function(n){return-1!==p.indexOf(n)})).length&&h.length&&(p[0]===s[0]?p.push(h[0]):h[0]===s[0]&&h[h.length-1]===s[s.length-1]&&p.length?(p=s,h=[]):p.unshift(h[h.length-1])),l.main.push(new a({stnList:e,criticalPath:u})._linePath(h,r,n,i,o,c,u,f)),l.pass.push(new a({stnList:e,criticalPath:u})._linePath(p,r,n,i,o,c,u,f))})),l}}]),o}(s);n("a",p)}}}))}();
