<template>
  <div class=" w-full flex flex-col items-center">
    <slider-main />
    <sections-main />
    <hits-main />
    <pros-main />
    <series-main />
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('products/getProducts');
    await store.dispatch('series/getSeries');
  },
};
</script>
