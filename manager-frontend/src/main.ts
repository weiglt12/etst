import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css'
import './scss/materialize.scss'

Vue.use(VueMaterial);
Vue.config.productionTip = false;



export const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
