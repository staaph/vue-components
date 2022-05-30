<template>
  <main class="absolute top-4 left-4 dark:text-white text-black">
    <div class="flex flex-row sm:flex-col gap-x-8 sm:gap-y-4">
      <div
        @click="isMenuOpen = !isMenuOpen"
        class="cursor-pointer h-8 w-8 sm:h-7 sm:w-7 text-gray-400 hover:text-gray-500 flex justify-center items-center"
      >
        <ArrowDown v-if="!isMenuOpen" class="hidden sm:flex" />
        <ArrowUp v-if="isMenuOpen" class="hidden sm:flex" />
        <ArrowRight v-if="!isMenuOpen" class="flex sm:hidden" />
        <ArrowLeft v-if="isMenuOpen" class="flex sm:hidden" />
      </div>
      <section
        class="flex flex-row gap-x-10 sm:flex-col sm:justify-center items-center sm:gap-y-4 opacity-75"
        v-if="isMenuOpen"
      >
        <router-link to="/">
          <HomeIcon class="sm:w-7 sm:h-7 h-8 w-8 hover:opacity-50" />
        </router-link>
        <button v-if="isMenuOpen" class="hover:opacity-50">
          <Sun
            @click="toggleTheme"
            v-if="userTheme === 'dark'"
            class="sm:w-7 sm:h-7 h-8 w-8"
          />
          <Moon v-else @click="toggleTheme" class="sm:w-7 sm:h-7 h-8 w-8" />
        </button>
        <a
          href="https://github.com/staaph/vue-components"
          rel="noopener noreferrer nofollow"
          target="_blank"
          class="hover:opacity-50"
          ><GithubIcon class="sm:w-7 sm:h-7 h-8 w-8"
        /></a>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import HomeIcon from '@/assets/icons/HomeIcon.vue';
import ArrowDown from '@/assets/icons/ArrowDown.vue';
import ArrowUp from '@/assets/icons/ArrowUp.vue';
import ArrowRight from '@/assets/icons/ArrowRight.vue';
import ArrowLeft from '@/assets/icons/ArrowLeft.vue';
import Moon from '@/assets/icons/MoonIcon.vue';
import Sun from '@/assets/icons/SunIcon.vue';
import GithubIcon from '@/assets/icons/GithubIcon.vue';
import { useDark } from '@/composables/useDark';
import { ref, type Ref } from 'vue';

const { userTheme, toggleTheme } = useDark();
const isMenuOpen: Ref<boolean> = ref(false);
</script>
