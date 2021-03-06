import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import '../src/assets/style/style.scss';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/style/hamburger.scss';

Vue.use(VueRouter);

const router = new VueRouter({
      routes
  });

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
