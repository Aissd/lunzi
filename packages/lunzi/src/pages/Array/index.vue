<template>
    <div>
        vue2中监测数组变化
        <span v-for="(item, index) in colors" :key="index">{{item.name}}</span>
    </div>
</template>

<script>
export default {
    name: 'Array',
    data() {
        return {
            colors: [
                { name: 'red' },
                { name: 'green' },
                { name: 'blue' }
            ]
        };
    },
    mounted() {
        // 1、
        // this.$set(this.colors, 2, { name: 'orange' });
        // 2、
        // this.colors.splice(0, 2, { name: 'yellow' });
        // 3、
        this.$delete(this.colors, 0);
    }
};
</script>

<style lang="scss" scoped>
    span {
        padding: 10px;
    }
</style>
