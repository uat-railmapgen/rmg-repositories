const e="shmetro",y=400,v=8.75,k=40,x=45,n=["shanghai","sh4","#5F259F","#fff"],a="r",i="fdwp",t="",s={linestart:{parents:[],children:["l1mz"],name:["\u8DEF\u7DAB\u5DE6\u7AEF","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},lineend:{parents:["iwf6"],children:[],name:["\u8DEF\u7DAB\u53F3\u7AEF","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},l1mz:{parents:["linestart"],children:["fdwp"],name:["l1mz",""],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},iwf6:{children:["lineend"],parents:["lt41"],name:["iwf6\u5929","iwf6"],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},fdwp:{name:["fdwp",""],secondaryName:!1,num:"00",services:["local"],parents:["l1mz"],children:["etp0"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},etp0:{name:["etp0",""],secondaryName:!1,num:"00",services:["local"],parents:["fdwp"],children:["56xk"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"56xk":{name:["56xk",""],secondaryName:!1,num:"00",services:["local"],parents:["etp0"],children:["768x"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"768x":{name:["768x",""],secondaryName:!1,num:"00",services:["local"],parents:["56xk"],children:["lt41"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},lt41:{name:["lt41",""],secondaryName:!1,num:"00",services:["local"],parents:["768x"],children:["iwf6"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""}},r=["4\u53F7\u7EBF","Line 4"],c="1",l="TW",o="sh2020",f=50,d=70,_={isLegacy:!1,terminal:!1},m={destination:1e3,runin:1e3,railmap:1e3,indoor:1e3},p=[],h={isStagger:!0,isFlip:!1},u=[],g=!0,b={style:e,svg_height:400,padding:8.75,y_pc:40,branch_spacing:45,theme:n,direction:a,current_stn_idx:i,platform_num:t,stn_list:s,line_name:r,psd_num:c,line_num:l,info_panel_type:o,direction_gz_x:f,direction_gz_y:d,customiseMTRDest:_,svgWidth:m,notesGZMTR:p,namePosMTR:h,coline:u,loop:g};export{x as branch_spacing,u as coline,i as current_stn_idx,_ as customiseMTRDest,b as default,a as direction,f as direction_gz_x,d as direction_gz_y,o as info_panel_type,r as line_name,l as line_num,g as loop,h as namePosMTR,p as notesGZMTR,v as padding,t as platform_num,c as psd_num,s as stn_list,e as style,m as svgWidth,y as svg_height,n as theme,k as y_pc};
