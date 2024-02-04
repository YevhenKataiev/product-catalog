<template>
  <div class="prod-card">
    <div class="title">
      {{ product.name }}
    </div>
    <div class="photo">
      <img
        :src="product.imgURL"
        alt="product img"
      >
    </div>
    <div class="description">
      <ul>
        <li v-for="(value, key) in productDescription" :key="key">
          {{ key }} - {{ value }}
        </li>
      </ul>
    </div>
    <div class="price">
      Price ${{ product.price }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    productDescription() {
      const pd = {}
      for (const [key, value] of Object.entries(this.product)) {
        if (!['name', 'imgURL', 'price'].includes(key)) {
          pd[`${key}`] = value
        }
      }
      return pd
    }
  }
}
</script>

<style scoped>
.prod-card {
  min-width: 200px;
  min-height: 450px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.title {
  padding: 0.5em;
  font: 1em sans-serif;
  font-weight: 600;
}
.photo {
  border: 1px solid;
  border-radius: 15px;
  width: 250px;
  height: 250px;
}
</style>
