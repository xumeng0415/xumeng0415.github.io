import { ref, inject, onMounted, onBeforeUnmount } from 'vue'

/* 打字机轮播 */
export function useTyping(phrases) {
  const text = ref('')
  let i = 0, j = 0, del = false, timer = null
  function tick() {
    const s = phrases[i]
    text.value = del ? s.slice(0, --j) : s.slice(0, ++j)
    let wait = del ? 45 : 110
    if (!del && j === s.length) { wait = 1900; del = true }
    else if (del && j === 0) { del = false; i = (i + 1) % phrases.length; wait = 420 }
    timer = setTimeout(tick, wait)
  }
  onMounted(() => tick())
  onBeforeUnmount(() => clearTimeout(timer))
  return { text }
}

/* 滚动侦测：导航高亮 / 底色 / 返回顶部可见性 */
export function useScrollspy(ids) {
  const active = ref('')
  const scrolled = ref(false)
  const showTop = ref(false)
  function onScroll() {
    const st = window.scrollY
    scrolled.value = st > 40
    showTop.value = st > 700
    let cur = ''
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el && st >= el.offsetTop - innerHeight * 0.4) cur = id
    })
    active.value = cur
  }
  onMounted(() => {
    addEventListener('scroll', onScroll, { passive: true })
    addEventListener('resize', onScroll)
    addEventListener('load', onScroll)
    onScroll()
  })
  onBeforeUnmount(() => {
    removeEventListener('scroll', onScroll)
    removeEventListener('resize', onScroll)
    removeEventListener('load', onScroll)
  })
  return { active, scrolled, showTop }
}

/* 剪贴板复制（带降级方案），toast 由根组件 provide */
export function useCopy() {
  const toast = inject('toast')
  function copy(text) {
    const ok = () => toast('✓ 已复制 ' + text)
    const fallback = () => {
      const ta = document.createElement('textarea')
      ta.value = text; document.body.appendChild(ta); ta.select()
      try { document.execCommand('copy'); ok() } catch (e) { toast('✗ 复制失败') }
      ta.remove()
    }
    if (navigator.clipboard) navigator.clipboard.writeText(text).then(ok, fallback)
    else fallback()
  }
  return { copy }
}

export const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
export const descHtml = s => esc(s).replace(/\n/g, '<br>')