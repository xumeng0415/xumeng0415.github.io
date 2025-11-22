/**
 * 导航网站数据配置文件
 * 方便维护和添加新的网址
 * 
 * 使用说明：
 * 1. 添加新网站：在相应分类的sites数组中添加新对象
 * 2. 添加新分类：在NAVIGATION_DATA数组中添加新分类对象
 * 3. 修改网站信息：直接编辑对应对象
 */

/**
 * 导航网站数据结构
 * @type {Array<Object>}
 */
const NAVIGATION_DATA = [
  {
    title: "学习资源",
    sites: [
      {
        name: "墨化MOTZIFY",
        url: "https://www.motzify.com/mine/course",
        domain: "www.motzify.com",
        description: "墨化MOTZIFY。"
      },
      {
        name: "欧酱",
        url: "https://www.ojgamer.cn",
        domain: "www.ojgamer.cn",
        description: "欧酱。"
      },
      {
        name: "UE文档",
        url: "https://dev.epicgames.com/documentation/zh-cn/unreal-engine/unreal-engine-5-6-documentation",
        domain: "dev.epicgames.com",
        description: "UE文档。"
      },
      {
        name: "Unity文档",
        url: "https://docs.unity3d.com/Manual/index.html",
        domain: "docs.unity3d.com",
        description: "Unity文档。"
      },
      {
        name: "Github",
        url: "https://github.com",
        domain: "github.com",
        description: "Github。"
      },
      {
        name: "CSDN",
        url: "https://www.csdn.net",
        domain: "www.csdn.net",
        description: "CSDN。"
      },
      {
        name: "Shadertoy",
        url: "https://www.shadertoy.com",
        domain: "www.shadertoy.com",
        description: "shader学习论坛。"
      },
      {
        name: "blueprintUE",
        url: "https://blueprintue.com",
        domain: "blueprintue.com",
        description: "UE蓝图学习。"
      }
    ]
  },
  {
    title: "个人文档",
    sites: [
      {
        name: "Figjam设计白板",
        url: "https://www.figma.com/board/fCpQCPBoANfcy1p5EO4YNt/设计白板?node-id=0-1&p=f&t=YYTGWbDAA0CL5eaz-0",
        domain: "www.figma.com",
        description: "Figjam。"
      },
      {
        name: "个人作品集 · 钉钉文档",
        url: "https://alidocs.dingtalk.com/i/nodes/0eMKjyp813aq2YynidElr3YnVxAZB1Gv",
        domain: "alidocs.dingtalk.com",
        description: "个人文档。"
      },
      {
        name: "个人管理 · 钉钉文档",
        url: "https://docs.dingtalk.com/i/nodes/NDoBb60VLQaL3kXesNp71omgJlemrZQ3?iframeQuery=sheetId%3DHWiZhuc%26viewId%3DeoxhNwR",
        domain: "docs.dingtalk.com",
        description: "个人文档。"
      }
    ]
  },
  {
    title: "设计辅助",
    sites: [
      {
        name: "花瓣",
        url: "https://huaban.com/discovery",
        domain: "huaban.com",
        description: "花瓣搜图找素材。"
      },
      {
        name: "Artstation",
        url: "https://www.artstation.com",
        domain: "www.artstation.com",
        description: "A站。"
      },
      {
        name: "Pinterest",
        url: "https://www.pinterest.com",
        domain: "www.pinterest.com",
        description: "Pinterest搜图找素材。"
      }
    ]
  },
  {
    title: "素材网站",
    sites: [
      {
        name: "爱给网",
        url: "https://www.aigei.com",
        domain: "www.aigei.com",
        description: "爱给网。"
      },
      {
        name: "懒石网",
        url: "https://www.lazystones.com",
        domain: "www.lazystones.com",
        description: "懒石网。"
      },
      {
        name: "模之屋",
        url: "https://www.aplaybox.com",
        domain: "www.aplaybox.com",
        description: "模之屋。"
      },
      {
        name: "ambientCG",
        url: "https://ambientcg.com",
        domain: "ambientcg.com",
        description: "免费平铺纹理和HDRI。"
      },
      {
        name: "Poly Haven",
        url: "https://polyhaven.com",
        domain: "polyhaven.com",
        description: "免费HDRI。"
      },
      {
        name: "龋齿一号GFXCamp",
        url: "https://www.gfxcamp.com",
        domain: "www.gfxcamp.com",
        description: "CG软件。"
      },
      {
        name: "CG模型网",
        url: "https://www.cgmodel.com",
        domain: "www.cgmodel.com",
        description: "CG模型网。"
      },
      {
        name: "画忆妙妙屋",
        url: "https://www.iiicg.com",
        domain: "www.iiicg.com",
        description: "画忆妙妙屋。"
      },
      {
        name: "Fab",
        url: "https://www.fab.com",
        domain: "www.fab.com",
        description: "UE官方素材网。"
      },
      {
        name: "Unity Asset Store",
        url: "https://assetstore.unity.com/zh-CN",
        domain: "assetstore.unity.com",
        description: "Unity官方素材网。"
      }
    ]
  },
  {
    title: "在线工具",
    sites: [
      {
        name: "Mixamo",
        url: "https://www.mixamo.com",
        domain: "www.mixamo.com",
        description: "在线绑定骨骼动画。"
      },
      {
        name: "在线压缩PDF文件",
        url: "https://www.ilovepdf.com/zh-cn/compress_pdf",
        domain: "www.ilovepdf.com",
        description: "在线压缩PDF文件。"
      },
      {
        name: "库房",
        url: "https://kf369.cn/",
        domain: "kf369.cn",
        description: "导航网站库。"
      },
      {
        name: "无损音乐免费下载",
        url: "https://www.isflac.com",
        domain: "www.isflac.com",
        description: "无损音乐免费下载。"
      },
      {
        name: "中国色",
        url: "https://zhongguose.com",
        domain: "zhongguose.com",
        description: "中国传统色取色网站。"
      },
      {
        name: "ColorSpace",
        url: "https://mycolor.space",
        domain: "mycolor.space",
        description: "根据提供的颜色获取配色方案。"
      },
      {
        name: "Numbeo",
        url: "https://www.numbeo.com/cost-of-living",
        domain: "www.numbeo.com",
        description: "各国生活费用测算。"
      }
    ]
  },
  {
    title: "影视娱乐",
    sites: [
      {
        name: "知乎",
        url: "https://www.zhihu.com",
        domain: "www.zhihu.com",
        description: "知乎。"
      },
      {
        name: "Quora",
        url: "https://www.quora.com",
        domain: "www.quora.com",
        description: "Quora。"
      },
      {
        name: "BiliBili",
        url: "https://www.bilibili.com",
        domain: "www.bilibili.com",
        description: "BiliBili。"
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com",
        domain: "www.youtube.com",
        description: "YouTube。"
      },
      {
        name: "X",
        url: "https://x.com/",
        domain: "x.com",
        description: "X。"
      },
      {
        name: "爱壹帆",
        url: "https://www.yfsp.tv",
        domain: "www.yfsp.tv",
        description: "海外最大盗版视频网站。"
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        domain: "www.instagram.com",
        description: "Instagram。"
      },
      {
        name: "维基百科",
        url: "https://en.wikipedia.org/wiki/Main_Page",
        domain: "en.wikipedia.org",
        description: "维基百科。"
      }
    ]
  },
  {
    title: "智能生成",
    sites: [
      {
        name: "千问",
        url: "https://www.tongyi.com/qianwen/?chatId=4161f6ce537242038cb7f8b3d4545af0",
        domain: "www.tongyi.com",
        description: "千问。"
      },
      {
        name: "豆包",
        url: "https://www.doubao.com/chat/?channel=baidu_pz&source=dbweb_baidu_pz_pc_button&keywordid=weizhi7",
        domain: "www.doubao.com",
        description: "豆包。"
      },
      {
        name: "秘塔AI搜索",
        url: "https://metaso.cn",
        domain: "metaso.cn",
        description: "秘塔AI搜索。"
      },
      {
        name: "ChatGPT",
        url: "https://chatgpt.com",
        domain: "chatgpt.com",
        description: "ChatGPT。"
      },
      {
        name: "DeepSeek",
        url: "https://chat.deepseek.com",
        domain: "chat.deepseek.com",
        description: "DeepSeek。"
      },
      {
        name: "LiblibAI",
        url: "https://www.liblib.art/?sourceId=000522&bd_vid=11583626287893362347",
        domain: "www.liblib.art",
        description: "LiblibAI。"
      },
      {
        name: "Tripo3d",
        url: "https://www.tripo3d.ai/app/home",
        domain: "www.tripo3d.ai",
        description: "Tripo3d。"
      },
      {
        name: "腾讯混元3D",
        url: "https://3d.hunyuan.tencent.com",
        domain: "3d.hunyuan.tencent.com",
        description: "腾讯混元3D。"
      },
      {
        name: "即梦AI",
        url: "https://jimeng.jianying.com/ai-tool/home",
        domain: "jimeng.jianying.com",
        description: "即梦AI。"
      },
      {
        name: "可灵AI",
        url: "https://app.klingai.com/cn",
        domain: "app.klingai.com",
        description: "可灵AI。"
      }
    ]
  },
  {
    title: "常用邮箱",
    sites: [
      {
        name: "QQ邮箱",
        url: "https://wx.mail.qq.com/",
        domain: "wx.mail.qq.com",
        description: "QQ邮箱。"
      },
      {
        name: "Gmail",
        url: "https://mail.google.com/",
        domain: "mail.google.com",
        description: "Google邮箱。"
      }
    ]
  }
];

/**
 * 网站图标服务配置
 * 使用国内图标服务，替代Google的favicon服务
 */
const FAVICON_SERVICE = {
  // 使用第三方图标服务，国内访问更稳定
  getIconUrl: function(domain) {
    // 直接从网站根目录获取favicon.ico，通常速度最快
    return `https://${domain}/favicon.ico`;
    
    // 备选方案1：使用Google的favicon API，速度较快
    // return `https://www.google.com/s2/u/0/favicons?domain=${domain}`;
    
    // 备选方案2：使用https://favicon.yandex.net/favicon/服务，速度较快且稳定
    // return `https://favicon.yandex.net/favicon/${domain}`;
    
    // 备选方案3：使用https://www.favicon.vip/服务，国内访问稳定
    // return `https://www.favicon.vip/favicon.ico?domain=${domain}`;
    
    // 备选方案4：使用https://g.etfv.co/服务
    // return `https://g.etfv.co/${domain}`;
    
    // 备选方案5：使用https://cdn.jsdelivr.net/gh/liuzc/ico@main/服务
    // return `https://cdn.jsdelivr.net/gh/liuzc/ico@main/${domain}.ico`;
    
    // 备选方案6：使用https://api.iowen.cn/favicon/服务（可能存在跨域问题）
    // return `https://api.iowen.cn/favicon/${domain}.png`;
  }
};