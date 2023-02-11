<template>
  <section class="add">
    <h1 v-if="!add">Добавить режиссера</h1>
    <div v-if="!add" class="add__form">
      <label class="add__label" for="">
        <input v-model="film.Director" class="add__input -error" type="text" placeholder="Режиссер"
          @focus="error.errorDirector = false">
        <span v-if="error.errorDirector" class="add__error">Заполните поле</span>
      </label>
      <label class="add__label" for="">
        <input v-model="film.Title" class="add__input" type="text" placeholder="Название фильма"
          @focus="error.errorTitle = false">
        <span v-if="error.errorTitle" class="add__error">Заполните поле</span>
      </label>
      <label class="add__label" for="">
        <input v-model="film.Genre" class="add__input" type="text" placeholder="Жанр фильма"
          @focus="error.errorGenre = false">
        <span v-if="error.errorGenre" class="add__error">Заполните поле</span>
      </label>
      <label class="add__label" for="">
        <input v-model="film.Year" class="add__input" type="text" placeholder="Год фильма"
          @focus="error.errorYear = false">
        <span v-if="error.errorYear" class="add__error">Заполните поле</span>
      </label>
      <label class="add__label" for="">
        <input v-model="film.Poster" class="add__input" type="text" placeholder="Ссылка на картинку"
          @focus="error.errorPoster = false">
        <span v-if="error.errorPoster" class="add__error">Заполните поле</span>
      </label>
      <button class="add__btn" @click="addFilm"> Добавить</button>
    </div>
    <div v-else class="add__success">
      Режиссер успешно добавлен, перейдите в ваш список режиссеров.
      <button @click="addMore()" class="add__btn">Добавить еще</button>
    </div>
  </section>
</template>

<script setup>
import { useStore } from 'vuex'
import { reactive, ref, computed } from 'vue'

const store = useStore()
const add = ref(false)
const count = computed(() => store.getters.totalProducers)

const film = reactive({
  Title: '',
  Genre: '',
  Year: '',
  Director: '',
  Poster: '',
})

const error = reactive({
  errorTitle: false,
  errorGenre: false,
  errorYear: false,
  errorDirector: false,
  errorPoster: false,
})

const addFilm = () => {
  if (checkFilms()) {
    film.imdbID = ++count.value
    add.value = true
    store.dispatch('addProducer', film)
  }
}

const checkFilms = () => {
  if (film.Title.length <= 2) {
    error.errorTitle = true
  }
  if (film.Genre.length <= 2) {
    error.errorGenre = true
  }
  if (film.Year.length <= 3) {
    error.errorYear = true
  }
  if (film.Director.length <= 2) {
    error.errorDirector = true
  }
  if (film.Poster.length <= 2) {
    error.errorPoster = true
  }
  if (film.Title.length > 2 &&
    film.Genre.length > 2 &&
    film.Year.length > 3 &&
    film.Director.length > 2 &&
    film.Poster.length > 2) {
    return true
  }
}

const addMore = () => {
  reset()
  add.value = false
}

const reset = () => {
  film.Title = ''
  film.Genre = ''
  film.Year = ''
  film.Director = ''
  film.Poster = ''
}
</script>