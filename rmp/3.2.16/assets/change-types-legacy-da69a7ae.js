!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function r(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,r,n){return(r=function(e){var r=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,r||"default");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===t(r)?r:String(r)}(r))in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy-00094708.js","./stations-legacy-7ce6da45.js"],(function(t,e){"use strict";var o,i,u,c,s;return{setters:[function(t){o=t.S,i=t.c,u=t.l,c=t.ab},function(t){s=t.s}],execute:function(){var e=[o.ShmetroBasic2020],f=t("a",(function(t,o,i){var u=t.getNodeAttribute(o,"type"),c=t.getNodeAttribute(o,u).names,f=r(r({},s[i].defaultAttrs),{},{names:c});Object.values(e).includes(u)&&Object.values(e).includes(i)||(f.nameOffsetX=t.getNodeAttribute(o,u).nameOffsetX,f.nameOffsetY=t.getNodeAttribute(o,u).nameOffsetY),t.removeNodeAttribute(o,u),t.mergeNodeAttributes(o,n({type:i},i,f))})),l=(t("c",(function(t,e,r){return t.filterNodes((function(t,r){return t.startsWith("stn")&&r.type===e})).forEach((function(e){f(t,e,r)}))})),t("b",(function(t,e,r){var o=t.getEdgeAttribute(e,"type");t.removeEdgeAttribute(e,o);var i=structuredClone(u[r].defaultAttrs);t.mergeEdgeAttributes(e,n({type:r},r,i))})),[i.SingleColor,i.BjsubwaySingleColor,i.BjsubwayTram,i.MTRRaceDays,i.MTRLightRail]);t("d",(function(t,e,r,o){var u=t.getEdgeAttribute(e,"style"),s=t.getEdgeAttribute(e,u);t.removeEdgeAttribute(e,u);var f=structuredClone(c[r].defaultAttrs);l.includes(u)&&l.includes(r)?f.color=s.color:r===i.SingleColor&&o&&(f.color=o),t.mergeEdgeAttributes(e,n({style:r},r,f)),r===i.River?t.setEdgeAttribute(e,"zIndex",-5):t.setEdgeAttribute(e,"zIndex",0)}))}}}))}();
