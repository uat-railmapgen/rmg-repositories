import{r as h}from"./index-8db94870.js";import{u as ze,a as bt}from"./index-b1d0288f.js";import{g as $t,a as Lt,i as Mt,b as Ft}from"./index-eaa72e81.js";import{u as Wt}from"./index-a91c9d3c.js";import{m as ie}from"./index-bf97d06a.js";import{e as G,b as Ht,o as It,k as zt,r as Vt,f as qe,c as Ue,d as wt,j as Nt}from"./chunk-QEVFQ4EU-a3a83747.js";import{j as ye}from"./jsx-runtime-94f6e698.js";import{c as xt}from"./index-f800231c.js";import{m as qt}from"./motion-03f83e4d.js";function _e(e,t,r,n){const o=ze(r);return h.useEffect(()=>{const a=typeof e=="function"?e():e??document;if(!(!r||!a))return a.addEventListener(t,o,n),()=>{a.removeEventListener(t,o,n)}},[t,e,n,o,r]),()=>{const a=typeof e=="function"?e():e??document;a==null||a.removeEventListener(t,o,n)}}function Ut(e){return"current"in e}var Ot=()=>typeof window<"u";function _t(){var e;const t=navigator.userAgentData;return(e=t==null?void 0:t.platform)!=null?e:navigator.platform}var Xt=e=>Ot()&&e.test(navigator.vendor),Yt=e=>Ot()&&e.test(_t()),Kt=()=>Yt(/mac|iphone|ipad|ipod/i),Gt=()=>Kt()&&Xt(/apple/i);function Jt(e){const{ref:t,elements:r,enabled:n}=e,o=()=>{var a,c;return(c=(a=t.current)==null?void 0:a.ownerDocument)!=null?c:document};_e(o,"pointerdown",a=>{if(!Gt()||!n)return;const c=a.target,s=(r??[t]).some(u=>{const l=Ut(u)?u.current:u;return(l==null?void 0:l.contains(c))||l===c});o().activeElement!==c&&s&&(a.preventDefault(),c.focus())})}function Qt(e){const t=e.current;if(!t)return!1;const r=Lt(t);return!r||t.contains(r)?!1:!!Mt(r)}function Zt(e,t){const{shouldFocus:r,visible:n,focusRef:o}=t,a=r&&!n;bt(()=>{if(!a||Qt(e))return;const c=(o==null?void 0:o.current)||e.current;let i;if(c)return i=requestAnimationFrame(()=>{c.focus({preventScroll:!0})}),()=>{cancelAnimationFrame(i)}},[a,e,o])}var er={preventScroll:!0,shouldFocus:!1};function tr(e,t=er){const{focusRef:r,preventScroll:n,shouldFocus:o,visible:a}=t,c=rr(e)?e.current:e,i=o&&a,s=h.useRef(i),u=h.useRef(a);Wt(()=>{!u.current&&a&&(s.current=i),u.current=a},[a,i]);const l=h.useCallback(()=>{if(!(!a||!c||!s.current)&&(s.current=!1,!c.contains(document.activeElement)))if(r!=null&&r.current)requestAnimationFrame(()=>{var m;(m=r.current)==null||m.focus({preventScroll:n})});else{const m=$t(c);m.length>0&&requestAnimationFrame(()=>{m[0].focus({preventScroll:n})})}},[a,n,c,r]);bt(()=>{l()},[l]),_e(c,"transitionend",l)}function rr(e){return"current"in e}var he=(e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),$={arrowShadowColor:he("--popper-arrow-shadow-color"),arrowSize:he("--popper-arrow-size","8px"),arrowSizeHalf:he("--popper-arrow-size-half"),arrowBg:he("--popper-arrow-bg"),transformOrigin:he("--popper-transform-origin"),arrowOffset:he("--popper-arrow-offset")};function or(e){if(e.includes("top"))return"1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 1px 0 var(--popper-arrow-shadow-color)"}var nr={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},ar=e=>nr[e],it={scroll:!0,resize:!0};function ir(e){let t;return typeof e=="object"?t={enabled:!0,options:{...it,...e}}:t={enabled:e,options:it},t}var sr={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},cr={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{st(e)},effect:({state:e})=>()=>{st(e)}},st=e=>{e.elements.popper.style.setProperty($.transformOrigin.var,ar(e.placement))},lr={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{ur(e)}},ur=e=>{var t;if(!e.placement)return;const r=fr(e.placement);if((t=e.elements)!=null&&t.arrow&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:$.arrowSize.varRef,height:$.arrowSize.varRef,zIndex:-1});const n={[$.arrowSizeHalf.var]:`calc(${$.arrowSize.varRef} / 2)`,[$.arrowOffset.var]:`calc(${$.arrowSizeHalf.varRef} * -1)`};for(const o in n)e.elements.arrow.style.setProperty(o,n[o])}},fr=e=>{if(e.startsWith("top"))return{property:"bottom",value:$.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:$.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:$.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:$.arrowOffset.varRef}},pr={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{ct(e)},effect:({state:e})=>()=>{ct(e)}},ct=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;const r=or(e.placement);r&&t.style.setProperty("--popper-arrow-default-shadow",r),Object.assign(t.style,{transform:"rotate(45deg)",background:$.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},dr={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},vr={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function mr(e,t="ltr"){var r,n;const o=((r=dr[e])==null?void 0:r[t])||e;return t==="ltr"?o:(n=vr[e])!=null?n:o}var F="top",V="bottom",N="right",W="left",Xe="auto",ke=[F,V,N,W],be="start",Ae="end",hr="clippingParents",Pt="viewport",Ce="popper",gr="reference",lt=ke.reduce(function(e,t){return e.concat([t+"-"+be,t+"-"+Ae])},[]),Ct=[].concat(ke,[Xe]).reduce(function(e,t){return e.concat([t,t+"-"+be,t+"-"+Ae])},[]),yr="beforeRead",br="read",wr="afterRead",xr="beforeMain",Or="main",Pr="afterMain",Cr="beforeWrite",Er="write",Rr="afterWrite",Ar=[yr,br,wr,xr,Or,Pr,Cr,Er,Rr];function Q(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function ce(e){var t=H(e).Element;return e instanceof t||e instanceof Element}function z(e){var t=H(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ye(e){if(typeof ShadowRoot>"u")return!1;var t=H(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Sr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},a=t.elements[r];!z(a)||!Q(a)||(Object.assign(a.style,n),Object.keys(o).forEach(function(c){var i=o[c];i===!1?a.removeAttribute(c):a.setAttribute(c,i===!0?"":i)}))})}function kr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],a=t.attributes[n]||{},c=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),i=c.reduce(function(s,u){return s[u]="",s},{});!z(o)||!Q(o)||(Object.assign(o.style,i),Object.keys(a).forEach(function(s){o.removeAttribute(s)}))})}}const Dr={name:"applyStyles",enabled:!0,phase:"write",fn:Sr,effect:kr,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var se=Math.max,$e=Math.min,we=Math.round;function Ve(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function Et(){return!/^((?!chrome|android).)*safari/i.test(Ve())}function xe(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var n=e.getBoundingClientRect(),o=1,a=1;t&&z(e)&&(o=e.offsetWidth>0&&we(n.width)/e.offsetWidth||1,a=e.offsetHeight>0&&we(n.height)/e.offsetHeight||1);var c=ce(e)?H(e):window,i=c.visualViewport,s=!Et()&&r,u=(n.left+(s&&i?i.offsetLeft:0))/o,l=(n.top+(s&&i?i.offsetTop:0))/a,m=n.width/o,w=n.height/a;return{width:m,height:w,top:l,right:u+m,bottom:l+w,left:u,x:u,y:l}}function Ke(e){var t=xe(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function Rt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ye(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function re(e){return H(e).getComputedStyle(e)}function Br(e){return["table","td","th"].indexOf(Q(e))>=0}function oe(e){return((ce(e)?e.ownerDocument:e.document)||window.document).documentElement}function Le(e){return Q(e)==="html"?e:e.assignedSlot||e.parentNode||(Ye(e)?e.host:null)||oe(e)}function ut(e){return!z(e)||re(e).position==="fixed"?null:e.offsetParent}function Tr(e){var t=/firefox/i.test(Ve()),r=/Trident/i.test(Ve());if(r&&z(e)){var n=re(e);if(n.position==="fixed")return null}var o=Le(e);for(Ye(o)&&(o=o.host);z(o)&&["html","body"].indexOf(Q(o))<0;){var a=re(o);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return o;o=o.parentNode}return null}function De(e){for(var t=H(e),r=ut(e);r&&Br(r)&&re(r).position==="static";)r=ut(r);return r&&(Q(r)==="html"||Q(r)==="body"&&re(r).position==="static")?t:r||Tr(e)||t}function Ge(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Ee(e,t,r){return se(e,$e(t,r))}function jr(e,t,r){var n=Ee(e,t,r);return n>r?r:n}function At(){return{top:0,right:0,bottom:0,left:0}}function St(e){return Object.assign({},At(),e)}function kt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var $r=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,St(typeof t!="number"?t:kt(t,ke))};function Lr(e){var t,r=e.state,n=e.name,o=e.options,a=r.elements.arrow,c=r.modifiersData.popperOffsets,i=J(r.placement),s=Ge(i),u=[W,N].indexOf(i)>=0,l=u?"height":"width";if(!(!a||!c)){var m=$r(o.padding,r),w=Ke(a),p=s==="y"?F:W,x=s==="y"?V:N,g=r.rects.reference[l]+r.rects.reference[s]-c[s]-r.rects.popper[l],f=c[s]-r.rects.reference[s],y=De(a),O=y?s==="y"?y.clientHeight||0:y.clientWidth||0:0,C=g/2-f/2,d=m[p],P=O-w[l]-m[x],b=O/2-w[l]/2+C,E=Ee(d,b,P),k=s;r.modifiersData[n]=(t={},t[k]=E,t.centerOffset=E-b,t)}}function Mr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||Rt(t.elements.popper,o)&&(t.elements.arrow=o))}const Fr={name:"arrow",enabled:!0,phase:"main",fn:Lr,effect:Mr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Oe(e){return e.split("-")[1]}var Wr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Hr(e,t){var r=e.x,n=e.y,o=t.devicePixelRatio||1;return{x:we(r*o)/o||0,y:we(n*o)/o||0}}function ft(e){var t,r=e.popper,n=e.popperRect,o=e.placement,a=e.variation,c=e.offsets,i=e.position,s=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,m=e.isFixed,w=c.x,p=w===void 0?0:w,x=c.y,g=x===void 0?0:x,f=typeof l=="function"?l({x:p,y:g}):{x:p,y:g};p=f.x,g=f.y;var y=c.hasOwnProperty("x"),O=c.hasOwnProperty("y"),C=W,d=F,P=window;if(u){var b=De(r),E="clientHeight",k="clientWidth";if(b===H(r)&&(b=oe(r),re(b).position!=="static"&&i==="absolute"&&(E="scrollHeight",k="scrollWidth")),b=b,o===F||(o===W||o===N)&&a===Ae){d=V;var S=m&&b===P&&P.visualViewport?P.visualViewport.height:b[E];g-=S-n.height,g*=s?1:-1}if(o===W||(o===F||o===V)&&a===Ae){C=N;var v=m&&b===P&&P.visualViewport?P.visualViewport.width:b[k];p-=v-n.width,p*=s?1:-1}}var A=Object.assign({position:i},u&&Wr),L=l===!0?Hr({x:p,y:g},H(r)):{x:p,y:g};if(p=L.x,g=L.y,s){var T;return Object.assign({},A,(T={},T[d]=O?"0":"",T[C]=y?"0":"",T.transform=(P.devicePixelRatio||1)<=1?"translate("+p+"px, "+g+"px)":"translate3d("+p+"px, "+g+"px, 0)",T))}return Object.assign({},A,(t={},t[d]=O?g+"px":"",t[C]=y?p+"px":"",t.transform="",t))}function Ir(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,a=r.adaptive,c=a===void 0?!0:a,i=r.roundOffsets,s=i===void 0?!0:i,u={placement:J(t.placement),variation:Oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,ft(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:c,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,ft(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const zr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Ir,data:{}};var Te={passive:!0};function Vr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,a=o===void 0?!0:o,c=n.resize,i=c===void 0?!0:c,s=H(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&u.forEach(function(l){l.addEventListener("scroll",r.update,Te)}),i&&s.addEventListener("resize",r.update,Te),function(){a&&u.forEach(function(l){l.removeEventListener("scroll",r.update,Te)}),i&&s.removeEventListener("resize",r.update,Te)}}const Nr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Vr,data:{}};var qr={left:"right",right:"left",bottom:"top",top:"bottom"};function je(e){return e.replace(/left|right|bottom|top/g,function(t){return qr[t]})}var Ur={start:"end",end:"start"};function pt(e){return e.replace(/start|end/g,function(t){return Ur[t]})}function Je(e){var t=H(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Qe(e){return xe(oe(e)).left+Je(e).scrollLeft}function _r(e,t){var r=H(e),n=oe(e),o=r.visualViewport,a=n.clientWidth,c=n.clientHeight,i=0,s=0;if(o){a=o.width,c=o.height;var u=Et();(u||!u&&t==="fixed")&&(i=o.offsetLeft,s=o.offsetTop)}return{width:a,height:c,x:i+Qe(e),y:s}}function Xr(e){var t,r=oe(e),n=Je(e),o=(t=e.ownerDocument)==null?void 0:t.body,a=se(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),c=se(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),i=-n.scrollLeft+Qe(e),s=-n.scrollTop;return re(o||r).direction==="rtl"&&(i+=se(r.clientWidth,o?o.clientWidth:0)-a),{width:a,height:c,x:i,y:s}}function Ze(e){var t=re(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Dt(e){return["html","body","#document"].indexOf(Q(e))>=0?e.ownerDocument.body:z(e)&&Ze(e)?e:Dt(Le(e))}function Re(e,t){var r;t===void 0&&(t=[]);var n=Dt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),a=H(n),c=o?[a].concat(a.visualViewport||[],Ze(n)?n:[]):n,i=t.concat(c);return o?i:i.concat(Re(Le(c)))}function Ne(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Yr(e,t){var r=xe(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}function dt(e,t,r){return t===Pt?Ne(_r(e,r)):ce(t)?Yr(t,r):Ne(Xr(oe(e)))}function Kr(e){var t=Re(Le(e)),r=["absolute","fixed"].indexOf(re(e).position)>=0,n=r&&z(e)?De(e):e;return ce(n)?t.filter(function(o){return ce(o)&&Rt(o,n)&&Q(o)!=="body"}):[]}function Gr(e,t,r,n){var o=t==="clippingParents"?Kr(e):[].concat(t),a=[].concat(o,[r]),c=a[0],i=a.reduce(function(s,u){var l=dt(e,u,n);return s.top=se(l.top,s.top),s.right=$e(l.right,s.right),s.bottom=$e(l.bottom,s.bottom),s.left=se(l.left,s.left),s},dt(e,c,n));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Bt(e){var t=e.reference,r=e.element,n=e.placement,o=n?J(n):null,a=n?Oe(n):null,c=t.x+t.width/2-r.width/2,i=t.y+t.height/2-r.height/2,s;switch(o){case F:s={x:c,y:t.y-r.height};break;case V:s={x:c,y:t.y+t.height};break;case N:s={x:t.x+t.width,y:i};break;case W:s={x:t.x-r.width,y:i};break;default:s={x:t.x,y:t.y}}var u=o?Ge(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(a){case be:s[u]=s[u]-(t[l]/2-r[l]/2);break;case Ae:s[u]=s[u]+(t[l]/2-r[l]/2);break}}return s}function Se(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,a=r.strategy,c=a===void 0?e.strategy:a,i=r.boundary,s=i===void 0?hr:i,u=r.rootBoundary,l=u===void 0?Pt:u,m=r.elementContext,w=m===void 0?Ce:m,p=r.altBoundary,x=p===void 0?!1:p,g=r.padding,f=g===void 0?0:g,y=St(typeof f!="number"?f:kt(f,ke)),O=w===Ce?gr:Ce,C=e.rects.popper,d=e.elements[x?O:w],P=Gr(ce(d)?d:d.contextElement||oe(e.elements.popper),s,l,c),b=xe(e.elements.reference),E=Bt({reference:b,element:C,strategy:"absolute",placement:o}),k=Ne(Object.assign({},C,E)),S=w===Ce?k:b,v={top:P.top-S.top+y.top,bottom:S.bottom-P.bottom+y.bottom,left:P.left-S.left+y.left,right:S.right-P.right+y.right},A=e.modifiersData.offset;if(w===Ce&&A){var L=A[o];Object.keys(v).forEach(function(T){var K=[N,V].indexOf(T)>=0?1:-1,q=[F,V].indexOf(T)>=0?"y":"x";v[T]+=L[q]*K})}return v}function Jr(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,a=r.rootBoundary,c=r.padding,i=r.flipVariations,s=r.allowedAutoPlacements,u=s===void 0?Ct:s,l=Oe(n),m=l?i?lt:lt.filter(function(x){return Oe(x)===l}):ke,w=m.filter(function(x){return u.indexOf(x)>=0});w.length===0&&(w=m);var p=w.reduce(function(x,g){return x[g]=Se(e,{placement:g,boundary:o,rootBoundary:a,padding:c})[J(g)],x},{});return Object.keys(p).sort(function(x,g){return p[x]-p[g]})}function Qr(e){if(J(e)===Xe)return[];var t=je(e);return[pt(e),t,pt(t)]}function Zr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!0:c,s=r.fallbackPlacements,u=r.padding,l=r.boundary,m=r.rootBoundary,w=r.altBoundary,p=r.flipVariations,x=p===void 0?!0:p,g=r.allowedAutoPlacements,f=t.options.placement,y=J(f),O=y===f,C=s||(O||!x?[je(f)]:Qr(f)),d=[f].concat(C).reduce(function(ee,U){return ee.concat(J(U)===Xe?Jr(t,{placement:U,boundary:l,rootBoundary:m,padding:u,flipVariations:x,allowedAutoPlacements:g}):U)},[]),P=t.rects.reference,b=t.rects.popper,E=new Map,k=!0,S=d[0],v=0;v<d.length;v++){var A=d[v],L=J(A),T=Oe(A)===be,K=[F,V].indexOf(L)>=0,q=K?"width":"height",D=Se(t,{placement:A,boundary:l,rootBoundary:m,altBoundary:w,padding:u}),j=K?T?N:W:T?V:F;P[q]>b[q]&&(j=je(j));var Z=je(j),I=[];if(a&&I.push(D[L]<=0),i&&I.push(D[j]<=0,D[Z]<=0),I.every(function(ee){return ee})){S=A,k=!1;break}E.set(A,I)}if(k)for(var le=x?3:1,ue=function(U){var ae=d.find(function(pe){var te=E.get(pe);if(te)return te.slice(0,U).every(function(_){return _})});if(ae)return S=ae,"break"},ne=le;ne>0;ne--){var fe=ue(ne);if(fe==="break")break}t.placement!==S&&(t.modifiersData[n]._skip=!0,t.placement=S,t.reset=!0)}}const eo={name:"flip",enabled:!0,phase:"main",fn:Zr,requiresIfExists:["offset"],data:{_skip:!1}};function vt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function mt(e){return[F,N,V,W].some(function(t){return e[t]>=0})}function to(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,a=t.modifiersData.preventOverflow,c=Se(t,{elementContext:"reference"}),i=Se(t,{altBoundary:!0}),s=vt(c,n),u=vt(i,o,a),l=mt(s),m=mt(u);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}const ro={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:to};function oo(e,t,r){var n=J(e),o=[W,F].indexOf(n)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,c=a[0],i=a[1];return c=c||0,i=(i||0)*o,[W,N].indexOf(n)>=0?{x:i,y:c}:{x:c,y:i}}function no(e){var t=e.state,r=e.options,n=e.name,o=r.offset,a=o===void 0?[0,0]:o,c=Ct.reduce(function(l,m){return l[m]=oo(m,t.rects,a),l},{}),i=c[t.placement],s=i.x,u=i.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=c}const ao={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:no};function io(e){var t=e.state,r=e.name;t.modifiersData[r]=Bt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const so={name:"popperOffsets",enabled:!0,phase:"read",fn:io,data:{}};function co(e){return e==="x"?"y":"x"}function lo(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,a=o===void 0?!0:o,c=r.altAxis,i=c===void 0?!1:c,s=r.boundary,u=r.rootBoundary,l=r.altBoundary,m=r.padding,w=r.tether,p=w===void 0?!0:w,x=r.tetherOffset,g=x===void 0?0:x,f=Se(t,{boundary:s,rootBoundary:u,padding:m,altBoundary:l}),y=J(t.placement),O=Oe(t.placement),C=!O,d=Ge(y),P=co(d),b=t.modifiersData.popperOffsets,E=t.rects.reference,k=t.rects.popper,S=typeof g=="function"?g(Object.assign({},t.rects,{placement:t.placement})):g,v=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),A=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(b){if(a){var T,K=d==="y"?F:W,q=d==="y"?V:N,D=d==="y"?"height":"width",j=b[d],Z=j+f[K],I=j-f[q],le=p?-k[D]/2:0,ue=O===be?E[D]:k[D],ne=O===be?-k[D]:-E[D],fe=t.elements.arrow,ee=p&&fe?Ke(fe):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:At(),ae=U[K],pe=U[q],te=Ee(0,E[D],ee[D]),_=C?E[D]/2-le-te-ae-v.mainAxis:ue-te-ae-v.mainAxis,Pe=C?-E[D]/2+le+te+pe+v.mainAxis:ne+te+pe+v.mainAxis,de=t.elements.arrow&&De(t.elements.arrow),Me=de?d==="y"?de.clientTop||0:de.clientLeft||0:0,Be=(T=A==null?void 0:A[d])!=null?T:0,Fe=j+_-Be-Me,R=j+Pe-Be,M=Ee(p?$e(Z,Fe):Z,j,p?se(I,R):I);b[d]=M,L[d]=M-j}if(i){var B,X=d==="x"?F:W,ve=d==="x"?V:N,Y=b[P],me=P==="y"?"height":"width",We=Y+f[X],tt=Y-f[ve],He=[F,W].indexOf(y)!==-1,rt=(B=A==null?void 0:A[P])!=null?B:0,ot=He?We:Y-E[me]-k[me]-rt+v.altAxis,nt=He?Y+E[me]+k[me]-rt-v.altAxis:tt,at=p&&He?jr(ot,Y,nt):Ee(p?ot:We,Y,p?nt:tt);b[P]=at,L[P]=at-Y}t.modifiersData[n]=L}}const uo={name:"preventOverflow",enabled:!0,phase:"main",fn:lo,requiresIfExists:["offset"]};function fo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function po(e){return e===H(e)||!z(e)?Je(e):fo(e)}function vo(e){var t=e.getBoundingClientRect(),r=we(t.width)/e.offsetWidth||1,n=we(t.height)/e.offsetHeight||1;return r!==1||n!==1}function mo(e,t,r){r===void 0&&(r=!1);var n=z(t),o=z(t)&&vo(t),a=oe(t),c=xe(e,o,r),i={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!r)&&((Q(t)!=="body"||Ze(a))&&(i=po(t)),z(t)?(s=xe(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=Qe(a))),{x:c.left+i.scrollLeft-s.x,y:c.top+i.scrollTop-s.y,width:c.width,height:c.height}}function ho(e){var t=new Map,r=new Set,n=[];e.forEach(function(a){t.set(a.name,a)});function o(a){r.add(a.name);var c=[].concat(a.requires||[],a.requiresIfExists||[]);c.forEach(function(i){if(!r.has(i)){var s=t.get(i);s&&o(s)}}),n.push(a)}return e.forEach(function(a){r.has(a.name)||o(a)}),n}function go(e){var t=ho(e);return Ar.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function yo(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function bo(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var ht={placement:"bottom",modifiers:[],strategy:"absolute"};function gt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function wo(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,a=o===void 0?ht:o;return function(i,s,u){u===void 0&&(u=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},ht,a),modifiersData:{},elements:{reference:i,popper:s},attributes:{},styles:{}},m=[],w=!1,p={state:l,setOptions:function(y){var O=typeof y=="function"?y(l.options):y;g(),l.options=Object.assign({},a,l.options,O),l.scrollParents={reference:ce(i)?Re(i):i.contextElement?Re(i.contextElement):[],popper:Re(s)};var C=go(bo([].concat(n,l.options.modifiers)));return l.orderedModifiers=C.filter(function(d){return d.enabled}),x(),p.update()},forceUpdate:function(){if(!w){var y=l.elements,O=y.reference,C=y.popper;if(gt(O,C)){l.rects={reference:mo(O,De(C),l.options.strategy==="fixed"),popper:Ke(C)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(v){return l.modifiersData[v.name]=Object.assign({},v.data)});for(var d=0;d<l.orderedModifiers.length;d++){if(l.reset===!0){l.reset=!1,d=-1;continue}var P=l.orderedModifiers[d],b=P.fn,E=P.options,k=E===void 0?{}:E,S=P.name;typeof b=="function"&&(l=b({state:l,options:k,name:S,instance:p})||l)}}}},update:yo(function(){return new Promise(function(f){p.forceUpdate(),f(l)})}),destroy:function(){g(),w=!0}};if(!gt(i,s))return p;p.setOptions(u).then(function(f){!w&&u.onFirstUpdate&&u.onFirstUpdate(f)});function x(){l.orderedModifiers.forEach(function(f){var y=f.name,O=f.options,C=O===void 0?{}:O,d=f.effect;if(typeof d=="function"){var P=d({state:l,name:y,instance:p,options:C}),b=function(){};m.push(P||b)}})}function g(){m.forEach(function(f){return f()}),m=[]}return p}}var xo=[Nr,so,zr,Dr,ao,eo,uo,Fr,ro],Oo=wo({defaultModifiers:xo});function Po(e={}){const{enabled:t=!0,modifiers:r,placement:n="bottom",strategy:o="absolute",arrowPadding:a=8,eventListeners:c=!0,offset:i,gutter:s=8,flip:u=!0,boundary:l="clippingParents",preventOverflow:m=!0,matchWidth:w,direction:p="ltr"}=e,x=h.useRef(null),g=h.useRef(null),f=h.useRef(null),y=mr(n,p),O=h.useRef(()=>{}),C=h.useCallback(()=>{var v;!t||!x.current||!g.current||((v=O.current)==null||v.call(O),f.current=Oo(x.current,g.current,{placement:y,modifiers:[pr,lr,cr,{...sr,enabled:!!w},{name:"eventListeners",...ir(c)},{name:"arrow",options:{padding:a}},{name:"offset",options:{offset:i??[0,s]}},{name:"flip",enabled:!!u,options:{padding:8}},{name:"preventOverflow",enabled:!!m,options:{boundary:l}},...r??[]],strategy:o}),f.current.forceUpdate(),O.current=f.current.destroy)},[y,t,r,w,c,a,i,s,u,m,l,o]);h.useEffect(()=>()=>{var v;!x.current&&!g.current&&((v=f.current)==null||v.destroy(),f.current=null)},[]);const d=h.useCallback(v=>{x.current=v,C()},[C]),P=h.useCallback((v={},A=null)=>({...v,ref:ie(d,A)}),[d]),b=h.useCallback(v=>{g.current=v,C()},[C]),E=h.useCallback((v={},A=null)=>({...v,ref:ie(b,A),style:{...v.style,position:o,minWidth:w?void 0:"max-content",inset:"0 auto auto 0"}}),[o,b,w]),k=h.useCallback((v={},A=null)=>{const{size:L,shadowColor:T,bg:K,style:q,...D}=v;return{...D,ref:A,"data-popper-arrow":"",style:Co(v)}},[]),S=h.useCallback((v={},A=null)=>({...v,ref:A,"data-popper-arrow-inner":""}),[]);return{update(){var v;(v=f.current)==null||v.update()},forceUpdate(){var v;(v=f.current)==null||v.forceUpdate()},transformOrigin:$.transformOrigin.varRef,referenceRef:d,popperRef:b,getPopperProps:E,getArrowProps:k,getArrowInnerProps:S,getReferenceProps:P}}function Co(e){const{size:t,shadowColor:r,bg:n,style:o}=e,a={...o,position:"absolute"};return t&&(a["--popper-arrow-size"]=t),r&&(a["--popper-arrow-shadow-color"]=r),n&&(a["--popper-arrow-bg"]=n),a}function Eo(e={}){const{onClose:t,onOpen:r,isOpen:n,id:o}=e,a=ze(r),c=ze(t),[i,s]=h.useState(e.defaultIsOpen||!1),u=n!==void 0?n:i,l=n!==void 0,m=h.useId(),w=o??`disclosure-${m}`,p=h.useCallback(()=>{l||s(!1),c==null||c()},[l,c]),x=h.useCallback(()=>{l||s(!0),a==null||a()},[l,a]),g=h.useCallback(()=>{u?p():x()},[u,x,p]);function f(O={}){return{...O,"aria-expanded":u,"aria-controls":w,onClick(C){var d;(d=O.onClick)==null||d.call(O,C),g()}}}function y(O={}){return{...O,hidden:!u,id:w}}return{isOpen:u,onOpen:x,onClose:p,onToggle:g,isControlled:l,getButtonProps:f,getDisclosureProps:y}}function Ro(e){const{isOpen:t,ref:r}=e,[n,o]=h.useState(t),[a,c]=h.useState(!1);return h.useEffect(()=>{a||(o(t),c(!0))},[t,a,n]),_e(()=>r.current,"animationend",()=>{o(t)}),{present:!(t?!1:!n),onComplete(){var s;const u=Ft(r.current),l=new u.CustomEvent("animationend",{bubbles:!0});(s=r.current)==null||s.dispatchEvent(l)}}}function Ao(e){const{wasSelected:t,enabled:r,isSelected:n,mode:o="unmount"}=e;return!!(!r||n||o==="keepMounted"&&t)}var[So,et]=xt({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[ko,Tt]=xt({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),ge={click:"click",hover:"hover"};function Do(e={}){const{closeOnBlur:t=!0,closeOnEsc:r=!0,initialFocusRef:n,id:o,returnFocusOnClose:a=!0,autoFocus:c=!0,arrowSize:i,arrowShadowColor:s,trigger:u=ge.click,openDelay:l=200,closeDelay:m=200,isLazy:w,lazyBehavior:p="unmount",computePositionOnMount:x,...g}=e,{isOpen:f,onClose:y,onOpen:O,onToggle:C}=Eo(e),d=h.useRef(null),P=h.useRef(null),b=h.useRef(null),E=h.useRef(!1),k=h.useRef(!1);f&&(k.current=!0);const[S,v]=h.useState(!1),[A,L]=h.useState(!1),T=h.useId(),K=o??T,[q,D,j,Z]=["popover-trigger","popover-content","popover-header","popover-body"].map(R=>`${R}-${K}`),{referenceRef:I,getArrowProps:le,getPopperProps:ue,getArrowInnerProps:ne,forceUpdate:fe}=Po({...g,enabled:f||!!x}),ee=Ro({isOpen:f,ref:b});Jt({enabled:f,ref:P}),Zt(b,{focusRef:P,visible:f,shouldFocus:a&&u===ge.click}),tr(b,{focusRef:n,visible:f,shouldFocus:c&&u===ge.click});const U=Ao({wasSelected:k.current,enabled:w,mode:p,isSelected:ee.present}),ae=h.useCallback((R={},M=null)=>{const B={...R,style:{...R.style,transformOrigin:$.transformOrigin.varRef,[$.arrowSize.var]:i?`${i}px`:void 0,[$.arrowShadowColor.var]:s},ref:ie(b,M),children:U?R.children:null,id:D,tabIndex:-1,role:"dialog",onKeyDown:G(R.onKeyDown,X=>{r&&X.key==="Escape"&&y()}),onBlur:G(R.onBlur,X=>{const ve=yt(X),Y=Ie(b.current,ve),me=Ie(P.current,ve);f&&t&&(!Y&&!me)&&y()}),"aria-labelledby":S?j:void 0,"aria-describedby":A?Z:void 0};return u===ge.hover&&(B.role="tooltip",B.onMouseEnter=G(R.onMouseEnter,()=>{E.current=!0}),B.onMouseLeave=G(R.onMouseLeave,X=>{X.nativeEvent.relatedTarget!==null&&(E.current=!1,setTimeout(()=>y(),m))})),B},[U,D,S,j,A,Z,u,r,y,f,t,m,s,i]),pe=h.useCallback((R={},M=null)=>ue({...R,style:{visibility:f?"visible":"hidden",...R.style}},M),[f,ue]),te=h.useCallback((R,M=null)=>({...R,ref:ie(M,d,I)}),[d,I]),_=h.useRef(),Pe=h.useRef(),de=h.useCallback(R=>{d.current==null&&I(R)},[I]),Me=h.useCallback((R={},M=null)=>{const B={...R,ref:ie(P,M,de),id:q,"aria-haspopup":"dialog","aria-expanded":f,"aria-controls":D};return u===ge.click&&(B.onClick=G(R.onClick,C)),u===ge.hover&&(B.onFocus=G(R.onFocus,()=>{_.current===void 0&&O()}),B.onBlur=G(R.onBlur,X=>{const ve=yt(X),Y=!Ie(b.current,ve);f&&t&&Y&&y()}),B.onKeyDown=G(R.onKeyDown,X=>{X.key==="Escape"&&y()}),B.onMouseEnter=G(R.onMouseEnter,()=>{E.current=!0,_.current=window.setTimeout(()=>O(),l)}),B.onMouseLeave=G(R.onMouseLeave,()=>{E.current=!1,_.current&&(clearTimeout(_.current),_.current=void 0),Pe.current=window.setTimeout(()=>{E.current===!1&&y()},m)})),B},[q,f,D,u,de,C,O,t,y,l,m]);h.useEffect(()=>()=>{_.current&&clearTimeout(_.current),Pe.current&&clearTimeout(Pe.current)},[]);const Be=h.useCallback((R={},M=null)=>({...R,id:j,ref:ie(M,B=>{v(!!B)})}),[j]),Fe=h.useCallback((R={},M=null)=>({...R,id:Z,ref:ie(M,B=>{L(!!B)})}),[Z]);return{forceUpdate:fe,isOpen:f,onAnimationComplete:ee.onComplete,onClose:y,getAnchorProps:te,getArrowProps:le,getArrowInnerProps:ne,getPopoverPositionerProps:pe,getPopoverProps:ae,getTriggerProps:Me,getHeaderProps:Be,getBodyProps:Fe}}function Ie(e,t){return e===t||(e==null?void 0:e.contains(t))}function yt(e){var t;const r=e.currentTarget.ownerDocument.activeElement;return(t=e.relatedTarget)!=null?t:r}function Bo(e){const t=Ht("Popover",e),{children:r,...n}=It(e),o=zt(),a=Do({...n,direction:o.direction});return ye.jsx(So,{value:a,children:ye.jsx(ko,{value:t,children:Vt(r,{isOpen:a.isOpen,onClose:a.onClose,forceUpdate:a.forceUpdate})})})}Bo.displayName="Popover";var To=qe(function(t,r){const{getBodyProps:n}=et(),o=Tt();return ye.jsx(Ue.div,{...n(t,r),className:wt("chakra-popover__body",t.className),__css:o.body})});To.displayName="PopoverBody";function jo(e){if(e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}var $o={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},Lo=Ue(qt.section),jt=qe(function(t,r){const{variants:n=$o,...o}=t,{isOpen:a}=et();return ye.jsx(Lo,{ref:r,variants:jo(n),initial:!1,animate:a?"enter":"exit",...o})});jt.displayName="PopoverTransition";var Mo=qe(function(t,r){const{rootProps:n,motionProps:o,...a}=t,{getPopoverProps:c,getPopoverPositionerProps:i,onAnimationComplete:s}=et(),u=Tt(),l={position:"relative",display:"flex",flexDirection:"column",...u.content};return ye.jsx(Ue.div,{...i(n),__css:u.popper,className:"chakra-popover__popper",children:ye.jsx(jt,{...o,...c(a,r),onAnimationComplete:Nt(s,a.onAnimationComplete),className:wt("chakra-popover__content",t.className),__css:l})})});Mo.displayName="PopoverContent";export{Bo as P,Mo as a,To as b,Tt as c,et as u};
//# sourceMappingURL=chunk-KVBLLJMP-317bfedd.js.map
