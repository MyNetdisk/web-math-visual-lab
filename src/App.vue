<template>
  <div class="app-wrap">
    <AppNav />
    <main class="page-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppNav from './components/AppNav.vue'
</script>

<style scoped>
.app-wrap {
  display: flex;
  min-height: 100vh;
}
.page-content {
  flex:1;
  padding: 24px;
}
</style>
