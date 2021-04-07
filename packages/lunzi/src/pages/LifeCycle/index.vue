<template>
    <div>
        <h1>{{message}}</h1>
        <ul>
            <li class="item-box">
                <h3>beforeCreate创建前状态</h3>
                <div>     el: undefined</div>
                <div>   data: undefined</div>
                <div>message: undefined</div>
            </li>
            <li class="item-box">
                <h3>created创建完毕状态</h3>
                <div>     el: undefined</div>
                <div>   data: 已被初始化</div>
                <div>message: 已被初始化，该对象属性未被替换</div>
            </li>
            <li class="item-box">
                <h3>beforeMount挂载前状态</h3>
                <div>     el: 已被初始化</div>
                <div>   data: 已被初始化</div>
                <div>message: 已被初始化，该对象属性未被替换</div>
            </li>
            <li class="item-box">
                <h3>mounted挂载结束状态</h3>
                <div>     el: 已被初始化</div>
                <div>   data: 已被初始化</div>
                <div>message: 该对象属性已被渲染完成</div>
            </li>
        </ul>
        <button @click="updateMsgFn">updateMsg</button>
        <button @click="goHomeFn">goHome</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                message: 'Vue的生命周期，按F12康康log'
            };
        },
        methods: {
            goHomeFn() {
				this.$router.push({
					name: 'home'
				});
            },
            updateMsgFn() {
                this.message = 'update一下';
            }
        },
        beforeCreate() {
            console.group('------beforeCreate创建前状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); // undefined
            console.log("%c%s", "color:red", "data   : " + this.$data); // undefined 
            console.log("%c%s", "color:red", "message: " + this.message) // undefined
            console.groupEnd('------beforeCreate创建前状态------');
        },
        created() {
            console.group('------created创建完毕状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); // undefined
            console.log("%c%s", "color:red", "data   : " + this.$data); // 已被初始化 
            console.log("%c%s", "color:red", "message: " + this.message); // 已被初始化
            console.groupEnd('------created创建完毕状态------');
        },
        beforeMount() {
            console.group('------beforeMount挂载前状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); // 已被初始化
            console.log("%c%s", "color:red", "data   : " + this.$data); // 已被初始化  
            console.log("%c%s", "color:red", "message: " + this.message); // 已被初始化  
            console.groupEnd('------beforeMount挂载前状态------');
        },
        mounted() {
            console.group('------mounted挂载结束状态------');
            console.log("%c%s", "color:red", "el     : ", this.$el); // 已被初始化
            console.log("%c%s", "color:red", "data   : ", this.$data); // 已被初始化
            console.log("%c%s", "color:red", "message: ", this.message); // 已被初始化 
            console.groupEnd('------mounted挂载结束状态------');
        },
        beforeUpdate() {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
            console.log("%c%s", "color:red", "message: ", this.message);
            console.groupEnd('beforeUpdate 更新前状态===============》');
        },
        updated() {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
            console.log("%c%s", "color:red", "message: ", this.message);
            console.groupEnd('updated 更新完成状态===============》');
        },
        beforeDestroy() {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
            console.log("%c%s", "color:red", "message: ", this.message);
            console.groupEnd('beforeDestroy 销毁前状态===============》');
        },
        destroyed() {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red", "el     : ", this.$el);
            console.log("%c%s", "color:red", "data   : ", this.$data);
            console.log("%c%s", "color:red", "message: ", this.message);
            console.groupEnd('destroyed 销毁完成状态===============》');
        }
    };
</script>

<style lang="scss" scoped>
    .item-box {
        h3 {
            font-size: 16px;
        }
        div {
            margin-bottom: 5px;
        }
    }
</style>