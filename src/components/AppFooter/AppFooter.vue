<template>
  <footer class="site-footer">

    <!-- TOP (LIGHT SECTION) -->
    <div class="container site-footer__top">

      <!-- BRAND / CONTACT -->
      <div class="site-footer__col site-footer__brand">
        <img
          src="@/assets/logos/primary-final.png"
          alt="Sun Sisters"
          class="site-footer__logo"
        />

        <p>Luxury mobile spray tanning in Charlotte, NC.</p>
        <p>Charlotte, NC 28211</p>
        <p>(704) 555-1234</p>
        <p>hello@sunsisters.com</p>

        <div class="site-footer__socials">
          <a href="#" class="site-footer__social-link" aria-label="Instagram">
            <svg class="site-footer__social-icon" viewBox="0 0 24 24">
              <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5a5 5 0 110 10 5 5 0 010-10zm6.5-.9a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
            </svg>
          </a>

          <a href="#" class="site-footer__social-link" aria-label="TikTok">
            <svg class="site-footer__social-icon" viewBox="0 0 24 24">
              <path d="M21 8.5a6.5 6.5 0 01-4-1.4v6.3a5.4 5.4 0 11-5.4-5.4c.4 0 .8 0 1.2.1v3a2.4 2.4 0 10 2.2 2.4V2h3a6.5 6.5 0 003 3.3v3.2z"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- EXPLORE -->
      <div class="site-footer__col">
        <h3>Explore</h3>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Gallery</a>
      </div>

      <!-- SERVICES -->
      <div class="site-footer__col">
        <h3>Services</h3>
        <a href="#">Spray Tans</a>
        <a href="#">Bridal Tans</a>
        <a href="#">Group Tans</a>
        <a href="#">Add-Ons</a>
      </div>

      <!-- SUPPORT -->
      <div class="site-footer__col">
        <h3>Support</h3>
        <a href="#">FAQ</a>
        <a href="#">Book Now</a>
        <a href="#">Contact</a>
      </div>

    </div>

    <!-- BOTTOM (DARK BAR) -->
    <div class="site-footer__bottom">
      <div class="container">
        <p>© 2026 Sun Sisters. All rights reserved.</p>
      </div>
    </div>

  </footer>
</template>

<script setup>
import './AppFooter.scss'
</script>