import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import VueCookie from 'vue-cookie'
import locales from './i18n'
import moment from 'moment'
import jquery from 'jquery'
import fullCalendar from 'vue-fullcalendar'
import VueSession from 'vue-session'
import VueScroll from 'vue-scroll'
import nzh from 'nzh/cn'
import spectra from 'spectra'
import config from './config'
import publicFunction from './public'
import message from './assets/plugin/message'

import 'font-awesome/css/font-awesome.min.css'
import './style/app/app.scss'
import App from './App.vue'

Vue.use(VueI18n)
Vue.component('full-calendar', fullCalendar)
Vue.use(VueCookie)
Vue.use(VueSession)
Vue.use(VueScroll)
Object.defineProperty(Vue.prototype, '$moment', { value: moment })
Object.defineProperty(Vue.prototype, '$nzh', { value: nzh })
Object.defineProperty(Vue.prototype, '$message', { value: message })
Object.defineProperty(Vue.prototype, '$jquery', { value: jquery })
Object.defineProperty(Vue.prototype, '$spectra', { value: spectra })

Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})

window.moment = moment
window.config = config
window.publicFunction = publicFunction

Vue.config.lang = 'zh-cn'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
