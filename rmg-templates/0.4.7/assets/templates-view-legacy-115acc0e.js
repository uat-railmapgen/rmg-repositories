!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,n||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}System.register(["./chakra-legacy-85e8d9ff.js","./index-legacy-894563ce.js","./use-templates-legacy-1fdf5990.js","./react-legacy-fb3436d5.js","./ag-grid-legacy-19c52290.js"],(function(e,t){"use strict";var o,i,u,a,c,l,s,f,p,m,d,y,b,g,j,h,v,O,w,x,S,P;return{setters:[function(e){o=e.j,i=e.Y,u=e.t,a=e.Z,c=e._,l=e.$,s=e.g},function(e){f=e.u,p=e.a,m=e.s,d=e.R,y=e.b,b=e.r,g=e.c,j=e.d},function(e){h=e.u,v=e.E,O=e.a},function(e){w=e.u,x=e.l,S=e.r},function(e){P=e.A}],execute:function(){function t(){var e=w(),t=e.t,a=e.i18n,c=h(),l=f(),s=x(),g=p((function(e){return e.app})),j=g.companyConfig,O=g.selectedCompany,S=j.map((function(e){return[e.id,c(e.name)]})).sort((function(e,t){return e[1].localeCompare(t[1],a.languages[0])})).reduce((function(e,t){return n(n({},e),{},r({},t[0],t[1]))}),{"":t("Please select...")}),P=[{type:"select",label:t("Company"),value:O,options:S,disabledOptions:[""],onChange:function(e){return l(m(e))}}];return o.jsxs(d,{children:[o.jsx(y,{fields:P}),o.jsx(i,{ml:"auto",children:o.jsx(u,{variant:"solid",size:"sm",colorScheme:"primary",onClick:function(){b.isStandaloneWindow()?s("/new"):b.openApp("rmg-templates-upload"),b.event(v.UPLOAD_TEMPLATES,{})},children:t("Upload templates")})})]})}function C(){var e=w(),t=e.t,n=e.i18n,r=h(),i=p((function(e){return e.app})).selectedCompany,u=O(i).templates,f=S.useMemo((function(){return[{headerName:t("Name"),field:"name",valueFormatter:function(e){var t=e.value;return r(t)},sortable:!0,flex:1},{headerName:t("Uploader"),field:"uploadBy",cellRenderer:function(e){var t=e.value;return o.jsxs(a,{size:"lg",borderRadius:"full",onClick:function(){return window.open("https://github.com/railmapgen/rmg-templates/issues?q=is:issue+author:".concat(t),"_blank")},cursor:"pointer",children:[o.jsx(c,{src:"https://github.com/".concat(t,".png"),size:"xs",ml:-1,mr:2}),o.jsx(l,{children:t})]},t)},minWidth:200},{headerName:t("Style"),field:"style",cellRenderer:function(e){var t=e.value;return o.jsx(s,{children:t})},minWidth:150}]}),[n.language]),m=S.useMemo((function(){return{resizable:!0}}),[]);return o.jsx(g,{children:o.jsx(P,{rowData:u,columnDefs:f,defaultColDef:m,getRowId:function(e){return e.data.filename},headerHeight:36,rowHeight:36,suppressCellFocus:!0,suppressRowVirtualisation:!0,debug:!1})})}e("default",(function(){return o.jsxs(j,{children:[o.jsx(t,{}),o.jsx(C,{})]})}))}}}))}();
