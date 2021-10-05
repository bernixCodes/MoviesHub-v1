import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NowPlaying from '@/views/NowPlaying.vue'
import UpComing from '@/views/UpComing.vue'
import TopRated from '@/views/TopRated.vue'
import Login from '@/views/Login.vue'
import SignUp from '@/views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/now-playing',
    name: 'NowPlaying',
    component: NowPlaying
  },
  {
    path: '/upcoming-movies',
    name: 'UpComing',
    component: UpComing
  },
  {
    path: '/top-rated',
    name: 'TopRated',
    component: TopRated
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
