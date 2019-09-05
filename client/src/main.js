import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import * as VueGoogleMaps from 'vue2-google-maps'
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEnvelope, faDog, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'

library.add(faUserSecret)
library.add(faEnvelope)
library.add(faDog)
library.add(faUserCircle)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(axios)

let apiKey = 'AIzaSyD75yziFepXfsT_zyNAuaAPSxUNVLlYK-w'

Vue.use(VueGoogleMaps, {
  load: {
    key: apiKey,
    libraries: 'places' // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    /// / If you want to set the version, you can do so:
    // v: '3.26',
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
