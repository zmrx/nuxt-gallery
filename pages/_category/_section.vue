<template>
  <div class="category">
    <nuxt-link :to="'/'">
      <button class="btn">
        to main page
      </button>
    </nuxt-link>
    <hr>
    <h1 class="title">
      {{ section }}
    </h1>
    <div class="list">
      <div v-for="(url, index) in images" :key="index" class="item">
        <img :src="url" class="img">
      </div>
    </div>

    <button class="btn" @click="morePhotos">
      НУЖНО БОЛЬШЕ КАРТИНОК
    </button>
  </div>
</template>

<script>
export default {
  async asyncData ({ app, route, params, error, store, $axios }) {
    const data = await $axios.$post(`https://api.waifu.pics/many/${route.params.category}/${route.params.section}`, {
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body: '{"exclude":[]}'
    })
    return { images: data.files }
  },
  data () {
    return {
      images: []
    }
  },
  computed: {
    section () {
      return this.$route.params.section
    },
    category () {
      return this.$route.params.category
    }
  },
  methods: {
    morePhotos () {
      const url = `https://api.waifu.pics/many/${this.category}/${this.section}`
      const exclude = this.images
      this.$axios.post(url, {
        headers: {
          'content-type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify({ exclude })
      }).then((res) => {
        this.images.push(...res.data.files)
      })
    }
  }
}
</script>
