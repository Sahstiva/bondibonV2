<template>
  <section class="w-2/3 flex flex-row justify-between">
    <div class="flex flex-col justify-center" v-for="(hit,index) in hits" :key="index">
      <picture>
        <source
          :data-srcset="require(`~/assets/images/${hit.img}?resize&size=260&format=webp`)"
          type="image/webp"
        >
        <source
          :data-srcset="require(`~/assets/images/${hit.img}?resize&size=260`)"
        >
        <img
          :data-src="require(`~/assets/images/${hit.img}?resize&size=260&format=webp`)"
          type="image/webp"
          class="lazyload"
          loading="lazy"
        >
      </picture>
      <p class="py-5">{{ hit.title }}</p>
      <div class="flex flex-row justify-center">
        <div class="flex flex-col justify-start items-center px-4 text-xl font-bold">
          <p>{{ hit.price }}</p>
          <p v-if="hit.oldPrice">{{ hit.oldPrice }}</p>
        </div>
        <button
          class="w-24 h-6 bg-blue-400 text-white rounded mx-3 text-xs
          flex justify-center items-center uppercase">в корзину</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HitsMain',
  data() {
    return {
      hits: [
        {
          img: 'bb0352.png',
          title: 'Обучающая игра Цветовой код',
          price: 2300,
          oldPrice: null,
        },
        {
          img: 'bb0947.png',
          title: 'Игра-головоломка Застенчивый кролик',
          price: 1800,
          oldPrice: 3400,
        },
        {
          img: 'bb1046.png',
          title: 'Набор для опытов Микроскоп',
          price: 2800,
          oldPrice: null,
        },
        {
          img: 'kk0005.png',
          title: 'Кикиборд Kick`n`roll 3в1',
          price: 6200,
          oldPrice: null,
        },
      ],
    };
  },
};
</script>

<style scoped>

</style>
