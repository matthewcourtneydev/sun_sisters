<template>
  <main class="contact-page">
    <section class="contact-page__hero section">
      <div class="container contact-page__hero-inner" data-reveal>
        <p class="contact-page__eyebrow">Get in Touch</p>
        <h1>Contact Sun Sisters</h1>
        <p>
          Have a question about services, group events, bridal tans, or booking?
          Send us a message and we’ll get back to you soon.
        </p>
      </div>
    </section>

    <section class="contact-page__content section">
      <div class="container contact-page__grid">
        <form class="contact-form" data-reveal @submit.prevent="handleSubmit">
          <label>
            Name
            <input v-model="form.name" type="text" placeholder="Full name" />
          </label>

          <label>
            Email
            <input v-model="form.email" type="email" placeholder="Email address" />
          </label>

          <label>
            Phone
            <input v-model="form.phone" type="tel" placeholder="Phone number" />
          </label>

          <label>
            What can we help with?
            <select v-model="form.topic">
              <option value="">Select one</option>
              <option>Booking question</option>
              <option>Bridal tan</option>
              <option>Group event</option>
              <option>General question</option>
            </select>
          </label>

          <label>
            Message
            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Tell us a little more..."
            ></textarea>
          </label>

          <button type="submit">Send Message</button>
        </form>

        <aside class="contact-card" data-reveal data-reveal-delay="1">
          <h2>Contact Details</h2>

          <div>
            <span>Email</span>
            <p>hello@sunsisters.com</p>
          </div>

          <div>
            <span>Phone</span>
            <p>(704) 555-1234</p>
          </div>

          <div>
            <span>Location</span>
            <p>Charlotte, NC 28211</p>
          </div>

          <div>
            <span>Hours</span>
            <p>By appointment only</p>
          </div>

          <RouterLink to="/book">Book Your Tan</RouterLink>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import './ContactPage.scss'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
})

const handleSubmit = () => {
  console.log({ ...form })
  alert('Message submitted. This is a mock form for now.')
}
</script>