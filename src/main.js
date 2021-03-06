// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import popwin from './components/plugins/popwin/'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// Vue.use(popwin);
//import './../static/reset.css'
Vue.use(ElementUI);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
