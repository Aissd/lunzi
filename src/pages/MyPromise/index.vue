<template>
    <div>

    </div>
</template>

<script>
import MyPromise from './MyPromise.js';
export default {
    name: 'MyPromise',
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {
        let promise = new MyPromise((resolve, reject) => {
            // resolve('success');
            // reject('fail');
            throw new Error('exception:error');
        });
        promise.then(value => {
            console.log(value);
        }, reason => {
            console.log(reason);
        })
    },
    methods: {

    }
};
</script>

<style lang="scss" scoped>

</style>
