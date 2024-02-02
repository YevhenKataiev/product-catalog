<template>
  <div>
    <button @click="$router.back()">
      Back
    </button>
    <product-detailed-card />
  </div>
</template>

<script>
import ProductDetailedCard from '~/components/ProductDetailedCard.vue'

export default {
  components: { ProductDetailedCard }
}
</script>

<style>

</style>
