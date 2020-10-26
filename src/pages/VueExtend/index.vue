
<template>
	<div>
        
	</div>
</template>
 
<script>
    import Vue from 'vue';
    import myAlert from './components/myAlert.js';

    import myToast from './components/myToast.js';
    Vue.use(myAlert);
    Vue.use(myToast);
    export default {
        name: 'VueExtend',
        mounted() {
            this.$myAlert("测试title", "测试content", () => {
                console.log('close');
            });

            this.$myToast('显示toast', 2000);
        }
    };
</script>
 
<style>

</style>