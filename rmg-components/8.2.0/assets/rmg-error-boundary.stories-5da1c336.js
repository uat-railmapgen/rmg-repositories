import{j as o}from"./jsx-runtime-ffb262ed.js";import{R as a}from"./rmg-error-boundary-7e7e2763.js";import{R as p}from"./index-76fb7be0.js";import"./index-5ca24e16.js";import"./chunk-ZJJGQIVY-4bd0a974.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-55b21f7f.js";import"./chunk-QURMB2UJ-923711c0.js";import"./motion-d7628447.js";import"./chunk-3KCBMPN5-a2e47a89.js";import"./chunk-2GBDXOMA-39401b6c.js";import"./index-7abe7895.js";import"./chunk-UVUR7MCU-5ad2b195.js";import"./emotion-react.browser.esm-583f468d.js";import"./index-17e33fe9.js";import"./chunk-34PD6CUK-5864d39e.js";import"./index-3e7aa64e.js";import"./index-d3ea75b5.js";import"./chunk-UU5OHSNF-1e068ca9.js";import"./inheritsLoose-c82a83d4.js";import"./index-eaa72e81.js";import"./chunk-37N6GCLA-65667b0d.js";import"./chunk-2OOHT3W5-a8e3452a.js";class e extends p.Component{constructor(t){super(t),this.state={counter:0},this.handleClick=this.handleClick.bind(this)}handleClick(){this.setState(({counter:t})=>({counter:t+1}))}render(){if(this.state.counter===5)throw new Error("I crashed!");return o.jsxs("h1",{onClick:this.handleClick,children:["Click me: ",this.state.counter]})}}try{e.displayName="BuggyCounter",e.__docgenInfo={description:"",displayName:"BuggyCounter",props:{}}}catch{}const v={title:"RmgErrorBoundary",component:a},r=()=>o.jsx(a,{allowReset:!0,children:o.jsx(e,{})});var i,s,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  return <RmgErrorBoundary allowReset>
            <BuggyCounter />
        </RmgErrorBoundary>;
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const z=["Basic"];export{r as Basic,z as __namedExportsOrder,v as default};
//# sourceMappingURL=rmg-error-boundary.stories-5da1c336.js.map
