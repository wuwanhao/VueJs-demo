import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router"

import axios from "axios"
Vue.prototype.axios = axios;

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(ElementUI);


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
