<template>
  <div class="container">
    <filter-block />
    <products-view />
  </div>
</template>

<script>
// import { mapGetters, mapState } from 'vuex'
import ProductsView from '@/components/ProductsView'
import FilterBlock from '@/components/FilterBlock'

export default {
  components: { ProductsView, FilterBlock }
}
</script>
<style scoped>
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100vh;
}
</style>
