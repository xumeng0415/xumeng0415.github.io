import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const _finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches
const _reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
const _delayMap = { d1: .09, d2: .18, d3: .27, d4: .36 }

/* 统一显示入口：GSAP 动画 + onComplete 直接写死 inline 样式，
   覆盖任何 CSS 类/transition 对 opacity 的干扰。
   这是根据诊断面板输出定的"终极保险"：之前 style="opacity:1" 但 computed=0，
   根因是 .reveal CSS 类的 transition 与 GSAP 抢控制权。 */
function revealEl(el) {
  if (el._revealed) return
  el._revealed = true
  if (_reducedMotion) {
    el.style.opacity = '1'
    el.style.transform = 'none'
    return
  }
  const delay = el._revealDelay || 0
  gsap.to(el, {
    opacity: 1,
    y: 0,
    duration: .85,
    ease: 'power3.out',
    delay,
    clearProps: 'transform',
    onComplete: () => {
      el.style.opacity = '1'
      el.style.transform = 'none'
    }
  })
  el.querySelectorAll('.sb-fill').forEach(f => { f.style.width = f.dataset.p + '%' })
}

/* reveal：改用 GSAP ScrollTrigger 驱动（已被 Lenis 同步）。
   关键变更：不再给元素加 .reveal CSS 类，避免该类的 opacity:0 + .9s transition
   与 GSAP 动画抢控制权导致 computed opacity 停留在过渡中间态。 */
const vReveal = {
  mounted(el, binding) {
    if (_reducedMotion) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }
    el._revealDelay = binding.value && _delayMap[binding.value] ? _delayMap[binding.value] : 0
    el.setAttribute('data-vreveal', '')  // 给兜底逻辑用的标记
    gsap.set(el, { opacity: 0, y: 38 })
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => revealEl(el)
    })
    el._revealST = st
  },
  unmounted(el) {
    if (el._revealST) el._revealST.kill()
  }
}

/* 安全兜底：window.load 后 + 4s 双保险，强制显示所有仍未显示的 v-reveal 元素。
   使用属性选择器 [data-vreveal] 找到这些元素（由 mounted 时标记） */
if (typeof window !== 'undefined') {
  const forceRevealAll = () => {
    document.querySelectorAll('[data-vreveal]').forEach(el => {
      if (!el._revealed) {
        el.style.opacity = '1'
        el.style.transform = 'none'
        el._revealed = true
      }
    })
  }
  window.addEventListener('load', () => setTimeout(forceRevealAll, 800))
  setTimeout(forceRevealAll, 4000)
}

/* 精致化倾斜：小角度 + 轻微缩放 */
const vTilt = {
  mounted(el) {
    if (!_finePointer || _reducedMotion) return
    const move = e => {
      const r = el.getBoundingClientRect()
      const x = (e.clientX - r.left) / r.width - .5
      const y = (e.clientY - r.top) / r.height - .5
      el.style.transform = `rotateY(${x * 4.5}deg) rotateX(${-y * 4.5}deg) translateY(-6px) scale(1.014)`
    }
    const leave = () => { el.style.transform = '' }
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    el._tiltOff = () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
    }
  },
  unmounted(el) { el._tiltOff && el._tiltOff() }
}

export function registerDirectives(app) {
  app.directive('reveal', vReveal)
  app.directive('tilt', vTilt)
}
