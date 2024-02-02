<template>
  <div>
    <div class="title">
      {{ currentProduct.name }}
    </div>
    <div class="photo">
      <img
        :src="currentProduct.imgURL"
        alt="product img"
      >
    </div>
    <div class="description">
      <ul>
        <li v-for="(value, key) in productDescription" :key="key">
          {{ key }} - {{ value }}
        </li>
      </ul>
    </div>
    <div class="price">
      Price ${{ currentProduct.price }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('products', ['getProductById']),
    currentProduct () {
      return this.getProductById(this.$route.params.id)
    },
    productDescription() {
      const pd = {}
      for (const [key, value] of Object.entries(this.currentProduct)) {
        if (!['name', 'imgURL', 'price'].includes(key)) {
          pd[`${key}`] = value
        }
      }
      return pd
    }
  }
}
</script>

<style>

</style>
