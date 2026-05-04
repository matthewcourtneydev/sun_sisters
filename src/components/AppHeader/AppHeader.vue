<template>
  <header class="site-header">
    <div class="container site-header__inner">
      <RouterLink to="/" class="site-header__logo">
        <img :src="logo" alt="Sun Sisters" />
      </RouterLink>

      <nav class="site-header__nav" aria-label="Main navigation">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/faq">FAQ</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
      </nav>

      <RouterLink to="/book" class="site-header__cta"> Book Now </RouterLink>

      <button
        class="site-header__menu-button"
        :class="{ 'is-open': isMenuOpen }"
        type="button"
        :aria-expanded="isMenuOpen"
        aria-label="Toggle navigation menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
    >
      <div v-show="isMenuOpen" class="site-header__mobile-panel">
        <nav class="site-header__mobile-nav" aria-label="Mobile navigation">
          <RouterLink to="/" @click="closeMenu">Home</RouterLink>
          <RouterLink to="/about" @click="closeMenu">About</RouterLink>
          <RouterLink to="/services" @click="closeMenu">Services</RouterLink>
          <RouterLink to="/gallery" @click="closeMenu">Gallery</RouterLink>
          <RouterLink to="/faq" @click="closeMenu">FAQ</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink
            to="/book"
            class="site-header__mobile-cta"
            @click="closeMenu"
          >
            Book Now
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from "vue";
import "./AppHeader.scss";
import logo from "@/assets/logos/wordmark-final.png";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const beforeEnter = (el) => {
  el.style.height = "0";
  el.style.opacity = "0";
};

const enter = (el) => {
  el.style.transition =
    "height 0.38s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.25s ease";
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = "1";
};

const afterEnter = (el) => {
  el.style.height = "auto";
};

const beforeLeave = (el) => {
  el.style.height = `${el.scrollHeight}px`;
  el.style.opacity = "1";
};

const leave = (el) => {
  el.offsetHeight;
  el.style.transition =
    "height 0.42s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.28s ease";
  el.style.height = "0";
  el.style.opacity = "0";
};
</script>
