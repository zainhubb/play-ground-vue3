import App from './App.vue'
import './assets/style/reset.css'
import './assets/style/index.css'
import './assets/style/tailwindcss.css'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
// app.use(TroisJSVuePlugin).use(router).use(createPinia()).mount('#app')
app.use(router).use(createPinia().use(piniaPluginPersistedstate)).mount('#app')
