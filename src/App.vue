<script setup>
import { ref, provide, onMounted, onBeforeUnmount } from 'vue'
import NavBar from './components/NavBar.vue'
import HeroSection from './components/HeroSection.vue'
import MarqueeStrip from './components/MarqueeStrip.vue'
import AboutSection from './components/AboutSection.vue'
import TimelineSection from './components/TimelineSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
import BackTop from './components/BackTop.vue'
import {
  initSmoothScroll, initBackgroundFx, initVelocityCursor,
  initHeroIntro, initParallax, initPreloader, initProgressBar, initProtection
} from './bootstrap'
import { applyWatermark } from './watermark'

const msg = ref('')
let timer = null
const toast = m => {
  msg.value = m
  clearTimeout(timer)
  timer = setTimeout(() => { msg.value = '' }, 2200)
}
provide('toast', toast)

const onBlocked = () => toast('🔒 内容受版权保护 · 图片仅供徐蒙投递简历使用')

onMounted(() => {
  applyWatermark()
  initSmoothScroll()
  initBackgroundFx()
  initVelocityCursor()
  initHeroIntro()
  initParallax()
  initPreloader()
  initProgressBar()
  initProtection()
  addEventListener('wm-blocked', onBlocked)
})
onBeforeUnmount(() => removeEventListener('wm-blocked', onBlocked))
</script>

<template>
  <NavBar />
  <HeroSection />
  <MarqueeStrip />
  <AboutSection />
  <TimelineSection />
  <SkillsSection />
  <ProjectsSection />
  <ContactSection />
  <AppFooter />
  <BackTop />
  <transition name="toastfade">
    <div v-if="msg" id="toast">{{ msg }}</div>
  </transition>
</template>