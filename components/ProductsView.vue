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
import { isEmpty, filter } from 'lodash'
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard
  },
  data: () => ({
    currentFilter: {}
  }),
  computed: {
    ...mapState('products', ['productsList']),
    currentProductsList() {
      return filter(this.productsList, { ...this.currentFilter })
    }
  },
  watch: {
    '$route.query'(value) {
      const query = this.$route.query
      if (!isEmpty(query)) {
        this.currentFilter = { ...this.currentFilter, ...query }
      } else {
        this.currentFilter = {}
      }
    }
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
