<template>
  <div>
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
</style>
