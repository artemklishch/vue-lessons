import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import VueResource from "vue-resource";

Vue.use(VueResource);

new Vue({
  router,
  el: "#app1",
  data: {},
  render: h => h(App)
});
