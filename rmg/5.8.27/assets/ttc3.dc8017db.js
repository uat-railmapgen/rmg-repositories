const e="mtr",k=260,z=5,n=43.076923,i=["toronto","l3","#0082C9","#fff"],t="r",a="l1mz",r="S",s={linestart:{parents:[],children:["l1mz"],name:["\u8DEF\u7DAB\u5DE6\u7AEF","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:225},lineend:{parents:["ssez"],children:[],name:["\u8DEF\u7DAB\u53F3\u7AEF","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"07",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:225},l1mz:{parents:["linestart"],children:["iwf6"],name:["\u9EA5\u9AD8\u96F2","McCowan"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:225},iwf6:{children:["9rwu"],parents:["l1mz"],name:["\u58EB\u5609\u5821\u4E2D\u5FC3","Scarborough Centre"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:225},"9rwu":{name:["\u7F8E\u862D","Midland"],secondaryName:!1,num:"03",services:["local"],parents:["iwf6"],children:["jsko"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},jsko:{name:["\u827E\u65AF\u7F8E","Ellesmere"],secondaryName:!1,num:"04",services:["local"],parents:["9rwu"],children:["modb"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},modb:{name:["\u7F85\u502B\u65AF\u6771","Lawrence East"],secondaryName:!1,num:"05",services:["local"],parents:["jsko"],children:["ssez"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},ssez:{name:["\u5805\u5C3C\u5730","Kennedy"],secondaryName:!1,num:"06",services:["local"],parents:["modb"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[["toronto","l2","#00923F","#fff","2 \u5E03\u9B6F\u4E9E\uFF0D\u4E39\u4F5B\u7DDA","2 Bloor-Danforth"]],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225}},o=["3 \u58EB\u5609\u5821\u7DDA","3 Scarborough"],c="",l="3",_="gz28",d=61,f=67,p={isLegacy:!1,terminal:!1},m={destination:1200,runin:1200,railmap:1200,indoor:4e3},u=[],g={isStagger:!0,isFlip:!1},h={},y=!1,v={bank:!0,left_and_right_factor:0,bottom_factor:1},b=26,N={style:e,svg_height:260,padding:5,y_pc:n,theme:i,direction:t,current_stn_idx:a,platform_num:r,stn_list:s,line_name:o,psd_num:c,line_num:l,info_panel_type:_,direction_gz_x:d,direction_gz_y:f,customiseMTRDest:p,svgWidth:m,notesGZMTR:u,namePosMTR:g,coline:h,loop:y,loop_info:v,branchSpacingPct:b};export{b as branchSpacingPct,h as coline,a as current_stn_idx,p as customiseMTRDest,N as default,t as direction,d as direction_gz_x,f as direction_gz_y,_ as info_panel_type,o as line_name,l as line_num,y as loop,v as loop_info,g as namePosMTR,u as notesGZMTR,z as padding,r as platform_num,c as psd_num,s as stn_list,e as style,m as svgWidth,k as svg_height,i as theme,n as y_pc};
