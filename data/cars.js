window.COLLECTION_DATA = {
  owners: [
    { id: "user1", index: "01", name: "sjq 的车库", desc: "德系与日系性能车" },
    { id: "user2", index: "02", name: "zmz 的车库", desc: "超跑与限定涂装" },
    { id: "user3", index: "03", name: "wsz 的车库", desc: "国产商用车与军模" },
    { id: "user4", index: "04", name: "yyj 的车库", desc: "私人 1:64 藏品" }
  ],
  brandLabels: {
    all: "全部",
    minigt: "MINI GT",
    tomica: "TOMICA",
    hotwheels: "Hot Wheels",
    tuoyi: "拓意",
    bmg: "比美高",
    hkm: "HKM",
    limited: "限定"
  },
  cars: [
    { id: "porsche-911-gt2rs", img: "car01.jpg", owner: "user1", type: "bmg", tag: "比美高", name: "保时捷 911 GT2 RS", desc: "银灰金属车漆配合赛道化空气动力学套件，宽体姿态和大尾翼突出 GT2 RS 的硬核性能气质。", status: "owned" },
    { id: "ferrari-fxx-k", img: "ferrari-fxx-k.jpg", owner: "user1", type: "bmg", tag: "比美高", name: "法拉利 FXX K", desc: "基于 LaFerrari 打造的赛道实验旗舰，黑金涂装突出 HY-KERS 混动性能车的攻击性空气动力学和收藏级姿态。", status: "owned" },
    { id: "mazda-rx7", img: "mazda-rx7.jpg", owner: "user1", type: "hotwheels", tag: "Hot Wheels", name: "马自达 RX-7", desc: "经典转子跑车，红色涂装和低趴姿态都很有收藏辨识度。", status: "owned" },
    { id: "bugatti-divo", img: "bugatti-divo.jpg", owner: "user1", type: "tuoyi", tag: "拓意", name: "布加迪 Divo", desc: "以 Chiron 为基础强化弯道性能的限量超跑，银灰车身和夸张尾翼突出布加迪更激进的空气动力学姿态。", status: "owned" },
    { id: "ferrari-296-gtb", img: "ferrari-296-gtb.jpg", owner: "user1", type: "bmg", tag: "比美高", name: "法拉利 296 GTB", desc: "法拉利 V6 插电混动 berlinetta，紧凑车身配合流畅红色线条，兼具现代电驱性能和经典跃马比例。", status: "owned" },
    { id: "corvette-c8", img: "corvette-c8.jpg", owner: "user1", type: "tomica", tag: "TOMICA", name: "克尔维特 C8", desc: "雪佛兰首款中置布局 Corvette，黄色车身强化低矮楔形轮廓，是美式超跑进入新时代的代表。", status: "owned" },
    { id: "bmw-m4-csl", img: "bmw-m4-csl.jpg", owner: "user1", type: "tuoyi", tag: "拓意", name: "BMW M4 CSL", desc: "M4 家族轻量化高性能版本，白色车身、宽体轮廓和大尾翼呈现更纯粹的赛道化气质。", status: "owned" },
    { id: "toyota-gr-supra", img: "toyota-gr-supra.jpg", owner: "user2", type: "tomica", tag: "TOMICA", name: "丰田 GR Supra", desc: "第五代 Supra 的高性能版本，长车头、短车尾和双门跑车比例延续了丰田性能车的经典轮廓。", status: "owned" },
    { id: "ferrari-daytona-sp3", img: "ferrari-daytona-sp3.jpg", owner: "user2", type: "bmg", tag: "比美高", name: "法拉利 Daytona SP3", desc: "Icona 系列限量超跑，灵感来自 1960 年代法拉利原型赛车，V12 中置布局和雕塑感车身极具收藏辨识度。", status: "owned" },
    { id: "ferrari-f40", img: "ferrari-f40.jpg", owner: "user2", type: "tomica", tag: "TOMICA", name: "法拉利 F40", desc: "为纪念法拉利 40 周年打造的传奇超跑，双涡轮 V8、轻量化车身和标志性大尾翼让它成为 80 年代性能图腾。", status: "owned" },
    { id: "jiefang-truck", owner: "user3", type: "tuoyi", tag: "拓意", name: "解放老式军用卡车", desc: "国产军模系列，方正比例和复古绿色适合主题陈列。", status: "owned" },
    { id: "beijing-212", owner: "user3", type: "tuoyi", tag: "拓意", name: "北京 212 越野车", desc: "经典国产越野车，带着鲜明的年代记忆。", status: "owned" },
    { id: "wuling-van", owner: "user3", type: "tuoyi", tag: "拓意", name: "五菱宏光面包车", desc: "国民神车的小比例版本，亲切感是它最大的魅力。", status: "owned" },
    { id: "dongfeng-140", owner: "user3", type: "tuoyi", tag: "拓意", name: "东风 140 货运卡车", desc: "老式货运车型，适合和商用车、工程车组成一排。", status: "owned" },
    { id: "hongqi-l5", owner: "user3", type: "limited", tag: "限定", name: "红旗 L5 礼宾车", desc: "端庄的国产豪华车代表，放在展厅里很有仪式感。", status: "wishlist" },
    { id: "nissan-r34", owner: "user4", type: "minigt", tag: "MINI GT", name: "日产 Skyline GT-R R34", desc: "JDM 代表车型，紧凑车身和经典轮廓适合做车库门面。", status: "wishlist" },
    { id: "supra-mk4", owner: "user4", type: "tomica", tag: "TOMICA", name: "丰田 Supra MK4", desc: "红白盒常规款，亲民但耐看，是收藏里可靠的一台。", status: "wishlist" },
    { id: "bmw-m4-competition", owner: "user4", type: "minigt", tag: "MINI GT", name: "宝马 M4 Competition", desc: "德系性能车，宽体姿态和现代设计让它适合独立展示。", status: "wishlist" },
    { id: "audi-r8", owner: "user4", type: "hotwheels", tag: "Hot Wheels", name: "奥迪 R8 V10 Plus", desc: "银色镜面漆和透明发动机盖，细节感很强。", status: "wishlist" },
    { id: "f40-red", owner: "user4", type: "limited", tag: "限定", name: "法拉利 F40 经典红", desc: "90 年代传奇超跑，红色车身天然就是视觉中心。", status: "wishlist" }
  ]
};
