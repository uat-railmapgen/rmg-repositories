const e="gzmtr",b=300,n=8.750201061605276,a=40,i=45,r=["guangzhou","apm","#00B5E2","#fff"],s="l",t="qbbb",c="3",l={linestart:{parents:[],children:["egke"],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"10",secondaryName:!1},lineend:{parents:["qbbb"],children:[],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},l1mz:{parents:["iwf6"],children:["lyqw"],name:["天河南","Tianhenan"],branch:{left:[],right:[]},num:"07",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},iwf6:{children:["l1mz"],parents:["egke"],name:["体育中心南","Tianhe Sport Center South"],branch:{left:[],right:[]},num:"08",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},qbbb:{parents:["tgp4"],children:["lineend"],branch:{left:[],right:[]},name:["广州塔","Canton Tower"],num:"01",services:["local"],facility:"",transfer:{info:[[["guangzhou","gz3","#ECA154","#000","3号线","Line 3"]]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1},tgp4:{parents:["ecsx"],children:["qbbb"],branch:{left:[],right:[]},name:["海心沙","Haixinsha"],num:"02",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1},su3g:{parents:["9v64"],children:["ecsx"],branch:{left:[],right:[]},name:["花城大道","Huacheng Dadao"],num:"04",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1},"9v64":{parents:["lyqw"],children:["su3g"],branch:{left:[],right:[]},name:["妇儿中心","Guangzhou Women and\\Children's Medical Center"],num:"05",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1},lyqw:{parents:["l1mz"],children:["9v64"],branch:{left:[],right:[]},name:["黄埔大道","Huangpu Dadao"],num:"06",services:["local"],facility:"",transfer:{info:[[]],osi_names:[],paid_area:!0,tick_direc:"r"},secondaryName:!1},ecsx:{name:["大剧院","Guangzhou\\Opera House"],secondaryName:!1,num:"03",services:["local"],parents:["su3g"],children:["tgp4"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},egke:{name:["林和西","Linhexi"],secondaryName:!1,num:"09",services:["local"],parents:["linestart"],children:["iwf6"],branch:{left:[],right:[]},transfer:{info:[[["guangzhou","gz3","#ECA154","#000","3号线","Line 3"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""}},o=["APM线","APM Line"],d="2",f="APM",m="gzgf",_=45,h=69.27,g={isLegacy:!1,terminal:!1},u={destination:1e3,runin:1e3,railmap:1200,indoor:1e3},p=[],y={isStagger:!0,isFlip:!1},v={style:e,svg_height:300,padding:n,y_pc:a,branch_spacing:i,theme:r,direction:s,current_stn_idx:t,platform_num:c,stn_list:l,line_name:o,psd_num:d,line_num:f,info_panel_type:m,direction_gz_x:_,direction_gz_y:h,customiseMTRDest:g,svgWidth:u,notesGZMTR:p,namePosMTR:y};export{i as branch_spacing,t as current_stn_idx,g as customiseMTRDest,v as default,s as direction,_ as direction_gz_x,h as direction_gz_y,m as info_panel_type,o as line_name,f as line_num,y as namePosMTR,p as notesGZMTR,n as padding,c as platform_num,d as psd_num,l as stn_list,e as style,u as svgWidth,b as svg_height,r as theme,a as y_pc};
