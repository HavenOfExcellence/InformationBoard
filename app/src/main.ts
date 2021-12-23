import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import './index.css'
// @ts-ignore
import VueMarkdownIt from "vue3-markdown-it"

createApp(App).use(store).use(router).use(VueMarkdownIt).mount("#app");

