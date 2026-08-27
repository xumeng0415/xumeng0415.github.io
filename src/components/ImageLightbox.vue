<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  list: { type: Array, required: true },
  index: { type: Number, default: 0 }
})
const emit = defineEmits(['close'])

const cur = ref(props.index)
const src = ref(props.list[props.index])

watch(() => props.index, i => { cur.value = i; src.value = props.list[i] })

function go(d) {
  const n = props.list.length
  cur.value = (cur.value + d + n) % n
  src.value = props.list[cur.value]
}
function close() { emit('close') }

function onKey(e) {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') go(1)
  else if (e.key === 'ArrowLeft') go(-1)
}
/* 模态窗已锁定页面滚动，这里只管理键盘；不重复操作 lenis */
onMounted(() => addEventListener('keydown', onKey))
onBeforeUnmount(() => removeEventListener('keydown', onKey))
</script>

<template>
  <teleport to="body">
    <transition name="iv">
      <div v-if="list && list.length" class="imgviewer" @click.self="close" data-lenis-prevent>
        <button class="iv-close" @click="close" aria-label="关闭"><iconify-icon icon="mdi:close"></iconify-icon></button>
        <button v-if="list.length > 1" class="iv-nav iv-prev" @click.stop="go(-1)" aria-label="上一张"><iconify-icon icon="mdi:chevron-left"></iconify-icon></button>

        <figure class="iv-stage">
          <img class="iv-img" :src="src" alt="" draggable="false" @dragstart.prevent @contextmenu.prevent>
          <div class="wm-layer"></div>
        </figure>

        <button v-if="list.length > 1" class="iv-nav iv-next" @click.stop="go(1)" aria-label="下一张"><iconify-icon icon="mdi:chevron-right"></iconify-icon></button>
        <div class="iv-count" v-if="list.length > 1">{{ cur + 1 }} / {{ list.length }}</div>
      </div>
    </transition>
  </teleport>
</template>
