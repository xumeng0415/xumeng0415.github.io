<script setup>
import { ref } from 'vue'
import { APP_DATA } from '../data'
import { useScrollspy } from '../composables'

const { active, scrolled } = useScrollspy(APP_DATA.nav.map(n => n.id))
const open = ref(false)
</script>

<template>
  <nav class="top-nav" :class="{ scrolled }">
    <a class="nav-logo" href="#home">
      <span class="mark">XM</span>
      <span><b>XU MENG</b><small>DIGITAL TWIN DEVELOPER</small></span>
    </a>
    <ul class="nav-links">
      <li v-for="n in APP_DATA.nav" :key="n.id">
        <a :href="'#' + n.id" :class="{ active: active === n.id }">{{ n.label }}</a>
      </li>
    </ul>
    <a class="nav-cta" href="#contact">// CONTACT_ME</a>
    <button id="hamburger" :class="{ open }" aria-label="菜单" @click="open = !open">
      <span></span><span></span><span></span>
    </button>
  </nav>
  <div class="mobile-menu" :class="{ open }" @click="open = false">
    <a v-for="n in APP_DATA.nav" :key="n.id" :href="'#' + n.id">{{ n.label }}</a>
  </div>
</template>