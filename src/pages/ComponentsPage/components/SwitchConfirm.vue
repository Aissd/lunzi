<template>
	<el-switch
		:value="switchModel"
		:active-text="activeText"
		:inactive-text="inActiveText"
		:active-color="computedActiveColor['--active-color']"
		:inactive-color="computedInActiveColor['--in-active-color']"
		@change="onSwitch"
	/>
</template>

<script>
export default {
	name: 'switchConfirm',
	props: {
        // switch值
		switchModel: {
			type: Boolean,
			required: true,
        },
        // 启用文案
		activeText: {
			type: String,
			default: '启用',
		},
		// 关闭文案
		inActiveText: {
			type: String,
			default: '关闭',
		},
		// 启用颜色
		activeColor: {
			type: String,
			default: '#409eff',
		},
		// 关闭颜色
		inActiveColor: {
			type: String,
			default: '#dcdfe6',
		},
        // 成功启用回调函数
		switchConfirm: {
			type: Function,
        },
        // 成功关闭回调函数
		switchCancel: {
			type: Function,
        },
        // 二次确认框提示标题
		confirmTitle: {
			type: String,
			default: '提示',
        },
        // 二次确认框提示内容
		confirmText: {
			type: String,
			required: true,
		},
	},
	computed: {
		computedActiveColor() {
			return {
				'--active-color': this.activeColor
			};
		},
		computedInActiveColor() {
			return {
				'--in-active-color': this.inActiveColor
			};
		}
	},
	methods: {
		onSwitch() {
			if (this.switchModel) {
				this.$confirm(this.confirmText, this.confirmTitle, {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning',
				}).then(() => {
					this.switchConfirm && this.switchConfirm();
				}).catch((reason) => {
					if (reason === 'cancel') {
						this.switchCancel && this.switchCancel();
					}
				});
			} else {
				this.switchConfirm && this.switchConfirm();
			}
		}
	},
}
</script>

<style lang="scss" scoped>
	/* 无效啊~~~ */
	.activeColor {
		color: var(--active-color);
	}
	.inActiveColor {
		color: var(--in-active-color);
	}
	.activeBgColor {
		background-color: var(--active-color);
	}
	.inActiveBgColor {
		background-color: var(--in-active-color);
	}
	/deep/.el-switch__label.is-active {
		color: var(--active-color);
	}
	/* 无效啊~~~ */
</style>