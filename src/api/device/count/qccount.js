

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/device/qc/count/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/device/qc/count',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/device/qc/count/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/device/qc/count/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/device/qc/count',
    method: 'put',
    data: obj
  })
}
