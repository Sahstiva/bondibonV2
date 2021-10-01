<template>
  <section class="pb-2 flex w-2/3 h-24 items-center justify-around">
    <div class="flex flex-col items-center">
      <picture>
        <source
          srcset="~/assets/images/bb_logo.png"
        >
        <img src="~/assets/images/bb_logo.png" width="205" height="57">
      </picture>
      <p class="text-xs font-bold">Развивающие игры и игрушки</p>
    </div>
    <div class="flex flex-col items-center font-normal">
      <p class="text-xs">Заказать звонок</p>
      <p class="text-sm">8 (800) 550-05-28</p>
      <p class="text-xs">Каждый день с Вами! с 9:00 до 21:00</p>
    </div>
    <div>
      <input type="text" placeholder="Поиск по каталогу..."
             class="h-10 w-96 border rounded-md border-blue-400">
    </div>
    <div
      class="text-3xl w-80 grid grid-cols-4 grid-rows-icons
       justify-items-center items-center">
      <font-awesome-icon
        :icon="['fas', 'sign-in-alt']"
      />
      <font-awesome-icon
        :icon="['fas', 'align-right']"
      />
      <font-awesome-icon
        :icon="['far', 'heart']"
      />
      <font-awesome-icon
        :icon="['fas', 'shopping-basket']"
      />
      <p class="text-xs leading-3">войти</p>
      <p class="text-xs leading-3">сравнить</p>
      <p class="text-xs leading-3">избранное</p>
      <p class="text-xs leading-3">корзина</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeaderMain',
};
</script>
