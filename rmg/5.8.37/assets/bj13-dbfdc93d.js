const e={destination:1500,runin:1200,railmap:1500,indoor:4e3},i=300,n="shmetro",a=40,r=8,t="l",s="",o=["beijing","bj13","#f9e700","#000"],c=["13号线","Line 13"],l="NrI7z9",f={linestart:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["i3U0WZ"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},NrI7z9:{name:["西直门","Xizhimen"],secondaryName:!1,num:"01",services:["local"],parents:["Uo1cC5"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj2","#006098","#fff","2号线","Line 2"],["beijing","bj4","#008e9c","#fff","4号线","Line 4"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:100},lineend:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:["NrI7z9"],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},Uo1cC5:{name:["大钟寺","Dazhong Si"],secondaryName:!1,num:"02",services:["local"],parents:["fL5ELd"],children:["NrI7z9"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},fL5ELd:{name:["知春路","Zhichun Lu"],secondaryName:!1,num:"03",services:["local"],parents:["z-f-qs"],children:["Uo1cC5"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#009bc0","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"z-f-qs":{name:["五道口","Wudao Kou"],secondaryName:!1,num:"04",services:["local"],parents:["WwhYbT"],children:["fL5ELd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},WwhYbT:{name:["上地","Shangdi"],secondaryName:!1,num:"05",services:["local"],parents:["de0-z4"],children:["z-f-qs"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"de0-z4":{name:["清河站","Qinghe Zhan\\ (Qinghe Railway Station)"],secondaryName:!1,num:"06",services:["local"],parents:["IKgMlk"],children:["WwhYbT"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj27cp","#de82b2","#fff","昌平线","Changping Line"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},IKgMlk:{name:["西二旗","Xi'erqi"],secondaryName:!1,num:"07",services:["local"],parents:["3i5hfk"],children:["de0-z4"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj27cp","#de82b2","#fff","昌平线","Changping Line"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"3i5hfk":{name:["龙泽","Longze"],secondaryName:!1,num:"08",services:["local"],parents:["XzYqwh"],children:["IKgMlk"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},XzYqwh:{name:["回龙观","Huilong Guan"],secondaryName:!1,num:"09",services:["local"],parents:["47DbCX"],children:["3i5hfk"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"47DbCX":{name:["霍营","Huoying"],secondaryName:!1,num:"10",services:["local"],parents:["B6xxrj"],children:["XzYqwh"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj8","#009b6b","#fff","8号线","Line 8"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},B6xxrj:{name:["立水桥","Lishui Qiao"],secondaryName:!1,num:"11",services:["local"],parents:["eou5At"],children:["47DbCX"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj5","#a6217f","#fff","5号线","Line 5"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},eou5At:{name:["北苑","Bei Yuan"],secondaryName:!1,num:"12",services:["local"],parents:["WGg8kg"],children:["B6xxrj"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},WGg8kg:{name:["望京西","Wangjing Xi (W)"],secondaryName:!1,num:"13",services:["local"],parents:["pjJv4i"],children:["eou5At"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj15","#5b2c68","#fff","15号线","Line 15"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},pjJv4i:{name:["芍药居","Shaoyaoju"],secondaryName:!1,num:"14",services:["local"],parents:["iq7IHM"],children:["WGg8kg"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#009bc0","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},iq7IHM:{name:["光熙门","Guangxi Men"],secondaryName:!1,num:"15",services:["local"],parents:["BeAXCj"],children:["pjJv4i"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},BeAXCj:{name:["柳芳","Liufang"],secondaryName:!1,num:"16",services:["local"],parents:["i3U0WZ"],children:["iq7IHM"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},i3U0WZ:{name:["东直门","Dongzhimen"],secondaryName:!1,num:"17",services:["local"],parents:["linestart"],children:["BeAXCj"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj2","#006098","#fff","2号线","Line 2"],["beijing","bj34sj","#a29bbb","#fff","首都机场线","Capital Airport Express"]],[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225}},_={isStagger:!0,isFlip:!0},d={isLegacy:!1,terminal:!1},p="13",m="12",g="sh2020",h=[],u=3.666667,b=79.666667,y={},v=!1,j={bank:!0,left_and_right_factor:1,bottom_factor:1},k=40,N={svgWidth:e,svg_height:i,style:n,y_pc:a,padding:r,direction:t,platform_num:s,theme:o,line_name:c,current_stn_idx:l,stn_list:f,namePosMTR:_,customiseMTRDest:d,line_num:p,psd_num:m,info_panel_type:g,notesGZMTR:h,direction_gz_x:u,direction_gz_y:b,coline:y,loop:v,loop_info:j,branchSpacingPct:k};export{k as branchSpacingPct,y as coline,l as current_stn_idx,d as customiseMTRDest,N as default,t as direction,u as direction_gz_x,b as direction_gz_y,g as info_panel_type,c as line_name,p as line_num,v as loop,j as loop_info,_ as namePosMTR,h as notesGZMTR,r as padding,s as platform_num,m as psd_num,f as stn_list,n as style,e as svgWidth,i as svg_height,o as theme,a as y_pc};
