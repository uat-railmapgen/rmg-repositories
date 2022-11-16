"use strict";(self.webpackChunkrmp=self.webpackChunkrmp||[]).push([[5316],{7357:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(4942),i=n(3433),u=n(9439),o=n(1413),a=n(2791),l=n(2020),s=n(8735),c=n(2504),d=n(5984),f=n(2006),p=n(7339),h=n(5105),g=n(3671),v=n(8105),m=n(541),x=n(6853),b=n(311),y=n(708),N=n(9599),j=n(184);function E(){var e=(0,l.$)().t,t=(0,p.Qy)((function(e){return e.runtime})).selected,n=a.useRef(window.graph),r=[{type:"input",label:e("panel.details.info.id"),value:t.length>0?t.join(", "):"undefined",minW:276,onChange:function(e){}},{type:"input",label:e("panel.details.info.type"),value:1===t.length?n.current.hasNode(t.at(0))?n.current.getNodeAttribute(t.at(0),"type"):n.current.getEdgeAttribute(t.at(0),"type"):t.length>1?"multiple nodes":"undefined",minW:276,onChange:function(e){}}];return(0,j.jsxs)(s.xu,{p:1,children:[(0,j.jsx)(s.X6,{as:"h5",size:"sm",children:e("panel.details.info.title")}),(0,j.jsx)(f.M5,{fields:r,minW:130})]})}function A(){var e=(0,l.$)().t,t=(0,p.u5)(),n=a.useCallback((function(){t((0,g.n9)()),t((0,h.DR)(d.current.export()))}),[t,g.n9,h.DR]),r=(0,p.Qy)((function(e){return e.runtime})),i=r.selected,o=r.refresh.all,c=i.at(0),d=a.useRef(window.graph),v=a.useState({x:0,y:0}),m=(0,u.Z)(v,2),x=m[0],b=m[1];a.useEffect((function(){var e=i.at(0);if(null!==e&&void 0!==e&&e.startsWith("stn")||null!==e&&void 0!==e&&e.startsWith("misc_node_")){var t=d.current.getNodeAttribute(e,"x"),n=d.current.getNodeAttribute(e,"y");b({x:t,y:n})}}),[o,i]);var y=[{type:"input",label:e("panel.details.nodePosition.pos.x"),value:x.x.toString(),validator:function(e){return!Number.isNaN(e)},onChange:function(e){d.current.mergeNodeAttributes(c,{x:Number(e)}),n()}},{type:"input",label:e("panel.details.nodePosition.pos.y"),value:x.y.toString(),validator:function(e){return!Number.isNaN(e)},onChange:function(e){d.current.mergeNodeAttributes(c,{y:Number(e)}),n()}}];return(0,j.jsxs)(s.xu,{p:1,children:[(0,j.jsx)(s.X6,{as:"h5",size:"sm",children:e("panel.details.nodePosition.title")}),(0,j.jsx)(f.M5,{fields:y,minW:130})]})}var C=(0,o.Z)((0,o.Z)({},x.Z),b.Z),Z=(0,o.Z)((0,o.Z)({},y.Z),N.Z),w=function(){var e,t=(0,l.$)().t,n=(0,p.u5)(),o=a.useCallback((function(){n((0,g.n9)()),n((0,h.DR)(b.current.export()))}),[n,g.n9,h.DR]),x=(0,p.Qy)((function(e){return e.runtime})).selected,b=a.useRef(window.graph),y=a.useState(""),N=(0,u.Z)(y,2),w=(N[0],N[1]);a.useEffect((function(){var e,t=x.at(0);b.current.hasEdge(t)&&w(null!==(e=b.current.getEdgeAttribute(t,"reconcileId"))&&void 0!==e?e:"undefined")}),[x]);var W=[],k=x.at(0);if(1===x.length&&b.current.hasNode(k)){var z=b.current.getNodeAttribute(k,"type"),S=b.current.getNodeAttribute(k,z);W.push.apply(W,(0,i.Z)(C[z].fields.filter((function(e){return"custom"!==e.type})).map((function(e){return{type:e.type,label:t(e.label),value:e.value(S),options:e.options,validator:e.validator,onChange:function(t){b.current.mergeNodeAttributes(k,(0,r.Z)({},z,e.onChange(t,S))),o()}}}))).concat((0,i.Z)(C[z].fields.filter((function(e){return"custom"===e.type})))))}if(1===x.length&&b.current.hasEdge(k)){W.push({type:"custom",label:t("color"),component:(0,j.jsx)(v.Z,{theme:b.current.getEdgeAttribute(k,"color"),onClick:function(){return U(!0)}}),minW:"40px"});var _=b.current.getEdgeAttribute(k,"type"),R=b.current.getEdgeAttribute(k,_);W.push.apply(W,(0,i.Z)(Z[_].fields.map((function(e){return{type:e.type,label:t(e.label),value:e.value(R),options:e.options,validator:e.validator,onChange:function(t){b.current.mergeEdgeAttributes(k,(0,r.Z)({},_,e.onChange(t,R))),o()}}}))))}var D=a.useState(!1),O=(0,u.Z)(D,2),Q=O[0],U=O[1];return(0,j.jsxs)(f.L$,{isOpen:x.length>0,width:300,header:"Dummy header",alwaysOverlay:!0,children:[(0,j.jsx)(f.mQ,{onClose:function(){return n((0,g.x_)())},children:t("panel.details.header")}),(0,j.jsxs)(f.EI,{children:[(0,j.jsx)(E,{}),1===x.length&&b.current.hasNode(k)&&(0,j.jsx)(A,{}),(0,j.jsxs)(s.xu,{p:1,children:[(0,j.jsx)(s.X6,{as:"h5",size:"sm",children:t("panel.details.specificAttrsTitle")}),(0,j.jsx)(f.M5,{fields:W,minW:276})]}),(0,j.jsx)(m.Z,{isOpen:Q,defaultTheme:null!==(e=x.at(0))&&void 0!==e&&e.startsWith("line")?b.current.getEdgeAttribute(x.at(0),"color"):void 0,onClose:function(){return U(!1)},onUpdate:function(e){return t=e,void(x.at(0)&&b.current.hasEdge(x.at(0))&&(b.current.mergeEdgeAttributes(x.at(0),{color:t}),o()));var t}})]}),(0,j.jsx)(f.B0,{children:(0,j.jsxs)(s.Ug,{children:[1===x.length&&b.current.hasNode(x.at(0))&&(0,j.jsx)(c.zx,{size:"sm",variant:"outline",onClick:function(){return function(e){var t=JSON.parse(JSON.stringify(b.current.getNodeAttributes(e)));t.x+=50,t.y+=50;var n=e.startsWith("stn")?"stn_".concat((0,d.x0)(10)):"misc_node_".concat((0,d.x0)(10));b.current.addNode(n,t),o()}(x.at(0))},children:t("panel.details.footer.duplicate")}),(0,j.jsx)(c.zx,{size:"sm",variant:"outline",onClick:function(){return function(e){n((0,g.x_)()),e.forEach((function(e){b.current.hasNode(e)?b.current.dropNode(e):b.current.hasEdge(e)&&b.current.dropEdge(e)})),o()}(x)},children:t("panel.details.footer.remove")}),1===x.length&&(null===k||void 0===k?void 0:k.startsWith("line-"))&&(0,j.jsx)(c.zx,{size:"sm",variant:"outline",onClick:function(){return function(e){n((0,g.x_)());var t=b.current.getEdgeAttribute(e,"color");b.current.filterEdges((function(e,n,r,i,u,o,a){return n.color.every((function(e,n){return e===t[n]}))})).forEach((function(e){b.current.dropEdge(e)})),o()}(x.at(0))},children:t("panel.details.footer.removeEntireLine")})]})})]})}},5984:function(e,t,n){n.d(t,{x0:function(){return r}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")}}}]);
//# sourceMappingURL=DetailsPanel.d92e6fe5.chunk.js.map