const e="shmetro",v=450,a=8.750201061605276,n=40,i=45,s=["shanghai","sh16","#2CD5C4","#000"],r="r",t="l1mz",c="",l={linestart:{parents:[],children:["l1mz"],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},lineend:{parents:["iwf6"],children:[],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},l1mz:{parents:["linestart"],children:["l5s7"],name:["龙阳路","Longyang Road"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["shanghai","sh2","#97D700","#000","2号线","Line 2"],["shanghai","sh7","#FF6900","#000","7号线","Line 7"],["shanghai","sh18","#D6A461","#000","18号线","Line 18"]],[],[["shanghai","maglev","#009090","#fff","磁浮线","Maglev Line"]]]},services:["local","express","direct"],facility:"",secondaryName:!1,int_padding:200},iwf6:{children:["lineend"],parents:["j2ts"],name:["滴水湖","Dishui Lake"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local","express","direct"],facility:"",secondaryName:!1},l5s7:{name:["华夏中路","Middle Huaxia Road"],secondaryName:!1,num:"00",services:["local"],parents:["l1mz"],children:["z631"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh13","#EF95CF","#000","13号线","Line 13"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",int_padding:200},z631:{name:["罗山路","Luoshan Road"],secondaryName:!1,num:"00",services:["local","express"],parents:["l5s7"],children:["flg6"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh11","#76232F","#fff","11号线","Line 11"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",int_padding:200},flg6:{name:["周浦东","East Zhoupu"],secondaryName:!1,num:"00",services:["local"],parents:["z631"],children:["op34"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},q0vm:{name:["航头东","East Hangtou"],secondaryName:!1,num:"00",services:["local"],parents:["op34"],children:["c0at"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},c0at:{name:["新场","Xinchang"],secondaryName:!1,num:"00",services:["local","express"],parents:["q0vm"],children:["zph2"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},zph2:{name:["野生动物园","Wild Animal Park"],secondaryName:!1,num:"00",services:["local"],parents:["c0at"],children:["0ku9"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"0ku9":{name:["惠南","Huinan"],secondaryName:!1,num:"00",services:["local","express"],parents:["zph2"],children:["jj84"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},jj84:{name:["惠南东","East Huinan"],secondaryName:!1,num:"00",services:["local"],parents:["0ku9"],children:["oy89"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},oy89:{name:["书院","Shuyuan"],secondaryName:!1,num:"00",services:["local"],parents:["jj84"],children:["j2ts"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},j2ts:{name:["临港大道","Lingang Avenue"],secondaryName:!1,num:"00",services:["local","express"],parents:["oy89"],children:["iwf6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},op34:{name:["鹤沙航城","Heshahangcheng"],secondaryName:!1,num:"00",services:["local"],parents:["flg6"],children:["q0vm"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""}},o=["16号线","Line 16"],d="1",f="16",h="sh",m=50,_=70,p={isLegacy:!1,terminal:!1},g={destination:1e3,runin:1e3,railmap:2e3,indoor:2e3},u=[],y={isStagger:!0,isFlip:!1},k={style:e,svg_height:450,padding:a,y_pc:n,branch_spacing:i,theme:s,direction:r,current_stn_idx:t,platform_num:c,stn_list:l,line_name:o,psd_num:d,line_num:f,info_panel_type:h,direction_gz_x:m,direction_gz_y:_,customiseMTRDest:p,svgWidth:g,notesGZMTR:u,namePosMTR:y};export{i as branch_spacing,t as current_stn_idx,p as customiseMTRDest,k as default,r as direction,m as direction_gz_x,_ as direction_gz_y,h as info_panel_type,o as line_name,f as line_num,y as namePosMTR,u as notesGZMTR,a as padding,c as platform_num,d as psd_num,l as stn_list,e as style,g as svgWidth,v as svg_height,s as theme,n as y_pc};
