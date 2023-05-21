/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the codeape4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */
import {isExist} from '@/api/admin/user'

export const validateUsername = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入用户名'))
    }
    const flag = new RegExp(/^([a-z\d]+?)$/).test(value)
    if (!flag) {
        callback(new Error('用户名支持小写英文、数字'))
    }

    if (window.boxType === 'edit') {
        return callback()
    }

    isExist({username: value}).then(response => {
        const result = response.data.data
        if (result) {
            return callback(new Error('用户名已经存在'))
        } else {
            return callback()
        }
    })
}

// 设置密码校验规则
export const checkPassword = (rule, value, callback) => {
    if (window.boxType === 'edit') {
        return callback()
    }
    if (!value) {
        callback(new Error('请输入密码'))
    } else if (value.length <= 6) {
        callback(new Error('请输入6位以上密码'))
    } else {
        callback()
    }
}

// 设置手机号的验证规则
export const checkPhone = (rule, value, callback) => {
    if (value) {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (!reg.test(value)) {
            return callback(new Error('请输入正确的电话'))
        }
    }

    if (window.boxType === 'edit') {
        return callback()
    }
    if(value){
        isExist({phone: value}).then(response => {
            const result = response.data.data
            if (result) {
                return callback(new Error('手机号已经存在'))
            } else {
                return callback()
            }
        })
    }

}

export const tableOption = {
    border: true,
    index: true,
    indexLabel: '序号',
    indexWidth: 60,
    stripe: true,
    menuAlign: 'center',
    searchMenuSpan: 6,
    dialogWidth: '50%',
    editBtn: false,
    delBtn: false,
    align: 'center',
    addBtn: false,
    column: [{
        fixed: true, label: 'id', prop: 'userId', span: 24, hide: true, editDisplay: false, addDisplay: false
    }, {
        fixed: true,
        label: '账号',
        prop: 'username',
        editDisabled: true,
        slot: true,
        search: true,
        span: 24,
        rules: [{
            required: true, message: '请输入账号'
        }, {
            min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'
        }, {validator: validateUsername, trigger: 'blur'}]
    }, {
        fixed: true,
        label: '姓名',
        prop: 'name',
        editDisabled: true,
        slot: true,
        search: true,
        span: 24,
        rules: [{
            required: true, message: '请输入姓名'
        }, {
            min: 1, max: 5, message: '长度在 1 到 5 个字符', trigger: 'blur'
        }]
    },{
        label: '性别',
        prop: 'gender',
        type: 'radio',
        slot: true,
        border: true,
        span: 24,
        value: '1',
        dicUrl: '/admin/dict/key/sex_type',
        rules: [{
            required: true, message: '请选择性别', trigger: 'blur'
        }]
    },{
        label: '密码',
        prop: 'password',
        type: 'password',
        value: '',
        hide: true,
        span: 24,
        rules: [{validator: checkPassword, trigger: 'blur'}]
    }, {
        label: '所属科室',type:"select", prop: 'deptId', formslot: true, slot: true, span: 24,search: true,
        dicUrl: '/admin/dept/list',
        props:{
            label: 'name',
            value: 'deptId'
        },
        rules: [{
            required: true, message: '请选择科室', trigger: 'change'
        }],
    }, {
        label: '手机号', prop: 'phone', value: '', span: 24
        //todo：未知原因，加上这行代码走不通，暂时注释
        // , rules: [{validator: checkPhone, trigger: 'blur'}]
    }, {
        label: '角色', prop: 'role', formslot: true, slot: true, overHidden: true, span: 24, hide:true,rules: [{
            required: true, message: '请选择角色', trigger: 'blur'
        }]
    }, {
        label: '科室', prop: 'deptName', overHidden: true, addDisplay: false, editDisplay: false, span: 24,
    }, {
        label: '职称', prop: 'post', width: 168, overHidden: true, formslot: true, slot: true, span: 24, rules: [{
            required: true, message: '请选择职称', trigger: 'blur'
        }]
    },{
        label: '科室权限', prop: 'auth', width: 168, overHidden: true, formslot: true, slot: true, span: 24,hide:true, rules: [{
            required: true, message: '请选择科室权限', trigger: 'blur'
        }]
    }, {
        label: '状态',
        prop: 'lockFlag',
        type: 'radio',
        slot: true,
        border: true,
        span: 24,
        value: '0',
        dicUrl: '/admin/dict/key/user_lock_flag',
        rules: [{
            required: true, message: '请选择状态', trigger: 'blur'
        }]
    }, {
        width: 120,
        label: '创建时间',
        prop: 'createTime',
        type: 'datetime',
        format: 'YYYY-MM-DD',
        editDisabled: true,
        addDisplay: false,
        span: 24
    }]
}
