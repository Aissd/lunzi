
<template>
	<div class="alert-container" v-if="show">
		<div class="alert-title" v-text="title">提示标题</div>
		<div class="alert-content" v-text="content">提示内容</div>
		<button class="btn-close" @click="close">确定</button>
	</div>
</template>
 
<script>
    export default {
        name: "myAlert",
        data() {
            return {
                show: false,
                title: "",
                content: "",
                ok: null
            };
        },
        methods: {
            close() {
                this.show = false;
                if (this.ok) {
                    this.ok();
                }
            }
        }
    };
</script>
 
<style>
    .alert-container {
        box-shadow: 0 0 1px #ccc;
        width: 300px;
        padding: 20px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -150px;
        text-align: center;
    }
    .alert-title {
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
    }
    .alert-content {
        padding: 10px 0;
    }
    .btn-close {
        padding: 4px 10px;
        background-color: #fff;
        border: 1px solid #ccc;
        outline: none;
        border-radius: 4px;
    }
</style>