import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import VueAwesomePaginate from "vue-awesome-paginate";
import "./scss/index.scss";

const app = createApp(App);
app.use(store);
app.use(router);
app.use(VueAwesomePaginate);
app.mount("#app");
