<template>
  <section class="w-2/3 flex flex-row justify-between pt-5">
    <div class="flex flex-col" v-for="(section, index) in sections" :key="index">
      <picture>
        <source
          :data-srcset="require(`~/assets/images/${section.img}?webp`)"
          type="image/webp"
        >
        <source
          :data-srcset="require(`~/assets/images/${section.img}`)"
        >
        <img :data-src="require(`~/assets/images/${section.img}?webp`)"
             type="image/webp"
             class="lazyload"
             loading="lazy"
        >
      </picture>
    <p class="w-40 text-sm text-center pt-2 capitalize">{{ section.title }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SectionsMain',
  data() {
    return {
      sections: [
        { img: 'sections-scooter.png', title: 'самокаты' },
        { img: 'sections-toys.png', title: 'игрушки' },
        { img: 'sections-art.png', title: 'творчество' },
        { img: 'sections-science.png', title: 'Робототехника, опыты и фокусы' },
        { img: 'sections-constructor.png', title: 'Конструирование и моделирование' },
        { img: 'sections-tablegames.png', title: 'Логические и настольные игры' },
        { img: 'sections-teachers.png', title: 'Полезно педагогам' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
