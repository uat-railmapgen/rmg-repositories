import{k as E,c as b,f as g,a as H}from"./chunk-ZJJGQIVY-35f6fb8e.js";import{j as s}from"./jsx-runtime-4ca860c5.js";import{g as R}from"./index-23143ea6.js";import{r as a}from"./index-61bf1805.js";function A(e,t){return Array.isArray(e)?e.map(r=>r===null?null:t(r)):E(e)?Object.keys(e).reduce((r,i)=>(r[i]=t(e[i]),r),{}):e!=null?t(e):null}var j=e=>s.jsx(b.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});j.displayName="StackItem";function M(e){const{spacing:t,direction:r}=e,i={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":A(r,c=>i[c])}}var W=g((e,t)=>{const{isInline:r,direction:i,align:c,justify:_,spacing:d="0.5rem",wrap:S,children:h,divider:l,className:w,shouldWrapChildren:m,...C}=e,u=r?"row":i??"column",x=a.useMemo(()=>M({spacing:d,direction:u}),[d,u]),n=!!l,y=!m&&!n,N=a.useMemo(()=>{const f=R(h);return y?f:f.map((o,v)=>{const k=typeof o.key<"u"?o.key:v,B=v+1===f.length,p=m?s.jsx(j,{children:o},k):o;if(!n)return p;const D=a.cloneElement(l,{__css:x}),I=B?null:D;return s.jsxs(a.Fragment,{children:[p,I]},k)})},[l,x,n,y,m,h]),L=H("chakra-stack",w);return s.jsx(b.div,{ref:t,display:"flex",alignItems:c,justifyContent:_,flexDirection:u,flexWrap:S,gap:n?void 0:d,className:L,...C,children:N})});W.displayName="Stack";var O=g((e,t)=>s.jsx(W,{align:"center",...e,direction:"row",ref:t}));O.displayName="HStack";export{O as H};
//# sourceMappingURL=chunk-3ASUQ6PA-42e2c09a.js.map
