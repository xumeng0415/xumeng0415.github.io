import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const _reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches

/* ===== Lenis 惯性平滑滚动 ===== */
export function initSmoothScroll() {
  if (_reducedMotion) return
  const lenis = new Lenis({ lerp: 0.11, wheelMultiplier: 1 })
  window.__lenis = lenis
  const raf = t => { lenis.raf(t); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href^="#"]')
    if (!a) return
    const id = a.getAttribute('href')
    if (id.length < 2) return
    const target = document.querySelector(id)
    if (!target) return
    e.preventDefault()
    lenis.scrollTo(target, { offset: -84, duration: 1.4 })
  })
  if (typeof ScrollTrigger !== 'undefined') lenis.on('scroll', ScrollTrigger.update)
}

/* ===== GSAP：Hero 入场时间线 ===== */
export function initHeroIntro() {
  if (_reducedMotion) return
  const targets = ['.hero-eyebrow', '.hero-name', '.typing-wrap', '.btn-row', '.hero-stats', '.scroll-hint']
  gsap.set(targets, { opacity: 0, y: 44 })
  addEventListener('preloader:done', () => {
    gsap.timeline({ delay: .1 })
      .to('.hero-eyebrow', { opacity: 1, y: 0, duration: .8, ease: 'power3.out' })
      .to('.hero-name', { opacity: 1, y: 0, duration: 1.1, ease: 'power4.out' }, '-=.35')
      .to('.typing-wrap', { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }, '-=.55')
      .to('.btn-row', { opacity: 1, y: 0, duration: .8, ease: 'power3.out' }, '-=.5')
      .to('.hero-stats', { opacity: 1, y: 0, duration: .9, ease: 'power3.out' }, '-=.45')
      .to('.scroll-hint', { opacity: 1, y: 0, duration: .7, ease: 'power2.out' }, '-=.4')
  }, { once: true })
}

/* ===== 滚动视差 ===== */
export function initParallax() {
  if (_reducedMotion) return
  gsap.registerPlugin(ScrollTrigger)
  gsap.to('.hero-grid-floor', {
    yPercent: 26, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  })
  gsap.to('.hero-watermark', {
    yPercent: -16, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true }
  })
}

/* ===== macOS 速度缩放跟随点 ===== */
export function initVelocityCursor() {
  const FINE = matchMedia('(hover:hover) and (pointer:fine)').matches
  const el = document.getElementById('velo')
  if (!FINE || _reducedMotion || !el) { el && el.remove(); return }
  const dot = el.querySelector('i')
  let mx = innerWidth / 2, my = innerHeight / 2
  let x = mx, y = my, scale = 1
  let lastX = mx, lastY = my, lastT = performance.now(), speed = 0
  addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY
    const now = performance.now()
    const dt = Math.max(now - lastT, 1)
    const v = Math.hypot(mx - lastX, my - lastY) / dt
    speed = Math.min(speed + (v - speed) * .35, 4)
    lastX = mx; lastY = my; lastT = now
  })
  addEventListener('mouseleave', () => { el.style.opacity = '0' })
  addEventListener('mouseenter', () => { el.style.opacity = '1' })
  ;(function frame() {
    x += (mx - x) * .2; y += (my - y) * .2
    speed *= .86
    const target = 1 + Math.min(speed * 1.15, 2.6)
    scale += (target - scale) * (target > scale ? .35 : .22)
    el.style.transform = `translate3d(${x}px,${y}px,0)`
    dot.style.transform = `scale(${scale.toFixed(3)})`
    dot.style.opacity = String(Math.max(.35, 1 - (scale - 1) * .22))
    requestAnimationFrame(frame)
  })()
}

/* ===== 金色星尘粒子 ===== */
export function initBackgroundFx() {
  const cv = document.getElementById('particles')
  const ctx = cv.getContext('2d')
  let W, H, pts = []
  const mouse = { x: -9e3, y: -9e3 }
  const N = innerWidth < 768 ? 42 : 95, DIST = 125, R = 170
  const size = () => { W = cv.width = innerWidth; H = cv.height = innerHeight }
  const mk = () => {
    pts = []
    for (let i = 0; i < N; i++) pts.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - .5) * .32, vy: (Math.random() - .5) * .32,
      r: Math.random() * 1.5 + .5,
      c: Math.random() < .5 ? '242,193,78' : '201,143,45'
    })
  }
  addEventListener('resize', () => { size(); mk() })
  addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY })
  size(); mk()
  ;(function loop() {
    ctx.clearRect(0, 0, W, H)
    for (const p of pts) {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy)
      if (d < R && d > 0) { p.x += dx / d * .55; p.y += dy / d * .55 }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7)
      ctx.fillStyle = `rgba(${p.c},.7)`; ctx.fill()
    }
    for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y)
      if (d < DIST) {
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
        ctx.strokeStyle = `rgba(201,143,45,${(1 - d / DIST) * .15})`
        ctx.lineWidth = .6; ctx.stroke()
      }
    }
    if (!_reducedMotion) requestAnimationFrame(loop)
  })()
}

/* ===== 预加载器 ===== */
export function initPreloader() {
  const bar = document.getElementById('preBar'), num = document.getElementById('preNum')
  let p = 0, finished = false
  const t = setInterval(() => {
    p = Math.min(p + Math.random() * 14, 90)
    bar.style.width = p + '%'
    num.textContent = 'LOADING ' + Math.floor(p) + '%'
  }, 120)
  const finish = () => {
    if (finished) return; finished = true
    clearInterval(t)
    bar.style.width = '100%'
    num.textContent = 'LOADING 100%'
    setTimeout(() => {
      document.getElementById('preloader').classList.add('done')
      dispatchEvent(new Event('preloader:done'))
    }, 350)
  }
  addEventListener('load', finish)
  setTimeout(finish, 5000)
}

/* ===== 顶部滚动进度条 ===== */
export function initProgressBar() {
  const bar = document.getElementById('progressBar')
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%'
  }
  addEventListener('scroll', update, { passive: true })
  addEventListener('resize', update)
  update()
}
/* ===== 版权保护：禁用右键（输入框除外）与图片拖拽，并广播提示事件 ===== */
export function initProtection() {
  let lastNotify = 0
  const notify = () => {
    const now = Date.now()
    if (now - lastNotify > 3000) { lastNotify = now; dispatchEvent(new Event('wm-blocked')) }
  }
  document.addEventListener('contextmenu', e => {
    const t = e.target
    if (t.closest && t.closest('input,textarea,[contenteditable]')) return
    e.preventDefault()
    notify()
  })
  document.addEventListener('dragstart', e => {
    if (e.target.tagName === 'IMG') { e.preventDefault(); notify() }
  })
  document.addEventListener('selectstart', e => {
    if (e.target.tagName === 'IMG') e.preventDefault()
  })
}