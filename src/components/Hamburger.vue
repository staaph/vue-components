<template>
  <div
    id="navMenu"
    class="cursor-pointer"
    :class="{ active: isActive }"
    @click="isActive = !isActive"
  >
    <span class="bg-black dark:bg-white"></span>
    <span class="bg-black dark:bg-white"></span>
    <span class="bg-black dark:bg-white"></span>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isActive = ref(false);
</script>

<style scoped>
#navMenu {
  transform: scale(1.5);
}
#navMenu > span {
  display: block;
  width: 28px;
  height: 2px;
}

#navMenu > span:not(:last-child) {
  margin-bottom: 7px;
}

#navMenu,
#navMenu > span {
  transition: all 0.4s ease-in-out;
}

#navMenu.active {
  transform: rotate(45deg) scale(1.5);
}

#navMenu.active > span:nth-child(2) {
  width: 0;
}

#navMeu.active > span:nth-child(1),
#navMeu.active > span:nth-child(3) {
  transition-delay: 0.4s;
}

#navMenu.active > span:nth-child(1) {
  transform: translateY(9px);
}

#navMenu.active > span:nth-child(3) {
  transform: translateY(-9px) rotate(90deg);
}
</style>
