import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Contato from '@/views/Contato.vue'
import Cursos from '@/views/Cursos.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: Home
  },
  {
    path: '/contato',
    name: 'contato',
    component: Contato
  },
  {
    path: '/cursos',
    name: 'cursos',
    component: Cursos
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
