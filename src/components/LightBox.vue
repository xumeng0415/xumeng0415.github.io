<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import ImageLightbox from './ImageLightbox.vue'
import { descHtml } from '../composables'

const props = defineProps({ project: { type: Object, default: null } })
const emit = defineEmits(['close'])

const body = ref(null)
const flat = computed(() =>
  props.project ? props.project.imageGroups.flatMap(g => g.images || []) : []
)
const ivIndex = ref(-1)

watch(() => props.project, p => {
  /* 双重滚动锁：html + body，页面彻底静止 */
  document.documentElement.style.overflow = p ? 'hidden' : ''
  document.body.style.overflow = p ? 'hidden' : ''
  /* Lenis 停机后，滚轮事件在 data-lenis-prevent 元素上仍走原生滚动，
     因此只有模态窗内部（.lb-body）响应滚轮 */
  if (p) {
    window.__lenis && window.__lenis.stop()
    nextTick(() => body.value && (body.value.scrollTop = 0))
  } else {
    window.__lenis && window.__lenis.start()
  }
})

function zoom(src) {
  const idx = flat.value.indexOf(src)
  if (idx >= 0) ivIndex.value = idx
}
function close() { emit('close') }

function onKey(e) {
  if (e.key !== 'Escape') return
  if (document.querySelector('.imgviewer')) return
  if (props.project) close()
}
onMounted(() => addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  removeEventListener('keydown', onKey)
  document.documentElement.style.overflow = ''
  document.body.style.overflow = ''
  window.__lenis && window.__lenis.start()
})
</script>

<template>
  <!-- Teleport 到 body：脱离任何父级层叠/透视影响，全屏覆盖 -->
  <teleport to="body">
    <transition name="lb">
      <div v-if="project" class="lightbox show" @click.self="close">
        <div class="lb-panel">
          <div class="lb-head">
            <h3 class="lb-title">{{ project.title }}</h3>
            <button class="lb-close" @click="close"><iconify-icon icon="mdi:close"></iconify-icon></button>
          </div>
          <!-- data-lenis-prevent：滚轮只滚动模态窗内部 -->
          <div class="lb-body" ref="body" data-lenis-prevent>
            <div class="lb-desc" v-html="descHtml(project.description)"></div>
            <div class="lb-group" v-for="(g, gi) in project.imageGroups" :key="gi">
              <div class="lb-gtitle"><b>GALLERY</b>{{ g.title }}</div>
              <div class="lb-grid" v-if="g.images && g.images.length">
                <figure v-for="img in g.images" :key="img" @click="zoom(img)">
                  <img loading="lazy" :src="img" :alt="g.title">
                  <div class="wm-layer"></div>
                </figure>
              </div>
              <video v-for="v in (g.videos || [])" :key="v" class="lb-video"
                     :src="v" controls playsinline preload="metadata"></video>
            </div>
          </div>
        </div>
      </div>
    </transition>

    <ImageLightbox v-if="ivIndex >= 0" :list="flat" :index="ivIndex" @close="ivIndex = -1" />
  </teleport>
</template>