const e="gzmtr",k=300,a=8.750201061605276,n=40,i=45,r=["guangzhou","gz13","#8E8C13","#fff"],s="r",t="iwf6",c="3",l={2990:{name:["双岗","Shuanggang"],num:"03",services:["local"],parents:["l1mz"],children:["o2kp"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},6575:{name:["新塘","Xintang"],num:"09",services:["local"],parents:["g0m1"],children:["iblk"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},linestart:{parents:[],children:["iwf6"],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},lineend:{parents:["6dw0"],children:[],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"12",secondaryName:!1},l1mz:{parents:["iwf6"],children:["2990"],name:["裕丰围","Yufengwei"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},iwf6:{children:["l1mz"],parents:["linestart"],name:["鱼珠","Yuzhu"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["guangzhou","gz5","#C5003E","#fff","5号线","Line 5"]]]},services:["local"],facility:"",secondaryName:!1},"6dw0":{name:["新沙","Xinsha"],num:"11",services:["local"],parents:["iblk"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},iblk:{name:["官湖","Guanhu"],num:"10",services:["local"],parents:["6575"],children:["6dw0"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},g0m1:{name:["白江","Baijiang"],num:"08",services:["local"],parents:["9tlx"],children:["6575"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},"9tlx":{name:["沙村","Shacun"],num:"07",services:["local"],parents:["1en6"],children:["g0m1"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},"1en6":{name:["南岗","Nangang"],num:"06",services:["local"],parents:["hnoy"],children:["9tlx"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},hnoy:{name:["夏园","Xiayuan"],num:"05",services:["local"],parents:["o2kp"],children:["1en6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1},o2kp:{name:["南海神殿","Nanhai God Temple"],num:"04",services:["local"],parents:["2990"],children:["hnoy"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"",secondaryName:!1}},o=["13号线","Line 13"],f="1",m="13",d="gz1421",_=41.84,h=77.98,g={isLegacy:!1,terminal:!1},u={destination:1e3,runin:1e3,railmap:1e3,indoor:1e3},p=[],y={isStagger:!0,isFlip:!1},b={style:e,svg_height:300,padding:a,y_pc:n,branch_spacing:i,theme:r,direction:s,current_stn_idx:t,platform_num:c,stn_list:l,line_name:o,psd_num:f,line_num:m,info_panel_type:d,direction_gz_x:_,direction_gz_y:h,customiseMTRDest:g,svgWidth:u,notesGZMTR:p,namePosMTR:y};export{i as branch_spacing,t as current_stn_idx,g as customiseMTRDest,b as default,s as direction,_ as direction_gz_x,h as direction_gz_y,d as info_panel_type,o as line_name,m as line_num,y as namePosMTR,p as notesGZMTR,a as padding,c as platform_num,f as psd_num,l as stn_list,e as style,u as svgWidth,k as svg_height,r as theme,n as y_pc};
