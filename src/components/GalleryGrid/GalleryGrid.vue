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
          @click="openLightbox(item)"
        >
          <span>{{ item.category }}</span>
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

        <div class="gallery-lightbox__image">
          <span>{{ selectedItem.category }}</span>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import './GalleryGrid.scss'

const filters = ['All', 'Spray Tans', 'Bridal', 'Group Events', 'Before & After']

const activeFilter = ref('All')
const selectedItem = ref(null)

const galleryItems = [
  { id: 1, category: 'Spray Tans' },
  { id: 2, category: 'Bridal' },
  { id: 3, category: 'Group Events' },
  { id: 4, category: 'Before & After' },
  { id: 5, category: 'Spray Tans' },
  { id: 6, category: 'Bridal' },
  { id: 7, category: 'Group Events' },
  { id: 8, category: 'Before & After' },
  { id: 9, category: 'Spray Tans' },
  { id: 10, category: 'Bridal' },
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