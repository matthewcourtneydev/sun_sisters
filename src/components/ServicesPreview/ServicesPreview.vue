<template>
  <section class="services">
    <div class="container services__inner">
      <div class="services__header" data-reveal>
        <span class="services__line"></span>
        <h2>Our Services</h2>
        <span class="services__line"></span>
      </div>

      <div class="services__grid">
        <article class="service-card" data-reveal data-reveal-delay="1">
          <img class="service-card__image" :src="sprayImg" alt="Signature Spray Tan" />
          <h3>Signature Spray Tan</h3>
          <p>A natural, even glow customized to your skin tone.</p>
        </article>

        <article class="service-card" data-reveal data-reveal-delay="2">
          <img class="service-card__image" :src="bridalImg" alt="Bridal Glow" />
          <h3>Bridal Glow</h3>
          <p>Flawless color for your most important day.</p>
        </article>

        <article class="service-card" data-reveal data-reveal-delay="3">
          <img class="service-card__image" :src="groupImg" alt="Group Events" />
          <h3>Group Events</h3>
          <p>Perfect for parties, trips, and special occasions.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import sprayImg from '@/assets/images/spray_tan_home.png'
import bridalImg from '@/assets/images/bridal_glow_home.png'
import groupImg from '@/assets/images/group_events_home.png'
import './ServicesPreview.scss'
</script>