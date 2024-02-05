<template>
  <div class="ctlg-wrapper">
    <div
      v-for="product in currentProductsList"
      :key="product.id"
      class="card-wrapper"
    >
      <nuxt-link :to="{ name: 'product', params: { id: product.id } }">
        <product-card :product="product" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { isEmpty, filter, isNaN } from 'lodash'
import ProductCard from './ProductCard'
import { integerOptionList, booleanOptionList } from '@/utils'

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
      const f = this.currentFilter
      return filter(this.productsList, function(product) {
        if (isEmpty(f)) { return true }
        for (const key in f) {
          if (integerOptionList.includes(key)) {
            const range = f[key].split('-')
            const bot = isNaN(parseInt(range[0])) ? 0 : parseInt(range[0])
            const top = isNaN(parseInt(range[1])) ? Infinity : parseInt(range[1])
            if (product[key] < bot || product[key] > top) { return false }
          } else if (booleanOptionList.includes(key)) {
            const value = f[key] === 'true'
            if (value !== product[key]) { return false }
          } else if (f[key] !== product[key]) {
            return false
          }
        }
        return true
      })
    }
  },
  watch: {
    '$route.query'(value) {
      const query = this.$route.query
      this.currentFilter = {}
      if (!isEmpty(query)) {
        for (const [key, value] of Object.entries(query)) {
          this.currentFilter[key] = value
        }
      }
    }
  },
  created() {
    const query = this.$route.query
    if (!isEmpty(query)) {
      this.currentFilter = { ...this.currentFilter, ...query }
    }
  }
}
</script>

<style scoped>
.ctlg-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 0.5em;
  grid-row-gap: 0.5em;
  padding: 0 0.5em;
}
.card-wrapper {
  border: 1px solid;
  border-radius: 15px;
  height: 49vh;
}
</style>
