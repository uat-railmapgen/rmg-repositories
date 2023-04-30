import{j as d}from"./jsx-runtime-94f6e698.js";import{g as _,C as R}from"./rmg-theme-provider-780d3984.js";import"./rmg-ag-grid-44b88ea3.js";import"./rmg-auto-complete-c8225022.js";import"./rmg-button-group-6cb1d8cc.js";import"./rmg-card-59f1c1c7.js";import"./rmg-data-table-9ea92d57.js";import"./rmg-debounced-input-c3a7719e.js";import"./index-b08b8ff7.js";import"./rmg-enriched-button-0d96a4f9.js";import"./rmg-env-badge-f90a3ce0.js";import"./rmg-error-boundary-492662ce.js";import"./rmg-fields-673c0460.js";import"./rmg-label-13554095.js";import"./rmg-layout-bf111973.js";import"./rmg-line-badge-e2676f67.js";import"./rmg-loader-9f33f04d.js";import"./rmg-multi-select-6826cabf.js";import"./rmg-select-78fb5b85.js";import"./rmg-side-panel-487defb8.js";import"./rmg-throttled-slider-a012ae3a.js";import"./index-f87d6104.js";import"./index-8db94870.js";import"./emotion-react.browser.esm-92f45e4a.js";import"./chunk-QEVFQ4EU-a3a83747.js";import"./_commonjsHelpers-042e6b4d.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-8498a53a.js";import"./chunk-FRKYNQ2N-89e1d262.js";import"./index-f800231c.js";import"./index-a91c9d3c.js";import"./index-8ce4a492.js";import"./motion-03f83e4d.js";import"./chunk-RWQIUCJP-ee763db7.js";import"./chunk-DKFDJSXF-50906ab2.js";import"./chunk-NAA7TEES-feaaf6f8.js";import"./index-bf97d06a.js";import"./index-b1d0288f.js";import"./chunk-DUEJD2BE-40e6879b.js";import"./chunk-6CSUKJP7-aa140969.js";import"./chunk-7NBWC5PS-b5941467.js";import"./index-537d2dd9.js";import"./chunk-KVBLLJMP-317bfedd.js";import"./index-eaa72e81.js";import"./chunk-MPFPK3CX-57a2fde7.js";import"./chunk-QJA5SDDN-a1422c7f.js";import"./chunk-IJBC3YLI-975cc9bc.js";import"./rmg-multi-line-string-4f638461.js";import"./chunk-FQXH56BT-8ffb01c6.js";import"./inheritsLoose-9b928aa8.js";import"./getPrototypeOf-624f05c9.js";import"./chunk-P74GIWPW-1683f8b1.js";import"./chunk-HPA3SDH4-ec723f7a.js";import"./chunk-3HSDMH4Y-b00c7912.js";var y=function(){if(typeof Map<"u")return Map;function t(e,r){var n=-1;return e.some(function(i,o){return i[0]===r?(n=o,!0):!1}),n}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(r){var n=t(this.__entries__,r),i=this.__entries__[n];return i&&i[1]},e.prototype.set=function(r,n){var i=t(this.__entries__,r);~i?this.__entries__[i][1]=n:this.__entries__.push([r,n])},e.prototype.delete=function(r){var n=this.__entries__,i=t(n,r);~i&&n.splice(i,1)},e.prototype.has=function(r){return!!~t(this.__entries__,r)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(r,n){n===void 0&&(n=null);for(var i=0,o=this.__entries__;i<o.length;i++){var s=o[i];r.call(n,s[1],s[0])}},e}()}(),v=typeof window<"u"&&typeof document<"u"&&window.document===document,f=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),x=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(f):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),M=2;function A(t,e){var r=!1,n=!1,i=0;function o(){r&&(r=!1,t()),n&&a()}function s(){x(o)}function a(){var c=Date.now();if(r){if(c-i<M)return;n=!0}else r=!0,n=!1,setTimeout(s,e);i=c}return a}var z=20,T=["top","right","bottom","left","width","height","size","weight"],C=typeof MutationObserver<"u",S=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=A(this.refresh.bind(this),z)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var r=this.observers_,n=r.indexOf(e);~n&&r.splice(n,1),!r.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(r){return r.gatherActive(),r.hasActive()});return e.forEach(function(r){return r.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!v||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),C?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!v||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var r=e.propertyName,n=r===void 0?"":r,i=T.some(function(o){return!!~n.indexOf(o)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),g=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},u=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||f},w=p(0,0,0,0);function h(t){return parseFloat(t)||0}function b(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce(function(n,i){var o=t["border-"+i+"-width"];return n+h(o)},0)}function D(t){for(var e=["top","right","bottom","left"],r={},n=0,i=e;n<i.length;n++){var o=i[n],s=t["padding-"+o];r[o]=h(s)}return r}function j(t){var e=t.getBBox();return p(0,0,e.width,e.height)}function k(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return w;var n=u(t).getComputedStyle(t),i=D(n),o=i.left+i.right,s=i.top+i.bottom,a=h(n.width),c=h(n.height);if(n.boxSizing==="border-box"&&(Math.round(a+o)!==e&&(a-=b(n,"left","right")+o),Math.round(c+s)!==r&&(c-=b(n,"top","bottom")+s)),!G(t)){var l=Math.round(a+o)-e,m=Math.round(c+s)-r;Math.abs(l)!==1&&(a-=l),Math.abs(m)!==1&&(c-=m)}return p(i.left,i.top,a,c)}var P=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof u(t).SVGGraphicsElement}:function(t){return t instanceof u(t).SVGElement&&typeof t.getBBox=="function"}}();function G(t){return t===u(t).document.documentElement}function L(t){return v?P(t)?j(t):k(t):w}function W(t){var e=t.x,r=t.y,n=t.width,i=t.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return g(s,{x:e,y:r,width:n,height:i,top:r,right:e+n,bottom:i+r,left:e}),s}function p(t,e,r,n){return{x:t,y:e,width:r,height:n}}var F=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=p(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=L(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),H=function(){function t(e,r){var n=W(r);g(this,{target:e,contentRect:n})}return t}(),q=function(){function t(e,r,n){if(this.activeObservations_=[],this.observations_=new y,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=r,this.callbackCtx_=n}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)||(r.set(e,new F(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof u(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var r=this.observations_;r.has(e)&&(r.delete(e),r.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(r){r.isActive()&&e.activeObservations_.push(r)})},t.prototype.broadcastActive=function(){if(this.hasActive()){var e=this.callbackCtx_,r=this.activeObservations_.map(function(n){return new H(n.target,n.broadcastRect())});this.callback_.call(e,r,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),O=typeof WeakMap<"u"?new WeakMap:new y,E=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=S.getInstance(),n=new q(e,r,this);O.set(this,n)}return t}();["observe","unobserve","disconnect"].forEach(function(t){E.prototype[t]=function(){var e;return(e=O.get(this))[t].apply(e,arguments)}});var B=function(){return typeof f.ResizeObserver<"u"?f.ResizeObserver:E}();window.ResizeObserver||(window.ResizeObserver=B);const I=t=>d.jsx(R,{theme:_(),children:d.jsx("div",{id:"story-wrapper",children:d.jsx(t,{})})}),It={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},chakra:{theme:_()}},decorators:[I]};export{It as default};
//# sourceMappingURL=preview-1e0acd9a.js.map
