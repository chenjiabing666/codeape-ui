

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/inhos/pat/page',
    method: 'get',
    params: query
  })
}

export function fetchOutList(query) {
  return request({
    url: '/inhos/pat/out/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/inhos/pat',
    method: 'post',
    data: obj
  })
}

export function leave(obj) {
  return request({
    url: '/inhos/pat/leave',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/inhos/pat/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/inhos/pat/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/inhos/pat',
    method: 'put',
    data: obj
  })
}

export function inObj(obj) {
  return request({
    url: '/inhos/pat/in',
    method: 'post',
    data: obj
  })
}
