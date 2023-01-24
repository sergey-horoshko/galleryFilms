<template>
  <section class="films">
    <h1>Ваш список фильмов</h1>
    <spinner :load="loaded"></spinner>
    <div class="films__content">
      <div v-for="film in films.collection" :key="film.imdbID" class="film">
        <div class="film__delete" :title="film.imdbID" @click="deleteFilm(film.imdbID)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path
              d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
          </svg>
        </div>
        <img :src="checkImg(film.Poster)" alt="Постер">
        <span class="film__title"> {{ film.Title }} </span>
        <span class="film__genre"> {{ film.Genre }} </span>
        <span class="film__director"> {{ film.Director }} </span>
        <span class="film__year"> {{ film.Year }} </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import spinner from "@/components/ui/spinner.vue"

const props = defineProps({
  film: {
    type: Object,
    required: false,
    default: {}
  }
});

const films = reactive({
  collection: []
});
const filmsID = ['tt0241527', 'tt0295297', 'tt0304141', 'tt0330373']
const loaded = ref(false)

onMounted(() => {
  loadFilms()
}) 

const loadFilms = () => {
  filmsID.forEach((item) => {
   fetch(`http://www.omdbapi.com/?i=${item}&apikey=${window.key}`)
      .then((result) => {
        return result.json()
      })
      .then((result) => {
        if (result.hasOwnProperty('imdbID')) {
          loaded.value = true
          films.collection.push(result)
        } else {
          loaded.value = false
          alert('Ошибка сервера, обратитесь к администратору сайта')
        }
      })
  })
}

const checkImg = (src) => {
  if (src === 'N/A' || src.indexOf('https')) {
    return 'https://xn--90aha1bhcc.xn--p1ai/img/placeholder.png'
  } else {
    return src
  }
}

const deleteFilm = (id) => {
  films.collection.map((item, index) => {
    if (item.imdbID === id) {
      films.collection.splice(index, 1)
    }
  })
}

watch(() => props.film, () => {
  if (props.film.hasOwnProperty('imdbID')) {
    checkImg(props.film.Poster)
    films.collection.push(props.film);
  }
});
</script>