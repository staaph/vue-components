<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import { works } from '../works';
useTitle('Components');
</script>

<template>
  <main class="grid place-content-center h-screen">
    <router-link
      class="flex flex-row opacity-75 hover:opacity-100"
      v-for="work of works"
      :key="work.no"
      :to="`/${work.no}`"
    >
      <span class="mr-2"> {{ work.no }}</span>
      <p>{{ work.name }}</p>
    </router-link>
  </main>
</template>
