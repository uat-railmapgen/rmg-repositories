import{S as A,c as u,l as b,ab as f}from"./index-f4d385e1.js";import{s as l}from"./stations-cf62a9cf.js";const i=[A.ShmetroBasic2020],m=(t,e,o)=>{const s=t.getNodeAttribute(e,"type"),n=t.getNodeAttribute(e,s).names,r={...l[o].defaultAttrs,names:n};(!Object.values(i).includes(s)||!Object.values(i).includes(o))&&(r.nameOffsetX=t.getNodeAttribute(e,s).nameOffsetX,r.nameOffsetY=t.getNodeAttribute(e,s).nameOffsetY),t.removeNodeAttribute(e,s),t.mergeNodeAttributes(e,{type:o,[o]:r})},E=(t,e,o)=>t.filterNodes((s,n)=>s.startsWith("stn")&&n.type===e).forEach(s=>{m(t,s,o)}),y=(t,e,o)=>{const s=t.getEdgeAttribute(e,"type");t.removeEdgeAttribute(e,s);const n=structuredClone(b[o].defaultAttrs);t.mergeEdgeAttributes(e,{type:o,[o]:n})},c=[u.SingleColor,u.BjsubwaySingleColor,u.BjsubwayTram,u.MTRRaceDays,u.MTRLightRail],N=(t,e,o,s)=>{const n=t.getEdgeAttribute(e,"style"),r=t.getEdgeAttribute(e,n);t.removeEdgeAttribute(e,n);const a=structuredClone(f[o].defaultAttrs);c.includes(n)&&c.includes(o)?a.color=r.color:o===u.SingleColor&&s&&(a.color=s),t.mergeEdgeAttributes(e,{style:o,[o]:a}),o===u.River?t.setEdgeAttribute(e,"zIndex",-5):t.setEdgeAttribute(e,"zIndex",0)};export{m as a,y as b,E as c,N as d};
