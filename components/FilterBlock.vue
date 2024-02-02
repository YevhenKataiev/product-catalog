<template>
  <div class="filter-block">
    <h3>
      Filters
    </h3>
    <ul>
      <li v-for="e in [1,2,3]" :key="e">
        filter {{ e }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.filter-block {
  display: flex;
  justify-content: flex-start;
  border-right: 1px solid black;
  flex-direction: column;
  align-items: center;
  border-right
  : 1px solid black;
}
.filter-block ul {
  text-decoration: none;
}
</style>
