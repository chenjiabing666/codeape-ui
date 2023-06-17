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
    },
    {
      "type": "select",
      "label": "患者",
      hide: true,
      "prop": "patId",overHidden: true, formslot: true, slot: true
    },
    {
      "type": "input",
      "label": "姓名",
      display: false,
      "prop": "patName"
    },
    {
      "type": "input",
      display:false,
      "label": "住院号",
      "prop": "iptNum"
    },
    {
      "type": "select",
      "label": "时段名称",
      "prop": "timeType",overHidden: true, formslot: true, slot: true
    },
    {
      "type": "number",
      "label": "目标上限",
      "prop": "valueUp"
    },
    {
      "type": "number",
      "label": "目标下限",
      "prop": "valueDown"
    },
  ]
}
