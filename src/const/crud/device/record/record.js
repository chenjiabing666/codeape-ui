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
      hide:true,
      "prop": "id",
      display: false,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "select",
      "label": "设备",
      search: true,
      "prop": "sn",
      dicUrl: '/device/device/hos/sn',
      dataType: 'string',
      props:{
        label: 'sn',
        value: 'sn'
      },
      rules: [{
        required: true, message: '请选择设备', trigger: 'change'
      }],
    },
    {
      "type": "select",
      search: true,
      "label": "科室",
      "prop": "deptId",
      formslot: true, slot: true,
      dicUrl: '/admin/dept/list',
      props:{
        label: 'name',
        value: 'deptId'
      }
    },
    {
      "type": "number",
      controls: true,
      "label": "质控值",
      "prop": "value"
    },
    {
      "type": "select",
      "label": "样本类型",
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
      "type": "select",
      "label": "质控结果",
      display:false,
      search: true,
      "prop": "result",
      dicData: [
        {
          label: '通过',
          value: '1'
        },
        {
          label: '不通过',
          value: '0'
        }
      ],
      props: {
        label: 'label',
        value: 'value'
      },
      dataType: 'number',
      value: '1'
    },
    {
      "type": "datetime",
      "label": "质控时间",
      "prop": "measureTime",
      format: 'YYYY-MM-DD HH:mm:ss',
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      rules: [{
        required: true, message: '请添加质控时间', trigger: 'blur'
      }],
    },
    {
      "type": "select",
      "label": "试纸",
      "prop": "paperId",
      hide: true
    },
    {
      "type": "select",
      "label": "质控液",
      "prop": "liquidId",
      hide: true
    },
    {
      "type": "input",
      "label": "操作人",
      "prop": "operatorName",
      display: false
    }
  ]
}
