import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

const id = localStorage.getItem('user_id');
console.log(id)


new Vue({
  vuetify,
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
