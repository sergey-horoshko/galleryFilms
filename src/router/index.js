import { createRouter, createWebHistory } from "vue-router";
import listFilm from "@/components/pages/listFilms.vue";

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
			component: listFilm,
		},
		/* Именованные маршруты */
		{
			path: "/producer",
			name: "producer",
			/* Динамическая подгрузка SFC */
			component: () => import("@/components/pages/listProducers.vue"),
		},
		{
			path: "/add-producer",
			name: "add-producer",
			component: () => import("@/components/pages/addProducer.vue"),
		},
		{
			path: "/add-film",
			name: "add-film",
			component: () => import("@/components/pages/addFilm.vue"),
		},
		{
			path: "/search",
			name: "search",
			component: () => import("@/components/pages/search.vue"),
		},
		/* В конце списка - 404 */
		{
			path: "/:pathMatch(.*)*",
			name: "not-found",
			component: () => import("@/components/pages/notFound.vue"),
		},
	],
});

export default router;
