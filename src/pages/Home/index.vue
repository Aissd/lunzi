<template>
    <ul>
        <li v-for="(item, index) in pages" :key="index">
            <a href="javascript:" @click="onClickPageFn(item, index)">{{item.name}}</a>
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
        mounted() {
			
        },
		data() {
			return {
				pages: [
					{ 
						path: 'lazyLoadAction',
						name: '模拟懒加载事件'
					},
					{ 
						path: 'lifeCycle',
						name: '生命周期'
					},
					{ 
						path: 'sassDemo',
						name: 'sass测试'
					},
					{ 
						path: 'throttle',
						name: '抖动'
					},
					{ 
						path: 'elementUi',
						name: 'ElementUI'
					},
					{ 
						path: 'CssDemo',
						name: 'CssDemo'
					}
				]
			};
		},
		methods: {
			onClickPageFn(model, index) {
				this.$router.push({
					name: model.path
				});
			}
		}
    };
</script>

<style>

</style>