System.register([],(function(i,n){"use strict";return{execute:function(){var n=i("svgWidth",{destination:1500,runin:1200,railmap:1500,indoor:4e3}),e=i("svg_height",300),a=i("style","shmetro"),r=i("y_pc",40),t=i("padding",8),o=i("direction","l"),c=i("platform_num",""),l=i("theme",["beijing","bj4","#008e9c","#fff"]),s=i("line_name",["4号线","Line 4"]),d=i("current_stn_idx","NrI7z9"),_=i("stn_list",{linestart:{name:["RIGHT END","RIGHT END"],secondaryName:!1,num:"00",services:["local"],parents:[],children:["C6RBAk"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},NrI7z9:{name:["安河桥北","Anheqiao Bei (N)"],secondaryName:!1,num:"01",services:["local"],parents:["Uo1cC5"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},lineend:{name:["LEFT END","LEFT END"],secondaryName:!1,num:"00",services:["local"],parents:["NrI7z9"],children:[],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},Uo1cC5:{name:["北宫门","Beigongmen"],secondaryName:!1,num:"02",services:["local"],parents:["fL5ELd"],children:["NrI7z9"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},fL5ELd:{name:["西苑","Xi Yuan"],secondaryName:!1,num:"03",services:["local"],parents:["dSCc2y"],children:["Uo1cC5"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj16","#76a32e","#fff","16号线","Line 16"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},dSCc2y:{name:["圆明园","Yuanmingyuan Park"],secondaryName:!1,num:"04",services:["local"],parents:["NVKzaF"],children:["fL5ELd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},NVKzaF:{name:["北京大学东门","Peking Univ. East Gate"],secondaryName:!1,num:"05",services:["local"],parents:["crmq3T"],children:["dSCc2y"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},crmq3T:{name:["中关村","Zhongguancun"],secondaryName:!1,num:"06",services:["local"],parents:["A52qoy"],children:["NVKzaF"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},A52qoy:{name:["海淀黄庄","Haidian Huangzhuang"],secondaryName:!1,num:"07",services:["local"],parents:["Q9jlCy"],children:["crmq3T"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#009bc0","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},Q9jlCy:{name:["人民大学","Renmin Daxue\\ (Renmin Univ.)"],secondaryName:!1,num:"08",services:["local"],parents:["P85Kio"],children:["A52qoy"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},P85Kio:{name:["魏公村","Weigongcun"],secondaryName:!1,num:"09",services:["local"],parents:["lt1U10"],children:["Q9jlCy"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},lt1U10:{name:["国家图书馆","Guojia Tushuguan\\ (National Library)"],secondaryName:!1,num:"10",services:["local"],parents:["ycmtG8"],children:["P85Kio"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj9","#8fc31f","#fff","9号线","Line 9"],["beijing","bj16","#76a32e","#fff","16号线","Line 16"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},ycmtG8:{name:["动物园","Dongwuyuan\\ (Beijing Zoo)"],secondaryName:!1,num:"11",services:["local"],parents:["bbFKfl"],children:["lt1U10"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},bbFKfl:{name:["西直门","Xizhimen"],secondaryName:!1,num:"12",services:["local"],parents:["0SDqD3"],children:["ycmtG8"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj2","#006098","#fff","2号线","Line 2"],["beijing","bj13","#f9e700","#000","13号线","Line 13"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"0SDqD3":{name:["新街口","Xinjie Kou"],secondaryName:!1,num:"13",services:["local"],parents:["haqFyI"],children:["bbFKfl"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},haqFyI:{name:["平安里","Ping'anli"],secondaryName:!1,num:"14",services:["local"],parents:["RNulQp"],children:["0SDqD3"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj6","#d29700","#fff","6号线","Line 6"],["beijing","bj19","#D6ABC1","#000","19号线","Line 19"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},RNulQp:{name:["西四","Xisi"],secondaryName:!1,num:"15",services:["local"],parents:["qt054Y"],children:["haqFyI"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},qt054Y:{name:["灵境胡同","Lingjing Hutong"],secondaryName:!1,num:"16",services:["local"],parents:["dU9jwl"],children:["RNulQp"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},dU9jwl:{name:["西单","Xidan"],secondaryName:!1,num:"17",services:["local"],parents:["i0kL1Y"],children:["qt054Y"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj1","#c23a30","#fff","1号线","Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},i0kL1Y:{name:["宣武门","Xuanwu Men"],secondaryName:!1,num:"18",services:["local"],parents:["G8ymix"],children:["dU9jwl"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj2","#006098","#fff","2号线","Line 2"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},G8ymix:{name:["菜市口","Caishi Kou"],secondaryName:!1,num:"19",services:["local"],parents:["--G48i"],children:["i0kL1Y"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj7","#f6c582","#000","7号线","Line 7"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"--G48i":{name:["陶然亭","Taoranting"],secondaryName:!1,num:"20",services:["local"],parents:["vCDA0L"],children:["G8ymix"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},vCDA0L:{name:["北京南站","Beijingnan Zhan\\ (Beijing South Railway Station)"],secondaryName:!1,num:"21",services:["local"],parents:["eZaa6o"],children:["--G48i"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj14","#d5a7a1","#000","14号线","Line 14"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},eZaa6o:{name:["马家堡","Majiapu"],secondaryName:!1,num:"22",services:["local"],parents:["aLEiXt"],children:["vCDA0L"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},aLEiXt:{name:["角门西","Jiaomen Xi (W)"],secondaryName:!1,num:"23",services:["local"],parents:["V_LpmD"],children:["eZaa6o"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj10","#009bc0","#fff","10号线","Line 10"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},V_LpmD:{name:["公益西桥","Gongyi Xiqiao"],secondaryName:!1,num:"24",services:["local"],parents:["hAa_rs"],children:["aLEiXt"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},hAa_rs:{name:["新宫","Xingong"],secondaryName:!1,num:"25",services:["local"],parents:["wEWBkd"],children:["V_LpmD"],branch:{left:[],right:[]},transfer:{info:[[["beijing","bj19","#D6ABC1","#000","19号线","Line 19"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},wEWBkd:{name:["西红门","Xihong Men"],secondaryName:!1,num:"26",services:["local"],parents:["Hvrs2A"],children:["hAa_rs"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},Hvrs2A:{name:["高米店北","Gaomidian Bei (N)"],secondaryName:!1,num:"27",services:["local"],parents:["uFK0j7"],children:["wEWBkd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},uFK0j7:{name:["高米店南","Gaomidian Nan (S)"],secondaryName:!1,num:"28",services:["local"],parents:["uNJOW0"],children:["Hvrs2A"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},uNJOW0:{name:["枣园","Zaoyuan"],secondaryName:!1,num:"29",services:["local"],parents:["00WTpw"],children:["uFK0j7"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},"00WTpw":{name:["清源路","Qingyuan Lu"],secondaryName:!1,num:"30",services:["local"],parents:["AirAmn"],children:["uNJOW0"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},AirAmn:{name:["黄村西大街","Huangcun Xidajie"],secondaryName:!1,num:"31",services:["local"],parents:["hHTMn7"],children:["00WTpw"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},hHTMn7:{name:["黄村火车站","Huangcun Railway Station"],secondaryName:!1,num:"32",services:["local"],parents:["g0cU6p"],children:["AirAmn"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},g0cU6p:{name:["义和庄","Yihezhuang"],secondaryName:!1,num:"33",services:["local"],parents:["UnfLlC"],children:["hHTMn7"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},UnfLlC:{name:["生物医药基地","Biomedical Base"],secondaryName:!1,num:"34",services:["local"],parents:["C6RBAk"],children:["g0cU6p"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225},C6RBAk:{name:["天宫院","Tiangong Yuan"],secondaryName:!1,num:"35",services:["local"],parents:["linestart"],children:["UnfLlC"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",loop_pivot:!1,one_line:!0,int_padding:225}}),p=i("namePosMTR",{isStagger:!0,isFlip:!0}),f=i("customiseMTRDest",{isLegacy:!0,terminal:!1}),m=i("line_num","4"),h=i("psd_num","12"),g=i("info_panel_type","sh2020"),y=i("notesGZMTR",[]),u=i("direction_gz_x",3.666667),v=i("direction_gz_y",79.666667),b=i("coline",{}),N=i("loop",!1),k=i("loop_info",{bank:!0,left_and_right_factor:1,bottom_factor:1}),j=i("branchSpacingPct",40);i("default",{svgWidth:n,svg_height:e,style:a,y_pc:r,padding:t,direction:o,platform_num:c,theme:l,line_name:s,current_stn_idx:d,stn_list:_,namePosMTR:p,customiseMTRDest:f,line_num:m,psd_num:h,info_panel_type:g,notesGZMTR:y,direction_gz_x:u,direction_gz_y:v,coline:b,loop:N,loop_info:k,branchSpacingPct:j})}}}));
