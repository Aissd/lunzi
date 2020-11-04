<template>
    <div class="throttle" style="height: 2000px;">
        防抖或是节流：限制函数的执行次数 <br />
        1、防抖（debounce）：通过setTimeout的方式，在一定的时间间隔内，将多次触发变成一次触发； <br />
        2、节流（throttle ）：减少一段时间的触发频率； <br />

        <input type="text" @input="throttle(inputFn, 1000)" />

        <input type="submit" />
    </div>
</template>

<script>
    // 来源地址
    // https://www.cnblogs.com/goloving/p/8672361.html
    export default {
        name: 'throttle',
        mounted() {
            
        },
        data() {
            return {

            };
        },
        methods: {
            // 节流
            throttle(fn, timer) {
                return function() {
                    setTimeout(() => {
                        fn();
                    }, timer);
                }
            },
            // input - 节流的回调函数
            inputFn() {
                console.log(arguments);
                console.log(this);
            }
        }
    };
</script>

<style lang="scss" scoped>

</style>