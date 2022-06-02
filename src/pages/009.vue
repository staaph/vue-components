<template>
  <wrapper>
    <button
      @click="isModalOpen = !isModalOpen"
      class="bg-gray-300 px-3 py-1.5 rounded-lg text-black"
    >
      Open
    </button>
    <Modal
      :data="props"
      :image="ModalBack1"
      v-if="isModalOpen"
      class="center w-screen h-screen"
    />
  </wrapper>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import ModalBack1 from '@/assets/ModalBack1.jpg';

import { ref } from 'vue';

const isModalOpen = ref(false);

const props = [
  {
    title: 'test1',
    content: 'content1',
    titleRight: 'Title 1',
    contentRight: 'content 1',
  },
  {
    title: 'test2',
    content: 'content2',
    titleRight: 'Title 2',
    contentRight: 'content 2',
  },
];
</script>

<style setup>
.center {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
