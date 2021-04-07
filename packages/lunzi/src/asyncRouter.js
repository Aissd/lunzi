export const asyncRouter = [
    {
        path: '/lazyLoadAction',
        name: 'lazyLoadAction',
        component: LazyLoadAction,
        meta: {
            title: '模拟懒加载图片事件',
            keepAlive: true,
            isBack: false
        }
    },
    {
        path: '/lifeCycle',
        name: 'lifeCycle',
        component: LifeCycle,
        meta: {
            title: '生命周期demo',
            keepAlive: true,
            isBack: false
        }
    },
    {
        path: '/sassDemo',
        name: 'sassDemo',
        component: SassDemo,
        meta: {
            title: '生命周期demo',
            keepAlive: true,
            isBack: false
        }
    },
    {
        path: '/throttle',
        name: 'throttle',
        component: Throttle,
        meta: {
            title: '抖动',
            keepAlive: true,
            isBack: false
        }
    },
    {
        path: '/elementUi',
        name: 'elementUi',
        component: ElementUI,
        meta: {
            title: 'ElementUI',
            keepAlive: true,
            isBack: false
        }
    }
];