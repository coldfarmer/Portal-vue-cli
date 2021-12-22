import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'
import router from './router'
import Router from 'vue-router'


Vue.use(Vuex)
Vue.config.productionTip = false

const routerPush = Router.prototype.push
Router.prototype.push = function push(location){
  return routerPush.call(this,location).catch(erroe=>erroe);
}


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
