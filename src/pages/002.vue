<template>
  <main class="flex h-screen justify-center items-center">
    <div class="w-72 relative">
      <input
        type="text"
        id="username"
        class="text-input"
        autocomplete="off"
        placeholder="Enter your username"
        required
      />
      <label class="label" for="username">Username</label>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useTitle } from '@vueuse/core';
useTitle('Input');
</script>

<style scoped>
.label {
  @apply absolute left-[10px] top-[14px] py-0 px-[2px] z-10 text-gray-400 transition-all;
}

.text-input {
  @apply p-3 w-full h-full border-2 border-solid border-slate-700 bg-gray-800 transition-all text-white outline-none
  text-lg rounded-md;
}

.label:before {
  @apply bg-gray-800 -z-10 w-full left-0 top-[10px] absolute h-1 content-[''];
}

.text-input:focus {
  @apply border-violet-800 border-2 border-solid;
}

.text-input:focus + .label {
  @apply -top-[10px] text-sm text-violet-700;
}

.text-input::placeholder {
  @apply text-base opacity-0 transition-all;
}
.text-input:focus::placeholder {
  @apply opacity-100;
}
</style>
