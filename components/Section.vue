<template>
  <nuxt-link :to="`/${category}/${section}`">
    <div class="item">
      <img :src="url" class="img">
      <span>{{ section }}</span>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      url: null
    }
  },
  async fetch () {
    await this.$axios.$get(`https://api.waifu.pics/${this.category}/${this.section}`).then((res) => { this.url = res.url })
  },
  fetchOnServer: true,
  methods: {
    get () {
      this.$axios.$get(`https://api.waifu.pics/${this.category}/${this.section}`).then((res) => { this.url = res.url })
    }
  }
}
</script>
