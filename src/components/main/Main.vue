<template>
  <main class="main">
    <div v-show="props.tabActive === 1">
      <ListFilms :film="newFilm.collection"></ListFilms>
    </div>
    <div v-show="props.tabActive === 2">
      <ListProducers :producer="newProducer.collection"></ListProducers>
    </div>
    <div v-show="props.tabActive === 3">
      <AddProducer @addProducer="addProducer"></AddProducer>
    </div>
    <div v-show="props.tabActive === 4">
      <AddFilm @addFilm="addFilm"></AddFilm>
    </div>
    <div v-show="props.tabActive === 5">
      <Search></Search>
    </div>
  </main>
</template>

<script setup>
import { reactive } from "vue";
import ListFilms from "@/components/pages/ListFilms.vue";
import ListProducers from "@/components/pages/ListProducers.vue";
import AddProducer from "@/components/pages/AddProducer.vue";
import AddFilm from "@/components/pages/AddFilm.vue";
import Search from "@/components/pages/Search.vue";

const newFilm = reactive({
  collection: {},
});

const addFilm = (film) => {
  newFilm.collection = film;
};

const newProducer = reactive({
  collection: {},
});

const addProducer = (producer) => {
  newProducer.collection = producer;
};

const props = defineProps({
  tabActive: {
    type: Number,
    default: 1,
  },
});
</script>
