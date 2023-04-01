"use strict";(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[8423],{1740:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(4942),i=n(9439),u=n(2791),o=n(8617),c=n(5984),s=n(924),a=n(713),l=n(7339),d=n(8284),f=n(3671),y=n(1413),p=n(8817),v=n(3649),h=n(7599),g=n(184),x=function(e){var t=e.id,n=e.type,r=e.attrs,o=e.styleType,c=e.styleAttrs,s=void 0===c?h.b[o].defaultAttrs:c,a=e.newLine,l=e.handleClick,d=e.x1,f=e.y1,y=e.x2,p=e.y2,v=u.useState("M 0,0 L 0,0"),x=(0,i.Z)(v,2),m=x[0],Z=x[1];u.useEffect((function(){Z(h.V[n].generatePath(d,y,f,p,r))}),[n,JSON.stringify(r),d,y,f,p]);var A=h.b[o].component;return u.useMemo((function(){return(0,g.jsx)(A,{id:t,type:n,path:m,styleAttrs:s,newLine:a,handleClick:l})}),[t,n,m,o,JSON.stringify(s),a,l])},m=n(6882),Z=n(3300),A=n(3433),b=n(7762),E=function(e){var t=function(e){var t,n=e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&""!==t.reconcileId})),r={},i=(0,b.Z)(n);try{for(i.s();!(t=i.n()).done;){var u=t.value,o=e.getEdgeAttribute(u,"reconcileId");o in r?r[o].push(u):r[o]=[u]}}catch(c){i.e(c)}finally{i.f()}return r}(e),n=[],r=[];return Object.values(t).forEach((function(t){if(1!==t.length){var u=e.getEdgeAttribute(t.at(0),"type");if(t.every((function(t){return e.getEdgeAttribute(t,"type")===u}))){var o=e.getEdgeAttribute(t.at(0),"style");if(t.every((function(t){return e.getEdgeAttribute(t,"style")===o}))){var c={},s=new Set,a=new Set,l=Object.fromEntries(t.map((function(t){var n,r,u=e.extremities(t),o=(0,i.Z)(u,2),l=o[0],d=o[1];return c[l]=(null!==(n=c[l])&&void 0!==n?n:0)+1,c[d]=(null!==(r=c[d])&&void 0!==r?r:0)+1,s.add(l),a.add(d),[l,[t,d]]}))),d=Array.from(s).filter((function(e){return 1===c[e]})),f=Array.from(a).filter((function(e){return 1===c[e]}));if(1===d.length&&1===f.length){var y=d[0],p=f[0];if(y!==p){for(var v=[l[y][0]],h=l[y][1],g=1;g<t.length;g+=1){var x,m=null===(x=l[h])||void 0===x?void 0:x.at(1);if(!m)return void r.push.apply(r,(0,A.Z)(t));v.push(l[h][0]),h=m}h===p&&v.length===t.length?n.push(v):r.push.apply(r,(0,A.Z)(t))}else r.push.apply(r,(0,A.Z)(t))}else r.push.apply(r,(0,A.Z)(t))}else r.push.apply(r,(0,A.Z)(t))}else r.push.apply(r,(0,A.Z)(t))}else r.push.apply(r,(0,A.Z)(t))})),{allReconciledLines:n,danglingLines:r}},w=function(e){return e.filterNodes((function(e,t){return e.startsWith("stn")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},N=function(e){return e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&t.visible&&""===t.reconcileId})).map((function(t){var n=e.extremities(t),r=(0,i.Z)(n,2),u=r[0],o=r[1],c=e.getNodeAttributes(u),s=e.getNodeAttributes(o),a=e.getEdgeAttribute(t,"type"),l=e.getEdgeAttribute(t,a),d=e.getEdgeAttribute(t,"style"),f=e.getEdgeAttribute(t,d);return{edge:t,x1:c.x,y1:c.y,x2:s.x,y2:s.y,type:a,attr:l,style:d,styleAttr:f}}))},k=function(e){return e.filterNodes((function(e,t){return e.startsWith("misc_node")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},P=function(){var e=(0,l.u5)(),t=u.useRef(window.graph),n=(0,l.Qy)((function(e){return e.app})).telemetry.project,A=(0,l.Qy)((function(e){return e.param})).svgViewBoxZoom,b=(0,l.Qy)((function(e){return e.runtime})),P=b.selected,S=b.refresh,I=S.nodes,L=S.edges,M=b.mode,_=b.active,W=b.keepLastPath,D=b.theme,j=u.useState({x:0,y:0}),K=(0,i.Z)(j,2),R=K[0],V=K[1],C=u.useState({x:0,y:0}),O=(0,i.Z)(C,2),T=O[0],z=O[1],U=(0,o.ZP)((function(t,n){n.stopPropagation();var r=n.currentTarget,i=(0,Z.yK)(n),u=i.x,o=i.y;r.setPointerCapture(n.pointerId),V({x:u,y:o}),e((0,f.Iv)(t)),!n.shiftKey&&P.length<=1&&e((0,f.x_)()),e((0,f.Gv)(t))})),J=(0,o.ZP)((function(n,r){r.stopPropagation();var i=(0,Z.yK)(r),u=i.x,o=i.y;"free"===M&&_===n?(P.forEach((function(e){t.current.updateNodeAttributes(e,(function(e){return(0,y.Z)((0,y.Z)({},e),{},{x:(0,Z.Z9)(e.x-(R.x-u)*A/100,r.altKey?1:5),y:(0,Z.Z9)(e.y-(R.y-o)*A/100,r.altKey?1:5)})}))})),e((0,f.ML)()),e((0,f.lH)())):M.startsWith("line")&&z({x:(R.x-u)*A/100,y:(R.y-o)*A/100})})),B=(0,o.ZP)((function(i,u){if(u.stopPropagation(),M.startsWith("line")||M.startsWith("misc-edge")){W||e((0,f.PM)("free"));["stn_core_","virtual_circle_"].forEach((function(e){var i,o,l=null===(i=document.elementsFromPoint(u.clientX,u.clientY)[0].attributes)||void 0===i||null===(o=i.getNamedItem("id"))||void 0===o?void 0:o.value;if(null!==l&&void 0!==l&&l.startsWith(e)){var d,f=M.slice(5),y="line_".concat((0,c.x0)(10));t.current.addDirectedEdgeWithKey(y,_,l.slice(e.length),(d={visible:!0,zIndex:0,type:f},(0,r.Z)(d,f,JSON.parse(JSON.stringify(h.V[f].defaultAttrs))),(0,r.Z)(d,"style",p.R.SingleColor),(0,r.Z)(d,p.R.SingleColor,{color:D}),(0,r.Z)(d,"reconcileId",""),d)),n&&s.ZP.event(a.zW.ADD_LINE,{type:f})}})),e((0,f.lH)()),e((0,d.DR)(t.current.export()))}else if("free"===M)if(_){var o=(0,Z.yK)(u),l=o.x,y=o.y;R.x-l===0&&R.y-y===0?e((0,f.Gv)(i)):e((0,d.DR)(t.current.export()))}else e((0,f.Gv)(i));e((0,f.Iv)(void 0))})),F=(0,o.ZP)((function(t,n){e((0,f.x_)()),e((0,f.Gv)(t))})),Q=u.useState(w(t.current)),G=(0,i.Z)(Q,2),H=G[0],X=G[1],Y=u.useState(k(t.current)),q=(0,i.Z)(Y,2),$=q[0],ee=q[1],te=u.useState(N(t.current)),ne=(0,i.Z)(te,2),re=ne[0],ie=ne[1],ue=u.useState([]),oe=(0,i.Z)(ue,2),ce=oe[0],se=oe[1],ae=u.useState([]),le=(0,i.Z)(ae,2),de=le[0],fe=le[1];return u.useEffect((function(){X(w(t.current)),ee(k(t.current))}),[I]),u.useEffect((function(){ie(N(t.current));var e=E(t.current),n=e.allReconciledLines,r=e.danglingLines;se(n),fe(r)}),[]),u.useEffect((function(){ie(N(t.current));var e=E(t.current),n=e.allReconciledLines,r=e.danglingLines;se(n),fe(r)}),[L]),(0,g.jsxs)(g.Fragment,{children:[de.map((function(e){var n=t.current.extremities(e),r=(0,i.Z)(n,2),u=r[0],o=r[1],c=t.current.getNodeAttributes(u),s=t.current.getNodeAttributes(o);return(0,g.jsx)(x,{id:e,x1:c.x,y1:c.y,x2:s.x,y2:s.y,newLine:!1,type:p.y.Simple,attrs:h.V[p.y.Simple].defaultAttrs,styleType:p.R.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:F},e)})),ce.map((function(e){var n=function(e,t){if(t.every((function(t){return e.hasEdge(t)}))){for(var n=t.map((function(t){var n,r=e.extremities(t),u=(0,i.Z)(r,2),o=u[0],c=u[1],s=e.getNodeAttributes(o),a=e.getNodeAttributes(c),l=e.getEdgeAttribute(t,"type"),d=null!==(n=e.getEdgeAttribute(t,l))&&void 0!==n?n:h.V[l].defaultAttrs;return h.V[l].generatePath(s.x,a.x,s.y,a.y,d)})),r="".concat(n[0]," "),u=1;u<t.length;u+=1)r+=n[u].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return r}}(t.current,e);if(!n)return(0,g.jsx)(g.Fragment,{});var r=e.at(0),u=t.current.getEdgeAttribute(r,"type"),o=t.current.getEdgeAttribute(r,"style"),c=t.current.getEdgeAttribute(r,o),s=h.b[o].component;return(0,g.jsx)(s,{id:r,type:u,path:n,styleAttrs:c,newLine:!1,handleClick:F},r)})),re.map((function(e){var t=e.edge,n=e.x1,r=e.y1,i=e.x2,u=e.y2,o=e.type,c=e.attr,s=e.style,a=e.styleAttr;return(0,g.jsx)(x,{id:t,x1:n,y1:r,x2:i,y2:u,newLine:!1,type:o,attrs:c,styleType:s,styleAttrs:a,handleClick:F},t)})),$.map((function(e){var t=e.node,n=e.x,r=e.y,i=e.type,u=m.Z[i].component;return(0,g.jsx)(u,{id:t,x:n,y:r,attrs:e[i],handlePointerDown:U,handlePointerMove:J,handlePointerUp:B},t)})),H.map((function(e){var t=e.node,n=e.x,i=e.y,u=e.type,o=v.Z[u].component;return(0,g.jsx)(o,{id:t,x:n,y:i,attrs:(0,r.Z)({},u,e[u]),handlePointerDown:U,handlePointerMove:J,handlePointerUp:B},t)})),M.startsWith("line")&&_&&(0,g.jsx)(x,{id:"create_in_progress___no_use",x1:t.current.getNodeAttribute(_,"x"),y1:t.current.getNodeAttribute(_,"y"),x2:t.current.getNodeAttribute(_,"x")-T.x,y2:t.current.getNodeAttribute(_,"y")-T.y,newLine:!0,type:M.slice(5),attrs:h.V[M.slice(5)].defaultAttrs,styleType:p.R.SingleColor,styleAttrs:{color:D}})]})},S=function(){var e,t,n=(0,l.u5)(),y=u.useRef(window.graph),p=function(){n((0,f.ML)()),n((0,f.lH)()),n((0,d.DR)(y.current.export()))},h=(0,l.Qy)((function(e){return e.app})).telemetry.project,x=(0,l.Qy)((function(e){return e.param})),A=x.svgViewBoxZoom,b=x.svgViewBoxMin,E=(0,l.Qy)((function(e){return e.runtime})),w=E.mode,N=E.lastTool,k=E.active,S=E.selected,I=E.keepLastPath,L=E.theme,M=u.useState({x:0,y:0}),_=(0,i.Z)(M,2),W=_[0],D=_[1],j=u.useState({x:0,y:0}),K=(0,i.Z)(j,2),R=K[0],V=K[1],C=(0,o.ZP)((function(e){var t=(0,Z.yK)(e),i=t.x,u=t.y;if(w.startsWith("station")){n((0,f.PM)("free"));var o=(0,c.x0)(10),l=w.slice(8),d=JSON.parse(JSON.stringify(v.Z[l].defaultAttrs));"color"in d&&(d.color=L),y.current.addNode("stn_".concat(o),(0,r.Z)({visible:!0,zIndex:0,x:(0,Z.Z9)(i*A/100+b.x,10),y:(0,Z.Z9)(u*A/100+b.y,10),type:l},l,d)),p(),h&&s.ZP.event(a.zW.ADD_STATION,{type:l})}else if(w.startsWith("misc-node")){n((0,f.PM)("free"));var g=(0,c.x0)(10),x=w.slice(10);y.current.addNode("misc_node_".concat(g),(0,r.Z)({visible:!0,zIndex:0,x:(0,Z.Z9)(i*A/100+b.x,10),y:(0,Z.Z9)(u*A/100+b.y,10),type:x},x,JSON.parse(JSON.stringify(m.Z[x].defaultAttrs)))),p(),h&&s.ZP.event(a.zW.ADD_STATION,{type:x})}else("free"===w||w.startsWith("line"))&&(w.startsWith("line")&&(n((0,f.PM)("free")),I&&n((0,f.Mm)(!1))),D({x:i,y:u}),V(b),e.shiftKey||(n((0,f.Iv)("background")),n((0,f.x_)())))})),O=(0,o.ZP)((function(e){if("background"===k){var t=(0,Z.yK)(e),r=t.x,i=t.y;n((0,d.FL)({x:R.x+(W.x-r)*A/100,y:R.y+(W.y-i)*A/100}))}})),T=(0,o.ZP)((function(e){"background"!==k||e.shiftKey||n((0,f.Iv)(void 0))})),z=(0,o.ZP)((function(e){var t=A;e.deltaY>0&&A+10<400?t=A+10:e.deltaY<0&&A-10>0&&(t=A-10),n((0,d.u4)(t));var r=(0,Z.yK)(e),i=r.x,u=r.y,o=e.currentTarget.getBoundingClientRect(),c=i/o.width,s=u/o.height;n((0,d.FL)({x:b.x+i*A/100-F*t/100*c,y:b.y+u*A/100-B*t/100*s}))})),U=(0,o.ZP)((function(e){if("Delete"===e.key)S.length>0&&S.filter((function(e){return y.current.hasNode(e)||y.current.hasEdge(e)})).forEach((function(e){n((0,f.x_)()),y.current.hasNode(e)?y.current.dropNode(e):y.current.dropEdge(e),p()}));else if(e.key.startsWith("Arrow")){var t=e.key.endsWith("Left")?-1:e.key.endsWith("Right")?1:0,r=e.key.endsWith("Up")?-1:e.key.endsWith("Down")?1:0;n((0,d.FL)({x:b.x+100*A/100*t,y:b.y+100*A/100*r}))}else if("i"===e.key||"j"===e.key||"k"===e.key||"l"===e.key){var i=10*("j"===e.key?-1:"l"===e.key?1:0),u=10*("i"===e.key?-1:"k"===e.key?1:0);S.length>0&&S.filter((function(e){return y.current.hasNode(e)})).forEach((function(e){y.current.updateNodeAttribute(e,"x",(function(e){return(null!==e&&void 0!==e?e:0)+i})),y.current.updateNodeAttribute(e,"y",(function(e){return(null!==e&&void 0!==e?e:0)+u})),p()}))}else"f"===e.key&&N?n((0,f.PM)(N)):"z"===e.key&&e.ctrlKey?n((0,d.wK)()):"y"===e.key&&e.ctrlKey&&n((0,d.b)())})),J=function(){var e=(0,u.useState)({width:void 0,height:void 0}),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,u.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),B=(null!==(e=J.height)&&void 0!==e?e:1280)-40,F=(null!==(t=J.width)&&void 0!==t?t:720)-50;return(0,g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:50},height:B,width:F,viewBox:"".concat(b.x," ").concat(b.y," ").concat(F*A/100," ").concat(B*A/100),onPointerDown:C,onPointerMove:O,onPointerUp:T,onWheel:z,tabIndex:0,onKeyDown:U,children:(0,g.jsx)(P,{})})}},3300:function(e,t,n){n.d(t,{Z9:function(){return i},fx:function(){return u},yK:function(){return r}});var r=function(e){var t=e.currentTarget.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}},i=function(e,t){return Math.round(e/t)*t},u=function(e){var t=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE],n=t[0],r=t[1],i=t[2],u=t[3];return e.forEachNode((function(e,t){n=Math.min(t.x,n),r=Math.min(t.y,r),i=Math.max(t.x,i),u=Math.max(t.y,u)})),{xMin:n-=150,yMin:r-=150,xMax:i+=150,yMax:u+=150}}},8617:function(e,t,n){var r=n(2791),i="undefined"!==typeof window?null!==r.useInsertionEffect&&void 0!==r.useInsertionEffect?r.useInsertionEffect:r.useLayoutEffect:function(){};function u(e){var t=(0,r.useRef)(o);i((function(){t.current=e}),[e]);var n=(0,r.useRef)(null);return n.current||(n.current=function(){return t.current.apply(this,arguments)}),n.current}function o(){throw new Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.")}t.ZP=u},2893:function(e,t,n){n.d(t,{U:function(){return c}});var r=n(1413),i=n(751),u=n(7872),o=n(184),c=(0,u.G)((function(e,t){return(0,o.jsx)(i.K,(0,r.Z)((0,r.Z)({align:"center"},e),{},{direction:"row",ref:t}))}));c.displayName="HStack"}}]);
//# sourceMappingURL=SvgWrapper.6c8ad744.chunk.js.map