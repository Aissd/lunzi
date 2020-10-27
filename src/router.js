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
                title: 'sassDemo',
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
            path: '/MyPromise',
            name: 'MyPromise',
            component: () => import('@/pages/MyPromise/index.vue'),
            meta: {
                title: '手写promise',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/closeWindowTip',
            name: 'closeWindowTip',
            component: () => import('@/pages/CloseWindowTip/index.vue'),
            meta: {
                title: '关闭window询问',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/Directive',
            name: 'Directive',
            component: () => import('@/pages/Directive/index.vue'),
            meta: {
                title: 'vue-指令',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/BeforeAfter',
            name: 'BeforeAfter',
            component: () => import('@/pages/BeforeAfter/index.vue'),
            meta: {
                title: 'before&after动态赋值',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/EventModifiers',
            name: 'EventModifiers',
            component: () => import('@/pages/EventModifiers/index.vue'),
            meta: {
                title: '事件修饰符',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/VueExtend',
            name: 'VueExtend',
            component: () => import('@/pages/VueExtend/index.vue'),
            meta: {
                title: 'vue.extend封装',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/AttrsInheriAttrs',
            name: 'AttrsInheriAttrs',
            component: () => import('@/pages/AttrsInheriAttrs/index.vue'),
            meta: {
                title: '$attrs和inheritAttrs',
                keepAlive: true,
                isBack: false
            }
        },
        {
            path: '/Filter',
            name: 'Filter',
            component: () => import(/* webpackChunkName: "Filter" */'@/pages/Filter/index.vue'),
            meta: {
                title: '过滤器的使用',
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