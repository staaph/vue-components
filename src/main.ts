import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/index.css'
import router from './router'
import wrapper from '@/components/ComponentWrapper.vue'

const app = createApp(App)
app.use(router)
app.component('wrapper', wrapper)
app.mount('#app')
