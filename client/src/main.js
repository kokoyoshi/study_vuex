import Vue from 'vue';
import store from './store/index';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import App from './App.vue';

import Search from './pages/Search.vue';
import Favorite from './pages/Favorite.vue';
import GlobalHeader from './components/GlobalHeader.vue';

const routes = [
  { path: '/', component: Search },
  { path: '/Favorite', component: Favorite }
];
const router = new VueRouter({
    mode: 'history',
    base: '/',
    routes: routes,
    scrollBehavior: function(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    }
});

Vue.component('global-header', GlobalHeader);

new Vue({
  store,
  el: '#app',
  router: router,
  render: h => h(App)
});
