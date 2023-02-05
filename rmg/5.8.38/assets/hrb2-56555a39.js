const y=450,e=8.750201061605276,a=40,r=45,n=["harbin","hrb2","#44AF52","#fff"],i="r",s="07zb",t="2",c={linestart:{parents:[],children:["07zb"],name:["路綫左端","LEFT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"00",secondaryName:!1},lineend:{parents:["b0ce"],children:[],name:["路綫右端","RIGHT END"],branch:{left:[],right:[]},transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[]]},services:["local"],facility:"",num:"20",secondaryName:!1},l1mz:{parents:["fjd4"],children:["7gkm"],name:["珠江路","Zhujiang Road"],branch:{left:[],right:[]},num:"16",transfer:{tick_direc:"r",paid_area:!0,osi_names:[],info:[[["harbin","hrb3","#FFC72C","#fff","3号线","Line 3"]]]},services:["local"],facility:"",secondaryName:!1},b0ce:{name:["气象台","Meteorological Observatory"],secondaryName:!1,num:"19",services:["local"],parents:["hkxg"],children:["lineend"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},hkxg:{name:["东北农业大学","Northeast Agricultural University"],secondaryName:!1,num:"18",services:["local"],parents:["7gkm"],children:["b0ce"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"7gkm":{name:["南直路","Nanzhi Road"],secondaryName:!1,num:"17",services:["local"],parents:["l1mz"],children:["hkxg"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},fjd4:{name:["省医院","Provincial Hospital"],secondaryName:!1,num:"15",services:["local"],parents:["fzga"],children:["l1mz"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},fzga:{name:["省政府","The People's Goverment of\\Heilongjiang Province"],secondaryName:!1,num:"14",services:["local"],parents:["lnpe"],children:["fjd4"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},lnpe:{name:["工人文化宫","Worker's Cultural Palace"],secondaryName:!1,num:"13",services:["local"],parents:["1zqd"],children:["fzga"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"1zqd":{name:["博物馆","Museum of\\Heilongjiang Province"],secondaryName:!1,num:"12",services:["local"],parents:["lgga"],children:["lnpe"],branch:{left:[],right:[]},transfer:{info:[[["harbin","hrb1","#C8102E","#fff","1号线","Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},lgga:{name:["哈尔滨站","Harbin Railway Station"],secondaryName:!1,num:"11",services:["local"],parents:["smni"],children:["1zqd"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"railway"},smni:{name:["尚志大街","Shangzhi Street"],secondaryName:!1,num:"10",services:["local"],parents:["238p"],children:["lgga"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"238p":{name:["中央大街","Zhongyang Street"],secondaryName:!1,num:"09",services:["local"],parents:["qxuc"],children:["smni"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},qxuc:{name:["人民广场","People's Square"],secondaryName:!1,num:"08",services:["local"],parents:["nuxj"],children:["238p"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},nuxj:{name:["太阳岛","Sun Island"],secondaryName:!1,num:"07",services:["local"],parents:["474u"],children:["qxuc"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},"474u":{name:["冰雪大世界","Ice and Snow World"],secondaryName:!1,num:"06",services:["local"],parents:["illc"],children:["nuxj"],branch:{left:[],right:[]},transfer:{info:[[],[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},illc:{name:["世茂大道","Shimao Avenue"],secondaryName:!1,num:"05",services:["local"],parents:["i2kt"],children:["474u"],branch:{left:[],right:[]},transfer:{info:[[],[],[["other","other","#D22631","#fff","松北智轨1号线","Songbei ART Line 1"]]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},i2kt:{name:["龙川路","Longchuan Road"],secondaryName:!1,num:"04",services:["local"],parents:["kw79"],children:["illc"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},kw79:{name:["大耿家","Dagengjia"],secondaryName:!1,num:"03",services:["local"],parents:["zkde"],children:["i2kt"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""},zkde:{name:["哈尔滨北站","Harbin North Railway Station"],secondaryName:!1,num:"02",services:["local"],parents:["07zb"],children:["kw79"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:"railway"},"07zb":{name:["江北大学城","Jiangbei University Town"],secondaryName:!1,num:"01",services:["local"],parents:["linestart"],children:["zkde"],branch:{left:[],right:[]},transfer:{info:[[]],tick_direc:"r",paid_area:!0,osi_names:[]},facility:""}},l=["2号线","Line 2"],o="1",f="02",d="sh",m=50,h=70,_={isLegacy:!1,terminal:!1},u={destination:2e3,runin:2e3,railmap:2e3,indoor:2e3},g=[],p={isStagger:!0,isFlip:!1},b={svg_height:450,padding:e,y_pc:a,branch_spacing:r,theme:n,direction:i,current_stn_idx:s,platform_num:t,stn_list:c,line_name:l,psd_num:o,line_num:f,info_panel_type:d,direction_gz_x:m,direction_gz_y:h,customiseMTRDest:_,svgWidth:u,notesGZMTR:g,namePosMTR:p};export{r as branch_spacing,s as current_stn_idx,_ as customiseMTRDest,b as default,i as direction,m as direction_gz_x,h as direction_gz_y,d as info_panel_type,l as line_name,f as line_num,p as namePosMTR,g as notesGZMTR,e as padding,t as platform_num,o as psd_num,c as stn_list,u as svgWidth,y as svg_height,n as theme,a as y_pc};
