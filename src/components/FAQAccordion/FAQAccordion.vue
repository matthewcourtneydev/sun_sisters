<template>
  <section class="faq-accordion">
    <div class="container faq-accordion__inner">

      <!-- IMAGE -->
      <div
        class="faq-accordion__image"
        data-reveal
        :style="{ backgroundImage: `url(${faqImage})` }"
      ></div>

      <!-- FAQ LIST -->
      <div class="faq-accordion__list" data-reveal data-reveal-delay="1">
        <article
          v-for="(item, index) in faqs"
          :key="item.question"
          class="faq-item"
          :class="{ 'is-open': openIndex === index }"
        >
          <button type="button" @click="toggleFAQ(index)">
            <span>{{ item.question }}</span>

            <span
              class="faq-item__icon"
              :class="{ 'is-open': openIndex === index }"
              aria-hidden="true"
            ></span>
          </button>

          <transition name="faq">
            <div v-if="openIndex === index" class="faq-item__answer">
              <p>{{ item.answer }}</p>
            </div>
          </transition>
        </article>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import './FAQAccordion.scss'

// 🔥 import your image
import faqImage from '@/assets/images/FAQ_image.png'

const openIndex = ref(1)

const toggleFAQ = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'What is a spray tan?',
    answer:
      'A spray tan is a customized sunless tanning application that gives your skin a natural-looking glow without UV exposure.',
  },
  {
    question: 'How long does a spray tan last?',
    answer:
      'With proper care, your tan can last 6–10 days. Moisturizing daily and avoiding exfoliating too soon will help extend your glow.',
  },
  {
    question: 'How should I prepare for my appointment?',
    answer:
      'Exfoliate and shave at least 24 hours before your appointment. Arrive with clean skin and avoid lotions, oils, makeup, and deodorant.',
  },
  {
    question: 'What should I wear to my appointment?',
    answer:
      'Wear whatever you feel comfortable being sprayed in. After your tan, loose dark clothing is best to avoid rubbing or transfer.',
  },
  {
    question: 'How long does a session take?',
    answer:
      'Most appointments take around 20–30 minutes, including setup, consultation, application, and drying time.',
  },
  {
    question: 'Is spray tanning safe?',
    answer:
      'Yes. Spray tanning is a sunless option that avoids UV exposure. We use premium products and guide you through aftercare.',
  },
  {
    question: 'Can I shower after my appointment?',
    answer:
      'You’ll receive rinse timing based on the solution used. Avoid sweating, water, and tight clothing until your first rinse.',
  },
  {
    question: 'Do you offer group or bridal packages?',
    answer:
      'Yes. We offer options for bridal parties, events, girls trips, and group appointments. Contact us for custom package details.',
  },
]
</script>