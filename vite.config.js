import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import postcssNesting from 'postcss-nesting';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components(
    {
      directoryAsNamespace: true,
    }
  )],
  css:{
    postcss:{
      plugins:[
        postcssNesting
      ]
    }
  },
})
