<template>
  <div class="ctlg-wrapper">
    <div
      v-for="product in currentProductsList"
      :key="product.id"
    >
      <nuxt-link :to="{ name: 'product', params: { id: product.id } }">
        <product-card :product="product" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('products', ['productsList']),
    currentProductsList() {
      return this.productsList
    }
  // ...mapGetters('products', ['getProductById'])
  }
}
</script>

<style scoped>
.ctlg-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  justify-items: center;
}
</style>
