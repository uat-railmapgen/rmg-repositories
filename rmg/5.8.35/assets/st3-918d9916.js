const e="gzmtr",g=321,u=5.6,y=67.15,v=39.77,a=["santiago","stg3","#65250F","#fff"],r="l",i="iwf6",n="3",s={linestart:{parents:[],children:["hnni"],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],num:"00",facility:"",secondaryName:!1},lineend:{parents:["iwf6"],children:[],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],num:"00",facility:"",secondaryName:!1},l1mz:{parents:["9v2d"],children:["iwf6"],name:["联洲广场","Plaza Egaña "],branch:{left:[],right:[]},num:"20",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg4","#212580","#fff","4号线","Line 4"]]]},services:["local"],facility:"",secondaryName:!1},iwf6:{children:["lineend"],parents:["l1mz"],name:["费尔南多·卡斯蒂略·贝拉斯科","Fernando Castillo Velasco "],branch:{left:[],right:[]},num:"21",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},"9v2d":{parents:["cnah"],children:["l1mz"],name:["福莱镇","Villa Frei "],branch:{left:[],right:[]},num:"19",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},cnah:{parents:["em2j"],children:["9v2d"],name:[" 智利西班牙","Chile España"],branch:{left:[],right:[]},num:"18",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg8","#EA662D","#fff","8号线","Line 8"]]]},services:["local"],facility:"",secondaryName:!1},em2j:{parents:["fjhm"],children:["cnah"],name:["纽诺阿","Ñuñoa "],branch:{left:[],right:[]},num:"17",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg6","#943B92","#fff","6号线","Line 6"]]]},services:["local"],facility:"",secondaryName:!1},fjhm:{parents:["3x3q"],children:["em2j"],name:[" 埃扎吉雷主教","Monseñor Eyzaguirre"],branch:{left:[],right:[]},num:"16",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},"3x3q":{parents:["x3vj"],children:["fjhm"],name:["伊拉拉扎瓦尔","Irarrázaval "],branch:{left:[],right:[]},num:"15",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg5","#0B9444","#fff","5号线","Line 5"]]]},services:["local"],facility:"",secondaryName:!1},x3vj:{parents:["0cq2"],children:["3x3q"],name:[" 马塔","Matta"],branch:{left:[],right:[]},num:"14",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg9","#E66AA6","#fff","9号线","Line 9"]]]},services:["local"],facility:"",secondaryName:!1},"0cq2":{parents:["eihp"],children:["x3vj"],name:["阿尔玛格罗公园","Parque Almagro "],branch:{left:[],right:[]},num:"13",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},eihp:{parents:["v68c"],children:["0cq2"],name:[" 智利大学","Universidad de Chile"],branch:{left:[],right:[]},num:"12",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg1","#DC1A32","#fff","1号线","Line 1"]]]},services:["local"],facility:"",secondaryName:!1},v68c:{parents:["r56c"],children:["eihp"],name:[" 主广场","Plaza de Armas"],branch:{left:[],right:[]},num:"11",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg5","#0B9444","#fff","5号线","Line 5"]]]},services:["local"],facility:"",secondaryName:!1},r56c:{parents:["vxxf"],children:["v68c"],name:[" 卡尔伊坎托桥","Puente Cal y Canto"],branch:{left:[],right:[]},num:"10",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["santiago","stg2","#FBB416","#000","2号线","Line 2"],["santiago","stg7","#6C6D70","#fff","7号线","Line 7"]]]},services:["local"],facility:"",secondaryName:!1},vxxf:{parents:["0w0o"],children:["r56c"],name:[" 医院","Hospitales"],branch:{left:[],right:[]},num:"09",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},"0w0o":{parents:["xclf"],children:["vxxf"],name:[" 查卡布科广场","Plaza Chacabuco"],branch:{left:[],right:[]},num:"08",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},xclf:{parents:["vatj"],children:["0w0o"],name:["孔查利","Conchalí"],branch:{left:[],right:[]},num:"07",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},vatj:{parents:["o60v"],children:["xclf"],name:[" 维瓦塞塔","Vivaceta"],branch:{left:[],right:[]},num:"06",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},o60v:{parents:["e3we"],children:["vatj"],name:[" 红衣主教卡罗","Cardenal Caro"],branch:{left:[],right:[]},num:"05",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},e3we:{parents:["oecp"],children:["o60v"],name:[" 解放者","Los Libertadores"],branch:{left:[],right:[]},num:"04",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},oecp:{parents:["wxqs"],children:["e3we"],name:[" 铁路","Ferrocarril"],branch:{left:[],right:[]},num:"03",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},wxqs:{parents:["hnni"],children:["oecp"],name:[" 洛克鲁扎","Lo Cruzat"],branch:{left:[],right:[]},num:"02",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1},hnni:{parents:["linestart"],children:["wxqs"],name:["奎里库拉广场","Plaza de Quilicura "],branch:{left:[],right:[]},num:"01",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",secondaryName:!1}},t=["3号线","Line 3"],c="13",l="3",o="gz1421",f=13.58,d=14.77,m={isLegacy:!0,terminal:!1},_={destination:1150,runin:1303,railmap:1555,indoor:1150},h=[],p={isStagger:!0,isFlip:!0},b={style:e,svg_height:321,padding:5.6,y_pc:67.15,branch_spacing:39.77,theme:a,direction:r,current_stn_idx:i,platform_num:n,stn_list:s,line_name:t,psd_num:c,line_num:l,info_panel_type:o,direction_gz_x:f,direction_gz_y:d,customiseMTRDest:m,svgWidth:_,notesGZMTR:h,namePosMTR:p};export{v as branch_spacing,i as current_stn_idx,m as customiseMTRDest,b as default,r as direction,f as direction_gz_x,d as direction_gz_y,o as info_panel_type,t as line_name,l as line_num,p as namePosMTR,h as notesGZMTR,u as padding,n as platform_num,c as psd_num,s as stn_list,e as style,_ as svgWidth,g as svg_height,a as theme,y as y_pc};
