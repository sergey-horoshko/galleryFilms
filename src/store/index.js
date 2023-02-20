import { createStore } from "vuex";

export default createStore({
	state: {
		films: {
			data: [],
			filmsID: ["tt0241527", "tt0295297", "tt0304141", "tt0330373"],
		},
		producers: {
			data: [],
			producersID: ["tt0241527", "tt0304141", "tt0330373"],
		},
	},

	/* Синхронные функции */
	mutations: {
		delete_film(state, id) {
			state.films.data = state.films.data.filter(
				(item) => item.imdbID !== id
			);
		},

		add_film(state, film) {
			state.films.data.push(JSON.parse(JSON.stringify(film)));
		},

		delete_producer(state, id) {
			state.producers.data = state.producers.data.filter(
				(item) => item.imdbID !== id
			);
		},

		add_producer(state, producer) {
			state.producers.data.push(JSON.parse(JSON.stringify(producer)));
		},
	},

	/* Асинхронные функции */
	actions: {
		/* Получение фильмов */
		getFilms(state) {
			if (state.state.films.data.length < 1) {
				state.state.films.filmsID.forEach((item) => {
					fetch(
						`http://www.omdbapi.com/?i=${item}&apikey=${window.key}`
					)
						.then((result) => {
							return result.json();
						})
						.then((result) => {
							if (result.hasOwnProperty("imdbID")) {
								state.state.films.data.push(result);
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
			if (state.state.producers.data.length < 1) {
				state.state.producers.producersID.forEach((item) => {
					fetch(
						`http://www.omdbapi.com/?i=${item}&apikey=${window.key}`
					)
						.then((result) => {
							return result.json();
						})
						.then((result) => {
							if (result.hasOwnProperty("imdbID")) {
								state.state.producers.data.push(result);
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
			if (state.films.data.length > 0) {
				return state.films.data.length;
			}
		},
		totalProducers(state) {
			if (state.producers.data.length > 0) {
				return state.producers.data.length;
			}
		},
	},
	modules: {},
});
