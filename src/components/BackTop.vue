<script setup>
import { useScrollspy } from '../composables'

const { showTop } = useScrollspy([])
const top = () => {
  if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.3 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <button id="toTop" :class="{ visible: showTop }" title="返回顶部" @click="top">↑</button>
</template>