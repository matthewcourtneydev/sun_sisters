<template>
  <section class="gallery-grid">
    <div class="container">
      <div class="gallery-grid__filters" data-reveal>
        <button
          v-for="filter in filters"
          :key="filter"
          type="button"
          :class="{ 'is-active': activeFilter === filter }"
          @click="activeFilter = filter"
        >
          {{ filter }}
        </button>
      </div>

      <TransitionGroup name="gallery-fade" tag="div" class="gallery-grid__items">
        <button
          v-for="item in filteredItems"
          :key="item.id"
          type="button"
          class="gallery-grid__item"
          :style="{ backgroundImage: `url(${item.image})` }"
          @click="openLightbox(item)"
        >
        </button>
      </TransitionGroup>
    </div>

    <Transition name="lightbox">
      <div
        v-if="selectedItem"
        class="gallery-lightbox"
        role="dialog"
        aria-modal="true"
        @click.self="closeLightbox"
      >
        <button
          type="button"
          class="gallery-lightbox__close"
          aria-label="Close gallery preview"
          @click="closeLightbox"
        >
          ×
        </button>

        <div
          class="gallery-lightbox__image"
          :style="{ backgroundImage: `url(${selectedItem.image})` }"
        >
          <span>{{ selectedItem.category }}</span>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import './GalleryGrid.scss'

import sprayTan1 from '@/assets/images/spray_tan_1.png'
import sprayTan2 from '@/assets/images/spray_tan_2.png'
import sprayTan3 from '@/assets/images/spray_tan_3.png'

import bridal1 from '@/assets/images/bridal_1.png'
import bridal2 from '@/assets/images/bridal_2.png'
import bridal3 from '@/assets/images/bridal_3.png'

import group1 from '@/assets/images/group_1.png'
import group2 from '@/assets/images/group_2.png'
import group3 from '@/assets/images/group_3.png'

import beforeAfter1 from '@/assets/images/before_after_1.png'
import beforeAfter2 from '@/assets/images/before_after_2.png'

const filters = ['All', 'Spray Tans', 'Bridal', 'Group Events', 'Before & After']

const activeFilter = ref('All')
const selectedItem = ref(null)

const galleryItems = [
  {
    id: 1,
    category: 'Spray Tans',
    image: sprayTan1,
  },
  {
    id: 2,
    category: 'Bridal',
    image: bridal1,
  },
  {
    id: 3,
    category: 'Group Events',
    image: group1,
  },
  {
    id: 4,
    category: 'Before & After',
    image: beforeAfter1,
  },
  {
    id: 5,
    category: 'Spray Tans',
    image: sprayTan2,
  },
  {
    id: 6,
    category: 'Bridal',
    image: bridal2,
  },
  {
    id: 7,
    category: 'Group Events',
    image: group2,
  },
  {
    id: 8,
    category: 'Before & After',
    image: beforeAfter2,
  },
  {
    id: 9,
    category: 'Spray Tans',
    image: sprayTan3,
  },
  {
    id: 10,
    category: 'Bridal',
    image: bridal3,
  },
  {
    id: 11,
    category: 'Group Events',
    image: group3,
  },
]

const filteredItems = computed(() => {
  if (activeFilter.value === 'All') return galleryItems
  return galleryItems.filter((item) => item.category === activeFilter.value)
})

const openLightbox = (item) => {
  selectedItem.value = item
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedItem.value = null
  document.body.style.overflow = ''
}
</script>