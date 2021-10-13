<template>
  <section class="flex justify-between items-center">
    <div class="flex flex-col">
      <div class="grid grid-rows-2 grid-cols-3">
        <p class="uppercase">видео</p>
        <p class="uppercase">онлайн игры</p>
        <p class="uppercase">карта сайта</p>
        <p class="uppercase">Куки</p>
        <p class="uppercase">Оферта</p>
        <p class="uppercase">Политика конфиденциальности</p>
      </div>
    </div>
    <p>2015-2021 © Bondibon</p>
    <div class="flex">
      <font-awesome-icon
        :icon="['fab', 'facebook']"
      />
      <font-awesome-icon
        :icon="['fab', 'instagram']"
      />
      <font-awesome-icon
        :icon="['fab', 'vk']"
      />
      <font-awesome-icon
        :icon="['fab', 'youtube']"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'FooterMain',
};
</script>
