<template>
  <section class="gallery-preview section" data-reveal>
    <div class="container gallery-preview__inner">
      <div class="gallery-preview__header">
        <p class="gallery-preview__eyebrow">The glow gallery</p>
        <h2>Soft, natural color for every occasion.</h2>
      </div>

      <div class="gallery-preview__grid">
        <div
          v-for="(img, index) in images"
          :key="index"
          class="gallery-preview__image"
          :data-reveal="true"
          :data-reveal-delay="(index % 3) + 1"
        >
          <img :src="img" alt="Gallery image" />
        </div>
      </div>

      <RouterLink to="/gallery" class="gallery-preview__link">
        View Gallery
      </RouterLink>
    </div>
  </section>
</template>

<script setup>
import img1 from '@/assets/images/gallery_uniform_1.png'
import img2 from '@/assets/images/gallery_uniform_2.png'
import img3 from '@/assets/images/gallery_uniform_3.png'
import img4 from '@/assets/images/gallery_uniform_4 (1).png'
import img5 from '@/assets/images/gallery_uniform_5.png'
import img6 from '@/assets/images/gallery_uniform_6.png'

import './GalleryPreview.scss'

const images = [img1, img2, img3, img4, img5, img6]
</script>