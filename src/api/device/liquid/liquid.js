
import request from '@/router/axios'

export function fetchList(query) {
  return request({
    url: '/device/liquid/page',
    method: 'get',
    params: query
  })
}

export function addObj(obj) {
  return request({
    url: '/device/liquid',
    method: 'post',
    data: obj
  })
}

export function getLiquidByDeptId(obj) {
  return request({
    url: '/device/liquid/deptId',
    method: 'post',
    data: obj
  })
}

export function getObj(id) {
  return request({
    url: '/device/liquid/' + id,
    method: 'get'
  })
}

export function delObj(id) {
  return request({
    url: '/device/liquid/' + id,
    method: 'delete'
  })
}

export function putObj(obj) {
  return request({
    url: '/device/liquid',
    method: 'put',
    data: obj
  })
}
