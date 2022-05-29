<template>
  <div class="wrapper">
    <div class="typing-demo">This is a typing demo.</div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing-demo {
  width: 22ch;
  animation: typing 2s steps(22);
  white-space: nowrap;
  overflow: hidden;
  font-family: monospace;
  font-size: 2em;
}
@keyframes typing {
  from {
    width: 0;
  }
}
</style>
