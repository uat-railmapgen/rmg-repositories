import{j as y}from"./vendor-dfcbff68.js";import{S as _}from"./index-13ec54b0.js";function W(i){const{type:t,svgWidth:n,svgHeight:e,canvasScale:s,theme:r,children:h}=i;return y.jsxs("svg",{id:t,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",height:e*s,viewBox:`0 0 ${n} ${e}`,colorInterpolationFilters:"sRGB",style:{["--rmg-svg-width"]:n+"px",["--rmg-svg-height"]:e+"px",["--rmg-theme-colour"]:r[2],["--rmg-theme-fg"]:r[3]},children:[y.jsx("rect",{id:"canvas-bg",fill:"white",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}}),h,y.jsx("rect",{id:"canvas-border",fill:"none",strokeWidth:3,stroke:"none",style:{height:"var(--rmg-svg-height)",width:"var(--rmg-svg-width)"}})]})}const k=(i,t,n)=>Object.keys(i).reduce((e,s)=>({...e,[s]:i[s].children.reduce((r,h)=>({...r,[h]:1+t(i,h)+n(i,s)}),{})}),{}),c=(i,t,n)=>{if(i===t)return{len:0,nodes:[i]};const e=[],s=[];Object.keys(n[i]).forEach(h=>{const o=c(h,t,n);o.len<0||(e.push(n[i][h]+o.len),o.nodes.unshift(i),s.push(o.nodes))});const r=Math.max(...e);return{len:r,nodes:s[e.indexOf(r)]}},L=(i,t,n)=>{const e=c("linestart","lineend",t);if(e.nodes.includes(i))return c(e.nodes[1],i,t).len;{const s=n.filter(g=>g.includes(i))[0];let r=i;for(;!e.nodes.includes(r);)r=s[s.indexOf(r)-1];let h=i;for(;!e.nodes.includes(h);)h=s[s.indexOf(h)+1];const o=r==="linestart",$=h==="lineend",l=[];return!o&&!$?(l[0]=c(e.nodes[1],r,t).len,l[1]=c(r,h,t).len,l[2]=c(r,i,t).len,l[3]=c(i,h,t).len):o?(l[0]=0,l[1]=c(e.nodes[1],h,t).len,l[2]=c(s[1],i,t).len,l[3]=c(i,h,t).len):(l[0]=c(e.nodes[1],r,t).len,l[1]=c(r,e.nodes.slice(-2)[0],t).len,l[2]=c(r,i,t).len,l[3]=c(i,s.slice(-2)[0],t).len),l[0]+l[2]*l[1]/(l[2]+l[3])}},O=(i,t,n)=>{for(const e of n){const s=e.indexOf(i),r=e.indexOf(t);if(r!==-1&&r<s)return!0}return!1},P=(i,t,n)=>{for(const e of n){const s=e.indexOf(i),r=e.indexOf(t);if(s!==-1&&s<r)return!0}return!1},F=(i,t,n)=>(console.log("computing stations' states"),[...new Set([].concat(...t))].reduce((e,s)=>({...e,[s]:s===i?0:(n===_.right?P(i,s,t):O(i,s,t))?1:-1}),{}));class H{constructor(t){this.yShares={},this.xShares={},this.namePoss={},this.stnList={},this.criticalPath={},this.leftWideFactor=n=>0,this.rightWideFactor=n=>0,this.pathTurnParams=n=>{const r=35-17.5*Math.sqrt(3),h=n-2*r,o=h*Math.sqrt(3);return{tr:35,dx_a:17.5,dy_a:r,dx_l:o,dy_l:h}},this.pathTurnSE=n=>{const{tr:e,dx_a:s,dy_a:r,dx_l:h,dy_l:o}=this.pathTurnParams(n);return`a ${e},${e} 0 0,1 ${s},${r} l ${h},${o} a ${e},${e} 0 0,0 ${s},${r}`},this.pathTurnNE=n=>{const{tr:e,dx_a:s,dy_a:r,dx_l:h,dy_l:o}=this.pathTurnParams(n);return`a ${e},${e} 0 0,0 ${s},${-r} l ${h},${-o} a ${e},${e} 0 0,1 ${s},${-r}`},this.stnList=t.stnList,this.criticalPath=t.criticalPath}getYShare(t,n){if(t in this.yShares)return this.yShares[t];if(["linestart","lineend"].includes(t)||this.stnList[t].parents.length>1||this.stnList[t].children.length>1)return this.yShares[t]=0,0;const e=this.stnList[t].parents[0];if(e)if(this.stnList[e].children.length===1){const s=this.getYShare(e);return this.yShares[t]=s,s}else{const s=this.stnList[e].children.indexOf(t)===0?1:-1;return this.yShares[t]=s,s}else return this.yShares[t]=0,0}static getYShares(t,n){console.log("computing y shares");const e=new this({stnList:t});return Object.keys(t).forEach(s=>{["linestart","lineend"].includes(s)||s in e.yShares||e.getYShare(s,n)}),e.yShares}_linePath(t,n,e,s,r,h,o,$){let[l,g,S]=[];const a=[],{dx_a:w,dx_l:v}=this.pathTurnParams(h),m=w+v/2,d=(n[1]-n[0])/o.len*2,x=((n[1]-n[0])/o.len-2*m)/2;return x+d<0&&console.warn(`SVG width too small! ${x+d}`),t.forEach(p=>{const f=s[p],u=r[p];if(!g&&g!==0){[l,S,g]=[p,f,u],t.length===1?a.push(`M ${f},${u}`):e[0].includes(p)?e[0].includes(t[1])?a.push(`M ${f},${u}`):(s[t[1]]>0&&a.push(`M ${f},${u+$}`),r[t[1]]<0&&a.push(`M ${f},${u-$}`)):a.push(`M ${f},${u}`);return}u>g?(a.push(u===0?`h ${f-S-d*this.leftWideFactor(p)-x-m*2}`:`h ${d*this.rightWideFactor(l)+x}`),a.push(this.pathTurnSE(h))):u<g&&(a.push(u===0?`h ${f-S-d*this.leftWideFactor(p)-x-m*2}`:`h ${d*this.rightWideFactor(l)+x}`),a.push(this.pathTurnNE(h))),a.push(`H ${f}`),[l,S,g]=[p,f,u]}),a.join(" ").replace(/( H ([\d.]+))+/g," H $2")}}const Y=(i,t)=>{i=i.filter(s=>!["linestart","lineend"].includes(s));let n=i.filter(s=>t[s]>=0),e=i.filter(s=>t[s]<=0);return n.length===1&&(e=i),n.filter(s=>e.indexOf(s)!==-1).length===0&&n.length&&(e[0]===i[0]?e.push(n[0]):n[0]===i[0]&&n[n.length-1]===i[i.length-1]&&e.length?(e=i,n=[]):e.unshift(n[n.length-1])),{main:n,pass:e}};export{W as S,k as a,F as b,c,Y as d,H as e,L as g};
