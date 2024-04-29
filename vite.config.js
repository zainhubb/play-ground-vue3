import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite' // 自动注册组件
import AutoImport from 'unplugin-auto-import/vite' // 自动导入依赖
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
// icons
import Icons from 'unplugin-icons/vite'
// 自动引入icons
import IconsResolver from 'unplugin-icons/resolver'

export default defineConfig({
  plugins: [
    Icons(),
    visualizer(),
    vue(),
    vueJsx(),
    Components({
      // dirs: ['src/components'],
      // directoryAsNamespace: true,
      resolvers: [NaiveUiResolver(),IconsResolver({prefix:false})]
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        /\.vue$/,
        /\.vue\?vue/,
        /\.md$/,
      ],
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          'vue-router': ['createRouter', 'createWebHashHistory'],
          // 'troisjs': ['TroisJSVuePlugin'], // import { TroisJSVuePlugin } from 'troisjs';
          'axios': [
            // default imports
            ['default', 'axios'], // import { default as axios } from 'axios',
          ],
          'matter-js': [
            ['default', 'Matter'] 
          ],
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
            'darkTheme',
          ]
        }
      ],
      // 优先级:导出名>文件名>上层文件夹名
      dirs: ['src/hooks', 'src/router', 'src/network', 'src/utils', 'src/pinia'],
    })
  ],
  base: './',
  css: {

  },
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@utils': resolve(__dirname, 'src/utils'),
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
