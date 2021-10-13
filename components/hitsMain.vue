<template>
  <section class="w-2/3 flex flex-col items-center justify-center">
    <h2 class="capitalize text-3xl pt-10">{{ title }}</h2>
    <div class="w-full grid grid-cols-4 grid-rows-1 py-10 gap-5">
      <div class="flex flex-col justify-between items-center shadow-md px-2 py-7"
           v-for="(product,index) in products" :key="index">
        <picture>
          <source
            :data-srcset="`${product.img}?resize&size=260&format=webp`"
            type="image/webp"
          >
          <source
            :data-srcset="`${product.img}?resize&size=260`"
          >
          <img
            :data-src="`${product.img}?resize&size=260&format=webp`"
            type="image/webp"
            class="lazyload"
            loading="lazy"
          >
        </picture>
        <p class="py-5 text-center">{{ product.title }}</p>
        <div class="w-full flex flex-row justify-center items-center">
          <p class="px-5 text-xl font-bold"
             :class="product.hasOwnProperty('oldPrice')?'line-through':''">{{ product.price }}
            <font-awesome-icon
              class="text-lg"
              :icon="['fas', 'ruble-sign']"
            />
          </p>
          <p class="pr-5 text-xl font-bold text-red-600"
             v-if="product.hasOwnProperty('oldPrice')">
            {{ product['oldPrice'] }}
            <font-awesome-icon
              class="text-lg"
              :icon="['fas', 'ruble-sign']"
            />
          </p>
          <button
            class="h-8 bg-blue-400 text-white rounded mx-3 text-md
            flex justify-center items-center uppercase px-5">
            <font-awesome-icon
              :icon="['fas', 'shopping-basket']"
            />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HitsMain',
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>
