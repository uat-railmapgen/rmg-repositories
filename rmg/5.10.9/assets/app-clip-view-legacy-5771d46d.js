!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],u=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(s){c=!0,a=s}finally{try{if(!u&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(c)throw a}}return l}}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./vendor-legacy-8bb5c49d.js","./param-updater-utils-legacy-d605a318.js","./index-legacy-dac50d51.js"],(function(t,n){"use strict";var r,a,o,i,l,u,c,s,d,f,p,m,v,y,h,g,j,C,x;return{setters:[function(e){r=e.u,a=e.aG,o=e.m,i=e.r,l=e.j,u=e.aO,c=e.at,s=e.au,d=e.af,f=e.o,p=e.s,m=e.aW,v=e.aX,y=e.B},function(e){h=e.P,g=e.u},function(e){j=e.E,C=e.an,x=e.aj}],execute:function(){t("default",(function(){var t=r().t,P=e(a(),1)[0],S=P.get("parentId"),b=P.get("parentComponent"),_=e(o.useState([]),2),A=_[0],O=_[1],w=e(o.useState(),2),E=w[0],M=w[1],R=e(o.useState(!1),2),D=R[0],L=R[1],k=o.useRef();o.useEffect((function(){k.current=new BroadcastChannel(n+S),i.event(j.APP_CLIP_VIEW_OPENED,{parentComponent:b});var e=document.createElement("style");return e.textContent=".rmg-window__header{display: none;}",document.head.appendChild(e),O(C()),function(){var t;null===(t=k.current)||void 0===t||t.close(),document.head.removeChild(e)}}),[]);return l.jsxs(u,{children:[D&&l.jsxs(c,{status:"error",variant:"solid",size:"xs",pl:3,pr:1,py:1,children:[l.jsx(s,{}),t("Project selected is invalid or corrupted.")]}),l.jsxs(d,{sx:I,children:[l.jsx(h,{paramRegistry:A,selectedParam:E,onParamSelect:M}),l.jsxs(f,{children:[l.jsx(p,{variant:"ghost","aria-label":t("Manage"),title:t("Manage"),icon:l.jsx(m,{}),onClick:function(){i.openApp("rmg")}}),l.jsx(p,{variant:"ghost","aria-label":t("Reload"),title:t("Reload"),icon:l.jsx(v,{}),onClick:function(){return O(C())}}),l.jsx(y,{onClick:function(){var e;null===(e=k.current)||void 0===e||e.postMessage({event:"CLOSE"}),i.event(j.APP_CLIP_VIEW_CLOSED,{parentComponent:b}),M(void 0),L(!1)},children:t("Close")}),l.jsx(y,{colorScheme:"primary",isDisabled:!E,onClick:function(){var e=window.localStorage.getItem(x.PARAM_CONFIG_BY_ID+E),t=window.localStorage.getItem(x.PARAM_BY_ID+E);try{var n,r=t?g(JSON.parse(t)):null;null===(n=k.current)||void 0===n||n.postMessage({event:"IMPORT",meta:e?JSON.parse(e):null,data:r}),i.event(j.APP_CLIP_VIEW_IMPORT,{parentComponent:b}),M(void 0),L(!1)}catch(a){L(!0)}},children:t("Import")})]})]})]})}));var n="rmg-bridge--",I={flexDirection:"column",h:"100%",p:2,"& > div:first-of-type":{m:0,"& > div":{h:"100%"}},"& > div:last-of-type":{mt:2,"& button:nth-of-type(2)":{mr:"auto"}}}}}}))}();
