import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router/index.js";
// vant组件库
import { Button } from "vant";
import "vant/lib/index.css";

const app = createApp(App);
app.use(router);
app.use(Button);
app.mount("#app");
