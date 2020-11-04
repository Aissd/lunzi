import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import store from './store/index.js';
import ElementUI from 'element-ui';
import axios from 'axios';
Vue.prototype.$http = axios;
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css';
import './assets/index.scss';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(ElementUI);

// 导入插件
import request from '@/api/request';
// 在原型上扩展,这样不用在每个页面都导入request
Vue.prototype.request = request;

router.beforeEach((to, from, next) => {
	if (to.meta.title) {
		document.title = to.meta.title;
	}
	next();
});

console.log(process, process.env.NODE_ENV);
console.log(process.env.VUE_APP_API);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
