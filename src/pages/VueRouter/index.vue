<template>
    <div>
        <!-- tag 选择渲染成哪种类型的标签 -->
        <router-link to="UserHome" tag="a">UserHome</router-link> |
        <router-link to="UserDate" tag="a">UserDate</router-link> |
        <router-link to="UserPost" tag="a">UserPost</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    // import router from '@/router';
    // // 路由守卫
    // // to - 即将要进入的目标 路由对象
    // // from - 当前导航正要离开的路由对象
    // // next - 一定要调用该方法来 resolve 这个钩子
    // router.beforeEach((to, from, next) => {
    //     console.log('to', to);
    //     console.log('from', from);
    //     console.log('next', next);
    //     next();
    // });
    export default {
        name: 'VueRouter'
    };
</script>