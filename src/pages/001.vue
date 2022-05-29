<script setup lang="ts">
import { ref, type Ref, computed } from 'vue';
import { useTitle } from '@vueuse/core';

useTitle('Calendar');

const currentDay: Ref<number> = ref(new Date().getDate());
let currentMonth: Ref<number> = ref(new Date().getMonth());
let currentYear: Ref<number> = ref(new Date().getFullYear());
const days: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const startingMonth = new Date(
  currentYear.value,
  currentMonth.value
).toLocaleString('default', {
  month: 'long',
});

const prevMonth = () => {
  if (currentMonth.value === 0) {
    currentYear.value--;
    currentMonth.value = 11;
  } else {
    currentMonth.value--;
  }
};

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentYear.value++;
    currentMonth.value = 0;
  } else {
    currentMonth.value++;
  }
};

const daysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const startDay = () => {
  return new Date(currentYear.value, currentMonth.value, 1).getDay();
};

const currentMonthInName = computed(() => {
  return new Date(currentYear.value, currentMonth.value).toLocaleString(
    'default',
    {
      month: 'long',
    }
  );
});
</script>

<template>
  <main class="flex h-screen justify-center items-center">
    <div
      class="flex flex-col rounded-b-xl shadow-gray-700 shadow-lg bg-gray-900"
    >
      <div
        class="bg-purple-700 flex flex-col w-full justify-center items-center p-5"
      >
        <div class="flex flex-row items-center w-full justify-between">
          <button @click.prevent="prevMonth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              class="w-6 h-6 text-gray-300"
              fill="currentColor"
            >
              <path
                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              />
            </svg>
          </button>
          <div class="flex flex-col items-center">
            <div class="text-white text-3xl gap-x-2 flex flex-row">
              <p>{{ currentMonthInName }}</p>
              <p>{{ currentYear }}</p>
            </div>
            <p class="text-white"></p>
          </div>
          <button @click.prevent="nextMonth">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 512"
              class="w-6 h-6 text-gray-300"
              fill="currentColor"
            >
              <path
                d="M64 448c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L178.8 256L41.38 118.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25l-160 160C80.38 444.9 72.19 448 64 448z"
              />
            </svg>
          </button>
        </div>
      </div>
      <section
        class="text-white grid grid-cols-7 p-5 text-center text-lg gap-y-4 gap-x-5 rounded-b-xl"
      >
        <div class="font-medium" v-for="(day, index) in days" :key="index">
          {{ day }}
        </div>
        <p v-for="day in startDay()" :key="day" class="text-white"></p>
        <p
          v-for="date in daysInMonth(currentYear, currentMonth)"
          :key="date"
          class="text-white cursor-pointer py-1"
          :class="[
            date === currentDay && currentMonthInName === startingMonth
              ? 'bg-blue-700 rounded-full'
              : 'bg-gray-900',
          ]"
        >
          {{ date }}
        </p>
      </section>
    </div>
  </main>
</template>
