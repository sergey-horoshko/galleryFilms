<template>
  <section class="producers">
    <h1>Ваш список режиссеров - {{ count }}</h1>
    <div class="link">
      <router-link to="add-producer">
        Добавить режиссера
      </router-link>
    </div>
    <div class="producers__content">
      <div v-for="film in films" :key="film.imdbID" class="producer">
        <div class="producer__delete" :title="film.imdbID" @click="deleteProducer(film.imdbID)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <path
              d="M 25 2 C 12.309534 2 2 12.309534 2 25 C 2 37.690466 12.309534 48 25 48 C 37.690466 48 48 37.690466 48 25 C 48 12.309534 37.690466 2 25 2 z M 25 4 C 36.609534 4 46 13.390466 46 25 C 46 36.609534 36.609534 46 25 46 C 13.390466 46 4 36.609534 4 25 C 4 13.390466 13.390466 4 25 4 z M 32.990234 15.986328 A 1.0001 1.0001 0 0 0 32.292969 16.292969 L 25 23.585938 L 17.707031 16.292969 A 1.0001 1.0001 0 0 0 16.990234 15.990234 A 1.0001 1.0001 0 0 0 16.292969 17.707031 L 23.585938 25 L 16.292969 32.292969 A 1.0001 1.0001 0 1 0 17.707031 33.707031 L 25 26.414062 L 32.292969 33.707031 A 1.0001 1.0001 0 1 0 33.707031 32.292969 L 26.414062 25 L 33.707031 17.707031 A 1.0001 1.0001 0 0 0 32.990234 15.986328 z" />
          </svg>
        </div>
        <img :src="checkImg(film.Poster)" alt="Постер">
        <span class="producer__director"> {{ film.Director }} </span>
        <span class="producer__title"> {{ film.Title }} </span>
        <span class="producer__genre"> {{ film.Genre }} </span>
        <span class="producer__year"> {{ film.Year }} </span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useStore } from 'vuex'
import { onMounted, computed } from 'vue';

const store = useStore()

onMounted(() => {
  getProducers()
})

const films = computed(() => store.state.producers.data)
const count = computed(() => store.getters.totalProducers)
const getProducers = () => store.dispatch('getProducers')
const deleteProducer = (id) => store.dispatch('deleteProducer', id)

const checkImg = (src) => {
  if (src === 'N/A' || src.indexOf('https')) {
    return 'https://xn--90aha1bhcc.xn--p1ai/img/placeholder.png'
  } else {
    return src
  }
}
</script>