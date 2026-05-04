<template>
  <main class="book-page">
    <BookHero />
    <BookServices />
    <BookHelpCTA />
    <BookingMock />
  </main>
</template>

<script setup>
import BookHero from '@/components/BookHero/BookHero.vue'
import BookServices from '@/components/BookServices/BookServices.vue'
import BookHelpCTA from '@/components/BookHelpCTA/BookHelpCTA.vue'
import BookingMock from '@/components/BookingMock/BookingMock.vue'
import './BookPage.scss'
</script>