<template>
  <dialog
    class="w-[90%] md:w-8/12 rounded-lg flex shadow-xl border dark:shadow-none dark:border-none"
  >
    <main class="flex flex-row w-full relative">
      <!-- LEFT -->
      <section class="w-5/12 relative">
        <div class="grid h-full w-full place-content-center">
          <div class="px-8">
            <div>
              <h1 class="text-lg font-medium">{{ currentItem.title }}</h1>
              <p class="text">{{ currentItem.content }}</p>
            </div>
          </div>
          <div
            class="absolute bottom-[10%] w-full justify-center flex flex-row gap-x-2"
          >
            <div v-for="(item, idx) in items" :key="idx">
              <button
                @click="currentIndex = idx"
                class="bg-gray-300 h-2 w-2 rounded-full hover:bg-gray-400"
                :class="{ 'bg-gray-400': currentIndex === idx }"
              ></button>
            </div>
          </div>
        </div>
      </section>
      <!-- RIGHT -->
      <section
        class="w-7/12 right-side relative flex justify-start items-center"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11 17l-5-5m0 0l5-5m-5 5h12"
          />
        </svg>
      </button>
      <button
        class="arrowRight"
        v-if="currentIndex != items.length - 1"
        @click="currentIndex += 1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13 7l5 5m0 0l-5 5m5-5H6"
          />
        </svg>
      </button>
    </main>
  </dialog>
</template>

<script setup lang="ts">
import { ref, computed, type PropType } from 'vue';

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
</script>

<style scoped>
.right-side {
  height: 100%;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  background-position: right;
  background-size: cover;
}
dialog {
  padding: 0;
  height: 60%;
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
  @apply absolute right-0 top-1/2 p-1 rounded-full bg-gray-300 border border-gray-400;
  margin-right: -1rem;
}

.arrowLeft {
  @apply absolute left-0 top-1/2 p-1 rounded-full bg-gray-300 border border-gray-400;
  margin-left: -1rem;
}
</style>
