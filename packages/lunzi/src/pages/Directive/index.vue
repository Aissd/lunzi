<template>
    <div>
        <h1>自定义指令</h1>
        <!-- <div v-focus>点击变色</div> -->

        <div class="dropdown-box" v-clickoutside="handleCloseFn">
            <div class="dropdown-menu" @click="onShowListFn">点击显示列表，点击外面关闭列表</div>
            <ul class="dropdown-list" v-show="isShowList">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>

        <div v-time="timeNow"></div>
        <div v-time="timeBefore"></div>
        <div v-birthday="'1992-06-15'"></div>
    </div>
</template>

<script>
import Time from '@/utils/time.js';
export default {
    name: 'Directive',
    data() {
        return {
            isShowList: false,
            timeNow: (new Date().getTime()),
            timeBefore: (new Date('2020-10-18').getTime())
        };
    },
    // 局部注册指令
    directives: {
        focus: {
            // 只调用一次，指令第一次绑定到元素时调用（在这里可以进行一次性的初始化设置）
            // el - DOM元素对象
            // binding - 
            // vnode - 
            bind: function(el, binding, vnode) {
                console.log('bind', el, binding, vnode);
                el.onclick = function() {
                    this.style.backgroundColor = '#f00';
                }
            },
            // 被绑定元素插入父节点时调用（仅保证父节点存在，但不一定已被插入文档中）
            // el -> 指令所绑定的元素，可以用来直接操作DOM
            inserted: function(el) {
                console.log('inserted', el);
            },
            // 所在组件的VNode更新时调用，但是可能发生在其子VNode更新之前
            update: function() {
                console.log('update');
            },
            // 指令所在组件的VNode及其子VNode全部更新后调用
            componentUpdated: function(oldValue) {
                console.log('componentUpdated', oldValue);
            },
            // 只调用一次，指令与元素解绑时调用
            unbind: function(el, binding) {
                console.log('unbind', el, binding);
            }
        },
        clickoutside: {
            bind: function(el, binding, vnode) {
                function documentHandler(e) {
                    if(el.contains(e.target)) {
                        // 判断点击的区域是否是指令所在的元素内部
                        return false;
                    } 
                    if(binding.expression) {
                        // 当前的指令v-clickoutside有没有写表达式
                        // 在该自定义指令中，表达式应该是一个函数，在过滤了内部元素后，点击外面任何区域应该执行用户表达式中的函数
                        // 所以binding.value()就是用来执行当前上下文methods中指定的函数的
                        binding.value(e);
                    }
                }
                el.__vueClickOutside__ = documentHandler;
                document.addEventListener('click', documentHandler, false);

                // 绑定事件 - 按esc关闭
                document.addEventListener('keyup', e => {
                    if(e.keyCode == 27) {
                        binding.value(e);
                    }
                });
            },
            unbind: function(el, binding) {
                // 不移除的话,仍然会存在内存中
                document.removeEventListener('click', documentHandler, false);
                delete el.__vueClickOutside__;
            }
        },
        // 时间转换
        time: {
            bind: function(el, binding) {
                el.innerHTML = Time.getFormatTime(binding.value);
                el.__timeout__ = setInterval(function() {
                    el.innerHTML = Time.getFormatTime(binding.value);
                }, 60000); // 60秒运行一次
            },
            unbind: function(el) {
                clearInterval(el.__timeout__);
                delete el.__timeout__;
            }
        },
        // 生日
        birthday: {
            bind: function(el, binding) {
                el.innerHTML = Time.getDayFromBirthday(binding.value);
            }
        }
    },
    methods: {
        // 显示列表
        onShowListFn() {
            this.isShowList = true;
        },
        handleCloseFn() {
            this.isShowList = false;
        }
    }
};
</script>

<style lang="scss" scoped>
    .dropdown-box {
        width: 300px;
    }
    .dropdown-menu {

    }
    .dropdown-list {
        background-color: #ccc;
        color: #fff;
    }
</style>
