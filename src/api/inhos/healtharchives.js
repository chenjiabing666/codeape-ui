

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/inhos/health/archives/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/inhos/health/archives',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/inhos/health/archives/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/inhos/health/archives/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/inhos/health/archives',
    method: 'put',
    data: obj
  })
}
