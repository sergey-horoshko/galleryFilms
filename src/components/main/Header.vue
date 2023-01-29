<template>
  <header class="header">
    <div class="header__logo">
      <img src="../../assets/img/logo.png" alt="">
    </div>
    <div class="header__box">
      <div class="header__item">
        <router-link to="/">
          Список фильмов
        </router-link>
      </div>
      <div class="header__item">
        <router-link :to="{ name: 'producer'}">
          Список режиссеров
        </router-link>
      </div>
      <div class="header__item">
        <router-link :to="{ name: 'add-producer' }">
          Добавить режиссера
        </router-link>
      </div>
      <div class="header__item">
        <router-link :to="{ name: 'add-film' }">
          Добавить фильм
        </router-link>
      </div>
      <div class="header__item" @click="go()">
        <a>
          Поиск
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const route = useRoute()

const go = () => {
  router.push({name: 'search'})
}

</script>