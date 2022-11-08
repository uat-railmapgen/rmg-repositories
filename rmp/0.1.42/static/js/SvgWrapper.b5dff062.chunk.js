"use strict";(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[8423],{9490:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var r=n(4942),i=n(9439),u=n(2791),o=n(8617),c=n(5984),s=n(7339),a=n(3300),d=n(3671),f=n(5105),l=n(3433),y=n(1413),h=n(8817),x=n(6853),v=n(708),p=n(311),g=n(9599),Z=n(7762),m=n(1791),b=(0,y.Z)((0,y.Z)({},v.Z),g.Z),w=function(e){var t=function(e){var t,n=e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&""!==t.reconcileId})),r={},i=(0,Z.Z)(n);try{for(i.s();!(t=i.n()).done;){var u=t.value,o=e.getEdgeAttribute(u,"reconcileId");o in r?r[o].push(u):r[o]=[u]}}catch(c){i.e(c)}finally{i.f()}return r}(e),n=[],r=[];return Object.values(t).forEach((function(t){if(1!==t.length)if(t.every((function(t){return b[e.getEdgeAttribute(t,"type")].generatePath}))){var u={},o=new Set,c=new Set,s=Object.fromEntries(t.map((function(t){var n,r,s=e.extremities(t),a=(0,i.Z)(s,2),d=a[0],f=a[1];return u[d]=(null!==(n=u[d])&&void 0!==n?n:0)+1,u[f]=(null!==(r=u[f])&&void 0!==r?r:0)+1,o.add(d),c.add(f),[d,[t,f]]}))),a=Array.from(o).filter((function(e){return 1===u[e]})),d=Array.from(c).filter((function(e){return 1===u[e]}));if(1===a.length&&1===d.length){var f=a[0],y=d[0];if(f!==y){for(var h=[s[f][0]],x=s[f][1],v=1;v<t.length;v+=1){var p,g=null===(p=s[x])||void 0===p?void 0:p.at(1);if(!g)return void r.push.apply(r,(0,l.Z)(t));h.push(s[x][0]),x=g}x===y&&h.length===t.length?n.push(h):r.push.apply(r,(0,l.Z)(t))}else r.push.apply(r,(0,l.Z)(t))}else r.push.apply(r,(0,l.Z)(t))}else r.push.apply(r,(0,l.Z)(t));else r.push.apply(r,(0,l.Z)(t))})),{allReconciledLines:n,danglingLines:r}},N=function(e,t){if(!t.every((function(t){return e.hasEdge(t)})))return"";for(var n=t.map((function(t){var n,r=e.extremities(t),u=(0,i.Z)(r,2),o=u[0],c=u[1],s=e.getNodeAttributes(o),a=e.getNodeAttributes(c),d=e.getEdgeAttribute(t,"type"),f=null!==(n=e.getEdgeAttribute(t,d))&&void 0!==n?n:b[d].defaultAttrs;return v.Z[d].generatePath(s.x,a.x,s.y,a.y,f)})),r="".concat(n[0].d," "),u=1;u<t.length;u+=1)r+=n[u].d.replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return(0,m.p)(r,7.5,!1)},A=function(e){return e.filterNodes((function(e,t){return e.startsWith("stn")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},E=function(e){return e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("line")&&t.visible&&""===t.reconcileId})).map((function(t){var n=e.extremities(t),r=(0,i.Z)(n,2),u=r[0],o=r[1],c=e.getEdgeAttributes(t),s=e.getNodeAttributes(u),a=e.getNodeAttributes(o);return{edge:t,x1:s.x,y1:s.y,x2:a.x,y2:a.y,attr:c,type:c.type}}))},W=function(e){return e.filterNodes((function(e,t){return e.startsWith("misc_node")})).map((function(t){return[t,e.getNodeAttributes(t)]})).filter((function(e){var t=(0,i.Z)(e,2);t[0];return t[1].visible})).map((function(e){var t=(0,i.Z)(e,2),n=t[0],u=t[1];return(0,r.Z)({node:n,visible:u.visible,zIndex:u.zIndex,x:u.x,y:u.y,type:u.type},u.type,u[u.type])}))},P=function(e){return e.filterDirectedEdges((function(e,t,n,r,i,u,o){return e.startsWith("misc_edge")&&t.visible&&""===t.reconcileId})).map((function(t){var n=e.extremities(t),r=(0,i.Z)(n,2),u=r[0],o=r[1],c=e.getEdgeAttributes(t),s=e.getNodeAttributes(u),a=e.getNodeAttributes(o);return{edge:t,x1:s.x,y1:s.y,x2:a.x,y2:a.y,attr:c,type:c.type}}))},I=n(184),_=(0,y.Z)((0,y.Z)({},v.Z),g.Z),S=function(){var e=(0,s.u5)(),t=(0,s.Qy)((function(e){return e.runtime})),n=t.selected,g=t.refresh,Z=g.all,m=g.reconcileLine,b=t.mode,S=t.active,L=t.theme,M=(0,s.Qy)((function(e){return e.app})).svgViewBoxZoom,k=function(){e((0,d.n9)()),e((0,f.DR)(j.current.export()))},j=u.useRef(window.graph),D=u.useState({x:0,y:0}),K=(0,i.Z)(D,2),R=K[0],U=K[1],V=u.useState({x:0,y:0}),z=(0,i.Z)(V,2),O=z[0],C=z[1],F=(0,o.ZP)((function(t,r){r.stopPropagation();var i=r.currentTarget,u=(0,a.yK)(r),o=u.x,c=u.y;i.setPointerCapture(r.pointerId),U({x:o,y:c}),e((0,d.Iv)(t)),!r.shiftKey&&n.length<=1&&e((0,d.x_)()),e((0,d.Gv)(t))})),J=(0,o.ZP)((function(e,t){t.stopPropagation();var r=(0,a.yK)(t),i=r.x,u=r.y;"free"===b&&S===e?(n.forEach((function(e){j.current.updateNodeAttributes(e,(function(e){return(0,y.Z)((0,y.Z)({},e),{},{x:(0,a.Z9)(e.x-(R.x-i)*M/100,t.altKey?1:5),y:(0,a.Z9)(e.y-(R.y-u)*M/100,t.altKey?1:5)})}))})),k()):(b.startsWith("line")||b.startsWith("misc-edge"))&&C({x:(R.x-i)*M/100,y:(R.y-u)*M/100})})),B=(0,o.ZP)((function(t,n){if(n.stopPropagation(),b.startsWith("line")||b.startsWith("misc-edge")){e((0,d.PM)("free"));["stn_core_","virtual_circle_"].forEach((function(e){var t,i,u=null===(t=document.elementsFromPoint(n.clientX,n.clientY)[0].attributes)||void 0===t||null===(i=t.getNamedItem("id"))||void 0===i?void 0:i.value;if(null!==u&&void 0!==u&&u.startsWith(e)){var o,s=b.startsWith("line")?b.slice(5):b.slice(10),a="".concat(b.startsWith("line")?"line":"misc_edge","_").concat((0,c.x0)(10));j.current.addDirectedEdgeWithKey(a,S,u.slice(e.length),(o={visible:!0,zIndex:0,color:L,type:s},(0,r.Z)(o,s,JSON.parse(JSON.stringify(_[s].defaultAttrs))),(0,r.Z)(o,"reconcileId",""),o))}}))}else if("free"===b){var i=(0,a.yK)(n),u=i.x,o=i.y;R.x-u===0&&R.y-o===0&&e((0,d.Iv)(t))}e((0,d.Iv)(void 0)),k()})),Q=(0,o.ZP)((function(t,n){e((0,d.x_)()),e((0,d.Gv)(t))})),T=u.useState(A(j.current)),X=(0,i.Z)(T,2),Y=X[0],G=X[1],H=u.useState(E(j.current)),q=(0,i.Z)(H,2),$=q[0],ee=q[1],te=u.useState(W(j.current)),ne=(0,i.Z)(te,2),re=ne[0],ie=ne[1],ue=u.useState(P(j.current)),oe=(0,i.Z)(ue,2),ce=oe[0],se=oe[1],ae=u.useState([]),de=(0,i.Z)(ae,2),fe=de[0],le=de[1],ye=u.useState([]),he=(0,i.Z)(ye,2),xe=he[0],ve=he[1];u.useEffect((function(){G(A(j.current)),ee(E(j.current)),ie(W(j.current)),se(P(j.current))}),[Z]),u.useEffect((function(){var e=w(j.current),t=e.allReconciledLines,n=e.danglingLines;le(t),ve(n)}),[]),u.useEffect((function(){var e=w(j.current),t=e.allReconciledLines,n=e.danglingLines;le(t),ve(n)}),[m]);var pe=b.startsWith("line")||b.startsWith("misc-edge")?_[b.startsWith("line")?b.slice(5):b.slice(10)].component:function(e){return(0,I.jsx)(I.Fragment,{})};return(0,I.jsxs)(I.Fragment,{children:[xe.map((function(e){var t=v.Z[h.S.Simple].component,n=j.current.extremities(e),r=(0,i.Z)(n,2),u=r[0],o=r[1],c=j.current.getNodeAttributes(u),s=j.current.getNodeAttributes(o);return(0,I.jsx)(t,{id:e,x1:c.x,y1:c.y,x2:s.x,y2:s.y,newLine:!1,attrs:j.current.getEdgeAttributes(e),handleClick:Q},e)})),fe.map((function(e){var t=N(j.current,e);if(""===t)return(0,I.jsx)(I.Fragment,{});var n=j.current.getEdgeAttribute(e[0],"color");return(0,I.jsx)("path",{d:t,fill:"none",stroke:n[2],strokeWidth:5,strokeLinejoin:"round"},e.join(","))})),re.map((function(e){var t=e.node,n=e.x,r=e.y,i=e.type,u=p.Z[i].component;return(0,I.jsx)(u,{id:t,x:n,y:r,attrs:e[i],handlePointerDown:F,handlePointerMove:J,handlePointerUp:B},t)})),[].concat((0,l.Z)($),(0,l.Z)(ce)).map((function(e){var t=e.edge,n=e.x1,r=e.y1,i=e.x2,u=e.y2,o=e.attr,c=e.type,s=_[c].component;return(0,I.jsx)(s,{id:t,x1:n,y1:r,x2:i,y2:u,newLine:!1,attrs:o,handleClick:Q},t)})),Y.map((function(e){var t=e.node,n=e.x,i=e.y,u=e.type,o=x.Z[u].component;return(0,I.jsx)(o,{id:t,x:n,y:i,attrs:(0,r.Z)({},u,e[u]),handlePointerDown:F,handlePointerMove:J,handlePointerUp:B},t)})),(b.startsWith("line")||b.startsWith("misc-edge"))&&S&&(0,I.jsx)(pe,{id:"create_in_progress___no_use",x1:j.current.getNodeAttribute(S,"x"),y1:j.current.getNodeAttribute(S,"y"),x2:j.current.getNodeAttribute(S,"x")-O.x,y2:j.current.getNodeAttribute(S,"y")-O.y,newLine:!0,attrs:{visible:!0,zIndex:0,color:L,type:h.S.Diagonal,reconcileId:""}})]})},L=function(){var e,t,n=(0,s.u5)(),l=function(){n((0,d.n9)()),n((0,f.DR)(w.current.export()))},y=(0,s.Qy)((function(e){return e.runtime})),h=y.mode,v=y.active,g=y.selected,Z=(0,s.Qy)((function(e){return e.app})),m=Z.svgViewBoxZoom,b=Z.svgViewBoxMin,w=u.useRef(window.graph),N=u.useState({x:0,y:0}),A=(0,i.Z)(N,2),E=A[0],W=A[1],P=u.useState({x:0,y:0}),_=(0,i.Z)(P,2),L=_[0],M=_[1],k=(0,o.ZP)((function(e){var t=(0,a.yK)(e),i=t.x,u=t.y;if(h.startsWith("station")){n((0,d.PM)("free"));var o=(0,c.x0)(10),s=h.slice(8);w.current.addNode("stn_".concat(o),(0,r.Z)({visible:!0,zIndex:0,x:(0,a.Z9)(i*m/100+b.x,10),y:(0,a.Z9)(u*m/100+b.y,10),type:s},s,JSON.parse(JSON.stringify(x.Z[s].defaultAttrs)))),l()}else if(h.startsWith("misc-node")){n((0,d.PM)("free"));var f=(0,c.x0)(10),y=h.slice(10);w.current.addNode("misc_node_".concat(f),(0,r.Z)({visible:!0,zIndex:0,x:(0,a.Z9)(i*m/100+b.x,10),y:(0,a.Z9)(u*m/100+b.y,10),type:y},y,JSON.parse(JSON.stringify(p.Z[y].defaultAttrs)))),l()}else("free"===h||h.startsWith("line")||h.startsWith("misc-edge"))&&((h.startsWith("line")||h.startsWith("misc-edge"))&&n((0,d.PM)("free")),W({x:i,y:u}),M(b),e.shiftKey||(n((0,d.Iv)("background")),n((0,d.x_)())))})),j=(0,o.ZP)((function(e){if("background"===v){var t=(0,a.yK)(e),r=t.x,i=t.y;n((0,f.FL)({x:L.x+(E.x-r)*m/100,y:L.y+(E.y-i)*m/100}))}})),D=(0,o.ZP)((function(e){"background"!==v||e.shiftKey||n((0,d.Iv)(void 0))})),K=(0,o.ZP)((function(e){e.deltaY>0&&m+10<400?n((0,f.u4)(m+10)):e.deltaY<0&&m-10>0&&n((0,f.u4)(m-10))})),R=(0,o.ZP)((function(e){if("Delete"===e.key)g.length>0&&g.filter((function(e){return w.current.hasNode(e)||w.current.hasEdge(e)})).forEach((function(e){n((0,d.x_)()),w.current.hasNode(e)?w.current.dropNode(e):w.current.dropEdge(e),l()}));else if(e.key.startsWith("Arrow")){var t=e.key.endsWith("Left")?-1:e.key.endsWith("Right")?1:0,r=e.key.endsWith("Up")?-1:e.key.endsWith("Down")?1:0;n((0,f.FL)({x:b.x+100*m/100*t,y:b.y+100*m/100*r}))}})),U=function(){var e=(0,u.useState)({width:void 0,height:void 0}),t=(0,i.Z)(e,2),n=t[0],r=t[1];return(0,u.useEffect)((function(){function e(){r({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n}(),V=(null!==(e=U.height)&&void 0!==e?e:1280)-40,z=(null!==(t=U.width)&&void 0!==t?t:720)-50;return(0,I.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",height:V,width:z,viewBox:"".concat(b.x," ").concat(b.y," ").concat(z*m/100," ").concat(V*m/100," "),onPointerDown:k,onPointerMove:j,onPointerUp:D,onWheel:K,tabIndex:0,onKeyDown:R,children:(0,I.jsx)(S,{})})}},3300:function(e,t,n){n.d(t,{Z9:function(){return i},fx:function(){return u},yK:function(){return r}});var r=function(e){var t=e.currentTarget.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}},i=function(e,t){return Math.round(e/t)*t},u=function(e){var t=[Number.MAX_VALUE,Number.MAX_VALUE,Number.MIN_VALUE,Number.MIN_VALUE],n=t[0],r=t[1],i=t[2],u=t[3];return e.forEachNode((function(e,t){n=Math.min(t.x,n),r=Math.min(t.y,r),i=Math.max(t.x,i),u=Math.max(t.y,u)})),{xMin:n-=150,yMin:r-=150,xMax:i+=150,yMax:u+=150}}},8617:function(e,t,n){var r=n(2791),i="undefined"!==typeof window?r.useLayoutEffect:function(){};function u(e){var t=r.useRef(o);i((function(){t.current=e}),[e]);var n=r.useRef(null);return n.current||(n.current=function(){return t.current.apply(this,arguments)}),n.current}function o(){throw new Error("INVALID_USEEVENT_INVOCATION: the callback from useEvent cannot be invoked before the component has mounted.")}t.ZP=u},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=SvgWrapper.b5dff062.chunk.js.map