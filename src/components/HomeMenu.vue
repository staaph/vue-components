<template>
  <main class="absolute top-4 left-4 dark:text-white text-black">
    <div class="flex flex-col gap-y-4">
      <div
        @click="isMenuOpen = !isMenuOpen"
        class="cursor-pointer h-7 w-7 text-gray-400 hover:text-gray-500 flex justify-center"
      >
        <ArrowDown v-if="!isMenuOpen" />
        <ArrowUp v-if="isMenuOpen" />
      </div>
      <section
        class="flex flex-col justify-center items-center gap-y-3 opacity-75"
      >
        <router-link to="/" v-if="isMenuOpen">
          <HomeIcon class="w-7 h-7 hover:opacity-50" />
        </router-link>
        <button v-if="isMenuOpen" class="hover:opacity-50">
          <Sun
            @click="toggleTheme"
            v-if="userTheme === 'dark'"
            class="h-7 w-7"
          />
          <Moon v-else @click="toggleTheme" class="h-7 w-7" />
        </button>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue';
import ArrowDown from '@/assets/icons/ArrowDown.vue';
import Moon from '@/assets/icons/MoonIcon.vue';
import Sun from '@/assets/icons/SunIcon.vue';
import ArrowUp from '@/assets/icons/ArrowUp.vue';
import { useDark } from '@/composables/useDark';
import { ref, type Ref } from 'vue';

const { userTheme, toggleTheme } = useDark();
const isMenuOpen: Ref<boolean> = ref(false);
</script>
