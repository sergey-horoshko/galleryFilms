import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	linkActiveClass: "link__active",
	scrollBehavior() {
		return { top: 0, left: 0 };
	},
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("../components/pages/ListFilms.vue"),
		},
		/* Именованные маршруты */
		{
			path: "/producer",
			name: "producer",
			/* Динамическая подгрузка SFC */
			component: () => import("../components/pages/ListProducers.vue"),
		},
		{
			path: "/add-producer",
			name: "add-producer",
			component: () => import("../components/pages/AddProducer.vue"),
		},
		{
			path: "/add-film",
			name: "add-film",
			component: () => import("../components/pages/AddFilm.vue"),
		},
		{
			path: "/search",
			name: "search",
			component: () => import("../components/pages/Search.vue"),
		},
		/* В конце списка - 404 */
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: () => import("../components/pages/notFound.vue"),
		},
	],
});

export default router;
