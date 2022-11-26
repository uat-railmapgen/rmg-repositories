var F=Object.defineProperty;var y=(t,e)=>F(t,"name",{value:e,configurable:!0});import{R as h,a as C,j as f}from"./jsx-runtime.6cb555d4.js";import{r as b,i as k,e as S,h as L,o as D,j as N,q as E,g as W}from"./index.esm.0104b23d.js";import{F as $}from"./index.esm.09d9eaee.js";function z(t,e,a){return(t-e)*100/(a-e)}y(z,"valueToPercent");var B=b({"0%":{strokeDasharray:"1, 400",strokeDashoffset:"0"},"50%":{strokeDasharray:"400, 400",strokeDashoffset:"-100"},"100%":{strokeDasharray:"400, 400",strokeDashoffset:"-260"}}),M=b({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),H=b({"0%":{left:"-40%"},"100%":{left:"100%"}}),U=b({from:{backgroundPosition:"1rem 0"},to:{backgroundPosition:"0 0"}});function A(t){const{value:e=0,min:a,max:l,valueText:i,getValueText:r,isIndeterminate:s,role:o="progressbar"}=t,n=z(e,a,l);return{bind:{"data-indeterminate":s?"":void 0,"aria-valuemax":l,"aria-valuemin":a,"aria-valuenow":s?void 0:e,"aria-valuetext":y(()=>{if(e!=null)return typeof r=="function"?r(e,n):i},"getAriaValueText")(),role:o},percent:n,value:e}}y(A,"getProgressProps");var R=y(t=>{const{size:e,isIndeterminate:a,...l}=t;return h.createElement(S.svg,{viewBox:"0 0 100 100",__css:{width:e,height:e,animation:a?`${M} 2s linear infinite`:void 0},...l})},"Shape");R.displayName="Shape";var q=y(t=>h.createElement(S.circle,{cx:50,cy:50,r:42,fill:"transparent",...t}),"Circle");q.displayName="Circle";var I=k((t,e)=>{var O;const{size:a="48px",max:l=100,min:i=0,valueText:r,getValueText:s,value:o,capIsRound:n,children:u,thickness:d="10px",color:g="#0078d4",trackColor:v="#edebe9",isIndeterminate:c,...w}=t,m=A({min:i,max:l,value:o,valueText:r,getValueText:s,isIndeterminate:c}),p=c?void 0:((O=m.percent)!=null?O:0)*2.64,_=p==null?void 0:`${p} ${264-p}`,V=c?{css:{animation:`${B} 1.5s linear infinite`}}:{strokeDashoffset:66,strokeDasharray:_,transitionProperty:"stroke-dasharray, stroke",transitionDuration:"0.6s",transitionTimingFunction:"ease"},x={display:"inline-block",position:"relative",verticalAlign:"middle",fontSize:a};return h.createElement(S.div,{ref:e,className:"chakra-progress",...m.bind,...w,__css:x},C(R,{size:a,isIndeterminate:c,children:[f(q,{stroke:v,strokeWidth:d,className:"chakra-progress__track"}),f(q,{stroke:g,strokeWidth:d,className:"chakra-progress__indicator",strokeLinecap:n?"round":void 0,opacity:m.value===0&&!c?0:void 0,...V})]}),u)});I.displayName="CircularProgress";var[K,Y]=L({name:"ProgressStylesContext",errorMessage:`useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `}),G=k((t,e)=>{const{min:a,max:l,value:i,isIndeterminate:r,role:s,...o}=t,n=A({value:i,min:a,max:l,isIndeterminate:r,role:s}),d={height:"100%",...Y().filledTrack};return h.createElement(S.div,{ref:e,style:{width:`${n.percent}%`,...o.style},...n.bind,...o,__css:d})}),J=k((t,e)=>{var a;const{value:l,min:i=0,max:r=100,hasStripe:s,isAnimated:o,children:n,borderRadius:u,isIndeterminate:d,"aria-label":g,"aria-labelledby":v,title:c,role:w,...m}=D(t),p=N("Progress",t),_=u!=null?u:(a=p.track)==null?void 0:a.borderRadius,V={animation:`${U} 1s linear infinite`},P={...!d&&s&&o&&V,...d&&{position:"absolute",willChange:"left",minWidth:"50%",animation:`${H} 1s ease infinite normal none running`}},T={overflow:"hidden",position:"relative",...p.track};return h.createElement(S.div,{ref:e,borderRadius:_,__css:T,...m},C(K,{value:p,children:[f(G,{"aria-label":g,"aria-labelledby":v,min:i,max:r,value:l,isIndeterminate:d,css:P,borderRadius:_,title:c,role:w}),n]}))});J.displayName="Progress";var Q=S("div",{baseStyle:{fontSize:"0.24em",top:"50%",left:"50%",width:"100%",textAlign:"center",position:"absolute",transform:"translate(-50%, -50%)"}});Q.displayName="CircularProgressLabel";const j=y(t=>{const{isIndeterminate:e,value:a,sx:l,...i}=t,r=E("primary.500","primary.300"),s=W("RmgLoader");return C($,{sx:{...s,...l},children:[f("div",{className:"rmg-loader__backdrop"}),f(I,{isIndeterminate:e,value:a,color:r,...i})]})},"RmgLoader");try{j.displayName="RmgLoader",j.__docgenInfo={description:"",displayName:"RmgLoader",props:{as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"As<any>"}},_hover:{defaultValue:null,description:"Styles for CSS selector `&:hover`",name:"_hover",required:!1,type:{name:"SystemStyleObject"}},_active:{defaultValue:null,description:"Styles for CSS Selector `&:active`",name:"_active",required:!1,type:{name:"SystemStyleObject"}},_focus:{defaultValue:null,description:"Styles for CSS selector `&:focus`",name:"_focus",required:!1,type:{name:"SystemStyleObject"}},_highlighted:{defaultValue:null,description:"Styles for the highlighted state.",name:"_highlighted",required:!1,type:{name:"SystemStyleObject"}},_focusWithin:{defaultValue:null,description:"Styles to apply when a child of this element has received focus\n- CSS Selector `&:focus-within`",name:"_focusWithin",required:!1,type:{name:"SystemStyleObject"}},_focusVisible:{defaultValue:null,description:"Styles to apply when this element has received focus via tabbing\n- CSS Selector `&:focus-visible`",name:"_focusVisible",required:!1,type:{name:"SystemStyleObject"}},_disabled:{defaultValue:null,description:"Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:\n- `&[aria-disabled=true]`\n- `&:disabled`\n- `&[data-disabled]`\n- `&[disabled]`",name:"_disabled",required:!1,type:{name:"SystemStyleObject"}},_readOnly:{defaultValue:null,description:"Styles for CSS Selector `&:readonly`",name:"_readOnly",required:!1,type:{name:"SystemStyleObject"}},_before:{defaultValue:null,description:'Styles for CSS selector `&::before`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _before={{content:`""` }}/>\n```',name:"_before",required:!1,type:{name:"SystemStyleObject"}},_after:{defaultValue:null,description:'Styles for CSS selector `&::after`\n\nNOTE:When using this, ensure the `content` is wrapped in a backtick.\n@example ```jsx\n<Box _after={{content:`""` }}/>\n```',name:"_after",required:!1,type:{name:"SystemStyleObject"}},_empty:{defaultValue:null,description:"Styles for CSS selector `&:empty`",name:"_empty",required:!1,type:{name:"SystemStyleObject"}},_expanded:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-expanded` is `true`\n- CSS selector `&[aria-expanded=true]`",name:"_expanded",required:!1,type:{name:"SystemStyleObject"}},_checked:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `true`\n- CSS selector `&[aria-checked=true]`",name:"_checked",required:!1,type:{name:"SystemStyleObject"}},_grabbed:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-grabbed` is `true`\n- CSS selector `&[aria-grabbed=true]`",name:"_grabbed",required:!1,type:{name:"SystemStyleObject"}},_pressed:{defaultValue:null,description:'Styles for CSS Selector `&[aria-pressed=true]`\nTypically used to style the current "pressed" state of toggle buttons',name:"_pressed",required:!1,type:{name:"SystemStyleObject"}},_invalid:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-invalid` is `true`\n- CSS selector `&[aria-invalid=true]`",name:"_invalid",required:!1,type:{name:"SystemStyleObject"}},_valid:{defaultValue:null,description:"Styles for the valid state\n- CSS selector `&[data-valid], &[data-state=valid]`",name:"_valid",required:!1,type:{name:"SystemStyleObject"}},_loading:{defaultValue:null,description:"Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.\nUseful for styling loading states",name:"_loading",required:!1,type:{name:"SystemStyleObject"}},_selected:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-selected` is `true`\n\n- CSS selector `&[aria-selected=true]`",name:"_selected",required:!1,type:{name:"SystemStyleObject"}},_hidden:{defaultValue:null,description:"Styles for CSS Selector `[hidden=true]`",name:"_hidden",required:!1,type:{name:"SystemStyleObject"}},_autofill:{defaultValue:null,description:"Styles for CSS Selector `&:-webkit-autofill`",name:"_autofill",required:!1,type:{name:"SystemStyleObject"}},_even:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(even)`",name:"_even",required:!1,type:{name:"SystemStyleObject"}},_odd:{defaultValue:null,description:"Styles for CSS Selector `&:nth-child(odd)`",name:"_odd",required:!1,type:{name:"SystemStyleObject"}},_first:{defaultValue:null,description:"Styles for CSS Selector `&:first-of-type`",name:"_first",required:!1,type:{name:"SystemStyleObject"}},_last:{defaultValue:null,description:"Styles for CSS Selector `&:last-of-type`",name:"_last",required:!1,type:{name:"SystemStyleObject"}},_notFirst:{defaultValue:null,description:"Styles for CSS Selector `&:not(:first-of-type)`",name:"_notFirst",required:!1,type:{name:"SystemStyleObject"}},_notLast:{defaultValue:null,description:"Styles for CSS Selector `&:not(:last-of-type)`",name:"_notLast",required:!1,type:{name:"SystemStyleObject"}},_visited:{defaultValue:null,description:"Styles for CSS Selector `&:visited`",name:"_visited",required:!1,type:{name:"SystemStyleObject"}},_activeLink:{defaultValue:null,description:"Used to style the active link in a navigation\nStyles for CSS Selector `&[aria-current=page]`",name:"_activeLink",required:!1,type:{name:"SystemStyleObject"}},_activeStep:{defaultValue:null,description:"Used to style the current step within a process\nStyles for CSS Selector `&[aria-current=step]`",name:"_activeStep",required:!1,type:{name:"SystemStyleObject"}},_indeterminate:{defaultValue:null,description:"Styles to apply when the ARIA attribute `aria-checked` is `mixed`\n- CSS selector `&[aria-checked=mixed]`",name:"_indeterminate",required:!1,type:{name:"SystemStyleObject"}},_groupHover:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered",name:"_groupHover",required:!1,type:{name:"SystemStyleObject"}},_peerHover:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is hovered",name:"_peerHover",required:!1,type:{name:"SystemStyleObject"}},_groupFocus:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused",name:"_groupFocus",required:!1,type:{name:"SystemStyleObject"}},_peerFocus:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is focused",name:"_peerFocus",required:!1,type:{name:"SystemStyleObject"}},_groupFocusVisible:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus",name:"_groupFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_peerFocusVisible:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus",name:"_peerFocusVisible",required:!1,type:{name:"SystemStyleObject"}},_groupActive:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active",name:"_groupActive",required:!1,type:{name:"SystemStyleObject"}},_peerActive:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is active",name:"_peerActive",required:!1,type:{name:"SystemStyleObject"}},_groupDisabled:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled",name:"_groupDisabled",required:!1,type:{name:"SystemStyleObject"}},_peerDisabled:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is disabled",name:"_peerDisabled",required:!1,type:{name:"SystemStyleObject"}},_groupInvalid:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid",name:"_groupInvalid",required:!1,type:{name:"SystemStyleObject"}},_peerInvalid:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is invalid",name:"_peerInvalid",required:!1,type:{name:"SystemStyleObject"}},_groupChecked:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked",name:"_groupChecked",required:!1,type:{name:"SystemStyleObject"}},_peerChecked:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` is checked",name:"_peerChecked",required:!1,type:{name:"SystemStyleObject"}},_groupFocusWithin:{defaultValue:null,description:"Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within",name:"_groupFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerFocusWithin:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has focus within",name:"_peerFocusWithin",required:!1,type:{name:"SystemStyleObject"}},_peerPlaceholderShown:{defaultValue:null,description:"Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown",name:"_peerPlaceholderShown",required:!1,type:{name:"SystemStyleObject"}},_placeholder:{defaultValue:null,description:"Styles for CSS Selector `&::placeholder`.",name:"_placeholder",required:!1,type:{name:"SystemStyleObject"}},_placeholderShown:{defaultValue:null,description:"Styles for CSS Selector `&:placeholder-shown`.",name:"_placeholderShown",required:!1,type:{name:"SystemStyleObject"}},_fullScreen:{defaultValue:null,description:"Styles for CSS Selector `&:fullscreen`.",name:"_fullScreen",required:!1,type:{name:"SystemStyleObject"}},_selection:{defaultValue:null,description:"Styles for CSS Selector `&::selection`",name:"_selection",required:!1,type:{name:"SystemStyleObject"}},_rtl:{defaultValue:null,description:'Styles for CSS Selector `[dir=rtl] &`\nIt is applied when a parent element or this element has `dir="rtl"`',name:"_rtl",required:!1,type:{name:"SystemStyleObject"}},_ltr:{defaultValue:null,description:'Styles for CSS Selector `[dir=ltr] &`\nIt is applied when a parent element or this element has `dir="ltr"`',name:"_ltr",required:!1,type:{name:"SystemStyleObject"}},_mediaDark:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-color-scheme: dark)`\nIt is used when the user has requested the system use a light or dark color theme.",name:"_mediaDark",required:!1,type:{name:"SystemStyleObject"}},_mediaReduceMotion:{defaultValue:null,description:"Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`\nIt is used when the user has requested the system to reduce the amount of animations.",name:"_mediaReduceMotion",required:!1,type:{name:"SystemStyleObject"}},_dark:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_dark",required:!1,type:{name:"SystemStyleObject"}},_light:{defaultValue:null,description:"Styles for when `data-theme` is applied to any parent of\nthis component or element.",name:"_light",required:!1,type:{name:"SystemStyleObject"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/rmg-loader/rmg-loader.tsx#RmgLoader"]={docgenInfo:j.__docgenInfo,name:"RmgLoader",path:"src/rmg-loader/rmg-loader.tsx#RmgLoader"})}catch{}export{j as R};
//# sourceMappingURL=rmg-loader.83eb62f8.js.map
