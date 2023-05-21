import {validateUsername} from "./user";

export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  "column": [
    {
      "type": "input",
      "label": "id",
      "prop": "id",
      "addDisplay": false,
      "editDisabled": true,
      'hide':true
    },
    {
      "type": "input",
      "label": "医院名称",
      "prop": "name",
      "search":true,
      rules: [{
        required: true, message: '请输入医院名称'
      }]
    },
    {
      "type": "input",
      "label": "医院地址",
      "prop": "address",
      rules: [{
        required: true, message: '请输入医院地址'
      }]
    },
    {
      "type": "input",
      "label": "医院等级",
      "prop": "level",
      rules: [{
        required: true, message: '请输入医院等级'
      }]
    },
    {
      "type": "input",
      "label": "管理员账号",
      "prop": "username",
      rules: [{
        required: true, message: '请输入管理员账号'
      }, {
        min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'
      }]
    },
    {
      "type": "input",
      "label": "联系人",
      "prop": "contacts",
      rules: [{
        required: true, message: '请输入联系人'
      }]
    },
    {
      "type": "input",
      "label": "联系人电话",
      "prop": "contactsPhone",
      rules: [{
        required: true, message: '请输入联系人电话'
      }]
    },
    // {
    //   "type": "input",
    //   "label": "删除标记",
    //   "prop": "delFlag",
    //   'hide':true,
    //   "addDisplay": false,
    //   "editDisabled": true,
    // },
    {
      "type": "input",
      "label": "创建时间",
      "prop": "createTime",
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "创建人",
      "prop": "createBy",
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "更新人",
      "prop": "updateBy",
      "addDisplay": false,
      "editDisabled": true,
      'hide':true
    },
    {
      "type": "input",
      "label": "更新时间",
      "prop": "updateTime",
      "addDisplay": false,
      "editDisabled": true,
      'hide':true
    }
  ]
}
