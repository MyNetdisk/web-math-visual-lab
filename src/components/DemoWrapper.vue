<template>
  <div class="demo-container">
    <h1>{{ title }}</h1>
    <p class="desc">{{ description }}</p>
    <div class="canvas-box">
      <slot name="canvas"></slot>
    </div>
    <button @click="onReset">重置</button>
    <details class="source">
      <summary>查看核心源码</summary>
      <pre><code>{{ sourceCode }}</code></pre>
    </details>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  sourceCode: string
}>()

const emit = defineEmits(['reset'])
const onReset = () => emit('reset')
</script>

<style scoped>
.demo-container {
  max-width: 1000px;
}
.desc {
  margin: 8px 0 16px;
  color:#cbd5e1;
  line-height:1.6;
}
.canvas-box {
  background:#000;
  padding:12px;
  border-radius:8px;
  margin-bottom:12px;
}
button {
  padding: 6px 14px;
  cursor:pointer;
}
details {
  margin-top:12px;
}
pre {
  background:#1e293b;
  padding:12px;
  border-radius:6px;
  overflow-x:auto;
}
</style>
