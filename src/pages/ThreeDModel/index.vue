<template>
    <div>
        <!-- <model-collada :backgroundAlpha="0" :rotation="rotation" src="static/models/collada/elf/elf.dae"></model-collada> -->
        <model-obj src="static/models/obj/tree.obj"></model-obj>
    </div>
</template>

<script>
    import { ModelObj } from 'vue-3d-model';
    export default {
        components: { ModelObj }
    }
    // import ModelCollada from '@/components/model-collada.vue';
    // export default {
    //     data() {
    //         return {
    //             rotation: {
    //                 x: -Math.PI / 2,
    //                 y: 0,
    //                 z: 0
    //             }
    //         };
    //     },
    //     components: {
    //         ModelCollada
    //     }
    // }
</script>

<style lang="scss" scoped>

</style>