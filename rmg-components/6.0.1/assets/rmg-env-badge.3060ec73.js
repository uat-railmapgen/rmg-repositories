var m=Object.defineProperty;var t=(e,r)=>m(e,"name",{value:r,configurable:!0});import{r as g,a as i,j as o}from"./jsx-runtime.4889c434.js";import{R as n}from"./index.04f2df3b.js";import{P as u,d as v,b as f,e as R,f as B,g as _,c as y}from"./index.esm.c3e89734.js";import{b as E}from"./index.esm.381ad692.js";const h=t(e=>{switch(e){case n.DEV:return"red";case n.UAT:return"orange";case n.PRD:return"green"}},"getBadgeColour");function d(e){const{environment:r,version:s,popoverHeader:a,popoverBody:l}=e,[c,p]=g.exports.useState(!1);return i(u,{isOpen:c,onOpen:()=>a&&p(!0),onClose:()=>p(!1),children:[o(v,{children:o(E,{ml:1,colorScheme:h(r),title:`${r}: ${s}`,cursor:a?"pointer":"help",children:r===n.PRD?s:r})}),i(f,{children:[o(R,{}),o(B,{}),o(_,{children:a}),o(y,{children:l})]})]})}t(d,"RmgEnvBadge");try{d.displayName="RmgEnvBadge",d.__docgenInfo={description:"",displayName:"RmgEnvBadge",props:{environment:{defaultValue:null,description:"",name:"environment",required:!0,type:{name:"enum",value:[{value:'"DEV"'},{value:'"UAT"'},{value:'"PRD"'}]}},version:{defaultValue:null,description:"",name:"version",required:!0,type:{name:"string"}},popoverHeader:{defaultValue:null,description:"",name:"popoverHeader",required:!1,type:{name:"ReactNode"}},popoverBody:{defaultValue:null,description:"",name:"popoverBody",required:!1,type:{name:"ReactNode"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/rmg-env-badge/rmg-env-badge.tsx#RmgEnvBadge"]={docgenInfo:d.__docgenInfo,name:"RmgEnvBadge",path:"src/rmg-env-badge/rmg-env-badge.tsx#RmgEnvBadge"})}catch{}export{d as R};
//# sourceMappingURL=rmg-env-badge.3060ec73.js.map
