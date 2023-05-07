"use strict";(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[8423],{1740:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(4942),i=n(9439),u=n(2791),o=n(8617),c=n(5984),s=n(4134),a=n(713),l=n(3486),d=n(7339),f=n(8284),y=n(3671),p=n(1413),v=n(8817),h=n(3649),g=n(7599),x=n(184),m=function(e){var t=e.id,n=e.type,r=e.attrs,o=e.styleType,c=e.styleAttrs,s=void 0===c?g.b[o].defaultAttrs:c,a=e.newLine,l=e.handleClick,d=e.x1,f=e.y1,y=e.x2,p=e.y2,v=u.useState("M 0,0 L 0,0"),h=(0,i.Z)(v,2),m=h[0],Z=h[1];u.useEffect((function(){Z(g.V[n].generatePath(d,y,f,p,r))}),[n,JSON.stringify(r),d,y,f,p]);var A=g.b[o].component;return u.useMemo((function(){return(0,x.jsx)(A,{id:t,type:n,path:m,styleAttrs:s,newLine:a,handleClick:l})}),[t,n,m,o,JSON.stringify(s),a,l])},Z=n(6882),A=n(3300),b=n(3433),E=n(7762),N=function(e){var t=function(e){var t,n=e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&""!==t.reconcileId})),r={},i=(0,E.Z)(n);try{for(i.s();!(t=i.n()).done;){var u=t.value,o=e.getEdgeAttribute(u,"reconcileId");o in r?r[o].push(u):r[o]=[u]}}catch(c){i.e(c)}finally{i.f()}return r}(e),n=[],r=[];return Object.values(t).forEach((function(t){if(1!==t.length){var u=e.getEdgeAttribute(t.at(0),"type");if(t.every((function(t){return e.getEdgeAttribute(t,"type")===u}))){var o=e.getEdgeAttribute(t.at(0),"style");if(t.every((function(t){return e.getEdgeAttribute(t,"style")===o}))){var c={},s=new Set,a=new Set,l=Object.fromEntries(t.map((function(t){var n,r,u=e.extremities(t),o=(0,i.Z)(u,2),l=o[0],d=o[1];return c[l]=(null!==(n=c[l])&&void 0!==n?n:0)+1,c[d]=(null!==(r=c[d])&&void 0!==r?r:0)+1,s.add(l),a.add(d),[l,[t,d]]}))),d=Array.from(s).filter((function(e){return 1===c[e]})),f=Array.from(a).filter((function(e){return 1===c[e]}));if(1===d.length&&1===f.length){var y=d[0],p=f[0];if(y!==p){for(var v=[l[y][0]],h=l[y][1],g=1;g<t.length;g+=1){var x,m=null===(x=l[h])||void 0===x?void 0:x.at(1);if(!m)return void r.push.apply(r,(0,b.Z)(t));v.push(l[h][0]),h=m}h===p&&v.length===t.length?n.push(v):r.push.apply(r,(0,b.Z)(t))}else r.push.apply(r,(0,b.Z)(t))}else r.push.apply(r,(0,b.Z)(t))}else r.push.apply(r,(0,b.Z)(t))}else r.push.apply(r,(0,b.Z)(t))}else r.push.apply(r,(0,b.Z)(t))})),{allReconciledLines:n,danglingLines:r}},w=function(e){return e.filterNodes((function(e,t){return e.startsWith("stn")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).sort((function(e,t){return e[1].zIndex-t[1].zIndex})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},k=function(e){return e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&t.visible&&""===t.reconcileId})).sort((function(t,n){return e.getEdgeAttribute(t,"zIndex")-e.getEdgeAttribute(n,"zIndex")})).map((function(t){var n=e.getEdgeAttribute(t,"type"),r=e.getEdgeAttribute(t,n),u=e.getEdgeAttribute(t,"style"),o=e.getEdgeAttribute(t,u),c=e.extremities(t),s=(0,i.Z)(c,2),a=s[0],l=s[1],d=e.getNodeAttributes(a),f=e.getNodeAttributes(l);return{edge:t,x1:d.x,y1:d.y,x2:f.x,y2:f.y,type:n,attr:r,style:u,styleAttr:o}}))},I=function(e){return e.filterNodes((function(e,t){return e.startsWith("misc_node")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).sort((function(e,t){return e[1].zIndex-t[1].zIndex})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},P=function(){var e=(0,d.u5)(),t=u.useRef(window.graph),n=(0,d.Qy)((function(e){return e.app})).telemetry.project,l=(0,d.Qy)((function(e){return e.param})).svgViewBoxZoom,b=(0,d.Qy)((function(e){return e.runtime})),E=b.selected,P=b.refresh,S=P.nodes,L=P.edges,_=b.mode,M=b.active,W=b.keepLastPath,z=b.theme,D=u.useState({x:0,y:0}),j=(0,i.Z)(D,2),K=j[0],R=j[1],C=u.useState({x:0,y:0}),O=(0,i.Z)(C,2),T=O[0],V=O[1],U=(0,o.ZP)((function(t,n){n.stopPropagation();var r=n.currentTarget,i=(0,A.yK)(n),u=i.x,o=i.y;r.setPointerCapture(n.pointerId),R({x:u,y:o}),e((0,y.Iv)(t)),!n.shiftKey&&E.length<=1&&e((0,y.x_)()),e((0,y.Gv)(t))})),J=(0,o.ZP)((function(n,r){r.stopPropagation();var i=(0,A.yK)(r),u=i.x,o=i.y;"free"===_&&M===n?(E.forEach((function(e){t.current.updateNodeAttributes(e,(function(e){return(0,p.Z)((0,p.Z)({},e),{},{x:(0,A.Z9)(e.x-(K.x-u)*l/100,r.altKey?1:5),y:(0,A.Z9)(e.y-(K.y-o)*l/100,r.altKey?1:5)})}))})),e((0,y.ML)()),e((0,y.lH)())):_.startsWith("line")&&V({x:(K.x-u)*l/100,y:(K.y-o)*l/100})})),B=(0,o.ZP)((function(i,u){if(u.stopPropagation(),_.startsWith("line")||_.startsWith("misc-edge")){W||e((0,y.PM)("free"));["stn_core_","virtual_circle_"].forEach((function(e){var i,o,l=null===(i=document.elementsFromPoint(u.clientX,u.clientY)[0].attributes)||void 0===i||null===(o=i.getNamedItem("id"))||void 0===o?void 0:o.value;if(null!==l&&void 0!==l&&l.startsWith(e)){var d,f=_.slice(5),y="line_".concat((0,c.x0)(10));t.current.addDirectedEdgeWithKey(y,M,l.slice(e.length),(d={visible:!0,zIndex:0,type:f},(0,r.Z)(d,f,JSON.parse(JSON.stringify(g.V[f].defaultAttrs))),(0,r.Z)(d,"style",v.R.SingleColor),(0,r.Z)(d,v.R.SingleColor,{color:z}),(0,r.Z)(d,"reconcileId",""),d)),n&&s.ZP.event(a.zW.ADD_LINE,{type:f})}})),e((0,y.lH)()),e((0,f.DR)(t.current.export()))}else if("free"===_)if(M){var o=(0,A.yK)(u),l=o.x,d=o.y;K.x-l===0&&K.y-d===0?e((0,y.Gv)(i)):e((0,f.DR)(t.current.export()))}else e((0,y.Gv)(i));e((0,y.Iv)(void 0))})),F=(0,o.ZP)((function(t,n){e((0,y.x_)()),e((0,y.Gv)(t))})),Q=u.useState(w(t.current)),G=(0,i.Z)(Q,2),H=G[0],X=G[1],Y=u.useState(I(t.current)),q=(0,i.Z)(Y,2),$=q[0],ee=q[1],te=u.useState(k(t.current)),ne=(0,i.Z)(te,2),re=ne[0],ie=ne[1],ue=u.useState([]),oe=(0,i.Z)(ue,2),ce=oe[0],se=oe[1],ae=u.useState([]),le=(0,i.Z)(ae,2),de=le[0],fe=le[1];return u.useEffect((function(){X(w(t.current)),ee(I(t.current))}),[S]),u.useEffect((function(){ie(k(t.current));var e=N(t.current),n=e.allReconciledLines,r=e.danglingLines;se(n),fe(r)}),[]),u.useEffect((function(){ie(k(t.current));var e=N(t.current),n=e.allReconciledLines,r=e.danglingLines;se(n),fe(r)}),[L]),(0,x.jsxs)(x.Fragment,{children:[de.map((function(e){var n=t.current.extremities(e),r=(0,i.Z)(n,2),u=r[0],o=r[1],c=t.current.getNodeAttributes(u),s=t.current.getNodeAttributes(o);return(0,x.jsx)(m,{id:e,x1:c.x,y1:c.y,x2:s.x,y2:s.y,newLine:!1,type:v.y.Simple,attrs:g.V[v.y.Simple].defaultAttrs,styleType:v.R.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:F},e)})),ce.map((function(e){var n=function(e,t){if(t.every((function(t){return e.hasEdge(t)}))){for(var n=t.map((function(t){var n,r=e.extremities(t),u=(0,i.Z)(r,2),o=u[0],c=u[1],s=e.getNodeAttributes(o),a=e.getNodeAttributes(c),l=e.getEdgeAttribute(t,"type"),d=null!==(n=e.getEdgeAttribute(t,l))&&void 0!==n?n:g.V[l].defaultAttrs;return g.V[l].generatePath(s.x,a.x,s.y,a.y,d)})),r="".concat(n[0]," "),u=1;u<t.length;u+=1)r+=n[u].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return r}}(t.current,e);if(!n)return(0,x.jsx)(x.Fragment,{});var r=e.at(0),u=t.current.getEdgeAttribute(r,"type"),o=t.current.getEdgeAttribute(r,"style"),c=t.current.getEdgeAttribute(r,o),s=g.b[o].component;return(0,x.jsx)(s,{id:r,type:u,path:n,styleAttrs:c,newLine:!1,handleClick:F},r)})),re.map((function(e){var t=e.edge,n=e.x1,r=e.y1,i=e.x2,u=e.y2,o=e.type,c=e.attr,s=e.style,a=e.styleAttr;return(0,x.jsx)(m,{id:t,x1:n,y1:r,x2:i,y2:u,newLine:!1,type:o,attrs:c,styleType:s,styleAttrs:a,handleClick:F},t)})),$.map((function(e){var t=e.node,n=e.x,r=e.y,i=e.type,u=Z.Z[i].component;return(0,x.jsx)(u,{id:t,x:n,y:r,attrs:e[i],handlePointerDown:U,handlePointerMove:J,handlePointerUp:B},t)})),H.map((function(e){var t=e.node,n=e.x,i=e.y,u=e.type,o=h.Z[u].component;return(0,x.jsx)(o,{id:t,x:n,y:i,attrs:(0,r.Z)({},u,e[u]),handlePointerDown:U,handlePointerMove:J,handlePointerUp:B},t)})),_.startsWith("line")&&M&&(0,x.jsx)(m,{id:"create_in_progress___no_use",x1:t.current.getNodeAttribute(M,"x"),y1:t.current.getNodeAttribute(M,"y"),x2:t.current.getNodeAttribute(M,"x")-T.x,y2:t.current.getNodeAttribute(M,"y")-T.y,newLine:!0,type:_.slice(5),attrs:g.V[_.slice(5)].defaultAttrs,styleType:v.R.SingleColor,styleAttrs:{color:z}})]})},S=function(){var e,t,n=(0,d.u5)(),p=u.useRef(window.graph),v=function(){n((0,y.ML)()),n((0,y.lH)()),n((0,f.DR)(p.current.export()))},g=(0,d.Qy)((function(e){return e.app})).telemetry.project,m=(0,d.Qy)((function(e){return e.param})),b=m.svgViewBoxZoom,E=m.svgViewBoxMin,N=(0,d.Qy)((function(e){return e.runtime})),w=N.mode,k=N.lastTool,I=N.active,S=N.selected,L=N.keepLastPath,_=N.theme,M=N.refresh.nodes,W=N.nodeExists;u.useEffect((function(){var e,t=JSON.parse(JSON.stringify(W));return p.current.forEachNode((function(e){var n=p.current.getNodeAttribute(e,"type");t[n]=!0})),n((0,y.vU)(t)),t[l.T.MTR]&&((e=document.createElement("link")).rel="stylesheet",e.id="fonts_mtr",e.href="/rmp/styles/fonts_mtr.css",document.head.append(e)),function(){e&&document.head.removeChild(e)}}),[M]);var z=u.useState({x:0,y:0}),D=(0,i.Z)(z,2),j=D[0],K=D[1],R=u.useState({x:0,y:0}),C=(0,i.Z)(R,2),O=C[0],T=C[1],V=(0,o.ZP)((function(e){var t=(0,A.yK)(e),i=t.x,u=t.y;if(w.startsWith("station")){n((0,y.PM)("free"));var o=(0,c.x0)(10),l=w.slice(8),d=JSON.parse(JSON.stringify(h.Z[l].defaultAttrs));"color"in d&&(d.color=_),p.current.addNode("stn_".concat(o),(0,r.Z)({visible:!0,zIndex:0,x:(0,A.Z9)(i*b/100+E.x,10),y:(0,A.Z9)(u*b/100+E.y,10),type:l},l,d)),v(),g&&s.ZP.event(a.zW.ADD_STATION,{type:l})}else if(w.startsWith("misc-node")){n((0,y.PM)("free"));var f=(0,c.x0)(10),x=w.slice(10);p.current.addNode("misc_node_".concat(f),(0,r.Z)({visible:!0,zIndex:0,x:(0,A.Z9)(i*b/100+E.x,10),y:(0,A.Z9)(u*b/100+E.y,10),type:x},x,JSON.parse(JSON.stringify(Z.Z[x].defaultAttrs)))),v(),g&&s.ZP.event(a.zW.ADD_STATION,{type:x})}else("free"===w||w.startsWith("line"))&&(w.startsWith("line")&&(n((0,y.PM)("free")),L&&n((0,y.Mm)(!1))),K({x:i,y:u}),T(E),e.shiftKey||(n((0,y.Iv)("background")),n((0,y.x_)())))})),U=(0,o.ZP)((function(e){if("background"===I){var t=(0,A.yK)(e),r=t.x,i=t.y;n((0,f.FL)({x:O.x+(j.x-r)*b/100,y:O.y+(j.y-i)*b/100}))}})),J=(0,o.ZP)((function(e){"background"!==I||e.shiftKey||n((0,y.Iv)(void 0))})),B=(0,o.ZP)((function(e){var t=b;e.deltaY>0&&b+10<400?t=b+10:e.deltaY<0&&b-10>0&&(t=b-10),n((0,f.u4)(t));var r=(0,A.yK)(e),i=r.x,u=r.y,o=e.currentTarget.getBoundingClientRect(),c=i/o.width,s=u/o.height;n((0,f.FL)({x:E.x+i*b/100-H*t/100*c,y:E.y+u*b/100-G*t/100*s}))})),F=(0,o.ZP)((function(e){if("Delete"===e.key)S.length>0&&S.filter((function(e){return p.current.hasNode(e)||p.current.hasEdge(e)})).forEach((function(e){n((0,y.x_)()),p.current.hasNode(e)?p.current.dropNode(e):p.current.dropEdge(e),v()}));else if(e.key.startsWith("Arrow")){var t=e.key.endsWith("Left")?-1:e.key.endsWith("Right")?1:0,r=e.key.endsWith("Up")?-1:e.key.endsWith("Down")?1:0;n((0,f.FL)({x:E.x+100*b/100*t,y:E.y+100*b/100*r}))}else if("i"===e.key||"j"===e.key||"k"===e.key||"l"===e.key){var i=10*("j"===e.key?-1:"l"===e.key?1:0),u=10*("i"===e.key?-1:"k"===e.key?1:0);S.length>0&&S.filter((function(e){return p.current.hasNode(e)})).forEach((function(e){p.current.updateNodeAttribute(e,"x",(function(e){return(null!==e&&void 0!==e?e:0)+i})),p.current.updateNodeAttribute(e,"y",(function(e){return(null!==e&&void 0!==e?e:0)+u})),v()}))}else"f"===e.key&&k?n((0,y.PM)(k)):"z"===e.key&&e.ctrlKey?n((0,f.wK)()):"y"===e.key&&e.ctrlKey&&n((0,f.b)())})),Q=function(){var e=(0,u.useState)({width:void 0,height:void 0}),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,u.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),G=(null!==(e=Q.height)&&void 0!==e?e:1280)-40,H=(null!==(t=Q.width)&&void 0!==t?t:720)-50;return(0,x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:50},height:G,width:H,viewBox:"".concat(E.x," ").concat(E.y," ").concat(H*b/100," ").concat(G*b/100),onPointerDown:V,onPointerMove:U,onPointerUp:J,onWheel:B,tabIndex:0,onKeyDown:F,children:(0,x.jsx)(P,{})})}},3300:function(e,t,n){n.d(t,{Z9:function(){return i},fx:function(){return u},yK:function(){return r}});var r=function(e){var t=e.currentTarget.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}},i=function(e,t){return Math.round(e/t)*t},u=function(e){var t=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE],n=t[0],r=t[1],i=t[2],u=t[3];return e.forEachNode((function(e,t){n=Math.min(t.x,n),r=Math.min(t.y,r),i=Math.max(t.x,i),u=Math.max(t.y,u)})),{xMin:n-=150,yMin:r-=150,xMax:i+=150,yMax:u+=150}}},8617:function(e,t,n){var r=n(2791),i="undefined"!==typeof window?null!==r.useInsertionEffect&&void 0!==r.useInsertionEffect?r.useInsertionEffect:r.useLayoutEffect:function(){};function u(e){var t=(0,r.useRef)(o);i((function(){t.current=e}),[e]);var n=(0,r.useRef)(null);return n.current||(n.current=function(){return t.current.apply(this,arguments)}),n.current}function o(){throw new Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.")}t.ZP=u},2893:function(e,t,n){n.d(t,{U:function(){return c}});var r=n(1413),i=n(751),u=n(7872),o=n(184),c=(0,u.G)((function(e,t){return(0,o.jsx)(i.K,(0,r.Z)((0,r.Z)({align:"center"},e),{},{direction:"row",ref:t}))}));c.displayName="HStack"}}]);
//# sourceMappingURL=SvgWrapper.57c5d72a.chunk.js.map