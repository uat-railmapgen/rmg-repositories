!function(){function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function e(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=i(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return c=t.done,t},e:function(t){s=!0,a=t},f:function(){try{c||null==e.return||e.return()}finally{if(s)throw a}}}}function i(t,n){if(t){if("string"==typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?o(t,n):void 0}}function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){s(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n,e){return(n=u(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(n){var e=function(n,e){if("object"!==t(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var i=r.call(n,e||"default");if("object"!==t(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===t(e)?e:String(e)}System.register(["./vendor-legacy-d8668e94.js","./index-legacy-0f3f64fc.js"],(function(t,i){"use strict";var o,a;return{setters:[function(t){o=t.j},function(t){a=t.S}],execute:function(){t("S",(function(t){var n,e=t.type,r=t.svgWidth,i=t.svgHeight,a=t.canvasScale,c=t.theme,u=t.children;return o.jsxs("svg",{id:e,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:i*a,viewBox:"0 0 ".concat(r," ").concat(i),colorInterpolationFilters:"sRGB",style:(n={},s(n,"--rmg-svg-width",r+"px"),s(n,"--rmg-svg-height",i+"px"),s(n,"--rmg-theme-colour",c[2]),s(n,"--rmg-theme-fg",c[3]),n),children:[o.jsx("rect",{id:"canvas-bg",fill:"white",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}),u,o.jsx("rect",{id:"canvas-border",fill:"none",strokeWidth:3,stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}})]})}));t("a",(function(t,n,e){return Object.keys(t).reduce((function(r,i){return c(c({},r),{},s({},i,t[i].children.reduce((function(r,o){return c(c({},r),{},s({},o,1+n(t,o)+e(t,i)))}),{})))}),{})}));var i=t("c",(function(t,n,e){if(t===n)return{len:0,nodes:[t]};var r=[],o=[];Object.keys(e[t]).forEach((function(a){var c=i(a,n,e);c.len<0||(r.push(e[t][a]+c.len),c.nodes.unshift(t),o.push(c.nodes))}));var a=Math.max.apply(Math,r);return{len:a,nodes:o[r.indexOf(a)]}}));t("g",(function(t,n,e){var r=i("linestart","lineend",n);if(r.nodes.includes(t))return i(r.nodes[1],t,n).len;for(var o=e.filter((function(n){return n.includes(t)}))[0],a=t;!r.nodes.includes(a);)a=o[o.indexOf(a)-1];for(var c=t;!r.nodes.includes(c);)c=o[o.indexOf(c)+1];var s="linestart"===a,u=[];return s||"lineend"===c?s?(u[0]=0,u[1]=i(r.nodes[1],c,n).len,u[2]=i(o[1],t,n).len,u[3]=i(t,c,n).len):(u[0]=i(r.nodes[1],a,n).len,u[1]=i(a,r.nodes.slice(-2)[0],n).len,u[2]=i(a,t,n).len,u[3]=i(t,o.slice(-2)[0],n).len):(u[0]=i(r.nodes[1],a,n).len,u[1]=i(a,c,n).len,u[2]=i(a,t,n).len,u[3]=i(t,c,n).len),u[0]+u[2]*u[1]/(u[2]+u[3])})),t("b",(function(t,n,i){var o;return console.log("computing stations' states"),e(new Set((o=[]).concat.apply(o,e(n)))).reduce((function(e,o){return c(c({},e),{},s({},o,o===t?0:(i===a.right?function(t,n,e){var i,o=r(e);try{for(o.s();!(i=o.n()).done;){var a=i.value,c=a.indexOf(t),s=a.indexOf(n);if(-1!==c&&c<s)return!0}}catch(u){o.e(u)}finally{o.f()}return!1}(t,o,n):function(t,n,e){var i,o=r(e);try{for(o.s();!(i=o.n()).done;){var a=i.value,c=a.indexOf(t),s=a.indexOf(n);if(-1!==s&&s<c)return!0}}catch(u){o.e(u)}finally{o.f()}return!1}(t,o,n))?1:-1))}),{})}));t("e",function(){function t(n){var e=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=function(t){return 0},this.rightWideFactor=function(t){return 0},this.pathTurnParams=function(t){var n=35-17.5*Math.sqrt(3),e=t-2*n;return{tr:35,dx_a:17.5,dy_a:n,dx_l:e*Math.sqrt(3),dy_l:e}},this.pathTurnSE=function(t){var n=e.pathTurnParams(t),r=n.tr,i=n.dx_a,o=n.dy_a,a=n.dx_l,c=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(o," l ").concat(a,",").concat(c," a ").concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(o)},this.pathTurnNE=function(t){var n=e.pathTurnParams(t),r=n.tr,i=n.dx_a,o=n.dy_a,a=n.dx_l,c=n.dy_l;return"a ".concat(r,",").concat(r," 0 0,0 ").concat(i,",").concat(-o," l ").concat(a,",").concat(-c," a ").concat(r,",").concat(r," 0 0,1 ").concat(i,",").concat(-o)},this.stnList=n.stnList,this.criticalPath=n.criticalPath}var e,r,i;return e=t,i=[{key:"getYShares",value:function(t,n){console.log("computing y shares");var e=new this({stnList:t});return Object.keys(t).forEach((function(t){["linestart","lineend"].includes(t)||t in e.yShares||e.getYShare(t,n)})),e.yShares}}],(r=[{key:"getYShare",value:function(t,n){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;var e=this.stnList[t].parents[0];if(e){if(1===this.stnList[e].children.length){var r=this.getYShare(e);return this.yShares[t]=r,r}var i=0===this.stnList[e].children.indexOf(t)?1:-1;return this.yShares[t]=i,i}return this.yShares[t]=0,0}},{key:"_linePath",value:function(t,n,e,r,i,o,a,c){var s=this,u=[],l=u[0],f=u[1],h=u[2],d=[],y=this.pathTurnParams(o),p=y.dx_a+y.dx_l/2,v=(n[1]-n[0])/a.len*2,g=((n[1]-n[0])/a.len-2*p)/2;return g+v<0&&console.warn("SVG width too small! ".concat(g+v)),t.forEach((function(n){var a=r[n],u=i[n];if(!f&&0!==f)return l=n,h=a,f=u,void(1===t.length?d.push("M ".concat(a,",").concat(u)):e[0].includes(n)?e[0].includes(t[1])?d.push("M ".concat(a,",").concat(u)):(r[t[1]]>0&&d.push("M ".concat(a,",").concat(u+c)),i[t[1]]<0&&d.push("M ".concat(a,",").concat(u-c))):d.push("M ".concat(a,",").concat(u)));u>f?(d.push("h ".concat(0===u?a-h-v*s.leftWideFactor(n)-g-2*p:v*s.rightWideFactor(l)+g)),d.push(s.pathTurnSE(o))):u<f&&(d.push("h ".concat(0===u?a-h-v*s.leftWideFactor(n)-g-2*p:v*s.rightWideFactor(l)+g)),d.push(s.pathTurnNE(o))),d.push("H ".concat(a)),l=n,h=a,f=u})),d.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}])&&n(e.prototype,r),i&&n(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}());t("d",(function(t,n){var e=(t=t.filter((function(t){return!["linestart","lineend"].includes(t)}))).filter((function(t){return n[t]>=0})),r=t.filter((function(t){return n[t]<=0}));return 1===e.length&&(r=t),0===e.filter((function(t){return-1!==r.indexOf(t)})).length&&e.length&&(r[0]===t[0]?r.push(e[0]):e[0]===t[0]&&e[e.length-1]===t[t.length-1]&&r.length?(r=t,e=[]):r.unshift(e[e.length-1])),{main:e,pass:r}}))}}}))}();
