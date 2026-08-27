/* ===== 版权水印：Canvas 生成斜向平铺纹理（30% 透明度，间距宽松） ===== */
let _pattern = null

function makePattern() {
  const TILE_W = 320, TILE_H = 240
  const c = document.createElement('canvas')
  c.width = TILE_W; c.height = TILE_H
  const ctx = c.getContext('2d')
  ctx.translate(TILE_W / 2, TILE_H / 2)
  ctx.rotate(-22 * Math.PI / 180)
  ctx.font = '600 13px Inter, "Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = 'rgba(255, 236, 190, 0.30)'
  ctx.fillText('图片仅供徐蒙投递简历使用', 0, 0)
  return c.toDataURL('image/png')
}

/** 将水印纹理注入 CSS 变量 --wm-img（字体加载完成后自动重绘一次） */
export function applyWatermark() {
  const set = () => {
    _pattern = makePattern()
    document.documentElement.style.setProperty('--wm-img', `url(${_pattern})`)
  }
  set()
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(set).catch(() => {})
}