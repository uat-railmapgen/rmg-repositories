const e={destination:1500,runin:1200,railmap:1500,indoor:4e3},n=300,i="shmetro",a=40,t=8,r="l",s="",o=["beijing","bj17","#00A9A9","#fff"],c=["17号线","Line 17"],l="NrI7z9",_={linestart:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["xbk-zM"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},NrI7z9:{name:["十里河","Shilihe"],secondaryName:!1,num:"15",services:["local"],parents:["Uo1cC5"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#009bc0","#fff","10号线","Line 10"],["beijing","bj14","#d5a7a1","#000","14号线","Line 14"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:100},lineend:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:["NrI7z9"],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},Uo1cC5:{name:["周家庄","Zhoujiazhuang"],secondaryName:!1,num:"16",services:["local"],parents:["fL5ELd"],children:["NrI7z9"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},fL5ELd:{name:["十八里店","Shibalidian"],secondaryName:!1,num:"17",services:["local"],parents:["k2w-eF"],children:["Uo1cC5"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"k2w-eF":{name:["北神树","Beishenshu"],secondaryName:!1,num:"18",services:["local"],parents:["WVLahn"],children:["fL5ELd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},WVLahn:{name:["次渠北","Ciqubei"],secondaryName:!1,num:"19",services:["local"],parents:["z5wjAP"],children:["k2w-eF"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},z5wjAP:{name:["次渠","Ciqu"],secondaryName:!1,num:"20",services:["local"],parents:["xbk-zM"],children:["WVLahn"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj24yz","#e40077","#fff","亦庄线","Yizhuang Line"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"xbk-zM":{name:["嘉会湖","Jiahuihu"],secondaryName:!1,num:"21",services:["local"],parents:["linestart"],children:["z5wjAP"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225}},d={isStagger:!0,isFlip:!0},f={isLegacy:!1,terminal:!1},p="17",m="20",h="sh2020",u=[],g=3.666667,b=79.666667,y={},v=!1,z={bank:!0,left_and_right_factor:1,bottom_factor:1},N=40,k={svgWidth:e,svg_height:n,style:i,y_pc:a,padding:t,direction:r,platform_num:s,theme:o,line_name:c,current_stn_idx:l,stn_list:_,namePosMTR:d,customiseMTRDest:f,line_num:p,psd_num:m,info_panel_type:h,notesGZMTR:u,direction_gz_x:g,direction_gz_y:b,coline:y,loop:v,loop_info:z,branchSpacingPct:N};export{N as branchSpacingPct,y as coline,l as current_stn_idx,f as customiseMTRDest,k as default,r as direction,g as direction_gz_x,b as direction_gz_y,h as info_panel_type,c as line_name,p as line_num,v as loop,z as loop_info,d as namePosMTR,u as notesGZMTR,t as padding,s as platform_num,m as psd_num,_ as stn_list,i as style,e as svgWidth,n as svg_height,o as theme,a as y_pc};
