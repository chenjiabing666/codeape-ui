

import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/admin/syshospital/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/admin/syshospital',
    method: 'post',
    data: obj
  })
}

export const fetchHos = (username) => {
  return request({
    url: '/admin/syshospital/listByUserName/'+username,
    method: 'get'
  })
}

export function getObj(id) {
  return request({
    url: '/admin/syshospital/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/admin/syshospital/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/admin/syshospital',
    method: 'put',
    data: obj
  })
}
