<script setup>
import { APP_DATA } from '../data'

const items = APP_DATA.timeline.map((t, i) => ({ ...t, delay: i ? 'd' + Math.min(i, 3) : '' }))
</script>

<template>
  <section class="block" id="experience">
    <div class="sec-head" v-reveal>
      <span class="sec-tag">// CAREER_PATH</span>
      <h2 class="sec-title">经历<span class="hl">时间线</span></h2>
      <p class="sec-sub">从校园到影视，从游戏到数字孪生 —— 每一步都在拓宽场景的边界。</p>
    </div>
    <div class="timeline">
      <div class="t-item" v-for="(t, i) in items" :key="i" v-reveal="t.delay">
        <div class="t-dot"></div>
        <div class="t-card">
          <div class="t-type" :class="{ work: t.work }"><i></i>{{ t.type }}</div>
          <div class="t-head">
            <span class="t-role">{{ t.role }}</span>
            <span class="t-date" :class="{ now: t.now }">{{ t.date }}</span>
          </div>
          <p class="t-company">{{ t.company }}</p>
          <ul class="t-list" v-if="t.list.length">
            <li v-for="(li, j) in t.list" :key="j">{{ li }}</li>
          </ul>
          <div class="t-medal" v-if="t.medal">{{ t.medal }}</div>
        </div>
      </div>
    </div>
  </section>
</template>