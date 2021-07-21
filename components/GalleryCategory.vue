<template>
  <div class="category">
    <h2 class="title">
      {{ category }}
    </h2>
    <div class="list">
      <Section
        v-for="section in sections"
        :key="section"
        :category="category"
        :section="section"
      />
    </div>
  </div>
</template>

<script>
import Section from './Section'

export default {
  components: {
    Section
  },
  props: {
    category: {
      type: String,
      required: true
    },
    sections: {
      type: Array,
      default: () => []
    }
  }
}
</script>
