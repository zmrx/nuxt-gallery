<template>
  <div>
    <button @click="get">
      test
    </button>
    <img :src="url">
  </div>
</template>

<script>
export default {
  data () {
    return {
      url: null
    }
  },
  async fetch () {
    await this.$axios.$get('https://api.waifu.pics/sfw/neko').then((res) => { this.url = res.url })
  },
  fetchOnServer: true,
  methods: {
    get () {
      this.$axios.$get('https://api.waifu.pics/sfw/neko').then((res) => { this.url = res.url })
    }
  }
}
</script>

<style scoped>
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
</style>
