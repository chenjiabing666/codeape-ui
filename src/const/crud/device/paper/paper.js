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
      display:false,
      "hide":true,
      "addDisplay": false,
      "editDisabled": true,
      "label": "id",
      "prop": "id"

    },
    {
      "type": "input",
      display:false,
      "hide":true,
      "addDisplay": false,
      "editDisabled": true,
      "label": "医院id",
      "prop": "hosId"
    },
    {
      "type": "input",
      "label": "批号",
      span:10,
      "prop": "batchNum",
      rules: [{
        required: true, message: '请添加批号', trigger: 'blur'
      }],
    },
    {
      "type": "select",
      "label": "规格",
      span:10,
      "prop": "specs",
      dicData: [
        {
          label: '10片/瓶',
          value: '1'
        },
        {
          label: '25片/瓶',
          value: '2'
        },
        {
          label: '50片/瓶',
          value: '3'
        },
        {
          label: '100片/瓶',
          value: '4'
        }
      ],
      props: {
        label: 'label',
        value: 'value'
      },
      dataType: 'number',
      value: '3'
    },
    {
      "type": "number",
      controls: true,
      span:10,
      "label": "数量",
      "prop": "paperNum"
    },
    {
      "type": "select",
      search: true,
      span:10,
      "label": "科室",
      "prop": "deptId",
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
      "type": "date",
      "label": "生产日期",
      span:10,
      "prop": "productionDate",
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      rules: [{
        required: true, message: '请添加生产日期', trigger: 'blur'
      }],
    },
    {
      "type": "date",
      "label": "过期时间",
      span:10,
      "prop": "expiryDate",
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      rules: [{
        required: true, message: '请添过期时间', trigger: 'blur'
      }],
    },
    {
      "type": "select",
      "label": "试纸类型",
      span:10,
      "prop": "sampleType",
      dicData: [
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
      props: {
        label: 'label',
        value: 'value'
      },
      dataType: 'number',
      value: '1'
    },
    {
      "type": "number",
      span:10,
      controls: true,
      "hide":true,
      "label": "低浓度上限",
      "prop": "lowMaxLimit",
      rules: [{
        required: true, message: '请添加低浓度上限',trigger: 'blur'
      }],
    },
    {
      "type": "number",
      controls: true,
      span:10,
      "hide":true,
      "label": "低浓度下限",
      "prop": "lowMinLimit",
      rules: [{
        required: true,message: '请添加低浓度下限', trigger: 'blur'
      }],
    },
    {
      "type": "number",
      span:10,
      controls: true,
      "label": "中浓度上限",
      "hide":true,
      "prop": "mediumMaxLimit",
      rules: [{
        required: true, message: '请添加中浓度上限',trigger: 'blur'
      }],
    },
    {
      "type": "number",
      controls: true,
      span:10,
      "hide":true,
      "label": "中浓度下限",
      "prop": "mediumMinLimit",
      rules: [{
        required: true, message: '请添加中浓度下限',trigger: 'blur'
      }],
    },
    {
      "type": "number",
      controls: true,
      span:10,
      "hide":true,
      "label": "高浓度上限",
      "prop": "highMaxLimit",
      rules: [{
        required: true, message: '请添加高浓度上限',trigger: 'blur'
      }],
    },
    {
      "type": "number",
      controls: true,
      "hide":true,
      "label": "高浓度下限",
      span:10,
      "prop": "highMinLimit",
      rules: [{
        required: true, message: '请添加高浓度下限',trigger: 'blur'
      }],
    },
    {
      "type": "input",
      "label": "入库人",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "prop": "enterName"
    },
    {
      "type": "input",
      "label": "0-正常，1-删除",
      display:false,
      "hide":true,
      "addDisplay": false,
      "editDisabled": true,
      "prop": "delFlag"
    },
    {
      "type": "input",
      "label": "创建时间",
      "prop": "createTime",
      "addDisplay": false,
      "editDisabled": true,
      display:false,
      "hide":true
    },
    {
      "type": "input",
      "label": "修改时间",
      "prop": "updateTime",
      display:false,
      "hide":true,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "创建者",
      "prop": "createBy",
      display:false,
      "hide":true,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "更新人",
      "prop": "updateBy",
      display:false,
      "hide":true,
      "addDisplay": false,
      "editDisabled": true
    }
  ]
}
