<template>
    <ul>
        <li v-for="(item, index) in $router.options.routes.filter(item => item.meta)" :key="index">
            <a href="javascript:" @click="onClickPageFn(item, index)">{{item.meta.title}}</a>
        </li>
    </ul>
</template>

<script>
	import router from '@/router';
	// 路由守卫
	// to - 即将要进入的目标 路由对象
	// from - 当前导航正要离开的路由对象
	// next - 一定要调用该方法来 resolve 这个钩子
	router.beforeEach((to, from, next) => {
		console.log('to', to);
		console.log('from', from);
		console.log('next', next);
		next();
	});
    export default {
		name: 'home',
		// // 定时任务，离开页面时销毁
		// // 方法一：start --------------------
        // mounted() {
		// 	// timer写到data上，有点多余
		// 	this.timer = setInterval(() => {
		// 		console.log(1);
		// 	}, 1000);
		// },
		// beforeDestroy() {
		// 	clearInterval(this.timer);
		// 	console.log(this.timer);
		// },
		// // 方法一：end --------------------
		// // 方法二：start --------------------
        mounted() {
			let timer = setInterval(() => {
				console.log(1);
			}, 1000);
			// $once是一个函数，可以为vue组件实例绑定一个自定义事件，但该事件只能被触发一次，之后随即被移除
			this.$once('hook:beforeDestroy', () => {
				clearInterval(timer);
				timer = null;
			});
			console.log(this.$router);
		},
		// // 方法二：end --------------------
		data() {
			return {
				timer: null
			};
		},
		methods: {
			onClickPageFn(model, index) {
				this.$router.push({
					name: model.name
				});
			}
		}
    };
</script>

<style>

</style>