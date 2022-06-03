<template>
  <main class="w-screen grid h-screen place-content-center">
    <button
      @click="openModal"
      v-if="!isModalOpen"
      class="bg-gray-300 px-3 py-1.5 rounded-lg text-black"
      ref="button"
    >
      Open
    </button>
    <!-- MODAL -->
    <section ref="modal">
      <div class="backdrop" ref="backdrop" v-if="isModalOpen">
        <div class="dialog">
          <div class="flex flex-row w-full relative">
            <!-- LEFT SECTION -->
            <section class="w-5/12 relative text-black">
              <div class="grid h-full w-full place-content-center">
                <section class="px-8">
                  <div>
                    <h1 class="text-lg font-medium">{{ currentItem.title }}</h1>
                    <p class="text break-words">{{ currentItem.content }}</p>
                  </div>
                </section>
                <div
                  class="absolute bottom-[10%] w-full justify-center flex flex-row gap-x-2"
                >
                  <section v-for="(item, idx) in items" :key="idx">
                    <button
                      @click="currentIndex = idx"
                      class="bg-gray-300 h-2 w-2 rounded-full hover:bg-gray-400"
                      :class="{ 'bg-gray-400': currentIndex === idx }"
                    ></button>
                  </section>
                </div>
              </div>
            </section>
            <!-- RIGHT SECTION -->
            <section
              class="w-7/12 right-side relative flex justify-start items-center text-black"
              :style="`background-image:linear-gradient(to bottom, rgba(255,255,255,0.3) 0%,rgba(255,255,255,0.7) 100%), url(${props.image});`"
            >
              <div class="left-2">
                <h1 class="title">{{ currentItem.titleRight }}</h1>
                <p class="p-14">{{ currentItem.contentRight }}</p>
              </div>
            </section>
            <!-- Buttons -->
            <button
              class="arrowLeft"
              v-if="currentIndex != 0"
              @click="currentIndex -= 1"
            >
              <ArrowLeft />
            </button>
            <button
              class="arrowRight"
              v-if="currentIndex != items.length - 1"
              @click="currentIndex += 1"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from 'vue';
import { useBackdrop } from './useBackdrop';
import ArrowRight from './ArrowRight.vue';
import ArrowLeft from './ArrowLeft.vue';

export interface Props {
  title: string;
  content: string;
  titleRight: string;
  contentRight: string;
}

const props = defineProps({
  data: {
    type: Object as PropType<Array<Props>>,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const items = props.data.map((i) => i);
const currentIndex = ref(0);
const currentItem = computed(() => items[currentIndex.value]);

const { modal, backdrop, button, isModalOpen, openModal } = useBackdrop();
</script>

<style scoped>
.dialog {
  @apply w-[90%] md:w-8/12 h-[60%] rounded-lg flex shadow-xl border dark:shadow-none dark:border-none z-50 bg-white;
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
}

.backdrop {
  @apply grid place-content-center w-screen h-screen;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}
.right-side {
  height: 100%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-position: right;
  background-size: cover;
}
.title {
  color: #919364;
  font-size: 2rem;
  font-weight: bold;
  position: absolute;
  top: 20%;
  left: 10%;
}
.arrowRight {
  @apply absolute right-0 top-1/2 p-1 rounded-full bg-gray-300 border border-gray-400 text-black;
  margin-right: -15px;
}
.arrowLeft {
  @apply absolute left-0 top-1/2 p-1 rounded-full bg-gray-300 border border-gray-400 text-black;
  margin-left: -15px;
}
</style>
