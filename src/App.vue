<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<script setup>
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from './components/AppHeader/AppHeader.vue'
import AppFooter from './components/AppFooter/AppFooter.vue'
import { setupScrollReveal } from './utils/scrollReveal'

const route = useRoute()

const runRevealSetup = async () => {
  await nextTick()
  requestAnimationFrame(() => {
    setupScrollReveal()
  })
}

onMounted(runRevealSetup)

watch(
  () => route.fullPath,
  runRevealSetup
)
</script>