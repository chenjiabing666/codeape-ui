

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/admin/warn/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/warn',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/admin/warn/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/admin/warn/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/warn',
    method: 'put',
    data: obj
  })
}
