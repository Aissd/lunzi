<template>
    <div>
        <my-input type="text" placeholder="请输入用户名" :value="message" class="aaa"></my-input>
        <my-input type="password" placeholder="请输入密码" v-model="message" style="color: #000"></my-input>
    </div>
</template>

<script>
import myInput from './components/myInput.vue';
export default {
    name: 'AttrsInheriAttrs',
    data() {
        return {
            message: 'hello world'
        }
    },
    components: {
        myInput
    }
};
</script>

<style lang="scss" scoped>

</style>
