import{r as v}from"./index-61bf1805.js";function h(e,r){return typeof e=="function"?e(r):e&&(e.current=r),e}function d(e,r){var t=v.useState(function(){return{value:e,callback:r,facade:{get current(){return t.value},set current(n){var u=t.value;u!==n&&(t.value=n,t.callback(n,u))}}}})[0];return t.callback=r,t.facade}function m(e,r){return d(r||null,function(t){return e.forEach(function(n){return h(n,t)})})}var f=function(){return f=Object.assign||function(r){for(var t,n=1,u=arguments.length;n<u;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},f.apply(this,arguments)};function _(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,n=Object.getOwnPropertySymbols(e);u<n.length;u++)r.indexOf(n[u])<0&&Object.prototype.propertyIsEnumerable.call(e,n[u])&&(t[n[u]]=e[n[u]]);return t}function b(e,r,t){if(t||arguments.length===2)for(var n=0,u=r.length,o;n<u;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}function p(e){return e}function y(e,r){r===void 0&&(r=p);var t=[],n=!1,u={read:function(){if(n)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return t.length?t[t.length-1]:e},useMedium:function(o){var c=r(o,n);return t.push(c),function(){t=t.filter(function(a){return a!==c})}},assignSyncMedium:function(o){for(n=!0;t.length;){var c=t;t=[],c.forEach(o)}t={push:function(a){return o(a)},filter:function(){return t}}},assignMedium:function(o){n=!0;var c=[];if(t.length){var a=t;t=[],a.forEach(o),c=t}var g=function(){var i=c;c=[],i.forEach(o)},l=function(){return Promise.resolve().then(g)};l(),t={push:function(i){c.push(i),l()},filter:function(i){return c=c.filter(i),t}}}};return u}function j(e,r){return r===void 0&&(r=p),y(e,r)}function P(e){e===void 0&&(e={});var r=y(null);return r.options=f({async:!0,ssr:!1},e),r}function s(e,r){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,u){return n.__proto__=u,n},s(e,r)}function M(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,s(e,r)}export{_,f as a,b,P as c,j as d,M as e,s as f,m as u};
//# sourceMappingURL=inheritsLoose-7d8f126b.js.map
