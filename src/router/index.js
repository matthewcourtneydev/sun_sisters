import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage/HomePage.vue'
import AboutPage from '../pages/AboutPage/AboutPage.vue'
import ServicesPage from '../pages/ServicesPage/ServicesPage.vue'
import GalleryPage from '../pages/GalleryPage/GalleryPage.vue'
import FAQPage from '../pages/FAQPage/FAQPage.vue'
import BookPage from '../pages/BookPage/BookPage.vue'
import ContactPage from '../pages/ContactPage/ContactPage.vue'

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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    // back/forward browser navigation
    if (savedPosition) {
      return savedPosition
    }

    // always scroll to top on new page
    return { top: 0 }
  },
})

export default router