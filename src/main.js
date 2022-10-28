import Vue from 'vue'
import App from './App.vue'
//以下為專案配置
// bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import BootstrapVue from 'bootstrap-vue'
//icon
import {
  faHome,
  faUser,
  faUserPlus,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);
//VueCompositionAPI
import VueCompositionAPI from "@vue/composition-api";

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueCompositionAPI)

new Vue({
  render: h => h(App),
}).$mount('#app')
