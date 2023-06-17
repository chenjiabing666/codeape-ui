
<template>
    <div class="execution">
        <basic-container>
            <avue-crud ref="crud"
                       v-model="form"
                       v-model:page="page"
                       :data="tableData"
                       :permission="permissionList"
                       :table-loading="tableLoading"
                       :option="tableOption"
                       @on-load="getList"
                       :before-open="handleOpenBefore"
                       @search-change="searchChange"
                       @refresh-change="refreshChange"
                       @size-change="sizeChange"
                       @current-change="currentChange"
                       @row-update="handleUpdate"
                       @row-save="handleSave"
                       @row-del="rowDel">
<!--                <template #patId="scope">-->
<!--                      <span>-->
<!--                        <el-tag>{{form.patName}}</el-tag>&nbsp;&nbsp;-->
<!--                      </span>-->
<!--                </template>-->
                <template #patId-form>
                    <avue-select
                            v-model="form.patId"
                            placeholder="请选择患者"
                            :dic="patOptions"
                            :props="patProps"
                    ></avue-select>
                </template>

                <template #timeType-form>
                    <avue-select
                            v-model="form.timeType"
                            placeholder="请选择时间段"
                            :dic="timeTypeOptions"
                            :props="timeTypesProps"
                    ></avue-select>
                </template>
            </avue-crud>
        </basic-container>
    </div>
</template>

<script>
    import {fetchList, getObj, addObj, putObj, delObj} from '@/api/inhos/healtharchives'
    import {fetchList as fetchPathList} from '@/api/inhos/pat'
    import {fetchList as fetchTimeTypeList} from '@/api/admin/systimetype'
    import {tableOption} from '@/const/crud/inhos/healtharchives'
    import {mapGetters} from 'vuex'

    export default {
        name: 'healtharchives',
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
                tableOption: tableOption,
                pats:[],
                patOptions: [],
                patProps:{
                    label: 'name',
                    value: 'id'
                },
                timeTypes:[],
                timeTypeOptions: [],
                timeTypesProps:{
                    label: 'name',
                    value: 'name'
                },
                form: {},
            }
        },
        computed: {
            ...mapGetters(['permissions']),
            permissionList() {
                return {
                    addBtn: this.validData(this.permissions.api_healtharchives_add, false),
                    delBtn: this.validData(this.permissions.api_healtharchives_del, false),
                    editBtn: this.validData(this.permissions.api_healtharchives_edit, false)
                };
            }
        },
        methods: {
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
                addObj(this.form).then(data => {
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
            },
            handleOpenBefore(show, type) {
                window.boxType = type
                // 查询患者
                fetchPathList(Object.assign({
                    current: 1,
                    size: -1
                })).then(response => {
                    this.patOptions=response.data.data.records;
                    console.log("patOptions=",this.patOptions)
                })

                fetchTimeTypeList(Object.assign({
                    current: 1,
                    size: -1
                }),{"inHos":1}).then(response => {
                    this.timeTypeOptions=response.data.data.records;
                    console.log("timeTypeOptions=",this.timeTypeOptions)
                })
                // 若是编辑、查看回显角色名称
                if (['edit', 'views'].includes(type)) {
                    // this.pats = []
                    // for (let i = 0; i < this.form.patList.length; i++) {
                    //     this.pats[i] = this.form.patList[i].id
                    // }
                    //
                    // this.timeTypes = []
                    // for (let i = 0; i < this.form.timeTypeList.length; i++) {
                    //     this.timeTypes[i] = this.form.timeTypeList[i].id
                    // }
                } else if (type === 'add') {
                    // 若是添加角色列表设置为空
                    this.pats = []
                    this.timeTypes = []
                }
                show()
            },
        }
    }
</script>
