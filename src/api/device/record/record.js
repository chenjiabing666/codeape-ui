

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/device/qc/record/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/device/qc/record',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/device/qc/record/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/device/qc/record/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/device/qc/record',
    method: 'put',
    data: obj
  })
}
