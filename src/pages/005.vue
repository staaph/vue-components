<template>
  <div class="spinner text-black dark:text-white"></div>
</template>

<style scoped>
.spinner {
  width: 50px;
  height: 50px;
  border-top: 1px solid;
  border-radius: 50%;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
