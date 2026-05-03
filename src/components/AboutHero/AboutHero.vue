<template>
  <section class="about-hero">
    <div class="container about-hero__inner">

      <!-- Left content -->
      <div class="about-hero__content">
        <h1>About Sun Sisters</h1>

        <span class="hero__sparkle">✦</span>

        <p>
          We’re more than just a tan. We bring a luxury, mobile beauty experience
          designed to make you feel confident in your skin.
        </p>
      </div>

      <!-- Right image -->
      <div
        class="about-hero__image"
        :style="{ backgroundImage: `url(${aboutImage})` }"
      ></div>

    </div>
  </section>
</template>

<script setup>
import './AboutHero.scss'
import aboutImage from '@/assets/images/about_top_image.png'
</script>