import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import AboutPage from '../pages/AboutPage/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage/ServicesPage.vue'
import GalleryPage from '../pages/GalleryPage/GalleryPage.vue'
import FAQPage from '../pages/FAQPage/FAQPage.vue'
import BookPage from '../pages/BookPage/BookPage.vue'

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesPage,
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: GalleryPage,
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQPage,
  },
  {
    path: '/book',
    name: 'Book',
    component: BookPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router