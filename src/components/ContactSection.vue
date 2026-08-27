<script setup>
import { APP_DATA } from '../data'
import { useCopy } from '../composables'

const { copy } = useCopy()
</script>

<template>
  <section class="block" id="contact">
    <div class="sec-head" v-reveal>
      <span class="sec-tag">// GET_IN_TOUCH</span>
      <h2 class="sec-title">联系<span class="hl">我</span></h2>
      <p class="sec-sub">项目合作 / 工作机会，欢迎随时联系。点击卡片即可复制联系方式。</p>
    </div>
    <div class="contact-grid">
      <div class="c-card" v-for="(c, i) in APP_DATA.contacts" :key="c.label"
           :style="{ '--c-rgb': c.rgb }" v-reveal="i ? 'd' + i : ''">
        <div class="c-icon"><iconify-icon :icon="c.icon"></iconify-icon></div>
        <span class="c-label">{{ c.label }}</span>
        <span class="c-value">{{ c.value }}</span>
        <button class="c-copy" @click="copy(c.value)">{{ c.btn }}</button>
      </div>
    </div>
  </section>
</template>