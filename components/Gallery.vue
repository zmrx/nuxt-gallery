<template>
  <div class="gallery">
    <GalleryCategory
      v-for="({ title, sections }) in categoryList"
      :key="title"
      :category="title"
      :sections="sections"
    />
  </div>
</template>

<script>
import GalleryCategory from './GalleryCategory.vue'
export default {
  components: {
    GalleryCategory
  },
  computed: {
    categoryList () {
      return this.$store.getters.getCategories
    }
  }
}
</script>
