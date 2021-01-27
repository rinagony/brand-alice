import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router/router.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/scss/styles.scss'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(Vuelidate)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
