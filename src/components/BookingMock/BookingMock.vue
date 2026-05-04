<template>
  <section class="booking-mock section">
    <div class="container">
      <div class="booking-mock__shell">
        <div class="booking-mock__progress">
          <span :class="{ active: step === 1 }">1. Details</span>
          <div></div>
          <span :class="{ active: step === 2 }">2. Payment</span>
        </div>

        <transition name="booking-step" mode="out-in">
          <!-- STEP 1 -->
          <div v-if="step === 1" key="booking" class="booking-mock__panel">
            <div class="booking-mock__header">
              <p class="booking-mock__eyebrow">Booking Request</p>
              <h2>Book Your Appointment</h2>
              <p>Select your service, preferred date, and time.</p>
            </div>

            <div class="booking-step">
              <h3>Choose Service</h3>

              <div class="booking-options">
                <button
                  v-for="service in services"
                  :key="service.name"
                  type="button"
                  :class="{ active: selectedService?.name === service.name }"
                  @click="selectedService = service"
                >
                  <span>{{ service.name }}</span>
                  <small>{{ service.price }}</small>
                </button>
              </div>
            </div>

            <div class="booking-step">
              <h3>Select Date</h3>
              <input type="date" v-model="selectedDate" />
            </div>

            <div class="booking-step">
              <h3>Select Time</h3>

              <div class="booking-times">
                <button
                  v-for="time in times"
                  :key="time"
                  type="button"
                  :class="{ active: selectedTime === time }"
                  @click="selectedTime = time"
                >
                  {{ time }}
                </button>
              </div>
            </div>

            <div class="booking-step">
              <h3>Your Info</h3>
              <input v-model="name" placeholder="Full Name" />
              <input v-model="email" placeholder="Email Address" />
              <input v-model="phone" placeholder="Phone Number" />
            </div>

            <button
              type="button"
              class="booking-submit"
              :disabled="!isValid"
              @click="step = 2"
            >
              Continue to Deposit
            </button>
          </div>

          <!-- STEP 2 -->
          <div v-else key="payment" class="booking-mock__panel payment-mock">
            <div class="booking-mock__header">
              <p class="booking-mock__eyebrow">Secure Checkout</p>
              <h2>Secure Your Appointment</h2>
              <p>This is a mock payment screen for preview only.</p>
            </div>

            <div class="payment-summary">
              <div>
                <span>Service</span>
                <strong>{{ selectedService?.name }}</strong>
              </div>

              <div>
                <span>Date / Time</span>
                <strong>{{ selectedDate }} at {{ selectedTime }}</strong>
              </div>

              <div class="payment-summary__total">
                <span>Deposit Due</span>
                <strong>$50</strong>
              </div>
            </div>

            <div class="payment-form">
              <label>
                Card Number
                <input placeholder="4242 4242 4242 4242" />
              </label>

              <div class="payment-form__row">
                <label>
                  Expiration
                  <input placeholder="MM / YY" />
                </label>

                <label>
                  CVC
                  <input placeholder="123" />
                </label>
              </div>

              <label>
                Name on Card
                <input placeholder="Full Name" />
              </label>
            </div>

            <button
              type="button"
              class="booking-submit"
              :class="{ processing: isProcessing }"
              @click="handleSubmit"
            >
              <span v-if="!isProcessing">Pay Deposit & Confirm</span>
              <span v-else>Processing...</span>
            </button>

            <button type="button" class="booking-back" @click="step = 1">
              ← Back to details
            </button>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import './BookingMock.scss'

const step = ref(1)
const isProcessing = ref(false)

const services = [
  { name: 'Signature Spray Tan', price: 'From $65' },
  { name: 'Bridal Glow', price: 'From $85' },
  { name: 'Group Event', price: 'Custom' },
  { name: 'Add-On', price: 'From $15' },
]

const times = ['10:00 AM', '11:30 AM', '1:00 PM', '3:00 PM', '5:30 PM']

const selectedService = ref(null)
const selectedDate = ref('')
const selectedTime = ref(null)

const name = ref('')
const email = ref('')
const phone = ref('')

const isValid = computed(
  () =>
    selectedService.value &&
    selectedDate.value &&
    selectedTime.value &&
    name.value &&
    email.value
)

const handleSubmit = () => {
  isProcessing.value = true

  setTimeout(() => {
    isProcessing.value = false
    alert('Appointment confirmed. Mock payment complete.')
  }, 900)
}
</script>