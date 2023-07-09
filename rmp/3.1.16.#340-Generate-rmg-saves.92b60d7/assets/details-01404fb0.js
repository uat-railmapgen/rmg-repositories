import{j as e,A as Z,M as q,o as J,p as K,r as Q,t as U,h as A,B as z,ak as I,aj as te}from"./chakra-85c10392.js";import{b as c}from"./react-d997006e.js";import{d as R,e as L,s as E,h as S,z as P,ag as B,ah as F,f as v,l as X,ac as w,L as ne,c as se,E as D,j as k,ae as H,t as ae,ai as re,aj as ie,ak as oe,al as le,n as $}from"./index-7c5ddd9f.js";import{s as Y}from"./stations-7c6355a7.js";import{m as ce}from"./misc-nodes-6f51ff7a.js";import{a as de,b as ue,d as pe}from"./change-types-6dacc269.js";import{u as G}from"./useEvent-5c3d6c07.js";function he(){const{t:r}=R(),n=L(),t=c.useCallback(()=>{n(E()),n(S(i.current.export()))},[n,E,S]),{selected:u}=P(a=>a.runtime),s=u.at(0),i=c.useRef(window.graph),[p,f]=c.useState(!1),g=c.useRef(null),[x,h]=c.useState(void 0),b=i.current.getNodeAttribute(s,"type"),m=Object.fromEntries(Object.entries(Y).map(([a,y])=>[a,r(y.metadata.displayName).toString()])),d=()=>{x&&(de(i.current,s,x),t())},o=a=>{a&&d(),h(void 0),f(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{label:r("panel.details.info.stationType"),minW:"276",children:e.jsx(F,{options:m,disabledOptions:[b],value:b,onChange:({target:{value:a}})=>{h(a),f(!0)}})}),e.jsx(Z,{isOpen:p,leastDestructiveRef:g,onClose:()=>o(!1),children:e.jsx(q,{children:e.jsxs(J,{children:[e.jsx(K,{children:r("warning")}),e.jsx(Q,{children:r("panel.details.changeStationTypeContent")}),e.jsxs(U,{children:[e.jsx(A,{ref:g,onClick:()=>o(!1),children:r("cancel")}),e.jsx(A,{ml:"2",colorScheme:"red",onClick:()=>o(!0),children:r("panel.details.changeType")})]})]})})})]})}function ge(){const{t:r}=R(),n=L(),t=c.useCallback(()=>{n(v()),n(S(p.current.export()))},[n,v,S]),{selected:u,theme:s}=P(j=>j.runtime),i=u.at(0),p=c.useRef(window.graph),[f,g]=c.useState(!1),x=c.useRef(null),h=Object.fromEntries(Object.entries(X).map(([j,_])=>[j,r(_.metadata.displayName).toString()])),[b,m]=c.useState(p.current.getEdgeAttribute(i,"type")),[d,o]=c.useState(void 0),a=Object.fromEntries(Object.entries(w).map(([j,_])=>[j,r(_.metadata.displayName).toString()])),[y,l]=c.useState(p.current.getEdgeAttribute(i,"style")),[N,O]=c.useState(void 0),C=Object.values(ne).filter(j=>!w[y].metadata.supportLinePathType.includes(j)),T=Object.values(se).filter(j=>!w[j].metadata.supportLinePathType.includes(b)),W=()=>{d&&(ue(p.current,i,d),m(p.current.getEdgeAttribute(i,"type")),t())},ee=()=>{N&&(pe(p.current,i,N,s),l(p.current.getEdgeAttribute(i,"style")),t())},M=j=>{j&&(d?(W(),o(void 0)):N&&(ee(),O(void 0))),g(!1)};return e.jsxs(e.Fragment,{children:[e.jsx(B,{label:r("panel.details.info.linePathType"),minW:"276",children:e.jsx(F,{options:h,disabledOptions:C,defaultValue:b,value:b,onChange:({target:{value:j}})=>{o(j),g(!0)}})}),e.jsx(B,{label:r("panel.details.info.lineStyleType"),minW:"276",children:e.jsx(F,{options:a,disabledOptions:T,defaultValue:y,value:y,onChange:({target:{value:j}})=>{O(j),g(!0)}})}),e.jsx(Z,{isOpen:f,leastDestructiveRef:x,onClose:()=>M(!1),children:e.jsx(q,{children:e.jsxs(J,{children:[e.jsx(K,{children:r("warning")}),e.jsx(Q,{children:r("panel.details.changeLineTypeContent")}),e.jsxs(U,{children:[e.jsx(A,{ref:x,onClick:()=>M(!1),children:r("cancel")}),e.jsx(A,{ml:"2",colorScheme:"red",onClick:()=>M(!0),children:r("panel.details.changeType")})]})]})})})]})}function me(){const{t:r}=R(),n=L(),t=c.useCallback(()=>{n(E()),n(v()),n(S(i.current.export()))},[n,v,S]),{selected:u}=P(g=>g.runtime),s=u.at(0),i=c.useRef(window.graph),p=g=>{const x=Math.min(Math.max(g,-5),5);i.current.hasNode(s)&&i.current.setNodeAttribute(s,"zIndex",x),i.current.hasEdge(s)&&i.current.setEdgeAttribute(s,"zIndex",x),t()},f=[{type:"input",label:r("panel.details.info.id"),value:u.length>0?u.join(", "):"undefined",minW:276},{type:"select",label:r("panel.details.info.zIndex"),value:s?i.current.hasNode(s)?i.current.getNodeAttribute(s,"zIndex"):i.current.hasEdge(s)?i.current.getEdgeAttribute(s,"zIndex"):0:0,options:Object.fromEntries(Array.from({length:11},(g,x)=>[x-5,(x-5).toString()])),onChange:g=>p(Number(g))}];return u.length===0||u.length>1&&f.push({type:"input",label:r("panel.details.info.type"),value:"multiple selection",minW:276}),e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:r("panel.details.info.title")}),e.jsx(D,{fields:f,minW:130}),u.length===1&&s.startsWith("stn")&&i.current.hasNode(s)&&e.jsx(he,{}),u.length===1&&s.startsWith("line")&&i.current.hasEdge(s)&&e.jsx(ge,{})]})}function ye(){const{t:r}=R(),n=L(),t=c.useCallback(()=>{n(E()),n(v()),n(S(p.current.export()))},[n,E,v,S]),{selected:u,refresh:{nodes:s}}=P(h=>h.runtime),i=u.at(0),p=c.useRef(window.graph),[f,g]=c.useState({x:0,y:0});c.useEffect(()=>{if(i!=null&&i.startsWith("stn")||i!=null&&i.startsWith("misc_node_")){const h=p.current.getNodeAttribute(i,"x"),b=p.current.getNodeAttribute(i,"y");g({x:h,y:b})}},[s,u]);const x=[{type:"input",label:r("panel.details.nodePosition.pos.x"),value:f.x.toString(),validator:h=>!Number.isNaN(h),onChange:h=>{p.current.mergeNodeAttributes(i,{x:Number(h)}),t()}},{type:"input",label:r("panel.details.nodePosition.pos.y"),value:f.y.toString(),validator:h=>!Number.isNaN(h),onChange:h=>{p.current.mergeNodeAttributes(i,{y:Number(h)}),t()}}];return e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:r("panel.details.nodePosition.title")}),e.jsx(D,{fields:x,minW:130})]})}function xe(){const{t:r}=R(),n=L(),{selected:t}=P(y=>y.runtime),u=t.at(0),s=c.useRef(window.graph),[i,p]=c.useState("undefined"),[f,g]=c.useState("undefined"),[x,h]=c.useState("undefined"),[b,m]=c.useState("undefined");c.useEffect(()=>{var y,l,N,O;if(u!=null&&u.startsWith("line")){const[C,T]=s.current.extremities(u);if(p(C),g(T),C.startsWith("stn")){const W=s.current.getNodeAttribute(C,"type");h((l=(y=s.current.getNodeAttribute(C,W))==null?void 0:y.names.at(0))!=null?l:"undefined")}if(T.startsWith("stn")){const W=s.current.getNodeAttribute(T,"type");m((O=(N=s.current.getNodeAttribute(T,W))==null?void 0:N.names.at(0))!=null?O:"undefined")}}},[t]);const d=G(()=>{n(k()),n(H(i))}),o=G(()=>{n(k()),n(H(f))}),a=[{type:"custom",label:r("panel.details.lineExtremities.source"),component:e.jsx(A,{flex:1,size:"sm",variant:"link",onClick:d,children:i})},{type:"custom",label:r("panel.details.lineExtremities.target"),component:e.jsx(A,{flex:1,size:"sm",variant:"link",onClick:o,children:f})},{type:"input",label:r("panel.details.lineExtremities.sourceName"),value:x},{type:"input",label:r("panel.details.lineExtremities.targetName"),value:b}];return e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:r("panel.details.lineExtremities.title")}),e.jsx(D,{fields:a,minW:130})]})}const V={...Y,...ce},Ee=()=>{const{t:r}=R(),n=L(),t=c.useRef(window.graph),u=c.useCallback(()=>{n(E()),n(v()),n(S(t.current.export()))},[n,E,v,S]),{selected:s,mode:i}=P(d=>d.runtime),p=()=>n(k()),f=d=>{const o=structuredClone(t.current.getNodeAttributes(d));o.x+=50,o.y+=50;const a=d.startsWith("stn")?`stn_${$(10)}`:`misc_node_${$(10)}`;t.current.addNode(a,o),n(E()),n(S(t.current.export()))},g=d=>{n(k()),d.forEach(o=>{t.current.hasNode(o)?(t.current.dropNode(o),u()):t.current.hasEdge(o)&&(t.current.dropEdge(o),n(v()),n(S(t.current.export())))})},[x,h]=c.useState("");c.useEffect(()=>{var o;const d=s.at(0);t.current.hasEdge(d)&&h((o=t.current.getEdgeAttribute(d,"reconcileId"))!=null?o:"undefined")},[s]);const b=[],m=s.at(0);if(s.length===1&&t.current.hasNode(m)){const d=t.current.getNodeAttribute(m,"type"),o=t.current.getNodeAttribute(m,d);b.push(...V[d].fields.filter(a=>a.type!=="custom").map(a=>{var y,l,N;return{type:a.type,label:r(a.label),value:(y=a.value)==null?void 0:y.call(a,o),isChecked:(l=a.isChecked)==null?void 0:l.call(a,o),hidden:(N=a.hidden)==null?void 0:N.call(a,o),options:a.options,disabledOptions:a.disabledOptions&&a.disabledOptions(o),validator:a.validator,oneLine:a.oneLine,onChange:O=>{let C;try{C=a.onChange(O,o)}catch(T){n(ae({status:"error",message:r(`err-code.${T}`)}));return}t.current.mergeNodeAttributes(m,{[d]:C}),n(E()),n(S(t.current.export()))}}}),...V[d].fields.filter(a=>a.type==="custom"))}if(s.length===1&&t.current.hasEdge(m)){const d=t.current.getEdgeAttribute(m,"type"),o=t.current.getEdgeAttribute(m,d);b.push(...X[d].fields.map(l=>({type:l.type,label:r(l.label),value:l.value(o),options:l.options,disabledOptions:l.disabledOptions&&l.disabledOptions(o),validator:l.validator,onChange:N=>{t.current.mergeEdgeAttributes(m,{[d]:l.onChange(N,o)}),n(v()),n(S(t.current.export()))}})));const a=t.current.getEdgeAttribute(m,"style"),y=t.current.getEdgeAttribute(m,a);b.push(...w[a].fields.filter(l=>l.type!=="custom").map(l=>({type:l.type,label:r(l.label),value:l.value(y),options:l.options,disabledOptions:l.disabledOptions&&l.disabledOptions(y),validator:l.validator,onChange:N=>{t.current.mergeEdgeAttributes(m,{[a]:l.onChange(N,y)}),n(v()),n(S(t.current.export()))}}))),b.push(...w[a].fields.filter(l=>l.type==="custom"))}return e.jsxs(re,{isOpen:s.length>0&&!i.startsWith("line")&&!i.startsWith("misc-edge"),width:300,header:"Dummy header",alwaysOverlay:!0,children:[e.jsx(ie,{onClose:p,children:r("panel.details.header")}),e.jsxs(oe,{children:[e.jsx(me,{}),s.length===1&&t.current.hasNode(m)&&e.jsx(ye,{}),s.length===1&&t.current.hasEdge(m)&&e.jsx(xe,{}),s.length===1&&e.jsxs(z,{p:1,children:[e.jsx(I,{as:"h5",size:"sm",children:r("panel.details.specificAttrsTitle")}),e.jsx(D,{fields:b,minW:276})]})]}),e.jsx(le,{children:e.jsxs(te,{children:[s.length===1&&t.current.hasNode(s.at(0))&&e.jsx(A,{size:"sm",variant:"outline",onClick:()=>f(s.at(0)),children:r("panel.details.footer.duplicate")}),e.jsx(A,{size:"sm",variant:"outline",onClick:()=>g(s),children:r("panel.details.footer.remove")})]})})]})};export{Ee as default};
