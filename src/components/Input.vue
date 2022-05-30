<template>
  <main class="w-72 relative">
    <input
      type="text"
      id="username"
      class="text-input"
      autocomplete="off"
      placeholder="Enter your username"
      required
    />
    <label class="label" for="username">Username</label>
  </main>
</template>

<style scoped>
.label {
  @apply absolute left-[10px] top-[14px] z-10 py-0 px-[2px] text-gray-400 transition-all;
}
.label:before {
  @apply absolute left-0 top-[10px] -z-10 h-1 w-full bg-gray-800 content-[''];
}

.text-input {
  @apply h-full w-full rounded-md border-2 border-solid border-slate-700 bg-gray-800 p-3 text-lg text-white
    outline-none transition-all;
}

.text-input:focus {
  @apply border-2 border-solid border-violet-800;
}

.text-input:focus + .label,
.text-input:not(:placeholder-shown) + .label {
  @apply -top-[10px] text-sm text-violet-700;
}

.text-input::placeholder {
  @apply text-base opacity-0 transition-all;
}
.text-input:focus::placeholder {
  @apply opacity-100;
}
</style>
