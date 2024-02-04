<template>
  <div class="filter-container">
    <input v-model="checked" type="checkbox" :id="type" :name="type" />
    <label :for="type">{{ type }}</label>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    checked: true
  }),
  created() {
    if (this.$route.query[this.type]) {
      this.checked = this.$route.query[this.type]
    }
  },
  watch: {
    checked: {
      handler: function(value) {
        this.$router.push({
          path: this.$route.path,
          query: {
            ...this.$route.query,
            [`${this.type}`]: value
          }
        }).catch((error) => {
          if (error.name !== 'NavigationDuplicated') {
            throw error
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.filter-container {
  padding: 1em;
}
</style>
