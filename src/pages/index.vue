<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import { works } from '../works';

useTitle('Components');
</script>

<template>
  <wrapper>
    <main
      class="grid place-content-center h-screen gap-x-4 gap-y-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
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
    </main>
  </wrapper>
</template>
