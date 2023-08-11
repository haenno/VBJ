// Import our custom CSS
import "./scss/styles.scss";

import "./js/color-modes.js";
import "./js/own.js";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
