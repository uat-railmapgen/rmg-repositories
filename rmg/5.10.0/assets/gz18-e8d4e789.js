const e="gzmtr",x=300,n=8.750201061605276,a=40,i=["guangzhou","gz18","#0047BA","#fff"],s="r",t="qbbb",r="3",o={linestart:{parents:[],children:["qbbb"],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},lineend:{parents:["iwf6"],children:[],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"09",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},l1mz:{parents:["lyqw"],children:["iwf6"],name:["磨碟沙","Modiesha"],branch:{left:[],right:[]},num:"07",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["guangzhou","gz8","#008C95","#fff","8号线","Line 8"]]]},services:["local","express"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},iwf6:{children:["lineend"],parents:["l1mz"],name:["冼村","Xiancun"],branch:{left:[],right:[]},num:"08",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local","express"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},qbbb:{parents:["linestart"],children:["tgp4"],branch:{left:[],right:[]},name:["万顷沙","Wanqingsha"],num:"01",services:["local","express"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},tgp4:{parents:["qbbb"],children:["ecsx"],branch:{left:[],right:[]},name:["横沥","Hengli"],num:"02",services:["local","express"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},su3g:{parents:["ecsx"],children:["9v64"],branch:{left:[],right:[]},name:["南村万博","Nancun Wanbo"],num:"04",services:["local"],facility:"",transfer:{info:[[["guangzhou","gz7","#97D700","#000","7号线","Line 7"]]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},"9v64":{parents:["su3g"],children:["lyqw"],branch:{left:[],right:[]},name:["沙溪","Shaxi"],num:"05",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},lyqw:{parents:["9v64"],children:["l1mz"],branch:{left:[],right:[]},name:["龙潭","Longtan"],num:"06",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},ecsx:{name:["番禺广场","Panyu Square"],secondaryName:!1,num:"03",services:["local","express"],parents:["tgp4"],children:["su3g"],branch:{left:[],right:[]},transfer:{info:[[["guangzhou","gz3","#ECA154","#000","3号线","Line 3"],["guangzhou","gz22","#CD5228","#fff","22号线","Line 22"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355}},l=["18号线","Line 18"],c="3",_="18",f="gz1421",d=57.35,p=80,g={isLegacy:!1,terminal:!1},m={destination:1e3,runin:1e3,railmap:1500,indoor:1e3},h=[],u={isStagger:!0,isFlip:!1},y={},v=!1,b={bank:!0,left_and_right_factor:0,bottom_factor:1},z=30,N={style:e,svg_height:300,padding:n,y_pc:a,theme:i,direction:s,current_stn_idx:t,platform_num:r,stn_list:o,line_name:l,psd_num:c,line_num:_,info_panel_type:f,direction_gz_x:d,direction_gz_y:p,customiseMTRDest:g,svgWidth:m,notesGZMTR:h,namePosMTR:u,coline:y,loop:v,loop_info:b,branchSpacingPct:z};export{z as branchSpacingPct,y as coline,t as current_stn_idx,g as customiseMTRDest,N as default,s as direction,d as direction_gz_x,p as direction_gz_y,f as info_panel_type,l as line_name,_ as line_num,v as loop,b as loop_info,u as namePosMTR,h as notesGZMTR,n as padding,r as platform_num,c as psd_num,o as stn_list,e as style,m as svgWidth,x as svg_height,i as theme,a as y_pc};
