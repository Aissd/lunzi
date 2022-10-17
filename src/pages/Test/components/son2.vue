<template>
    <div class="container"></div>
</template>

<script>
export default {
    name: 'son2',
    mounted() {
        this.$eventBus.$on('callfromson1', (res) => {
            console.log('来了老弟', res);
        });
    },
    methods: {
        clickson1() {
            this.$eventBus.$emit('来自son1的呼唤');
        }
    }
}
</script>