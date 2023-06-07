export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  addBtn:false,
  editBtnText: '办理住院',
  editTitle: '办理住院',
  viewBtnText:"查看",
  viewBtn:true,
  delBtn:false,
  "searchMenuSpan": 6,
  "column": [
    {
      "type": "input",
      "label": "主键id",
      "prop": "id",
      display:false,
      hide:true,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "住院号",
      search: true,
      "prop": "iptNum",
      rules: [{
        required: true, message: '请填写住院号', trigger: 'blur'
      }]
    },
    {
      "type": "input",
      "label": "身份证号",
      hide:true,
      "prop": "idCard"
    },
    {
      "type": "input",
      "label": "姓名",
      search: true,
      "prop": "name",
      rules: [{
        required: true, message: '请填写姓名', trigger: 'blur'
      }]
    },
    {
      "type": "input",
      "label": "床号",
      "prop": "bedNum"
    },
    {
      "type": "input",
      "addDisplay": false,
      "label": "出院时间",
      "editDisabled": true,
      "prop": "leaveTime"
    },
    {
      "type": "datetime",
      "label": "入院时间",
      hide: true,
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      "prop": "iptTime",
      rules: [{
        required: true, message: '请选择入院时间', trigger: 'blur'
      }]
    },
    {
      label: '科室',type:"select", prop: 'deptId', formslot: true, slot: true,search: true,
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
      "label": "手机",
      hide:true,
      "prop": "phone"
    },
    {
      label: '性别',
      prop: 'gender',
      type: 'radio',
      slot: true,
      border: true,
      value: '1',
      dicUrl: '/admin/dict/key/sex_type',
      rules: [{
        required: true, message: '请选择性别', trigger: 'blur'
      }]
    },
    {
      "type": "date",
      hide: true,
      "label": "出生日期",
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      "prop": "birthday",
      rules: [{
        required: true, message: '请选择出生日期', trigger: 'blur'
      }]
    },
    {
      "type": "select",
      "label": "主治医生",
      "prop": "docId",
      hide: true,
      dicUrl: '/admin/user/list/IN_HOS_DOC',
      props:{
        label: 'name',
        value: 'userId'
      },
    },
    {
      "type": "select",
      "label": "责任护士",
      hide: true,
      "prop": "nurseId",
      dicUrl: '/admin/user/list/IN_HOS_NURSE',
      props:{
        label: 'name',
        value: 'userId'
      },
    },

    {
      "type": "input",
      hide: true,
      "label": "身高",
      "prop": "height"
    },
    {
      "type": "input",
      hide:true,
      "label": "体重",
      "prop": "weight"
    },
    {
      "type": "radio",
      hide: true,
      "label": "糖尿病类型",
      "prop": "diabetesType",
      border: true,
      dicUrl: '/admin/dict/key/diabetes_type',
    },
    {
      "type": "input",
      hide: true,
      "label": "入院诊断",
      "prop": "diagnosis"
    },
    {
      "type": "input",
      hide: true,
      "label": "腕带",
      "prop": "scanCode"
    }
  ]
}
