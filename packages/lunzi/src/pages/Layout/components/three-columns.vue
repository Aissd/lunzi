<template>
    <div>
        <div class="layout-1">
            <p>三列布局，中间优先加载，两边绝对定位固定</p>
            <div class="component">
                <div class="center"></div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
        </div>
        <div class="layout-2">
            <p>三列布局，两边浮动，中间最后加载【不明为什么center放在最后一个就正常】</p>
            <div class="component">
                <div class="left"></div>
                <div class="right"></div>
                <div class="center"></div>
            </div>
        </div>
        <div class="layout-3">
            <p>三列布局，flex，按顺序排</p>
            <div class="component">
                <div class="left"></div>
                <div class="center"></div>
                <div class="right"></div>
            </div>
        </div>
        <div class="layout-4">
            <p>三列布局，中间优先加载，两边左浮动，左侧margin-left:-100%，右侧margin-left:-宽度</p>
            <div class="component">
                <div class="center">
                    <div class="child"></div>
                </div>
                <div class="left"></div>
                <div class="right"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

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
    .layout-1 {
        .component {
            position: relative;
        }
        .center {
            background-color: #ccc;
            margin: 0 200px;
            height: 200px;
        }
        .left {
            background-color: #0da;
            width: 200px;
            height: 200px;
            position: absolute;
            top: 0;
            left: 0;
        }
        .right {
            background-color: #ad2;
            width: 200px;
            height: 200px;
            position: absolute;
            top: 0;
            right: 0;
        }
    }
    .layout-2 {
        .component {
            
        }
        .center {
            background-color: #ccc;
            margin: 0 200px;
            height: 200px;
        }
        .left {
            background-color: #0da;
            width: 200px;
            height: 200px;
            float: left;
        }
        .right {
            background-color: #ad2;
            width: 200px;
            height: 200px;
            float: right;
        }
    }
    .layout-3 {
        .component {
            display: flex;
        }
        .center {
            background-color: #ccc;
            flex: 1;
            height: 200px;
        }
        .left {
            background-color: #0da;
            width: 200px;
            height: 200px;
        }
        .right {
            background-color: #ad2;
            width: 200px;
            height: 200px;
        }
    }
    .layout-4 {
        .component {
            position: relative;
        }
        .center {
            background-color: #ccc;
            height: 200px;
            float: left; /* 一定要设置浮动，要不下面的模块上不来 */
            width: 100%; /* 一定要设置100%，要不内容不够称不开整个页面 */
            .child {
                margin: 0 200px;
            }
        }
        .left {
            background-color: #0da;
            width: 200px;
            height: 200px;
            float: left;
            margin-left: -100%; /* 设置浮动， margin-left:-100% 可以使元素往上移一行，并且移动到最左边 */
        }
        .right {
            background-color: #ad2;
            width: 200px;
            height: 200px;
            float: left;
            margin-left: -200px; /* 设置浮动， margin-left:负的自身宽度 可以使元素往上移一行，并且移动到最右边 */
        }
    }
</style>
