export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  "searchMenuSpan": 6,
  delBtn:false,
  "column": [
    {
      "type": "input",
      "label": "id",
      "prop": "id",
      hide:true,
      display:false,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "select",
      "label": "使用方",
      search:true,
      "prop": "inHos",
      dicData: [
        {
          label: '住院',
          value: '0'
        },
        {
          label: '院外',
          value: '1'
        },
        {
          label: '门诊',
          value: '2'
        },
        {
          label: '体检',
          value: '3'
        }
      ],
      props: {
        label: 'label',
        value: 'value'
      },
      dataType: 'number',
      value: '0'
    },
    {
      "type": "number",
      "label": "预警低值",
      "prop": "valueDown"
    },
    {
      "type": "number",
      "label": "预警高值",
      "prop": "valueUp"
    },

    {
      "type": "select",
      "label": "模块",
      search: true,
      "prop": "model",
      dicData: [
        {
          label: '血糖',
          value: '1'
        },
        {
          label: '尿酸',
          value: '2'
        },
        {
          label: '血酮',
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
      label: '性别',
      prop: 'gender',
      type: 'select',
      slot: true,
      border: true,
      dicUrl: '/admin/dict/key/sex_type'
    },
  ]
}
