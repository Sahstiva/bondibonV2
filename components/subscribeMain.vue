<template>
  <section class="w-full h-32 bg-blue-400 flex justify-center items-center">
    <div class="flex flex-col items-center justify-between">
      <label class="text-lg text-center text-white" >Подписаться на рассылку</label>
      <input class="h-10 rounded-md w-96 my-2 mx-5" type="text" placeholder="E-mail">
      <p class="text-xs text-center text-white w-80" >Нажимая кнопку «Подписаться»,
        вы соглашаетесь с политикой конфиденциальности и условиями оферты</p>
    </div>
    <button
      class="mx-5 h-10 rounded-2xl w-24 text-white text-xs text-center border">
      Подписаться
    </button>
  </section>
</template>

<script>
export default {
  name: 'SubscribeMain',
};
</script>

<style scoped>

</style>
