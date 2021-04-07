<template>
    <div class="my-toast" v-if="isShow">
        {{text}}
    </div>
</template>

<script>
export default {
    name: 'myToast',
    data() {
        return {
            text: 'toast显示'
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
    .my-toast {    
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
        background-color: rgba(0, 0, 0, .6);
        color: #fff;
        padding: 10px 18px;
        border-radius: 6px;
    }
</style>
