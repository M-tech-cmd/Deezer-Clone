import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistView from '../views/ArtistView.vue'

// eslint-disable-next-line no-unused-vars
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/podcasts',
      component: HomeView
    },
    {
      path: '/artist',
      component: ArtistView
    },
    {
      path: '/favourite',
      component: HomeView
    },
  ]
})
