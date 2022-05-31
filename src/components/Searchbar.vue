<script setup lang="ts">
import { ref, type Ref, onMounted, onUnmounted } from 'vue';

const metaKey: Ref = ref();
const searchbar: Ref = ref();
const input: Ref<string | undefined> = ref();

const handleSearchHotKey = (e: KeyboardEvent) => {
  if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    if (document.activeElement != document.body) {
      (document.activeElement as HTMLElement).blur();
    } else {
      searchbar.value.focus();
    }
  }
  e.key === 'Escape' ? (document.activeElement as HTMLElement).blur() : null;
};

onMounted(() => {
  metaKey.value.textContent =
    window.navigator.userAgent.indexOf('Mac') != -1 ? '⌘' : 'Ctrl';
  window.addEventListener('keydown', handleSearchHotKey);
});
onUnmounted(() => {
  window.removeEventListener('keydown', handleSearchHotKey);
});
</script>

<template>
  <main class="flex w-screen justify-center">
    <div class="relative flex ml-4 items-center">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        autocomplete="off"
        ref="searchbar"
        type="text"
        class="p-[10px] pl-11 rounded-lg text-sm input dark:border-gray-600 dark:placeholder-gray-400 focus:outline-blue-600 bg-gray-300"
        placeholder="Search..."
        v-model="input"
      />
      <div
        class="flex absolute inset-y-0 right-0 items-center pr-1 pointer-events-none gap-x-1"
      >
        <div
          class="bg-gray-800 px-1.5 py-0.5 rounded-md scale-90 text-white"
          v-show="!input"
        >
          <span ref="metaKey">Meta</span>
          <span>&nbsp;+&nbsp;K</span>
        </div>
      </div>
    </div>
  </main>
</template>
