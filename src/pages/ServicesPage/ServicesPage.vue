<template>
  <main class="services-page">
    <ServicesHero />
    <ServicesGrid />
    <ValueProps />
    <ServicesCTA />
    <FinalCTA />
  </main>
</template>

<script setup>
import ServicesHero from '@/components/ServicesHero/ServicesHero.vue'
import ServicesGrid from '@/components/ServicesGrid/ServicesGrid.vue'
import ValueProps from '@/components/ValueProps/ValueProps.vue'
import ServicesCTA from '@/components/ServicesCTA/ServicesCTA.vue'
import FinalCTA from '@/components/FinalCTA/FinalCTA.vue'
import './ServicesPage.scss'
</script>