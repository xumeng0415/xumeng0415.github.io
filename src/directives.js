import gsap from 'gsap'

const _finePointer = matchMedia('(hover:hover) and (pointer:fine)').matches
const _reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
const _delayMap = { d1: .09, d2: .18, d3: .27, d4: .36 }

const _revealIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return
    _revealIO.unobserve(en.target)
    const el = en.target
    const fill = () => el.querySelectorAll('.sb-fill').forEach(f => { f.style.width = f.dataset.p + '%' })
    if (!_reducedMotion) {
      const cls = [...el.classList].find(c => _delayMap[c])
      gsap.to(el, { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: cls ? _delayMap[cls] : 0, clearProps: 'transform' })
    } else {
      el.classList.add('in')
    }
    fill()
  })
}, { threshold: .15 })

const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.classList.add(binding.value)
    if (!_reducedMotion) gsap.set(el, { opacity: 0, y: 38 })
    _revealIO.observe(el)
  },
  unmounted(el) { _revealIO.unobserve(el) }
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