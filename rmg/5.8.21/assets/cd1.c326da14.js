const e="shmetro",k=420,b=4,N=65,a=["chengdu","cd1","#10069F","#fff"],n="r",i="l1mz",r="2",t={linestart:{parents:[],children:["l1mz"],name:["\u8DEF\u7DAB\u5DE6\u7AEF","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:230},lineend:{parents:["VpeeIb","gua0"],children:[],name:["\u8DEF\u7DAB\u53F3\u7AEF","RIGHT END"],branch:{left:["through","VpeeIb"],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"35",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:230},l1mz:{parents:["linestart"],children:["iwf6"],name:["\u97E6\u5BB6\u78BE","Weijianian"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:230},iwf6:{children:["dx9v"],parents:["l1mz"],name:["\u5347\u4ED9\u6E56","Shengxian Lake"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1,loop_pivot:!1,one_line:!0,int_padding:230},dx9v:{name:["\u706B\u8F66\u5317\u7AD9","North Railway Station"],secondaryName:!1,num:"03",services:["local"],parents:["iwf6"],children:["507q"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd7","#59CBE8","#fff","7\u53F7\u7EBF","Line 7"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"railway",loop_pivot:!1,one_line:!0,int_padding:230},"507q":{name:["\u4EBA\u6C11\u5317\u8DEF","Renmin Rd. North"],secondaryName:!1,num:"04",services:["local"],parents:["dx9v"],children:["wj16"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd6","#B36924","#fff","6\u53F7\u7EBF","Line 6"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},wj16:{name:["\u6587\u6B8A\u9662","Wenshu Monastery"],secondaryName:!1,num:"05",services:["local"],parents:["507q"],children:["639e"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},"639e":{name:["\u9AA1\u9A6C\u5E02","Luomashi"],secondaryName:!1,num:"06",services:["local"],parents:["wj16"],children:["lej6"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd4","#00B047","#fff","4\u53F7\u7EBF","Line 4"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},lej6:{name:["\u5929\u5E9C\u5E7F\u573A","Tianfu Square"],secondaryName:!1,num:"07",services:["local"],parents:["639e"],children:["5k2EAg"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd2","#FF5C39","#fff","2\u53F7\u7EBF","Line 2"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},"4c8t":{name:["\u502A\u5BB6\u6865","Nijiaqiao"],secondaryName:!1,num:"11",services:["local"],parents:["5ybv"],children:["_I_kf5"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd8","#C4D600","#fff","8\u53F7\u7EBF","Line 8"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},"9pyo":{name:["\u706B\u8F66\u5357\u7AD9","South Railway Station"],secondaryName:!1,num:"13",services:["local"],parents:["_I_kf5"],children:["r5kv"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd7","#59CBE8","#fff","7\u53F7\u7EBF","Line 7"],["chengdu","cd18","#006271","#fff","18\u53F7\u7EBF","Line 18"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"railway",loop_pivot:!1,one_line:!0,int_padding:230},r5kv:{name:["\u9AD8\u65B0","Hi-Tech Zone"],secondaryName:!1,num:"14",services:["local"],parents:["9pyo"],children:["uxm9"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},uxm9:{name:["\u91D1\u878D\u57CE","Financial City"],secondaryName:!1,num:"15",services:["local"],parents:["r5kv"],children:["e9rp"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},e9rp:{name:["\u5B75\u5316\u56ED","Incubation Park"],secondaryName:!1,num:"16",services:["local"],parents:["uxm9"],children:["rtfa"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd9","#FFB81C","#fff","9\u53F7\u7EBF","Line 9"],["chengdu","cd18","#006271","#fff","18\u53F7\u7EBF","Line 18"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},rtfa:{name:["\u9526\u57CE\u5E7F\u573A","Jincheng Plaza"],secondaryName:!1,num:"17",services:["local"],parents:["e9rp"],children:["nu0i"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},nu0i:{name:["\u4E16\u7EAA\u57CE","Century City"],secondaryName:!1,num:"18",services:["local"],parents:["rtfa"],children:["p0k4"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd18","#006271","#fff","18\u53F7\u7EBF","Line 18"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},p0k4:{name:["\u5929\u5E9C\u4E09\u8857","3rd Tianfu Street"],secondaryName:!1,num:"19",services:["local"],parents:["nu0i"],children:["0uia"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},"0uia":{name:["\u5929\u5E9C\u4E94\u8857","5th Tianfu Street"],secondaryName:!1,num:"20",services:["local"],parents:["p0k4"],children:["d30g"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},xhx5:{name:["\u56DB\u6CB3","Sihe"],secondaryName:!1,num:"22",services:["local"],parents:["d30g"],children:["lq7teA","kzwq"],branch:{left:[],right:["through","lq7teA"]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:230},kzwq:{name:["\u534E\u9633","Huayang"],secondaryName:!1,num:"23",services:["local"],parents:["xhx5"],children:["4qke"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:230},d30g:{name:["\u534E\u5E9C\u5927\u9053","Huafu Avenue"],secondaryName:!1,num:"21",services:["local"],parents:["0uia"],children:["xhx5"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!1,int_padding:230},"4qke":{name:["\u6D77\u660C\u8DEF","Haichang Road"],secondaryName:!1,num:"24",services:["local"],parents:["kzwq"],children:["ui4w"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd18","#006271","#fff","18\u53F7\u7EBF","Line 18"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:140},ui4w:{name:["\u5E7F\u798F","Guangfu"],secondaryName:!1,num:"25",services:["local"],parents:["4qke"],children:["exjz"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},exjz:{name:["\u7EA2\u77F3\u516C\u56ED","Hongshi Park"],secondaryName:!1,num:"26",services:["local"],parents:["ui4w"],children:["g6am"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},g6am:{name:["\u9E93\u6E56","Luhu Lake"],secondaryName:!1,num:"27",services:["local"],parents:["exjz"],children:["qpv2"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},qpv2:{name:["\u6B66\u6C49\u8DEF","Wuhan Road"],secondaryName:!1,num:"28",services:["local"],parents:["g6am"],children:["mtpj"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},mtpj:{name:["\u5929\u5E9C\u516C\u56ED","Tianfu Park"],secondaryName:!1,num:"29",services:["local"],parents:["qpv2"],children:["xh2v"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},xh2v:{name:["\u897F\u535A\u57CE","Western China Int'l Expo City"],secondaryName:!1,num:"30",services:["local"],parents:["mtpj"],children:["kwag"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd6","#B36924","#fff","6\u53F7\u7EBF","Line 6"],["chengdu","cd18","#006271","#fff","18\u53F7\u7EBF","Line 18"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:210},kwag:{name:["\u5E7F\u5DDE\u8DEF","Guangzhou Road"],secondaryName:!1,num:"31",services:["local"],parents:["xh2v"],children:["kgas"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},kgas:{name:["\u5174\u9686\u6E56","Xinglong Lake"],secondaryName:!1,num:"32",services:["local"],parents:["kwag"],children:["gua0"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},gua0:{name:["\u79D1\u5B66\u57CE","Science City"],secondaryName:!1,num:"33",services:["local"],parents:["kgas"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},"5ybv":{name:["\u7701\u4F53\u80B2\u9986","Sichuan Gymnasium"],secondaryName:!1,num:"10",services:["local"],parents:["PYSsbW"],children:["4c8t"],branch:{left:[],right:[]},transfer:{info:[[["chengdu","cd3","#D9027D","#fff","3\u53F7\u7EBF","Line 3"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},"5k2EAg":{name:["\u9526\u6C5F\u5BBE\u9986","Jinjiang Hotel"],secondaryName:!1,num:"08",services:["local"],parents:["lej6"],children:["PYSsbW"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},PYSsbW:{name:["\u534E\u897F\u575D","Huaxiba"],secondaryName:!1,num:"09",services:["local"],parents:["5k2EAg"],children:["5ybv"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},_I_kf5:{name:["\u6850\u6893\u6797","Tongzilin"],secondaryName:!1,num:"12",services:["local"],parents:["4c8t"],children:["9pyo"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},lq7teA:{name:["\u5E7F\u90FD","Guangdu"],secondaryName:!1,num:"Y1",services:["local"],parents:["xhx5"],children:["VpeeIb"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230},VpeeIb:{name:["\u4E94\u6839\u677E","Wugensong"],secondaryName:!1,num:"Y2",services:["local"],parents:["lq7teA"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:230}},s=["1\u53F7\u7EBF","Line 1"],l="1",c="01",o="gz28",f=59,d=24,_={isLegacy:!1,terminal:!1},p={destination:1500,runin:1200,railmap:2e3,indoor:3200},m=[],u={isStagger:!0,isFlip:!1},h={},g=!1,y={bank:!0,left_and_right_factor:0,bottom_factor:1},v=44,x={style:e,svg_height:420,padding:4,y_pc:65,theme:a,direction:n,current_stn_idx:i,platform_num:r,stn_list:t,line_name:s,psd_num:l,line_num:c,info_panel_type:o,direction_gz_x:f,direction_gz_y:d,customiseMTRDest:_,svgWidth:p,notesGZMTR:m,namePosMTR:u,coline:h,loop:g,loop_info:y,branchSpacingPct:v};export{v as branchSpacingPct,h as coline,i as current_stn_idx,_ as customiseMTRDest,x as default,n as direction,f as direction_gz_x,d as direction_gz_y,o as info_panel_type,s as line_name,c as line_num,g as loop,y as loop_info,u as namePosMTR,m as notesGZMTR,b as padding,r as platform_num,l as psd_num,t as stn_list,e as style,p as svgWidth,k as svg_height,a as theme,N as y_pc};
