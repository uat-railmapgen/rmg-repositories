"use strict";(self.webpackChunkrail_map_generator=self.webpackChunkrail_map_generator||[]).push([[7090],{5638:function(n,e,t){t.r(e),t.d(e,{default:function(){return un}});var r=t(9439),i=t(2791),s=t(8596),o=t(2288),l=t(1288),a=t(9526),c=t(2067),u=t(7447),d=t(8096),h=t(8302),f=t(159),p=t(4212),x=t(7025),m=t(9418),Z=t(8048),j=t(1859),g=t(2020),v=t(6169),C=t(713),b=t(533),y=t(184),k=(0,s.Z)((function(n){return(0,o.Z)({listItemNum:{marginRight:n.spacing(1),fontSize:"1.2rem"},listItemText:{display:"flex",alignItems:"baseline",whiteSpace:"nowrap",overflow:"hidden","& .MuiListItemText-primary":{marginRight:n.spacing(1)}},selectedItem:{background:n.palette.action.hover}})})),w=function(n){var e=(0,v.CG)((function(n){return n.helper.tpo}));return(0,y.jsx)(a.Z,{children:(0,y.jsx)(c.Z,{dense:!0,disablePadding:!0,children:e.map((function(e){return(0,y.jsxs)(i.Fragment,{children:[(0,y.jsx)(S,{stnId:e,isSelected:e===n.selectedId,onAction:n.onAction(e)}),(0,y.jsx)(u.Z,{})]},e)}))})})},S=function(n){var e=n.stnId,t=n.isSelected,s=n.onAction,o=(0,g.$)().t,l=k(),a=(0,v.TL)(),c=(0,v.CG)((function(n){return n.param.style})),u=(0,v.CG)((function(n){return n.param.stn_list[e]})),w=(null===u||void 0===u?void 0:u.name)||["",""],S=(null===u||void 0===u?void 0:u.num)||"00",I=(0,i.useState)(null),N=(0,r.Z)(I,2),_=N[0],T=N[1],G=function(n){return function(){s(n),T(null)}};return(0,y.jsxs)(d.Z,{className:t?l.selectedItem:"",children:[c===C.RM.GZMTR&&(0,y.jsx)(h.Z,{className:l.listItemNum,children:S}),(0,y.jsx)(f.Z,{primary:w[0],secondary:w[1].replace("\\"," "),className:l.listItemText}),(0,y.jsxs)(p.Z,{children:[(0,y.jsx)(x.Z,{size:"small",onClick:function(n){return T(n.currentTarget)},children:(0,y.jsx)(m.Z,{children:"more_vert"})}),(0,y.jsxs)(Z.Z,{anchorEl:_,open:Boolean(_),onClose:function(){return T(null)},children:[(0,y.jsx)(j.Z,{onClick:function(){a((0,b.lS)(e)),T(null)},children:o("stations.current")}),(0,y.jsx)(j.Z,{onClick:G("edit"),children:o("stations.edit.button")}),(0,y.jsx)(j.Z,{onClick:G("remove"),children:o("stations.remove.button")})]})]})]})},I=t(3594),N=t(5159),_=t(4026),T=t(1969),G=t(9403),M=t(269),L=t(6513),F=t(7253),R=t(8222),$=t(5288),z=(0,s.Z)((function(){return(0,o.Z)({dialogContent:{padding:8},select:{width:166,marginLeft:8}})})),A=i.memo((function(n){var e=(0,g.$)().t,t=z(),s=(0,v.TL)(),o=(0,v.CG)((function(n){return n.param.style})),l=(0,v.CG)((function(n){return n.param.stn_list})),a=(0,v.CG)((function(n){return n.helper})).tpo,h={centre:e("stations.add.centre"),upper:e("stations.add.upper"),lower:e("stations.add.lower"),newupper:e("stations.add.newUpper"),newlower:e("stations.add.newLower")},p=i.useState("before"),x=(0,r.Z)(p,2),Z=x[0],j=x[1],C=i.useState(a[0]),b=(0,r.Z)(C,2),k=b[0],w=b[1],S=i.useState(Object.keys(h)[0]),A=(0,r.Z)(S,2),E=A[0],B=A[1],O=i.useState(Array(5).fill(!0)),P=(0,r.Z)(O,2),K=P[0],U=P[1],D=i.useState(""),H=(0,r.Z)(D,2),W=H[0],q=H[1],J=i.useState([]),Q=(0,r.Z)(J,2),V=Q[0],X=Q[1],Y=(0,i.useMemo)((function(){return function(n,e,t){switch(t[e]?t[e]["before"===n?"parents":"children"].length:0){case 2:return[1,1,1,[],[]];case 1:var r=(0,R.o)(e,t);if(0===r){var i=function(n,e,t){var r=[];if("before"===n){for(;1===t[e].parents.length;)e=t[e].parents[0],r.unshift(e);r.pop()}else{for(;1===t[e].children.length;)e=t[e].children[0],r.push(e);r.shift()}return r}(n,e,t);return[1,0,0,i=i.length?i:[],i]}return r<0?"before"===n?[t[t[e].parents[0]].children.length-1,0,1,[],[]]:[t[t[e].children[0]].parents.length-1,0,1,[],[]]:"before"===n?[t[t[e].parents[0]].children.length-1,1,0,[],[]]:[t[t[e].children[0]].parents.length-1,1,0,[],[]]}return[0,0,0,[],[]]}(Z,k,l)}),[Z,k,l]);(0,i.useEffect)((function(){U(Y.map((function(n){return"number"===typeof n?Boolean(n):Boolean(n.length)}))),X(Y[3])}),[Y.toString()]),(0,i.useEffect)((function(){return B(Object.keys(h)[K.indexOf(!0)])}),[K]),(0,i.useEffect)((function(){0!==V.length&&q(V[0])}),[V]),(0,i.useEffect)((function(){k in l||w(a[0])}),[Object.keys(l).toString()]);var nn=function(e){if("close"===e)n.onClose("close");else{var t=s((0,$.gC)(Z,k,E,W));n.onClose(t)}};return(0,y.jsxs)(I.Z,{open:n.open,onClose:function(){return nn("close")},children:[(0,y.jsx)(N.Z,{children:e("stations.add.title")}),(0,y.jsx)(_.Z,{className:t.dialogContent,children:(0,y.jsxs)(c.Z,{component:"div",disablePadding:!0,children:[(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(T.Z,{children:(0,y.jsx)(m.Z,{children:"control_camera"})}),(0,y.jsx)(f.Z,{primary:e("stations.add.prep")}),(0,y.jsx)(G.Z,{native:!0,onChange:function(n){return j(n.target.value)},value:Z,className:t.select,children:["before","after"].map((function(n){return(0,y.jsx)("option",{value:n,children:e("stations.add."+n)},n)}))})]}),(0,y.jsx)(u.Z,{variant:"middle"}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(T.Z,{children:(0,y.jsx)(m.Z,{children:"near_me"})}),(0,y.jsx)(f.Z,{primary:e("stations.add.pivot")}),(0,y.jsx)(G.Z,{native:!0,onChange:function(n){return w(n.target.value)},value:k,className:t.select,children:a.map((function(n){return(0,y.jsx)("option",{value:n,children:(0,F.Kd)(l[n],o)},n)}))})]}),(0,y.jsx)(u.Z,{variant:"middle"}),(0,y.jsxs)(d.Z,{children:[(0,y.jsx)(T.Z,{children:(0,y.jsx)(m.Z,{children:"share"})}),(0,y.jsx)(f.Z,{primary:e("stations.add.loc")}),(0,y.jsx)(G.Z,{native:!0,onChange:function(n){return B(n.target.value)},value:E,className:t.select,children:Object.keys(h).map((function(n,e){return(0,y.jsx)("option",{value:n,disabled:!K[e],children:h[n]},n)}))})]}),(0,y.jsx)(u.Z,{variant:"middle",style:{display:["newupper","newlower"].includes(E)?"flex":"none"}}),(0,y.jsxs)(d.Z,{style:{display:["newupper","newlower"].includes(E)?"flex":"none"},children:[(0,y.jsx)(T.Z,{children:(0,y.jsx)(m.Z,{children:"undo"})}),(0,y.jsx)(f.Z,{primary:e("stations.add.end")}),(0,y.jsx)(G.Z,{native:!0,onChange:function(n){return q(n.target.value)},value:W,className:t.select,children:V.map((function(n){return(0,y.jsx)("option",{value:n,children:(0,F.Kd)(l[n],o)},n)}))})]})]})}),(0,y.jsxs)(M.Z,{children:[(0,y.jsx)(L.Z,{onClick:function(){return nn("close")},color:"primary",children:e("dialog.cancel")}),(0,y.jsx)(L.Z,{onClick:function(){return nn("accept")},color:"primary",autoFocus:!0,children:e("dialog.ok")})]})]})}),(function(n,e){return n.open===e.open})),E=t(1413),B=t(8192),O=t(1370),P=t(5720),K=t(3364),U=t(8154),D=i.lazy((function(){return Promise.all([t.e(9038),t.e(2996)]).then(t.bind(t,4266))})),H=i.lazy((function(){return Promise.all([t.e(9038),t.e(7805),t.e(4462)]).then(t.bind(t,8225))})),W=i.lazy((function(){return t.e(9063).then(t.bind(t,6987))})),q=i.lazy((function(){return t.e(5060).then(t.bind(t,7061))})),J=(0,s.Z)((function(){return(0,o.Z)({tab:{padding:"6px 24px",height:48,minWidth:"calc(100% / 4)","& .MuiTab-wrapper":{flexDirection:"row"},"&.MuiTab-labelIcon":{minHeight:"unset","& .MuiTab-wrapper":{"& > *:first-child":{marginBottom:0},"& > *:not(first-child)":{paddingLeft:8}}}}})}));var Q=function(n){var e=(0,g.$)().t,t=(0,K.Z)(),r=(0,U.Z)(t.breakpoints.down("xs"));return(0,U.Z)(t.breakpoints.down("sm"))?(0,y.jsxs)(I.Z,{onClose:n.onClose,open:n.open,fullScreen:r,children:[(0,y.jsx)(N.Z,{children:e("stations.edit.title")}),(0,y.jsx)(_.Z,{dividers:!0,style:{padding:"0 16px"},children:n.children}),(0,y.jsx)(M.Z,{children:(0,y.jsx)(L.Z,{onClick:n.onClose,color:"primary",children:e("dialog.done")})})]}):(0,y.jsx)(a.Z,{children:n.children})},V=function(n){var e=(0,g.$)().t,t=i.useState(0),s=(0,r.Z)(t,2),o=s[0],l=s[1],a=J(),c=i.useMemo((function(){return(0,y.jsx)(B.Z,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(n,e){return l(e)},variant:"scrollable",scrollButtons:"off",children:[["name","title"],["interchange","transfer_within_a_station"],["branch","share"],["more","more_horiz"]].map((function(n,t){return(0,y.jsx)(O.Z,{label:(0,y.jsx)("span",{children:e("stations.edit.tab."+n[0])}),icon:(0,y.jsx)(m.Z,{children:n[1]}),className:a.tab},t)}))})}),[o,a.tab]);return(0,y.jsxs)(Q,(0,E.Z)((0,E.Z)({},n),{},{children:[c,(0,y.jsx)(h.Z,{component:"div",role:"tabpanel",children:(0,y.jsx)(i.Suspense,{fallback:(0,y.jsx)(P.Z,{}),children:function(e){switch(e){case 0:return(0,y.jsx)(D,{stnId:n.stnId});case 1:return(0,y.jsx)(H,{stnId:n.stnId});case 2:return(0,y.jsx)(W,{stnId:n.stnId});case 3:return(0,y.jsx)(q,{stnId:n.stnId})}}(o)})})]}))},X=t(6899),Y=t(6068),nn=t(6455);function en(n){var e,t=n.stnId,s=n.open,o=n.onClose,l=(0,g.$)().t,a=(0,v.TL)(),c=(0,v.CG)((function(n){return n.param.stn_list})),u=(0,v.CG)((function(n){return n.param.current_stn_idx})),d=(0,i.useState)(!1),h=(0,r.Z)(d,2),f=h[0],p=h[1],x=function(n){return function(){if("accept"===n)if(a((0,nn.l)(t))){if(a((0,nn.d)(t)),u===t){var e=Object.keys(c).filter((function(n){return!["linestart","lineend"].includes(n)}))[0];a((0,b.lS)(e))}}else p(!0);o()}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(I.Z,{open:s,onClose:x("close"),children:[(0,y.jsx)(N.Z,{children:l("stations.remove.title")}),(0,y.jsx)(_.Z,{children:(0,y.jsx)(Y.Z,{children:(0,y.jsx)(X.c,{i18nKey:"stations.remove.msg",children:{name:null===(e=c[n.stnId])||void 0===e?void 0:e.name.join()}})})}),(0,y.jsxs)(M.Z,{children:[(0,y.jsx)(L.Z,{onClick:x("close"),color:"primary",autoFocus:!0,children:l("dialog.cancel")}),(0,y.jsx)(L.Z,{onClick:x("accept"),color:"primary",children:l("stations.remove.button")})]})]}),(0,y.jsx)(tn,{open:f,onClose:function(){return p(!1)}})]})}var tn=(0,i.memo)((function(n){var e=(0,g.$)().t;return(0,y.jsxs)(I.Z,{open:n.open,onClose:n.onClose,children:[(0,y.jsx)(N.Z,{children:e("stations.remove.error.title")}),(0,y.jsx)(_.Z,{children:(0,y.jsx)(Y.Z,{children:e("stations.remove.error.msg")})}),(0,y.jsx)(M.Z,{children:(0,y.jsx)(L.Z,{onClick:n.onClose,color:"primary",autoFocus:!0,children:e("dialog.ok")})})]})}),(function(n,e){return n.open===e.open})),rn=t(2734),sn=t(8826),on=(0,s.Z)((function(n){return(0,o.Z)({fab:{position:"fixed",right:n.spacing(2),bottom:n.spacing(2)}})})),ln=i.memo((function(n){var e=(0,g.$)().t,t=(0,v.CG)((function(n){return n.param.style})),s=on(),o=i.useState(null),l=(0,r.Z)(o,2),a=l[0],c=l[1],u=function(e){return function(){c(null),n.onAction(e)}};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(rn.ZP,{title:e("stations.fabs.tooltip")||"","aria-label":"options",children:(0,y.jsx)(sn.Z,{color:"primary",className:s.fab,onClick:function(n){return c(n.target)},children:(0,y.jsx)(m.Z,{children:"more_vert"})})}),(0,y.jsxs)(Z.Z,{anchorEl:a,open:Boolean(a),onClose:function(){return c(null)},children:[(0,y.jsxs)(j.Z,{onClick:u("add"),children:[(0,y.jsx)(T.Z,{children:(0,y.jsx)(m.Z,{children:"add_box"})}),(0,y.jsx)(f.Z,{primary:e("stations.fabs.add")})]}),(0,y.jsxs)(j.Z,{onClick:u("reverse"),children:[(0,y.jsx)(T.Z,{children:(0,y.jsx)(m.Z,{children:"cached"})}),(0,y.jsx)(f.Z,{primary:e("stations.fabs.reverse")})]}),t===C.RM.GZMTR&&(0,y.jsxs)(j.Z,{onClick:u("autonum"),children:[(0,y.jsx)(T.Z,{children:(0,y.jsx)(m.Z,{children:"filter_1"})}),(0,y.jsx)(f.Z,{primary:e("design.autoNum.button")})]})]})]})}),(function(){return!0})),an=function(n){var e=(0,g.$)().t,t=(0,v.TL)(),r=(0,v.CG)((function(n){return n.helper})).branches,s=function(e){var i=r[0];i.forEach((function(n,r){var s;s="ascend"===e?r.toString().padStart(2,"0"):(i.length-1-r).toString().padStart(2,"0"),t((0,b.Uf)(n,s))})),n.onClose()};return i.useMemo((function(){return(0,y.jsxs)(I.Z,{onClose:n.onClose,open:n.open,children:[(0,y.jsx)(N.Z,{children:e("design.autoNum.title")}),(0,y.jsx)(_.Z,{children:(0,y.jsx)(Y.Z,{children:e("design.autoNum.msg")})}),(0,y.jsxs)(M.Z,{children:[(0,y.jsx)(L.Z,{onClick:n.onClose,color:"primary",autoFocus:!0,children:e("dialog.cancel")}),(0,y.jsx)(L.Z,{onClick:function(){return s("ascend")},color:"primary",children:e("design.autoNum.ascend")}),(0,y.jsx)(L.Z,{onClick:function(){return s("descend")},color:"primary",children:e("design.autoNum.descend")})]})]})}),[n.open])},cn=(0,s.Z)((function(){return(0,o.Z)({gridContainer:{height:"100%",overflow:"hidden"},gridItem:{height:"100%",overflow:"auto"}})})),un=function(){var n=cn(),e=(0,v.TL)(),t=(0,v.CG)((function(n){return n.param.style})),s=(0,i.useState)(""),o=(0,r.Z)(s,2),a=o[0],c=o[1],u=(0,i.useState)(!1),d=(0,r.Z)(u,2),h=d[0],f=d[1],p=(0,i.useState)(!1),x=(0,r.Z)(p,2),m=x[0],Z=x[1],j=(0,i.useState)(!1),g=(0,r.Z)(j,2),k=g[0],S=g[1],I=(0,i.useState)(""),N=(0,r.Z)(I,2),_=N[0],T=N[1],G=(0,i.useState)(!1),M=(0,r.Z)(G,2),L=M[0],F=M[1];return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsxs)(l.Z,{container:!0,spacing:1,className:n.gridContainer,children:[(0,y.jsx)(l.Z,{item:!0,xs:12,md:4,className:n.gridItem,children:(0,y.jsx)(w,{selectedId:a,onAction:function(n){return function(e){"edit"===e&&(c(n),f(!0)),"remove"===e&&(a===n&&c(""),T(n),F(!0))}}})}),(0,y.jsx)(l.Z,{item:!0,xs:8,className:n.gridItem,children:a&&(0,y.jsx)(V,{open:h,stnId:a,onClose:function(){return f(!1)}})})]}),(0,y.jsx)(ln,{onAction:function(n){"add"===n&&Z(!0),"reverse"===n&&e((0,b.iI)()),"autonum"===n&&S(!0)}}),(0,y.jsx)(A,{open:m,onClose:function(n){Z(!1),"close"!==n&&(c(n),f(!0))}}),(0,y.jsx)(en,{open:L,onClose:function(){return F(!1)},stnId:_}),t===C.RM.GZMTR&&(0,y.jsx)(an,{open:k,onClose:function(){return S(!1)}})]})}}}]);
//# sourceMappingURL=panelStations.5504ae5b.chunk.js.map