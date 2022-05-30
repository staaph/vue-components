<template>
  <div>
    <HomeMenu class="z-10" />
    <div class="bottom-nav flex z-10 font-mono" v-if="work">
      <div class="nav-links">
        <router-link class="prev link" v-if="prev" :to="`/${prev.no}`"
          ><span>{{ prev.name }}</span
          ><span class="mx-1 opacity-25">{{ prev.no }}</span></router-link
        >
        <div class="current">
          <span class="font-bold">{{ work.name }}</span
          ><span class="mx-1 opacity-50">{{ work.no }}</span>
        </div>
        <router-link class="next link" v-if="next" :to="`/${next.no}`"
          ><span>{{ next.name }}</span
          ><span class="mx-1 opacity-25">{{ next.no }}</span></router-link
        >
      </div>
    </div>
    <slot :work="work"></slot>
  </div>
</template>

<script setup lang="ts">
import HomeMenu from '@/components/HomeMenu.vue';
import { useTitle } from '@vueuse/core';
import { useRoute } from 'vue-router';
import { works } from '@/works';

const route = useRoute();
let no = route.path.slice(1);
if (no.startsWith('x')) no = no.slice(1);
const index = works.findIndex((i) => i.no === no);
const work = works[index];
const prev = works[index - 1];
const next = works[index + 1];
useTitle(work ? `${no}. ${work.name}` : '404');
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 12px;
}
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 8px 12px;
}
.shot .nav {
  padding: 24px;
}
.shot .bottom-nav {
  padding: 20px 24px;
}
.nav-links .next,
.nav-links .prev {
  opacity: 0;
  transition: 0.3s all ease-in-out;
  margin-top: -1.5em;
  display: block;
}
.nav-links:hover .next,
.nav-links:hover .prev {
  opacity: 1;
  margin-top: 0;
}
</style>
