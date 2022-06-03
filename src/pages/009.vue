<template>
  <wrapper>
    <Modal :data="props" :image="ModalBack1" />
  </wrapper>
</template>

<script setup lang="ts">
import Modal from '@/components/Modal.vue/Modal.vue';
import ModalBack1 from '@/assets/ModalBack1.jpg';

const props = [
  {
    title: 'Modal',
    content: 'Background gets blurred. Click outside to close',
    titleRight: 'Dynamic',
    contentRight: 'pass props for Title, Content & Image',
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
