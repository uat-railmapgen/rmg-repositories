import{e as c}from"./share-900f3d92.js";const T=(t,i,n)=>{const a=i[0];if(a.includes(t)){if(i.slice(1).find(e=>e.includes(t)))return 0;{const e=i.slice(1).find(s=>{const R=s[0]==="linestart",h=a.indexOf(t)<a.indexOf(s.slice(-1)[0]),r=s.slice(-1)[0]==="lineend",N=a.indexOf(t)>a.indexOf(s[0]);return R&&h||r&&N});return e?n[e[0]].children.indexOf(e[1])===1?-1:1:0}}else{const e=i.slice(1).find(s=>s.includes(t));return e?e[0]!=="linestart"&&e.slice(-1)[0]!=="lineend"?n[e[0]].children.indexOf(e[1])===1?1.2:-1.2:n[e[0]].children.indexOf(e[1])===1?1:-1:0}},g=t=>{const n="a6,6,0,0,1,6,6",a="a6,6,0,0,0,6,6",e="a6,6,0,0,0,6,-6",s="a6,6,0,0,1,6,-6";let R;const h=[];for(const r of t){if(!R)h.push("M"+r.join(","));else if(r[1]===R[1])h.push("H"+r[0]);else{const N=(r[0]+R[0])/2-(R[1]===0?0:12);h.push("H"+N),r[1]>R[1]?(h.push(n),h.push("V"+(r[1]-6)),h.push(a)):(h.push(e),h.push("V"+(r[1]+6)),h.push(s)),h.push("H"+r[0])}R=r}return h.join(" ").replace(/( H([\d.]+))+/g," H$2")},p=(t,i)=>{let n=0;const{transfer:a}=t[i],e=a.info.map(s=>s.length);return a.tick_direc==="l"&&(!e[1]&&e[0]>1&&(n+=.4),e[1]&&(e[0]!==1||e[1]!==2)&&(n+=.4)),e[0]===1&&e[1]===2&&t[i].parents[0]!=="linestart"&&t[i].children[0]!=="lineend"&&(n+=.8),t[i].parents.length===2&&(n+=.2),t[t[i].parents[0]].children.length===2&&(n+=.4),n},S=(t,i)=>{let n=0;const{transfer:a}=t[i],e=a.info.map(s=>s.length);return a.tick_direc==="r"&&(!e[1]&&e[0]>1&&(n+=.4),e[1]&&(e[0]!==1||e[1]!==2)&&(n+=.4)),e[0]===1&&e[1]===2&&t[i].parents[0]!=="linestart"&&t[i].children[0]!=="lineend"&&(n+=.8),t[i].children.length===2&&(n+=.2),t[t[i].children[0]].parents.length===2&&(n+=.4),n};class _ extends c{constructor(){super(...arguments),this.leftWideFactor=i=>p(this.stnList,i),this.rightWideFactor=i=>S(this.stnList,i)}static drawLine(i,n,a,e,s,R,h,r,N=0){const U={main:[],pass:[],sidingMain:[],sidingPass:[]};return i.forEach(l=>{const d=l[0]!=="linestart"&&l.slice(-1)[0]!=="lineend";l=l.filter(u=>!["linestart","lineend"].includes(u));let f=l.filter(u=>n[u]>=0),o=l.filter(u=>n[u]<=0);f.length===1&&(o=l),f.filter(u=>o.indexOf(u)!==-1).length===0&&f.length&&(o[0]===l[0]?o.push(f[0]):f[0]===l[0]&&f[f.length-1]===l[l.length-1]&&o.length?(o=l,f=[]):o.unshift(f[f.length-1])),d?(U.sidingMain.push(g(f.map(u=>[s[u],R[u]]))),U.sidingPass.push(g(o.map(u=>[s[u],R[u]])))):(U.main.push(new this({stnList:a,criticalPath:r})._linePath(f,e,i,s,R,h,r,N)),U.pass.push(new this({stnList:a,criticalPath:r})._linePath(o,e,i,s,R,h,r,N)))}),U}}class A extends _{static drawLine(i,n,a,e,s,R,h,r,N=0){const U={main:[],pass:[],sidingMain:[],sidingPass:[]};return i.forEach(l=>{l=l.filter(o=>!["linestart","lineend"].includes(o));let d=l.filter(o=>n[o]>=0),f=l.filter(o=>n[o]<=0);d.length===1&&(f=l),d.filter(o=>f.indexOf(o)!==-1).length===0&&d.length&&(f[0]===l[0]?f.push(d[0]):d[0]===l[0]&&d[d.length-1]===l[l.length-1]&&f.length?(f=l,d=[]):f.unshift(d[d.length-1])),U.main.push(new this({stnList:a,criticalPath:r})._linePath(d,e,i,s,R,h,r,N)),U.pass.push(new this({stnList:a,criticalPath:r})._linePath(f,e,i,s,R,h,r,N))}),U}}export{_ as S,A as a,T as g,p as l,S as r};
