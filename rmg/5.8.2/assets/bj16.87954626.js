const e="shmetro",p=400,g=8.75,y=40,b=45,a=["beijing","bj16","#6BA539","#fff"],n="l",i="l1mz",r="2",s={linestart:{parents:[],children:["iwf6"],name:["\u8DEF\u7DAB\u53F3\u7AEF","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"19",secondaryName:!1},lineend:{parents:["l1mz"],children:[],name:["\u8DEF\u7DAB\u5DE6\u7AEF","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},l1mz:{parents:["xp0m"],children:["lineend"],name:["\u5317\u5B89\u6CB3","Bei'anhe"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},iwf6:{children:["e6fb"],parents:["linestart"],name:["\u7389\u6E0A\u6F6D\u4E1C\u95E8","Yuyuantan Dongmen\\(Yuyuantan Park East Gate)"],branch:{left:[],right:[]},num:"18",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},e6fb:{name:["\u7518\u5BB6\u53E3","Ganjiakou"],secondaryName:!1,num:"17",services:["local"],parents:["iwf6"],children:["1xnt"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"1xnt":{name:["\u4E8C\u91CC\u6C9F","Erligou"],secondaryName:["\u6682\u7F13\u5F00\u901A","Stay Open"],num:"16",services:[],parents:["e6fb"],children:["mny3"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj6","#B58500","#fff","6\u53F7\u7EBF","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},mny3:{name:["\u56FD\u5BB6\u56FE\u4E66\u9986","Guojia Tushuguan\\(National Library)"],secondaryName:!1,num:"15",services:["local"],parents:["1xnt"],children:["kbfm"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj4","#008C95","#fff","4\u53F7\u7EBF\\\u5927\u5174\u7EBF","Line 4\\Daxing Line"],["beijing","bj9","#97D700","#fff","9\u53F7\u7EBF","Line 9"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},eokp:{name:["\u4E07\u6CC9\u6CB3\u6865","Wanquanheqiao"],secondaryName:!1,num:"11",services:["local"],parents:["ipio"],children:["b6bz"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},ipio:{name:["\u82CF\u5DDE\u8857","Suzhou Jie"],secondaryName:["\u6682\u7F13\u5F00\u901A","Stay open"],num:"12",services:[],parents:["w81n"],children:["eokp"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#0092BC","#fff","10\u53F7\u7EBF","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},w81n:{name:["\u82CF\u5DDE\u6865","Suzhouqiao"],secondaryName:!1,num:"13",services:["local"],parents:["kbfm"],children:["ipio"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},kbfm:{name:["\u4E07\u5BFF\u5BFA","Wanshousi"],secondaryName:!1,num:"14",services:["local"],parents:["mny3"],children:["w81n"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},b6bz:{name:["\u897F\u82D1","Xiyuan"],secondaryName:!1,num:"10",services:["local"],parents:["eokp"],children:["z972"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj4","#008C95","#fff","4\u53F7\u7EBF\\\u5927\u5174\u7EBF","Line 4\\Daxing Line"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},sd27:{name:["\u6C38\u4E30\u5357","Yongfengnan"],secondaryName:!1,num:"06",services:["local"],parents:["1jvu"],children:["peit"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"1jvu":{name:["\u897F\u5317\u65FA","Xibeiwang"],secondaryName:!1,num:"07",services:["local"],parents:["s5i1"],children:["sd27"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},s5i1:{name:["\u9A6C\u8FDE\u6D3C","Malianwa"],secondaryName:!1,num:"08",services:["local"],parents:["z972"],children:["1jvu"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},z972:{name:["\u519C\u5927\u5357\u8DEF","Nongda Nanlu"],secondaryName:!1,num:"09",services:["local"],parents:["b6bz"],children:["s5i1"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},xp0m:{name:["\u6E29\u9633\u8DEF","Wenyang Lu"],secondaryName:!1,num:"02",services:["local"],parents:["i0db"],children:["l1mz"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},i0db:{name:["\u7A3B\u9999\u6E56\u8DEF","Daoxianghu Lu"],secondaryName:!1,num:"03",services:["local"],parents:["1k0c"],children:["xp0m"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"1k0c":{name:["\u5C6F\u4F43","Tundian"],secondaryName:!1,num:"04",services:["local"],parents:["peit"],children:["i0db"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},peit:{name:["\u6C38\u4E30","Yongfeng"],secondaryName:!1,num:"05",services:["local"],parents:["sd27"],children:["1k0c"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""}},t=["16\u53F7\u7EBF","Line 16"],c="1",l="16",o="gz28",f=50,m=70,d={isLegacy:!1,terminal:!1},_={destination:1500,runin:1200,railmap:1750,indoor:1500},h=[],u={isStagger:!0,isFlip:!1},k={style:e,svg_height:400,padding:8.75,y_pc:40,branch_spacing:45,theme:a,direction:n,current_stn_idx:i,platform_num:r,stn_list:s,line_name:t,psd_num:c,line_num:l,info_panel_type:o,direction_gz_x:f,direction_gz_y:m,customiseMTRDest:d,svgWidth:_,notesGZMTR:h,namePosMTR:u};export{b as branch_spacing,i as current_stn_idx,d as customiseMTRDest,k as default,n as direction,f as direction_gz_x,m as direction_gz_y,o as info_panel_type,t as line_name,l as line_num,u as namePosMTR,h as notesGZMTR,g as padding,r as platform_num,c as psd_num,s as stn_list,e as style,_ as svgWidth,p as svg_height,a as theme,y as y_pc};
