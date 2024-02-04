<template>
  <div class="filter-container">
    <h4>
      {{ type }}
    </h4>
    <div class="input-block">
      <input v-model="filter.bot" type="number" name="low limit" /> -
      <input v-model="filter.top" type="number" name="high limit" />
    </div>
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
    filter: {
      top: '',
      bot: ''
    }
  }),
  created() {
    if (this.$route.query[this.type]) {
      const stringType = this.$route.query[this.type].split('-')
      this.filter.bot = stringType[0]
      this.filter.top = stringType[1]
    }
  },
  watch: {
    filter: {
      deep: true,
      handler: function(value) {
        let query = this.$route.query
        if (this.filter.top || this.filter.bot) {
          query = {
            ...query,
            [`${this.type}`]: `${this.filter.bot}-${this.filter.top}`
          }
        } else {
          delete query[`${this.type}`]
        }
        this.$router.push({
          path: this.$route.path,
          query
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
.input-block {
  display: flex;
}
.input-block input {
  width: 70px;
}
.filter-container {
  padding: 0.5em;
}
</style>
