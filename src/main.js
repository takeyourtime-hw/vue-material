import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Axios from 'axios'
import vueAxios from 'vue-axios'
Vue.prototype.$http=Axios
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
Vue.use(vueAxios,Axios)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App) 
})
