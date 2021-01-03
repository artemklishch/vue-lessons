import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin  } from "bootstrap-vue";
import vuetify from './plugins/vuetify';

Vue.use(BootstrapVue);
Vue.use(IconsPlugin );

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
