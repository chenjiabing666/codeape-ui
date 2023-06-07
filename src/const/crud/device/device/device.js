import {validateUsername} from "../../admin/user";

export const tableOption = {
  "border": true,
  "index": true,
  "indexLabel": "序号",
  "stripe": true,
  "menuAlign": "center",
  "align": "center",
  viewBtnText:"查看",
  viewBtn:true,
  "searchMenuSpan": 6,
  "column": [
    {
      "type": "input",
      //弹框不显示
       display:false,
      "label": "id",
      "prop": "id",
      "hide":true,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      display:false,
      "label": "hosId",
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "hosId"
    },
    {
      "type": "input",
       search: true,
      "label": "SN号",
      "prop": "sn",
      rules: [{
        required: true, message: '请添加设备号', trigger: 'blur'
      },{
        min: 11, max: 11, message: '长度在 11 个字符', trigger: 'blur'
      }],
    },
    {
      "type": "input",
      "label": "GSM设备Imei号",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "imei"
    },
    {
      "type": "input",
      "label": "设备类型",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "deviceType"
    },
    {
      "type": "input",
      "label": "POCT编号",
      "prop": "poctNum"
    },
    {
      "type": "input",
      "label": "型号",
      display:false,
      "prop": "productName",
      "addDisplay": false,
      "editDisabled": true,
    },
    {
      "type": "input",
      "label": "app版本信息",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "appVersion"
    },
    {
      "type": "input",
      "label": "设备主板软件信息",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "biosVersion"
    },
    {
      "type": "input",
      "label": "设备的IP地址",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "ip"
    },
    {
      "type": "input",
      "label": "入库人",
      "addDisplay": false,
      "editDisabled": true,
      display: false,
      "prop": "enterName"
    },
    {
      "type": "input",
      "label": "入库时间",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "prop": "enterTime"
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
      "type": "select",
      "label": "关联科室",
      "prop": "deptAuths",
      multiple: true,
      drag: true,
      hide: true,
      dicUrl: '/admin/dept/list',
      props:{
        label: 'name',
        value: 'deptId'
      },
    },
    {
      "type": "select",
      "label": "上传备份库",
      "hide":true,
      "prop": "enableDb",
      dicData: [
        {
          label: '否',
          value: '0'
        },
        {
          label: '是',
          value: '1'
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
      "type": "select",
      "label": "状态",
      "prop": "devStatus",
      dicData: [
        {
          label: '正常',
          value: '0'
        },
        {
          label: '报修',
          value: '1'
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
      "type": "input",
      "label": "报修备注",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "comment"
    },
    {
      "type": "input",
      "label": "设备绑定模块，0.全部，1.住院，2.门诊，3.体检",
      "addDisplay": false,
      display:false,
      "editDisabled": true,
      "hide":true,
      "prop": "bindModule"
    },
    {
      "type": "select",
      "label": "设备使用",
      "hide":true,
      multiple: true,
      drag: true,
      "prop": "devAuthId",
      dicData: [
        {
          label: '血糖检测',
          value: '0'
        },
        {
          label: '血酮检测',
          value: '1'
        },
        {
          label: '尿酸检测',
          value: '2'
        },
        {
          label: '住院',
          value: '3'
        },
        {
          label: '门诊',
          value: '4'
        },
        {
          label: '体检',
          value: '5'
        }
      ],
      props: {
        label: 'label',
        value: 'value'
      },
      value: ['0','3'],
      rules: [{
        required: true, message: '请选择用处', trigger: 'change'
      }],

    },
    {
      "type": "input",
      "label": "检测次数",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "prop": "checkTotal"
    },
    {
      "type": "input",
      "label": "质控次数",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "qcTotal"
    },
    {
      "type": "input",
      "label": "最后检测时间",
      "addDisplay": false,
      display:false,
      "editDisabled": true,
      "prop": "lastCheckTime"
    },
    {
      "type": "input",
      "label": "最后质控时间",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "prop": "lastQcTime"
    },
    {
      "type": "input",
      "label": "9801有线ip",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "lanIp"
    },
    {
      "type": "input",
      "label": "9801有线mac",
      display:false,
      "addDisplay": false,
      "editDisabled": true,
      "hide":true,
      "prop": "lanMac"
    },
    {
      "type": "input",
      "label": "9801无线IP",
      "addDisplay": false,
      display:false,
      "editDisabled": true,
      "hide":true,
      "prop": "wifiIp"
    },
    {
      "type": "input",
      "label": "9801无线mac",
      "addDisplay": false,
      display:false,
      "editDisabled": true,
      "hide":true,
      "prop": "wifiMac"
    },
    {
      "type": "input",
      "label": "删除标记  -1：已删除  0：正常",
      "addDisplay": false,
      display:false,
      "editDisabled": true,
      "hide":true,
      "prop": "delFlag"
    },
    {
      "type": "input",
      "label": "创建时间",
      display:false,
      "prop": "createTime",
      "hide":true,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "创建人",
      "hide":true,
      "prop": "createBy",
      display:false,
      "addDisplay": false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "修改时间",
      "prop": "updateTime",
      "hide":true,
      "addDisplay": false,
      display:false,
      "editDisabled": true
    },
    {
      "type": "input",
      "label": "更新人",
      display:false,
      "hide":true,
      "prop": "updateBy",
      "addDisplay": false,
      "editDisabled": true
    }
  ]
}
