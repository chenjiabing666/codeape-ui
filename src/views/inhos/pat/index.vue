
<template>
    <div class="execution">
        <basic-container>
            <avue-crud ref="crud"
                       v-model:page="page"
                       :data="tableData"
                       :permission="permissionList"
                       :table-loading="tableLoading"
                       :option="tableOption"
                       @on-load="getList"
                       @search-change="searchChange"
                       @refresh-change="refreshChange"
                       @size-change="sizeChange"
                       @current-change="currentChange"
                       @row-update="handleUpdate"
                       @row-save="handleSave"
                       @row-del="rowDel">
<!--                <template slot-scope="{type,size,row,index}" slot="menu">-->
<!--                    <el-button icon="el-icon-check" :size="size" :type="type" @click="tip(row,index)">出院</el-button>-->
<!--                </template>-->
                <template #menu="{row,index,size}">
                    <el-button
                            v-if="permissions.inhos_patinfo_leave"
                            text
                            type="primary"
                            :size="size"
                            @click="handleLeave(row,index)">出院
                    </el-button>
                </template>
            </avue-crud>

        </basic-container>
    </div>
</template>

<script>
    import {fetchList, getObj, addObj, putObj, delObj,leave} from '@/api/inhos/pat'
    import {tableOption} from '@/const/crud/inhos/pat'
    import {mapGetters} from 'vuex'

    export default {
        name: 'pat',
        data() {
            return {
                searchForm: {},
                tableData: [],
                page: {
                    total: 0, // 总页数
                    currentPage: 1, // 当前页数
                    pageSize: 20 // 每页显示多少条
                },
                tableLoading: false,
                tableOption: tableOption
            }
        },
        computed: {
            ...mapGetters(['permissions']),
            permissionList() {
                return {
                    addBtn: this.validData(this.permissions.inhos_patinfohot_add, false),
                    delBtn: this.validData(this.permissions.inhos_patinfohot_del, false),
                    editBtn: this.validData(this.permissions.inhos_patinfohot_edit, false)
                };
            }
        },
        methods: {
            handleLeave(row,index){
                this.$confirm('是否确认办理出院', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    return leave(row)
                }).then(data => {
                    this.$message.success('出院成功')
                    this.getList(this.page)
                }).catch(cancelorerror=>{})
            },
            getList(page, params) {
                this.tableLoading = true
                fetchList(Object.assign({
                    current: page.currentPage,
                    size: page.pageSize
                }, params, this.searchForm )).then(response => {
                    this.tableData = response.data.data.records
                    this.page.total = response.data.data.total
                    this.tableLoading = false
                }).catch(() => {
                    this.tableLoading=false
                })
            },
            rowDel: function (row, index) {
                this.$confirm('是否确认删除ID为' + row.id, '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(function () {
                    return delObj(row.id)
                }).then(data => {
                    this.$message.success('删除成功')
                    this.getList(this.page)
                }).catch(cancelorerror=>{})
            },
            handleUpdate: function (row, index, done,loading) {
                putObj(row).then(data => {
                    this.$message.success('修改成功')
                    done()
                    this.getList(this.page)
                }).catch(() => {
                    loading();
                });
            },
            handleSave: function (row, done,loading) {
                addObj(row).then(data => {
                    this.$message.success('添加成功')
                    done()
                    this.getList(this.page)
                }).catch(() => {
                    loading();
                });
            },
            sizeChange(pageSize){
                this.page.pageSize = pageSize
            },
            currentChange(current){
                this.page.currentPage = current
            },
            searchChange(form, done) {
                this.searchForm = form
                this.page.currentPage = 1
                this.getList(this.page, form)
                done()
            },
            refreshChange() {
                this.getList(this.page)
            }
        }
    }
</script>
