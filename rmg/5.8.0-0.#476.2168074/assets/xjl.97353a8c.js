const z=450,e=8.750201061605276,n=40,i=45,a=["beijing","xiliuxian"],t=["beijing","xjl","#D22630","#fff"],r="r",s="ez7s",c="2",l={linestart:{parents:[],children:["ez7s"],name:["\u8DEF\u7DAB\u53F3\u7AEF","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},lineend:{parents:["l1mz"],children:[],name:["\u8DEF\u7DAB\u5DE6\u7AEF","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"07",secondaryName:!1},l1mz:{parents:["iwf6"],children:["lineend"],name:["\u5DF4\u6C9F","B\u0251gou"],branch:{left:[],right:[]},num:"06",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["beijing","bj10","#0092BC","#fff","10\u53F7\u7EBF","Line 10"]]]},services:["local"],facility:"",secondaryName:!1},iwf6:{children:["l1mz"],parents:["zumd"],name:["\u9890\u548C\u56ED\u897F\u95E8","Yiheyu\u0251n Ximen\\(Summer Palace West Gate)"],branch:{left:[],right:[]},num:"05",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},zumd:{name:["\u8336\u68DA","Ch\u0251peng"],secondaryName:!1,num:"04",services:["local"],parents:["lr75"],children:["iwf6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},lr75:{name:["\u4E07\u5B89","W\u0251n'\u0251n"],secondaryName:!1,num:"03",services:["local"],parents:["hhgt"],children:["zumd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},hhgt:{name:["\u690D\u7269\u56ED","Zhiwuyu\u0251n\\(Botanical Garden)"],secondaryName:!1,num:"02",services:["local"],parents:["ez7s"],children:["lr75"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},ez7s:{name:["\u9999\u5C71","Xi\u0251ngsh\u0251n\\(Fragrant Hills)"],secondaryName:!1,num:"01",services:["local"],parents:["linestart"],children:["hhgt"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""}},o=["\u897F\u90CA\u7EBF","Xijiao Line"],m="1",f="XJ",d="gz28",_=50,h=70,g={isLegacy:!1,terminal:!1},u={destination:2e3,runin:2e3,railmap:2e3,indoor:2e3},p=[],y={isStagger:!0,isFlip:!1},b={svg_height:450,padding:e,y_pc:n,branch_spacing:i,faketheme:a,theme:t,direction:r,current_stn_idx:s,platform_num:c,stn_list:l,line_name:o,psd_num:m,line_num:f,info_panel_type:d,direction_gz_x:_,direction_gz_y:h,customiseMTRDest:g,svgWidth:u,notesGZMTR:p,namePosMTR:y};export{i as branch_spacing,s as current_stn_idx,g as customiseMTRDest,b as default,r as direction,_ as direction_gz_x,h as direction_gz_y,a as faketheme,d as info_panel_type,o as line_name,f as line_num,y as namePosMTR,p as notesGZMTR,e as padding,c as platform_num,m as psd_num,l as stn_list,u as svgWidth,z as svg_height,t as theme,n as y_pc};
