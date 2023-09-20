import{j as S}from"./chakra-c00f698a.js";import{b as A,r as ut}from"./react-2c0b8364.js";import{u as I}from"./useEvent-92f02ca1.js";import{q as j,J as nt,p as z,i as pt,j as K,ae as q,A as X,af as J,v as ht,x as rt,ad as V,S as bt,d as vt,o as ot,L as Y,r as it,E as ct,y as at,O as wt,H as tt,G as Et,a2 as St,a4 as Nt}from"./index-8e2f728d.js";import{s as xt}from"./stations-0f81c795.js";import{m as mt}from"./misc-nodes-997c7329.js";import{a as O,r as T,f as kt,F as H,i as R}from"./helpers-2b6cd030.js";const et=e=>{const{id:t,type:s,attrs:a=j[s].defaultAttrs,styleType:n,styleAttrs:y=nt[n].defaultAttrs,newLine:h,handleClick:f}=e,{x1:u,y1:g,x2:b,y2:x}=e,[L,N]=A.useState("M 0,0 L 0,0");A.useEffect(()=>{let w="M 0,0 L 0,0";if(["offsetFrom","offsetTo"].every(E=>Object.keys(a).includes(E))&&!Number.isNaN(a.offsetFrom)&&!Number.isNaN(a.offsetTo)&&a.offsetFrom===a.offsetTo&&((u===b||g===x)&&[z.Diagonal,z.Perpendicular].includes(s)||Math.abs((x-g)/(b-u))===1&&[z.Diagonal,z.RotatePerpendicular].includes(s))){const E=a.offsetFrom;w=j[z.Simple].generatePath(u,b,g,x,{offset:E})}else w=j[s].generatePath(u,b,g,x,a);N(w)},[s,JSON.stringify(a),u,b,g,x]);const P=nt[n].component;return A.useMemo(()=>S.jsx(P,{id:t,type:s,path:L,styleAttrs:y,newLine:h,handleClick:f}),[t,s,L,n,JSON.stringify(y),h,f])},Lt=e=>{const t=e.filterDirectedEdges((a,n,y,h,f,u,g)=>a.startsWith("line")&&n.reconcileId!==""),s={};for(const a of t){const n=e.getEdgeAttribute(a,"reconcileId");n in s?s[n].push(a):s[n]=[a]}return s},ft=e=>{const t=Lt(e),s=[],a=[];return Object.values(t).forEach(n=>{var W;if(n.length===1){a.push(...n);return}const y=e.getEdgeAttribute(n.at(0),"type");if(!n.every(m=>e.getEdgeAttribute(m,"type")===y)){a.push(...n);return}const h=e.getEdgeAttribute(n.at(0),"style");if(!n.every(m=>e.getEdgeAttribute(m,"style")===h)){a.push(...n);return}const f={},u=new Set,g=new Set,b=Object.fromEntries(n.map(m=>{var D,C;const[k,_]=e.extremities(m);return f[k]=((D=f[k])!=null?D:0)+1,f[_]=((C=f[_])!=null?C:0)+1,u.add(k),g.add(_),[k,[m,_]]})),x=Array.from(u).filter(m=>f[m]===1),L=Array.from(g).filter(m=>f[m]===1);if(x.length!==1||L.length!==1){a.push(...n);return}const N=x[0],P=L[0];if(N===P){a.push(...n);return}const w=[b[N][0]];let E=b[N][1];for(let m=1;m<n.length;m=m+1){const k=(W=b[E])==null?void 0:W.at(1);if(!k){a.push(...n);return}w.push(b[E][0]),E=k}if(E!==P||w.length!==n.length){a.push(...n);return}s.push(w)}),{allReconciledLines:s,danglingLines:a}},It=(e,t)=>{if(!t.every(n=>e.hasEdge(n)))return;const s=t.map(n=>{var x;const[y,h]=e.extremities(n),f=e.getNodeAttributes(y),u=e.getNodeAttributes(h),g=e.getEdgeAttribute(n,"type"),b=(x=e.getEdgeAttribute(n,g))!=null?x:j[g].defaultAttrs;return j[g].generatePath(f.x,u.x,f.y,u.y,b)});let a=`${s[0]} `;for(let n=1;n<t.length;n=n+1)a+=s[n].replace(/M\s*-?\d+(\.\d+)?(\s*|,)-?\d+(\.*\d+)?\s*/i,"");return a},yt=e=>e.filterNodes((t,s)=>t.startsWith("stn")).map(t=>[t,e.getNodeAttributes(t)]).filter(([t,s])=>s.visible).sort((t,s)=>t[1].zIndex-s[1].zIndex).map(([t,s])=>({node:t,visible:s.visible,zIndex:s.zIndex,x:s.x,y:s.y,type:s.type,[s.type]:s[s.type]})),st=e=>e.filterDirectedEdges((t,s,a,n,y,h,f)=>t.startsWith("line")&&s.visible&&s.reconcileId==="").sort((t,s)=>e.getEdgeAttribute(t,"zIndex")-e.getEdgeAttribute(s,"zIndex")).map(t=>{const s=e.getEdgeAttribute(t,"type"),a=e.getEdgeAttribute(t,s),n=e.getEdgeAttribute(t,"style"),y=e.getEdgeAttribute(t,n),[h,f]=e.extremities(t),u=e.getNodeAttributes(h),g=e.getNodeAttributes(f);return{edge:t,x1:u.x,y1:u.y,x2:g.x,y2:g.y,type:s,attr:a,style:n,styleAttr:y}}),gt=e=>e.filterNodes((t,s)=>t.startsWith("misc_node")).map(t=>[t,e.getNodeAttributes(t)]).filter(([t,s])=>s.visible).sort((t,s)=>t[1].zIndex-s[1].zIndex).map(([t,s])=>({node:t,visible:s.visible,zIndex:s.zIndex,x:s.x,y:s.y,type:s.type,[s.type]:s[s.type]})),Pt=()=>{const e=pt(),t=A.useRef(window.graph),{telemetry:{project:s}}=K(r=>r.app),{svgViewBoxZoom:a}=K(r=>r.param),{selected:n,refresh:{nodes:y,edges:h},mode:f,active:u,keepLastPath:g,theme:b}=K(r=>r.runtime),[x,L]=A.useState({x:0,y:0}),[N,P]=A.useState({x:0,y:0}),w=I((r,i)=>{i.stopPropagation();const c=i.currentTarget,{x:l,y:p}=O(i);c.setPointerCapture(i.pointerId),L({x:l,y:p}),e(q(r)),!i.shiftKey&&n.length<=1&&e(X()),e(J(r))}),E=I((r,i)=>{i.stopPropagation();const{x:c,y:l}=O(i);f==="free"&&u===r?(n.forEach(p=>{t.current.updateNodeAttributes(p,v=>({...v,x:T(v.x-(x.x-c)*a/100,i.altKey?1:5),y:T(v.y-(x.y-l)*a/100,i.altKey?1:5)}))}),e(ht()),e(rt())):f.startsWith("line")&&P({x:(x.x-c)*a/100,y:(x.y-l)*a/100})}),W=I((r,i)=>{if(i.stopPropagation(),f.startsWith("line")){g||e(V("free"));const c=[...Object.values(bt),vt.Virtual],l=t.current.hasNode(u)&&c.includes(t.current.getNodeAttribute(u,"type"));["stn_core_","virtual_circle_"].forEach(v=>{var dt,lt;const B=(lt=(dt=document.elementsFromPoint(i.clientX,i.clientY)[0].attributes)==null?void 0:dt.getNamedItem("id"))==null?void 0:lt.value,Q=B==null?void 0:B.startsWith(v);if(l&&Q){const Z=f.slice(5),At=`line_${ot(10)}`;t.current.addDirectedEdgeWithKey(At,u,B.slice(v.length),{visible:!0,zIndex:0,type:Z,[Z]:structuredClone(j[Z].defaultAttrs),style:Y.SingleColor,[Y.SingleColor]:{color:b},reconcileId:""}),s&&it.event(ct.ADD_LINE,{type:Z})}}),e(rt()),e(at(t.current.export()))}else if(f==="free")if(u){const{x:c,y:l}=O(i);x.x-c===0&&x.y-l===0?e(J(r)):e(at(t.current.export()))}else e(J(r));e(q(void 0))}),m=I((r,i)=>{e(X()),e(J(r))}),[k,_]=A.useState(yt(t.current)),[D,C]=A.useState(gt(t.current)),[$,M]=A.useState(st(t.current)),[G,F]=A.useState([]),[o,d]=A.useState([]);return A.useEffect(()=>{_(yt(t.current)),C(gt(t.current))},[y]),A.useEffect(()=>{M(st(t.current));const{allReconciledLines:r,danglingLines:i}=ft(t.current);F(r),d(i)},[]),A.useEffect(()=>{M(st(t.current));const{allReconciledLines:r,danglingLines:i}=ft(t.current);F(r),d(i)},[h]),S.jsxs(S.Fragment,{children:[o.map(r=>{const[i,c]=t.current.extremities(r),l=t.current.getNodeAttributes(i),p=t.current.getNodeAttributes(c);return S.jsx(et,{id:r,x1:l.x,y1:l.y,x2:p.x,y2:p.y,newLine:!1,type:z.Simple,attrs:j[z.Simple].defaultAttrs,styleType:Y.SingleColor,styleAttrs:{color:["","","#c0c0c0","#fff"]},handleClick:m},r)}),G.map(r=>{const i=It(t.current,r);if(!i)return S.jsx(S.Fragment,{});const c=r.at(0),l=t.current.getEdgeAttribute(c,"type"),p=t.current.getEdgeAttribute(c,"style"),v=t.current.getEdgeAttribute(c,p),U=nt[p].component;return S.jsx(U,{id:c,type:l,path:i,styleAttrs:v,newLine:!1,handleClick:m},c)}),$.map(({edge:r,x1:i,y1:c,x2:l,y2:p,type:v,attr:U,style:B,styleAttr:Q})=>S.jsx(et,{id:r,x1:i,y1:c,x2:l,y2:p,newLine:!1,type:v,attrs:U,styleType:B,styleAttrs:Q,handleClick:m},r)),D.map(r=>{const{node:i,x:c,y:l,type:p}=r,v=mt[p].component;return S.jsx(v,{id:i,x:c,y:l,attrs:r[p],handlePointerDown:w,handlePointerMove:E,handlePointerUp:W},i)}),k.map(r=>{const{node:i,x:c,y:l,type:p}=r,v=xt[p].component;return S.jsx(v,{id:i,x:c,y:l,attrs:{[p]:r[p]},handlePointerDown:w,handlePointerMove:E,handlePointerUp:W},i)}),f.startsWith("line")&&u&&S.jsx(et,{id:"create_in_progress___no_use",x1:t.current.getNodeAttribute(u,"x"),y1:t.current.getNodeAttribute(u,"y"),x2:t.current.getNodeAttribute(u,"x")-N.x,y2:t.current.getNodeAttribute(u,"y")-N.y,newLine:!0,type:f.slice(5),attrs:j[f.slice(5)].defaultAttrs,styleType:Y.SingleColor,styleAttrs:{color:b}})]})},_t=()=>{const[e,t]=ut.useState({width:void 0,height:void 0});return ut.useEffect(()=>{function s(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",s),s(),()=>window.removeEventListener("resize",s)},[]),e},Tt=()=>{var G,F;const e=pt(),t=A.useRef(window.graph),s=()=>{e(ht()),e(rt()),e(at(t.current.export()))},{telemetry:{project:a}}=K(o=>o.app),{svgViewBoxZoom:n,svgViewBoxMin:y}=K(o=>o.param),{mode:h,lastTool:f,active:u,selected:g,keepLastPath:b,theme:x,refresh:{nodes:L}}=K(o=>o.runtime);A.useEffect(()=>{const o=kt(t.current);Object.entries(o).filter(([d,r])=>r&&d in H).map(([d,r])=>d).filter(d=>H[d]&&document.getElementById(H[d].cssName)===null).map(d=>H[d].cssName).filter((d,r,i)=>r===i.findIndex(c=>c===d)).forEach(d=>{const r=document.createElement("link");r.rel="stylesheet",r.id=d,r.href=`/rmp/styles/${d}.css`,document.head.append(r)})},[L]);const[N,P]=A.useState({x:0,y:0}),[w,E]=A.useState({x:0,y:0}),W=I(o=>{const{x:d,y:r}=O(o);if(h.startsWith("station")){e(V("free"));const i=ot(10),c=h.slice(8),l=structuredClone(xt[c].defaultAttrs);"color"in l&&(l.color=x),t.current.addNode(`stn_${i}`,{visible:!0,zIndex:0,x:T(d*n/100+y.x,10),y:T(r*n/100+y.y,10),type:c,[c]:l}),s(),a&&it.event(ct.ADD_STATION,{type:c})}else if(h.startsWith("misc-node")){e(V("free"));const i=ot(10),c=h.slice(10);t.current.addNode(`misc_node_${i}`,{visible:!0,zIndex:0,x:T(d*n/100+y.x,10),y:T(r*n/100+y.y,10),type:c,[c]:structuredClone(mt[c].defaultAttrs)}),s(),a&&it.event(ct.ADD_STATION,{type:c})}else(h==="free"||h.startsWith("line"))&&(h.startsWith("line")&&(e(V("free")),b&&e(wt(!1))),P({x:d,y:r}),E(y),o.shiftKey||(e(q("background")),e(X())))}),m=I(o=>{if(u==="background"){const{x:d,y:r}=O(o);e(tt({x:w.x+(N.x-d)*n/100,y:w.y+(N.y-r)*n/100}))}}),k=I(o=>{u==="background"&&!o.shiftKey&&e(q(void 0))}),_=I(o=>{let d=n;o.deltaY>0&&n+10<400?d=n+10:o.deltaY<0&&n-10>0&&(d=n-10),e(Et(d));const{x:r,y:i}=O(o),c=o.currentTarget.getBoundingClientRect(),[l,p]=[r/c.width,i/c.height];e(tt({x:y.x+r*n/100-M*d/100*l,y:y.y+i*n/100-$*d/100*p}))}),D=I(o=>{if(R?o.key==="Backspace":o.key==="Delete")g.length>0&&g.filter(d=>t.current.hasNode(d)||t.current.hasEdge(d)).forEach(d=>{e(X()),t.current.hasNode(d)?t.current.dropNode(d):t.current.dropEdge(d),s()});else if(o.key.startsWith("Arrow")){const r=o.key.endsWith("Left")?-1:o.key.endsWith("Right")?1:0,i=o.key.endsWith("Up")?-1:o.key.endsWith("Down")?1:0;e(tt({x:y.x+100*n/100*r,y:y.y+100*n/100*i}))}else if(o.key==="i"||o.key==="j"||o.key==="k"||o.key==="l"){const r=(o.key==="j"?-1:o.key==="l"?1:0)*10,i=(o.key==="i"?-1:o.key==="k"?1:0)*10;g.length>0&&g.filter(c=>t.current.hasNode(c)).forEach(c=>{t.current.updateNodeAttribute(c,"x",l=>(l!=null?l:0)+r),t.current.updateNodeAttribute(c,"y",l=>(l!=null?l:0)+i),s()})}else o.key==="f"&&f?e(V(f)):o.key==="z"&&(R?o.metaKey&&!o.shiftKey:o.ctrlKey)?(R&&o.preventDefault(),e(St())):(R&&o.key==="z"&&o.metaKey&&o.shiftKey||!R&&o.key==="y"&&o.ctrlKey)&&e(Nt())}),C=_t(),$=((G=C.height)!=null?G:1280)-40,M=((F=C.width)!=null?F:720)-40;return S.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",id:"canvas",style:{position:"fixed",top:40,left:40,userSelect:"none"},height:$,width:M,viewBox:`${y.x} ${y.y} ${M*n/100} ${$*n/100}`,onPointerDown:W,onPointerMove:m,onPointerUp:k,onWheel:_,tabIndex:0,onKeyDown:D,children:S.jsx(Pt,{})})};export{Tt as default};
