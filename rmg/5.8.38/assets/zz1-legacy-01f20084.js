System.register([],(function(e,i){"use strict";return{execute:function(){var i=e("svg_height",365),a=e("padding",3.08),r=e("y_pc",46.04),n=e("branch_spacing",45),o=e("theme",["other","other","#D20200","#fff"]),t=e("direction","r"),c=e("current_stn_idx","iwf6"),s=e("platform_num","2"),l=e("stn_list",{linestart:{parents:[],children:["iwf6"],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1},lineend:{parents:["vc00"],children:[],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"31",secondaryName:!1,loop_pivot:!1},l1mz:{parents:["iwf6"],children:["b164"],name:["郑大科技园","Zhengzhou University \\Sci-tech Park"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1},iwf6:{children:["l1mz"],parents:["linestart"],name:["河南工业大学","Henan University of Technology"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1},vc00:{name:["河南大学新区","New Campus of \\Henan University"],secondaryName:!1,num:"30",services:["local"],parents:["gv6z"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},gv6z:{name:["文苑北路","Wenyuan Road (N)"],secondaryName:!1,num:"29",services:["local"],parents:["p9q7"],children:["vc00"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},p9q7:{name:["龙子湖","Longzi Lake"],secondaryName:!1,num:"28",services:["local"],parents:["phqt"],children:["gv6z"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#225e9e","#fff","12号线","Line 12"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},phqt:{name:["市体育中心","Zhengzhou Sports Center"],secondaryName:!1,num:"27",services:["local"],parents:["kz8k"],children:["p9q7"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},kz8k:{name:["博学路","Boxue Road"],secondaryName:!1,num:"26",services:["local"],parents:["izkb"],children:["phqt"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},izkb:{name:["郑州东站","Zhengzhou East Railway station"],secondaryName:!1,num:"25",services:["local"],parents:["nuxn"],children:["kz8k"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#25AC74","#fff","5号线","Line 5"],["other","other","#E6E394","#fff","8号线","Line 8"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"hsr",loop_pivot:!1},nuxn:{name:["东风南路","Dongfeng Road (S)"],secondaryName:!1,num:"24",services:["local"],parents:["qdfx"],children:["izkb"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"l",paid_area:!1,osi_names:[]},facility:"",loop_pivot:!1},coxj:{name:["黄河南路","Huanghe Road (S)"],secondaryName:!1,num:"22",services:["local"],parents:["s15a"],children:["qdfx"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#225e9e","#fff","12号线","Line 12"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},s15a:{name:["会展中心","Zhengzhou International \\Convention and Exhibition Center"],secondaryName:!1,num:"21",services:["local"],parents:["c8b7"],children:["coxj"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#3792D6","#fff","4号线","Line 4"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},c8b7:{name:["民航路","Minhang Road"],secondaryName:!1,num:"20",services:["local"],parents:["kqol"],children:["s15a"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},kqol:{name:["燕庄","Yan Zhuang"],secondaryName:!1,num:"19",services:["local"],parents:["zprw"],children:["c8b7"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#852081","#fff","6号线","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},zprw:{name:["紫荆山","Zi Jing Shan"],secondaryName:!1,num:"18",services:["local"],parents:["lesa"],children:["kqol"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#D28F00","#fff","2号线","Line 2"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},lesa:{name:["人民路","Renmin Road"],secondaryName:!1,num:"17",services:["local"],parents:["wown"],children:["zprw"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},wown:{name:["二七广场","Erqi Square"],secondaryName:!1,num:"16",services:["local"],parents:["24m5"],children:["lesa"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#CB5100","#fff","3号线","Line 3"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},"24m5":{name:["郑州火车站","Zhengzhou Railway Station"],secondaryName:!1,num:"15",services:["local"],parents:["2ohc"],children:["wown"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#a42e28","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},"2ohc":{name:["医学院","Medical College of \\Zhengzhou University"],secondaryName:!1,num:"14",services:["local"],parents:["s4bt"],children:["24m5"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#a42e28","#fff","10号线","Line 10"],["other","other","#C0955A","#fff","7号线","Line 7"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},s4bt:{name:["绿城广场","Lvcheng Square"],secondaryName:!1,num:"13",services:["local"],parents:["265f"],children:["2ohc"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#a42e28","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},"265f":{name:["碧沙岗","Bi Sha Gang"],secondaryName:!1,num:"12",services:["local"],parents:["crby"],children:["s4bt"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},crby:{name:["五一公园","Wuyi Park"],secondaryName:!1,num:"11",services:["local"],parents:["io1r"],children:["265f"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#25AC74","#fff","5号线","Line 5"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},io1r:{name:["秦岭路","Qinling Road"],secondaryName:!1,num:"10",services:["local"],parents:["r8wa"],children:["crby"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},r8wa:{name:["西三环","Third Ring Road (W)"],secondaryName:!1,num:"09",services:["local"],parents:["hhgb"],children:["io1r"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},hhgb:{name:["西流湖","Xiliu Lake"],secondaryName:!1,num:"08",services:["local"],parents:["o3mf"],children:["r8wa"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},o3mf:{name:["市民中心","Zhengzhou Civic Center"],secondaryName:!1,num:"07",services:["local"],parents:["xrfn"],children:["hhgb"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},"6o48":{name:["兰寨","Lan Zhai"],secondaryName:!1,num:"05",services:["local"],parents:["mya8"],children:["xrfn"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},mya8:{name:["梧桐街","Wutong Street"],secondaryName:!1,num:"04",services:["local"],parents:["b164"],children:["6o48"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},b164:{name:["郑州大学","Zhengzhou University"],secondaryName:!1,num:"03",services:["local"],parents:["l1mz"],children:["mya8"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#E6E394","#fff","8号线","Line 8"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},qdfx:{name:["农业南路","Nongye Road (S)"],secondaryName:!1,num:"23",services:["local"],parents:["coxj"],children:["nuxn"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1},xrfn:{name:["铁炉","Tie Lu"],secondaryName:!1,num:"06",services:["local"],parents:["6o48"],children:["o3mf"],branch:{left:[],right:[]},transfer:{info:[[["other","other","#844F7C","#fff","14号线","Line 14"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1}}),f=e("line_name",["1号线","Line 1"]),h=e("psd_num","1"),d=e("line_num","1"),_=e("info_panel_type","gz28"),m=e("direction_gz_x",50),p=e("direction_gz_y",76.4),y=e("customiseMTRDest",{isLegacy:!1,terminal:!1}),v=e("svgWidth",{destination:1500,runin:1700,railmap:3e3,indoor:2500}),g=e("notesGZMTR",[["6号线、7号线、8号线、10号线暂缓开通","Line 6, Line 7, Line 8 and Line 10 have been suspended",0,5.5,!1]]),u=e("namePosMTR",{isStagger:!0,isFlip:!1}),b=e("style","gzmtr"),k=e("coline",[]),N=e("loop",!1),z=e("loop_info",{bank:!0,left_and_right_factor:1,bottom_factor:1});e("default",{svg_height:i,padding:a,y_pc:r,branch_spacing:n,theme:o,direction:t,current_stn_idx:c,platform_num:s,stn_list:l,line_name:f,psd_num:h,line_num:d,info_panel_type:_,direction_gz_x:m,direction_gz_y:p,customiseMTRDest:y,svgWidth:v,notesGZMTR:g,namePosMTR:u,style:b,coline:k,loop:N,loop_info:z})}}}));
