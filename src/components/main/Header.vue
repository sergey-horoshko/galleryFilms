<template>
  <header class="header">
    <div class="header__logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="header__box">
      <div class="header__item" @click="selectPage(1)">
        Список фильмов
      </div>
      <div class="header__item" @click="selectPage(2)">
        Список режиссеров
      </div>
      <div class="header__item" @click="selectPage(3)">
        Добавить режиссера
      </div>
      <div class="header__item" @click="selectPage(4)">
        Добавить фильм
      </div>
      <div class="header__item" @click="selectPage(5)">
        Поиск
      </div>
    </div>
  </header>
</template>

<script setup>
const emit = defineEmits()

const selectPage = (page) => {
  emit('selectPage', page)
}
</script>