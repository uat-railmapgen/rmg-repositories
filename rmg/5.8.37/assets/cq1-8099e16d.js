const e={destination:2e3,runin:2e3,railmap:2e3,indoor:2e3},a=400,i="shmetro",n=50,r=10,s="r",t="1",l=["chongqing","cq1","#E4002B","#fff"],o=["1号线","Line 1"],c="2uFYan",f={linestart:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["2uFYan"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:200},"2uFYan":{name:["朝天门","Chaotianmen"],secondaryName:!1,num:"01",services:["local"],parents:["linestart"],children:["erB2C1"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},erB2C1:{name:["小什字","Xiaoshizi"],secondaryName:!1,num:"02",services:["local"],parents:["2uFYan"],children:["S14hDl"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq6","#F67599","#fff","6号线","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},lineend:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:["hJo4y6"],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:200},S14hDl:{name:["较场口","Jiaochangkou"],secondaryName:!1,num:"03",services:["local"],parents:["erB2C1"],children:["8Yucqk"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq2","#007A33","#fff","2号线","Line 2"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"8Yucqk":{name:["七星岗","Qixinggang"],secondaryName:!1,num:"04",services:["local"],parents:["S14hDl"],children:["4Z2Cb0"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"4Z2Cb0":{name:["两路口","Lianglukou"],secondaryName:!1,num:"05",services:["local"],parents:["8Yucqk"],children:["f5nmOk"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq3","#003DA5","#fff","3号线","Line 3"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},f5nmOk:{name:["鹅岭","Eling"],secondaryName:!1,num:"06",services:["local"],parents:["4Z2Cb0"],children:["rK1Ijs"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},rK1Ijs:{name:["大坪","Daping"],secondaryName:!1,num:"07",services:["local"],parents:["f5nmOk"],children:["ESu8Fs"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq2","#007A33","#fff","2号线","Line 2"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},ESu8Fs:{name:["石油路","Shiyoulu"],secondaryName:!1,num:"08",services:["local"],parents:["rK1Ijs"],children:["XGtdfp"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},XGtdfp:{name:["歇台子","Xietaizi"],secondaryName:!1,num:"09",services:["local"],parents:["ESu8Fs"],children:["zMIG5y"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},zMIG5y:{name:["石桥铺","Shiqiaopu"],secondaryName:!1,num:"10",services:["local"],parents:["XGtdfp"],children:["U9JLvX"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq5","#00A3E0","#fff","5号线","Line 5"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},U9JLvX:{name:["高庙村","Gaomiaocun"],secondaryName:!1,num:"11",services:["local"],parents:["zMIG5y"],children:["67gr7X"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"67gr7X":{name:["马家岩","Majiayan"],secondaryName:!1,num:"12",services:["local"],parents:["U9JLvX"],children:["kK1LUK"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},kK1LUK:{name:["小龙坎","Xiaolongkan"],secondaryName:!1,num:"13",services:["local"],parents:["67gr7X"],children:["_i0ULk"],branch:{left:[],right:[]},transfer:{info:[[["chongqing","cq9","#862041","#fff","9号线","Line 9"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},_i0ULk:{name:["沙坪坝","Shapingba"],secondaryName:!1,num:"14",services:["local"],parents:["kK1LUK"],children:["GXNWc6"],branch:{left:[],right:[]},transfer:{info:[[],[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},GXNWc6:{name:["杨公桥","Yanggongqiao"],secondaryName:!1,num:"15",services:["local"],parents:["_i0ULk"],children:["39mRNU"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},"39mRNU":{name:["烈士墓","Lieshimu"],secondaryName:!1,num:"16",services:["local"],parents:["GXNWc6"],children:["R0KzL4"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},R0KzL4:{name:["磁器口","Ciqikou"],secondaryName:!1,num:"17",services:["local"],parents:["39mRNU"],children:["JAuu3x"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},JAuu3x:{name:["石井坡","Shijingpo"],secondaryName:!1,num:"18",services:["local"],parents:["R0KzL4"],children:["QtwCwS"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},QtwCwS:{name:["双碑","Shuangbei"],secondaryName:!1,num:"19",services:["local"],parents:["JAuu3x"],children:["Xjriy7"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},Xjriy7:{name:["赖家桥","Laijiaqiao"],secondaryName:!1,num:"20",services:["local"],parents:["QtwCwS"],children:["kIdMVF"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},kIdMVF:{name:["微电园","Weidianyuan"],secondaryName:!1,num:"21",services:["local"],parents:["Xjriy7"],children:["vzFBg3"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},vzFBg3:{name:["陈家桥","Chenjiaqiao"],secondaryName:!1,num:"22",services:["local"],parents:["kIdMVF"],children:["_MAJKF"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},_MAJKF:{name:["大学城","Daxuecheng"],secondaryName:!1,num:"23",services:["local"],parents:["vzFBg3"],children:["Swy4g5"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},Swy4g5:{name:["尖顶坡","Jiandingpo"],secondaryName:!1,num:"24",services:["local"],parents:["_MAJKF"],children:["hJo4y6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200},hJo4y6:{name:["璧山","Bishan"],secondaryName:!1,num:"25",services:["local"],parents:["Swy4g5"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[],[],[]],tick_direc:"r",paid_area:!1,osi_names:[["",""]]},facility:"",loop_pivot:!1,one_line:!1,int_padding:200}},_={isStagger:!0,isFlip:!0},d={isLegacy:!1,terminal:!1},p="1",m="1",h="sh",g=[],u=40,y=70,v={},k=!1,N={bank:!0,left_and_right_factor:1,bottom_factor:1},b=8,L={svgWidth:e,svg_height:a,style:i,y_pc:n,padding:r,direction:s,platform_num:t,theme:l,line_name:o,current_stn_idx:c,stn_list:f,namePosMTR:_,customiseMTRDest:d,line_num:p,psd_num:m,info_panel_type:h,notesGZMTR:g,direction_gz_x:u,direction_gz_y:y,coline:v,loop:k,loop_info:N,branchSpacingPct:b};export{b as branchSpacingPct,v as coline,c as current_stn_idx,d as customiseMTRDest,L as default,s as direction,u as direction_gz_x,y as direction_gz_y,h as info_panel_type,o as line_name,p as line_num,k as loop,N as loop_info,_ as namePosMTR,g as notesGZMTR,r as padding,t as platform_num,m as psd_num,f as stn_list,i as style,e as svgWidth,a as svg_height,l as theme,n as y_pc};
