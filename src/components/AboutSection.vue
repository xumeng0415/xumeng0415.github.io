<script setup>
import { APP_DATA } from '../data'
</script>

<template>
  <section class="block" id="about">
    <div class="sec-head" v-reveal>
      <span class="sec-tag">// ABOUT_ME</span>
      <h2 class="sec-title">关于<span class="hl">我</span></h2>
      <p class="sec-sub">用多边形搭建虚实桥梁——从空间建模到最终渲染，让每一个数字孪生场景都经得起现实数据的校验。</p>
    </div>
    <div class="about-grid">
      <div v-reveal="'d1'">
        <div class="avatar-card">
          <svg class="orbit-badge" viewBox="0 0 116 116">
            <defs><path id="circPath" d="M58,58 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0"/></defs>
            <text><textPath href="#circPath">SCENE ARTIST ✦ UE5 ✦ UNITY ✦ 地编 ✦ </textPath></text>
          </svg>
          <span class="orbit-badge core">★</span>
          <div class="avatar-inner"><img src="/assets/images/JianLiZhaoPian.png" alt="徐蒙头像"><div class="wm-layer"></div></div>
        </div>
        <div class="award-chip">
          <iconify-icon icon="mdi:trophy-outline"></iconify-icon>
          明日之星 · 原力数字科技（年会获奖）
        </div>
        <dl class="info-rows">
          <div class="row" v-for="r in APP_DATA.aboutRows" :key="r[0]">
            <dt>{{ r[0] }}</dt><dd>{{ r[1] }}</dd>
          </div>
        </dl>
      </div>
      <div class="about-text" v-reveal="'d2'">
        <p class="lead">你好，我是<span style="color:var(--cyan)">徐蒙</span>。我致力于成为一名专业的全栈数字孪生开发工程师，为客户提供专业的数字孪生解决方案。</p>
        <p>我毕业于金陵科技学院数字媒体艺术专业（江苏美术统招）。在江苏原力数字科技期间，深度参与《凡人修仙传》影视场景制作，完成从白盒搭建到最终渲染分镜的全流程工作；随后转入游戏事业部，负责次时代 3A 三端开放大世界的关卡设计、性能优化与氛围图制作。</p>
        <p>随后，我加入闻道之萌（南京）科技担任虚拟仿真三维场景设计师，专注 Unity &amp; UE5 数字孪生与可视化项目的场景美术开发 —— 涵盖灯光、地形、资产模块化、Shader 开发与多端适配。</p>
        <p>现在，我在立臻精密智造（昆山）担任数字孪生交互开发工程师，负责厂区数字孪生项目的 UE5 场景美术与交互开发：编写生产线设备蓝图并接入实时 PLC 信号，将物理设备状态实时映射到孪生场景中监控；同时完成场景性能优化以支撑远程推流展示，并使用 Sequence 渲染高精度离线视频。</p>
        <div class="cap-cloud">
          <span class="cap" v-for="c in APP_DATA.caps" :key="c">{{ c }}</span>
        </div>
      </div>
    </div>
  </section>
</template>