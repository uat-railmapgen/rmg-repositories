const e="mtr",v=300,k=17.24,b=40,z=45,n=["hongkong","sile","#B6BD00","#fff"],i="l",a="iwf6",t="6",s={linestart:{parents:[],children:["aicy"],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1},lineend:{parents:["iwf6"],children:[],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1},l1mz:{parents:["jgfo"],children:["iwf6"],name:["海洋公園","Ocean Park"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1},iwf6:{children:["lineend"],parents:["l1mz"],name:["金鐘","Admiralty"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["hongkong","twl","#E2231A","#fff","荃灣綫","Tsuen Wan Line"],["hongkong","isl","#0071CE","#fff","港島綫","Island Line"],["hongkong","eal","#61B4E4","#fff","東鐵綫","East Rail Line"]]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1},jgfo:{parents:["l38z"],children:["l1mz"],branch:{left:[],right:[]},name:["黃竹坑","Wong Chuk Hang"],num:"00",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1},l38z:{parents:["aicy"],children:["jgfo"],branch:{left:[],right:[]},name:["利東","Lei Tung"],num:"00",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1},aicy:{parents:["linestart"],children:["l38z"],branch:{left:[],right:[]},name:["海怡半島","South Horizon"],num:"00",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1,loop_pivot:!1}},o=["南港島綫","South Island Line"],r="1",c="TW",l="gz28",f=50,_=70,d={isLegacy:!1,terminal:!1},m={destination:1e3,runin:1e3,railmap:1e3,indoor:1e3},p=[],g={isStagger:!0,isFlip:!1},h={},u=!1,y={bank:!0,left_and_right_factor:0,bottom_factor:1},T={style:e,svg_height:300,padding:17.24,y_pc:40,branch_spacing:45,theme:n,direction:i,current_stn_idx:a,platform_num:t,stn_list:s,line_name:o,psd_num:r,line_num:c,info_panel_type:l,direction_gz_x:f,direction_gz_y:_,customiseMTRDest:d,svgWidth:m,notesGZMTR:p,namePosMTR:g,coline:h,loop:u,loop_info:y};export{z as branch_spacing,h as coline,a as current_stn_idx,d as customiseMTRDest,T as default,i as direction,f as direction_gz_x,_ as direction_gz_y,l as info_panel_type,o as line_name,c as line_num,u as loop,y as loop_info,g as namePosMTR,p as notesGZMTR,k as padding,t as platform_num,r as psd_num,s as stn_list,e as style,m as svgWidth,v as svg_height,n as theme,b as y_pc};
