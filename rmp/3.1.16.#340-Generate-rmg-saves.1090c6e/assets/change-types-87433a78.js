import{S as i,l as c,ac as f,c as a}from"./index-a2ebb3e2.js";import{s as A}from"./stations-fe04db83.js";const r=[i.ShmetroBasic2020],b=(t,e,o)=>{const s=t.getNodeAttribute(e,"type"),n=t.getNodeAttribute(e,s).names,u={...A[o].defaultAttrs,names:n};(!Object.values(r).includes(s)||!Object.values(r).includes(o))&&(u.nameOffsetX=t.getNodeAttribute(e,s).nameOffsetX,u.nameOffsetY=t.getNodeAttribute(e,s).nameOffsetY),t.removeNodeAttribute(e,s),t.mergeNodeAttributes(e,{type:o,[o]:u})},g=(t,e,o)=>t.filterNodes((s,n)=>s.startsWith("stn")&&n.type===e).forEach(s=>{b(t,s,o)}),E=(t,e,o)=>{const s=t.getEdgeAttribute(e,"type");t.removeEdgeAttribute(e,s);const n=structuredClone(c[o].defaultAttrs);t.mergeEdgeAttributes(e,{type:o,[o]:n})},l=(t,e,o,s)=>{const n=t.getEdgeAttribute(e,"style");t.removeEdgeAttribute(e,n);const u=structuredClone(f[o].defaultAttrs);o===a.SingleColor&&s&&(u.color=s),t.mergeEdgeAttributes(e,{style:o,[o]:u}),o===a.River?t.setEdgeAttribute(e,"zIndex",-5):t.setEdgeAttribute(e,"zIndex",0)};export{b as a,E as b,g as c,l as d};
