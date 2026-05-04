<template>
  <section class="book-help">
    <div class="container">
      <div class="book-help__inner" data-reveal>
        <div class="book-help__image"   :style="{ backgroundImage: `url(${ctaImage})` }"></div>

        <div class="book-help__content">
          <h2>Not sure what to choose?</h2>
          <p>
            We’re happy to help you find the perfect service for your glow goals.
          </p>

          <RouterLink to="/contact" class="book-help__button">
            Contact Us
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ctaImage from '@/assets/images/book_cta.png'
import './BookHelpCTA.scss'
</script>