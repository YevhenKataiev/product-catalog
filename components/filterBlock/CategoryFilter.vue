<template>
  <div class="filter-container">
    <div class="filter-title">
      Category
    </div>
    <div class="filter-wrapper">
      <select v-model="selected" @change="updateFilter($event)">
        <option value="" key="all" selected>
          All
        </option>
        <option v-for="cat in categoryList" :value="cat" :key="cat">
          {{ cat }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import { categoryList } from '@/utils'
export default {
  data: () => ({
    categoryList,
    selected: ''
  }),
  created() {
    if (this.$route.query.category) {
      this.selected = this.$route.query.category
    }
  },
  methods: {
    updateFilter(e) {
      let query = { ...this.$route.query }
      if (e.target.value) {
        query = {
          ...query,
          category: e.target.value
        }
      } else {
        delete query.category
      }
      this.$router.push({
        path: this.$route.path,
        query
      })
    }
  }
}
</script>

<style scoped>
.filter-container {
  padding: 0.5em;
}
</style>
