<template>
  <div>
    <div class="filter-title">
      {{ name }}
    </div>
    <div class="filter-wrapper">
      <div
        v-for="filter in filterData"
        :key="filter"
        :class="{ 'active' : filter === activeTab }"
        class="filter-tab"
        role="button"
        @click="updateFilter(filter)"
      >
        <span>
          {{ filter }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    filterData: {
      type: Array,
      default: () => []
    },
    activeTab: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateFilter(filter) {
      const type = this.name.toLowerCase()
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          [type.toLowerCase()]: filter
        }
      })
      this.$emit('filterUpdate', { filter, type })
    }
  }
}
</script>

<style scoped>
.filter-wrapper {
  display: flex;
  padding: 1em 0;
}
.filter-title {
  font-size: 1.5rem;
}
.filter-tab {
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1rem 0.4rem;
  cursor: pointer;
}
.filter-wrapper div {
  background-color: rgba(0, 0, 0, 0.03);
}
.filter-wrapper div:hover {
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}
.filter-tab.active {
  background-color: rgb(255, 255, 255);
}
</style>
