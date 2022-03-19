import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/playground',
    name: 'playground',
    component: () => import('../views/PlayGround.vue'),
    children: [
      {
        path: '1',
        name: '1',
        component: () => import('../components/1.vue')
      },
      {
        path: '2',
        name: '2',
        component: () => import('../components/2.vue')
      },
      {
        path: '3',
        name: '3',
        component: () => import('../components/3.vue')
      }
    ]
  },
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default (app) => {
  app.use(router)
}
