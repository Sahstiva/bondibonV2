<template>
  <div class=" w-full flex flex-col items-center">
    <slider-main />
    <sections-main />
    <hits-main :products="hits" title="хиты продаж"/>
    <pros-main />
    <series-main />
    <hits-main :products="news" title="Новинки"/>
  </div>
</template>

<script>
export default {
  async asyncData({ store }) {
    await store.dispatch('products/getProducts');
    await store.dispatch('series/getSeries');
  },
  computed: {
    hits() {
      return this.$store.getters['products/productsHit'];
    },
    news() {
      return this.$store.getters['products/productsNew'];
    },
  },
};
</script>
