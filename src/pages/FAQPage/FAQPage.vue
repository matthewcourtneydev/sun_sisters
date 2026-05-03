<template>
  <main class="faq-page">
    <FAQHero />
    <FAQAccordion />
    <ValueProps />
    <FinalCTA />
  </main>
</template>

<script setup>
import FAQHero from '@/components/FAQHero/FAQHero.vue'
import FAQAccordion from '@/components/FAQAccordion/FAQAccordion.vue'
import ValueProps from '@/components/ValueProps/ValueProps.vue'
import FinalCTA from '@/components/FinalCTA/FinalCTA.vue'

import './FAQPage.scss'
</script>