<template>
    <div>

    </div>
</template>

<script>
export default {
    name: 'SetInterval',
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
};
</script>

<style lang="scss" scoped>

</style>
