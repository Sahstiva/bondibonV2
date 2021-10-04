<template>
  <section class="flex w-2/3 flex-col items-center pb-10">
    <div class="flex w-full justify-between">
      <div class="flex flex-col items-center justify-between shadow-md p-5 "
           v-for="item in series" :key="item.id">
        <picture>
          <source
            :data-srcset="require(`~/assets/images/${item.img}?resize&size=256&format=webp`)"
            type="image/webp"
          >
          <source
            :data-srcset="require(`~/assets/images/${item.img}?resize&size=256`)"
          >
          <img
            :data-src="require(`~/assets/images/${item.img}?resize&size=256&format=webp`)"
            type="image/webp"
            class="lazyload w-64 h-64 rounded-full"
            loading="lazy"
          >
        </picture>
        <p class="text-xl py-5 uppercase text-center">{{ item.title }}</p>
        <p class="text-lg py-5 w-64 text-center">{{ item.description }}</p>
        <button
          class="w-32 h-8 bg-blue-400 text-xs text-white rounded mx-3 text-md
              flex justify-center items-center uppercase px-2">
          купить сейчас
        </button>
      </div>
    </div>
    <button
      class="w-32 h-8 bg-red-600 text-xs text-white rounded mx-3 text-md
            flex justify-center items-center uppercase px-2 mt-10">
      все серии
    </button>
  </section>
</template>

<script>
export default {
  name: 'SeriesMain',
  computed: {
    series() {
      return this.$store.getters['series/series'];
    },
  },
};
</script>

<style scoped>

</style>
