<template>
  <section class="services-cta section">
    <div class="container services-cta__inner">

      <!-- Image -->
      <div class="services-cta__image" data-reveal></div>

      <!-- Content -->
      <div class="services-cta__content" data-reveal data-reveal-delay="1">
        <h2>Ready for your glow?</h2>

        <p>
          Let’s create your perfect, natural-looking tan.
        </p>

        <RouterLink to="/book" class="services-cta__button">
          Book Your Tan
        </RouterLink>
      </div>

    </div>
  </section>
</template>

<script setup>
import './ServicesCTA.scss'
</script>