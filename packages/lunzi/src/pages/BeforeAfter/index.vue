<template>
    <div>
        <div class="target" :data-before="countBefore" :data-after="countAfter">{{count}}</div>
    </div>
</template>

<script>
export default {
    name: 'BeforeAfter',
    data() {
        return {
            countBefore: 9,
            count: 10,
            countAfter: 11
        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>
    .target {

    }
    .target:before {
        display: block;
        content: attr(data-before);
    }
    .target:after {
        display: block;
        content: attr(data-after);
    }
</style>
