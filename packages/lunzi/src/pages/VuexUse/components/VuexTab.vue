<template>
    <div class="tab-container">
        <div class="tab-item" @click="setCurIdx({ curIdx: 0 })">tab-1</div>
        <div class="tab-item" @click="setCurIdx({ curIdx: 1 })">tab-2</div>
        <div class="tab-item" @click="setCurIdx({ curIdx: 2 })">tab-3</div>
        <div class="tab-item" @click="setCurIdx({ curIdx: 3 })">tab-4</div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'VuexTab',
    computed: {
        ...mapState(['curIdx'])
    },
    methods: {
        ...mapMutations(['setCurIdx']),
        // setCurIdx(curIdx) {
        //     this.$store.commit('setCurIdx', { curIdx });
        // }
    }
};
</script>

<style lang="scss" scoped>
    .tab-container {
        display: flex;
        width: 400px;
    }
    .tab-item {
        text-align: center;
        padding: 10px;
    }
</style>
