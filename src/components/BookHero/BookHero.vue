<template>
  <section class="book-hero">
    <div class="container">
      <div class="book-hero__inner" data-reveal>
        <h1>Book Your Glow</h1>

        <span class="book-hero__star"></span>

        <p>
          We make booking easy. Choose your service and let’s get you glowing.
        </p>
      </div>

      <div class="book-hero__steps" data-reveal data-reveal-delay="1">
        <div class="step" v-for="(step, i) in steps" :key="i">

          <!-- TOP (ICON + LINES) -->
          <div class="step__top">
            <span
              class="step__line"
              :class="{ 'is-hidden': i === 0 }"
            ></span>

            <div
              class="step__icon"
              v-html="step.icon"
            ></div>

            <span
              class="step__line"
              :class="{ 'is-hidden': i === steps.length - 1 }"
            ></span>
          </div>

          <!-- NUMBER -->
          <div class="step__number">{{ i + 1 }}</div>

          <!-- TEXT -->
          <h3>{{ step.title }}</h3>
          <p>{{ step.text }}</p>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import './BookHero.scss'

const steps = [
  {
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5L12 3z"/></svg>`,
    title: 'Choose Your Service',
    text: 'Select the perfect tan for you.',
  },
  {
    icon: `<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="2"/><path d="M8 3v4M16 3v4M4 10h16"/></svg>`,
    title: 'Pick Your Date & Time',
    text: 'Choose a time that works for you.',
  },
  {
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></svg>`,
    title: 'Provide Your Info',
    text: 'Tell us a little about yourself.',
  },
  {
    icon: `<svg viewBox="0 0 24 24"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"/></svg>`,
    title: 'Confirm & Glow',
    text: 'You’re booked. Get ready to glow.',
  },
]
</script>