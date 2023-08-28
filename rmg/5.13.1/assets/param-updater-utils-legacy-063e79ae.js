!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(t,n,r){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var i=r.call(t,n||"default");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,s=[],l=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=o.call(n)).done)&&(s.push(r.value),s.length!==t);l=!0);}catch(u){c=!0,i=u}finally{try{if(!l&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return s}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./chakra-legacy-5c2482b1.js","./react-legacy-d4892ff1.js","./index-legacy-3faef7b9.js"],(function(e,t){"use strict";var o,a,s,l,c,u,d,f,h,g,_,p,m,v,y,b,j,w,x,O,S,P;return{setters:[function(e){o=e.j,a=e.a2,s=e.M,l=e.a3,c=e.q,u=e.r,d=e.s,f=e.v,h=e.f,g=e.B,_=e.F,p=e.e,m=e.G,v=e.t},function(e){y=e.r},function(e){b=e.b,j=e.h,w=e.b7,x=e.b8,O=e.n,S=e.e,P=e.aq}],execute:function(){e("P",(function(e){var t=e.paramRegistry,n=e.downloading,r=e.selectedParam,a=e.onParamSelect,s=e.onParamRemove,l=e.onParamUpdate,c=b().t,u=i(y.useState(),2),d=u[0],f=u[1];return o.jsxs(g,{sx:T,children:[o.jsxs(_,{children:[n&&o.jsx(w,{variant:"ghost",primaryText:c("Downloading")+"...",secondaryText:n,isDisabled:!0}),t.slice().sort((function(e,t){var n,r;return(null!==(n=t.lastModified)&&void 0!==n?n:0)-(null!==(r=e.lastModified)&&void 0!==r?r:0)})).map((function(e){var t;return o.jsxs(p,{size:"sm",isAttached:!0,colorScheme:r===e.id?"primary":void 0,variant:r===e.id?"solid":"ghost",children:[o.jsx(w,{primaryText:null!==(t=e.name)&&void 0!==t?t:c("Project")+" "+e.id,secondaryText:c("Last modified")+": "+M(e.lastModified).map((function(e){return c(e)})).join(" "),"aria-pressed":r===e.id,onClick:function(){return a(e.id)}}),l&&o.jsx(m,{"aria-label":c("Edit project info"),title:c("Edit project info"),icon:o.jsx(x,{}),onClick:function(){return f(e)}}),s&&o.jsx(m,{"aria-label":c("Remove project"),title:c("Remove project"),icon:o.jsx(O,{}),onClick:function(){return s(e.id)}})]},e.id)}))]}),t.length>=10&&o.jsx(v,{as:"em",fontSize:"xs",children:c("You have reached the maximum number of projects.")}),o.jsx(R,{config:d,onClose:function(){return f(void 0)},onUpdate:function(e){null==l||l(e),f(void 0)}})]})}));e("a",(function(e,n,r){var i=new Blob([r],{type:n});t(e,i)}));var t=e("d",(function(e,t){var n=window.URL.createObjectURL(t),r=document.createElement("a");r.href=n,r.download=e,document.body.appendChild(r),r.click(),document.body.removeChild(r),window.URL.revokeObjectURL(n)})),M=(e("r",(function(e){return new Promise((function(t){var n=new FileReader;n.onloadend=function(){return t(n.result)},n.readAsText(e)}))})),e("i",(function(){return navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")})),function(e){if(e){var t=(new Date).getTime()-e;return t<6e4?["Just now"]:t<12e4?["1","minute ago"]:t<36e5?[Math.floor(t/1e3/60).toString(),"minutes ago"]:t<72e5?["1","hour ago"]:t<864e5?[Math.floor(t/1e3/60/60).toString(),"hours ago"]:t<1728e5?["1","day ago"]:[Math.floor(t/1e3/60/60/24).toString(),"days ago"]}return["Unknown"]});e("w",(function(e){return new Promise((function(t){setTimeout(t,e)}))}));function R(e){var t,r=e.config,g=e.onClose,_=e.onUpdate,p=b().t,m=i(y.useState(null!==(t=null==r?void 0:r.name)&&void 0!==t?t:""),2),v=m[0],w=m[1];y.useEffect((function(){var e;r&&w(null!==(e=r.name)&&void 0!==e?e:"")}),[r]);var x=[{type:"input",label:p("Project name"),value:v,onChange:w,debouncedDelay:0}];return o.jsxs(a,{isOpen:!!r,onClose:g,isCentered:!0,children:[o.jsx(s,{}),o.jsxs(l,{children:[o.jsx(c,{children:p("Edit project info")}),o.jsx(u,{}),o.jsx(d,{children:o.jsx(j,{fields:x})}),o.jsx(f,{children:o.jsx(h,{colorScheme:"primary",onClick:function(){var e;r&&((null!==(e=r.name)&&void 0!==e?e:"")!==v&&_(n(n({},r),{},{name:v})))},children:p("Confirm")})})]})]})}var T={flex:"2 1 0%",overflow:"hidden",minW:{base:"unset",md:240},w:{base:"100%",md:"unset"},mr:{base:0,md:2},mb:{base:2,md:0},"& > div":{flexDirection:"column",h:200,overflowX:"hidden",overflowY:"auto",borderRadius:"md",borderWidth:2,"& >.chakra-button":{alignItems:"center"},"& .chakra-button__group":{"& button:not(:first-of-type)":{h:"100%"}}}};e("u",(function(e){var t,o,a;"line_name"in e||(e.line_name=["路線名","Name of Line"]),"dest_legacy"in e||(e.dest_legacy=!1),delete e.fontZH,delete e.fontEN,delete e.weightZH,delete e.weightEN;for(var s=0,l=Object.entries(e.stn_list);s<l.length;s++){var c=i(l[s],2),u=c[0],d=c[1];"branch"in d||(e.stn_list[u].branch={left:[],right:[]},2===d.children.length?e.stn_list[u].branch.right=["through",d.children[1]]:e.stn_list[u].branch.right=[],2===d.parents.length?e.stn_list[u].branch.left=["through",d.parents[1]]:e.stn_list[u].branch.left=[])}e.psd_num="psd_num"in e?e.psd_num.toString():"1","line_num"in e||(e.line_num="1"),3===e.theme.length&&e.theme.push("#fff");for(var f=0,h=Object.entries(e.stn_list);f<h.length;f++){var g=i(h[f],2),_=g[0],p=g[1];"num"in p||(e.stn_list[_].num="00"),"interchange"in p&&p.interchange.map((function(e){return e.forEach((function(e){5===e.length&&e.splice(3,0,"#fff")}))}))}for(var m=0,v=Object.entries(e.stn_list);m<v.length;m++){var y=i(v[m],2),b=y[0],j=y[1];"osi22_end_p"===j.change_type&&(e.stn_list[b].change_type="osi22_pr"),"osi22_end_u"===j.change_type&&(e.stn_list[b].change_type="osi22_ur")}for(var w=0,x=Object.entries(e.stn_list);w<x.length;w++){var O=i(x[w],2),M=O[0];"interchange"in O[1]||(e.stn_list[M].interchange=[[]])}e.info_panel_type="info_panel_type"in e?function(e){switch(e){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return e}}(e.info_panel_type):"gz28","direction_gz_x"in e||(e.direction_gz_x=50),"direction_gz_y"in e||(e.direction_gz_y=70);for(var R=0,T=Object.entries(e.stn_list);R<T.length;R++){var C,E,z,A,D=i(T[R],2),N=D[0],U=D[1];if(!("transfer"in U))e.stn_list[N].transfer={tick_direc:"none"===U.change_type||"int2"===U.change_type?"r":null===(C=U.change_type)||void 0===C?void 0:C.split("_")[1].split("").slice().reverse()[0],paid_area:-1===(null===(E=U.change_type)||void 0===E?void 0:E.indexOf("osi"))||"p"===(null===(z=U.change_type)||void 0===z?void 0:z.split("_")[1][0]),osi_names:-1!==(null===(A=U.change_type)||void 0===A?void 0:A.indexOf("osi"))?[U.interchange[1][0]]:[],info:2===U.interchange.length?[U.interchange[0],U.interchange[1].slice(1)]:U.interchange};delete e.stn_list[N].change_type,delete e.stn_list[N].interchange}for(var L=0,W=Object.entries(e.stn_list);L<W.length;L++){var Z=i(W[L],2),G=Z[0],I=Z[1];"services"in I||(e.stn_list[G].services=["local"]),"facility"in I||(e.stn_list[G].facility="usage"in I?I.usage:""),delete e.stn_list[G].usage}"customiseMTRDest"in e||(e.customiseMTRDest={isLegacy:e.dest_legacy||!1,terminal:!1}),delete e.dest_legacy,"svgWidth"in e||(e.svgWidth={destination:e.svg_dest_width,runin:e.svg_dest_width,railmap:e.svg_width,indoor:e.svg_width}),"indoor"in e.svgWidth||(e.svgWidth.indoor=e.svgWidth.railmap),delete e.svg_width,delete e.svg_dest_width,"notesGZMTR"in e||(e.notesGZMTR=[]),e.notesGZMTR=null===(t=e.notesGZMTR)||void 0===t?void 0:t.map((function(e){return 4===e.length?e.concat([!1]):e})),delete e.char_form,delete e.show_outer,delete e.strip_pc,delete e.txt_bg_gap,"namePosMTR"in e||(e.namePosMTR={isStagger:!0,isFlip:e.txt_flip}),delete e.txt_flip,Object.keys(e.stn_list).forEach((function(t){"secondaryName"in e.stn_list[t]?!1!==e.stn_list[t].secondaryName&&","===e.stn_list[t].secondaryName.join()&&(e.stn_list[t].secondaryName=!1):e.stn_list[t].secondaryName=!1,"type"in e.stn_list[t].transfer&&delete e.stn_list[t].transfer.type})),e.style=void 0!==e.style&&Object.values(S).includes(e.style)?e.style:S.MTR,e.coline=null!==(o=e.coline)&&void 0!==o?o:[],e.loop=null!==(a=e.loop)&&void 0!==a&&a,e.loop_info=void 0===e.loop_info?{bank:!0,left_and_right_factor:0,bottom_factor:1}:n(n({},e.loop_info),{},{bottom_factor:Math.max(e.loop_info.bottom_factor,1)});for(var F=0,H=Object.entries(e.stn_list);F<H.length;F++){var q=i(H[F],2),B=q[0];"loop_pivot"in q[1]||(e.stn_list[B].loop_pivot=!1)}return Array.isArray(e.coline)&&(e.coline=e.coline.reduce((function(e,t){return n(n({},e),{},r({},P(4),t))}),{})),!1===e.platform_num&&(e.platform_num=""),Object.values(e.stn_list).forEach((function(t){var n,r,i=t;i.one_line=null!==(n=i.one_line)&&void 0!==n&&n,i.int_padding=null!==(r=i.int_padding)&&void 0!==r?r:e.loop?250:355})),void 0===e.branchSpacingPct&&(e.style===S.SHMetro?e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*300):e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*200),delete e.branch_spacing),k(e),e}));var k=function(e){for(var t=function(){var t=i(r[n],2),o=t[0],a=t[1],s=a.transfer.info;s&&(e.stn_list[o].transfer.groups=s.map((function(e,t){return e.length?{name:a.transfer.osi_names[t-1],lines:e.map((function(e){var t=e;return{theme:t.slice(0,4),name:t.slice(4,6)}}))}:{lines:[]}}))),delete e.stn_list[o].transfer.info,delete e.stn_list[o].transfer.osi_names},n=0,r=Object.entries(e.stn_list);n<r.length;n++)t()}}}}))}();
