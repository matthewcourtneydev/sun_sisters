<template>
  <section class="book-services">
    <div class="container">

      <!-- SECTION HEADER -->
      <div class="book-services__header" data-reveal>
        <span class="divider"></span>
        <h2>Our Services</h2>
        <span class="divider"></span>
      </div>

      <!-- CARDS -->
      <div class="book-services__grid" data-reveal data-reveal-delay="1">
        <article
          v-for="service in services"
          :key="service.title"
          class="service-card"
        >
          <div class="service-card__image"></div>

          <div class="service-card__body">
            <h3>{{ service.title }}</h3>
            <p>{{ service.desc }}</p>
            <span class="service-card__price">{{ service.price }}</span>
          </div>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import './BookServices.scss'

const services = [
  {
    title: 'Spray Tans',
    desc: 'A custom glow that looks like you, only better.',
    price: 'FROM $45',
  },
  {
    title: 'Bridal Tans',
    desc: 'Look flawless for your big day.',
    price: 'FROM $55',
  },
  {
    title: 'Group Tans',
    desc: 'Perfect for girls trips, events & more.',
    price: 'FROM $40',
  },
  {
    title: 'Add-Ons',
    desc: 'Enhance your glow with premium add-ons.',
    price: 'FROM $10',
  },
]
</script>