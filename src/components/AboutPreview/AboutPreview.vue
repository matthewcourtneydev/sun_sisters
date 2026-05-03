<template>
  <section class="about-preview section" data-reveal>
    <div class="container about-preview__inner">
      <div class="about-preview__media">
        <div class="about-preview__image">
          <img :src="sistersHome" alt="Sun Sisters founders" />
        </div>
      </div>

      <div class="about-preview__content">
        <p class="about-preview__eyebrow">Meet the sisters</p>

        <h2>A luxury glow experience with a personal touch.</h2>

        <p>
          Sun Sisters was created to bring warm, natural-looking spray tans
          directly to clients throughout Charlotte. Every appointment is
          designed to feel easy, comfortable, and customized to you.
        </p>

        <RouterLink to="/about" class="about-preview__link">
          Learn More
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import sistersHome from "@/assets/images/sisters_home.png";
import "./AboutPreview.scss";
</script>
