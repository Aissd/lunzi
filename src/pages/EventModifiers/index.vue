<template>
    <div>
        <!-- 得能获取焦点的控件才能监控到键盘的事件修饰符 -->
        <input @keyup.esc="clickFn" />
    </div>
</template>

<script>
export default {
    name: 'EventModifiers',
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {
        clickFn() {
            console.log('event action');
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
