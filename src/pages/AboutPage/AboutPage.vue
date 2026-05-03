<template>
  <main class="about-page">
    <AboutHero />
    <ValueProps />
    <AboutStory />
    <AboutMission />
    <FinalCTA />
  </main>
</template>

<script setup>
import AboutHero from '@/components/AboutHero/AboutHero.vue'
import ValueProps from '@/components/ValueProps/ValueProps.vue'
import AboutStory from '@/components/AboutStory/AboutStory.vue'
import AboutMission from '@/components/AboutMission/AboutMission.vue'
import FinalCTA from '@/components/FinalCTA/FinalCTA.vue'
import './AboutPage.scss'
</script>