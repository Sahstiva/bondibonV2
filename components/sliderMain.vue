<template>
  <section class="h-full" :class="screenWidth > 1920 ? 'w-2/3' : 'w-full'">
  <swiper ref="swiperMain" class="swiper" :options="swiperOption">
    <swiper-slide v-for="(image,index) in sliderImages" :key="index">
      <picture>
        <source
          :srcset="require(`~/assets/images/${image}?resize&size=1920&format=webp`)"
          type="image/webp"
        >
        <source
          :srcset="require(`~/assets/images/${image}?resize&size=1920`)"
        >
        <img :src="require(`~/assets/images/${image}?webp`)"
             type="image/webp"
             class="lazyload"
             loading="lazy"
        >
      </picture>
    </swiper-slide>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import '~/assets/style/swiper.scss';
import '~/assets/style/navigation.scss';

export default {
  name: 'sliderMain',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      sliderImages: [
        'slider_image_1.jpeg',
        'slider_image_2.jpeg',
        'slider_image_3.jpeg',
        'slider_image_4.jpeg',
        'slider_image_5.jpeg',
      ],
      swiperOption: {
        mousewheel: true,
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    };
  },
  computed: {
    screenWidth() {
      this.$store.dispatch('screen/getScreen');
      return this.$store.getters['screen/screen'];
    },
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.screenWidth);
  },
};
</script>

<style scoped>

</style>
