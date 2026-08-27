<script setup>
import { computed } from 'vue'
import { APP_DATA } from '../data'

const items = computed(() => [...APP_DATA.marq, ...APP_DATA.marq])
</script>

<template>
  <div class="marquee">
    <div class="marquee-track">
      <template v-for="(m, i) in items" :key="i">
        <em v-if="m === '✦'">✦</em>
        <span v-else>{{ m }}</span>
      </template>
    </div>
  </div>
</template>