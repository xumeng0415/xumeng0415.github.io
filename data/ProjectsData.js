/**
 * 项目数据配置文件，方便输入大量文本数据
 * 包含项目展示信息和视频播放列表数据
 */

/**
 * 项目数据数组
 * @type {Array<Object>}
 */
const PROJECTS_DATA = [
    {
        id: 1, // 项目唯一标识符
        title: "凡人修仙传:星海飞驰", // 项目标题
        coverImage: "assets/images/凡人修仙传/凡人修仙传封面图.png", // 封面图片路径
        description: "在《凡人修仙传:星海飞驰》中负责镜头灯光场景细化以及场景地编制作。\n镜头制作了73-124集中的大量镜头。\n场景负责了虚天殿电梯和七玄门断崖场景制作。", // 项目描述
        imageGroups: [ // 图片分组展示
            {
                title: "参与番剧镜头截图", // 图片组标题
                images: [ // 图片路径数组
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图01.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图02.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图03.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图04.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图05.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图06.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图07.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图08.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图09.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图10.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图11.png",
                    "assets/images/凡人修仙传/凡人修仙传番剧镜头截图12.png"
                ]
            },
            {
                title: "虚天殿电梯场景",
                images: [
                    "assets/images/凡人修仙传/凡人修仙传虚天殿电梯01.png",
                    "assets/images/凡人修仙传/凡人修仙传虚天殿电梯02.png",
                    "assets/images/凡人修仙传/凡人修仙传虚天殿电梯03.png",
                    "assets/images/凡人修仙传/凡人修仙传虚天殿电梯04.png"
                ]
            },
            {
                title: "七玄门断崖场景",
                images: [
                    "assets/images/凡人修仙传/凡人修仙传七玄门断崖01.png",
                    "assets/images/凡人修仙传/凡人修仙传七玄门断崖02.png",
                ]
            }
        ]
    },
    {
        id: 2,
        title: "游戏项目，代号：******",
        coverImage: "assets/images/Higame/游戏LOGO.png",
        description: "在项目中负责地编部分，进行游戏一级POI饮料厂的地图设计。\n参与了饮料厂从白膜搭建到场景提交的全环节，并且制作了饮料厂的贝斯琴弦乐器饮料调制区，管弦乐器饮料气泡区，鼓类打击乐器榨汁区和中央广场平台的地编资产（建筑，道路，地面），原画设计稿地编场景模型迭代。\n完整图片请联系获取，因项目涉密不提供完整预览，请谅解。",
        imageGroups: [
            {
                title: "游戏地编资产",
                images: [
                    "assets/images/Higame/Higame地编资产01.png",
                    "assets/images/Higame/Higame地编资产02.png",
                    "assets/images/Higame/Higame地编资产03.png",
                    "assets/images/Higame/Higame地编资产04.png",
                    "assets/images/Higame/Higame地编资产05.png",
                    "assets/images/Higame/Higame地编资产06.png",
                    "assets/images/Higame/Higame地编资产07.png",
                    "assets/images/Higame/Higame地编资产08.png",
                    "assets/images/Higame/Higame地编资产09.png",
                    "assets/images/Higame/Higame地编资产10.png",
                    "assets/images/Higame/Higame地编资产11.png",
                    "assets/images/Higame/Higame地编资产12.png"
                ]
            },
            {
                title: "游戏地编场景",
                images: [
                    "assets/images/Higame/Higame地编场景01.png",
                    "assets/images/Higame/Higame地编场景02.png",
                    "assets/images/Higame/Higame地编场景03.png",
                    "assets/images/Higame/Higame地编场景04.png",
                    "assets/images/Higame/Higame地编场景05.png",
                    "assets/images/Higame/Higame地编场景06.png",
                    "assets/images/Higame/Higame地编场景07.png",
                    "assets/images/Higame/Higame地编场景08.png",
                    "assets/images/Higame/Higame地编场景09.png"
                ]
            }
        ]
    },
    {
        id: 3,
        title: "家用冰箱虚拟仿真教学",
        coverImage: "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
        description: "03。\n03。", // 项目描述
        images: [ // 图片路径数组（未分组）
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg"
        ]
    },
    {
        id: 4,
        title: "大型冷库虚拟仿真教学",
        coverImage: "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
        description: "04。\n04。",
        images: [
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg"
        ]
    },
    {
        id: 5,
        title: "市政给排水虚拟仿真教学",
        coverImage: "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
        description: "05。\n05。",
        images: [
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg"
        ]
    },
    {
        id: 6,
        title: "集中空调虚拟仿真教学",
        coverImage: "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
        description: "06。\n06。",
        images: [
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg"
        ]
    },
    {
        id: 7,
        title: "氢燃料电池虚拟仿真教学",
        coverImage: "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
        description: "07。\n07。",
        images: [
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg",
            "https://modao.cc/ai/uploads/ai_pics/0/2992/aigp_1749292044.jpeg"
        ]
    }
];

/**
 * 视频播放列表
 * @type {Array<Object>}
 */
const VIDEO_PLAYLIST = [
    {title: "Cruel Summer - Taylor Swift", bvid: "BV1M4411B7vs"},
    {title: "Blank Space - Taylor Swift", bvid: "BV1ks411P7PT"},
    {title: "22 - Taylor Swift", bvid: "BV1sp4y1e7yL"},
    {title: "Lover - Taylor Swift", bvid: "BV1G54y1y7pB"},
    {title: "Style - Taylor Swift", bvid: "BV1ZD4y1d7jS"},
    {title: "New Romantics - Taylor Swift", bvid: "BV1i44y1w7fX"},
    {title: "One More Light - Linkin Park", bvid: "BV1rg411g7du"},
    {title: "Gone - ROSÉ", bvid: "BV1wK4y1m7Nh"},
    {title: "Bubble Gum - NewJeans", bvid: "BV1iHyzB2Ei3"},
    {title: "Cookie - NewJeans", bvid: "BV152doYPENo"},
    {title: "OMG - NewJeans", bvid: "BV1zP4y1e7PY"},
    {title: "Feel My Rhythm - Red Velvet", bvid: "BV1ou4y1b7Qr"},
    {title: "Psycho - Red Velvet", bvid: "BV1CN4y1S7rH"},
    {title: "Bad Boy - Red Velvet", bvid: "BV1zj411Y7yB"},
    {title: "Queendom - Red Velvet", bvid: "BV1Km4y1h74o"},
    {title: "Kill This Love - BLACKPINK", bvid: "BV1wg41147ND"},
    {title: "Shut Down - BLACKPINK", bvid: "BV1xe4y1y7DF"},
    {title: "Better Things - aespa", bvid: "BV1z4y1T74o"},
    {title: "Dreams Come True - aespa", bvid: "BV1iL411j7MW"},
    {title: "Forever - aespa", bvid: "BV1Bs4y1d7ms"},
    {title: "Thirsty - aespa", bvid: "BV1syWhemEmM"},
    {title: "Hot Mess - aespa", bvid: "BV1af421q7Fe"},
    {title: "Girls - aespa", bvid: "BV1Ng411n79c"},
    {title: "Life's Too Short - aespa", bvid: "BV1tW4y1r731"},
    {title: "Perfect Night - LE SSERAFIM", bvid: "BV1XoWvzeEUW"}
];

