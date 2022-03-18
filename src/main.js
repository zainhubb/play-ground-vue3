import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/style/reset.css'
import './assets/style/index.css'
createApp(App).use(router).mount('#app')
