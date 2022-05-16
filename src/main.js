const { createApp } = Vue;
const { createPinia } = Pinia;
import { router } from "./router/index.js";

const app = createApp({
  template: "<router-view />",
});

axios.defaults.baseURL = "/api/views/";

console.log(axios.defaults);

app.use(router);
app.use(createPinia());
app.mount("#app");
