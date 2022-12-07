import Vue from 'vue';
import App from './App.vue';
//------------------------以下為專案配置------------
//先import 在引用
// bootstrap-vue
// https://bootstrap-vue.org/docs/components
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue';
// bootstrap
Vue.use(BootstrapVue)
//icon
import {faHome, faSignInAlt, faSignOutAlt, faUser, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
//icon
Vue.component('font-awesome-icon', FontAwesomeIcon);
library.add(faHome, faUser, faUserPlus, faSignInAlt, faSignOutAlt);

//VueCompositionAPI
// vue2.6: vite-plugin-vue2@2.6.14 + vue-template-compiler@2.6.14 + @vue/composition-api
//vue3 寫法全局配置 [ VueCompositionAPI,{reactive, watch, ref, onMounted} ]
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI)

//router
import { router } from './router';


//------------------------專案配置end------------
Vue.config.productionTip = false;
new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
