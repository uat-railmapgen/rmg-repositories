!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,u,o=[],l=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);l=!0);}catch(c){s=!0,i=c}finally{try{if(!l&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw i}}return o}}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./chakra-legacy-633a115b.js","./react-legacy-57266490.js","./index-legacy-00094708.js","./stations-legacy-7ce6da45.js","./misc-nodes-legacy-6f4fa5ff.js","./change-types-legacy-da69a7ae.js","./useEvent-legacy-81ca6d24.js"],(function(e,n){"use strict";var u,o,l,s,c,d,f,p,h,b,g,m,y,v,j,x,O,S,A,E,N,C,w,k,W,P,z,T,I,R,D,L,_,M,F,V,U,$,q;return{setters:[function(e){u=e.j,o=e.A,l=e.M,s=e.m,c=e.n,d=e.p,f=e.r,p=e.s,h=e.a9,b=e.aa,g=e.a7},function(e){m=e.b},function(e){y=e.d,v=e.e,j=e.s,x=e.h,O=e.z,S=e.ae,A=e.af,E=e.f,N=e.l,C=e.ab,w=e.L,k=e.c,W=e.j,P=e.ad,z=e.t,T=e.ag,I=e.ah,R=e.ai,D=e.aj,L=e.n},function(e){_=e.s,M=e.R},function(e){F=e.m},function(e){V=e.a,U=e.b,$=e.d},function(e){q=e.u}],execute:function(){function n(){var e=y().t,t=v(),n=m.useCallback((function(){t(j()),t(x(i.current.export()))}),[t,j,x]),r=O((function(e){return e.runtime})).selected.at(0),i=m.useRef(window.graph),h=a(m.useState(!1),2),b=h[0],g=h[1],E=m.useRef(null),N=a(m.useState(void 0),2),C=N[0],w=N[1],k=i.current.getNodeAttribute(r,"type"),W=Object.fromEntries(Object.entries(_).map((function(t){var n=a(t,2),r=n[0],i=n[1];return[r,e(i.metadata.displayName).toString()]}))),P=function(e){e&&C&&(V(i.current,r,C),n()),w(void 0),g(!1)};return u.jsxs(u.Fragment,{children:[u.jsx(S,{label:e("panel.details.info.stationType"),minW:"276",children:u.jsx(A,{options:W,disabledOptions:[k],value:k,onChange:function(e){var t=e.target.value;w(t),g(!0)}})}),u.jsx(o,{isOpen:b,leastDestructiveRef:E,onClose:function(){return P(!1)},children:u.jsx(l,{children:u.jsxs(s,{children:[u.jsx(c,{children:e("warning")}),u.jsx(d,{children:e("panel.details.changeStationTypeContent")}),u.jsxs(f,{children:[u.jsx(p,{ref:E,onClick:function(){return P(!1)},children:e("cancel")}),u.jsx(p,{ml:"2",colorScheme:"red",onClick:function(){return P(!0)},children:e("panel.details.changeType")})]})]})})})]})}function B(){var e=y().t,t=v(),n=m.useCallback((function(){t(E()),t(x(g.current.export()))}),[t,E,x]),r=O((function(e){return e.runtime})),i=r.selected,h=r.theme,b=i.at(0),g=m.useRef(window.graph),j=a(m.useState(!1),2),W=j[0],P=j[1],z=m.useRef(null),T=Object.fromEntries(Object.entries(N).map((function(t){var n=a(t,2),r=n[0],i=n[1];return[r,e(i.metadata.displayName).toString()]}))),I=a(m.useState(g.current.getEdgeAttribute(b,"type")),2),R=I[0],D=I[1],L=a(m.useState(void 0),2),_=L[0],M=L[1],F=Object.fromEntries(Object.entries(C).map((function(t){var n=a(t,2),r=n[0],i=n[1];return[r,e(i.metadata.displayName).toString()]}))),V=a(m.useState(g.current.getEdgeAttribute(b,"style")),2),q=V[0],B=V[1],G=a(m.useState(void 0),2),H=G[0],J=G[1],K=Object.values(w).filter((function(e){return!C[q].metadata.supportLinePathType.includes(e)})),Q=Object.values(k).filter((function(e){return!C[e].metadata.supportLinePathType.includes(R)})),X=function(e){e&&(_?(_&&(U(g.current,b,_),D(g.current.getEdgeAttribute(b,"type")),n()),M(void 0)):H&&(H&&($(g.current,b,H,h),B(g.current.getEdgeAttribute(b,"style")),n()),J(void 0))),P(!1)};return u.jsxs(u.Fragment,{children:[u.jsx(S,{label:e("panel.details.info.linePathType"),minW:"276",children:u.jsx(A,{options:T,disabledOptions:K,defaultValue:R,value:R,onChange:function(e){var t=e.target.value;M(t),P(!0)}})}),u.jsx(S,{label:e("panel.details.info.lineStyleType"),minW:"276",children:u.jsx(A,{options:F,disabledOptions:Q,defaultValue:q,value:q,onChange:function(e){var t=e.target.value;J(t),P(!0)}})}),u.jsx(o,{isOpen:W,leastDestructiveRef:z,onClose:function(){return X(!1)},children:u.jsx(l,{children:u.jsxs(s,{children:[u.jsx(c,{children:e("warning")}),u.jsx(d,{children:e("panel.details.changeLineTypeContent")}),u.jsxs(f,{children:[u.jsx(p,{ref:z,onClick:function(){return X(!1)},children:e("cancel")}),u.jsx(p,{ml:"2",colorScheme:"red",onClick:function(){return X(!0)},children:e("panel.details.changeType")})]})]})})})]})}function G(){var e=y().t,t=v(),r=m.useCallback((function(){t(j()),t(E()),t(x(o.current.export()))}),[t,E,x]),i=O((function(e){return e.runtime})).selected,a=i.at(0),o=m.useRef(window.graph),l=[{type:"input",label:e("panel.details.info.id"),value:i.length>0?i.join(", "):"undefined",minW:276},{type:"select",label:e("panel.details.info.zIndex"),value:a?o.current.hasNode(a)?o.current.getNodeAttribute(a,"zIndex"):o.current.hasEdge(a)?o.current.getEdgeAttribute(a,"zIndex"):0:0,options:Object.fromEntries(Array.from({length:11},(function(e,t){return[t-5,(t-5).toString()]}))),onChange:function(e){return function(e){var t=Math.min(Math.max(e,-5),5);o.current.hasNode(a)&&o.current.setNodeAttribute(a,"zIndex",t),o.current.hasEdge(a)&&o.current.setEdgeAttribute(a,"zIndex",t),r()}(Number(e))}}];return 0===i.length||i.length>1&&l.push({type:"input",label:e("panel.details.info.type"),value:"multiple selection",minW:276}),u.jsxs(h,{p:1,children:[u.jsx(b,{as:"h5",size:"sm",children:e("panel.details.info.title")}),u.jsx(M,{fields:l,minW:130}),1===i.length&&a.startsWith("stn")&&o.current.hasNode(a)&&u.jsx(n,{}),1===i.length&&a.startsWith("line")&&o.current.hasEdge(a)&&u.jsx(B,{})]})}function H(){var e=y().t,t=v(),n=m.useCallback((function(){t(j()),t(E()),t(x(s.current.export()))}),[t,j,E,x]),r=O((function(e){return e.runtime})),i=r.selected,o=r.refresh.nodes,l=i.at(0),s=m.useRef(window.graph),c=a(m.useState({x:0,y:0}),2),d=c[0],f=c[1];m.useEffect((function(){if(null!=l&&l.startsWith("stn")||null!=l&&l.startsWith("misc_node_")){var e=s.current.getNodeAttribute(l,"x"),t=s.current.getNodeAttribute(l,"y");f({x:e,y:t})}}),[o,i]);var p=[{type:"input",label:e("panel.details.nodePosition.pos.x"),value:d.x.toString(),validator:function(e){return!Number.isNaN(e)},onChange:function(e){s.current.mergeNodeAttributes(l,{x:Number(e)}),n()}},{type:"input",label:e("panel.details.nodePosition.pos.y"),value:d.y.toString(),validator:function(e){return!Number.isNaN(e)},onChange:function(e){s.current.mergeNodeAttributes(l,{y:Number(e)}),n()}}];return u.jsxs(h,{p:1,children:[u.jsx(b,{as:"h5",size:"sm",children:e("panel.details.nodePosition.title")}),u.jsx(M,{fields:p,minW:130})]})}function J(){var e=y().t,t=v(),n=O((function(e){return e.runtime})).selected,r=n.at(0),i=m.useRef(window.graph),o=a(m.useState("undefined"),2),l=o[0],s=o[1],c=a(m.useState("undefined"),2),d=c[0],f=c[1],g=a(m.useState("undefined"),2),j=g[0],x=g[1],S=a(m.useState("undefined"),2),A=S[0],E=S[1];m.useEffect((function(){if(null!=r&&r.startsWith("line")){var e=a(i.current.extremities(r),2),t=e[0],n=e[1];if(s(t),f(n),t.startsWith("stn")){var u,o,l=i.current.getNodeAttribute(t,"type");x(null!==(u=null===(o=i.current.getNodeAttribute(t,l))||void 0===o?void 0:o.names.at(0))&&void 0!==u?u:"undefined")}if(n.startsWith("stn")){var c,d,p=i.current.getNodeAttribute(n,"type");E(null!==(c=null===(d=i.current.getNodeAttribute(n,p))||void 0===d?void 0:d.names.at(0))&&void 0!==c?c:"undefined")}}}),[n]);var N=q((function(){t(W()),t(P(l))})),C=q((function(){t(W()),t(P(d))})),w=[{type:"custom",label:e("panel.details.lineExtremities.source"),component:u.jsx(p,{flex:1,size:"sm",variant:"link",onClick:N,children:l})},{type:"custom",label:e("panel.details.lineExtremities.target"),component:u.jsx(p,{flex:1,size:"sm",variant:"link",onClick:C,children:d})},{type:"input",label:e("panel.details.lineExtremities.sourceName"),value:j},{type:"input",label:e("panel.details.lineExtremities.targetName"),value:A}];return u.jsxs(h,{p:1,children:[u.jsx(b,{as:"h5",size:"sm",children:e("panel.details.lineExtremities.title")}),u.jsx(M,{fields:w,minW:130})]})}var K=r(r({},_),F);e("default",(function(){var e=y().t,n=v(),r=m.useRef(window.graph),o=m.useCallback((function(){n(j()),n(E()),n(x(r.current.export()))}),[n,j,E,x]),l=O((function(e){return e.runtime})),s=l.selected,c=l.mode,d=a(m.useState(""),2),f=(d[0],d[1]);m.useEffect((function(){var e,t=s.at(0);r.current.hasEdge(t)&&f(null!==(e=r.current.getEdgeAttribute(t,"reconcileId"))&&void 0!==e?e:"undefined")}),[s]);var S=[],A=s.at(0);if(1===s.length&&r.current.hasNode(A)){var w=r.current.getNodeAttribute(A,"type"),k=r.current.getNodeAttribute(A,w);S.push.apply(S,t(K[w].fields.filter((function(e){return"custom"!==e.type})).map((function(t){var a,u,o;return{type:t.type,label:e(t.label),value:null===(a=t.value)||void 0===a?void 0:a.call(t,k),isChecked:null===(u=t.isChecked)||void 0===u?void 0:u.call(t,k),hidden:null===(o=t.hidden)||void 0===o?void 0:o.call(t,k),options:t.options,disabledOptions:t.disabledOptions&&t.disabledOptions(k),validator:t.validator,oneLine:t.oneLine,onChange:function(a){var u;try{u=t.onChange(a,k)}catch(o){return void n(z({status:"error",message:e("err-code.".concat(o))}))}r.current.mergeNodeAttributes(A,i({},w,u)),n(j()),n(x(r.current.export()))}}}))).concat(t(K[w].fields.filter((function(e){return"custom"===e.type})))))}if(1===s.length&&r.current.hasEdge(A)){var P=r.current.getEdgeAttribute(A,"type"),_=r.current.getEdgeAttribute(A,P);S.push.apply(S,t(N[P].fields.map((function(t){return{type:t.type,label:e(t.label),value:t.value(_),options:t.options,disabledOptions:t.disabledOptions&&t.disabledOptions(_),validator:t.validator,onChange:function(e){r.current.mergeEdgeAttributes(A,i({},P,t.onChange(e,_))),n(E()),n(x(r.current.export()))}}}))));var F=r.current.getEdgeAttribute(A,"style"),V=r.current.getEdgeAttribute(A,F);S.push.apply(S,t(C[F].fields.filter((function(e){return"custom"!==e.type})).map((function(t){return{type:t.type,label:e(t.label),value:t.value(V),options:t.options,disabledOptions:t.disabledOptions&&t.disabledOptions(V),validator:t.validator,onChange:function(e){r.current.mergeEdgeAttributes(A,i({},F,t.onChange(e,V))),n(E()),n(x(r.current.export()))}}})))),S.push.apply(S,t(C[F].fields.filter((function(e){return"custom"===e.type}))))}return u.jsxs(T,{isOpen:s.length>0&&!c.startsWith("line"),width:300,header:"Dummy header",alwaysOverlay:!0,children:[u.jsx(I,{onClose:function(){return n(W())},children:e("panel.details.header")}),u.jsxs(R,{children:[u.jsx(G,{}),1===s.length&&r.current.hasNode(A)&&u.jsx(H,{}),1===s.length&&r.current.hasEdge(A)&&u.jsx(J,{}),1===s.length&&u.jsxs(h,{p:1,children:[u.jsx(b,{as:"h5",size:"sm",children:e("panel.details.specificAttrsTitle")}),u.jsx(M,{fields:S,minW:276})]})]}),u.jsx(D,{children:u.jsxs(g,{children:[1===s.length&&r.current.hasNode(s.at(0))&&u.jsx(p,{size:"sm",variant:"outline",onClick:function(){return function(e){var t=structuredClone(r.current.getNodeAttributes(e));t.x+=50,t.y+=50;var i=e.startsWith("stn")?"stn_".concat(L(10)):"misc_node_".concat(L(10));r.current.addNode(i,t),n(j()),n(x(r.current.export()))}(s.at(0))},children:e("panel.details.footer.duplicate")}),u.jsx(p,{size:"sm",variant:"outline",onClick:function(){return e=s,n(W()),void e.forEach((function(e){r.current.hasNode(e)?(r.current.dropNode(e),o()):r.current.hasEdge(e)&&(r.current.dropEdge(e),n(E()),n(x(r.current.export())))}));var e},children:e("panel.details.footer.remove")})]})})]})}))}}}))}();
