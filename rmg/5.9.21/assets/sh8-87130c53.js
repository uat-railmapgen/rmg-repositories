const e="shmetro",y=400,b=5,k=40,N=42.07,a=["shanghai","sh8","#00A3E0","#fff"],n="r",i="s2mu",s="",r={linestart:{parents:[],children:["l1mz"],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},lineend:{parents:["iwf6"],children:[],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},l1mz:{parents:["linestart"],children:["zv4k"],name:["市光路","Shiguang Road"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},iwf6:{children:["lineend"],parents:["qdv6"],name:["沈杜公路","Shendu Highway"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["shanghai","pjl","#999999","#fff","浦江线","Line Pujiang"]]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!1,int_padding:355},qdv6:{name:["联航路","Lianhang Road"],secondaryName:!1,num:"00",services:["local"],parents:["5m0u"],children:["iwf6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},"5m0u":{name:["江月路","Jiangyue Road"],secondaryName:!1,num:"00",services:["local"],parents:["ihlj"],children:["qdv6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},ihlj:{name:["浦江镇","Pujiang Town"],secondaryName:!1,num:"00",services:["local"],parents:["9hqr"],children:["5m0u"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},"9hqr":{name:["芦恒路","Luheng Road"],secondaryName:!1,num:"00",services:["local"],parents:["7rk9"],children:["ihlj"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},"7rk9":{name:["凌兆新村","Linzhao Xincun"],secondaryName:!1,num:"00",services:["local"],parents:["er8w"],children:["9hqr"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},er8w:{name:["东方体育中心","Oriental Sports Center"],secondaryName:!1,num:"00",services:["local"],parents:["hpva"],children:["7rk9"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh11","#76232F","#fff","11号线","Line 11"],["shanghai","sh6","#D9027D","#fff","6号线","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},hpva:{name:["杨思","Yangsi"],secondaryName:!1,num:"00",services:["local"],parents:["hddq"],children:["er8w"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},hddq:{name:["成山路","Chengshan Road"],secondaryName:!1,num:"00",services:["local"],parents:["lbhn"],children:["hpva"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh13","#EF95CF","#000","13号线","Line 13"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},lbhn:{name:["耀华路","Yaohua Road"],secondaryName:!1,num:"00",services:["local"],parents:["rgqe"],children:["hddq"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh7","#FF6900","#000","7号线","Line 7"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},rgqe:{name:["中华艺术宫","China Art Museum"],secondaryName:!1,num:"00",services:["local"],parents:["ci2s"],children:["lbhn"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},ci2s:{name:["西藏南路","South Xizang Road"],secondaryName:!1,num:"00",services:["local"],parents:["x6sg"],children:["rgqe"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh4","#5F259F","#fff","4号线","Line 4"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},x6sg:{name:["陆家浜路","Lujiabang Road"],secondaryName:!1,num:"00",services:["local"],parents:["zb53"],children:["ci2s"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh9","#71C5E8","#000","9号线","Line 9"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},zb53:{name:["老西门","Laoximen"],secondaryName:!1,num:"00",services:["local"],parents:["cg8n"],children:["x6sg"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh10","#C1A7E2","#000","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},cg8n:{name:["大世界","Dashijie"],secondaryName:!1,num:"00",services:["local"],parents:["s2mu"],children:["zb53"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh14","#827A04","#fff","14号线","Line 14"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},s2mu:{name:["人民广场","People's Square"],secondaryName:!1,num:"00",services:["local"],parents:["jwc0"],children:["cg8n"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh2","#97D700","#000","2号线","Line 2"],["shanghai","sh1","#E4002B","#fff","1号线","Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},jwc0:{name:["曲阜路","Qufu Road"],secondaryName:!1,num:"00",services:["local"],parents:["wx8p"],children:["s2mu"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh12","#007B5F","#fff","12号线","Line 12"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},wx8p:{name:["中兴路","Zhongxin Road"],secondaryName:!1,num:"00",services:["local"],parents:["xhZhWR"],children:["jwc0"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},dudd:{name:["虹口足球场","Hongkou Football Stadium"],secondaryName:!1,num:"00",services:["local"],parents:["tf7a"],children:["xhZhWR"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh3","#FFD100","#000","3号线","Line 3"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},tf7a:{name:["曲阳路","Quyang Road"],secondaryName:!1,num:"00",services:["local"],parents:["jjrs"],children:["dudd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},jjrs:{name:["四平路","Siping Road"],secondaryName:!1,num:"00",services:["local"],parents:["eo9h"],children:["tf7a"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh10","#C1A7E2","#000","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},a00g:{name:["黄兴路","Huangxing Road"],secondaryName:!1,num:"00",services:["local"],parents:["3sdo"],children:["u0mf"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},"3sdo":{name:["延吉中路","Middle Yanji Road"],secondaryName:!1,num:"00",services:["local"],parents:["cs56"],children:["a00g"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},cs56:{name:["黄兴公园","Huangxing Park"],secondaryName:!1,num:"00",services:["local"],parents:["gdwo"],children:["3sdo"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},gdwo:{name:["翔殷路","Xiangyin Road"],secondaryName:!1,num:"00",services:["local"],parents:["zv4k"],children:["cs56"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},zv4k:{name:["嫩江路","Nenjiang Road"],secondaryName:!1,num:"00",services:["local"],parents:["l1mz"],children:["gdwo"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},eo9h:{name:["鞍山新村","Anshan Xincun"],secondaryName:!1,num:"00",services:["local"],parents:["u0mf"],children:["jjrs"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},u0mf:{name:["江浦路","Jiangpu Road"],secondaryName:!1,num:"00",services:["local"],parents:["a00g"],children:["eo9h"],branch:{left:[],right:[]},transfer:{info:[[["shanghai","sh18","#D6A461","#000","18号线","Line 18"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:355},xhZhWR:{name:["西藏北路","North Xizang Road"],secondaryName:!1,num:"00",services:["local"],parents:["dudd"],children:["wx8p"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:355}},t=["8号线","Line8"],l="1",o="8",c="sh",f=50,d=70,_={isLegacy:!1,terminal:!1},h={destination:1500,runin:1500,railmap:2200,indoor:2600},p=[],m={isStagger:!0,isFlip:!1},g={},u=!1,v={bank:!0,left_and_right_factor:0,bottom_factor:1},R={style:e,svg_height:400,padding:5,y_pc:40,branch_spacing:42.07,theme:a,direction:n,current_stn_idx:i,platform_num:s,stn_list:r,line_name:t,psd_num:l,line_num:o,info_panel_type:c,direction_gz_x:f,direction_gz_y:d,customiseMTRDest:_,svgWidth:h,notesGZMTR:p,namePosMTR:m,coline:g,loop:u,loop_info:v};export{N as branch_spacing,g as coline,i as current_stn_idx,_ as customiseMTRDest,R as default,n as direction,f as direction_gz_x,d as direction_gz_y,c as info_panel_type,t as line_name,o as line_num,u as loop,v as loop_info,m as namePosMTR,p as notesGZMTR,b as padding,s as platform_num,l as psd_num,r as stn_list,e as style,h as svgWidth,y as svg_height,a as theme,k as y_pc};
