<template>
  <main class="gallery-page">
    <GalleryHero />
    <GalleryGrid />
    <FinalCTA />
  </main>
</template>

<script setup>
import './GalleryPage.scss'
import GalleryHero from '@/components/GalleryHero/GalleryHero.vue'
import GalleryGrid from '@/components/GalleryGrid/GalleryGrid.vue'
import FinalCTA from '@/components/FinalCTA/FinalCTA.vue'
</script>