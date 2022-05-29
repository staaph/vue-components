<template>
  <router-link to="/">
    <div class="absolute top-3 left-3 rounded-full border p-1">
      <HomeIcon class="" /></div
  ></router-link>
  <router-view />
</template>

<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue';
</script>

<style scoped></style>
