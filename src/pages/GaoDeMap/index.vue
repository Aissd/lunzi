<template>
    <div class="container">
        <input type="text" name="keyword" id="keyword" class="keyword" />
        <div id="mapContainer" class="map"></div>
    </div>
</template>

<script>
import MapLoader from './amap.js';
export default {
    name: 'GaoDeMap',
    data() {
        return {

        };
    },
    created() {
        this.loadMap();
    },
    mounted() {

    },
    methods: {
        loadMap() {
            MapLoader().then(AMap => {
                const map = new AMap.Map('mapContainer', {
                    center: [116.397428, 39.90923],
                    zoom: 17,
                    resizeEnable: true
                });

                AMap.plugin(['AMap.Autocomplete', 'AMap.PlaceSearch'], function() {
                    // 输入提示
                    var autoOptions = {
                        city: '北京',
                        input: "keyword"
                    };
                    var auto = new AMap.Autocomplete(autoOptions);
                    var placeSearch = new AMap.PlaceSearch({
                        city: '北京',
                        map: map
                    });  //构造地点查询类
                    AMap.event.addListener(auto, "select", select);//注册监听，当选中某条记录时会触发
                    function select(e) {
                        placeSearch.setCity(e.poi.adcode);
                        placeSearch.search(e.poi.name);  //关键字查询查询
                    }
                });
            }, err => {
                console.log('地图加载失败', err);
            });
        }
    }
};
</script>

<style lang="scss" scoped>
    .container {
        background: rgba(0, 0, 0, .8);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .map {
        width: 100vw;
        height: 100vh;
    }
    .keyword {
        position: absolute;
        z-index: 1;
        top: 10%;
        right: 10%;
        height: 36px;
        line-height: 36px;
        font-size: 16px;
        padding-left: 12px;
    }
</style>
