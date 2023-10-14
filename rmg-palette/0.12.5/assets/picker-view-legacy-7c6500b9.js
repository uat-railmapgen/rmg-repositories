!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=t){var r,o,a,i,l=[],u=!0,c=!1;try{if(a=(t=t.call(n)).next,0===e){if(Object(t)!==t)return;u=!1}else for(;!(u=(r=a.call(t)).done)&&(l.push(r.value),l.length!==e);u=!0);}catch(n){c=!0,o=n}finally{try{if(!u&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(c)throw o}}return l}}(n,e)||t(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n){return function(n){if(Array.isArray(n))return r(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||t(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,e){if(n){if("string"==typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(n,e):void 0}}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./chakra-legacy-5f34c862.js","./index-legacy-5af855de.js","./react-legacy-a512c684.js","./use-palette-legacy-a8b8db11.js","./index.esm-legacy-f20675c7.js"],(function(t,r){"use strict";var o,a,i,l,u,c,s,f,d,m,p,v,h,g,y,j,x,C,b,S,A,E,I,w,L,P,O,V;return{setters:[function(n){o=n.j,a=n.F,i=n.$,l=n.f,u=n.a8,c=n.a9,s=n.H,f=n.a2,d=n.a0},function(n){m=n.a,p=n.Z,v=n.M,h=n.b,g=n.X,y=n.n,j=n.c,x=n.r,C=n.E,b=n.h,S=n.i,A=n._,E=n.$},function(n){I=n.u,w=n.r,L=n.o},function(n){P=n.u},function(n){O=n.R,V=n.i}],execute:function(){t("default",(function(){var e=n(L(),1)[0],t=e.get("parentId"),r=e.get("parentComponent"),a=j(),i=m((function(n){return n.app})).isDataLoading,l=n(w.useState(),2),u=l[0],c=l[1],s=n(w.useState(),2),f=s[0],d=s[1],p=w.useRef();w.useEffect((function(){var n=new BroadcastChannel(z+t);return p.current=n,x.event(C.APP_CLIP_VIEW_OPENED,{parentComponent:r}),n.onmessage=function(e){var t=e.data,r=t.event,o=t.data;console.log("[".concat(n.name,"] Received event from parent component:"),r),"OPEN"===r&&(c(crypto.randomUUID()),d(o))},console.log("[".concat(n.name,"] App clip connection established, parentComponent=").concat(r)),n.postMessage({event:"LOADED"}),function(){n.close()}}),[]);return o.jsxs(b,{children:[i&&o.jsx(S,{isIndeterminate:!0}),o.jsx(T,{defaultTheme:f,sessionId:u,onSubmit:function(n,e){var t,o;console.log("[".concat(null===(t=p.current)||void 0===t?void 0:t.name,"] Emitting SELECT event, theme:"),n),null===(o=p.current)||void 0===o||o.postMessage({event:"SELECT",data:n}),a(A({theme:n,displayName:e})),x.event(C.APP_CLIP_VIEW_SELECT,{parentComponent:r,theme:n})},onClose:function(){var n,e;console.log("[".concat(null===(n=p.current)||void 0===n?void 0:n.name,"] Emitting CLOSE event")),null===(e=p.current)||void 0===e||e.postMessage({event:"CLOSE"}),x.event(C.APP_CLIP_VIEW_CLOSED,{parentComponent:r})},onClearHistory:function(){a(E()),x.event(C.CLEAR_HISTORY,{})}})]})}));var r=function(n){var t=function(n){var t=n.toUpperCase().split("");return 2===t.length?t.map((function(n){return((n.codePointAt(0)||0)+127397).toString(16).toUpperCase()})):5===t.length?["1F3F4"].concat(e(t.map((function(n){return((n.codePointAt(0)||0)+917536).toString(16).toUpperCase()}))),["E007F"]):[]}(n);return String.fromCodePoint.apply(String,e(t.map((function(n){return parseInt(n,16)}))))};function _(n){var e=n.defaultValueId,t=n.onChange,a=I().i18n,i=m((function(n){return n.app})).cityList,l=e?i.find((function(n){return n.id===e})):void 0,u=function(n){var e,t;return null!==(e=null!==(t=a.languages.map((function(e){return n.name[e]})).find((function(n){return void 0!==n})))&&void 0!==t?t:n.name.en)&&void 0!==e?e:""},c=i.slice().sort((function(n,e){return"other"===n.id?1:"other"===e.id?-1:u(n).localeCompare(u(e),a.languages[0])}));return o.jsx(p,{data:c,displayValue:u,displayHandler:function(n){var e="TW"===n.country&&["zh-Hans","zh-CN"].includes(a.languages[0]),t=a.languages.map((function(e){return n.name[e]})).find((function(n){return void 0!==n}));return o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"flag-emoji",children:e?"🏴":r(n.country)}),o.jsx("span",{children:t})]})},predicate:function(n,e){return Object.values(n.name).some((function(n){return n.toLowerCase().includes(e.toLowerCase())}))},defaultValue:l,onChange:function(n){return null==t?void 0:t(n.id)}})}function k(n){var e=n.city,t=n.defaultValueId,r=n.onChange,a=I().i18n,i=P(e),l=t?i.find((function(n){return n.id===t})):void 0,u=function(n){var e;return null!==(e=a.languages.map((function(e){return n.name[e]})).find((function(n){return void 0!==n})))&&void 0!==e?e:""};return o.jsx(p,{data:i,displayValue:u,displayHandler:function(n){var e=u(n);return o.jsx(h,{name:e,fg:n.fg||v.white,bg:n.colour})},predicate:function(n,e){return Object.values(n.name).some((function(n){return n.includes(e)}))},defaultValue:l,onChange:function(n){return null==r?void 0:r(n.id,n.colour,n.fg||v.white)}})}var D=function(n){return!!n.match(/^#[0-9a-fA-F]{6}$/)},F={flexDirection:"column",flex:1,mx:2,overflowX:"hidden",overflowY:"scroll","& .chakra-badge":{fontSize:"1em",width:"fit-content",alignSelf:"center",m:1},"& > section:first-of-type":{p:1},"& > section:last-of-type":{w:"100%","& > div:last-of-type":{px:2},"& .rmg-section__header button":{ml:"auto"}}};function T(e){var t=e.defaultTheme,r=e.sessionId,p=e.onSubmit,j=e.onClose,x=e.onClearHistory,C=I().t,b=m((function(n){return n.app})).recentlyUsed,S=n(w.useState(null==t?void 0:t[0]),2),A=S[0],E=S[1],L=n(w.useState(null==t?void 0:t[1]),2),P=L[0],T=L[1],z=n(w.useState((null==t?void 0:t[2])||"#AAAAAA"),2),H=z[0],U=z[1],N=n(w.useState((null==t?void 0:t[3])||v.white),2),R=N[0],M=N[1],W=n(w.useState("color"),2),$=W[0],B=W[1];w.useEffect((function(){r&&t&&(E(t[0]),T(t[1]),U(t[2]),M(t[3]))}),[r,null==t?void 0:t.toString()]);var X=[{label:C("Select"),value:"color"},{label:C("Key in"),value:"text"}],Y=[{label:C("Black"),value:v.black},{label:C("White"),value:v.white}],K=[{type:"custom",label:C("City"),component:o.jsx(_,{defaultValueId:A,onChange:function(n){E(n),T(void 0),U("#AAAAAA"),M(v.white)}})},{type:"custom",label:C("Line"),component:o.jsx(k,{city:A,defaultValueId:P,onChange:function(n,e,t){T(n),U(e),M(t)}})}],Z=[{type:"custom",label:C("Input mode"),component:o.jsx(g,{selections:X,defaultValue:$,onChange:function(n){return B(n)}})},{type:"input",label:C("Background colour"),variant:$,value:H,placeholder:"#F3D03E",validator:D,onChange:function(n){E("other"),T("other"),U(n)}},{type:"custom",label:C("Foreground colour"),component:o.jsx(g,{selections:Y,defaultValue:R,onChange:function(n){E("other"),T("other"),M(n)}})}],q=A&&P&&H&&R&&D(H);return o.jsxs(o.Fragment,{children:[o.jsxs(a,{sx:F,children:[o.jsx(h,{name:C("Example"),fg:R,bg:H}),o.jsxs("section",{children:[o.jsx(O,{fields:K}),o.jsx(O,{fields:Z})]}),o.jsxs("section",{children:[o.jsxs(y,{children:[o.jsx(i,{as:"h5",size:"xs",children:C("Recently used")}),o.jsx(l,{variant:"ghost",size:"xs",onClick:x,children:C("Clear")})]}),o.jsx(u,{children:b.map((function(n){var e=n.theme,t=n.displayName;return o.jsx(c,{children:o.jsx(s,{size:"xs","aria-label":C("Apply"),title:t,mt:"0.45px",color:e[3],bg:e[2],icon:o.jsx(V,{}),onClick:function(){return function(n){E(n[0]),T(n[1]),U(n[2]),M(n[3])}(e)}})},e.join("-"))}))})]})]}),o.jsx(f,{}),o.jsxs(d,{p:2,justifyContent:"flex-end",children:[o.jsx(l,{size:"sm",onClick:j,children:C("Cancel")}),o.jsx(l,{size:"sm",colorScheme:"primary",onClick:function(){if(q){var n="".concat(A," - ").concat(P);null==p||p([A,P,H,R],n)}},isDisabled:!q,children:C("Confirm")})]})]})}var z="rmg-palette-bridge--"}}}))}();
