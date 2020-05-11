<template>
    <div class="throttle" style="height: 2000px;">

    </div>
</template>

<script>
    // 来源地址
    // https://www.cnblogs.com/goloving/p/8672361.html
    export default {
        name: 'throttle',
        mounted() {
            // 由于闭包的存在，调用会不一样
            let throttleRun = this.throttleRun();
            window.addEventListener('scroll', throttleRun);
        },
        data() {
            return {

            };
        },
        methods: {
            // 抖动
            /** 实现思路：
             ** 参数需要一个执行的频率，和一个对应的处理函数,
            ** 内部需要一个lastTime 变量记录上一次执行的时间
            **/
            throttle(func, wait) {
                let lastTime = null;
                let timeout;
                return function() {
                    let context = this;
                    let now = new Date();
                    // 如果上次执行的时间和这次触发的时间大于一个执行周期，则执行
                    if (now - lastTime - wait > 0) {
                        // 如果之前有了定时任务则清除
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                        func.apply(context, arguments);
                        lastTime = now;
                    } else if (!timeout) {
                        timeout = setTimeout(() => {
                            // 改变执行上下文环境
                            func.apply(context, arguments);
                        }, wait);
                    }
                };
            },
            throttleRun() {
                return this.throttle(() => {
                    console.log(123);
                }, 400);
            },
            // 去抖
            debounce(func, wait) {
                let lastTime = null;
                let timeout;
                return function() {
                    let context = this;
                    let now = new Date();
                    // 判定不是一次抖动
                    if (now - lastTime - wait > 0) {
                        setTimeout(() => {
                            func.apply(context, arguments);
                        }, wait);
                    } else {
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                        timeout = setTimeout(() => {
                            func.apply(context, arguments);
                        }, wait);
                    }
                    // 注意这里lastTime是上次的触发时间
                    lastTime = now;
                }
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>