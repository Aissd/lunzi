<template>
	<div>
		<h1>关闭窗口或浏览器会拦截</h1>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
export default {
	name: "closeWindowTip",
	data() {
		return {
			msg: 'wwwwwwwwww'
		};
	},
	mounted() {
		let _this = this;
		window.onbeforeunload = function (e) {
			if (_this.$route.name == "closeWindowTip") {
				e = e || window.event;
				// 兼容IE8和Firefox 4之前的版本
				if (e) {
					e.returnValue = "关闭提示1111";
				}
				// Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
				return "关闭提示222";
			} else {
				window.onbeforeunload = null;
			}
		};
	}
};
</script>

<style lang="scss" scoped>

</style>
