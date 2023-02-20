import { createStore } from "vuex";

export default createStore({
	state: {
		films: [],
		filmsID: ["tt0241527", "tt0295297", "tt0304141", "tt0330373"],
		producers: [],
		producersID: ["tt0241527", "tt0304141", "tt0330373"],
	},

	/* Синхронные функции */
	mutations: {
		delete_film(state, id) {
			state.films = state.films.filter((item) => item.imdbID !== id);
		},

		add_film(state, film) {
			state.films.push(JSON.parse(JSON.stringify(film)));
		},

		delete_producer(state, id) {
			state.producers = state.producers.filter(
				(item) => item.imdbID !== id
			);
		},

		add_producer(state, producer) {
			state.producers.push(JSON.parse(JSON.stringify(producer)));
		},
	},

	/* Асинхронные функции */
	actions: {
		/* Получение фильмов */
		getFilms(state) {
			if (state.state.films.length < 1) {
				state.state.filmsID.forEach((item) => {
					fetch(
						`http://www.omdbapi.com/?i=${item}&apikey=${window.key}`
					)
						.then((result) => {
							return result.json();
						})
						.then((result) => {
							if (result.hasOwnProperty("imdbID")) {
								state.state.films.push(result);
							} else {
								alert(
									"Ошибка сервера, обратитесь к администратору сайта"
								);
							}
						});
				});
			}
		},

		/* Добавление фильма */
		addFilm({ commit }, film) {
			commit("add_film", film);
		},

		/* Удаление фильма */
		deleteFilm({ commit }, id) {
			commit("delete_film", id);
		},

		/* Получение режиссеров */
		getProducers(state) {
			if (state.state.producers.length < 1) {
				state.state.producersID.forEach((item) => {
					fetch(
						`http://www.omdbapi.com/?i=${item}&apikey=${window.key}`
					)
						.then((result) => {
							return result.json();
						})
						.then((result) => {
							if (result.hasOwnProperty("imdbID")) {
								state.state.producers.push(result);
							} else {
								alert(
									"Ошибка сервера, обратитесь к администратору сайта"
								);
							}
						});
				});
			}
		},

		/* Добавление продюсера */
		addProducer({ commit }, producer) {
			commit("add_producer", producer);
		},

		/* Удаление продюсера */
		deleteProducer({ commit }, id) {
			commit("delete_producer", id);
		},
	},
	getters: {
		totalFilms(state) {
			if (state.films.length > 0) {
				return state.films.length;
			}
		},
		totalProducers(state) {
			if (state.producers.length > 0) {
				return state.producers.length;
			}
		},
	},
	modules: {},
});
