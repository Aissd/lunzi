<template>
    <div class="app-container">
        <el-card class="box-card">
            <div class="message-box">
                <div class="edit-content">
                    <div class="detail">
                        <span>插入变量：</span>
                        <span v-for="item in variableData" :key="item.id">
                            <el-button @click="insertData(item)" round>{{item.name}}</el-button>
                        </span>
                    </div>
                    <div class="message">
                        <span class="title">短信内容：</span>
                        <el-input id="messageContent" class="message-input" type="textarea" :rows="3" placeholder="请输入内容" v-model="messageModel" clearable></el-input>
                    </div>
                </div>
                <div class="preview-box">
                    <span class="preview-content">{{messageModel}}</span>
                    <p>发送短信预览</p>
                </div>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    filters: {
        statusFilter(status) {
            const statusMap = {
                published: "success",
                draft: "gray",
                deleted: "danger",
            };
            return statusMap[status];
        },
    },
    data() {
        return {
            //插入变量
            variableData: [
                {
                    id: 1,
                    name: "#负责人名称#",
                },
                {
                    id: 2,
                    name: "#违规住户姓名#",
                },
                {
                    id: 3,
                    name: "#违规住户手机号码#",
                },
                {
                    id: 4,
                    name: "#违规住户楼栋#",
                },
            ],
            //短信内容
            messageModel: ""
        };
    },
    methods: {
        //插入变量
        insertData(data) {
            this.insertInputTxt("messageContent", data);
        },
        insertInputTxt(id, insertValue) {
            let elInput = document.getElementById(id);
            let startPos = elInput.selectionStart;
            let endPos = elInput.selectionEnd;
            if(startPos === undefined || endPos === undefined) return;
            let txt = elInput.value;
            this.messageModel = txt.substring(0, startPos) + insertValue.name + txt.substring(endPos);
            // elInput.value = this.messageModel;
            elInput.focus();
            elInput.selectionStart = startPos + insertValue.name.length;
            elInput.selectionEnd = startPos + insertValue.name.length;
        },
        formatFn(value) {

        },
        variableDataChange(id) {
            const exampleData = {
                1: "张三",
                2: "李四",
                3: "13700000000",
                4: "51栋301",
            };
            return exampleData[id];
        },
    },
};
</script>

<style lang="scss" scoped>
.message-box {
    .edit-content {
        width: 60%;
        margin-top: 20px;
        .message,
        .detail {
            margin-top: 10px;
        }
        .title {
            text-align: center;
        }
        .message-input {
            width: 70%;
        }
    }
    .preview-box {
        width: 40%;
    }
}
</style>