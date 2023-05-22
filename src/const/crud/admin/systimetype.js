import {checkPassword} from "./user";
// 设置数字判断规则
export const isNumber = (rule, value, callback) => {
  if(!value){
    callback()
  }else if (!Number.isNaN(parseFloat(value))) {
    callback()
  } else {
    callback(new Error(rule.message))
  }
}

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
       hide:true,
      display:false
    },
    {
      "type": "input",
      "label": "医院id",
      "prop": "hosId",
      "addDisplay": false,
      "editDisabled": true,
      hide: true,
      display:false
    },
    {
      "type": "input",
      "label": "时段名称",
      "prop": "name",
      rules:[
        {
          required: true,
          message: '请输入时段名称',
          trigger: 'blur'
        }
      ]
    },
    {
      "type": "input",
      "label": "时段范围",
      "prop": "timeScope",
      "addDisplay": false,
      "editDisabled": true,
       display:false
    },
    {
      "type": "time",
      hide: true,
      "format":"HH:mm",
      "valueFormat":"HH:mm",
      "label": "开始时间",
      "prop": "startTime"
    },
    {
      "type": "time",
      hide: true,
      "format":"HH:mm",
      "valueFormat":"HH:mm",
      "label": "结束时间",
      "prop": "endTime"
    },
    {
      "type": "input",
      "label": "低值",
      "prop": "valueDown",
      rules: [{validator: isNumber, message:"必须是数字", trigger: 'blur'}]
    },
    {
      "type": "input",
      "label": "高值",
      "prop": "valueUp",
      rules: [{validator: isNumber, message:"必须是数字", trigger: 'blur'}]
    },
    {
      "type": "input",
      "label": "排序",
      "prop": "priority",
      rules:[
        {
          required: true,
          message: '请输入排序号',
          trigger: 'blur'
        }
      ]
    },
    {
      "type": "input",
      "label": "备注",
        hide: true,
      "prop": "remark",
      "addDisplay": false,
      "editDisabled": true,
      display:false
    },
    {
      "type": "radio",
      search:true,
       dicUrl: '/admin/dict/key/blood_time_type',
      "label": "类型",
      "prop": "type",
        value:'1',
        rules:[
          {
            required: true,
            message: '请选择对应的类型',
            trigger: 'blur'
          }
        ]
      },
    {
      "type": "input",
      "label": "1餐前,0 餐后",
      hide: true,
      "prop": "mealTimeType",
      "addDisplay": false,
      "editDisabled": true,
      display:false
    },
    {
      "type": "radio",
      search:true,
      dicUrl: '/admin/dict/key/blood_time_model',
      "label": "模块",
      value:'1',
      "prop": "inHos",
        rules:[
        {
          required: true,
          message: '请选择对应的模块',
          trigger: 'blur'
        }
      ]

    }
  ]
}
