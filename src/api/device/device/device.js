

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/device/device/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/device/device',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/device/device/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/device/device/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/device/device',
    method: 'put',
    data: obj
  })
}
