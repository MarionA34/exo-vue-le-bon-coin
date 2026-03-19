<script setup>
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <header><Header /></header>

  <RouterView />
  <footer><Footer /></footer>
</template>

<style scoped>
header {
  position: sticky;
  top: 0px;
}
</style>
