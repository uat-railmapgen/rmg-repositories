import{u as g,m as x,j as t,M as w,b as v,c as M,e as y,f as C,g as R,a1 as S,l as E,B as T,a0 as B,$ as P,aP as p,aY as k,s as b,aZ as A,aj as U,ad as D}from"./vendor-dfcbff68.js";const I=(o,e,s)=>{const n=new Blob([s],{type:e});F(o,n)},F=(o,e)=>{const s=window.URL.createObjectURL(e),n=document.createElement("a");n.href=s,n.download=o,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(s)},W=o=>new Promise(e=>{const s=new FileReader;s.onloadend=()=>e(s.result),s.readAsText(o)}),_=()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),L=o=>{if(o){const e=new Date().getTime()-o;return e<60*1e3?["Just now"]:e<2*60*1e3?["1","minute ago"]:e<60*60*1e3?[Math.floor(e/1e3/60).toString(),"minutes ago"]:e<2*60*60*1e3?["1","hour ago"]:e<24*60*60*1e3?[Math.floor(e/1e3/60/60).toString(),"hours ago"]:e<48*60*60*1e3?["1","day ago"]:[Math.floor(e/1e3/60/60/24).toString(),"days ago"]}else return["Unknown"]},G=o=>new Promise(e=>{setTimeout(e,o)});function O(o){var c;const{config:e,onClose:s,onUpdate:n}=o,{t:u}=g(),[l,i]=x.useState((c=e==null?void 0:e.name)!=null?c:"");x.useEffect(()=>{var d;e&&i((d=e.name)!=null?d:"")},[e]);const r=[{type:"input",label:u("Project name"),value:l,onChange:i,debouncedDelay:0}],h=()=>{var d;e&&((d=e.name)!=null?d:"")!==l&&n({...e,name:l})};return t.jsxs(w,{isOpen:!!e,onClose:s,isCentered:!0,children:[t.jsx(v,{}),t.jsxs(M,{children:[t.jsx(y,{children:u("Edit project info")}),t.jsx(C,{}),t.jsx(R,{children:t.jsx(S,{fields:r})}),t.jsx(E,{children:t.jsx(T,{colorScheme:"primary",onClick:h,children:u("Confirm")})})]})]})}const Y={flex:"2 1 0%",overflow:"hidden",minW:{base:"unset",md:240},w:{base:"100%",md:"unset"},mr:{base:0,md:2},mb:{base:2,md:0},"& > div":{flexDirection:"column",h:200,overflowX:"hidden",overflowY:"auto",borderRadius:"md",borderWidth:2,"& >.chakra-button":{alignItems:"center"},"& .chakra-button__group":{"& button:not(:first-of-type)":{h:"100%"}}}};function H(o){const{paramRegistry:e,downloading:s,selectedParam:n,onParamSelect:u,onParamRemove:l,onParamUpdate:i}=o,{t:r}=g(),[h,c]=x.useState(),d=a=>{i==null||i(a),c(void 0)};return t.jsxs(B,{sx:Y,children:[t.jsxs(P,{children:[s&&t.jsx(p,{variant:"ghost",primaryText:r("Downloading")+"...",secondaryText:s,isDisabled:!0}),e.slice().sort((a,m)=>{var f,j;return((f=m.lastModified)!=null?f:0)-((j=a.lastModified)!=null?j:0)}).map(a=>{var m;return t.jsxs(k,{size:"sm",isAttached:!0,colorScheme:n===a.id?"primary":void 0,variant:n===a.id?"solid":"ghost",children:[t.jsx(p,{primaryText:(m=a.name)!=null?m:r("Project")+" "+a.id,secondaryText:r("Last modified")+": "+L(a.lastModified).map(r).join(" "),"aria-pressed":n===a.id,onClick:()=>u(a.id)}),i&&t.jsx(b,{"aria-label":r("Edit project info"),title:r("Edit project info"),icon:t.jsx(A,{}),onClick:()=>c(a)}),l&&t.jsx(b,{"aria-label":r("Remove project"),title:r("Remove project"),icon:t.jsx(U,{}),onClick:()=>l(a.id)})]},a.id)})]}),e.length>=10&&t.jsx(D,{as:"em",fontSize:"xs",children:r("You have reached the maximum number of projects.")}),t.jsx(O,{config:h,onClose:()=>c(void 0),onUpdate:d})]})}export{H as P,I as a,F as d,_ as i,W as r,G as w};
