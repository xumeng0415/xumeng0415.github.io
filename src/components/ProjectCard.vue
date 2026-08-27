<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  index: { type: Number, default: 0 }
})
const emit = defineEmits(['open'])

const num = computed(() => String(props.index + 1).padStart(2, '0'))
const brief = computed(() => props.project.description.split('\n')[0])
</script>

<template>
  <article class="p-card" v-tilt @click="emit('open', project)">
    <div class="p-media">
      <img loading="eager" :src="project.coverImage" :alt="project.title">
      <div class="p-shine"></div>
      <div class="wm-layer"></div>
      <span class="p-index">{{ num }}</span>
      <span v-if="project.secret" class="p-secret">涉密项目</span>
      <span class="p-cat">{{ project.cat }}</span>
    </div>
    <div class="p-body">
      <h3 class="p-title">{{ project.title }}</h3>
      <p class="p-desc">{{ brief }}</p>
      <span class="p-more">查看详情 <iconify-icon icon="mdi:arrow-right"></iconify-icon></span>
    </div>
    <div class="p-glowbar"></div>
  </article>
</template>