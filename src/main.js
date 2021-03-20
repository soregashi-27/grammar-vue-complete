import Vue from 'vue';
import App from './App.vue';
import * as VeeValidate from 'vee-validate';
//これで解決。なぜ"* as"で解決するかは不明
//https://github.com/logaretm/vee-validate/issues/2234

Vue.use(VeeValidate);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
