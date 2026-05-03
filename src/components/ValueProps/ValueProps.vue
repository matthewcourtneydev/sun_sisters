<template>
  <section class="value-props">
    <div ref="scrollContainer" class="container value-props__grid" @scroll="handleScroll">
      <article class="value-props__item">
        <span class="value-props__icon">
          <svg viewBox="0 0 24 24"><path d="M4 16h16M7 16V9h10v7M9 9V7h6v2M8 19h.01M16 19h.01" /></svg>
        </span>
        <div class="value-props__item-content">
          <h3>Mobile Glow</h3>
          <p>Luxury spray tans brought directly to you.</p>
        </div>
      </article>

      <article class="value-props__item">
        <span class="value-props__icon">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" /><path d="M12 2v3M12 19v3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1l2.1-2.1M17 7l2.1-2.1" /></svg>
        </span>
        <div class="value-props__item-content">
          <h3>Custom Color</h3>
          <p>A natural finish tailored to your skin tone.</p>
        </div>
      </article>

      <article class="value-props__item">
        <span class="value-props__icon">
          <svg viewBox="0 0 24 24"><path d="M12 3s6 6.3 6 11a6 6 0 0 1-12 0c0-4.7 6-11 6-11z" /></svg>
        </span>
        <div class="value-props__item-content">
          <h3>Premium Products</h3>
          <p>High-quality formulas for a smooth, even fade.</p>
        </div>
      </article>

      <article class="value-props__item">
        <span class="value-props__icon">
          <svg viewBox="0 0 24 24"><path d="M12 20s-7-4.4-9-9a4.6 4.6 0 0 1 8-4.5L12 8l1-1.5a4.6 4.6 0 0 1 8 4.5c-2 4.6-9 9-9 9z" /></svg>
        </span>
        <div class="value-props__item-content">
          <h3>Sister Owned</h3>
          <p>A warm, personal experience from start to finish.</p>
        </div>
      </article>
    </div>

    <div class="value-props__dots" aria-hidden="true">
      <span
        v-for="index in 4"
        :key="index"
        :class="{ 'is-active': activeIndex === index - 1 }"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import './ValueProps.scss'

const scrollContainer = ref(null)
const activeIndex = ref(0)

const handleScroll = () => {
  const container = scrollContainer.value
  if (!container) return

  const itemWidth = container.scrollWidth / 4
  activeIndex.value = Math.round(container.scrollLeft / itemWidth)
}
</script>