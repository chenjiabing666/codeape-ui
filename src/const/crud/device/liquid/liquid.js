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
      display:false,
      hide:true,
      "prop": "id",
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "质控液批号",
      "prop": "batchNum"
    },
    {
      "type": "select",
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
      "type": "number",
      "label": "数量",
      controls: true,
      "prop": "liquidNum"
    },
    {
      "type": "select",
      "label": "规格",
      "prop": "specs",
      dicData: [
        {
          label: '2ml',
          value: '1'
        },
        {
          label: '5ml',
          value: '2'
        },
        {
          label: '10ml',
          value: '3'
        },
        {
          label: '15ml',
          value: '4'
        },
        {
          label: '20ml',
          value: '5'
        }
      ],
      props: {
        label: 'label',
        value: 'value'
      },
      dataType: 'number',
      value: '2'
    },
    {
      "type": "select",
      "label": "浓度",
      "prop": "type",
      dicData: [
        {
          label: '低浓度',
          value: '1'
        },
        {
          label: '中浓度',
          value: '2'
        },
        {
          label: '高浓度',
          value: '3'
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
      "type": "date",
      "label": "生产日期",
      "prop": "productionDate",
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      rules: [{
        required: true, message: '请添生产日期', trigger: 'blur'
      }],
    },
    {
      "type": "date",
      "label": "过期时间",
      "prop": "expiryDate",
      format: 'YYYY-MM-DD',
      valueFormat: 'YYYY-MM-DD',
      rules: [{
        required: true, message: '请添过期时间', trigger: 'blur'
      }],
    },
    {
      "type": "input",
      "label": "入库人",
      "prop": "enterName"
    },
  ]
}
