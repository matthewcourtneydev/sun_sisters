<template>
  <main class="home-page">
    <Hero />
    <ValueProps />
    <ServicesPreview />
    <AboutPreview />
    <Testimonials />
    <GalleryPreview />
    <FinalCTA />
  </main>
</template>

<script setup>
import Hero from '../../components/Hero/Hero.vue'
import ValueProps from '../../components/ValueProps/ValueProps.vue'
import ServicesPreview from '../../components/ServicesPreview/ServicesPreview.vue'
import AboutPreview from '../../components/AboutPreview/AboutPreview.vue'
import Testimonials from '../../components/Testimonials/Testimonials.vue'
import GalleryPreview from '../../components/GalleryPreview/GalleryPreview.vue'
import FinalCTA from '../../components/FinalCTA/FinalCTA.vue'
import './HomePage.scss'
</script>