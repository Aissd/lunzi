<template>
    <div class="input-container">
        <input v-bind="$attrs" />
        <br />
        {{$attrs}}
    </div>
</template>

<script>
export default {
    name: 'myInput',
    inheritAttrs: false,
    // 在这里有定义的话，上面的$attrs就获取不到，所以是非props的attribute
    // 还有class，style除外
    props: ['value']
};
</script>

<style lang="scss" scoped>
    .input-container {

    }
</style>
