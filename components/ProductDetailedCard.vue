<template>
  <div class="container" v-if="show">
    <div class="main">
      <div class="title">
        {{ currentProduct.name }}
      </div>
      <div class="photo">
        <img
          :src="currentProduct.imgURL"
          alt="product img"
        >
      </div>
    </div>
    <div class="side">
      <div class="price">
        Price ${{ currentProduct.price }}
      </div>
      <div class="description">
        <ul>
          <li v-for="(value, key) in productDescription" :key="key">
            {{ key }} - {{ value }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { isEmpty } from 'lodash'
export default {
  computed: {
    ...mapGetters('products', ['getProductById']),
    currentProduct () {
      return this.getProductById(parseInt(this.$route.params.id))
    },
    productDescription() {
      const pd = {}
      for (const [key, value] of Object.entries(this.currentProduct)) {
        if (!['name', 'imgURL', 'price'].includes(key)) {
          pd[`${key}`] = value
        }
      }
      return pd
    },
    show() {
      return !isEmpty(this.currentProduct)
    }
  },
  async created() {
    if (!this.show) {
      await this.fetchProductById(parseInt(this.$route.params.id))
    }
  },
  methods: {
    ...mapActions('products', ['fetchProductById'])
  }
}
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: 3fr 1fr;
  height: 100vh;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.side {
  margin: calc(48px + 2em) auto;
}
.title {
  height: 48px;
  padding: 15px 32px;
  font-size: 16px;
  font-weight: 600;
}
.photo {
  margin-top: 2em;
  border: 1px solid;
  border-radius: 15px;
  width: 500px;
  height: 500px;
  overflow: hidden;
  display: block;
}
img {
  display: block;
  object-fit: contain;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
.price {
  font-size: 26px;
  font-weight: 600;
}
.description {
  margin-top: 1em;
}
.description>ul>li {
  margin-top: 1em;
}
</style>
