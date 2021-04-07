<template>
    <div class="container">
        <three-columns></three-columns>
    </div>
</template>

<script>
    import threeColumns from './components/three-columns.vue';
    export default {
        name: 'Layout',
        components: {
            threeColumns
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
    }
</style>