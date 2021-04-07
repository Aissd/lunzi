<template>
  <div class="container">
      <el-input v-model="key"></el-input>
      <el-input type="textarea" class="textarea" v-model="content"></el-input>
      <el-button @click="onClickSave">保存</el-button>
      <el-button @click="onClickPrint">打印</el-button>
  </div>
</template>

<script>
import localforage from 'localforage';
console.log(localforage);
export default {
    name: 'Localforage',
    data() {
        return {
            key: '',
            content: ''
        };
    },
    created() {
        localforage.config({
            storeName: 'testDB'
        });
        this.init();
    },
    methods: {
        init() {
            localforage.config({
                storeName: 'testDB'
            });
        },
        onClickSave() {
            localforage.setItem(this.key, this.content).then(content => {
                console.log(content);
            }).catch(reason => {
                console.log(reason);
            });
        },
        onClickPrint() {
            localforage.getItem('key').then(content => {
                console.log(content);
            }).catch(reason => {
                console.log(reason);
            });
        }
    }
}
// {
//    key: 1,
//    name: 'wrap',
//    habby: ['basketball', 'football']
// },{
//    key: 2,
//    name: 'wallace',
//    habby: ['basketball', 'chess']
// },{
//    key: 3,
//    name: 'john',
//    habby: ['movie', 'chess', 'book']
// }
</script>

<style lang="scss" scoped>
    .textarea {
        margin-top: 18px;
        margin-bottom: 18px;
        textarea {
            height: 500px;
        }
    }
</style>
