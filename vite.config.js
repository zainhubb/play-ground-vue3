import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/dist/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/dist/resolvers'
import { resolve } from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
  Components(
    {
      directoryAsNamespace: true,
      resolvers: [
        AntDesignVueResolver()
      ]
    }
  )],
  base: './',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  resolve:{
    alias:{
      '@assets':resolve(__dirname,'src/assets'),
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    host: '0.0.0.0',
    port: 3212,
  },
  build: {
    minify: "terser",
    terserOptions: {
         compress: {
            drop_console: true,
            drop_debugger: true
         }
    }
  }
})
