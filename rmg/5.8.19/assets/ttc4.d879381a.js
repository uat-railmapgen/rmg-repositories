const e="mtr",z=260,N=5,n=43.076923,i=["toronto","l4","#A21A68","#fff"],t="r",a="l1mz",s="E",o={linestart:{parents:[],children:["l1mz"],name:["\u8DEF\u7DAB\u5DE6\u7AEF","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:225},lineend:{parents:["ilbi"],children:[],name:["\u8DEF\u7DAB\u53F3\u7AEF","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"06",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:225},l1mz:{parents:["linestart"],children:["iwf6"],name:["\u96EA\u67CF\uFF0D\u592E\u8857","Sheppard-Yonge"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["toronto","l1","#F8C300","#000","1 \u592E\u8857\uFF0D\u5927\u5B78\u7DDA","1 Yonge-University"]]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:225},iwf6:{children:["7oey"],parents:["l1mz"],name:["\u7063\u666F","Bayview"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:225},"7oey":{name:["\u8C9D\u6C99\u88E1","Bessarion"],secondaryName:!1,num:"03",services:["local"],parents:["iwf6"],children:["b0ep"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},b0ep:{name:["\u91CC\u65AF\u5229","Leslie"],secondaryName:!1,num:"04",services:["local"],parents:["7oey"],children:["ilbi"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},ilbi:{name:["\u7576\u5999\u65AF","Don Mills"],secondaryName:!1,num:"05",services:["local"],parents:["b0ep"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225}},r=["4 \u96EA\u67CF\u7DDA","4 Sheppard"],l="",c="4",_="gz28",d=61,f=67,p={isLegacy:!1,terminal:!1},m={destination:1200,runin:1500,railmap:1200,indoor:4e3},g=[],h={isStagger:!0,isFlip:!1},u={},y=!1,v={bank:!0,left_and_right_factor:0,bottom_factor:1},b=26,k={style:e,svg_height:260,padding:5,y_pc:n,theme:i,direction:t,current_stn_idx:a,platform_num:s,stn_list:o,line_name:r,psd_num:l,line_num:c,info_panel_type:_,direction_gz_x:d,direction_gz_y:f,customiseMTRDest:p,svgWidth:m,notesGZMTR:g,namePosMTR:h,coline:u,loop:y,loop_info:v,branchSpacingPct:b};export{b as branchSpacingPct,u as coline,a as current_stn_idx,p as customiseMTRDest,k as default,t as direction,d as direction_gz_x,f as direction_gz_y,_ as info_panel_type,r as line_name,c as line_num,y as loop,v as loop_info,h as namePosMTR,g as notesGZMTR,N as padding,s as platform_num,l as psd_num,o as stn_list,e as style,m as svgWidth,z as svg_height,i as theme,n as y_pc};
