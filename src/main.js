import { createApp } from 'vue'
import { TroisJSVuePlugin } from 'troisjs';
import App from './App.vue'
import router from './router/index.js'
import './assets/style/reset.css'
import './assets/style/index.css'
// AntDesignVueResolver 需要template中引入相应组件才能自动引入样式
// message和modal这类直接用函数调用的无样式，需手动引入
import 'ant-design-vue/es/message/style/index'
import 'ant-design-vue/es/modal/style/index'
const app = createApp(App)
app.use(TroisJSVuePlugin).use(router).mount('#app')
