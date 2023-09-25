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

//vue-i18n
import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import ar from "./locales/ar.json";
import du from "./locales/du.json";
import it from "./locales/it.json";
import fr from "./locales/fr.json";
import ge from "./locales/ge.json";

const app = createApp(App);

const i18n = createI18n({
  locale: sessionStorage.getItem("currentLang") ?? "en",
  legacy: false,
  messages: {
    en,
    ar,
    du,
    it,
    fr,
    ge,
  },
});

app
  .use(router)
  .use(store)
  .use(plugin, defaultConfig)
  .use(VueAwesomePaginate)
  .use(i18n)
  .mount("#app");
