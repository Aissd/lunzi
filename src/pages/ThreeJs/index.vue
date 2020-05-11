<template>
    <div>
        <div id="container" ref="container"></div>
    </div>
</template>

<script>
    import * as Three from "three";
    // import FBXLoader from "three/examples/js/loaders/FBXLoader";
    export default {
        name: "ThreeJs",
        data() {
            return {
                camera: null,
                scene: null,
                renderer: null,
                mesh: null,
                controls: null,
                isUserInteracting: false,
                onPointerDownPointerX: 0,
                onPointerDownPointerY: 0,
                onPointerDownLon: 0,
                onPointerDownLat: 0,
                lat: 0,
                lon: 0
            };
        },
        methods: {
            init: function() {
                let container = this.$refs.container;
                // 相机
                this.camera = new Three.PerspectiveCamera(70, container.clientWidth / container.clientHeight, 0.01, 10);
                this.camera.position.z = 0.6;
                this.camera.lookAt(new Three.Vector3(0, 0, 0));
                // 场景
                this.scene = new Three.Scene();
                let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
                let material = new Three.MeshNormalMaterial();
                this.mesh = new Three.Mesh(geometry, material);
                this.scene.add(this.mesh);
                // 渲染器
                this.renderer = new Three.WebGLRenderer({ antialias: true });
                this.renderer.setSize(container.clientWidth, container.clientHeight);
                container.appendChild(this.renderer.domElement);
            },
            // 实时渲染
            animate: function() {
                requestAnimationFrame(this.animate);
                this.calPosition();
                this.mesh.rotation.x += 0.01;
                this.mesh.rotation.y += 0.02;
                this.renderer.render(this.scene, this.camera);
            },
            calPosition() {
                this.lat = Math.max(-85, Math.min(85, this.lat));
                var phi = tMath.degToRad(90 - this.lat);
                var theta = tMath.degToRad(this.lon);
                this.camera.target.x = _pRadius * Math.sin(phi) * Math.cos(theta);
                this.camera.target.y = _pRadius * Math.cos(phi);
                this.camera.target.z = _pRadius * Math.sin(phi) * Math.sin(theta);
                this.camera.lookAt(this.camera.target);
            }
        },
        mounted() {
            // this.init();
            // this.animate();
            // let container = this.$refs.container;
            // container.addEventListener('mousedown', event => {
            //     event.preventDefault();
            //     this.isUserInteracting = true;
            //     this.onPointerDownPointerX = event.clientX;
            //     this.onPointerDownPointerY = event.clientY;
            //     this.onPointerDownLon = this.lon;
            //     this.onPointerDownLat = this.lat;
            // });

            // container.addEventListener('mousemove', event => {
            //     if (this.isUserInteracting) {
            //         this.lon = (this.onPointerDownPointerX - event.clientX) * 0.1 + this.onPointerDownLon;
            //         this.lat = (event.clientY - this.onPointerDownPointerY) * 0.1 + this.onPointerDownLat;
            //     }
            // });

            // container.addEventListener('mouseup', event => {
            //     this.isUserInteracting = false;
            // });
        }
    };
</script>

<style lang="scss" scoped>
    #container {
        height: 400px;
    }
</style>