<template>
    <div class="sass-demo">
        <h1>sass demo</h1>
        <span class="sass-demo-a">aaa</span>
        <span class="sass-demo-b">bbb</span>
        <span class="sass-demo_c">ccc</span>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: 'sassDemo',
        mounted() {
            
        },
        methods: {
            
        }
    };
</script>

<style lang="scss" scoped>
    .sass-demo {
        h1 {
            color: #ff0;
        }
        &-a {
            color: #f00;
        }
        &-b {
            color: #00f;
        }
        &_c {
            color: #ccc;
        }
    }
</style>