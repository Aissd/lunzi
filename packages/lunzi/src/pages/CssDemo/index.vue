<template>
    <div class="container">
        <section class="text-aligin-last">
            <h3>使用text-aligin-last: justify设置文本两端对齐</h3>
            <p class="text-danger">safari不支持</p>
            <div>账号</div>
            <div>密码</div>
            <div>电子邮件</div>
            <div>通讯地址</div>
            <div>兴趣爱好</div>
        </section>
        <section>
            <h3>横向滚动条 - display: inline-block + 滚动条样式</h3>
            <div class="scroll-box">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
            <h3>横向滚动条 - flex + 滚动条样式</h3>
            <div class="scroll-flex-box">
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
                <div class="box"></div>
            </div>
        </section>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
    // text-aligin-last
    .text-aligin-last {
        div {
            width: 120px;
            padding: 10px;
            background-color: #398bfb;
            color: #fff;
            text-align-last: justify;
            border-radius: 6px;
            margin-bottom: 10px;
        }
    }
    // scroll-box
    .scroll-flex-box {
        margin-bottom: 10px;
        display: flex;
        .box {
            flex: none;
        }
    }
    .scroll-box {
        white-space: nowrap;
    }

    .scroll-box,
    .scroll-flex-box {
        overflow-x: auto;
        overflow-y: hidden;
        width: 400px;
        height: 200px;
        border: 1px solid #000;
        .box {
            width: 100px;
            height: 200px;
            background-color: #ccc;
            display: inline-block;
            &:nth-child(1) {
                background-color: #f00;
            }
            &:nth-child(2) {
                background-color: #ff0;
            }
            &:nth-child(3) {
                background-color: #00f;
            }
            &:nth-child(4) {
                background-color: #f0f;
            }
            &:nth-child(5) {
                background-color: #0ff;
            }
            &:nth-child(6) {
                background-color: #000;
            }
            &:nth-child(7) {
                background-color: #aaa;
            }
        }

        &::-webkit-scrollbar {
            background-color: #ccc;
            height: 8px;
        }
        // 左右两边箭头
        &::-webkit-scrollbar-button {
            background-color: #aaa;
        }
        // 不知道什么来的
        &::-webkit-scrollbar-corner {
            background-color: #f0f;
        }
        // 滚动条棒
        &::-webkit-scrollbar-thumb {
            background-color: #f00;
        }
        // 不知道什么来的
        &::-webkit-scrollbar-track {
            background-color: #0f0;
        }
        // 滚动条底部
        &::-webkit-scrollbar-track-piece {
            background-color: #fff;
        }
    }
</style>