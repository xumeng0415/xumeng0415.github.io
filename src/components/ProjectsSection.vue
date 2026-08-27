<script setup>
import { ref, computed } from 'vue'
import { APP_DATA } from '../data'
import ProjectCard from './ProjectCard.vue'
import LightBox from './LightBox.vue'

const filter = ref('全部')
const selected = ref(null)
const list = computed(() =>
  filter.value === '全部'
    ? APP_DATA.projects
    : APP_DATA.projects.filter(p => p.cat === filter.value)
)
</script>

<template>
  <section class="block" id="projects">
    <div class="sec-head" v-reveal>
      <span class="sec-tag">// SELECTED_WORKS</span>
      <h2 class="sec-title">项目<span class="hl">作品集</span></h2>
      <p class="sec-sub">影视 · 游戏 · 虚拟仿真 · 个人创作 —— 点击卡片查看完整图集与细节。</p>
    </div>
    <div class="filter-tabs" v-reveal="'d1'">
      <div class="bar">
        <button v-for="f in APP_DATA.filters" :key="f" class="ft-btn"
                :class="{ active: filter === f }" @click="filter = f">{{ f }}</button>
      </div>
    </div>
    <div class="proj-grid" v-reveal="'d2'">
      <ProjectCard v-for="(p, i) in list" :key="p.id"
                   :project="p" :index="i" @open="selected = $event" />
    </div>
    <LightBox :project="selected" @close="selected = null" />
  </section>
</template>