import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//vuex
import store from './stores/index'

//formkit
import { plugin, defaultConfig } from '@formkit/vue'

const app = createApp(App)

app.use(router)
app.use(store)

app.use(plugin, defaultConfig).mount('#app')
