// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Components from '@/components/index'
import './stylus/main.styl'

// Import store
import store from './store'

import VueSocketIO from 'vue-socket.io'

Vue.use(Vuetify)

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://192.168.0.199:8000'
}))

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})
Vue.prototype.$eventHub = new Vue()  // Global event bus

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  router,
  store,
  template: '<App/>'
})
