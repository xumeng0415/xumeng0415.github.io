/* ===== 集中式数据层：所有展示内容与配置 ===== */
export const APP_DATA = {

  nav: [
    { id: 'about',      label: '关于' },
    { id: 'experience', label: '经历' },
    { id: 'skills',     label: '技能' },
    { id: 'projects',   label: '作品' },
    { id: 'contact',    label: '联系' }
  ],

  typed: [ '数字孪生开发', 'UE5 / Unity 场景地编', '游戏影视三维场景', '次时代模型全流程', 'Shader 开发', '性能优化'],

  marq: ['数字孪生开发', '✦', '虚拟仿真', '✦', '三维美术场景', '✦', '场景地编', '✦', 'UE5', '✦', 'UNITY', '✦', 'SHADER', '✦', '凡人修仙传', '✦'],

  stats: [
    { n: 3,  s: '+', label: '年从业经验' },
    { n: 11,  s: '+', label: '项目作品' },
    { n: 11, s: '',  label: '项专业技能' }
  ],

  aboutRows: [
    ['姓名', '徐蒙'],
    ['职业', '数字孪生开发工程师'],
    ['毕业院校', '金陵科技学院'],
    ['专业', '数字媒体艺术 · 学士'],
    ['现任职', '立臻精密智造（昆山）有限公司']
  ],

  caps: ['蓝图交互开发', 'C++开发', '次时代模型全流程', '场景地编', '灯光渲染', 'Shader 开发', '特效制作', '场景性能优化'],

  timeline: [
    {
      type: 'EDUCATION', work: false,
      role: '金陵科技学院',
      company: '数字媒体艺术专业 · 学士（江苏美术统招）',
      date: '2019.09 - 2023.06', now: false,
      list: [], medal: null
    },
    {
      type: 'WORK EXPERIENCE', work: true,
      role: '游戏影视三维场景艺术家',
      company: '江苏原力数字科技股份有限公司',
      date: '2022.12 - 2024.11', now: false,
      list: [
        '2022.12-2023.06 进入岗位实习，进行次时代模型全流程的工作以及影视地编岗位初步学习。',
        '实习转正后获得公司「明日之星」奖项并参与年会获奖，自我定位为生产型艺术家。',
        '2023.07-2024.05 负责《凡人修仙传》影视场景白盒搭建到最终渲染分镜场景。',
        '2024.06-2024.11 转岗游戏事业部，负责次时代 3A 三端开放大世界游戏的关卡设计：白盒搭建 → 最终关卡 → 场景性能优化 → 原画拆分及氛围图制作。'
      ],
      medal: '🏆 明日之星奖项 · 年会获奖'
    },
    {
      type: 'WORK EXPERIENCE · NOW', work: true,
      role: '虚拟仿真三维场景设计师',
      company: '闻道之萌（南京）科技有限公司',
      date: '2024.11 - 2026.04', now: true,
      list: [
        '负责数字孪生及可视化项目的 Unity & UE5 场景美术开发：灯光、地形与模型资产搭建，完成美术资产模块化拆分，并进行场景性能监控。',
        '负责场景相关特效制作，以及 Unity / UE5 双引擎的 Shader 开发。',
        '针对多端发布需求优化场景性能，使项目适配桌面端 / 移动端 / 网页端展示。',
      ],
      medal: null
    },
    {
      type: 'WORK EXPERIENCE · NOW', work: true,
      role: '数字孪生交互开发工程师',
      company: '立臻精密智造（昆山）有限公司',
      date: '2026.04 - 至今', now: true,
      list: [
        '负责立臻全球多个厂区数字孪生项目的 UE5 场景美术开发：灯光、地形、模型资产与 Shader 制作，兼顾场景性能监控与优化。',
        '负责厂区自动化设备的机械臂及部件动画制作，编写生产线设备蓝图，接入实时 PLC 信号，将物理设备状态实时映射到孪生场景中进行监控。',
        '针对性优化场景性能，使项目满足实时推流要求，实现厂区数字孪生的远程展示。',
        '配合项目负责人在 UE5 中利用 Sequence 渲染高精度离线视频并剪辑成片，用于项目汇报与成果沉淀。'
      ],
      medal: null
    }
  ],

  skillBars: [
    { n: 'Unreal Engine 5',     m: 'UE5',   p: 92, d: '地编 / 灯光 / Shader / 蓝图 / C++' },
    { n: 'Unity',               m: 'UNI',   p: 85, d: '数字孪生 / 多端适配' },
    { n: 'Maya',                m: 'Maya',  p: 88, d: '建模 / 场景资产' },
    { n: 'Blender',             m: 'BL',    p: 88, d: '建模 / 场景资产' },
    { n: 'Substance Painter',   m: 'SP',    p: 90, d: 'PBR 材质贴图' },
    { n: 'Substance Designer',  m: 'SD',    p: 75, d: '程序化材质' },
    { n: 'ZBrush',              m: 'ZB',    p: 82, d: '高模雕刻' }
   
  ],
  alsoSkills: ['3ds Max', 'Photoshop', 'Marvelous Designer', 'Houdini'],
  pipeline: ['数字孪生可视化', 'PLC 实时数据对接', '远程推流展示', 'PBR 流程', 'Trim Sheet', '地形雕刻', '光照烘焙', 'Lumen/Nanite', 'LOD 与合批'],

  filters: ['全部', '孪生仿真', '影视动画', '游戏项目', '个人作品'],

  contacts: [
    { label: 'EMAIL',  icon: 'mdi:email',          value: '2542355162@qq.com', rgb: '242,193,78', btn: '复制邮箱' },
    { label: 'PHONE',  icon: 'mdi:phone',          value: '15062232610',       rgb: '201,143,45', btn: '复制号码' },
    { label: 'WECHAT', icon: 'simple-icons:wechat', value: 'xm114628',          rgb: '224,83,47',  btn: '复制微信号' }
  ],

  projects: [
    {
      id: 1, cat: '影视动画', secret: false,
      title: '凡人修仙传:星海飞驰',
      coverImage: 'assets/images/凡人修仙传/凡人修仙传封面图.png',
      description: '在《凡人修仙传:星海飞驰》中负责镜头灯光场景细化以及场景地编制作。\n镜头制作了73-124集中的大量镜头。\n场景负责了虚天殿电梯和七玄门断崖场景制作。',
      imageGroups: [
        { title: '虚天殿电梯场景', images: ['assets/images/凡人修仙传/凡人修仙传虚天殿电梯01.png', 'assets/images/凡人修仙传/凡人修仙传虚天殿电梯02.png', 'assets/images/凡人修仙传/凡人修仙传虚天殿电梯03.png', 'assets/images/凡人修仙传/凡人修仙传虚天殿电梯04.png'], videos: [] },
        { title: '七玄门断崖场景', images: ['assets/images/凡人修仙传/凡人修仙传七玄门断崖01.png', 'assets/images/凡人修仙传/凡人修仙传七玄门断崖02.png'], videos: [] },
        { title: '参与番剧镜头截图', images: ['assets/images/凡人修仙传/凡人修仙传番剧镜头截图01.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图02.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图03.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图04.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图05.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图06.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图07.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图08.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图09.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图10.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图11.png', 'assets/images/凡人修仙传/凡人修仙传番剧镜头截图12.png'], videos: [] }
      ]
    },
    {
      id: 2, cat: '游戏项目', secret: true,
      title: '游戏项目，代号：******',
      coverImage: 'assets/images/Higame/游戏LOGO.png',
      description: '在项目中负责地编部分，进行游戏一级POI饮料厂的地图设计。\n参与了饮料厂从白膜搭建到场景提交的全环节，制作了贝斯琴弦乐器饮料调制区、管弦乐器饮料气泡区、鼓类打击乐器榨汁区和中央广场平台的地编资产（建筑，道路，地面）及原画设计稿地编场景模型迭代。\n因项目涉密仅展示部分内容，完整图片请联系获取。',
      imageGroups: [
        { title: '游戏地编资产', images: ['assets/images/Higame/Higame地编资产01.png', 'assets/images/Higame/Higame地编资产02.png', 'assets/images/Higame/Higame地编资产03.png', 'assets/images/Higame/Higame地编资产04.png', 'assets/images/Higame/Higame地编资产05.png', 'assets/images/Higame/Higame地编资产06.png', 'assets/images/Higame/Higame地编资产07.png', 'assets/images/Higame/Higame地编资产08.png', 'assets/images/Higame/Higame地编资产09.png', 'assets/images/Higame/Higame地编资产10.png', 'assets/images/Higame/Higame地编资产11.png', 'assets/images/Higame/Higame地编资产12.png'], videos: [] },
        { title: '游戏地编场景', images: ['assets/images/Higame/Higame地编场景01.png', 'assets/images/Higame/Higame地编场景02.png', 'assets/images/Higame/Higame地编场景03.png', 'assets/images/Higame/Higame地编场景04.png', 'assets/images/Higame/Higame地编场景05.png', 'assets/images/Higame/Higame地编场景06.png', 'assets/images/Higame/Higame地编场景07.png', 'assets/images/Higame/Higame地编场景08.png', 'assets/images/Higame/Higame地编场景09.png', 'assets/images/Higame/Higame地编场景10.png'], videos: [] }
      ]
    },
    {
      id: 3, cat: '孪生仿真', secret: false,
      title: '家用冰箱虚拟仿真教学',
      coverImage: 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学封面图.png',
      description: '负责设计和开发家用冰箱的虚拟仿真教学场景，包括仿真所需模型的建模、特效。\n单人负责整个项目场景美术。',
      imageGroups: [
        { title: '家用冰箱虚拟仿真教学', images: ['assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学01.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学02.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学03.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学04.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学05.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学06.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学07.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学08.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学09.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学10.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学11.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学12.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学13.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学14.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学15.png', 'assets/images/家用冰箱虚拟仿真教学/家用冰箱虚拟仿真教学16.png'], videos: [] }
      ]
    },
    {
      id: 4, cat: '孪生仿真', secret: false,
      title: '大型冷库虚拟仿真教学',
      coverImage: 'assets/images/大型冷库虚拟仿真教学/大型冷库虚拟仿真教学封面图.png',
      description: '负责设计和开发大型冷库虚拟仿真教学场景，包括仿真所需模型的建模、特效。\n单人负责整个项目场景美术。',
      imageGroups: [
        { title: '大型冷库虚拟仿真教学', images: ['assets/images/大型冷库虚拟仿真教学/大型冷库虚拟仿真教学01.png', 'assets/images/大型冷库虚拟仿真教学/大型冷库虚拟仿真教学02.png'], videos: [] }
      ]
    },
    {
      id: 5, cat: '孪生仿真', secret: false,
      title: '市政给排水虚拟仿真教学',
      coverImage: 'assets/images/市政给排水虚拟仿真教学/市政给排水虚拟仿真教学封面图.png',
      description: '负责设计和开发市政给排水虚拟仿真教学场景，包括仿真所需模型的建模、特效。\n单人负责整个项目场景美术。',
      imageGroups: [
        { title: '市政给排水虚拟仿真教学', images: ['assets/images/市政给排水虚拟仿真教学/市政给排水虚拟仿真教学01.png', 'assets/images/市政给排水虚拟仿真教学/市政给排水虚拟仿真教学02.png', 'assets/images/市政给排水虚拟仿真教学/市政给排水虚拟仿真教学03.png', 'assets/images/市政给排水虚拟仿真教学/市政给排水虚拟仿真教学04.png'], videos: [] }
      ]
    },
    {
      id: 6, cat: '孪生仿真', secret: false,
      title: '集中空调虚拟仿真教学',
      coverImage: 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学封面图.png',
      description: '负责设计和开发集中空调虚拟仿真教学场景，包括仿真所需模型的建模、特效。\n单人负责整个项目场景美术。',
      imageGroups: [
        { title: '集中空调虚拟仿真教学', images: ['assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学01.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学02.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学03.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学04.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学05.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学06.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学07.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学08.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学09.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学10.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学11.png', 'assets/images/集中空调虚拟仿真教学/集中空调虚拟仿真教学12.png'], videos: [] }
      ]
    },
    {
      id: 7, cat: '孪生仿真', secret: false,
      title: '氢燃料电池虚拟仿真教学',
      coverImage: 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学封面图.png',
      description: '负责设计和开发氢燃料电池虚拟仿真教学场景，包括仿真所需模型的建模、特效。\n单人负责整个项目。',
      imageGroups: [
        { title: '氢燃料电池虚拟仿真教学', images: ['assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学01.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学02.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学03.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学04.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学05.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学06.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学07.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学08.png', 'assets/images/氢燃料电池虚拟仿真教学/氢燃料电池虚拟仿真教学09.png'], videos: [] }
      ]
    },
    {
      id: 8, cat: '孪生仿真', secret: false,
      title: '抽水蓄能电站虚拟仿真教学',
      coverImage: 'assets/images/抽水蓄能电站虚拟仿真教学/抽水蓄能电站虚拟仿真教学03.png',
      description: '负责设计和开发抽水蓄能电站虚拟仿真教学场景，包括仿真所需模型的建模、特效。\n单人负责整个项目场景美术。',
      imageGroups: [
        { title: '抽水蓄能电站虚拟仿真教学', images: ['assets/images/抽水蓄能电站虚拟仿真教学/抽水蓄能电站虚拟仿真教学01.png', 'assets/images/抽水蓄能电站虚拟仿真教学/抽水蓄能电站虚拟仿真教学02.png', 'assets/images/抽水蓄能电站虚拟仿真教学/抽水蓄能电站虚拟仿真教学03.png'], videos: [] }
      ]
    },
    {
      id: 9, cat: '个人作品', secret: false,
      title: '个人作品',
      coverImage: 'assets/images/个人作品/个人作品_封面.png',
      description: '包含了一些技能展示：角色盔甲、唐刀、生物雕像、科幻枪械、悟空雕像、中式村庄夜景、UE5 材质效果等。\n未完待续。',
      imageGroups: [
        { title: '角色盔甲', images: ['assets/images/个人作品/角色盔甲/角色盔甲01.png', 'assets/images/个人作品/角色盔甲/角色盔甲02.png', 'assets/images/个人作品/角色盔甲/角色盔甲03.png', 'assets/images/个人作品/角色盔甲/角色盔甲04.png'], videos: [] },
        { title: '唐刀', images: ['assets/images/个人作品/唐刀/唐刀01.png', 'assets/images/个人作品/唐刀/唐刀02.png', 'assets/images/个人作品/唐刀/唐刀03.png', 'assets/images/个人作品/唐刀/唐刀04.png'], videos: [] },
        { title: '生物雕像', images: ['assets/images/个人作品/生物雕像/生物雕像01.png', 'assets/images/个人作品/生物雕像/生物雕像02.png', 'assets/images/个人作品/生物雕像/生物雕像03.png', 'assets/images/个人作品/生物雕像/生物雕像04.png'], videos: [] },
        { title: '科幻枪械 / 手枪', images: ['assets/images/个人作品/科幻枪械/科幻枪械01.png', 'assets/images/个人作品/科幻枪械/科幻枪械02.png', 'assets/images/个人作品/科幻枪械/科幻枪械03.png', 'assets/images/个人作品/科幻手枪/科幻手枪.png'], videos: [] },
        { title: '悟空雕像 / 远古盾牌 / 小刀', images: ['assets/images/个人作品/悟空雕像/悟空雕像.png', 'assets/images/个人作品/远古盾牌/远古盾牌.png', 'assets/images/个人作品/小刀/小刀.png'], videos: [] },
        { title: '中式村庄夜景 / 熔岩平铺材质', images: ['assets/images/个人作品/中式村庄夜景/中式村庄夜景.png', 'assets/images/个人作品/熔岩平铺材质/熔岩平铺材质01.png', 'assets/images/个人作品/熔岩平铺材质/熔岩平铺材质02.png'], videos: [] },
        { title: 'UE5 材质与渲染视频', images: [], videos: ['assets/images/个人作品/UE5基础材质球功能展示/UE5基础材质球功能展示.mp4', 'assets/images/个人作品/UE5扫描线框材质展示/UE5扫描线框材质展示.mp4', 'assets/images/个人作品/UE5光效材质展示/UE5光效材质展示.mp4', 'assets/images/个人作品/UE5空调外机渲染讲解视频/UE5空调外机渲染讲解视频.mp4'] }
      ]
    }
  ]
};
