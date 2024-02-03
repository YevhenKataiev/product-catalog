<template>
  <div class="filter-block">
    <h3 class="block-title">
      Filters
    </h3>
    <div class="filter-continer">
      <category-filter :category-list="categoryList" />
      <div v-for="item in integerOptionList" :key="item">
        <numerical-filter :type="item" />
      </div>
      <div v-for="item in booleanOptionList" :key="item">
        <boolean-filter />
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
import NumericalFilter from './NumericalFilter'
import CategoryFilter from './CategoryFilter'
import BooleanFilter from './BooleanFilter.vue'
import { categoryList, integerOptionList, booleanOptionList } from '@/utils'

export default {
  components: { CategoryFilter, NumericalFilter, BooleanFilter },
  data: () => ({
    categoryList,
    integerOptionList,
    booleanOptionList
  })
}
</script>

<style scoped>
.filter-block {
  display: flex;
  justify-content: flex-start;
  border: 1px solid black;
  border-radius: 15px;
  flex-direction: column;
  align-items: center;
}
.filter-block ul {
  text-decoration: none;
}
.block-title {
  padding: 1em;
}
</style>
