<template>
  <header class="header">
    <div class="header__logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="header__box">
      <div @click="selectPage(1)" class="header__item">
        Список фильмов
      </div>
      <div @click="selectPage(2)" class="header__item">
        Список режиссеров
      </div>
      <div @click="selectPage(3)" class="header__item">
        Добавить режиссера
      </div>
      <div @click="selectPage(4)" class="header__item">
        Добавить фильм
      </div>
      <div @click="selectPage(5)" class="header__item">
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