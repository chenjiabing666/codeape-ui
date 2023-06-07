export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  addBtn:false,
  viewBtnText:"查看",
  viewBtn:true,
   menu:false,
  printBtn:true,
  "column": [
    {
      "type": "input",
      "label": "id",
      hide:true,
      "prop": "id",
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "select",
      search: true,
      "label": "科室",
      "prop": "deptId",
      // dataType: 'number',
      dicUrl: '/admin/dept/list',
      props:{
        label: 'name',
        value: 'deptId'
      },
      rules: [{
        required: true, message: '请选择科室', trigger: 'change'
      }],
    },
    {
      "type": "input",
      "label": "质控总数",
      "prop": "qcTotal"
    },
    {
      "type": "input",
      "label": "不通过次数",
      "prop": "noTotal"
    },
    {
      "type": "input",
      "label": "通过次数",
      "prop": "yesTotal"
    },
    {
      "type": "input",
      "label": "成功率",
      "prop": "yesRate"
    },
    {
      "type": "input",
      "label": "最后质控时间",
      "prop": "lastQcTime"
    }
  ]
}
