<template>
    <div>
        <div class="page-item" v-show="curIdx === 0">1</div>
        <div class="page-item" v-show="curIdx === 1">2</div>
        <div class="page-item" v-show="curIdx === 2">3</div>
        <div class="page-item" v-show="curIdx === 3">4</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'VuexPage',
    computed: {
        ...mapState(['curIdx'])
    }
};
</script>

<style lang="scss" scoped>

</style>
