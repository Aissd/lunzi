<template>
    <ul>
        <li v-for="(item, index) in $router.options.routes.filter(item => item.meta)" :key="index">
            <a href="javascript:" @click="onClickPageFn(item, index)">{{item.meta.title}}</a>
        </li>
    </ul>
</template>

<script>
    export default {
		name: 'home',
		methods: {
			onClickPageFn(model, index) {
				this.$router.push({
					name: model.name
				});
			}
		}
    };
</script>

<style lang="scss" scoped>
	ul {
		padding: 30px;
		font-size: 16px;
	}
</style>