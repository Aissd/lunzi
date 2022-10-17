<template>
    <div class="container">
        <el-button @click="clickson1">son1的按钮</el-button>
    </div>
</template>

<script>
export default {
    name: 'son1',
    methods: {
        clickson1() {
            this.$eventBus.$emit('callfromson1', '来自son1的呼唤');
        }
    }
}
</script>