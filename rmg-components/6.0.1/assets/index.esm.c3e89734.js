var Mt=Object.defineProperty;var i=(e,t)=>Mt(e,"name",{value:t,configurable:!0});import{r as h,j as Ne,R as be}from"./jsx-runtime.4889c434.js";import{p as Wt,h as Pt,j as Ft,o as Ht,t as Nt,e as xe,i as De}from"./index.esm.2ed42a8b.js";import{u as Ye,a as Ct}from"./index.esm.9e071a76.js";import{g as zt,f as It,i as Vt,h as _t,m as qt}from"./index.esm.c9350490.js";import{m as ce}from"./index.esm.3ded612a.js";import{C as Ut}from"./index.esm.7adac4ee.js";function Je(e,t,r,o){const n=Ye(r);return h.exports.useEffect(()=>{const a=typeof e=="function"?e():e!=null?e:document;if(!(!r||!a))return a.addEventListener(t,n,o),()=>{a.removeEventListener(t,n,o)}},[t,e,o,n,r]),()=>{const a=typeof e=="function"?e():e!=null?e:document;a==null||a.removeEventListener(t,n,o)}}i(Je,"useEventListener");function Xt(e){return"current"in e}i(Xt,"isRefObject$1");var Et=i(()=>typeof window<"u","isDom");function Yt(){var t;const e=navigator.userAgentData;return(t=e==null?void 0:e.platform)!=null?t:navigator.platform}i(Yt,"getPlatform");var Kt=i(e=>Et()&&e.test(navigator.vendor),"vn"),Gt=i(e=>Et()&&e.test(Yt()),"pt"),Jt=i(()=>Gt(/mac|iphone|ipad|ipod/i),"isApple"),Qt=i(()=>Jt()&&Kt(/apple/i),"isSafari");function Zt(e){const{ref:t,elements:r,enabled:o}=e,n=i(()=>{var l;var a;return(l=(a=t.current)==null?void 0:a.ownerDocument)!=null?l:document},"doc");Je(n,"pointerdown",a=>{if(!Qt()||!o)return;const l=a.target,s=(r!=null?r:[t]).some(f=>{const u=Xt(f)?f.current:f;return(u==null?void 0:u.contains(l))||u===l});n().activeElement!==l&&s&&(a.preventDefault(),l.focus())})}i(Zt,"useFocusOnPointerDown");function er(e){const t=e.current;if(!t)return!1;const r=It(t);return!r||t.contains(r)?!1:!!Vt(r)}i(er,"preventReturnFocus");function tr(e,t){const{shouldFocus:r,visible:o,focusRef:n}=t,a=r&&!o;Ct(()=>{if(!a||er(e))return;const l=(n==null?void 0:n.current)||e.current;l&&requestAnimationFrame(()=>{l.focus()})},[a,e,n])}i(tr,"useFocusOnHide");var rr={preventScroll:!0,shouldFocus:!1};function or(e,t=rr){const{focusRef:r,preventScroll:o,shouldFocus:n,visible:a}=t,l=nr(e)?e.current:e,c=n&&a,s=h.exports.useRef(c),f=h.exports.useRef(a);Wt(()=>{!f.current&&a&&(s.current=c),f.current=a},[a,c]);const u=h.exports.useCallback(()=>{if(!(!a||!l||!s.current)&&(s.current=!1,!l.contains(document.activeElement)))if(r!=null&&r.current)requestAnimationFrame(()=>{var g;(g=r.current)==null||g.focus({preventScroll:o})});else{const g=zt(l);g.length>0&&requestAnimationFrame(()=>{g[0].focus({preventScroll:o})})}},[a,o,l,r]);Ct(()=>{u()},[u]),Je(l,"transitionend",u)}i(or,"useFocusOnShow");function nr(e){return"current"in e}i(nr,"isRefObject");var F="top",I="bottom",V="right",H="left",Qe="auto",$e=[F,I,V,H],Oe="start",Be="end",ar="clippingParents",Rt="viewport",Ae="popper",ir="reference",ut=$e.reduce(function(e,t){return e.concat([t+"-"+Oe,t+"-"+Be])},[]),At=[].concat($e,[Qe]).reduce(function(e,t){return e.concat([t,t+"-"+Oe,t+"-"+Be])},[]),sr="beforeRead",cr="read",lr="afterRead",ur="beforeMain",fr="main",pr="afterMain",dr="beforeWrite",vr="write",mr="afterWrite",hr=[sr,cr,lr,ur,fr,pr,dr,vr,mr];function Z(e){return e?(e.nodeName||"").toLowerCase():null}i(Z,"getNodeName");function _(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}i(_,"getWindow");function ue(e){var t=_(e).Element;return e instanceof t||e instanceof Element}i(ue,"isElement");function z(e){var t=_(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}i(z,"isHTMLElement");function Ze(e){if(typeof ShadowRoot>"u")return!1;var t=_(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}i(Ze,"isShadowRoot");function gr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var o=t.styles[r]||{},n=t.attributes[r]||{},a=t.elements[r];!z(a)||!Z(a)||(Object.assign(a.style,o),Object.keys(n).forEach(function(l){var c=n[l];c===!1?a.removeAttribute(l):a.setAttribute(l,c===!0?"":c)}))})}i(gr,"applyStyles");function yr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(o){var n=t.elements[o],a=t.attributes[o]||{},l=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:r[o]),c=l.reduce(function(s,f){return s[f]="",s},{});!z(n)||!Z(n)||(Object.assign(n.style,c),Object.keys(a).forEach(function(s){n.removeAttribute(s)}))})}}i(yr,"effect$2");const wr={name:"applyStyles",enabled:!0,phase:"write",fn:gr,effect:yr,requires:["computeStyles"]};function Q(e){return e.split("-")[0]}i(Q,"getBasePlacement");var le=Math.max,ze=Math.min,Pe=Math.round;function Ke(){var e=navigator.userAgentData;return e!=null&&e.brands?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}i(Ke,"getUAString");function St(){return!/^((?!chrome|android).)*safari/i.test(Ke())}i(St,"isLayoutViewport");function Ce(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!1);var o=e.getBoundingClientRect(),n=1,a=1;t&&z(e)&&(n=e.offsetWidth>0&&Pe(o.width)/e.offsetWidth||1,a=e.offsetHeight>0&&Pe(o.height)/e.offsetHeight||1);var l=ue(e)?_(e):window,c=l.visualViewport,s=!St()&&r,f=(o.left+(s&&c?c.offsetLeft:0))/n,u=(o.top+(s&&c?c.offsetTop:0))/a,g=o.width/n,x=o.height/a;return{width:g,height:x,top:u,right:f+g,bottom:u+x,left:f,x:f,y:u}}i(Ce,"getBoundingClientRect");function et(e){var t=Ce(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}i(et,"getLayoutRect");function kt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ze(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}i(kt,"contains$1");function oe(e){return _(e).getComputedStyle(e)}i(oe,"getComputedStyle");function br(e){return["table","td","th"].indexOf(Z(e))>=0}i(br,"isTableElement");function ne(e){return((ue(e)?e.ownerDocument:e.document)||window.document).documentElement}i(ne,"getDocumentElement");function Ie(e){return Z(e)==="html"?e:e.assignedSlot||e.parentNode||(Ze(e)?e.host:null)||ne(e)}i(Ie,"getParentNode");function ft(e){return!z(e)||oe(e).position==="fixed"?null:e.offsetParent}i(ft,"getTrueOffsetParent");function xr(e){var t=/firefox/i.test(Ke()),r=/Trident/i.test(Ke());if(r&&z(e)){var o=oe(e);if(o.position==="fixed")return null}var n=Ie(e);for(Ze(n)&&(n=n.host);z(n)&&["html","body"].indexOf(Z(n))<0;){var a=oe(n);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return n;n=n.parentNode}return null}i(xr,"getContainingBlock");function je(e){for(var t=_(e),r=ft(e);r&&br(r)&&oe(r).position==="static";)r=ft(r);return r&&(Z(r)==="html"||Z(r)==="body"&&oe(r).position==="static")?t:r||xr(e)||t}i(je,"getOffsetParent");function tt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}i(tt,"getMainAxisFromPlacement");function Se(e,t,r){return le(e,ze(t,r))}i(Se,"within");function Or(e,t,r){var o=Se(e,t,r);return o>r?r:o}i(Or,"withinMaxClamp");function Bt(){return{top:0,right:0,bottom:0,left:0}}i(Bt,"getFreshSideObject");function Tt(e){return Object.assign({},Bt(),e)}i(Tt,"mergePaddingObject");function Dt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}i(Dt,"expandToHashMap");var Pr=i(function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Tt(typeof t!="number"?t:Dt(t,$e))},"toPaddingObject");function Cr(e){var t,r=e.state,o=e.name,n=e.options,a=r.elements.arrow,l=r.modifiersData.popperOffsets,c=Q(r.placement),s=tt(c),f=[H,V].indexOf(c)>=0,u=f?"height":"width";if(!(!a||!l)){var g=Pr(n.padding,r),x=et(a),d=s==="y"?F:H,O=s==="y"?I:V,y=r.rects.reference[u]+r.rects.reference[s]-l[s]-r.rects.popper[u],p=l[s]-r.rects.reference[s],w=je(a),P=w?s==="y"?w.clientHeight||0:w.clientWidth||0:0,E=y/2-p/2,v=g[d],C=P-x[u]-g[O],b=P/2-x[u]/2+E,R=Se(v,b,C),B=s;r.modifiersData[o]=(t={},t[B]=R,t.centerOffset=R-b,t)}}i(Cr,"arrow");function Er(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!kt(t.elements.popper,n)||(t.elements.arrow=n))}i(Er,"effect$1");const Rr={name:"arrow",enabled:!0,phase:"main",fn:Cr,effect:Er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Ee(e){return e.split("-")[1]}i(Ee,"getVariation");var Ar={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Sr(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:Pe(t*n)/n||0,y:Pe(r*n)/n||0}}i(Sr,"roundOffsetsByDPR");function pt(e){var t,r=e.popper,o=e.popperRect,n=e.placement,a=e.variation,l=e.offsets,c=e.position,s=e.gpuAcceleration,f=e.adaptive,u=e.roundOffsets,g=e.isFixed,x=l.x,d=x===void 0?0:x,O=l.y,y=O===void 0?0:O,p=typeof u=="function"?u({x:d,y}):{x:d,y};d=p.x,y=p.y;var w=l.hasOwnProperty("x"),P=l.hasOwnProperty("y"),E=H,v=F,C=window;if(f){var b=je(r),R="clientHeight",B="clientWidth";if(b===_(r)&&(b=ne(r),oe(b).position!=="static"&&c==="absolute"&&(R="scrollHeight",B="scrollWidth")),b=b,n===F||(n===H||n===V)&&a===Be){v=I;var k=g&&b===C&&C.visualViewport?C.visualViewport.height:b[R];y-=k-o.height,y*=s?1:-1}if(n===H||(n===F||n===I)&&a===Be){E=V;var m=g&&b===C&&C.visualViewport?C.visualViewport.width:b[B];d-=m-o.width,d*=s?1:-1}}var S=Object.assign({position:c},f&&Ar),M=u===!0?Sr({x:d,y}):{x:d,y};if(d=M.x,y=M.y,s){var $;return Object.assign({},S,($={},$[v]=P?"0":"",$[E]=w?"0":"",$.transform=(C.devicePixelRatio||1)<=1?"translate("+d+"px, "+y+"px)":"translate3d("+d+"px, "+y+"px, 0)",$))}return Object.assign({},S,(t={},t[v]=P?y+"px":"",t[E]=w?d+"px":"",t.transform="",t))}i(pt,"mapToStyles");function kr(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,a=r.adaptive,l=a===void 0?!0:a,c=r.roundOffsets,s=c===void 0?!0:c,f={placement:Q(t.placement),variation:Ee(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,pt(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,pt(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}i(kr,"computeStyles");const Br={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:kr,data:{}};var Fe={passive:!0};function Tr(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,a=n===void 0?!0:n,l=o.resize,c=l===void 0?!0:l,s=_(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&f.forEach(function(u){u.addEventListener("scroll",r.update,Fe)}),c&&s.addEventListener("resize",r.update,Fe),function(){a&&f.forEach(function(u){u.removeEventListener("scroll",r.update,Fe)}),c&&s.removeEventListener("resize",r.update,Fe)}}i(Tr,"effect");const Dr={name:"eventListeners",enabled:!0,phase:"write",fn:i(function(){},"fn"),effect:Tr,data:{}};var $r={left:"right",right:"left",bottom:"top",top:"bottom"};function He(e){return e.replace(/left|right|bottom|top/g,function(t){return $r[t]})}i(He,"getOppositePlacement");var jr={start:"end",end:"start"};function dt(e){return e.replace(/start|end/g,function(t){return jr[t]})}i(dt,"getOppositeVariationPlacement");function rt(e){var t=_(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}i(rt,"getWindowScroll");function ot(e){return Ce(ne(e)).left+rt(e).scrollLeft}i(ot,"getWindowScrollBarX");function Lr(e,t){var r=_(e),o=ne(e),n=r.visualViewport,a=o.clientWidth,l=o.clientHeight,c=0,s=0;if(n){a=n.width,l=n.height;var f=St();(f||!f&&t==="fixed")&&(c=n.offsetLeft,s=n.offsetTop)}return{width:a,height:l,x:c+ot(e),y:s}}i(Lr,"getViewportRect");function Mr(e){var t,r=ne(e),o=rt(e),n=(t=e.ownerDocument)==null?void 0:t.body,a=le(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),l=le(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),c=-o.scrollLeft+ot(e),s=-o.scrollTop;return oe(n||r).direction==="rtl"&&(c+=le(r.clientWidth,n?n.clientWidth:0)-a),{width:a,height:l,x:c,y:s}}i(Mr,"getDocumentRect");function nt(e){var t=oe(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}i(nt,"isScrollParent");function $t(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:z(e)&&nt(e)?e:$t(Ie(e))}i($t,"getScrollParent");function ke(e,t){var r;t===void 0&&(t=[]);var o=$t(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),a=_(o),l=n?[a].concat(a.visualViewport||[],nt(o)?o:[]):o,c=t.concat(l);return n?c:c.concat(ke(Ie(l)))}i(ke,"listScrollParents");function Ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}i(Ge,"rectToClientRect");function Wr(e,t){var r=Ce(e,!1,t==="fixed");return r.top=r.top+e.clientTop,r.left=r.left+e.clientLeft,r.bottom=r.top+e.clientHeight,r.right=r.left+e.clientWidth,r.width=e.clientWidth,r.height=e.clientHeight,r.x=r.left,r.y=r.top,r}i(Wr,"getInnerBoundingClientRect");function vt(e,t,r){return t===Rt?Ge(Lr(e,r)):ue(t)?Wr(t,r):Ge(Mr(ne(e)))}i(vt,"getClientRectFromMixedType");function Fr(e){var t=ke(Ie(e)),r=["absolute","fixed"].indexOf(oe(e).position)>=0,o=r&&z(e)?je(e):e;return ue(o)?t.filter(function(n){return ue(n)&&kt(n,o)&&Z(n)!=="body"}):[]}i(Fr,"getClippingParents");function Hr(e,t,r,o){var n=t==="clippingParents"?Fr(e):[].concat(t),a=[].concat(n,[r]),l=a[0],c=a.reduce(function(s,f){var u=vt(e,f,o);return s.top=le(u.top,s.top),s.right=ze(u.right,s.right),s.bottom=ze(u.bottom,s.bottom),s.left=le(u.left,s.left),s},vt(e,l,o));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}i(Hr,"getClippingRect");function jt(e){var t=e.reference,r=e.element,o=e.placement,n=o?Q(o):null,a=o?Ee(o):null,l=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,s;switch(n){case F:s={x:l,y:t.y-r.height};break;case I:s={x:l,y:t.y+t.height};break;case V:s={x:t.x+t.width,y:c};break;case H:s={x:t.x-r.width,y:c};break;default:s={x:t.x,y:t.y}}var f=n?tt(n):null;if(f!=null){var u=f==="y"?"height":"width";switch(a){case Oe:s[f]=s[f]-(t[u]/2-r[u]/2);break;case Be:s[f]=s[f]+(t[u]/2-r[u]/2);break}}return s}i(jt,"computeOffsets");function Te(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,a=r.strategy,l=a===void 0?e.strategy:a,c=r.boundary,s=c===void 0?ar:c,f=r.rootBoundary,u=f===void 0?Rt:f,g=r.elementContext,x=g===void 0?Ae:g,d=r.altBoundary,O=d===void 0?!1:d,y=r.padding,p=y===void 0?0:y,w=Tt(typeof p!="number"?p:Dt(p,$e)),P=x===Ae?ir:Ae,E=e.rects.popper,v=e.elements[O?P:x],C=Hr(ue(v)?v:v.contextElement||ne(e.elements.popper),s,u,l),b=Ce(e.elements.reference),R=jt({reference:b,element:E,strategy:"absolute",placement:n}),B=Ge(Object.assign({},E,R)),k=x===Ae?B:b,m={top:C.top-k.top+w.top,bottom:k.bottom-C.bottom+w.bottom,left:C.left-k.left+w.left,right:k.right-C.right+w.right},S=e.modifiersData.offset;if(x===Ae&&S){var M=S[n];Object.keys(m).forEach(function($){var G=[V,I].indexOf($)>=0?1:-1,q=[F,I].indexOf($)>=0?"y":"x";m[$]+=M[q]*G})}return m}i(Te,"detectOverflow");function Nr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,a=r.rootBoundary,l=r.padding,c=r.flipVariations,s=r.allowedAutoPlacements,f=s===void 0?At:s,u=Ee(o),g=u?c?ut:ut.filter(function(O){return Ee(O)===u}):$e,x=g.filter(function(O){return f.indexOf(O)>=0});x.length===0&&(x=g);var d=x.reduce(function(O,y){return O[y]=Te(e,{placement:y,boundary:n,rootBoundary:a,padding:l})[Q(y)],O},{});return Object.keys(d).sort(function(O,y){return d[O]-d[y]})}i(Nr,"computeAutoPlacement");function zr(e){if(Q(e)===Qe)return[];var t=He(e);return[dt(e),t,dt(t)]}i(zr,"getExpandedFallbackPlacements");function Ir(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,a=n===void 0?!0:n,l=r.altAxis,c=l===void 0?!0:l,s=r.fallbackPlacements,f=r.padding,u=r.boundary,g=r.rootBoundary,x=r.altBoundary,d=r.flipVariations,O=d===void 0?!0:d,y=r.allowedAutoPlacements,p=t.options.placement,w=Q(p),P=w===p,E=s||(P||!O?[He(p)]:zr(p)),v=[p].concat(E).reduce(function(te,U){return te.concat(Q(U)===Qe?Nr(t,{placement:U,boundary:u,rootBoundary:g,padding:f,flipVariations:O,allowedAutoPlacements:y}):U)},[]),C=t.rects.reference,b=t.rects.popper,R=new Map,B=!0,k=v[0],m=0;m<v.length;m++){var S=v[m],M=Q(S),$=Ee(S)===Oe,G=[F,I].indexOf(M)>=0,q=G?"width":"height",T=Te(t,{placement:S,boundary:u,rootBoundary:g,altBoundary:x,padding:f}),j=G?$?V:H:$?I:F;C[q]>b[q]&&(j=He(j));var ee=He(j),N=[];if(a&&N.push(T[M]<=0),c&&N.push(T[j]<=0,T[ee]<=0),N.every(function(te){return te})){k=S,B=!1;break}R.set(S,N)}if(B)for(var fe=O?3:1,pe=i(function(U){var se=v.find(function(ve){var re=R.get(ve);if(re)return re.slice(0,U).every(function(X){return X})});if(se)return k=se,"break"},"_loop"),ie=fe;ie>0;ie--){var de=pe(ie);if(de==="break")break}t.placement!==k&&(t.modifiersData[o]._skip=!0,t.placement=k,t.reset=!0)}}i(Ir,"flip");const Vr={name:"flip",enabled:!0,phase:"main",fn:Ir,requiresIfExists:["offset"],data:{_skip:!1}};function mt(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}i(mt,"getSideOffsets");function ht(e){return[F,V,I,H].some(function(t){return e[t]>=0})}i(ht,"isAnySideFullyClipped");function _r(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,a=t.modifiersData.preventOverflow,l=Te(t,{elementContext:"reference"}),c=Te(t,{altBoundary:!0}),s=mt(l,o),f=mt(c,n,a),u=ht(s),g=ht(f);t.modifiersData[r]={referenceClippingOffsets:s,popperEscapeOffsets:f,isReferenceHidden:u,hasPopperEscaped:g},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":g})}i(_r,"hide");const qr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:_r};function Ur(e,t,r){var o=Q(e),n=[H,F].indexOf(o)>=0?-1:1,a=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,l=a[0],c=a[1];return l=l||0,c=(c||0)*n,[H,V].indexOf(o)>=0?{x:c,y:l}:{x:l,y:c}}i(Ur,"distanceAndSkiddingToXY");function Xr(e){var t=e.state,r=e.options,o=e.name,n=r.offset,a=n===void 0?[0,0]:n,l=At.reduce(function(u,g){return u[g]=Ur(g,t.rects,a),u},{}),c=l[t.placement],s=c.x,f=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=l}i(Xr,"offset");const Yr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Xr};function Kr(e){var t=e.state,r=e.name;t.modifiersData[r]=jt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}i(Kr,"popperOffsets");const Gr={name:"popperOffsets",enabled:!0,phase:"read",fn:Kr,data:{}};function Jr(e){return e==="x"?"y":"x"}i(Jr,"getAltAxis");function Qr(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,a=n===void 0?!0:n,l=r.altAxis,c=l===void 0?!1:l,s=r.boundary,f=r.rootBoundary,u=r.altBoundary,g=r.padding,x=r.tether,d=x===void 0?!0:x,O=r.tetherOffset,y=O===void 0?0:O,p=Te(t,{boundary:s,rootBoundary:f,padding:g,altBoundary:u}),w=Q(t.placement),P=Ee(t.placement),E=!P,v=tt(w),C=Jr(v),b=t.modifiersData.popperOffsets,R=t.rects.reference,B=t.rects.popper,k=typeof y=="function"?y(Object.assign({},t.rects,{placement:t.placement})):y,m=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,M={x:0,y:0};if(!!b){if(a){var $,G=v==="y"?F:H,q=v==="y"?I:V,T=v==="y"?"height":"width",j=b[v],ee=j+p[G],N=j-p[q],fe=d?-B[T]/2:0,pe=P===Oe?R[T]:B[T],ie=P===Oe?-B[T]:-R[T],de=t.elements.arrow,te=d&&de?et(de):{width:0,height:0},U=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Bt(),se=U[G],ve=U[q],re=Se(0,R[T],te[T]),X=E?R[T]/2-fe-re-se-m.mainAxis:pe-re-se-m.mainAxis,Re=E?-R[T]/2+fe+re+ve+m.mainAxis:ie+re+ve+m.mainAxis,me=t.elements.arrow&&je(t.elements.arrow),Ve=me?v==="y"?me.clientTop||0:me.clientLeft||0:0,We=($=S==null?void 0:S[v])!=null?$:0,_e=j+X-We-Ve,A=j+Re-We,W=Se(d?ze(ee,_e):ee,j,d?le(N,A):N);b[v]=W,M[v]=W-j}if(c){var D,Y=v==="x"?F:H,he=v==="x"?I:V,K=b[C],ge=C==="y"?"height":"width",qe=K+p[Y],at=K-p[he],Ue=[F,H].indexOf(w)!==-1,it=(D=S==null?void 0:S[C])!=null?D:0,st=Ue?qe:K-R[ge]-B[ge]-it+m.altAxis,ct=Ue?K+R[ge]+B[ge]-it-m.altAxis:at,lt=d&&Ue?Or(st,K,ct):Se(d?st:qe,K,d?ct:at);b[C]=lt,M[C]=lt-K}t.modifiersData[o]=M}}i(Qr,"preventOverflow");const Zr={name:"preventOverflow",enabled:!0,phase:"main",fn:Qr,requiresIfExists:["offset"]};function eo(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}i(eo,"getHTMLElementScroll");function to(e){return e===_(e)||!z(e)?rt(e):eo(e)}i(to,"getNodeScroll");function ro(e){var t=e.getBoundingClientRect(),r=Pe(t.width)/e.offsetWidth||1,o=Pe(t.height)/e.offsetHeight||1;return r!==1||o!==1}i(ro,"isElementScaled");function oo(e,t,r){r===void 0&&(r=!1);var o=z(t),n=z(t)&&ro(t),a=ne(t),l=Ce(e,n,r),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!r)&&((Z(t)!=="body"||nt(a))&&(c=to(t)),z(t)?(s=Ce(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=ot(a))),{x:l.left+c.scrollLeft-s.x,y:l.top+c.scrollTop-s.y,width:l.width,height:l.height}}i(oo,"getCompositeRect");function no(e){var t=new Map,r=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function n(a){r.add(a.name);var l=[].concat(a.requires||[],a.requiresIfExists||[]);l.forEach(function(c){if(!r.has(c)){var s=t.get(c);s&&n(s)}}),o.push(a)}return i(n,"sort"),e.forEach(function(a){r.has(a.name)||n(a)}),o}i(no,"order");function ao(e){var t=no(e);return hr.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}i(ao,"orderModifiers");function io(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}i(io,"debounce");function so(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}i(so,"mergeByName");var gt={placement:"bottom",modifiers:[],strategy:"absolute"};function yt(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}i(yt,"areValidElements");function co(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,a=n===void 0?gt:n;return i(function(c,s,f){f===void 0&&(f=a);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},gt,a),modifiersData:{},elements:{reference:c,popper:s},attributes:{},styles:{}},g=[],x=!1,d={state:u,setOptions:i(function(w){var P=typeof w=="function"?w(u.options):w;y(),u.options=Object.assign({},a,u.options,P),u.scrollParents={reference:ue(c)?ke(c):c.contextElement?ke(c.contextElement):[],popper:ke(s)};var E=ao(so([].concat(o,u.options.modifiers)));return u.orderedModifiers=E.filter(function(v){return v.enabled}),O(),d.update()},"setOptions"),forceUpdate:i(function(){if(!x){var w=u.elements,P=w.reference,E=w.popper;if(!!yt(P,E)){u.rects={reference:oo(P,je(E),u.options.strategy==="fixed"),popper:et(E)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(m){return u.modifiersData[m.name]=Object.assign({},m.data)});for(var v=0;v<u.orderedModifiers.length;v++){if(u.reset===!0){u.reset=!1,v=-1;continue}var C=u.orderedModifiers[v],b=C.fn,R=C.options,B=R===void 0?{}:R,k=C.name;typeof b=="function"&&(u=b({state:u,options:B,name:k,instance:d})||u)}}}},"forceUpdate"),update:io(function(){return new Promise(function(p){d.forceUpdate(),p(u)})}),destroy:i(function(){y(),x=!0},"destroy")};if(!yt(c,s))return d;d.setOptions(f).then(function(p){!x&&f.onFirstUpdate&&f.onFirstUpdate(p)});function O(){u.orderedModifiers.forEach(function(p){var w=p.name,P=p.options,E=P===void 0?{}:P,v=p.effect;if(typeof v=="function"){var C=v({state:u,name:w,instance:d,options:E}),b=i(function(){},"noopFn");g.push(C||b)}})}i(O,"runModifierEffects");function y(){g.forEach(function(p){return p()}),g=[]}return i(y,"cleanupModifierEffects"),d},"createPopper")}i(co,"popperGenerator");var lo=[Dr,Gr,Br,wr,Yr,Vr,Zr,Rr,qr],uo=co({defaultModifiers:lo}),ye=i((e,t)=>({var:e,varRef:t?`var(${e}, ${t})`:`var(${e})`}),"toVar"),L={arrowShadowColor:ye("--popper-arrow-shadow-color"),arrowSize:ye("--popper-arrow-size","8px"),arrowSizeHalf:ye("--popper-arrow-size-half"),arrowBg:ye("--popper-arrow-bg"),transformOrigin:ye("--popper-transform-origin"),arrowOffset:ye("--popper-arrow-offset")};function fo(e){if(e.includes("top"))return"1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("bottom"))return"-1px -1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("right"))return"-1px 1px 1px 0 var(--popper-arrow-shadow-color)";if(e.includes("left"))return"1px -1px 1px 0 var(--popper-arrow-shadow-color)"}i(fo,"getBoxShadow");var po={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},vo=i(e=>po[e],"toTransformOrigin"),wt={scroll:!0,resize:!0};function mo(e){let t;return typeof e=="object"?t={enabled:!0,options:{...wt,...e}}:t={enabled:e,options:wt},t}i(mo,"getEventListenerOptions");var ho={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:({state:e})=>{e.styles.popper.width=`${e.rects.reference.width}px`},effect:({state:e})=>()=>{const t=e.elements.reference;e.elements.popper.style.width=`${t.offsetWidth}px`}},go={name:"transformOrigin",enabled:!0,phase:"write",fn:({state:e})=>{bt(e)},effect:({state:e})=>()=>{bt(e)}},bt=i(e=>{e.elements.popper.style.setProperty(L.transformOrigin.var,vo(e.placement))},"setTransformOrigin"),yo={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:({state:e})=>{wo(e)}},wo=i(e=>{var t;if(!e.placement)return;const r=bo(e.placement);if(((t=e.elements)==null?void 0:t.arrow)&&r){Object.assign(e.elements.arrow.style,{[r.property]:r.value,width:L.arrowSize.varRef,height:L.arrowSize.varRef,zIndex:-1});const o={[L.arrowSizeHalf.var]:`calc(${L.arrowSize.varRef} / 2)`,[L.arrowOffset.var]:`calc(${L.arrowSizeHalf.varRef} * -1)`};for(const n in o)e.elements.arrow.style.setProperty(n,o[n])}},"setArrowStyles"),bo=i(e=>{if(e.startsWith("top"))return{property:"bottom",value:L.arrowOffset.varRef};if(e.startsWith("bottom"))return{property:"top",value:L.arrowOffset.varRef};if(e.startsWith("left"))return{property:"right",value:L.arrowOffset.varRef};if(e.startsWith("right"))return{property:"left",value:L.arrowOffset.varRef}},"getArrowStyle"),xo={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:({state:e})=>{xt(e)},effect:({state:e})=>()=>{xt(e)}},xt=i(e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");!t||Object.assign(t.style,{transform:"rotate(45deg)",background:L.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:fo(e.placement)})},"setInnerArrowStyles"),Oo={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},Po={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function Co(e,t="ltr"){var n;var r;const o=((r=Oo[e])==null?void 0:r[t])||e;return t==="ltr"?o:(n=Po[e])!=null?n:o}i(Co,"getPopperPlacement");function Eo(e={}){const{enabled:t=!0,modifiers:r,placement:o="bottom",strategy:n="absolute",arrowPadding:a=8,eventListeners:l=!0,offset:c,gutter:s=8,flip:f=!0,boundary:u="clippingParents",preventOverflow:g=!0,matchWidth:x,direction:d="ltr"}=e,O=h.exports.useRef(null),y=h.exports.useRef(null),p=h.exports.useRef(null),w=Co(o,d),P=h.exports.useRef(()=>{}),E=h.exports.useCallback(()=>{var m;!t||!O.current||!y.current||((m=P.current)==null||m.call(P),p.current=uo(O.current,y.current,{placement:w,modifiers:[xo,yo,go,{...ho,enabled:!!x},{name:"eventListeners",...mo(l)},{name:"arrow",options:{padding:a}},{name:"offset",options:{offset:c!=null?c:[0,s]}},{name:"flip",enabled:!!f,options:{padding:8}},{name:"preventOverflow",enabled:!!g,options:{boundary:u}},...r!=null?r:[]],strategy:n}),p.current.forceUpdate(),P.current=p.current.destroy)},[w,t,r,x,l,a,c,s,f,g,u,n]);h.exports.useEffect(()=>()=>{var m;!O.current&&!y.current&&((m=p.current)==null||m.destroy(),p.current=null)},[]);const v=h.exports.useCallback(m=>{O.current=m,E()},[E]),C=h.exports.useCallback((m={},S=null)=>({...m,ref:ce(v,S)}),[v]),b=h.exports.useCallback(m=>{y.current=m,E()},[E]),R=h.exports.useCallback((m={},S=null)=>({...m,ref:ce(b,S),style:{...m.style,position:n,minWidth:x?void 0:"max-content",inset:"0 auto auto 0"}}),[n,b,x]),B=h.exports.useCallback((m={},S=null)=>{const{size:M,shadowColor:$,bg:G,style:q,...T}=m;return{...T,ref:S,"data-popper-arrow":"",style:Ro(m)}},[]),k=h.exports.useCallback((m={},S=null)=>({...m,ref:S,"data-popper-arrow-inner":""}),[]);return{update(){var m;(m=p.current)==null||m.update()},forceUpdate(){var m;(m=p.current)==null||m.forceUpdate()},transformOrigin:L.transformOrigin.varRef,referenceRef:v,popperRef:b,getPopperProps:R,getArrowProps:B,getArrowInnerProps:k,getReferenceProps:C}}i(Eo,"usePopper");function Ro(e){const{size:t,shadowColor:r,bg:o,style:n}=e,a={...n,position:"absolute"};return t&&(a["--popper-arrow-size"]=t),r&&(a["--popper-arrow-shadow-color"]=r),o&&(a["--popper-arrow-bg"]=o),a}i(Ro,"getArrowStyle2");function Ao(e={}){const{onClose:t,onOpen:r,isOpen:o,id:n}=e,a=Ye(r),l=Ye(t),[c,s]=h.exports.useState(e.defaultIsOpen||!1),f=o!==void 0?o:c,u=o!==void 0,g=h.exports.useId(),x=n!=null?n:`disclosure-${g}`,d=h.exports.useCallback(()=>{u||s(!1),l==null||l()},[u,l]),O=h.exports.useCallback(()=>{u||s(!0),a==null||a()},[u,a]),y=h.exports.useCallback(()=>{f?d():O()},[f,O,d]);function p(P={}){return{...P,"aria-expanded":f,"aria-controls":x,onClick(E){var v;(v=P.onClick)==null||v.call(P,E),y()}}}i(p,"getButtonProps");function w(P={}){return{...P,hidden:!f,id:x}}return i(w,"getDisclosureProps"),{isOpen:f,onOpen:O,onClose:d,onToggle:y,isControlled:u,getButtonProps:p,getDisclosureProps:w}}i(Ao,"useDisclosure");function So(e){const{isOpen:t,ref:r}=e,[o,n]=h.exports.useState(t),[a,l]=h.exports.useState(!1);return h.exports.useEffect(()=>{a||(n(t),l(!0))},[t,a,o]),Je(()=>r.current,"animationend",()=>{n(t)}),{present:!(t?!1:!o),onComplete(){var s;const f=_t(r.current),u=new f.CustomEvent("animationend",{bubbles:!0});(s=r.current)==null||s.dispatchEvent(u)}}}i(So,"useAnimationState");function ko(e){const{wasSelected:t,enabled:r,isSelected:o,mode:n="unmount"}=e;return!!(!r||o||n==="keepMounted"&&t)}i(ko,"lazyDisclosure");var Le=i((...e)=>e.filter(Boolean).join(" "),"cx");function Bo(e,...t){return To(e)?e(...t):e}i(Bo,"runIfFn");var To=i(e=>typeof e=="function","isFunction");function J(...e){return i(function(r){e.some(o=>(o==null||o(r),r==null?void 0:r.defaultPrevented))},"func")}i(J,"callAllHandlers");function Do(...e){return i(function(r){e.forEach(o=>{o==null||o(r)})},"mergedFn")}i(Do,"callAll");var[$o,ae]=Pt({name:"PopoverContext",errorMessage:"usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"}),[jo,Me]=Pt({name:"PopoverStylesContext",errorMessage:`usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `}),we={click:"click",hover:"hover"};function Lo(e={}){const{closeOnBlur:t=!0,closeOnEsc:r=!0,initialFocusRef:o,id:n,returnFocusOnClose:a=!0,autoFocus:l=!0,arrowSize:c,arrowShadowColor:s,trigger:f=we.click,openDelay:u=200,closeDelay:g=200,isLazy:x,lazyBehavior:d="unmount",computePositionOnMount:O,...y}=e,{isOpen:p,onClose:w,onOpen:P,onToggle:E}=Ao(e),v=h.exports.useRef(null),C=h.exports.useRef(null),b=h.exports.useRef(null),R=h.exports.useRef(!1),B=h.exports.useRef(!1);p&&(B.current=!0);const[k,m]=h.exports.useState(!1),[S,M]=h.exports.useState(!1),$=h.exports.useId(),G=n!=null?n:$,[q,T,j,ee]=["popover-trigger","popover-content","popover-header","popover-body"].map(A=>`${A}-${G}`),{referenceRef:N,getArrowProps:fe,getPopperProps:pe,getArrowInnerProps:ie,forceUpdate:de}=Eo({...y,enabled:p||!!O}),te=So({isOpen:p,ref:b});Zt({enabled:p,ref:C}),tr(b,{focusRef:C,visible:p,shouldFocus:a&&f===we.click}),or(b,{focusRef:o,visible:p,shouldFocus:l&&f===we.click});const U=ko({wasSelected:B.current,enabled:x,mode:d,isSelected:te.present}),se=h.exports.useCallback((A={},W=null)=>{const D={...A,style:{...A.style,transformOrigin:L.transformOrigin.varRef,[L.arrowSize.var]:c?`${c}px`:void 0,[L.arrowShadowColor.var]:s},ref:ce(b,W),children:U?A.children:null,id:T,tabIndex:-1,role:"dialog",onKeyDown:J(A.onKeyDown,Y=>{r&&Y.key==="Escape"&&w()}),onBlur:J(A.onBlur,Y=>{const he=Ot(Y),K=Xe(b.current,he),ge=Xe(C.current,he);p&&t&&(!K&&!ge)&&w()}),"aria-labelledby":k?j:void 0,"aria-describedby":S?ee:void 0};return f===we.hover&&(D.role="tooltip",D.onMouseEnter=J(A.onMouseEnter,()=>{R.current=!0}),D.onMouseLeave=J(A.onMouseLeave,Y=>{Y.nativeEvent.relatedTarget!==null&&(R.current=!1,setTimeout(()=>w(),g))})),D},[U,T,k,j,S,ee,f,r,w,p,t,g,s,c]),ve=h.exports.useCallback((A={},W=null)=>pe({...A,style:{visibility:p?"visible":"hidden",...A.style}},W),[p,pe]),re=h.exports.useCallback((A,W=null)=>({...A,ref:ce(W,v,N)}),[v,N]),X=h.exports.useRef(),Re=h.exports.useRef(),me=h.exports.useCallback(A=>{v.current==null&&N(A)},[N]),Ve=h.exports.useCallback((A={},W=null)=>{const D={...A,ref:ce(C,W,me),id:q,"aria-haspopup":"dialog","aria-expanded":p,"aria-controls":T};return f===we.click&&(D.onClick=J(A.onClick,E)),f===we.hover&&(D.onFocus=J(A.onFocus,()=>{X.current===void 0&&P()}),D.onBlur=J(A.onBlur,Y=>{const he=Ot(Y),K=!Xe(b.current,he);p&&t&&K&&w()}),D.onKeyDown=J(A.onKeyDown,Y=>{Y.key==="Escape"&&w()}),D.onMouseEnter=J(A.onMouseEnter,()=>{R.current=!0,X.current=window.setTimeout(()=>P(),u)}),D.onMouseLeave=J(A.onMouseLeave,()=>{R.current=!1,X.current&&(clearTimeout(X.current),X.current=void 0),Re.current=window.setTimeout(()=>{R.current===!1&&w()},g)})),D},[q,p,T,f,me,E,P,t,w,u,g]);h.exports.useEffect(()=>()=>{X.current&&clearTimeout(X.current),Re.current&&clearTimeout(Re.current)},[]);const We=h.exports.useCallback((A={},W=null)=>({...A,id:j,ref:ce(W,D=>{m(!!D)})}),[j]),_e=h.exports.useCallback((A={},W=null)=>({...A,id:ee,ref:ce(W,D=>{M(!!D)})}),[ee]);return{forceUpdate:de,isOpen:p,onAnimationComplete:te.onComplete,onClose:w,getAnchorProps:re,getArrowProps:fe,getArrowInnerProps:ie,getPopoverPositionerProps:ve,getPopoverProps:se,getTriggerProps:Ve,getHeaderProps:We,getBodyProps:_e}}i(Lo,"usePopover");function Xe(e,t){return e===t||(e==null?void 0:e.contains(t))}i(Xe,"contains");function Ot(e){var r;const t=e.currentTarget.ownerDocument.activeElement;return(r=e.relatedTarget)!=null?r:t}i(Ot,"getRelatedTarget");function Mo(e){const t=Ft("Popover",e),{children:r,...o}=Ht(e),n=Nt(),a=Lo({...o,direction:n.direction});return Ne($o,{value:a,children:Ne(jo,{value:t,children:Bo(r,{isOpen:a.isOpen,onClose:a.onClose,forceUpdate:a.forceUpdate})})})}i(Mo,"Popover");Mo.displayName="Popover";function Wo(e){const t=h.exports.Children.only(e.children),{getAnchorProps:r}=ae();return h.exports.cloneElement(t,r(t.props,t.ref))}i(Wo,"PopoverAnchor");Wo.displayName="PopoverAnchor";function Fo(e){var s;const{bg:t,bgColor:r,backgroundColor:o}=e,{getArrowProps:n,getArrowInnerProps:a}=ae(),l=Me(),c=(s=t!=null?t:r)!=null?s:o;return be.createElement(xe.div,{...n(),className:"chakra-popover__arrow-positioner"},be.createElement(xe.div,{className:Le("chakra-popover__arrow",e.className),...a(e),__css:{...l.arrow,"--popper-arrow-bg":c?`colors.${c}, ${c}`:void 0}}))}i(Fo,"PopoverArrow");Fo.displayName="PopoverArrow";var Ho=De(i(function(t,r){const{getBodyProps:o}=ae(),n=Me();return be.createElement(xe.div,{...o(t,r),className:Le("chakra-popover__body",t.className),__css:n.body})},"PopoverBody2"));Ho.displayName="PopoverBody";var No=De(i(function(t,r){const{onClose:o}=ae(),n=Me();return Ne(Ut,{size:"sm",onClick:o,className:Le("chakra-popover__close-btn",t.className),__css:n.closeButton,ref:r,...t})},"PopoverCloseButton2"));No.displayName="PopoverCloseButton";function zo(e){if(!!e)return{enter:{...e.enter,visibility:"visible"},exit:{...e.exit,transitionEnd:{visibility:"hidden"}}}}i(zo,"mergeVariants");var Io={exit:{opacity:0,scale:.95,transition:{duration:.1,ease:[.4,0,1,1]}},enter:{scale:1,opacity:1,transition:{duration:.15,ease:[0,0,.2,1]}}},Vo=xe(qt.section),Lt=De(i(function(t,r){const{variants:o=Io,...n}=t,{isOpen:a}=ae();return be.createElement(Vo,{ref:r,variants:zo(o),initial:!1,animate:a?"enter":"exit",...n})},"PopoverTransition2"));Lt.displayName="PopoverTransition";var _o=De(i(function(t,r){const{rootProps:o,motionProps:n,...a}=t,{getPopoverProps:l,getPopoverPositionerProps:c,onAnimationComplete:s}=ae(),f=Me(),u={position:"relative",display:"flex",flexDirection:"column",...f.content};return be.createElement(xe.div,{...c(o),__css:f.popper,className:"chakra-popover__popper"},Ne(Lt,{...n,...l(a,r),onAnimationComplete:Do(s,a.onAnimationComplete),className:Le("chakra-popover__content",t.className),__css:u}))},"PopoverContent2"));_o.displayName="PopoverContent";var qo=De(i(function(t,r){const{getHeaderProps:o}=ae(),n=Me();return be.createElement(xe.header,{...o(t,r),className:Le("chakra-popover__header",t.className),__css:n.header})},"PopoverHeader2"));qo.displayName="PopoverHeader";function Uo(e){const t=h.exports.Children.only(e.children),{getTriggerProps:r}=ae();return h.exports.cloneElement(t,r(t.props,t.ref))}i(Uo,"PopoverTrigger");Uo.displayName="PopoverTrigger";export{Mo as P,Wo as a,_o as b,Ho as c,Uo as d,Fo as e,No as f,qo as g};
//# sourceMappingURL=index.esm.c3e89734.js.map
