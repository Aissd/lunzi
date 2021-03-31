<template>
    <div class="container">
        <el-input v-model="testInput" v-bind="$attrs" v-on="$listeners"></el-input>
    </div>
</template>

<script>
export default {
    name: 'TestInput',
    inheritAttrs: false,
    data() {
        return {
            testInput: ''
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
