<template>
  <section class="services-grid">
    <div class="container">
      <div class="services-grid__items">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="services-card"
          data-reveal
          :data-reveal-delay="index + 1"
        >
          <div
            class="services-card__image"
            :style="{ backgroundImage: `url(${service.image})` }"
          ></div>

          <div class="services-card__content">
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>

            <RouterLink to="/book" class="services-card__link">
              Learn More
              <span aria-hidden="true">→</span>
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import './ServicesGrid.scss'

import img1 from '@/assets/images/services_card_1.png'
import img2 from '@/assets/images/services_card_2.png'
import img3 from '@/assets/images/services_card_3.png'
import img4 from '@/assets/images/services_card_4.png'

const services = [
  {
    title: 'Spray Tans',
    description: 'A custom glow that looks like you, only better.',
    image: img1,
  },
  {
    title: 'Bridal Tans',
    description: 'Look flawless for your big day.',
    image: img2,
  },
  {
    title: 'Group Tans',
    description: 'Perfect for girls trips, events & more.',
    image: img3,
  },
  {
    title: 'Add-Ons',
    description: 'Enhance your glow with premium add-ons.',
    image: img4,
  },
]
</script>