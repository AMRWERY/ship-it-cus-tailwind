import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//vuex
import store from "./stores/index";

//formkit
import { plugin, defaultConfig } from "@formkit/vue";

//animate
import "animate.css";

// vue-awesome-paginate
import VueAwesomePaginate from "vue-awesome-paginate";
import "vue-awesome-paginate/dist/style.css";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(plugin, defaultConfig)
  .use(VueAwesomePaginate)
  .mount("#app");
