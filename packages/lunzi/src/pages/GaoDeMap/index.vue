<template>
    <div class="container">
        <input type="text" name="keyword" id="keyword" class="keyword" />
        <div id="mapContainer" class="map"></div>
    </div>
</template>

<script>
const GAODEMAP = {
    amap: null,
    autoComplete: null,
    placeSearch: null,
    infoWindow: null,
    marker: null,
};
import MapLoader from './amap.js';
export default {
    name: 'GaoDeMap',
    data() {
        return {
            map: null
        };
    },
    created() {
        this.loadMap();
    },
    mounted() {
        
    },
    methods: {
        loadMap() {
            // 加载高德地图
            MapLoader().then(AMap => {
                GAODEMAP.AMap = AMap;
                this.map = new GAODEMAP.AMap.Map('mapContainer', {
                    center: [116.397428, 39.90923],
                    zoom: 16,
                    resizeEnable: true
                });

                // 构造地点查询类
                GAODEMAP.autoComplete = this.initAutoComplete(GAODEMAP.AMap, { city: '北京', input: "keyword" });
                GAODEMAP.placeSearch = this.initPlaceSearch(GAODEMAP.AMap, { city: '北京', map: this.map });

                // 注册监听，当选中某条记录时会触发
                GAODEMAP.AMap.event.addListener(GAODEMAP.autoComplete, "select", e => {
                    GAODEMAP.placeSearch.setCity(e.poi.adcode);
                    GAODEMAP.placeSearch.search(e.poi.name);  //关键字查询查询
                });

                GAODEMAP.infoWindow = this.initInfoWindow(GAODEMAP.AMap);
                GAODEMAP.infoWindow.open(this.map, [getLng(), getLat()]);

                GAODEMAP.marker = this.initMarke(GAODEMAP.AMap);

                this.map.on('click', e => {
                    // 信息弹窗
                    const info = [];
                    info.push(`<div>aaa</div>`);
                    const { getLng, getLat } = e.lnglat;

                    // 添加marker标记
                    this.add(GAODEMAP.marker);
                    GAODEMAP.marker.setPosition(e.lnglat);
                });
            }, err => {
                console.log('地图加载失败', err);
            });
        },
        // 初始化autoComplete
        initAutoComplete(AMap, options = {}) {
            AMap.plugin(['AMap.Autocomplete'], () => {});
            return new GAODEMAP.AMap.Autocomplete(options);
        },
        // 初始化placeSearch
        initPlaceSearch(AMap, options = {}) {
            AMap.plugin(['AMap.PlaceSearch'], () => {});
            return new AMap.PlaceSearch(options);
        },
        // 初始化Marker
        initMarke(AMap) {
            AMap.plugin(['AMap.Marker'], () => {});
            return new AMap.Marker();
        },
        // 初始化infoWindow
        // lng - 经度，lat - 纬度
        initInfoWindow(AMap, content = '') {
            AMap.plugin(['AMap.InfoWindow'], () => {});
            return new AMap.InfoWindow({ content: content });
        },
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
