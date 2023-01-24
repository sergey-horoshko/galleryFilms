import { createApp } from "vue";
import App from "./App.vue";
import VueAwesomePaginate from "vue-awesome-paginate";
import "./scss/index.scss";

const app = createApp(App);
app.use(VueAwesomePaginate);
app.mount("#app");
