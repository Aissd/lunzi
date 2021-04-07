<template>
  <div class="container">
        <div class="components-bar">
            <p>switch按钮，关闭时有二次确认</p>
            <switch-confirm
                :switchModel= isSwitchOn
                confirmText="确认要关掉吗"
                :switchConfirm = switchConfirmFn
                :switchCancel= switchCancelFn
            >
            </switch-confirm>
        </div>
        <div class="components-bar">
            <validate-form
                :isInline="true"
                :validateForm="validateForm"
            >
            </validate-form>
        </div>
        <div class="ces-main">
            <search-form 
                labelWidth='80px' 
                :searchData="searchData"
                :searchComponents="searchComponents"
                :searchHandle="searchHandle">
            </search-form>
            <table-list 
                :isSelection="true"
                :isIndex="true"
                :tdList="tdList" 
                :thList="thList" 
                :tableHandles="tableHandles"
                :pagination="pagination">
            </table-list>
        </div>
    </div>
</template>

<script>
import SwitchConfirm from './components/SwitchConfirm.vue';
import SearchForm from './components/searchForm.vue';
import TableList from './components/TableList.vue';
import ValidateForm from './components/ValidateForm.vue';
export default {
    name: 'componentsPage',
    components: {
        SwitchConfirm,
        TableList,
        SearchForm,
        ValidateForm,
    },
    data() {
        let sexs = [
            { label: '男', value: 'M'}, {label: '女', value: 'F' }
        ];
        let sexProps = { label: 'label', value: 'value' };
        let intersts = [
            { label: '羽毛球', value: 'badminton' }, { label: '篮球', value: 'basketball' }
        ];
        let interstProps = { label: 'label', value: 'value' };
        return {
            isSwitchOn: false,
            // 查询表单
            searchData: {
                name: null,
                age: null,
                sex: null,
                interst: [],
            },
            searchComponents: [
                {type:'input',label:'姓名',prop:'name',width:'180px',change:row=>'',placeholder:'请输入姓名...'},
                {type:'input',label:'年龄',prop:'age',width:'180px',change:row=>'',placeholder:'请输入年龄...'},
                {type:'select',label:'性别',prop:'sex',width:'180px',options:sexs,props:sexProps,change:row=>'',placeholder:'请选择性别...'},
                {type:'checkbox',label:'爱好',width:'180px',prop:'interst',checkboxList:intersts,props:interstProps,change:row=> ''}
            ],
            searchHandle: [
                {label:'查询',type:'primary',handle:()=>this.onHandleSearchFn()},
                {label:'重置',type:'primary',handle:()=>this.onHandleResetFn()}
            ],
            tdList: [
                {name:'张三',age:'12',sex:'男',interst:'女'},
                {name:'筱华',age:'27',sex:'女',interst:'羽毛球'},
                {name:'张三',age:'12',sex:'男',interst:'女'},
                {name:'筱华',age:'27',sex:'女',interst:'羽毛球'},
                {name:'筱华',age:'27',sex:'女',interst:'羽毛球'},
                {name:'筱华',age:'27',sex:'女',interst:'羽毛球'},
                {name:'筱华',age:'27',sex:'女',interst:'羽毛球'}
            ],
            thList: [
                { label: '姓名', prop: 'name' },
                { label: '年龄', prop: 'age' },
                { label: '性别', prop: 'sex' },
                { label: '爱好', prop: 'interst' },
                { label: '操作', type: 'button', btnList: [
                    { type:'primary', label:'编辑', handle:(row) => this.onHandleUpdateFn(row) },
                    { type:'danger', label:'删除', handle:(row) => this.onHandleDeleteFn(row) }
                ]}
            ],
            tableHandles: [
                // { label:'新增', type:'primary', handle:() => this.onHandleAddFn() }
            ],
            pagination: {
                pageSize: 2,
                pageNum: 1,
                total: 8,
                handlePageNumChange: (args) => this.pageChangeFn(args),
                handlePageSizeChange: (args) => this.pageSizeChangeFn(args)
            },
            validateForm: {
                rules: {
                    areaName: [{ required: true, message: '请输入区域名称', trigger: 'blur' }]
                },
                components: [
                    { type: 'input', label: '区域名称：', prop: 'areaName', value: '', placeholder: '请输入区域名称', clearable: true, change: () => {} },
                    { type: 'textarea', label: '描述：', prop: 'areaContent', value: '', placeholder: '请输入区域描述内容', clearable: true, change: () => {} },
                ]
            },
        }
    },
    methods: {
        // 二次确认框 - 点击确定
        switchConfirmFn() {
            this.isSwitchOn = !this.isSwitchOn;
            console.log('switchConfirmFn', this.isSwitchOn);
        },
        // 二次确认框 - 点击取消
        switchCancelFn() {
            console.log('switchCancelFn', this.isSwitchOn);
        },
        // 表格 - 点击编辑
        onHandleUpdateFn(row) {
            console.log(row);
        },
        // 表格 - 点击删除
        onHandleDeleteFn(row) {
            console.log(row);
        },
        // 表格 - 点击新增
        onHandleAddFn() {
            console.log('点击新增');
        },
        // 搜索表单 - 点击查询
        onHandleSearchFn() {
            console.log('点击查询', this.searchData);
        },
        // 搜索表单 - 点击重置
        onHandleResetFn() {
            console.log('点击重置');
        },
        // 翻页
        pageChangeFn(currentPage) {
            console.log(currentPage);
        },
        // 切换页数
        pageSizeChangeFn(currentPage) {
            console.log(currentPage);
        },
    },
}
</script>

<style>
    .components-bar {
        margin-bottom: 10px;
    }
</style>