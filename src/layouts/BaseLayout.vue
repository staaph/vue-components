<script setup lang="ts">
import { useTitle } from '@vueuse/core';
import { works } from '../works';

useTitle('100 days');
</script>

<template>
  <router-link
    class="block mr-4"
    v-for="work of works"
    :key="work.no"
    :to="`/${work.no}`"
  >
    <span class="mr-2.opacity-50"> {{ work.no }}</span>
    <p>{{ work.name }}</p>
  </router-link>
</template>
