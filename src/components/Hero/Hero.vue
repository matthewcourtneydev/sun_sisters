<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__content">
        <span class="hero__sparkle">✦</span>

        <h1 class="hero__title">
          A Flawless Glow,<br />
          Wherever You Are.
        </h1>

        <p class="hero__text">
          Custom airbrush tans delivered to you in Charlotte, NC and surrounding
          areas. Sister owned. Detail driven. Always natural.
        </p>

        <RouterLink to="/book" class="hero__cta">
          Book Your Tan
        </RouterLink>
      </div>

      <div class="hero__media">
        <img
          class="hero__image"
          src="@/assets/images/sisters_header.png"
          alt="Two women with a natural sun-kissed glow"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import './Hero.scss'
</script>