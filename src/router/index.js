const files = import.meta.glob(['../components/*.vue','../components/*.jsx'])
const views = Object.keys(files).map(i=>{
  return {
    path: i.replace(/..\/components\//,'').replace(/.vue/,'').replace(/.jsx/,''),
    name: i.replace(/..\/components\//,'').replace(/.vue/,'').replace(/.jsx/,''),
    component: files[i]
  }
})
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
    children: views
  },

  {
    path:'/:pathParams(.*)*',
    name:'404',
    component:()=> import('../views/NotFound.vue')
  }
]
const router = createRouter({
  routes,
  history: createWebHashHistory()
})
export default (app) => {
  app.use(router)
}
