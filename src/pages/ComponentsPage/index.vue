<template>
  <div class="container">
		<div class="components-bar">
			<p>switch按钮，关闭时有二次确认</p>
			<SwitchConfirm
				:switchModel= isSwitchOn
				confirmText="确认要关掉吗"
				:switchConfirm = switchConfirmFn
				:switchCancel= switchCancelFn
			>
			</SwitchConfirm>
		</div>
	</div>
</template>

<script>
import SwitchConfirm from './components/SwitchConfirm.vue';
export default {
	name: 'componentsPage',
	components: {
		SwitchConfirm,
	},
	data() {
		return {
			isSwitchOn: false,
		}
	},
	methods: {
		switchConfirmFn() {
			this.isSwitchOn = !this.isSwitchOn;
			console.log('switchConfirmFn', this.isSwitchOn);
		},
		switchCancelFn() {
			console.log('switchCancelFn', this.isSwitchOn);
		}
	},
}
</script>

<style>
	.components-bar {
		margin-bottom: 10px;
	}
</style>