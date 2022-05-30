<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import { onMounted } from 'vue';
import { works } from '@/works';
import FullscreenIcon from '@/assets/icons/FullscreenIcon.vue';

onMounted(() => {
  useTitle('Components');
});
</script>

<template>
  <wrapper>
    <main class="centered">
      <div class="mb-3 hidden md:flex items-center font-mono gap-x-1">
        <FullscreenIcon class="h-5 w-5" />F
      </div>
      <section
        class="grid gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      >
        <router-link
          class="flex font-mono flex-row opacity-75 hover:opacity-100"
          v-for="work of works"
          :key="work.no"
          :to="`/${work.no}`"
        >
          <span class="mr-2 opacity-50"> {{ work.no }}</span>
          <p class="text-gray-900 dark:text-white dark:opacity-75">
            {{ work.name }}
          </p>
        </router-link>
      </section>
    </main>
  </wrapper>
</template>

<style scoped>
.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
