<template>
  <wrapper>
    <Modal :data="props" :image="ModalBack1" />
  </wrapper>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal.vue';
import ModalBack1 from '@/assets/ModalBack1.jpg';

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

<style scoped></style>
