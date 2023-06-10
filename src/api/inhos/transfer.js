

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/inhos/pat/transfer/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/api/pattransfer',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/inhos/pat/transfer/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/inhos/pat/transfer/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/api/pattransfer',
    method: 'put',
    data: obj
  })
}
