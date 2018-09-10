// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import jQuery from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faPlus, faBook, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee, faPlus, faBook, faMinus)
Vue.component('font-awesome-icon', FontAwesomeIcon)
let Bootstrap = require('bootstrap')
global.jQuery = jQuery

Vue.config.productionTip = false
Vue.use(Bootstrap)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
