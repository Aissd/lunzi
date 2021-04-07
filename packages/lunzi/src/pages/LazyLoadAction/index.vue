<template>
    <div class="container lazyload-action">
        <div class="scroll-container" @scroll="onScrollFn" ref="scrollContainer">
            <div class="scroll-wrap" ref="scrollingWrap">
                <ul>
                    <li v-for="(item, index) in getDemoListFn()" :key="index" class="img-load">
                        <h3>{{item.title}}</h3>
                        <img :src="item.url" alt="" />
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    export default {
        name: 'lazyLoadAction',
        mounted() {
            // console.log(this);
            this.$nextTick(() => {
                let $imgLoads = document.querySelectorAll('.img-load');
                if($imgLoads.length) {
                    $imgLoads.forEach((item, index) => {
                        let $item = $imgLoads[index];
                        console.log($item.offsetHeight, $item.getBoundingClientRect().top);
                    });
                }
            });
        },
        methods: {
            onScrollFn() {
                this.imgLoadFn();
            },
            imgLoadFn() {
                let $imgLoads = document.querySelectorAll('.img-load');
                if($imgLoads.length) {
                    $imgLoads.forEach((item, index) => {
                        let $item = $imgLoads[index];
                        // Element.getBoundingClientRect() 方法返回元素的大小及其相对于视口的位置
                        if($item.getBoundingClientRect().top < document.documentElement.clientHeight) {
                            $item.classList.remove('img-load');
                        }
                    });
                }
            },
            getDemoListFn() {
                return [
                    { title: '图片分割线', url: './images/shadiao01.jpg' },
                    { title: '图片分割线', url: './images/shadiao02.jpg' },
                    { title: '图片分割线', url: './images/shadiao03.jpg' },
                    { title: '图片分割线', url: './images/shadiao04.jpg' },
                    { title: '图片分割线', url: './images/shadiao05.jpg' },
                    { title: '图片分割线', url: './images/shadiao06.jpg' },
                    { title: '图片分割线', url: './images/shadiao07.jpg' },
                    { title: '图片分割线', url: './images/shadiao08.jpg' }
                ];
            }
        }
    };
</script>

<style scoped>
    img {
        width: 100%;
    }
    .container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
    }
    .scroll-container {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        max-width: 720px;
        margin: 0 auto;
        background-color: #fff;
        overflow-x: hidden;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
    .scroll-wrap {
        
    }
</style>