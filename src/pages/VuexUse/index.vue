<template>
    <div>
        <vuex-tab></vuex-tab>
        <vuex-page></vuex-page>
        {{$store.getters.getCurrentIndex}}
    </div>
</template>

<script>
import vuexTab from './components/VuexTab.vue';
import vuexPage from './components/VuexPage.vue';
export default {
    name: 'VuexUse',
    components: {
        vuexTab,
        vuexPage
    },
    mounted() {
        this.$store.dispatch('fetchData', { page: 1, count: 10, type: 'video'});
    }
};
</script>

<style lang="scss" scoped>

</style>
