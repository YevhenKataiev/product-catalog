<template>
  <div>
    <h4>
      {{ type }}
    </h4>
    <div class="input-block">
      <input type="number" name="low limit" v-model="filter.top" /> -
      <input type="number" name="high limit" v-model="filter.bot" />
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
  })
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
