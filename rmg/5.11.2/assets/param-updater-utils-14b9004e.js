import{j as o,a2 as w,M,a3 as R,r as S,s as T,t as C,w as E,h as O,B as P,F as I,i as z,J as v,v as k}from"./chakra-c9623454.js";import{r as a}from"./react-5680e458.js";import{b as j,h as B,b0 as x,bb as A,t as N,e as u,av as D}from"./index-ce801dcd.js";const Y=(e,s,l)=>{const c=new Blob([l],{type:s});F(e,c)},F=(e,s)=>{const l=window.URL.createObjectURL(s),c=document.createElement("a");c.href=l,c.download=e,document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(l)},X=e=>new Promise(s=>{const l=new FileReader;l.onloadend=()=>s(l.result),l.readAsText(e)}),q=()=>navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"),L=e=>{if(e){const s=new Date().getTime()-e;return s<60*1e3?["Just now"]:s<2*60*1e3?["1","minute ago"]:s<60*60*1e3?[Math.floor(s/1e3/60).toString(),"minutes ago"]:s<2*60*60*1e3?["1","hour ago"]:s<24*60*60*1e3?[Math.floor(s/1e3/60/60).toString(),"hours ago"]:s<48*60*60*1e3?["1","day ago"]:[Math.floor(s/1e3/60/60/24).toString(),"days ago"]}else return["Unknown"]},K=e=>new Promise(s=>{setTimeout(s,e)});function U(e){var t;const{config:s,onClose:l,onUpdate:c}=e,{t:_}=j(),[h,r]=a.useState((t=s==null?void 0:s.name)!=null?t:"");a.useEffect(()=>{var f;s&&r((f=s.name)!=null?f:"")},[s]);const d=[{type:"input",label:_("Project name"),value:h,onChange:r,debouncedDelay:0}],n=()=>{var f;s&&((f=s.name)!=null?f:"")!==h&&c({...s,name:h})};return o.jsxs(w,{isOpen:!!s,onClose:l,isCentered:!0,children:[o.jsx(M,{}),o.jsxs(R,{children:[o.jsx(S,{children:_("Edit project info")}),o.jsx(T,{}),o.jsx(C,{children:o.jsx(B,{fields:d})}),o.jsx(E,{children:o.jsx(O,{colorScheme:"primary",onClick:n,children:_("Confirm")})})]})]})}const W={flex:"2 1 0%",overflow:"hidden",minW:{base:"unset",md:240},w:{base:"100%",md:"unset"},mr:{base:0,md:2},mb:{base:2,md:0},"& > div":{flexDirection:"column",h:200,overflowX:"hidden",overflowY:"auto",borderRadius:"md",borderWidth:2,"& >.chakra-button":{alignItems:"center"},"& .chakra-button__group":{"& button:not(:first-of-type)":{h:"100%"}}}};function Q(e){const{paramRegistry:s,downloading:l,selectedParam:c,onParamSelect:_,onParamRemove:h,onParamUpdate:r}=e,{t:d}=j(),[n,t]=a.useState(),f=i=>{r==null||r(i),t(void 0)};return o.jsxs(P,{sx:W,children:[o.jsxs(I,{children:[l&&o.jsx(x,{variant:"ghost",primaryText:d("Downloading")+"...",secondaryText:l,isDisabled:!0}),s.slice().sort((i,g)=>{var y,b;return((y=g.lastModified)!=null?y:0)-((b=i.lastModified)!=null?b:0)}).map(i=>{var g;return o.jsxs(z,{size:"sm",isAttached:!0,colorScheme:c===i.id?"primary":void 0,variant:c===i.id?"solid":"ghost",children:[o.jsx(x,{primaryText:(g=i.name)!=null?g:d("Project")+" "+i.id,secondaryText:d("Last modified")+": "+L(i.lastModified).map(d).join(" "),"aria-pressed":c===i.id,onClick:()=>_(i.id)}),r&&o.jsx(v,{"aria-label":d("Edit project info"),title:d("Edit project info"),icon:o.jsx(A,{}),onClick:()=>t(i)}),h&&o.jsx(v,{"aria-label":d("Remove project"),title:d("Remove project"),icon:o.jsx(N,{}),onClick:()=>h(i.id)})]},i.id)})]}),s.length>=10&&o.jsx(k,{as:"em",fontSize:"xs",children:d("You have reached the maximum number of projects.")}),o.jsx(U,{config:n,onClose:()=>t(void 0),onUpdate:f})]})}const V=e=>{var s,l,c,_,h,r,d;"line_name"in e||(e.line_name=["路線名","Name of Line"]),"dest_legacy"in e||(e.dest_legacy=!1),delete e.fontZH,delete e.fontEN,delete e.weightZH,delete e.weightEN;for(const[n,t]of Object.entries(e.stn_list))"branch"in t||(e.stn_list[n].branch={left:[],right:[]},t.children.length===2?e.stn_list[n].branch.right=["through",t.children[1]]:e.stn_list[n].branch.right=[],t.parents.length===2?e.stn_list[n].branch.left=["through",t.parents[1]]:e.stn_list[n].branch.left=[]);"psd_num"in e?e.psd_num=e.psd_num.toString():e.psd_num="1","line_num"in e||(e.line_num="1"),e.theme.length===3&&e.theme.push("#fff");for(const[n,t]of Object.entries(e.stn_list))"num"in t||(e.stn_list[n].num="00"),"interchange"in t&&t.interchange.map(f=>f.forEach(i=>{i.length===5&&i.splice(3,0,"#fff")}));for(const[n,t]of Object.entries(e.stn_list))t.change_type==="osi22_end_p"&&(e.stn_list[n].change_type="osi22_pr"),t.change_type==="osi22_end_u"&&(e.stn_list[n].change_type="osi22_ur");for(const[n,t]of Object.entries(e.stn_list))"interchange"in t||(e.stn_list[n].interchange=[[]]);"info_panel_type"in e?e.info_panel_type=(n=>{switch(n){case"gz_1":case"panasonic":return"gz28";case"gz_2":return"gz6";case"gz_3":return"gz3";default:return n}})(e.info_panel_type):e.info_panel_type="gz28","direction_gz_x"in e||(e.direction_gz_x=50),"direction_gz_y"in e||(e.direction_gz_y=70);for(const[n,t]of Object.entries(e.stn_list))"transfer"in t||(e.stn_list[n].transfer={tick_direc:t.change_type==="none"||t.change_type==="int2"?"r":(s=t.change_type)==null?void 0:s.split("_")[1].split("").slice().reverse()[0],paid_area:((l=t.change_type)==null?void 0:l.indexOf("osi"))!==-1?((c=t.change_type)==null?void 0:c.split("_")[1][0])==="p":!0,osi_names:((_=t.change_type)==null?void 0:_.indexOf("osi"))!==-1?[t.interchange[1][0]]:[],info:t.interchange.length===2?[t.interchange[0],t.interchange[1].slice(1)]:t.interchange}),delete e.stn_list[n].change_type,delete e.stn_list[n].interchange;for(const[n,t]of Object.entries(e.stn_list))"services"in t||(e.stn_list[n].services=["local"]),"facility"in t||("usage"in t?e.stn_list[n].facility=t.usage:e.stn_list[n].facility=""),delete e.stn_list[n].usage;"customiseMTRDest"in e||(e.customiseMTRDest={isLegacy:e.dest_legacy||!1,terminal:!1}),delete e.dest_legacy,"svgWidth"in e||(e.svgWidth={destination:e.svg_dest_width,runin:e.svg_dest_width,railmap:e.svg_width,indoor:e.svg_width}),"indoor"in e.svgWidth||(e.svgWidth.indoor=e.svgWidth.railmap),delete e.svg_width,delete e.svg_dest_width,"notesGZMTR"in e||(e.notesGZMTR=[]),e.notesGZMTR=(h=e.notesGZMTR)==null?void 0:h.map(n=>n.length===4?n.concat([!1]):n),delete e.char_form,delete e.show_outer,delete e.strip_pc,delete e.txt_bg_gap,"namePosMTR"in e||(e.namePosMTR={isStagger:!0,isFlip:e.txt_flip}),delete e.txt_flip,Object.keys(e.stn_list).forEach(n=>{"secondaryName"in e.stn_list[n]?e.stn_list[n].secondaryName!==!1&&e.stn_list[n].secondaryName.join()===","&&(e.stn_list[n].secondaryName=!1):e.stn_list[n].secondaryName=!1,"type"in e.stn_list[n].transfer&&delete e.stn_list[n].transfer.type}),e.style=e.style===void 0||!Object.values(u).includes(e.style)?u.MTR:e.style,e.coline=(r=e.coline)!=null?r:[],e.loop=(d=e.loop)!=null?d:!1,e.loop_info=e.loop_info===void 0?{bank:!0,left_and_right_factor:0,bottom_factor:1}:{...e.loop_info,bottom_factor:Math.max(e.loop_info.bottom_factor,1)};for(const[n,t]of Object.entries(e.stn_list))"loop_pivot"in t||(e.stn_list[n].loop_pivot=!1);return Array.isArray(e.coline)&&(e.coline=e.coline.reduce((n,t)=>({...n,[D(4)]:t}),{})),e.platform_num===!1&&(e.platform_num=""),Object.values(e.stn_list).forEach(n=>{var f,i;const t=n;t.one_line=(f=t.one_line)!=null?f:!1,t.int_padding=(i=t.int_padding)!=null?i:e.loop?250:355}),e.branchSpacingPct===void 0&&(e.style===u.SHMetro?e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*300):e.branchSpacingPct=Math.round(e.branch_spacing/e.svg_height*200),delete e.branch_spacing),Z(e),e},Z=e=>{for(const[s,l]of Object.entries(e.stn_list)){const c=l.transfer.info;c&&(e.stn_list[s].transfer.groups=c.map((_,h)=>_.length?{name:l.transfer.osi_names[h-1],lines:_.map(r=>{const d=r;return{theme:d.slice(0,4),name:d.slice(4,6)}})}:{lines:[]})),delete e.stn_list[s].transfer.info,delete e.stn_list[s].transfer.osi_names}};export{Q as P,Y as a,F as d,q as i,X as r,V as u,K as w};
