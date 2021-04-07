<template>
    <el-container style="height: 500px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-message"></i>导航一
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                    </el-submenu>
                </el-submenu>
            </el-menu>
        </el-aside>

        <el-container>
            <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                    <i class="el-icon-setting" style="margin-right: 15px"></i>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>查看</el-dropdown-item>
                        <el-dropdown-item>新增</el-dropdown-item>
                        <el-dropdown-item>删除</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
            </el-header>

            <el-main>
                <el-table :data="tableData">
                    <el-table-column prop="date" label="日期" width="140"></el-table-column>
                    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                    <el-table-column prop="address" label="地址"></el-table-column>
                </el-table>
                <el-row>
                    <el-col :span="24">
                        <el-form label-width="80px">
                            <el-form-item label="输入框">
                                <el-input></el-input>
                            </el-form-item>
                            <el-form-item label="时间">
                                <el-time-select :picker-options="{ start: '08:30', step: '00:15', end: '18:30'}" placeholder="选择时间"></el-time-select>
                            </el-form-item>
                            <el-form-item label="日期时间">
                                <el-date-picker type="datetime" placeholder="选择日期时间"></el-date-picker>
                            </el-form-item>
                            <el-form-item label="下拉框">
                                  <el-select placeholder="请选择" value="1">
                                    <el-option label="可乐" value="1"></el-option>
                                    <el-option label="珍珠奶茶" value="2"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </el-col>
                    <el-col :span="24">
                        <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
	export default {
		data() {
			const item = {
				date: "2016-05-02",
				name: "王小虎",
				address: "上海市普陀区金沙江路 1518 弄"
			};
			return {
				tableData: Array(6).fill(item)
			};
		}
	};
</script>

<style lang="scss" scoped>
	.el-header {
		background-color: #b3c0d1;
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}
</style>