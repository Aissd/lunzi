<template>
    <div class="container">
        <el-form ref="vForm" :model="validateForm" :inline="isInline" class="demo-form-inline" :rules="validateForm.rules">
            <el-form-item v-for="(item, index) in validateForm.components" :label="item.label" :key="index" :prop="item.prop" :rules="item.rules">
                <!-- 输入框 -->
                <el-input
                    v-if="item.type === 'input'"
                    v-model="item.value"
                    :disabled="item.isDisabled && item.isDisabled(item)"
                    :clearable="item.clearable"
                    :placeholder="item.placeholder">
                </el-input>
                <!-- 文本域 -->
                <el-input
                    v-if="item.type === 'textarea'"
                    type="textarea"
                    v-model="item[item.prop]"
                    :disabled="item.isDisabled && item.isDisabled(item)"
                    :clearable="item.clearable"
                    :placeholder="item.placeholder">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onClickComfirm">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'validateForm',
    data() {
        return {
            validateForm: {
                rules: {
                    'areaName': [{ required: true, message: '请输入区域名称', trigger: 'blur' }]
                },
                components: [
                    { type: 'input', label: '区域名称：', prop: 'areaName', value: '', placeholder: '请输入区域名称', clearable: true, change: () => {} },
                    { type: 'textarea', label: '描述：', prop: 'areaContent', value: '', placeholder: '请输入区域描述内容', clearable: true, change: () => {} },
                ]
            },
        };
    },
    props: {
        isInline: {
            type: Boolean,
            default: true,
        },
        // validateForm: {
        //     type: Object,
        //     default: () => {},
        // },
    },
    mounted() {
        console.log(this.validateForm);
    },
    methods: {
        onClickComfirm() {
            this.$refs['vForm'].validate((valid) => {
                if (valid) {
                    console.log(this.validateForm);
                } else {
                    console.log(this.validateForm);
                    return false;
                }
            });
        },
    }
}
</script>

<style lang="scss" scoped>

</style>