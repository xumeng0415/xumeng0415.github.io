<script setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import { APP_DATA } from '../data'
import { useTyping } from '../composables'

const { text } = useTyping(APP_DATA.typed)
const stats = reactive(APP_DATA.stats.map(s => ({ ...s, cur: 0 })))
const wrap = ref(null)
let io = null

function runAll() {
  stats.forEach(s => {
    const t0 = performance.now()
    ;(function step(now) {
      const k = Math.min((now - t0) / 1600, 1), e = 1 - Math.pow(1 - k, 3)
      s.cur = Math.round(s.n * e)
      if (k < 1) requestAnimationFrame(step)
    })(t0)
  })
}

onMounted(() => {
  io = new IntersectionObserver(es => {
    es.forEach(en => { if (en.isIntersecting) { runAll(); io.disconnect() } })
  }, { threshold: .3 })
  io.observe(wrap.value)
})
onBeforeUnmount(() => io && io.disconnect())
</script>

<template>
  <header class="hero" id="home">
    <div class="hero-watermark">XUMENG</div>
    <div class="hero-grid-floor"></div>
    <div class="hero-eyebrow"><i></i>PORTFOLIO · 数字孪生开发工程师 · 2026</div>
    <h1 class="hero-name" data-text="徐蒙">徐蒙</h1>
    <div class="typing-wrap">
      <span class="prefix">&gt;_</span><span>{{ text }}</span><span class="caret"></span>
    </div>
    <div class="btn-row">
      <a class="btn btn-primary" href="#projects">✦ 查看作品</a>
      <a class="btn btn-ghost" href="#contact">联系我 <iconify-icon icon="mdi:arrow-right"></iconify-icon></a>
    </div>
    <div class="hero-stats" ref="wrap">
      <div class="stat" v-for="s in stats" :key="s.label">
        <b>{{ s.cur }}{{ s.s }}</b><span>{{ s.label }}</span>
      </div>
    </div>
    <div class="scroll-hint"><div class="mouse"></div>SCROLL</div>
  </header>
</template>