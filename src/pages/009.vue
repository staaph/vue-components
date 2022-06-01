<template>
  <wrapper>
    <button @click="isModalOpen = !isModalOpen">Open</button>
    <Modal v-if="isModalOpen" class="center w-screen h-screen" />
  </wrapper>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal.vue';

import { ref } from 'vue';

const isModalOpen = ref(false);
</script>

<style setup>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
