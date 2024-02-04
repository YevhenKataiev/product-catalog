<template>
  <div>
    <button class="back-btn" @click="$router.back()">
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

<style scoped>
.back-btn {
  background-color: #0D9276;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  position: absolute;
  font-size: 16px;
  width: 100px;
  color: #FFF6E9;
  border-radius: 5px;
}
</style>
