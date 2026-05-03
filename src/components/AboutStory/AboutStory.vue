<template>
  <section class="about-story section">
    <div class="container about-story__inner">
      
      <div
        class="about-story__image"
        data-reveal
        :style="{ backgroundImage: `url(${aboutImage})` }"
      ></div>

      <div class="about-story__content" data-reveal data-reveal-delay="1">
        <div class="about-story__heading">
          <h2>Our Story</h2>
          <span></span>
        </div>

        <p>
          Sun Sisters was founded in Charlotte, NC with a passion for enhancing
          natural beauty and creating a luxury experience that comes to you.
        </p>

        <p>
          We believe everyone deserves a flawless glow and a little extra
          confidence. That’s why we bring the glow to you — wherever you are.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
import './AboutStory.scss'
import aboutImage from '@/assets/images/about_section_image.png'
</script>