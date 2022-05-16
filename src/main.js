const { createApp } = Vue;
const { createPinia } = Pinia;
import { router } from "./router/index.js";

const app = createApp({
  template: "<router-view />",
});

app.use(router);
app.use(createPinia());
app.mount("#app");
