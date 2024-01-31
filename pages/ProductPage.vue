<template>
  <div>
    <button @click="$router.back()">
      Back
    </button>
    <product-detailed-card :product="product" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductDetailedCard from '~/components/ProductDetailedCard.vue'

export default {
  components: { ProductDetailedCard },
  data: () => ({
    product: {}
  }),
  computed: {
    ...mapGetters('products', ['getProductById']),
    currentId () {
      return this.$route.params.id
    }
  },
  async created() {
    this.product = await this.getProductById(this.currentId)
  }
}
</script>

<style>

</style>
