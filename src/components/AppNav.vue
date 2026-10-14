<template>
  <aside class="sidebar">
    <h2>🧪 Math Lab</h2>
    <nav>
      <router-link to="/">首页</router-link>
      <p class="cate">初中数学</p>
      <router-link to="/demo/canvas-coord-flip">Canvas坐标系翻转</router-link>
    </nav>
  </aside>
</template>

<script setup lang="ts">
</script>

<style scoped>
.sidebar {
  width: 220px;
  background:#1f2937;
  padding:20px 12px;
}
h2 {
  font-size:18px;
  margin-bottom:16px;
}
nav a {
  display:block;
  color:#cbd5e1;
  padding:6px 4px;
  text-decoration:none;
  font-size:14px;
}
nav a.router-link-active {
  color:#38bdf8;
}
.cate {
  margin-top:12px;
  font-size:13px;
  color:#9ca3af;
}
</style>
