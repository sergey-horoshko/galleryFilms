<template>
  <section class="search">
    <h1>Поиск</h1>
    <div class="search__descr">
      Поиск только на английском и ограниченный функционал <a href="https://www.omdbapi.com/">api</a> не дает возможности сделать больше параметров для поиска
    </div>
    <div class="search__box">
      <div class="search__form">
        <label class="search__label">
          <span>Расширенный поиск</span>
          <input type="checkbox" v-model="extended">
        </label>
        <input class="search__input" type="text" v-model="query" placeholder="Введите фильм на английском">
        <input v-if="extended" class="search__input" type="text" v-model="year" maxlength="4" placeholder="Год фильма">
        <button class="search__btn" @click="search()">Найти</button>
      </div>
      <div v-if="totalResults > 0" class="search__content">
        <div v-for="film in films" :key="film.imdbID" class="card">
          <img :src="checkImg(film.Poster)" alt="Постер">
          <span class="card__title"> {{ film.Title }} </span>
          <span class="card__year"> {{ film.Year }} </span>
        </div>
      </div>
      <div v-if="empty" class="search__empty">
        К сожалению, ничего не найдено
      </div>
      <div v-if="totalResults > 10" class="search__pagination">
        <vue-awesome-paginate
          :total-items="totalResults"
          :items-per-page="10"
          :max-pages-shown="10"
          v-model="currentPage"
          :on-click="searchMore"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from "vue";

const query = ref('')
const films = ref()
const totalResults = ref(0)
const empty = ref(false)
const currentPage = ref(1)
const year = ref('')
const extended = ref(false)

const search = () => {
  fetch(`http://www.omdbapi.com/?s=${query.value}&y=${year.value}&page=${currentPage.value}&type=movie&apikey=${window.key}`)
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        if (result.hasOwnProperty('Search')) {
          empty.value = false
          films.value = result.Search
          totalResults.value = Number(result.totalResults)
        } else {
          films.value = []
          empty.value = true
        }
      })
}

const searchMore = () => {
  fetch(`http://www.omdbapi.com/?s=${query.value}&page=${currentPage.value}&type=movie&apikey=${window.key}`)
    .then((result) => {
      return result.json()
    })
    .then((result) => {
      films.value = 
      films.value = result.Search
    })
}

const checkImg = (src) => {
  if (src === 'N/A') {
    return 'https://xn--90aha1bhcc.xn--p1ai/img/placeholder.png'
  } else {
    return src
  }
}

</script>