import Vue from 'vue'

import BootstrapVue from 'bootstrap-vue' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css' 
Vue.use(BootstrapVue)


import App from './App.vue'
import router from './router'
import store from './store' 


Vue.config.productionTip = process.env.NODE_ENV === 'production' 

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app') 
