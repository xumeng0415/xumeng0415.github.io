<script setup>
import { APP_DATA } from '../data'
</script>

<template>
  <section class="block" id="skills">
    <div class="sec-head" v-reveal>
      <span class="sec-tag">// SKILL_MATRIX</span>
      <h2 class="sec-title">技能<span class="hl">矩阵</span></h2>
      <p class="sec-sub">以 UE5 与 Unity 为核心引擎，贯通建模、材质、地编到优化的完整管线。</p>
    </div>
    <div class="skills-wrap">
      <div v-reveal>
        <div class="mini-tag">// CORE_ENGINE_PROFICIENCY</div>
        <div class="skill-bar" v-for="s in APP_DATA.skillBars" :key="s.n">
          <div class="sb-top">
            <span class="sb-name">
              <span class="sb-mono">{{ s.m }}</span>{{ s.n }}
              <small> · {{ s.d }}</small>
            </span>
            <span class="sb-pct">{{ s.p }}%</span>
          </div>
          <div class="sb-track"><div class="sb-fill" :data-p="s.p"></div></div>
        </div>
      </div>
      <div v-reveal="'d1'">
        <div class="mini-tag">// ALSO_PROFICIENT</div>
        <div class="chip-cloud">
          <span class="cap" v-for="s in APP_DATA.alsoSkills" :key="s">{{ s }}</span>
        </div>
        <div class="mini-tag" style="margin-top:30px">// PIPELINE_CAPS</div>
        <div class="chip-cloud">
          <span class="cap" v-for="c in APP_DATA.pipeline" :key="c">{{ c }}</span>
        </div>
      </div>
    </div>
  </section>
</template>