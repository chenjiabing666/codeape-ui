

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/admin/systimetype/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/systimetype',
    method: 'post',
    data: obj
  })
}

export function clearSysTimeTypeCache() {
  return request({
    url: '/admin/systimetype/clear',
    method: 'delete'
  })
}

export function getObj(id) {
  return request({
    url: '/admin/systimetype/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/admin/systimetype/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/systimetype',
    method: 'put',
    data: obj
  })
}
