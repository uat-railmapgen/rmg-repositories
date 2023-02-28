"use strict";(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[8423],{1740:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(4942),i=n(9439),u=n(2791),o=n(8617),s=n(5984),c=n(7339),a=n(3671),l=n(8284),d=n(1413),f=n(8817),y=n(1580),p=n(6255),v=n(184),g=function(e){var t=e.id,n=e.type,r=e.attrs,o=e.styleType,s=e.styleAttrs,c=void 0===s?p.b[o].defaultAttrs:s,a=e.newLine,l=e.handleClick,d=e.x1,f=e.y1,y=e.x2,g=e.y2,h=u.useState("M 0,0 L 0,0"),x=(0,i.Z)(h,2),m=x[0],Z=x[1];u.useEffect((function(){Z(p.V[n].generatePath(d,y,f,g,r))}),[n,JSON.stringify(r),d,y,f,g]);var b=p.b[o].component;return u.useMemo((function(){return(0,v.jsx)(b,{id:t,type:n,path:m,styleAttrs:c,newLine:a,handleClick:l})}),[t,n,m,o,JSON.stringify(c),a,l])},h=n(6882),x=n(3300),m=n(3433),Z=n(7762),b=function(e){var t=function(e){var t,n=e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&""!==t.reconcileId})),r={},i=(0,Z.Z)(n);try{for(i.s();!(t=i.n()).done;){var u=t.value,o=e.getEdgeAttribute(u,"reconcileId");o in r?r[o].push(u):r[o]=[u]}}catch(s){i.e(s)}finally{i.f()}return r}(e),n=[],r=[];return Object.values(t).forEach((function(t){if(1!==t.length){var u=e.getEdgeAttribute(t.at(0),"type");if(t.every((function(t){return e.getEdgeAttribute(t,"type")===u}))){var o=e.getEdgeAttribute(t.at(0),"style");if(t.every((function(t){return e.getEdgeAttribute(t,"style")===o}))){var s={},c=new Set,a=new Set,l=Object.fromEntries(t.map((function(t){var n,r,u=e.extremities(t),o=(0,i.Z)(u,2),l=o[0],d=o[1];return s[l]=(null!==(n=s[l])&&void 0!==n?n:0)+1,s[d]=(null!==(r=s[d])&&void 0!==r?r:0)+1,c.add(l),a.add(d),[l,[t,d]]}))),d=Array.from(c).filter((function(e){return 1===s[e]})),f=Array.from(a).filter((function(e){return 1===s[e]}));if(1===d.length&&1===f.length){var y=d[0],p=f[0];if(y!==p){for(var v=[l[y][0]],g=l[y][1],h=1;h<t.length;h+=1){var x,Z=null===(x=l[g])||void 0===x?void 0:x.at(1);if(!Z)return void r.push.apply(r,(0,m.Z)(t));v.push(l[g][0]),g=Z}g===p&&v.length===t.length?n.push(v):r.push.apply(r,(0,m.Z)(t))}else r.push.apply(r,(0,m.Z)(t))}else r.push.apply(r,(0,m.Z)(t))}else r.push.apply(r,(0,m.Z)(t))}else r.push.apply(r,(0,m.Z)(t))}else r.push.apply(r,(0,m.Z)(t))})),{allReconciledLines:n,danglingLines:r}},A=function(e){return e.filterNodes((function(e,t){return e.startsWith("stn")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},E=function(e){return e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&t.visible&&""===t.reconcileId})).map((function(t){var n=e.extremities(t),r=(0,i.Z)(n,2),u=r[0],o=r[1],s=e.getNodeAttributes(u),c=e.getNodeAttributes(o),a=e.getEdgeAttribute(t,"type"),l=e.getEdgeAttribute(t,a),d=e.getEdgeAttribute(t,"style"),f=e.getEdgeAttribute(t,d);return{edge:t,x1:s.x,y1:s.y,x2:c.x,y2:c.y,type:a,attr:l,style:d,styleAttr:f}}))},w=function(e){return e.filterNodes((function(e,t){return e.startsWith("misc_node")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},N=function(){var e=(0,c.u5)(),t=(0,c.Qy)((function(e){return e.runtime})),n=t.selected,m=t.refresh,Z=m.nodes,N=m.edges,P=t.mode,I=t.active,S=t.theme,L=(0,c.Qy)((function(e){return e.param})).svgViewBoxZoom,M=u.useRef(window.graph),_=u.useState({x:0,y:0}),W=(0,i.Z)(_,2),k=W[0],V=W[1],R=u.useState({x:0,y:0}),C=(0,i.Z)(R,2),j=C[0],K=C[1],D=(0,o.ZP)((function(t,r){r.stopPropagation();var i=r.currentTarget,u=(0,x.yK)(r),o=u.x,s=u.y;i.setPointerCapture(r.pointerId),V({x:o,y:s}),e((0,a.Iv)(t)),!r.shiftKey&&n.length<=1&&e((0,a.x_)()),e((0,a.Gv)(t))})),O=(0,o.ZP)((function(t,r){r.stopPropagation();var i=(0,x.yK)(r),u=i.x,o=i.y;"free"===P&&I===t?(n.forEach((function(e){M.current.updateNodeAttributes(e,(function(e){return(0,d.Z)((0,d.Z)({},e),{},{x:(0,x.Z9)(e.x-(k.x-u)*L/100,r.altKey?1:5),y:(0,x.Z9)(e.y-(k.y-o)*L/100,r.altKey?1:5)})}))})),e((0,a.ML)()),e((0,a.lH)())):P.startsWith("line")&&K({x:(k.x-u)*L/100,y:(k.y-o)*L/100})})),z=(0,o.ZP)((function(t,n){if(n.stopPropagation(),P.startsWith("line")||P.startsWith("misc-edge")){e((0,a.PM)("free"));["stn_core_","virtual_circle_"].forEach((function(e){var t,i,u=null===(t=document.elementsFromPoint(n.clientX,n.clientY)[0].attributes)||void 0===t||null===(i=t.getNamedItem("id"))||void 0===i?void 0:i.value;if(null!==u&&void 0!==u&&u.startsWith(e)){var o,c=P.slice(5),a="line_".concat((0,s.x0)(10));M.current.addDirectedEdgeWithKey(a,I,u.slice(e.length),(o={visible:!0,zIndex:0,type:c},(0,r.Z)(o,c,JSON.parse(JSON.stringify(p.V[c].defaultAttrs))),(0,r.Z)(o,"style",f.R.SingleColor),(0,r.Z)(o,f.R.SingleColor,{color:S}),(0,r.Z)(o,"reconcileId",""),o))}}))}else if("free"===P){var i=(0,x.yK)(n),u=i.x,o=i.y;k.x-u===0&&k.y-o===0&&e((0,a.Iv)(t))}e((0,a.Iv)(void 0)),e((0,a.ML)()),e((0,a.lH)()),e((0,l.DR)(M.current.export()))})),U=(0,o.ZP)((function(t,n){e((0,a.x_)()),e((0,a.Gv)(t))})),J=u.useState(A(M.current)),T=(0,i.Z)(J,2),B=T[0],F=T[1],H=u.useState(E(M.current)),Q=(0,i.Z)(H,2),X=Q[0],Y=Q[1],G=u.useState(w(M.current)),q=(0,i.Z)(G,2),$=q[0],ee=q[1],te=u.useState([]),ne=(0,i.Z)(te,2),re=ne[0],ie=ne[1],ue=u.useState([]),oe=(0,i.Z)(ue,2),se=oe[0],ce=oe[1];return u.useEffect((function(){F(A(M.current)),Y(E(M.current)),ee(w(M.current))}),[Z]),u.useEffect((function(){Y(E(M.current));var e=b(M.current),t=e.allReconciledLines,n=e.danglingLines;ie(t),ce(n)}),[]),u.useEffect((function(){Y(E(M.current));var e=b(M.current),t=e.allReconciledLines,n=e.danglingLines;ie(t),ce(n)}),[N]),(0,v.jsxs)(v.Fragment,{children:[$.map((function(e){var t=e.node,n=e.x,r=e.y,i=e.type,u=h.Z[i].component;return(0,v.jsx)(u,{id:t,x:n,y:r,attrs:e[i],handlePointerDown:D,handlePointerMove:O,handlePointerUp:z},t)})),se.map((function(e){var t=M.current.extremities(e),n=(0,i.Z)(t,2),r=n[0],u=n[1],o=M.current.getNodeAttributes(r),s=M.current.getNodeAttributes(u);return(0,v.jsx)(g,{id:e,x1:o.x,y1:o.y,x2:s.x,y2:s.y,newLine:!1,type:f.y.Simple,attrs:p.V[f.y.Simple].defaultAttrs,styleType:f.R.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:U},e)})),re.map((function(e){var t=function(e,t){if(t.every((function(t){return e.hasEdge(t)}))){for(var n=t.map((function(t){var n,r=e.extremities(t),u=(0,i.Z)(r,2),o=u[0],s=u[1],c=e.getNodeAttributes(o),a=e.getNodeAttributes(s),l=e.getEdgeAttribute(t,"type"),d=null!==(n=e.getEdgeAttribute(t,l))&&void 0!==n?n:p.V[l].defaultAttrs;return p.V[l].generatePath(c.x,a.x,c.y,a.y,d)})),r="".concat(n[0]," "),u=1;u<t.length;u+=1)r+=n[u].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return r}}(M.current,e);if(!t)return(0,v.jsx)(v.Fragment,{});var n=e.at(0),r=M.current.getEdgeAttribute(n,"type"),u=M.current.getEdgeAttribute(n,"style"),o=M.current.getEdgeAttribute(n,u),s=p.b[u].component;return(0,v.jsx)(s,{id:n,type:r,path:t,styleAttrs:o,newLine:!1,handleClick:U},n)})),X.map((function(e){var t=e.edge,n=e.x1,r=e.y1,i=e.x2,u=e.y2,o=e.type,s=e.attr,c=e.style,a=e.styleAttr;return(0,v.jsx)(g,{id:t,x1:n,y1:r,x2:i,y2:u,newLine:!1,type:o,attrs:s,styleType:c,styleAttrs:a,handleClick:U},t)})),B.map((function(e){var t=e.node,n=e.x,i=e.y,u=e.type,o=y.Z[u].component;return(0,v.jsx)(o,{id:t,x:n,y:i,attrs:(0,r.Z)({},u,e[u]),handlePointerDown:D,handlePointerMove:O,handlePointerUp:z},t)})),P.startsWith("line")&&I&&(0,v.jsx)(g,{id:"create_in_progress___no_use",x1:M.current.getNodeAttribute(I,"x"),y1:M.current.getNodeAttribute(I,"y"),x2:M.current.getNodeAttribute(I,"x")-j.x,y2:M.current.getNodeAttribute(I,"y")-j.y,newLine:!0,type:P.slice(5),attrs:p.V[P.slice(5)].defaultAttrs,styleType:f.R.SingleColor,styleAttrs:{color:S}})]})},P=function(){var e,t,n=(0,c.u5)(),d=function(){n((0,a.ML)()),n((0,a.lH)()),n((0,l.DR)(w.current.export()))},f=(0,c.Qy)((function(e){return e.runtime})),p=f.mode,g=f.active,m=f.selected,Z=f.theme,b=(0,c.Qy)((function(e){return e.param})),A=b.svgViewBoxZoom,E=b.svgViewBoxMin,w=u.useRef(window.graph),P=u.useState({x:0,y:0}),I=(0,i.Z)(P,2),S=I[0],L=I[1],M=u.useState({x:0,y:0}),_=(0,i.Z)(M,2),W=_[0],k=_[1],V=(0,o.ZP)((function(e){var t=(0,x.yK)(e),i=t.x,u=t.y;if(p.startsWith("station")){n((0,a.PM)("free"));var o=(0,s.x0)(10),c=p.slice(8),l=JSON.parse(JSON.stringify(y.Z[c].defaultAttrs));"color"in l&&(l.color=Z),w.current.addNode("stn_".concat(o),(0,r.Z)({visible:!0,zIndex:0,x:(0,x.Z9)(i*A/100+E.x,10),y:(0,x.Z9)(u*A/100+E.y,10),type:c},c,l)),d()}else if(p.startsWith("misc-node")){n((0,a.PM)("free"));var f=(0,s.x0)(10),v=p.slice(10);w.current.addNode("misc_node_".concat(f),(0,r.Z)({visible:!0,zIndex:0,x:(0,x.Z9)(i*A/100+E.x,10),y:(0,x.Z9)(u*A/100+E.y,10),type:v},v,JSON.parse(JSON.stringify(h.Z[v].defaultAttrs)))),d()}else("free"===p||p.startsWith("line"))&&(p.startsWith("line")&&n((0,a.PM)("free")),L({x:i,y:u}),k(E),e.shiftKey||(n((0,a.Iv)("background")),n((0,a.x_)())))})),R=(0,o.ZP)((function(e){if("background"===g){var t=(0,x.yK)(e),r=t.x,i=t.y;n((0,l.FL)({x:W.x+(S.x-r)*A/100,y:W.y+(S.y-i)*A/100}))}})),C=(0,o.ZP)((function(e){"background"!==g||e.shiftKey||n((0,a.Iv)(void 0))})),j=(0,o.ZP)((function(e){e.deltaY>0&&A+10<400?n((0,l.u4)(A+10)):e.deltaY<0&&A-10>0&&n((0,l.u4)(A-10))})),K=(0,o.ZP)((function(e){if("Delete"===e.key)m.length>0&&m.filter((function(e){return w.current.hasNode(e)||w.current.hasEdge(e)})).forEach((function(e){n((0,a.x_)()),w.current.hasNode(e)?w.current.dropNode(e):w.current.dropEdge(e),d()}));else if(e.key.startsWith("Arrow")){var t=e.key.endsWith("Left")?-1:e.key.endsWith("Right")?1:0,r=e.key.endsWith("Up")?-1:e.key.endsWith("Down")?1:0;n((0,l.FL)({x:E.x+100*A/100*t,y:E.y+100*A/100*r}))}})),D=function(){var e=(0,u.useState)({width:void 0,height:void 0}),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,u.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),O=(null!==(e=D.height)&&void 0!==e?e:1280)-40,z=(null!==(t=D.width)&&void 0!==t?t:720)-50;return(0,v.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",height:O,width:z,viewBox:"".concat(E.x," ").concat(E.y," ").concat(z*A/100," ").concat(O*A/100," "),onPointerDown:V,onPointerMove:R,onPointerUp:C,onWheel:j,tabIndex:0,onKeyDown:K,children:(0,v.jsx)(N,{})})}},3300:function(e,t,n){n.d(t,{Z9:function(){return i},fx:function(){return u},yK:function(){return r}});var r=function(e){var t=e.currentTarget.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}},i=function(e,t){return Math.round(e/t)*t},u=function(e){var t=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE],n=t[0],r=t[1],i=t[2],u=t[3];return e.forEachNode((function(e,t){n=Math.min(t.x,n),r=Math.min(t.y,r),i=Math.max(t.x,i),u=Math.max(t.y,u)})),{xMin:n-=150,yMin:r-=150,xMax:i+=150,yMax:u+=150}}},8617:function(e,t,n){var r=n(2791),i="undefined"!==typeof window?null!==r.useInsertionEffect&&void 0!==r.useInsertionEffect?r.useInsertionEffect:r.useLayoutEffect:function(){};function u(e){var t=(0,r.useRef)(o);i((function(){t.current=e}),[e]);var n=(0,r.useRef)(null);return n.current||(n.current=function(){return t.current.apply(this,arguments)}),n.current}function o(){throw new Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.")}t.ZP=u}}]);
//# sourceMappingURL=SvgWrapper.dea91db7.chunk.js.map