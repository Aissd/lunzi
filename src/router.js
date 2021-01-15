import Vue from 'vue';
import Router from 'vue-router';
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
}
Vue.use(Router);

import VueRouter from "@/pages/VueRouter/index.vue";

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
            component: () => import(/* webpackChunkName: "Home" */'@/pages/Home/index.vue'),
            meta: {
                title: '首页',
                keepAlive: true
            }
        },
        {
            path: '/lazyLoadAction',
            name: 'lazyLoadAction',
            component: () => import(/* webpackChunkName: "LazyLoadAction" */'@/pages/LazyLoadAction/index.vue'),
            meta: {
                title: '模拟懒加载图片事件',
                keepAlive: true
            }
        },
        {
            path: '/lifeCycle',
            name: 'lifeCycle',
            component: () => import(/* webpackChunkName: "LifeCycle" */'@/pages/LifeCycle/index.vue'),
            meta: {
                title: '生命周期demo',
                keepAlive: true
            }
        },
        {
            path: '/sassDemo',
            name: 'sassDemo',
            component: () => import(/* webpackChunkName: "SassDemo" */'@/pages/SassDemo/index.vue'),
            meta: {
                title: 'sassDemo',
                keepAlive: true
            }
        },
        {
            path: '/throttle',
            name: 'throttle',
            component: () => import(/* webpackChunkName: "Throttle" */'@/pages/Throttle/index.vue'),
            meta: {
                title: '抖动',
                keepAlive: true
            }
        },
        {
            path: '/elementUi',
            name: 'elementUi',
            component: () => import(/* webpackChunkName: "ElementUI" */'@/pages/ElementUI/index.vue'),
            meta: {
                title: 'ElementUI',
                keepAlive: true
            }
        },
        {
            path: '/CssDemo',
            name: 'CssDemo',
            component: () => import(/* webpackChunkName: "CssDemo" */'@/pages/CssDemo/index.vue'),
            meta: {
                title: 'CssDemo',
                keepAlive: true
            }
        },
        {
            path: '/MyPromise',
            name: 'MyPromise',
            component: () => import(/* webpackChunkName: "MyPromise" */'@/pages/MyPromise/index.vue'),
            meta: {
                title: '手写promise',
                keepAlive: true
            }
        },
        {
            path: '/closeWindowTip',
            name: 'closeWindowTip',
            component: () => import(/* webpackChunkName: "CloseWindowTip" */'@/pages/CloseWindowTip/index.vue'),
            meta: {
                title: '关闭window询问',
                keepAlive: true
            }
        },
        {
            path: '/Directive',
            name: 'Directive',
            component: () => import(/* webpackChunkName: "Directive" */'@/pages/Directive/index.vue'),
            meta: {
                title: 'vue-指令',
                keepAlive: true
            }
        },
        {
            path: '/BeforeAfter',
            name: 'BeforeAfter',
            component: () => import(/* webpackChunkName: "BeforeAfter" */'@/pages/BeforeAfter/index.vue'),
            meta: {
                title: 'before&after动态赋值',
                keepAlive: true
            }
        },
        {
            path: '/EventModifiers',
            name: 'EventModifiers',
            component: () => import(/* webpackChunkName: "EventModifiers" */'@/pages/EventModifiers/index.vue'),
            meta: {
                title: '事件修饰符',
                keepAlive: true
            }
        },
        {
            path: '/VueExtend',
            name: 'VueExtend',
            component: () => import(/* webpackChunkName: "VueExtend" */'@/pages/VueExtend/index.vue'),
            meta: {
                title: 'vue.extend封装',
                keepAlive: true
            }
        },
        {
            path: '/AttrsInheriAttrs',
            name: 'AttrsInheriAttrs',
            component: () => import(/* webpackChunkName: "AttrsInheriAttrs" */'@/pages/AttrsInheriAttrs/index.vue'),
            meta: {
                title: '$attrs和inheritAttrs',
                keepAlive: true
            }
        },
        {
            path: '/Filter',
            name: 'Filter',
            component: () => import(/* webpackChunkName: "Filter" */'@/pages/Filter/index.vue'),
            meta: {
                title: '过滤器的使用',
                keepAlive: true
            }
        },
        {
            path: '/Array',
            name: 'Array',
            component: () => import(/* webpackChunkName: "Array" */'@/pages/Array/index.vue'),
            meta: {
                title: 'vue2中监测数组变化',
                keepAlive: true
            }
        },
        {
            path: '/VueRouter',
            name: 'VueRouter',
            component: VueRouter,
            // component: () => import(/* webpackChunkName: "VueRouter" */'@/pages/VueRouter/index.vue'),
            meta: {
                title: 'VueRouter路由',
                keepAlive: true
            },
            children: [
                {
                    path: '', // 相当于 localhost:8080/VueRouter
                    // path: '/UserHome', // 相当于 localhost:8080/UserHome
                    name: 'UserHome', // 相当于 localhost:8080/VueRoute/UserHome
                    component: () => import(/* webpackChunkName: "UserHome" */'@/pages/VueRouter/components/UserHome.vue')
                },
                {
                    path: 'UserDate',
                    name: 'UserDate',
                    component: () => import(/* webpackChunkName: "UserDate" */'@/pages/VueRouter/components/UserDate.vue')
                },
                {
                    path: 'UserPost',
                    name: 'UserPost',
                    component: () => import(/* webpackChunkName: "UserPost" */'@/pages/VueRouter/components/UserPost.vue')
                }
            ]
        },
        {
            path: '/SetInterval',
            name: 'SetInterval',
            component: () => import(/* webpackChunkName: "SetInterval" */'@/pages/SetInterval/index.vue'),
            meta: {
                title: 'SetInterval定时任务',
                keepAlive: true
            }
        },
        {
            path: '/VuexUse',
            name: 'VuexUse',
            component: () => import(/* webpackChunkName: "VuexUse" */'@/pages/VuexUse/index.vue'),
            meta: {
                title: 'VuexUse',
                keepAlive: true
            }
        },
        {
            path: '/Layout',
            name: 'Layout',
            component: () => import(/* webpackChunkName: "Layout" */'@/pages/Layout/index.vue'),
            meta: {
                title: 'Layout',
                keepAlive: true
            }
        },
        {
            path: '/GaoDeMap',
            name: 'GaoDeMap',
            component: () => import(/* webpackChunkName: "GaoDeMap" */'@/pages/GaoDeMap/index.vue'),
            meta: {
                title: '高德地图',
                keepAlive: true
            }
        },
        {
            path: '/Test',
            name: 'Test',
            component: () => import(/* webpackChunkName: "Test" */'@/pages/Test/index.vue'),
            meta: {
                title: 'Test',
                keepAlive: true
            }
        },
        {
            path: '*',
            redirect: '/404',
            component: () => import(/* webpackChunkName: "404" */'@/pages/NotFound/index.vue'),
            hidden: true
        }
    ]
});