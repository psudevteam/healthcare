const { createApp } = Vue;
import { router } from "./router/index.js";

const app = createApp({});

app.use(router);
app.mount("#app");
