import Vue from 'vue';
import Router from 'vue-router';
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}

Vue.use(Router);
export default new Router({
    mode: 'history',
	base: process.env.BASE_URL,
    routes: [
		{
			path: '/',
			redirect: '/Home'
		},
        {
            path: '/Home',
            name: 'home',
            component: () => import('@/pages/Home/index.vue'),
            meta: {
                title: '首页',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/lazyLoadAction',
            name: 'lazyLoadAction',
            component: () => import('@/pages/LazyLoadAction/index.vue'),
            meta: {
                title: '模拟懒加载图片事件',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/lifeCycle',
            name: 'lifeCycle',
            component: () => import('@/pages/LifeCycle/index.vue'),
            meta: {
                title: '生命周期demo',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/sassDemo',
            name: 'sassDemo',
            component: () => import('@/pages/SassDemo/index.vue'),
            meta: {
                title: '生命周期demo',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/throttle',
            name: 'throttle',
            component: () => import('@/pages/Throttle/index.vue'),
            meta: {
                title: '抖动',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/elementUi',
            name: 'elementUi',
            component: () => import('@/pages/ElementUI/index.vue'),
            meta: {
                title: 'ElementUI',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/threeJs',
            name: 'threeJs',
            component: () => import('@/pages/ThreeJs/index.vue'),
            meta: {
                title: 'ThreeJs',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/threeDModel',
            name: 'threeDModel',
            component: () => import('@/pages/ThreeDModel/index.vue'),
            meta: {
                title: 'ThreeDModel',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/CssDemo',
            name: 'CssDemo',
            component: () => import('@/pages/CssDemo/index.vue'),
            meta: {
                title: 'CssDemo',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '*',
            redirect: '/404',
            component: () => import('@/pages/NotFound/index.vue'),
            hidden: true
        }
    ]
});