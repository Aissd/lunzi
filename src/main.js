import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css';

import './assets/index.scss';

Vue.config.productionTip = false;
Vue.use(ElementUI);
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
	render: h => h(App),
}).$mount('#app')
