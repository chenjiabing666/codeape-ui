export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  addBtn:false,
  "searchMenuSpan": 6,
  editBtn:false,
  delBtn:false,
  viewBtn:true,
  "column": [
    {
      "type": "input",
      "label": "ID",
      "prop": "id",
      hide:true,
      display:false,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "患者id",
      hide:true,
      display:false,
      "prop": "patId"
    },
    {
      "type": "input",
      "label": "就诊流水号，终身唯一",
      "prop": "visitId",
      hide:true,
      display:false
    },
    {
      "type": "input",
      "label": "姓名",
      search:true,
      "prop": "patName"
    },
    {
      "type": "input",
      "label": "住院号",
      search:true,
      "prop": "iptNum"
    },
    {
      "type": "input",
      "label": "床号",
      "prop": "bedNum"
    },
    {
      "type": "input",
      "label": "转科时间",
      "prop": "transferTime"
    },
    {
      "type": "select",
      "label": "原科室",
      search:true,
      "prop": "oldDept",
      dicUrl: '/admin/dept/list',
      props:{
        label: 'name',
        value: 'deptId'
      }
    },
    {
      "type": "select",
      "label": "当前科室",
      "prop": "newDept",
      dicUrl: '/admin/dept/list',
      props:{
        label: 'name',
        value: 'deptId'
      }
    },
    {
      "type": "select",
      "label": "责任医生",
      "prop": "docId",
      dicUrl: '/admin/user/list/IN_HOS_DOC',
      props:{
        label: 'name',
        value: 'userId'
      }
    },
    {
      "type": "select",
      "label": "责任护士",
      "prop": "nurseId",
      dicUrl: '/admin/user/list/IN_HOS_NURSE',
      props:{
        label: 'name',
        value: 'userId'
      }
    }
  ]
}
