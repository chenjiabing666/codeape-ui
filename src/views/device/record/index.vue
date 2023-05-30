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
                       :before-open="handleOpenBefore"
                       @on-load="getList"
                       @search-change="searchChange"
                       @refresh-change="refreshChange"
                       @size-change="sizeChange"
                       @current-change="currentChange"
                       @row-update="handleUpdate"
                       @row-save="handleSave"
                       @row-del="rowDel">
                <template #deptId-form>
                    <avue-select
                            v-model="form.deptId"
                            placeholder="请选择所属科室"
                            :dic="treeDeptData"
                            :props="defaultProps"
                            @change="handleChange"
                    ></avue-select>
                </template>

                <template #paperId-form>
                    <avue-select
                            v-model="form.paperId"
                            placeholder="请选择试纸"
                            :dic="paperData"
                            :props="paperProps"
                             ref="mySelect"
                    ></avue-select>
                </template>

                <template #sampleType-form>
                    <avue-select
                            v-model="form.sampleType"
                            placeholder="请选择样本类型"
                            :dic="sampleTypeData"
                            :props="sampleTypeProps"
                            @change="handleSampleTypeChange"
                    ></avue-select>
                </template>

                <template #liquidId-form>
                    <avue-select
                            v-model="form.liquidId"
                            placeholder="请选择质控液"
                            :dic="liquidData"
                            :props="liquidProps"
                    ></avue-select>
                </template>
            </avue-crud>
        </basic-container>
    </div>
</template>

<script>
    import {fetchList, getObj, addObj, putObj, delObj} from '@/api/device/record/record'
    import {getObjByDeptId} from '@/api/device/paper/paper'
    import {getLiquidByDeptId} from '@/api/device/liquid/liquid'
    import { fetchTree,fetchDept} from '@/api/admin/dept'
    import {tableOption} from '@/const/crud/device/record/record'
    import {mapGetters} from 'vuex'

    export default {
        name: 'qcrecord',
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
                form: {},
                defaultProps: {
                    label: 'name',
                    value: 'deptId'
                },
                paperProps: {
                    label: 'batchNum',
                    value: 'id'
                },
                liquidProps: {
                    label: 'batchNum',
                    value: 'id'
                },
                treeDeptData: [],
                sampleTypeData:[
                    {
                        label: '血糖',
                        value: '1'
                    },
                    {
                        label: '血酮',
                        value: '2'
                    },
                    {
                        label: '尿酸',
                        value: '3'
                    },
                ],
                sampleTypeProps:{
                    label: 'label',
                    value: 'value'
                },
                paperData:[],
                liquidData:[]

            }
        },
        computed: {
            ...mapGetters(['permissions']),
            permissionList() {
                return {
                    addBtn: this.validData(this.permissions.device_qcrecord_add, false),
                    delBtn: this.validData(this.permissions.device_qcrecord_del, false),
                    editBtn: this.validData(this.permissions.device_qcrecord_edit, false)
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
                // 查询部门树
                fetchDept().then(response => {
                    this.treeDeptData = response.data.data
                })
                show()
            },
            handleChange(value){
                console.log("handleChange",value)
                //先清空选择的内容
                this.form.liquidId=null
                this.form.paperId=null
                if (value.value.trim()==='')
                    return;
                let params={
                    'deptId':value.value,
                    "sampleType":this.form.sampleType
                }
                //获取试纸
                getObjByDeptId(params).then(response => {
                    this.paperData = response.data.data
                })

                //获取质控液
                getLiquidByDeptId(params).then(response => {
                    let result= response.data.data
                    // 创建一个新的数组，将其中的第一个元素的 name 属性改为 "Alex"
                    let newArray = result.map((obj, index) => {
                        if(obj.type===1){
                            let str=obj.batchNum+'-'+'低浓度'
                            return {...obj, batchNum: str};
                        }else if(obj.type===2){
                            let str=obj.batchNum+'-'+'中浓度'
                            return {...obj, batchNum: str};
                        }else {
                            let str=obj.batchNum+'-'+'高浓度'
                            return {...obj, batchNum: str};
                        }
                    });
                    this.liquidData=newArray;
                })

            },
            handleSampleTypeChange(value){
                console.log("handleSampleTypeChange",value)
                //先清空选择的内容
                this.form.liquidId=null
                this.form.paperId=null
                if (value.value.trim()==='')
                    return;
                if (this.form.deptId==='')
                    return;
                let params={
                    'deptId':this.form.deptId,
                    "sampleType":value.value
                }
                //获取试纸
                getObjByDeptId(params).then(response => {
                    this.paperData = response.data.data
                })

                //获取质控液
                getLiquidByDeptId(params).then(response => {
                    let result= response.data.data
                    // 创建一个新的数组，将其中的第一个元素的 name 属性改为 "Alex"
                    let newArray = result.map((obj, index) => {
                        if(obj.type===1){
                            let str=obj.batchNum+'-'+'低浓度'
                            return {...obj, batchNum: str};
                        }else if(obj.type===2){
                            let str=obj.batchNum+'-'+'中浓度'
                            return {...obj, batchNum: str};
                        }else {
                            let str=obj.batchNum+'-'+'高浓度'
                            return {...obj, batchNum: str};
                        }
                    });
                    this.liquidData=newArray;
                })

            }
        },
    }
</script>
