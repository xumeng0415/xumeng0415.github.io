// 导航页面脚本

// 动态加载导航数据
function loadNavigationData() {
  const container = document.getElementById('navigationContainer');
  if (!container) return;
  
  // 清空容器内容
  container.innerHTML = '';
  
  // 遍历导航数据，生成HTML
  NAVIGATION_DATA.forEach(category => {
    // 创建分类标题
    const categoryTitle = document.createElement('h2');
    categoryTitle.className = 'category-title';
    categoryTitle.textContent = category.title;
    container.appendChild(categoryTitle);
    
    // 创建网站列表容器
    const siteList = document.createElement('div');
    siteList.className = 'site-list';
    
    // 遍历分类下的网站
    category.sites.forEach(site => {
      // 创建网站项
      const siteItem = document.createElement('div');
      siteItem.className = 'site-item';
      
      // 创建网站链接
      const siteLink = document.createElement('a');
      siteLink.className = 'site-link';
      siteLink.href = site.url;
      siteLink.target = '_blank';
      
      // 创建网站内容容器
      const siteContent = document.createElement('div');
      siteContent.className = 'site-content';
      
      // 创建网站图标
      const siteIcon = document.createElement('img');
      siteIcon.className = 'site-icon';
      siteIcon.alt = 'favicon';
      
      // 设置默认图标，防止加载失败时显示空白
      siteIcon.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTggMTVBNyA3IDAgMSAwIDggMWE3IDcgMCAwIDAgMCAxNHptMC0xQTYgNiAwIDEgMSA4IDJhNiA2IDAgMCAxIDAgMTJ6IiBmaWxsPSIjOTk5Ii8+CjxwYXRoIGQ9Ik04IDExYTEgMSAwIDEgMCAwLTJhMSAxIDAgMCAwIDAgMnptMC04YTEgMSAwIDAgMC0xIDF2NGExIDEgMCAwIDAgMiAwVjRhMSAxIDAgMCAwLTEtMXoiIGZpbGw9IiM5OTkiLz4KPC9zdmc+';
      
      // 创建图标加载函数，包含回退机制
      const loadIcon = () => {
        // 定义回退服务列表
        const fallbackServices = [
          // 直接从网站根目录获取favicon.ico
          () => `https://${site.domain}/favicon.ico`,
          // Google的favicon API
          () => `https://www.google.com/s2/u/0/favicons?domain=${site.domain}`,
          // Yandex服务
          () => `https://favicon.yandex.net/favicon/${site.domain}`,
          // favicon.vip服务
          () => `https://www.favicon.vip/favicon.ico?domain=${site.domain}`
        ];
        
        // 尝试加载图标的递归函数
        const tryLoadIcon = (serviceIndex) => {
          if (serviceIndex >= fallbackServices.length) {
            console.log(`所有图标服务加载失败: ${site.domain}`);
            return; // 所有服务都失败，保持默认图标
          }
          
          const tempImg = new Image();
          const iconUrl = fallbackServices[serviceIndex]();
          
          tempImg.onload = () => {
            // 图标加载成功，替换默认图标
            siteIcon.src = iconUrl;
          };
          
          tempImg.onerror = () => {
            // 当前服务加载失败，尝试下一个服务
            tryLoadIcon(serviceIndex + 1);
          };
          
          // 设置超时，如果2秒内未加载成功，则尝试下一个服务
          setTimeout(() => {
            if (tempImg.complete === false) {
              tryLoadIcon(serviceIndex + 1);
            }
          }, 2000);
          
          // 开始加载图标
          tempImg.src = iconUrl;
        };
        
        // 开始尝试加载图标
        tryLoadIcon(0);
      };
      
      // 延迟加载图标，提高页面初始加载速度
      setTimeout(loadIcon, 100);
      
      // 创建网站名称
      const siteName = document.createElement('div');
      siteName.className = 'site-name';
      siteName.textContent = site.name;
      
      // 组装元素
      siteContent.appendChild(siteIcon);
      siteContent.appendChild(siteName);
      siteLink.appendChild(siteContent);
      siteItem.appendChild(siteLink);
      
      // 创建提示框
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.textContent = site.description;
      siteItem.appendChild(tooltip);
      
      // 添加到列表
      siteList.appendChild(siteItem);
    });
    
    // 将网站列表添加到容器
    container.appendChild(siteList);
  });
}

// 页面加载完成后执行导航数据加载
document.addEventListener('DOMContentLoaded', loadNavigationData);

// 获取星期几
function getWeekDay() {
  const weekDays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
  return weekDays[new Date().getDay()];
}

// 更新时间显示
function updateTime() {
  try {
    const now = new Date();
    
    // 格式化日期部分：2025年11月21日
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const dateStr = `${year}年${month}月${day}日`;
    
    // 获取星期
    const weekDay = getWeekDay();
    
    // 格式化时间部分：15:32:10
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeStr = `${hours}:${minutes}:${seconds}`;
    
    // 组合完整时间字符串
    const fullTimeStr = `${dateStr} ${weekDay} ${timeStr}`;
    
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
      timeElement.textContent = fullTimeStr;
    }
  } catch (error) {
    console.error('时间更新错误:', error);
    // 错误时显示简单时间
    const timeElement = document.getElementById('currentTime');
    if (timeElement) {
      timeElement.textContent = new Date().toLocaleString();
    }
  }
}

// 立即更新一次，然后每秒更新
updateTime();
setInterval(updateTime, 1000);

// 获取用户位置并显示天气
async function fetchWeather() {
  try {
    // 首先获取用户IP位置信息
    const locationResponse = await fetch('https://ipapi.co/json/');
    const locationData = await locationResponse.json();
    
    // 提取经纬度和城市信息
    const latitude = locationData.latitude || 39.9042; // 默认北京
    const longitude = locationData.longitude || 116.4074;
    const city = locationData.city || '未知位置';
    const region = locationData.region || '';
    const country = locationData.country_name || '';
    
    // 显示位置信息
    const locationElement = document.getElementById('userLocation');
    if (locationElement) {
      locationElement.textContent = `${city}${region ? ', ' + region : ''}${country ? ', ' + country : ''}`;
    }
    
    // 使用获取到的经纬度请求天气数据
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=7`;
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();
    
    const container = document.getElementById('weatherContainer');
    container.innerHTML = '';

    // 天气代码映射
    const weatherCodes = {
      0: '晴',
      1: '晴',
      2: '多云',
      3: '多云',
      45: '雾',
      48: '雾',
      51: '小雨',
      53: '小雨',
      55: '小雨',
      56: '冻雨',
      57: '冻雨',
      61: '中雨',
      63: '中雨',
      65: '中雨',
      66: '冻雨',
      67: '冻雨',
      71: '小雪',
      73: '小雪',
      75: '小雪',
      77: '雪粒',
      80: '阵雨',
      81: '阵雨',
      82: '阵雨',
      85: '雪',
      86: '雪',
      95: '雷雨',
      96: '雷雨',
      99: '雷雨'
    };

    const today = new Date();
    weatherData.daily.time.forEach((dateStr, i) => {
      const date = new Date(dateStr);
      const dayName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()];
      const isToday = date.toDateString() === today.toDateString();
      const label = isToday ? '今天' : dayName;
      const max = Math.round(weatherData.daily.temperature_2m_max[i]);
      const min = Math.round(weatherData.daily.temperature_2m_min[i]);
      const weatherCode = weatherData.daily.weathercode[i];
      const weatherCondition = weatherCodes[weatherCode] || '未知';

      const el = document.createElement('div');
      el.className = 'weather-day';
      el.innerHTML = `<div class="weather-date">${label}</div><div class="weather-temp">${max}° / ${min}°</div><div class="weather-condition">${weatherCondition}</div>`;
      container.appendChild(el);
    });
  } catch (e) {
    console.error('获取天气失败:', e);
    // 如果IP定位失败，使用默认位置（北京）
    try {
      const fallbackUrl = 'https://api.open-meteo.com/v1/forecast?latitude=39.9042&longitude=116.4074&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=Asia/Shanghai&forecast_days=7';
      const fallbackResponse = await fetch(fallbackUrl);
      const fallbackData = await fallbackResponse.json();
      
      const container = document.getElementById('weatherContainer');
      container.innerHTML = '';
      
      // 显示默认位置
      const locationElement = document.getElementById('userLocation');
      if (locationElement) {
        locationElement.textContent = '北京, 中国';
      }
      
      // 天气代码映射
      const weatherCodes = {
        0: '晴', 1: '晴', 2: '多云', 3: '多云', 45: '雾', 48: '雾',
        51: '小雨', 53: '小雨', 55: '小雨', 56: '冻雨', 57: '冻雨',
        61: '中雨', 63: '中雨', 65: '中雨', 66: '冻雨', 67: '冻雨',
        71: '小雪', 73: '小雪', 75: '小雪', 77: '雪粒',
        80: '阵雨', 81: '阵雨', 82: '阵雨', 85: '雪', 86: '雪',
        95: '雷雨', 96: '雷雨', 99: '雷雨'
      };
      
      const today = new Date();
      fallbackData.daily.time.forEach((dateStr, i) => {
        const date = new Date(dateStr);
        const dayName = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][date.getDay()];
        const isToday = date.toDateString() === today.toDateString();
        const label = isToday ? '今天' : dayName;
        const max = Math.round(fallbackData.daily.temperature_2m_max[i]);
        const min = Math.round(fallbackData.daily.temperature_2m_min[i]);
        const weatherCode = fallbackData.daily.weathercode[i];
        const weatherCondition = weatherCodes[weatherCode] || '未知';

        const el = document.createElement('div');
        el.className = 'weather-day';
        el.innerHTML = `<div class="weather-date">${label}</div><div class="weather-temp">${max}° / ${min}°</div><div class="weather-condition">${weatherCondition}</div>`;
        container.appendChild(el);
      });
    } catch (fallbackError) {
      document.getElementById('weatherContainer').innerHTML = '天气加载失败';
      const locationElement = document.getElementById('userLocation');
      if (locationElement) {
        locationElement.textContent = '位置获取失败';
      }
    }
  }
}
fetchWeather();

// 搜索功能
let currentEngine = 'https://www.baidu.com/s?wd=';
document.querySelectorAll('.engine-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.engine-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentEngine = btn.dataset.engine;
  });
});

function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (q) window.open(currentEngine + encodeURIComponent(q), '_blank');
}

document.getElementById('searchInput').addEventListener('keypress', e => {
  if (e.key === 'Enter') doSearch();
});